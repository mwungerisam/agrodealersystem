import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import {
  KeyRound,
  Loader2,
  AlertTriangle,
  Trash2,
  Building2,
  UserX,
  ShieldAlert,
  Info,
  CheckCircle2,
  Lock,
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth, useIsOwner } from "@/lib/auth-context";
import { isStrongPassword } from "@/lib/password-policy";
import { t, formatErrorMessage } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";

export const Route = createFileRoute("/_authenticated/account")({ component: AccountPage });

export function AccountPage() {
  const { user, role, signOut } = useAuth();
  const isOwner = useIsOwner();
  const navigate = useNavigate();

  // Password change state
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [savingPassword, setSavingPassword] = useState(false);

  // Business deletion dialog state
  const [deleteBusinessConfirmText, setDeleteBusinessConfirmText] = useState("");
  const [deletingBusiness, setDeletingBusiness] = useState(false);
  const [businessDialogOpen, setBusinessDialogOpen] = useState(false);

  // Account deletion dialog state
  const [deleteAccountConfirmText, setDeleteAccountConfirmText] = useState("");
  const [deletingAccount, setDeletingAccount] = useState(false);
  const [accountDialogOpen, setAccountDialogOpen] = useState(false);

  const changePassword = async (event: React.FormEvent) => {
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
      toast.error('Please type "DELETE BUSINESS" in uppercase to confirm.');
      return;
    }

    setDeletingBusiness(true);
    try {
      // Clean up transactional records in reverse foreign-key order
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
      navigate({ to: "/dashboard", replace: true });
    } catch (err: any) {
      toast.error(err?.message || "Failed to purge business data. Check permissions.");
    } finally {
      setDeletingBusiness(false);
    }
  };

  const handleDeleteAccount = async () => {
    if (deleteAccountConfirmText.trim().toUpperCase() !== "DELETE") {
      toast.error('Please type "DELETE" in uppercase to confirm.');
      return;
    }

    setDeletingAccount(true);
    try {
      if (user?.id) {
        // Delete user roles and profile records
        await supabase.from("user_roles").delete().eq("user_id", user.id);
        await supabase.from("profiles").delete().eq("id", user.id);
      }

      await signOut();
      toast.success("Your account session has been closed and removed.");
      setAccountDialogOpen(false);
      navigate({ to: "/auth", replace: true });
    } catch (err: any) {
      toast.error(err?.message || "Error processing account closure.");
    } finally {
      setDeletingAccount(false);
    }
  };

  return (
    <div className="mx-auto max-w-4xl space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          <Building2 className="h-4 w-4" />
          <span>Security & Profile Management</span>
        </div>
        <h1 className="mt-1 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
          {t.accountSettings}
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Manage credentials, security preferences, and workspace administration settings.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Profile Card Summary */}
        <Card className="md:col-span-1">
          <CardHeader className="border-b bg-muted/20 pb-4">
            <CardTitle className="text-base font-bold">User Identity</CardTitle>
            <CardDescription className="text-xs">Your authenticated credentials</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 pt-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-lg font-bold text-emerald-800">
                {(user?.email?.[0] ?? "U").toUpperCase()}
              </div>
              <div className="min-w-0">
                <p className="truncate text-xs font-semibold text-foreground">{user?.email}</p>
                <div className="mt-1 flex items-center gap-1.5">
                  <span
                    className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-bold ${
                      isOwner
                        ? "bg-emerald-100 text-emerald-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {isOwner ? "Business Owner" : "Worker / Staff"}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-2 border-t pt-3 text-xs text-muted-foreground">
              <div className="flex justify-between">
                <span>Account Status</span>
                <span className="flex items-center gap-1 font-semibold text-emerald-600">
                  <CheckCircle2 className="h-3 w-3" /> Active
                </span>
              </div>
              <div className="flex justify-between">
                <span>Role Level</span>
                <span className="font-semibold text-foreground">{role?.role?.toUpperCase() || "OWNER"}</span>
              </div>
              {role?.branch_id && (
                <div className="flex justify-between">
                  <span>Assigned Branch</span>
                  <span className="font-mono text-[11px] text-foreground">
                    {role.branch_id.substring(0, 8)}…
                  </span>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Change Password Card */}
        <Card className="md:col-span-2">
          <CardHeader className="border-b bg-muted/20 pb-4">
            <CardTitle className="flex items-center gap-2 text-base font-bold">
              <KeyRound className="h-4 w-4 text-emerald-600" />
              {t.changePassword}
            </CardTitle>
            <CardDescription className="text-xs">{t.passwordHint}</CardDescription>
          </CardHeader>
          <CardContent className="pt-5">
            <form onSubmit={changePassword} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="new-password" className="text-xs font-medium">
                  {t.newPassword} <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="new-password"
                  type="password"
                  autoComplete="new-password"
                  minLength={12}
                  required
                  placeholder="Min. 12 characters with uppercase, numbers, and symbols"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="h-10"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirm-password" className="text-xs font-medium">
                  {t.confirmPassword} <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="confirm-password"
                  type="password"
                  autoComplete="new-password"
                  minLength={12}
                  required
                  placeholder="Re-type your new password"
                  value={confirmation}
                  onChange={(event) => setConfirmation(event.target.value)}
                  className="h-10"
                />
              </div>

              <div className="flex justify-end pt-2">
                <Button
                  type="submit"
                  disabled={savingPassword}
                  className="bg-emerald-600 font-semibold text-white hover:bg-emerald-700"
                >
                  {savingPassword ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Updating Password…
                    </>
                  ) : (
                    t.changePassword
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Admin Danger Zone Section */}
      <div className="space-y-4 pt-4">
        <div className="flex items-center gap-2 border-b border-destructive/20 pb-2">
          <ShieldAlert className="h-5 w-5 text-destructive" />
          <h2 className="text-lg font-bold text-destructive">Danger Zone & Administrative Deletion</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Card 1: Delete / Reset Business Data (Owner Only) */}
          {isOwner && (
            <Card className="border-destructive/30 bg-destructive/[0.02] shadow-sm">
              <CardHeader className="border-b border-destructive/20 bg-destructive/5 pb-4">
                <div className="flex items-center gap-2 text-destructive">
                  <Building2 className="h-5 w-5" />
                  <CardTitle className="text-base font-bold">Delete Business Records</CardTitle>
                </div>
                <CardDescription className="text-xs text-muted-foreground">
                  Permanently erase all sales, purchases, inventory counts, ledgers, and financial logs.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 pt-4 text-xs text-muted-foreground">
                <div className="flex items-start gap-2 rounded-lg bg-amber-500/10 p-2.5 text-amber-900">
                  <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                  <p>
                    This action is <strong className="font-bold">irreversible</strong>. All recorded agricultural sales, supplier orders, inventory stock history, and customer transactions will be deleted.
                  </p>
                </div>
                <p className="text-[11px] leading-relaxed">
                  Only the primary business owner can initiate this process. Products catalog and account logins remain intact so you can start a fresh business cycle.
                </p>
              </CardContent>
              <CardFooter className="border-t border-destructive/10 pt-4">
                <AlertDialog open={businessDialogOpen} onOpenChange={setBusinessDialogOpen}>
                  <AlertDialogTrigger asChild>
                    <Button variant="destructive" size="sm" className="w-full font-bold">
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete Business Ledger Data
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent className="max-w-md">
                    <AlertDialogHeader>
                      <AlertDialogTitle className="flex items-center gap-2 text-destructive">
                        <AlertTriangle className="h-5 w-5" />
                        Confirm Business Data Deletion
                      </AlertDialogTitle>
                      <AlertDialogDescription className="space-y-3 pt-2 text-left text-xs">
                        <p className="text-foreground">
                          You are about to permanently delete all financial, sales, inventory, and expense data for this enterprise.
                        </p>
                        <div className="rounded-md bg-destructive/10 p-3 text-destructive">
                          <p className="font-bold">This will permanently destroy:</p>
                          <ul className="mt-1 list-inside list-disc space-y-0.5 text-[11px]">
                            <li>All Sales receipts & customer balances</li>
                            <li>All Purchase orders & supplier costs</li>
                            <li>All Inventory stock quantities & transfer logs</li>
                            <li>All Expense vouchers & audit records</li>
                          </ul>
                        </div>
                        <div className="space-y-2 pt-2">
                          <Label htmlFor="confirm-business-del" className="text-xs font-semibold text-foreground">
                            Type <span className="font-mono font-bold text-destructive">DELETE BUSINESS</span> to confirm:
                          </Label>
                          <Input
                            id="confirm-business-del"
                            value={deleteBusinessConfirmText}
                            onChange={(e) => setDeleteBusinessConfirmText(e.target.value)}
                            placeholder="DELETE BUSINESS"
                            className="font-mono text-xs"
                          />
                        </div>
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter className="mt-3">
                      <AlertDialogCancel onClick={() => setDeleteBusinessConfirmText("")}>
                        Cancel
                      </AlertDialogCancel>
                      <Button
                        variant="destructive"
                        disabled={
                          deleteBusinessConfirmText.trim().toUpperCase() !== "DELETE BUSINESS" ||
                          deletingBusiness
                        }
                        onClick={handleDeleteBusinessData}
                      >
                        {deletingBusiness ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Deleting Data…
                          </>
                        ) : (
                          "Confirm Permanent Deletion"
                        )}
                      </Button>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </CardFooter>
            </Card>
          )}

          {/* Card 2: Delete / Close User Account */}
          <Card className="border-destructive/30 bg-destructive/[0.02] shadow-sm">
            <CardHeader className="border-b border-destructive/20 bg-destructive/5 pb-4">
              <div className="flex items-center gap-2 text-destructive">
                <UserX className="h-5 w-5" />
                <CardTitle className="text-base font-bold">
                  {isOwner ? "Delete Admin Account" : "Close User Account"}
                </CardTitle>
              </div>
              <CardDescription className="text-xs text-muted-foreground">
                Permanently deactivate your access credentials and revoke system access.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 pt-4 text-xs text-muted-foreground">
              <div className="flex items-start gap-2 rounded-lg bg-destructive/10 p-2.5 text-destructive">
                <Info className="mt-0.5 h-4 w-4 shrink-0" />
                <p>
                  Your authentication credentials, role assignments, and personal profile links will be deleted. You will be immediately signed out.
                </p>
              </div>
              <p className="text-[11px] leading-relaxed">
                If you are the sole owner, make sure you have exported all necessary reports or assigned another administrator before proceeding.
              </p>
            </CardContent>
            <CardFooter className="border-t border-destructive/10 pt-4">
              <AlertDialog open={accountDialogOpen} onOpenChange={setAccountDialogOpen}>
                <AlertDialogTrigger asChild>
                  <Button variant="outline" size="sm" className="w-full border-destructive/40 text-destructive hover:bg-destructive hover:text-white">
                    <UserX className="mr-2 h-4 w-4" />
                    {isOwner ? "Delete Admin Account" : "Close Account"}
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent className="max-w-md">
                  <AlertDialogHeader>
                    <AlertDialogTitle className="flex items-center gap-2 text-destructive">
                      <AlertTriangle className="h-5 w-5" />
                      Confirm Account Deletion
                    </AlertDialogTitle>
                    <AlertDialogDescription className="space-y-3 pt-2 text-left text-xs">
                      <p className="text-foreground">
                        Are you sure you want to delete your account (<strong className="font-semibold">{user?.email}</strong>)?
                      </p>
                      <p className="text-muted-foreground">
                        This will revoke all authorization tokens, remove your user profile, and sign you out immediately.
                      </p>
                      <div className="space-y-2 pt-2">
                        <Label htmlFor="confirm-account-del" className="text-xs font-semibold text-foreground">
                          Type <span className="font-mono font-bold text-destructive">DELETE</span> to confirm:
                        </Label>
                        <Input
                          id="confirm-account-del"
                          value={deleteAccountConfirmText}
                          onChange={(e) => setDeleteAccountConfirmText(e.target.value)}
                          placeholder="DELETE"
                          className="font-mono text-xs"
                        />
                      </div>
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter className="mt-3">
                    <AlertDialogCancel onClick={() => setDeleteAccountConfirmText("")}>
                      Cancel
                    </AlertDialogCancel>
                    <Button
                      variant="destructive"
                      disabled={
                        deleteAccountConfirmText.trim().toUpperCase() !== "DELETE" ||
                        deletingAccount
                      }
                      onClick={handleDeleteAccount}
                    >
                      {deletingAccount ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Closing Account…
                        </>
                      ) : (
                        "Permanently Delete Account"
                      )}
                    </Button>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

