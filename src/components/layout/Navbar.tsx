"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Arrow } from "@/components/site/Elements";
import { serviceItems } from "@/lib/site";

const links = [
  ["Equipment Rental", "/services/rental"],
  ["Knowledge", "/knowledge"],
  ["About", "/about"],
] as const;

export default function Navbar() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  const servicesActive = path === "/services" || serviceItems.some(({ href }) => path === href || path.startsWith(`${href}/`));

  useEffect(() => { setOpen(false); }, [path]);
  useEffect(() => {
    const esc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        button.current?.focus();
      }
    };
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, []);

  return <header className="ds-header">
    <div className="ds-topbar"><div className="ds-container"><span>PARTIAL DISCHARGE & ELECTRICAL DIAGNOSTICS</span><span>ABU DHABI HEADQUARTERS <strong>+971 2 5513114</strong></span></div></div>
    <div className="ds-container ds-nav-row">
      <Link href="/" className="ds-brand" aria-label="DigiStano home"><Image src="/images/digistano-logo.png" alt="DigiStano" width={190} height={54} priority /></Link>
      <nav className="ds-desktop-nav" aria-label="Primary">
        <Link href="/services" aria-current={servicesActive ? "page" : undefined}>Services</Link>
        {links.map(([label, href]) => <Link key={href} href={href} aria-current={path === href || path.startsWith(`${href}/`) ? "page" : undefined}>{label}</Link>)}
      </nav>
      <Link href="/services/engineering-services#appointment" className="ds-nav-cta">Talk to an engineer <Arrow /></Link>
      <button ref={button} type="button" className="ds-menu-toggle" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(value => !value)}><span>Menu</span><span aria-hidden="true">{open ? "×" : "☰"}</span></button>
    </div>
    <nav id="mobile-menu" className="ds-mobile-nav" aria-label="Mobile navigation" hidden={!open}>
      <div className="ds-mobile-service-group"><Link href="/services" aria-current={servicesActive ? "page" : undefined}>Services <Arrow /></Link><div className="ds-mobile-subnav">{serviceItems.map((service, index) => <Link key={service.href} href={service.href}><span>0{index + 1}</span>{service.menuTitle}</Link>)}</div></div>
      {links.map(([label, href]) => <Link key={href} href={href} aria-current={path === href || path.startsWith(`${href}/`) ? "page" : undefined}>{label}<Arrow /></Link>)}
      <Link className="ds-mobile-cta" href="/services/engineering-services#appointment">Talk to an engineer <Arrow /></Link>
    </nav>
  </header>;
}
