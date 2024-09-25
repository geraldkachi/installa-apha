import React from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/utils";

const CompanyHow = ({ companiesPage }) => {
  return (
    <section className="md:px-20 px-5 md:py-24 py-20 bg-background">
      <div className="max-w-2xl mx-auto text-center">
        <h3 className="md:text-[52px] text-3xl md:mb-6 mb-4">How it works</h3>
        <p>
          Finding a solar professional and completing a full-fledged solar
          service has never been this easy! With Instollar, you can achieve this
          in 4 simple steps
        </p>
      </div>
      <div className="space-y-8 md:mt-16 mt-8">
        {companiesPage?.howItWorks.map((how) => (
          <div
            key={how._key}
            className="flex items-center bg-white md:justify-between md:ml-0 ml-5 py-8 rounded-2xl hover:scale-105 transition-all duration-500 ease-out cursor-pointer"
          >
            <div className="flex items-center space-x-6">
              <Image
                src={urlFor(how.number).url()}
                alt={how.heading}
                width={40}
                height={40}
                className="-ml-5"
              />
              <div className="max-w-xs">
                <h4 className="pb-4 text-2xl font-semibold">{how.heading}</h4>
                <p>{how.description}</p>
              </div>
            </div>
            <Image
              src={urlFor(how.illustration).url()}
              alt={how.heading}
              width={300}
              height={212}
              className="md:block hidden pr-28"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompanyHow;
