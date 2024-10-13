import React from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/utils";

const AboutSDG = ({ aboutPage }) => {
  return (
    <section className="md:px-20 px-5 md:py-24 py-20 bg-background">
      <div>
        <div className="md:grid hidden md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="md:leading-normal leading-snug text-44 pb-3">
              Sustainable <br /> Development Goals
            </h3>
            <p className="mb-6">
              At Instollar, we are actively contributing to achieving a
              sustainable future by addressing SDG 7, 8, 9, 11, 13 and 17
            </p>
            <button className="bg-primary-200 text-white px-5 py-3 rounded-full md:w-auto w-full hover:bg-secondary hover:text-black">
              Learn More
            </button>
          </div>
          {aboutPage?.sdgImages.map((image) => (
            <div key={image._key}>
              <Image
                src={urlFor(image).url()}
                width={256}
                height={256}
                alt="sdg image"
                className=""
              />
            </div>
          ))}
        </div>
        <div className="md:hidden">
          <div className="">
            <h3 className="md:leading-snug leading-snug text-44 pb-3">
              Sustainable <br /> Development Goals
            </h3>
            <p className="mb-6">
              At Instollar, we are actively contributing to achieving a
              sustainable future by addressing SDG 7, 8, 9, 11, 13 and 17
            </p>
            <button className="bg-primary-200 text-white hover:bg-secondary hover:text-black px-5 py-3 rounded-full md:w-auto w-full">
              Learn More
            </button>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-6">
            {aboutPage?.sdgImages.map((image) => (
              <div key={image._key}>
                <Image
                  src={urlFor(image).url()}
                  width={256}
                  height={256}
                  alt="sdg image"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSDG;
