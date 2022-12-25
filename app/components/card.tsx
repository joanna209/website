/* eslint-disable jsx-a11y/anchor-has-content */
import { GithubLogo, Link } from "phosphor-react";
import React from "react";

interface Projects {
  name: string;
  link: string;
  github: string;
  description: string;
}

export default function ProjectCard(props: Projects) {
  return (
    <div className="bg-slate-50 rounded-lg py-5 px-4 md:w-1/4">
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <h2 className="text-3xl font-semibold text-slate-900 hover:text-indigo-400">
          {props.name}
        </h2>
      </a>
      <div className="flex items-center justify-center py-1 space-x-3">
        <a href={props.github} target="_blank" rel="noopener noreferrer">
          <GithubLogo size={20}></GithubLogo>
        </a>
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          <Link size={20}></Link>
        </a>
      </div>
      <p className="text-slate-600">{props.description}</p>
    </div>
  );
}
