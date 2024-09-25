"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutCTA from "@/components/AboutCTA";
import AboutHero from "@/components/AboutHero";
import AboutMissionAndVision from "@/components/AboutMissionAndVision";
import AboutTeam from "@/components/AboutTeam";
import AboutSDG from "@/components/AboutSDG";
import { useFetchAboutPage, useFetchHomePage } from "@/hooks/useFetchPage";
import Loading from "@/components/Loading";

export default function AboutUs() {
  const { aboutPage, loading, error } = useFetchAboutPage();
  const { homepage } = useFetchHomePage();

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <div>Error</div>;
  }
  return (
    <div className="w-full">
      <Navbar />
      <AboutHero aboutPage={aboutPage} />
      <AboutMissionAndVision />
      <AboutTeam aboutPage={aboutPage} />
      <AboutSDG aboutPage={aboutPage} />
      <AboutCTA aboutPage={aboutPage} />
      <Footer homepage={homepage} />
    </div>
  );
}
