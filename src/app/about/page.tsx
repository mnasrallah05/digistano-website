import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About DigiStano | Electrical Testing & Engineering Experts",
  description:
    "Learn more about DigiStano Energy L.L.C, a leading provider of electrical testing, engineering services, and equipment rental solutions across the UAE and GCC region.",
  keywords: [
    "DigiStano",
    "About DigiStano",
    "Electrical Testing Company UAE",
    "Engineering Services GCC",
    "Power System Experts",
    "Equipment Rental UAE",
  ],
  openGraph: {
    title: "About DigiStano | Electrical Testing & Engineering Experts",
    description:
      "Discover DigiStano’s expertise in electrical testing, engineering services, and power solutions across the GCC.",
    url: "https://www.digistano.com/about",
    siteName: "DigiStano",
    images: [
      {
        url: "https://www.digistano.com/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "DigiStano About",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About DigiStano",
    description:
      "Electrical testing, engineering services, and power solutions across the GCC.",
    images: ["https://www.digistano.com/images/hero.jpg"],
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}