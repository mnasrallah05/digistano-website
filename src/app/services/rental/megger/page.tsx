import type { Metadata } from "next";
import RentalLandingPage from "../_components/RentalLandingPage";

const canonicalUrl = "https://www.digistano.com/services/rental/megger";

export const metadata: Metadata = {
  title: "Megger Test Equipment Rental GCC | DigiStano",
  description:
    "Request Megger electrical test equipment rental for cable, relay, transformer, insulation, and substation testing projects in Saudi Arabia, UAE, Qatar, and Oman.",
  keywords: ["Megger rental", "Megger equipment rental KSA", "Megger rental UAE", "electrical test equipment rental Qatar", "Megger test equipment Oman"],
  alternates: { canonical: canonicalUrl },
  openGraph: { title: "Megger Test Equipment Rental | DigiStano", description: "Megger rental enquiries across KSA, UAE, Qatar, and Oman.", url: canonicalUrl, siteName: "DigiStano", type: "website" },
};

export default function MeggerRentalPage() {
  return (
    <RentalLandingPage
      name="Megger test equipment"
      eyebrow="Electrical Test Equipment Rental"
      summary="DigiStano supports Megger equipment rental enquiries for electrical testing and diagnostic projects. Submit the required model or application so our team can confirm the suitable available equipment."
      applications={["Cable testing and diagnostics", "Protection relay and substation testing", "Transformer and winding measurements", "Insulation and electrical maintenance testing"]}
      highlights={["Model and configuration confirmed against the enquiry", "Flexible project-based rental", "Regional coordination", "Technical discussion available before confirmation"]}
      canonicalUrl={canonicalUrl}
    />
  );
}
