"use client";

import { useState } from "react";

export default function IEDScoutPage() {
  const [activeTab, setActiveTab] = useState<"description" | "attachment">(
    "description"
  );

  const highlights = [
    "Works with IEC 61850 compatible IEDs from any vendor",
    "Investigates multiple IEDs simultaneously",
    "Analyzes SCL files",
    "Investigates data traffic in-depth",
    "Simulates IEDs",
    "Supports testing, commissioning, and IED development",
  ];

  const supportedStandards = [
    "IEC 61850 Ed. 1",
    "IEC 61850 Ed. 2",
    "IEC 61850-7-410:2013",
    "IEC 61850-7-420:2009",
    "IEC 61400-25 1...6:2006...2010",
  ];

  const applicationCards = [
    {
      title: "Testing and troubleshooting",
      text: "Substation engineers can use this tool for testing and troubleshooting, for assessing the status of an IED, manipulating data, or obtaining the information required to configure testing with GOOSE messages.",
    },
    {
      title: "Commissioning",
      text: "IEDScout provides client functionality without requiring a functioning master station. It checks the availability and proper operation of installed IEDs, while control sequences and responses can be received and verified.",
    },
    {
      title: "IED development",
      text: "IED developers can verify the structure and functionality of devices under development and generate mandatory IED configuration files from prototype implementations.",
    },
  ];

  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/75" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
                IEC61850 Testing & SCADA Testing
              </p>

              <h1 className="mb-5 text-4xl font-bold leading-tight md:text-6xl">
                IEDScout
              </h1>

              <p className="mb-6 text-xl leading-8 text-slate-300">
                Versatile software tool for working with IEC 61850 devices.
              </p>

              <p className="max-w-2xl text-lg leading-8 text-slate-400">
                IEDScout is an ideal tool for protection and substation automation
                engineers working with IEC 61850 devices. It provides access to
                IEDs and performs numerous useful functions when working with
                them.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#product-details"
                  className="rounded-xl bg-blue-600 px-6 py-4 text-center font-semibold text-white transition hover:bg-blue-700"
                >
                  View Details
                </a>

                <a
                  href="/brochures/IEDScout-Brochure-ENU-1.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-white/20 bg-white/5 px-6 py-4 text-center font-semibold text-white transition hover:bg-white hover:text-slate-950"
                >
                  Download Brochure
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative group">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-blue-600/20 to-indigo-600/20 blur-2xl" />

                <div className="relative overflow-hidden rounded-3xl bg-white/5 p-6 shadow-2xl">
                  <img
                    src="/images/products/iedscout.png"
                    alt="IEDScout"
                    className="mx-auto w-full max-w-2xl object-contain transition duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
              Product Highlights
            </p>
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
              Built for IEC 61850 visibility, analysis, and simulation
            </h2>
            <p className="text-lg text-slate-600">
              IEDScout helps engineers examine devices, inspect communication,
              simulate IED behavior, and analyze data traffic in demanding
              substation environments.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg"
              >
                <div className="mb-4 text-blue-600 text-xl">⚡</div>
                <p className="leading-7 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILS */}
      <section id="product-details" className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8 flex gap-3 border-b">
            <button
              onClick={() => setActiveTab("description")}
              className={`px-5 py-3 font-semibold ${
                activeTab === "description"
                  ? "border-b-2 border-blue-600"
                  : ""
              }`}
            >
              Description
            </button>

            <button
              onClick={() => setActiveTab("attachment")}
              className={`px-5 py-3 font-semibold ${
                activeTab === "attachment"
                  ? "border-b-2 border-blue-600"
                  : ""
              }`}
            >
              Attachment
            </button>
          </div>

          {activeTab === "description" ? (
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Showing and understanding IEC 61850
              </h2>

              <p className="text-lg leading-8 text-slate-700">
                IEDScout is an ideal tool for protection and substation automation
                engineers working with IEC 61850 devices. It provides access to
                IEDs and enables users to extensively test devices.
              </p>
            </div>
          ) : (
            <div>
              <a
                href="/brochures/IEDScout-Brochure-ENU-1.pdf"
                target="_blank"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg"
              >
                Download PDF
              </a>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}