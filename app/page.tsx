import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Clients from "@/components/Clients";
import Edge from "@/components/Edge";
import Expertise from "@/components/Expertise";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Clients />
        <Edge />
        <Expertise />
      </main>
    </>
  );
}