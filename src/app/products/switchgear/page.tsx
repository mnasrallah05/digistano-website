import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Switchgear Testing Solutions | Circuit Breaker & CT/VT Diagnostics | DigiStano",
  description:
    "Explore DigiStano’s switchgear testing solutions including circuit breaker testing, CT and VT diagnostics, primary injection, partial discharge monitoring, and commissioning tools for substations and electrical networks.",
  keywords: [
    "Switchgear Testing",
    "Circuit Breaker Testing",
    "Primary Injection Testing",
    "CT Analyzer",
    "VT Testing",
    "Partial Discharge Monitoring",
    "Substation Commissioning",
    "DigiStano Switchgear",
  ],
  openGraph: {
    title:
      "Switchgear Testing Solutions | Circuit Breaker & CT/VT Diagnostics | DigiStano",
    description:
      "Professional switchgear testing solutions for diagnostics, commissioning, maintenance, and asset reliability.",
    url: "https://www.digistano.com/products/switchgear",
    siteName: "DigiStano",
    images: [
      {
        url: "https://www.digistano.com/images/switchgear-testing.jpg",
        width: 1200,
        height: 630,
        alt: "DigiStano Switchgear Testing Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DigiStano Switchgear Testing Solutions",
    description:
      "Circuit breaker, CT/VT, primary injection, and switchgear diagnostic solutions.",
    images: ["https://www.digistano.com/images/switchgear-testing.jpg"],
  },
};


export default function SwitchgearPage() {
  const products = [
    {
      name: "CIBANO 500",
      slug: "cibano-500",
      image: "/images/products/cibano-500.png",
      description:
        "Comprehensive circuit breaker testing solution for efficient timing, motion, and coil diagnostics.",
    },
    {
      name: "COMPANO 100",
      slug: "compano-100",
      image: "/images/products/compano-100.png",
      description:
        "Compact and versatile test device for simple commissioning and quick electrical checks in the field.",
    },
    {
      name: "CPC 100",
      slug: "cpc-100",
      image: "/images/products/cpc-100.png",
      description:
        "Universal primary injection test system for commissioning, diagnostics, and maintenance applications.",
    },
    {
      name: "CT Analyzer",
      slug: "ct-analyzer",
      image: "/images/products/ct-analyzer.png",
      description:
        "Accurate analyzer for testing current transformers and assessing their performance and condition.",
    },
    {
      name: "MONTESTO 200",
      slug: "montesto-200",
      image: "/images/products/montesto-200.png",
      description:
        "Portable online partial discharge monitoring solution for temporary testing and condition evaluation.",
    },
    {
      name: "MPD 800",
      slug: "mpd-800",
      image: "/images/products/mpd-800.png",
      description:
        "Universal partial discharge measurement and analysis system for precise defect detection and localization.",
    },
    {
      name: "Primary Test Manager (PTM)",
      slug: "primary-test-manager-ptm",
      image: "/images/products/primary-test-manager-ptm.png",
      description:
        "Guided software platform for testing workflows, condition assessment, and asset data management.",
    },
    {
      name: "VOTANO 100",
      slug: "votano-100",
      image: "/images/products/votano-100.png",
      description:
        "Advanced testing solution for voltage transformers with high accuracy and efficient result evaluation.",
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
              Switchgear Testing Solutions
            </h1>

            <p className="max-w-3xl text-lg leading-8 text-slate-300">
              Explore DigiStano solutions for circuit breaker testing, current
              and voltage transformer diagnostics, partial discharge monitoring,
              and guided commissioning workflows for switchgear systems.
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
                Professional testing solutions for switchgear diagnostics,
                commissioning, and maintenance
              </h2>

              <p className="mb-6 text-lg leading-8 text-slate-600">
                Our switchgear testing category includes solutions for circuit
                breaker testing, primary injection, current transformer
                diagnostics, voltage transformer verification, partial discharge
                assessment, and guided testing workflows.
              </p>

              <p className="text-lg leading-8 text-slate-600">
                These systems are suitable for utilities, industrial users,
                commissioning teams, testing engineers, and maintenance
                specialists working on switchgear assets in substations and
                critical electrical networks.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm text-slate-500">Products</p>
                <p className="mt-2 text-3xl font-bold text-slate-900">8</p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm text-slate-500">Focus</p>
                <p className="mt-2 text-xl font-bold text-slate-900">
                  Switchgear Testing
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm text-slate-500">Applications</p>
                <p className="mt-2 text-xl font-bold text-slate-900">
                  Diagnostics & Commissioning
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
                    href={`/products/switchgear/${product.slug}`}
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
                  Reliable Diagnostics
                </h3>
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50 text-lg text-blue-600">
                  ⚡
                </span>
              </div>
              <div className="mb-6 h-1 w-14 rounded bg-blue-600" />
              <p className="leading-8 text-slate-600">
                Validate switchgear condition with specialized tools for circuit
                breakers, instrument transformers, and insulation-related
                testing workflows.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-5 flex items-center justify-between">
                <h3 className="text-2xl font-bold text-slate-900">
                  Efficient Commissioning
                </h3>
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50 text-lg text-blue-600">
                  🧰
                </span>
              </div>
              <div className="mb-6 h-1 w-14 rounded bg-blue-600" />
              <p className="leading-8 text-slate-600">
                Support commissioning and maintenance tasks with fast setup,
                guided testing, and dependable measurement platforms for field
                engineers.
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
                Improve reliability, reduce outages, and make better maintenance
                decisions with precise testing, analysis, and condition
                assessment tools.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}