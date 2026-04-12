"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [productsOpen, setProductsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const closeAllMenus = () => {
    setProductsOpen(false);
    setServicesOpen(false);
    setMobileMenuOpen(false);
    setMobileProductsOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-[100] w-full border-b transition-all duration-300 ${
        scrolled
          ? "border-white/10 bg-slate-950/90 shadow-xl backdrop-blur-xl"
          : "border-white/10 bg-slate-950/70 backdrop-blur-lg"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center" onClick={closeAllMenus}>
          <img
            src="/images/logo.png"
            alt="DigiStano"
            className="h-11 w-auto object-contain sm:h-12"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="relative hidden items-center gap-8 text-sm font-medium text-white/90 md:flex">
          <Link href="/" className="transition hover:text-blue-400">
            Home
          </Link>

          <Link href="/about" className="transition hover:text-blue-400">
            About Us
          </Link>

          {/* Services */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 py-2 transition hover:text-blue-400"
            >
              Services
              <span className="text-[10px]">▾</span>
            </Link>

            <div
              className={`absolute left-0 top-full pt-3 transition-all duration-200 ${
                servicesOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible -translate-y-1 opacity-0"
              }`}
            >
              <div className="w-[300px] rounded-2xl border border-white/10 bg-slate-900/95 p-3 shadow-2xl backdrop-blur-xl">
                <ul className="space-y-1 text-sm text-white/85">
                  <li>
                    <Link
                      href="/services/engineering-services"
                      className="block rounded-xl px-4 py-3 transition hover:bg-white/5 hover:text-blue-400"
                    >
                      Engineering Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/rental"
                      className="block rounded-xl px-4 py-3 transition hover:bg-white/5 hover:text-blue-400"
                    >
                      Rental
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/training"
                      className="block rounded-xl px-4 py-3 transition hover:bg-white/5 hover:text-blue-400"
                    >
                      Training
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/repair-calibration"
                      className="block rounded-xl px-4 py-3 transition hover:bg-white/5 hover:text-blue-400"
                    >
                      Repair & Calibration
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Products */}
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <Link
              href="/products"
              className="inline-flex items-center gap-2 py-2 transition hover:text-blue-400"
            >
              Products
              <span className="text-[10px]">▾</span>
            </Link>

            <div
              className={`absolute left-0 top-full pt-3 transition-all duration-200 ${
                productsOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible -translate-y-1 opacity-0"
              }`}
            >
              <div className="w-[340px] rounded-2xl border border-white/10 bg-slate-900/95 p-3 shadow-2xl backdrop-blur-xl">
                <ul className="space-y-1 text-sm text-white/85">
                  <li>
                    <Link
                      href="/products/iec-testing"
                      className="block rounded-xl px-4 py-3 transition hover:bg-white/5 hover:text-blue-400"
                    >
                      IEC Testing & SCADA
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products/hv-cables"
                      className="block rounded-xl px-4 py-3 transition hover:bg-white/5 hover:text-blue-400"
                    >
                      MV & HV Cables
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products/relays"
                      className="block rounded-xl px-4 py-3 transition hover:bg-white/5 hover:text-blue-400"
                    >
                      Relays & Meters
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products/rotating-machines"
                      className="block rounded-xl px-4 py-3 transition hover:bg-white/5 hover:text-blue-400"
                    >
                      Rotating Machines
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products/switchgear"
                      className="block rounded-xl px-4 py-3 transition hover:bg-white/5 hover:text-blue-400"
                    >
                      Switchgear
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products/transformers"
                      className="block rounded-xl px-4 py-3 transition hover:bg-white/5 hover:text-blue-400"
                    >
                      Transformer Testing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products/ct-vt"
                      className="block rounded-xl px-4 py-3 transition hover:bg-white/5 hover:text-blue-400"
                    >
                      CT / VT Testing
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <Link href="/contact" className="transition hover:text-blue-400">
            Contact Us
          </Link>
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 md:inline-flex"
        >
          Contact Us
        </Link>

        {/* Mobile Toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10 md:hidden"
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-5 bg-white transition ${
                mobileMenuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-white transition ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-white transition ${
                mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-slate-950/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          mobileMenuOpen ? "max-h-[85vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-3 px-4 py-4">
          <Link
            href="/"
            onClick={closeAllMenus}
            className="block rounded-xl px-4 py-3 font-medium text-white/90 transition hover:bg-white/5 hover:text-blue-400"
          >
            Home
          </Link>

          <Link
            href="/about"
            onClick={closeAllMenus}
            className="block rounded-xl px-4 py-3 font-medium text-white/90 transition hover:bg-white/5 hover:text-blue-400"
          >
            About Us
          </Link>

          {/* Mobile Services */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03]">
            <div className="flex items-center justify-between px-4 py-3">
              <Link
                href="/services"
                onClick={closeAllMenus}
                className="font-medium text-white/90 transition hover:text-blue-400"
              >
                Services
              </Link>

              <button
                type="button"
                aria-label="Toggle services menu"
                onClick={() => setMobileServicesOpen((prev) => !prev)}
                className="rounded-lg px-2 py-1 text-white/70"
              >
                {mobileServicesOpen ? "−" : "+"}
              </button>
            </div>

            {mobileServicesOpen && (
              <div className="space-y-1 border-t border-white/10 px-3 py-3">
                <Link
                  href="/services/engineering-services"
                  onClick={closeAllMenus}
                  className="block rounded-xl px-3 py-2.5 text-sm text-white/75 transition hover:bg-white/5 hover:text-blue-400"
                >
                  Engineering Services
                </Link>
                <Link
                  href="/services/rental"
                  onClick={closeAllMenus}
                  className="block rounded-xl px-3 py-2.5 text-sm text-white/75 transition hover:bg-white/5 hover:text-blue-400"
                >
                  Rental
                </Link>
                <Link
                  href="/services/training"
                  onClick={closeAllMenus}
                  className="block rounded-xl px-3 py-2.5 text-sm text-white/75 transition hover:bg-white/5 hover:text-blue-400"
                >
                  Training
                </Link>
                <Link
                  href="/services/repair-calibration"
                  onClick={closeAllMenus}
                  className="block rounded-xl px-3 py-2.5 text-sm text-white/75 transition hover:bg-white/5 hover:text-blue-400"
                >
                  Repair & Calibration
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Products */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03]">
            <div className="flex items-center justify-between px-4 py-3">
              <Link
                href="/products"
                onClick={closeAllMenus}
                className="font-medium text-white/90 transition hover:text-blue-400"
              >
                Products
              </Link>

              <button
                type="button"
                aria-label="Toggle products menu"
                onClick={() => setMobileProductsOpen((prev) => !prev)}
                className="rounded-lg px-2 py-1 text-white/70"
              >
                {mobileProductsOpen ? "−" : "+"}
              </button>
            </div>

            {mobileProductsOpen && (
              <div className="space-y-1 border-t border-white/10 px-3 py-3">
                <Link
                  href="/products/iec-testing"
                  onClick={closeAllMenus}
                  className="block rounded-xl px-3 py-2.5 text-sm text-white/75 transition hover:bg-white/5 hover:text-blue-400"
                >
                  IEC Testing & SCADA
                </Link>
                <Link
                  href="/products/hv-cables"
                  onClick={closeAllMenus}
                  className="block rounded-xl px-3 py-2.5 text-sm text-white/75 transition hover:bg-white/5 hover:text-blue-400"
                >
                  MV & HV Cables
                </Link>
                <Link
                  href="/products/relays"
                  onClick={closeAllMenus}
                  className="block rounded-xl px-3 py-2.5 text-sm text-white/75 transition hover:bg-white/5 hover:text-blue-400"
                >
                  Relays & Meters
                </Link>
                <Link
                  href="/products/rotating-machines"
                  onClick={closeAllMenus}
                  className="block rounded-xl px-3 py-2.5 text-sm text-white/75 transition hover:bg-white/5 hover:text-blue-400"
                >
                  Rotating Machines
                </Link>
                <Link
                  href="/products/switchgear"
                  onClick={closeAllMenus}
                  className="block rounded-xl px-3 py-2.5 text-sm text-white/75 transition hover:bg-white/5 hover:text-blue-400"
                >
                  Switchgear
                </Link>
                <Link
                  href="/products/transformers"
                  onClick={closeAllMenus}
                  className="block rounded-xl px-3 py-2.5 text-sm text-white/75 transition hover:bg-white/5 hover:text-blue-400"
                >
                  Transformer Testing
                </Link>
                <Link
                  href="/products/ct-vt"
                  onClick={closeAllMenus}
                  className="block rounded-xl px-3 py-2.5 text-sm text-white/75 transition hover:bg-white/5 hover:text-blue-400"
                >
                  CT / VT Testing
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/contact"
            onClick={closeAllMenus}
            className="block rounded-xl px-4 py-3 font-medium text-white/90 transition hover:bg-white/5 hover:text-blue-400"
          >
            Contact Us
          </Link>

          <Link
            href="/contact"
            onClick={closeAllMenus}
            className="inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-5 py-3.5 font-semibold text-white transition hover:bg-blue-700"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}