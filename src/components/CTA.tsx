"use client"
import React, { useState } from "react";
import Modal from "./Modal";

const CTA = ({ homepage }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <section className="cta py-24 md:pb-40 text-white">
      <div className="md:max-w-2xl mx-auto md:px-0 px-5 text-center">
        <h3 className="font-zilla md:text-[52px] text-3xl pb-4">
          {homepage?.ctaHeader}
        </h3>
        <p className="md:text-lg mb-8">{homepage?.ctaAltText}</p>
        <button className="bg-secondary text-black hover:bg-primary-100 hover:text-white px-5 py-3 rounded-full md:text-base text-sm"  onClick={openModal}>
          Get Started
        </button>
      </div>
      <Modal closeModal={closeModal} isOpen={isOpen} />
    </section>
  );
};

export default CTA;
