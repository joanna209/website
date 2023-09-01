import { GithubLogo, Link } from "phosphor-react";
import React from "react";

type Projects = {
  name: string;
  link: string;
  github: string;
  description: string;
  technologies: string[];
};

export default function ProjectCard(post: Projects) {
  return (
    <div className="bg-slate-50 rounded-lg py-5 px-4 md:w-1/4">
      <a href={post.link} target="_blank" rel="noopener noreferrer">
        <h2 className="text-3xl font-semibold text-slate-900 hover:text-indigo-400">
          {post.name}
        </h2>
      </a>
      <div className="flex flex-wrap items-center justify-center py-1 space-x-3 gap-1">
        {post.technologies.map((tech, index) => (
          <span
            key={index}
            className="inline-flex items-center rounded-md bg-indigo-500 px-2 py-1 text-xs font-medium text-white"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-center py-1 space-x-3">
        <a href={post.github} target="_blank" rel="noopener noreferrer">
          <GithubLogo size={20}></GithubLogo>
        </a>
        <a href={post.link} target="_blank" rel="noopener noreferrer">
          {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
          <Link size={20}></Link>
        </a>
      </div>
      <p className="text-slate-600">{post.description}</p>
    </div>
  );
}
