import { urlFor } from "@/sanity/utils";
import Image from "next/image";
import React from "react";

const ImpactInfo = ({ impactPage }) => {
  return (
    <section className="gradient md:px-20 px-5 md:py-24 py-20 text-white">
      <div className="md:flex justify-between">
        <h3 className="md:text-[52px] text-4xl md:mb-0 mb-10 md:max-w-xs md:w-[30%]">
          Our Impact
        </h3>
        <p className="md:w-[70%] md:text-lg">{impactPage?.impactText}</p>
      </div>
      <div className="flex md:flex-row flex-col md:space-x-10 md:space-y-0 space-y-8 items-center md:mt-10 mt-5">
        <div className="md:w-[30%]">
          <Image
            src={urlFor(impactPage?.impactImage).url()}
            alt="impact image"
            width={352}
            height={228}
            className="w-full"
          />
        </div>
        <div className="md:w-[70%] grid md:grid-cols-3 gap-8">
          {impactPage?.stats.map((stat) => (
            <div key={stat._key} className="flex flex-col space-y-6">
              <p className="text-[52px] text-secondary font-zilla">
                {stat.textHeading}
              </p>
              <p className="text-white text-lg">{stat.altText}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactInfo;
