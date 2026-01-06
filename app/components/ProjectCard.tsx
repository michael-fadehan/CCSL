import React from "react";
import Image from "next/image";

type Project = {
  id: string;
  title: string;
  location: string;
  summary: string;
  image: string;
  tags: string[];
};

export const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <article className="bg-white rounded-lg shadow overflow-hidden">
      <div className="relative h-48 w-full">
        <Image src={project.image} alt={project.title} fill style={{ objectFit: "cover" }} />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-[--color-heading]">{project.title}</h3>
        <div className="text-sm text-gray-500">{project.location}</div>
        <p className="text-sm text-gray-600 mt-2">{project.summary}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span key={t} className="text-xs bg-[--color-primary-light] text-[--color-primary] px-2 py-1 rounded">{t}</span>
          ))}
        </div>
      </div>
    </article>
  );
};


