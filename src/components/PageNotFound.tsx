"use client";
import Loading from "@/components/Loading";
import { useFetchContactPage } from "@/hooks/useFetchPage";
import { urlFor } from "@/sanity/utils";
import Image from "next/image";
import Link from "next/link";

export default function PageNotFound() {
  const { contactPage, loading, error } = useFetchContactPage();

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <div>Error</div>;
  }
  return (
    <section className="h-screen flex items-center justify-center text-center md:px-20 px-5">
      <div>
        <h2 className="md:text-[52px] text-4xl mb-3">We lost this page</h2>
        <p className="md:max-w-xl mx-auto">
          We searched high and low, but couldn’t find what you’re looking for.
          Let’s find a better place for you to go.
        </p>
        <div className="flex md:flex-row flex-col w-full md:space-x-5 md:space-y-0 space-y-5 mt-10 md:pr-0 pr-10">
          <Link
            href="/contact"
            className="border border-primary-200 text-primary-200 w-full py-3 mx-5 rounded-full"
          >
            Contact Us
          </Link>
          <Link
            href="/"
            className="border border-primary-200 bg-primary-200 text-white w-full py-3 mx-5 rounded-full"
          >
            Return Home
          </Link>
        </div>
        <div className="space-y-4 md:order-first order-last text-left mt-20">
          {contactPage?.contactInfo.map((info: any, index: number) => (
            <div key={index} className="flex space-x-4 border-t pt-5">
              <Image
                src={urlFor(info.icon).url()}
                width={48}
                height={48}
                alt="contact icon"
                className=""
              />
              <div className="space-y-1">
                <h3 className="font-semibold text-xl">{info.header}</h3>
                <p>{info.text}</p>
                <p>{info.contactLink}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
