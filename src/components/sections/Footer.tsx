"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { serviceItems } from "@/lib/site";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="ds-footer">
      <div className="ds-container">
        <div className="ds-footer-grid">
          <div className="ds-footer-brand">
            <Link href="/"><Image src="/images/digistano-logo.png" alt="DigiStano" width={195} height={58} /></Link>
            <p>Partial discharge testing, electrical diagnostics and field engineering for critical power assets across the GCC.</p>
            <a className="ds-footer-email" href="mailto:sales@digistano.com">sales@digistano.com</a>
            <div className="ds-footer-social">
              <a href="https://www.linkedin.com/company/digistano/posts/?feedView=all" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.11 1 2.49 1s2.49 1.12 2.49 2.5ZM.5 8h4v12h-4V8Zm7 0h3.8v1.7h.05c.53-1 1.82-2.05 3.75-2.05C19.5 7.65 21 9.1 21 12.3V20h-4v-6.5c0-1.55-.03-3.55-2.17-3.55-2.17 0-2.5 1.7-2.5 3.45V20h-4V8Z" /></svg>
              </a>
              <a href="https://wa.me/971509020692" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24"><path d="M20.52 3.48A11.94 11.94 0 0 0 12.05 0C5.4 0 .03 5.37.03 12c0 2.12.55 4.18 1.6 6L0 24l6.18-1.62a11.94 11.94 0 0 0 5.87 1.5h.01c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.54-8.4ZM12.06 21.7a9.7 9.7 0 0 1-4.95-1.35l-.36-.21-3.67.96.98-3.57-.23-.37a9.68 9.68 0 0 1-1.5-5.16c0-5.36 4.36-9.72 9.73-9.72 2.6 0 5.04 1.01 6.88 2.84a9.65 9.65 0 0 1 2.84 6.88c0 5.36-4.36 9.72-9.72 9.72Zm5.38-7.27c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.28-.47-2.43-1.5-.9-.8-1.5-1.8-1.67-2.1-.17-.3-.02-.46.13-.6.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.1 4.48.71.3 1.26.48 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" /></svg>
              </a>
            </div>
          </div>
          <div><h2>Our services</h2>{serviceItems.map(service => <Link key={service.href} href={service.href}>{service.menuTitle}</Link>)}</div>
          <div><h2>Our Markets</h2><p>Gcc Countries<br />Middle East Countries<br />North Africa<br />Europe</p><h2>Explore</h2><Link href="/knowledge">Knowledge centre</Link><Link href="/products">Equipment reference</Link><Link href="/services/rental">Equipment rental</Link></div>
          <div><h2>Headquarters</h2><p><strong>Abu Dhabi, UAE</strong><br /><a href="tel:+97125513114">+971 2 5513114</a></p><h2>Other offices</h2><p><strong>Dubai, UAE</strong><br />SIT Tower, Dubai Silicon Oasis<br /><a href="tel:+97143373764">+971 4 3373764</a></p><p><strong>Al Khobar, Saudi Arabia</strong><br />Al Olaya, Bashar Ibn Bard<br />1st Floor, Office 08</p><p>Manama, Bahrain</p></div>
        </div>
        <div className="ds-footer-bottom"><span>© {new Date().getFullYear()} DigiStano. All rights reserved.</span><span>Engineering insight for electrical assets.</span></div>
      </div>
      <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className={`ds-scroll-top${showTop ? " is-visible" : ""}`} aria-label="Scroll to top" aria-hidden={!showTop} tabIndex={showTop ? 0 : -1}>
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7" /></svg>
      </button>
    </footer>
  );
}
