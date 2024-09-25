import React from "react";

const AboutMissionAndVision = () => {
  return (
    <section className="md:relative md:mt-52">
      <div className="gradient md:h-[300px] h-28 md:block hidden"></div>
      <div className="gradient w-full">
        <div className="md:absolute -top-52">
          <img
            src="/about.png"
            alt=""
            className="md:px-10 px-10 md:w-4/5 mx-auto md:block hidden"
          />
        </div>
        <div className="md:space-y-0 space-y-5 md:flex md:px-20 px-5 text-white md:py-24 py-20">
          <div className="md:w-[30%]">
            <h3 className="md:text-[40px] text-3xl leading-snug">
              Today, solar energy companies spend{" "}
              <span className="text-secondary">xx-yy%</span> of their overall
              costs in maintaining an{" "}
              <span className="text-secondary">in-house workforce</span>
            </h3>
          </div>
          <div className="space-y-6 md:w-[70%] md:text-lg">
            <p>
              Imagine the savings that could arise if solar installations and
              maintenance can be outsourced to a{" "}
              <span className="text-secondary">
                highly qualified technician base which is vetted, trained and
                maintained by a reputable 3rd party agency?
              </span>
            </p>
            <p>
              At Instollar, we ensure just that! Our mission is to enable a
              world where solar companies can save tremendously on their
              workforce costs, while retaining top-notch service quality
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMissionAndVision;
