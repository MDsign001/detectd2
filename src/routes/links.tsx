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
            {items.map((item) => (
              <li key={item.name}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl border border-border bg-card px-4 py-3 transition-colors hover:border-primary"
                >
                  <span className="flex flex-col">
                    <span className="text-sm font-medium text-foreground">
                      {item.name}
                    </span>
                    {item.description && (
                      <span className="text-xs text-muted-foreground">
                        {item.description}
                      </span>
                    )}
                  </span>
                  <ExternalLink className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                </a>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </PageShell>
  );
}
