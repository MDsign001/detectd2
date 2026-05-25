import { Link } from "@tanstack/react-router";

type TileProps = {
  to: "/manuals" | "/update" | "/programs" | "/tips" | "/links" | "/faq";
  emoji: string;
  label: string;
  desc: string;
};

export function Tile({ to, emoji, label, desc }: TileProps) {
  return (
    <Link
      to={to}
      className="group flex flex-col gap-3 rounded-2xl border border-border bg-card p-4 transition-colors hover:border-primary"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-xl">
        <span aria-hidden>{emoji}</span>
      </div>
      <div>
        <div className="font-display text-sm font-bold text-foreground group-hover:text-primary">
          {label}
        </div>
        <div className="mt-1 text-xs leading-snug text-muted-foreground">
          {desc}
        </div>
      </div>
    </Link>
  );
}
