import { createFileRoute, Outlet, Link, useNavigate, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useAuth, useIsOwner } from "@/lib/auth-context";
import {
  LayoutDashboard,
  ShoppingCart,
  Boxes,
  Package,
  ShoppingBag,
  Receipt,
  ArrowLeftRight,
  BarChart3,
  Building2,
  Users,
  ShieldAlert,
  User,
  LogOut,
  Menu,
  X,
  Sprout,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { t } from "@/lib/i18n";

export const Route = createFileRoute("/_authenticated")({
  component: AuthenticatedLayout,
});

function AuthenticatedLayout() {
  const { user, profile, role, businessName, loading, signOut } = useAuth();
  const isOwner = useIsOwner();
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      void navigate({ to: "/auth" });
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          <p className="text-sm font-medium text-muted-foreground">{t.loading}</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const navItems = [
    { label: t.dashboard, to: "/dashboard", icon: LayoutDashboard, show: true },
    { label: t.sales, to: "/sales", icon: ShoppingCart, show: true },
    { label: t.inventory, to: "/inventory", icon: Boxes, show: true },
    { label: t.products, to: "/products", icon: Package, show: true },
    { label: t.purchases, to: "/purchases", icon: ShoppingBag, show: true },
    { label: t.expenses, to: "/expenses", icon: Receipt, show: true },
    { label: t.transfers, to: "/transfers", icon: ArrowLeftRight, show: true },
    { label: t.reports, to: "/reports", icon: BarChart3, show: true },
    { label: t.branches, to: "/branches", icon: Building2, show: isOwner || role === "manager" },
    { label: t.users, to: "/users", icon: Users, show: isOwner },
    { label: t.audit, to: "/audit", icon: ShieldAlert, show: isOwner },
    { label: t.account, to: "/account", icon: User, show: true },
  ];

  return (
    <div className="flex min-h-screen bg-muted/20">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-64 flex-col border-r bg-card shadow-sm fixed inset-y-0 z-30">
        <div className="flex h-16 items-center gap-3 border-b px-6">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Sprout className="h-5 w-5" />
          </div>
          <div className="min-w-0 flex-1">
            <h1 className="truncate text-sm font-bold tracking-tight text-foreground">
              {businessName || "Agrodealer System"}
            </h1>
            <p className="truncate text-xs text-muted-foreground capitalize">
              {role ? `${role}` : "Portal"}
            </p>
          </div>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
          {navItems
            .filter((item) => item.show)
            .map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-xs"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  <span className="truncate">{item.label}</span>
                </Link>
              );
            })}
        </nav>

        <div className="border-t p-4">
          <div className="mb-3 flex items-center gap-3 px-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
              {(profile?.full_name || user.email || "U")[0].toUpperCase()}
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-semibold text-foreground">
                {profile?.full_name || user.email?.split("@")[0]}
              </p>
              <p className="truncate text-[10px] text-muted-foreground">{user.email}</p>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="w-full justify-start gap-2 text-xs"
            onClick={() => void signOut()}
          >
            <LogOut className="h-3.5 w-3.5" />
            {t.signOut}
          </Button>
        </div>
      </aside>

      {/* Mobile Top Nav */}
      <div className="md:hidden fixed top-0 inset-x-0 z-40 flex h-16 items-center justify-between border-b bg-card px-4 shadow-sm">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Sprout className="h-4 w-4" />
          </div>
          <span className="font-bold text-sm truncate max-w-[180px]">
            {businessName || "Agrodealer"}
          </span>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-40 bg-background/95 backdrop-blur-sm p-4 overflow-y-auto">
          <nav className="space-y-1">
            {navItems
              .filter((item) => item.show)
              .map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname.startsWith(item.to);
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    <Icon className="h-5 w-5 shrink-0" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
          </nav>
          <div className="mt-6 border-t pt-4">
            <Button
              variant="destructive"
              className="w-full justify-center gap-2"
              onClick={() => {
                setMobileMenuOpen(false);
                void signOut();
              }}
            >
              <LogOut className="h-4 w-4" />
              {t.signOut}
            </Button>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 md:pl-64 flex flex-col min-h-screen pt-16 md:pt-0">
        <div className="flex-1 p-4 md:p-8 max-w-7xl w-full mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
