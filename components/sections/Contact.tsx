"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Contact() {
  const t = useTranslations("contact");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (data: FormData) => {
    const errs: Record<string, string> = {};
    if (!data.get("fname")) errs.fname = "Required";
    if (!data.get("lname")) errs.lname = "Required";
    const email = data.get("email") as string;
    if (!email) errs.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "Invalid email";
    if (!data.get("message")) errs.message = "Required";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const errs = validate(data);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
    form.reset();
  };

  const inputClass = (field: string) =>
    `w-full bg-bg-card border rounded-xl px-4 py-3 text-text-primary text-sm placeholder-text-subtle outline-none transition-all duration-200 focus:border-accent ${
      errors[field] ? "border-red-500" : "border-border"
    }`;

  return (
    <section id="contact" className="py-24">
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

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-text-primary font-semibold text-lg">{t("directTitle")}</h3>
            <p className="text-text-muted text-sm leading-relaxed">{t("directDesc")}</p>

            <div className="space-y-3">
              <a
                href="https://www.linkedin.com/in/julian-hilzinger/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 glass-card p-4 hover:border-accent transition-all duration-200 no-underline"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-accent bg-[rgba(74,144,217,0.08)] border border-[rgba(74,144,217,0.2)] shrink-0">
                  <svg fill="currentColor" viewBox="0 0 24 24" width="18" height="18">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-text-subtle text-xs">LinkedIn</div>
                  <div className="text-text-primary text-sm font-medium">linkedin.com/in/julian-hilzinger</div>
                </div>
              </a>

              <div className="flex items-center gap-4 glass-card p-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-accent bg-[rgba(74,144,217,0.08)] border border-[rgba(74,144,217,0.2)] shrink-0">
                  <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="18" height="18">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <div className="text-text-subtle text-xs">{t("locationLabel")}</div>
                  <div className="text-text-primary text-sm font-medium">{t("locationValue")}</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-text-primary font-semibold text-lg mb-5">{t("formTitle")}</h3>
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-text-muted text-xs font-medium mb-1.5">
                    {t("firstName")} *
                  </label>
                  <input
                    name="fname"
                    type="text"
                    placeholder={t("firstNamePlaceholder")}
                    className={inputClass("fname")}
                  />
                  {errors.fname && <p className="text-red-400 text-xs mt-1">{errors.fname}</p>}
                </div>
                <div>
                  <label className="block text-text-muted text-xs font-medium mb-1.5">
                    {t("lastName")} *
                  </label>
                  <input
                    name="lname"
                    type="text"
                    placeholder={t("lastNamePlaceholder")}
                    className={inputClass("lname")}
                  />
                  {errors.lname && <p className="text-red-400 text-xs mt-1">{errors.lname}</p>}
                </div>
              </div>

              <div>
                <label className="block text-text-muted text-xs font-medium mb-1.5">
                  {t("email")} *
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="max@firma.de"
                  className={inputClass("email")}
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-text-muted text-xs font-medium mb-1.5">
                  {t("subject")}
                </label>
                <input
                  name="subject"
                  type="text"
                  placeholder={t("subjectPlaceholder")}
                  className={inputClass("subject")}
                />
              </div>

              <div>
                <label className="block text-text-muted text-xs font-medium mb-1.5">
                  {t("message")} *
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder={t("messagePlaceholder")}
                  className={`${inputClass("message")} resize-none`}
                />
                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-accent hover:bg-accent-light text-white font-semibold rounded-xl transition-colors duration-200"
              >
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <line x1="22" y1="2" x2="11" y2="13"/>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
                {t("send")}
              </button>

              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-success text-sm text-center"
                >
                  ✓ {t("success")}
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
