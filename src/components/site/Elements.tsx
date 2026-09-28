import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { SITE, PD_PATH, ENQUIRY_PATH, areaServed, pdApplications, serviceItems } from "@/lib/site";

export function Arrow({ diagonal = false }: { diagonal?: boolean }) { return <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h15m-6-6 6 6-6 6"} /></svg>; }
const iconPaths: Record<string, string> = {
  bolt: "M13 2 4 14h6l-1 8 9-12h-6z",
  gauge: "M12 20a8 8 0 1 1 8-8M12 20a8 8 0 1 0-8-8M12 12l4-4M4 12H2m20 0h-2M12 4V2",
  wrench: "M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2-2z",
  shield: "M12 2 4 5v6c0 5 3.4 8.5 8 11 4.6-2.5 8-6 8-11V5z M9 12l2 2 4-4",
  calendar: "M4 5h16v16H4zM4 9h16M8 3v4M16 3v4",
  truck: "M2 6h11v10H2zM13 10h5l3 3v3h-8zM6 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM17.5 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
  cpu: "M8 2v3M16 2v3M8 19v3M16 19v3M2 8h3M2 16h3M19 8h3M19 16h3M7 7h10v10H7z",
  book: "M4 4h11a3 3 0 0 1 3 3v13H7a3 3 0 0 1-3-3z M18 20V7a3 3 0 0 0-3-3H4",
  pin: "M12 22s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12z M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
  check: "m5 13 4 4L19 7",
  scale: "M12 3v18M5 8l-3 6a3.5 3.5 0 0 0 6 0zM19 8l-3 6a3.5 3.5 0 0 0 6 0zM5 8h14M9 3h6",
  spark: "M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18",
  compass: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM14.5 9.5 13 13l-3.5 1.5L11 11z",
};
export function Icon({ name, className }: { name: keyof typeof iconPaths; className?: string }) { return <svg className={className} viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={iconPaths[name]} /></svg>; }
export function IconTile({ name, light = false }: { name: keyof typeof iconPaths; light?: boolean }) { return <span className={`ds-icon-tile${light ? " ds-icon-tile-light" : ""}`}><Icon name={name} /></span>; }
export function IconGrid({ items }: { items: { icon: keyof typeof iconPaths; title: string; text: string }[] }) { return <div className="ds-icon-grid">{items.map((item) => <div className="ds-icon-card" key={item.title}><IconTile name={item.icon} /><h3>{item.title}</h3><p>{item.text}</p></div>)}</div>; }
export function Button({ href, children, secondary = false, light = false }: { href: string; children: ReactNode; secondary?: boolean; light?: boolean }) { return <Link href={href} className={`ds-button${secondary ? " ds-button-secondary" : ""}${light ? " ds-button-light" : ""}`}>{children}<Arrow /></Link>; }
export function Eyebrow({ children }: { children: ReactNode }) { return <p className="ds-eyebrow"><span />{children}</p>; }
export function JsonLd({ data }: { data: object }) { return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />; }
export function ServiceSchema({ name, description, path }: { name: string; description: string; path: string }) { return <JsonLd data={{ "@context": "https://schema.org", "@type": "Service", "@id": `${SITE}${path}#service`, name, serviceType: name, description, url: `${SITE}${path}`, provider: { "@id": `${SITE}/#organization` }, areaServed }} />; }
export function FAQSchema({ items }: { items: { q: string; a: string }[] }) { return <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: items.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })) }} />; }
export function Breadcrumbs({ items }: { items: { label: string; href: string }[] }) {
 const all = [{ label: "Home", href: "/" }, ...items];
 return <><JsonLd data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: all.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.label, item: `${SITE}${item.href}` })) }} /><nav aria-label="Breadcrumb" className="ds-breadcrumbs">{all.map((item, index) => <span key={item.href}>{index > 0 && <span aria-hidden="true">/</span>}{index === all.length - 1 ? <span aria-current="page">{item.label}</span> : <Link href={item.href}>{item.label}</Link>}</span>)}</nav></>;
}
export function PageHero({ label, title, text, image, imageAlt, stats, children }: { label: string; title: string; text: string; image?: string; imageAlt?: string; stats?: { label: string; value: string }[]; children?: ReactNode }) {
 return <section className={`ds-page-hero${image ? " ds-page-hero-image" : ""}`}>{image && <div className="ds-hero-picture"><Image src={image} alt={imageAlt ?? label} fill sizes="100vw" priority /></div>}<div className="ds-page-hero-grid" aria-hidden="true"/><div className="ds-container ds-page-hero-inner"><div data-reveal><Eyebrow>{label}</Eyebrow><h1>{title}</h1><p className="ds-lead">{text}</p>{children && <div className="ds-actions">{children}</div>}{stats && <div className="ds-page-hero-stats">{stats.map((s) => <div key={s.label}><span>{s.label}</span><strong>{s.value}</strong></div>)}</div>}</div></div></section>;
}
export function SectionHead({ label, title, text, children }: { label: string; title: string; text?: string; children?: ReactNode }) { return <div className="ds-section-head" data-reveal><div><Eyebrow>{label}</Eyebrow><h2>{title}</h2>{text && <p>{text}</p>}</div>{children}</div>; }
export function ApplicationCards() { return <div className="ds-applications">{pdApplications.map((app, i) => <Link className="ds-application" data-reveal key={app.slug} href={`${PD_PATH}/${app.slug}`}><div className="ds-application-image"><Image src={app.image} alt={app.title} fill sizes="(max-width: 580px) 100vw, (max-width: 1000px) 50vw, 25vw" /><span>0{i + 1}</span></div><div className="ds-application-body"><p className="ds-overline">{app.focus}</p><h3>{app.title}<Arrow diagonal /></h3><p>{app.summary}</p><span className="ds-text-link">Explore PD service <Arrow /></span></div></Link>)}</div>; }
export function ServiceCards() { return <div className="ds-service-cards">{serviceItems.map((service, index) => <Link className="ds-service-card" data-reveal href={service.href} key={service.href}><div className="ds-service-card-media"><Image src={service.image} alt={service.title} fill sizes={index === 0 ? "(max-width:900px) 100vw, 50vw" : "(max-width:650px) 100vw, 25vw"}/></div><div className="ds-service-card-shade"/><span className="ds-service-card-index">0{index + 1}</span><div className="ds-service-card-content"><p>{index === 0 ? "Lead expertise" : "Engineering service"}</p><h3>{service.title}</h3><span>{service.description}</span><strong>Explore service <Arrow /></strong></div></Link>)}</div>; }
export function FAQ({ items }: { items: { q: string; a: string }[] }) { return <div className="ds-faq">{items.map((item) => <details data-reveal key={item.q}><summary>{item.q}<span aria-hidden="true">+</span></summary><p>{item.a}</p></details>)}</div>; }
export function Coverage() { const markets=[["AE","United Arab Emirates","Headquarters · Abu Dhabi"],["SA","Saudi Arabia","Office · Al Khobar"],["BH","Bahrain","Office · Manama"],["OM","Oman","Service coverage"],["QA","Qatar","Service coverage"]]; return <section className="ds-section ds-coverage"><div className="ds-container"><SectionHead label="Regional presence" title="Local understanding. Regional reach." text="Headquartered in Abu Dhabi, with offices in the UAE, Saudi Arabia and Bahrain. We coordinate services across five GCC markets." /><div className="ds-country-list">{markets.map(([code,name,sub])=><div data-reveal key={code}><span>{code}</span><h3>{name}</h3><p>{sub}</p></div>)}</div></div></section>; }
export function CTA({ title = "Let’s talk about your next assessment.", text = "Tell us the asset, location and testing objective. Our engineering team will help define the next step." }: { title?: string; text?: string }) { return <section className="ds-cta"><div className="ds-container ds-cta-inner"><div><Eyebrow>Start with a conversation</Eyebrow><h2>{title}</h2><p>{text}</p></div><Button href={ENQUIRY_PATH} light>Discuss your requirement</Button></div></section>; }
