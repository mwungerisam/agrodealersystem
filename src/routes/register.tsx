import { createFileRoute, useNavigate, Navigate, Link } from "@tanstack/react-router";
import { useState, useId } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/lib/auth-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { toast } from "sonner";
import {
  Loader2,
  Sprout,
  Eye,
  EyeOff,
  ShieldCheck,
  Store,
  CheckCircle2,
  Building2,
  Phone,
  MapPin,
  Mail,
  Lock,
  ArrowRight,
  Boxes,
  BarChart3,
  Users2,
  Check,
  X,
} from "lucide-react";
import { t, formatAuthError } from "@/lib/i18n";
import { isStrongPassword } from "@/lib/password-policy";

export const Route = createFileRoute("/register")({
  component: RegisterBusinessPage,
  head: () => ({
    meta: [
      { title: "Register Business | UFBC Agrodealer" },
      { name: "description", content: "Register your agrodealer business to manage stock, sales, and branches." },
    ],
  }),
});

interface RegistrationForm {
  businessName: string;
  branchName: string;
  businessAddress: string;
  businessPhone: string;
  businessTin: string;
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export function RegisterBusinessPage() {
  const { user, loading: authLoading, refreshRole } = useAuth();
  const navigate = useNavigate();

  const businessNameId = useId();
  const branchNameId = useId();
  const businessAddressId = useId();
  const businessPhoneId = useId();
  const businessTinId = useId();
  const fullNameId = useId();
  const emailId = useId();
  const passwordId = useId();
  const confirmPasswordId = useId();

  const [form, setForm] = useState<RegistrationForm>({
    businessName: "",
    branchName: "",
    businessAddress: "",
    businessPhone: "",
    businessTin: "",
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [busy, setBusy] = useState(false);
  const [registeredEmail, setRegisteredEmail] = useState<string | null>(null);

  // Password rules checks
  const hasMinLength = form.password.length >= 12;
  const hasLower = /[a-z]/.test(form.password);
  const hasUpper = /[A-Z]/.test(form.password);
  const hasNumber = /\d/.test(form.password);
  const hasSpecial = /[^A-Za-z0-9]/.test(form.password);
  const passwordValid = isStrongPassword(form.password);
  const passwordsMatch = form.password.length > 0 && form.password === form.confirmPassword;

  // Strength score (0 to 5)
  const strengthScore = [hasMinLength, hasLower, hasUpper, hasNumber, hasSpecial].filter(Boolean).length;

  if (authLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.12),_transparent_38%),linear-gradient(135deg,#f8fafc_0%,#eef8f1_100%)] px-4">
        <div className="flex flex-col items-center gap-5 rounded-[28px] border border-border/70 bg-white/90 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-sm">
          <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-600 via-green-600 to-lime-500 shadow-lg shadow-emerald-500/25">
            <Loader2 className="relative h-7 w-7 animate-spin text-white" />
          </div>
          <div className="text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-emerald-700/90">UFBC AGRODEALER</p>
            <h2 className="mt-2 text-lg font-semibold text-slate-900">Checking session…</h2>
          </div>
        </div>
      </div>
    );
  }

  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  const updateField = (key: keyof RegistrationForm, value: string) => {
    setForm((prev) => {
      const next = { ...prev, [key]: value };
      // Automatically default the primary branch name if empty
      if (key === "businessName" && (!prev.branchName || prev.branchName === `${prev.businessName} - Main Branch`)) {
        next.branchName = value.trim() ? `${value.trim()} - Main Branch` : "";
      }
      return next;
    });
  };

  const handleRegister = async (e: React.FormEvent) => {
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
        options: {
          data: {
            full_name: cleanFullName,
            phone: cleanPhone,
            account_type: "business_owner",
            business_name: cleanBusinessName,
            branch_name: cleanBranch,
            business_address: cleanAddress,
            business_tin: form.businessTin.trim(),
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
        // Run idempotency RPC to guarantee role & initial branch setup
        try {
          await (supabase.rpc as any)("register_business_setup", {
            p_business_name: cleanBusinessName,
            p_branch_name: cleanBranch,
            p_phone: cleanPhone,
            p_address: cleanAddress,
          });
        } catch {
          // Trigger fallback already handled in handle_new_user
        }

        await refreshRole();
        toast.success(t.businessRegistrationSuccess);
        navigate({ to: "/dashboard", replace: true });
        return;
      }

      // If session was not directly returned, attempt immediate sign-in (e.g. if auto-confirmed)
      try {
        const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
          email: cleanEmail,
          password: form.password,
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
        // proceed to email verification screen
      }

      // If email confirmation is required by Supabase auth provider:
      setBusy(false);
      setRegisteredEmail(cleanEmail);
      toast.success(t.signUpSuccessEmailSent);
    } catch (err: any) {
      setBusy(false);
      toast.error(err?.message || "Registration failed. Please try again.");
    }
  };

  return (
    <main className="relative flex min-h-screen overflow-hidden bg-background">
      {/* Decorative background gradients */}
      <div className="pointer-events-none absolute -left-28 -top-28 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-36 -right-24 h-[420px] w-[420px] rounded-full bg-lime-500/10 blur-3xl" />

      {/* Left branding banner (desktop) */}
      <section className="relative hidden flex-1 overflow-hidden bg-sidebar p-12 text-sidebar-foreground lg:flex lg:flex-col lg:justify-between">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: "radial-gradient(circle at 20% 20%, currentColor 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative max-w-lg">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sidebar-primary text-sidebar-primary-foreground shadow-md shadow-sidebar-primary/20">
              <Sprout className="h-6 w-6" />
            </div>
            <div>
              <p className="text-base font-extrabold tracking-wide">UFBC AGRODEALER</p>
              <p className="text-xs text-sidebar-foreground/60">Agricultural enterprise retail platform</p>
            </div>
          </div>

          <div className="mt-16">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-sidebar-accent/60 px-3 py-1 text-xs font-semibold text-sidebar-primary">
              <Building2 className="h-3.5 w-3.5" />
              NEW BUSINESS ONBOARDING
            </span>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-white">
              Launch and scale your agro-dealer enterprise with confidence.
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-sidebar-foreground/75">
              Equip your agricultural business with complete multi-branch control, realtime stock synchronization, worker access controls, and authoritative financial ledgers.
            </p>
          </div>

          <div className="mt-8 space-y-3.5">
            {[
              {
                icon: Store,
                title: "Multi-Branch Management",
                desc: "Set up separate retail shops, track transfers, and assign managers effortlessly.",
              },
              {
                icon: Boxes,
                title: "Strict Stock & Catalog Protection",
                desc: "Owner-controlled purchase receiving, catalog prices, and live inventory deduction.",
              },
              {
                icon: BarChart3,
                title: "Authoritative Profit & Loss",
                desc: "Real-time tracking of gross profit, sales targets, expenses, and PDF reports.",
              },
              {
                icon: Users2,
                title: "Role Segregated Portals",
                desc: "Dedicated interfaces for owners and shop staff with tamper-resistant audit logs.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-3.5 rounded-2xl border border-sidebar-border bg-sidebar-accent/30 p-3.5 backdrop-blur-sm"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-sidebar-primary/15 text-sidebar-primary">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-xs font-bold text-white">{item.title}</h2>
                  <p className="text-[11px] leading-relaxed text-sidebar-foreground/65">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative border-t border-sidebar-border/60 pt-6">
          <p className="text-xs text-sidebar-foreground/60">
            Trusted by agricultural retailers across Rwanda for regulatory and business excellence.
          </p>
        </div>
      </section>

      {/* Right registration form */}
      <section className="relative flex w-full items-center justify-center p-4 py-8 sm:p-8 lg:max-w-[620px] lg:p-10">
        <div className="w-full max-w-lg">
          {/* Mobile Header */}
          <div className="mb-6 flex items-center justify-between lg:hidden">
            <div className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
                <Sprout className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-extrabold tracking-wide">UFBC AGRODEALER</p>
                <p className="text-[11px] text-muted-foreground">Agricultural business management</p>
              </div>
            </div>
            <Link
              to="/auth"
              className="text-xs font-semibold text-primary underline-offset-2 hover:underline"
            >
              {t.signIn}
            </Link>
          </div>

          {registeredEmail ? (
            /* Email verification pending screen */
            <Card className="overflow-hidden border border-emerald-200/80 shadow-xl shadow-emerald-950/5">
              <CardHeader className="border-b bg-emerald-50/60 pb-5 text-center">
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl font-bold text-emerald-950">Registration Complete!</CardTitle>
                <CardDescription className="text-xs text-emerald-800/80">
                  Your agrodealer business account has been initialized.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-5 p-6 sm:p-8">
                <div className="rounded-xl border border-muted bg-muted/30 p-4 text-sm">
                  <p className="font-semibold text-foreground">Next step: verify your email</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    We sent a confirmation link to <span className="font-semibold text-foreground">{registeredEmail}</span>. Please click the link to activate your account, then sign in with your password.
                  </p>
                </div>

                <div className="space-y-3">
                  <Button asChild className="h-11 w-full font-semibold">
                    <Link to="/auth">
                      Proceed to Sign In <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => {
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
                        confirmPassword: "",
                      });
                    }}
                  >
                    Register Another Business
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            /* Main Registration Card */
            <Card className="overflow-hidden border shadow-xl shadow-black/5">
              <CardHeader className="border-b bg-muted/20 pb-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-700">
                    <ShieldCheck className="h-4 w-4" />
                    <span>Business Owner Account</span>
                  </div>
                  <Link
                    to="/auth"
                    className="text-xs font-medium text-muted-foreground hover:text-foreground"
                  >
                    {t.haveAccount} <span className="font-semibold text-primary">{t.signIn}</span>
                  </Link>
                </div>
                <CardTitle className="mt-2 text-2xl font-extrabold tracking-tight">
                  {t.registerBusinessTitle}
                </CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  {t.registerBusinessDesc}
                </CardDescription>
              </CardHeader>

              <CardContent className="p-6 sm:p-7">
                <form onSubmit={handleRegister} className="space-y-6">
                  {/* Step 1: Business Profile */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 border-b pb-2">
                      <Store className="h-4 w-4 text-emerald-600" />
                      <h2 className="text-xs font-bold uppercase tracking-wider text-foreground">
                        1. Business & Primary Shop
                      </h2>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor={businessNameId} className="flex items-center gap-1.5 text-xs font-medium">
                        <Building2 className="h-3.5 w-3.5 text-muted-foreground" />
                        {t.businessName} <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id={businessNameId}
                        type="text"
                        required
                        placeholder={t.businessNamePlaceholder}
                        value={form.businessName}
                        onChange={(e) => updateField("businessName", e.target.value)}
                        className="h-10"
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor={branchNameId} className="flex items-center gap-1.5 text-xs font-medium">
                          <Store className="h-3.5 w-3.5 text-muted-foreground" />
                          {t.branchName}
                        </Label>
                        <Input
                          id={branchNameId}
                          type="text"
                          placeholder={t.branchNamePlaceholder}
                          value={form.branchName}
                          onChange={(e) => updateField("branchName", e.target.value)}
                          className="h-10"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor={businessPhoneId} className="flex items-center gap-1.5 text-xs font-medium">
                          <Phone className="h-3.5 w-3.5 text-muted-foreground" />
                          {t.businessPhone} <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id={businessPhoneId}
                          type="tel"
                          required
                          placeholder="e.g. 0788 123 456"
                          value={form.businessPhone}
                          onChange={(e) => updateField("businessPhone", e.target.value)}
                          className="h-10"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor={businessAddressId} className="flex items-center gap-1.5 text-xs font-medium">
                          <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
                          {t.businessAddress} <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id={businessAddressId}
                          type="text"
                          required
                          placeholder={t.businessAddressPlaceholder}
                          value={form.businessAddress}
                          onChange={(e) => updateField("businessAddress", e.target.value)}
                          className="h-10"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor={businessTinId} className="flex items-center justify-between text-xs font-medium">
                          <span>Business TIN</span>
                          <span className="text-[10px] text-muted-foreground">Optional</span>
                        </Label>
                        <Input
                          id={businessTinId}
                          type="text"
                          placeholder="e.g. 100234567"
                          value={form.businessTin}
                          onChange={(e) => updateField("businessTin", e.target.value)}
                          className="h-10"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Step 2: Owner Credentials */}
                  <div className="space-y-4 pt-2">
                    <div className="flex items-center gap-2 border-b pb-2">
                      <ShieldCheck className="h-4 w-4 text-emerald-600" />
                      <h2 className="text-xs font-bold uppercase tracking-wider text-foreground">
                        2. Owner Credentials & Access
                      </h2>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor={fullNameId} className="flex items-center gap-1.5 text-xs font-medium">
                        {t.ownerFullName} <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id={fullNameId}
                        type="text"
                        autoComplete="name"
                        required
                        placeholder="e.g. Jean Paul Habimana"
                        value={form.fullName}
                        onChange={(e) => updateField("fullName", e.target.value)}
                        className="h-10"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor={emailId} className="flex items-center gap-1.5 text-xs font-medium">
                        <Mail className="h-3.5 w-3.5 text-muted-foreground" />
                        {t.email} <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id={emailId}
                        type="email"
                        autoComplete="email"
                        required
                        value={form.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        className="h-10"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor={passwordId} className="flex items-center gap-1.5 text-xs font-medium">
                        <Lock className="h-3.5 w-3.5 text-muted-foreground" />
                        {t.password} <span className="text-destructive">*</span>
                      </Label>
                      <div className="relative">
                        <Input
                          id={passwordId}
                          type={showPassword ? "text" : "password"}
                          autoComplete="new-password"
                          required
                          value={form.password}
                          onChange={(e) => updateField("password", e.target.value)}
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

                      {/* Interactive Password Strength Indicators */}
                      {form.password.length > 0 && (
                        <div className="mt-2 space-y-2 rounded-lg border border-muted/80 bg-muted/20 p-2.5 text-xs">
                          <div className="flex items-center justify-between">
                            <span className="text-[11px] font-medium text-muted-foreground">Security level</span>
                            <span
                              className={`text-[11px] font-bold ${
                                passwordValid
                                  ? "text-emerald-600"
                                  : strengthScore >= 3
                                  ? "text-amber-600"
                                  : "text-rose-600"
                              }`}
                            >
                              {passwordValid ? "Strong password" : "Needs strengthening"}
                            </span>
                          </div>

                          {/* 5-bar meter */}
                          <div className="grid grid-cols-5 gap-1.5">
                            {[1, 2, 3, 4, 5].map((level) => (
                              <div
                                key={level}
                                className={`h-1.5 rounded-full transition-colors ${
                                  strengthScore >= level
                                    ? passwordValid
                                      ? "bg-emerald-500"
                                      : strengthScore >= 3
                                      ? "bg-amber-500"
                                      : "bg-rose-500"
                                    : "bg-muted"
                                }`}
                              />
                            ))}
                          </div>

                          {/* Rule checklist */}
                          <div className="grid grid-cols-2 gap-x-2 gap-y-1 pt-1 text-[11px]">
                            <div className={`flex items-center gap-1.5 ${hasMinLength ? "text-emerald-700 font-medium" : "text-muted-foreground"}`}>
                              {hasMinLength ? <Check className="h-3 w-3 text-emerald-600" /> : <X className="h-3 w-3 text-muted-foreground/60" />}
                              <span>12+ characters</span>
                            </div>
                            <div className={`flex items-center gap-1.5 ${hasUpper ? "text-emerald-700 font-medium" : "text-muted-foreground"}`}>
                              {hasUpper ? <Check className="h-3 w-3 text-emerald-600" /> : <X className="h-3 w-3 text-muted-foreground/60" />}
                              <span>Uppercase letter</span>
                            </div>
                            <div className={`flex items-center gap-1.5 ${hasLower ? "text-emerald-700 font-medium" : "text-muted-foreground"}`}>
                              {hasLower ? <Check className="h-3 w-3 text-emerald-600" /> : <X className="h-3 w-3 text-muted-foreground/60" />}
                              <span>Lowercase letter</span>
                            </div>
                            <div className={`flex items-center gap-1.5 ${hasNumber && hasSpecial ? "text-emerald-700 font-medium" : "text-muted-foreground"}`}>
                              {hasNumber && hasSpecial ? <Check className="h-3 w-3 text-emerald-600" /> : <X className="h-3 w-3 text-muted-foreground/60" />}
                              <span>Number & symbol</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor={confirmPasswordId} className="flex items-center gap-1.5 text-xs font-medium">
                        <Lock className="h-3.5 w-3.5 text-muted-foreground" />
                        {t.confirmPassword} <span className="text-destructive">*</span>
                      </Label>
                      <div className="relative">
                        <Input
                          id={confirmPasswordId}
                          type={showConfirmPassword ? "text" : "password"}
                          autoComplete="new-password"
                          required
                          value={form.confirmPassword}
                          onChange={(e) => updateField("confirmPassword", e.target.value)}
                          className="h-10 pr-10"
                        />
                        <button
                          type="button"
                          aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                        >
                          {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                      {form.confirmPassword.length > 0 && !passwordsMatch && (
                        <p className="text-[11px] text-destructive">{t.passwordsDontMatch}</p>
                      )}
                    </div>
                  </div>

                  {/* Submission Button */}
                  <div className="space-y-4 pt-2">
                    <Button
                      type="submit"
                      disabled={busy}
                      className="h-11 w-full bg-emerald-600 font-bold text-white shadow-md shadow-emerald-600/20 hover:bg-emerald-700"
                    >
                      {busy ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Creating Business Profile…
                        </>
                      ) : (
                        <>
                          {t.createBusinessAccount}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>

                    <div className="text-center">
                      <span className="text-xs text-muted-foreground">{t.alreadyRegisteredPrompt} </span>
                      <Link
                        to="/auth"
                        className="text-xs font-semibold text-emerald-700 underline underline-offset-2 hover:text-emerald-900"
                      >
                        {t.goToLogin}
                      </Link>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}

          <p className="mt-5 text-center text-[11px] text-muted-foreground">
            © {new Date().getFullYear()} UFBC Agrodealer · Enterprise Agribusiness Workspace
          </p>
        </div>
      </section>
    </main>
  );
}
