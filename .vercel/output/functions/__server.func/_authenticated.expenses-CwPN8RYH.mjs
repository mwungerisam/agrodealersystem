import { o as __toESM } from "./_runtime.mjs";
import { u as require_react } from "./_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "./_libs/react.mjs";
import { t as supabase } from "./_ssr/client-CSPvjf5l.mjs";
import { i as useQueryClient, n as useQuery, t as useMutation } from "./_libs/tanstack__react-query.mjs";
import { n as toast } from "./_libs/sonner.mjs";
import { d as Trash2, x as Plus } from "./_libs/lucide-react.mjs";
import { A as localized, D as formatErrorMessage, N as t, O as localDateInput, S as Button, _ as Input, d as Card, f as CardContent, g as Label, j as money, m as CardHeader, w as fmtDate, y as useAuth } from "./_ssr/router-VEvSM2XK.mjs";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./_ssr/table-DSESHGZo.mjs";
import { a as DialogHeader, i as DialogFooter, n as DialogContent, o as DialogTitle, s as DialogTrigger, t as Dialog } from "./_ssr/dialog-VjFMg87O.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./_ssr/select-DQAbsK5N.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_authenticated.expenses-CwPN8RYH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/_authenticated.expenses.tsx?tsr-split=component";
function ExpensesPage() {
	const { role, user } = useAuth();
	const isOwner = role?.role === "owner";
	const qc = useQueryClient();
	const [open, setOpen] = (0, import_react.useState)(false);
	const [form, setForm] = (0, import_react.useState)({
		branch_id: role?.branch_id ?? "",
		description: "",
		amount: "",
		expense_date: localDateInput()
	});
	const { data: branches = [] } = useQuery({
		queryKey: ["branches-active"],
		queryFn: async () => {
			const { data, error } = await supabase.from("branches").select("id, name").eq("status", true).order("name");
			if (error) throw error;
			return data ?? [];
		}
	});
	const { data: expenses = [] } = useQuery({
		queryKey: ["expenses"],
		queryFn: async () => {
			const { data, error } = await supabase.from("expenses").select("id, description, amount, expense_date, branches(name)").order("expense_date", { ascending: false }).limit(200);
			if (error) throw error;
			return data ?? [];
		}
	});
	const save = useMutation({
		mutationFn: async () => {
			if (!form.branch_id) throw new Error(t.chooseBranch);
			if (!form.description.trim()) throw new Error(t.requiredField);
			const amount = Number(form.amount);
			if (!form.amount || !Number.isFinite(amount) || amount < 0) throw new Error(t.invalidNumber);
			const { error } = await supabase.from("expenses").insert({
				...form,
				description: form.description.trim(),
				amount,
				created_by: user?.id ?? null
			});
			if (error) throw error;
		},
		onSuccess: () => {
			toast.success(t.saved);
			qc.invalidateQueries({ queryKey: ["expenses"] });
			setOpen(false);
			setForm({
				...form,
				description: "",
				amount: ""
			});
		},
		onError: (e) => toast.error(formatErrorMessage(e))
	});
	const del = useMutation({
		mutationFn: async (id) => {
			const { error } = await supabase.from("expenses").delete().eq("id", id);
			if (error) throw error;
		},
		onSuccess: () => {
			toast.success(t.deleted);
			qc.invalidateQueries({ queryKey: ["expenses"] });
		},
		onError: (e) => toast.error(formatErrorMessage(e))
	});
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex flex-wrap items-center justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
				className: "text-2xl font-extrabold tracking-tight sm:text-3xl",
				children: t.expenses
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 107,
				columnNumber: 11
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "text-sm text-muted-foreground",
				children: localized("Andika ibisohoka by'ubucuruzi.", "Record business expenses.")
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 108,
				columnNumber: 11
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 106,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog, {
				open,
				onOpenChange: setOpen,
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTrigger, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						disabled: branches.length === 0,
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "mr-2 h-4 w-4" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 112,
								columnNumber: 54
							}, this),
							" ",
							t.add
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 112,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 111,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent, { children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTitle, { children: [
						t.add,
						" ",
						t.expenses
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 115,
						columnNumber: 27
					}, this) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 115,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "space-y-4",
						children: [
							isOwner && /* @__PURE__ */ (void 0)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (void 0)(Label, { children: [t.branch, " *"] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 118,
									columnNumber: 19
								}, this), /* @__PURE__ */ (void 0)(Select, {
									value: form.branch_id,
									onValueChange: (v) => setForm({
										...form,
										branch_id: v
									}),
									children: [/* @__PURE__ */ (void 0)(SelectTrigger, { children: /* @__PURE__ */ (void 0)(SelectValue, {}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 123,
										columnNumber: 36
									}, this) }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 123,
										columnNumber: 21
									}, this), /* @__PURE__ */ (void 0)(SelectContent, { children: branches.map((b) => /* @__PURE__ */ (void 0)(SelectItem, {
										value: b.id,
										children: b.name
									}, b.id, false, {
										fileName: _jsxFileName,
										lineNumber: 125,
										columnNumber: 49
									}, this)) }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 124,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 119,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 117,
								columnNumber: 27
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { children: [t.description, " *"] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 130,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
									value: form.description,
									onChange: (e) => setForm({
										...form,
										description: e.target.value
									})
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 131,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 129,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { children: [t.amount, " *"] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 137,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
									type: "number",
									min: 0,
									placeholder: "Enter amount",
									value: form.amount,
									onChange: (e) => setForm({
										...form,
										amount: e.target.value
									})
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 138,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 136,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { children: [t.expenseDate, " *"] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 144,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
									type: "date",
									value: form.expense_date,
									onChange: (e) => setForm({
										...form,
										expense_date: e.target.value
									})
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 145,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 143,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 116,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						variant: "outline",
						onClick: () => setOpen(false),
						children: t.cancel
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 152,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						onClick: () => save.mutate(),
						disabled: save.isPending,
						children: t.save
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 153,
						columnNumber: 15
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 151,
						columnNumber: 13
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 114,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 110,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 105,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 160,
			columnNumber: 9
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Table, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableRow, { children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, { children: t.date }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 165,
				columnNumber: 17
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, { children: t.branch }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 166,
				columnNumber: 17
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, { children: t.description }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 167,
				columnNumber: 17
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, { children: t.amount }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 168,
				columnNumber: 17
			}, this),
			isOwner && /* @__PURE__ */ (void 0)(TableHead, {
				className: "text-right",
				children: t.actions
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 169,
				columnNumber: 29
			}, this)
		] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 164,
			columnNumber: 15
		}, this) }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 163,
			columnNumber: 13
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableBody, { children: expenses.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableRow, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, {
			colSpan: 5,
			className: "py-10 text-center text-muted-foreground",
			children: t.noData
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 173,
			columnNumber: 50
		}, this) }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 173,
			columnNumber: 40
		}, this) : expenses.map((e) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableRow, { children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, { children: fmtDate(e.expense_date) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 174,
				columnNumber: 21
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, { children: e.branches?.name }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 175,
				columnNumber: 21
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, {
				className: "font-medium",
				children: e.description
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 176,
				columnNumber: 21
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, { children: money(e.amount) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 177,
				columnNumber: 21
			}, this),
			isOwner && /* @__PURE__ */ (void 0)(TableCell, {
				className: "text-right",
				children: /* @__PURE__ */ (void 0)(Button, {
					size: "icon",
					variant: "ghost",
					onClick: () => {
						if (confirm(t.confirmDelete)) del.mutate(e.id);
					},
					children: /* @__PURE__ */ (void 0)(Trash2, { className: "h-4 w-4 text-destructive" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 182,
						columnNumber: 27
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 179,
					columnNumber: 25
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 178,
				columnNumber: 33
			}, this)
		] }, e.id, true, {
			fileName: _jsxFileName,
			lineNumber: 173,
			columnNumber: 186
		}, this)) }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 172,
			columnNumber: 13
		}, this)] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 162,
			columnNumber: 11
		}, this) }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 161,
			columnNumber: 9
		}, this)] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 159,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 104,
		columnNumber: 10
	}, this);
}
//#endregion
export { ExpensesPage as component };
