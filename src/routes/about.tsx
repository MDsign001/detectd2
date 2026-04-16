import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

const LOGO_URL =
  "https://cdn.webshopapp.com/shops/272625/themes/182919/v/2092953/assets/logo.png?20231108145809";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Over deze app — detect.nl Companion" },
      {
        name: "description",
        content:
          "Over de detect.nl Companion app voor de XP DEUS II — onafhankelijk, praktisch en met liefde voor de hobby.",
      },
      { property: "og:title", content: "Over — detect.nl Companion" },
      {
        property: "og:description",
        content: "Onafhankelijke companion-app voor de XP DEUS II.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell title="Over">
      <section className="rounded-2xl border border-border bg-card px-5 py-6 text-center">
        <img src={LOGO_URL} alt="detect.nl" className="mx-auto mb-4 h-7 w-auto" />
        <p className="mb-3 text-[14px] leading-relaxed text-foreground/80">
          Maak kennis met je XP DEUS II sidekick. Deze app houdt je detector
          scherp en startklaar met heldere gidsen voor het updaten van je RC en
          koptelefoon.
        </p>
        <p className="mb-3 text-[14px] leading-relaxed text-foreground/80">
          Haal het maximale uit je apparatuur met firmware-tips, ervaringen en
          best practices voor elke detect-modus.
        </p>
        <p className="mb-3 text-[14px] leading-relaxed text-foreground/80">
          Alle handleidingen — RC, koptelefoon en pinpointer — staan hier bij
          elkaar, zodat geavanceerde functies altijd binnen handbereik zijn.
        </p>
        <p className="text-[13px] italic text-muted-foreground">
          ~~ Veel succes in het veld! ~~
        </p>
      </section>

      <div className="my-4 flex flex-wrap justify-center gap-2">
        <span className="rounded-full border border-border bg-muted px-4 py-1.5 text-xs text-foreground/70">
          Powered by detect.nl
        </span>
        <span className="rounded-full border border-border bg-muted px-4 py-1.5 text-xs text-foreground/70">
          Versie 1.0
        </span>
      </div>

      <div className="rounded-2xl border border-primary/30 bg-accent px-4 py-3">
        <div className="mb-1.5 text-[13px] font-bold text-primary">
          ℹ Disclaimer
        </div>
        <p className="text-[13px] leading-relaxed text-foreground/80">
          Deze app is <strong>geen</strong> officieel XP-product. Het is een
          onafhankelijke companion-tool, gemaakt door en voor de Nederlandse
          detect-community.
        </p>
      </div>

      <p className="mt-6 text-center text-xs italic text-muted-foreground">
        "Loop traag. De grond gaat nergens heen."
      </p>
    </PageShell>
  );
}
