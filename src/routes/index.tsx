import { createFileRoute } from "@tanstack/react-router";
import { AppHeader } from "@/components/AppHeader";
import { AppFooter } from "@/components/AppFooter";
import { Tile } from "@/components/Tile";

const LOGO_URL =
  "https://cdn.webshopapp.com/shops/272625/themes/182919/v/2092953/assets/logo.png?20231108145809";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "detect.nl Companion — Jouw maatje in het veld" },
      {
        name: "description",
        content:
          "De handige companion-app voor metaaldetectoristen. Programma's, instellingen en motiverende tips voor elke schatzoeker.",
      },
      { property: "og:title", content: "detect.nl Companion" },
      {
        property: "og:description",
        content: "Programma's, instellingen en tips voor elke schatzoeker.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col bg-background">
      <AppHeader />
      <main className="flex-1 px-3 py-4">
        <section className="rounded-2xl bg-card p-6 text-center shadow-card">
          <img
            src={LOGO_URL}
            alt="detect.nl"
            className="mx-auto mb-3 h-10 w-auto"
          />
          <h1 className="text-xl font-bold text-foreground">
            Welkom, schatzoeker
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Spoel je laarzen, laad je accu — het veld wacht.
          </p>
        </section>

        <section className="mt-4 grid grid-cols-2 gap-3">
          <Tile
            to="/programs"
            emoji="🎛️"
            label="Programma's"
            hint="Kies je modus"
          />
          <Tile
            to="/tips"
            emoji="💡"
            label="Tips"
            hint="Wijsheid uit de klei"
          />
        </section>

        <section className="mt-4 rounded-2xl bg-muted p-4 text-center">
          <p className="text-sm italic text-foreground">
            "De grond liegt nooit. Soms mompelt hij alleen wat zachtjes."
          </p>
        </section>
      </main>
      <AppFooter />
    </div>
  );
}
