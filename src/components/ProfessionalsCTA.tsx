import React from "react";

const ProfessionalsCTA = () => {
  return (
    <section className="md:pt-24 py-20 md:pb-0 z-10 relative">
      <div className="h-32 bg-primary-100 w-full md:block hidden absolute bottom-0 left-0 -z-20"></div>
      <div className="bg-background md:max-w-4xl px-5 md:mx-auto mx-5 rounded-2xl shadow py-20 text-center relative z-10 md:-mt-16">
        <h3 className="md:max-w-2xl max-w-xs mx-auto md:text-[44px] text-3xl md:leading-snug">
          Ready to join our network of freelance solar professionals?
        </h3>
        <button className="bg-primary-200 text-white md:px-5 md:w-auto w-full rounded-full py-3 mt-6">
          Sign Up Now
        </button>
      </div>
    </section>
  );
};

export default ProfessionalsCTA;
