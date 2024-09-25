import React from "react";

const AboutHero = ({ aboutPage }) => {
  return (
    <div className="mx-auto md:pt-[200px] md:pb-32 pt-44 pb-20 md:px-20 px-5 md:text-left text-center">
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="md:text-[52px] text-3xl leading-normal">
            {aboutPage?.hero}
          </h3>
        </div>
        <div>
          <p className="md:text-lg">{aboutPage?.heroAltText}</p>
          <button className="bg-primary-200 md:w-auto w-full text-white py-3 px-5 mt-6 rounded-full">
            Get Started
          </button>
        </div>
      </div>
      <div className="md:hidden mt-8">
        <img src="/about.png" alt="" className="" />
      </div>
    </div>
  );
};

export default AboutHero;
