"use client";

export default function MONGEMOPage() {
  const highlights = [
    "Permanently installed online partial discharge monitoring system",
    "Designed for one or multiple rotating machines",
    "Suitable for generators and electrical motors",
    "Used for assessing stator winding insulation condition",
    "Detects insulation defects by continuous PD data collection and analysis",
    "Provides detailed PD trend analyses for maintenance decisions",
  ];

  const useCases = [
    {
      title: "Online PD monitoring",
      text: "MONGEMO is a permanently installed continuous online partial discharge monitoring system for one or multiple rotating machines.",
    },
    {
      title: "Insulation assessment",
      text: "It is used for assessing the insulation condition of stator windings and detecting insulation defects by continuously collecting and analyzing PD data over time.",
    },
    {
      title: "Maintenance support",
      text: "The system provides detailed PD trend analyses to assess a machine’s insulation state and support timely maintenance decisions.",
    },
  ];

  const keyCapabilities = [
    "Continuous online PD monitoring",
    "Rotating machine insulation assessment",
    "Generator monitoring",
    "Electrical motor monitoring",
    "Stator winding condition evaluation",
    "PD trend analysis for maintenance planning",
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
                Rotating Machines Testing Solutions
              </p>

              <h1 className="mb-5 text-4xl font-bold md:text-6xl">
                MONGEMO
              </h1>

              <p className="mb-6 text-xl text-slate-300">
                PD monitoring for rotating machines
              </p>

              <p className="text-lg leading-8 text-slate-400">
                A permanently installed online partial discharge monitoring
                system for rotating machines, helping assess insulation
                condition, detect insulation defects, and support maintenance
                decisions with trend-based analysis.
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
                    src="/images/products/mongemo.png"
                    alt="MONGEMO"
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
              Continuous PD monitoring for better rotating machine decisions
            </h2>
            <p className="text-lg text-slate-600">
              MONGEMO continuously collects and analyzes PD data to help
              engineers understand insulation condition, identify defects, and
              make timely maintenance decisions for rotating machines.
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
                  PD monitoring for rotating machines
                </h2>

                <div className="space-y-6 text-lg leading-9 text-slate-700">
                  <p>
                    MONGEMO is a permanently installed, continuous on-line
                    partial discharge (PD) monitoring system for one or multiple
                    rotating machines, such as generators and electrical motors.
                  </p>

                  <p>
                    It is used for assessing the insulation condition of stator
                    windings and detecting insulation defects by continuously
                    collecting and analyzing PD data over time.
                  </p>

                  <p>
                    The system provides you with detailed PD trend analyses to
                    assess a machine&apos;s insulation state and make timely
                    maintenance decisions.
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
                  Rotating Machines Testing Solutions
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