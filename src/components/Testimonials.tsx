import React, { useState } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/utils";
import { ArrowCircleLeft2, ArrowCircleRight2 } from "iconsax-react";

const Testimonials = ({ homepage }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const testimonials = homepage?.testimonials || [];

  const goToPrevious = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
      setFade(false);
    }, 300);
  };

  const goToNext = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
      setFade(false);
    }, 300);
  };

  return (
    <section className="bg-[#f1f7f6] md:px-20 px-5 md:py-24 py-20">
      <div className="md:flex md:space-x-10">
        <h2 className="text-[32px] mb-4 md:w-[25%] leading-44">
          What Our Solar Companies are Saying
        </h2>

        <div className="md:w-[75%]">
          <div className="flex items-start space-x-4">
            <p className="text-[128px] text-primary-200 -mt-10">{`“`}</p>
            <div className="">
              <div
                className={`testimonial-text ${fade ? "fade-out" : "fade-in"}`}
              >
                <p className="md:text-3xl text-lg md:leading-[48px] md:font-light mb-6">
                  {testimonials[currentIndex]?.testimonial}
                </p>
                <div className="">
                  <p className="font-semibold">
                    {testimonials[currentIndex]?.name}
                  </p>
                  <p className="text-sm text-gray-600">
                    {testimonials[currentIndex]?.role}
                  </p>
                  <div className="h-1 w-full bg-[#C6CACE] flex-0.5 my-8"></div>
                </div>
              </div>

              <div
                className={`testimonial-images ${
                  fade ? "fade-out" : "fade-in"
                }`}
              >
                <div className="flex justify-between">
                  <div className="flex justify-center space-x-4">
                    {testimonials.map((testimonial, index) => (
                      <div
                        key={testimonial._key}
                        className="w-12 h-12 rounded-full overflow-hidden"
                      >
                        <Image
                          src={
                            index === currentIndex
                              ? urlFor(testimonial.activeImage).url()
                              : urlFor(testimonial.inactiveImage).url()
                          }
                          alt={`${testimonial.name} ${
                            index === currentIndex ? "active" : "inactive"
                          }`}
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <button onClick={goToPrevious}>
                      <ArrowCircleLeft2 size="32" color="#000000" />
                    </button>
                    <button onClick={goToNext}>
                      <ArrowCircleRight2 size="32" color="#000000" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
