import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { SITE } from "@/lib/data";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: SITE.title,
  description: SITE.description,
  keywords: [
    "портфолио",
    "веб-разработка",
    "лендинг",
    "ремонт квартир",
    "демо",
    "Next.js",
  ],
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    type: "website",
    locale: "ru_RU",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${cormorant.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
