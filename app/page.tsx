import Hero from "../components/hero";
import ProjectsSection from "../components/projectsSection";
import "./output.css";

export default function HomePage() {
  const year = new Date().getFullYear();

  return (
    <div className="bg-background pretty-scrollbar font-sans mx-auto min-h-screen max-w-[900px] flex flex-col px-6 py-8 md:gap-18 md:py-14 text-neutral-400 text-sm relative">
      <header className="flex justify-between items-center">
        <span> {year} Abdullahi's portfolio</span>
        <span className="flex gap-2">
          <a href="https://github.com/amj28" target="_blank" rel="noopener noreferrer">
            <img src="/github.png" alt="GitHub" className="w-[1.25rem] h-[1.25rem]" />
          </a>
          <a href="https://www.linkedin.com/in/abdullahimohamed28/" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin.png" alt="LinkedIn" className="w-[1.25rem] h-[1.25rem]" />
          </a>
        </span>
      </header>

      <main className="flex flex-col gap-20">
        <Hero />
        <ProjectsSection />
      </main>
    </div>
  );
}



