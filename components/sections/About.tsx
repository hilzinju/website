"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";

function AnimatedStat({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [displayed, setDisplayed] = useState("0");

  const isNumeric = /^\d+/.test(value);
  const numPart = parseInt(value);
  const suffix = value.replace(String(numPart), "");

  useEffect(() => {
    if (!inView || !isNumeric) {
      setDisplayed(value);
      return;
    }
    let count = 0;
    const step = Math.max(1, Math.ceil(numPart / 30));
    const interval = setInterval(() => {
      count = Math.min(count + step, numPart);
      setDisplayed(count + suffix);
      if (count >= numPart) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, [inView, numPart, suffix, isNumeric, value]);

  return (
    <div ref={ref} className="glass-card p-6 text-center">
      <div className="text-4xl font-extrabold text-accent mb-1">{displayed}</div>
      <div className="text-text-muted text-sm">{label}</div>
    </div>
  );
}

export default function About() {
  const t = useTranslations("about");

  return (
    <section id="about" className="py-24 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-tag">{t("tag")}</div>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-3">{t("title")}</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-4"
          >
            <p className="text-text-muted leading-relaxed">{t("bio1")}</p>
            <p className="text-text-muted leading-relaxed">{t("bio2")}</p>

            <div className="mt-6 space-y-3">
              {[
                { label: t("locationLabel"), value: t("locationValue") },
                { label: t("languagesLabel"), value: t("languagesValue") },
                { label: t("statusLabel"), value: t("statusValue"), highlight: true },
              ].map((row) => (
                <div key={row.label} className="flex gap-4 items-baseline">
                  <span className="text-text-subtle text-sm font-medium w-24 shrink-0">{row.label}</span>
                  <span
                    className={`text-sm font-medium ${row.highlight ? "text-success" : "text-text-primary"}`}
                  >
                    {row.value}
                  </span>
                </div>
              ))}
              <div className="flex gap-4 items-baseline">
                <span className="text-text-subtle text-sm font-medium w-24 shrink-0">LinkedIn</span>
                <a
                  href="https://www.linkedin.com/in/julian-hilzinger/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent-light text-sm transition-colors"
                >
                  linkedin.com/in/julian-hilzinger
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            <AnimatedStat value={t("stat1Value")} label={t("stat1Label")} />
            <AnimatedStat value={t("stat2Value")} label={t("stat2Label")} />
            <AnimatedStat value={t("stat3Value")} label={t("stat3Label")} />
            <AnimatedStat value={t("stat4Value")} label={t("stat4Label")} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
