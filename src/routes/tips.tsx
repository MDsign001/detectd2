import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { tips } from "@/data/tips";

export const Route = createFileRoute("/tips")({
  head: () => ({
    meta: [
      { title: "Tips & Advies — detect.nl Companion" },
      {
        name: "description",
        content:
          "Praktische, motiverende en soms komische tips voor metaaldetectoristen — voor onderweg en thuis.",
      },
      { property: "og:title", content: "Tips & Advies — detect.nl Companion" },
      {
        property: "og:description",
        content: "Wijsheid uit de klei, voor elke schatzoeker.",
      },
    ],
  }),
  component: TipsPage,
});

function TipsPage() {
  return (
    <PageShell title="Tips & Advies">
      <div className="mb-2 px-1 text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
        Algemeen detect-advies
      </div>
      <ul className="space-y-2">
        {tips.map((tip) => (
          <li
            key={tip.title}
            className="rounded-2xl border border-border bg-card px-4 py-3.5"
          >
            <div className="font-display text-sm font-bold text-primary">
              {tip.title}
            </div>
            <p className="mt-1 text-[13px] leading-relaxed text-foreground/80">
              {tip.body}
            </p>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
