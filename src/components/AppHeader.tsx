import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

const LOGO_URL =
  "https://cdn.webshopapp.com/shops/272625/themes/182919/v/2092953/assets/logo.png?20231108145809";

export function AppHeader({ showBack = false }: { showBack?: boolean }) {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between border-b border-muted bg-background px-4 py-3">
      <div className="flex w-10 items-center">
        {showBack ? (
          <Link
            to="/"
            aria-label="Terug naar home"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-primary transition-colors hover:bg-muted hover:text-secondary"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>
        ) : null}
      </div>
      <Link to="/" className="flex items-center" aria-label="detect.nl Companion">
        <img
          src={LOGO_URL}
          alt="detect.nl"
          className="h-7 w-auto"
          loading="eager"
        />
      </Link>
      <div className="w-10" />
    </header>
  );
}
