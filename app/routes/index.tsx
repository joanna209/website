import { LinkedinLogo, Envelope, Code } from "phosphor-react";
import React from "react";

export default function Index() {
  return (
    <div className="justify-center text-center font-sans">
      <div className="py-60">
        <h1 className="text-6xl font-extrabold text-slate-900">Joanna He</h1>
        <h2 className="pt-5 text-slate-600">
          Computer Science / Psychology @ UNSW
        </h2>
        <div className="flex items-center justify-center pt-5 space-x-3">
          <a
            href="https://www.linkedin.com/in/joannaahe/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinLogo size={32} color="#818cf8" />
          </a>
          <a
            href="mailto:joanna.he3@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Envelope size={32} color="#818cf8" />
          </a>
          <a
            href="https://www.github.com/joanna209"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Code size={32} color="#818cf8" />
          </a>
        </div>
      </div>
    </div>
  );
}
