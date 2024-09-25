import Image from "next/image";
import Link from "next/link";
import React from "react";
import { urlFor } from "@/sanity/utils";

const Footer = ({ homepage }) => {
  return (
    <footer className="bg-primary-100 py-12 text-white md:px-20 px-5">
      <div className="flex md:flex-row flex-col md:justify-between md:py-16">
        <div className="flex flex-col md:items-start items-center">
          <Link href="/">
            <Image width={200} height={20} src="svg/logo.svg" alt="logo" />
          </Link>
          <div className="flex items-center space-x-4 mt-3">
            {homepage?.socialLinks.map((social) => (
              <Link href={social.link} key={social._key}>
                <Image
                  src={urlFor(social.icon).url()}
                  width={24}
                  height={24}
                  alt={social._key}
                />
              </Link>
            ))}
          </div>
        </div>

        <div className="md:my-0 my-24 md:order-3 order-2">
          <p className="font-zilla text-2xl">Follow Along Our Journey </p>
          <div className="flex md:flex-row flex-col mt-4 md:space-x-3">
            <input
              type="email"
              name="email"
              id="email"
              className="w-full bg-white rounded-full p-3 outline-none placeholder:text-sm"
              placeholder="Enter Your Email"
            />
            <button className="bg-secondary md:mt-0 mt-2 md:w-auto w-full rounded-full p-3 text-black">
              Subscribe
            </button>
          </div>
        </div>

        <div className="flex space-x-5 pb-12 md:order-2 order-3">
          <div className="flex flex-col space-y-4">
            <Link href="/">Home</Link>
            <Link href="/">For Companies</Link>
            <Link href="/">For Solar Technicians</Link>
          </div>
          <div className="flex flex-col space-y-4">
            <Link href="/">About Us</Link>
            <Link href="/">Impact</Link>
            <Link href="/">Contact Us</Link>
          </div>
        </div>
      </div>
      <hr />
      <div className="pt-8 md:flex items-center justify-between md:space-y-0 space-y-4">
        <div className="flex items-center space-x-5 md:order-last order-first">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          {/* <Link href="/">Cookies</Link> */}
        </div>
        <div>
          <p>Copyright © 2024 Instollar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
