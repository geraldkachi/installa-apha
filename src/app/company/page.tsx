"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CompanyHero from "@/components/CompanyHero";
import CompanyServices from "@/components/CompanyServices";
import CompanyWhy from "@/components/CompanyWhy";
import CompanyWho from "@/components/CompanyWho";
import CompanyHow from "@/components/CompanyHow";
import CompanyCTA from "@/components/CompanyCTA";
import { useFetchCompaniesPage, useFetchHomePage } from "@/hooks/useFetchPage";
import Loading from "@/components/Loading";

export default function Company() {
  const { companiesPage, loading, error } = useFetchCompaniesPage();
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
      <CompanyHero companiesPage={companiesPage} />
      <CompanyServices companiesPage={companiesPage} />
      <CompanyWhy companiesPage={companiesPage} />
      <CompanyWho companiesPage={companiesPage} />
      <CompanyHow companiesPage={companiesPage} />
      <CompanyCTA companiesPage={companiesPage} />
      <Footer homepage={homepage} />
    </div>
  );
}
