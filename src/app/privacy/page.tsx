"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Privacy from "@/components/Privacy";
import { useFetchHomePage, useFetchPrivacyPage } from "@/hooks/useFetchPage";
import Loading from "@/components/Loading";

export default function Professionals() {
  const { homepage } = useFetchHomePage();
  const { privacyPage, loading, error } = useFetchPrivacyPage();

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <div>Error</div>;
  }
  return (
    <div className="w-full">
      <Navbar />
      <Privacy privacyPage={privacyPage} />
      <Footer homepage={homepage} />
    </div>
  );
}
