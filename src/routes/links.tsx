import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { linkGroups } from "@/data/resources";

export const Route = createFileRoute("/links")({
  head: () => ({
    meta: [
      { title: "Bronnen & Links — detect.nl Companion" },
      {
        name: "description",
        content:
          "Handige Facebook-groepen, YouTube-kanalen en websites voor metaaldetectoristen.",
      },
      { property: "og:title", content: "Bronnen — detect.nl Companion" },
      {
        property: "og:description",
        content: "Communities, kanalen en webshops voor meer detect-magie.",
      },
    ],
  }),
  component: LinksPage,
});

function LinksPage() {
  return (
    <PageShell title="Bronnen">
      {Object.entries(linkGroups).map(([group, items]) => (
        <section key={group} className="mb-4">
          <div className="mb-2 px-1 text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
            {group}
          </div>
          <ul className="space-y-1.5">
            {items.map((name) => (
              <li
                key={name}
                className="flex cursor-pointer items-center justify-between rounded-xl border border-border bg-card px-4 py-3 transition-colors hover:border-primary"
              >
                <span className="text-sm font-medium text-foreground">
                  {name}
                </span>
                <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
              </li>
            ))}
          </ul>
        </section>
      ))}
    </PageShell>
  );
}
