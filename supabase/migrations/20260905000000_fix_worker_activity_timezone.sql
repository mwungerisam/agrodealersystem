-- Complete fix for worker activity date triggers.
-- Root cause: A single trigger function with static record field references (like NEW.purchase_date)
-- will crash in PostgreSQL when attached to different tables (sales, purchases, expenses) because
-- NEW only contains the fields of the triggering table.
-- Solution: Create dedicated, strongly typed trigger functions for each respective table,
-- and make the fallback function dynamically access attributes using JSONB.

-- 1. Sales dedicated trigger function
CREATE OR REPLACE FUNCTION public.enforce_sales_activity_date()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  today_utc DATE := CURRENT_DATE;
  today_rwanda DATE := (CURRENT_TIMESTAMP AT TIME ZONE 'Africa/Kigali')::DATE;
BEGIN
  -- Business owners retain full authority to adjust dates for bookkeeping corrections
  IF public.has_role(auth.uid(), 'owner') THEN
    RETURN NEW;
  END IF;

  -- Default to current date if not provided
  IF NEW.sale_date IS NULL THEN
    NEW.sale_date := today_rwanda;
    RETURN NEW;
  END IF;

  -- Allow recording if sale_date matches UTC today, Rwanda today, or is within ±1 day
  -- of server/local date to handle timezone boundaries.
  IF NEW.sale_date <> today_utc
     AND NEW.sale_date <> today_rwanda
     AND ABS(NEW.sale_date - today_utc) > 1
     AND ABS(NEW.sale_date - today_rwanda) > 1
  THEN
    RAISE EXCEPTION 'Workers may only record activity for the current date'
      USING ERRCODE = 'check_violation';
  END IF;

  RETURN NEW;
END;
$$;

-- 2. Purchases dedicated trigger function
CREATE OR REPLACE FUNCTION public.enforce_purchases_activity_date()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  today_utc DATE := CURRENT_DATE;
  today_rwanda DATE := (CURRENT_TIMESTAMP AT TIME ZONE 'Africa/Kigali')::DATE;
BEGIN
  IF public.has_role(auth.uid(), 'owner') THEN
    RETURN NEW;
  END IF;

  IF NEW.purchase_date IS NULL THEN
    NEW.purchase_date := today_rwanda;
    RETURN NEW;
  END IF;

  IF NEW.purchase_date <> today_utc
     AND NEW.purchase_date <> today_rwanda
     AND ABS(NEW.purchase_date - today_utc) > 1
     AND ABS(NEW.purchase_date - today_rwanda) > 1
  THEN
    RAISE EXCEPTION 'Workers may only record activity for the current date'
      USING ERRCODE = 'check_violation';
  END IF;

  RETURN NEW;
END;
$$;

-- 3. Expenses dedicated trigger function
CREATE OR REPLACE FUNCTION public.enforce_expenses_activity_date()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  today_utc DATE := CURRENT_DATE;
  today_rwanda DATE := (CURRENT_TIMESTAMP AT TIME ZONE 'Africa/Kigali')::DATE;
BEGIN
  IF public.has_role(auth.uid(), 'owner') THEN
    RETURN NEW;
  END IF;

  IF NEW.expense_date IS NULL THEN
    NEW.expense_date := today_rwanda;
    RETURN NEW;
  END IF;

  IF NEW.expense_date <> today_utc
     AND NEW.expense_date <> today_rwanda
     AND ABS(NEW.expense_date - today_utc) > 1
     AND ABS(NEW.expense_date - today_rwanda) > 1
  THEN
    RAISE EXCEPTION 'Workers may only record activity for the current date'
      USING ERRCODE = 'check_violation';
  END IF;

  RETURN NEW;
END;
$$;

-- 4. Re-wire table triggers to the dedicated functions
DROP TRIGGER IF EXISTS trg_sales_activity_date ON public.sales;
CREATE TRIGGER trg_sales_activity_date
BEFORE INSERT ON public.sales
FOR EACH ROW EXECUTE FUNCTION public.enforce_sales_activity_date();

DROP TRIGGER IF EXISTS trg_purchases_activity_date ON public.purchases;
CREATE TRIGGER trg_purchases_activity_date
BEFORE INSERT ON public.purchases
FOR EACH ROW EXECUTE FUNCTION public.enforce_purchases_activity_date();

DROP TRIGGER IF EXISTS trg_expenses_activity_date ON public.expenses;
CREATE TRIGGER trg_expenses_activity_date
BEFORE INSERT ON public.expenses
FOR EACH ROW EXECUTE FUNCTION public.enforce_expenses_activity_date();

-- 5. Safeguard legacy enforce_worker_activity_date so it never throws if called anywhere
CREATE OR REPLACE FUNCTION public.enforce_worker_activity_date()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  activity_date DATE;
  today_utc DATE := CURRENT_DATE;
  today_rwanda DATE := (CURRENT_TIMESTAMP AT TIME ZONE 'Africa/Kigali')::DATE;
  row_data JSONB;
BEGIN
  IF public.has_role(auth.uid(), 'owner') THEN
    RETURN NEW;
  END IF;

  row_data := to_jsonb(NEW);
  IF TG_TABLE_NAME = 'sales' AND NULLIF(row_data->>'sale_date', '') IS NOT NULL THEN
    activity_date := (row_data->>'sale_date')::DATE;
  ELSIF TG_TABLE_NAME = 'purchases' AND NULLIF(row_data->>'purchase_date', '') IS NOT NULL THEN
    activity_date := (row_data->>'purchase_date')::DATE;
  ELSIF TG_TABLE_NAME = 'expenses' AND NULLIF(row_data->>'expense_date', '') IS NOT NULL THEN
    activity_date := (row_data->>'expense_date')::DATE;
  END IF;

  IF activity_date IS NULL THEN
    RETURN NEW;
  END IF;

  IF activity_date <> today_utc
     AND activity_date <> today_rwanda
     AND ABS(activity_date - today_utc) > 1
     AND ABS(activity_date - today_rwanda) > 1
  THEN
    RAISE EXCEPTION 'Workers may only record activity for the current date'
      USING ERRCODE = 'check_violation';
  END IF;

  RETURN NEW;
END;
$$;

-- 6. Ensure apply_sale preserves catalog pricing for workers while allowing owner flexibility
CREATE OR REPLACE FUNCTION public.apply_sale()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  current_qty NUMERIC(12,2);
  cost NUMERIC(12,2);
  catalog_price NUMERIC(12,2);
  branch_active BOOLEAN;
BEGIN
  IF NEW.customer_name IS NULL OR length(trim(NEW.customer_name)) = 0 THEN
    RAISE EXCEPTION 'Umukiriya ni ngombwa' USING ERRCODE = 'check_violation';
  END IF;

  SELECT status INTO branch_active
  FROM public.branches
  WHERE id = NEW.branch_id;
  IF branch_active IS DISTINCT FROM TRUE THEN
    RAISE EXCEPTION 'Ishami ntirikora' USING ERRCODE = 'check_violation';
  END IF;

  SELECT quantity INTO current_qty FROM public.inventory
  WHERE branch_id = NEW.branch_id AND product_id = NEW.product_id FOR UPDATE;
  IF current_qty IS NULL OR current_qty < NEW.quantity THEN
    RAISE EXCEPTION 'Ntibishoboka: ububiko ntibuhagije' USING ERRCODE = 'check_violation';
  END IF;

  SELECT buying_price, selling_price INTO cost, catalog_price
  FROM public.products WHERE id = NEW.product_id AND status = true;
  IF catalog_price IS NULL THEN
    RAISE EXCEPTION 'Igicuruzwa ntikiboneka cyangwa ntigikora' USING ERRCODE = 'check_violation';
  END IF;

  -- Non-owners must strictly sell at the owner-approved catalog price.
  -- Owners may apply custom selling price if entered and positive, otherwise default to catalog price.
  IF NOT public.has_role(auth.uid(), 'owner') OR NEW.selling_price IS NULL OR NEW.selling_price <= 0 THEN
    NEW.selling_price := catalog_price;
  END IF;

  NEW.unit_cost := COALESCE(cost, 0);
  NEW.profit := (NEW.selling_price - NEW.unit_cost) * NEW.quantity;

  UPDATE public.inventory
  SET quantity = quantity - NEW.quantity, updated_at = now()
  WHERE branch_id = NEW.branch_id AND product_id = NEW.product_id;

  RETURN NEW;
END;
$$;

GRANT EXECUTE ON FUNCTION public.enforce_sales_activity_date() TO authenticated;
GRANT EXECUTE ON FUNCTION public.enforce_purchases_activity_date() TO authenticated;
GRANT EXECUTE ON FUNCTION public.enforce_expenses_activity_date() TO authenticated;
GRANT EXECUTE ON FUNCTION public.enforce_worker_activity_date() TO authenticated;
GRANT EXECUTE ON FUNCTION public.apply_sale() TO authenticated;
