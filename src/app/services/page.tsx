
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Engineering, Rental, Training & Calibration | DigiStano",
  description:
    "Explore DigiStano’s comprehensive services including engineering support, equipment rental, technical training, and repair & calibration solutions for the electrical power industry across the UAE and GCC.",
  keywords: [
    "DigiStano Services",
    "Engineering Services UAE",
    "Equipment Rental Power Industry",
    "Electrical Testing Services",
    "Training Power Systems",
    "Calibration Services UAE",
    "High Voltage Testing Services",
  ],
  openGraph: {
    title:
      "DigiStano Services | Engineering, Rental, Training & Calibration Solutions",
    description:
      "Professional engineering services, rental solutions, training, and calibration support for the electrical power sector across the GCC.",
    url: "https://www.digistano.com/services",
    siteName: "DigiStano",
    images: [
      {
        url: "https://www.digistano.com/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "DigiStano Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DigiStano Services",
    description:
      "Engineering, rental, training, and calibration services for the power industry.",
    images: ["https://www.digistano.com/images/hero.jpg"],
  },
};

export default function ServicesLandingPage() {
  const services = [
    {
      title: "Engineering Services",
      icon: "⚙️",
      description:
        "Specialized engineering support for testing, commissioning, diagnostics, and field operations.",
      href: "/services/engineering-services",
    },
    {
      title: "Rental",
      icon: "📦",
      description:
        "Reliable rental solutions for high-end testing equipment to support short-term and project-based needs.",
      href: "/services/rental",
    },
    {
      title: "Training",
      icon: "🎓",
      description:
        "Practical technical training programs designed to improve operational knowledge and equipment handling.",
      href: "/services/training",
    },
    {
      title: "Repair & Calibration",
      icon: "🛠️",
      description:
        "Professional repair and calibration services to maintain performance, compliance, and measurement accuracy.",
      href: "/services/repair-calibration",
    },
  ];

  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0">
          <img
            src="/images/hero.jpg"
            alt="Services"
            className="h-full w-full object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/75" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
              Our Services
            </p>

            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
              Comprehensive technical services for power applications
            </h1>

            <p className="max-w-3xl text-lg leading-8 text-slate-300">
              DigiStano delivers specialized support across engineering,
              equipment rental, technical training, and repair & calibration
              services for the electrical power industry.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
              Explore Services
            </p>

            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
              Service areas designed to support your operational requirements
            </h2>

            <p className="text-lg text-slate-600">
              Select a service area below to learn more about DigiStano&apos;s
              capabilities and support offerings.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl text-blue-600">
                  {service.icon}
                </div>

                <h3 className="mb-3 text-xl font-semibold text-slate-900">
                  {service.title}
                </h3>

                <p className="mb-5 leading-7 text-slate-600">
                  {service.description}
                </p>

                <a
                  href={service.href}
                  className="font-medium text-blue-600 hover:text-blue-700"
                >
                  Learn more →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            Need Assistance
          </p>

          <h2 className="mb-6 text-3xl font-bold text-slate-900 md:text-5xl">
            Let&apos;s discuss the right service for your project
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-slate-600">
            Contact DigiStano to discuss engineering requirements, rental
            support, training, or repair & calibration needs.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}