import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Clients from "@/components/Clients";
import Expertise from "@/components/Expertise";
import Edge from "@/components/Edge";
import Segmentation from "@/components/Segmentation";
import Join from "@/components/Join";
import CatFramework from "@/components/CatFramework";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Stats />
        <Clients />
        <Expertise />
        <Edge />
        <Segmentation />
        <Join />
        <CatFramework />
        <HowItWorks />
        <FAQ />
        <Testimonials />
        <ContactCTA />
      </main>

      <Footer />
    </>
  );
}