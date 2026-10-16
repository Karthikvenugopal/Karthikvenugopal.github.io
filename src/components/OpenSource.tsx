import SectionHeader from "./SectionHeader";

export default function OpenSource() {
  return (
    <section id="open-source">
      <SectionHeader index="03" total="05" label="Open Source" />
      <article className="grid grid-cols-12 gap-x-4 md:gap-x-8 gap-y-4 py-8 md:py-10 border-y border-line">
        <div className="col-span-12 md:col-span-3 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted">
          <p className="text-accent">Merged</p>
          <time dateTime="2026-10-16T01:36:59Z" className="mt-1 block">
            Oct 15, 2026
          </time>
        </div>

        <div className="col-span-12 md:col-span-9">
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3">
            <h3 className="text-2xl md:text-4xl font-semibold tracking-[-0.02em] leading-[1.05]">
              Mozilla Bugbug
            </h3>
            <a
              href="https://github.com/mozilla/bugbug/pull/6268"
              target="_blank"
              rel="noopener noreferrer"
              className="link-rule pb-1 inline-block font-mono text-[0.7rem] uppercase tracking-[0.18em] whitespace-nowrap"
            >
              PR #6268 ↗
            </a>
          </div>
          <p className="mt-3 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-muted leading-relaxed">
            Python · Machine Learning Tooling
          </p>
          <p className="mt-5 max-w-3xl text-sm md:text-base leading-relaxed text-ink/85">
            Contributed to Mozilla&rsquo;s machine learning platform for software
            engineering by refactoring the landings risk report generator. Moved
            its Bugzilla lookup map into a shared cached property, simplifying
            four method interfaces while preserving existing bug filtering.
          </p>
        </div>
      </article>
    </section>
  );
}
