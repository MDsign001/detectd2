import { Link } from "@tanstack/react-router";

type TileProps = {
  to: "/programs" | "/tips";
  label: string;
  emoji: string;
  hint: string;
};

export function Tile({ to, label, emoji, hint }: TileProps) {
  return (
    <Link
      to={to}
      className="group flex flex-col items-center justify-center gap-2 rounded-2xl bg-muted p-6 text-center transition-colors hover:bg-primary hover:text-primary-foreground"
    >
      <span className="text-3xl" aria-hidden>
        {emoji}
      </span>
      <span className="text-base font-semibold">{label}</span>
      <span className="text-xs text-muted-foreground group-hover:text-primary-foreground/80">
        {hint}
      </span>
    </Link>
  );
}
