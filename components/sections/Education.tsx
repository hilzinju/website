"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const DegreeIcon = () => (
  <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="16" height="16">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
  </svg>
);

const CertIcon = ({ highlight }: { highlight?: boolean }) => (
  <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="16" height="16">
    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke={highlight ? "#3FB950" : "currentColor"} />
  </svg>
);

export default function Education() {
  const t = useTranslations("education");
  const degrees = t.raw("degrees") as { year: string; title: string; sub: string }[];
  const certs = t.raw("certs") as { year: string; title: string; sub: string; highlight: boolean }[];

  return (
    <section id="education" className="py-24">
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

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-text-primary font-semibold text-base mb-5">{t("degreesTitle")}</h3>
            <div className="space-y-3">
              {degrees.map((d, i) => (
                <div key={i} className="glass-card p-4 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-accent bg-[rgba(74,144,217,0.08)] border border-[rgba(74,144,217,0.2)] mt-0.5">
                    <DegreeIcon />
                  </div>
                  <div>
                    <div className="text-text-subtle text-xs font-mono mb-0.5">{d.year}</div>
                    <div className="text-text-primary text-sm font-semibold">{d.title}</div>
                    <div className="text-text-muted text-xs leading-relaxed">{d.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-text-primary font-semibold text-base mb-5">{t("certsTitle")}</h3>
            <div className="space-y-3">
              {certs.map((c, i) => (
                <div key={i} className="glass-card p-4 flex items-start gap-3">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                      c.highlight
                        ? "text-success bg-[rgba(63,185,80,0.08)] border border-[rgba(63,185,80,0.25)]"
                        : "text-accent bg-[rgba(74,144,217,0.08)] border border-[rgba(74,144,217,0.2)]"
                    }`}
                  >
                    <CertIcon highlight={c.highlight} />
                  </div>
                  <div>
                    <div
                      className={`text-xs font-mono mb-0.5 ${c.highlight ? "text-success" : "text-text-subtle"}`}
                    >
                      {c.year}
                    </div>
                    <div className="text-text-primary text-sm font-semibold">{c.title}</div>
                    <div className="text-text-muted text-xs leading-relaxed">{c.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
