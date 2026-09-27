import Image from "next/image";
import Link from "next/link";
import { Arrow, Button, CTA, Eyebrow, PageHero, SectionHead, ServiceCards } from "@/components/site/Elements";
import { ENQUIRY_PATH, pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("Electrical Testing & Engineering Services", "Explore DigiStano's five engineering service lines: partial discharge testing, cable and VLF testing, electrical testing and commissioning, technical training, and repair and calibration.", "/services");

export default function ServicesPage() {
  return <main className="ds-page">
    <PageHero label="Our services" title="One engineering team. Five connected service lines." text="From partial discharge diagnostics to commissioning, training and instrument support, every service begins with the asset and the decision your team needs to make." image="/images/engineering-services.jpg"><Button href={ENQUIRY_PATH}>Talk to an engineer</Button></PageHero>
    <section className="ds-section"><div className="ds-container"><SectionHead label="Complete service portfolio" title="Electrical asset support through the testing lifecycle." text="Select a service to explore the scope, applications and related pages."/><ServiceCards /></div></section>
    <section className="ds-section ds-section-tint"><div className="ds-container"><div className="ds-rental-band" data-reveal><div className="ds-rental-image"><Image src="/images/rental-equipment.jpg" alt="Electrical testing instruments available for project rental" fill sizes="(max-width:800px) 100vw,45vw"/></div><div><Eyebrow>Supporting equipment access</Eyebrow><h2>Need the instrument rather than the field service?</h2><p>Equipment rental remains available as a separate supporting offering for client teams carrying out their own testing.</p><Link href="/services/rental" className="ds-text-link">Explore equipment rental <Arrow /></Link></div></div></div></section>
    <CTA />
  </main>;
}
