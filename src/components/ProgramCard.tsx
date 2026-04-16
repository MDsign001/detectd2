import type { Program } from "@/data/programs";
import { EqBar } from "./EqBar";

function ParamGrid({ entries }: { entries: [string, string][] }) {
  return (
    <div className="grid grid-cols-2 gap-1.5">
      {entries.map(([k, v]) => (
        <div
          key={k}
          className="rounded-xl border border-border bg-background px-3 py-2"
        >
          <div className="text-[10px] text-muted-foreground">{k}</div>
          <div className="font-display text-sm font-bold text-foreground">
            {v}
          </div>
        </div>
      ))}
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-2 mt-4 text-[10px] font-bold uppercase tracking-[0.15em] text-primary first:mt-0">
      {children}
    </div>
  );
}

export function ProgramCard({ program }: { program: Program }) {
  return (
    <article className="space-y-0">
      <header className="relative rounded-2xl border-b-0 bg-gradient-to-br from-muted to-background p-5">
        <span className="absolute right-4 top-4 rounded-full bg-primary px-2.5 py-1 text-[10px] font-extrabold text-primary-foreground">
          {program.version}
        </span>
        <div className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
          {program.tagline}
        </div>
        <h2 className="font-display text-3xl font-extrabold leading-none text-primary">
          {program.name}
        </h2>
        {program.description && (
          <p className="mt-3 rounded-xl bg-background p-3 text-[13px] leading-relaxed text-foreground/80">
            {program.description}
          </p>
        )}
      </header>

      <div className="px-1 pt-3">
        {program.settings && Object.keys(program.settings).length > 0 && (
          <>
            <SectionLabel>⚙ Instellingen</SectionLabel>
            <ParamGrid entries={Object.entries(program.settings)} />
          </>
        )}

        {program.audio && Object.keys(program.audio).length > 0 && (
          <>
            <SectionLabel>♪ Audio</SectionLabel>
            <ParamGrid entries={Object.entries(program.audio)} />
          </>
        )}

        {program.eq && program.eq.length > 0 && (
          <>
            <SectionLabel>◈ Equalizer</SectionLabel>
            <div>
              {program.eq.map((e) => (
                <EqBar key={e.f} f={e.f} db={e.db} />
              ))}
            </div>
          </>
        )}

        {program.tones && program.tones.length > 0 && (
          <>
            <SectionLabel>≡ Toon Breaks</SectionLabel>
            <div className="space-y-1.5">
              {program.tones.map((t) => (
                <div
                  key={t.n}
                  className="flex items-center gap-2 rounded-xl border border-border bg-background px-2.5 py-2"
                >
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-primary text-[10px] font-extrabold text-primary-foreground">
                    {t.n}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {t.id && (
                      <span className="rounded bg-muted px-2 py-0.5 text-[11px] text-foreground/70">
                        ID {t.id}
                      </span>
                    )}
                    {t.hz && (
                      <span className="rounded bg-muted px-2 py-0.5 text-[11px] text-foreground/70">
                        {t.hz}
                      </span>
                    )}
                    <span className="rounded bg-muted px-2 py-0.5 text-[11px] text-foreground/70">
                      Vol {t.vol}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {(program.notes?.length || program.motto) && (
          <div className="mt-4 rounded-xl border border-border border-l-[3px] border-l-primary bg-muted px-4 py-3">
            {program.notes?.map((n, i) => (
              <p
                key={i}
                className="mb-1 text-[12px] leading-relaxed text-foreground/75"
              >
                {n}
              </p>
            ))}
            {program.motto && (
              <p className="mt-2 border-t border-border pt-2 text-[11px] italic text-muted-foreground">
                {program.motto}
              </p>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
