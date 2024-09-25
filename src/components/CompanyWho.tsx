import React from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/utils";
import { ArrowRight } from "iconsax-react";

const CompanyWho = ({ companiesPage }) => {
  return (
    <section className="md:px-20 px-5 md:py-24 py-20">
      <div className="max-w-2xl mx-auto text-center">
        <h3 className="md:text-[52px] text-3xl md:mb-6 mb-4">Who We Service</h3>
        <p>
          Whether you sell solar home systems, or products for a
          commercial-scale project, Instollar’s solution will enable you to take
          the first step towards combatting climate change by transitioning to
          solar
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 md:mt-16 mt-10">
        {companiesPage?.whoWeServe.map((who) => (
          <div key={who._key} className="p-8 md:pb-14 shadow-lg rounded-2xl">
            <Image
              src={urlFor(who.icon).url()}
              alt={who.service}
              width={64}
              height={64}
              className="mb-12"
            />
            <h4 className="pb-3 text-2xl">{who.header}</h4>
            <p>{who.description}</p>
            <button className="md:hidden w-full text-white text-center mt-6 bg-primary-200 rounded-full py-4 flex items-center justify-center space-x-2">
              <span>Get Started</span>
              <ArrowRight size="20" color="#FFFFFF" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompanyWho;
