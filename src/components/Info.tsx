import React from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/utils";
import { ArrowRight } from "iconsax-react";

const Info = ({ homepage }) => {
  return (
    <section className="md:py-24 py-20 md:px-20 px-5 md:bg-white bg-[#f1f7f6]">
      <div className="text-center md:max-w-2xl mx-auto space-y-4">
        <h3 className="md:text-[44px] text-4xl font-zilla md:leading-[52px]">
          Instollar is{" "}
          <span className="font-bold text-primary-200">
            Africa’s most trusted
          </span>{" "}
          solar energy workforce provider{" "}
        </h3>
        <p className="md:text-base text-sm">
          We enable seamless matching with highly qualified, vetted solar
          workforce closest to your project location, and help manage the entire
          project from start to finish.
        </p>
      </div>
      <div className="mt-16">
        <div className="grid md:grid-cols-4 gap-8">
          {homepage?.homeInfo.map((info) => (
            <div
              className="md:px-6 px-8 md:pt-6 pt-8 md:pb-10 pb-8 md:bg-[#f1f7f6] bg-white rounded-xl shadow"
              key={info._key}
            >
              <Image
                src={urlFor(info.icon).url()}
                alt="info icon"
                width={54}
                height={54}
                className="mb-6"
              />
              <h4 className="font-bold leading-[30px] pb-4 text-lg">
                {info.heading}
              </h4>
              <p className="leading-[24px]">{info.text}</p>
              <button className="md:hidden w-full text-white text-center mt-6 bg-primary-200 rounded-full py-4 flex items-center justify-center space-x-2">
                <span>Get Started</span>
                <ArrowRight size="20" color="#FFFFFF" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Info;
