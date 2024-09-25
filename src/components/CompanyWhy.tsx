import React from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/utils";

const CompanyWhy = ({ companiesPage }) => {
  return (
    <section className="gradient md:px-20 px-5 md:py-24 py-20 text-white">
      <div className="md:space-y-0 space-y-5 md:flex">
        <div className="md:w-[30%]">
          <h3 className="md:text-[40px] text-3xl leading-snug">
            Why Instollar is the{" "}
            <span className="text-secondary">perfect partner</span> for you!
          </h3>
        </div>
        <div className="space-y-6 md:w-[70%] md:text-lg">
          <p>
            Instollar connects clean energy companies with the skilled technical
            workforce they need to scale projects efficiently and
            cost-effectively. Our platform provides access to professionals who
            can handle your projects and products from installations to
            maintenance, allowing you to focus on growing your business.
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-4 gap-8 md:mt-24 mt-10">
        {companiesPage?.why.map((why) => (
          <div key={why._key} className="">
            <Image
              src={urlFor(why.image).url()}
              alt={why.header}
              width={256}
              height={200}
              className="md:w-auto w-full"
            />
            <h4 className="font-semibold text-secondary text-3xl my-4">
              {why.header}
            </h4>
            <p className="">{why.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompanyWhy;
