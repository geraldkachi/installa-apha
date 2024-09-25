import React from "react";

const Stats = ({ homepage }) => {
  return (
    <section className="gradient md:px-20 px-5 py-24">
      <div className="flex md:flex-row flex-col md:space-x-8 md:space-y-0 space-y-8 items-center">
        <div className="md:w-[30%]">
          <h3 className="md:leading-52 leading-44 md:text-[44px] text-[32px] text-white font-zilla">
            We are committed to{" "}
            <span className="text-secondary">clean energy</span>{" "}
          </h3>
        </div>
        <div className="md:w-[70%] grid md:grid-cols-3 gap-8">
          {homepage?.stats.map((stat) => (
            <div key={stat._key} className="flex flex-col space-y-6">
              <h4 className="text-[52px] text-white font-zilla">
                {stat.textHeading}
              </h4>
              <p className="text-white text-lg">{stat.altText}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
