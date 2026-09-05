import { o as __toESM } from "./_runtime.mjs";
import { u as require_react } from "./_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "./_libs/react.mjs";
import { t as supabase } from "./_ssr/client-CSPvjf5l.mjs";
import { y as Navigate } from "./_libs/@tanstack/react-router+[...].mjs";
import { i as useQueryClient, n as useQuery, t as useMutation } from "./_libs/tanstack__react-query.mjs";
import { n as toast } from "./_libs/sonner.mjs";
import { x as Plus } from "./_libs/lucide-react.mjs";
import { A as localized, D as formatErrorMessage, N as t, O as localDateInput, S as Button, _ as Input, d as Card, f as CardContent, g as Label, j as money, m as CardHeader, w as fmtDate, y as useAuth } from "./_ssr/router-VEvSM2XK.mjs";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./_ssr/table-DSESHGZo.mjs";
import { a as DialogHeader, i as DialogFooter, n as DialogContent, o as DialogTitle, s as DialogTrigger, t as Dialog } from "./_ssr/dialog-VjFMg87O.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./_ssr/select-DQAbsK5N.mjs";
import { t as SetupBanner } from "./_ssr/setup-banner-DzbkPQ2z.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_authenticated.purchases-BvLpMJYJ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/_authenticated.purchases.tsx?tsr-split=component";
function PurchasesPage() {
	const { role, user } = useAuth();
	const isOwner = role?.role === "owner";
	const qc = useQueryClient();
	const [open, setOpen] = (0, import_react.useState)(false);
	const [form, setForm] = (0, import_react.useState)({
		branch_id: role?.branch_id ?? "",
		product_id: "",
		supplier: "",
		quantity: "",
		buying_price: "",
		transport_cost: "",
		purchase_date: localDateInput()
	});
	const { data: branches = [] } = useQuery({
		queryKey: ["branches-active"],
		queryFn: async () => {
			const { data, error } = await supabase.from("branches").select("id, name").eq("status", true).order("name");
			if (error) throw error;
			return data ?? [];
		}
	});
	const { data: products = [] } = useQuery({
		queryKey: ["products-active"],
		queryFn: async () => {
			const { data, error } = await supabase.from("products").select("id, name, unit, buying_price").eq("status", true).order("name");
			if (error) throw error;
			return data ?? [];
		}
	});
	const { data: purchases = [] } = useQuery({
		queryKey: ["purchases"],
		queryFn: async () => {
			const { data, error } = await supabase.from("purchases").select("id, quantity, buying_price, transport_cost, supplier, purchase_date, products(name, unit), branches(name)").order("purchase_date", { ascending: false }).limit(200);
			if (error) throw error;
			return data ?? [];
		}
	});
	const save = useMutation({
		mutationFn: async () => {
			if (!form.branch_id) throw new Error(t.chooseBranch);
			if (!form.product_id) throw new Error(t.chooseProduct);
			const quantity = Number(form.quantity);
			const buyingPrice = Number(form.buying_price);
			const transportCost = Number(form.transport_cost || 0);
			if (!form.quantity || !form.buying_price || !Number.isFinite(quantity) || !Number.isFinite(buyingPrice) || !Number.isFinite(transportCost) || quantity <= 0 || buyingPrice < 0 || transportCost < 0) throw new Error(t.invalidNumber);
			if (!form.supplier.trim()) throw new Error(t.requiredField);
			const { error } = await supabase.from("purchases").insert({
				...form,
				quantity,
				buying_price: buyingPrice,
				transport_cost: transportCost,
				created_by: user?.id ?? null
			});
			if (error) throw error;
		},
		onSuccess: () => {
			toast.success(t.saved);
			qc.invalidateQueries({ queryKey: ["purchases"] });
			qc.invalidateQueries({ queryKey: ["inventory"] });
			setOpen(false);
			setForm({
				...form,
				product_id: "",
				supplier: "",
				quantity: "",
				buying_price: "",
				transport_cost: ""
			});
		},
		onError: (e) => toast.error(formatErrorMessage(e))
	});
	if (role && !isOwner) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Navigate, {
		to: "/dashboard",
		replace: true
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 116,
		columnNumber: 32
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "text-2xl font-extrabold tracking-tight sm:text-3xl",
					children: t.purchases
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 120,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "text-sm text-muted-foreground",
					children: localized("Andika amakuru y'amasoko y'ibicuruzwa.", "Owner-only stock receiving. Select an approved catalogue product and record the supplier purchase.")
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 121,
					columnNumber: 11
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 119,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog, {
					open,
					onOpenChange: setOpen,
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							disabled: branches.length === 0 || products.length === 0,
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "mr-2 h-4 w-4" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 125,
									columnNumber: 79
								}, this),
								" ",
								t.add
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 125,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 124,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent, { children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTitle, { children: [
							t.add,
							" ",
							t.purchases
						] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 128,
							columnNumber: 27
						}, this) }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 128,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "grid gap-4 sm:grid-cols-2",
							children: [
								isOwner && /* @__PURE__ */ (void 0)("div", {
									className: "space-y-2 sm:col-span-2",
									children: [/* @__PURE__ */ (void 0)(Label, { children: [t.branch, " *"] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 131,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)(Select, {
										value: form.branch_id,
										onValueChange: (v) => setForm({
											...form,
											branch_id: v
										}),
										children: [/* @__PURE__ */ (void 0)(SelectTrigger, { children: /* @__PURE__ */ (void 0)(SelectValue, {}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 136,
											columnNumber: 36
										}, this) }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 136,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)(SelectContent, { children: branches.map((b) => /* @__PURE__ */ (void 0)(SelectItem, {
											value: b.id,
											children: b.name
										}, b.id, false, {
											fileName: _jsxFileName,
											lineNumber: 138,
											columnNumber: 49
										}, this)) }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 137,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 132,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 130,
									columnNumber: 27
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "space-y-2 sm:col-span-2",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { children: [t.product, " *"] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 143,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, {
										value: form.product_id,
										onValueChange: (v) => {
											const p = products.find((x) => x.id === v);
											setForm({
												...form,
												product_id: v,
												buying_price: p?.buying_price ? String(p.buying_price) : ""
											});
										},
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectValue, {}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 152,
											columnNumber: 34
										}, this) }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 152,
											columnNumber: 19
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectContent, { children: products.map((p) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, {
											value: p.id,
											children: [
												p.name,
												" (",
												p.unit,
												")"
											]
										}, p.id, true, {
											fileName: _jsxFileName,
											lineNumber: 154,
											columnNumber: 47
										}, this)) }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 153,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 144,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 142,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "space-y-2 sm:col-span-2",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { children: [t.supplier, " *"] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 159,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
										value: form.supplier,
										onChange: (e) => setForm({
											...form,
											supplier: e.target.value
										})
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 160,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 158,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { children: [t.quantity, " *"] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 166,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
										type: "number",
										min: 0,
										step: "0.01",
										placeholder: "Enter quantity",
										value: form.quantity,
										onChange: (e) => setForm({
											...form,
											quantity: e.target.value
										})
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 167,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 165,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { children: [t.buyingPrice, " *"] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 173,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
										type: "number",
										min: 0,
										placeholder: "Enter purchase price",
										value: form.buying_price,
										onChange: (e) => setForm({
											...form,
											buying_price: e.target.value
										})
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 174,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 172,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { children: t.transportCost }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 180,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
										type: "number",
										min: 0,
										placeholder: "Optional",
										value: form.transport_cost,
										onChange: (e) => setForm({
											...form,
											transport_cost: e.target.value
										})
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 181,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 179,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { children: [t.purchaseDate, " *"] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 187,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
										type: "date",
										value: form.purchase_date,
										onChange: (e) => setForm({
											...form,
											purchase_date: e.target.value
										})
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 188,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 186,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 129,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							variant: "outline",
							onClick: () => setOpen(false),
							children: t.cancel
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 195,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							onClick: () => save.mutate(),
							disabled: save.isPending,
							children: t.save
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 196,
							columnNumber: 15
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 194,
							columnNumber: 13
						}, this)
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 127,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 123,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 118,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SetupBanner, { steps: [...branches.length === 0 ? [{
				message: localized("Banza wongereho ishami mbere yo kwandika isoko.", "Add a branch before recording a purchase."),
				to: "/branches",
				label: t.branches
			}] : [], ...products.length === 0 ? [{
				message: localized("Banza wongereho igicuruzwa mbere yo kwandika isoko.", "Add a product before recording a purchase."),
				to: "/products",
				label: t.products
			}] : []] }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 202,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 213,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Table, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableRow, { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, { children: t.date }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 218,
					columnNumber: 17
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, { children: t.branch }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 219,
					columnNumber: 17
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, { children: t.product }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 220,
					columnNumber: 17
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, { children: t.supplier }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 221,
					columnNumber: 17
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, { children: t.quantity }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 222,
					columnNumber: 17
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, { children: t.buyingPrice }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 223,
					columnNumber: 17
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, { children: t.transportCost }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 224,
					columnNumber: 17
				}, this)
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 217,
				columnNumber: 15
			}, this) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 216,
				columnNumber: 13
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableBody, { children: purchases.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableRow, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, {
				colSpan: 7,
				className: "py-10 text-center text-muted-foreground",
				children: t.noData
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 228,
				columnNumber: 51
			}, this) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 228,
				columnNumber: 41
			}, this) : purchases.map((p) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableRow, { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, { children: fmtDate(p.purchase_date) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 229,
					columnNumber: 21
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, { children: p.branches?.name }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 230,
					columnNumber: 21
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, {
					className: "font-medium",
					children: p.products?.name
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 231,
					columnNumber: 21
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, { children: p.supplier }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 232,
					columnNumber: 21
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, { children: [
					p.quantity,
					" ",
					p.products?.unit
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 233,
					columnNumber: 21
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, { children: money(p.buying_price) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 234,
					columnNumber: 21
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, { children: money(p.transport_cost) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 235,
					columnNumber: 21
				}, this)
			] }, p.id, true, {
				fileName: _jsxFileName,
				lineNumber: 228,
				columnNumber: 188
			}, this)) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 227,
				columnNumber: 13
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 215,
				columnNumber: 11
			}, this) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 214,
				columnNumber: 9
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 212,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 117,
		columnNumber: 10
	}, this);
}
//#endregion
export { PurchasesPage as component };
