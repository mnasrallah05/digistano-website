import type { Metadata } from "next";
import { Button, CTA, JsonLd, PageHero, SectionHead } from "@/components/site/Elements";

const url =
  "https://www.digistano.com/services/engineering-services/mv-cable-vlf-testing";

export const metadata: Metadata = {
  title: "MV Cable, VLF & VLF-PD Testing GCC | DigiStano",
  description:
    "DigiStano provides MV cable testing, VLF withstand testing, VLF-PD diagnostics, Tan Delta assessment, and cable testing support across Saudi Arabia, UAE, Qatar, Oman, and Bahrain.",
  keywords: [
    "MV cable testing",
    "VLF testing",
    "VLF-PD testing",
    "cable partial discharge testing",
    "MV cable testing Saudi Arabia",
    "VLF testing KSA",
    "MV cable testing UAE",
    "cable testing Qatar",
    "cable testing Oman",
    "cable testing Bahrain",
    "Tan Delta cable testing",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "MV Cable, VLF and VLF-PD Testing | DigiStano",
    description:
      "Onsite MV cable testing and diagnostic support across Saudi Arabia, UAE, Qatar, Oman, and Bahrain.",
    url,
    siteName: "DigiStano",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://www.digistano.com/images/cables-testing.jpg",
        alt: "DigiStano MV cable and VLF testing services",
      },
    ],
  },
};

const services = [
  { title: "MV cable testing", text: "Field testing support for medium-voltage cable systems during commissioning, planned maintenance, troubleshooting, and condition assessment projects." },
  { title: "VLF withstand testing", text: "Very low frequency testing for cable withstand requirements using project-appropriate test equipment and agreed test parameters." },
  { title: "VLF-PD testing", text: "Combined VLF excitation and partial discharge measurement to support cable-system diagnostic assessment and defect localization activities." },
  { title: "Tan Delta diagnostics", text: "Dielectric-loss assessment to support evaluation of cable insulation condition and maintenance planning." },
];

const countries = ["Saudi Arabia", "United Arab Emirates", "Qatar", "Oman", "Bahrain"];

export default function MvCableVlfTestingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: "MV Cable, VLF and VLF-PD Testing",
    serviceType: "Medium-voltage cable testing and diagnostics",
    description: "MV cable testing, VLF withstand testing, VLF-PD diagnostics, and Tan Delta assessment.",
    url,
    provider: { "@id": "https://www.digistano.com/#organization" },
    areaServed: countries.map((name) => ({ "@type": "Country", name })),
  };

  return (
    <main className="ds-page">
      <JsonLd data={schema} />

      <PageHero
        label="Cable testing and diagnostics"
        title="MV cable testing, VLF and VLF-PD services across the GCC"
        text="DigiStano supports cable commissioning, withstand testing, diagnostic assessment, and partial discharge measurement projects in Saudi Arabia, UAE, Qatar, Oman, and Bahrain."
        image="/images/field/cable-vlf-service-v4.webp"
      >
        <Button href="/services/engineering-services#appointment">Book an engineering consultation</Button>
        <Button href="#cable-services" secondary>Explore cable services</Button>
      </PageHero>

      <section id="cable-services" className="ds-section">
        <div className="ds-container">
          <SectionHead label="Testing scope" title="Cable testing selected for the project objective." text="The final method and test parameters are coordinated according to the cable system, voltage class, site condition, and required assessment outcome." />
          <div className="ds-article-list">
            {services.map((item) => (
              <article className="ds-article-card" data-reveal key={item.title}>
                <h3 style={{ fontSize: 24 }}>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ds-section ds-dark-section">
        <div className="ds-container" data-reveal>
          <p className="ds-eyebrow"><span />Regional delivery</p>
          <h2 style={{ fontSize: 32, maxWidth: 560, marginBottom: 32 }}>Site-ready support across five key markets</h2>
          <div className="ds-icon-grid">
            {countries.map((country) => (
              <div key={country} style={{ padding: "20px 22px", border: "1px solid #ffffff20", borderRadius: "var(--radius-md)" }}>
                <p className="ds-overline" style={{ color: "var(--cyan)" }}>Service coverage</p>
                <h3 style={{ fontSize: 19, marginTop: 8 }}>{country}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA title="Plan your cable testing scope with DigiStano." text="Share the cable type, voltage class, project location, testing objective, and preferred schedule with our engineering team." />
    </main>
  );
}
