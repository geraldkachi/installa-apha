import React from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/utils";

const CompanyServices = ({ companiesPage }) => {
  return (
    <section className="md:px-20 px-5 md:py-24 py-20">
      <div>
        <h4 className="md:text-[52px] text-3xl mb-8">Our Services</h4>
        <div>
          {companiesPage?.services.map((service) => (
            <div
              key={service._key}
              className="py-10 flex md:flex-row flex-col md:justify-between md:items-center border-b-2 hover:scale-105 transition-all duration-500 ease-out cursor-pointer"
            >
              <div className="flex items-center space-x-6 md:pb-0 pb-5">
                <Image
                  src={urlFor(service.icon).url()}
                  alt={service.service}
                  width={48}
                  height={48}
                />
                <p className="font-semibold">{service.service}</p>
              </div>
              <p className="md:w-[40%]">{service.serviceDescription}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyServices;
