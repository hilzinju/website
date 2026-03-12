"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ImpressumModal from "@/components/layout/ImpressumModal";
import Hero from "@/components/sections/Hero";
import InfiniteGridBackground from "@/components/ui/infinite-grid-background";

// Lazy-load all below-fold sections — reduces initial bundle parsed on mobile
const About      = dynamic(() => import("@/components/sections/About"));
const Services   = dynamic(() => import("@/components/sections/Services"));
const Skills     = dynamic(() => import("@/components/sections/Skills"));
const Experience = dynamic(() => import("@/components/sections/Experience"));
const Projects   = dynamic(() => import("@/components/sections/Projects"));
const Education  = dynamic(() => import("@/components/sections/Education"));
const Awards     = dynamic(() => import("@/components/sections/Awards"));
const Contact    = dynamic(() => import("@/components/sections/Contact"));

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
