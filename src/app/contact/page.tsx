import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact DigiStano | Engineering, Rental & Technical Support",
  description:
    "Contact DigiStano Energy L.L.C for engineering services, equipment rental, testing solutions, training, and technical support across the UAE and GCC region.",
  keywords: [
    "Contact DigiStano",
    "Engineering Services UAE",
    "Equipment Rental UAE",
    "Electrical Testing Support",
    "Technical Consultation GCC",
    "DigiStano Contact",
  ],
  openGraph: {
    title: "Contact DigiStano | Engineering, Rental & Technical Support",
    description:
      "Get in touch with DigiStano for engineering solutions, testing services, and technical consultation.",
    url: "https://www.digistano.com/contact",
    siteName: "DigiStano",
    images: [
      {
        url: "https://www.digistano.com/images/contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact DigiStano",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact DigiStano",
    description:
      "Reach out to DigiStano for engineering services, rentals, and technical solutions.",
    images: ["https://www.digistano.com/images/contact.jpg"],
  },
};

export default function Page() {
  return <ContactClient />;
}