"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [productsOpen, setProductsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="w-full border-b bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center">
          <img
            src="/images/logo.png"
            alt="DigiStano"
            className="h-14 w-auto object-contain"
          />
        </Link>

        <nav className="relative hidden items-center gap-8 font-medium text-gray-700 md:flex">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>

          <Link href="/about" className="hover:text-blue-600">
            About us
          </Link>

          {/* SERVICES DROPDOWN + CLICKABLE */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link href="/services" className="inline-block py-2 hover:text-blue-600">
              Services ▾
            </Link>

            {servicesOpen && (
              <div className="absolute left-0 top-full z-50 pt-0">
                <div className="w-[280px] rounded-lg border bg-white p-4 shadow-lg">
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li>
                      <Link
                        href="/services/engineering-services"
                        className="block hover:text-blue-600"
                      >
                        Engineering Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/rental"
                        className="block hover:text-blue-600"
                      >
                        Rental
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/training"
                        className="block hover:text-blue-600"
                      >
                        Training
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/repair-calibration"
                        className="block hover:text-blue-600"
                      >
                        Repair And Calibration
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* PRODUCTS DROPDOWN + CLICKABLE */}
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <Link href="/products" className="inline-block py-2 hover:text-blue-600">
              Products ▾
            </Link>

            {productsOpen && (
              <div className="absolute left-0 top-full z-50 pt-0">
                <div className="w-[320px] rounded-lg border bg-white p-4 shadow-lg">
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li>
                      <Link
                        href="/products/iec-testing"
                        className="block hover:text-blue-600"
                      >
                        IEC Testing & SCADA
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/products/hv-cables"
                        className="block hover:text-blue-600"
                      >
                        MV & HV Cables
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/products/relays"
                        className="block hover:text-blue-600"
                      >
                        Relays & Meters
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/products/rotating-machines"
                        className="block hover:text-blue-600"
                      >
                        Rotating Machines
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/products/switchgear"
                        className="block hover:text-blue-600"
                      >
                        Switchgear
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/products/transformers"
                        className="block hover:text-blue-600"
                      >
                        Transformer Testing
                      </Link>
                    </li>
                    
                  </ul>
                </div>
              </div>
            )}
          </div>

          <Link href="/contact" className="hover:text-blue-600">
            Contact us
          </Link>
        </nav>

        <Link
          href="/contact"
          className="hidden rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700 md:block"
        >
          Contact Us
        </Link>
      </div>
    </header>
  );
}