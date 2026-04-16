import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { ProgramCard } from "@/components/ProgramCard";
import { programs } from "@/data/programs";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programma's — detect.nl Companion" },
      {
        name: "description",
        content:
          "Negen zorgvuldig samengestelde zoekprogramma's voor de XP DEUS II — met instellingen, audio, EQ en tonen.",
      },
      { property: "og:title", content: "Programma's — detect.nl Companion" },
      {
        property: "og:description",
        content: "Zoekprogramma's en instellingen voor jouw metaaldetector.",
      },
    ],
  }),
  component: ProgramsPage,
});

function ProgramsPage() {
  const [index, setIndex] = useState(0);
  const program = programs[index];
  const atStart = index === 0;
  const atEnd = index === programs.length - 1;

  return (
    <PageShell title="Programma's" hideFooter>
      <ProgramCard program={program} />

      <nav className="sticky bottom-0 -mx-4 mt-4 flex items-center justify-between border-t border-border bg-background/95 px-5 py-3 backdrop-blur">
        <button
          type="button"
          onClick={() => setIndex((i) => Math.max(0, i - 1))}
          disabled={atStart}
          className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-[13px] font-semibold text-foreground transition-colors hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:border-transparent disabled:bg-transparent disabled:text-muted-foreground/50"
        >
          <ChevronLeft className="h-4 w-4" />
          Vorige
        </button>
        <span className="text-xs font-semibold text-muted-foreground">
          <span className="text-foreground">{index + 1}</span> / {programs.length}
        </span>
        <button
          type="button"
          onClick={() => setIndex((i) => Math.min(programs.length - 1, i + 1))}
          disabled={atEnd}
          className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-[13px] font-semibold text-foreground transition-colors hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:border-transparent disabled:bg-transparent disabled:text-muted-foreground/50"
        >
          Volgende
          <ChevronRight className="h-4 w-4" />
        </button>
      </nav>
    </PageShell>
  );
}
