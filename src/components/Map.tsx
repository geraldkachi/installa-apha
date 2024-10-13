import Image from "next/image";
import React from "react";
import { urlFor } from "@/sanity/utils";
import NigeriaSvg from "./NigeriaSvg";

const Map = ({ homepage }) => {
  return (
    <>
      <section className="md:py-24 py-10 bg-[#f1f7f6]">
        <h2 className="text-center md:text-[52px] text-3xl font-zilla md:pb-14 pb-10">
          Servicing all 36 States
        </h2>
        <div className="md:px-20 px-5 md:flex hidden w-full  items-center justify-center">
          <NigeriaSvg />
          {/* <Image
            src={urlFor(homepage?.map).url()}
            width={1222}
            height={880}
            alt="map"
          /> */}
        </div>
        <div className="md:px-20 px-5 flex items-center justify-center md:hidden">
          <Image
            src={urlFor(homepage?.map).url()}
            width={322.52}
            height={260.21}
            alt="map"
            className="mx-auto"
          />
        </div>
      </section>
    </>
  );
};

export default Map;
