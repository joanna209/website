import React from "react";
import ProjectCard from "../components/card";
import Project from "../data/projects";

export default function Projects() {
  return (
    <div className="justify-center text-center font-sans">
      <div className="py-40">
        <h1 className="text-5xl font-extrabold text-slate-900 pb-5">
          Projects
        </h1>
        <p className="py-2 text-slate-600 pb-10 px-4">
          Below are some of the projects that I've worked on:
        </p>
        <div className="flex flex-col gap-y-4 justify-center align-center md:flex-row md:gap-x-4 basis-1/3">
          {Project.map((proj) => {
            return (
              <ProjectCard
                key={proj.id}
                name={proj.name}
                description={proj.description}
                github={proj.github}
                link={proj.link}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
