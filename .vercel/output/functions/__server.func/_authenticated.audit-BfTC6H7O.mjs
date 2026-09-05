import { t as require_jsx_dev_runtime } from "./_libs/react.mjs";
import { t as supabase } from "./_ssr/client-CSPvjf5l.mjs";
import { y as Navigate } from "./_libs/@tanstack/react-router+[...].mjs";
import { n as useQuery } from "./_libs/tanstack__react-query.mjs";
import { M as numberFmt, N as t, T as fmtDateTime, d as Card, f as CardContent, h as CardTitle, m as CardHeader, x as useIsOwner } from "./_ssr/router-VEvSM2XK.mjs";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./_ssr/table-DSESHGZo.mjs";
import { t as Badge } from "./_ssr/badge-CDodo29s.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_authenticated.audit-BfTC6H7O.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/_authenticated.audit.tsx?tsr-split=component";
function AuditPage() {
	const isOwner = useIsOwner();
	const { data: logs = [] } = useQuery({
		queryKey: ["audit-log"],
		staleTime: 6e4,
		queryFn: async () => {
			const { data, error } = await supabase.from("audit_log").select("id, action, entity, entity_id, branch_id, user_id, created_at, details, branches(name)").order("created_at", { ascending: false }).limit(500);
			if (error) throw error;
			const userIds = (data ?? []).map((log) => log.user_id).filter((id) => typeof id === "string" && id.length > 0);
			if (userIds.length === 0) return data ?? [];
			const { data: profiles, error: profilesError } = await supabase.from("profiles").select("id, full_name").in("id", [...new Set(userIds)]);
			if (profilesError) throw profilesError;
			const names = new Map((profiles ?? []).map((profile) => [profile.id, profile.full_name]));
			return (data ?? []).map((log) => ({
				...log,
				profile_name: log.user_id ? names.get(log.user_id) ?? null : null
			}));
		}
	});
	if (!isOwner) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Navigate, {
		to: "/dashboard",
		replace: true
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 38,
		columnNumber: 24
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
			className: "text-2xl font-extrabold tracking-tight sm:text-3xl",
			children: t.audit
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 41,
			columnNumber: 9
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
			className: "text-sm text-muted-foreground",
			children: "Review recorded activity by user."
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 42,
			columnNumber: 9
		}, this)] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 40,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, { children: [
			"Recent activity (",
			numberFmt(logs.length),
			")"
		] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 47,
			columnNumber: 11
		}, this) }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 46,
			columnNumber: 9
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "overflow-x-auto",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Table, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableRow, { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, { children: t.date }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 54,
					columnNumber: 19
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, { children: t.actions }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 55,
					columnNumber: 19
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, { children: "Entity" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 56,
					columnNumber: 19
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, { children: t.branch }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 57,
					columnNumber: 19
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, { children: "User" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 58,
					columnNumber: 19
				}, this)
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 53,
				columnNumber: 17
			}, this) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 52,
				columnNumber: 15
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableBody, { children: logs.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableRow, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, {
				colSpan: 5,
				className: "py-10 text-center text-muted-foreground",
				children: t.noData
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 63,
				columnNumber: 21
			}, this) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 62,
				columnNumber: 38
			}, this) : logs.map((log) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableRow, { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, {
					className: "text-xs",
					children: fmtDateTime(log.created_at)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 67,
					columnNumber: 23
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
					variant: "outline",
					className: "capitalize",
					children: log.action
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 69,
					columnNumber: 25
				}, this) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 68,
					columnNumber: 23
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, {
					className: "font-medium",
					children: log.entity
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 73,
					columnNumber: 23
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, { children: log.branches?.name ?? "—" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 74,
					columnNumber: 23
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, { children: log.profile_name ?? log.user_id?.slice(0, 8) ?? "—" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 75,
					columnNumber: 23
				}, this)
			] }, log.id, true, {
				fileName: _jsxFileName,
				lineNumber: 66,
				columnNumber: 49
			}, this)) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 61,
				columnNumber: 15
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 51,
				columnNumber: 13
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 50,
			columnNumber: 11
		}, this) }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 49,
			columnNumber: 9
		}, this)] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 45,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 39,
		columnNumber: 10
	}, this);
}
//#endregion
export { AuditPage as component };
