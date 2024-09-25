import React from "react";

const CompanyHero = ({ companiesPage }) => {
  return (
    <section className="company-hero mx-auto md:pt-[200px] md:pb-32 pt-44 pb-20 md:px-20 px-5 text-center text-white">
      <div className="md:max-w-5xl mx-auto">
        <h3 className="font-zilla md:text-[52px] text-3xl pb-4 leading-snug">
          One-stop turnkey solution to{" "}
          <span className="text-secondary">reduce your workforce costs</span>{" "}
          and manage your solar installations end-to-end
        </h3>
        <p className="md:text-lg mb-8">{companiesPage?.heroAltText}</p>
        <button className="bg-secondary text-black px-5 py-3 rounded-full md:text-base text-sm md:w-auto w-full">
          Speak With Us
        </button>
      </div>
    </section>
  );
};

export default CompanyHero;
