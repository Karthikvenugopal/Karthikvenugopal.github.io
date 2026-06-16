export default function SectionHeader({
  index,
  total,
  label,
}: {
  index: string;
  total: string;
  label: string;
}) {
  return (
    <header className="mb-10 md:mb-14 border-t-2 border-ink pt-4">
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="font-mono text-[0.7rem] sm:text-xs uppercase tracking-[0.3em]">
          <span className="text-accent">{index}</span>
          <span className="text-line mx-2">/</span>
          {label}
        </h2>
        <span className="font-mono text-[0.7rem] sm:text-xs text-muted tabular-nums shrink-0">
          {index} — {total}
        </span>
      </div>
    </header>
  );
}
