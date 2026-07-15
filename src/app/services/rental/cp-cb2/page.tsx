import type { Metadata } from "next";
import RentalLandingPage from "../_components/RentalLandingPage";

const canonicalUrl = "https://www.digistano.com/services/rental/cp-cb2";

export const metadata: Metadata = {
  title: "OMICRON CP CB2 Rental KSA, UAE, Qatar & Oman | DigiStano",
  description:
    "Rent the OMICRON CP CB2 current amplifier for CPC 100 high-current testing requirements up to 2000 A across Saudi Arabia, UAE, Qatar, and Oman.",
  keywords: ["CP CB2 rental", "OMICRON CP CB2 rental", "CPC 100 current booster rental", "2000 A primary injection rental"],
  alternates: { canonical: canonicalUrl },
  openGraph: { title: "OMICRON CP CB2 Rental | DigiStano", description: "CP CB2 current-amplifier rental across KSA, UAE, Qatar, and Oman.", url: canonicalUrl, siteName: "DigiStano", type: "website", images: [{ url: "https://www.digistano.com/images/products/cp-cb2.png", alt: "OMICRON CP CB2 rental equipment" }] },
};

export default function CpCb2RentalPage() {
  return (
    <RentalLandingPage
      name="OMICRON CP CB2"
      eyebrow="High-Current Testing Equipment Rental"
      summary="The CP CB2 is a current amplifier for the CPC 100, supporting high-current test requirements up to 2000 A. DigiStano provides project-based rental coordination across Saudi Arabia, UAE, Qatar, and Oman."
      applications={["High-current primary injection requirements", "CPC 100 test configurations", "Busbar and current-path testing", "Commissioning and maintenance projects"]}
      highlights={["CP CB2 rental availability confirmation", "Coordination with CPC 100 requirements", "Flexible project duration", "Regional delivery and technical coordination"]}
      canonicalUrl={canonicalUrl}
      image="/images/products/cp-cb2.png"
      imageAlt="OMICRON CP CB2 current amplifier available for rental"
    />
  );
}
