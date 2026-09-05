import { o as __toESM } from "./_runtime.mjs";
import { u as require_react } from "./_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "./_libs/react.mjs";
import { t as supabase } from "./_ssr/client-CSPvjf5l.mjs";
import { y as Navigate } from "./_libs/@tanstack/react-router+[...].mjs";
import { i as useQueryClient, n as useQuery, t as useMutation } from "./_libs/tanstack__react-query.mjs";
import { n as toast } from "./_libs/sonner.mjs";
import { A as localized, D as formatErrorMessage, M as numberFmt, N as t, S as Button, _ as Input, b as useBranchId, d as Card, f as CardContent, g as Label, h as CardTitle, j as money, m as CardHeader, x as useIsOwner } from "./_ssr/router-VEvSM2XK.mjs";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./_ssr/table-DSESHGZo.mjs";
import { t as Badge } from "./_ssr/badge-CDodo29s.mjs";
import { a as DialogHeader, i as DialogFooter, n as DialogContent, o as DialogTitle, t as Dialog } from "./_ssr/dialog-VjFMg87O.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_authenticated.inventory-CZRby3IZ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName$1 = "/app/applet/src/lib/stock-badge.tsx";
/** Reusable stock-status badge. Uses Kinyarwanda labels. */
function StockBadge({ qty, min }) {
	if (qty <= 0) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
		variant: "outline",
		className: "border-red-600 text-red-700",
		children: "Byanka"
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 7,
		columnNumber: 7
	}, this);
	if (qty <= min) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
		variant: "outline",
		className: "border-orange-600 text-orange-700",
		children: "Birahari"
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 13,
		columnNumber: 7
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
		variant: "outline",
		className: "border-green-600 text-green-700",
		children: "Hari"
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 18,
		columnNumber: 5
	}, this);
}
var _jsxFileName = "/app/applet/src/routes/_authenticated.inventory.tsx?tsr-split=component";
function InventoryPage() {
	const isOwner = useIsOwner();
	const branchId = useBranchId();
	const qc = useQueryClient();
	const [adjustOpen, setAdjustOpen] = (0, import_react.useState)(false);
	const [adjustingItem, setAdjustingItem] = (0, import_react.useState)(null);
	const [newQty, setNewQty] = (0, import_react.useState)("");
	const [adjustReason, setAdjustReason] = (0, import_react.useState)("");
	const { data: inventory = [] } = useQuery({
		queryKey: [
			"inventory-list",
			branchId,
			isOwner
		],
		staleTime: 6e4,
		queryFn: async () => {
			let q = supabase.from("inventory").select("quantity, avg_cost, product_id, branch_id, products(name, unit, category, min_stock), branches(name, code)");
			if (!isOwner && branchId) q = q.eq("branch_id", branchId);
			const { data } = await q;
			return data ?? [];
		}
	});
	const totalItems = inventory.length;
	const totalValue = inventory.reduce((s, i) => s + Number(i.quantity) * Number(i.avg_cost ?? 0), 0);
	const lowCount = inventory.filter((i) => Number(i.quantity) > 0 && Number(i.quantity) <= Number(i.products?.min_stock ?? 0)).length;
	const outCount = inventory.filter((i) => Number(i.quantity) <= 0).length;
	const adjustStock = useMutation({
		mutationFn: async () => {
			if (!adjustingItem) throw new Error(t.requiredField);
			const qty = Number(newQty);
			if (qty < 0) throw new Error("Ingano ntishobora kuba munsi ya zero");
			const { error } = await supabase.rpc("adjust_stock", {
				p_branch_id: adjustingItem.branch_id,
				p_product_id: adjustingItem.product_id,
				p_new_quantity: qty,
				p_reason: adjustReason || null
			});
			if (error) throw error;
		},
		onSuccess: () => {
			toast.success(t.stockAdjusted);
			qc.invalidateQueries({ queryKey: ["inventory-list"] });
			qc.invalidateQueries({ queryKey: ["inventory"] });
			qc.invalidateQueries({ queryKey: ["dashboard-stats"] });
			setAdjustOpen(false);
			setAdjustingItem(null);
			setNewQty("");
			setAdjustReason("");
		},
		onError: (e) => {
			toast.error(formatErrorMessage(e));
		}
	});
	const openAdjust = (item) => {
		setAdjustingItem({
			branch_id: item.branch_id,
			product_id: item.product_id,
			product_name: item.products?.name ?? "—",
			branch_name: item.branches?.name ?? "—",
			current_qty: Number(item.quantity)
		});
		setNewQty(String(Number(item.quantity)));
		setAdjustReason("");
		setAdjustOpen(true);
	};
	if (!isOwner) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Navigate, {
		to: "/dashboard",
		replace: true
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 94,
		columnNumber: 24
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
				className: "text-2xl font-extrabold tracking-tight sm:text-3xl",
				children: t.inventory
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 97,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "text-sm text-muted-foreground",
				children: isOwner ? localized("Reba ububiko bwose n'imiterere yabwo muri buri shami.", "Review all inventory and its status in every branch.") : localized("Reba ububiko bw'ishami waherewemo.", "Review inventory assigned to your branch.")
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 98,
				columnNumber: 9
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 96,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
						className: "border-none shadow-sm",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, {
							className: "p-5",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-xs font-medium text-muted-foreground",
								children: t.totalProducts
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 107,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-2xl font-bold",
								children: numberFmt(totalItems)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 108,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 106,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 105,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
						className: "border-none shadow-sm",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, {
							className: "p-5",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-xs font-medium text-muted-foreground",
								children: t.totalInventoryValue
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 113,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-2xl font-bold",
								children: money(totalValue)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 114,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 112,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 111,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
						className: "border-none shadow-sm",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, {
							className: "p-5",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-xs font-medium text-muted-foreground",
								children: t.lowStockLabel
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 119,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-2xl font-bold text-orange-600",
								children: numberFmt(lowCount)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 120,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 118,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 117,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
						className: "border-none shadow-sm",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, {
							className: "p-5",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-xs font-medium text-muted-foreground",
								children: t.outOfStock
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 125,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-2xl font-bold text-red-600",
								children: numberFmt(outCount)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 126,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 124,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 123,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 104,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog, {
				open: adjustOpen,
				onOpenChange: setAdjustOpen,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent, {
					className: "max-w-md",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTitle, { children: t.stockAdjustment }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 135,
							columnNumber: 13
						}, this) }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 134,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "rounded-md bg-muted/30 p-3 text-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: [t.product, ":"] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 139,
												columnNumber: 18
											}, this),
											" ",
											adjustingItem?.product_name
										] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 139,
											columnNumber: 15
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: [t.branch, ":"] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 140,
												columnNumber: 18
											}, this),
											" ",
											adjustingItem?.branch_name
										] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 140,
											columnNumber: 15
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: [t.currentStock, ":"] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 141,
												columnNumber: 18
											}, this),
											" ",
											numberFmt(adjustingItem?.current_qty ?? 0)
										] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 141,
											columnNumber: 15
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 138,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "space-y-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { children: [
											t.quantity,
											" ",
											t.new,
											" *"
										] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 144,
											columnNumber: 15
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
											type: "number",
											min: 0,
											step: "0.01",
											value: newQty,
											onChange: (e) => setNewQty(e.target.value)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 145,
											columnNumber: 15
										}, this),
										Number(newQty) > (adjustingItem?.current_qty ?? 0) && /* @__PURE__ */ (void 0)("p", {
											className: "text-xs text-green-600",
											children: localized("Andika impamvu yo guhindura ububiko", "Enter the reason for this inventory adjustment")
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 146,
											columnNumber: 70
										}, this),
										Number(newQty) < (adjustingItem?.current_qty ?? 0) && /* @__PURE__ */ (void 0)("p", {
											className: "text-xs text-orange-600",
											children: localized("Sobanura impamvu, urugero: ibyangiritse cyangwa ibarura rishya", "Explain the reason, for example damaged goods or a new stock count")
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 149,
											columnNumber: 70
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 143,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { children: "Ingingo *" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 154,
										columnNumber: 15
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
										value: adjustReason,
										onChange: (e) => setAdjustReason(e.target.value)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 155,
										columnNumber: 15
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 153,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 137,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							variant: "outline",
							onClick: () => setAdjustOpen(false),
							children: t.cancel
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 159,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							onClick: () => adjustStock.mutate(),
							disabled: adjustStock.isPending || !adjustReason.trim() || !newQty,
							variant: Number(newQty) < (adjustingItem?.current_qty ?? 0) ? "destructive" : "default",
							children: [adjustStock.isPending && /* @__PURE__ */ (void 0)("span", {
								className: "mr-2 animate-spin",
								children: "↻"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 161,
								columnNumber: 41
							}, this), t.save]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 160,
							columnNumber: 13
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 158,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 133,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 132,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, { children: t.inventoryReport }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 171,
				columnNumber: 11
			}, this) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 170,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "overflow-x-auto",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Table, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableRow, { children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, { children: t.product }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 178,
						columnNumber: 19
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, { children: t.category }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 179,
						columnNumber: 19
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, { children: t.branch }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 180,
						columnNumber: 19
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, {
						className: "text-right",
						children: t.quantity
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 181,
						columnNumber: 19
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, {
						className: "text-right",
						children: t.unit
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 182,
						columnNumber: 19
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, {
						className: "text-right",
						children: t.avgCost
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 183,
						columnNumber: 19
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, {
						className: "text-right",
						children: t.totalAmount
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 184,
						columnNumber: 19
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, { children: t.stockStatus }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 185,
						columnNumber: 19
					}, this),
					isOwner && /* @__PURE__ */ (void 0)(TableHead, {
						className: "text-right",
						children: t.actions
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 186,
						columnNumber: 31
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 177,
					columnNumber: 17
				}, this) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 176,
					columnNumber: 15
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableBody, { children: inventory.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableRow, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, {
					colSpan: isOwner ? 9 : 8,
					className: "py-10 text-center text-muted-foreground",
					children: t.noStock
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 191,
					columnNumber: 21
				}, this) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 190,
					columnNumber: 43
				}, this) : inventory.map((i) => {
					const qty = Number(i.quantity);
					const min = Number(i.products?.min_stock ?? 0);
					const value = qty * Number(i.avg_cost);
					return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableRow, { children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, {
							className: "font-medium",
							children: i.products?.name
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 199,
							columnNumber: 25
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "capitalize",
							children: i.products?.category ?? "—"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 200,
							columnNumber: 36
						}, this) }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 200,
							columnNumber: 25
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, { children: [isOwner ? i.branches?.name : "—", isOwner && i.branches?.code && /* @__PURE__ */ (void 0)("span", {
							className: "ml-1 text-xs text-muted-foreground",
							children: [
								"(",
								i.branches.code,
								")"
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 203,
							columnNumber: 59
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 201,
							columnNumber: 25
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, {
							className: "text-right",
							children: numberFmt(qty)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 205,
							columnNumber: 25
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, {
							className: "text-right",
							children: i.products?.unit ?? "—"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 206,
							columnNumber: 25
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, {
							className: "text-right",
							children: money(i.avg_cost)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 207,
							columnNumber: 25
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, {
							className: "text-right font-semibold",
							children: money(value)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 208,
							columnNumber: 25
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StockBadge, {
							qty,
							min
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 210,
							columnNumber: 27
						}, this) }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 209,
							columnNumber: 25
						}, this),
						isOwner && /* @__PURE__ */ (void 0)(TableCell, {
							className: "text-right",
							children: /* @__PURE__ */ (void 0)(Button, {
								size: "sm",
								variant: "outline",
								onClick: () => openAdjust(i),
								children: t.stockAdjustment
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 213,
								columnNumber: 29
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 212,
							columnNumber: 37
						}, this)
					] }, `${i.branch_id}-${i.product_id}`, true, {
						fileName: _jsxFileName,
						lineNumber: 198,
						columnNumber: 24
					}, this);
				}) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 189,
					columnNumber: 15
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 175,
					columnNumber: 13
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 174,
				columnNumber: 11
			}, this) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 173,
				columnNumber: 9
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 169,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 95,
		columnNumber: 10
	}, this);
}
//#endregion
export { InventoryPage as component };
