import React from "react";
import { v4 as uuidv4 } from "uuid";
import dynamic from "next/dynamic";
import { urlFor } from "@/sanity/utils";
import Card from "./ImageCard";

const Carousel = dynamic(() => import("./Carousel"), { ssr: false });

const LandingHero = ({ homepage }) => {
  const cards = [
    {
      key: uuidv4(),
      content: <Card image={urlFor(homepage?.heroImages[0]).url()} />,
    },
    {
      key: uuidv4(),
      content: <Card image={urlFor(homepage?.heroImages[1]).url()} />,
    },
    {
      key: uuidv4(),
      content: <Card image={urlFor(homepage?.heroImages[2]).url()} />,
    },
    {
      key: uuidv4(),
      content: <Card image={urlFor(homepage?.heroImages[3]).url()} />,
    },
    {
      key: uuidv4(),
      content: <Card image={urlFor(homepage?.heroImages[0]).url()} />,
    },
  ];

  return (
    <div className="gradient mx-auto text-white md:pt-[200px] md:pb-32 pt-44">
      <div className="grid md:grid-cols-2 items-center">
        <div className="md:text-left text-center md:pl-20 md:pr-0 pr-5 pl-5 ">
          <div className="flex md:justify-start justify-center">
            <div className="border border-white rounded-full px-3 py-1 text-sm">
              Vetted solar technicians, instant connections
            </div>
          </div>
          <h2 className="md:text-[52px] text-4xl md:leading-[60px] leading-normal font-zilla pt-4 pb-6">
            Connect with{" "}
            <span className="text-secondary">
              skilled local solar workforce
            </span>{" "}
            in record time!
          </h2>

          <p>{homepage?.heroAltText}</p>
          <button className="bg-secondary p-4 rounded-full text-black md:mt-16 mt-10 md:text-base text-sm">
            See Solar Technician Footprint
          </button>
        </div>
        <div className="">
          <Carousel
            cards={cards}
            height="500px"
            width="50%"
            margin="0 auto"
            offset={2}
            showArrows={false}
          />
        </div>
      </div>
    </div>
  );
};

export default LandingHero;
