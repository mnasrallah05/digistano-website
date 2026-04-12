import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "MV & HV Cables Testing Solutions | Cable Diagnostics Equipment | DigiStano",
  description:
    "Explore DigiStano’s MV & HV cable testing solutions including VLF testing, tan delta diagnostics, partial discharge measurement, insulation assessment, and monitoring systems for medium- and high-voltage cable applications.",
  keywords: [
    "MV Cable Testing",
    "HV Cable Testing",
    "Cable Diagnostics Equipment",
    "VLF Testing Systems",
    "Tan Delta Testing",
    "Partial Discharge Cable Testing",
    "Insulation Assessment",
    "DigiStano Cable Testing Solutions",
  ],
  openGraph: {
    title:
      "MV & HV Cables Testing Solutions | Cable Diagnostics Equipment | DigiStano",
    description:
      "Advanced cable testing and diagnostic solutions for medium- and high-voltage networks across the UAE and GCC.",
    url: "https://www.digistano.com/products/hv-cables",
    siteName: "DigiStano",
    images: [
      {
        url: "https://www.digistano.com/images/cables-testing.jpg",
        width: 1200,
        height: 630,
        alt: "DigiStano MV & HV Cables Testing Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DigiStano MV & HV Cables Testing Solutions",
    description:
      "Cable testing, diagnostics, VLF testing, tan delta, and partial discharge solutions.",
    images: ["https://www.digistano.com/images/cables-testing.jpg"],
  },
};

export default function MVHVCablesPage() {
  const products = [
    {
      name: "CP TD12/15",
      slug: "cp-td12-15",
      image: "/images/products/cp-td12-15.png",
      description:
        "Compact tan delta and capacitance testing solution for cable diagnostics and insulation assessment.",
    },
    {
      name: "CPC 100",
      slug: "cpc-100",
      image: "/images/products/cpc-100.png",
      description:
        "Multi-functional primary testing device for electrical equipment commissioning, diagnostics, and testing.",
    },
    {
      name: "DIRANA",
      slug: "dirana",
      image: "/images/products/dirana.png",
      description:
        "Advanced dielectric response analysis tool for insulation condition assessment.",
    },
    {
      name: "HVA120",
      slug: "hva120",
      image: "/images/products/hva120.png",
      description:
        "High-voltage VLF testing system designed for medium- and high-voltage cable testing applications.",
    },
    {
      name: "HVA28 & HVA28TD",
      slug: "hva28-hva28td",
      image: "/images/products/hva28-hva28td.png",
      description:
        "Portable VLF test system for cable testing, sheath testing, and diagnostics in compact field setups.",
    },
    {
      name: "HVA34-1 & HVA34TD-1",
      slug: "hva34-1-hva34td-1",
      image: "/images/products/hva34-1-hva34td-1.png",
      description:
        "Compact VLF cable testing and diagnostic solution for flexible site use.",
    },
    {
      name: "HVA45 & HVA45TD",
      slug: "hva45-hva45td",
      image: "/images/products/hva45-hva45td.png",
      description:
        "Field-ready VLF testing and tan delta diagnostic system for medium-voltage cable assessment.",
    },
    {
      name: "HVA60",
      slug: "hva60",
      image: "/images/products/hva60.png",
      description:
        "Rugged VLF testing platform suitable for demanding cable commissioning and maintenance work.",
    },
    {
      name: "HVA90",
      slug: "hva90",
      image: "/images/products/hva90.png",
      description:
        "High-capacity VLF cable testing system for extended medium- and high-voltage applications.",
    },
    {
      name: "MONCABLO",
      slug: "moncablo",
      image: "/images/products/moncablo.png",
      description:
        "Cable monitoring and diagnostic support solution for advanced testing environments.",
    },
    {
      name: "MONTESTO 200",
      slug: "montesto-200",
      image: "/images/products/montesto-200.png",
      description:
        "Online monitoring interface for partial discharge and insulation condition analysis.",
    },
    {
      name: "MPD 800",
      slug: "mpd-800",
      image: "/images/products/mpd-800.png",
      description:
        "Professional partial discharge analysis system for testing electrical insulation systems.",
    },
    {
      name: "PD120-2 & PDTD120-2",
      slug: "pd120-2-pdtd120-2",
      image: "/images/products/pd120-2-pdtd120-2.png",
      description:
        "High-voltage partial discharge and diagnostic solution for cable insulation assessment.",
    },
    {
      name: "PD60-2 & PDTD60-2",
      slug: "pd60-2-pdtd60-2",
      image: "/images/products/pd60-2-pdtd60-2.png",
      description:
        "Versatile partial discharge testing system for medium-voltage cable diagnostics.",
    },
    {
      name: "PD90-2 & PDTD90-2",
      slug: "pd90-2-pdtd90-2",
      image: "/images/products/pd90-2-pdtd90-2.png",
      description:
        "Advanced diagnostic system for insulation assessment and partial discharge measurements.",
    },
    {
      name: "Primary Test Manager (PTM)",
      slug: "primary-test-manager-ptm",
      image: "/images/products/primary-test-manager-ptm.png",
      description:
        "Centralized software platform for planning, controlling, and documenting primary test workflows.",
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
              MV & HV Cables Testing Solutions
            </h1>

            <p className="max-w-3xl text-lg leading-8 text-slate-300">
              Explore DigiStano solutions for medium- and high-voltage cable
              testing, diagnostics, partial discharge measurements, insulation
              assessment, VLF testing, and related monitoring workflows.
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
                Comprehensive cable testing and diagnostics solutions for field
                and laboratory applications
              </h2>

              <p className="mb-6 text-lg leading-8 text-slate-600">
                Our MV & HV Cables category includes systems for VLF testing,
                tan delta diagnostics, partial discharge analysis, dielectric
                response measurements, online monitoring, and test management.
              </p>

              <p className="text-lg leading-8 text-slate-600">
                These solutions are suitable for utilities, cable testing teams,
                commissioning engineers, diagnostic specialists, and asset
                maintenance professionals working on medium- and high-voltage
                cable networks.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm text-slate-500">Products</p>
                <p className="mt-2 text-3xl font-bold text-slate-900">16</p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm text-slate-500">Focus</p>
                <p className="mt-2 text-xl font-bold text-slate-900">
                  MV & HV Cables
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm text-slate-500">Applications</p>
                <p className="mt-2 text-xl font-bold text-slate-900">
                  Testing & Diagnostics
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
                    href={`/products/hv-cables/${product.slug}`}
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
                  Testing Confidence
                </h3>
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50 text-lg text-blue-600">
                  ⚡
                </span>
              </div>
              <div className="mb-6 h-1 w-14 rounded bg-blue-600" />
              <p className="leading-8 text-slate-600">
                Perform commissioning, maintenance, and acceptance testing with
                dedicated systems designed for cable and insulation assessment.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-5 flex items-center justify-between">
                <h3 className="text-2xl font-bold text-slate-900">
                  Diagnostic Depth
                </h3>
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50 text-lg text-blue-600">
                  📈
                </span>
              </div>
              <div className="mb-6 h-1 w-14 rounded bg-blue-600" />
              <p className="leading-8 text-slate-600">
                Analyze insulation condition, partial discharge behavior, tan
                delta response, and broader cable health indicators with
                precision.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-5 flex items-center justify-between">
                <h3 className="text-2xl font-bold text-slate-900">
                  Field Flexibility
                </h3>
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50 text-lg text-blue-600">
                  🧰
                </span>
              </div>
              <div className="mb-6 h-1 w-14 rounded bg-blue-600" />
              <p className="leading-8 text-slate-600">
                Use compact portable systems and robust field-ready platforms
                that support testing teams in practical on-site environments.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}