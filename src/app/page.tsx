"use client";
import Companies from "@/components/Companies";
import CTA from "@/components/CTA";
import Info from "@/components/Info";
import LandingHero from "@/components/LandingHero";
import Map from "@/components/Map";
import Navbar from "@/components/Navbar";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import TrustedBy from "@/components/TrustedBy";
import Footer from "@/components/Footer";
import Professionals from "@/components/Professionals";
import { useFetchHomePage } from "@/hooks/useFetchPage";
import Loading from "@/components/Loading";

export default function Home() {
  const { homepage, loading, error } = useFetchHomePage();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error?.message}</div>;
  }
  return (
    <div className="w-full">
      <Navbar />
      <LandingHero homepage={homepage} />
      <Info homepage={homepage} />
      <Stats homepage={homepage} />
      <Map homepage={homepage} />
      <Companies homepage={homepage} />
      <TrustedBy homepage={homepage} />
      <Testimonials homepage={homepage} />
      <Professionals homepage={homepage} />
      <CTA homepage={homepage} />
      <Footer homepage={homepage} />
    </div>
  );
}
