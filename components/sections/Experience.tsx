"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const icons = [
  <svg key="f" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>,
  <svg key="l" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>,
  <svg key="h" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
  <svg key="c" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
  <svg key="r" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>,
];

export default function Experience() {
  const t = useTranslations("experience");
  const items = t.raw("items") as {
    period: string;
    role: string;
    company: string;
    desc: string;
    active: boolean;
  }[];

  return (
    <section id="experience" className="py-24">
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
          <p className="text-text-muted max-w-xl mx-auto">{t("subtitle")}</p>
        </motion.div>

        <div className="relative">
          <div className="timeline-line hidden md:block" />

          <div className="space-y-8 md:space-y-12">
            {items.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={`relative flex flex-col md:flex-row gap-6 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className={`md:w-[calc(50%-2rem)] ${isLeft ? "md:text-right" : ""}`}>
                    <div className="glass-card p-5">
                      <div className="text-accent text-xs font-mono mb-2">{item.period}</div>
                      <h3 className="text-text-primary font-semibold text-base mb-1">{item.role}</h3>
                      <div
                        className={`text-sm font-medium mb-3 ${item.active ? "text-success" : "text-text-muted"}`}
                      >
                        {item.company}
                      </div>
                      <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>

                  <div className="hidden md:flex items-start justify-center w-16 shrink-0 pt-5">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center border-2 z-10 ${
                        item.active
                          ? "bg-accent border-accent text-white"
                          : "bg-bg-card border-border text-text-muted"
                      }`}
                    >
                      {icons[i]}
                    </div>
                  </div>

                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
