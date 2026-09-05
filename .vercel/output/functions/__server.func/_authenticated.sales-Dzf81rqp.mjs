import { o as __toESM } from "./_runtime.mjs";
import { u as require_react } from "./_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "./_libs/react.mjs";
import { t as supabase } from "./_ssr/client-CSPvjf5l.mjs";
import { i as useQueryClient, n as useQuery, t as useMutation } from "./_libs/tanstack__react-query.mjs";
import { n as toast } from "./_libs/sonner.mjs";
import { x as Plus } from "./_libs/lucide-react.mjs";
import { A as localized, D as formatErrorMessage, N as t, O as localDateInput, S as Button, _ as Input, b as useBranchId, d as Card, f as CardContent, g as Label, h as CardTitle, j as money, m as CardHeader, w as fmtDate, x as useIsOwner, y as useAuth } from "./_ssr/router-VEvSM2XK.mjs";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./_ssr/table-DSESHGZo.mjs";
import { a as DialogHeader, i as DialogFooter, n as DialogContent, o as DialogTitle, s as DialogTrigger, t as Dialog } from "./_ssr/dialog-VjFMg87O.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./_ssr/select-DQAbsK5N.mjs";
import { t as SetupBanner } from "./_ssr/setup-banner-DzbkPQ2z.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_authenticated.sales-Dzf81rqp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/_authenticated.sales.tsx?tsr-split=component";
function SalesPage() {
	const { user } = useAuth();
	const isOwner = useIsOwner();
	const workerBranchId = useBranchId();
	const qc = useQueryClient();
	const [open, setOpen] = (0, import_react.useState)(false);
	const [customerOpen, setCustomerOpen] = (0, import_react.useState)(false);
	const [customerName, setCustomerName] = (0, import_react.useState)("");
	const [customerPhone, setCustomerPhone] = (0, import_react.useState)("");
	const [form, setForm] = (0, import_react.useState)({
		branch_id: "",
		product_id: "",
		quantity: "",
		selling_price: "",
		sale_date: localDateInput()
	});
	const effectiveBranchId = isOwner ? form.branch_id : workerBranchId ?? "";
	const branchAccessError = !isOwner && !workerBranchId ? "Your account is not assigned to a branch yet. Please contact the owner." : null;
	const { data: branches = [] } = useQuery({
		queryKey: ["branches-active"],
		queryFn: async () => {
			const { data, error } = await supabase.from("branches").select("id, name").eq("status", true).order("name");
			if (error) throw error;
			return data ?? [];
		}
	});
	const { data: products = [] } = useQuery({
		queryKey: ["products-active", isOwner],
		queryFn: async () => {
			if (isOwner) {
				const { data, error } = await supabase.from("products").select("id, name, unit, selling_price, category, buying_price").eq("status", true).order("name");
				if (error) throw error;
				return data ?? [];
			}
			const { data, error } = await supabase.from("worker_products").select("id, name, unit, selling_price, category").order("name");
			if (error) throw error;
			return data ?? [];
		}
	});
	const selectedProduct = products.find((p) => p.id === form.product_id);
	const { data: stock } = useQuery({
		queryKey: [
			"stock-for-sale",
			effectiveBranchId,
			form.product_id
		],
		enabled: !!effectiveBranchId && !!form.product_id,
		queryFn: async () => {
			const { data, error } = await supabase.from("inventory").select("quantity").eq("branch_id", effectiveBranchId).eq("product_id", form.product_id).maybeSingle();
			if (error) throw error;
			return data ?? { quantity: 0 };
		}
	});
	const { data: sales = [] } = useQuery({
		queryKey: ["sales-list", isOwner],
		queryFn: async () => {
			const { data, error } = await supabase.from("sales").select("id, product_id, quantity, selling_price, profit, sale_date, customer_name, branches(name), created_by").order("sale_date", { ascending: false }).order("created_at", { ascending: false }).limit(200);
			if (error) throw error;
			const { data: productRows, error: productError } = await (isOwner ? supabase.from("products").select("id, name, unit") : supabase.from("worker_products").select("id, name, unit"));
			if (productError) throw productError;
			const productMap = new Map((productRows ?? []).map((product) => [product.id, product]));
			return (data ?? []).map((sale) => ({
				...sale,
				products: productMap.get(sale.product_id)
			}));
		}
	});
	const qty = Number(form.quantity) || 0;
	const catalogPrice = Number(selectedProduct?.selling_price) || 0;
	const unitPrice = isOwner ? Number(form.selling_price) || catalogPrice : catalogPrice;
	const lineTotal = qty * unitPrice;
	const availableStock = Number(stock?.quantity ?? 0);
	const canSave = () => {
		if (!effectiveBranchId) return branchAccessError ?? t.chooseBranch;
		if (!form.product_id) return t.chooseProduct;
		if (qty <= 0) return t.invalidNumber;
		if (!customerName.trim()) return t.customerRequired;
		if (qty > availableStock) return t.noStockEnough;
		return null;
	};
	const save = useMutation({
		mutationFn: async () => {
			const err = canSave();
			if (err) throw new Error(err);
			const cleanCustomerName = customerName.trim();
			const cleanCustomerPhone = customerPhone.trim() || null;
			const targetBranchId = effectiveBranchId;
			const { data: matchingCustomers, error: lookupError } = await supabase.from("customers").select("id, phone").eq("branch_id", targetBranchId).eq("name", cleanCustomerName).limit(20);
			if (lookupError) throw lookupError;
			let customerId = (matchingCustomers?.find((customer) => (customer.phone ?? null) === cleanCustomerPhone))?.id ?? null;
			if (!customerId) {
				const { data: createdCustomer, error: customerError } = await supabase.from("customers").insert({
					name: cleanCustomerName,
					phone: cleanCustomerPhone,
					branch_id: targetBranchId,
					created_by: user?.id ?? null
				}).select("id").single();
				if (customerError) throw customerError;
				customerId = createdCustomer.id;
			}
			const localToday = form.sale_date || (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
			const utcToday = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
			const saleDateToSubmit = isOwner ? form.sale_date : localToday;
			let { error: insertError } = await supabase.from("sales").insert({
				branch_id: targetBranchId,
				product_id: form.product_id,
				quantity: qty,
				selling_price: unitPrice,
				sale_date: saleDateToSubmit,
				customer_id: customerId,
				customer_name: cleanCustomerName,
				customer_phone: cleanCustomerPhone,
				created_by: user?.id ?? null
			});
			if (insertError && !isOwner && insertError.message?.toLowerCase().includes("current date")) {
				const altDate = saleDateToSubmit === localToday ? utcToday : localToday;
				insertError = (await supabase.from("sales").insert({
					branch_id: targetBranchId,
					product_id: form.product_id,
					quantity: qty,
					selling_price: unitPrice,
					sale_date: altDate,
					customer_id: customerId,
					customer_name: cleanCustomerName,
					customer_phone: cleanCustomerPhone,
					created_by: user?.id ?? null
				})).error;
			}
			if (insertError) throw insertError;
		},
		onSuccess: () => {
			toast.success(t.saved);
			qc.invalidateQueries({ queryKey: ["sales-list"] });
			qc.invalidateQueries({ queryKey: ["inventory-list"] });
			qc.invalidateQueries({ queryKey: ["stock-for-sale"] });
			qc.invalidateQueries({ queryKey: ["dashboard-stats"] });
			qc.invalidateQueries({ queryKey: ["recent-sales"] });
			setOpen(false);
			setForm({
				...form,
				product_id: "",
				quantity: "",
				selling_price: ""
			});
			setCustomerName("");
			setCustomerPhone("");
		},
		onError: (e) => {
			toast.error(formatErrorMessage(e));
		}
	});
	const resetForm = () => {
		setForm({
			branch_id: isOwner ? "" : workerBranchId ?? "",
			product_id: "",
			quantity: "",
			selling_price: "",
			sale_date: localDateInput()
		});
		setCustomerName("");
		setCustomerPhone("");
	};
	const openNew = () => {
		if (!isOwner && !workerBranchId) {
			toast.error("Your account is not assigned to a branch yet. Please contact the owner.");
			return;
		}
		resetForm();
		setOpen(true);
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "text-2xl font-extrabold tracking-tight sm:text-3xl",
					children: t.sales
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 254,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "text-sm text-muted-foreground",
					children: localized("Andika amakuru y'igurisha ry'ibicuruzwa.", "Record product sales.")
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 255,
					columnNumber: 11
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 253,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog, {
					open,
					onOpenChange: setOpen,
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							onClick: openNew,
							disabled: branches.length === 0 || products.length === 0 || !isOwner && !workerBranchId,
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "mr-2 h-4 w-4" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 260,
									columnNumber: 15
								}, this),
								" ",
								t.add
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 259,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 258,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent, {
						className: "max-h-[calc(100dvh-2rem)] max-w-2xl overflow-y-auto p-4 sm:p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTitle, { children: [
								t.add,
								" ",
								t.sales
							] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 265,
								columnNumber: 15
							}, this) }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 264,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "space-y-4",
								children: [
									isOwner && /* @__PURE__ */ (void 0)("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ (void 0)(Label, { children: [t.branch, " *"] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 271,
											columnNumber: 19
										}, this), /* @__PURE__ */ (void 0)(Select, {
											value: form.branch_id,
											onValueChange: (v) => setForm({
												...form,
												branch_id: v,
												product_id: "",
												quantity: "",
												selling_price: ""
											}),
											children: [/* @__PURE__ */ (void 0)(SelectTrigger, { children: /* @__PURE__ */ (void 0)(SelectValue, {}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 280,
												columnNumber: 23
											}, this) }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 279,
												columnNumber: 21
											}, this), /* @__PURE__ */ (void 0)(SelectContent, { children: branches.map((b) => /* @__PURE__ */ (void 0)(SelectItem, {
												value: b.id,
												children: b.name
											}, b.id, false, {
												fileName: _jsxFileName,
												lineNumber: 283,
												columnNumber: 49
											}, this)) }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 282,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 272,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 270,
										columnNumber: 27
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { children: [t.customerName, " *"] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 290,
											columnNumber: 17
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
											value: customerName,
											onChange: (e) => setCustomerName(e.target.value)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 291,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 289,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { children: t.customerPhone }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 294,
											columnNumber: 17
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
											value: customerPhone,
											onChange: (e) => setCustomerPhone(e.target.value)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 295,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 293,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "space-y-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { children: [t.product, " *"] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 300,
												columnNumber: 17
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, {
												value: form.product_id,
												onValueChange: (v) => {
													const p = products.find((x) => x.id === v);
													setForm({
														...form,
														product_id: v,
														selling_price: p?.selling_price?.toString() ?? ""
													});
												},
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectValue, {}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 310,
													columnNumber: 21
												}, this) }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 309,
													columnNumber: 19
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectContent, { children: isOwner ? products.map((p) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, {
													value: p.id,
													children: [
														p.name,
														" (",
														p.unit,
														") — ",
														t.buyingPrice,
														": ",
														money(p.buying_price)
													]
												}, p.id, true, {
													fileName: _jsxFileName,
													lineNumber: 313,
													columnNumber: 57
												}, this)) : products.map((p) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, {
													value: p.id,
													children: [
														p.name,
														" (",
														p.unit,
														")"
													]
												}, p.id, true, {
													fileName: _jsxFileName,
													lineNumber: 315,
													columnNumber: 65
												}, this)) }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 312,
													columnNumber: 19
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 301,
												columnNumber: 17
											}, this),
											form.branch_id && form.product_id && /* @__PURE__ */ (void 0)("p", {
												className: "text-xs text-muted-foreground",
												children: [
													t.currentStock,
													": ",
													/* @__PURE__ */ (void 0)("strong", { children: numberFmtSafe(stock?.quantity ?? 0) }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 321,
														columnNumber: 39
													}, this),
													" ",
													selectedProduct?.unit ?? ""
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 320,
												columnNumber: 55
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 299,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "grid gap-4 sm:grid-cols-2",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "space-y-2",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { children: [t.quantity, " *"] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 328,
												columnNumber: 19
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
												type: "number",
												min: 0,
												step: "0.01",
												value: form.quantity,
												onChange: (e) => setForm({
													...form,
													quantity: e.target.value
												})
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 329,
												columnNumber: 19
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 327,
											columnNumber: 17
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "space-y-2",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { children: [t.sellingPrice, " *"] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 335,
												columnNumber: 19
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
												type: "number",
												min: 0,
												value: selectedProduct ? isOwner ? form.selling_price : catalogPrice.toString() : "",
												onChange: (e) => setForm({
													...form,
													selling_price: e.target.value
												}),
												readOnly: !isOwner
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 336,
												columnNumber: 19
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 334,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 326,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "space-y-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { children: t.saleDate }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 345,
												columnNumber: 17
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
												type: "date",
												value: form.sale_date,
												onChange: (e) => setForm({
													...form,
													sale_date: e.target.value
												}),
												readOnly: !isOwner,
												className: !isOwner ? "bg-muted cursor-not-allowed text-muted-foreground" : ""
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 346,
												columnNumber: 17
											}, this),
											!isOwner && /* @__PURE__ */ (void 0)("p", {
												className: "text-xs text-muted-foreground",
												children: localized("Ibyagurishijwe byandikwa ku munsi w'uyu munsi.", "Sales are automatically recorded for today.")
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 350,
												columnNumber: 30
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 344,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
										className: "bg-muted/30",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, {
											className: "text-base",
											children: t.totalAmount
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 358,
											columnNumber: 19
										}, this) }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 357,
											columnNumber: 17
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "flex flex-wrap items-end justify-between gap-3 text-xl font-bold",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: money(lineTotal) }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 362,
												columnNumber: 21
											}, this), isOwner && /* @__PURE__ */ (void 0)("span", {
												className: "text-green-600",
												children: money((unitPrice - Number(selectedProduct?.buying_price ?? 0)) * qty)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 363,
												columnNumber: 33
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 361,
											columnNumber: 19
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "mt-1 text-xs text-muted-foreground",
											children: isOwner ? localized("Inyungu ibarwa hakurikijwe igiciro cyashyizweho n'umuyobozi.", "Profit is calculated from the owner-set catalog price.") : "The total uses the approved selling price."
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 365,
											columnNumber: 19
										}, this)] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 360,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 356,
										columnNumber: 15
									}, this),
									qty > availableStock && /* @__PURE__ */ (void 0)("div", {
										className: "rounded-md border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive",
										children: [
											t.noStockEnough,
											" — Hari ",
											numberFmtSafe(availableStock),
											" ",
											selectedProduct?.unit ?? "",
											" ariko wifuza ",
											numberFmtSafe(qty),
											" ",
											selectedProduct?.unit ?? "",
											"."
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 372,
										columnNumber: 40
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 268,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogFooter, {
								className: "gap-2 sm:gap-0",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
									variant: "outline",
									onClick: () => setOpen(false),
									className: "w-full sm:w-auto",
									children: t.cancel
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 378,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
									onClick: () => save.mutate(),
									disabled: save.isPending || !!canSave(),
									className: "w-full sm:w-auto",
									children: [save.isPending && /* @__PURE__ */ (void 0)("span", {
										className: "mr-2 animate-spin",
										children: "↻"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 380,
										columnNumber: 36
									}, this), "EMEZA IGURISHA"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 379,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 377,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 263,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 257,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 252,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SetupBanner, { steps: [...branches.length === 0 ? [{
				message: localized("Banza wongereho ishami mbere yo kwandika igurisha.", "Add a branch before recording sales."),
				to: "/branches",
				label: t.branches
			}] : [], ...products.length === 0 ? [{
				message: localized("Banza wongereho igicuruzwa mbere yo kwandika igurisha.", "Add a product before recording sales."),
				to: "/products",
				label: t.products
			}] : []] }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 388,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 399,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Table, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableRow, { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, { children: t.date }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 404,
					columnNumber: 17
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, { children: t.product }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 405,
					columnNumber: 17
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, { children: t.customer }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 406,
					columnNumber: 17
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, { children: t.quantity }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 407,
					columnNumber: 17
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, { children: t.sellingPrice }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 408,
					columnNumber: 17
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, { children: t.total }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 409,
					columnNumber: 17
				}, this),
				isOwner && /* @__PURE__ */ (void 0)(TableHead, { children: t.profit }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 410,
					columnNumber: 29
				}, this),
				isOwner && /* @__PURE__ */ (void 0)(TableHead, { children: t.branch }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 411,
					columnNumber: 29
				}, this)
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 403,
				columnNumber: 15
			}, this) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 402,
				columnNumber: 13
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableBody, { children: sales.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableRow, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, {
				colSpan: isOwner ? 8 : 6,
				className: "py-10 text-center text-muted-foreground",
				children: t.noData
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 416,
				columnNumber: 19
			}, this) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 415,
				columnNumber: 37
			}, this) : sales.map((s) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableRow, { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, { children: fmtDate(s.sale_date) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 418,
					columnNumber: 21
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, {
					className: "font-medium",
					children: s.products?.name
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 419,
					columnNumber: 21
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, { children: s.customer_name ?? "—" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 420,
					columnNumber: 21
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, { children: [
					s.quantity,
					" ",
					s.products?.unit
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 421,
					columnNumber: 21
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, { children: money(s.selling_price) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 422,
					columnNumber: 21
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, { children: money(Number(s.selling_price) * Number(s.quantity)) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 423,
					columnNumber: 21
				}, this),
				isOwner && /* @__PURE__ */ (void 0)(TableCell, {
					className: "font-semibold text-green-600",
					children: ["+", money(s.profit)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 424,
					columnNumber: 33
				}, this),
				isOwner && /* @__PURE__ */ (void 0)(TableCell, { children: s.branches?.name }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 425,
					columnNumber: 33
				}, this)
			] }, s.id, true, {
				fileName: _jsxFileName,
				lineNumber: 417,
				columnNumber: 53
			}, this)) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 414,
				columnNumber: 13
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 401,
				columnNumber: 11
			}, this) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 400,
				columnNumber: 9
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 398,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 251,
		columnNumber: 10
	}, this);
}
function numberFmtSafe(n) {
	return Number(n ?? 0).toLocaleString("en-US");
}
//#endregion
export { SalesPage as component };
