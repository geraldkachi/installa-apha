import { urlFor } from "@/sanity/utils";
import Image from "next/image";
import React from "react";

const ImpactAwards = ({ impactPage }) => {
  return (
    <section className="md:px-20 px-5 md:py-24 py-10 bg-background">
      <h3 className="md:text-[52px] text-4xl mb-20 text-center">
        Awards & Recognition
      </h3>
      <div className="grid md:grid-cols-3 gap-8">
        {impactPage?.awards.map((award) => (
          <div className="rounded-2xl shadow-lg">
            <Image
              src={urlFor(award.image).url()}
              width={352}
              height={356}
              alt={award.awardTitle}
              className="w-full"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImpactAwards;
