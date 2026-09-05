import { o as __toESM } from "./_runtime.mjs";
import { u as require_react } from "./_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "./_libs/react.mjs";
import { t as supabase } from "./_ssr/client-CSPvjf5l.mjs";
import { y as Navigate } from "./_libs/@tanstack/react-router+[...].mjs";
import { i as useQueryClient, n as useQuery, t as useMutation } from "./_libs/tanstack__react-query.mjs";
import { n as toast } from "./_libs/sonner.mjs";
import { F as Eye, I as EyeOff, d as Trash2, x as Plus } from "./_libs/lucide-react.mjs";
import { A as localized, D as formatErrorMessage, N as t, S as Button, _ as Input, a as AlertDialogContent, c as AlertDialogHeader, d as Card, f as CardContent, g as Label, h as CardTitle, i as AlertDialogCancel, l as AlertDialogTitle, m as CardHeader, n as AlertDialog, o as AlertDialogDescription, r as AlertDialogAction, s as AlertDialogFooter, u as isStrongPassword, y as useAuth } from "./_ssr/router-VEvSM2XK.mjs";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./_ssr/table-DSESHGZo.mjs";
import { a as DialogHeader, i as DialogFooter, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./_ssr/dialog-VjFMg87O.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./_ssr/select-DQAbsK5N.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_authenticated.users-xRaHG_Va.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/_authenticated.users.tsx?tsr-split=component";
function UsersPage() {
	const { role } = useAuth();
	const qc = useQueryClient();
	const [removing, setRemoving] = (0, import_react.useState)(null);
	const [adding, setAdding] = (0, import_react.useState)(false);
	const [showInitialPassword, setShowInitialPassword] = (0, import_react.useState)(false);
	const [worker, setWorker] = (0, import_react.useState)({
		fullName: "",
		email: "",
		phone: "",
		branchId: "",
		initialPassword: ""
	});
	const passwordIsStrong = isStrongPassword(worker.initialPassword);
	const canCreateWorker = Boolean(worker.fullName.trim() && worker.email.trim() && worker.branchId && passwordIsStrong);
	const { data: rows = [] } = useQuery({
		queryKey: ["user-roles-list"],
		queryFn: async () => {
			const { data: roles = [] } = await supabase.from("user_roles").select("id, user_id, role, branch_id").order("created_at");
			const { data: profiles = [] } = await supabase.from("profiles").select("id, full_name, phone");
			const roleMap = new Map((roles ?? []).map((r) => [r.user_id, r]));
			const list = (roles ?? []).map((r) => ({
				...r,
				profile: profiles?.find((p) => p.id === r.user_id)
			}));
			(profiles ?? []).forEach((p) => {
				if (!roleMap.has(p.id)) list.push({
					id: `new-${p.id}`,
					user_id: p.id,
					role: "manager",
					branch_id: null,
					profile: p
				});
			});
			return list;
		}
	});
	const { data: branches = [] } = useQuery({
		queryKey: ["branches-all"],
		queryFn: async () => {
			const { data, error } = await supabase.from("branches").select("id, name").order("name");
			if (error) throw error;
			return data ?? [];
		}
	});
	const updateRow = useMutation({
		mutationFn: async (v) => {
			if (v.id.startsWith("new-") && v.user_id) {
				const { error } = await supabase.from("user_roles").insert({
					user_id: v.user_id,
					role: v.role,
					branch_id: v.branch_id
				});
				if (error) throw error;
			} else {
				const { error } = await supabase.from("user_roles").update({
					role: v.role,
					branch_id: v.branch_id
				}).eq("id", v.id);
				if (error) throw error;
			}
		},
		onSuccess: () => {
			toast.success(t.updated);
			qc.invalidateQueries({ queryKey: ["user-roles-list"] });
		},
		onError: (e) => toast.error(formatErrorMessage(e))
	});
	const removeWorker = useMutation({
		mutationFn: async (userId) => {
			const { error } = await supabase.rpc("delete_worker", { p_user_id: userId });
			if (error) throw error;
		},
		onSuccess: () => {
			toast.success(t.workerRemoved);
			setRemoving(null);
			qc.invalidateQueries({ queryKey: ["user-roles-list"] });
		},
		onError: (error) => toast.error(formatErrorMessage(error))
	});
	const inviteWorker = useMutation({
		mutationFn: async () => {
			const { error } = await supabase.functions.invoke("create-worker", { body: worker });
			if (error) {
				const context = error.context;
				if (context && typeof context === "object") {
					const json = context.json;
					if (typeof json === "function") {
						const payload = await json.call(context).catch(() => null);
						if (payload && typeof payload === "object" && "error" in payload && typeof payload.error === "string") throw new Error(payload.error);
					}
					if ("error" in context && typeof context.error === "string") throw new Error(context.error);
				}
				throw error;
			}
		},
		onSuccess: () => {
			toast.success(t.workerCreated);
			setWorker({
				fullName: "",
				email: "",
				phone: "",
				branchId: "",
				initialPassword: ""
			});
			setAdding(false);
			qc.invalidateQueries({ queryKey: ["user-roles-list"] });
		},
		onError: (error) => toast.error(formatErrorMessage(error))
	});
	if (role && role.role !== "owner") return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Navigate, {
		to: "/dashboard",
		replace: true
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 179,
		columnNumber: 45
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex flex-wrap items-end justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "text-2xl font-extrabold tracking-tight sm:text-3xl",
					children: t.users
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 183,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "text-sm text-muted-foreground",
					children: localized("Cunga abakoresha, inshingano zabo n'amashami bakoreramo.", "Manage users, their roles, and their branch assignments.")
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 184,
					columnNumber: 9
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 182,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					onClick: () => setAdding(true),
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "mr-2 h-4 w-4" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 186,
						columnNumber: 49
					}, this), t.addWorker]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 186,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 181,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, {
				className: "text-base",
				children: localized(`Abakoresha bose (${rows.length})`, `All users (${rows.length})`)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 191,
				columnNumber: 11
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "text-xs text-muted-foreground",
				children: localized("Umuyobozi ni we ushyiraho konti z'abakozi kandi akabagenera uruhare n'ishami.", "The owner creates worker accounts and assigns their role and branch.")
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 192,
				columnNumber: 11
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 190,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Table, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableRow, { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, { children: t.fullName }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 198,
					columnNumber: 17
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, { children: t.phone }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 199,
					columnNumber: 17
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, { children: t.role }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 200,
					columnNumber: 17
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, { children: t.branch }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 201,
					columnNumber: 17
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, {
					className: "w-16 text-right",
					children: t.actions
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 202,
					columnNumber: 17
				}, this)
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 197,
				columnNumber: 15
			}, this) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 196,
				columnNumber: 13
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableBody, { children: rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableRow, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, {
				colSpan: 5,
				className: "py-10 text-center text-muted-foreground",
				children: t.noData
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 206,
				columnNumber: 46
			}, this) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 206,
				columnNumber: 36
			}, this) : rows.map((r) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableRow, { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, {
					className: "font-medium",
					children: r.profile?.full_name || "—"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 207,
					columnNumber: 21
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, { children: r.profile?.phone || "—" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 208,
					columnNumber: 21
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, {
					value: r.role,
					onValueChange: (v) => updateRow.mutate({
						id: r.id,
						role: v,
						branch_id: r.branch_id
					}),
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectTrigger, {
						className: "w-40",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectValue, {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 215,
							columnNumber: 57
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 215,
						columnNumber: 25
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectContent, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, {
						value: "owner",
						children: t.owner
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 217,
						columnNumber: 27
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, {
						value: "manager",
						children: t.manager
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 218,
						columnNumber: 27
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 216,
						columnNumber: 25
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 210,
					columnNumber: 23
				}, this) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 209,
					columnNumber: 21
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, {
					value: r.branch_id ?? "none",
					onValueChange: (v) => updateRow.mutate({
						id: r.id,
						role: r.role,
						branch_id: v === "none" ? null : v
					}),
					disabled: r.role === "owner",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectTrigger, {
						className: "w-52",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectValue, {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 228,
							columnNumber: 57
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 228,
						columnNumber: 25
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectContent, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, {
						value: "none",
						children: "—"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 230,
						columnNumber: 27
					}, this), branches.map((b) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, {
						value: b.id,
						children: b.name
					}, b.id, false, {
						fileName: _jsxFileName,
						lineNumber: 231,
						columnNumber: 53
					}, this))] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 229,
						columnNumber: 25
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 223,
					columnNumber: 23
				}, this) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 222,
					columnNumber: 21
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, {
					className: "text-right",
					children: r.role === "manager" && /* @__PURE__ */ (void 0)(Button, {
						variant: "ghost",
						size: "icon",
						className: "text-destructive hover:text-destructive",
						onClick: () => setRemoving(r),
						"aria-label": t.removeWorker,
						children: /* @__PURE__ */ (void 0)(Trash2, { className: "h-4 w-4" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 237,
							columnNumber: 27
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 236,
						columnNumber: 48
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 235,
					columnNumber: 21
				}, this)
			] }, r.id, true, {
				fileName: _jsxFileName,
				lineNumber: 206,
				columnNumber: 178
			}, this)) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 205,
				columnNumber: 13
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 195,
				columnNumber: 11
			}, this) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 194,
				columnNumber: 9
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 189,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog, {
				open: adding,
				onOpenChange: (open) => {
					setAdding(open);
					if (!open) setShowInitialPassword(false);
				},
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTitle, { children: t.createWorker }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 250,
					columnNumber: 25
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogDescription, { children: t.workerCreationDesc }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 250,
					columnNumber: 68
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 250,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
					className: "space-y-3",
					onSubmit: (event) => {
						event.preventDefault();
						if (canCreateWorker) inviteWorker.mutate();
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "space-y-1",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
								htmlFor: "worker-name",
								children: t.fullName
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 255,
								columnNumber: 40
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
								id: "worker-name",
								value: worker.fullName,
								onChange: (e) => setWorker({
									...worker,
									fullName: e.target.value
								})
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 255,
								columnNumber: 89
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 255,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "space-y-1",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
								htmlFor: "worker-email",
								children: t.email
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 259,
								columnNumber: 40
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
								id: "worker-email",
								type: "email",
								value: worker.email,
								onChange: (e) => setWorker({
									...worker,
									email: e.target.value
								})
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 259,
								columnNumber: 87
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 259,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "space-y-1",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
								htmlFor: "worker-phone",
								children: t.phone
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 263,
								columnNumber: 40
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
								id: "worker-phone",
								value: worker.phone,
								onChange: (e) => setWorker({
									...worker,
									phone: e.target.value
								})
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 263,
								columnNumber: 87
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 263,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "space-y-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
									htmlFor: "worker-password",
									children: t.initialPassword
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 268,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "relative",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
										id: "worker-password",
										type: showInitialPassword ? "text" : "password",
										autoComplete: "new-password",
										minLength: 12,
										required: true,
										value: worker.initialPassword,
										onChange: (e) => setWorker({
											...worker,
											initialPassword: e.target.value
										}),
										className: "pr-11"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 270,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
										type: "button",
										onClick: () => setShowInitialPassword((visible) => !visible),
										className: "absolute right-1 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
										"aria-label": showInitialPassword ? "Hide initial password" : "Show initial password",
										"aria-pressed": showInitialPassword,
										children: showInitialPassword ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EyeOff, { className: "h-4 w-4" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 275,
											columnNumber: 42
										}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Eye, { className: "h-4 w-4" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 275,
											columnNumber: 75
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 274,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 269,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: passwordIsStrong || !worker.initialPassword ? "text-xs text-muted-foreground" : "text-xs text-destructive",
									children: localized("Koresha nibura inyuguti 12 zirimo inyuguti nto n'inkuru, umubare n'ikimenyetso.", "Use at least 12 characters, including upper- and lower-case letters, a number, and a symbol.")
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 278,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 267,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "space-y-1",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { children: t.branch }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 282,
								columnNumber: 40
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, {
								value: worker.branchId,
								onValueChange: (branchId) => setWorker({
									...worker,
									branchId
								}),
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectValue, {}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 285,
									columnNumber: 32
								}, this) }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 285,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectContent, { children: branches.map((b) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, {
									value: b.id,
									children: b.name
								}, b.id, false, {
									fileName: _jsxFileName,
									lineNumber: 285,
									columnNumber: 104
								}, this)) }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 285,
									columnNumber: 63
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 282,
								columnNumber: 65
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 282,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogFooter, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							type: "submit",
							disabled: !canCreateWorker || inviteWorker.isPending,
							children: inviteWorker.isPending ? t.loading : t.createWorker
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 286,
							columnNumber: 27
						}, this) }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 286,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 251,
					columnNumber: 11
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 249,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 245,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AlertDialog, {
				open: !!removing,
				onOpenChange: (open) => !open && setRemoving(null),
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AlertDialogContent, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AlertDialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AlertDialogTitle, { children: t.removeWorkerTitle }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 293,
					columnNumber: 13
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AlertDialogDescription, { children: t.removeWorkerDesc }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 294,
					columnNumber: 13
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 292,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AlertDialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AlertDialogCancel, { children: t.cancel }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 297,
					columnNumber: 13
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AlertDialogAction, {
					className: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
					onClick: () => removing && removeWorker.mutate(removing.user_id),
					children: removeWorker.isPending ? t.loading : t.removeWorker
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 298,
					columnNumber: 13
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 296,
					columnNumber: 11
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 291,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 290,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 180,
		columnNumber: 10
	}, this);
}
//#endregion
export { UsersPage as component };
