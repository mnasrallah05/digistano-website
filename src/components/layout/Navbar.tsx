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
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileProductsOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-[100] w-full border-b transition-all duration-300 ${
        scrolled
          ? "border-slate-200/80 bg-white/90 shadow-md backdrop-blur-xl"
          : "border-slate-200 bg-white/95 shadow-sm backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center" onClick={closeMobileMenu}>
          <img
            src="/images/logo.png"
            alt="DigiStano"
            className="h-12 w-auto object-contain sm:h-14"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="relative hidden items-center gap-8 font-medium text-slate-700 md:flex">
          <Link href="/" className="transition hover:text-blue-600">
            Home
          </Link>

          <Link href="/about" className="transition hover:text-blue-600">
            About us
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-1 py-2 transition hover:text-blue-600"
            >
              Services
              <span className="text-xs">▾</span>
            </Link>

            <div
              className={`absolute left-0 top-full pt-3 transition-all duration-200 ${
                servicesOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible -translate-y-1 opacity-0"
              }`}
            >
              <div className="w-[290px] rounded-2xl border border-slate-200 bg-white p-4 shadow-xl">
                <ul className="space-y-3 text-sm text-slate-700">
                  <li>
                    <Link
                      href="/services/engineering-services"
                      className="block rounded-lg px-3 py-2 transition hover:bg-slate-50 hover:text-blue-600"
                    >
                      Engineering Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/rental"
                      className="block rounded-lg px-3 py-2 transition hover:bg-slate-50 hover:text-blue-600"
                    >
                      Rental
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/training"
                      className="block rounded-lg px-3 py-2 transition hover:bg-slate-50 hover:text-blue-600"
                    >
                      Training
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/repair-calibration"
                      className="block rounded-lg px-3 py-2 transition hover:bg-slate-50 hover:text-blue-600"
                    >
                      Repair And Calibration
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Products Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <Link
              href="/products"
              className="inline-flex items-center gap-1 py-2 transition hover:text-blue-600"
            >
              Products
              <span className="text-xs">▾</span>
            </Link>

            <div
              className={`absolute left-0 top-full pt-3 transition-all duration-200 ${
                productsOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible -translate-y-1 opacity-0"
              }`}
            >
              <div className="w-[340px] rounded-2xl border border-slate-200 bg-white p-4 shadow-xl">
                <ul className="space-y-3 text-sm text-slate-700">
                  <li>
                    <Link
                      href="/products/iec-testing"
                      className="block rounded-lg px-3 py-2 transition hover:bg-slate-50 hover:text-blue-600"
                    >
                      IEC Testing & SCADA
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products/hv-cables"
                      className="block rounded-lg px-3 py-2 transition hover:bg-slate-50 hover:text-blue-600"
                    >
                      MV & HV Cables
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products/relays"
                      className="block rounded-lg px-3 py-2 transition hover:bg-slate-50 hover:text-blue-600"
                    >
                      Relays & Meters
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products/rotating-machines"
                      className="block rounded-lg px-3 py-2 transition hover:bg-slate-50 hover:text-blue-600"
                    >
                      Rotating Machines
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products/switchgear"
                      className="block rounded-lg px-3 py-2 transition hover:bg-slate-50 hover:text-blue-600"
                    >
                      Switchgear
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products/transformers"
                      className="block rounded-lg px-3 py-2 transition hover:bg-slate-50 hover:text-blue-600"
                    >
                      Transformer Testing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products/ct-vt"
                      className="block rounded-lg px-3 py-2 transition hover:bg-slate-50 hover:text-blue-600"
                    >
                      CT / VT Testing
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <Link href="/contact" className="transition hover:text-blue-600">
            Contact us
          </Link>
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 md:block"
        >
          Contact Us
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50 md:hidden"
        >
          <span className="text-2xl leading-none">
            {mobileMenuOpen ? "×" : "☰"}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ${
          mobileMenuOpen
            ? "max-h-[85vh] border-t border-slate-200 opacity-100"
            : "max-h-0 overflow-hidden opacity-0"
        }`}
      >
        <div className="space-y-3 bg-white px-4 py-4 shadow-lg">
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="block rounded-xl px-3 py-3 font-medium text-slate-700 transition hover:bg-slate-50 hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            href="/about"
            onClick={closeMobileMenu}
            className="block rounded-xl px-3 py-3 font-medium text-slate-700 transition hover:bg-slate-50 hover:text-blue-600"
          >
            About us
          </Link>

          {/* Mobile Services */}
          <div className="rounded-2xl border border-slate-200">
            <div className="flex items-center justify-between px-3 py-3">
              <Link
                href="/services"
                onClick={closeMobileMenu}
                className="font-medium text-slate-700 transition hover:text-blue-600"
              >
                Services
              </Link>

              <button
                type="button"
                aria-label="Toggle services menu"
                onClick={() => setMobileServicesOpen((prev) => !prev)}
                className="rounded-lg px-2 py-1 text-slate-600"
              >
                {mobileServicesOpen ? "−" : "+"}
              </button>
            </div>

            {mobileServicesOpen && (
              <div className="space-y-1 border-t border-slate-200 px-3 py-3">
                <Link
                  href="/services/engineering-services"
                  onClick={closeMobileMenu}
                  className="block rounded-lg px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-50 hover:text-blue-600"
                >
                  Engineering Services
                </Link>
                <Link
                  href="/services/rental"
                  onClick={closeMobileMenu}
                  className="block rounded-lg px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-50 hover:text-blue-600"
                >
                  Rental
                </Link>
                <Link
                  href="/services/training"
                  onClick={closeMobileMenu}
                  className="block rounded-lg px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-50 hover:text-blue-600"
                >
                  Training
                </Link>
                <Link
                  href="/services/repair-calibration"
                  onClick={closeMobileMenu}
                  className="block rounded-lg px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-50 hover:text-blue-600"
                >
                  Repair And Calibration
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Products */}
          <div className="rounded-2xl border border-slate-200">
            <div className="flex items-center justify-between px-3 py-3">
              <Link
                href="/products"
                onClick={closeMobileMenu}
                className="font-medium text-slate-700 transition hover:text-blue-600"
              >
                Products
              </Link>

              <button
                type="button"
                aria-label="Toggle products menu"
                onClick={() => setMobileProductsOpen((prev) => !prev)}
                className="rounded-lg px-2 py-1 text-slate-600"
              >
                {mobileProductsOpen ? "−" : "+"}
              </button>
            </div>

            {mobileProductsOpen && (
              <div className="space-y-1 border-t border-slate-200 px-3 py-3">
                <Link
                  href="/products/iec-testing"
                  onClick={closeMobileMenu}
                  className="block rounded-lg px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-50 hover:text-blue-600"
                >
                  IEC Testing & SCADA
                </Link>
                <Link
                  href="/products/hv-cables"
                  onClick={closeMobileMenu}
                  className="block rounded-lg px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-50 hover:text-blue-600"
                >
                  MV & HV Cables
                </Link>
                <Link
                  href="/products/relays"
                  onClick={closeMobileMenu}
                  className="block rounded-lg px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-50 hover:text-blue-600"
                >
                  Relays & Meters
                </Link>
                <Link
                  href="/products/rotating-machines"
                  onClick={closeMobileMenu}
                  className="block rounded-lg px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-50 hover:text-blue-600"
                >
                  Rotating Machines
                </Link>
                <Link
                  href="/products/switchgear"
                  onClick={closeMobileMenu}
                  className="block rounded-lg px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-50 hover:text-blue-600"
                >
                  Switchgear
                </Link>
                <Link
                  href="/products/transformers"
                  onClick={closeMobileMenu}
                  className="block rounded-lg px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-50 hover:text-blue-600"
                >
                  Transformer Testing
                </Link>
                <Link
                  href="/products/ct-vt"
                  onClick={closeMobileMenu}
                  className="block rounded-lg px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-50 hover:text-blue-600"
                >
                  CT / VT Testing
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/contact"
            onClick={closeMobileMenu}
            className="block rounded-xl px-3 py-3 font-medium text-slate-700 transition hover:bg-slate-50 hover:text-blue-600"
          >
            Contact us
          </Link>

          <Link
            href="/contact"
            onClick={closeMobileMenu}
            className="inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}