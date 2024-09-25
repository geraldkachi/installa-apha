import React from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/utils";

const ProfessionalsHow = ({ professionalsPage }) => {
  return (
    <section className="md:px-20 px-5 md:py-24 py-20">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <Image
            src={urlFor(professionalsPage?.howImage).url()}
            width={544}
            height={642}
            alt="professionals image"
            className="md:block hidden"
          />
          <Image
            src={urlFor(professionalsPage?.howImageMobile).url()}
            width={343}
            height={256}
            alt="professionals image"
            className="w-full md:hidden"
          />
        </div>
        <div>
          <div className="mb-10 md:mt-0 mt-10">
            <h3 className="md:text-[52px] text-4xl mb-5">How it Works</h3>
            <p className="md:text-lg">
              Getting started with Instollar is easy:
            </p>
          </div>
          <div>
            {professionalsPage?.how.map((how, index) => (
              <div key={index} className="flex space-x-3">
                <Image
                  src={urlFor(how?.icon).url()}
                  width={36}
                  height={96}
                  alt="professionals image"
                  className=""
                />
                <div>
                  <h3 className="font-bold text-xl pb-3">{how.header}</h3>
                  <p>{how.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalsHow;
