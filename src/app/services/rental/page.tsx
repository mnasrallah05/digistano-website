import type { Metadata } from "next";
import RentalClient from "./RentalClient";

export const metadata: Metadata = {
  title:
    "Equipment Rental Services | Electrical Testing Equipment | DigiStano",
  description:
    "DigiStano provides flexible rental solutions for high-end electrical testing equipment, supporting commissioning, diagnostics, shutdowns, and project-based needs across the UAE and GCC.",
  keywords: [
    "Equipment Rental UAE",
    "Electrical Testing Equipment Rental",
    "High Voltage Testing Equipment",
    "Power System Equipment Rental",
    "Testing Equipment Rental GCC",
    "DigiStano Rental Services",
  ],
  openGraph: {
    title:
      "Equipment Rental Services | Electrical Testing Equipment | DigiStano",
    description:
      "Flexible rental solutions for advanced electrical testing equipment across the GCC region.",
    url: "https://www.digistano.com/services/rental",
    siteName: "DigiStano",
    images: [
      {
        url: "https://www.digistano.com/images/rental.jpg",
        width: 1200,
        height: 630,
        alt: "DigiStano Rental Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DigiStano Equipment Rental Services",
    description:
      "Access high-end electrical testing equipment with flexible rental solutions.",
    images: ["https://www.digistano.com/images/rental.jpg"],
  },
};

export default function Page() {
  return <RentalClient />;
}