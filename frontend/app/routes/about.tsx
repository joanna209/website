import React from "react";
import { getClient } from "../lib/sanity";
import { aboutQuery } from "../lib/api";
import { useLoaderData } from "@remix-run/react";

export const loader = async () => {
  const about = await getClient().fetch(aboutQuery);
  return { about };
};

export default function About() {
  const { about } = useLoaderData();

  return (
    <div className="justify-center text-center font-sans w-2/3 mx-auto">
      <div className="py-20">
        <h1 className="text-5xl font-extrabold text-slate-900 pb-5">About</h1>
        <p className="py-2 px-4 text-slate-600 break-normal whitespace-pre-line inline">
          {about[0].body}
        </p>
      </div>
    </div>
  );
}
