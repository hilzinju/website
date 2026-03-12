"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const awardIcons = ["🏆", "🥇", "💡"];

export default function Awards() {
  const t = useTranslations("awards");
  const items = t.raw("items") as { year: string; title: string; desc: string }[];

  return (
    <section id="awards" className="py-24 bg-bg-secondary">
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
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6 text-center"
            >
              <div className="text-4xl mb-3" role="img" aria-hidden="true">
                {awardIcons[i]}
              </div>
              <div className="text-accent text-xs font-mono mb-2">{item.year}</div>
              <h3 className="text-text-primary font-semibold text-base mb-2">{item.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
