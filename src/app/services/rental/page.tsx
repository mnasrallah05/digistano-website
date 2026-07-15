import type { Metadata } from "next";
import RentalClient from "./RentalClient";

export const metadata: Metadata = {
  title:
    "Equipment Rental Services | Electrical Testing Equipment | DigiStano",
  description:
    "Rent specialized electrical testing equipment from DigiStano for commissioning, diagnostics, shutdowns, and project requirements across Saudi Arabia, UAE, Qatar, and Oman.",
  keywords: [
    "Equipment Rental UAE",
    "Electrical Testing Equipment Rental",
    "High Voltage Testing Equipment",
    "Power System Equipment Rental",
    "Testing Equipment Rental GCC",
    "DigiStano Rental Services",
    "Test Equipment Rental Saudi Arabia",
    "Test Equipment Rental Qatar",
    "Test Equipment Rental Oman",
  ],
  alternates: {
    canonical: "https://www.digistano.com/services/rental",
  },
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
  const rentalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.digistano.com/services/rental#service",
    name: "Electrical Testing Equipment Rental",
    serviceType: "Electrical and high-voltage testing equipment rental",
    description:
      "Flexible rental of calibrated electrical testing equipment for commissioning, diagnostics, shutdowns, and project work.",
    url: "https://www.digistano.com/services/rental",
    provider: { "@id": "https://www.digistano.com/#organization" },
    areaServed: [
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Country", name: "Saudi Arabia" },
      { "@type": "Country", name: "Bahrain" },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(rentalServiceSchema).replace(/</g, "\\u003c"),
        }}
      />
      <RentalClient />
    </>
  );
}
