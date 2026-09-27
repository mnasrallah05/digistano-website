import { Button, IconTile, JsonLd, PageHero, SectionHead } from "@/components/site/Elements";

type RentalLandingPageProps = {
  name: string;
  eyebrow: string;
  summary: string;
  applications: string[];
  highlights: string[];
  canonicalUrl: string;
  image?: string;
  imageAlt?: string;
};

const countries = [
  "Saudi Arabia",
  "United Arab Emirates",
  "Qatar",
  "Oman",
  "Bahrain",
];

export default function RentalLandingPage({
  name,
  eyebrow,
  summary,
  applications,
  highlights,
  canonicalUrl,
  image,
  imageAlt,
}: RentalLandingPageProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${canonicalUrl}#rental-service`,
    name: `${name} Rental`,
    serviceType: "Electrical testing equipment rental",
    description: summary,
    image: image ? `https://www.digistano.com${image}` : undefined,
    url: canonicalUrl,
    provider: { "@id": "https://www.digistano.com/#organization" },
    areaServed: countries.map((country) => ({
      "@type": "Country",
      name: country,
    })),
  };

  return (
    <main className="ds-page">
      <JsonLd data={schema} />

      <PageHero label={eyebrow} title={`${name} rental across key GCC markets`} text={summary} image={image} imageAlt={imageAlt}>
        <Button href="/services/rental#rental-form">Request rental availability</Button>
        <a href="https://wa.me/971509020692" target="_blank" rel="noopener noreferrer" className="ds-button ds-button-secondary">Ask on WhatsApp</a>
      </PageHero>

      <section className="ds-section">
        <div className="ds-container ds-split" data-reveal>
          <div>
            <p className="ds-eyebrow"><span />Typical applications</p>
            <h2 style={{ fontSize: 30, marginBottom: 24 }}>Equipment support for demanding field projects</h2>
            <div style={{ display: "grid", gap: 12 }}>
              {applications.map((item) => (
                <div key={item} className="ds-icon-card" style={{ display: "flex", gap: 16, alignItems: "flex-start", padding: 20 }}>
                  <IconTile name="check" />
                  <p style={{ paddingTop: 10 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="ds-dark-card">
            <p className="ds-eyebrow" style={{ color: "var(--cyan)" }}><span />DigiStano rental support</p>
            <h3 style={{ fontSize: 24, marginTop: 12 }}>Rental planned around your scope</h3>
            <ul style={{ marginTop: 22 }}>
              {highlights.map((item) => <li key={item}><p style={{ fontWeight: 400, color: "#e5eef3" }}>{item}</p></li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="ds-section ds-section-tint">
        <div className="ds-container">
          <SectionHead label="Regional rental coverage" title="Support across five GCC markets." />
          <div className="ds-country-list">
            {countries.map((country) => <div key={country} data-reveal><h3>{country}</h3></div>)}
          </div>
        </div>
      </section>

      <section className="ds-cta">
        <div className="ds-container ds-cta-inner">
          <div>
            <h2>Check {name} rental availability</h2>
            <p>Submit the project location, required dates, and application. DigiStano will review the request and confirm the next steps.</p>
          </div>
          <Button href="/services/rental#rental-form" light>Start rental request</Button>
        </div>
      </section>
    </main>
  );
}
