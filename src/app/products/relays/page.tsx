export default function RelayMetersPage() {
  const products = [
    {
      name: "CMC 256 plus",
      slug: "cmc-256-plus",
      image: "/images/products/cmc-256-plus.png",
      description:
        "Advanced relay test set designed for comprehensive testing of protection relays, meters, and secondary systems.",
    },
    {
      name: "CMC 353",
      slug: "cmc-353",
      image: "/images/products/cmc-353.png",
      description:
        "Compact and versatile relay test set for commissioning, maintenance, and testing of protection and measurement devices.",
    },
    {
      name: "CMC 356",
      slug: "cmc-356",
      image: "/images/products/cmc-356.png",
      description:
        "High-performance universal relay test equipment for demanding protection, meter, and power quality testing workflows.",
    },
    {
      name: "StationScout",
      slug: "stationscout",
      image: "/images/products/stationscout.png",
      description:
        "Innovative IEC 61850 testing solution for substation automation systems, communication validation, and engineering support.",
    },
  ];

  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/75" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
              Products
            </p>

            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
              Relays, Meters, Power Quality and Secondary Injection
            </h1>

            <p className="max-w-3xl text-lg leading-8 text-slate-300">
              Explore DigiStano solutions for protection relay testing, meter
              testing, power quality applications, secondary injection, and IEC
              61850-related engineering and validation workflows.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
                Product Category
              </p>

              <h2 className="mb-6 text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
                Professional testing solutions for relay protection, meters,
                secondary systems, and IEC 61850 applications
              </h2>

              <p className="mb-6 text-lg leading-8 text-slate-600">
                Our relay and meter testing category includes dedicated tools
                for protection relay commissioning, maintenance, power quality
                validation, secondary injection tasks, and digital substation
                engineering support.
              </p>

              <p className="text-lg leading-8 text-slate-600">
                These solutions are suitable for utilities, testing engineers,
                commissioning teams, protection specialists, and substation
                automation professionals working on electrical systems in the
                field and in the lab.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm text-slate-500">Products</p>
                <p className="mt-2 text-3xl font-bold text-slate-900">4</p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm text-slate-500">Focus</p>
                <p className="mt-2 text-xl font-bold text-slate-900">
                  Relay & Meters
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm text-slate-500">Applications</p>
                <p className="mt-2 text-xl font-bold text-slate-900">
                  Testing & Injection
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
              Available Products
            </p>
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
              Browse the solutions in this category
            </h2>
            <p className="text-lg text-slate-600">
              Select a product to view its details, technical description, and
              available documentation.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {products.map((product) => (
              <div
                key={product.slug}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative flex h-[280px] items-center justify-center overflow-hidden bg-slate-100 p-8">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full w-auto max-w-full object-contain transition duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-8">
                  <h3 className="mb-3 min-h-[64px] text-2xl font-bold text-slate-900">
                    {product.name}
                  </h3>

                  <p className="mb-6 min-h-[110px] leading-7 text-slate-600">
                    {product.description}
                  </p>

                  <a
                    href={`/products/relays/${product.slug}`}
                    className="inline-flex items-center rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY THIS CATEGORY */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-5 flex items-center justify-between">
                <h3 className="text-2xl font-bold text-slate-900">
                  Protection Accuracy
                </h3>
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50 text-lg text-blue-600">
                  ⚡
                </span>
              </div>
              <div className="mb-6 h-1 w-14 rounded bg-blue-600" />
              <p className="leading-8 text-slate-600">
                Validate relay behavior, secondary circuits, and protective
                schemes with reliable testing platforms designed for practical
                field and commissioning use.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-5 flex items-center justify-between">
                <h3 className="text-2xl font-bold text-slate-900">
                  Flexible Applications
                </h3>
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50 text-lg text-blue-600">
                  🧰
                </span>
              </div>
              <div className="mb-6 h-1 w-14 rounded bg-blue-600" />
              <p className="leading-8 text-slate-600">
                Support meter testing, secondary injection, IEC 61850
                validation, and broader electrical test workflows with scalable
                multi-purpose solutions.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-5 flex items-center justify-between">
                <h3 className="text-2xl font-bold text-slate-900">
                  Engineering Confidence
                </h3>
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50 text-lg text-blue-600">
                  📈
                </span>
              </div>
              <div className="mb-6 h-1 w-14 rounded bg-blue-600" />
              <p className="leading-8 text-slate-600">
                Improve commissioning speed, maintenance confidence, and
                substation engineering quality with proven professional testing
                and analysis tools.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}