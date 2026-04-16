import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
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
          "De handige companion-app voor metaaldetectoristen. Programma's, instellingen, handleidingen, firmware-updates en motiverende tips.",
      },
      { property: "og:title", content: "detect.nl Companion" },
      {
        property: "og:description",
        content:
          "Programma's, handleidingen en tips voor elke schatzoeker met een XP DEUS II.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <PageShell title="Infohub">
      <section className="rounded-3xl border border-border bg-card px-5 py-7 text-center shadow-card">
        <img src={LOGO_URL} alt="detect.nl" className="mx-auto mb-3 h-9 w-auto" />
        <h1 className="font-display text-4xl font-extrabold leading-none text-primary">
          DEUS II
        </h1>
        <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
          Companion App
        </p>
        <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-accent px-3 py-1 text-[11px] font-medium text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Onafhankelijk gemaakt door detect.nl
        </div>
      </section>

      <section className="mt-5 grid grid-cols-2 gap-2.5">
        <Tile
          to="/manuals"
          emoji="📖"
          label="Handleidingen"
          desc="RC, koptelefoon & pinpointer"
        />
        <Tile
          to="/update"
          emoji="⚡"
          label="Update"
          desc="Firmware-update gidsen"
        />
        <Tile
          to="/programs"
          emoji="🎛"
          label="Programma's"
          desc="9 zorgvuldig samengestelde modi"
        />
        <Tile
          to="/tips"
          emoji="💡"
          label="Tips"
          desc="Wijsheid uit de klei"
        />
      </section>

      <section className="mt-4">
        <Tile
          to="/links"
          emoji="🔗"
          label="Bronnen & Links"
          desc="Communities, kanalen en webshops voor meer detect-magie"
        />
      </section>

      <section className="mt-5 rounded-2xl border border-border bg-muted px-4 py-3 text-center">
        <p className="text-sm italic text-foreground/80">
          "De grond liegt nooit. Soms mompelt hij alleen wat zachtjes."
        </p>
      </section>
    </PageShell>
  );
}
