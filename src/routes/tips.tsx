import { createFileRoute } from "@tanstack/react-router";
import { AppHeader } from "@/components/AppHeader";
import { AppFooter } from "@/components/AppFooter";
import { tips } from "@/data/tips";

export const Route = createFileRoute("/tips")({
  head: () => ({
    meta: [
      { title: "Tips — detect.nl Companion" },
      {
        name: "description",
        content:
          "Pakkende, motiverende en soms komische tips voor metaaldetectoristen. Voor onderweg en thuis.",
      },
      { property: "og:title", content: "Tips — detect.nl Companion" },
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
    <div className="mx-auto flex min-h-screen max-w-md flex-col bg-background">
      <AppHeader showBack />
      <main className="flex-1 px-3 py-4">
        <header className="mb-4 px-2">
          <h1 className="text-2xl font-bold text-foreground">Tips</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Wijsheid uit de klei — gratis voor wie luistert.
          </p>
        </header>

        <ul className="space-y-3">
          {tips.map((tip, i) => (
            <li
              key={i}
              className="rounded-2xl bg-card p-4 shadow-card"
            >
              <div className="flex gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {i + 1}
                </span>
                <p className="pt-1 text-sm text-foreground">{tip}</p>
              </div>
            </li>
          ))}
        </ul>
      </main>
      <AppFooter />
    </div>
  );
}
