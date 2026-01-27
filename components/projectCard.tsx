import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tags, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex w-full flex-col justify-between gap-2 rounded-md border border-neutral-700 p-4
         transition-transform duration-300 hover:-translate-y-5px hover:border-primary"
    >
 
    <div className="flex flex-col gap-2">
        <p className="text-neutral-100 text-16px truncate">{title}</p>
        <p className="md:line-clamp-2">{description}</p>
        <div className="flex gap-1 pt-1 flex-wrap">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-white bg-op-3 text-neutral-400 px-2 py-1 rounded-lg"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;


