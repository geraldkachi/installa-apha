import React from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/utils";

const Companies = ({ homepage }) => {
  return (
    <section className="md:px-20 px-5 md:py-24 py-20">
      <div className="grid md:grid-cols-7 md:gap-8">
        <div className="md:col-span-4">
          <h3 className="md:text-[44px] text-3xl pb-6">
            {homepage?.freelancersHeading}
          </h3>
          <p className="leading-[28px] md:pr-20">
            {homepage?.freelancersAltText}
          </p>
          <div className="space-y-6 mt-6">
            {homepage?.freelancersItems.map((item) => (
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
          <button className="mt-12 bg-primary-200 text-white px-5 py-3 rounded-full md:w-auto w-full">
            Explore More
          </button>
        </div>
        <div className="col-span-3">
          <div className="md:mt-0 mt-6 grid md:grid-cols-2 gap-6">
            {homepage?.freelancersCards.map((card) => (
              <div
                className="bg-primary-200 text-white py-14 rounded-2xl md:px-6 px-8"
                key={card._key}
              >
                <Image
                  src={urlFor(card.icon).url()}
                  width={48}
                  height={48}
                  alt={card._key}
                  className="md:mb-24 mb-10"
                />
                <div className="pt-2 text-lg font-zilla">
                  <p className="">{card.number}</p>
                  <p className="md:leading-[32px] md:pr-0 pr-10">{card.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies;
