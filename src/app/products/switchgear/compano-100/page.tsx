"use client";

export default function COMPANO100Page() {
  const highlights = [
    "Universal and easy-to-use solution for basic testing duties in electrical energy systems",
    "Controlled electronic sources provide exact desired values",
    "Supports variable frequencies, different signal forms, automated ramps, and pure DC",
    "Highly flexible inputs configurable as binary, voltage, or current inputs",
    "Runs without main power supply for several hours",
    "Portable due to light weight",
  ];

  const keyFeatures = [
    "Accurate output of desired value",
    "Run complex predefined sequences and ramps",
    "Polarity check signal generation for quick setup of wiring tests",
    "Runs without main power supply for several hours",
    "High versatility",
    "Portable due to light weight",
  ];

  const applications = [
    "Wiring and polarity checks",
    "Burden measurements",
    "Single-phase protection relay testing",
    "CT / VT ratio checks",
    "Micro-ohm resistance testing",
  ];

  const useCases = [
    {
      title: "Flexible signal generation",
      text: "Controlled electronic sources allow the user to obtain exactly the desired value and to output signals with variable frequencies, automated ramps, and pure DC.",
    },
    {
      title: "Configurable inputs",
      text: "The highly flexible inputs are configurable, for example, as binary inputs for relay testing, AC or DC voltage inputs, or current inputs.",
    },
    {
      title: "Portable field testing",
      text: "Its light weight and ability to run without main power supply for several hours make it highly practical for field testing and commissioning tasks.",
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
                Switchgear Testing Solutions
              </p>

              <h1 className="mb-5 text-4xl font-bold md:text-6xl">
                COMPANO 100
              </h1>

              <p className="mb-6 text-xl text-slate-300">
                Universal and easy-to-use field testing solution
              </p>

              <p className="text-lg leading-8 text-slate-400">
                A versatile portable solution for basic testing duties in
                electrical energy systems, with flexible inputs, accurate signal
                generation, and reliable battery-supported operation.
              </p>

              <div className="mt-8">
                <a
                  href="#product-details"
                  className="rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700"
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
                    src="/images/products/compano-100.png"
                    alt="COMPANO 100"
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
              Practical testing flexibility for electrical energy systems
            </h2>
            <p className="text-lg text-slate-600">
              COMPANO 100 supports fast, accurate, and portable field testing
              with configurable inputs, versatile signal generation, and
              essential application coverage for switchgear-related work.
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
              {/* Description */}
              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
                  Description
                </p>

                <h2 className="mb-4 text-3xl font-bold text-slate-900">
                  Universal and easy-to-use solution
                </h2>

                <div className="space-y-6 text-lg leading-9 text-slate-700">
                  <p>
                    COMPANO 100 is the universal and easy-to-use solution for
                    all types of basic testing duties in electrical energy
                    systems.
                  </p>

                  <p>
                    Controlled electronic sources allow the user to obtain
                    exactly the desired value and to output signals with
                    variable frequencies and other signal forms, automated
                    ramps, and pure DC.
                  </p>

                  <p>
                    The highly flexible inputs are configurable, for example, as
                    binary inputs for relay testing, AC or DC voltage inputs or
                    current inputs.
                  </p>
                </div>
              </div>

              {/* Key Features */}
              <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="mb-4 text-3xl font-bold text-slate-900">
                  Key features
                </h3>

                <ul className="space-y-3">
                  {keyFeatures.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-lg leading-8 text-slate-700"
                    >
                      <span className="mt-3 h-2.5 w-2.5 rounded-full bg-blue-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Applications */}
              <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="mb-4 text-3xl font-bold text-slate-900">
                  Applications
                </h3>

                <ul className="space-y-3">
                  {applications.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-lg leading-8 text-slate-700"
                    >
                      <span className="mt-3 h-2.5 w-2.5 rounded-full bg-blue-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Use Cases */}
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
                    "Variable frequency signal output",
                    "Automated ramps and sequences",
                    "Binary, voltage, and current input flexibility",
                    "Wiring and polarity checks",
                    "CT / VT ratio verification",
                    "Portable battery-supported operation",
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
        </div>
      </section>
    </main>
  );
}