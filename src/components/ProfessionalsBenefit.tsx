import React from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/utils";
import { ArrowRight } from "iconsax-react";

const ProfessionalsBenefit = ({ professionalsPage }) => {
  return (
    <section className="md:px-20 px-5 md:py-24 py-10 bg-background">
      <h3 className="md:text-[52px] text-4xl mb-20">
        Benefits of Joining Instollar
      </h3>
      <div className="grid md:grid-cols-3 gap-8">
        {professionalsPage?.benefit.map((benefit) => (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <Image
              src={urlFor(benefit.icon).url()}
              width={64}
              height={64}
              alt="professionals image"
              className="mb-12"
            />
            <h4 className="font-bold text-xl pb-3">{benefit.header}</h4>
            <p className="pb-3">{benefit.description}</p>
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

export default ProfessionalsBenefit;
