"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Terms from "@/components/Terms";
import { useFetchHomePage, useFetchTermsPage } from "@/hooks/useFetchPage";
import Loading from "@/components/Loading";

export default function Professionals() {
  const { homepage } = useFetchHomePage();
  const { termsPage, loading, error } = useFetchTermsPage();

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <div>Error</div>;
  }
  return (
    <div className="w-full">
      <Navbar />
      <Terms termsPage={termsPage} />
      <Footer homepage={homepage} />
    </div>
  );
}
