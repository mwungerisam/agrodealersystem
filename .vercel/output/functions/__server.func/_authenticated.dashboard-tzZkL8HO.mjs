import { o as __toESM } from "./_runtime.mjs";
import { u as require_react } from "./_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "./_libs/react.mjs";
import { t as supabase } from "./_ssr/client-CSPvjf5l.mjs";
import { v as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { n as useQuery } from "./_libs/tanstack__react-query.mjs";
import { n as toast } from "./_libs/sonner.mjs";
import { B as CircleCheck, H as ChevronRight, J as Bell, K as Building2, L as Download, O as LogOut, R as DollarSign, S as PiggyBank, T as Package, W as Check, Y as ArrowUpRight, g as ShoppingBag, l as TriangleAlert, n as Wallet, q as Boxes, r as Users, s as UserPlus, u as TrendingUp, x as Plus, z as Circle } from "./_libs/lucide-react.mjs";
import { A as localized, C as cn, M as numberFmt, N as t, O as localDateInput, S as Button, T as fmtDateTime, b as useBranchId, d as Card, f as CardContent, h as CardTitle, j as money, m as CardHeader, w as fmtDate, x as useIsOwner, y as useAuth } from "./_ssr/router-VEvSM2XK.mjs";
import { a as Label2, c as Root2, d as SubTrigger2, f as Trigger, i as ItemIndicator2, l as Separator2, n as Content2, o as Portal2, r as Item2, s as RadioItem2, t as CheckboxItem2, u as SubContent2 } from "./_libs/@radix-ui/react-dropdown-menu+[...].mjs";
import { t as generateReportPdf } from "./_ssr/pdf-DQDnY9vy.mjs";
import { t as SetupBanner } from "./_ssr/setup-banner-DzbkPQ2z.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_authenticated.dashboard-tzZkL8HO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName$2 = "/app/applet/src/components/ui/dropdown-menu.tsx";
var DropdownMenu = Root2;
var DropdownMenuTrigger = Trigger;
var DropdownMenuSubTrigger = import_react.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SubTrigger2, {
	ref,
	className: cn("flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", inset && "pl-8", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronRight, { className: "ml-auto" }, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 37,
		columnNumber: 5
	}, void 0)]
}, void 0, true, {
	fileName: _jsxFileName$2,
	lineNumber: 27,
	columnNumber: 3
}, void 0));
DropdownMenuSubTrigger.displayName = SubTrigger2.displayName;
var DropdownMenuSubContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SubContent2, {
	ref,
	className: cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$2,
	lineNumber: 46,
	columnNumber: 3
}, void 0));
DropdownMenuSubContent.displayName = SubContent2.displayName;
var DropdownMenuContent = import_react.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Portal2, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Content2, {
	ref,
	sideOffset,
	className: cn("z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$2,
	lineNumber: 62,
	columnNumber: 5
}, void 0) }, void 0, false, {
	fileName: _jsxFileName$2,
	lineNumber: 61,
	columnNumber: 3
}, void 0));
DropdownMenuContent.displayName = Content2.displayName;
var DropdownMenuItem = import_react.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item2, {
	ref,
	className: cn("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0", inset && "pl-8", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$2,
	lineNumber: 82,
	columnNumber: 3
}, void 0));
DropdownMenuItem.displayName = Item2.displayName;
var DropdownMenuCheckboxItem = import_react.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckboxItem2, {
	ref,
	className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	checked,
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemIndicator2, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Check, { className: "h-4 w-4" }, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 109,
			columnNumber: 9
		}, void 0) }, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 108,
			columnNumber: 7
		}, void 0)
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 107,
		columnNumber: 5
	}, void 0), children]
}, void 0, true, {
	fileName: _jsxFileName$2,
	lineNumber: 98,
	columnNumber: 3
}, void 0));
DropdownMenuCheckboxItem.displayName = CheckboxItem2.displayName;
var DropdownMenuRadioItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RadioItem2, {
	ref,
	className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemIndicator2, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Circle, { className: "h-2 w-2 fill-current" }, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 131,
			columnNumber: 9
		}, void 0) }, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 130,
			columnNumber: 7
		}, void 0)
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 129,
		columnNumber: 5
	}, void 0), children]
}, void 0, true, {
	fileName: _jsxFileName$2,
	lineNumber: 121,
	columnNumber: 3
}, void 0));
DropdownMenuRadioItem.displayName = RadioItem2.displayName;
var DropdownMenuLabel = import_react.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label2, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$2,
	lineNumber: 145,
	columnNumber: 3
}, void 0));
DropdownMenuLabel.displayName = Label2.displayName;
var DropdownMenuSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Separator2, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$2,
	lineNumber: 157,
	columnNumber: 3
}, void 0));
DropdownMenuSeparator.displayName = Separator2.displayName;
var DropdownMenuShortcut = ({ className, ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
		className: cn("ml-auto text-xs tracking-widest opacity-60", className),
		...props
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 167,
		columnNumber: 5
	}, void 0);
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
var _jsxFileName$1 = "/app/applet/src/components/owner-evening-reminder.tsx";
var REMINDER_HOUR = 18;
var notificationKey = (date) => `ufbc-owner-evening-summary:${date}`;
function OwnerEveningReminder({ salesValue, salesCount }) {
	const [permission, setPermission] = (0, import_react.useState)("unsupported");
	(0, import_react.useEffect)(() => {
		if ("Notification" in window) setPermission(Notification.permission);
	}, []);
	(0, import_react.useEffect)(() => {
		if (permission !== "granted") return;
		let timer;
		const schedule = () => {
			const now = /* @__PURE__ */ new Date();
			const target = new Date(now);
			target.setHours(REMINDER_HOUR, 0, 0, 0);
			if (target <= now) target.setDate(target.getDate() + 1);
			timer = window.setTimeout(() => {
				const date = localDateInput();
				if (!localStorage.getItem(notificationKey(date))) {
					new Notification("UFBC Agrodealer — Daily owner summary", {
						body: `${salesCount} sale${salesCount === 1 ? "" : "s"} recorded today. Sales value: ${salesValue}.`,
						icon: "/icon-192.png"
					});
					localStorage.setItem(notificationKey(date), "sent");
				}
				schedule();
			}, Math.max(target.getTime() - Date.now(), 1e3));
		};
		schedule();
		return () => {
			if (timer) window.clearTimeout(timer);
		};
	}, [
		permission,
		salesCount,
		salesValue
	]);
	const enable = async () => {
		if (!("Notification" in window)) {
			toast.error("Notifications are not supported by this browser.");
			return;
		}
		const nextPermission = await Notification.requestPermission();
		setPermission(nextPermission);
		if (nextPermission === "granted") toast.success("Evening owner summary enabled for 6:00 PM.");
		else toast.error("Notification permission was not granted.");
	};
	if (permission === "unsupported") return null;
	if (permission === "granted") return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex items-center gap-2 text-xs font-medium text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleCheck, { className: "h-4 w-4 text-primary" }, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 66,
			columnNumber: 9
		}, this), " Evening owner summary enabled for 6:00 PM"]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 65,
		columnNumber: 7
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
		type: "button",
		variant: "outline",
		size: "sm",
		onClick: () => void enable(),
		className: "h-9",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bell, { className: "mr-2 h-4 w-4" }, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 73,
			columnNumber: 7
		}, this), " Enable evening summary"]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 72,
		columnNumber: 5
	}, this);
}
var _jsxFileName = "/app/applet/src/routes/_authenticated.dashboard.tsx?tsr-split=component";
function Dashboard() {
	const { role, user, signOut } = useAuth();
	const isOwner = useIsOwner();
	const branchId = useBranchId();
	const today = localDateInput();
	const todayStart = (/* @__PURE__ */ new Date(`${today}T00:00:00`)).toISOString();
	const tomorrow = /* @__PURE__ */ new Date(`${today}T00:00:00`);
	tomorrow.setDate(tomorrow.getDate() + 1);
	const tomorrowStart = tomorrow.toISOString();
	const todayDates = Array.from(/* @__PURE__ */ new Set([today, (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)]));
	const { data: stats } = useQuery({
		queryKey: [
			"dashboard-stats",
			branchId,
			isOwner,
			today
		],
		staleTime: 6e4,
		queryFn: async () => {
			const todaySalesQ = supabase.from("sales").select("quantity, selling_price, profit").in("sale_date", todayDates);
			if (!isOwner && branchId) todaySalesQ.eq("branch_id", branchId);
			const { data: sales, error: salesError } = await todaySalesQ;
			if (salesError) throw salesError;
			let inv = [];
			if (isOwner) {
				const { data, error } = await supabase.from("inventory").select("branch_id, product_id, quantity, avg_cost, products(name, unit, min_stock), branches(name)");
				if (error) throw error;
				inv = data ?? [];
			} else {
				const invQ = supabase.from("inventory").select("branch_id, product_id, quantity, avg_cost");
				if (branchId) invQ.eq("branch_id", branchId);
				const { data, error } = await invQ;
				if (error) throw error;
				inv = data ?? [];
				const { data: workerProducts, error: workerProductsError } = await supabase.from("worker_products").select("id, name, unit, min_stock");
				if (workerProductsError) throw workerProductsError;
				const productMap = new Map((workerProducts ?? []).flatMap((product) => product.id ? [[product.id, product]] : []));
				inv = inv.map((item) => ({
					...item,
					products: productMap.get(item.product_id)
				}));
			}
			const branchesResult = isOwner ? await supabase.from("branches").select("id") : null;
			if (branchesResult?.error) throw branchesResult.error;
			const productsResult = isOwner ? await supabase.from("products").select("id") : await supabase.from("worker_products").select("id");
			if (productsResult.error) throw productsResult.error;
			const workersResult = isOwner ? await supabase.from("user_roles").select("id") : null;
			if (workersResult?.error) throw workersResult.error;
			const branches = branchesResult?.data ?? [];
			const products = productsResult.data ?? [];
			const workers = workersResult?.data ?? [];
			const expensesQ = supabase.from("expenses").select("amount").eq("expense_date", today);
			if (!isOwner && branchId) expensesQ.eq("branch_id", branchId);
			const { data: exp, error: expensesError } = await expensesQ;
			if (expensesError) throw expensesError;
			const todaySales = (sales ?? []).reduce((s, x) => s + Number(x.selling_price) * Number(x.quantity), 0);
			const todayProfit = (sales ?? []).reduce((s, x) => s + Number(x.profit), 0);
			const todayExpenses = (exp ?? []).reduce((s, x) => s + Number(x.amount), 0);
			const totalStock = (inv ?? []).reduce((s, x) => s + Number(x.quantity), 0);
			const totalStockValue = (inv ?? []).reduce((s, x) => s + Number(x.quantity) * Number(x.avg_cost ?? 0), 0);
			const lowStock = (inv ?? []).filter((item) => Number(item.quantity) <= Number(item.products?.min_stock ?? 0));
			const branchResult = !isOwner && branchId ? await supabase.from("branches").select("name").eq("id", branchId).maybeSingle() : null;
			if (branchResult?.error) throw branchResult.error;
			return {
				todaySales,
				todaySalesCount: (sales ?? []).length,
				todayProfit,
				todayExpenses,
				todayNet: todayProfit - todayExpenses,
				totalStock,
				totalStockValue,
				lowStock,
				inventory: inv ?? [],
				branchCount: branches.length,
				productCount: products.length,
				workerCount: workers.length,
				branchName: branchResult?.data?.name ?? ""
			};
		}
	});
	const { data: branchStats } = useQuery({
		queryKey: ["branch-performance", isOwner],
		enabled: isOwner,
		staleTime: 6e4,
		queryFn: async () => {
			const monthStart = /* @__PURE__ */ new Date();
			monthStart.setDate(1);
			const ms = localDateInput(monthStart);
			const { data: br } = await supabase.from("branches").select("id, name, status, created_at");
			if (!br) return [];
			return await Promise.all(br.map(async (b) => {
				const { data: sales } = await supabase.from("sales").select("quantity, selling_price, profit").eq("branch_id", b.id).gte("sale_date", ms);
				const rev = (sales ?? []).reduce((s, x) => s + Number(x.selling_price) * Number(x.quantity), 0);
				const profit = (sales ?? []).reduce((s, x) => s + Number(x.profit), 0);
				const { data: inv } = await supabase.from("inventory").select("quantity, avg_cost").eq("branch_id", b.id);
				const stockValue = (inv ?? []).reduce((s, x) => s + Number(x.quantity) * Number(x.avg_cost ?? 0), 0);
				const totalStock = (inv ?? []).reduce((s, x) => s + Number(x.quantity), 0);
				const { count: workerCount } = await supabase.from("user_roles").select("id", { count: "exact" }).eq("branch_id", b.id);
				return {
					...b,
					revenue: rev,
					profit,
					stockValue,
					totalStock,
					workerCount: workerCount ?? 0
				};
			}));
		}
	});
	const { data: recent } = useQuery({
		queryKey: [
			"recent-sales",
			branchId,
			isOwner
		],
		staleTime: 6e4,
		queryFn: async () => {
			let q = supabase.from("sales").select("id, quantity, selling_price, profit, sale_date, customer_name, products(name, unit), branches(name), created_by").order("created_at", { ascending: false }).limit(8);
			if (!isOwner && branchId) q = q.eq("branch_id", branchId);
			const { data } = await q;
			return data ?? [];
		}
	});
	const { data: workerActivity = [] } = useQuery({
		queryKey: ["worker-activity"],
		enabled: isOwner,
		staleTime: 3e4,
		queryFn: async () => {
			const [{ data: sales, error: salesError }, { data: customers, error: customersError }] = await Promise.all([supabase.from("sales").select("id, created_at, created_by, quantity, selling_price, customer_name, products(name), branches(name)").order("created_at", { ascending: false }).limit(20), supabase.from("customers").select("id, created_at, created_by, name, phone, branches(name)").order("created_at", { ascending: false }).limit(20)]);
			if (salesError) throw salesError;
			if (customersError) throw customersError;
			const userIds = [...new Set([...(sales ?? []).map((sale) => sale.created_by), ...(customers ?? []).map((customer) => customer.created_by)].filter((id) => Boolean(id)))];
			if (userIds.length === 0) return [];
			const [{ data: roles, error: rolesError }, { data: profiles, error: profilesError }] = await Promise.all([supabase.from("user_roles").select("user_id, role").in("user_id", userIds), supabase.from("profiles").select("id, full_name").in("id", userIds)]);
			if (rolesError) throw rolesError;
			if (profilesError) throw profilesError;
			const workerIds = new Set((roles ?? []).filter((role) => role.role !== "owner").map((role) => role.user_id));
			const names = new Map((profiles ?? []).map((profile) => [profile.id, profile.full_name.trim() || "Worker"]));
			const saleActivity = (sales ?? []).filter((sale) => sale.created_by && workerIds.has(sale.created_by)).map((sale) => ({
				id: `sale-${sale.id}`,
				type: "sale",
				createdAt: sale.created_at,
				branchName: sale.branches?.name ?? "Unassigned branch",
				workerName: names.get(sale.created_by) ?? "Worker",
				title: `${sale.products?.name ?? "Product"} sold`,
				detail: sale.customer_name ?? "Walk-in customer",
				amount: Number(sale.selling_price) * Number(sale.quantity)
			}));
			const customerActivity = (customers ?? []).filter((customer) => customer.created_by && workerIds.has(customer.created_by)).map((customer) => ({
				id: `customer-${customer.id}`,
				type: "customer",
				createdAt: customer.created_at,
				branchName: customer.branches?.name ?? "Unassigned branch",
				workerName: names.get(customer.created_by) ?? "Worker",
				title: "Customer added",
				detail: customer.name
			}));
			return [...saleActivity, ...customerActivity].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).slice(0, 10);
		}
	});
	const { data: workerPerformance = [] } = useQuery({
		queryKey: ["worker-daily-performance", today],
		enabled: isOwner,
		staleTime: 3e4,
		queryFn: async () => {
			const [{ data: sales, error: salesError }, { data: customers, error: customersError }, { data: roles, error: rolesError }] = await Promise.all([
				supabase.from("sales").select("created_by, quantity, selling_price").in("sale_date", todayDates),
				supabase.from("customers").select("created_by").gte("created_at", todayStart).lt("created_at", tomorrowStart),
				supabase.from("user_roles").select("user_id, role").neq("role", "owner")
			]);
			if (salesError) throw salesError;
			if (customersError) throw customersError;
			if (rolesError) throw rolesError;
			const workerIds = (roles ?? []).map((role) => role.user_id);
			if (workerIds.length === 0) return [];
			const { data: profiles, error: profilesError } = await supabase.from("profiles").select("id, full_name").in("id", workerIds);
			if (profilesError) throw profilesError;
			const names = new Map((profiles ?? []).map((profile) => [profile.id, profile.full_name.trim() || "Worker"]));
			const performance = new Map(workerIds.map((id) => [id, {
				userId: id,
				workerName: names.get(id) ?? "Worker",
				salesCount: 0,
				salesValue: 0,
				customersAdded: 0
			}]));
			for (const sale of sales ?? []) {
				if (!sale.created_by || !performance.has(sale.created_by)) continue;
				const row = performance.get(sale.created_by);
				row.salesCount += 1;
				row.salesValue += Number(sale.selling_price) * Number(sale.quantity);
			}
			for (const customer of customers ?? []) {
				if (!customer.created_by || !performance.has(customer.created_by)) continue;
				performance.get(customer.created_by).customersAdded += 1;
			}
			return [...performance.values()].sort((a, b) => b.salesValue - a.salesValue || b.customersAdded - a.customersAdded);
		}
	});
	const cards = [
		{
			label: t.todaySales,
			value: money(stats?.todaySales ?? 0),
			icon: TrendingUp,
			tone: "text-primary"
		},
		{
			label: t.todayProfit,
			value: money(stats?.todayProfit ?? 0),
			icon: DollarSign,
			tone: "text-green-600"
		},
		{
			label: t.todayExpenses,
			value: money(stats?.todayExpenses ?? 0),
			icon: Wallet,
			tone: "text-red-600"
		},
		{
			label: t.todayNet,
			value: money(stats?.todayNet ?? 0),
			icon: PiggyBank,
			tone: "text-primary"
		},
		{
			label: t.totalProducts,
			value: numberFmt(stats?.productCount ?? 0),
			icon: Package,
			tone: "text-primary"
		},
		...isOwner ? [{
			label: t.totalBranches,
			value: numberFmt(stats?.branchCount ?? 0),
			icon: Building2,
			tone: "text-primary"
		}, {
			label: t.totalWorkers,
			value: numberFmt(stats?.workerCount ?? 0),
			icon: Users,
			tone: "text-primary"
		}] : []
	];
	const handleSignOut = async () => {
		await signOut();
		toast.success("Signed out successfully");
	};
	const downloadOverviewReport = async (period) => {
		const now = /* @__PURE__ */ new Date();
		let from = today;
		let to = today;
		if (period === "weekly") {
			const start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
			start.setDate(start.getDate() - (start.getDay() + 6) % 7);
			const end = new Date(start);
			end.setDate(end.getDate() + 6);
			from = localDateInput(start);
			to = localDateInput(end);
		} else if (period === "monthly") {
			from = localDateInput(new Date(now.getFullYear(), now.getMonth(), 1));
			to = localDateInput(new Date(now.getFullYear(), now.getMonth() + 1, 0));
		} else if (period === "annual") {
			from = `${now.getFullYear()}-01-01`;
			to = `${now.getFullYear()}-12-31`;
		}
		try {
			const [{ data: sales, error: salesError }, { data: purchases, error: purchasesError }, { data: expenses, error: expensesError }, { data: inventory, error: inventoryError }] = await Promise.all([
				supabase.from("sales").select("quantity, selling_price, profit, sale_date, customer_name, products(name), branches(name)").gte("sale_date", from).lte("sale_date", to).order("sale_date", { ascending: false }),
				supabase.from("purchases").select("quantity, buying_price, transport_cost, supplier, purchase_date, products(name), branches(name)").gte("purchase_date", from).lte("purchase_date", to).order("purchase_date", { ascending: false }),
				supabase.from("expenses").select("description, amount, expense_date, branches(name)").gte("expense_date", from).lte("expense_date", to).order("expense_date", { ascending: false }),
				supabase.from("inventory").select("quantity, products(name, unit, min_stock), branches(name)").order("quantity", { ascending: true })
			]);
			if (salesError) throw salesError;
			if (purchasesError) throw purchasesError;
			if (expensesError) throw expensesError;
			if (inventoryError) throw inventoryError;
			const branchMap = /* @__PURE__ */ new Map();
			for (const sale of sales ?? []) {
				const branch = sale.branches?.name ?? "Unassigned branch";
				const row = branchMap.get(branch) ?? {
					branch,
					sales: 0,
					revenue: 0,
					profit: 0
				};
				row.sales += 1;
				row.revenue += Number(sale.selling_price) * Number(sale.quantity);
				row.profit += Number(sale.profit);
				branchMap.set(branch, row);
			}
			const totals = {
				sales: (sales ?? []).reduce((sum, sale) => sum + Number(sale.selling_price) * Number(sale.quantity), 0),
				profit: (sales ?? []).reduce((sum, sale) => sum + Number(sale.profit), 0),
				purchases: (purchases ?? []).reduce((sum, purchase) => sum + Number(purchase.buying_price) * Number(purchase.quantity) + Number(purchase.transport_cost), 0),
				expenses: (expenses ?? []).reduce((sum, expense) => sum + Number(expense.amount), 0),
				net: 0,
				customers: new Set((sales ?? []).map((sale) => sale.customer_name).filter(Boolean)).size
			};
			totals.net = totals.profit - totals.expenses;
			const label = period[0].toUpperCase() + period.slice(1);
			await generateReportPdf({
				title: `${label} Business Report`,
				period: `${fmtDate(from)} – ${fmtDate(to)}`,
				branchName: "All branches",
				sales: (sales ?? []).map((sale) => ({
					date: sale.sale_date,
					branch: sale.branches?.name ?? "Unassigned branch",
					product: sale.products?.name ?? "",
					customer: sale.customer_name ?? "Walk-in customer",
					qty: Number(sale.quantity),
					price: Number(sale.selling_price),
					profit: Number(sale.profit)
				})),
				purchases: (purchases ?? []).map((purchase) => ({
					date: purchase.purchase_date,
					branch: purchase.branches?.name ?? "Unassigned branch",
					product: purchase.products?.name ?? "",
					supplier: purchase.supplier,
					qty: Number(purchase.quantity),
					price: Number(purchase.buying_price),
					transport: Number(purchase.transport_cost)
				})),
				expenses: (expenses ?? []).map((expense) => ({
					date: expense.expense_date,
					branch: expense.branches?.name ?? "Unassigned branch",
					description: expense.description,
					amount: Number(expense.amount)
				})),
				inventory: (inventory ?? []).map((item) => {
					const quantity = Number(item.quantity);
					const minimum = Number(item.products?.min_stock ?? 0);
					return {
						branch: item.branches?.name ?? "Unassigned branch",
						product: item.products?.name ?? "Product",
						quantity,
						unit: item.products?.unit ?? "",
						status: quantity <= 0 ? "Out of stock" : quantity <= minimum ? "Low stock" : "In stock"
					};
				}),
				totals,
				branchPerformance: [...branchMap.values()].sort((a, b) => b.revenue - a.revenue)
			});
		} catch (error) {
			toast.error("Unable to create the report. Please try again.");
			console.error("[DashboardPdf]", error);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "relative overflow-hidden rounded-2xl border bg-card p-5 shadow-sm sm:p-6",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute -right-16 -top-20 h-48 w-48 rounded-full bg-primary/10 blur-3xl" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 462,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "relative flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mb-2 flex items-center gap-2 text-xs font-semibold text-primary",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "h-1.5 w-1.5 rounded-full bg-primary" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 466,
								columnNumber: 15
							}, this), isOwner ? "Business overview" : t.currentBranch]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 465,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
							className: "text-2xl font-extrabold tracking-tight sm:text-3xl",
							children: t.dashboard
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 469,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mt-1.5 max-w-2xl text-sm text-muted-foreground",
							children: isOwner ? "Monitor sales, stock, profitability and branch performance from one place." : localized("Reba ibikorwa byawe bya buri munsi.", "Review your daily activity.")
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 470,
							columnNumber: 13
						}, this),
						!isOwner && branchId && /* @__PURE__ */ (void 0)("div", {
							className: "mt-4 inline-flex items-center gap-2 rounded-lg bg-muted px-3 py-2 text-xs font-semibold",
							children: [/* @__PURE__ */ (void 0)(Building2, { className: "h-4 w-4 text-primary" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 474,
								columnNumber: 17
							}, this), stats?.branchName || "Your assigned branch"]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 473,
							columnNumber: 38
						}, this)
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 464,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex flex-wrap gap-2",
						children: isOwner ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
								to: "/products",
								className: "inline-flex h-9 items-center gap-2 rounded-lg border bg-background px-3 text-xs font-semibold transition hover:bg-muted",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "h-4 w-4" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 481,
										columnNumber: 19
									}, this),
									" ",
									t.products
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 480,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
								to: "/purchases",
								className: "inline-flex h-9 items-center gap-2 rounded-lg bg-primary px-3 text-xs font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "h-4 w-4" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 484,
										columnNumber: 19
									}, this),
									" ",
									t.purchases
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 483,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuTrigger, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
									variant: "outline",
									size: "sm",
									className: "h-9",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Download, { className: "mr-2 h-4 w-4" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 487,
										columnNumber: 100
									}, this), " Download PDF"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 487,
									columnNumber: 48
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 487,
								columnNumber: 19
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuContent, {
								align: "end",
								className: "w-52",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuLabel, { children: "Business report" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 488,
										columnNumber: 69
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
										onSelect: () => void downloadOverviewReport("daily"),
										children: "Daily report"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 488,
										columnNumber: 123
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
										onSelect: () => void downloadOverviewReport("weekly"),
										children: "Weekly report"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 488,
										columnNumber: 226
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
										onSelect: () => void downloadOverviewReport("monthly"),
										children: "Monthly report"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 488,
										columnNumber: 331
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
										onSelect: () => void downloadOverviewReport("annual"),
										children: "Annual report"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 488,
										columnNumber: 438
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 488,
								columnNumber: 19
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 486,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OwnerEveningReminder, {
								salesValue: money(stats?.todaySales ?? 0),
								salesCount: stats?.todaySalesCount ?? 0
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 490,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
								variant: "outline",
								size: "sm",
								onClick: handleSignOut,
								className: "h-9",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LogOut, { className: "mr-2 h-4 w-4" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 492,
										columnNumber: 19
									}, this),
									" ",
									t.signOut
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 491,
								columnNumber: 17
							}, this)
						] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 479,
							columnNumber: 24
						}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/sales",
							className: "inline-flex h-9 items-center gap-2 rounded-lg bg-primary px-3 text-xs font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "h-4 w-4" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 495,
									columnNumber: 17
								}, this),
								" ",
								t.sales
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 494,
							columnNumber: 21
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 478,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 463,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 461,
				columnNumber: 7
			}, this),
			isOwner && /* @__PURE__ */ (void 0)(SetupBanner, { steps: [
				...stats && stats.branchCount === 0 ? [{
					message: "Step 1: Add your first branch.",
					to: "/branches",
					label: t.branches
				}] : [],
				...stats && stats.productCount === 0 ? [{
					message: "Step 2: Add your first product.",
					to: "/products",
					label: t.products
				}] : [],
				...stats && stats.branchCount > 0 && stats.productCount > 0 && stats.totalStock === 0 ? [{
					message: "Step 3: Record a purchase to stock your inventory.",
					to: "/purchases",
					label: t.purchases
				}] : []
			] }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 501,
				columnNumber: 19
			}, this),
			!isOwner && /* @__PURE__ */ (void 0)(Card, { children: [/* @__PURE__ */ (void 0)(CardHeader, {
				className: "border-b pb-4 sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)(CardTitle, {
					className: "text-base font-bold",
					children: "Available stock"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 519,
					columnNumber: 15
				}, this), /* @__PURE__ */ (void 0)("p", {
					className: "mt-1 text-xs text-muted-foreground",
					children: "Stock received and maintained by the business owner for your assigned branch."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 520,
					columnNumber: 15
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 518,
					columnNumber: 13
				}, this), /* @__PURE__ */ (void 0)(Link, {
					to: "/inventory",
					className: "text-xs font-semibold text-primary hover:underline",
					children: ["View inventory ", /* @__PURE__ */ (void 0)(ArrowUpRight, { className: "ml-1 inline h-3.5 w-3.5" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 522,
						columnNumber: 113
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 522,
					columnNumber: 13
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 517,
				columnNumber: 11
			}, this), /* @__PURE__ */ (void 0)(CardContent, {
				className: "p-0",
				children: stats?.inventory.length ? /* @__PURE__ */ (void 0)("div", {
					className: "divide-y",
					children: stats.inventory.map((item) => {
						const quantity = Number(item.quantity);
						const minimum = Number(item.products?.min_stock ?? 0);
						const status = quantity <= 0 ? "Out of stock" : quantity <= minimum ? "Low stock" : "In stock";
						const statusClass = quantity <= 0 ? "bg-red-100 text-red-800" : quantity <= minimum ? "bg-amber-100 text-amber-800" : "bg-emerald-100 text-emerald-800";
						return /* @__PURE__ */ (void 0)("div", {
							className: "flex items-center justify-between gap-4 px-5 py-3.5",
							children: [/* @__PURE__ */ (void 0)("div", {
								className: "flex min-w-0 items-center gap-3",
								children: [/* @__PURE__ */ (void 0)("div", {
									className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary",
									children: /* @__PURE__ */ (void 0)(Boxes, { className: "h-4 w-4" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 535,
										columnNumber: 130
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 535,
									columnNumber: 25
								}, this), /* @__PURE__ */ (void 0)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (void 0)("p", {
										className: "truncate text-sm font-semibold",
										children: item.products?.name ?? "Product"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 536,
										columnNumber: 50
									}, this), /* @__PURE__ */ (void 0)("p", {
										className: "mt-0.5 text-xs text-muted-foreground",
										children: [
											"Minimum: ",
											numberFmt(minimum),
											" ",
											item.products?.unit ?? "kg"
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 538,
										columnNumber: 54
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 536,
									columnNumber: 25
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 534,
								columnNumber: 23
							}, this), /* @__PURE__ */ (void 0)("div", {
								className: "shrink-0 text-right",
								children: [/* @__PURE__ */ (void 0)("p", {
									className: "text-sm font-bold",
									children: [
										numberFmt(quantity),
										" ",
										item.products?.unit ?? ""
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 542,
									columnNumber: 60
								}, this), /* @__PURE__ */ (void 0)("span", {
									className: `mt-1 inline-flex rounded-full px-2 py-0.5 text-[11px] font-bold ${statusClass}`,
									children: status
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 544,
									columnNumber: 45
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 542,
								columnNumber: 23
							}, this)]
						}, `${item.branch_id}-${item.product_id}`, true, {
							fileName: _jsxFileName,
							lineNumber: 533,
							columnNumber: 20
						}, this);
					})
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 525,
					columnNumber: 40
				}, this) : /* @__PURE__ */ (void 0)("div", {
					className: "px-5 py-12 text-center",
					children: [
						/* @__PURE__ */ (void 0)(Boxes, { className: "mx-auto h-8 w-8 text-muted-foreground/35" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 547,
							columnNumber: 64
						}, this),
						/* @__PURE__ */ (void 0)("p", {
							className: "mt-2 text-sm font-medium",
							children: "No stock available yet"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 547,
							columnNumber: 126
						}, this),
						/* @__PURE__ */ (void 0)("p", {
							className: "mt-1 text-xs text-muted-foreground",
							children: "The owner will add stock to this branch through purchases."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 547,
							columnNumber: 192
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 547,
					columnNumber: 24
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 524,
				columnNumber: 11
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 516,
				columnNumber: 20
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6",
				children: cards.map((c) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
					className: "group border bg-card shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, {
						className: "p-4 sm:p-5",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-start justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-[11px] font-semibold uppercase tracking-wide text-muted-foreground",
									children: c.label
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 556,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "mt-2 text-xl font-extrabold tracking-tight sm:text-2xl",
									children: c.value
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 557,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 555,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(c.icon, { className: `h-[18px] w-[18px] ${c.tone}` }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 560,
									columnNumber: 19
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 559,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 554,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 553,
						columnNumber: 13
					}, this)
				}, c.label, false, {
					fileName: _jsxFileName,
					lineNumber: 552,
					columnNumber: 25
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 551,
				columnNumber: 7
			}, this),
			isOwner && branchStats && /* @__PURE__ */ (void 0)(Card, { children: [/* @__PURE__ */ (void 0)(CardHeader, {
				className: "border-b pb-4 sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)(CardTitle, {
					className: "text-base font-bold",
					children: t.branchPerformance
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 570,
					columnNumber: 15
				}, this), /* @__PURE__ */ (void 0)("p", {
					className: "mt-1 text-xs text-muted-foreground",
					children: "Performance for the current month"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 571,
					columnNumber: 15
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 569,
					columnNumber: 13
				}, this), /* @__PURE__ */ (void 0)(Link, {
					to: "/branches",
					className: "text-xs font-semibold text-primary hover:underline",
					children: ["View branches ", /* @__PURE__ */ (void 0)(ArrowUpRight, { className: "ml-1 inline h-3.5 w-3.5" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 573,
						columnNumber: 111
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 573,
					columnNumber: 13
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 568,
				columnNumber: 11
			}, this), /* @__PURE__ */ (void 0)(CardContent, {
				className: "p-0",
				children: /* @__PURE__ */ (void 0)("div", {
					className: "overflow-x-auto",
					children: /* @__PURE__ */ (void 0)("table", {
						className: "w-full text-sm",
						children: [/* @__PURE__ */ (void 0)("thead", {
							className: "bg-muted/40 text-xs text-muted-foreground",
							children: /* @__PURE__ */ (void 0)("tr", {
								className: "text-left",
								children: [
									/* @__PURE__ */ (void 0)("th", {
										className: "px-5 py-3 font-semibold",
										children: t.branch
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 580,
										columnNumber: 21
									}, this),
									/* @__PURE__ */ (void 0)("th", {
										className: "px-5 py-3 font-semibold",
										children: t.revenue
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 581,
										columnNumber: 21
									}, this),
									/* @__PURE__ */ (void 0)("th", {
										className: "px-5 py-3 font-semibold",
										children: t.profit
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 582,
										columnNumber: 21
									}, this),
									/* @__PURE__ */ (void 0)("th", {
										className: "px-5 py-3 font-semibold",
										children: t.totalWorkers
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 583,
										columnNumber: 21
									}, this),
									/* @__PURE__ */ (void 0)("th", {
										className: "px-5 py-3 text-right font-semibold",
										children: t.currentStock
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 584,
										columnNumber: 21
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 579,
								columnNumber: 19
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 578,
							columnNumber: 17
						}, this), /* @__PURE__ */ (void 0)("tbody", { children: branchStats.length ? branchStats.map((b) => /* @__PURE__ */ (void 0)("tr", {
							className: "border-t transition hover:bg-muted/30",
							children: [
								/* @__PURE__ */ (void 0)("td", {
									className: "px-5 py-3.5 font-semibold",
									children: b.name
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 589,
									columnNumber: 23
								}, this),
								/* @__PURE__ */ (void 0)("td", {
									className: "px-5 py-3.5 font-medium",
									children: money(b.revenue)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 590,
									columnNumber: 23
								}, this),
								/* @__PURE__ */ (void 0)("td", {
									className: "px-5 py-3.5 font-semibold text-emerald-600",
									children: money(b.profit)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 591,
									columnNumber: 23
								}, this),
								/* @__PURE__ */ (void 0)("td", {
									className: "px-5 py-3.5",
									children: numberFmt(b.workerCount)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 592,
									columnNumber: 23
								}, this),
								/* @__PURE__ */ (void 0)("td", {
									className: "px-5 py-3.5 text-right",
									children: [
										numberFmt(b.totalStock),
										" ",
										b.totalStock ? "KG" : ""
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 593,
									columnNumber: 23
								}, this)
							]
						}, b.id, true, {
							fileName: _jsxFileName,
							lineNumber: 588,
							columnNumber: 62
						}, this)) : /* @__PURE__ */ (void 0)("tr", { children: /* @__PURE__ */ (void 0)("td", {
							colSpan: 5,
							className: "px-5 py-10 text-center text-sm text-muted-foreground",
							children: t.noData
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 594,
							columnNumber: 34
						}, this) }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 594,
							columnNumber: 30
						}, this) }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 587,
							columnNumber: 17
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 577,
						columnNumber: 15
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 576,
					columnNumber: 13
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 575,
				columnNumber: 11
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 567,
				columnNumber: 34
			}, this),
			isOwner && /* @__PURE__ */ (void 0)(Card, { children: [/* @__PURE__ */ (void 0)(CardHeader, {
				className: "border-b pb-4 sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)(CardTitle, {
					className: "text-base font-bold",
					children: "Today’s worker performance"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 604,
					columnNumber: 15
				}, this), /* @__PURE__ */ (void 0)("p", {
					className: "mt-1 text-xs text-muted-foreground",
					children: "Daily sales and customers added by each worker."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 605,
					columnNumber: 15
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 603,
					columnNumber: 13
				}, this), /* @__PURE__ */ (void 0)(Link, {
					to: "/sales",
					className: "text-xs font-semibold text-primary hover:underline",
					children: ["View daily sales ", /* @__PURE__ */ (void 0)(ArrowUpRight, { className: "ml-1 inline h-3.5 w-3.5" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 607,
						columnNumber: 111
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 607,
					columnNumber: 13
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 602,
				columnNumber: 11
			}, this), /* @__PURE__ */ (void 0)(CardContent, {
				className: "p-0",
				children: workerPerformance.length > 0 ? /* @__PURE__ */ (void 0)("div", {
					className: "overflow-x-auto",
					children: /* @__PURE__ */ (void 0)("table", {
						className: "w-full min-w-[620px] text-sm",
						children: [/* @__PURE__ */ (void 0)("thead", {
							className: "bg-muted/40 text-xs text-muted-foreground",
							children: /* @__PURE__ */ (void 0)("tr", { children: [
								/* @__PURE__ */ (void 0)("th", {
									className: "px-5 py-3 text-left font-semibold",
									children: "Worker"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 610,
									columnNumber: 191
								}, this),
								/* @__PURE__ */ (void 0)("th", {
									className: "px-5 py-3 text-right font-semibold",
									children: "Sales"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 610,
									columnNumber: 252
								}, this),
								/* @__PURE__ */ (void 0)("th", {
									className: "px-5 py-3 text-right font-semibold",
									children: "Sales value"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 610,
									columnNumber: 313
								}, this),
								/* @__PURE__ */ (void 0)("th", {
									className: "px-5 py-3 text-right font-semibold",
									children: "Customers added"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 610,
									columnNumber: 380
								}, this)
							] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 610,
								columnNumber: 187
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 610,
							columnNumber: 126
						}, this), /* @__PURE__ */ (void 0)("tbody", { children: workerPerformance.map((worker) => /* @__PURE__ */ (void 0)("tr", {
							className: "border-t transition hover:bg-muted/30",
							children: [
								/* @__PURE__ */ (void 0)("td", {
									className: "px-5 py-3.5 font-semibold",
									children: worker.workerName
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 610,
									columnNumber: 578
								}, this),
								/* @__PURE__ */ (void 0)("td", {
									className: "px-5 py-3.5 text-right",
									children: numberFmt(worker.salesCount)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 610,
									columnNumber: 644
								}, this),
								/* @__PURE__ */ (void 0)("td", {
									className: "px-5 py-3.5 text-right font-semibold",
									children: money(worker.salesValue)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 610,
									columnNumber: 718
								}, this),
								/* @__PURE__ */ (void 0)("td", {
									className: "px-5 py-3.5 text-right",
									children: numberFmt(worker.customersAdded)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 610,
									columnNumber: 802
								}, this)
							]
						}, worker.userId, true, {
							fileName: _jsxFileName,
							lineNumber: 610,
							columnNumber: 504
						}, this)) }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 610,
							columnNumber: 464
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 610,
						columnNumber: 78
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 610,
					columnNumber: 45
				}, this) : /* @__PURE__ */ (void 0)("div", {
					className: "px-5 py-12 text-center",
					children: [
						/* @__PURE__ */ (void 0)(Users, { className: "mx-auto h-8 w-8 text-muted-foreground/35" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 610,
							columnNumber: 952
						}, this),
						/* @__PURE__ */ (void 0)("p", {
							className: "mt-2 text-sm font-medium",
							children: "No workers assigned yet"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 610,
							columnNumber: 1014
						}, this),
						/* @__PURE__ */ (void 0)("p", {
							className: "mt-1 text-xs text-muted-foreground",
							children: "Daily team performance will appear here as workers record sales and customers."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 610,
							columnNumber: 1081
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 610,
					columnNumber: 912
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 609,
				columnNumber: 11
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 601,
				columnNumber: 19
			}, this),
			isOwner && /* @__PURE__ */ (void 0)(Card, { children: [/* @__PURE__ */ (void 0)(CardHeader, {
				className: "border-b pb-4 sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)(CardTitle, {
					className: "text-base font-bold",
					children: "Worker activity"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 617,
					columnNumber: 15
				}, this), /* @__PURE__ */ (void 0)("p", {
					className: "mt-1 text-xs text-muted-foreground",
					children: "Recent sales and customer records created by your team."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 618,
					columnNumber: 15
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 616,
					columnNumber: 13
				}, this), /* @__PURE__ */ (void 0)("div", {
					className: "flex items-center gap-3 text-xs font-semibold",
					children: [/* @__PURE__ */ (void 0)(Link, {
						to: "/customers",
						className: "text-primary hover:underline",
						children: "Customers"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 621,
						columnNumber: 15
					}, this), /* @__PURE__ */ (void 0)(Link, {
						to: "/sales",
						className: "text-primary hover:underline",
						children: ["Sales ", /* @__PURE__ */ (void 0)(ArrowUpRight, { className: "ml-1 inline h-3.5 w-3.5" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 622,
							columnNumber: 80
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 622,
						columnNumber: 15
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 620,
					columnNumber: 13
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 615,
				columnNumber: 11
			}, this), /* @__PURE__ */ (void 0)(CardContent, {
				className: "p-0",
				children: workerActivity.length > 0 ? /* @__PURE__ */ (void 0)("div", {
					className: "divide-y",
					children: workerActivity.map((activity) => {
						const Icon = activity.type === "sale" ? ShoppingBag : UserPlus;
						return /* @__PURE__ */ (void 0)("div", {
							className: "flex items-center gap-3 px-5 py-3.5 transition hover:bg-muted/30",
							children: [
								/* @__PURE__ */ (void 0)("div", {
									className: `flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${activity.type === "sale" ? "bg-primary/10 text-primary" : "bg-sky-100 text-sky-700"}`,
									children: /* @__PURE__ */ (void 0)(Icon, { className: "h-4 w-4" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 631,
										columnNumber: 25
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 630,
									columnNumber: 23
								}, this),
								/* @__PURE__ */ (void 0)("div", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ (void 0)("p", {
										className: "truncate text-sm font-semibold",
										children: activity.title
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 634,
										columnNumber: 25
									}, this), /* @__PURE__ */ (void 0)("p", {
										className: "mt-0.5 truncate text-xs text-muted-foreground",
										children: [
											activity.detail,
											" · ",
											activity.branchName
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 635,
										columnNumber: 25
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 633,
									columnNumber: 23
								}, this),
								/* @__PURE__ */ (void 0)("div", {
									className: "shrink-0 text-right",
									children: [activity.amount !== void 0 && /* @__PURE__ */ (void 0)("p", {
										className: "text-sm font-bold",
										children: money(activity.amount)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 638,
										columnNumber: 59
									}, this), /* @__PURE__ */ (void 0)("p", {
										className: "text-xs text-muted-foreground",
										children: [
											activity.workerName,
											" · ",
											fmtDateTime(activity.createdAt)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 639,
										columnNumber: 25
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 637,
									columnNumber: 23
								}, this)
							]
						}, activity.id, true, {
							fileName: _jsxFileName,
							lineNumber: 629,
							columnNumber: 20
						}, this);
					})
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 626,
					columnNumber: 42
				}, this) : /* @__PURE__ */ (void 0)("div", {
					className: "px-5 py-12 text-center",
					children: [
						/* @__PURE__ */ (void 0)(Users, { className: "mx-auto h-8 w-8 text-muted-foreground/35" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 644,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ (void 0)("p", {
							className: "mt-2 text-sm font-medium",
							children: "No worker activity yet"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 645,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ (void 0)("p", {
							className: "mt-1 text-xs text-muted-foreground",
							children: "Sales and customers recorded by workers will appear here."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 646,
							columnNumber: 17
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 643,
					columnNumber: 24
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 625,
				columnNumber: 11
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 614,
				columnNumber: 19
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid gap-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, {
					className: "border-b pb-4",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, {
							className: "text-base font-bold",
							children: t.recentTransactions
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 656,
							columnNumber: 17
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mt-1 text-xs text-muted-foreground",
							children: "Latest sales recorded in the system"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 657,
							columnNumber: 17
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 655,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/sales",
							className: "text-xs font-semibold text-primary hover:underline",
							children: "View all"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 659,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 654,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 653,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, {
					className: "p-0",
					children: recent && recent.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "divide-y",
						children: recent.map((s) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center justify-between gap-4 px-5 py-3.5 transition hover:bg-muted/30",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "truncate text-sm font-semibold",
									children: s.products?.name
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 666,
									columnNumber: 23
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "mt-0.5 truncate text-xs text-muted-foreground",
									children: [
										s.branches?.name,
										" · ",
										fmtDate(s.sale_date),
										" · ",
										s.customer_name ?? "Walk-in customer"
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 667,
									columnNumber: 23
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 665,
								columnNumber: 21
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "shrink-0 text-right",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-sm font-bold",
									children: money(Number(s.selling_price) * Number(s.quantity))
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 670,
									columnNumber: 23
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "mt-0.5 text-xs font-semibold text-emerald-600",
									children: ["+", money(s.profit)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 671,
									columnNumber: 23
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 669,
								columnNumber: 21
							}, this)]
						}, s.id, true, {
							fileName: _jsxFileName,
							lineNumber: 664,
							columnNumber: 41
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 663,
						columnNumber: 44
					}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "px-5 py-12 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TrendingUp, { className: "mx-auto h-8 w-8 text-muted-foreground/35" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 675,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-2 text-sm font-medium",
								children: t.noData
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 676,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: "Sales will appear here as they are recorded."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 677,
								columnNumber: 17
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 674,
						columnNumber: 24
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 662,
					columnNumber: 11
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 652,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, {
					className: "border-b pb-4",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, {
							className: "text-base font-bold",
							children: t.lowStockLabel
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 686,
							columnNumber: 17
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mt-1 text-xs text-muted-foreground",
							children: "Products below 1,000 kg that may need restocking"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 687,
							columnNumber: 17
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 685,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/inventory",
							className: "text-xs font-semibold text-primary hover:underline",
							children: "Manage stock"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 689,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 684,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 683,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, {
					className: "p-0",
					children: stats?.lowStock && stats.lowStock.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "divide-y",
						children: stats.lowStock.map((i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center justify-between gap-4 px-5 py-3.5",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex min-w-0 items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-700",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TriangleAlert, { className: "h-4 w-4" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 697,
										columnNumber: 25
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 696,
									columnNumber: 23
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "truncate text-sm font-semibold",
									children: i.products?.name
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 699,
									columnNumber: 23
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 695,
								columnNumber: 21
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "shrink-0 rounded-full bg-amber-100 px-2.5 py-1 text-xs font-bold text-amber-800",
								children: [
									numberFmt(i.quantity),
									" / ",
									i.products?.unit
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 701,
								columnNumber: 21
							}, this)]
						}, i.product_id, true, {
							fileName: _jsxFileName,
							lineNumber: 694,
							columnNumber: 49
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 693,
						columnNumber: 61
					}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "px-5 py-12 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Boxes, { className: "mx-auto h-8 w-8 text-emerald-600/45" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 704,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-2 text-sm font-medium",
								children: "Stock levels look healthy"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 705,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: localized("Nta bicuruzwa bifite ububiko buke.", "No products are low in stock.")
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 706,
								columnNumber: 17
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 703,
						columnNumber: 24
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 692,
					columnNumber: 11
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 682,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 651,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 460,
		columnNumber: 10
	}, this);
}
//#endregion
export { Dashboard as component };
