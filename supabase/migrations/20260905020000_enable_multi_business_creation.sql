-- =====================================================================
-- UFBC AGRODEALER - MULTI-BUSINESS CREATION & ONBOARDING DATABASE MIGRATION
-- Enables dynamic creation of new agrodealer businesses, independent owners,
-- branches, and staff with full database security and RLS policies.
-- =====================================================================

-- 1. Remove any single-owner constraint to allow multiple business owners
DROP INDEX IF EXISTS public.user_roles_one_primary_owner;

-- 2. Relax the primary owner trigger protection so owners can manage their setup
CREATE OR REPLACE FUNCTION public.protect_primary_owner()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Allow owners to manage roles and account deletions cleanly
  RETURN COALESCE(NEW, OLD);
END;
$$;

-- 3. Comprehensive handle_new_user trigger supporting new business registration
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  reg_account_type TEXT;
  b_name TEXT;
  br_name TEXT;
  b_phone TEXT;
  b_address TEXT;
  new_branch_id UUID;
  user_full_name TEXT;
BEGIN
  b_name := TRIM(COALESCE(NEW.raw_user_meta_data->>'business_name', ''));
  br_name := TRIM(COALESCE(NEW.raw_user_meta_data->>'branch_name', ''));
  b_phone := TRIM(COALESCE(NEW.raw_user_meta_data->>'phone', ''));
  b_address := TRIM(COALESCE(NEW.raw_user_meta_data->>'business_address', ''));
  reg_account_type := LOWER(TRIM(COALESCE(NEW.raw_user_meta_data->>'account_type', '')));
  user_full_name := TRIM(COALESCE(NEW.raw_user_meta_data->>'full_name', ''));

  -- Insert profile
  INSERT INTO public.profiles(id, full_name, phone)
  VALUES (
    NEW.id,
    COALESCE(user_full_name, ''),
    NULLIF(b_phone, '')
  )
  ON CONFLICT (id) DO UPDATE SET
    full_name = CASE
      WHEN EXCLUDED.full_name <> '' THEN EXCLUDED.full_name
      ELSE public.profiles.full_name
    END,
    phone = COALESCE(EXCLUDED.phone, public.profiles.phone);

  -- New Business Owner registration
  IF reg_account_type IN ('business_owner', 'owner', 'business') OR b_name <> '' THEN
    INSERT INTO public.user_roles(user_id, role, is_primary_owner)
    VALUES (
      NEW.id,
      'owner'::public.app_role,
      TRUE
    )
    ON CONFLICT (user_id) DO UPDATE SET
      role = 'owner'::public.app_role,
      is_primary_owner = TRUE;

    -- Automatically provision the business's main branch
    IF b_name <> '' OR br_name <> '' THEN
      INSERT INTO public.branches(name, phone, address, status)
      VALUES (
        CASE
          WHEN br_name <> '' THEN br_name
          WHEN b_name <> '' THEN b_name || ' - Main Branch'
          ELSE 'Main Branch'
        END,
        NULLIF(b_phone, ''),
        NULLIF(b_address, ''),
        TRUE
      )
      RETURNING id INTO new_branch_id;

      UPDATE public.user_roles
      SET branch_id = new_branch_id
      WHERE user_id = NEW.id;
    END IF;
  ELSE
    -- Worker or Staff registration
    INSERT INTO public.user_roles(user_id, role, is_primary_owner)
    VALUES (
      NEW.id,
      'manager'::public.app_role,
      FALSE
    )
    ON CONFLICT (user_id) DO NOTHING;
  END IF;

  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
AFTER INSERT ON auth.users
FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- 4. Dedicated RPC to register & configure business workspace
CREATE OR REPLACE FUNCTION public.register_business_setup(
  p_business_name TEXT,
  p_branch_name TEXT,
  p_phone TEXT,
  p_address TEXT
)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  uid UUID := auth.uid();
  new_branch_id UUID;
  existing_branch_id UUID;
  clean_b_name TEXT := TRIM(COALESCE(p_business_name, ''));
  clean_br_name TEXT := TRIM(COALESCE(p_branch_name, ''));
  clean_phone TEXT := TRIM(COALESCE(p_phone, ''));
  clean_addr TEXT := TRIM(COALESCE(p_address, ''));
BEGIN
  IF uid IS NULL THEN
    RAISE EXCEPTION 'Not authenticated' USING ERRCODE = 'insufficient_privilege';
  END IF;

  -- Ensure user has owner role
  INSERT INTO public.user_roles(user_id, role, is_primary_owner)
  VALUES (uid, 'owner'::public.app_role, TRUE)
  ON CONFLICT (user_id) DO UPDATE SET
    role = 'owner'::public.app_role,
    is_primary_owner = TRUE;

  -- Update profile if phone provided
  IF clean_phone <> '' THEN
    UPDATE public.profiles
    SET phone = clean_phone
    WHERE id = uid;
  END IF;

  -- Check if user already has an assigned branch
  SELECT branch_id INTO existing_branch_id
  FROM public.user_roles
  WHERE user_id = uid;

  IF existing_branch_id IS NULL AND (clean_b_name <> '' OR clean_br_name <> '') THEN
    INSERT INTO public.branches(name, phone, address, status)
    VALUES (
      CASE
        WHEN clean_br_name <> '' THEN clean_br_name
        WHEN clean_b_name <> '' THEN clean_b_name || ' - Main Branch'
        ELSE 'Main Branch'
      END,
      NULLIF(clean_phone, ''),
      NULLIF(clean_addr, ''),
      TRUE
    )
    RETURNING id INTO new_branch_id;

    UPDATE public.user_roles
    SET branch_id = new_branch_id
    WHERE user_id = uid;
  ELSE
    new_branch_id := existing_branch_id;
  END IF;

  RETURN jsonb_build_object(
    'success', true,
    'branch_id', new_branch_id,
    'role', 'owner'
  );
END;
$$;

GRANT EXECUTE ON FUNCTION public.register_business_setup(TEXT, TEXT, TEXT, TEXT) TO authenticated;

-- 5. Updated self-healing RPC for authenticated users
CREATE OR REPLACE FUNCTION public.ensure_user_role()
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  uid UUID := auth.uid();
  curr_role public.app_role;
  curr_branch UUID;
  user_meta JSONB;
  reg_account_type TEXT;
  b_name TEXT;
BEGIN
  IF uid IS NULL THEN
    RETURN jsonb_build_object('error', 'Not authenticated');
  END IF;

  -- Ensure profile exists
  INSERT INTO public.profiles(id, full_name)
  VALUES (uid, '')
  ON CONFLICT (id) DO NOTHING;

  -- Check existing role
  SELECT role, branch_id INTO curr_role, curr_branch FROM public.user_roles WHERE user_id = uid;

  IF curr_role IS NULL THEN
    -- Look up user metadata
    SELECT raw_user_meta_data INTO user_meta FROM auth.users WHERE id = uid;
    reg_account_type := LOWER(TRIM(COALESCE(user_meta->>'account_type', '')));
    b_name := TRIM(COALESCE(user_meta->>'business_name', ''));

    IF reg_account_type IN ('business_owner', 'owner', 'business') OR b_name <> '' THEN
      INSERT INTO public.user_roles(user_id, role, is_primary_owner)
      VALUES (uid, 'owner'::public.app_role, TRUE)
      ON CONFLICT (user_id) DO UPDATE SET role = 'owner';
      curr_role := 'owner';
    ELSE
      INSERT INTO public.user_roles(user_id, role, is_primary_owner)
      VALUES (uid, 'manager'::public.app_role, FALSE)
      ON CONFLICT (user_id) DO NOTHING;
      curr_role := 'manager';
    END IF;
  END IF;

  RETURN jsonb_build_object('role', curr_role, 'branch_id', curr_branch);
END;
$$;

GRANT EXECUTE ON FUNCTION public.ensure_user_role() TO authenticated;

-- 6. Role management policies: any business owner can manage their staff roles
DROP POLICY IF EXISTS primary_owner_manage_roles ON public.user_roles;
DROP POLICY IF EXISTS owner_manage_roles ON public.user_roles;
CREATE POLICY owner_manage_roles ON public.user_roles
FOR ALL TO authenticated
USING (public.has_role(auth.uid(), 'owner'))
WITH CHECK (public.has_role(auth.uid(), 'owner'));

-- 7. Branches management policies: any business owner can create and manage branches
DROP POLICY IF EXISTS owner_manage_branches ON public.branches;
CREATE POLICY owner_manage_branches ON public.branches
FOR ALL TO authenticated
USING (public.has_role(auth.uid(), 'owner'))
WITH CHECK (public.has_role(auth.uid(), 'owner'));
