import type { Metadata } from "next";
import { Button, CTA, IconGrid, IconTile, PageHero, SectionHead } from "@/components/site/Elements";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.digistano.com/services/repair-calibration" },
  title:
    "Repair & Calibration Services | Equipment Accuracy & Performance | DigiStano",
  description:
    "DigiStano provides reliable repair and calibration services to improve equipment accuracy, reduce downtime, and maintain performance across industrial and electrical power applications in the UAE and GCC.",
  keywords: [
    "Repair Services UAE",
    "Calibration Services UAE",
    "Equipment Calibration GCC",
    "Electrical Testing Equipment Repair",
    "Measurement Accuracy Services",
    "DigiStano Repair Calibration",
  ],
  openGraph: {
    title:
      "Repair & Calibration Services | Equipment Accuracy & Performance | DigiStano",
    description:
      "Reliable repair and calibration services for industrial and electrical testing equipment across the GCC.",
    url: "https://www.digistano.com/services/repair-calibration",
    siteName: "DigiStano",
    images: [
      {
        url: "https://www.digistano.com/images/repair-calibration.jpg",
        width: 1200,
        height: 630,
        alt: "DigiStano Repair and Calibration Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DigiStano Repair & Calibration Services",
    description:
      "Reliable repair and calibration support for industrial and electrical equipment.",
    images: ["https://www.digistano.com/images/repair-calibration.jpg"],
  },
};

const whatWeCover = [
  "Mechanical failures",
  "Electrical problems",
  "Software issues",
  "Performance consistency checks",
  "Measurement accuracy verification",
  "Preventive servicing support",
];

export default function RepairAndCalibrationPage() {
  return (
    <main className="ds-page">
      <PageHero
        label="Repair & calibration"
        title="Reliable repair and calibration services for your equipment"
        text="Maximize efficiency and performance with DigiStano's reliable repair and calibration services for your equipment."
        image="/images/repair-calibration.jpg"
      >
        <Button href="/contact">Contact us</Button>
      </PageHero>

      <section className="ds-section">
        <div className="ds-container">
          <SectionHead label="Precision support" title="Keep your equipment accurate, efficient, and dependable." text="DigiStano's repair and calibration services are designed to meet the needs of a range of industries, including manufacturing, construction, healthcare, and more. We help clients reduce downtime, improve measurement accuracy, and maintain equipment performance through reliable service and technical support." />
        </div>
      </section>

      <section className="ds-section ds-section-tint">
        <div className="ds-container">
          <SectionHead label="Service highlights" title="End-to-end repair and calibration capabilities." text="Our services are structured to restore performance, ensure consistency, and minimize disruption to your operations." />
          <IconGrid items={[
            { icon: "wrench", title: "Repair services", text: "Our technicians are trained to diagnose and fix a wide range of issues, including mechanical failures, electrical problems, and software issues." },
            { icon: "gauge", title: "Calibration accuracy", text: "We use industry-standard calibration equipment to ensure equipment is functioning accurately and consistently across your applications." },
            { icon: "truck", title: "On-site support", text: "We also offer on-site repair services for larger equipment, minimizing downtime and reducing the need for equipment transportation." },
          ]} />
        </div>
      </section>

      <section className="ds-section">
        <div className="ds-container ds-split" data-reveal>
          <div className="ds-icon-card">
            <IconTile name="check" />
            <h3 style={{ fontSize: 22, marginTop: 18, marginBottom: 14 }}>What we cover</h3>
            <ul className="ds-check-list">{whatWeCover.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
          <div className="ds-icon-card">
            <IconTile name="shield" />
            <h3 style={{ fontSize: 22, marginTop: 18, marginBottom: 14 }}>Why it matters</h3>
            <div style={{ display: "grid", gap: 14 }}>
              <p>Proper repair and calibration reduce downtime, extend equipment life, and improve operational confidence in demanding environments.</p>
              <p>At DigiStano, we are committed to providing clients with reliable, efficient, and technically sound support to keep equipment operating at the required standard.</p>
            </div>
          </div>
        </div>
      </section>

      <CTA title="Contact us to learn more about our repair and calibration offerings." text="We can help you restore performance, improve reliability, and ensure your equipment remains accurate and ready for operation." />
    </main>
  );
}
