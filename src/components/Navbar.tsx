"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Button from "./Button";
import { usePathname, useRouter } from "next/navigation";
import { HambergerMenu } from "iconsax-react";
import Modal from "./Modal";

const navigationRoutes = [
  {
    title: "Home",
    key: "home",
    path: "/",
  },
  {
    title: "About",
    key: "about",
    path: "/about-us",
  },
  {
    title: "For Companies",
    key: "for-companies",
    path: "/company",
  },
  {
    title: "For Solar Professionals",
    key: "for-solar-professionals",
    path: "/professionals",
  },
  {
    title: "Impact",
    key: "impact",
    path: "/impact",
  },
];

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <Modal closeModal={closeModal} isOpen={isOpen} />
      <nav className="w-full bg-primary-100 md:px-20 px-5 py-[20px] md:py-[unset] fixed top-0 z-[20]">
        <div className="">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link href="/">
                <Image width={150} height={50} src="/svg/logo.svg" alt="" />
              </Link>

              <div className="hidden md:flex w-auto font-medium text-sm text-white">
                <div className="flex items-center gap-8 mx-8">
                  {navigationRoutes.map((route) => (
                    <Link
                      key={route.path}
                      href={route?.path}
                      className={`${
                        pathname === route.path
                          ? "text-text-white whitespace-nowrap border-b-2 border-white"
                          : "text-white"
                      } text-base font-normal leading-6 relative py-6`}
                    >
                      {route.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="md:flex hidden items-center gap-4">
              <Button
                stylet="border border-white text-white rounded-full"
                onClick={() => router.push("/contact")}
                title="Contact Us"
              />
              <Button
                stylet="border border-secondary bg-secondary rounded-full"
                onClick={openModal}
                title="Get Started"
              />
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className=""
              >
                <HambergerMenu size="32" color="#ffffff" />
              </button>

              {isMobileMenuOpen && (
                <div className="absolute top-20 left-0 px-5 py-5 bg-white w-full">
                  <div className="space-y-5 flex flex-col">
                    {navigationRoutes.map((route) => (
                      <Link
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        key={route.path}
                        href={route?.path}
                        className={`${
                          pathname === route.path
                            ? "bg-primary-100 text-white"
                            : "text-primary-100"
                        } text-base font-normal leading-6 w-full p-3`}
                      >
                        {route.title}
                      </Link>
                    ))}
                  </div>
                  <div className="flex flex-col space-y-5 mt-5">
                    <button
                      onClick={openModal}
                      className="text-white bg-primary-100  border-primary-200 hover:bg-secondary border-2 rounded-full px-5 md:px-10 py-2 md:py-3 hover:text-black transition-all duration-300 ease-in-out w-full text-center"
                    >
                      Get Started
                    </button>
                    <Link
                      href="/contact"
                      className="text-primary-200 border-primary-200 hover:bg-primary-300 border-2 rounded-full px-5 md:px-10 py-2 md:py-3 hover:text-white transition-all duration-300 ease-in-out w-full text-center"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
