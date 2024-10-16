"use client"
import React, { useState } from "react";
import Modal from "./Modal";

const AboutCTA = ({ aboutPage }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <section className="about-cta py-24 md:pb-40 text-white">
      <div className="md:max-w-2xl mx-auto md:px-0 px-5 text-center">
        <h3 className="font-zilla md:text-[52px] text-3xl pb-4">
          {aboutPage?.ctaHeader}
        </h3>
        <p className="md:text-lg mb-8">{aboutPage?.ctaAltText}</p>
        <button onClick={openModal} className="bg-secondary text-black hover:bg-primary-100 hover:text-white px-5 py-3 rounded-full md:text-base text-sm">
          Get Started
        </button>
      </div>
      <Modal closeModal={closeModal} isOpen={isOpen} />
    </section>
  );
};

export default AboutCTA;
