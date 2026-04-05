"use client";

export default function CMC353Page() {
  const highlights = [
    "Compact and lightweight three-phase relay test set",
    "Ideal for three-phase protection testing and SCADA commissioning",
    "Powerful current outputs (3 x 32 A / 430 VA) for 5 A relay testing",
    "Excellent for commissioning and maintenance tasks",
    "Supports testing from electromechanical relays to IEC 61850 IEDs",
    "Integrated network for IEC 61850 testing",
  ];

  const keyFeatures = [
    "Compact design and light weight",
    "High current amplitudes for 5 A relay testing",
    "Powerful current sources for testing electromechanical relays",
    "High accuracy and versatility for testing static and numerical relays",
    "Integrated network for testing IEC 61850 IEDs",
  ];

  const softwareModules = [
    {
      label: "Test Universe",
      title: "Test Universe",
      text: "Specifically designed for settings-based protection testing with a high degree of automation, our modular software Test Universe offers numerous functions and application-optimized test modules that save you valuable time.",
    },
    {
      label: "RelaySimTest",
      title: "RelaySimTest",
      text: "With its novel and future-oriented approach our software solution for system-based protection testing performs tests independent of relay type and relay manufacturer, offering extensive parameter settings. It focuses on the correct behavior of the protection system by simulating realistic events in the power system.",
    },
    {
      label: "CMControl P",
      title: "CMControl P",
      text: "Use CMControl P for quick and easy manual testing. CMControl P is available as an App for Android tablets and Windows PC, or as a dedicated front-end device.",
    },
    {
      label: "CMEngine",
      title: "CMEngine",
      text: "The open programming interface CMEngine enables you to integrate the CMC test sets into your own testing environment and control them within any type of application.",
    },
  ];

  const hardwareOption = {
    title: "LLO-2 Hardware Option",
    text1:
      "This option adds additional 6 low level outputs to a CMC 353. The total amount of generators that can be controlled by the test set is extended from 13 to 19. The low level outputs can be used to directly test relays with low level inputs or can be used to control additional external amplifiers like CMS 356.",
    text2:
      "The low level outputs can simulate signals from non conventional CTs and VTs with low level interfaces. Unique is that Rogowski-coil signals can be simulated not only steady state but also for transients.",
  };

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
                CMC 353
              </h1>

              <p className="mb-6 text-xl text-slate-300">
                Powerful three-phase relay testing
              </p>

              <p className="text-lg leading-8 text-slate-400">
                A compact and powerful relay test set that combines portability,
                high current output, and flexibility for protection testing,
                SCADA commissioning, and IEC 61850 applications.
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
                    src="/images/products/cmc-353.png"
                    alt="CMC 353"
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
              Portable power for protection testing and commissioning
            </h2>
            <p className="text-lg text-slate-600">
              CMC 353 delivers the right balance of portability, current output,
              and test flexibility for relay engineers, maintenance teams, and
              IEC 61850 commissioning workflows.
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
                  Powerful three-phase relay testing
                </h2>

                <div className="space-y-6 text-lg leading-9 text-slate-700">
                  <p>
                    With its compact design and low weight of 13.3 kg / 29.3 lbs,
                    the CMC 353 provides the perfect combination of portability
                    and power. It is the ideal test set for three-phase
                    protection testing and the commissioning of SCADA systems.
                    The powerful current outputs (3 x 32 A / 430 VA) optimally
                    support 5 A relay testing.
                  </p>

                  <p>
                    The portable design makes this test set an excellent choice
                    for commissioning and maintenance tasks, particularly in
                    industry, distributed generation, and medium and low voltage
                    applications. The CMC 353 meets a wide variety of
                    challenges in protection engineering – from testing
                    electromechanical relays to the latest IEC 61850 IEDs.
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
                    <li key={item} className="flex items-start gap-3 text-lg leading-8 text-slate-700">
                      <span className="mt-3 h-2.5 w-2.5 rounded-full bg-blue-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Software Modules */}
              <div className="mt-8 space-y-8">
                {softwareModules.map((module) => (
                  <div
                    key={module.title}
                    className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
                  >
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
                      {module.label}
                    </p>
                    <h3 className="mb-4 text-3xl font-bold text-slate-900">
                      {module.title}
                    </h3>
                    <p className="text-lg leading-9 text-slate-700">
                      {module.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Hardware Option */}
              <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="mb-4 text-3xl font-bold text-slate-900">
                  {hardwareOption.title}
                </h3>

                <div className="space-y-6 text-lg leading-9 text-slate-700">
                  <p>{hardwareOption.text1}</p>
                  <p>{hardwareOption.text2}</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4">
              {/* Key Capabilities */}
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
                  Key Capabilities
                </p>

                <ul className="space-y-4">
                  {[
                    "Three-phase relay testing",
                    "SCADA commissioning",
                    "5 A relay testing",
                    "IEC 61850 IED testing",
                    "Manual and automated testing",
                    "Low-level output expansion option",
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

              {/* Product Category */}
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
        </div>
      </section>
    </main>
  );
}