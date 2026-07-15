import type { Metadata } from "next";
import RentalLandingPage from "../_components/RentalLandingPage";

const canonicalUrl = "https://www.digistano.com/services/rental/cmc-500";

export const metadata: Metadata = {
  title: "OMICRON CMC 500 Rental KSA, UAE, Qatar & Oman | DigiStano",
  description:
    "Rent the OMICRON CMC 500 for protection relay, IEC 61850, current transformer, and circuit-breaker testing projects in Saudi Arabia, UAE, Qatar, and Oman.",
  keywords: ["CMC500 rental", "CMC 500 rental", "CMC 500 rental KSA", "OMICRON rental Saudi Arabia", "relay test set rental"],
  alternates: { canonical: canonicalUrl },
  openGraph: { title: "OMICRON CMC 500 Rental | DigiStano", description: "CMC 500 rental support across KSA, UAE, Qatar, and Oman.", url: canonicalUrl, siteName: "DigiStano", type: "website", images: [{ url: "https://www.digistano.com/images/products/cmc-500.png", alt: "OMICRON CMC 500 rental equipment" }] },
};

export default function Cmc500RentalPage() {
  return (
    <RentalLandingPage
      name="OMICRON CMC 500"
      eyebrow="Protection Testing Equipment Rental"
      summary="DigiStano provides CMC 500 rental for modern protection testing requirements, from electromechanical relays to IEC 61850 IEDs, with flexible project-based coordination across the region."
      applications={["Protection relay testing", "IEC 61850 signal testing", "Functional testing of current transformers and circuit breakers", "Troubleshooting and field commissioning support"]}
      highlights={["Flexible rental periods", "Project and site coordination", "Equipment availability confirmation before mobilization", "Technical support available according to the agreed scope"]}
      canonicalUrl={canonicalUrl}
      image="/images/products/cmc-500.png"
      imageAlt="OMICRON CMC 500 protection relay test set available for rental"
    />
  );
}
