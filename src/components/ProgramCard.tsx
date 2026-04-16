import type { Program } from "@/data/programs";

export function ProgramCard({ program }: { program: Program }) {
  return (
    <div className="space-y-3">
      <div className="rounded-2xl bg-card p-5 shadow-card">
        <h2 className="text-2xl font-bold tracking-tight text-primary">
          {program.name}
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">{program.desc}</p>
      </div>
      <div className="rounded-2xl bg-card p-5 shadow-card">
        <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Instellingen
        </h3>
        <dl className="space-y-2">
          {Object.entries(program.settings).map(([k, v]) => (
            <div
              key={k}
              className="flex items-center justify-between border-b border-muted py-1.5 last:border-0"
            >
              <dt className="text-sm text-foreground">{k}</dt>
              <dd className="text-sm font-semibold text-secondary">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
