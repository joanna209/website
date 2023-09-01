import React from "react";
import ProjectCard from "../components/card";
import { useLoaderData } from "@remix-run/react";
import { projectsQuery } from "../lib/api";
import { getClient } from "../lib/sanity";

export const loader = async () => {
  const projects = await getClient().fetch(projectsQuery);
  return { projects };
};

export default function Projects() {
  const { projects } = useLoaderData();

  return (
    <div className="justify-center text-center font-sans">
      <div className="py-20">
        <h1 className="text-5xl font-extrabold text-slate-900 pb-5">
          Projects
        </h1>
        <p className="py-2 text-slate-600 pb-10 px-4">
          Below are some of the projects that I've worked on:
        </p>
        <div className="flex flex-col gap-y-4 justify-center align-center md:flex-row md:gap-x-4 basis-1/3">
          {projects?.length > 0 ? (
            projects.map((proj) => (
              <ProjectCard
                key={proj._id}
                name={proj.title}
                description={proj.description}
                github={proj.github}
                link={proj.link}
                technologies={proj.technologies}
              />
            ))
          ) : (
            <div className="p-4 text-red-500">No projects found</div>
          )}
        </div>
      </div>
    </div>
  );
}
