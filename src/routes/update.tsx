import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { updates } from "@/data/resources";

export const Route = createFileRoute("/update")({
  head: () => ({
    meta: [
      { title: "Firmware Update — detect.nl Companion" },
      {
        name: "description",
        content:
          "Tips en links om je XP DEUS II RC en koptelefoon firmware bij te werken.",
      },
      { property: "og:title", content: "Firmware Update — detect.nl Companion" },
      {
        property: "og:description",
        content: "Update RC, WS6 en WSA II/XL met de juiste stappen.",
      },
    ],
  }),
  component: UpdatePage,
});

function UpdatePage() {
  return (
    <PageShell title="Firmware Update">
      <div className="mb-3 mt-1 rounded-2xl border border-primary/30 bg-accent px-4 py-3">
        <div className="mb-2 text-[13px] font-bold text-primary">
          ⚠ Tips voor het updaten
        </div>
        <ul className="list-disc space-y-1 pl-5 text-[13px] leading-relaxed text-foreground/80">
          <li>Gebruik de online updater.</li>
          <li>
            Sluit de USB-kabel van RC of headset pas als laatste aan op je computer.
          </li>
          <li>
            Bij de headset: gebruik de losse kabel — niet de drievoudige.
          </li>
        </ul>
      </div>

      <div className="mb-2 px-1 text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
        Kies apparaat om te updaten
      </div>
      <ul className="overflow-hidden rounded-2xl border border-border bg-card">
        {updates.map((u, i) => (
          <li
            key={u.name}
            className={`flex cursor-pointer items-center justify-between px-4 py-3.5 transition-colors hover:bg-muted ${
              i > 0 ? "border-t border-border" : ""
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-lg">
                {u.icon}
              </div>
              <div>
                <div className="text-sm font-medium text-foreground">{u.name}</div>
                <div className="mt-0.5 text-[11px] text-muted-foreground">
                  {u.sub}
                </div>
              </div>
            </div>
            <ExternalLink className="h-4 w-4 text-primary" />
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-primary bg-card px-4 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
      >
        Open DEUS II V3.1 Update Pagina
        <ExternalLink className="h-4 w-4" />
      </button>
    </PageShell>
  );
}
