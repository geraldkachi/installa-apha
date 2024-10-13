import React from "react";

const ImpactHero = ({ impactPage }) => {
  return (
    <section className="impact-hero mx-auto md:pt-[200px] md:pb-32 pt-44 pb-20 md:px-20 px-5 text-center text-white">
      <div className="md:max-w-5xl mx-auto">
        <h3 className="font-zilla md:text-[52px] text-3xl pb-4 leading-snug">
          {impactPage?.hero}
        </h3>
        <p className="md:text-lg mb-8">{impactPage?.heroAltText}</p>
        <button className="bg-secondary text-black hover:bg-primary-100 hover:text-white px-5 py-3 rounded-full md:text-base text-sm md:w-auto w-full">
          Speak With Us
        </button>
      </div>
    </section>
  );
};

export default ImpactHero;
