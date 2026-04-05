"use client";

import { useState } from "react";

export default function TESTRANO600Page() {
  const [activeTab, setActiveTab] = useState<"description" | "attachment">(
    "description"
  );

  const highlights = [
    "World’s first portable three-phase test system for transformer testing",
    "Supports common electrical tests on single- and three-phase power and distribution transformers",
    "Suitable for routine and diagnostic testing on-site or during factory acceptance tests",
    "Enables multiple transformer tests without re-connecting",
    "Cuts testing time down to one third compared to conventional single-phase test sets",
    "Compact and powerful solution for efficient transformer diagnostics",
  ];

  const useCases = [
    {
      title: "Three-phase transformer testing",
      text: "TESTRANO 600 is the world’s first portable three-phase test system supporting all common electrical tests on single- and three-phase power and distribution transformers.",
    },
    {
      title: "Routine and FAT use",
      text: "It is suitable for routine and diagnostic testing on-site as well as during factory acceptance tests (FAT).",
    },
    {
      title: "Reduced test time",
      text: "Using TESTRANO 600 enables you to perform various tests on power transformers without re-connecting, cutting testing time down to one third compared to conventional single-phase test sets.",
    },
  ];

  const keyCapabilities = [
    "Portable three-phase transformer testing",
    "Routine transformer diagnostics",
    "Factory acceptance test support",
    "Multi-test workflow without re-connection",
    "Single- and three-phase transformer support",
    "Faster testing execution in the field and factory",
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

              <h1 className="mb-5 text-4xl font-bold md:text-6xl">
                TESTRANO 600
              </h1>

              <p className="mb-6 text-xl text-slate-300">
                Powerful and compact solution
              </p>

              <p className="text-lg leading-8 text-slate-400">
                A portable three-phase transformer test system designed to
                simplify routine and diagnostic transformer testing while
                dramatically reducing setup time and repeated re-connection.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#product-details"
                  className="rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700"
                >
                  View Details
                </a>

                <a
                  href="/brochures/TESTRANO-600-Brochure-ENU.pdf"
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
                    src="/images/products/testrano-600.png"
                    alt="TESTRANO 600"
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
              Faster transformer testing with fewer connections
            </h2>
            <p className="text-lg text-slate-600">
              TESTRANO 600 streamlines transformer testing by enabling multiple
              common electrical tests in one connected setup, helping engineers
              save substantial time in the field and factory.
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
                    Powerful and compact solution
                  </h2>

                  <div className="space-y-6 text-lg leading-9 text-slate-700">
                    <p>
                      TESTRANO 600 is the world’s first portable, three-phase
                      test system which supports all common electrical tests on
                      single- and three-phase power and distribution
                      transformers for routine and diagnostic testing on-site or
                      during factory acceptance tests (FAT).
                    </p>

                    <p>
                      Using TESTRANO 600 enables you to perform various tests on
                      power transformers without re-connecting.
                    </p>

                    <p>
                      Thus, TESTRANO 600 cuts testing time down to one third
                      compared to conventional single-phase test sets.
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
                    TESTRANO-600-Brochure-ENU.pdf
                  </h2>
                </div>

                <a
                  href="/brochures/TESTRANO-600-Brochure-ENU.pdf"
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