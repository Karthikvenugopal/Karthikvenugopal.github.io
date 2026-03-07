import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <div className="max-w-4xl mx-auto px-6 pb-24 space-y-24">
        <Skills />
        <Projects />
        <Experience />
        <Education />
      </div>
      <footer className="border-t border-zinc-800 py-8 text-center text-sm text-zinc-600">
        Karthik Venugopal &middot; Los Angeles, CA &middot; kvenugop@usc.edu
      </footer>
    </div>
  );
}
