import React from "react";
import { projects } from "../../data/projects";
import { ProjectCard } from "./ProjectCard";

export const ProjectsGrid: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container">
        <h2 className="section-heading">Selected Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
};


