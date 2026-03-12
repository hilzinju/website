"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const icons = [
  <svg key="arch" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="28" height="28"><path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>,
  <svg key="ai" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="28" height="28"><path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>,
  <svg key="full" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="28" height="28"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>,
  <svg key="strat" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="28" height="28"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>,
  <svg key="ar" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="28" height="28"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>,
  <svg key="agile" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="28" height="28"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>,
];

export default function Services() {
  const t = useTranslations("services");
  const items = t.raw("items") as { title: string; desc: string }[];

  return (
    <section id="services" className="py-24">
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="glass-card p-6 group"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-accent bg-[rgba(74,144,217,0.08)] border border-[rgba(74,144,217,0.2)] group-hover:bg-[rgba(74,144,217,0.15)] transition-colors duration-300">
                {icons[i]}
              </div>
              <h3 className="text-base font-semibold text-text-primary mb-2">{item.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
