import { o as __toESM } from "./_runtime.mjs";
import { u as require_react } from "./_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "./_libs/react.mjs";
import { t as supabase } from "./_ssr/client-CSPvjf5l.mjs";
import { y as Navigate } from "./_libs/@tanstack/react-router+[...].mjs";
import { i as useQueryClient, n as useQuery, t as useMutation } from "./_libs/tanstack__react-query.mjs";
import { n as toast } from "./_libs/sonner.mjs";
import { b as Search, d as Trash2, w as Pencil, x as Plus } from "./_libs/lucide-react.mjs";
import { D as formatErrorMessage, N as t, S as Button, _ as Input, d as Card, f as CardContent, g as Label, m as CardHeader, x as useIsOwner } from "./_ssr/router-VEvSM2XK.mjs";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./_ssr/table-DSESHGZo.mjs";
import { a as DialogHeader, i as DialogFooter, n as DialogContent, o as DialogTitle, s as DialogTrigger, t as Dialog } from "./_ssr/dialog-VjFMg87O.mjs";
import { t as Switch } from "./_ssr/switch-BbngjNDG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_authenticated.branches-Dbb56cGe.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/_authenticated.branches.tsx?tsr-split=component";
function BranchesPage() {
	const isOwner = useIsOwner();
	const qc = useQueryClient();
	const [search, setSearch] = (0, import_react.useState)("");
	const [open, setOpen] = (0, import_react.useState)(false);
	const [editing, setEditing] = (0, import_react.useState)(null);
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		phone: "",
		address: "",
		status: true
	});
	const { data: branches = [] } = useQuery({
		queryKey: ["branches"],
		staleTime: 6e4,
		queryFn: async () => {
			const { data, error } = await supabase.from("branches").select("id, name, phone, address, status, created_at").order("created_at", { ascending: false });
			if (error) throw error;
			return data ?? [];
		}
	});
	const save = useMutation({
		mutationFn: async () => {
			if (!form.name.trim()) throw new Error(t.requiredField);
			const payload = {
				name: form.name.trim(),
				phone: form.phone.trim() || null,
				address: form.address.trim() || null,
				status: form.status
			};
			if (editing) {
				const { error } = await supabase.from("branches").update(payload).eq("id", editing.id);
				if (error) throw error;
			} else {
				const { error } = await supabase.from("branches").insert(payload);
				if (error) throw error;
			}
		},
		onSuccess: () => {
			toast.success(editing ? t.updated : t.saved);
			qc.invalidateQueries({ queryKey: ["branches"] });
			qc.invalidateQueries({ queryKey: ["branches-active"] });
			setOpen(false);
			setEditing(null);
			setForm({
				name: "",
				phone: "",
				address: "",
				status: true
			});
		},
		onError: (e) => toast.error(formatErrorMessage(e))
	});
	const del = useMutation({
		mutationFn: async (id) => {
			const { error } = await supabase.from("branches").delete().eq("id", id);
			if (error) throw error;
		},
		onSuccess: () => {
			toast.success(t.deleted);
			qc.invalidateQueries({ queryKey: ["branches"] });
			qc.invalidateQueries({ queryKey: ["branches-active"] });
		},
		onError: (e) => toast.error(formatErrorMessage(e))
	});
	const filtered = branches.filter((b) => (b.name?.toLowerCase() ?? "").includes(search.toLowerCase()) || (b.address?.toLowerCase() ?? "").includes(search.toLowerCase()));
	const openNew = () => {
		setEditing(null);
		setForm({
			name: "",
			phone: "",
			address: "",
			status: true
		});
		setOpen(true);
	};
	const openEdit = (b) => {
		setEditing(b);
		setForm({
			name: b.name,
			phone: b.phone ?? "",
			address: b.address ?? "",
			status: b.status
		});
		setOpen(true);
	};
	if (!isOwner) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Navigate, {
		to: "/dashboard",
		replace: true
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 131,
		columnNumber: 24
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex flex-wrap items-center justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
				className: "text-2xl font-extrabold tracking-tight sm:text-3xl",
				children: t.branches
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 135,
				columnNumber: 11
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "text-sm text-muted-foreground",
				children: "Kugabanya n'guhindura amashami y'ubucuruzi"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 136,
				columnNumber: 11
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 134,
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
								lineNumber: 140,
								columnNumber: 39
							}, this),
							" ",
							t.add
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 140,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 139,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent, { children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTitle, { children: [
						editing ? t.edit : t.add,
						" ",
						t.branch
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 144,
						columnNumber: 15
					}, this) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 143,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { children: [t.name, " *"] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 148,
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
									lineNumber: 149,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 147,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { children: t.phone }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 155,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
									value: form.phone,
									onChange: (e) => setForm({
										...form,
										phone: e.target.value
									})
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 156,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 154,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { children: t.address }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 162,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
									value: form.address,
									onChange: (e) => setForm({
										...form,
										address: e.target.value
									})
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 163,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 161,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Switch, {
									checked: form.status,
									onCheckedChange: (v) => setForm({
										...form,
										status: v
									})
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 169,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { children: form.status ? t.active : t.inactive }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 173,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 168,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 146,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						variant: "outline",
						onClick: () => setOpen(false),
						children: t.cancel
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 177,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						onClick: () => save.mutate(),
						disabled: save.isPending,
						children: t.save
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 178,
						columnNumber: 15
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 176,
						columnNumber: 13
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 142,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 138,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 133,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "relative max-w-sm",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 187,
				columnNumber: 13
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
				value: search,
				onChange: (e) => setSearch(e.target.value),
				className: "pl-9"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 188,
				columnNumber: 13
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 186,
			columnNumber: 11
		}, this) }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 185,
			columnNumber: 9
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Table, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableRow, { children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, { children: t.name }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 195,
				columnNumber: 17
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, { children: t.phone }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 196,
				columnNumber: 17
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, { children: t.address }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 197,
				columnNumber: 17
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, { children: t.status }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 198,
				columnNumber: 17
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, {
				className: "text-right",
				children: t.actions
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 199,
				columnNumber: 17
			}, this)
		] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 194,
			columnNumber: 15
		}, this) }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 193,
			columnNumber: 13
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableBody, { children: filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableRow, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, {
			colSpan: 5,
			className: "py-10 text-center text-muted-foreground",
			children: t.noData
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 204,
			columnNumber: 19
		}, this) }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 203,
			columnNumber: 40
		}, this) : filtered.map((b) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableRow, { children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, {
				className: "font-medium",
				children: b.name
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 206,
				columnNumber: 21
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, { children: b.phone ?? "—" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 207,
				columnNumber: 21
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, { children: b.address ?? "—" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 208,
				columnNumber: 21
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				className: `rounded-full px-2 py-0.5 text-xs font-medium ${b.status ? "bg-green-100/50 text-green-800" : "bg-red-100/50 text-red-800"}`,
				children: b.status ? t.active : t.inactive
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 210,
				columnNumber: 23
			}, this) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 209,
				columnNumber: 21
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, {
				className: "text-right",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					size: "icon",
					variant: "ghost",
					onClick: () => openEdit(b),
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pencil, { className: "h-4 w-4" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 215,
						columnNumber: 87
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 215,
					columnNumber: 23
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					size: "icon",
					variant: "ghost",
					onClick: () => {
						if (confirm(t.confirmDelete)) del.mutate(b.id);
					},
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trash2, { className: "h-4 w-4 text-destructive" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 218,
						columnNumber: 20
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 216,
					columnNumber: 23
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 214,
				columnNumber: 21
			}, this)
		] }, b.id, true, {
			fileName: _jsxFileName,
			lineNumber: 205,
			columnNumber: 49
		}, this)) }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 202,
			columnNumber: 13
		}, this)] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 192,
			columnNumber: 11
		}, this) }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 191,
			columnNumber: 9
		}, this)] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 184,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 132,
		columnNumber: 10
	}, this);
}
//#endregion
export { BranchesPage as component };
