"use client";

export default function StationScoutPage() {
  const highlights = [
    "Innovative testing solution for IEC 61850 Substation Automation Systems (SAS)",
    "Simplifies testing and significantly reduces testing effort",
    "Robust and powerful hardware platform",
    "Simulates multiple IEDs with secure isolation to SAS networks",
    "Helps visualize SCL files and trace signals",
    "User-friendly workflow with minimal configuration effort",
  ];

  const useCases = [
    {
      title: "SAS testing",
      text: "StationScout simplifies testing for Substation Automation Systems and helps engineers validate communication, signaling, and operational logic more efficiently.",
    },
    {
      title: "IED simulation",
      text: "It allows users to simulate multiple IEDs while maintaining secure isolation to SAS networks, making it suitable for realistic digital substation test scenarios.",
    },
    {
      title: "Signal tracing",
      text: "The user-friendly software helps visualize SCL files and trace signals inside the substation environment without requiring complex setup or configuration effort.",
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
                IEC61850 Testing & SCADA Testing
              </p>

              <h1 className="mb-5 text-4xl font-bold leading-tight md:text-6xl">
                StationScout
              </h1>

              <p className="mb-6 text-xl leading-8 text-slate-300">
                The innovative testing solution for IEC 61850 Substation
                Automation Systems (SAS)
              </p>

              <p className="max-w-2xl text-lg leading-8 text-slate-400">
                StationScout simplifies testing for Substation Automation
                Systems and reduces the required testing effort with a practical,
                user-friendly workflow.
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
                    src="/images/products/stationscout.png"
                    alt="StationScout"
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
              Advanced support for digital substation testing and validation
            </h2>
            <p className="text-lg text-slate-600">
              StationScout is designed to simplify IEC 61850 SAS testing, give
              engineers better visibility, and reduce time spent on validation
              and troubleshooting.
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
                  Simple yet powerful
                </h2>

                <div className="space-y-6 text-lg leading-9 text-slate-700">
                  <p>
                    StationScout simplifies testing for Substation Automation
                    Systems (SAS) and significantly reduces the required testing
                    effort.
                  </p>

                  <p>
                    It comes with a robust and powerful hardware that allows
                    users to simulate multiple IEDs with secure isolation to the
                    SAS networks.
                  </p>

                  <p>
                    This user-friendly software helps you to visualize SCL files
                    or trace signals within your substation without any
                    configuration effort.
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
                    "IEC 61850 SAS testing",
                    "Multiple IED simulation",
                    "Secure network isolation",
                    "SCL file visualization",
                    "Signal tracing",
                    "Reduced configuration effort",
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
                  IEC61850 Testing and SCADA Testing
                </p>

                <p className="text-base leading-8 text-slate-600">
                  Also related to:
                  <br />
                  Relays, Meters, Power Quality and Secondary Injection
                </p>

                <a
                  href="/products/iec-testing"
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