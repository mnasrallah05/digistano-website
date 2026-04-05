"use client";

import { useState } from "react";

export default function PD1202PDTD1202Page() {
  const [activeTab, setActiveTab] = useState<"description" | "attachment">(
    "description"
  );

  const highlights = [
    "Portable and built-in solutions for diagnostics of medium voltage cables, rotating machines, and transformers",
    "Supports early detection of vulnerabilities before cable failure in service",
    "PDTD120-2 includes integrated Tan Delta diagnostics",
    "Provides simultaneous comprehensive PD and TD diagnostics",
    "Suitable for testing XLPE, PE, EPR and PILC cables up to 100 km",
    "Precise PD fault localization with 1% accuracy and 0.1 pC per 0.1 m resolution",
  ];

  const featureCards = [
    {
      title: "Performance",
      text: "PDTD120-2 includes integrated Tan Delta diagnostics capabilities and thus features simultaneous comprehensive PD and TD diagnostics, saving time and avoiding preconditioning of the cable, which would lead to false results.",
    },
    {
      title: "Comprehensive diagnostics",
      text: "PDTD120-2 allows measurement of cables with different lengths at constant frequency, being a prerequisite for the comparison of PD and TD results from previous measurements.",
    },
    {
      title: "Application",
      text: "Suitable for testing XLPE, PE, EPR and PILC cables up to 100 km.",
    },
    {
      title: "PD localization",
      text: "Precise localization of PD faults in cables with the accuracy 1% and resolution 0.1 pC per 0.1 m.",
    },
    {
      title: "Complete system",
      text: "In combination with the HVA120 device (not in scope of supply), PDTD120-2 creates a full-featured and full-value system for 120 kV output voltage scope.",
    },
    {
      title: "Compliance",
      text: "PD120-2 and PDTD120-2 devices are in compliance with guides like IEEE 400.2 and 400.3 and standards HD 620, CENELEC 50393, IEC 60270, IEC 60502-2 and their local derivations.",
    },
  ];

  const specs = [
    {
      label: "Operating voltage (sine wave)",
      value: "max. 120 kVpeak, 85 kVrms",
    },
    {
      label: "Capacitance – PD-2 CC",
      value: "~ 1 nF",
    },
    {
      label: "Capacitance – PD-2 Filter",
      value: "~ 1 nF",
    },
    {
      label: "Velocity range (v/2)",
      value: "10 – 150 m/μs",
    },
    {
      label: "PD background level",
      value: "< 10 pC",
    },
    {
      label: "Sample rate",
      value: "200 MS/s",
    },
    {
      label: "Tan Delta (resolution / accuracy)",
      value: "1 x 10^-5 / ± 1 x 10^-4",
    },
  ];

  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/70" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
                MV &amp; HV Cables Testing Solutions
              </p>

              <h1 className="mb-5 text-4xl font-bold md:text-6xl">
                PD120-2 &amp; PDTD120-2
              </h1>

              <p className="mb-6 text-xl text-slate-300">
                Advanced PD and Tan Delta diagnostics for cable systems
              </p>

              <p className="text-lg leading-8 text-slate-400">
                Portable and built-in solutions for diagnostics of medium
                voltage cables, rotating machines and transformers, enabling
                early detection of vulnerabilities and preventive maintenance
                before failure occurs in service.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#product-details"
                  className="rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700"
                >
                  View Details
                </a>

                <a
                  href="/brochures/DHV1374_PDTD120-2_Datasheet_b2_EN_Rev05_02.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-white/30 px-6 py-4 font-semibold text-white transition hover:bg-white/10"
                >
                  Download Brochure
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative group">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-blue-600/20 to-indigo-600/20 blur-2xl transition duration-500 group-hover:from-blue-600/30 group-hover:to-indigo-600/30" />
                <div className="relative overflow-hidden rounded-3xl bg-white/5 p-6 shadow-2xl">
                  <img
                    src="/images/products/pd120-2-pdtd120-2.png"
                    alt="PD120-2 & PDTD120-2"
                    className="mx-auto h-auto w-full max-w-xl object-contain transition duration-700 group-hover:scale-110"
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
              Comprehensive PD and Tan Delta diagnostics for long cable systems
            </h2>
            <p className="text-lg text-slate-600">
              PD120-2 and PDTD120-2 support accurate defect localization,
              simultaneous diagnostics, and condition assessment for a wide
              range of cable assets and insulation systems.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-600">
                  ⚡
                </div>
                <p className="leading-7 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILS + TABS */}
      <section id="product-details" className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8 flex flex-wrap gap-3 border-b border-slate-200">
            <button
              onClick={() => setActiveTab("description")}
              className={`rounded-t-xl px-5 py-3 text-sm font-semibold transition ${
                activeTab === "description"
                  ? "border border-b-white border-slate-200 bg-white text-slate-900"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              Description
            </button>

            <button
              onClick={() => setActiveTab("attachment")}
              className={`rounded-t-xl px-5 py-3 text-sm font-semibold transition ${
                activeTab === "attachment"
                  ? "border border-b-white border-slate-200 bg-white text-slate-900"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              Attachment
            </button>
          </div>

          {activeTab === "description" ? (
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
                    Description
                  </p>

                  <h2 className="mb-4 text-3xl font-bold text-slate-900">
                    Comprehensive cable diagnostics and PD localization
                  </h2>

                  <div className="space-y-6 text-lg leading-9 text-slate-700">
                    <p>
                      The PD120-2 and PDTD120-2 offer both portable and built-in
                      solutions for diagnostics of medium voltage cables,
                      rotating machines and transformers.
                    </p>

                    <p>
                      Diagnostics of medium and high voltage cables provides the
                      opportunity for early detection of vulnerabilities and
                      preventative maintenance work to be carried out before the
                      cable fails in service.
                    </p>
                  </div>
                </div>

                <div className="mt-8 grid gap-8 md:grid-cols-2">
                  {featureCards.map((card) => (
                    <div
                      key={card.title}
                      className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
                    >
                      <h3 className="mb-4 text-2xl font-bold text-slate-900">
                        {card.title}
                      </h3>
                      <div className="mb-5 h-1 w-14 rounded bg-blue-600" />
                      <p className="leading-8 text-slate-600">{card.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-4">
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
                    Technical Specifications
                  </p>

                  <div className="space-y-5">
                    {specs.map((spec, index) => (
                      <div key={index}>
                        <p className="text-sm text-slate-500">{spec.label}</p>
                        <p className="font-semibold text-slate-900">
                          {spec.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
                    Product Category
                  </p>

                  <p className="mb-4 text-base leading-8 text-slate-600">
                    MV &amp; HV Cables Testing Solutions
                  </p>

                  <a
                    href="/products/hv-cables"
                    className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700"
                  >
                    Back to Category
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
                    Attachment
                  </p>
                  <h2 className="text-2xl font-bold text-slate-900">
                    DHV1374_PDTD120-2_Datasheet_b2_EN_Rev05_02.pdf
                  </h2>
                </div>

                <a
                  href="/brochures/DHV1374_PDTD120-2_Datasheet_b2_EN_Rev05_02.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700"
                >
                  Download
                </a>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}