import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as supabase } from "./client-CSPvjf5l.mjs";
import { b as useNavigate, v as Link, y as Navigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { A as LoaderCircle, B as CircleCheck, C as Phone, D as Mail, E as MapPin, F as Eye, G as ChartColumn, I as EyeOff, K as Building2, X as ArrowRight, f as Store, k as Lock, m as Sparkles, o as UserRound, p as Sprout, q as Boxes, v as ShieldCheck } from "../_libs/lucide-react.mjs";
import { E as formatAuthError, N as t, S as Button, _ as Input, d as Card, f as CardContent, g as Label, h as CardTitle, m as CardHeader, p as CardDescription, u as isStrongPassword, v as Route$16, y as useAuth } from "./router-VEvSM2XK.mjs";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./tabs-BlzeBPst.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-CjpLNNiQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/auth.tsx?tsr-split=component";
function AuthPage() {
	const search = Route$16.useSearch();
	const { user, loading: authLoading, unavailable, role, refreshRole } = useAuth();
	const navigate = useNavigate();
	const [tab, setTab] = (0, import_react.useState)(search.tab || "owner");
	const [mode, setMode] = (0, import_react.useState)("auth");
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [showPassword, setShowPassword] = (0, import_react.useState)(false);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [regForm, setRegForm] = (0, import_react.useState)({
		businessName: "",
		branchName: "",
		businessAddress: "",
		businessPhone: "",
		fullName: "",
		email: "",
		password: "",
		confirmPassword: ""
	});
	const [showRegPassword, setShowRegPassword] = (0, import_react.useState)(false);
	const [showRegConfirmPassword, setShowRegConfirmPassword] = (0, import_react.useState)(false);
	const [regSuccessEmail, setRegSuccessEmail] = (0, import_react.useState)(null);
	const regBusinessNameId = (0, import_react.useId)();
	const regBranchNameId = (0, import_react.useId)();
	const regBusinessPhoneId = (0, import_react.useId)();
	const regBusinessAddressId = (0, import_react.useId)();
	const regFullNameId = (0, import_react.useId)();
	const regEmailId = (0, import_react.useId)();
	const regPasswordId = (0, import_react.useId)();
	const regConfirmPasswordId = (0, import_react.useId)();
	const hasMinLength = regForm.password.length >= 12;
	const hasLower = /[a-z]/.test(regForm.password);
	const hasUpper = /[A-Z]/.test(regForm.password);
	const hasNumber = /\d/.test(regForm.password);
	const hasSpecial = /[^A-Za-z0-9]/.test(regForm.password);
	const regPasswordValid = isStrongPassword(regForm.password);
	const regPasswordsMatch = regForm.password.length > 0 && regForm.password === regForm.confirmPassword;
	const strengthScore = [
		hasMinLength,
		hasLower,
		hasUpper,
		hasNumber,
		hasSpecial
	].filter(Boolean).length;
	const resolveUserRole = async (userId) => {
		const { data } = await supabase.from("user_roles").select("role").eq("user_id", userId).limit(1);
		const firstRole = data?.[0]?.role ?? null;
		if (firstRole) return firstRole;
		try {
			const { data: healed } = await supabase.rpc("ensure_user_role");
			if (healed && typeof healed === "object" && "role" in healed) return healed.role;
		} catch {}
		return null;
	};
	(0, import_react.useEffect)(() => {
		if (search.tab) setTab(search.tab);
	}, [search.tab]);
	(0, import_react.useEffect)(() => {
		if (!user || authLoading || !role?.role) return;
		if (role.role === "owner" && (tab === "owner" || tab === "register") || role.role !== "owner" && tab === "worker") navigate({
			to: "/dashboard",
			replace: true
		});
	}, [
		user,
		authLoading,
		role,
		tab,
		navigate
	]);
	if (authLoading) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.12),_transparent_38%),linear-gradient(135deg,#f8fafc_0%,#eef8f1_100%)] px-4",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex flex-col items-center gap-5 rounded-[28px] border border-border/70 bg-white/90 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-sm",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-600 via-green-600 to-lime-500 shadow-lg shadow-emerald-500/25",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-1 rounded-xl border border-white/30" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 104,
					columnNumber: 13
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoaderCircle, { className: "relative h-7 w-7 animate-spin text-white" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 105,
					columnNumber: 13
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 103,
				columnNumber: 11
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-[10px] font-semibold uppercase tracking-[0.28em] text-emerald-700/90",
						children: "UFBC AGRODEALER"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 108,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
						className: "mt-2 text-lg font-semibold text-slate-900",
						children: "Preparing your workspace"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 109,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-1 text-sm text-slate-500",
						children: "Checking your secure session…"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 110,
						columnNumber: 13
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 107,
				columnNumber: 11
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 102,
			columnNumber: 9
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 101,
		columnNumber: 12
	}, this);
	if (user) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Navigate, {
		to: "/dashboard",
		replace: true
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 115,
		columnNumber: 20
	}, this);
	const signIn = async (e) => {
		e.preventDefault();
		const cleanEmail = email.trim();
		if (!cleanEmail || !password) return toast.error(t.requiredField);
		setBusy(true);
		const { data, error } = await supabase.auth.signInWithPassword({
			email: cleanEmail,
			password
		});
		setBusy(false);
		if (error) {
			const errMsg = error.message?.toLowerCase() || "";
			if (errMsg.includes("invalid login credentials") || errMsg.includes("invalid_credentials")) toast.error("Invalid email or password. If you recently registered, please verify your email or check spam, or use Forgot Password.", { duration: 6e3 });
			else toast.error(formatAuthError(error));
			return;
		}
		if (data?.session && data.user) {
			const userRole = await resolveUserRole(data.user.id);
			const expectsOwner = tab === "owner";
			if (!userRole) {
				toast.error("Your account is still being configured. Please contact the business owner.");
				return;
			}
			if (expectsOwner && userRole !== "owner" || !expectsOwner && userRole === "owner") {
				toast.error(t.wrongPortal);
				return;
			}
			toast.success(t.welcome);
			navigate({
				to: "/dashboard",
				replace: true
			});
		}
	};
	const handleBusinessRegister = async (e) => {
		e.preventDefault();
		const cleanBusinessName = regForm.businessName.trim();
		const cleanAddress = regForm.businessAddress.trim();
		const cleanPhone = regForm.businessPhone.trim();
		const cleanFullName = regForm.fullName.trim();
		const cleanEmail = regForm.email.trim();
		const cleanBranch = regForm.branchName.trim() || `${cleanBusinessName} - Main Branch`;
		if (!cleanBusinessName || !cleanAddress || !cleanPhone || !cleanFullName || !cleanEmail) {
			toast.error(t.requiredField);
			return;
		}
		if (!regPasswordValid) {
			toast.error(t.weakPassword);
			return;
		}
		if (regForm.password !== regForm.confirmPassword) {
			toast.error(t.passwordsDontMatch);
			return;
		}
		setBusy(true);
		try {
			const { data, error } = await supabase.auth.signUp({
				email: cleanEmail,
				password: regForm.password,
				options: { data: {
					full_name: cleanFullName,
					phone: cleanPhone,
					account_type: "business_owner",
					business_name: cleanBusinessName,
					branch_name: cleanBranch,
					business_address: cleanAddress
				} }
			});
			if (error) {
				setBusy(false);
				toast.error(formatAuthError(error));
				return;
			}
			if (data?.session && data.user) {
				try {
					await supabase.rpc("register_business_setup", {
						p_business_name: cleanBusinessName,
						p_branch_name: cleanBranch,
						p_phone: cleanPhone,
						p_address: cleanAddress
					});
				} catch {}
				await refreshRole();
				toast.success(t.businessRegistrationSuccess);
				navigate({
					to: "/dashboard",
					replace: true
				});
				return;
			}
			try {
				const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
					email: cleanEmail,
					password: regForm.password
				});
				if (signInData?.session && !signInError) {
					try {
						await supabase.rpc("register_business_setup", {
							p_business_name: cleanBusinessName,
							p_branch_name: cleanBranch,
							p_phone: cleanPhone,
							p_address: cleanAddress
						});
					} catch {}
					await refreshRole();
					toast.success(t.businessRegistrationSuccess);
					navigate({
						to: "/dashboard",
						replace: true
					});
					return;
				}
			} catch {}
			setBusy(false);
			setRegSuccessEmail(cleanEmail);
			toast.success(t.signUpSuccessEmailSent);
		} catch (err) {
			setBusy(false);
			toast.error(err?.message || "Registration failed. Please try again.");
		}
	};
	const sendReset = async (e) => {
		e.preventDefault();
		const cleanEmail = email.trim();
		if (!cleanEmail) return toast.error(t.requiredField);
		setBusy(true);
		const { error } = await supabase.auth.resetPasswordForEmail(cleanEmail, { redirectTo: `${window.location.origin}/reset-password` });
		setBusy(false);
		if (error) return toast.error(formatAuthError(error));
		toast.success(t.resetLinkSent);
		setMode("auth");
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
		className: "relative flex min-h-screen overflow-hidden bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 279,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pointer-events-none absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-emerald-100/60 blur-3xl" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 280,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "relative hidden flex-1 overflow-hidden bg-sidebar p-10 text-sidebar-foreground lg:flex lg:flex-col lg:justify-between",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "absolute inset-0 opacity-40",
						style: {
							backgroundImage: "radial-gradient(circle at 20% 20%, currentColor 1px, transparent 1px)",
							backgroundSize: "26px 26px"
						}
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 284,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "relative max-w-lg",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex h-11 w-11 items-center justify-center rounded-xl bg-sidebar-primary text-sidebar-primary-foreground",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sprout, { className: "h-6 w-6" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 290,
									columnNumber: 135
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 290,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "font-extrabold tracking-wide",
								children: "UFBC AGRODEALER"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 291,
								columnNumber: 18
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-xs text-sidebar-foreground/55",
								children: "Agricultural business management"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 291,
								columnNumber: 81
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 291,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 289,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-20",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "inline-flex items-center gap-1.5 rounded-full bg-sidebar-accent/60 px-3 py-1 text-xs font-semibold text-sidebar-primary",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Building2, { className: "h-3.5 w-3.5" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 295,
										columnNumber: 15
									}, this), "AGRO-ENTERPRISE PLATFORM"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 294,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
									className: "mt-3 text-4xl font-extrabold leading-tight tracking-tight text-white",
									children: "Everything your agro-dealer needs, in one place."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 298,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "mt-4 max-w-md text-sm leading-6 text-sidebar-foreground/75",
									children: "Manage inventory, purchases, sales, branches, customers and multi-branch operations with complete financial accuracy."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 299,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 293,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 288,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "relative grid max-w-xl grid-cols-3 gap-3",
						children: [
							{
								icon: Boxes,
								label: "Inventory & Stock"
							},
							{
								icon: ChartColumn,
								label: "Reports & P&L"
							},
							{
								icon: Store,
								label: "Branches & Staff"
							}
						].map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "rounded-2xl border border-sidebar-border bg-sidebar-accent/40 p-4 backdrop-blur-sm",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(item.icon, { className: "h-5 w-5 text-sidebar-primary" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 313,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-3 text-xs font-semibold text-white",
								children: item.label
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 314,
								columnNumber: 15
							}, this)]
						}, item.label, true, {
							fileName: _jsxFileName,
							lineNumber: 312,
							columnNumber: 24
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 302,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 283,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "relative flex w-full items-center justify-center p-4 sm:p-8 lg:max-w-[620px] lg:p-10",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "w-full max-w-lg",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mb-6 flex items-center justify-between lg:hidden",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sprout, { className: "h-5 w-5" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 325,
										columnNumber: 121
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 325,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-sm font-extrabold tracking-wide",
									children: "UFBC AGRODEALER"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 326,
									columnNumber: 20
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-[11px] text-muted-foreground",
									children: "Agricultural business management"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 326,
									columnNumber: 91
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 326,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 324,
								columnNumber: 13
							}, this), tab === "register" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								onClick: () => setTab("owner"),
								className: "text-xs font-bold text-primary hover:underline",
								children: t.signIn
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 328,
								columnNumber: 35
							}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								onClick: () => setTab("register"),
								className: "inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:underline",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sparkles, { className: "h-3.5 w-3.5" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 331,
									columnNumber: 17
								}, this), t.registerBusiness]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 330,
								columnNumber: 27
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 323,
							columnNumber: 11
						}, this),
						unavailable && /* @__PURE__ */ (void 0)("div", {
							className: "mb-4 rounded-xl border border-amber-300 bg-amber-50 p-3 text-sm text-amber-950",
							role: "alert",
							children: "The service is currently unavailable. Check your internet connection and try again."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 336,
							columnNumber: 27
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
							className: "overflow-hidden border shadow-xl shadow-black/5",
							children: mode === "forgot" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, {
								className: "border-b bg-muted/20 pb-5",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, {
									className: "text-xl",
									children: t.forgotPassword
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 343,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardDescription, { children: t.resetLinkDescription }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 344,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 342,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, {
								className: "p-6 sm:p-7",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
									onSubmit: sendReset,
									className: "space-y-5",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "space-y-2",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
												htmlFor: "fp-email",
												children: t.email
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 349,
												columnNumber: 23
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
												id: "fp-email",
												type: "email",
												required: true,
												value: email,
												onChange: (e) => setEmail(e.target.value)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 350,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 348,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
											type: "submit",
											className: "h-10 w-full",
											disabled: busy,
											children: [busy && /* @__PURE__ */ (void 0)(LoaderCircle, { className: "h-4 w-4 animate-spin" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 353,
												columnNumber: 32
											}, this), t.sendResetLink]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 352,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
											type: "button",
											variant: "ghost",
											className: "w-full",
											onClick: () => setMode("auth"),
											children: t.backToAuth
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 356,
											columnNumber: 21
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 347,
									columnNumber: 19
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 346,
								columnNumber: 17
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 341,
								columnNumber: 34
							}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, {
								className: "border-b bg-muted/20 pb-5",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, {
										className: "text-xl font-extrabold tracking-tight",
										children: tab === "register" ? t.registerBusinessTitle : "Welcome back"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 364,
										columnNumber: 21
									}, this), tab !== "register" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
										type: "button",
										onClick: () => setTab("register"),
										className: "inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-bold text-emerald-800 transition hover:bg-emerald-200",
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Building2, { className: "h-3.5 w-3.5" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 368,
												columnNumber: 25
											}, this),
											t.registerBusiness,
											" →"
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 367,
										columnNumber: 43
									}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
										type: "button",
										onClick: () => setTab("owner"),
										className: "text-xs font-semibold text-muted-foreground hover:text-foreground",
										children: [
											t.haveAccount,
											" ",
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "font-bold text-primary",
												children: t.signIn
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 371,
												columnNumber: 41
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 370,
										columnNumber: 35
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 363,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardDescription, {
									className: "text-xs",
									children: tab === "register" ? t.registerBusinessDesc : tab === "owner" ? t.ownerLoginDesc : t.workerLoginDesc
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 374,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 362,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, {
								className: "p-6 sm:p-7",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs, {
									value: tab,
									onValueChange: (v) => setTab(v),
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsList, {
											className: "grid h-12 w-full grid-cols-3 rounded-xl bg-muted/80 p-1",
											children: [
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsTrigger, {
													value: "owner",
													className: "rounded-lg gap-1.5 text-xs font-semibold transition-all data-[state=active]:bg-white data-[state=active]:text-foreground data-[state=active]:shadow-sm",
													children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShieldCheck, { className: "h-4 w-4 text-emerald-600" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 384,
														columnNumber: 25
													}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: t.owner }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 385,
														columnNumber: 25
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 383,
													columnNumber: 23
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsTrigger, {
													value: "worker",
													className: "rounded-lg gap-1.5 text-xs font-semibold transition-all data-[state=active]:bg-white data-[state=active]:text-foreground data-[state=active]:shadow-sm",
													children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UserRound, { className: "h-4 w-4 text-blue-600" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 388,
														columnNumber: 25
													}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: t.worker }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 389,
														columnNumber: 25
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 387,
													columnNumber: 23
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsTrigger, {
													value: "register",
													className: "rounded-lg gap-1.5 text-xs font-bold transition-all data-[state=active]:bg-emerald-600 data-[state=active]:text-white data-[state=active]:shadow-sm",
													children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Building2, { className: "h-4 w-4" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 392,
														columnNumber: 25
													}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Register" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 393,
														columnNumber: 25
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 391,
													columnNumber: 23
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 382,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsContent, {
											value: "owner",
											children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
												onSubmit: signIn,
												className: "space-y-4 pt-4",
												children: [
													/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
														className: "space-y-2",
														children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
															htmlFor: "owner-email",
															className: "flex items-center gap-1.5 text-xs font-medium",
															children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Mail, { className: "h-3.5 w-3.5 text-muted-foreground" }, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 402,
																columnNumber: 29
															}, this), t.email]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 401,
															columnNumber: 27
														}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
															id: "owner-email",
															type: "email",
															autoComplete: "email",
															required: true,
															value: email,
															onChange: (e) => setEmail(e.target.value),
															className: "h-10"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 405,
															columnNumber: 27
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 400,
														columnNumber: 25
													}, this),
													/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
														className: "space-y-2",
														children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
															className: "flex items-center justify-between",
															children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
																htmlFor: "owner-pw",
																className: "flex items-center gap-1.5 text-xs font-medium",
																children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Lock, { className: "h-3.5 w-3.5 text-muted-foreground" }, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 411,
																	columnNumber: 31
																}, this), t.password]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 410,
																columnNumber: 29
															}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
																type: "button",
																onClick: () => setMode("forgot"),
																className: "text-xs font-semibold text-emerald-700 hover:underline",
																children: t.forgotPassword
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 414,
																columnNumber: 29
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 409,
															columnNumber: 27
														}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
															className: "relative",
															children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
																id: "owner-pw",
																type: showPassword ? "text" : "password",
																autoComplete: "current-password",
																required: true,
																minLength: 6,
																value: password,
																onChange: (e) => setPassword(e.target.value),
																className: "h-10 pr-10"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 419,
																columnNumber: 29
															}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
																type: "button",
																"aria-label": showPassword ? "Hide password" : "Show password",
																onClick: () => setShowPassword(!showPassword),
																className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground",
																children: showPassword ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EyeOff, { className: "h-4 w-4" }, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 421,
																	columnNumber: 47
																}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Eye, { className: "h-4 w-4" }, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 421,
																	columnNumber: 80
																}, this)
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 420,
																columnNumber: 29
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 418,
															columnNumber: 27
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 408,
														columnNumber: 25
													}, this),
													/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
														type: "submit",
														className: "h-11 w-full bg-emerald-700 font-bold text-white hover:bg-emerald-800",
														disabled: busy,
														children: [busy && /* @__PURE__ */ (void 0)(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 427,
															columnNumber: 36
														}, this), t.signIn]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 426,
														columnNumber: 25
													}, this),
													/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
														className: "pt-2 text-center text-xs text-muted-foreground",
														children: [
															t.newBusinessPrompt,
															" ",
															/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
																type: "button",
																onClick: () => setTab("register"),
																className: "font-bold text-emerald-700 underline underline-offset-2 hover:text-emerald-900",
																children: t.registerBusiness
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 434,
																columnNumber: 27
															}, this),
															" · ",
															/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
																to: "/register",
																className: "font-bold text-emerald-700 underline underline-offset-2 hover:text-emerald-900",
																children: "Full Page →"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 438,
																columnNumber: 27
															}, this)
														]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 432,
														columnNumber: 25
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 399,
												columnNumber: 23
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 398,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsContent, {
											value: "worker",
											children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
												onSubmit: signIn,
												className: "space-y-4 pt-4",
												children: [
													/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
														className: "space-y-2",
														children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
															htmlFor: "worker-email",
															className: "flex items-center gap-1.5 text-xs font-medium",
															children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Mail, { className: "h-3.5 w-3.5 text-muted-foreground" }, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 450,
																columnNumber: 29
															}, this), t.email]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 449,
															columnNumber: 27
														}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
															id: "worker-email",
															type: "email",
															autoComplete: "email",
															required: true,
															value: email,
															onChange: (e) => setEmail(e.target.value),
															className: "h-10"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 453,
															columnNumber: 27
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 448,
														columnNumber: 25
													}, this),
													/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
														className: "space-y-2",
														children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
															className: "flex items-center justify-between",
															children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
																htmlFor: "worker-pw",
																className: "flex items-center gap-1.5 text-xs font-medium",
																children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Lock, { className: "h-3.5 w-3.5 text-muted-foreground" }, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 459,
																	columnNumber: 31
																}, this), t.password]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 458,
																columnNumber: 29
															}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
																type: "button",
																onClick: () => setMode("forgot"),
																className: "text-xs font-semibold text-primary hover:underline",
																children: t.forgotPassword
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 462,
																columnNumber: 29
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 457,
															columnNumber: 27
														}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
															className: "relative",
															children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
																id: "worker-pw",
																type: showPassword ? "text" : "password",
																autoComplete: "current-password",
																required: true,
																minLength: 6,
																value: password,
																onChange: (e) => setPassword(e.target.value),
																className: "h-10 pr-10"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 467,
																columnNumber: 29
															}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
																type: "button",
																"aria-label": showPassword ? "Hide password" : "Show password",
																onClick: () => setShowPassword(!showPassword),
																className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground",
																children: showPassword ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EyeOff, { className: "h-4 w-4" }, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 469,
																	columnNumber: 47
																}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Eye, { className: "h-4 w-4" }, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 469,
																	columnNumber: 80
																}, this)
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 468,
																columnNumber: 29
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 466,
															columnNumber: 27
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 456,
														columnNumber: 25
													}, this),
													/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
														type: "submit",
														className: "h-11 w-full bg-blue-700 font-bold text-white hover:bg-blue-800",
														disabled: busy,
														children: [busy && /* @__PURE__ */ (void 0)(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 475,
															columnNumber: 36
														}, this), t.workerLogin]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 474,
														columnNumber: 25
													}, this),
													/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
														className: "pt-2 text-center text-xs text-muted-foreground",
														children: [
															t.newBusinessPrompt,
															" ",
															/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
																type: "button",
																onClick: () => setTab("register"),
																className: "font-bold text-emerald-700 underline underline-offset-2 hover:text-emerald-900",
																children: t.registerBusiness
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 481,
																columnNumber: 27
															}, this)
														]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 479,
														columnNumber: 25
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 447,
												columnNumber: 23
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 446,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsContent, {
											value: "register",
											children: regSuccessEmail ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "space-y-4 pt-4 text-center",
												children: [
													/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
														className: "mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-700",
														children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleCheck, { className: "h-6 w-6" }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 492,
															columnNumber: 29
														}, this)
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 491,
														columnNumber: 27
													}, this),
													/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
														className: "text-base font-bold text-foreground",
														children: "Registration Successful"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 494,
														columnNumber: 27
													}, this),
													/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
														className: "text-xs text-muted-foreground",
														children: [
															"Confirmation link sent to ",
															/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
																className: "font-semibold text-foreground",
																children: regSuccessEmail
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 496,
																columnNumber: 55
															}, this),
															". Verify your email, then sign in as Owner."
														]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 495,
														columnNumber: 27
													}, this),
													/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
														type: "button",
														onClick: () => {
															setRegSuccessEmail(null);
															setTab("owner");
														},
														className: "w-full",
														children: "Proceed to Sign In"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 498,
														columnNumber: 27
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 490,
												columnNumber: 42
											}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
												onSubmit: handleBusinessRegister,
												className: "space-y-4 pt-4",
												children: [
													/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
														className: "rounded-lg border border-emerald-200/70 bg-emerald-50/50 p-2.5 text-[11px] text-emerald-900",
														children: "Register your enterprise here to automatically provision your primary shop branch and owner permissions."
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 505,
														columnNumber: 27
													}, this),
													/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
														className: "space-y-3",
														children: [
															/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
																className: "space-y-1.5",
																children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
																	htmlFor: regBusinessNameId,
																	className: "flex items-center gap-1.5 text-xs font-medium",
																	children: [
																		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Building2, { className: "h-3.5 w-3.5 text-muted-foreground" }, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 512,
																			columnNumber: 33
																		}, this),
																		t.businessName,
																		" ",
																		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
																			className: "text-destructive",
																			children: "*"
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 513,
																			columnNumber: 50
																		}, this)
																	]
																}, void 0, true, {
																	fileName: _jsxFileName,
																	lineNumber: 511,
																	columnNumber: 31
																}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
																	id: regBusinessNameId,
																	required: true,
																	placeholder: t.businessNamePlaceholder,
																	value: regForm.businessName,
																	onChange: (e) => {
																		const val = e.target.value;
																		setRegForm((prev) => ({
																			...prev,
																			businessName: val,
																			branchName: prev.branchName || (val ? `${val} - Main Branch` : "")
																		}));
																	},
																	className: "h-9 text-xs"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 515,
																	columnNumber: 31
																}, this)]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 510,
																columnNumber: 29
															}, this),
															/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
																className: "grid grid-cols-1 gap-3 sm:grid-cols-2",
																children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
																	className: "space-y-1.5",
																	children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
																		htmlFor: regBranchNameId,
																		className: "flex items-center gap-1.5 text-xs font-medium",
																		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Store, { className: "h-3.5 w-3.5 text-muted-foreground" }, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 528,
																			columnNumber: 35
																		}, this), t.branchName]
																	}, void 0, true, {
																		fileName: _jsxFileName,
																		lineNumber: 527,
																		columnNumber: 33
																	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
																		id: regBranchNameId,
																		placeholder: t.branchNamePlaceholder,
																		value: regForm.branchName,
																		onChange: (e) => setRegForm((prev) => ({
																			...prev,
																			branchName: e.target.value
																		})),
																		className: "h-9 text-xs"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 531,
																		columnNumber: 33
																	}, this)]
																}, void 0, true, {
																	fileName: _jsxFileName,
																	lineNumber: 526,
																	columnNumber: 31
																}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
																	className: "space-y-1.5",
																	children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
																		htmlFor: regBusinessPhoneId,
																		className: "flex items-center gap-1.5 text-xs font-medium",
																		children: [
																			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Phone, { className: "h-3.5 w-3.5 text-muted-foreground" }, void 0, false, {
																				fileName: _jsxFileName,
																				lineNumber: 539,
																				columnNumber: 35
																			}, this),
																			t.businessPhone,
																			" ",
																			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
																				className: "text-destructive",
																				children: "*"
																			}, void 0, false, {
																				fileName: _jsxFileName,
																				lineNumber: 540,
																				columnNumber: 53
																			}, this)
																		]
																	}, void 0, true, {
																		fileName: _jsxFileName,
																		lineNumber: 538,
																		columnNumber: 33
																	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
																		id: regBusinessPhoneId,
																		type: "tel",
																		required: true,
																		placeholder: "0788 123 456",
																		value: regForm.businessPhone,
																		onChange: (e) => setRegForm((prev) => ({
																			...prev,
																			businessPhone: e.target.value
																		})),
																		className: "h-9 text-xs"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 542,
																		columnNumber: 33
																	}, this)]
																}, void 0, true, {
																	fileName: _jsxFileName,
																	lineNumber: 537,
																	columnNumber: 31
																}, this)]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 525,
																columnNumber: 29
															}, this),
															/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
																className: "space-y-1.5",
																children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
																	htmlFor: regBusinessAddressId,
																	className: "flex items-center gap-1.5 text-xs font-medium",
																	children: [
																		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MapPin, { className: "h-3.5 w-3.5 text-muted-foreground" }, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 551,
																			columnNumber: 33
																		}, this),
																		t.businessAddress,
																		" ",
																		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
																			className: "text-destructive",
																			children: "*"
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 552,
																			columnNumber: 53
																		}, this)
																	]
																}, void 0, true, {
																	fileName: _jsxFileName,
																	lineNumber: 550,
																	columnNumber: 31
																}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
																	id: regBusinessAddressId,
																	required: true,
																	placeholder: t.businessAddressPlaceholder,
																	value: regForm.businessAddress,
																	onChange: (e) => setRegForm((prev) => ({
																		...prev,
																		businessAddress: e.target.value
																	})),
																	className: "h-9 text-xs"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 554,
																	columnNumber: 31
																}, this)]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 549,
																columnNumber: 29
															}, this),
															/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
																className: "grid grid-cols-1 gap-3 sm:grid-cols-2",
																children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
																	className: "space-y-1.5",
																	children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
																		htmlFor: regFullNameId,
																		className: "flex items-center gap-1.5 text-xs font-medium",
																		children: [
																			t.ownerFullName,
																			" ",
																			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
																				className: "text-destructive",
																				children: "*"
																			}, void 0, false, {
																				fileName: _jsxFileName,
																				lineNumber: 563,
																				columnNumber: 53
																			}, this)
																		]
																	}, void 0, true, {
																		fileName: _jsxFileName,
																		lineNumber: 562,
																		columnNumber: 33
																	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
																		id: regFullNameId,
																		required: true,
																		placeholder: "Full Name",
																		value: regForm.fullName,
																		onChange: (e) => setRegForm((prev) => ({
																			...prev,
																			fullName: e.target.value
																		})),
																		className: "h-9 text-xs"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 565,
																		columnNumber: 33
																	}, this)]
																}, void 0, true, {
																	fileName: _jsxFileName,
																	lineNumber: 561,
																	columnNumber: 31
																}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
																	className: "space-y-1.5",
																	children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
																		htmlFor: regEmailId,
																		className: "flex items-center gap-1.5 text-xs font-medium",
																		children: [
																			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Mail, { className: "h-3.5 w-3.5 text-muted-foreground" }, void 0, false, {
																				fileName: _jsxFileName,
																				lineNumber: 573,
																				columnNumber: 35
																			}, this),
																			t.email,
																			" ",
																			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
																				className: "text-destructive",
																				children: "*"
																			}, void 0, false, {
																				fileName: _jsxFileName,
																				lineNumber: 574,
																				columnNumber: 45
																			}, this)
																		]
																	}, void 0, true, {
																		fileName: _jsxFileName,
																		lineNumber: 572,
																		columnNumber: 33
																	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
																		id: regEmailId,
																		type: "email",
																		required: true,
																		value: regForm.email,
																		onChange: (e) => setRegForm((prev) => ({
																			...prev,
																			email: e.target.value
																		})),
																		className: "h-9 text-xs"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 576,
																		columnNumber: 33
																	}, this)]
																}, void 0, true, {
																	fileName: _jsxFileName,
																	lineNumber: 571,
																	columnNumber: 31
																}, this)]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 560,
																columnNumber: 29
															}, this),
															/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
																className: "space-y-1.5",
																children: [
																	/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
																		htmlFor: regPasswordId,
																		className: "flex items-center gap-1.5 text-xs font-medium",
																		children: [
																			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Lock, { className: "h-3.5 w-3.5 text-muted-foreground" }, void 0, false, {
																				fileName: _jsxFileName,
																				lineNumber: 586,
																				columnNumber: 33
																			}, this),
																			t.password,
																			" (min. 12 chars) ",
																			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
																				className: "text-destructive",
																				children: "*"
																			}, void 0, false, {
																				fileName: _jsxFileName,
																				lineNumber: 587,
																				columnNumber: 62
																			}, this)
																		]
																	}, void 0, true, {
																		fileName: _jsxFileName,
																		lineNumber: 585,
																		columnNumber: 31
																	}, this),
																	/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
																		className: "relative",
																		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
																			id: regPasswordId,
																			type: showRegPassword ? "text" : "password",
																			required: true,
																			value: regForm.password,
																			onChange: (e) => setRegForm((prev) => ({
																				...prev,
																				password: e.target.value
																			})),
																			className: "h-9 pr-9 text-xs"
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 590,
																			columnNumber: 33
																		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
																			type: "button",
																			"aria-label": showRegPassword ? "Hide password" : "Show password",
																			onClick: () => setShowRegPassword(!showRegPassword),
																			className: "absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground",
																			children: showRegPassword ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EyeOff, { className: "h-3.5 w-3.5" }, void 0, false, {
																				fileName: _jsxFileName,
																				lineNumber: 595,
																				columnNumber: 54
																			}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Eye, { className: "h-3.5 w-3.5" }, void 0, false, {
																				fileName: _jsxFileName,
																				lineNumber: 595,
																				columnNumber: 91
																			}, this)
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 594,
																			columnNumber: 33
																		}, this)]
																	}, void 0, true, {
																		fileName: _jsxFileName,
																		lineNumber: 589,
																		columnNumber: 31
																	}, this),
																	regForm.password.length > 0 && /* @__PURE__ */ (void 0)("div", {
																		className: "space-y-1 pt-1 text-[11px]",
																		children: [/* @__PURE__ */ (void 0)("div", {
																			className: "grid grid-cols-5 gap-1",
																			children: [
																				1,
																				2,
																				3,
																				4,
																				5
																			].map((lvl) => /* @__PURE__ */ (void 0)("div", { className: `h-1 rounded-full ${strengthScore >= lvl ? regPasswordValid ? "bg-emerald-500" : strengthScore >= 3 ? "bg-amber-500" : "bg-rose-500" : "bg-muted"}` }, lvl, false, {
																				fileName: _jsxFileName,
																				lineNumber: 601,
																				columnNumber: 65
																			}, this))
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 600,
																			columnNumber: 35
																		}, this), /* @__PURE__ */ (void 0)("div", {
																			className: "flex flex-wrap items-center gap-2 pt-0.5 text-[10px] text-muted-foreground",
																			children: [
																				/* @__PURE__ */ (void 0)("span", {
																					className: hasMinLength ? "text-emerald-700 font-semibold" : "",
																					children: hasMinLength ? "✓ 12+ chars" : "• 12+ chars"
																				}, void 0, false, {
																					fileName: _jsxFileName,
																					lineNumber: 604,
																					columnNumber: 37
																				}, this),
																				/* @__PURE__ */ (void 0)("span", {
																					className: hasUpper && hasLower ? "text-emerald-700 font-semibold" : "",
																					children: hasUpper && hasLower ? "✓ Upper & lower" : "• Upper & lower"
																				}, void 0, false, {
																					fileName: _jsxFileName,
																					lineNumber: 607,
																					columnNumber: 37
																				}, this),
																				/* @__PURE__ */ (void 0)("span", {
																					className: hasNumber && hasSpecial ? "text-emerald-700 font-semibold" : "",
																					children: hasNumber && hasSpecial ? "✓ Number & symbol" : "• Number & symbol"
																				}, void 0, false, {
																					fileName: _jsxFileName,
																					lineNumber: 610,
																					columnNumber: 37
																				}, this)
																			]
																		}, void 0, true, {
																			fileName: _jsxFileName,
																			lineNumber: 603,
																			columnNumber: 35
																		}, this)]
																	}, void 0, true, {
																		fileName: _jsxFileName,
																		lineNumber: 599,
																		columnNumber: 63
																	}, this)
																]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 584,
																columnNumber: 29
															}, this),
															/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
																className: "space-y-1.5",
																children: [
																	/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
																		htmlFor: regConfirmPasswordId,
																		className: "flex items-center gap-1.5 text-xs font-medium",
																		children: [
																			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Lock, { className: "h-3.5 w-3.5 text-muted-foreground" }, void 0, false, {
																				fileName: _jsxFileName,
																				lineNumber: 619,
																				columnNumber: 33
																			}, this),
																			t.confirmPassword,
																			" ",
																			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
																				className: "text-destructive",
																				children: "*"
																			}, void 0, false, {
																				fileName: _jsxFileName,
																				lineNumber: 620,
																				columnNumber: 53
																			}, this)
																		]
																	}, void 0, true, {
																		fileName: _jsxFileName,
																		lineNumber: 618,
																		columnNumber: 31
																	}, this),
																	/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
																		className: "relative",
																		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
																			id: regConfirmPasswordId,
																			type: showRegConfirmPassword ? "text" : "password",
																			required: true,
																			value: regForm.confirmPassword,
																			onChange: (e) => setRegForm((prev) => ({
																				...prev,
																				confirmPassword: e.target.value
																			})),
																			className: "h-9 pr-9 text-xs"
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 623,
																			columnNumber: 33
																		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
																			type: "button",
																			"aria-label": showRegConfirmPassword ? "Hide password" : "Show password",
																			onClick: () => setShowRegConfirmPassword(!showRegConfirmPassword),
																			className: "absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground",
																			children: showRegConfirmPassword ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EyeOff, { className: "h-3.5 w-3.5" }, void 0, false, {
																				fileName: _jsxFileName,
																				lineNumber: 628,
																				columnNumber: 61
																			}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Eye, { className: "h-3.5 w-3.5" }, void 0, false, {
																				fileName: _jsxFileName,
																				lineNumber: 628,
																				columnNumber: 98
																			}, this)
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 627,
																			columnNumber: 33
																		}, this)]
																	}, void 0, true, {
																		fileName: _jsxFileName,
																		lineNumber: 622,
																		columnNumber: 31
																	}, this),
																	regForm.confirmPassword.length > 0 && !regPasswordsMatch && /* @__PURE__ */ (void 0)("p", {
																		className: "text-[10px] text-destructive",
																		children: t.passwordsDontMatch
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 631,
																		columnNumber: 92
																	}, this)
																]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 617,
																columnNumber: 29
															}, this)
														]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 509,
														columnNumber: 27
													}, this),
													/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
														type: "submit",
														disabled: busy,
														className: "h-10 w-full bg-emerald-600 font-bold text-white shadow hover:bg-emerald-700",
														children: busy ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 637,
															columnNumber: 33
														}, this), "Creating Account…"] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 636,
															columnNumber: 37
														}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: ["Register Agrodealer Business", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, { className: "ml-2 h-4 w-4" }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 641,
															columnNumber: 33
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 639,
															columnNumber: 37
														}, this)
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 635,
														columnNumber: 27
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 504,
												columnNumber: 34
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 489,
											columnNumber: 21
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 380,
									columnNumber: 19
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 379,
								columnNumber: 17
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 361,
								columnNumber: 21
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 340,
							columnNumber: 11
						}, this),
						tab !== "register" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-4 flex items-center justify-between gap-3 rounded-xl border border-emerald-300 bg-emerald-50/90 p-4 text-xs text-emerald-950 shadow-sm",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-2.5 font-medium",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Building2, { className: "h-5 w-5 shrink-0 text-emerald-700" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 654,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "font-bold text-emerald-900",
									children: t.newBusinessPrompt
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 656,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-[11px] text-emerald-800",
									children: "Set up your agrodealer business and branches in under 2 minutes."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 657,
									columnNumber: 19
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 655,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 653,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								onClick: () => setTab("register"),
								className: "shrink-0 rounded-lg bg-emerald-700 px-3 py-2 text-xs font-bold text-white shadow transition hover:bg-emerald-800",
								children: [t.registerBusiness, " →"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 660,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 652,
							columnNumber: 33
						}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-4 flex items-center justify-between rounded-xl border border-muted bg-muted/40 p-3.5 text-xs text-muted-foreground shadow-sm",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: t.alreadyRegisteredPrompt }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 664,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								onClick: () => setTab("owner"),
								className: "font-bold text-primary underline underline-offset-2 hover:text-primary/80",
								children: [t.signIn, " →"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 665,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 663,
							columnNumber: 22
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mt-5 text-center text-[11px] text-muted-foreground",
							children: [
								"© ",
								(/* @__PURE__ */ new Date()).getFullYear(),
								" UFBC Agrodealer · Secure business workspace"
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 670,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 321,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 320,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 278,
		columnNumber: 10
	}, this);
}
//#endregion
export { AuthPage as component };
