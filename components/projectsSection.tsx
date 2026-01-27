import React from "react";
import ProjectCard from "./projectCard";

interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

const projects: Project[] = [
  {
    title: "Bitmapper",
    description: "Tool to easily draw/make bitmaps",
    tags: ["Typescript", "Nextjs"],
    link: "https://amj28.github.io/bitmapper",
  },
  {
    title: "Biquadris",
    description: "A clone/remaking of tetris, following OOP principles and in C++",
    tags: ["C++", "OOP", "school project"],
    link: "https://github.com/amj28/",
  },
  {
    title: "Bottle",
    description: "bot that plays the official wordle game",
    tags: ["C++", "python", "Selenium", "pybind11"],
    link: "https://github.com/amj28/bottle",
  },
  // Add more projects here
];

const ProjectsSection: React.FC = () => {
  return (
    <section className="flex flex-col gap-4">
      <header className="flex justify-between items-center">
        <h2 className="text-lg text-neutral-100">Some of my projects</h2>
        <span>
          <a
            href="https://github.com/amj28"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-100 cursor-pointer underline decoration-dashed underline-offset-8 lh-loose transition"
          >
            See more on GitHub
          </a>
        </span>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;


