import { o as __toESM } from "./_runtime.mjs";
import { u as require_react } from "./_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "./_libs/react.mjs";
import { t as supabase } from "./_ssr/client-CSPvjf5l.mjs";
import { y as Navigate } from "./_libs/@tanstack/react-router+[...].mjs";
import { i as useQueryClient, n as useQuery, t as useMutation } from "./_libs/tanstack__react-query.mjs";
import { n as toast } from "./_libs/sonner.mjs";
import { Z as ArrowLeftRight, b as Search, l as TriangleAlert } from "./_libs/lucide-react.mjs";
import { A as localized, D as formatErrorMessage, M as numberFmt, N as t, S as Button, _ as Input, d as Card, f as CardContent, g as Label, h as CardTitle, j as money, m as CardHeader, w as fmtDate, x as useIsOwner } from "./_ssr/router-VEvSM2XK.mjs";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./_ssr/table-DSESHGZo.mjs";
import { a as DialogHeader, i as DialogFooter, n as DialogContent, o as DialogTitle, s as DialogTrigger, t as Dialog } from "./_ssr/dialog-VjFMg87O.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./_ssr/select-DQAbsK5N.mjs";
import { t as SetupBanner } from "./_ssr/setup-banner-DzbkPQ2z.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_authenticated.transfers-B2F0zaLd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/_authenticated.transfers.tsx?tsr-split=component";
function TransfersPage() {
	const isOwner = useIsOwner();
	const qc = useQueryClient();
	const [open, setOpen] = (0, import_react.useState)(false);
	const [search, setSearch] = (0, import_react.useState)("");
	const [form, setForm] = (0, import_react.useState)({
		from_branch: "",
		to_branch: "",
		product_id: "",
		quantity: "",
		reason: ""
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
			const { data, error } = await supabase.from("products").select("id, name, unit").eq("status", true).order("name");
			if (error) throw error;
			return data ?? [];
		}
	});
	const { data: sourceStock } = useQuery({
		queryKey: [
			"transfer-stock",
			form.from_branch,
			form.product_id
		],
		enabled: !!form.from_branch && !!form.product_id,
		queryFn: async () => {
			const { data, error } = await supabase.from("inventory").select("quantity, avg_cost").eq("branch_id", form.from_branch).eq("product_id", form.product_id).maybeSingle();
			if (error) throw error;
			return data ?? {
				quantity: 0,
				avg_cost: 0
			};
		}
	});
	const { data: movements = [] } = useQuery({
		queryKey: ["transfer-movements"],
		staleTime: 6e4,
		queryFn: async () => {
			const { data, error } = await supabase.from("inventory_movements").select("id, branch_id, product_id, type, quantity, ref_type, created_at, products(name, unit), branches(name)").eq("ref_type", "transfer").order("created_at", { ascending: false }).limit(200);
			if (error) throw error;
			return data ?? [];
		}
	});
	const selectedProduct = products.find((p) => p.id === form.product_id);
	const availableQty = Number(sourceStock?.quantity ?? 0);
	const canSave = () => {
		if (!form.from_branch) return t.chooseBranch;
		if (!form.to_branch) return localized("Hitamo ishami ryo kwakira ububiko.", "Select the receiving branch.");
		if (!form.product_id) return t.chooseProduct;
		if (!form.quantity || Number(form.quantity) <= 0) return t.invalidNumber;
		if (Number(form.quantity) > availableQty) return t.noStockEnough;
		return null;
	};
	const save = useMutation({
		mutationFn: async () => {
			const err = canSave();
			if (err) throw new Error(err);
			const { error } = await supabase.rpc("transfer_stock", {
				p_from_branch: form.from_branch,
				p_to_branch: form.to_branch,
				p_product_id: form.product_id,
				p_quantity: Number(form.quantity),
				p_reason: form.reason || null
			});
			if (error) throw error;
		},
		onSuccess: () => {
			toast.success(t.transferComplete);
			qc.invalidateQueries({ queryKey: ["transfer-movements"] });
			qc.invalidateQueries({ queryKey: ["inventory-list"] });
			qc.invalidateQueries({ queryKey: ["inventory"] });
			qc.invalidateQueries({ queryKey: ["dashboard-stats"] });
			setOpen(false);
			setForm({
				from_branch: "",
				to_branch: "",
				product_id: "",
				quantity: "",
				reason: ""
			});
		},
		onError: (e) => {
			toast.error(formatErrorMessage(e));
		}
	});
	const fromBranches = branches.filter((b) => b.id !== form.to_branch);
	const toBranches = branches.filter((b) => b.id !== form.from_branch);
	if (!isOwner) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Navigate, {
		to: "/dashboard",
		replace: true
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 163,
		columnNumber: 24
	}, this);
	const filteredMovements = movements.filter((m) => m.products?.name?.toLowerCase().includes(search.toLowerCase()) || m.branches?.name?.toLowerCase().includes(search.toLowerCase()));
	const openNew = () => {
		setForm({
			from_branch: "",
			to_branch: "",
			product_id: "",
			quantity: "",
			reason: ""
		});
		setOpen(true);
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "text-2xl font-extrabold tracking-tight sm:text-3xl",
					children: t.transfers
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 178,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "text-sm text-muted-foreground",
					children: localized("Hindura ububiko ubugenzure hagati y'amashami.", "Move inventory between branches with a complete record.")
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 179,
					columnNumber: 11
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 177,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog, {
					open,
					onOpenChange: setOpen,
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							disabled: branches.length === 0 || products.length === 0,
							onClick: openNew,
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowLeftRight, { className: "mr-2 h-4 w-4" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 186,
									columnNumber: 15
								}, this),
								" ",
								t.add
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 185,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 184,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent, {
						className: "max-w-lg",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTitle, { children: localized("Iyimura ry'ububiko", "Stock transfer") }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 191,
								columnNumber: 15
							}, this) }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 190,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "space-y-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { children: "Sending branch *" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 196,
											columnNumber: 17
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, {
											value: form.from_branch,
											onValueChange: (v) => setForm({
												...form,
												from_branch: v,
												product_id: "",
												quantity: ""
											}),
											disabled: branches.length <= 1,
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectValue, {}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 204,
												columnNumber: 21
											}, this) }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 203,
												columnNumber: 19
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectContent, { children: fromBranches.map((b) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, {
												value: b.id,
												children: [
													b.name,
													" ",
													b.code ? `(${b.code})` : ""
												]
											}, b.id, true, {
												fileName: _jsxFileName,
												lineNumber: 207,
												columnNumber: 51
											}, this)) }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 206,
												columnNumber: 19
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 197,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 195,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { children: "Receiving branch *" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 216,
											columnNumber: 17
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, {
											value: form.to_branch,
											onValueChange: (v) => setForm({
												...form,
												to_branch: v,
												product_id: "",
												quantity: ""
											}),
											disabled: branches.length <= 1,
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectValue, {}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 224,
												columnNumber: 21
											}, this) }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 223,
												columnNumber: 19
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectContent, { children: toBranches.map((b) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, {
												value: b.id,
												children: [
													b.name,
													" ",
													b.code ? `(${b.code})` : ""
												]
											}, b.id, true, {
												fileName: _jsxFileName,
												lineNumber: 227,
												columnNumber: 49
											}, this)) }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 226,
												columnNumber: 19
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 217,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 215,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "space-y-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { children: [t.product, " *"] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 236,
												columnNumber: 17
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, {
												value: form.product_id,
												onValueChange: (v) => setForm({
													...form,
													product_id: v,
													quantity: ""
												}),
												disabled: !form.from_branch || !form.to_branch || form.from_branch === form.to_branch,
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectValue, {}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 243,
													columnNumber: 21
												}, this) }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 242,
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
													lineNumber: 246,
													columnNumber: 47
												}, this)) }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 245,
													columnNumber: 19
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 237,
												columnNumber: 17
											}, this),
											form.from_branch && form.product_id && selectedProduct && /* @__PURE__ */ (void 0)("p", {
												className: "text-xs text-muted-foreground",
												children: [
													t.currentStock,
													": ",
													/* @__PURE__ */ (void 0)("strong", { children: numberFmt(availableQty) }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 252,
														columnNumber: 39
													}, this),
													" ",
													selectedProduct.unit ?? "",
													" · ",
													t.avgCost,
													":",
													" ",
													money(Number(sourceStock?.avg_cost ?? 0))
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 251,
												columnNumber: 76
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 235,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "space-y-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { children: [t.quantity, " *"] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 260,
												columnNumber: 17
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
												type: "number",
												min: 0,
												step: "0.01",
												value: form.quantity,
												onChange: (e) => setForm({
													...form,
													quantity: e.target.value
												}),
												max: availableQty
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 261,
												columnNumber: 17
											}, this),
											form.from_branch && form.product_id && Number(form.quantity) > availableQty && /* @__PURE__ */ (void 0)("div", {
												className: "flex items-center gap-2 rounded-md border border-destructive/30 bg-destructive/5 p-2 text-xs text-destructive",
												children: [
													/* @__PURE__ */ (void 0)(TriangleAlert, { className: "h-3 w-3" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 266,
														columnNumber: 21
													}, this),
													t.noStockEnough,
													" — Hari ",
													numberFmt(availableQty),
													" ",
													selectedProduct?.unit ?? "",
													" ",
													"ariko wifuza ",
													form.quantity,
													" ",
													selectedProduct?.unit ?? "",
													"."
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 265,
												columnNumber: 97
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 259,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { children: "Reason (optional)" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 274,
											columnNumber: 17
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
											value: form.reason,
											onChange: (e) => setForm({
												...form,
												reason: e.target.value
											})
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 275,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 273,
										columnNumber: 15
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 193,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
								variant: "outline",
								onClick: () => setOpen(false),
								children: t.cancel
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 282,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
								onClick: () => save.mutate(),
								disabled: save.isPending || !!canSave(),
								className: "gap-1",
								children: [
									save.isPending && /* @__PURE__ */ (void 0)("span", {
										className: "animate-spin",
										children: "↻"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 286,
										columnNumber: 36
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowLeftRight, { className: "h-4 w-4" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 287,
										columnNumber: 17
									}, this),
									"Confirm transfer"
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 285,
								columnNumber: 15
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 281,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 189,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 183,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 176,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SetupBanner, { steps: [
				...branches.length === 0 ? [{
					message: localized("Banza wongereho ishami mbere yo kwimura ububiko.", "Add a branch before transferring inventory."),
					to: "/branches",
					label: t.branches
				}] : [],
				...branches.length > 0 && branches.length < 2 ? [{
					message: localized("Ongeraho nibura amashami abiri kugira ngo ubashe kwimura ububiko.", "Add at least two branches before transferring inventory."),
					to: "/branches",
					label: t.branches
				}] : [],
				...products.length === 0 ? [{
					message: localized("Banza wongereho igicuruzwa mbere yo kwimura ububiko.", "Add a product before transferring inventory."),
					to: "/products",
					label: t.products
				}] : []
			] }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 295,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, { children: [
					"Transfer activity (",
					numberFmt(movements.length),
					")"
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 313,
					columnNumber: 13
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "relative max-w-sm",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 315,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
						value: search,
						onChange: (e) => setSearch(e.target.value),
						className: "pl-9"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 316,
						columnNumber: 15
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 314,
					columnNumber: 13
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 312,
				columnNumber: 11
			}, this) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 311,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "overflow-x-auto",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Table, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableRow, { children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, { children: t.date }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 325,
						columnNumber: 19
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, { children: t.product }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 326,
						columnNumber: 19
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, { children: t.branch }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 327,
						columnNumber: 19
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, { children: t.quantity }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 328,
						columnNumber: 19
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, { children: t.actions }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 329,
						columnNumber: 19
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 324,
					columnNumber: 17
				}, this) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 323,
					columnNumber: 15
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableBody, { children: filteredMovements.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableRow, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, {
					colSpan: 5,
					className: "py-10 text-center text-muted-foreground",
					children: movements.length === 0 ? t.noData : localized("Nta yandi makuru ahari.", "No additional records are available.")
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 334,
					columnNumber: 21
				}, this) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 333,
					columnNumber: 51
				}, this) : filteredMovements.map((m) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableRow, { children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, {
						className: "text-xs",
						children: fmtDate(m.created_at)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 338,
						columnNumber: 23
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, {
						className: "font-medium",
						children: m.products?.name ?? "—"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 339,
						columnNumber: 23
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, { children: [m.branches?.name ?? "—", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "mx-1 text-xs text-muted-foreground",
						children: m.type === "out" ? "→" : "←"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 342,
						columnNumber: 25
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 340,
						columnNumber: 23
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, { children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: m.type === "out" ? "text-red-600" : "text-green-600",
							children: [m.type === "out" ? "−" : "+", numberFmt(m.quantity)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 347,
							columnNumber: 25
						}, this),
						" ",
						m.products?.unit ?? ""
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 346,
						columnNumber: 23
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, { children: [m.type === "out" ? "Kuva → " : "Kugeza → ", m.branches?.name ?? "—"] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 353,
						columnNumber: 23
					}, this)
				] }, m.id, true, {
					fileName: _jsxFileName,
					lineNumber: 337,
					columnNumber: 60
				}, this)) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 332,
					columnNumber: 15
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 322,
					columnNumber: 13
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 321,
				columnNumber: 11
			}, this) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 320,
				columnNumber: 9
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 310,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 175,
		columnNumber: 10
	}, this);
}
//#endregion
export { TransfersPage as component };
