import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Rotating Machines Testing Solutions | Motor & Generator Diagnostics | DigiStano",
  description:
    "Explore DigiStano’s rotating machines testing solutions including insulation diagnostics, partial discharge analysis, dielectric testing, frequency response analysis, and condition monitoring for motors and generators.",
  keywords: [
    "Rotating Machines Testing",
    "Motor Testing Equipment",
    "Generator Diagnostics",
    "Insulation Testing Motors",
    "Partial Discharge Machines",
    "Frequency Response Analysis",
    "DigiStano Rotating Machines",
  ],
  openGraph: {
    title:
      "Rotating Machines Testing Solutions | Motor & Generator Diagnostics | DigiStano",
    description:
      "Advanced diagnostic and testing solutions for rotating electrical machines including motors and generators.",
    url: "https://www.digistano.com/products/rotating-machines",
    siteName: "DigiStano",
    images: [
      {
        url: "https://www.digistano.com/images/rotating-machines.jpg",
        width: 1200,
        height: 630,
        alt: "DigiStano Rotating Machines Testing Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DigiStano Rotating Machines Testing Solutions",
    description:
      "Testing and diagnostic solutions for motors, generators, and rotating electrical equipment.",
    images: ["https://www.digistano.com/images/rotating-machines.jpg"],
  },
};

export default function RotatingMachinesPage() {
  const products = [
    {
      name: "CP CR600",
      slug: "cp-cr600",
      image: "/images/products/cp-cr600.png",
      description:
        "Portable solution for specialized rotating machine testing and advanced diagnostic workflows.",
    },
    {
      name: "CP TD12/15",
      slug: "cp-td12-15",
      image: "/images/products/cp-td12-15.png",
      description:
        "Capacitance and tan delta measurement module for accurate insulation diagnostics and testing support.",
    },
    {
      name: "CPC 100",
      slug: "cpc-100",
      image: "/images/products/cpc-100.png",
      description:
        "Universal primary injection test system for commissioning, diagnostics, and maintenance applications.",
    },
    {
      name: "DIRANA",
      slug: "dirana",
      image: "/images/products/dirana.png",
      description:
        "Dielectric insulation analyzer for condition assessment of high-voltage insulation systems.",
    },
    {
      name: "FRANEO 800",
      slug: "franeo-800",
      image: "/images/products/franeo-800.png",
      description:
        "Frequency response analysis solution for advanced assessment of electrical and mechanical integrity.",
    },
    {
      name: "MONGEMO",
      slug: "mongemo",
      image: "/images/products/mongemo.png",
      description:
        "Specialized monitoring and diagnostic solution for rotating machine condition evaluation.",
    },
    {
      name: "MONTESTO 200",
      slug: "montesto-200",
      image: "/images/products/montesto-200.png",
      description:
        "Portable online partial discharge monitoring system for temporary asset monitoring under load.",
    },
    {
      name: "MPD 800",
      slug: "mpd-800",
      image: "/images/products/mpd-800.png",
      description:
        "Universal partial discharge measurement and analysis system for accurate defect detection.",
    },
    {
      name: "Primary Test Manager (PTM)",
      slug: "primary-test-manager-ptm",
      image: "/images/products/primary-test-manager-ptm.png",
      description:
        "Software platform for guided testing, condition assessment, and data management of electrical assets.",
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
              Rotating Machines Testing Solutions
            </h1>

            <p className="max-w-3xl text-lg leading-8 text-slate-300">
              Explore DigiStano solutions for rotating machine diagnostics,
              insulation testing, partial discharge analysis, dielectric
              assessment, monitoring, and guided testing workflows for critical
              electrical assets.
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
                Professional testing and diagnostic solutions for rotating machines
              </h2>

              <p className="mb-6 text-lg leading-8 text-slate-600">
                Our rotating machines category includes solutions for insulation
                assessment, capacitance and tan delta measurements, dielectric
                response analysis, frequency response analysis, temporary online
                monitoring, and partial discharge diagnostics.
              </p>

              <p className="text-lg leading-8 text-slate-600">
                These tools are suitable for utilities, industrial maintenance
                teams, OEMs, testing specialists, and condition monitoring
                engineers who work with generators, motors, and other rotating
                electrical assets.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm text-slate-500">Products</p>
                <p className="mt-2 text-3xl font-bold text-slate-900">9</p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm text-slate-500">Focus</p>
                <p className="mt-2 text-xl font-bold text-slate-900">
                  Rotating Machines
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
                    href={`/products/rotating-machines/${product.slug}`}
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
                Assess insulation condition with advanced dielectric, tan delta,
                capacitance, and partial discharge diagnostic tools designed for
                rotating machines.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-5 flex items-center justify-between">
                <h3 className="text-2xl font-bold text-slate-900">
                  Monitoring Flexibility
                </h3>
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50 text-lg text-blue-600">
                  🧰
                </span>
              </div>
              <div className="mb-6 h-1 w-14 rounded bg-blue-600" />
              <p className="leading-8 text-slate-600">
                Use portable or permanently applied monitoring approaches to
                trend condition, identify defects, and support maintenance
                planning before failure occurs.
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
                Combine hardware diagnostics and guided software workflows to
                improve test quality, shorten analysis time, and support more
                confident maintenance decisions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}