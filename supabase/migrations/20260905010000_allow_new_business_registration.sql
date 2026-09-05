-- =====================================================================
-- UFBC AGRODEALER - NEW BUSINESS REGISTRATION SUPPORT
-- Allows new agrodealer businesses and owners to register their company,
-- primary shop/branch, and owner credentials securely.
-- =====================================================================

-- 1. Update handle_new_user trigger to recognize business registrations
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  owner_exists BOOLEAN;
  reg_account_type TEXT;
  b_name TEXT;
  br_name TEXT;
  b_phone TEXT;
  b_address TEXT;
  new_branch_id UUID;
BEGIN
  PERFORM pg_advisory_xact_lock(hashtextextended('ufbc:first-owner', 0));

  b_name := TRIM(COALESCE(NEW.raw_user_meta_data->>'business_name', ''));
  br_name := TRIM(COALESCE(NEW.raw_user_meta_data->>'branch_name', ''));
  b_phone := TRIM(COALESCE(NEW.raw_user_meta_data->>'phone', ''));
  b_address := TRIM(COALESCE(NEW.raw_user_meta_data->>'business_address', ''));
  reg_account_type := LOWER(TRIM(COALESCE(NEW.raw_user_meta_data->>'account_type', '')));

  -- Create or update profile
  INSERT INTO public.profiles(id, full_name, phone)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'full_name', ''),
    NULLIF(b_phone, '')
  )
  ON CONFLICT (id) DO UPDATE SET
    full_name = CASE
      WHEN EXCLUDED.full_name <> '' THEN EXCLUDED.full_name
      ELSE public.profiles.full_name
    END,
    phone = COALESCE(EXCLUDED.phone, public.profiles.phone);

  SELECT EXISTS (
    SELECT 1 FROM public.user_roles WHERE role = 'owner'
  ) INTO owner_exists;

  -- If this user registered as a business owner or if no owner exists yet:
  IF NOT owner_exists OR reg_account_type IN ('business_owner', 'owner', 'business') OR b_name <> '' THEN
    INSERT INTO public.user_roles(user_id, role, is_primary_owner)
    VALUES (
      NEW.id,
      'owner'::public.app_role,
      NOT owner_exists
    )
    ON CONFLICT (user_id) DO UPDATE SET role = 'owner';

    -- Automatically initialize their first branch if business or branch name is provided
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
        true
      )
      RETURNING id INTO new_branch_id;

      UPDATE public.user_roles
      SET branch_id = new_branch_id
      WHERE user_id = NEW.id AND branch_id IS NULL;
    END IF;
  ELSE
    -- Standard worker / manager invited or configured by existing owner
    INSERT INTO public.user_roles(user_id, role, is_primary_owner)
    VALUES (
      NEW.id,
      'manager'::public.app_role,
      false
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

-- 2. Client-callable RPC to ensure business registration initialization completes reliably
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
BEGIN
  IF uid IS NULL THEN
    RAISE EXCEPTION 'Not authenticated' USING ERRCODE = 'insufficient_privilege';
  END IF;

  -- Ensure role is owner
  INSERT INTO public.user_roles(user_id, role, is_primary_owner)
  VALUES (uid, 'owner'::public.app_role, false)
  ON CONFLICT (user_id) DO UPDATE SET role = 'owner';

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
      NULLIF(TRIM(p_phone), ''),
      NULLIF(TRIM(p_address), ''),
      true
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
