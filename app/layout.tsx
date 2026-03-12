import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Julian Hilzinger – Senior Software Architekt & KI-Stratege",
  description:
    "Julian Hilzinger – Senior Software Architekt & KI-Stratege | 10+ Jahre Erfahrung | Freelancer | Java, Spring Boot, Angular, KI-Agenten, Cloud-Native",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={inter.variable}>
      <body className="bg-bg-primary text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
