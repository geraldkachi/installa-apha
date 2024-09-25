import { urlFor } from "@/sanity/utils";
import Image from "next/image";
import React from "react";

const ContactHero = ({ contactPage }) => {
  return (
    <section className="md:pt-[200px] md:pb-32 pt-44 pb-20 md:px-20 px-5">
      <div className="md:flex justify-between mb-14">
        <h3 className="md:text-[52px] text-3xl md:mb-0 mb-5">
          {contactPage?.contactText}
        </h3>
        <p className="md:max-w-sm">{contactPage?.contactAltText}</p>
      </div>
      <div>
        <Image
          src={urlFor(contactPage?.contactImage).url()}
          width={1000}
          height={600}
          alt="contact image"
          className="mb-7 md:block hidden w-full"
        />
        <Image
          src={urlFor(contactPage?.contactImageMobile).url()}
          width={343}
          height={256}
          alt="contact image"
          className="mb-7 md:hidden w-full"
        />
      </div>
    </section>
  );
};

export default ContactHero;
