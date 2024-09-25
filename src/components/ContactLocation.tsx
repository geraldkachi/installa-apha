import { urlFor } from "@/sanity/utils";
import Image from "next/image";
import React from "react";

const ContactLocation = ({ contactPage }) => {
  return (
    <section className="md:px-20 px-5 md:py-24 py-20 bg-primary-200 text-white">
      <div className="flex md:flex-row flex-col md:gap-20 gap-10">
        <div>
          <h3 className="md:text-[44px] text-3xl pb-3">Where we are located</h3>
          <p>Come Visit Our Team and offices</p>
        </div>
        <div className="flex space-x-4">
          <Image
            src={urlFor(contactPage?.location.icon).url()}
            width={48}
            height={48}
            alt="contact icon"
            className=""
          />
          <div className="space-y-1">
            <h3 className="font-semibold text-xl">
              {contactPage?.location.header}
            </h3>
            <p>{contactPage?.location.text}</p>
            <p>{contactPage?.location.locationLink}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactLocation;
