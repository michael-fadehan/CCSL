import React from "react";
import { ProjectsGrid } from "../components/ProjectsGrid";

export default function ProjectsPage() {
  return (
    <>
      <header className="py-12 bg-[--color-primary] text-white">
        <div className="container">
          <h1 className="text-3xl font-bold">Projects</h1>
          <p className="text-white/90 mt-2">A selection of our recent work across sectors.</p>
        </div>
      </header>
      <main>
        <ProjectsGrid />
      </main>
    </>
  );
}


