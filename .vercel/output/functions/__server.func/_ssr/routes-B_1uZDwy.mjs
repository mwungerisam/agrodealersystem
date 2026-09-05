import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { y as Navigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as LoaderCircle } from "../_libs/lucide-react.mjs";
import { y as useAuth } from "./router-VEvSM2XK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-B_1uZDwy.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/index.tsx?tsr-split=component";
function Index() {
	const { user, loading } = useAuth();
	if (loading) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.12),_transparent_38%),linear-gradient(135deg,#f8fafc_0%,#eef8f1_100%)] px-4",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex flex-col items-center gap-5 rounded-[28px] border border-border/70 bg-white/90 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-sm",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-600 via-green-600 to-lime-500 shadow-lg shadow-emerald-500/25",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-1 rounded-xl border border-white/30" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 13,
					columnNumber: 13
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoaderCircle, { className: "relative h-7 w-7 animate-spin text-white" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 14,
					columnNumber: 13
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 12,
				columnNumber: 11
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-[10px] font-semibold uppercase tracking-[0.28em] text-emerald-700/90",
						children: "UFBC AGRODEALER"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 17,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
						className: "mt-2 text-lg font-semibold text-slate-900",
						children: "Starting securely"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 18,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-1 text-sm text-slate-500",
						children: "Checking your access…"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 19,
						columnNumber: 13
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 16,
				columnNumber: 11
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 11,
			columnNumber: 9
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 10,
		columnNumber: 12
	}, this);
	if (user) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Navigate, {
		to: "/dashboard",
		replace: true
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 24,
		columnNumber: 20
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Navigate, {
		to: "/auth",
		replace: true
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 25,
		columnNumber: 10
	}, this);
}
//#endregion
export { Index as component };
