"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ImpressumModal from "@/components/layout/ImpressumModal";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Awards from "@/components/sections/Awards";
import Contact from "@/components/sections/Contact";
import InfiniteGridBackground from "@/components/ui/infinite-grid-background";

export default function HomePage() {
  const [impressumOpen, setImpressumOpen] = useState(false);

  return (
    <>
      <InfiniteGridBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Awards />
        <Contact />
      </main>
      <Footer onImpressum={() => setImpressumOpen(true)} />
      <ImpressumModal open={impressumOpen} onClose={() => setImpressumOpen(false)} />
    </>
  );
}
