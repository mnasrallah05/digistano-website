"use client";

import { useState } from "react";

export default function HVA341HVA34TD1Page() {
  const [activeTab, setActiveTab] = useState<"description" | "attachment">(
    "description"
  );

  const highlights = [
    "Compact and portable VLF test sets for medium voltage cables",
    "HVA34TD-1 includes integrated Tan Delta diagnostics",
    "HVA34TD-1 features TD leakage current correction (guard terminal)",
    "HVA34-1 can be extended with the TD diagnostics unit",
    "Performs VLF and DC testing",
    "Supports sheath testing with sheath fault location mode",
  ];

  const features = [
    {
      title: "Performance",
      text: "Outstanding features considering size and weight versus output load.",
    },
    {
      title: "Duty cycle",
      text: "Operating time of these test sets is not thermally limited; they may operate continuously.",
    },
    {
      title: "Safety first",
      text: "The test sets have two independent earthing devices (electronic and mechanical discharging) and an integrated 12 kV transient protection system (at 50 Hz) to protect both the operator and the device.",
    },
    {
      title: "Field use",
      text: "A watertight and very rugged case with protection class of IP67 (with closed lid) makes no need for additional transport solutions.",
    },
    {
      title: "Connectivity",
      text: "On site, no external PC is needed. All results can later be downloaded via USB or Bluetooth for further investigation and easy reporting via software tool.",
    },
    {
      title: "Service and maintenance",
      text: "With no oil or arcing contacts, the dry-type transformer makes these test sets almost maintenance-free.",
    },
    {
      title: "MWT",
      text: "In addition, HVA34TD-1 offers a Monitored Withstand Test, a combination of withstand testing and Tan Delta diagnostics in compliance with the guide IEEE 400.2-2013.",
    },
  ];

  const specs = [
    { label: "Output voltage", value: "max. 34 kVpeak, 24 kVrms" },
    { label: "Output load", value: "1.5 μF @ 0.1 Hz @ 24 kVrms" },
    { label: "Weight", value: "39 kg / 86 lbs" },
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
                MV & HV Cables Testing Solutions
              </p>

              <h1 className="mb-5 text-4xl font-bold md:text-6xl">
                HVA34-1 & HVA34TD-1
              </h1>

              <p className="mb-6 text-xl text-slate-300">
                Compact and portable VLF cable test sets with integrated Tan Delta
                diagnostics option
              </p>

              <p className="text-lg leading-8 text-slate-400">
                The HVA34-1 and HVA34TD-1 are compact VLF test sets for determining
                the condition of medium voltage cables. They perform VLF and DC
                testing, as well as sheath testing with sheath fault location mode.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#product-details"
                  className="rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white hover:bg-blue-700"
                >
                  View Details
                </a>

                <a
                  href="/brochures/DHV1452_HVA34-1_HVA34TD-1_datasheet_EN_Rev00_01.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-white/30 px-6 py-4 font-semibold text-white hover:bg-white/10"
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
                    src="/images/products/hva34-1-hva34td-1.png"
                    alt="HVA34-1 & HVA34TD-1"
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
              Portable VLF testing with advanced Tan Delta diagnostics support
            </h2>
            <p className="text-lg text-slate-600">
              HVA34-1 and HVA34TD-1 combine compact field-ready design, VLF/DC
              testing capability, sheath testing, and advanced diagnostics features
              for medium voltage cable assessment.
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
                    Compact and portable VLF test sets
                  </h2>

                  <div className="space-y-6 text-lg leading-9 text-slate-700">
                    <p>
                      The HVA34-1 and HVA34TD-1 are truly compact and portable VLF
                      test sets which determine the condition of medium voltage
                      cables.
                    </p>

                    <p>
                      HVA34TD-1 device includes integrated Tan Delta diagnostics
                      capabilities and features TD leakage current correction (guard
                      terminal), in comparison to HVA34-1 device, which can be
                      with the TD diagnostics unit extended.
                    </p>

                    <p>
                      They both perform VLF and DC testing, as well as sheath
                      testing with sheath fault location mode.
                    </p>
                  </div>
                </div>

                <div className="mt-8 grid gap-8 md:grid-cols-2">
                  {features.map((feature) => (
                    <div
                      key={feature.title}
                      className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
                    >
                      <h3 className="mb-4 text-2xl font-bold text-slate-900">
                        {feature.title}
                      </h3>
                      <div className="mb-5 h-1 w-14 rounded bg-blue-600" />
                      <p className="leading-8 text-slate-600">{feature.text}</p>
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
                    MV & HV Cables Testing Solutions
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
                    DHV1452_HVA34-1_HVA34TD-1_datasheet_EN_Rev00_01.pdf
                  </h2>
                </div>

                <a
                  href="/brochures/DHV1452_HVA34-1_HVA34TD-1_datasheet_EN_Rev00_01.pdf"
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