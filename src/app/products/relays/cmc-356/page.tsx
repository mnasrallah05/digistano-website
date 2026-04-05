"use client";

import { useState } from "react";

export default function CMC356Page() {
  const [activeTab, setActiveTab] = useState<"description" | "attachment">(
    "description"
  );

  const highlights = [
    "Universal solution for testing all generations and types of protection relays",
    "Powerful six current sources",
    "Three-phase mode up to 64 A / 860 VA per channel",
    "Great dynamic range for demanding relay applications",
    "Suitable for high-burden electromechanical relays",
    "Supports commissioning tasks including wiring and plausibility checks",
  ];

  const useCases = [
    {
      title: "Relay testing",
      text: "CMC 356 is a universal solution for testing all generations and types of protection relays, from traditional electromechanical devices to advanced modern relays.",
    },
    {
      title: "High-power applications",
      text: "Its six powerful current sources and high dynamic range make it capable of testing even high-burden electromechanical relays with very high power demands.",
    },
    {
      title: "Commissioning support",
      text: "Commissioning engineers benefit from its ability to perform wiring and plausibility checks of current transformers using primary injection of high currents directly from the test set.",
    },
  ];

  const keyCapabilities = [
    "Six-phase relay testing",
    "High-current output capability",
    "Testing of high-burden relays",
    "Protection relay versatility",
    "Primary injection support",
    "Commissioning and plausibility checks",
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
                Relay &amp; Meters
              </p>

              <h1 className="mb-5 text-4xl font-bold md:text-6xl">
                CMC 356
              </h1>

              <p className="mb-6 text-xl text-slate-300">
                Powerful six-phase relay testing and more
              </p>

              <p className="text-lg leading-8 text-slate-400">
                A universal and powerful test solution for protection relays,
                high-burden electromechanical devices, and demanding
                commissioning workflows requiring versatility, amplitude, and
                power.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#product-details"
                  className="rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700"
                >
                  View Details
                </a>

                <a
                  href="/brochures/CMC-356-Brochure-ENU-2.pdf"
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
                    src="/images/products/cmc-356.png"
                    alt="CMC 356"
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
              Universal relay testing with maximum versatility and power
            </h2>
            <p className="text-lg text-slate-600">
              CMC 356 combines six current sources, broad relay testing
              coverage, and high output performance for protection engineers,
              manufacturers, and commissioning teams.
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
                    Powerful six-phase relay testing and more
                  </h2>

                  <div className="space-y-6 text-lg leading-9 text-slate-700">
                    <p>
                      The CMC 356 is the universal solution for testing all
                      generations and types of protection relays. Its powerful
                      six current sources (three-phase mode: up to 64 A / 860 VA
                      per channel) with a great dynamic range make the unit
                      capable of testing even high-burden electromechanical
                      relays with very high power demands.
                    </p>

                    <p>
                      The CMC 356 is the first choice for applications requiring
                      the highest versatility, amplitude and power.
                    </p>

                    <p>
                      Commissioning engineers will particularly appreciate its
                      ability to perform wiring and plausibility checks of
                      current transformers, by using primary injection of high
                      currents from the test set.
                    </p>
                  </div>
                </div>

                <div className="mt-8 grid gap-8 md:grid-cols-3">
                  {useCases.map((card) => (
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
                    Key Capabilities
                  </p>

                  <ul className="space-y-4">
                    {keyCapabilities.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-2 h-2.5 w-2.5 rounded-full bg-blue-600" />
                        <span className="text-base leading-7 text-slate-700">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
                    Product Category
                  </p>

                  <p className="mb-4 text-base leading-8 text-slate-600">
                    Relay &amp; Meters
                  </p>

                  <a
                    href="/products/relays"
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
                    CMC-356-Brochure-ENU-2.pdf
                  </h2>
                </div>

                <a
                  href="/brochures/CMC-356-Brochure-ENU-2.pdf"
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