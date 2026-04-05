"use client";

import { useState } from "react";

export default function VOTANO100Page() {
  const [activeTab, setActiveTab] = useState<"description" | "attachment">(
    "description"
  );

  const highlights = [
    "Highly accurate portable voltage transformer test device",
    "Suitable for inductive voltage transformers and capacitive voltage transformers",
    "Supports electrical performance checks, class verification, and calibration",
    "Ideal for on-site tests and calibration tasks in power system grids",
    "Useful in production facilities and test/development labs",
    "VB02 voltage booster supplies test voltage and integrated switchbox automates sequences",
  ];

  const useCases = [
    {
      title: "Accurate VT testing",
      text: "VOTANO 100 offers highly accurate voltage transformer tests for both inductive voltage transformers (VTs) and capacitive voltage transformers (CVTs).",
    },
    {
      title: "Field and lab use",
      text: "Its light-weight portable design makes it ideal for on-site tests and calibration tasks in power system grids, as well as for use in production facilities and test labs.",
    },
    {
      title: "Automated test support",
      text: "The voltage booster VB02 provides the test voltage during ratio measurement, while the integrated switchbox automatically switches between the necessary test sequences.",
    },
  ];

  const keyCapabilities = [
    "Inductive VT testing",
    "Capacitive VT testing",
    "Class verification and calibration",
    "Portable field testing",
    "Production and lab support",
    "Automated switching between test sequences",
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
                Switchgear Testing Solutions
              </p>

              <h1 className="mb-5 text-4xl font-bold md:text-6xl">
                VOTANO 100
              </h1>

              <p className="mb-6 text-xl text-slate-300">
                Sophisticated testing of inductive and capacitive voltage transformers
              </p>

              <p className="text-lg leading-8 text-slate-400">
                A highly accurate portable solution for voltage transformer
                performance checks, class verification, calibration, and
                efficient testing workflows in the field and in the lab.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#product-details"
                  className="rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700"
                >
                  View Details
                </a>

                <a
                  href="/brochures/VOTANO-100-Brochure-ENU-1.pdf"
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
                    src="/images/products/votano-100.png"
                    alt="VOTANO 100"
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
              Highly accurate voltage transformer testing made portable
            </h2>
            <p className="text-lg text-slate-600">
              VOTANO 100 combines precision, portability, and workflow
              automation for voltage transformer testing, class verification,
              and calibration in substations, labs, and manufacturing
              environments.
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
                    Sophisticated testing of inductive and capacitive voltage transformers
                  </h2>

                  <div className="space-y-6 text-lg leading-9 text-slate-700">
                    <p>
                      VOTANO 100 is the first portable device (15 kg/33 lbs)
                      which offers highly accurate voltage transformer tests.
                      This allows to use VOTANO 100 not only for electrical
                      performance checks, but also for class verification and
                      calibration.
                    </p>

                    <p>
                      It performs quick tests of all kinds of inductive voltage
                      transformers (VTs) and capacitive voltage transformers
                      (CVTs) for both protection and metering purposes.
                    </p>

                    <p>
                      Its light-weight design makes it ideal for on-site tests
                      and calibration tasks in power system grids. As a
                      manufacturer or testing lab you can use VOTANO 100 in your
                      production facilities and test/development labs.
                    </p>

                    <p>
                      The voltage booster VB02 provides the test voltage during
                      the ratio measurement. Its integrated switchbox
                      automatically switches between the necessary test
                      sequences.
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
                    Switchgear Testing Solutions
                  </p>

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
                    VOTANO-100-Brochure-ENU-1.pdf
                  </h2>
                </div>

                <a
                  href="/brochures/VOTANO-100-Brochure-ENU-1.pdf"
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