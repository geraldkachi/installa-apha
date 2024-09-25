import Image from "next/image";
import { useState } from "react";
import { urlFor } from "@/sanity/utils";
import { ArrowCircleLeft2, ArrowCircleRight2 } from "iconsax-react";

const AboutTeam = ({ aboutPage }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const teamMembers = aboutPage?.team || [];

  const handleNext = () => {
    if (currentIndex < teamMembers.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(teamMembers.length - 1);
    }
  };

  return (
    <section className="md:px-20 px-5 md:py-24 py-20">
      <div className="mb:pb-14 pb-10 text-center md:max-w-xl mx-auto">
        <h3 className="text-44">Meet Our Team</h3>
        <p>
          Meet the diverse team of experts and leaders who are passionate about
          making a difference in Africa&apos;s green workforce landscape
        </p>
      </div>
      <div className="">
        <div className="md:flex">
          <div className="md:w-[30%] md:mt-20">
            {teamMembers.length > 0 && (
              <div>
                <h2 className="font-semibold md:text-xl text-lg">
                  {teamMembers[currentIndex].name}
                </h2>
                <p>{teamMembers[currentIndex].position}</p>
                <p className="pt-6 leading-normal">
                  {teamMembers[currentIndex].role}
                </p>
              </div>
            )}
          </div>
          <div className="md:w-[70%] md:mt-0 mt-6">
            <div className="team-member-images space-x-5">
              {teamMembers.length > 0 && (
                <div className="image-container">
                  <Image
                    src={urlFor(teamMembers[currentIndex].activeImage).url()}
                    alt={teamMembers[currentIndex].name}
                    width={400}
                    height={400}
                  />
                </div>
              )}
              {teamMembers.length > 0 &&
                currentIndex < teamMembers.length - 1 && (
                  <div className="opacity-50">
                    <Image
                      src={urlFor(
                        teamMembers[currentIndex + 1].activeImage
                      ).url()}
                      alt={teamMembers[currentIndex + 1].name}
                      width={200}
                      height={200}
                    />
                  </div>
                )}
              {teamMembers.length > 0 &&
                currentIndex === teamMembers.length - 1 && (
                  <div className="opacity-50">
                    <Image
                      src={urlFor(teamMembers[0].inactiveImage).url()}
                      alt={teamMembers[0].name}
                      width={200}
                      height={200}
                    />
                  </div>
                )}
            </div>
            <div className="progress-bar-container w-full space-x-5 md:pl-24">
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{
                    width: `${
                      ((currentIndex + 1) / teamMembers.length) * 100
                    }%`,
                  }}
                />
              </div>
              <p>
                {currentIndex + 1}/{teamMembers.length}
              </p>
              <div className="flex space-x-4">
                <button onClick={handlePrev}>
                  <ArrowCircleLeft2 size="32" color="#000000" />
                </button>
                <button onClick={handleNext}>
                  <ArrowCircleRight2 size="32" color="#000000" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
