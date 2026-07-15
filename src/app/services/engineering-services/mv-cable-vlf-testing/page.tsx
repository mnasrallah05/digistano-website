import type { Metadata } from "next";

const url =
  "https://www.digistano.com/services/engineering-services/mv-cable-vlf-testing";

export const metadata: Metadata = {
  title: "MV Cable, VLF & VLF-PD Testing GCC | DigiStano",
  description:
    "DigiStano provides MV cable testing, VLF withstand testing, VLF-PD diagnostics, Tan Delta assessment, and cable testing support across Saudi Arabia, UAE, Qatar, and Oman.",
  keywords: [
    "MV cable testing",
    "VLF testing",
    "VLF-PD testing",
    "cable partial discharge testing",
    "MV cable testing Saudi Arabia",
    "VLF testing KSA",
    "MV cable testing UAE",
    "cable testing Qatar",
    "cable testing Oman",
    "Tan Delta cable testing",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "MV Cable, VLF and VLF-PD Testing | DigiStano",
    description:
      "Onsite MV cable testing and diagnostic support across Saudi Arabia, UAE, Qatar, and Oman.",
    url,
    siteName: "DigiStano",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://www.digistano.com/images/cables-testing.jpg",
        alt: "DigiStano MV cable and VLF testing services",
      },
    ],
  },
};

const services = [
  {
    title: "MV cable testing",
    text: "Field testing support for medium-voltage cable systems during commissioning, planned maintenance, troubleshooting, and condition assessment projects.",
  },
  {
    title: "VLF withstand testing",
    text: "Very low frequency testing for cable withstand requirements using project-appropriate test equipment and agreed test parameters.",
  },
  {
    title: "VLF-PD testing",
    text: "Combined VLF excitation and partial discharge measurement to support cable-system diagnostic assessment and defect localization activities.",
  },
  {
    title: "Tan Delta diagnostics",
    text: "Dielectric-loss assessment to support evaluation of cable insulation condition and maintenance planning.",
  },
];

export default function MvCableVlfTestingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: "MV Cable, VLF and VLF-PD Testing",
    serviceType: "Medium-voltage cable testing and diagnostics",
    description:
      "MV cable testing, VLF withstand testing, VLF-PD diagnostics, and Tan Delta assessment.",
    url,
    provider: { "@id": "https://www.digistano.com/#organization" },
    areaServed: [
      { "@type": "Country", name: "Saudi Arabia" },
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Country", name: "Qatar" },
      { "@type": "Country", name: "Oman" },
    ],
  };

  return (
    <main className="bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />

      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0">
          <img
            src="/images/cables-testing.jpg"
            alt="MV cable VLF and VLF-PD testing"
            className="h-full w-full object-cover opacity-25"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-900/70" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
              Cable Testing and Diagnostics
            </p>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              MV cable testing, VLF and VLF-PD services across the GCC
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              DigiStano supports cable commissioning, withstand testing,
              diagnostic assessment, and partial discharge measurement projects
              in Saudi Arabia, UAE, Qatar, and Oman.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/services/engineering-services#appointment"
                className="rounded-xl bg-blue-600 px-6 py-4 text-center font-semibold text-white transition hover:bg-blue-700"
              >
                Book an Engineering Consultation
              </a>
              <a
                href="#cable-services"
                className="rounded-xl border border-white/20 px-6 py-4 text-center font-semibold text-white transition hover:bg-white hover:text-slate-950"
              >
                Explore Cable Services
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="cable-services" className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
              Testing Scope
            </p>
            <h2 className="text-3xl font-bold md:text-5xl">
              Cable testing selected for the project objective
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              The final method and test parameters are coordinated according to
              the cable system, voltage class, site condition, and required
              assessment outcome.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-1 hover:border-blue-300 hover:bg-white hover:shadow-xl"
              >
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="mt-4 leading-8 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
              Regional Delivery
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">
              Site-ready support across four key markets
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
            {["Saudi Arabia", "United Arab Emirates", "Qatar", "Oman"].map(
              (country) => (
                <div
                  key={country}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <p className="text-sm text-blue-300">Service coverage</p>
                  <h3 className="mt-2 text-xl font-semibold">{country}</h3>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-3xl bg-blue-600 p-8 text-white md:p-12">
            <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-bold md:text-4xl">
                  Plan your cable testing scope with DigiStano
                </h2>
                <p className="mt-4 text-lg leading-8 text-blue-100">
                  Share the cable type, voltage class, project location, testing
                  objective, and preferred schedule with our engineering team.
                </p>
              </div>
              <a
                href="/services/engineering-services#appointment"
                className="rounded-xl bg-white px-6 py-4 text-center font-semibold text-blue-700 transition hover:bg-slate-100"
              >
                Request a Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
