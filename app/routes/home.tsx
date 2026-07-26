import type { Route } from "./+types/home";
import { Nav } from "../components/Nav";
import { Ticker } from "../components/Ticker";
import { Hero } from "../components/Hero";
import { WhyUs } from "../components/WhyUs";
import { Gallery } from "../components/Gallery";
import { About } from "../components/About";
import { Licenses } from "../components/Licenses";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "NatureExpert Ayurvedic Pvt. Ltd. — Formulated Different" },
    {
      name: "description",
      content:
        "India's premier Ayurvedic contract manufacturer. Ministry of Ayush licensed. 40+ years of formulation expertise.",
    },
  ];
}

export default function Home() {
  return (
    <>
      <Nav />
      <Ticker />
      <Hero />
      <WhyUs />
      <Gallery />
      <About />
      <Licenses />
      <Contact />
      <Footer />
    </>
  );
}
