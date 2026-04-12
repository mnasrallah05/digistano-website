"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden bg-[#2b2f3a] text-gray-300">
      {/* TOP GRADIENT LINE */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />

      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute left-0 top-0 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />

      {/* MAIN CONTENT */}
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr]">
          
          {/* LOGO + DESCRIPTION */}
          <div>
            <a href="/" className="inline-block">
              <img
                src="/images/digistano-logo.png"
                alt="DigiStano"
                className="mb-6 w-40 brightness-0 invert"
              />
            </a>

            <p className="max-w-md text-sm leading-8 text-gray-400">
              DigiStano delivers advanced technology solutions, engineering
              services, testing equipment, training, and technical support
              across the electrical power industry in the UAE and GCC region.
            </p>

            {/* SOCIAL */}
            <div className="mt-8 flex items-center gap-3">
              
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/digistano/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-blue-600"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.11 1 2.49 1s2.49 1.12 2.49 2.5ZM.5 8h4v12h-4V8Zm7 0h3.8v1.7h.05c.53-1 1.82-2.05 3.75-2.05C19.5 7.65 21 9.1 21 12.3V20h-4v-6.5c0-1.55-.03-3.55-2.17-3.55-2.17 0-2.5 1.7-2.5 3.45V20h-4V8Z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/971509020692"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition duration-300 hover:-translate-y-1 hover:border-green-400/40 hover:bg-green-600"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M20.52 3.48A11.94 11.94 0 0 0 12.05 0C5.4 0 .03 5.37.03 12c0 2.12.55 4.18 1.6 6L0 24l6.18-1.62a11.94 11.94 0 0 0 5.87 1.5h.01c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.54-8.4ZM12.06 21.7a9.7 9.7 0 0 1-4.95-1.35l-.36-.21-3.67.96.98-3.57-.23-.37a9.68 9.68 0 0 1-1.5-5.16c0-5.36 4.36-9.72 9.73-9.72 2.6 0 5.04 1.01 6.88 2.84a9.65 9.65 0 0 1 2.84 6.88c0 5.36-4.36 9.72-9.72 9.72Zm5.38-7.27c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.28-.47-2.43-1.5-.9-.8-1.5-1.8-1.67-2.1-.17-.3-.02-.46.13-.6.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.1 4.48.71.3 1.26.48 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* MARKETS */}
          <div>
            <h3 className="mb-5 text-xl font-semibold text-white">
              Our Markets
            </h3>

            <ul className="space-y-3 text-sm text-gray-400">
              <li>Gcc Countries</li>
              <li>Middle East Countries</li>
              <li>North Africa</li>
              <li>Europe</li>
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="mb-5 text-xl font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/services" className="hover:text-white">Services</a></li>
              <li><a href="/products" className="hover:text-white">Products</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="mb-5 text-xl font-semibold text-white">
              Contact Us
            </h3>

            <div className="space-y-5 text-sm text-gray-400">
              <div className="flex gap-3">
                <span>📍</span>
                <p>
                  SIT Tower, 7th Floor,<br />
                  Dubai Silicon Oasis, Dubai, UAE
                </p>
              </div>

              <div className="flex gap-3">
                <span>📞</span>
                <p>
                  Dubai: +971 4 3373764<br />
                  Abu Dhabi: +971 2 5513114
                </p>
              </div>

              <div className="flex gap-3">
                <span>✉️</span>
                <p>
                  <a href="mailto:sales@digistano.ae" className="hover:text-white">
                    sales@digistano.ae
                  </a>
                  <br />
                  <a href="https://www.digistano.com" className="hover:text-white">
                    www.digistano.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/10 bg-[#242833]">
        <div className="mx-auto max-w-7xl px-6 py-5 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
          <p>© 2026 DigiStano. All rights reserved.</p>

          <div className="flex gap-6 mt-3 md:mt-0">
            <a href="/about" className="hover:text-white">About</a>
            <a href="/services" className="hover:text-white">Services</a>
            <a href="/products" className="hover:text-white">Products</a>
            <a href="/contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </div>

      {/* SCROLL TOP */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 h-12 w-12 rounded-full bg-white text-black shadow-xl hover:bg-blue-600 hover:text-white transition"
        >
          ↑
        </button>
      )}
    </footer>
  );
}