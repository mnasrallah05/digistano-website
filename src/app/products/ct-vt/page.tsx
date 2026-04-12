import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "CT & VT Testing Solutions | Instrument Transformer Diagnostics | DigiStano",
  description:
    "Explore DigiStano’s CT and VT testing solutions including current transformer analysis, voltage transformer verification, ratio testing, insulation diagnostics, and partial discharge assessment for accurate instrument transformer evaluation.",
  keywords: [
    "CT Testing",
    "VT Testing",
    "Instrument Transformer Testing",
    "Current Transformer Analysis",
    "Voltage Transformer Testing",
    "CT Analyzer",
    "Transformer Ratio Testing",
    "DigiStano CT VT",
  ],
  openGraph: {
    title:
      "CT & VT Testing Solutions | Instrument Transformer Diagnostics | DigiStano",
    description:
      "Professional CT and VT testing solutions for diagnostics, commissioning, and accurate performance evaluation.",
    url: "https://www.digistano.com/products/ct-vt",
    siteName: "DigiStano",
    images: [
      {
        url: "https://www.digistano.com/images/ct-vt-testing.jpg",
        width: 1200,
        height: 630,
        alt: "DigiStano CT VT Testing Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DigiStano CT & VT Testing Solutions",
    description:
      "Accurate testing and diagnostics for current and voltage transformers.",
    images: ["https://www.digistano.com/images/ct-vt-testing.jpg"],
  },
};

export default function CtVtPage() {
  const products = [
    {
      name: "COMPANO 100",
      slug: "compano-100",
      image: "/images/products/compano-100.png",
      description:
        "Universal and easy-to-use solution for basic CT/VT testing, wiring checks, and ratio verification.",
    },
    {
      name: "CPC 100",
      slug: "cpc-100",
      image: "/images/products/cpc-100.png",
      description:
        "Universal primary injection test system for commissioning, diagnostics, and maintenance of CT/VT assets.",
    },
    {
      name: "CT Analyzer",
      slug: "ct-analyzer",
      image: "/images/products/ct-analyzer.png",
      description:
        "Dedicated analyzer for fast and accurate current transformer assessment and standards-based evaluation.",
    },
    {
      name: "DIRANA",
      slug: "dirana",
      image: "/images/products/dirana.png",
      description:
        "Dielectric insulation analyzer for reliable condition assessment of insulation systems.",
    },
    {
      name: "MONTESTO 200",
      slug: "montesto-200",
      image: "/images/products/montesto-200.png",
      description:
        "Portable online partial discharge monitoring solution for temporary condition evaluation.",
    },
    {
      name: "MPD 800",
      slug: "mpd-800",
      image: "/images/products/mpd-800.png",
      description:
        "Universal partial discharge measurement and analysis system for precise defect detection.",
    },
    {
      name: "Primary Test Manager (PTM)",
      slug: "primary-test-manager-ptm",
      image: "/images/products/primary-test-manager-ptm.png",
      description:
        "Guided testing and data management software for diagnostics, condition assessment, and reporting.",
    },
    {
      name: "VOTANO 100",
      slug: "votano-100",
      image: "/images/products/votano-100.png",
      description:
        "Highly accurate portable voltage transformer test solution for performance checks, class verification, and calibration.",
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
              Instrument Transformers (CT/VT) Testing Solutions
            </h1>

            <p className="max-w-3xl text-lg leading-8 text-slate-300">
              Explore DigiStano solutions for current transformer and voltage
              transformer testing, insulation assessment, partial discharge
              monitoring, guided diagnostics, and accurate evaluation workflows
              for CT/VT assets.
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
                Professional testing solutions for current and voltage transformer
                diagnostics
              </h2>

              <p className="mb-6 text-lg leading-8 text-slate-600">
                Our CT/VT testing category includes solutions for current
                transformer analysis, voltage transformer verification, ratio
                checks, commissioning support, insulation diagnostics, and
                partial discharge assessment.
              </p>

              <p className="text-lg leading-8 text-slate-600">
                These products are suitable for utilities, testing engineers,
                commissioning teams, laboratories, and maintenance specialists
                who require accurate and efficient CT/VT condition assessment
                and standards-based validation.
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
                  CT / VT Testing
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm text-slate-500">Applications</p>
                <p className="mt-2 text-xl font-bold text-slate-900">
                  Diagnostics & Verification
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
                    href={`/products/ct-vt/${product.slug}`}
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
                  Accurate Evaluation
                </h3>
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50 text-lg text-blue-600">
                  ⚡
                </span>
              </div>
              <div className="mb-6 h-1 w-14 rounded bg-blue-600" />
              <p className="leading-8 text-slate-600">
                Validate CT and VT performance with precise testing tools for
                ratio checks, standards-based assessment, and calibration
                support.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-5 flex items-center justify-between">
                <h3 className="text-2xl font-bold text-slate-900">
                  Flexible Diagnostics
                </h3>
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50 text-lg text-blue-600">
                  🧰
                </span>
              </div>
              <div className="mb-6 h-1 w-14 rounded bg-blue-600" />
              <p className="leading-8 text-slate-600">
                Support commissioning, maintenance, insulation evaluation, and
                partial discharge diagnostics with efficient hardware and guided
                software workflows.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-5 flex items-center justify-between">
                <h3 className="text-2xl font-bold text-slate-900">
                  Better Decisions
                </h3>
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50 text-lg text-blue-600">
                  📈
                </span>
              </div>
              <div className="mb-6 h-1 w-14 rounded bg-blue-600" />
              <p className="leading-8 text-slate-600">
                Improve reliability and maintenance planning with clear
                diagnostics, accurate transformer evaluation, and dependable
                reporting workflows.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}