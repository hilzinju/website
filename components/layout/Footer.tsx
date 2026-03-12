"use client";

import { useTranslations } from "next-intl";

interface FooterProps {
  onImpressum: () => void;
}

export default function Footer({ onImpressum }: FooterProps) {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-text-muted text-sm">{t("copyright")}</span>
        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/julian-hilzinger/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent transition-colors duration-200 text-sm font-medium"
          >
            LinkedIn
          </a>
          <button
            onClick={onImpressum}
            className="text-text-muted hover:text-accent transition-colors duration-200 text-sm font-medium bg-transparent border-none cursor-pointer p-0"
          >
            {t("impressum")}
          </button>
        </div>
      </div>
    </footer>
  );
}
