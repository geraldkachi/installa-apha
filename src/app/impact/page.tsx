"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useFetchHomePage, useFetchImpactPage } from "@/hooks/useFetchPage";
import Loading from "@/components/Loading";
import ImpactHero from "@/components/ImpactHero";
import ImpactInfo from "@/components/ImpactInfo";
import ImpactAwards from "@/components/ImpactAwards";
import ImpactInstallHer from "@/components/ImpactInstallHer";
import ImpactSDG from "@/components/ImpactSDG";
import ImpactArticle from "@/components/ImpactArticle";
import ImpactVideos from "@/components/ImpactVideos";

export default function Impact() {
  const { homepage } = useFetchHomePage();
  const { impactPage, loading, error } = useFetchImpactPage();

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <div>Error</div>;
  }
  return (
    <div className="w-full">
      <Navbar />
      <ImpactHero impactPage={impactPage} />
      <ImpactInfo impactPage={impactPage} />
      <ImpactVideos impactPage={impactPage} />
      <ImpactArticle impactPage={impactPage} />
      <ImpactSDG impactPage={impactPage} />
      <ImpactInstallHer impactPage={impactPage} />
      <ImpactAwards impactPage={impactPage} />
      <Footer homepage={homepage} />
    </div>
  );
}
