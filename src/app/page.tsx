import Image from "next/image";
import Link from "next/link";
import {
  ApplicationCards,
  Arrow,
  Button,
  Coverage,
  CTA,
  Eyebrow,
  FAQ,
  FAQSchema,
  Icon,
  IconGrid,
  SectionHead,
  ServiceCards,
  ServiceSchema,
} from "@/components/site/Elements";
import ClientsSlider from "@/components/sections/ClientsSlider";
import { ENQUIRY_PATH, PD_PATH, pageMetadata, pdFaqs } from "@/lib/site";

export const metadata = pageMetadata(
  "Partial Discharge Testing & Electrical Diagnostics",
  "DigiStano specialises in onsite partial discharge testing and electrical diagnostics in the UAE, Saudi Arabia, Oman, Qatar and Bahrain. Equipment rental supports our engineering services.",
  "/",
);

export default function HomePage() {
  return <main className="ds-page">
    <ServiceSchema name="Partial discharge testing and electrical diagnostic services" description="Onsite PD testing for GIS, switchgear, cables, transformers, motors and generators across five GCC markets." path="/" />
    <FAQSchema items={[pdFaqs[0], pdFaqs[2], pdFaqs[3]]} />

    <section className="ds-home-hero">
      <div className="ds-home-hero-media"><Image src="/images/field/home-hero-v2.webp" alt="DigiStano engineer performing electrical diagnostic testing in a high-voltage installation" fill priority sizes="100vw" /></div>
      <div className="ds-home-hero-overlay" />
      <div className="ds-home-hero-grid" aria-hidden="true" />
      <div className="ds-container ds-home-hero-inner">
        <div className="ds-home-hero-copy" data-reveal>
          <Eyebrow>Specialist diagnostics across the GCC</Eyebrow>
          <h1>Partial discharge testing.<br /><em>Clearer decisions.</em></h1>
          <p className="ds-lead">Field measurements, diagnostic interpretation and practical engineering support for critical electrical assets.</p>
          <div className="ds-actions"><Button href={ENQUIRY_PATH}>Discuss your PD project</Button><Button href="/services" secondary>Explore all services</Button></div>
        </div>
        <aside className="ds-hero-insight" data-reveal>
          <span>01 / LEAD EXPERTISE</span>
          <h2>From signal to engineering insight.</h2>
          <p>Online and offline PD assessment for GIS, switchgear, MV/HV cables, transformers, motors and generators.</p>
          <Link href={PD_PATH}>Explore PD testing <Arrow /></Link>
        </aside>
      </div>
      <div className="ds-container ds-hero-locations" data-reveal>
        <span className="ds-hero-locations-label"><span aria-hidden="true" />Service coverage</span>
        {["UAE", "Saudi Arabia", "Oman", "Qatar", "Bahrain"].map((country) => <span className="ds-location-pill" key={country}><Icon name="pin" />{country}</span>)}
      </div>
    </section>

    <ClientsSlider />

    <section className="ds-section ds-services-showcase"><div className="ds-container">
      <SectionHead label="Our services" title="Specialist support for the electrical asset lifecycle." text="Five connected service lines. One team focused on safe, reliable and well-understood electrical assets."><Link href="/services" className="ds-text-link">View the complete portfolio <Arrow /></Link></SectionHead>
      <ServiceCards />
    </div></section>

    <section className="ds-section ds-section-tint"><div className="ds-container">
      <SectionHead label="Asset-specific PD testing" title="The asset defines the measurement." text="Testing scope, access and interpretation are planned around the installation—not forced into a generic package."><Link href={PD_PATH} className="ds-text-link">Our PD approach <Arrow /></Link></SectionHead>
      <ApplicationCards />
    </div></section>

    <section className="ds-section"><div className="ds-container">
      <SectionHead label="Why choose DigiStano" title="Field expertise, backed by the right instruments and standards." text="A specialist team, principal-authorised equipment and certified management systems, applied consistently across every market we serve." />
      <IconGrid items={[
        { icon: "compass", title: "Regional reach", text: "Headquartered in Abu Dhabi with offices across the UAE, Saudi Arabia and Bahrain, reaching five GCC markets." },
        { icon: "gauge", title: "Principal-authorised instruments", text: "OMICRON and Megger test equipment, calibrated and maintained to manufacturer standards." },
        { icon: "cpu", title: "Engineering-led interpretation", text: "Every measurement is reviewed by engineers who explain the findings, limitations and practical next steps." },
        { icon: "shield", title: "ISO-certified management", text: "Certified to ISO 9001, ISO 14001 and ISO 45001 for quality, environmental and safety management." },
        { icon: "bolt", title: "Fast field response", text: "Local teams based in Sharjah, Dubai and Abu Dhabi, ready to mobilise on short notice." },
        { icon: "wrench", title: "Full lifecycle support", text: "Testing, equipment rental, training and repair & calibration under one team, not separate vendors." },
      ]} />
      <div className="ds-iso-badges" data-reveal>
        <Image src="/images/iso-9001.png" alt="ISO 9001 certified" width={140} height={146} />
        <Image src="/images/iso-14001.png" alt="ISO 14001 certified" width={140} height={146} />
        <Image src="/images/iso-45001.png" alt="ISO 45001 certified" width={140} height={146} />
      </div>
    </div></section>

    <section className="ds-section ds-dark-section"><div className="ds-container ds-split" data-reveal>
      <div><Eyebrow>Measurement with purpose</Eyebrow><h2>Data is the beginning. Engineering insight is the value.</h2><p>DigiStano brings together onsite measurements, diagnostic review and technical discussion to explain the observations, their limitations and practical next steps.</p><div className="ds-actions"><Button href="/services" light>Explore engineering services</Button></div></div>
      <ol className="ds-process"><li><div><h3>Define the question</h3><p>Commissioning, condition assessment or a specific concern.</p></div></li><li><div><h3>Plan the measurement</h3><p>Review access, operating conditions and suitable test approaches.</p></div></li><li><div><h3>Review the findings</h3><p>Interpret the measurements in context and discuss follow-up.</p></div></li></ol>
    </div></section>

    <section className="ds-section ds-rental-section"><div className="ds-container"><div className="ds-rental-band" data-reveal>
      <div className="ds-rental-image"><Image src="/images/rental-equipment-v2.jpg" alt="Specialised electrical testing instruments available for rental" fill sizes="(max-width:800px) 100vw,50vw" /></div>
      <div><Eyebrow>Supporting equipment access</Eyebrow><h2>The right instrument for the project ahead.</h2><p>When your team is carrying out the testing, our equipment rental service can support the project. Share the application and dates to confirm instruments and availability.</p><Link href="/services/rental" className="ds-text-link">Explore equipment rental <Arrow /></Link></div>
    </div></div></section>

    <Coverage />

    <section className="ds-section ds-section-tint"><div className="ds-container">
      <SectionHead label="Knowledge centre" title="Make an informed testing decision."><Link href="/knowledge" className="ds-text-link">Explore the guides <Arrow /></Link></SectionHead>
      <div className="ds-article-list"><Link href="/knowledge/online-vs-offline-pd-testing" className="ds-article-card" data-reveal><p className="ds-overline">Testing approaches</p><h3>Online or offline PD testing?</h3><p>Understand operating conditions, access and the questions to ask before a survey.</p><span className="ds-text-link">Read the guide <Arrow /></span></Link><Link href="/knowledge/pd-testing-project-checklist" className="ds-article-card" data-reveal><p className="ds-overline">Project preparation</p><h3>A better brief. A clearer testing scope.</h3><p>The asset and site details that help define a PD assessment.</p><span className="ds-text-link">View the checklist <Arrow /></span></Link></div>
    </div></section>

    <section className="ds-section"><div className="ds-container ds-split"><div data-reveal><Eyebrow>Before your assessment</Eyebrow><h2>Your questions, answered clearly.</h2></div><FAQ items={[pdFaqs[0], pdFaqs[2], pdFaqs[3]]} /></div></section>
    <CTA />
  </main>;
}
