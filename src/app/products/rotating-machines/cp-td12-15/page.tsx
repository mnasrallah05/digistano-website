"use client";

export default function CPTD1215Page() {
  const highlights = [
    "Accessory for TESTRANO 600, CPC 100, or CPC 80",
    "Designed for power/dissipation factor and capacitance measurements",
    "Includes high-voltage source, reference capacitor, and measurement electronics",
    "Generates output voltages up to 12 kV and 15 kV",
    "Provides currents up to 300 mA",
    "Achieves laboratory precision even in environments with strong interferences",
  ];

  const useCases = [
    {
      title: "Capacitance measurements",
      text: "CP TD12 and CP TD15 are built to support accurate capacitance measurements in demanding electrical testing environments.",
    },
    {
      title: "Tan delta testing",
      text: "They are ideal accessories for performing power factor and dissipation factor (tan delta) measurements with compatible test systems.",
    },
    {
      title: "High precision field use",
      text: "With integrated source, reference capacitor, and measurement electronics, the units deliver laboratory-grade precision even under strong interference conditions.",
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
                MV & HV Cables Testing Solutions
              </p>

              <h1 className="mb-5 text-4xl font-bold leading-tight md:text-6xl">
                CP TD12/15
              </h1>

              <p className="mb-6 text-xl leading-8 text-slate-300">
                Module for capacitance and power/dissipation factor (tan delta)
                measurements
              </p>

              <p className="max-w-2xl text-lg leading-8 text-slate-400">
                A powerful accessory for TESTRANO 600, CPC 100, or CPC 80,
                designed to perform precise capacitance and tan delta
                measurements in field and laboratory applications.
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
                    src="/images/products/cp-td12-15.png"
                    alt="CP TD12/15"
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
              Precise capacitance and tan delta testing support
            </h2>
            <p className="text-lg text-slate-600">
              CP TD12 and CP TD15 provide accurate measurements, integrated
              source and reference functionality, and reliable performance in
              environments with strong interferences.
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
                  Powerful accessory
                </h2>

                <div className="space-y-6 text-lg leading-9 text-slate-700">
                  <p>
                    The CP TD12 and CP TD15 are accessories for TESTRANO 600,
                    CPC 100 or CPC 80 for performing power/dissipation factor
                    and capacitance measurements.
                  </p>

                  <p>
                    The CP TD12 and CP TD15 include a high-voltage source,
                    reference capacitor and measurement electronics.
                  </p>

                  <p>
                    They can generate output voltages up to 12 kV respectively
                    15 kV, currents up to 300 mA and achieve laboratory
                    precision, even in environments with strong interferences.
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
                  {[
                    "Capacitance measurement",
                    "Power/dissipation factor testing",
                    "High-voltage source included",
                    "Reference capacitor included",
                    "Measurement electronics integrated",
                    "High accuracy under strong interference",
                  ].map((item) => (
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
                  MV & HV Cables Testing Solutions
                </p>

                <p className="text-base leading-8 text-slate-600">
                  Also related to:
                  <br />
                  Rotating Machines Testing Solutions
                  <br />
                  Transformer Testing Solutions
                </p>

                <a
                  href="/products/rotating-machines"
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