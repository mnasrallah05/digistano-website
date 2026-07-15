import type { Metadata } from "next";
import RentalLandingPage from "../_components/RentalLandingPage";

const canonicalUrl = "https://www.digistano.com/services/rental/b2-electronics";

export const metadata: Metadata = {
  title: "b2 electronics VLF Equipment Rental GCC | DigiStano",
  description:
    "Rent b2 electronics HVA VLF and cable-diagnostic equipment for MV cable testing projects in Saudi Arabia, UAE, Qatar, and Oman through DigiStano.",
  keywords: ["B2 rental", "b2 electronics rental", "HVA rental KSA", "VLF equipment rental", "cable test equipment rental GCC"],
  alternates: { canonical: canonicalUrl },
  openGraph: { title: "b2 electronics Equipment Rental | DigiStano", description: "HVA VLF and cable-diagnostic equipment rental across KSA, UAE, Qatar, and Oman.", url: canonicalUrl, siteName: "DigiStano", type: "website" },
};

export default function B2RentalPage() {
  return (
    <RentalLandingPage
      name="b2 electronics test equipment"
      eyebrow="VLF and Cable Diagnostics Rental"
      summary="DigiStano provides access to b2 electronics HVA-series VLF and cable-diagnostic equipment for medium-voltage cable testing requirements across the region."
      applications={["VLF withstand testing", "MV cable condition assessment", "Tan Delta diagnostic requirements", "VLF-PD testing configurations"]}
      highlights={["HVA-series availability confirmation", "Project-specific equipment selection", "Flexible rental duration", "Regional delivery and technical coordination"]}
      canonicalUrl={canonicalUrl}
    />
  );
}
