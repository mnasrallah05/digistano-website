
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "IEC 61850 & SCADA Testing Solutions | Digital Substation Tools | DigiStano",
  description:
    "Explore DigiStano’s IEC 61850 and SCADA testing solutions including engineering tools, communication validation, IED testing, and digital substation simulation for commissioning and troubleshooting across the GCC.",
  keywords: [
    "IEC 61850 Testing",
    "SCADA Testing",
    "Digital Substation Testing",
    "IED Testing Tools",
    "Substation Automation Testing",
    "IEC 61850 Engineering Tools",
    "DigiStano IEC Testing",
  ],
  openGraph: {
    title:
      "IEC 61850 & SCADA Testing Solutions | Digital Substation Tools | DigiStano",
    description:
      "Advanced IEC 61850 engineering, testing, and SCADA validation tools for modern digital substations.",
    url: "https://www.digistano.com/products/iec-testing",
    siteName: "DigiStano",
    images: [
      {
        url: "https://www.digistano.com/images/relay-testing.jpg",
        width: 1200,
        height: 630,
        alt: "DigiStano IEC 61850 Testing Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DigiStano IEC 61850 & SCADA Testing Solutions",
    description:
      "Engineering and testing tools for IEC 61850, SCADA systems, and digital substations.",
    images: ["https://www.digistano.com/images/relay-testing.jpg"],
  },
};


export default function IEC61850TestingAndSCADATestingPage() {
  const products = [
    {
      name: "IEDScout",
      slug: "iedscout",
      image: "/images/products/iedscout.png",
      description:
        "Versatile software tool for working with IEC 61850 devices.",
    },
    {
      name: "ISIO 200",
      slug: "isio-200",
      image: "/images/products/isio-200.png",
      description:
        "Compact and powerful interface solution for IEC 61850 testing and substation communication workflows.",
    },
    {
      name: "StationScout",
      slug: "stationscout",
      image: "/images/products/stationscout.png",
      description:
        "Efficient engineering and testing solution for digital substations and IEC 61850 system validation.",
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
              IEC61850 Testing and SCADA Testing
            </h1>

            <p className="max-w-3xl text-lg leading-8 text-slate-300">
              Explore DigiStano solutions for IEC 61850 engineering, testing,
              simulation, and substation communication workflows. This category
              includes software and tools designed to support digital substation
              environments, commissioning, troubleshooting, and SCADA-related
              validation activities.
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
                Specialized solutions for modern IEC 61850 and digital substation
                applications
              </h2>

              <p className="mb-6 text-lg leading-8 text-slate-600">
                Our IEC61850 Testing and SCADA Testing category includes tools
                that help engineers examine IEDs, validate communication,
                simulate digital substation behavior, and streamline testing and
                commissioning activities.
              </p>

              <p className="text-lg leading-8 text-slate-600">
                These solutions are suited for utilities, system integrators,
                commissioning teams, protection engineers, and substation
                automation specialists working in demanding technical
                environments.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm text-slate-500">Products</p>
                <p className="mt-2 text-3xl font-bold text-slate-900">3</p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm text-slate-500">Focus</p>
                <p className="mt-2 text-xl font-bold text-slate-900">
                  IEC 61850
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm text-slate-500">Use Case</p>
                <p className="mt-2 text-xl font-bold text-slate-900">
                  Testing & SCADA
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
              downloadable brochure.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.slug}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative flex h-[300px] items-center justify-center overflow-hidden bg-slate-100 p-8">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full w-auto max-w-full object-contain transition duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-8">
                  <h3 className="mb-3 text-2xl font-bold text-slate-900">
                    {product.name}
                  </h3>

                  <p className="mb-6 min-h-[84px] leading-7 text-slate-600">
                    {product.description}
                  </p>

                  <a
                    href={`/products/iec-testing/${product.slug}`}
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
                  Engineering Visibility
                </h3>
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50 text-lg text-blue-600">
                  👁
                </span>
              </div>
              <div className="mb-6 h-1 w-14 rounded bg-blue-600" />
              <p className="leading-8 text-slate-600">
                Gain visibility into device models, communication behavior,
                reports, and IEC 61850-based interactions across substation
                environments.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-5 flex items-center justify-between">
                <h3 className="text-2xl font-bold text-slate-900">
                  Testing Efficiency
                </h3>
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50 text-lg text-blue-600">
                  ⚡
                </span>
              </div>
              <div className="mb-6 h-1 w-14 rounded bg-blue-600" />
              <p className="leading-8 text-slate-600">
                Support commissioning, troubleshooting, and validation activities
                with tools designed to speed up engineering and testing
                workflows.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-5 flex items-center justify-between">
                <h3 className="text-2xl font-bold text-slate-900">
                  Digital Substation Support
                </h3>
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50 text-lg text-blue-600">
                  🖧
                </span>
              </div>
              <div className="mb-6 h-1 w-14 rounded bg-blue-600" />
              <p className="leading-8 text-slate-600">
                Use dedicated tools that align with IEC 61850 and SCADA-related
                applications for modern utility and industrial substation
                projects.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}