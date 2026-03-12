"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Hero() {
  const t = useTranslations("hero");
  const [typedText, setTypedText] = useState("");

  const phrases: string[] = t.raw("phrases") as string[];

  // Typewriter effect
  useEffect(() => {
    let phraseIdx = 0;
    let charIdx = 0;
    let deleting = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    const type = () => {
      const current = phrases[phraseIdx % phrases.length];
      setTypedText(current.substring(0, charIdx));
      let speed = deleting ? 40 : 80;

      if (!deleting && charIdx === current.length) {
        speed = 2000;
        deleting = true;
      } else if (deleting && charIdx === 0) {
        deleting = false;
        phraseIdx++;
        speed = 400;
      }
      charIdx += deleting ? -1 : 1;
      timeoutId = setTimeout(type, speed);
    };
    type();
    return () => clearTimeout(timeoutId);
  }, [phrases.join(",")]);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative min-h-screen w-full flex items-center pt-[70px] overflow-hidden">
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl md:text-6xl font-extrabold text-text-primary leading-tight mb-4">
              <span className="whitespace-nowrap">
                <span className="text-accent">{typedText}</span>
                <span className="animate-pulse text-accent">|</span>
              </span>
            </h1>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-text-muted mb-8 max-w-xl"
          >
            {t("subtitle")}
          </motion.p>

          <motion.blockquote
            variants={itemVariants}
            className="border-l-2 border-accent pl-4 mb-10 text-text-muted italic text-sm"
          >
            {t("quote")}
            <footer className="mt-1 text-text-subtle not-italic text-xs">{t("quoteAuthor")}</footer>
          </motion.blockquote>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-light text-white font-semibold rounded-xl transition-colors duration-200"
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
              {t("ctaContact")}
            </a>
            <a
              href="https://www.linkedin.com/in/julian-hilzinger/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-text-muted hover:border-accent hover:text-accent rounded-xl transition-all duration-200"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" width="16" height="16">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-subtle animate-bounce">
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </section>
  );
}
