export default function Hero() {
  return (
    <section className="max-w-4xl mx-auto px-6 pt-24 pb-20">
      {/* Status badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-400 text-xs font-mono mb-10">
        <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
        Open to MLE Internship &middot; Summer / Fall 2026
      </div>

      {/* Greeting */}
      <p className="text-zinc-500 text-lg font-mono mb-3">Hi, I&apos;m</p>

      {/* Name */}
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-50 font-mono leading-none mb-4">
        Karthik
        <br />
        Venugopal
      </h1>

      {/* Role */}
      <p className="text-xl md:text-2xl text-violet-400 font-mono font-medium mb-6">
        Machine Learning Engineer
      </p>

      {/* Bio */}
      <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl mb-2">
        MS CS student at USC building production ML systems &mdash; MLOps pipelines,
        LLM agents, and distributed infrastructure. Prior experience deploying ML
        models at Samsung Research and engineering scalable backend systems at
        Akamai Technologies.
      </p>
      <p className="text-zinc-600 text-sm font-mono mb-10">
        Los Angeles, CA &nbsp;&middot;&nbsp; GPA 3.74 / 4.00
      </p>

      {/* CTAs */}
      <div className="flex flex-wrap gap-3 mb-10">
        <a
          href="https://github.com/Karthikvenugopal"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-100 text-zinc-900 rounded-lg text-sm font-semibold hover:bg-white transition-colors"
        >
          GitHub <span className="text-zinc-500">↗</span>
        </a>
        <a
          href="https://linkedin.com/in/karthik-venugopal/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 border border-zinc-700 text-zinc-300 rounded-lg text-sm font-semibold hover:border-zinc-500 hover:text-zinc-100 transition-colors"
        >
          LinkedIn <span>↗</span>
        </a>
        <a
          href="mailto:kvenugop@usc.edu"
          className="inline-flex items-center gap-2 px-5 py-2.5 border border-zinc-700 text-zinc-300 rounded-lg text-sm font-semibold hover:border-zinc-500 hover:text-zinc-100 transition-colors"
        >
          Email
        </a>
      </div>
    </section>
  );
}
