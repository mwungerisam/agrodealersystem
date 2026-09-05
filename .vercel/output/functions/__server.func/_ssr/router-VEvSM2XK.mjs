import { o as __toESM } from "../_runtime.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { N as Slot, a as Overlay2, c as Title2, i as Description2, l as Trigger2, n as Cancel, o as Portal2, r as Content2, s as Root2, t as Action } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { t as __exportAll } from "./rolldown-runtime-D7D4PA-g.mjs";
import { t as supabase } from "./client-CSPvjf5l.mjs";
import { _ as createRootRouteWithContext, b as useNavigate, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter, u as HeadContent, v as Link, x as useRouter, y as Navigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
import { A as LoaderCircle, B as CircleCheck, C as Phone, D as Mail, E as MapPin, F as Eye, G as ChartColumn, I as EyeOff, K as Building2, M as KeyRound, N as Info, W as Check, X as ArrowRight, a as UserX, d as Trash2, f as Store, i as UsersRound, k as Lock, l as TriangleAlert, p as Sprout, q as Boxes, t as X, v as ShieldCheck, y as ShieldAlert } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/utils-Bo7Vckr1.js
var rw = {
	appName: "UFBC AGRODEALER",
	tagline: "Sisitemu yo Gucunga Ububiko n'Ubucuruzi",
	signIn: "Injira",
	signUp: "Iyandikishe",
	ownerLogin: "Injira nk'umuyobozi",
	workerLogin: "Injira nk'umukozi",
	registerAccount: "Fungura konti",
	registerBusiness: "Kwandikisha Ubucuruzi",
	registerBusinessTitle: "Iyandikishe nk'Ubucuruzi Bushya",
	registerBusinessDesc: "Fungura konti nshya yo gucunga ubucuruzi bwawe bwa agro-dealer, amashami n'ububiko.",
	businessName: "Izina ry'ubucuruzi",
	businessNamePlaceholder: "Urugero: Kigali Agro Supplies Ltd",
	branchName: "Ishami rikuru",
	branchNamePlaceholder: "Urugero: Ishami Rikuru - Nyabugogo",
	businessAddress: "Aderesi y'ubucuruzi",
	businessAddressPlaceholder: "Urugero: Nyabugogo Market, Kigali",
	businessPhone: "Telefoni y'ubucuruzi",
	ownerFullName: "Amazina ya nyir'ubucuruzi",
	newBusinessPrompt: "Nta konti y'ubucuruzi ufite?",
	registerNewBusinessLink: "Kwandikisha ubucuruzi bushya",
	alreadyRegisteredPrompt: "Usanzwe ufite konti?",
	goToLogin: "Injira kuri sisitemu",
	businessRegistrationSuccess: "Ubucuruzi bwanditswe neza! Murakaza neza.",
	businessRegistrationEmailConfirmation: "Konti y'ubucuruzi yafunguwe! Niba bikenewe kwemeza imeri, reba muri email yawe hanyuma winjire.",
	ownerLoginDesc: "Injira kugira ngo ucunge abakozi, amashami n'ububiko.",
	workerLoginDesc: "Injira kugira ngo ukore ibikorwa by'ishami ryawe.",
	registerAccountDesc: "Fungura konti nshya; umuyobozi azayigenera uruhare.",
	wrongPortal: "Iyi konti ntabwo yemerewe kwinjira muri iki gice.",
	signOut: "Sohoka",
	email: "Imeri",
	password: "Ijambo ry'ibanga",
	fullName: "Amazina yombi",
	phone: "Telefoni",
	haveAccount: "Usanzwe ufite konti?",
	noAccount: "Nta konti ufite?",
	welcome: "Murakaza neza",
	signInDesc: "Injira cyangwa wiyandikishe",
	signUpDesc: "Iyandikishe kugira ngo utangire",
	forgotPassword: "Wibagiwe ijambo ry'ibanga?",
	sendResetLink: "Ohereza link",
	resetLinkDescription: "Ohereza ubutumwa bwo guhindura ijambo ry'ibanga kuri imeri yawe.",
	backToAuth: "Subira inyuma",
	resetPassword: "Hindura Ijambo ry'ibanga",
	newPassword: "Ijambo ry'ibanga rishya",
	confirmPassword: "Emeza ijambo ry'ibanga",
	passwordTooShort: "Ijambo ry'ibanga rigomba kuba nibura inyuguti 8",
	passwordsDontMatch: "Amagambo y'ibanga ntabwo ahura",
	passwordChanged: "Ijambo ry'ibanga ryahinduwe neza",
	resetLinkSent: "Twakoherereje email yo guhindura ijambo ry'ibanga",
	invalidCredentials: "Imeri cyangwa ijambo ry'ibanga ntabwo bihuye. Ongera ugerageze.",
	userAlreadyRegistered: "Iyi imeri isanzwe ifite konti. Kanda kuri 'Injira' kugira ngo winjire.",
	weakPassword: "Ijambo ry'ibanga ryoroshye cyane. Koresha ijambo rikomeye (urugero: Ibanga#2026).",
	emailNotConfirmed: "Banza wemeze imeri yawe unyuze kuri link yohererejwe muri email yawe.",
	rateLimitExceeded: "Wagerageje inshuro nyinshi mu kanya gato. Banza utegereze gato.",
	signUpSuccessEmailSent: "Konti yafunguwe neza! Niba bikenewe kwemeza imeri, reba ubutumwa muri email yawe hanyuma winjire.",
	passwordHint: "Nibura inyuguti 12, inyuguti nto n'inkuru, imibare n'ibimenyetso.",
	dashboard: "Incamake",
	branches: "Amashami",
	products: "Ibicuruzwa",
	purchases: "Amasoko",
	sales: "Kugurisha",
	inventory: "Ububiko",
	reports: "Raporo",
	expenses: "Ibisohoka",
	users: "Abakozi",
	customers: "Abakiriya",
	targets: "Intego zo kugurisha",
	audit: "Igenzura ry'ibikorwa",
	transfers: "Iyimurwa ry'ububiko",
	save: "Bika",
	cancel: "Reka",
	delete: "Siba",
	edit: "Hindura",
	update: "Hindura",
	search: "Shakisha",
	add: "Ongeraho",
	addFirst: "Ongeraho icya mbere",
	new: "Gishya",
	create: "Kora",
	view: "Reba",
	download: "Kuramo",
	select: "Hitamo",
	confirm: "Emeza",
	yes: "Yego",
	no: "Oya",
	loading: "Birategurwa...",
	noData: "Nta makuru ahari",
	actions: "Ibikorwa",
	export: "Sohokura",
	exportCsv: "Sohokura CSV",
	exportPdf: "Sohokura PDF",
	refresh: "Ongera utangire",
	clearFilter: "Siba iyungurura",
	applyFilter: "Koresha iyungurura",
	all: "Byose",
	name: "Izina",
	code: "Kode",
	sku: "SKU",
	address: "Aderesi",
	location: "Ishami",
	status: "Imiterere",
	active: "Ikora",
	inactive: "Ntikora",
	category: "Icyiciro",
	buyingPrice: "Igiciro cyo kugura",
	sellingPrice: "Igiciro cyo kugurisha",
	currentStock: "Ububiko buhari",
	unit: "Igipimo",
	unitPrice: "Igiciro kuri kimwe",
	total: "Igiteranyo",
	totalAmount: "Igiteranyo cy'agaciro",
	supplier: "Uwatanze",
	branch: "Ishami",
	branchCode: "Kode y'ishami",
	product: "Igicuruzwa",
	quantity: "Ingano",
	transportCost: "Ikiguzi cyo gutwara",
	purchaseDate: "Itariki yo kurangura",
	saleDate: "Itariki yo kugurisha",
	expenseDate: "Itariki",
	description: "Ibisobanuro",
	amount: "Amafaranga",
	role: "Uruhare",
	owner: "Nyir'ubucuruzi",
	manager: "Umukozi",
	worker: "Umukozi",
	profit: "Inyungu",
	avgCost: "Igishingiro cy'igiciro",
	minStock: "Ububiko bwa kera",
	minCost: "Igiciro kigize",
	targetAmount: "Ingingo y'ubucuruzi",
	period: "Akagera",
	daily: "Buri munsi",
	monthly: "Buri kwezi",
	customer: "Umukiriya",
	customerName: "Izina ry'umukiriya",
	customerPhone: "Telefoni y'umukiriya",
	ifumbire: "Ifumbire",
	imbuto: "Imbuto",
	categoryAll: "Icyiciro byose",
	inStock: "Hari",
	lowStock: "Birahari",
	outOfStock: "Byanka",
	stockStatus: "Imiterere y'ububiko",
	todaySales: "Igurishwa ry'uyu munsi",
	todayProfit: "Inyungu y'uyu munsi",
	todayExpenses: "Ibyakoreshejwe by'uyu munsi",
	todayNet: "Inyungu iheruka y'uyu munsi",
	remainingStock: "Ububiko bwo muri iki gihe",
	lowStockLabel: "Ibicuruzwa bike",
	recentTransactions: "Ibikorwa biheruka",
	totalBranches: "Amashami yose",
	totalProducts: "Ibicuruzwa byose",
	totalWorkers: "Abakozi bose",
	totalInventoryValue: "Agaciro k'ububiko bwose",
	monthlyRevenue: "Imari y'ukwezi",
	monthlyProfit: "Inyungu y'ukwezi",
	currentBranch: "Ishami ryo muri iki gihe",
	salesTarget: "Intego y'ubucuruzi",
	salesAchieved: "Yamaze gukurura",
	salesRemaining: "Yanditse",
	targetProgress: "Imbere mu rwego rw'ingingo",
	businessOverview: "Ibonerahamwe by'ubucuruzi",
	branchPerformance: "Imikorere y'ishami",
	revenue: "Imari",
	expense: "Igishoro",
	noActiveBranches: "Nta ishami rikora",
	noProducts: "Nta bicuruzwa",
	noStock: "Nta bubiko buhari",
	setupRequired: "Gahunda ikaba ariyo",
	dailyReport: "Raporo y'umunsi",
	monthlyReport: "Raporo y'ukwezi",
	weeklyReport: "Raporo y'icyumweru",
	annualReport: "Raporo y'umwaka",
	weekOf: "Icyumweru gitangirira",
	year: "Umwaka",
	totalCustomers: "Abakiriya bose",
	allBranches: "Amashami yose",
	reportDescription: "Kora raporo z'ibikorwa, inyungu n'abakiriya.",
	inventoryReport: "Raporo y'ububiko",
	salesReport: "Raporo y'igurisha",
	downloadPdf: "Manura PDF",
	totalSales: "Igurishwa ryose",
	totalProfit: "Inyungu yose",
	totalPurchases: "Amasoko yose",
	totalExpenses: "Ibyakoreshejwe byose",
	netProfit: "Inyungu iheruka",
	grossProfit: "Inyungu isukuyemo",
	costOfGoods: "Igiciro cyo gukora ibintu",
	date: "Itariki",
	from: "Kuva",
	to: "Kugeza",
	productsSold: "Ibicuruzwa bigurizwe",
	quantitySold: "Ingano y'ibicuruzwa",
	bestSelling: "Ibicuruzwa bitaranze",
	filter: "Fila",
	apply: "Shyiraho",
	saved: "Byabitswe neza",
	deleted: "Byasibwe neza",
	updated: "Byahinduwe neza",
	error: "Habaye ikosa",
	errorGeneric: "Habaye ikosa. Ongera ugerageza cyangwa ubaze umuyobozi.",
	tryAgain: "Ongera ugerageze",
	confirmDelete: "Wemeza gusiba iki?",
	requiredField: "Iki cyanya ni ngombwa",
	invalidNumber: "Umubare ntukwiye",
	invalidEmail: "Imeri ntikwiye",
	noStockEnough: "Ububiko ntibuhagije",
	noStockForProduct: "Iki gicuruzwa nta bubiko gifite",
	chooseBranch: "Hitamo ishami",
	chooseProduct: "Hitamo igicuruzwa",
	chooseCustomer: "Hitamo umukiriya",
	addFirstBranch: "Banza wongereho ishami",
	addFirstProduct: "Banza wongereho igicuruzwa",
	addFirstCustomer: "Banza wongereho umukiriya",
	onlyOwner: "Gusa umuyobozi wemerewe",
	unauthorized: "Ntibyemewe",
	operationFailed: "Ikosa mu bikorwa: {error}",
	customerRequired: "Umukiriya ni ngombwa kugira ngo wanditse igurisha",
	transferComplete: "Iyimurwa ry'ububiko ryakozwe neza",
	stockAdjusted: "Ububiko bwahinduwe",
	stockAdjustment: "Hindura ububiko",
	targetSet: "Intego yohereywe",
	noBranchesAvailable: "Nta shami rihari",
	noProductsAvailable: "Nta gicuruzwa gihari",
	statusSuccess: "Byagenzenwe neza",
	statusError: "Ibosa",
	statusPending: "Bikaba bigenda",
	statusDraft: "Mu nini",
	rwf: "RWF",
	currency: "Amafaranga",
	language: "Ururimi",
	kinyarwanda: "Ikinyarwanda",
	english: "English",
	account: "Konti yanjye",
	accountSettings: "Igenamiterere rya konti",
	changePassword: "Hindura ijambo ry'ibanga",
	passwordUpdated: "Ijambo ry'ibanga ryahinduwe neza.",
	removeWorker: "Kuraho umukozi",
	removeWorkerTitle: "Kuraho umukozi muri sisitemu?",
	removeWorkerDesc: "Konti y'uyu mukozi izafungwa burundu. Amakuru y'ibikorwa yakoze azaguma muri sisitemu.",
	workerRemoved: "Umukozi yavanywe muri sisitemu.",
	cannotRemoveOwner: "Abayobozi ntibavanwa muri iki gice.",
	addWorker: "Ongeraho umukozi",
	inviteWorker: "Ohereza ubutumire ku mukozi",
	workerInvited: "Ubutumire bwo gufungura konti bwoherejwe neza.",
	workerInviteDesc: "Umukozi azahabwa email yo gushyiraho ijambo ry'ibanga, hanyuma ajye yinjira gusa.",
	createWorker: "Fungura konti y'umukozi",
	workerCreated: "Konti y'umukozi yafunguwe neza.",
	workerCreationDesc: "Shyiraho ijambo ry'ibanga ry'ibanze, urihe umukozi mu buryo bwizewe. Ashobora kurisimbuza amaze kwinjira.",
	initialPassword: "Ijambo ry'ibanga ry'ibanze"
};
var en = {
	appName: "UFBC AGRODEALER",
	tagline: "Inventory and Business Management System",
	signIn: "Sign in",
	signUp: "Sign up",
	signOut: "Sign out",
	email: "Email",
	password: "Password",
	fullName: "Full name",
	phone: "Phone",
	forgotPassword: "Forgot password?",
	sendResetLink: "Send reset link",
	resetLinkDescription: "Send a password reset link to your email address.",
	backToAuth: "Back to sign in",
	resetPassword: "Reset password",
	newPassword: "New password",
	confirmPassword: "Confirm password",
	ownerLogin: "Sign in as owner",
	workerLogin: "Sign in as worker",
	ownerLoginDesc: "Manage workers, branches, and inventory.",
	workerLoginDesc: "Access operations for your assigned branch.",
	wrongPortal: "This account is not permitted to use this sign-in area.",
	passwordTooShort: "Password must contain at least 8 characters.",
	passwordsDontMatch: "Passwords do not match.",
	passwordChanged: "Password changed successfully.",
	resetLinkSent: "We sent a password reset email.",
	invalidCredentials: "Invalid email or password. Please try again.",
	userAlreadyRegistered: "This email already has an account. Please sign in.",
	weakPassword: "This password is too weak. Use a stronger password.",
	emailNotConfirmed: "Confirm your email using the link we sent before signing in.",
	rateLimitExceeded: "Too many requests were made in a short time. Please wait before trying again.",
	passwordHint: "Use at least 12 characters, including upper- and lower-case letters, a number, and a symbol.",
	dashboard: "Overview",
	branches: "Branches",
	products: "Products",
	purchases: "Purchases",
	sales: "Sales",
	dailyReport: "Daily report",
	weeklyReport: "Weekly report",
	monthlyReport: "Monthly report",
	annualReport: "Annual report",
	weekOf: "Week starting",
	year: "Year",
	totalCustomers: "Total customers",
	allBranches: "All branches",
	reportDescription: "Generate reports for activity, profit, and customers.",
	inventory: "Inventory",
	reports: "Reports",
	expenses: "Expenses",
	users: "Users",
	customers: "Customers",
	targets: "Sales targets",
	audit: "Activity audit",
	transfers: "Stock transfers",
	save: "Save",
	cancel: "Cancel",
	delete: "Delete",
	edit: "Edit",
	update: "Update",
	search: "Search",
	add: "Add",
	addFirst: "Add first",
	new: "New",
	create: "Create",
	view: "View",
	download: "Download",
	select: "Select",
	confirm: "Confirm",
	yes: "Yes",
	no: "No",
	loading: "Loading...",
	noData: "No data available",
	actions: "Actions",
	export: "Export",
	exportCsv: "Export CSV",
	exportPdf: "Export PDF",
	refresh: "Refresh",
	clearFilter: "Clear filters",
	applyFilter: "Apply filters",
	all: "All",
	name: "Name",
	code: "Code",
	address: "Address",
	location: "Branch",
	status: "Status",
	active: "Active",
	inactive: "Inactive",
	category: "Category",
	buyingPrice: "Purchase price",
	sellingPrice: "Selling price",
	currentStock: "Current stock",
	unit: "Unit",
	unitPrice: "Unit price",
	total: "Total",
	totalAmount: "Total value",
	supplier: "Supplier",
	branch: "Branch",
	branchCode: "Branch code",
	product: "Product",
	quantity: "Quantity",
	transportCost: "Transport cost",
	purchaseDate: "Purchase date",
	saleDate: "Sale date",
	expenseDate: "Date",
	description: "Description",
	amount: "Amount",
	role: "Role",
	owner: "Owner",
	manager: "Worker",
	worker: "Worker",
	profit: "Profit",
	daily: "Daily",
	monthly: "Monthly",
	customer: "Customer",
	customerName: "Customer name",
	customerPhone: "Customer phone",
	categoryAll: "All categories",
	inStock: "In stock",
	lowStock: "Low stock",
	lowStockLabel: "Low stock",
	outOfStock: "Out of stock",
	stockStatus: "Stock status",
	todaySales: "Today's sales",
	todayProfit: "Today's profit",
	todayExpenses: "Today's expenses",
	todayNet: "Today's net profit",
	recentTransactions: "Recent transactions",
	totalBranches: "Total branches",
	totalProducts: "Total products",
	totalWorkers: "Total workers",
	totalInventoryValue: "Total inventory value",
	monthlyRevenue: "Monthly revenue",
	monthlyProfit: "Monthly profit",
	currentBranch: "Current branch",
	salesTarget: "Sales target",
	salesAchieved: "Sales achieved",
	salesRemaining: "Remaining",
	businessOverview: "Business overview",
	branchPerformance: "Branch performance",
	revenue: "Revenue",
	expense: "Expense",
	saved: "Saved successfully",
	deleted: "Deleted successfully",
	updated: "Updated successfully",
	error: "An error occurred",
	errorGeneric: "An error occurred. Please try again or contact an administrator.",
	tryAgain: "Try again",
	requiredField: "This field is required",
	invalidEmail: "Invalid email address",
	noStockEnough: "Insufficient stock",
	chooseBranch: "Select a branch",
	chooseProduct: "Select a product",
	chooseCustomer: "Select a customer",
	onlyOwner: "Owner access only",
	unauthorized: "Not authorized",
	language: "Language",
	kinyarwanda: "Kinyarwanda",
	english: "English",
	account: "My account",
	accountSettings: "Account settings",
	changePassword: "Change password",
	passwordUpdated: "Password updated successfully.",
	removeWorker: "Remove worker",
	removeWorkerTitle: "Remove worker from the system?",
	removeWorkerDesc: "This worker's account will be permanently closed. Their business activity records will remain.",
	workerRemoved: "Worker removed from the system.",
	cannotRemoveOwner: "Owners cannot be removed here.",
	addWorker: "Add worker",
	inviteWorker: "Invite worker",
	workerInvited: "Account invitation sent successfully.",
	workerInviteDesc: "The worker will receive an email to set a password, then only needs to sign in.",
	createWorker: "Create worker",
	workerCreated: "Worker account created successfully.",
	workerCreationDesc: "Set an initial password and share it securely with the worker. They can change it after signing in.",
	initialPassword: "Initial password",
	registerAccount: "Create account",
	registerBusiness: "Register Business",
	registerBusinessTitle: "Register Your Agrodealer Business",
	registerBusinessDesc: "Create an agrodealer owner account to manage inventory, sales, staff, and multi-branch operations.",
	businessName: "Business Name",
	businessNamePlaceholder: "e.g. Kigali Agro Supplies Ltd",
	branchName: "Primary Branch / Shop",
	branchNamePlaceholder: "e.g. Main Branch - Nyabugogo",
	businessAddress: "Business Address / Location",
	businessAddressPlaceholder: "e.g. Nyabugogo Market, Kigali",
	businessPhone: "Business Phone",
	ownerFullName: "Owner Full Name",
	newBusinessPrompt: "Need to onboard a new business?",
	registerNewBusinessLink: "Register a new business",
	alreadyRegisteredPrompt: "Already have a registered business?",
	goToLogin: "Sign in to your portal",
	businessRegistrationSuccess: "Business registered successfully! Welcome to your workspace.",
	businessRegistrationEmailConfirmation: "Business account created! Check your email to confirm your account, then sign in.",
	registerAccountDesc: "Create a new account. An owner will assign your access.",
	haveAccount: "Already have an account?",
	noAccount: "Don't have an account?",
	welcome: "Welcome back",
	signInDesc: "Sign in to continue",
	signUpDesc: "Create an account to get started",
	signUpSuccessEmailSent: "Account created successfully. Check your email if confirmation is required.",
	sku: "SKU",
	avgCost: "Average cost",
	minStock: "Minimum stock",
	minCost: "Minimum cost",
	targetAmount: "Target amount",
	period: "Period",
	ifumbire: "Fertilizer",
	imbuto: "Seeds",
	remainingStock: "Remaining stock",
	noActiveBranches: "No active branches",
	noProducts: "No products available",
	noStock: "No stock available",
	setupRequired: "Setup required",
	targetProgress: "Target progress",
	inventoryReport: "Inventory report",
	salesReport: "Sales report",
	downloadPdf: "Download PDF",
	totalSales: "Total sales",
	totalProfit: "Total profit",
	totalPurchases: "Total purchases",
	totalExpenses: "Total expenses",
	netProfit: "Net profit",
	grossProfit: "Gross profit",
	costOfGoods: "Cost of goods sold",
	date: "Date",
	from: "From",
	to: "To",
	productsSold: "Products sold",
	quantitySold: "Quantity sold",
	bestSelling: "Best selling products",
	filter: "Filter",
	apply: "Apply",
	invalidNumber: "Enter a valid number",
	noStockForProduct: "This product has no available stock",
	addFirstBranch: "Add a branch first",
	addFirstProduct: "Add a product first",
	addFirstCustomer: "Add a customer first",
	operationFailed: "Operation failed: {error}",
	customerRequired: "A customer is required to record this sale",
	transferComplete: "Stock transfer completed successfully",
	stockAdjusted: "Stock adjusted successfully",
	stockAdjustment: "Adjust stock",
	targetSet: "Sales target saved",
	noBranchesAvailable: "No branches available",
	noProductsAvailable: "No products available",
	statusSuccess: "Completed",
	statusError: "Error",
	statusPending: "Pending",
	statusDraft: "Draft",
	rwf: "RWF",
	currency: "Currency"
};
function englishLabel(key) {
	return key.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/^./, (letter) => letter.toUpperCase());
}
/** Returns the approved English copy for route-level text. */
function localized(_kinyarwanda, english) {
	return english;
}
var t = new Proxy(rw, { get(target, property) {
	return en[property] ?? englishLabel(String(property));
} });
function money(n) {
	return `${Number(n ?? 0).toLocaleString("en-US", { maximumFractionDigits: 0 })} ${t.rwf}`;
}
function fmtDate(d) {
	if (!d) return "";
	return (typeof d === "string" && /^\d{4}-\d{2}-\d{2}$/.test(d) ? /* @__PURE__ */ new Date(`${d}T00:00:00`) : typeof d === "string" ? new Date(d) : d).toLocaleDateString("en-GB");
}
function fmtDateTime(d) {
	if (!d) return "";
	return (typeof d === "string" ? new Date(d) : d).toLocaleString("en-GB", {
		day: "2-digit",
		month: "short",
		year: "numeric",
		hour: "2-digit",
		minute: "2-digit"
	});
}
function numberFmt(n) {
	return Number(n ?? 0).toLocaleString("en-US");
}
function formatErrorMessage(err) {
	if (!err) return t.errorGeneric;
	const msg = typeof err === "object" && err !== null && "message" in err ? String(err.message) : String(err);
	const code = typeof err === "object" && err !== null && "code" in err ? String(err.code) : "";
	const lower = `${msg} ${code}`.toLowerCase();
	if (lower.includes("failed to send a request to the edge function") || lower.includes("functionsfetcherror") || lower.includes("function not found")) return localized("Serivisi yo kongeramo umukozi ntirashyirwa kuri Supabase. Banza wohereze Edge Function ya create-worker.", "The worker-invitation service is not deployed to Supabase. Deploy the create-worker Edge Function first.");
	if (lower.includes("row-level security") || lower.includes("row level security") || lower.includes("insufficient_privilege") || lower.includes("permission denied") || code === "42501") return localized("Ntabwo wemerewe gukora iki gikorwa. Cyemerewe gusa nyir'ubucuruzi.", "You do not have permission to complete this action. Only the business owner may do so.");
	if (lower.includes("unique constraint") || lower.includes("duplicate key") || code === "23505") return localized("Iri zina cyangwa iyi kode isanzwe ikoreshwa.", "This name or code is already in use.");
	if (lower.includes("foreign key") || code === "23503") return localized("Ntibishoboka kuko aya makuru ari gukoreshwa ahandi muri sisitemu.", "This cannot be completed because the record is used elsewhere in the system.");
	if (lower.includes("ububiko ntibuhagije") || lower.includes("stock")) return t.noStockEnough;
	if (lower.includes("umukiriya ni ngombwa")) return t.customerRequired;
	if (lower.includes("workers may only record activity for the current date") || lower.includes("current date")) return localized("Abakozi bemerewe gusa kwandika ibigurishwa by'uyu munsi.", "Workers may only record activity for the current date.");
	if (lower.includes("weak_password") || lower.includes("weak password") || lower.includes("easy to guess") || lower.includes("pwned")) return t.weakPassword;
	if (lower.includes("invalid login credentials") || lower.includes("invalid_credentials") || lower.includes("invalid username or password")) return t.invalidCredentials;
	if (lower.includes("already registered") || lower.includes("user_already_exists") || lower.includes("already exists")) return t.userAlreadyRegistered;
	if (lower.includes("email not confirmed") || lower.includes("email_not_confirmed")) return t.emailNotConfirmed;
	if (lower.includes("rate limit") || lower.includes("too many requests") || lower.includes("over_email_send_rate_limit")) return t.rateLimitExceeded;
	if (lower.includes("invalid email") || lower.includes("email_address_invalid")) return t.invalidEmail;
	return msg || t.errorGeneric;
}
var formatAuthError = formatErrorMessage;
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
/** Formats a date-only business value without converting it through UTC. */
function localDateInput(date = /* @__PURE__ */ new Date()) {
	const offset = date.getTimezoneOffset() * 6e4;
	return new Date(date.getTime() - offset).toISOString().slice(0, 10);
}
function localMonthInput(date = /* @__PURE__ */ new Date()) {
	return localDateInput(date).slice(0, 7);
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/button-H_blkimS.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName$9 = "/app/applet/src/components/ui/button.tsx";
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-10 px-4 py-2",
			sm: "h-9 rounded-lg px-3 text-xs",
			lg: "h-11 rounded-lg px-8",
			icon: "h-10 w-10 rounded-lg"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	}, void 0, false, {
		fileName: _jsxFileName$9,
		lineNumber: 43,
		columnNumber: 7
	}, void 0);
});
Button.displayName = "Button";
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-VEvSM2XK.js
var styles_default = "/assets/styles-CM3ABSa_.css";
var _jsxFileName$8 = "/app/applet/src/lib/auth-context.tsx";
var Ctx = (0, import_react.createContext)(null);
function AuthProvider({ children }) {
	const [user, setUser] = (0, import_react.useState)(null);
	const [session, setSession] = (0, import_react.useState)(null);
	const [role, setRole] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [unavailable, setUnavailable] = (0, import_react.useState)(false);
	const lastKnownSessionRef = (0, import_react.useRef)(null);
	const loadRole = async (uid) => {
		try {
			let record = null;
			const { data, error } = await supabase.from("user_roles").select("role, branch_id").eq("user_id", uid).limit(1);
			if (error && error.code !== "PGRST116") throw error;
			record = data?.[0] ?? null;
			if (!record) {
				try {
					const { data: healed } = await supabase.rpc("ensure_user_role");
					if (healed && typeof healed === "object" && "role" in healed) {
						const healedRole = healed.role;
						const healedBranch = healed.branch_id;
						if (healedRole) {
							setRole({
								role: healedRole,
								branch_id: healedBranch
							});
							setUnavailable(false);
							return;
						}
					}
				} catch {}
				setRole(null);
				setUnavailable(true);
				return;
			}
			setRole({
				role: record.role,
				branch_id: record.branch_id
			});
			setUnavailable(false);
		} catch {
			setRole({
				role: null,
				branch_id: null
			});
			setUnavailable(true);
		}
	};
	(0, import_react.useEffect)(() => {
		let active = true;
		const startupTimeout = window.setTimeout(() => {
			if (!active) return;
			setUnavailable(true);
			setLoading(false);
		}, 12e3);
		const applySession = (nextSession) => {
			if (!active) return;
			if (!nextSession?.user) {
				if (lastKnownSessionRef.current?.user) return;
				lastKnownSessionRef.current = null;
				setSession(null);
				setUser(null);
				setRole(null);
				setLoading(false);
				return;
			}
			lastKnownSessionRef.current = nextSession;
			setSession(nextSession);
			setUser(nextSession.user);
			setUnavailable(false);
			setLoading(true);
			loadRole(nextSession.user.id).finally(() => {
				if (active) setLoading(false);
			});
		};
		const { data: sub } = supabase.auth.onAuthStateChange((event, s) => {
			if (!active) return;
			if (event === "SIGNED_OUT") {
				lastKnownSessionRef.current = null;
				setSession(null);
				setUser(null);
				setRole(null);
				setLoading(false);
				return;
			}
			if (!s?.user) {
				lastKnownSessionRef.current = null;
				setSession(null);
				setUser(null);
				setRole(null);
				setLoading(false);
				return;
			}
			applySession(s);
		});
		supabase.auth.getSession().then(({ data }) => {
			if (!active) return;
			applySession(data.session);
		}).catch(() => {
			if (!active) return;
			setUnavailable(true);
			setSession(null);
			setUser(null);
			setRole(null);
			setLoading(false);
		}).finally(() => window.clearTimeout(startupTimeout));
		return () => {
			active = false;
			window.clearTimeout(startupTimeout);
			sub.subscription.unsubscribe();
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Ctx.Provider, {
		value: {
			user,
			session,
			role,
			loading,
			unavailable,
			refreshRole: async () => {
				if (user) await loadRole(user.id);
			},
			signOut: async () => {
				await supabase.auth.signOut();
			}
		},
		children
	}, void 0, false, {
		fileName: _jsxFileName$8,
		lineNumber: 164,
		columnNumber: 5
	}, this);
}
function useAuth() {
	const ctx = (0, import_react.useContext)(Ctx);
	if (!ctx) throw new Error("useAuth must be inside AuthProvider");
	return ctx;
}
/** Helper: true when the logged-in user is the business owner. */
function useIsOwner() {
	const { role } = useAuth();
	return role?.role === "owner";
}
/** Helper: returns the worker's branch id (null for owner). */
function useBranchId() {
	const { role } = useAuth();
	if (role?.role === "owner") return null;
	return role?.branch_id ?? null;
}
var _jsxFileName$7 = "/app/applet/src/components/ui/sonner.tsx";
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	}, void 0, false, {
		fileName: _jsxFileName$7,
		lineNumber: 7,
		columnNumber: 5
	}, void 0);
};
var _jsxFileName$6 = "/app/applet/src/routes/__root.tsx";
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}, void 0, false, {
					fileName: _jsxFileName$6,
					lineNumber: 21,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "mt-4 text-xl font-semibold",
					children: "Page not found"
				}, void 0, false, {
					fileName: _jsxFileName$6,
					lineNumber: 22,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you requested does not exist or may have moved."
				}, void 0, false, {
					fileName: _jsxFileName$6,
					lineNumber: 23,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90",
						children: "Return home"
					}, void 0, false, {
						fileName: _jsxFileName$6,
						lineNumber: 27,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$6,
					lineNumber: 26,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$6,
			lineNumber: 20,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$6,
		lineNumber: 19,
		columnNumber: 5
	}, this);
}
function ErrorComponent({ error, reset }) {
	(0, import_react.useEffect)(() => {
		console.error("[AppError]", error);
	}, [error]);
	const router = useRouter();
	const friendly = (error.message || "").toLowerCase();
	const isAuth = friendly.includes("auth") || friendly.includes("unauthorized") || friendly.includes("un authenticated");
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "text-xl font-semibold",
					children: isAuth ? "Sign-in required" : "Something went wrong"
				}, void 0, false, {
					fileName: _jsxFileName$6,
					lineNumber: 52,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: isAuth ? "Sign in to your account or contact the business owner for assistance." : t.errorGeneric
				}, void 0, false, {
					fileName: _jsxFileName$6,
					lineNumber: 55,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90",
						children: "Try again"
					}, void 0, false, {
						fileName: _jsxFileName$6,
						lineNumber: 61,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						onClick: () => window.location.href = "/auth",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent",
						children: "Sign in"
					}, void 0, false, {
						fileName: _jsxFileName$6,
						lineNumber: 70,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$6,
					lineNumber: 60,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$6,
			lineNumber: 51,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$6,
		lineNumber: 50,
		columnNumber: 5
	}, this);
}
var Route$19 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "UFBC Agrodealer | Inventory and Business Management" },
			{
				name: "description",
				content: "A professional system for managing agricultural inventory, purchases, sales, and branches."
			},
			{
				property: "og:title",
				content: "UFBC Agrodealer"
			},
			{
				property: "og:description",
				content: "Inventory and business management for agricultural retailers."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "theme-color",
				content: "#166534"
			},
			{
				name: "apple-mobile-web-app-capable",
				content: "yes"
			},
			{
				name: "apple-mobile-web-app-status-bar-style",
				content: "default"
			},
			{
				name: "apple-mobile-web-app-title",
				content: "UFBC"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "icon",
				href: "/icon-192.png",
				type: "image/png",
				sizes: "192x192"
			},
			{
				rel: "apple-touch-icon",
				href: "/apple-touch-icon.png"
			},
			{
				rel: "manifest",
				href: "/manifest.webmanifest"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeadContent, {}, void 0, false, {
			fileName: _jsxFileName$6,
			lineNumber: 127,
			columnNumber: 9
		}, this) }, void 0, false, {
			fileName: _jsxFileName$6,
			lineNumber: 126,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
			fileName: _jsxFileName$6,
			lineNumber: 131,
			columnNumber: 9
		}, this)] }, void 0, true, {
			fileName: _jsxFileName$6,
			lineNumber: 129,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$6,
		lineNumber: 125,
		columnNumber: 5
	}, this);
}
function RootComponent() {
	const { queryClient } = Route$19.useRouteContext();
	(0, import_react.useEffect)(() => {
		if (typeof window !== "undefined" && "serviceWorker" in navigator) {
			navigator.serviceWorker.getRegistrations().then((registrations) => {
				for (const registration of registrations) registration.update();
			}).catch(() => void 0);
			navigator.serviceWorker.register("/sw.js").catch(() => void 0);
		}
	}, []);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthProvider, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
			fileName: _jsxFileName$6,
			lineNumber: 154,
			columnNumber: 9
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Toaster$1, {
			position: "top-right",
			richColors: true
		}, void 0, false, {
			fileName: _jsxFileName$6,
			lineNumber: 155,
			columnNumber: 9
		}, this)] }, void 0, true, {
			fileName: _jsxFileName$6,
			lineNumber: 153,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$6,
		lineNumber: 152,
		columnNumber: 5
	}, this);
}
var $$splitComponentImporter$16 = () => import("./routes-B_1uZDwy.mjs");
var Route$18 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$16, "component") });
var $$splitComponentImporter$15 = () => import("../_authenticated-CbjC1Ht9.mjs");
var Route$17 = createFileRoute("/_authenticated")({ component: lazyRouteComponent($$splitComponentImporter$15, "component") });
var $$splitComponentImporter$14 = () => import("./auth-CjpLNNiQ.mjs");
var Route$16 = createFileRoute("/auth")({
	validateSearch: (search) => {
		const rawTab = search.tab;
		if (rawTab === "owner" || rawTab === "worker" || rawTab === "register") return { tab: rawTab };
		return {};
	},
	head: () => ({ meta: [{ title: "Portal Sign In & Register | UFBC Agrodealer" }, {
		name: "description",
		content: "Sign in to your UFBC Agrodealer business workspace or register a new business."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
var _jsxFileName$5 = "/app/applet/src/components/ui/input.tsx";
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
		type,
		className: cn("flex h-10 w-full rounded-lg border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-all file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	}, void 0, false, {
		fileName: _jsxFileName$5,
		lineNumber: 8,
		columnNumber: 7
	}, void 0);
});
Input.displayName = "Input";
var _jsxFileName$4 = "/app/applet/src/components/ui/label.tsx";
var labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
	ref,
	className: cn(labelVariants(), className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$4,
	lineNumber: 17,
	columnNumber: 3
}, void 0));
Label.displayName = Root.displayName;
var _jsxFileName$3 = "/app/applet/src/components/ui/card.tsx";
var Card = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
	ref,
	className: cn("rounded-2xl border bg-card text-card-foreground shadow-sm", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$3,
	lineNumber: 7,
	columnNumber: 5
}, void 0));
Card.displayName = "Card";
var CardHeader = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
	ref,
	className: cn("flex flex-col space-y-1.5 p-6", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$3,
	lineNumber: 18,
	columnNumber: 5
}, void 0));
CardHeader.displayName = "CardHeader";
var CardTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
	ref,
	className: cn("font-semibold leading-none tracking-tight", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$3,
	lineNumber: 25,
	columnNumber: 5
}, void 0));
CardTitle.displayName = "CardTitle";
var CardDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$3,
	lineNumber: 36,
	columnNumber: 5
}, void 0));
CardDescription.displayName = "CardDescription";
var CardContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
	ref,
	className: cn("p-6 pt-0", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$3,
	lineNumber: 43,
	columnNumber: 5
}, void 0));
CardContent.displayName = "CardContent";
var CardFooter = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
	ref,
	className: cn("flex items-center p-6 pt-0", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$3,
	lineNumber: 50,
	columnNumber: 5
}, void 0));
CardFooter.displayName = "CardFooter";
function isStrongPassword(value) {
	return value.length >= 12 && /[a-z]/.test(value) && /[A-Z]/.test(value) && /\d/.test(value) && /[^A-Za-z0-9]/.test(value);
}
var _jsxFileName$2 = "/app/applet/src/routes/register.tsx";
var Route$15 = createFileRoute("/register")({
	component: RegisterBusinessPage,
	head: () => ({ meta: [{ title: "Register Business | UFBC Agrodealer" }, {
		name: "description",
		content: "Register your agrodealer business to manage stock, sales, and branches."
	}] })
});
function RegisterBusinessPage() {
	const { user, loading: authLoading, refreshRole } = useAuth();
	const navigate = useNavigate();
	const businessNameId = (0, import_react.useId)();
	const branchNameId = (0, import_react.useId)();
	const businessAddressId = (0, import_react.useId)();
	const businessPhoneId = (0, import_react.useId)();
	const businessTinId = (0, import_react.useId)();
	const fullNameId = (0, import_react.useId)();
	const emailId = (0, import_react.useId)();
	const passwordId = (0, import_react.useId)();
	const confirmPasswordId = (0, import_react.useId)();
	const [form, setForm] = (0, import_react.useState)({
		businessName: "",
		branchName: "",
		businessAddress: "",
		businessPhone: "",
		businessTin: "",
		fullName: "",
		email: "",
		password: "",
		confirmPassword: ""
	});
	const [showPassword, setShowPassword] = (0, import_react.useState)(false);
	const [showConfirmPassword, setShowConfirmPassword] = (0, import_react.useState)(false);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [registeredEmail, setRegisteredEmail] = (0, import_react.useState)(null);
	const hasMinLength = form.password.length >= 12;
	const hasLower = /[a-z]/.test(form.password);
	const hasUpper = /[A-Z]/.test(form.password);
	const hasNumber = /\d/.test(form.password);
	const hasSpecial = /[^A-Za-z0-9]/.test(form.password);
	const passwordValid = isStrongPassword(form.password);
	const passwordsMatch = form.password.length > 0 && form.password === form.confirmPassword;
	const strengthScore = [
		hasMinLength,
		hasLower,
		hasUpper,
		hasNumber,
		hasSpecial
	].filter(Boolean).length;
	if (authLoading) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.12),_transparent_38%),linear-gradient(135deg,#f8fafc_0%,#eef8f1_100%)] px-4",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex flex-col items-center gap-5 rounded-[28px] border border-border/70 bg-white/90 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-sm",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-600 via-green-600 to-lime-500 shadow-lg shadow-emerald-500/25",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoaderCircle, { className: "relative h-7 w-7 animate-spin text-white" }, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 103,
					columnNumber: 13
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 102,
				columnNumber: 11
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "text-center",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "text-[10px] font-semibold uppercase tracking-[0.28em] text-emerald-700/90",
					children: "UFBC AGRODEALER"
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 106,
					columnNumber: 13
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "mt-2 text-lg font-semibold text-slate-900",
					children: "Checking session…"
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 107,
					columnNumber: 13
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 105,
				columnNumber: 11
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$2,
			lineNumber: 101,
			columnNumber: 9
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 100,
		columnNumber: 7
	}, this);
	if (user) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Navigate, {
		to: "/dashboard",
		replace: true
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 115,
		columnNumber: 12
	}, this);
	const updateField = (key, value) => {
		setForm((prev) => {
			const next = {
				...prev,
				[key]: value
			};
			if (key === "businessName" && (!prev.branchName || prev.branchName === `${prev.businessName} - Main Branch`)) next.branchName = value.trim() ? `${value.trim()} - Main Branch` : "";
			return next;
		});
	};
	const handleRegister = async (e) => {
		e.preventDefault();
		const cleanBusinessName = form.businessName.trim();
		const cleanAddress = form.businessAddress.trim();
		const cleanPhone = form.businessPhone.trim();
		const cleanFullName = form.fullName.trim();
		const cleanEmail = form.email.trim();
		const cleanBranch = form.branchName.trim() || `${cleanBusinessName} - Main Branch`;
		if (!cleanBusinessName || !cleanAddress || !cleanPhone || !cleanFullName || !cleanEmail) {
			toast.error(t.requiredField);
			return;
		}
		if (!passwordValid) {
			toast.error(t.weakPassword);
			return;
		}
		if (form.password !== form.confirmPassword) {
			toast.error(t.passwordsDontMatch);
			return;
		}
		setBusy(true);
		try {
			const { data, error } = await supabase.auth.signUp({
				email: cleanEmail,
				password: form.password,
				options: { data: {
					full_name: cleanFullName,
					phone: cleanPhone,
					account_type: "business_owner",
					business_name: cleanBusinessName,
					branch_name: cleanBranch,
					business_address: cleanAddress,
					business_tin: form.businessTin.trim()
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
					password: form.password
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
			setRegisteredEmail(cleanEmail);
			toast.success(t.signUpSuccessEmailSent);
		} catch (err) {
			setBusy(false);
			toast.error(err?.message || "Registration failed. Please try again.");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
		className: "relative flex min-h-screen overflow-hidden bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pointer-events-none absolute -left-28 -top-28 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" }, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 240,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pointer-events-none absolute -bottom-36 -right-24 h-[420px] w-[420px] rounded-full bg-lime-500/10 blur-3xl" }, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 241,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "relative hidden flex-1 overflow-hidden bg-sidebar p-12 text-sidebar-foreground lg:flex lg:flex-col lg:justify-between",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "absolute inset-0 opacity-40",
						style: {
							backgroundImage: "radial-gradient(circle at 20% 20%, currentColor 1px, transparent 1px)",
							backgroundSize: "28px 28px"
						}
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 245,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "relative max-w-lg",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex h-12 w-12 items-center justify-center rounded-2xl bg-sidebar-primary text-sidebar-primary-foreground shadow-md shadow-sidebar-primary/20",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sprout, { className: "h-6 w-6" }, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 256,
										columnNumber: 15
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 255,
									columnNumber: 13
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-base font-extrabold tracking-wide",
									children: "UFBC AGRODEALER"
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 259,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-xs text-sidebar-foreground/60",
									children: "Agricultural enterprise retail platform"
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 260,
									columnNumber: 15
								}, this)] }, void 0, true, {
									fileName: _jsxFileName$2,
									lineNumber: 258,
									columnNumber: 13
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 254,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "mt-16",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "inline-flex items-center gap-1.5 rounded-full bg-sidebar-accent/60 px-3 py-1 text-xs font-semibold text-sidebar-primary",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Building2, { className: "h-3.5 w-3.5" }, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 266,
											columnNumber: 15
										}, this), "NEW BUSINESS ONBOARDING"]
									}, void 0, true, {
										fileName: _jsxFileName$2,
										lineNumber: 265,
										columnNumber: 13
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
										className: "mt-4 text-4xl font-extrabold leading-tight tracking-tight text-white",
										children: "Launch and scale your agro-dealer enterprise with confidence."
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 269,
										columnNumber: 13
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "mt-4 text-sm leading-relaxed text-sidebar-foreground/75",
										children: "Equip your agricultural business with complete multi-branch control, realtime stock synchronization, worker access controls, and authoritative financial ledgers."
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 272,
										columnNumber: 13
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 264,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "mt-8 space-y-3.5",
								children: [
									{
										icon: Store,
										title: "Multi-Branch Management",
										desc: "Set up separate retail shops, track transfers, and assign managers effortlessly."
									},
									{
										icon: Boxes,
										title: "Strict Stock & Catalog Protection",
										desc: "Owner-controlled purchase receiving, catalog prices, and live inventory deduction."
									},
									{
										icon: ChartColumn,
										title: "Authoritative Profit & Loss",
										desc: "Real-time tracking of gross profit, sales targets, expenses, and PDF reports."
									},
									{
										icon: UsersRound,
										title: "Role Segregated Portals",
										desc: "Dedicated interfaces for owners and shop staff with tamper-resistant audit logs."
									}
								].map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-start gap-3.5 rounded-2xl border border-sidebar-border bg-sidebar-accent/30 p-3.5 backdrop-blur-sm",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-sidebar-primary/15 text-sidebar-primary",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(item.icon, { className: "h-5 w-5" }, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 305,
											columnNumber: 19
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 304,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
										className: "text-xs font-bold text-white",
										children: item.title
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 308,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "text-[11px] leading-relaxed text-sidebar-foreground/65",
										children: item.desc
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 309,
										columnNumber: 19
									}, this)] }, void 0, true, {
										fileName: _jsxFileName$2,
										lineNumber: 307,
										columnNumber: 17
									}, this)]
								}, item.title, true, {
									fileName: _jsxFileName$2,
									lineNumber: 300,
									columnNumber: 15
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 277,
								columnNumber: 11
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 253,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "relative border-t border-sidebar-border/60 pt-6",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-xs text-sidebar-foreground/60",
							children: "Trusted by agricultural retailers across Rwanda for regulatory and business excellence."
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 317,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 316,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 244,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "relative flex w-full items-center justify-center p-4 py-8 sm:p-8 lg:max-w-[620px] lg:p-10",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "w-full max-w-lg",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mb-6 flex items-center justify-between lg:hidden",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sprout, { className: "h-5 w-5" }, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 330,
										columnNumber: 17
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 329,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-sm font-extrabold tracking-wide",
									children: "UFBC AGRODEALER"
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 333,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-[11px] text-muted-foreground",
									children: "Agricultural business management"
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 334,
									columnNumber: 17
								}, this)] }, void 0, true, {
									fileName: _jsxFileName$2,
									lineNumber: 332,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 328,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
								to: "/auth",
								className: "text-xs font-semibold text-primary underline-offset-2 hover:underline",
								children: t.signIn
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 337,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 327,
							columnNumber: 11
						}, this),
						registeredEmail ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
							className: "overflow-hidden border border-emerald-200/80 shadow-xl shadow-emerald-950/5",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, {
								className: "border-b bg-emerald-50/60 pb-5 text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-700",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleCheck, { className: "h-8 w-8" }, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 350,
											columnNumber: 19
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 349,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, {
										className: "text-xl font-bold text-emerald-950",
										children: "Registration Complete!"
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 352,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardDescription, {
										className: "text-xs text-emerald-800/80",
										children: "Your agrodealer business account has been initialized."
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 353,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 348,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, {
								className: "space-y-5 p-6 sm:p-8",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "rounded-xl border border-muted bg-muted/30 p-4 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "font-semibold text-foreground",
										children: "Next step: verify your email"
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 359,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "mt-1 text-xs text-muted-foreground",
										children: [
											"We sent a confirmation link to ",
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "font-semibold text-foreground",
												children: registeredEmail
											}, void 0, false, {
												fileName: _jsxFileName$2,
												lineNumber: 361,
												columnNumber: 52
											}, this),
											". Please click the link to activate your account, then sign in with your password."
										]
									}, void 0, true, {
										fileName: _jsxFileName$2,
										lineNumber: 360,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$2,
									lineNumber: 358,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "space-y-3",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
										asChild: true,
										className: "h-11 w-full font-semibold",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
											to: "/auth",
											children: ["Proceed to Sign In ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, { className: "ml-2 h-4 w-4" }, void 0, false, {
												fileName: _jsxFileName$2,
												lineNumber: 368,
												columnNumber: 42
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$2,
											lineNumber: 367,
											columnNumber: 21
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 366,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
										variant: "outline",
										className: "w-full",
										onClick: () => {
											setRegisteredEmail(null);
											setForm({
												businessName: "",
												branchName: "",
												businessAddress: "",
												businessPhone: "",
												businessTin: "",
												fullName: "",
												email: "",
												password: "",
												confirmPassword: ""
											});
										},
										children: "Register Another Business"
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 371,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$2,
									lineNumber: 365,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 357,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 347,
							columnNumber: 13
						}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
							className: "overflow-hidden border shadow-xl shadow-black/5",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, {
								className: "border-b bg-muted/20 pb-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-700",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShieldCheck, { className: "h-4 w-4" }, void 0, false, {
												fileName: _jsxFileName$2,
												lineNumber: 400,
												columnNumber: 21
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Business Owner Account" }, void 0, false, {
												fileName: _jsxFileName$2,
												lineNumber: 401,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$2,
											lineNumber: 399,
											columnNumber: 19
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
											to: "/auth",
											className: "text-xs font-medium text-muted-foreground hover:text-foreground",
											children: [
												t.haveAccount,
												" ",
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
													className: "font-semibold text-primary",
													children: t.signIn
												}, void 0, false, {
													fileName: _jsxFileName$2,
													lineNumber: 407,
													columnNumber: 37
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName$2,
											lineNumber: 403,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$2,
										lineNumber: 398,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, {
										className: "mt-2 text-2xl font-extrabold tracking-tight",
										children: t.registerBusinessTitle
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 410,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardDescription, {
										className: "text-xs leading-relaxed",
										children: t.registerBusinessDesc
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 413,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 397,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, {
								className: "p-6 sm:p-7",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
									onSubmit: handleRegister,
									className: "space-y-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "space-y-4",
											children: [
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
													className: "flex items-center gap-2 border-b pb-2",
													children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Store, { className: "h-4 w-4 text-emerald-600" }, void 0, false, {
														fileName: _jsxFileName$2,
														lineNumber: 423,
														columnNumber: 23
													}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
														className: "text-xs font-bold uppercase tracking-wider text-foreground",
														children: "1. Business & Primary Shop"
													}, void 0, false, {
														fileName: _jsxFileName$2,
														lineNumber: 424,
														columnNumber: 23
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName$2,
													lineNumber: 422,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
													className: "space-y-2",
													children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
														htmlFor: businessNameId,
														className: "flex items-center gap-1.5 text-xs font-medium",
														children: [
															/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Building2, { className: "h-3.5 w-3.5 text-muted-foreground" }, void 0, false, {
																fileName: _jsxFileName$2,
																lineNumber: 431,
																columnNumber: 25
															}, this),
															t.businessName,
															" ",
															/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
																className: "text-destructive",
																children: "*"
															}, void 0, false, {
																fileName: _jsxFileName$2,
																lineNumber: 432,
																columnNumber: 42
															}, this)
														]
													}, void 0, true, {
														fileName: _jsxFileName$2,
														lineNumber: 430,
														columnNumber: 23
													}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
														id: businessNameId,
														type: "text",
														required: true,
														placeholder: t.businessNamePlaceholder,
														value: form.businessName,
														onChange: (e) => updateField("businessName", e.target.value),
														className: "h-10"
													}, void 0, false, {
														fileName: _jsxFileName$2,
														lineNumber: 434,
														columnNumber: 23
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName$2,
													lineNumber: 429,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
													className: "grid grid-cols-1 gap-3.5 sm:grid-cols-2",
													children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
														className: "space-y-2",
														children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
															htmlFor: branchNameId,
															className: "flex items-center gap-1.5 text-xs font-medium",
															children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Store, { className: "h-3.5 w-3.5 text-muted-foreground" }, void 0, false, {
																fileName: _jsxFileName$2,
																lineNumber: 448,
																columnNumber: 27
															}, this), t.branchName]
														}, void 0, true, {
															fileName: _jsxFileName$2,
															lineNumber: 447,
															columnNumber: 25
														}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
															id: branchNameId,
															type: "text",
															placeholder: t.branchNamePlaceholder,
															value: form.branchName,
															onChange: (e) => updateField("branchName", e.target.value),
															className: "h-10"
														}, void 0, false, {
															fileName: _jsxFileName$2,
															lineNumber: 451,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName$2,
														lineNumber: 446,
														columnNumber: 23
													}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
														className: "space-y-2",
														children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
															htmlFor: businessPhoneId,
															className: "flex items-center gap-1.5 text-xs font-medium",
															children: [
																/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Phone, { className: "h-3.5 w-3.5 text-muted-foreground" }, void 0, false, {
																	fileName: _jsxFileName$2,
																	lineNumber: 463,
																	columnNumber: 27
																}, this),
																t.businessPhone,
																" ",
																/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
																	className: "text-destructive",
																	children: "*"
																}, void 0, false, {
																	fileName: _jsxFileName$2,
																	lineNumber: 464,
																	columnNumber: 45
																}, this)
															]
														}, void 0, true, {
															fileName: _jsxFileName$2,
															lineNumber: 462,
															columnNumber: 25
														}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
															id: businessPhoneId,
															type: "tel",
															required: true,
															placeholder: "e.g. 0788 123 456",
															value: form.businessPhone,
															onChange: (e) => updateField("businessPhone", e.target.value),
															className: "h-10"
														}, void 0, false, {
															fileName: _jsxFileName$2,
															lineNumber: 466,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName$2,
														lineNumber: 461,
														columnNumber: 23
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName$2,
													lineNumber: 445,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
													className: "grid grid-cols-1 gap-3.5 sm:grid-cols-2",
													children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
														className: "space-y-2",
														children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
															htmlFor: businessAddressId,
															className: "flex items-center gap-1.5 text-xs font-medium",
															children: [
																/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MapPin, { className: "h-3.5 w-3.5 text-muted-foreground" }, void 0, false, {
																	fileName: _jsxFileName$2,
																	lineNumber: 481,
																	columnNumber: 27
																}, this),
																t.businessAddress,
																" ",
																/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
																	className: "text-destructive",
																	children: "*"
																}, void 0, false, {
																	fileName: _jsxFileName$2,
																	lineNumber: 482,
																	columnNumber: 47
																}, this)
															]
														}, void 0, true, {
															fileName: _jsxFileName$2,
															lineNumber: 480,
															columnNumber: 25
														}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
															id: businessAddressId,
															type: "text",
															required: true,
															placeholder: t.businessAddressPlaceholder,
															value: form.businessAddress,
															onChange: (e) => updateField("businessAddress", e.target.value),
															className: "h-10"
														}, void 0, false, {
															fileName: _jsxFileName$2,
															lineNumber: 484,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName$2,
														lineNumber: 479,
														columnNumber: 23
													}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
														className: "space-y-2",
														children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
															htmlFor: businessTinId,
															className: "flex items-center justify-between text-xs font-medium",
															children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Business TIN" }, void 0, false, {
																fileName: _jsxFileName$2,
																lineNumber: 497,
																columnNumber: 27
															}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
																className: "text-[10px] text-muted-foreground",
																children: "Optional"
															}, void 0, false, {
																fileName: _jsxFileName$2,
																lineNumber: 498,
																columnNumber: 27
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName$2,
															lineNumber: 496,
															columnNumber: 25
														}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
															id: businessTinId,
															type: "text",
															placeholder: "e.g. 100234567",
															value: form.businessTin,
															onChange: (e) => updateField("businessTin", e.target.value),
															className: "h-10"
														}, void 0, false, {
															fileName: _jsxFileName$2,
															lineNumber: 500,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName$2,
														lineNumber: 495,
														columnNumber: 23
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName$2,
													lineNumber: 478,
													columnNumber: 21
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName$2,
											lineNumber: 421,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "space-y-4 pt-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
													className: "flex items-center gap-2 border-b pb-2",
													children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShieldCheck, { className: "h-4 w-4 text-emerald-600" }, void 0, false, {
														fileName: _jsxFileName$2,
														lineNumber: 515,
														columnNumber: 23
													}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
														className: "text-xs font-bold uppercase tracking-wider text-foreground",
														children: "2. Owner Credentials & Access"
													}, void 0, false, {
														fileName: _jsxFileName$2,
														lineNumber: 516,
														columnNumber: 23
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName$2,
													lineNumber: 514,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
													className: "space-y-2",
													children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
														htmlFor: fullNameId,
														className: "flex items-center gap-1.5 text-xs font-medium",
														children: [
															t.ownerFullName,
															" ",
															/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
																className: "text-destructive",
																children: "*"
															}, void 0, false, {
																fileName: _jsxFileName$2,
																lineNumber: 523,
																columnNumber: 43
															}, this)
														]
													}, void 0, true, {
														fileName: _jsxFileName$2,
														lineNumber: 522,
														columnNumber: 23
													}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
														id: fullNameId,
														type: "text",
														autoComplete: "name",
														required: true,
														placeholder: "e.g. Jean Paul Habimana",
														value: form.fullName,
														onChange: (e) => updateField("fullName", e.target.value),
														className: "h-10"
													}, void 0, false, {
														fileName: _jsxFileName$2,
														lineNumber: 525,
														columnNumber: 23
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName$2,
													lineNumber: 521,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
													className: "space-y-2",
													children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
														htmlFor: emailId,
														className: "flex items-center gap-1.5 text-xs font-medium",
														children: [
															/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Mail, { className: "h-3.5 w-3.5 text-muted-foreground" }, void 0, false, {
																fileName: _jsxFileName$2,
																lineNumber: 539,
																columnNumber: 25
															}, this),
															t.email,
															" ",
															/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
																className: "text-destructive",
																children: "*"
															}, void 0, false, {
																fileName: _jsxFileName$2,
																lineNumber: 540,
																columnNumber: 35
															}, this)
														]
													}, void 0, true, {
														fileName: _jsxFileName$2,
														lineNumber: 538,
														columnNumber: 23
													}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
														id: emailId,
														type: "email",
														autoComplete: "email",
														required: true,
														value: form.email,
														onChange: (e) => updateField("email", e.target.value),
														className: "h-10"
													}, void 0, false, {
														fileName: _jsxFileName$2,
														lineNumber: 542,
														columnNumber: 23
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName$2,
													lineNumber: 537,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
													className: "space-y-2",
													children: [
														/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
															htmlFor: passwordId,
															className: "flex items-center gap-1.5 text-xs font-medium",
															children: [
																/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Lock, { className: "h-3.5 w-3.5 text-muted-foreground" }, void 0, false, {
																	fileName: _jsxFileName$2,
																	lineNumber: 555,
																	columnNumber: 25
																}, this),
																t.password,
																" ",
																/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
																	className: "text-destructive",
																	children: "*"
																}, void 0, false, {
																	fileName: _jsxFileName$2,
																	lineNumber: 556,
																	columnNumber: 38
																}, this)
															]
														}, void 0, true, {
															fileName: _jsxFileName$2,
															lineNumber: 554,
															columnNumber: 23
														}, this),
														/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
															className: "relative",
															children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
																id: passwordId,
																type: showPassword ? "text" : "password",
																autoComplete: "new-password",
																required: true,
																value: form.password,
																onChange: (e) => updateField("password", e.target.value),
																className: "h-10 pr-10"
															}, void 0, false, {
																fileName: _jsxFileName$2,
																lineNumber: 559,
																columnNumber: 25
															}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
																type: "button",
																"aria-label": showPassword ? "Hide password" : "Show password",
																onClick: () => setShowPassword(!showPassword),
																className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground",
																children: showPassword ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EyeOff, { className: "h-4 w-4" }, void 0, false, {
																	fileName: _jsxFileName$2,
																	lineNumber: 574,
																	columnNumber: 43
																}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Eye, { className: "h-4 w-4" }, void 0, false, {
																	fileName: _jsxFileName$2,
																	lineNumber: 574,
																	columnNumber: 76
																}, this)
															}, void 0, false, {
																fileName: _jsxFileName$2,
																lineNumber: 568,
																columnNumber: 25
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName$2,
															lineNumber: 558,
															columnNumber: 23
														}, this),
														form.password.length > 0 && /* @__PURE__ */ (void 0)("div", {
															className: "mt-2 space-y-2 rounded-lg border border-muted/80 bg-muted/20 p-2.5 text-xs",
															children: [
																/* @__PURE__ */ (void 0)("div", {
																	className: "flex items-center justify-between",
																	children: [/* @__PURE__ */ (void 0)("span", {
																		className: "text-[11px] font-medium text-muted-foreground",
																		children: "Security level"
																	}, void 0, false, {
																		fileName: _jsxFileName$2,
																		lineNumber: 582,
																		columnNumber: 29
																	}, this), /* @__PURE__ */ (void 0)("span", {
																		className: `text-[11px] font-bold ${passwordValid ? "text-emerald-600" : strengthScore >= 3 ? "text-amber-600" : "text-rose-600"}`,
																		children: passwordValid ? "Strong password" : "Needs strengthening"
																	}, void 0, false, {
																		fileName: _jsxFileName$2,
																		lineNumber: 583,
																		columnNumber: 29
																	}, this)]
																}, void 0, true, {
																	fileName: _jsxFileName$2,
																	lineNumber: 581,
																	columnNumber: 27
																}, this),
																/* @__PURE__ */ (void 0)("div", {
																	className: "grid grid-cols-5 gap-1.5",
																	children: [
																		1,
																		2,
																		3,
																		4,
																		5
																	].map((level) => /* @__PURE__ */ (void 0)("div", { className: `h-1.5 rounded-full transition-colors ${strengthScore >= level ? passwordValid ? "bg-emerald-500" : strengthScore >= 3 ? "bg-amber-500" : "bg-rose-500" : "bg-muted"}` }, level, false, {
																		fileName: _jsxFileName$2,
																		lineNumber: 599,
																		columnNumber: 31
																	}, this))
																}, void 0, false, {
																	fileName: _jsxFileName$2,
																	lineNumber: 597,
																	columnNumber: 27
																}, this),
																/* @__PURE__ */ (void 0)("div", {
																	className: "grid grid-cols-2 gap-x-2 gap-y-1 pt-1 text-[11px]",
																	children: [
																		/* @__PURE__ */ (void 0)("div", {
																			className: `flex items-center gap-1.5 ${hasMinLength ? "text-emerald-700 font-medium" : "text-muted-foreground"}`,
																			children: [hasMinLength ? /* @__PURE__ */ (void 0)(Check, { className: "h-3 w-3 text-emerald-600" }, void 0, false, {
																				fileName: _jsxFileName$2,
																				lineNumber: 617,
																				columnNumber: 47
																			}, this) : /* @__PURE__ */ (void 0)(X, { className: "h-3 w-3 text-muted-foreground/60" }, void 0, false, {
																				fileName: _jsxFileName$2,
																				lineNumber: 617,
																				columnNumber: 96
																			}, this), /* @__PURE__ */ (void 0)("span", { children: "12+ characters" }, void 0, false, {
																				fileName: _jsxFileName$2,
																				lineNumber: 618,
																				columnNumber: 31
																			}, this)]
																		}, void 0, true, {
																			fileName: _jsxFileName$2,
																			lineNumber: 616,
																			columnNumber: 29
																		}, this),
																		/* @__PURE__ */ (void 0)("div", {
																			className: `flex items-center gap-1.5 ${hasUpper ? "text-emerald-700 font-medium" : "text-muted-foreground"}`,
																			children: [hasUpper ? /* @__PURE__ */ (void 0)(Check, { className: "h-3 w-3 text-emerald-600" }, void 0, false, {
																				fileName: _jsxFileName$2,
																				lineNumber: 621,
																				columnNumber: 43
																			}, this) : /* @__PURE__ */ (void 0)(X, { className: "h-3 w-3 text-muted-foreground/60" }, void 0, false, {
																				fileName: _jsxFileName$2,
																				lineNumber: 621,
																				columnNumber: 92
																			}, this), /* @__PURE__ */ (void 0)("span", { children: "Uppercase letter" }, void 0, false, {
																				fileName: _jsxFileName$2,
																				lineNumber: 622,
																				columnNumber: 31
																			}, this)]
																		}, void 0, true, {
																			fileName: _jsxFileName$2,
																			lineNumber: 620,
																			columnNumber: 29
																		}, this),
																		/* @__PURE__ */ (void 0)("div", {
																			className: `flex items-center gap-1.5 ${hasLower ? "text-emerald-700 font-medium" : "text-muted-foreground"}`,
																			children: [hasLower ? /* @__PURE__ */ (void 0)(Check, { className: "h-3 w-3 text-emerald-600" }, void 0, false, {
																				fileName: _jsxFileName$2,
																				lineNumber: 625,
																				columnNumber: 43
																			}, this) : /* @__PURE__ */ (void 0)(X, { className: "h-3 w-3 text-muted-foreground/60" }, void 0, false, {
																				fileName: _jsxFileName$2,
																				lineNumber: 625,
																				columnNumber: 92
																			}, this), /* @__PURE__ */ (void 0)("span", { children: "Lowercase letter" }, void 0, false, {
																				fileName: _jsxFileName$2,
																				lineNumber: 626,
																				columnNumber: 31
																			}, this)]
																		}, void 0, true, {
																			fileName: _jsxFileName$2,
																			lineNumber: 624,
																			columnNumber: 29
																		}, this),
																		/* @__PURE__ */ (void 0)("div", {
																			className: `flex items-center gap-1.5 ${hasNumber && hasSpecial ? "text-emerald-700 font-medium" : "text-muted-foreground"}`,
																			children: [hasNumber && hasSpecial ? /* @__PURE__ */ (void 0)(Check, { className: "h-3 w-3 text-emerald-600" }, void 0, false, {
																				fileName: _jsxFileName$2,
																				lineNumber: 629,
																				columnNumber: 58
																			}, this) : /* @__PURE__ */ (void 0)(X, { className: "h-3 w-3 text-muted-foreground/60" }, void 0, false, {
																				fileName: _jsxFileName$2,
																				lineNumber: 629,
																				columnNumber: 107
																			}, this), /* @__PURE__ */ (void 0)("span", { children: "Number & symbol" }, void 0, false, {
																				fileName: _jsxFileName$2,
																				lineNumber: 630,
																				columnNumber: 31
																			}, this)]
																		}, void 0, true, {
																			fileName: _jsxFileName$2,
																			lineNumber: 628,
																			columnNumber: 29
																		}, this)
																	]
																}, void 0, true, {
																	fileName: _jsxFileName$2,
																	lineNumber: 615,
																	columnNumber: 27
																}, this)
															]
														}, void 0, true, {
															fileName: _jsxFileName$2,
															lineNumber: 580,
															columnNumber: 25
														}, this)
													]
												}, void 0, true, {
													fileName: _jsxFileName$2,
													lineNumber: 553,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
													className: "space-y-2",
													children: [
														/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
															htmlFor: confirmPasswordId,
															className: "flex items-center gap-1.5 text-xs font-medium",
															children: [
																/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Lock, { className: "h-3.5 w-3.5 text-muted-foreground" }, void 0, false, {
																	fileName: _jsxFileName$2,
																	lineNumber: 639,
																	columnNumber: 25
																}, this),
																t.confirmPassword,
																" ",
																/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
																	className: "text-destructive",
																	children: "*"
																}, void 0, false, {
																	fileName: _jsxFileName$2,
																	lineNumber: 640,
																	columnNumber: 45
																}, this)
															]
														}, void 0, true, {
															fileName: _jsxFileName$2,
															lineNumber: 638,
															columnNumber: 23
														}, this),
														/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
															className: "relative",
															children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
																id: confirmPasswordId,
																type: showConfirmPassword ? "text" : "password",
																autoComplete: "new-password",
																required: true,
																value: form.confirmPassword,
																onChange: (e) => updateField("confirmPassword", e.target.value),
																className: "h-10 pr-10"
															}, void 0, false, {
																fileName: _jsxFileName$2,
																lineNumber: 643,
																columnNumber: 25
															}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
																type: "button",
																"aria-label": showConfirmPassword ? "Hide password" : "Show password",
																onClick: () => setShowConfirmPassword(!showConfirmPassword),
																className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground",
																children: showConfirmPassword ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EyeOff, { className: "h-4 w-4" }, void 0, false, {
																	fileName: _jsxFileName$2,
																	lineNumber: 658,
																	columnNumber: 50
																}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Eye, { className: "h-4 w-4" }, void 0, false, {
																	fileName: _jsxFileName$2,
																	lineNumber: 658,
																	columnNumber: 83
																}, this)
															}, void 0, false, {
																fileName: _jsxFileName$2,
																lineNumber: 652,
																columnNumber: 25
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName$2,
															lineNumber: 642,
															columnNumber: 23
														}, this),
														form.confirmPassword.length > 0 && !passwordsMatch && /* @__PURE__ */ (void 0)("p", {
															className: "text-[11px] text-destructive",
															children: t.passwordsDontMatch
														}, void 0, false, {
															fileName: _jsxFileName$2,
															lineNumber: 662,
															columnNumber: 25
														}, this)
													]
												}, void 0, true, {
													fileName: _jsxFileName$2,
													lineNumber: 637,
													columnNumber: 21
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName$2,
											lineNumber: 513,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "space-y-4 pt-2",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
												type: "submit",
												disabled: busy,
												className: "h-11 w-full bg-emerald-600 font-bold text-white shadow-md shadow-emerald-600/20 hover:bg-emerald-700",
												children: busy ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }, void 0, false, {
													fileName: _jsxFileName$2,
													lineNumber: 676,
													columnNumber: 27
												}, this), "Creating Business Profile…"] }, void 0, true, {
													fileName: _jsxFileName$2,
													lineNumber: 675,
													columnNumber: 25
												}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [t.createBusinessAccount, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, { className: "ml-2 h-4 w-4" }, void 0, false, {
													fileName: _jsxFileName$2,
													lineNumber: 682,
													columnNumber: 27
												}, this)] }, void 0, true, {
													fileName: _jsxFileName$2,
													lineNumber: 680,
													columnNumber: 25
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName$2,
												lineNumber: 669,
												columnNumber: 21
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "text-center",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
													className: "text-xs text-muted-foreground",
													children: [t.alreadyRegisteredPrompt, " "]
												}, void 0, true, {
													fileName: _jsxFileName$2,
													lineNumber: 688,
													columnNumber: 23
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
													to: "/auth",
													className: "text-xs font-semibold text-emerald-700 underline underline-offset-2 hover:text-emerald-900",
													children: t.goToLogin
												}, void 0, false, {
													fileName: _jsxFileName$2,
													lineNumber: 689,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$2,
												lineNumber: 687,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$2,
											lineNumber: 668,
											columnNumber: 19
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$2,
									lineNumber: 419,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 418,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 396,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mt-5 text-center text-[11px] text-muted-foreground",
							children: [
								"© ",
								(/* @__PURE__ */ new Date()).getFullYear(),
								" UFBC Agrodealer · Enterprise Agribusiness Workspace"
							]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 702,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 325,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 324,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 238,
		columnNumber: 5
	}, this);
}
var $$splitComponentImporter$13 = () => import("./reset-password-BiTXgV6w.mjs");
var Route$14 = createFileRoute("/reset-password")({
	component: lazyRouteComponent($$splitComponentImporter$13, "component"),
	head: () => ({ meta: [{ title: "Reset Password | UFBC Agrodealer" }, {
		name: "description",
		content: "Reset the password for your UFBC Agrodealer account."
	}] })
});
var _jsxFileName$1 = "/app/applet/src/components/ui/alert-dialog.tsx";
var AlertDialog = Root2;
var AlertDialogTrigger = Trigger2;
var AlertDialogPortal = Portal2;
var AlertDialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Overlay2, {
	className: cn("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props,
	ref
}, void 0, false, {
	fileName: _jsxFileName$1,
	lineNumber: 17,
	columnNumber: 3
}, void 0));
AlertDialogOverlay.displayName = Overlay2.displayName;
var AlertDialogContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AlertDialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AlertDialogOverlay, {}, void 0, false, {
	fileName: _jsxFileName$1,
	lineNumber: 33,
	columnNumber: 5
}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Content2, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$1,
	lineNumber: 34,
	columnNumber: 5
}, void 0)] }, void 0, true, {
	fileName: _jsxFileName$1,
	lineNumber: 32,
	columnNumber: 3
}, void 0));
AlertDialogContent.displayName = Content2.displayName;
var AlertDialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
	className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$1,
	lineNumber: 47,
	columnNumber: 3
}, void 0);
AlertDialogHeader.displayName = "AlertDialogHeader";
var AlertDialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$1,
	lineNumber: 52,
	columnNumber: 3
}, void 0);
AlertDialogFooter.displayName = "AlertDialogFooter";
var AlertDialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title2, {
	ref,
	className: cn("text-lg font-semibold", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$1,
	lineNumber: 63,
	columnNumber: 3
}, void 0));
AlertDialogTitle.displayName = Title2.displayName;
var AlertDialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Description2, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$1,
	lineNumber: 75,
	columnNumber: 3
}, void 0));
AlertDialogDescription.displayName = Description2.displayName;
var AlertDialogAction = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Action, {
	ref,
	className: cn(buttonVariants(), className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$1,
	lineNumber: 87,
	columnNumber: 3
}, void 0));
AlertDialogAction.displayName = Action.displayName;
var AlertDialogCancel = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cancel, {
	ref,
	className: cn(buttonVariants({ variant: "outline" }), "mt-2 sm:mt-0", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$1,
	lineNumber: 95,
	columnNumber: 3
}, void 0));
AlertDialogCancel.displayName = Cancel.displayName;
var _jsxFileName = "/app/applet/src/routes/_authenticated.account.tsx";
var Route$13 = createFileRoute("/_authenticated/account")({ component: AccountPage });
function AccountPage() {
	const { user, role, signOut } = useAuth();
	const isOwner = useIsOwner();
	const navigate = useNavigate();
	const [password, setPassword] = (0, import_react.useState)("");
	const [confirmation, setConfirmation] = (0, import_react.useState)("");
	const [savingPassword, setSavingPassword] = (0, import_react.useState)(false);
	const [deleteBusinessConfirmText, setDeleteBusinessConfirmText] = (0, import_react.useState)("");
	const [deletingBusiness, setDeletingBusiness] = (0, import_react.useState)(false);
	const [businessDialogOpen, setBusinessDialogOpen] = (0, import_react.useState)(false);
	const [deleteAccountConfirmText, setDeleteAccountConfirmText] = (0, import_react.useState)("");
	const [deletingAccount, setDeletingAccount] = (0, import_react.useState)(false);
	const [accountDialogOpen, setAccountDialogOpen] = (0, import_react.useState)(false);
	const changePassword = async (event) => {
		event.preventDefault();
		if (!isStrongPassword(password)) return toast.error(t.weakPassword);
		if (password !== confirmation) return toast.error(t.passwordsDontMatch);
		setSavingPassword(true);
		const { error } = await supabase.auth.updateUser({ password });
		setSavingPassword(false);
		if (error) return toast.error(formatErrorMessage(error));
		setPassword("");
		setConfirmation("");
		toast.success(t.passwordUpdated);
	};
	const handleDeleteBusinessData = async () => {
		if (deleteBusinessConfirmText.trim().toUpperCase() !== "DELETE BUSINESS") {
			toast.error("Please type \"DELETE BUSINESS\" in uppercase to confirm.");
			return;
		}
		setDeletingBusiness(true);
		try {
			await supabase.from("sales").delete().neq("id", "00000000-0000-0000-0000-000000000000");
			await supabase.from("purchases").delete().neq("id", "00000000-0000-0000-0000-000000000000");
			await supabase.from("expenses").delete().neq("id", "00000000-0000-0000-0000-000000000000");
			await supabase.from("inventory_movements").delete().neq("id", "00000000-0000-0000-0000-000000000000");
			await supabase.from("inventory").delete().neq("branch_id", "00000000-0000-0000-0000-000000000000");
			await supabase.from("sales_targets").delete().neq("id", "00000000-0000-0000-0000-000000000000");
			await supabase.from("customers").delete().neq("id", "00000000-0000-0000-0000-000000000000");
			await supabase.from("audit_log").delete().neq("id", "00000000-0000-0000-0000-000000000000");
			toast.success("Business transactions and operational ledgers have been purged.");
			setBusinessDialogOpen(false);
			setDeleteBusinessConfirmText("");
			navigate({
				to: "/dashboard",
				replace: true
			});
		} catch (err) {
			toast.error(err?.message || "Failed to purge business data. Check permissions.");
		} finally {
			setDeletingBusiness(false);
		}
	};
	const handleDeleteAccount = async () => {
		if (deleteAccountConfirmText.trim().toUpperCase() !== "DELETE") {
			toast.error("Please type \"DELETE\" in uppercase to confirm.");
			return;
		}
		setDeletingAccount(true);
		try {
			if (user?.id) {
				await supabase.from("user_roles").delete().eq("user_id", user.id);
				await supabase.from("profiles").delete().eq("id", user.id);
			}
			await signOut();
			toast.success("Your account session has been closed and removed.");
			setAccountDialogOpen(false);
			navigate({
				to: "/auth",
				replace: true
			});
		} catch (err) {
			toast.error(err?.message || "Error processing account closure.");
		} finally {
			setDeletingAccount(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "mx-auto max-w-4xl space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Building2, { className: "h-4 w-4" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 133,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Security & Profile Management" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 134,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 132,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "mt-1 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl",
					children: t.accountSettings
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 136,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-1 text-sm text-muted-foreground",
					children: "Manage credentials, security preferences, and workspace administration settings."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 139,
					columnNumber: 9
				}, this)
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 131,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid grid-cols-1 gap-6 md:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
					className: "md:col-span-1",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, {
						className: "border-b bg-muted/20 pb-4",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, {
							className: "text-base font-bold",
							children: "User Identity"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 148,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardDescription, {
							className: "text-xs",
							children: "Your authenticated credentials"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 149,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 147,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, {
						className: "space-y-4 pt-4",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-lg font-bold text-emerald-800",
								children: (user?.email?.[0] ?? "U").toUpperCase()
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 153,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "truncate text-xs font-semibold text-foreground",
									children: user?.email
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 157,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "mt-1 flex items-center gap-1.5",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: `inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-bold ${isOwner ? "bg-emerald-100 text-emerald-800" : "bg-blue-100 text-blue-800"}`,
										children: isOwner ? "Business Owner" : "Worker / Staff"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 159,
										columnNumber: 19
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 158,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 156,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 152,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "space-y-2 border-t pt-3 text-xs text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Account Status" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 174,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "flex items-center gap-1 font-semibold text-emerald-600",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleCheck, { className: "h-3 w-3" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 176,
											columnNumber: 19
										}, this), " Active"]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 175,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 173,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Role Level" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 180,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "font-semibold text-foreground",
										children: role?.role?.toUpperCase() || "OWNER"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 181,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 179,
									columnNumber: 15
								}, this),
								role?.branch_id && /* @__PURE__ */ (void 0)("div", {
									className: "flex justify-between",
									children: [/* @__PURE__ */ (void 0)("span", { children: "Assigned Branch" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 185,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)("span", {
										className: "font-mono text-[11px] text-foreground",
										children: [role.branch_id.substring(0, 8), "…"]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 186,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 184,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 172,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 151,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 146,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
					className: "md:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, {
						className: "border-b bg-muted/20 pb-4",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, {
							className: "flex items-center gap-2 text-base font-bold",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(KeyRound, { className: "h-4 w-4 text-emerald-600" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 199,
								columnNumber: 15
							}, this), t.changePassword]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 198,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardDescription, {
							className: "text-xs",
							children: t.passwordHint
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 202,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 197,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, {
						className: "pt-5",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
							onSubmit: changePassword,
							className: "space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
										htmlFor: "new-password",
										className: "text-xs font-medium",
										children: [
											t.newPassword,
											" ",
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "text-destructive",
												children: "*"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 208,
												columnNumber: 35
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 207,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
										id: "new-password",
										type: "password",
										autoComplete: "new-password",
										minLength: 12,
										required: true,
										placeholder: "Min. 12 characters with uppercase, numbers, and symbols",
										value: password,
										onChange: (event) => setPassword(event.target.value),
										className: "h-10"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 210,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 206,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
										htmlFor: "confirm-password",
										className: "text-xs font-medium",
										children: [
											t.confirmPassword,
											" ",
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "text-destructive",
												children: "*"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 225,
												columnNumber: 39
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 224,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
										id: "confirm-password",
										type: "password",
										autoComplete: "new-password",
										minLength: 12,
										required: true,
										placeholder: "Re-type your new password",
										value: confirmation,
										onChange: (event) => setConfirmation(event.target.value),
										className: "h-10"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 227,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 223,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex justify-end pt-2",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
										type: "submit",
										disabled: savingPassword,
										className: "bg-emerald-600 font-semibold text-white hover:bg-emerald-700",
										children: savingPassword ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 248,
											columnNumber: 23
										}, this), "Updating Password…"] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 247,
											columnNumber: 21
										}, this) : t.changePassword
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 241,
										columnNumber: 17
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 240,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 205,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 204,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 196,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 144,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "space-y-4 pt-4",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-2 border-b border-destructive/20 pb-2",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShieldAlert, { className: "h-5 w-5 text-destructive" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 264,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
						className: "text-lg font-bold text-destructive",
						children: "Danger Zone & Administrative Deletion"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 265,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 263,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "grid grid-cols-1 gap-6 md:grid-cols-2",
					children: [isOwner && /* @__PURE__ */ (void 0)(Card, {
						className: "border-destructive/30 bg-destructive/[0.02] shadow-sm",
						children: [
							/* @__PURE__ */ (void 0)(CardHeader, {
								className: "border-b border-destructive/20 bg-destructive/5 pb-4",
								children: [/* @__PURE__ */ (void 0)("div", {
									className: "flex items-center gap-2 text-destructive",
									children: [/* @__PURE__ */ (void 0)(Building2, { className: "h-5 w-5" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 274,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)(CardTitle, {
										className: "text-base font-bold",
										children: "Delete Business Records"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 275,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 273,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)(CardDescription, {
									className: "text-xs text-muted-foreground",
									children: "Permanently erase all sales, purchases, inventory counts, ledgers, and financial logs."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 277,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 272,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)(CardContent, {
								className: "space-y-3 pt-4 text-xs text-muted-foreground",
								children: [/* @__PURE__ */ (void 0)("div", {
									className: "flex items-start gap-2 rounded-lg bg-amber-500/10 p-2.5 text-amber-900",
									children: [/* @__PURE__ */ (void 0)(TriangleAlert, { className: "mt-0.5 h-4 w-4 shrink-0 text-amber-600" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 283,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)("p", { children: [
										"This action is ",
										/* @__PURE__ */ (void 0)("strong", {
											className: "font-bold",
											children: "irreversible"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 285,
											columnNumber: 36
										}, this),
										". All recorded agricultural sales, supplier orders, inventory stock history, and customer transactions will be deleted."
									] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 284,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 282,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)("p", {
									className: "text-[11px] leading-relaxed",
									children: "Only the primary business owner can initiate this process. Products catalog and account logins remain intact so you can start a fresh business cycle."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 288,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 281,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)(CardFooter, {
								className: "border-t border-destructive/10 pt-4",
								children: /* @__PURE__ */ (void 0)(AlertDialog, {
									open: businessDialogOpen,
									onOpenChange: setBusinessDialogOpen,
									children: [/* @__PURE__ */ (void 0)(AlertDialogTrigger, {
										asChild: true,
										children: /* @__PURE__ */ (void 0)(Button, {
											variant: "destructive",
											size: "sm",
											className: "w-full font-bold",
											children: [/* @__PURE__ */ (void 0)(Trash2, { className: "mr-2 h-4 w-4" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 296,
												columnNumber: 23
											}, this), "Delete Business Ledger Data"]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 295,
											columnNumber: 21
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 294,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)(AlertDialogContent, {
										className: "max-w-md",
										children: [/* @__PURE__ */ (void 0)(AlertDialogHeader, { children: [/* @__PURE__ */ (void 0)(AlertDialogTitle, {
											className: "flex items-center gap-2 text-destructive",
											children: [/* @__PURE__ */ (void 0)(TriangleAlert, { className: "h-5 w-5" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 303,
												columnNumber: 25
											}, this), "Confirm Business Data Deletion"]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 302,
											columnNumber: 23
										}, this), /* @__PURE__ */ (void 0)(AlertDialogDescription, {
											className: "space-y-3 pt-2 text-left text-xs",
											children: [
												/* @__PURE__ */ (void 0)("p", {
													className: "text-foreground",
													children: "You are about to permanently delete all financial, sales, inventory, and expense data for this enterprise."
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 307,
													columnNumber: 25
												}, this),
												/* @__PURE__ */ (void 0)("div", {
													className: "rounded-md bg-destructive/10 p-3 text-destructive",
													children: [/* @__PURE__ */ (void 0)("p", {
														className: "font-bold",
														children: "This will permanently destroy:"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 311,
														columnNumber: 27
													}, this), /* @__PURE__ */ (void 0)("ul", {
														className: "mt-1 list-inside list-disc space-y-0.5 text-[11px]",
														children: [
															/* @__PURE__ */ (void 0)("li", { children: "All Sales receipts & customer balances" }, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 313,
																columnNumber: 29
															}, this),
															/* @__PURE__ */ (void 0)("li", { children: "All Purchase orders & supplier costs" }, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 314,
																columnNumber: 29
															}, this),
															/* @__PURE__ */ (void 0)("li", { children: "All Inventory stock quantities & transfer logs" }, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 315,
																columnNumber: 29
															}, this),
															/* @__PURE__ */ (void 0)("li", { children: "All Expense vouchers & audit records" }, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 316,
																columnNumber: 29
															}, this)
														]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 312,
														columnNumber: 27
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 310,
													columnNumber: 25
												}, this),
												/* @__PURE__ */ (void 0)("div", {
													className: "space-y-2 pt-2",
													children: [/* @__PURE__ */ (void 0)(Label, {
														htmlFor: "confirm-business-del",
														className: "text-xs font-semibold text-foreground",
														children: [
															"Type ",
															/* @__PURE__ */ (void 0)("span", {
																className: "font-mono font-bold text-destructive",
																children: "DELETE BUSINESS"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 321,
																columnNumber: 34
															}, this),
															" to confirm:"
														]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 320,
														columnNumber: 27
													}, this), /* @__PURE__ */ (void 0)(Input, {
														id: "confirm-business-del",
														value: deleteBusinessConfirmText,
														onChange: (e) => setDeleteBusinessConfirmText(e.target.value),
														placeholder: "DELETE BUSINESS",
														className: "font-mono text-xs"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 323,
														columnNumber: 27
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 319,
													columnNumber: 25
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 306,
											columnNumber: 23
										}, this)] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 301,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)(AlertDialogFooter, {
											className: "mt-3",
											children: [/* @__PURE__ */ (void 0)(AlertDialogCancel, {
												onClick: () => setDeleteBusinessConfirmText(""),
												children: "Cancel"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 334,
												columnNumber: 23
											}, this), /* @__PURE__ */ (void 0)(Button, {
												variant: "destructive",
												disabled: deleteBusinessConfirmText.trim().toUpperCase() !== "DELETE BUSINESS" || deletingBusiness,
												onClick: handleDeleteBusinessData,
												children: deletingBusiness ? /* @__PURE__ */ (void 0)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (void 0)(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 347,
													columnNumber: 29
												}, this), "Deleting Data…"] }, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 346,
													columnNumber: 27
												}, this) : "Confirm Permanent Deletion"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 337,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 333,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 300,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 293,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 292,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 271,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
						className: "border-destructive/30 bg-destructive/[0.02] shadow-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, {
								className: "border-b border-destructive/20 bg-destructive/5 pb-4",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-center gap-2 text-destructive",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UserX, { className: "h-5 w-5" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 365,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, {
										className: "text-base font-bold",
										children: isOwner ? "Delete Admin Account" : "Close User Account"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 366,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 364,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardDescription, {
									className: "text-xs text-muted-foreground",
									children: "Permanently deactivate your access credentials and revoke system access."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 370,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 363,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, {
								className: "space-y-3 pt-4 text-xs text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-start gap-2 rounded-lg bg-destructive/10 p-2.5 text-destructive",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Info, { className: "mt-0.5 h-4 w-4 shrink-0" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 376,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Your authentication credentials, role assignments, and personal profile links will be deleted. You will be immediately signed out." }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 377,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 375,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-[11px] leading-relaxed",
									children: "If you are the sole owner, make sure you have exported all necessary reports or assigned another administrator before proceeding."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 381,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 374,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardFooter, {
								className: "border-t border-destructive/10 pt-4",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AlertDialog, {
									open: accountDialogOpen,
									onOpenChange: setAccountDialogOpen,
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AlertDialogTrigger, {
										asChild: true,
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
											variant: "outline",
											size: "sm",
											className: "w-full border-destructive/40 text-destructive hover:bg-destructive hover:text-white",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UserX, { className: "mr-2 h-4 w-4" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 389,
												columnNumber: 21
											}, this), isOwner ? "Delete Admin Account" : "Close Account"]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 388,
											columnNumber: 19
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 387,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AlertDialogContent, {
										className: "max-w-md",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AlertDialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AlertDialogTitle, {
											className: "flex items-center gap-2 text-destructive",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TriangleAlert, { className: "h-5 w-5" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 396,
												columnNumber: 23
											}, this), "Confirm Account Deletion"]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 395,
											columnNumber: 21
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AlertDialogDescription, {
											className: "space-y-3 pt-2 text-left text-xs",
											children: [
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
													className: "text-foreground",
													children: [
														"Are you sure you want to delete your account (",
														/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
															className: "font-semibold",
															children: user?.email
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 401,
															columnNumber: 71
														}, this),
														")?"
													]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 400,
													columnNumber: 23
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
													className: "text-muted-foreground",
													children: "This will revoke all authorization tokens, remove your user profile, and sign you out immediately."
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 403,
													columnNumber: 23
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
													className: "space-y-2 pt-2",
													children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
														htmlFor: "confirm-account-del",
														className: "text-xs font-semibold text-foreground",
														children: [
															"Type ",
															/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
																className: "font-mono font-bold text-destructive",
																children: "DELETE"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 408,
																columnNumber: 32
															}, this),
															" to confirm:"
														]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 407,
														columnNumber: 25
													}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
														id: "confirm-account-del",
														value: deleteAccountConfirmText,
														onChange: (e) => setDeleteAccountConfirmText(e.target.value),
														placeholder: "DELETE",
														className: "font-mono text-xs"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 410,
														columnNumber: 25
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 406,
													columnNumber: 23
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 399,
											columnNumber: 21
										}, this)] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 394,
											columnNumber: 19
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AlertDialogFooter, {
											className: "mt-3",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AlertDialogCancel, {
												onClick: () => setDeleteAccountConfirmText(""),
												children: "Cancel"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 421,
												columnNumber: 21
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
												variant: "destructive",
												disabled: deleteAccountConfirmText.trim().toUpperCase() !== "DELETE" || deletingAccount,
												onClick: handleDeleteAccount,
												children: deletingAccount ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 434,
													columnNumber: 27
												}, this), "Closing Account…"] }, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 433,
													columnNumber: 25
												}, this) : "Permanently Delete Account"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 424,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 420,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 393,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 386,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 385,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 362,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 268,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 262,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 129,
		columnNumber: 5
	}, this);
}
var $$splitComponentImporter$12 = () => import("../_authenticated.audit-BfTC6H7O.mjs");
var Route$12 = createFileRoute("/_authenticated/audit")({ component: lazyRouteComponent($$splitComponentImporter$12, "component") });
var $$splitComponentImporter$11 = () => import("../_authenticated.branches-Dbb56cGe.mjs");
var Route$11 = createFileRoute("/_authenticated/branches")({ component: lazyRouteComponent($$splitComponentImporter$11, "component") });
var $$splitComponentImporter$10 = () => import("../_authenticated.customers-CKKlCNCF.mjs");
var Route$10 = createFileRoute("/_authenticated/customers")({ component: lazyRouteComponent($$splitComponentImporter$10, "component") });
var $$splitComponentImporter$9 = () => import("../_authenticated.dashboard-tzZkL8HO.mjs");
var Route$9 = createFileRoute("/_authenticated/dashboard")({ component: lazyRouteComponent($$splitComponentImporter$9, "component") });
var $$splitComponentImporter$8 = () => import("../_authenticated.expenses-CwPN8RYH.mjs");
var Route$8 = createFileRoute("/_authenticated/expenses")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
var $$splitComponentImporter$7 = () => import("../_authenticated.inventory-CZRby3IZ.mjs");
var Route$7 = createFileRoute("/_authenticated/inventory")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("../_authenticated.products-Cr_9tYnu.mjs");
var Route$6 = createFileRoute("/_authenticated/products")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("../_authenticated.purchases-BvLpMJYJ.mjs");
var Route$5 = createFileRoute("/_authenticated/purchases")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("../_authenticated.reports-gslcfyk-.mjs");
var Route$4 = createFileRoute("/_authenticated/reports")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("../_authenticated.sales-Dzf81rqp.mjs");
var Route$3 = createFileRoute("/_authenticated/sales")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("../_authenticated.targets-CgW5Rm8a.mjs");
var Route$2 = createFileRoute("/_authenticated/targets")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("../_authenticated.transfers-B2F0zaLd.mjs");
var Route$1 = createFileRoute("/_authenticated/transfers")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("../_authenticated.users-xRaHG_Va.mjs");
var Route = createFileRoute("/_authenticated/users")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var IndexRoute = Route$18.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$19
});
var AuthenticatedRoute = Route$17.update({
	id: "/_authenticated",
	getParentRoute: () => Route$19
});
var AuthRoute = Route$16.update({
	id: "/auth",
	path: "/auth",
	getParentRoute: () => Route$19
});
var RegisterRoute = Route$15.update({
	id: "/register",
	path: "/register",
	getParentRoute: () => Route$19
});
var ResetPasswordRoute = Route$14.update({
	id: "/reset-password",
	path: "/reset-password",
	getParentRoute: () => Route$19
});
var AuthenticatedRouteChildren = {
	AuthenticatedAccountRoute: Route$13.update({
		id: "/account",
		path: "/account",
		getParentRoute: () => AuthenticatedRoute
	}),
	AuthenticatedAuditRoute: Route$12.update({
		id: "/audit",
		path: "/audit",
		getParentRoute: () => AuthenticatedRoute
	}),
	AuthenticatedBranchesRoute: Route$11.update({
		id: "/branches",
		path: "/branches",
		getParentRoute: () => AuthenticatedRoute
	}),
	AuthenticatedCustomersRoute: Route$10.update({
		id: "/customers",
		path: "/customers",
		getParentRoute: () => AuthenticatedRoute
	}),
	AuthenticatedDashboardRoute: Route$9.update({
		id: "/dashboard",
		path: "/dashboard",
		getParentRoute: () => AuthenticatedRoute
	}),
	AuthenticatedExpensesRoute: Route$8.update({
		id: "/expenses",
		path: "/expenses",
		getParentRoute: () => AuthenticatedRoute
	}),
	AuthenticatedInventoryRoute: Route$7.update({
		id: "/inventory",
		path: "/inventory",
		getParentRoute: () => AuthenticatedRoute
	}),
	AuthenticatedProductsRoute: Route$6.update({
		id: "/products",
		path: "/products",
		getParentRoute: () => AuthenticatedRoute
	}),
	AuthenticatedPurchasesRoute: Route$5.update({
		id: "/purchases",
		path: "/purchases",
		getParentRoute: () => AuthenticatedRoute
	}),
	AuthenticatedReportsRoute: Route$4.update({
		id: "/reports",
		path: "/reports",
		getParentRoute: () => AuthenticatedRoute
	}),
	AuthenticatedSalesRoute: Route$3.update({
		id: "/sales",
		path: "/sales",
		getParentRoute: () => AuthenticatedRoute
	}),
	AuthenticatedTargetsRoute: Route$2.update({
		id: "/targets",
		path: "/targets",
		getParentRoute: () => AuthenticatedRoute
	}),
	AuthenticatedTransfersRoute: Route$1.update({
		id: "/transfers",
		path: "/transfers",
		getParentRoute: () => AuthenticatedRoute
	}),
	AuthenticatedUsersRoute: Route.update({
		id: "/users",
		path: "/users",
		getParentRoute: () => AuthenticatedRoute
	})
};
var rootRouteChildren = {
	IndexRoute,
	AuthenticatedRoute: AuthenticatedRoute._addFileChildren(AuthenticatedRouteChildren),
	AuthRoute,
	RegisterRoute,
	ResetPasswordRoute
};
var routeTree = Route$19._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter = () => {
	const queryClient = new QueryClient({ defaultOptions: { queries: {
		retry: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false
	} } });
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 3e4
	});
};
//#endregion
export { localized as A, cn as C, formatErrorMessage as D, formatAuthError as E, numberFmt as M, t as N, localDateInput as O, Button as S, fmtDateTime as T, Input as _, AlertDialogContent as a, useBranchId as b, AlertDialogHeader as c, Card as d, CardContent as f, Label as g, CardTitle as h, AlertDialogCancel as i, money as j, localMonthInput as k, AlertDialogTitle as l, CardHeader as m, AlertDialog as n, AlertDialogDescription as o, CardDescription as p, AlertDialogAction as r, AlertDialogFooter as s, router_exports as t, isStrongPassword as u, Route$16 as v, fmtDate as w, useIsOwner as x, useAuth as y };
