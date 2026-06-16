import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

export default function Home() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      {/* Masthead */}
      <header className="sticky top-0 z-50 bg-paper/85 backdrop-blur-sm border-b border-ink">
        <div className="mx-auto max-w-screen-xl px-6 md:px-12 lg:px-16 h-12 flex items-center justify-between">
          <a
            href="#"
            className="font-mono text-[0.7rem] uppercase tracking-[0.22em] hover:text-accent transition-colors"
          >
            Karthik Venugopal
          </a>
          <nav className="hidden sm:flex items-center gap-6 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted">
            <a href="#projects" className="hover:text-accent transition-colors">Work</a>
            <a href="#experience" className="hover:text-accent transition-colors">Experience</a>
            <a href="#education" className="hover:text-accent transition-colors">Education</a>
            <a href="mailto:kvenugop@usc.edu" className="hover:text-accent transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      <Hero />

      <main className="mx-auto max-w-screen-xl px-6 md:px-12 lg:px-16 pb-28 space-y-24 md:space-y-32">
        <Skills />
        <Projects />
        <Experience />
        <Education />
      </main>

      {/* Colophon */}
      <footer className="border-t-2 border-ink">
        <div className="mx-auto max-w-screen-xl px-6 md:px-12 lg:px-16 py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8">
            <p className="text-3xl md:text-5xl font-semibold tracking-[-0.02em] leading-[1.05]">
              Let&rsquo;s build something.
            </p>
            <a
              href="mailto:kvenugop@usc.edu"
              className="link-rule pb-1 inline-block mt-5 font-mono text-xs uppercase tracking-[0.18em]"
            >
              kvenugop@usc.edu ↗
            </a>
          </div>
          <div className="md:col-span-4 md:text-right font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted leading-relaxed self-end">
            <p className="text-ink/70">Karthik Venugopal</p>
            <p>Los Angeles, CA</p>
            <p className="mt-4">Set in Geist</p>
            <p>Built with Next.js</p>
            <p className="mt-4">© 2026</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
