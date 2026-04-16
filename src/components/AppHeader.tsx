import { Link, useLocation } from "@tanstack/react-router";
import { ArrowLeft, Info } from "lucide-react";

const LOGO_URL =
  "https://cdn.webshopapp.com/shops/272625/themes/182919/v/2092953/assets/logo.png?20231108145809";

export function AppHeader({ title }: { title: string }) {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const isAbout = pathname === "/about";

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-border bg-background/90 px-4 pb-3 pt-4 backdrop-blur">
      <div className="w-10">
        {!isHome && (
          <Link
            to="/"
            aria-label="Terug naar home"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-muted text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
          </Link>
        )}
      </div>

      <div className="flex flex-col items-center gap-1">
        <img src={LOGO_URL} alt="detect.nl" className="h-5 w-auto" />
        <span className="font-display text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
          {title}
        </span>
      </div>

      <div className="w-10">
        <Link
          to={isAbout ? "/" : "/about"}
          aria-label="Over deze app"
          className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border transition-colors ${
            isAbout
              ? "border-primary bg-accent text-primary"
              : "border-border bg-muted text-muted-foreground hover:border-primary hover:text-primary"
          }`}
        >
          <Info className="h-4 w-4" />
        </Link>
      </div>
    </header>
  );
}
