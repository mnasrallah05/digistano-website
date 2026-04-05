"use client";

export default function ISIO200Page() {
  const highlights = [
    "Simple and versatile binary I/O terminal with IEC 61850 interface",
    "Supports communication with CMC test sets and peer devices",
    "Uses fast GOOSE messaging for real-time message exchange",
    "Can be integrated into Substation Automation Systems (SAS)",
    "Extends the binary I/O capability of the test system",
    "Compact design for flexible deployment where needed",
  ];

  const useCases = [
    {
      title: "Binary I/O extension",
      text: "In combination with a CMC test set, ISIO 200 extends the binary I/O capability of the test system and adds flexibility for advanced field and lab applications.",
    },
    {
      title: "SAS integration",
      text: "As a component of a Substation Automation System, ISIO 200 handles additional binary signals and communicates to a station controller using client/server communication.",
    },
    {
      title: "Compact field deployment",
      text: "Due to its compact design, binary I/O terminals can be installed wherever necessary, making deployment practical for many testing and automation scenarios.",
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
                ISIO 200
              </h1>

              <p className="mb-6 text-xl leading-8 text-slate-300">
                Easy to use binary I/O extension.
              </p>

              <p className="max-w-2xl text-lg leading-8 text-slate-400">
                Binary input/output terminal with IEC 61850 interface for
                flexible communication, testing, and Substation Automation
                System integration.
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
                    src="/images/products/isio-200.png"
                    alt="ISIO 200"
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
              Flexible binary I/O expansion with IEC 61850 communication
            </h2>
            <p className="text-lg text-slate-600">
              ISIO 200 is built to expand binary I/O capability, support GOOSE
              messaging, and integrate into substation automation and testing
              workflows.
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
                  Easy to use binary I/O extension
                </h2>

                <p className="mb-6 text-lg leading-8 text-slate-600">
                  ISIO 200 is a simple and versatile binary I/O terminal with
                  IEC 61850 interface.
                </p>

                <div className="space-y-6 text-lg leading-9 text-slate-700">
                  <p>
                    ISIO 200 is a simple and versatile binary I/O terminal with
                    IEC 61850 interface. For communicating with CMC test sets
                    and real-time message exchange with peer devices, the fast
                    GOOSE messaging is used. By using Client/Server
                    communication, ISIO 200 can be integrated into Substation
                    Automation Systems (SAS) and communicate to a station
                    controller.
                  </p>

                  <p>
                    In combination with a CMC test set, ISIO 200 extends the
                    binary I/O capability of the test system. As a component of
                    a SAS, it handles additional binary signals. Due to its
                    compact design, binary I/O terminals can be put wherever
                    necessary.
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
                    "Binary I/O terminal",
                    "IEC 61850 interface",
                    "GOOSE messaging support",
                    "Client/Server communication",
                    "SAS integration",
                    "Compact installation footprint",
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

                <p className="text-base leading-8 text-slate-600">
                  IEC61850 Testing and SCADA Testing
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