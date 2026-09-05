-- =====================================================================
-- AUTO-CONFIRM USERS & INSTANT SIGN-IN MIGRATION
-- Automatically confirms email addresses for all new and existing users
-- so agrodealer business owners & staff can sign in immediately without
-- email delivery delays or verification blocks.
-- =====================================================================

-- 1. Create a BEFORE INSERT trigger function on auth.users to auto-confirm
CREATE OR REPLACE FUNCTION public.auto_confirm_new_users()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, auth
AS $$
BEGIN
  IF NEW.email_confirmed_at IS NULL THEN
    NEW.email_confirmed_at := now();
  END IF;
  IF NEW.confirmed_at IS NULL THEN
    NEW.confirmed_at := now();
  END IF;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_created_auto_confirm ON auth.users;
CREATE TRIGGER on_auth_user_created_auto_confirm
BEFORE INSERT ON auth.users
FOR EACH ROW
EXECUTE FUNCTION public.auto_confirm_new_users();

-- 2. Retroactively confirm any existing unconfirmed users in auth.users
UPDATE auth.users
SET email_confirmed_at = COALESCE(email_confirmed_at, now()),
    confirmed_at = COALESCE(confirmed_at, now())
WHERE email_confirmed_at IS NULL OR confirmed_at IS NULL;

-- 3. Ensure profiles and user_roles are created for all existing users
INSERT INTO public.profiles (id, full_name, phone)
SELECT
  u.id,
  COALESCE(u.raw_user_meta_data->>'full_name', ''),
  u.raw_user_meta_data->>'phone'
FROM auth.users u
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.user_roles (user_id, role, is_primary_owner)
SELECT
  u.id,
  CASE
    WHEN LOWER(COALESCE(u.raw_user_meta_data->>'account_type', '')) IN ('business_owner', 'owner', 'business')
         OR COALESCE(u.raw_user_meta_data->>'business_name', '') <> ''
    THEN 'owner'::public.app_role
    ELSE 'manager'::public.app_role
  END,
  CASE
    WHEN LOWER(COALESCE(u.raw_user_meta_data->>'account_type', '')) IN ('business_owner', 'owner', 'business')
         OR COALESCE(u.raw_user_meta_data->>'business_name', '') <> ''
    THEN TRUE
    ELSE FALSE
  END
FROM auth.users u
ON CONFLICT (user_id) DO UPDATE
SET role = EXCLUDED.role;
