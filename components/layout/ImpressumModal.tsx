"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";

interface ImpressumModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ImpressumModal({ open, onClose }: ImpressumModalProps) {
  const t = useTranslations("impressum");

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[1000] flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.75)" }}
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="bg-bg-card border border-border rounded-2xl w-full max-w-2xl max-h-[80vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between p-6 border-b border-border sticky top-0 bg-bg-card rounded-t-2xl z-10">
              <h3 className="text-lg font-semibold text-text-primary">{t("title")}</h3>
              <button
                onClick={onClose}
                className="text-text-muted hover:text-text-primary transition-colors p-1 bg-transparent border-none cursor-pointer"
                aria-label="Close"
              >
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <div className="p-6 space-y-5 text-sm text-text-muted leading-relaxed">
              <section>
                <h4 className="text-text-primary font-semibold mb-2">{t("section1Title")}</h4>
                <address className="not-italic whitespace-pre-line">{t("address")}</address>
              </section>

              <hr className="border-border" />

              <section>
                <h4 className="text-text-primary font-semibold mb-2">{t("section2Title")}</h4>
                <p>
                  {t("phone")}: {t("phoneValue")}
                  <br />
                  E-Mail:{" "}
                  <a href={`mailto:${t("emailValue")}`} className="text-accent hover:text-accent-light">
                    {t("emailValue")}
                  </a>
                </p>
              </section>

              <hr className="border-border" />

              <section>
                <h4 className="text-text-primary font-semibold mb-2">{t("section3Title")}</h4>
                <p>{t("vatText")}</p>
              </section>

              <hr className="border-border" />

              <section>
                <h4 className="text-text-primary font-semibold mb-2">{t("section4Title")}</h4>
                <p>{t("profText")}</p>
              </section>

              <hr className="border-border" />

              <section>
                <h4 className="text-text-primary font-semibold mb-2">{t("section5Title")}</h4>
                <p>{t("liabilityText")}</p>
              </section>

              <hr className="border-border" />

              <section>
                <h4 className="text-text-primary font-semibold mb-2">{t("section6Title")}</h4>
                <p>{t("linksText")}</p>
              </section>

              <hr className="border-border" />

              <section>
                <h4 className="text-text-primary font-semibold mb-2">{t("section7Title")}</h4>
                <p>{t("copyrightText")}</p>
              </section>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
