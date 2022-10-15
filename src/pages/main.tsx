import React from "react";
import OrganizeInventory from "@/components/HeroSection/OrganizeInventory/OrganizeInventory";
import AccessInventory from "@/components/HeroSection/AccessInventory/AccessInventory";
import GetReporting from "@/components/HeroSection/GetReporting/GetReporting";
import SyncInventory from "@/components/HeroSection/SyncInventory/SyncInventory";
import BusinessPartner from "@/components/HeroSection/BussinessPartner/BusinessPartner";
import Download from "@/components/HeroSection/Download/Download";
import Pricing from "@/components/HeroSection/Pricing/Pricing";
import GetStart from "@/components/HeroSection/GetStart/GetStart";
import About from "@/components/HeroSection/About/About";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

function test() {
  return (
    <div>
      <Header />
      <OrganizeInventory />
      <BusinessPartner />
      <AccessInventory />
      <GetReporting />
      <SyncInventory />
      <Download />
      <Pricing />
      <About />
      <GetStart />
      <Footer />
    </div>
  );
}

export default test;
