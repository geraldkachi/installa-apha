import React from "react";
import { PortableText } from "@portabletext/react";

const components = {
  types: {},
  block: {
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold my-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="md:text-4xl text-3xl font-bold my-4">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="md:text-3xl text-2xl font-bold my-4">{children}</h3>
    ),
    normal: ({ children }) => (
      <p className="my-2 md:text-lg text-base text-justify">{children}</p>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc ml-10">{children}</ul>,
    number: ({ children }) => (
      <ol className="list-decimal ml-10">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
};

const Privacy = ({ privacyPage }) => {
  return (
    <section className="md:max-w-3xl mx-auto md:pt-[200px] md:pb-32 pt-44 pb-20 px-5">
      <div className="text-center md:max-w-xl mx-auto mb-20">
        <h3 className="md:text-[52px] text-3xl pb-5 font-semibold">
          {privacyPage?.heading}
        </h3>
        <p className="font-bold">{privacyPage?.lastUpdated}</p>
        <p>{privacyPage?.privacyDesc}</p>
      </div>
      <PortableText value={privacyPage?.content} components={components} />
    </section>
  );
};

export default Privacy;
