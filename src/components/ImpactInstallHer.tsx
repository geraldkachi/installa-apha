import { urlFor } from "@/sanity/utils";
import Image from "next/image";
import React from "react";

const ImpactInstallHer = ({ impactPage }) => {
  return (
    <section className="md:px-20 px-5 md:py-24 py-20">
      <h3 className="md:text-[52px] text-4xl mb-20 text-center">
        {impactPage?.installHerHeading}
      </h3>
      <div className="mb-8">
        <Image
          src={urlFor(impactPage?.installHerImage).url()}
          alt="install her image"
          width={1000}
          height={460}
          className="w-full md:block hidden"
        />
        <Image
          src={urlFor(impactPage?.installHerImageMobile).url()}
          alt="install her image"
          width={343}
          height={256}
          className="w-full md:hidden rounded-2xl"
        />
      </div>
      <div className="md:flex justify-between">
        <h3 className="md:text-[44px] text-4xl md:mb-0 mb-10 md:max-w-sm md:w-[40%]">
          {impactPage?.installHerHeading}
        </h3>
        <div className="md:w-[60%] grid md:grid-cols-2 gap-8 md:text-lg">
          <p className="">{impactPage?.installHerText1}</p>
          <p className="">{impactPage?.installHerText2}</p>
        </div>
      </div>
    </section>
  );
};

export default ImpactInstallHer;
