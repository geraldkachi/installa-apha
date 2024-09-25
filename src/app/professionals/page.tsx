"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProfessionalsHero from "@/components/ProfessionalsHero";
import ProfessionalsWhy from "@/components/ProfessionalsWhy";
import ProfessionalsBenefit from "@/components/ProfessionalsBenefit";
import ProfessionalsHow from "@/components/ProfessionalsHow";
import ProfessionalsTraining from "@/components/ProfessionalsTraining";
import Testimonials from "@/components/Testimonials";
import ProfessionalsCTA from "@/components/ProfessionalsCTA";
import {
  useFetchHomePage,
  useFetchProfessionalsPage,
} from "@/hooks/useFetchPage";
import Loading from "@/components/Loading";

export default function Professionals() {
  const { professionalsPage, loading, error } = useFetchProfessionalsPage();
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
      <ProfessionalsHero professionalsPage={professionalsPage} />
      <ProfessionalsWhy professionalsPage={professionalsPage} />
      <ProfessionalsBenefit professionalsPage={professionalsPage} />
      <ProfessionalsHow professionalsPage={professionalsPage} />
      <ProfessionalsTraining professionalsPage={professionalsPage} />
      <Testimonials homepage={homepage} />
      <ProfessionalsCTA />
      <Footer homepage={homepage} />
    </div>
  );
}
