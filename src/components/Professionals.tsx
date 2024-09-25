import React from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/utils";

const Professionals = ({ homepage }) => {
  return (
    <section className="bg-primary-100 text-white md:px-20 px-5 md:py-24 py-20">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <Image
            src={urlFor(homepage?.professionalsIimage).url()}
            width={544}
            height={523}
            alt="professionals image"
            className="md:block hidden"
          />
        </div>

        <div>
          <h3 className="md:text-[44px] text-3xl pb-6">
            {homepage?.professionalsHeading}
          </h3>
          <p className="leading-[28px]">{homepage?.professionalsAltText}</p>
          <div className="space-y-6 mt-6">
            {homepage?.professionalsItems.map((item) => (
              <div className="flex items-start space-x-4" key={item._key}>
                <Image
                  src={urlFor(item.icon).url()}
                  width={24}
                  height={24}
                  alt={item._key}
                />
                <p className="md:leading-[28px]">{item.text}</p>
              </div>
            ))}
          </div>
          <button className="mt-12 bg-secondary text-black px-5 py-3 rounded-full md:w-auto w-full">
            Get Started
          </button>
        </div>

        <div>
          <Image
            src={urlFor(homepage?.professionalsImageMobile).url()}
            width={343}
            height={256}
            alt="professionals image"
            className="md:hidden w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Professionals;
