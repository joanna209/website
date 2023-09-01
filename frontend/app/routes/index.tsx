import { useLoaderData } from "@remix-run/react";
import { LinkedinLogo, Envelope, Code } from "phosphor-react";
import React from "react";
import { socialsQuery } from "../lib/api";
import { getClient } from "../lib/sanity";

export const loader = async () => {
  const socials = await getClient().fetch(socialsQuery);
  return { socials };
};

export default function Index() {
  const { socials } = useLoaderData();

  return (
    <div className="flex justify-center items-center text-center font-sans py-18">
      <div className="flex flex-col gap-3 py-20">
        <img src="/favicon.ico" alt="profile pfp"className="w-1/2 mx-auto"/>
        <h1 className="text-6xl font-extrabold text-slate-900">Joanna He</h1>
        <h2 className="pt-5 text-slate-600">
          Computer Science / Psychology student @ UNSW
        </h2>
        <div className="flex items-center justify-center pt-5 space-x-3">
          <a
            href={socials[0].LinkedIn}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinLogo size={32} color="#818cf8" />
          </a>
          <a
            href={`mailto:${socials[0].email}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Envelope size={32} color="#818cf8" />
          </a>
          <a
            href={socials[0].GitHub}
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
