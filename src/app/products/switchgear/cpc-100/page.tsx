"use client";

import { useState } from "react";

export default function CPC100Page() {
  const [activeTab, setActiveTab] = useState<"description" | "attachment">(
    "description"
  );

  const highlights = [
    "Universal primary injection test set for substation assets",
    "Replaces several individual testing devices",
    "Reduces training and transport costs",
    "Cuts down testing time significantly",
    "Ideal for commissioning and maintenance",
    "Can be operated from the front panel or PTM software",
  ];

  const useCases = [
    {
      title: "Commissioning",
      text: "CPC 100 is ideal for substation asset commissioning by combining multiple primary test functions into one compact and powerful system.",
    },
    {
      title: "Maintenance",
      text: "It supports routine and advanced maintenance workflows while reducing setup complexity, transport needs, and overall testing time.",
    },
    {
      title: "Flexible operation",
      text: "The system can be operated directly from the integrated front panel or through the Primary Test Manager (PTM) software on a laptop.",
    },
  ];

  const keyCapabilities = [
    "Primary injection testing",
    "Substation asset commissioning",
    "Maintenance testing workflows",
    "Integrated front panel operation",
    "PTM software operation",
    "Compact all-in-one test platform",
  ];

  const relatedCategories = [
    "Instrument Transformers (CT/VT) Testing Solutions",
    "MV and HV Cables Testing Solutions",
    "Rotating Machines Testing Solutions",
    "Switchgear Testing Solutions",
    "Transformer Testing Solutions",
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
                MV & HV Cables Testing Solutions
              </p>

              <h1 className="mb-5 text-4xl font-bold leading-tight md:text-6xl">
                CPC 100
              </h1>

              <p className="mb-6 text-xl leading-8 text-slate-300">
                Universal primary injection test set for substation assets
              </p>

              <p className="max-w-2xl text-lg leading-8 text-slate-400">
                A patented all-in-one primary injection test system that
                replaces several individual testing devices and makes
                commissioning and maintenance faster, easier, and more efficient.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#product-details"
                  className="rounded-xl bg-blue-600 px-6 py-4 text-center font-semibold text-white transition hover:bg-blue-700"
                >
                  View Details
                </a>

                <a
                  href="/brochures/CPC-100-Brochure-ENU.pdf"
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
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-blue-600/20 to-indigo-600/20 blur-2xl transition duration-500 group-hover:from-blue-600/30 group-hover:to-indigo-600/30" />

                <div className="relative overflow-hidden rounded-3xl bg-white/5 p-6 shadow-2xl">
                  <img
                    src="/images/products/cpc-100.png"
                    alt="CPC 100"
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
              One compact system for powerful primary testing
            </h2>
            <p className="text-lg text-slate-600">
              CPC 100 combines flexibility, portability, and broad test coverage
              to simplify substation asset testing in both commissioning and
              maintenance applications.
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
                    Discover our CPC 100
                  </h2>

                  <div className="space-y-6 text-lg leading-9 text-slate-700">
                    <p>
                      The patented CPC 100 primary injection test system
                      replaces several individual testing devices. This reduces
                      the costs for training and transport, and cuts down
                      testing time.
                    </p>

                    <p>
                      Therefore, the CPC 100 is the ideal test set for
                      substation asset commissioning and maintenance.
                    </p>

                    <p>
                      You can operate the CPC 100 via the integrated front
                      panel, or by using the Primary Test Manager™ (PTM)
                      software on your laptop.
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
                    Related Categories
                  </p>

                  <ul className="space-y-3">
                    {relatedCategories.map((item) => (
                      <li key={item} className="text-base leading-7 text-slate-600">
                        {item}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/products/switchgear"
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
                    CPC-100-Brochure-ENU.pdf
                  </h2>
                </div>

                <a
                  href="/brochures/CPC-100-Brochure-ENU.pdf"
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