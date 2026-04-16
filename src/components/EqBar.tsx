export function EqBar({ f, db }: { f: string; db: number }) {
  const pct = Math.min((Math.abs(db) / 12) * 50, 50);
  const positive = db >= 0;

  return (
    <div className="mb-2 flex items-center gap-3">
      <span className="w-9 text-right text-[11px] font-medium text-muted-foreground">
        {f}
      </span>
      <div className="relative h-1 flex-1 rounded-full bg-muted">
        <div
          className="absolute top-0 h-1 rounded-full"
          style={{
            left: positive ? "50%" : `${50 - pct}%`,
            width: `${pct}%`,
            backgroundColor: positive
              ? "var(--color-primary)"
              : "var(--color-muted-foreground)",
          }}
        />
        <div className="absolute -top-0.5 left-1/2 h-2 w-0.5 -translate-x-1/2 bg-background" />
      </div>
      <span
        className={`w-12 text-[11px] font-bold ${
          positive ? "text-primary" : "text-muted-foreground"
        }`}
      >
        {positive ? "+" : ""}
        {db}dB
      </span>
    </div>
  );
}
