const LOGO_URL =
  "https://cdn.webshopapp.com/shops/272625/themes/182919/v/2092953/assets/logo.png?20231108145809";

export function AppFooter() {
  return (
    <footer className="mt-8 flex flex-col items-center gap-2 border-t border-muted px-4 py-6 text-center">
      <img src={LOGO_URL} alt="detect.nl" className="h-5 w-auto opacity-70" />
      <p className="text-xs text-muted-foreground">
        Elke piep is hoop. Elke vondst een verhaal.
      </p>
    </footer>
  );
}
