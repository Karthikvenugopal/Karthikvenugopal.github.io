export default function Hero() {
  return (
    <section className="mx-auto max-w-screen-xl px-6 md:px-12 lg:px-16 pt-14 md:pt-20 pb-16 md:pb-24">
      {/* Availability */}
      <div className="flex items-center gap-3 font-mono text-[0.7rem] uppercase tracking-[0.25em] text-muted mb-12 md:mb-20">
        <span className="inline-block w-2 h-2 rounded-full bg-accent animate-pulse" />
        Open to Full-Time ML/NLP Roles — Starting Early 2027
      </div>

      {/* Name — oversized */}
      <h1 className="font-semibold tracking-[-0.03em] leading-[0.84] text-[clamp(3.25rem,12vw,11rem)]">
        Karthik
        <br />
        Venugopal
      </h1>

      {/* Lower band: role + meta on the left, bio + links on the right */}
      <div className="mt-12 md:mt-20 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 border-t border-ink pt-8 md:pt-10">
        <div className="md:col-span-5">
          <p className="text-2xl md:text-3xl font-medium tracking-tight leading-[1.05]">
            Machine Learning
            <br />
            <span className="text-accent">/</span> NLP Engineer
          </p>
          <div className="mt-7 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted leading-relaxed">
            <p>Los Angeles, CA</p>
            <p>USC · MS Computer Science</p>
            <p>GPA 3.77 / 4.00</p>
          </div>
        </div>

        <div className="md:col-span-7">
          <p className="text-lg md:text-xl leading-relaxed max-w-2xl text-ink/90">
            MS CS student at USC building production ML systems — MLOps pipelines,
            LLM agents, and distributed infrastructure. Prior experience deploying
            ML models at Samsung Research and engineering scalable backend systems
            at Akamai Technologies.
          </p>

          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 font-mono text-[0.7rem] uppercase tracking-[0.18em]">
            <a
              href="https://github.com/Karthikvenugopal"
              target="_blank"
              rel="noopener noreferrer"
              className="link-rule pb-1"
            >
              GitHub ↗
            </a>
            <a
              href="https://linkedin.com/in/karthik-venugopal/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-rule pb-1"
            >
              LinkedIn ↗
            </a>
            <a href="mailto:kvenugop@usc.edu" className="link-rule pb-1">
              Email ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
