import { o as __toESM } from "./_runtime.mjs";
import { u as require_react } from "./_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "./_libs/react.mjs";
import { t as supabase } from "./_ssr/client-CSPvjf5l.mjs";
import { y as Navigate } from "./_libs/@tanstack/react-router+[...].mjs";
import { i as useQueryClient, n as useQuery, t as useMutation } from "./_libs/tanstack__react-query.mjs";
import { n as toast } from "./_libs/sonner.mjs";
import { b as Search, d as Trash2, w as Pencil, x as Plus } from "./_libs/lucide-react.mjs";
import { A as localized, D as formatErrorMessage, N as t, S as Button, _ as Input, d as Card, f as CardContent, g as Label, j as money, m as CardHeader, y as useAuth } from "./_ssr/router-VEvSM2XK.mjs";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./_ssr/table-DSESHGZo.mjs";
import { a as DialogHeader, i as DialogFooter, n as DialogContent, o as DialogTitle, s as DialogTrigger, t as Dialog } from "./_ssr/dialog-VjFMg87O.mjs";
import { t as Switch } from "./_ssr/switch-BbngjNDG.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./_ssr/select-DQAbsK5N.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_authenticated.products-Cr_9tYnu.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/_authenticated.products.tsx?tsr-split=component";
var empty = {
	name: "",
	category: "ifumbire",
	buying_price: "",
	selling_price: "",
	unit: "kg",
	min_stock: "",
	status: true
};
function ProductsPage() {
	const { role } = useAuth();
	const qc = useQueryClient();
	const [search, setSearch] = (0, import_react.useState)("");
	const [cat, setCat] = (0, import_react.useState)("all");
	const [open, setOpen] = (0, import_react.useState)(false);
	const [editing, setEditing] = (0, import_react.useState)(null);
	const [form, setForm] = (0, import_react.useState)(empty);
	const { data: products = [] } = useQuery({
		queryKey: ["products"],
		queryFn: async () => {
			const { data, error } = await supabase.from("products").select("id, name, category, buying_price, selling_price, unit, min_stock, status").order("name");
			if (error) throw error;
			return data ?? [];
		}
	});
	const save = useMutation({
		mutationFn: async () => {
			if (!form.name.trim()) throw new Error(t.requiredField);
			const buyingPrice = Number(form.buying_price);
			const sellingPrice = Number(form.selling_price);
			const minimumStock = Number(form.min_stock || 0);
			if (!form.buying_price || !form.selling_price || !Number.isFinite(buyingPrice) || !Number.isFinite(sellingPrice) || !Number.isFinite(minimumStock) || buyingPrice < 0 || sellingPrice < 0 || minimumStock < 0) throw new Error(t.invalidNumber);
			const payload = {
				name: form.name.trim(),
				category: form.category,
				buying_price: buyingPrice,
				selling_price: sellingPrice,
				unit: form.unit.trim() || "kg",
				min_stock: minimumStock,
				status: form.status
			};
			if (editing) {
				const { error } = await supabase.from("products").update(payload).eq("id", editing.id);
				if (error) throw error;
			} else {
				const { error } = await supabase.from("products").insert(payload);
				if (error) throw error;
			}
		},
		onSuccess: () => {
			toast.success(editing ? t.updated : t.saved);
			qc.invalidateQueries({ queryKey: ["products"] });
			qc.invalidateQueries({ queryKey: ["products-active"] });
			setOpen(false);
			setEditing(null);
			setForm(empty);
		},
		onError: (e) => toast.error(formatErrorMessage(e))
	});
	const del = useMutation({
		mutationFn: async (id) => {
			const { error } = await supabase.from("products").delete().eq("id", id);
			if (error) throw error;
		},
		onSuccess: () => {
			toast.success(t.deleted);
			qc.invalidateQueries({ queryKey: ["products"] });
			qc.invalidateQueries({ queryKey: ["products-active"] });
		},
		onError: (e) => toast.error(formatErrorMessage(e))
	});
	const filtered = products.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()) && (cat === "all" || p.category === cat));
	const openNew = () => {
		setEditing(null);
		setForm(empty);
		setOpen(true);
	};
	const openEdit = (p) => {
		setEditing(p);
		setForm({
			name: p.name,
			category: p.category,
			buying_price: String(p.buying_price),
			selling_price: String(p.selling_price),
			unit: p.unit,
			min_stock: String(p.min_stock),
			status: p.status
		});
		setOpen(true);
	};
	if (role && role.role !== "owner") return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Navigate, {
		to: "/dashboard",
		replace: true
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 149,
		columnNumber: 45
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex flex-wrap items-center justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
				className: "text-2xl font-extrabold tracking-tight sm:text-3xl",
				children: t.products
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 153,
				columnNumber: 11
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "text-sm text-muted-foreground",
				children: localized("Cunga ibicuruzwa byawe.", "Manage your products.")
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 154,
				columnNumber: 11
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 152,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog, {
				open,
				onOpenChange: setOpen,
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTrigger, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						onClick: openNew,
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "mr-2 h-4 w-4" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 158,
								columnNumber: 39
							}, this),
							" ",
							t.add
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 158,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 157,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent, {
					className: "max-w-xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTitle, { children: [
							editing ? t.edit : t.add,
							" ",
							t.product
						] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 162,
							columnNumber: 15
						}, this) }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 161,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "grid gap-4 sm:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "space-y-2 sm:col-span-2",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { children: [t.name, " *"] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 166,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
										value: form.name,
										onChange: (e) => setForm({
											...form,
											name: e.target.value
										}),
										required: true
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
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { children: [t.category, " *"] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 173,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, {
										value: form.category,
										onValueChange: (v) => setForm({
											...form,
											category: v
										}),
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectValue, {}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 178,
											columnNumber: 34
										}, this) }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 178,
											columnNumber: 19
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectContent, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, {
											value: "ifumbire",
											children: t.ifumbire
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 180,
											columnNumber: 21
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, {
											value: "imbuto",
											children: t.imbuto
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 181,
											columnNumber: 21
										}, this)] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 179,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
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
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { children: t.unit }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 186,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
										value: form.unit,
										onChange: (e) => setForm({
											...form,
											unit: e.target.value
										})
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 187,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 185,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { children: [t.buyingPrice, " *"] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 193,
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
										lineNumber: 194,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 192,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { children: [t.sellingPrice, " *"] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 200,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
										type: "number",
										min: 0,
										placeholder: "Enter selling price",
										value: form.selling_price,
										onChange: (e) => setForm({
											...form,
											selling_price: e.target.value
										})
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 201,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 199,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { children: t.minStock }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 207,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
										type: "number",
										min: 0,
										step: "0.01",
										placeholder: "Optional",
										value: form.min_stock,
										onChange: (e) => setForm({
											...form,
											min_stock: e.target.value
										})
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 208,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 206,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-center gap-3 sm:col-span-2",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Switch, {
										checked: form.status,
										onCheckedChange: (v) => setForm({
											...form,
											status: v
										})
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 214,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { children: form.status ? t.active : t.inactive }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 218,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 213,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 164,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							variant: "outline",
							onClick: () => setOpen(false),
							children: t.cancel
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 222,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							onClick: () => save.mutate(),
							disabled: save.isPending,
							children: t.save
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 223,
							columnNumber: 15
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 221,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 160,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 156,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 151,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, {
			className: "flex flex-wrap gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "relative flex-1 min-w-[200px] max-w-sm",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 232,
					columnNumber: 13
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
					value: search,
					onChange: (e) => setSearch(e.target.value),
					className: "pl-9"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 233,
					columnNumber: 13
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 231,
				columnNumber: 11
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, {
				value: cat,
				onValueChange: setCat,
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectTrigger, {
					className: "w-40",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectValue, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 236,
						columnNumber: 45
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 236,
					columnNumber: 13
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectContent, { children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, {
						value: "all",
						children: "Byose"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 238,
						columnNumber: 15
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, {
						value: "ifumbire",
						children: t.ifumbire
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 239,
						columnNumber: 15
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, {
						value: "imbuto",
						children: t.imbuto
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 240,
						columnNumber: 15
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 237,
					columnNumber: 13
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 235,
				columnNumber: 11
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 230,
			columnNumber: 9
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Table, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableRow, { children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, { children: t.name }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 248,
				columnNumber: 17
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, { children: t.category }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 249,
				columnNumber: 17
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, { children: t.unit }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 250,
				columnNumber: 17
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, { children: t.buyingPrice }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 251,
				columnNumber: 17
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, { children: t.sellingPrice }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 252,
				columnNumber: 17
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, { children: t.minStock }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 253,
				columnNumber: 17
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, { children: t.status }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 254,
				columnNumber: 17
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, {
				className: "text-right",
				children: t.actions
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 255,
				columnNumber: 17
			}, this)
		] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 247,
			columnNumber: 15
		}, this) }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 246,
			columnNumber: 13
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableBody, { children: filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableRow, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, {
			colSpan: 8,
			className: "py-10 text-center text-muted-foreground",
			children: t.noData
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 259,
			columnNumber: 50
		}, this) }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 259,
			columnNumber: 40
		}, this) : filtered.map((p) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableRow, { children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, {
				className: "font-medium",
				children: p.name
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 260,
				columnNumber: 21
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				className: "capitalize",
				children: p.category === "ifumbire" ? t.ifumbire : t.imbuto
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 261,
				columnNumber: 32
			}, this) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 261,
				columnNumber: 21
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, { children: p.unit }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 262,
				columnNumber: 21
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, { children: money(p.buying_price) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 263,
				columnNumber: 21
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, { children: money(p.selling_price) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 264,
				columnNumber: 21
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, { children: p.min_stock }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 265,
				columnNumber: 21
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				className: `rounded-full px-2 py-0.5 text-xs font-medium ${p.status ? "bg-green-100/50 text-green-800" : "bg-red-100/50 text-red-800"}`,
				children: p.status ? t.active : t.inactive
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 267,
				columnNumber: 23
			}, this) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 266,
				columnNumber: 21
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, {
				className: "text-right",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					size: "icon",
					variant: "ghost",
					onClick: () => openEdit(p),
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pencil, { className: "h-4 w-4" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 272,
						columnNumber: 87
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 272,
					columnNumber: 23
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					size: "icon",
					variant: "ghost",
					onClick: () => {
						if (confirm(t.confirmDelete)) del.mutate(p.id);
					},
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trash2, { className: "h-4 w-4 text-destructive" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 275,
						columnNumber: 20
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 273,
					columnNumber: 23
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 271,
				columnNumber: 21
			}, this)
		] }, p.id, true, {
			fileName: _jsxFileName,
			lineNumber: 259,
			columnNumber: 179
		}, this)) }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 258,
			columnNumber: 13
		}, this)] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 245,
			columnNumber: 11
		}, this) }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 244,
			columnNumber: 9
		}, this)] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 229,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 150,
		columnNumber: 10
	}, this);
}
//#endregion
export { ProductsPage as component };
