import { o as __toESM } from "./_runtime.mjs";
import { u as require_react } from "./_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "./_libs/react.mjs";
import { t as supabase } from "./_ssr/client-CSPvjf5l.mjs";
import { y as Navigate } from "./_libs/@tanstack/react-router+[...].mjs";
import { n as useQuery } from "./_libs/tanstack__react-query.mjs";
import { n as toast } from "./_libs/sonner.mjs";
import { L as Download } from "./_libs/lucide-react.mjs";
import { M as numberFmt, N as t, O as localDateInput, S as Button, _ as Input, d as Card, f as CardContent, g as Label, h as CardTitle, j as money, k as localMonthInput, m as CardHeader, w as fmtDate, y as useAuth } from "./_ssr/router-VEvSM2XK.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./_ssr/select-DQAbsK5N.mjs";
import { t as generateReportPdf } from "./_ssr/pdf-DQDnY9vy.mjs";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./_ssr/tabs-BlzeBPst.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_authenticated.reports-gslcfyk-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/_authenticated.reports.tsx?tsr-split=component";
function ReportsPage() {
	const { role } = useAuth();
	const isOwner = role?.role === "owner";
	const [tab, setTab] = (0, import_react.useState)("daily");
	const [date, setDate] = (0, import_react.useState)(localDateInput());
	const [month, setMonth] = (0, import_react.useState)(localMonthInput());
	const [year, setYear] = (0, import_react.useState)(String((/* @__PURE__ */ new Date()).getFullYear()));
	const [branchId, setBranchId] = (0, import_react.useState)(role?.branch_id ?? "all");
	const branchesQuery = useQuery({
		queryKey: ["branches-all"],
		queryFn: async () => {
			const { data, error } = await supabase.from("branches").select("id, name").order("name");
			if (error) throw error;
			return data ?? [];
		}
	});
	const branches = branchesQuery.data ?? [];
	const range = tab === "daily" ? {
		from: date,
		to: date
	} : tab === "weekly" ? (() => {
		const start = /* @__PURE__ */ new Date(`${date}T00:00:00`);
		const day = start.getDay();
		start.setDate(start.getDate() - (day === 0 ? 6 : day - 1));
		const end = new Date(start);
		end.setDate(start.getDate() + 6);
		return {
			from: localDateInput(start),
			to: localDateInput(end)
		};
	})() : tab === "monthly" ? (() => {
		const [y, m] = month.split("-").map(Number);
		const start = new Date(y, m - 1, 1);
		const end = new Date(y, m, 0);
		return {
			from: localDateInput(start),
			to: localDateInput(end)
		};
	})() : {
		from: `${year}-01-01`,
		to: `${year}-12-31`
	};
	const branchFilter = isOwner ? branchId === "all" ? null : branchId : role?.branch_id ?? null;
	const reportQuery = useQuery({
		queryKey: [
			"report",
			tab,
			range.from,
			range.to,
			branchFilter
		],
		queryFn: async () => {
			const withBranch = (q) => branchFilter ? q.eq("branch_id", branchFilter) : q;
			const salesQ = withBranch(supabase.from("sales").select("quantity, selling_price, profit, sale_date, customer_name, products(name), branches(name)").gte("sale_date", range.from).lte("sale_date", range.to).order("sale_date", { ascending: false }));
			const purchQ = withBranch(supabase.from("purchases").select("quantity, buying_price, transport_cost, supplier, purchase_date, products(name), branches(name)").gte("purchase_date", range.from).lte("purchase_date", range.to).order("purchase_date", { ascending: false }));
			const expQ = withBranch(supabase.from("expenses").select("description, amount, expense_date, branches(name)").gte("expense_date", range.from).lte("expense_date", range.to).order("expense_date", { ascending: false }));
			const [salesResult, purchasesResult, expensesResult] = await Promise.all([
				salesQ,
				purchQ,
				expQ
			]);
			if (salesResult.error) throw salesResult.error;
			if (purchasesResult.error) throw purchasesResult.error;
			if (expensesResult.error) throw expensesResult.error;
			const sales = salesResult.data;
			const purchases = purchasesResult.data;
			const expenses = expensesResult.data;
			const totalSales = (sales ?? []).reduce((s, x) => s + Number(x.selling_price) * Number(x.quantity), 0);
			const totalProfit = (sales ?? []).reduce((s, x) => s + Number(x.profit), 0);
			const totalPurchases = (purchases ?? []).reduce((s, x) => s + Number(x.buying_price) * Number(x.quantity) + Number(x.transport_cost), 0);
			const totalExpenses = (expenses ?? []).reduce((s, x) => s + Number(x.amount), 0);
			return {
				sales: sales ?? [],
				purchases: purchases ?? [],
				expenses: expenses ?? [],
				totals: {
					sales: totalSales,
					profit: totalProfit,
					purchases: totalPurchases,
					expenses: totalExpenses,
					net: totalProfit - totalExpenses,
					customers: new Set((sales ?? []).map((sale) => sale.customer_name).filter(Boolean)).size
				}
			};
		}
	});
	const report = reportQuery.data;
	if (role && !isOwner) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Navigate, {
		to: "/dashboard",
		replace: true
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 105,
		columnNumber: 32
	}, this);
	if (branchesQuery.isError || reportQuery.isError) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
			className: "text-2xl font-extrabold tracking-tight sm:text-3xl",
			children: t.reports
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 108,
			columnNumber: 9
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, {
			className: "flex flex-col items-center gap-3 py-12 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "text-sm text-muted-foreground",
				children: t.errorGeneric
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 111,
				columnNumber: 13
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
				variant: "outline",
				onClick: () => {
					branchesQuery.refetch();
					reportQuery.refetch();
				},
				children: t.tryAgain
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 112,
				columnNumber: 13
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 110,
			columnNumber: 11
		}, this) }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 109,
			columnNumber: 9
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 107,
		columnNumber: 12
	}, this);
	const doDownload = () => {
		if (!report) return;
		const branchName = branchFilter ? branches.find((b) => b.id === branchFilter)?.name ?? "—" : "Amashami yose";
		const title = tab === "daily" ? `${t.dailyReport} - ${fmtDate(date)}` : tab === "weekly" ? `${t.weeklyReport} - ${range.from}` : tab === "monthly" ? `${t.monthlyReport} - ${month}` : `${t.annualReport} - ${year}`;
		const period = `${fmtDate(range.from)} → ${fmtDate(range.to)}`;
		generateReportPdf({
			title,
			period,
			branchName,
			sales: report.sales.map((s) => ({
				date: s.sale_date,
				product: s.products?.name ?? "",
				customer: s.customer_name ?? "-",
				qty: Number(s.quantity),
				price: Number(s.selling_price),
				profit: Number(s.profit)
			})),
			purchases: report.purchases.map((p) => ({
				date: p.purchase_date,
				product: p.products?.name ?? "",
				supplier: p.supplier,
				qty: Number(p.quantity),
				price: Number(p.buying_price),
				transport: Number(p.transport_cost)
			})),
			expenses: report.expenses.map((e) => ({
				date: e.expense_date,
				description: e.description,
				amount: Number(e.amount)
			})),
			totals: report.totals
		});
		toast.success("PDF yamanuwe");
	};
	const kpis = [
		{
			label: t.totalSales,
			value: money(report?.totals.sales ?? 0),
			tone: "text-primary"
		},
		{
			label: t.totalProfit,
			value: money(report?.totals.profit ?? 0),
			tone: "text-success"
		},
		{
			label: t.totalPurchases,
			value: money(report?.totals.purchases ?? 0),
			tone: ""
		},
		{
			label: t.totalExpenses,
			value: money(report?.totals.expenses ?? 0),
			tone: "text-destructive"
		},
		{
			label: t.netProfit,
			value: money(report?.totals.net ?? 0),
			tone: "text-primary font-bold"
		},
		{
			label: t.totalCustomers,
			value: numberFmt(report?.totals.customers ?? 0),
			tone: "text-primary"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
				className: "text-2xl font-extrabold tracking-tight sm:text-3xl",
				children: t.reports
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 183,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "text-sm text-muted-foreground",
				children: t.reportDescription
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 184,
				columnNumber: 9
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 182,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs, {
				value: tab,
				onValueChange: (v) => setTab(v),
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsList, { children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsTrigger, {
							value: "daily",
							children: t.dailyReport
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 191,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsTrigger, {
							value: "weekly",
							children: t.weeklyReport
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 192,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsTrigger, {
							value: "monthly",
							children: t.monthlyReport
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 193,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsTrigger, {
							value: "annual",
							children: t.annualReport
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 194,
							columnNumber: 15
						}, this)
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 190,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsContent, {
						value: "daily",
						className: "mt-4",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex flex-wrap items-end gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { children: t.date }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 199,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
										type: "date",
										value: date,
										onChange: (e) => setDate(e.target.value)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 200,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 198,
									columnNumber: 17
								}, this),
								isOwner && /* @__PURE__ */ (void 0)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (void 0)(Label, { children: t.branch }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 203,
										columnNumber: 21
									}, this), /* @__PURE__ */ (void 0)(Select, {
										value: branchId,
										onValueChange: setBranchId,
										children: [/* @__PURE__ */ (void 0)(SelectTrigger, {
											className: "w-48",
											children: /* @__PURE__ */ (void 0)(SelectValue, {}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 205,
												columnNumber: 55
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 205,
											columnNumber: 23
										}, this), /* @__PURE__ */ (void 0)(SelectContent, { children: [/* @__PURE__ */ (void 0)(SelectItem, {
											value: "all",
											children: "Amashami yose"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 207,
											columnNumber: 25
										}, this), branches.map((b) => /* @__PURE__ */ (void 0)(SelectItem, {
											value: b.id,
											children: b.name
										}, b.id, false, {
											fileName: _jsxFileName,
											lineNumber: 208,
											columnNumber: 51
										}, this))] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 206,
											columnNumber: 23
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 204,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 202,
									columnNumber: 29
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
									onClick: doDownload,
									disabled: !report,
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Download, { className: "mr-2 h-4 w-4" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 212,
											columnNumber: 65
										}, this),
										" ",
										t.downloadPdf
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 212,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 197,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 196,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsContent, {
						value: "weekly",
						className: "mt-4",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex flex-wrap items-end gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { children: t.weekOf }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 217,
										columnNumber: 44
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
										type: "date",
										value: date,
										onChange: (e) => setDate(e.target.value)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 217,
										columnNumber: 69
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 217,
									columnNumber: 17
								}, this),
								isOwner && /* @__PURE__ */ (void 0)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (void 0)(Label, { children: t.branch }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 218,
										columnNumber: 56
									}, this), /* @__PURE__ */ (void 0)(Select, {
										value: branchId,
										onValueChange: setBranchId,
										children: [/* @__PURE__ */ (void 0)(SelectTrigger, {
											className: "w-48",
											children: /* @__PURE__ */ (void 0)(SelectValue, {}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 218,
												columnNumber: 166
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 218,
											columnNumber: 134
										}, this), /* @__PURE__ */ (void 0)(SelectContent, { children: [/* @__PURE__ */ (void 0)(SelectItem, {
											value: "all",
											children: t.allBranches
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 218,
											columnNumber: 212
										}, this), branches.map((b) => /* @__PURE__ */ (void 0)(SelectItem, {
											value: b.id,
											children: b.name
										}, b.id, false, {
											fileName: _jsxFileName,
											lineNumber: 218,
											columnNumber: 290
										}, this))] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 218,
											columnNumber: 197
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 218,
										columnNumber: 81
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 218,
									columnNumber: 29
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
									onClick: doDownload,
									disabled: !report,
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Download, { className: "mr-2 h-4 w-4" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 219,
										columnNumber: 65
									}, this), t.downloadPdf]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 219,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 216,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 215,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsContent, {
						value: "monthly",
						className: "mt-4",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex flex-wrap items-end gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { children: "Ukwezi" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 225,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
										type: "month",
										value: month,
										onChange: (e) => setMonth(e.target.value)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 226,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 224,
									columnNumber: 17
								}, this),
								isOwner && /* @__PURE__ */ (void 0)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (void 0)(Label, { children: t.branch }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 229,
										columnNumber: 21
									}, this), /* @__PURE__ */ (void 0)(Select, {
										value: branchId,
										onValueChange: setBranchId,
										children: [/* @__PURE__ */ (void 0)(SelectTrigger, {
											className: "w-48",
											children: /* @__PURE__ */ (void 0)(SelectValue, {}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 231,
												columnNumber: 55
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 231,
											columnNumber: 23
										}, this), /* @__PURE__ */ (void 0)(SelectContent, { children: [/* @__PURE__ */ (void 0)(SelectItem, {
											value: "all",
											children: "Amashami yose"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 233,
											columnNumber: 25
										}, this), branches.map((b) => /* @__PURE__ */ (void 0)(SelectItem, {
											value: b.id,
											children: b.name
										}, b.id, false, {
											fileName: _jsxFileName,
											lineNumber: 234,
											columnNumber: 51
										}, this))] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 232,
											columnNumber: 23
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 230,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 228,
									columnNumber: 29
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
									onClick: doDownload,
									disabled: !report,
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Download, { className: "mr-2 h-4 w-4" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 238,
											columnNumber: 65
										}, this),
										" ",
										t.downloadPdf
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 238,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 223,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 222,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsContent, {
						value: "annual",
						className: "mt-4",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex flex-wrap items-end gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { children: t.year }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 243,
										columnNumber: 44
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
										type: "number",
										min: "2000",
										max: "2100",
										value: year,
										onChange: (e) => setYear(e.target.value)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 243,
										columnNumber: 67
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 243,
									columnNumber: 17
								}, this),
								isOwner && /* @__PURE__ */ (void 0)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (void 0)(Label, { children: t.branch }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 244,
										columnNumber: 56
									}, this), /* @__PURE__ */ (void 0)(Select, {
										value: branchId,
										onValueChange: setBranchId,
										children: [/* @__PURE__ */ (void 0)(SelectTrigger, {
											className: "w-48",
											children: /* @__PURE__ */ (void 0)(SelectValue, {}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 244,
												columnNumber: 166
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 244,
											columnNumber: 134
										}, this), /* @__PURE__ */ (void 0)(SelectContent, { children: [/* @__PURE__ */ (void 0)(SelectItem, {
											value: "all",
											children: t.allBranches
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 244,
											columnNumber: 212
										}, this), branches.map((b) => /* @__PURE__ */ (void 0)(SelectItem, {
											value: b.id,
											children: b.name
										}, b.id, false, {
											fileName: _jsxFileName,
											lineNumber: 244,
											columnNumber: 290
										}, this))] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 244,
											columnNumber: 197
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 244,
										columnNumber: 81
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 244,
									columnNumber: 29
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
									onClick: doDownload,
									disabled: !report,
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Download, { className: "mr-2 h-4 w-4" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 245,
										columnNumber: 65
									}, this), t.downloadPdf]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 245,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 242,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 241,
						columnNumber: 13
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 189,
				columnNumber: 11
			}, this) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 188,
				columnNumber: 9
			}, this) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 187,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-5",
				children: kpis.map((k) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
					className: "border-none shadow-sm",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, {
						className: "p-5",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-xs font-medium text-muted-foreground",
							children: k.label
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 255,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: `mt-2 text-xl ${k.tone || "font-semibold"}`,
							children: k.value
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 256,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 254,
						columnNumber: 13
					}, this)
				}, k.label, false, {
					fileName: _jsxFileName,
					lineNumber: 253,
					columnNumber: 24
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 252,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, { children: [
				"Kugurisha (",
				report?.sales.length ?? 0,
				")"
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 262,
				columnNumber: 21
			}, this) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 262,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { children: report && report.sales.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "divide-y text-sm",
				children: report.sales.slice(0, 20).map((s, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex justify-between py-2",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "font-medium",
						children: s.products?.name
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 267,
						columnNumber: 21
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-xs text-muted-foreground",
						children: [
							fmtDate(s.sale_date),
							" · ",
							s.branches?.name
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 268,
						columnNumber: 21
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 266,
						columnNumber: 19
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "text-right",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: money(Number(s.selling_price) * Number(s.quantity)) }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 271,
							columnNumber: 21
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-xs text-success",
							children: ["+", money(s.profit)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 272,
							columnNumber: 21
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 270,
						columnNumber: 19
					}, this)]
				}, i, true, {
					fileName: _jsxFileName,
					lineNumber: 265,
					columnNumber: 67
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 264,
				columnNumber: 48
			}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "py-6 text-center text-sm text-muted-foreground",
				children: t.noData
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 275,
				columnNumber: 22
			}, this) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 263,
				columnNumber: 9
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 261,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 181,
		columnNumber: 10
	}, this);
}
//#endregion
export { ReportsPage as component };
