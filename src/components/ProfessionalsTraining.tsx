import React from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/utils";
import { ArrowRight } from "iconsax-react";

const ProfessionalsTraining = ({ professionalsPage }) => {
  return (
    <section className="md:px-20 px-5 md:py-24 py-20">
      <div className="md:flex justify-between mb-16">
        <h3 className="md:text-[44px] text-4xl md:mb-0 mb-10 md:w-[50%]">
          Training and Certification
        </h3>
        <p className="md:w-[50%] md:text-lg">
          Become Africa’s most sought after green workforce with our
          comprehensive training programs
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {professionalsPage?.training.map((training) => (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <Image
              src={urlFor(training.icon).url()}
              width={64}
              height={64}
              alt="professionals image"
              className="mb-12"
            />
            <h4 className="font-bold text-xl pb-3">{training.header}</h4>
            <p className="pb-3">{training.description}</p>
            <button className="md:hidden w-full text-white text-center mt-6 bg-primary-200 rounded-full py-4 flex items-center justify-center space-x-2">
              <span>Get Started</span>
              <ArrowRight size="20" color="#FFFFFF" />
            </button>
          </div>
        ))}
      </div>
      <div className="w-full md:h-[328px] h-[280px] install-bg mt-20 rounded-2xl text-white">
        <div className="max-w-xs p-8">
          <Image
            src={urlFor(professionalsPage?.installHerIcon).url()}
            width={64}
            height={64}
            alt="professionals image"
            className="md:mb-12 mb-5"
          />
          <h3 className="text-xl pb-3">
            {professionalsPage?.installHerHeader}
          </h3>
          <p>{professionalsPage?.installHerDescription}</p>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalsTraining;
