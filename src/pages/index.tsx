import Container from "@mui/material/Container";
import OrganizeInventory from "@/components/HeroSection/OrganizeInventory";
import AccessInventory from "@/components/HeroSection/AccessInventory";
import GetReporting from "@/components/HeroSection/GetReporting";
import SyncInventory from "@/components/HeroSection/SyncInventory";
import Pricing from "@/components/HeroSection/Pricing";
import GetStart from "@/components/HeroSection/GetStart";
import About from "@/components/HeroSection/About";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function index() {
  return (
    <>
      <Header />
      <Container>
        <OrganizeInventory />
        <AccessInventory />
        <GetReporting />
        <SyncInventory />
        <Pricing />
        <About />
        <GetStart />
      </Container>
      <Footer />
    </>
  );
}

export default index;
