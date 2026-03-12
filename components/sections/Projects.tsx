"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const icons = [
  <svg key="p1" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="22" height="22"><path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>,
  <svg key="p2" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="22" height="22"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
  <svg key="p3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="22" height="22"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
];

export default function Projects() {
  const t = useTranslations("projects");
  const items = t.raw("items") as {
    period: string;
    active: boolean;
    title: string;
    client: string;
    desc: string;
    tags: string[];
  }[];

  return (
    <section id="projects" className="py-24 bg-bg-secondary">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center text-accent bg-[rgba(74,144,217,0.08)] border border-[rgba(74,144,217,0.2)]">
                  {icons[i]}
                </div>
                <span
                  className={`text-xs font-mono px-2 py-1 rounded-full ${
                    item.active
                      ? "bg-[rgba(63,185,80,0.1)] text-success border border-[rgba(63,185,80,0.3)]"
                      : "bg-bg-card text-text-muted border border-border"
                  }`}
                >
                  {item.period}
                </span>
              </div>

              <h3 className="text-text-primary font-semibold text-base mb-1">{item.title}</h3>
              <div className="text-accent text-xs font-medium mb-3">{item.client}</div>
              <p className="text-text-muted text-sm leading-relaxed flex-1 mb-4">{item.desc}</p>

              <div className="flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded-full bg-bg-primary border border-border text-text-subtle"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
