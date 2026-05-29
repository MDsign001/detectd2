import { createFileRoute } from "@tanstack/react-router";
import { Fragment, useMemo, useState, type ReactNode } from "react";
import { Search } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { faq, type FaqEntry } from "@/data/faq";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Veelgestelde vragen — detect.nl Companion" },
      {
        name: "description",
        content:
          "Twintig veelgestelde vragen over de XP Deus II: voor beginners, vergelijking, goud, batterijduur, accessoires en meer.",
      },
    ],
  }),
  component: FaqPage,
});

function entryHaystack(item: FaqEntry): string {
  const parts = [item.question, item.subtitle, item.intro, item.closing ?? ""];
  item.sections?.forEach((s) => {
    parts.push(s.heading, s.paragraph ?? "", ...(s.bullets ?? []));
  });
  if (item.table) {
    parts.push(...item.table.headers, ...item.table.rows.flat());
  }
  return parts.join(" ").toLowerCase();
}

// Render text containing [label](url) as inline links.
function renderInline(text: string): ReactNode {
  const parts: ReactNode[] = [];
  const regex = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let key = 0;
  while ((m = regex.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    parts.push(
      <a
        key={key++}
        href={m[2]}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary underline underline-offset-2 hover:text-secondary"
      >
        {m[1]}
      </a>,
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts.map((p, i) => <Fragment key={i}>{p}</Fragment>);
}

function FaqPage() {
  const [query, setQuery] = useState("");
  const trimmed = query.trim().toLowerCase();
  const filtered = useMemo(() => {
    const indexed = faq.map((item, i) => ({ item, number: i + 1 }));
    if (!trimmed) return indexed;
    return indexed.filter(({ item }) => entryHaystack(item).includes(trimmed));
  }, [trimmed]);

  return (
    <PageShell title="FAQ">
      <section className="rounded-2xl border border-border bg-card px-4 py-4 shadow-card">
        <h1 className="font-display text-2xl font-extrabold text-primary">
          Veelgestelde vragen
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Alles wat je wilt weten over de XP Deus II — kort, eerlijk en
          to-the-point.
        </p>
        <div className="relative mt-3">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Zoek in vragen en antwoorden..."
            className="pl-9"
            aria-label="Zoek in FAQ"
          />
        </div>
        <p className="mt-2 text-xs text-muted-foreground">
          {filtered.length} van {faq.length} {filtered.length === 1 ? "vraag" : "vragen"}
        </p>
      </section>

      {filtered.length === 0 ? (
        <div className="mt-4 rounded-2xl border border-border bg-card px-4 py-6 text-center text-sm text-muted-foreground shadow-card">
          Geen vragen gevonden voor "{query}".
        </div>
      ) : (
        <Accordion type="single" collapsible className="mt-4 space-y-2">
          {filtered.map(({ item, number }) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="rounded-2xl border border-border bg-card px-4 shadow-card"
            >
              <AccordionTrigger className="text-left hover:no-underline">
                <div className="flex gap-3">
                  <span className="shrink-0 font-display text-base font-bold text-primary tabular-nums">
                    {String(number).padStart(2, "0")}
                  </span>
                  <div>
                    <div className="text-base font-semibold text-foreground">
                      {item.question}
                    </div>
                    <div className="mt-1 text-xs font-normal text-muted-foreground">
                      {item.subtitle}
                    </div>
                  </div>
                </div>
              </AccordionTrigger>

            <AccordionContent className="space-y-4 text-sm leading-relaxed text-foreground/90">
              <p>{renderInline(item.intro)}</p>

              {item.table && (
                <div className="overflow-x-auto rounded-xl border border-border">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-muted text-foreground">
                      <tr>
                        {item.table.headers.map((h) => (
                          <th key={h} className="px-3 py-2 font-semibold">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {item.table.rows.map((row, i) => (
                        <tr
                          key={i}
                          className="border-t border-border odd:bg-background even:bg-muted/40"
                        >
                          {row.map((c, j) => (
                            <td key={j} className="px-3 py-2 align-top">
                              {renderInline(c)}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {item.sections?.map((sec) => (
                <div key={sec.heading}>
                  <h3 className="mb-1 text-sm font-semibold text-primary">
                    {sec.heading}
                  </h3>
                  {sec.paragraph && <p>{renderInline(sec.paragraph)}</p>}
                  {sec.bullets && (
                    <ul className="ml-4 list-disc space-y-1">
                      {sec.bullets.map((b) => (
                        <li key={b}>{renderInline(b)}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              {item.closing && <p>{renderInline(item.closing)}</p>}

              <div className="rounded-xl border border-border bg-muted px-3 py-2 text-xs text-muted-foreground">
                <span className="font-semibold text-foreground">
                  {item.source.label}:
                </span>{" "}
                {item.source.text}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </PageShell>
  );
}
