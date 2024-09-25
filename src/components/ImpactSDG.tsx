import { urlFor } from "@/sanity/utils";
import Image from "next/image";
import React from "react";

const ImpactSDG = ({ impactPage }) => {
  return (
    <section className="md:px-20 px-5 md:py-24 py-10 bg-background">
      <h3 className="md:text-[52px] text-4xl mb-20 md:max-w-4xl leading-snug mx-auto text-center">
        Bridging the Energy Gap and Fostering Sustainable Development
      </h3>
      <div className="grid md:grid-cols-3 gap-8">
        {impactPage?.sdgs.map((sdg) => (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <Image
              src={urlFor(sdg.image).url()}
              width={72}
              height={72}
              alt="sdg image"
              className="mb-12"
            />
            <h4 className="font-bold text-xl pb-3">{sdg.header}</h4>
            <p className="pb-3">{sdg.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImpactSDG;
