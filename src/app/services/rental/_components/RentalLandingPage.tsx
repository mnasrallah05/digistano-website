type RentalLandingPageProps = {
  name: string;
  eyebrow: string;
  summary: string;
  applications: string[];
  highlights: string[];
  canonicalUrl: string;
  image?: string;
  imageAlt?: string;
};

const countries = ["Saudi Arabia", "United Arab Emirates", "Qatar", "Oman"];

export default function RentalLandingPage({
  name,
  eyebrow,
  summary,
  applications,
  highlights,
  canonicalUrl,
  image,
  imageAlt,
}: RentalLandingPageProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${canonicalUrl}#rental-service`,
    name: `${name} Rental`,
    serviceType: "Electrical testing equipment rental",
    description: summary,
    image: image ? `https://www.digistano.com${image}` : undefined,
    url: canonicalUrl,
    provider: { "@id": "https://www.digistano.com/#organization" },
    areaServed: countries.map((country) => ({
      "@type": "Country",
      name: country,
    })),
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
            src="/images/rental.jpg"
            alt={`${name} electrical testing equipment rental`}
            className="h-full w-full object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-900/70" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className={image ? "grid items-center gap-12 lg:grid-cols-2" : "max-w-4xl"}>
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
                {eyebrow}
              </p>
              <h1 className="text-4xl font-bold leading-tight md:text-6xl">
                {name} rental in KSA, UAE, Qatar and Oman
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                {summary}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/services/rental#rental-form"
                  className="rounded-xl bg-blue-600 px-6 py-4 text-center font-semibold text-white transition hover:bg-blue-700"
                >
                  Request Rental Availability
                </a>
                <a
                  href="https://wa.me/971509020692"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-white/20 px-6 py-4 text-center font-semibold text-white transition hover:bg-white hover:text-slate-950"
                >
                  Ask on WhatsApp
                </a>
              </div>
            </div>
            {image ? (
              <div className="relative">
                <div className="absolute -inset-5 rounded-[2rem] bg-blue-500/20 blur-3xl" />
                <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-white p-8 shadow-2xl">
                  <img
                    src={image}
                    alt={imageAlt ?? `${name} rental equipment`}
                    className="max-h-[430px] w-full object-contain"
                  />
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
                Typical Applications
              </p>
              <h2 className="text-3xl font-bold md:text-4xl">
                Equipment support for demanding field projects
              </h2>
              <div className="mt-8 space-y-4">
                {applications.map((item) => (
                  <div
                    key={item}
                    className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5"
                  >
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-blue-600" />
                    <p className="leading-7 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl bg-slate-950 p-8 text-white md:p-10">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
                DigiStano Rental Support
              </p>
              <h2 className="text-3xl font-bold">Rental planned around your scope</h2>
              <div className="mt-8 space-y-5">
                {highlights.map((item) => (
                  <div key={item} className="flex gap-4 border-b border-white/10 pb-5">
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-blue-400" />
                    <p className="leading-7 text-slate-200">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            Regional Rental Coverage
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {countries.map((country) => (
              <div
                key={country}
                className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm"
              >
                <p className="font-semibold text-slate-900">{country}</p>
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
                  Check {name} rental availability
                </h2>
                <p className="mt-4 text-lg leading-8 text-blue-100">
                  Submit the project location, required dates, and application.
                  DigiStano will review the request and confirm the next steps.
                </p>
              </div>
              <a
                href="/services/rental#rental-form"
                className="rounded-xl bg-white px-6 py-4 text-center font-semibold text-blue-700 transition hover:bg-slate-100"
              >
                Start Rental Request
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
