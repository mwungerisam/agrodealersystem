import { createFileRoute, useNavigate, Navigate, Link } from "@tanstack/react-router";
import { useState, useEffect, useId } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/lib/auth-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import {
  Loader2,
  Sprout,
  Eye,
  EyeOff,
  ShieldCheck,
  UserRound,
  BarChart3,
  Boxes,
  Store,
  Building2,
  CheckCircle2,
  ArrowRight,
  Lock,
  Mail,
  Phone,
  MapPin,
  Sparkles,
} from "lucide-react";
import { t, formatAuthError } from "@/lib/i18n";
import { isStrongPassword } from "@/lib/password-policy";

interface AuthSearch {
  tab?: "owner" | "worker" | "register";
}

export const Route = createFileRoute("/auth")({
  validateSearch: (search: Record<string, unknown>): AuthSearch => {
    const rawTab = search.tab;
    if (rawTab === "owner" || rawTab === "worker" || rawTab === "register") {
      return { tab: rawTab };
    }
    return {};
  },
  head: () => ({
    meta: [
      { title: "Portal Sign In & Register | UFBC Agrodealer" },
      { name: "description", content: "Sign in to your UFBC Agrodealer business workspace or register a new business." },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const search = Route.useSearch();
  const { user, loading: authLoading, unavailable, role, refreshRole } = useAuth();
  const navigate = useNavigate();

  const [tab, setTab] = useState<"owner" | "worker" | "register">(search.tab || "owner");
  const [mode, setMode] = useState<"auth" | "forgot">("auth");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [busy, setBusy] = useState(false);

  // Registration state
  const [regForm, setRegForm] = useState({
    businessName: "",
    branchName: "",
    businessAddress: "",
    businessPhone: "",
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showRegPassword, setShowRegPassword] = useState(false);
  const [showRegConfirmPassword, setShowRegConfirmPassword] = useState(false);
  const [regSuccessEmail, setRegSuccessEmail] = useState<string | null>(null);

  const regBusinessNameId = useId();
  const regBranchNameId = useId();
  const regBusinessPhoneId = useId();
  const regBusinessAddressId = useId();
  const regFullNameId = useId();
  const regEmailId = useId();
  const regPasswordId = useId();
  const regConfirmPasswordId = useId();

  // Password rules for registration
  const hasMinLength = regForm.password.length >= 12;
  const hasLower = /[a-z]/.test(regForm.password);
  const hasUpper = /[A-Z]/.test(regForm.password);
  const hasNumber = /\d/.test(regForm.password);
  const hasSpecial = /[^A-Za-z0-9]/.test(regForm.password);
  const regPasswordValid = isStrongPassword(regForm.password);
  const regPasswordsMatch = regForm.password.length > 0 && regForm.password === regForm.confirmPassword;
  const strengthScore = [hasMinLength, hasLower, hasUpper, hasNumber, hasSpecial].filter(Boolean).length;

  const resolveUserRole = async (userId: string) => {
    const { data } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", userId)
      .limit(1);

    const firstRole = data?.[0]?.role ?? null;
    if (firstRole) return firstRole as "owner" | "worker" | string;

    try {
      const { data: healed } = await supabase.rpc("ensure_user_role");
      if (healed && typeof healed === "object" && "role" in (healed as any)) {
        return (healed as any).role as string;
      }
    } catch {
      // ignore error
    }

    return null;
  };

  useEffect(() => {
    if (search.tab) {
      setTab(search.tab);
    }
  }, [search.tab]);

  useEffect(() => {
    if (!user || authLoading || !role?.role) return;

    const portalMatchesRole =
      (role.role === "owner" && (tab === "owner" || tab === "register")) ||
      (role.role !== "owner" && tab === "worker");

    if (portalMatchesRole) {
      navigate({ to: "/dashboard", replace: true });
    }
  }, [user, authLoading, role, tab, navigate]);

  if (authLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.12),_transparent_38%),linear-gradient(135deg,#f8fafc_0%,#eef8f1_100%)] px-4">
        <div className="flex flex-col items-center gap-5 rounded-[28px] border border-border/70 bg-white/90 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-sm">
          <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-600 via-green-600 to-lime-500 shadow-lg shadow-emerald-500/25">
            <div className="absolute inset-1 rounded-xl border border-white/30" />
            <Loader2 className="relative h-7 w-7 animate-spin text-white" />
          </div>
          <div className="text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-emerald-700/90">UFBC AGRODEALER</p>
            <h2 className="mt-2 text-lg font-semibold text-slate-900">Preparing your workspace</h2>
            <p className="mt-1 text-sm text-slate-500">Checking your secure session…</p>
          </div>
        </div>
      </div>
    );
  }

  if (user) return <Navigate to="/dashboard" replace />;

  const signIn = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanEmail = email.trim();
    if (!cleanEmail || !password) return toast.error(t.requiredField);

    setBusy(true);
    const { data, error } = await supabase.auth.signInWithPassword({ email: cleanEmail, password });
    setBusy(false);

    if (error) {
      const errMsg = error.message?.toLowerCase() || "";
      if (errMsg.includes("invalid login credentials") || errMsg.includes("invalid_credentials")) {
        toast.error(
          "Invalid email or password. If you recently registered, please verify your email or check spam, or use Forgot Password.",
          { duration: 6000 }
        );
      } else {
        toast.error(formatAuthError(error));
      }
      return;
    }

    if (data?.session && data.user) {
      const userRole = await resolveUserRole(data.user.id);
      const expectsOwner = tab === "owner";

      if (!userRole) {
        toast.error("Your account is still being configured. Please contact the business owner.");
        return;
      }

      if ((expectsOwner && userRole !== "owner") || (!expectsOwner && userRole === "owner")) {
        toast.error(t.wrongPortal);
        return;
      }

      toast.success(t.welcome);
      navigate({ to: "/dashboard", replace: true });
    }
  };

  const handleBusinessRegister = async (e: React.FormEvent) => {
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
        options: {
          data: {
            full_name: cleanFullName,
            phone: cleanPhone,
            account_type: "business_owner",
            business_name: cleanBusinessName,
            branch_name: cleanBranch,
            business_address: cleanAddress,
          },
        },
      });

      if (error) {
        setBusy(false);
        toast.error(formatAuthError(error));
        return;
      }

      // If user session is returned immediately:
      if (data?.session && data.user) {
        try {
          await (supabase.rpc as any)("register_business_setup", {
            p_business_name: cleanBusinessName,
            p_branch_name: cleanBranch,
            p_phone: cleanPhone,
            p_address: cleanAddress,
          });
        } catch {
          // Trigger fallback already executed
        }

        await refreshRole();
        toast.success(t.businessRegistrationSuccess);
        navigate({ to: "/dashboard", replace: true });
        return;
      }

      // Attempt fallback immediate sign-in
      try {
        const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
          email: cleanEmail,
          password: regForm.password,
        });

        if (signInData?.session && !signInError) {
          try {
            await (supabase.rpc as any)("register_business_setup", {
              p_business_name: cleanBusinessName,
              p_branch_name: cleanBranch,
              p_phone: cleanPhone,
              p_address: cleanAddress,
            });
          } catch {
            // ignore
          }

          await refreshRole();
          toast.success(t.businessRegistrationSuccess);
          navigate({ to: "/dashboard", replace: true });
          return;
        }
      } catch {
        // proceed
      }

      setBusy(false);
      setRegSuccessEmail(cleanEmail);
      toast.success(t.signUpSuccessEmailSent);
    } catch (err: any) {
      setBusy(false);
      toast.error(err?.message || "Registration failed. Please try again.");
    }
  };

  const sendReset = async (e: React.FormEvent) => {
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

  return (
    <main className="relative flex min-h-screen overflow-hidden bg-background">
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-emerald-100/60 blur-3xl" />

      {/* Left Branding Showcase */}
      <section className="relative hidden flex-1 overflow-hidden bg-sidebar p-10 text-sidebar-foreground lg:flex lg:flex-col lg:justify-between">
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, currentColor 1px, transparent 1px)", backgroundSize: "26px 26px" }} />
        <div className="relative max-w-lg">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sidebar-primary text-sidebar-primary-foreground"><Sprout className="h-6 w-6" /></div>
            <div><p className="font-extrabold tracking-wide">UFBC AGRODEALER</p><p className="text-xs text-sidebar-foreground/55">Agricultural business management</p></div>
          </div>
          <div className="mt-20">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-sidebar-accent/60 px-3 py-1 text-xs font-semibold text-sidebar-primary">
              <Building2 className="h-3.5 w-3.5" />
              AGRO-ENTERPRISE PLATFORM
            </span>
            <h1 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight text-white">Everything your agro-dealer needs, in one place.</h1>
            <p className="mt-4 max-w-md text-sm leading-6 text-sidebar-foreground/75">Manage inventory, purchases, sales, branches, customers and multi-branch operations with complete financial accuracy.</p>
          </div>
        </div>
        <div className="relative grid max-w-xl grid-cols-3 gap-3">
          {[{ icon: Boxes, label: "Inventory & Stock" }, { icon: BarChart3, label: "Reports & P&L" }, { icon: Store, label: "Branches & Staff" }].map((item) => (
            <div key={item.label} className="rounded-2xl border border-sidebar-border bg-sidebar-accent/40 p-4 backdrop-blur-sm">
              <item.icon className="h-5 w-5 text-sidebar-primary" />
              <p className="mt-3 text-xs font-semibold text-white">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Right Form Container */}
      <section className="relative flex w-full items-center justify-center p-4 sm:p-8 lg:max-w-[620px] lg:p-10">
        <div className="w-full max-w-lg">
          {/* Mobile Top Brand Bar */}
          <div className="mb-6 flex items-center justify-between lg:hidden">
            <div className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground"><Sprout className="h-5 w-5" /></div>
              <div><p className="text-sm font-extrabold tracking-wide">UFBC AGRODEALER</p><p className="text-[11px] text-muted-foreground">Agricultural business management</p></div>
            </div>
            {tab === "register" ? (
              <button
                type="button"
                onClick={() => setTab("owner")}
                className="text-xs font-bold text-primary hover:underline"
              >
                {t.signIn}
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setTab("register")}
                className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:underline"
              >
                <Sparkles className="h-3.5 w-3.5" />
                {t.registerBusiness}
              </button>
            )}
          </div>

          {unavailable && (
            <div className="mb-4 rounded-xl border border-amber-300 bg-amber-50 p-3 text-sm text-amber-950" role="alert">
              The service is currently unavailable. Check your internet connection and try again.
            </div>
          )}

          <Card className="overflow-hidden border shadow-xl shadow-black/5">
            {mode === "forgot" ? (
              <>
                <CardHeader className="border-b bg-muted/20 pb-5">
                  <CardTitle className="text-xl">{t.forgotPassword}</CardTitle>
                  <CardDescription>{t.resetLinkDescription}</CardDescription>
                </CardHeader>
                <CardContent className="p-6 sm:p-7">
                  <form onSubmit={sendReset} className="space-y-5">
                    <div className="space-y-2">
                      <Label htmlFor="fp-email">{t.email}</Label>
                      <Input id="fp-email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <Button type="submit" className="h-10 w-full" disabled={busy}>
                      {busy && <Loader2 className="h-4 w-4 animate-spin" />}
                      {t.sendResetLink}
                    </Button>
                    <Button type="button" variant="ghost" className="w-full" onClick={() => setMode("auth")}>
                      {t.backToAuth}
                    </Button>
                  </form>
                </CardContent>
              </>
            ) : (
              <>
                <CardHeader className="border-b bg-muted/20 pb-5">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl font-extrabold tracking-tight">
                      {tab === "register" ? t.registerBusinessTitle : "Welcome back"}
                    </CardTitle>
                    {tab !== "register" ? (
                      <button
                        type="button"
                        onClick={() => setTab("register")}
                        className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-bold text-emerald-800 transition hover:bg-emerald-200"
                      >
                        <Building2 className="h-3.5 w-3.5" />
                        {t.registerBusiness} →
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setTab("owner")}
                        className="text-xs font-semibold text-muted-foreground hover:text-foreground"
                      >
                        {t.haveAccount} <span className="font-bold text-primary">{t.signIn}</span>
                      </button>
                    )}
                  </div>
                  <CardDescription className="text-xs">
                    {tab === "register"
                      ? t.registerBusinessDesc
                      : tab === "owner"
                      ? t.ownerLoginDesc
                      : t.workerLoginDesc}
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-6 sm:p-7">
                  <Tabs value={tab} onValueChange={(v) => setTab(v as "owner" | "worker" | "register")}>
                    {/* 3 Main Tabs: Owner, Worker, Register Business */}
                    <TabsList className="grid h-12 w-full grid-cols-3 rounded-xl bg-muted/80 p-1">
                      <TabsTrigger
                        value="owner"
                        className="rounded-lg gap-1.5 text-xs font-semibold transition-all data-[state=active]:bg-white data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                      >
                        <ShieldCheck className="h-4 w-4 text-emerald-600" />
                        <span>{t.owner}</span>
                      </TabsTrigger>
                      <TabsTrigger
                        value="worker"
                        className="rounded-lg gap-1.5 text-xs font-semibold transition-all data-[state=active]:bg-white data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                      >
                        <UserRound className="h-4 w-4 text-blue-600" />
                        <span>{t.worker}</span>
                      </TabsTrigger>
                      <TabsTrigger
                        value="register"
                        className="rounded-lg gap-1.5 text-xs font-bold transition-all data-[state=active]:bg-emerald-600 data-[state=active]:text-white data-[state=active]:shadow-sm"
                      >
                        <Building2 className="h-4 w-4" />
                        <span>Register</span>
                      </TabsTrigger>
                    </TabsList>

                    {/* Owner Login */}
                    <TabsContent value="owner">
                      <form onSubmit={signIn} className="space-y-4 pt-4">
                        <div className="space-y-2">
                          <Label htmlFor="owner-email" className="flex items-center gap-1.5 text-xs font-medium">
                            <Mail className="h-3.5 w-3.5 text-muted-foreground" />
                            {t.email}
                          </Label>
                          <Input
                            id="owner-email"
                            type="email"
                            autoComplete="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="h-10"
                          />
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <Label htmlFor="owner-pw" className="flex items-center gap-1.5 text-xs font-medium">
                              <Lock className="h-3.5 w-3.5 text-muted-foreground" />
                              {t.password}
                            </Label>
                            <button
                              type="button"
                              onClick={() => setMode("forgot")}
                              className="text-xs font-semibold text-emerald-700 hover:underline"
                            >
                              {t.forgotPassword}
                            </button>
                          </div>
                          <div className="relative">
                            <Input
                              id="owner-pw"
                              type={showPassword ? "text" : "password"}
                              autoComplete="current-password"
                              required
                              minLength={6}
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              className="h-10 pr-10"
                            />
                            <button
                              type="button"
                              aria-label={showPassword ? "Hide password" : "Show password"}
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                            >
                              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            </button>
                          </div>
                        </div>

                        <Button type="submit" className="h-11 w-full bg-emerald-700 font-bold text-white hover:bg-emerald-800" disabled={busy}>
                          {busy && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                          {t.signIn}
                        </Button>

                        {/* Direct Register Callout inside Form */}
                        <div className="pt-2 text-center text-xs text-muted-foreground">
                          {t.newBusinessPrompt}{" "}
                          <button
                            type="button"
                            onClick={() => setTab("register")}
                            className="font-bold text-emerald-700 underline underline-offset-2 hover:text-emerald-900"
                          >
                            {t.registerBusiness}
                          </button>
                          {" · "}
                          <Link
                            to="/register"
                            className="font-bold text-emerald-700 underline underline-offset-2 hover:text-emerald-900"
                          >
                            Full Page →
                          </Link>
                        </div>
                      </form>
                    </TabsContent>

                    {/* Worker Login */}
                    <TabsContent value="worker">
                      <form onSubmit={signIn} className="space-y-4 pt-4">
                        <div className="space-y-2">
                          <Label htmlFor="worker-email" className="flex items-center gap-1.5 text-xs font-medium">
                            <Mail className="h-3.5 w-3.5 text-muted-foreground" />
                            {t.email}
                          </Label>
                          <Input
                            id="worker-email"
                            type="email"
                            autoComplete="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="h-10"
                          />
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <Label htmlFor="worker-pw" className="flex items-center gap-1.5 text-xs font-medium">
                              <Lock className="h-3.5 w-3.5 text-muted-foreground" />
                              {t.password}
                            </Label>
                            <button
                              type="button"
                              onClick={() => setMode("forgot")}
                              className="text-xs font-semibold text-primary hover:underline"
                            >
                              {t.forgotPassword}
                            </button>
                          </div>
                          <div className="relative">
                            <Input
                              id="worker-pw"
                              type={showPassword ? "text" : "password"}
                              autoComplete="current-password"
                              required
                              minLength={6}
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              className="h-10 pr-10"
                            />
                            <button
                              type="button"
                              aria-label={showPassword ? "Hide password" : "Show password"}
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                            >
                              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            </button>
                          </div>
                        </div>

                        <Button type="submit" className="h-11 w-full bg-blue-700 font-bold text-white hover:bg-blue-800" disabled={busy}>
                          {busy && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                          {t.workerLogin}
                        </Button>

                        <div className="pt-2 text-center text-xs text-muted-foreground">
                          {t.newBusinessPrompt}{" "}
                          <button
                            type="button"
                            onClick={() => setTab("register")}
                            className="font-bold text-emerald-700 underline underline-offset-2 hover:text-emerald-900"
                          >
                            {t.registerBusiness}
                          </button>
                        </div>
                      </form>
                    </TabsContent>

                    {/* Register Business Tab */}
                    <TabsContent value="register">
                      {regSuccessEmail ? (
                        <div className="space-y-4 pt-4 text-center">
                          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                            <CheckCircle2 className="h-6 w-6" />
                          </div>
                          <h3 className="text-base font-bold text-foreground">Registration Successful</h3>
                          <p className="text-xs text-muted-foreground">
                            Confirmation link sent to <span className="font-semibold text-foreground">{regSuccessEmail}</span>. Verify your email, then sign in as Owner.
                          </p>
                          <Button
                            type="button"
                            onClick={() => {
                              setRegSuccessEmail(null);
                              setTab("owner");
                            }}
                            className="w-full"
                          >
                            Proceed to Sign In
                          </Button>
                        </div>
                      ) : (
                        <form onSubmit={handleBusinessRegister} className="space-y-4 pt-4">
                          <div className="rounded-lg border border-emerald-200/70 bg-emerald-50/50 p-2.5 text-[11px] text-emerald-900">
                            Register your enterprise here to automatically provision your primary shop branch and owner permissions.
                          </div>

                          <div className="space-y-3">
                            <div className="space-y-1.5">
                              <Label htmlFor={regBusinessNameId} className="flex items-center gap-1.5 text-xs font-medium">
                                <Building2 className="h-3.5 w-3.5 text-muted-foreground" />
                                {t.businessName} <span className="text-destructive">*</span>
                              </Label>
                              <Input
                                id={regBusinessNameId}
                                required
                                placeholder={t.businessNamePlaceholder}
                                value={regForm.businessName}
                                onChange={(e) => {
                                  const val = e.target.value;
                                  setRegForm((prev) => ({
                                    ...prev,
                                    businessName: val,
                                    branchName: prev.branchName || (val ? `${val} - Main Branch` : ""),
                                  }));
                                }}
                                className="h-9 text-xs"
                              />
                            </div>

                            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                              <div className="space-y-1.5">
                                <Label htmlFor={regBranchNameId} className="flex items-center gap-1.5 text-xs font-medium">
                                  <Store className="h-3.5 w-3.5 text-muted-foreground" />
                                  {t.branchName}
                                </Label>
                                <Input
                                  id={regBranchNameId}
                                  placeholder={t.branchNamePlaceholder}
                                  value={regForm.branchName}
                                  onChange={(e) => setRegForm((prev) => ({ ...prev, branchName: e.target.value }))}
                                  className="h-9 text-xs"
                                />
                              </div>

                              <div className="space-y-1.5">
                                <Label htmlFor={regBusinessPhoneId} className="flex items-center gap-1.5 text-xs font-medium">
                                  <Phone className="h-3.5 w-3.5 text-muted-foreground" />
                                  {t.businessPhone} <span className="text-destructive">*</span>
                                </Label>
                                <Input
                                  id={regBusinessPhoneId}
                                  type="tel"
                                  required
                                  placeholder="0788 123 456"
                                  value={regForm.businessPhone}
                                  onChange={(e) => setRegForm((prev) => ({ ...prev, businessPhone: e.target.value }))}
                                  className="h-9 text-xs"
                                />
                              </div>
                            </div>

                            <div className="space-y-1.5">
                              <Label htmlFor={regBusinessAddressId} className="flex items-center gap-1.5 text-xs font-medium">
                                <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
                                {t.businessAddress} <span className="text-destructive">*</span>
                              </Label>
                              <Input
                                id={regBusinessAddressId}
                                required
                                placeholder={t.businessAddressPlaceholder}
                                value={regForm.businessAddress}
                                onChange={(e) => setRegForm((prev) => ({ ...prev, businessAddress: e.target.value }))}
                                className="h-9 text-xs"
                              />
                            </div>

                            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                              <div className="space-y-1.5">
                                <Label htmlFor={regFullNameId} className="flex items-center gap-1.5 text-xs font-medium">
                                  {t.ownerFullName} <span className="text-destructive">*</span>
                                </Label>
                                <Input
                                  id={regFullNameId}
                                  required
                                  placeholder="Full Name"
                                  value={regForm.fullName}
                                  onChange={(e) => setRegForm((prev) => ({ ...prev, fullName: e.target.value }))}
                                  className="h-9 text-xs"
                                />
                              </div>

                              <div className="space-y-1.5">
                                <Label htmlFor={regEmailId} className="flex items-center gap-1.5 text-xs font-medium">
                                  <Mail className="h-3.5 w-3.5 text-muted-foreground" />
                                  {t.email} <span className="text-destructive">*</span>
                                </Label>
                                <Input
                                  id={regEmailId}
                                  type="email"
                                  required
                                  value={regForm.email}
                                  onChange={(e) => setRegForm((prev) => ({ ...prev, email: e.target.value }))}
                                  className="h-9 text-xs"
                                />
                              </div>
                            </div>

                            {/* Passwords */}
                            <div className="space-y-1.5">
                              <Label htmlFor={regPasswordId} className="flex items-center gap-1.5 text-xs font-medium">
                                <Lock className="h-3.5 w-3.5 text-muted-foreground" />
                                {t.password} (min. 12 chars) <span className="text-destructive">*</span>
                              </Label>
                              <div className="relative">
                                <Input
                                  id={regPasswordId}
                                  type={showRegPassword ? "text" : "password"}
                                  required
                                  value={regForm.password}
                                  onChange={(e) => setRegForm((prev) => ({ ...prev, password: e.target.value }))}
                                  className="h-9 pr-9 text-xs"
                                />
                                <button
                                  type="button"
                                  aria-label={showRegPassword ? "Hide password" : "Show password"}
                                  onClick={() => setShowRegPassword(!showRegPassword)}
                                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                                >
                                  {showRegPassword ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
                                </button>
                              </div>

                              {regForm.password.length > 0 && (
                                <div className="space-y-1 pt-1 text-[11px]">
                                  <div className="grid grid-cols-5 gap-1">
                                    {[1, 2, 3, 4, 5].map((lvl) => (
                                      <div
                                        key={lvl}
                                        className={`h-1 rounded-full ${
                                          strengthScore >= lvl
                                            ? regPasswordValid
                                              ? "bg-emerald-500"
                                              : strengthScore >= 3
                                              ? "bg-amber-500"
                                              : "bg-rose-500"
                                            : "bg-muted"
                                        }`}
                                      />
                                    ))}
                                  </div>
                                  <div className="flex flex-wrap items-center gap-2 pt-0.5 text-[10px] text-muted-foreground">
                                    <span className={hasMinLength ? "text-emerald-700 font-semibold" : ""}>
                                      {hasMinLength ? "✓ 12+ chars" : "• 12+ chars"}
                                    </span>
                                    <span className={hasUpper && hasLower ? "text-emerald-700 font-semibold" : ""}>
                                      {hasUpper && hasLower ? "✓ Upper & lower" : "• Upper & lower"}
                                    </span>
                                    <span className={hasNumber && hasSpecial ? "text-emerald-700 font-semibold" : ""}>
                                      {hasNumber && hasSpecial ? "✓ Number & symbol" : "• Number & symbol"}
                                    </span>
                                  </div>
                                </div>
                              )}
                            </div>

                            <div className="space-y-1.5">
                              <Label htmlFor={regConfirmPasswordId} className="flex items-center gap-1.5 text-xs font-medium">
                                <Lock className="h-3.5 w-3.5 text-muted-foreground" />
                                {t.confirmPassword} <span className="text-destructive">*</span>
                              </Label>
                              <div className="relative">
                                <Input
                                  id={regConfirmPasswordId}
                                  type={showRegConfirmPassword ? "text" : "password"}
                                  required
                                  value={regForm.confirmPassword}
                                  onChange={(e) => setRegForm((prev) => ({ ...prev, confirmPassword: e.target.value }))}
                                  className="h-9 pr-9 text-xs"
                                />
                                <button
                                  type="button"
                                  aria-label={showRegConfirmPassword ? "Hide password" : "Show password"}
                                  onClick={() => setShowRegConfirmPassword(!showRegConfirmPassword)}
                                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                                >
                                  {showRegConfirmPassword ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
                                </button>
                              </div>
                              {regForm.confirmPassword.length > 0 && !regPasswordsMatch && (
                                <p className="text-[10px] text-destructive">{t.passwordsDontMatch}</p>
                              )}
                            </div>
                          </div>

                          <Button
                            type="submit"
                            disabled={busy}
                            className="h-10 w-full bg-emerald-600 font-bold text-white shadow hover:bg-emerald-700"
                          >
                            {busy ? (
                              <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Creating Account…
                              </>
                            ) : (
                              <>
                                Register Agrodealer Business
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </>
                            )}
                          </Button>
                        </form>
                      )}
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </>
            )}
          </Card>

          {/* Persistent Prominent Helper Banner Below Card */}
          {tab !== "register" ? (
            <div className="mt-4 flex items-center justify-between gap-3 rounded-xl border border-emerald-300 bg-emerald-50/90 p-4 text-xs text-emerald-950 shadow-sm">
              <div className="flex items-center gap-2.5 font-medium">
                <Building2 className="h-5 w-5 shrink-0 text-emerald-700" />
                <div>
                  <p className="font-bold text-emerald-900">{t.newBusinessPrompt}</p>
                  <p className="text-[11px] text-emerald-800">Set up your agrodealer business and branches in under 2 minutes.</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setTab("register")}
                className="shrink-0 rounded-lg bg-emerald-700 px-3 py-2 text-xs font-bold text-white shadow transition hover:bg-emerald-800"
              >
                {t.registerBusiness} →
              </button>
            </div>
          ) : (
            <div className="mt-4 flex items-center justify-between rounded-xl border border-muted bg-muted/40 p-3.5 text-xs text-muted-foreground shadow-sm">
              <span>{t.alreadyRegisteredPrompt}</span>
              <button
                type="button"
                onClick={() => setTab("owner")}
                className="font-bold text-primary underline underline-offset-2 hover:text-primary/80"
              >
                {t.signIn} →
              </button>
            </div>
          )}

          <p className="mt-5 text-center text-[11px] text-muted-foreground">© {new Date().getFullYear()} UFBC Agrodealer · Secure business workspace</p>
        </div>
      </section>
    </main>
  );
}
