import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AppHeader } from "@/components/AppHeader";
import { AppFooter } from "@/components/AppFooter";
import { ProgramCard } from "@/components/ProgramCard";
import { Button } from "@/components/ui/button";
import { programs } from "@/data/programs";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programma's — detect.nl Companion" },
      {
        name: "description",
        content:
          "Bekijk en blader door zoekprogramma's met instellingen voor gevoeligheid, reactietijd en discriminatie.",
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
    <div className="mx-auto flex min-h-screen max-w-md flex-col bg-background">
      <AppHeader showBack />
      <main className="flex-1 px-3 py-4">
        <div className="mb-3 flex items-center justify-between px-1">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Programma {index + 1} van {programs.length}
          </p>
        </div>

        <ProgramCard program={program} />

        <div className="mt-4 flex gap-3">
          <Button
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            disabled={atStart}
            className="flex-1 hover:bg-secondary"
          >
            <ChevronLeft className="h-4 w-4" />
            Vorige
          </Button>
          <Button
            onClick={() => setIndex((i) => Math.min(programs.length - 1, i + 1))}
            disabled={atEnd}
            className="flex-1 hover:bg-secondary"
          >
            Volgende
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <p className="mt-4 px-2 text-center text-xs italic text-muted-foreground">
          Tip: het beste programma is dat ene waar je net niet aan dacht.
        </p>
      </main>
      <AppFooter />
    </div>
  );
}
