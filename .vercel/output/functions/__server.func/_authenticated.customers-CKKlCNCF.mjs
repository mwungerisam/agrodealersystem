import { o as __toESM } from "./_runtime.mjs";
import { u as require_react } from "./_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "./_libs/react.mjs";
import { t as supabase } from "./_ssr/client-CSPvjf5l.mjs";
import { i as useQueryClient, n as useQuery, t as useMutation } from "./_libs/tanstack__react-query.mjs";
import { n as toast } from "./_libs/sonner.mjs";
import { b as Search, d as Trash2, w as Pencil, x as Plus } from "./_libs/lucide-react.mjs";
import { D as formatErrorMessage, N as t, S as Button, _ as Input, b as useBranchId, d as Card, f as CardContent, g as Label, m as CardHeader, x as useIsOwner, y as useAuth } from "./_ssr/router-VEvSM2XK.mjs";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./_ssr/table-DSESHGZo.mjs";
import { a as DialogHeader, i as DialogFooter, n as DialogContent, o as DialogTitle, s as DialogTrigger, t as Dialog } from "./_ssr/dialog-VjFMg87O.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./_ssr/select-DQAbsK5N.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_authenticated.customers-CKKlCNCF.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/_authenticated.customers.tsx?tsr-split=component";
function CustomersPage() {
	const isOwner = useIsOwner();
	const workerBranchId = useBranchId();
	const { user } = useAuth();
	const qc = useQueryClient();
	const [search, setSearch] = (0, import_react.useState)("");
	const [open, setOpen] = (0, import_react.useState)(false);
	const [editing, setEditing] = (0, import_react.useState)(null);
	const [form, setForm] = (0, import_react.useState)({
		branch_id: "",
		name: "",
		phone: ""
	});
	const { data: branches = [] } = useQuery({
		queryKey: ["branches-active"],
		queryFn: async () => {
			const { data, error } = await supabase.from("branches").select("id, name").eq("status", true).order("name");
			if (error) throw error;
			return data ?? [];
		}
	});
	const { data: customers = [] } = useQuery({
		queryKey: ["customers"],
		staleTime: 6e4,
		queryFn: async () => {
			const { data, error } = await supabase.from("customers").select("id, branch_id, name, phone, created_at, branches(name)").order("created_at", { ascending: false });
			if (error) throw error;
			return data ?? [];
		}
	});
	const save = useMutation({
		mutationFn: async () => {
			if (!form.name.trim()) throw new Error(t.requiredField);
			const branchId = isOwner ? form.branch_id : workerBranchId;
			if (!branchId) throw new Error(t.chooseBranch);
			if (editing) {
				const { error } = await supabase.from("customers").update({
					name: form.name.trim(),
					phone: form.phone.trim() || null,
					branch_id: branchId
				}).eq("id", editing.id);
				if (error) throw error;
			} else {
				const { error } = await supabase.from("customers").insert({
					name: form.name.trim(),
					phone: form.phone.trim() || null,
					branch_id: branchId,
					created_by: user?.id ?? null
				});
				if (error) throw error;
			}
		},
		onSuccess: () => {
			toast.success(editing ? t.updated : t.saved);
			qc.invalidateQueries({ queryKey: ["customers"] });
			qc.invalidateQueries({ queryKey: ["branches-active"] });
			setOpen(false);
			setEditing(null);
			setForm({
				branch_id: isOwner ? "" : workerBranchId ?? "",
				name: "",
				phone: ""
			});
		},
		onError: (e) => toast.error(formatErrorMessage(e))
	});
	const del = useMutation({
		mutationFn: async (id) => {
			const { error } = await supabase.from("customers").delete().eq("id", id);
			if (error) throw error;
		},
		onSuccess: () => {
			toast.success(t.deleted);
			qc.invalidateQueries({ queryKey: ["customers"] });
		},
		onError: (e) => toast.error(formatErrorMessage(e))
	});
	const filtered = customers.filter((c) => c.name?.toLowerCase().includes(search.toLowerCase()) || (c.phone?.toLowerCase() ?? "").includes(search.toLowerCase()));
	const openNew = () => {
		setEditing(null);
		setForm({
			branch_id: isOwner ? "" : workerBranchId ?? "",
			name: "",
			phone: ""
		});
		setOpen(true);
	};
	const openEdit = (c) => {
		setEditing(c);
		setForm({
			branch_id: c.branch_id,
			name: c.name,
			phone: c.phone ?? ""
		});
		setOpen(true);
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex flex-wrap items-center justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
				className: "text-2xl font-extrabold tracking-tight sm:text-3xl",
				children: t.customers
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 151,
				columnNumber: 11
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "text-sm text-muted-foreground",
				children: "Kugabanya n'guhindura abakiriya babarakora"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 152,
				columnNumber: 11
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 150,
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
								lineNumber: 157,
								columnNumber: 15
							}, this),
							" ",
							t.add
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 156,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 155,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent, { children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTitle, { children: [
						editing ? t.edit : t.add,
						" ",
						t.customer
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
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "space-y-2",
								children: isOwner && /* @__PURE__ */ (void 0)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (void 0)(Label, { children: [t.branch, " *"] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 166,
									columnNumber: 31
								}, this), /* @__PURE__ */ (void 0)(Select, {
									value: form.branch_id,
									onValueChange: (v) => setForm({
										...form,
										branch_id: v
									}),
									children: [/* @__PURE__ */ (void 0)(SelectTrigger, { children: /* @__PURE__ */ (void 0)(SelectValue, {}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 171,
										columnNumber: 21
									}, this) }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 170,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)(SelectContent, { children: branches.map((b) => /* @__PURE__ */ (void 0)(SelectItem, {
										value: b.id,
										children: b.name
									}, b.id, false, {
										fileName: _jsxFileName,
										lineNumber: 174,
										columnNumber: 47
									}, this)) }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 173,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 166,
									columnNumber: 58
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 166,
									columnNumber: 29
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 165,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { children: [t.customerName, " *"] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 179,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
									value: form.name,
									onChange: (e) => setForm({
										...form,
										name: e.target.value
									})
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 180,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 178,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { children: t.customerPhone }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 186,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
									value: form.phone,
									onChange: (e) => setForm({
										...form,
										phone: e.target.value
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
						lineNumber: 194,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						onClick: () => save.mutate(),
						disabled: save.isPending,
						children: t.save
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 195,
						columnNumber: 15
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 193,
						columnNumber: 13
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 160,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 154,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 149,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "relative max-w-sm",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 204,
				columnNumber: 13
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
				value: search,
				onChange: (e) => setSearch(e.target.value),
				className: "pl-9"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 205,
				columnNumber: 13
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 203,
			columnNumber: 11
		}, this) }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 202,
			columnNumber: 9
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Table, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableRow, { children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, { children: t.customerName }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 212,
				columnNumber: 17
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, { children: t.customerPhone }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 213,
				columnNumber: 17
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, { children: t.branch }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 214,
				columnNumber: 17
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, { children: t.actions }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 215,
				columnNumber: 17
			}, this)
		] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 211,
			columnNumber: 15
		}, this) }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 210,
			columnNumber: 13
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableBody, { children: filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableRow, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, {
			colSpan: 4,
			className: "py-10 text-center text-muted-foreground",
			children: branches.length === 0 ? "Banza wongereho ishami muri Amashami mbere yo guhindura abakiriya." : t.noData
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 220,
			columnNumber: 19
		}, this) }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 219,
			columnNumber: 40
		}, this) : filtered.map((c) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableRow, { children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, {
				className: "font-medium",
				children: c.name
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 224,
				columnNumber: 21
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, { children: c.phone ?? "—" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 225,
				columnNumber: 21
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, { children: c.branches?.name ?? "—" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 226,
				columnNumber: 21
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, {
				className: "text-right",
				children: isOwner && /* @__PURE__ */ (void 0)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (void 0)(Button, {
					size: "icon",
					variant: "ghost",
					onClick: () => openEdit(c),
					"aria-label": t.edit,
					children: /* @__PURE__ */ (void 0)(Pencil, { className: "h-4 w-4" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 230,
						columnNumber: 27
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 229,
					columnNumber: 25
				}, this), /* @__PURE__ */ (void 0)(Button, {
					size: "icon",
					variant: "ghost",
					onClick: () => {
						if (confirm(t.confirmDelete)) del.mutate(c.id);
					},
					"aria-label": t.delete,
					children: /* @__PURE__ */ (void 0)(Trash2, { className: "h-4 w-4 text-destructive" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 235,
						columnNumber: 27
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 232,
					columnNumber: 25
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 228,
					columnNumber: 35
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 227,
				columnNumber: 21
			}, this)
		] }, c.id, true, {
			fileName: _jsxFileName,
			lineNumber: 223,
			columnNumber: 56
		}, this)) }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 218,
			columnNumber: 13
		}, this)] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 209,
			columnNumber: 11
		}, this) }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 208,
			columnNumber: 9
		}, this)] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 201,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 148,
		columnNumber: 10
	}, this);
}
//#endregion
export { CustomersPage as component };
