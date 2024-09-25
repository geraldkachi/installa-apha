import { urlFor } from "@/sanity/utils";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ImpactVideos({ impactPage }) {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    speed: 500,
  };
  const settings2 = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
  };
  return (
    <section className="md:px-20 px-5 md:py-24 py-10 bg-background">
      <h3 className="md:text-[52px] text-4xl mb-20 leading-snug mx-auto text-center">
        Empowering Communities, One Story at a Time
      </h3>
      <div className="md:block hidden">
        <Slider {...settings}>
          <div className="px-5">
            <Image
              alt="video"
              src={"/videos.png"}
              height={350}
              width={542}
              className="md:block hidden w-full"
            />
          </div>
          <div className="px-5">
            <Image
              alt="video"
              src={"/videos.png"}
              height={350}
              width={542}
              className="md:block hidden w-full"
            />
          </div>
          <div className="px-5">
            <Image
              alt="video"
              src={"/videos.png"}
              height={350}
              width={542}
              className="md:block hidden w-full"
            />
          </div>
          <div className="px-5">
            <Image
              alt="video"
              src={"/videos.png"}
              height={350}
              width={542}
              className="md:block hidden w-full"
            />
          </div>
          <div className="px-5">
            <Image
              alt="video"
              src={"/videos.png"}
              height={350}
              width={542}
              className="md:block hidden w-full"
            />
          </div>
          <div className="px-5">
            <Image
              alt="video"
              src={"/videos.png"}
              height={350}
              width={542}
              className="md:block hidden w-full"
            />
          </div>
        </Slider>
      </div>
      <div className="md:hidden">
        <Slider {...settings2}>
          <div className="px-5">
            <Image
              alt="video"
              src={"/videos.png"}
              height={350}
              width={542}
              className="md:block hidden w-full"
            />
          </div>
          <div className="px-5">
            <Image
              alt="video"
              src={"/videos.png"}
              height={350}
              width={542}
              className="md:block hidden w-full"
            />
          </div>
          <div className="px-5">
            <Image
              alt="video"
              src={"/videos.png"}
              height={350}
              width={542}
              className="md:block hidden w-full"
            />
          </div>
          <div className="px-5">
            <Image
              alt="video"
              src={"/videos.png"}
              height={350}
              width={542}
              className="md:block hidden w-full"
            />
          </div>
          <div className="px-5">
            <Image
              alt="video"
              src={"/videos.png"}
              height={350}
              width={542}
              className="md:block hidden w-full"
            />
          </div>
          <div className="px-5">
            <Image
              alt="video"
              src={"/videos.png"}
              height={350}
              width={542}
              className="md:block hidden w-full"
            />
          </div>
        </Slider>
      </div>
    </section>
  );
}
