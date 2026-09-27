import type { Metadata } from "next";
import { CTA, IconTile, PageHero, SectionHead } from "@/components/site/Elements";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.digistano.com/services/training" },
  title:
    "Training Services | Electrical & Energy Training Programs | DigiStano",
  description:
    "DigiStano provides professional training programs for electrical and energy sectors, covering testing, commissioning, asset management, protection systems, and real-world technical applications across the UAE and GCC.",
  keywords: [
    "Electrical Training UAE",
    "Power System Training",
    "Energy Sector Training",
    "Technical Training GCC",
    "Partial Discharge Training",
    "Substation Training",
    "DigiStano Training Services",
  ],
  openGraph: {
    title:
      "Training Services | Electrical & Energy Training Programs | DigiStano",
    description:
      "Professional training solutions for engineers and technicians in the electrical and energy sectors across the GCC.",
    url: "https://www.digistano.com/services/training",
    siteName: "DigiStano",
    images: [
      {
        url: "https://www.digistano.com/images/training.jpg",
        width: 1200,
        height: 630,
        alt: "DigiStano Training Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DigiStano Training Services",
    description:
      "Professional electrical and energy training programs across the GCC.",
    images: ["https://www.digistano.com/images/training.jpg"],
  },
};

const workAreas = [
  "Partial Discharge Measurement",
  "Design and Commissioning",
  "Substation Maintenance",
  "Asset Management",
  "Protection",
  "Metering",
];

export default function TrainingPage() {
  return (
    <main className="ds-page">
      <PageHero
        label="Training services"
        title="Professional training solutions for electrical and energy sectors"
        text="DigiStano provides technical training for engineers and technicians working with electrical assets. Course content is coordinated around the participants' experience, equipment, and practical learning objectives."
        image="/images/training.jpg"
      />

      <section className="ds-section">
        <div className="ds-container">
          <div className="ds-info-grid">
            <article className="ds-info-card">
              <span>01</span>
              <h3>Consultants</h3>
              <p>Specialised consultancy in system design, substation maintenance, asset management, protection, metering, and partial discharge measurement, tailored for optimal performance.</p>
            </article>
            <article className="ds-info-card">
              <span>02</span>
              <h3>Certificates</h3>
              <p>Certificate requirements and the form of completion documentation are agreed in the course proposal before the training is confirmed.</p>
            </article>
            <article className="ds-info-card">
              <span>03</span>
              <h3>Trainers</h3>
              <p>Highly experienced and certified, our trainers provide real-world insights, ensuring every participant receives valuable, practical training designed to meet industry needs.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="ds-section ds-section-tint">
        <div className="ds-container">
          <SectionHead label="How training works" title="Flexible, practical and built around your team." />
          <div className="ds-split" data-reveal>
            <div className="ds-icon-card">
              <IconTile name="pin" />
              <h3 style={{ fontSize: 20, marginTop: 16, marginBottom: 10 }}>Types of training</h3>
              <div style={{ display: "grid", gap: 12 }}>
                <p>Flexible location options, including sessions at our Training Centre in Dubai, Abu Dhabi, Saudi Arabia, at customer premises, or online for remote participation.</p>
                <p><strong>Customised training</strong> is tailored specifically to your needs and can be conducted at various locations, including the Dubai Training Centre, your premises, or any location of your choice.</p>
              </div>
            </div>
            <div className="ds-icon-card">
              <IconTile name="book" />
              <h3 style={{ fontSize: 20, marginTop: 16, marginBottom: 10 }}>Who should attend</h3>
              <div style={{ display: "grid", gap: 12 }}>
                <p>Courses cater to various levels, from basic to advanced topics, covering equipment operation, diverse applications, and theoretical principles.</p>
                <p>Designed around real-world testing scenarios, ideal for technicians and engineers in electrical utilities, industrial facilities, equipment manufacturing, and service companies.</p>
              </div>
            </div>
            <div className="ds-icon-card">
              <IconTile name="cpu" />
              <h3 style={{ fontSize: 20, marginTop: 16, marginBottom: 10 }}>Work areas</h3>
              <p style={{ marginBottom: 14 }}>Attendees include technicians and engineers specialising in:</p>
              <ul className="ds-check-list">{workAreas.map((area) => <li key={area}>{area}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>

      <section className="ds-section">
        <div className="ds-container ds-split" data-reveal>
          <div>
            <p className="ds-eyebrow"><span />Practical learning</p>
            <h2 style={{ fontSize: 32, marginBottom: 20 }}>Real-world training with hands-on technical exposure</h2>
          </div>
          <div style={{ display: "grid", gap: 16 }}>
            <p className="ds-body-copy">Our training environment is designed to be highly interactive, combining theory with practical application. Participants gain exposure to actual testing concepts, real operating scenarios, and technical discussions led by experienced trainers.</p>
            <p className="ds-body-copy">The atmosphere is collaborative and focused, helping attendees build confidence, expand technical knowledge, and strengthen practical skills relevant to field and utility operations.</p>
          </div>
        </div>
      </section>

      <CTA title="Schedule an appointment or consultation." text="Send an email to support@digistano.com and our team will help plan the right training programme for you." />
    </main>
  );
}
