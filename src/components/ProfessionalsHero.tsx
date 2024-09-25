import React from "react";
import { useFetchProfessionalsPage } from "@/hooks/useFetchPage";
import Loading from "./Loading";
import Image from "next/image";
import { urlFor } from "@/sanity/utils";

const ProfessionalsHero = ({ professionalsPage }) => {
  return (
    <section className="gradient md:pt-[200px] md:pb-32 pt-44 pb-20 md:px-20 px-5 text-white">
      <div className="grid md:grid-cols-2 items-center">
        <div className="md:mb-0 mb-14 md:text-left text-center">
          <h3 className="md:text-[52px] text-4xl mb-4 leading-snug">
            {professionalsPage?.hero}
          </h3>
          <p>{professionalsPage?.heroAltText}</p>
          <button className="mt-6 bg-secondary md:w-auto px-5 py-3 w-full text-black rounded-full">
            Get Started Now
          </button>
        </div>
        <div>
          <Image
            src={urlFor(professionalsPage?.heroImage).url()}
            alt="company image"
            width={447}
            height={520}
            className="px-10 md:block hidden w-full"
          />
          <Image
            src={urlFor(professionalsPage?.heroImageMobile).url()}
            alt="company image"
            width={343}
            height={256}
            className="md:hidden w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default ProfessionalsHero;
