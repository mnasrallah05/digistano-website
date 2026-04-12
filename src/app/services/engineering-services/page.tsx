import type { Metadata } from "next";
import EngineeringServicesClient from "./EngineeringServicesClient";

export const metadata: Metadata = {
  title:
    "Engineering Services | Electrical Testing & Field Support | DigiStano",
  description:
    "DigiStano provides onsite engineering services including electrical testing, commissioning support, diagnostics, and field engineering solutions across the UAE and GCC.",
  keywords: [
    "Engineering Services UAE",
    "Electrical Testing Services",
    "Power System Engineering",
    "Commissioning Services",
    "High Voltage Testing",
    "Partial Discharge Testing",
    "Field Engineering GCC",
  ],
  openGraph: {
    title:
      "Engineering Services | Electrical Testing & Field Support | DigiStano",
    description:
      "Professional onsite engineering services including testing, diagnostics, commissioning, and power system support across the GCC.",
    url: "https://www.digistano.com/services/engineering-services",
    siteName: "DigiStano",
    images: [
      {
        url: "https://www.digistano.com/images/engineering-services.jpg",
        width: 1200,
        height: 630,
        alt: "DigiStano Engineering Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DigiStano Engineering Services",
    description:
      "Onsite electrical testing, commissioning, and engineering support across the GCC.",
    images: [
      "https://www.digistano.com/images/engineering-services.jpg",
    ],
  },
};

export default function Page() {
  return <EngineeringServicesClient />;
}