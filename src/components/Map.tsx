import Image from "next/image";
import React from "react";
import { urlFor } from "@/sanity/utils";
import NigeriaSvg from "./NigeriaSvg";

const Map = ({ homepage }) => {
  const data = {
    Lagos: 5000,
    Kano: 3000,
    Abuja: 2000,
    Rivers: 4500,
    Oyo: 3500,
    Abia: 1200,
    Adamawa: 800,
    AkwaIbom: 1500,
    Bauchi: 1800,
    Bayelsa: 2200,
    Benue: 1600,
    Borno: 3000,
    CrossRiver: 1300,
    Delta: 2500,
    Ebonyi: 700,
    Edo: 1700,
    Ekiti: 1200,
    Enugu: 1300,
    Gombe: 800,
    Imo: 1800,
    Jigawa: 1600,
    Kaduna: 2300,
    Katsina: 2200,
    Kebbi: 1400,
    Kogi: 1500,
    Kwara: 1300,
    Nasarawa: 1000,
    Niger: 1200,
    Ogun: 2000,
    Ondo: 1600,
    Osun: 1200,
    Plateau: 1400,
    Sokoto: 1800,
    Taraba: 800,
    Yobe: 700,
    Zamfara: 1000
  };
  
  return (
    <>
      <section className="md:py-16 py-10 bg-[#f1f7f6]">
        <h2 className="text-center md:text-[52px] text-3xl font-zilla md:pb-14 pb-10">
          Servicing all 36 States
        </h2>
        <div className="md:px-20 px-5 md:flex hidden w-full  items-center justify-center">
          <NigeriaSvg {...{data}} />
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
