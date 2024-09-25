"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useFetchContactPage, useFetchHomePage } from "@/hooks/useFetchPage";
import Loading from "@/components/Loading";
import ContactHero from "@/components/ContactHero";
import ContactInfo from "@/components/ContactInfo";
import ContactLocation from "@/components/ContactLocation";

export default function Contact() {
  const { homepage } = useFetchHomePage();
  const { contactPage, loading, error } = useFetchContactPage();

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <div>Error</div>;
  }
  return (
    <div className="w-full">
      <Navbar />
      <ContactHero contactPage={contactPage} />
      <ContactInfo contactPage={contactPage} />
      <ContactLocation contactPage={contactPage} />
      <Footer homepage={homepage} />
    </div>
  );
}
