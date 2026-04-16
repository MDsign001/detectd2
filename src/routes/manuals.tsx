import { createFileRoute } from "@tanstack/react-router";
import { Download } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { manuals } from "@/data/resources";

export const Route = createFileRoute("/manuals")({
  head: () => ({
    meta: [
      { title: "Handleidingen — detect.nl Companion" },
      {
        name: "description",
        content:
          "Alle handleidingen voor je XP DEUS II: Remote Control, draadloze koptelefoon en pinpointer.",
      },
      { property: "og:title", content: "Handleidingen — detect.nl Companion" },
      {
        property: "og:description",
        content:
          "Documentatie voor RC, WS6 en MI-6/4 — altijd binnen handbereik.",
      },
    ],
  }),
  component: ManualsPage,
});

function ManualsPage() {
  return (
    <PageShell title="Handleidingen">
      <div className="mb-2 mt-1 px-1 text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
        Documentatie
      </div>
      <ul className="overflow-hidden rounded-2xl border border-border bg-card">
        {manuals.map((m, i) => (
          <li
            key={m.name}
            className={`flex cursor-pointer items-center justify-between px-4 py-3.5 transition-colors hover:bg-muted ${
              i > 0 ? "border-t border-border" : ""
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-lg">
                {m.icon}
              </div>
              <div>
                <div className="text-sm font-medium text-foreground">{m.name}</div>
                <div className="mt-0.5 text-[11px] text-muted-foreground">
                  {m.sub}
                </div>
              </div>
            </div>
            <Download className="h-4 w-4 text-primary" />
          </li>
        ))}
      </ul>

      <p className="mt-5 px-2 text-center text-xs italic text-muted-foreground">
        Lezen voor het zoeken — graven na het lezen.
      </p>
    </PageShell>
  );
}
