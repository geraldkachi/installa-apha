"use client"
import React, { useState } from "react";
import Modal from "./Modal";

const CompanyCTA = ({ companiesPage }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <section className="company-cta py-24 md:pb-40 text-white">
      <div className="md:max-w-2xl mx-auto md:px-0 px-5 text-center">
        <h3 className="font-zilla md:text-[52px] text-3xl pb-4">
          {companiesPage?.ctaHeader}
        </h3>
        <p className="md:text-lg mb-8">{companiesPage?.ctaAltText}</p>
        <button onClick={openModal} className="bg-secondary text-black px-5 py-3 rounded-full md:text-base text-sm">
          Get Started
        </button>
      </div>
      <Modal closeModal={closeModal} isOpen={isOpen} />
    </section>
  );
};

export default CompanyCTA;
