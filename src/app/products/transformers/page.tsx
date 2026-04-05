export default function TransformersPage() {
  const products = [
    {
      name: "BA100",
      slug: "ba100",
      image: "/images/products/ba100.png",
      description:
        "High-performance accessory for transformer testing applications requiring powerful and accurate output support.",
    },
    {
      name: "BA80",
      slug: "ba80",
      image: "/images/products/ba80.png",
      description:
        "Compact booster solution designed to extend transformer testing capability in field and laboratory environments.",
    },
    {
      name: "CP TD12/15",
      slug: "cp-td12-15",
      image: "/images/products/cp-td12-15.png",
      description:
        "Capacitance and tan delta measurement module for precise insulation diagnostics and transformer assessment.",
    },
    {
      name: "CPC 100",
      slug: "cpc-100",
      image: "/images/products/cpc-100.png",
      description:
        "Universal primary injection test system for commissioning, diagnostics, and maintenance of transformer assets.",
    },
    {
      name: "DIRANA",
      slug: "dirana",
      image: "/images/products/dirana.png",
      description:
        "Dielectric insulation analyzer for reliable condition assessment of transformer insulation systems.",
    },
    {
      name: "FRANEO 800",
      slug: "franeo-800",
      image: "/images/products/franeo-800.png",
      description:
        "Frequency response analysis solution for detecting mechanical and electrical changes in transformer windings.",
    },
    {
      name: "MONTESTO 200",
      slug: "montesto-200",
      image: "/images/products/montesto-200.png",
      description:
        "Portable online partial discharge monitoring solution for temporary transformer condition assessment.",
    },
    {
      name: "MPD 800",
      slug: "mpd-800",
      image: "/images/products/mpd-800.png",
      description:
        "Universal partial discharge measurement and analysis system for precise transformer defect detection.",
    },
    {
      name: "Primary Test Manager (PTM)",
      slug: "primary-test-manager-ptm",
      image: "/images/products/primary-test-manager-ptm.png",
      description:
        "Guided testing and data management software for transformer diagnostics, condition assessment, and reporting.",
    },
    {
      name: "TESTRANO 600",
      slug: "testrano-600",
      image: "/images/products/testrano-600.png",
      description:
        "Integrated transformer testing solution for streamlined multipurpose diagnostics and routine maintenance work.",
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
              Transformer Testing Solutions
            </h1>

            <p className="max-w-3xl text-lg leading-8 text-slate-300">
              Explore DigiStano solutions for transformer diagnostics,
              insulation assessment, tan delta measurement, frequency response
              analysis, partial discharge testing, and guided asset evaluation
              workflows.
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
                Professional testing solutions for transformer diagnostics,
                commissioning, and insulation assessment
              </h2>

              <p className="mb-6 text-lg leading-8 text-slate-600">
                Our transformer testing category includes solutions for primary
                injection, dielectric response analysis, capacitance and tan
                delta measurements, winding integrity checks, partial discharge
                monitoring, and guided transformer test workflows.
              </p>

              <p className="text-lg leading-8 text-slate-600">
                These products are suitable for utilities, transformer service
                teams, industrial users, OEMs, laboratories, and commissioning
                engineers who require accurate condition assessment and reliable
                decision-making for transformer assets.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm text-slate-500">Products</p>
                <p className="mt-2 text-3xl font-bold text-slate-900">10</p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm text-slate-500">Focus</p>
                <p className="mt-2 text-xl font-bold text-slate-900">
                  Transformer Testing
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm text-slate-500">Applications</p>
                <p className="mt-2 text-xl font-bold text-slate-900">
                  Diagnostics & Insulation
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
                    href={`/products/transformers/${product.slug}`}
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
                  Insulation Insight
                </h3>
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50 text-lg text-blue-600">
                  ⚡
                </span>
              </div>
              <div className="mb-6 h-1 w-14 rounded bg-blue-600" />
              <p className="leading-8 text-slate-600">
                Assess transformer insulation condition with accurate tools for
                dielectric response, tan delta, capacitance, and partial
                discharge analysis.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-5 flex items-center justify-between">
                <h3 className="text-2xl font-bold text-slate-900">
                  Efficient Diagnostics
                </h3>
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50 text-lg text-blue-600">
                  🧰
                </span>
              </div>
              <div className="mb-6 h-1 w-14 rounded bg-blue-600" />
              <p className="leading-8 text-slate-600">
                Support transformer commissioning, maintenance, and advanced
                troubleshooting with integrated hardware and guided software
                workflows.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-5 flex items-center justify-between">
                <h3 className="text-2xl font-bold text-slate-900">
                  Better Asset Decisions
                </h3>
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50 text-lg text-blue-600">
                  📈
                </span>
              </div>
              <div className="mb-6 h-1 w-14 rounded bg-blue-600" />
              <p className="leading-8 text-slate-600">
                Improve reliability, reduce maintenance costs, and prevent
                failures through accurate transformer condition assessment and
                clear diagnostic reporting.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}