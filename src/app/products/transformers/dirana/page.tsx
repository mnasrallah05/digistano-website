"use client";

export default function DIRANAPage() {
  const highlights = [
    "FDS-PDC+ dielectric insulation analyzer",
    "Uses dielectric frequency response (DFR) analysis",
    "Determines insulation condition of high-voltage systems",
    "Analyzes water content and oil conductivity in cellulose insulation",
    "Supports mineral oil, natural ester, synthetic ester, air, and vacuum-filled assets",
    "Measurement results shown in categories defined by IEC 60422",
  ];

  const useCases = [
    {
      title: "Insulation condition assessment",
      text: "DIRANA uses dielectric frequency response analysis to determine the condition of high-voltage insulation systems in power transformers, bushings, cables, and generators.",
    },
    {
      title: "Moisture and oil analysis",
      text: "It automatically analyzes and determines the water content and the oil conductivity in different types of cellulose insulation.",
    },
    {
      title: "Broad asset compatibility",
      text: "You can test assets filled with mineral oil, natural and synthetic ester, as well as air or vacuum, making DIRANA highly flexible across applications.",
    },
  ];

  const keyCapabilities = [
    "DFR analysis",
    "FDS-PDC+ insulation testing",
    "Water content evaluation",
    "Oil conductivity assessment",
    "Support for multiple insulation media",
    "IEC 60422-based result categorization",
  ];

  const relatedCategories = [
    "Instrument Transformers (CT/VT) Testing Solutions",
    "MV & HV Cables Testing Solutions",
    "Rotating Machines Testing Solutions",
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
                DIRANA
              </h1>

              <p className="mb-6 text-xl leading-8 text-slate-300">
                FDS-PDC+ dielectric insulation analyzer
              </p>

              <p className="max-w-2xl text-lg leading-8 text-slate-400">
                Easy determination of insulation condition using dielectric
                frequency response analysis for high-voltage insulation systems.
              </p>

              <div className="mt-8">
                <a
                  href="#product-details"
                  className="inline-flex rounded-xl bg-blue-600 px-6 py-4 text-center font-semibold text-white transition hover:bg-blue-700"
                >
                  View Details
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative group">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-blue-600/20 to-indigo-600/20 blur-2xl transition duration-500 group-hover:from-blue-600/30 group-hover:to-indigo-600/30" />

                <div className="relative overflow-hidden rounded-3xl bg-white/5 p-6 shadow-2xl">
                  <img
                    src="/images/products/dirana.png"
                    alt="DIRANA"
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
              Easy determination of insulation&apos;s condition
            </h2>
            <p className="text-lg text-slate-600">
              DIRANA analyzes high-voltage insulation systems and helps assess
              their condition through advanced dielectric response measurement.
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

      {/* DETAILS */}
      <section id="product-details" className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
                  Description
                </p>

                <h2 className="mb-4 text-3xl font-bold text-slate-900">
                  Easy determination of insulation&apos;s condition
                </h2>

                <div className="space-y-6 text-lg leading-9 text-slate-700">
                  <p>
                    DIRANA uses dielectric frequency response (DFR) analysis in
                    order to determine the condition of high-voltage insulation
                    systems such as those in power transformers, bushings,
                    cables and generators.
                  </p>

                  <p>
                    It automatically analyses and determines the water content
                    and the oil conductivity in different types of cellulose
                    insulation.
                  </p>

                  <p>
                    You can test assets filled with mineral oil, natural and
                    synthetic ester as well as air or vacuum. The measurement
                    results are shown in categories defined by IEC 60422.
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
                  href="/products/transformers"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700"
                >
                  Back to Category
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}