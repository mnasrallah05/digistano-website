"use client";

import { useState } from "react";
import { CTA, IconTile, PageHero, SectionHead } from "@/components/site/Elements";

function VideoShowcase() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="ds-video-panel" data-reveal>
      {!isPlaying ? (
        <button type="button" onClick={() => setIsPlaying(true)} className="ds-video-trigger">
          <img src="/images/video-cover.jpg" alt="DigiStano" />
          <span className="ds-video-play"><span /></span>
          <span className="ds-video-caption">
            <p>Watch presentation</p>
            <h3>DigiStano at a glance</h3>
            <p>Discover our capabilities, technical expertise, and regional support across the electrical power industry.</p>
          </span>
        </button>
      ) : (
        <video controls autoPlay className="ds-video">
          <source src="/videos/about-v2.mp4" type="video/mp4" />
        </video>
      )}
    </div>
  );
}

const values = [
  { number: "01", title: "Collaboration with our partners", description: "We work closely with our partners to develop tailored solutions that address their unique needs, technical challenges, and market expectations." },
  { number: "02", title: "Passion for results", description: "We are driven by performance and execution, delivering high-value solutions and support that exceed expectations and create lasting impact." },
  { number: "03", title: "Constantly improving", description: "We continuously refine our services, knowledge, and technical capabilities to meet evolving partner requirements and industry demands." },
];

export default function AboutPageClient() {
  return (
    <main className="ds-page">
      <PageHero
        label="About DigiStano"
        title="A leading player in the electrical power industry"
        text="DigiStano delivers advanced technology solutions, expert technical support, and strong partner representation across the UAE and GCC power sector."
        image="/images/hero.jpg"
        imageAlt="DigiStano engineer on site"
        stats={[
          { label: "Industry Focus", value: "Electrical Power" },
          { label: "Regional Presence", value: "UAE & GCC" },
          { label: "Core Strength", value: "Fast Local Support" },
        ]}
      />

      <section className="ds-section">
        <div className="ds-container">
          <SectionHead label="Who we are" title="Built to serve the power sector with expertise, speed, and trust." text="DigiStano combines technical depth, local market understanding, and strong international partnerships to deliver practical value across the electrical power industry." />
          <div className="ds-split" data-reveal>
            <div className="ds-icon-card">
              <IconTile name="cpu" />
              <h3 style={{ fontSize: 22, marginTop: 18 }}>Our company</h3>
              <div style={{ marginTop: 14, display: "grid", gap: 14 }}>
                <p>DigiStano is headquartered in Abu Dhabi, UAE, and operates through locally registered entities in the UAE, Saudi Arabia, and Bahrain. Our engineering and technical services cover the UAE, Saudi Arabia, Oman, Qatar, and Bahrain.</p>
                <p>DigiStano is established to serve the electrical power industry with innovative and advanced technology solutions, in addition to providing professional representation for international high voltage substation solutions manufacturers in the UAE market.</p>
                <p>Our targeted customer segments span utilities such as DEWA, SEWA, TRANSCO, AADC, ADDC and FEWA; the oil and gas sector including the ADNOC group and NPCC; equipment manufacturers such as Siemens, ABB, GE, Schneider Electric, Ducab and Lucy Switchgear; and contractors including Danway, EEE and L&amp;T.</p>
              </div>
            </div>
            <div className="ds-dark-card">
              <IconTile name="wrench" light />
              <h3 style={{ marginTop: 18 }}>Our capability</h3>
              <div style={{ display: "grid", gap: 14, color: "#b9ccd7", fontSize: 14, lineHeight: 1.8 }}>
                <p>Our experienced team based in Sharjah, Dubai and Abu Dhabi is equipped with all required test equipment and tools to provide local support on an immediate basis.</p>
                <p>We offer warranty support as part of after-sales services, in addition to basic and advanced training courses.</p>
                <p>DigiStano is managed by a group of experts in the power system field with an excellent network in the UAE, helping expand the reach of our solutions.</p>
              </div>
              <div className="ds-dark-card-grid">
                <div><span>Support base</span><strong>Sharjah, Dubai, Abu Dhabi</strong></div>
                <div><span>Added value</span><strong>Local support, warranty, training</strong></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ds-section ds-section-tint">
        <div className="ds-container">
          <div className="ds-quote-panel" data-reveal>
            <div className="ds-quote-mark" aria-hidden="true">&ldquo;</div>
            <p>Our mission at DigiStano is to empower progress, foster enduring partnerships, and drive excellence in the electrical power industry.</p>
            <p className="ds-quote-strong">Going beyond mere solutions provision.</p>
          </div>
        </div>
      </section>

      <section className="ds-section">
        <div className="ds-container">
          <SectionHead label="Company video" title="A closer look at DigiStano." text="An overview of our expertise, solutions, and commitment to excellence in the electrical power sector." />
          <VideoShowcase />
        </div>
      </section>

      <section className="ds-section ds-section-tint">
        <div className="ds-container">
          <SectionHead label="Our values" title="Values we live by." text="The way we work is shaped by strong collaboration, accountability, and a continuous commitment to improvement." />
          <div className="ds-info-grid">
            {values.map((value) => (
              <article className="ds-info-card" data-reveal key={value.number}>
                <span>{value.number}</span>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTA title="Ready to reach new heights? Let's get there, together." text="DigiStano is here to support you every step of the way with trusted technical expertise, strong partnerships, and high-value solutions." />
    </main>
  );
}
