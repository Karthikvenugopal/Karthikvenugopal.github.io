export default function SectionHeader({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <h2 className="text-base font-mono text-zinc-100 shrink-0">
        <span className="text-violet-400">~/</span>
        {label}
      </h2>
      <div className="h-px bg-zinc-800 flex-1" />
    </div>
  );
}
