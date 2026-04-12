
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Training Services | Electrical & Energy Training Programs | DigiStano",
  description:
    "DigiStano provides professional training programs for electrical and energy sectors, covering testing, commissioning, asset management, protection systems, and real-world technical applications across the UAE and GCC.",
  keywords: [
    "Electrical Training UAE",
    "Power System Training",
    "Energy Sector Training",
    "Technical Training GCC",
    "Partial Discharge Training",
    "Substation Training",
    "DigiStano Training Services",
  ],
  openGraph: {
    title:
      "Training Services | Electrical & Energy Training Programs | DigiStano",
    description:
      "Professional training solutions for engineers and technicians in the electrical and energy sectors across the GCC.",
    url: "https://www.digistano.com/services/training",
    siteName: "DigiStano",
    images: [
      {
        url: "https://www.digistano.com/images/training-services.jpg",
        width: 1200,
        height: 630,
        alt: "DigiStano Training Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DigiStano Training Services",
    description:
      "Professional electrical and energy training programs across the GCC.",
    images: ["https://www.digistano.com/images/training-services.jpg"],
  },
};

export default function TrainingPage() {
  const topCards = [
    {
      title: "Consultants",
      text: "We offer specialized consultancy services in system design, substation maintenance, asset management, protection, metering, and partial discharge measurement, providing tailored solutions for optimal performance.",
    },
    {
      title: "Certificates",
      text: "We offer accredited certificates for all our training programs, ensuring that participants receive official recognition for their learning and achievements. These certificates serve as proof of professional development, enhancing your credentials and career opportunities.",
    },
    {
      title: "Trainers",
      text: "Our trainers are highly experienced and knowledgeable in their fields. With certifications and hands-on experience, they provide real-world insights, ensuring that every participant receives valuable, practical training. Their commitment to excellence ensures that you receive the highest quality education designed to meet industry needs.",
    },
  ];

  const bottomCards = [
    {
      title: "Types of Training",
      text: [
        "Our training programs offer flexible location options, including sessions at our Training Center in Dubai, Abu Dhabi, Saudi Arabia, at customer premises, or online for remote participation.",
        "Customized Training",
        "Tailored specifically to your needs, these courses are designed to meet your unique requirements. They can be conducted at various locations, such as the Dubai Training Center, your premises, or any location of your choice.",
      ],
    },
    {
      title: "Who Should Attend",
      text: [
        "Our professional training courses cater to various levels, from basic to advanced topics. They cover key areas such as equipment operation, diverse applications, and theoretical principles.",
        "Designed around real-world testing scenarios, these courses are perfect for technicians and engineers in electrical utilities, industrial facilities, equipment manufacturing, and service companies.",
      ],
    },
  ];

  const workAreas = [
    "Partial Discharge Measurement",
    "Design and Commissioning",
    "Substation Maintenance",
    "Asset Management",
    "Protection",
    "Metering",
  ];

  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0">
          <img
            src="/images/training-services.jpg"
            alt="Training Services"
            className="h-full w-full object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/75" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
              Training Services
            </p>

            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
              Professional training solutions for electrical and energy sectors
            </h1>

            <p className="max-w-3xl text-lg leading-8 text-slate-300">
              DigiStano Training Services is a leading provider of professional
              development programs tailored to the needs of individuals and
              organizations in the electrical, energy, and technology sectors.
              With a commitment to excellence and innovation, DigiStano delivers
              world-class training solutions designed to meet the challenges of a
              rapidly evolving market.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO CARDS */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            {topCards.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-5 flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-slate-900">
                    {item.title}
                  </h2>
                  <span className="h-10 w-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-lg">
                    ✦
                  </span>
                </div>

                <div className="mb-6 h-1 w-14 rounded bg-blue-600" />

                <p className="text-base leading-8 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRAINING DETAILS */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-slate-900">
                  Types of Training
                </h2>
                <span className="h-10 w-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-lg">
                  ▣
                </span>
              </div>
              <div className="mb-6 h-1 w-14 rounded bg-blue-600" />

              <p className="mb-6 text-base leading-8 text-slate-600">
                {bottomCards[0].text[0]}
              </p>

              <h3 className="mb-3 text-lg font-semibold text-slate-900">
                {bottomCards[0].text[1]}
              </h3>

              <p className="text-base leading-8 text-slate-600">
                {bottomCards[0].text[2]}
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-slate-900">
                  Who Should Attend
                </h2>
                <span className="h-10 w-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-lg">
                  ⌘
                </span>
              </div>
              <div className="mb-6 h-1 w-14 rounded bg-blue-600" />

              <p className="mb-6 text-base leading-8 text-slate-600">
                {bottomCards[1].text[0]}
              </p>

              <p className="text-base leading-8 text-slate-600">
                {bottomCards[1].text[1]}
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-slate-900">
                  Work Areas
                </h2>
                <span className="h-10 w-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-lg">
                  ⚙
                </span>
              </div>
              <div className="mb-6 h-1 w-14 rounded bg-blue-600" />

              <p className="mb-6 text-base leading-8 text-slate-600">
                Attendees include technicians and engineers specializing in:
              </p>

              <ul className="space-y-4">
                {workAreas.map((area) => (
                  <li key={area} className="flex items-start gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-blue-600" />
                    <span className="text-base leading-7 text-slate-700">
                      {area}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TRAINING IMAGE */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative group">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-blue-600/20 to-indigo-600/20 blur-2xl transition duration-500 group-hover:from-blue-600/30 group-hover:to-indigo-600/30" />

              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="/images/training-services.jpg"
                  alt="DigiStano training session"
                  className="h-[520px] w-full object-cover object-center transition duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
                Practical Learning
              </p>

              <h2 className="mb-6 text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
                Real-world training with hands-on technical exposure
              </h2>

              <p className="mb-6 text-lg leading-8 text-slate-600">
                Our training environment is designed to be highly interactive,
                combining theory with practical application. Participants gain
                exposure to actual testing concepts, real operating scenarios,
                and technical discussions led by experienced trainers.
              </p>

              <p className="text-lg leading-8 text-slate-600">
                The atmosphere is collaborative and focused, helping attendees
                build confidence, expand technical knowledge, and strengthen
                practical skills relevant to field and utility operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
            Contacts
          </p>

          <h2 className="mb-6 max-w-4xl text-3xl font-bold leading-tight md:text-4xl">
            To schedule an appointment or consultation, please send an email to
            the following address:
          </h2>

          <a
            href="mailto:support@digistano.com"
            className="inline-block text-2xl font-semibold text-emerald-400 transition hover:text-emerald-300 md:text-3xl"
          >
            support@digistano.com
          </a>
        </div>
      </section>
    </main>
  );
}