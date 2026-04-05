"use client";

import { useState } from "react";

export default function BA80Page() {
  const [activeTab, setActiveTab] = useState<"description" | "attachment">(
    "description"
  );

  const highlights = [
    "Smallest and lightest portable oil test set of its rating",
    "Evaluates the condition of transformer insulating fluids",
    "Helps decide whether transformer oil has to be changed",
    "Fastest switch-off time on the market available (< 5 μs)",
    "Suitable for mineral oils, ester fluids, and silicone fluids",
    "Supports standards including IEC 60156, ASTM D1816, ASTM D877, AS 1767.2.1, and GOST 6581",
  ];

  const featureCards = [
    {
      title: "Performance",
      text: "The BA family from b2 electronics has the fastest switch-off time on the market available (< 5 μs) with the voltage rise from 0.5 to 10 kV/s.",
    },
    {
      title: "Application",
      text: "Suitable for mineral oils, ester fluids, both natural or synthetic, and silicone fluids for a temperature range from zero to 100°C.",
    },
    {
      title: "Full software coverage",
      text: "With the included BA ControlCenter software, individual test procedures can be programmed as well as several units can be controlled and overviewed simultaneously. Test results are available in printed form, as PDF format and as text files.",
    },
    {
      title: "Bright color display",
      text: "The extra-bright and high-contrast 2.8″ color display assures optimal readability even under tricky ambient light conditions or in bright outdoor situations.",
    },
    {
      title: "Compliance",
      text: "The BA80 device is in compliance with standard IEC 60156, its local derivations; ASTM D1816 – 04, ASTM D877 – 02, AS 1767.2.1 and GOST 6581 – 75.",
    },
  ];

  const specs = [
    {
      label: "Output voltage",
      value: "up to 80 kVrms",
    },
    {
      label: "Switch-off time on flashover",
      value: "< 5 μs",
    },
    {
      label: "Weight (kg)",
      value: "22 (incl. battery)",
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
                Transformer Testing Solutions
              </p>

              <h1 className="mb-5 text-4xl font-bold md:text-6xl">BA80</h1>

              <p className="mb-6 text-xl text-slate-300">
                Portable breakdown analyzer for transformer insulating fluids
              </p>

              <p className="text-lg leading-8 text-slate-400">
                A compact portable oil test set for evaluating transformer
                insulating fluids, supporting asset life extension decisions
                with fast performance, strong compliance, and convenient
                software integration.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#product-details"
                  className="rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700"
                >
                  View Details
                </a>

                <a
                  href="/brochures/DHV1234_BA80_Datasheet_b2_EN_Rev03.pdf"
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
                    src="/images/products/ba80.png"
                    alt="BA80"
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
              Fast and reliable transformer oil condition evaluation
            </h2>
            <p className="text-lg text-slate-600">
              BA80 helps determine the condition of transformer insulating
              fluids, making it easier to decide when oil replacement is needed
              to extend transformer asset life.
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
                    Portable breakdown analyzer for transformer oil testing
                  </h2>

                  <div className="space-y-6 text-lg leading-9 text-slate-700">
                    <p>
                      Breakdown Analyzer test set BA80 is the smallest and
                      lightest portable oil test set of its rating evaluating
                      the condition of the transformer insulating fluids.
                    </p>

                    <p>
                      It is a necessary device that helps you to decide whether
                      the transformer oil has to be changed in order to extend
                      the asset life.
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
                    {specs.map((spec) => (
                      <div key={spec.label}>
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
                    Transformer Testing Solutions
                  </p>

                  <a
                    href="/products/transformers"
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
                    DHV1234_BA80_Datasheet_b2_EN_Rev03.pdf
                  </h2>
                </div>

                <a
                  href="/brochures/DHV1234_BA80_Datasheet_b2_EN_Rev03.pdf"
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