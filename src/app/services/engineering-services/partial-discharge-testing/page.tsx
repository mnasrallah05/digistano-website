import type { Metadata } from "next";

const url =
  "https://www.digistano.com/services/engineering-services/partial-discharge-testing";

export const metadata: Metadata = {
  title: "Partial Discharge Testing KSA, UAE, Qatar & Oman | DigiStano",
  description:
    "DigiStano provides onsite partial discharge testing, PD measurement, diagnostics, and monitoring for GIS, switchgear, transformers, motors, generators, and MV/HV cables across Saudi Arabia, UAE, Qatar, and Oman.",
  keywords: [
    "PD testing",
    "partial discharge testing Saudi Arabia",
    "partial discharge testing KSA",
    "PD expert",
    "GIS PD testing",
    "PD testing transformer",
    "PD testing motor",
    "PD testing generator",
    "online partial discharge monitoring",
    "partial discharge testing UAE",
    "partial discharge testing Qatar",
    "partial discharge testing Oman",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Partial Discharge Testing Services | DigiStano",
    description:
      "Onsite PD measurement and monitoring for critical power assets across Saudi Arabia, UAE, Qatar, and Oman.",
    url,
    siteName: "DigiStano",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://www.digistano.com/images/switchgear-testing.jpg",
        alt: "DigiStano partial discharge testing services",
      },
    ],
  },
};

const applications = [
  {
    title: "GIS and switchgear PD testing",
    text: "Partial discharge measurement and condition assessment support for gas-insulated switchgear, medium-voltage switchgear, and associated components.",
  },
  {
    title: "Transformer PD testing",
    text: "Diagnostic support for power and distribution transformers to help identify insulation activity and support maintenance decisions.",
  },
  {
    title: "Motor and generator PD testing",
    text: "Offline or online partial discharge measurement for rotating-machine insulation systems, including motors and generators.",
  },
  {
    title: "MV and HV cable PD testing",
    text: "Onsite partial discharge measurement for cable systems and accessories, supporting commissioning and condition assessment requirements.",
  },
];

const approaches = [
  "Offline partial discharge measurement for planned outages and controlled test conditions",
  "Online PD measurement while the asset remains in service where the project permits",
  "Temporary or continuous monitoring for trending and maintenance planning",
  "Field-focused data review, reporting, and technical discussion with the client team",
];

export default function PartialDischargeTestingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: "Partial Discharge Testing Services",
    serviceType: "Partial discharge testing, diagnostics, and monitoring",
    description:
      "Onsite PD testing for GIS, switchgear, transformers, motors, generators, and MV/HV cables.",
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
            src="/images/switchgear-testing.jpg"
            alt="Partial discharge testing for power assets"
            className="h-full w-full object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-900/70" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
              Specialist Engineering Service
            </p>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Partial discharge testing in Saudi Arabia, UAE, Qatar and Oman
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              DigiStano provides field-focused PD testing, measurement,
              diagnostics, and monitoring support for critical electrical assets
              across utilities, industry, infrastructure, and power projects.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/services/engineering-services#appointment"
                className="rounded-xl bg-blue-600 px-6 py-4 text-center font-semibold text-white transition hover:bg-blue-700"
              >
                Book an Engineering Consultation
              </a>
              <a
                href="#applications"
                className="rounded-xl border border-white/20 px-6 py-4 text-center font-semibold text-white transition hover:bg-white hover:text-slate-950"
              >
                Explore PD Applications
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="applications" className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
              PD Testing Applications
            </p>
            <h2 className="text-3xl font-bold md:text-5xl">
              Partial discharge expertise across major power assets
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              The testing approach is selected according to the asset, operating
              condition, project objective, and site requirements.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {applications.map((item) => (
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
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
              Measurement Approaches
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">
              Offline, online and monitored PD assessment
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              DigiStano supports project-specific measurement and monitoring
              scopes, from targeted onsite diagnostics to longer-term condition
              observation.
            </p>
          </div>
          <div className="grid gap-4">
            {approaches.map((item) => (
              <div
                key={item}
                className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-blue-400" />
                <p className="leading-7 text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-3xl bg-blue-600 p-8 text-white md:p-12">
            <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-bold md:text-4xl">
                  Discuss your partial discharge testing requirement
                </h2>
                <p className="mt-4 text-lg leading-8 text-blue-100">
                  Share the asset type, location, project schedule, and testing
                  objective with DigiStano&apos;s engineering team.
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
