import React from "react";

const ProfessionalsWhy = ({ professionalsPage }) => {
  return (
    <section className="md:px-20 px-5 md:py-24 py-20">
      <div className="md:flex justify-between">
        <h3 className="md:text-[52px] text-4xl md:mb-0 mb-10 md:max-w-xs md:w-[40%]">
          {professionalsPage?.whyJoinHeader}
        </h3>
        <p className="md:w-[60%] md:text-lg">
          {professionalsPage?.whyJoinText}
        </p>
      </div>
    </section>
  );
};

export default ProfessionalsWhy;
