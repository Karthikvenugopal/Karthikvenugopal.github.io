import Hero from "@/components/Hero";
import ProjectsGrid from "@/components/ProjectsGrid";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-accent-primary selection:text-black">
      <Hero />
      <ProjectsGrid />
      <Experience />
      
      <footer className="py-8 text-center text-xs font-mono text-gray-700">
        <p>SYSTEM_STATUS: ONLINE | TERMINAL_V2.0.4</p>
      </footer>
    </main>
  );
}
