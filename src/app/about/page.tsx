"use client";

import { useEffect, useRef, useState } from "react";

function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -80px 0px",
      }
    );

    observer.observe(element);

    return () => observer.unobserve(element);
  }, []);

  return { ref, isVisible };
}

function FadeUpSection({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, isVisible } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 700ms ease, transform 700ms ease`,
        transitionDelay: `${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}

function VideoShowcase() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl">
      <div className="relative bg-black">
        {!isPlaying ? (
          <button
            type="button"
            onClick={() => setIsPlaying(true)}
            className="group relative block aspect-video w-full overflow-hidden bg-black"
          >
            {/* BACKGROUND IMAGE FULL WIDTH */}
            <img
              src="/images/video-cover.jpg"
              alt="DigiStano"
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30" />
            <div className="absolute inset-0 bg-blue-950/30" />

            {/* PLAY BUTTON */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border border-white/30 bg-white/20 backdrop-blur-md transition group-hover:scale-110">
                <div className="ml-1 h-0 w-0 border-y-[14px] border-y-transparent border-l-[22px] border-l-white" />
              </div>
            </div>

            {/* TEXT */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <p className="text-sm uppercase tracking-[0.25em] text-blue-300 mb-2">
                Watch Presentation
              </p>

              <h3 className="text-2xl font-bold text-white md:text-3xl">
                DigiStano at a glance
              </h3>

              <p className="text-sm text-slate-200 mt-2">
                Discover our capabilities, technical expertise, and regional
                support across the electrical power industry.
              </p>
            </div>
          </button>
        ) : (
          <video
            controls
            autoPlay
            className="aspect-video w-full object-contain bg-black"
          >
            <source src="/videos/about.mp4" type="video/mp4" />
          </video>
        )}
      </div>
    </div>
  );
}

export default function AboutPage() {
  const values = [
    {
      number: "01",
      title: "Collaboration With Our Partners",
      description:
        "We work closely with our partners to develop tailored solutions that address their unique needs, technical challenges, and market expectations.",
    },
    {
      number: "02",
      title: "Passion For Results",
      description:
        "We are driven by performance and execution, delivering high-value solutions and support that exceed expectations and create lasting impact.",
    },
    {
      number: "03",
      title: "Constantly Improving",
      description:
        "We continuously refine our services, knowledge, and technical capabilities to meet evolving partner requirements and industry demands.",
    },
  ];

  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0">
          <img
            src="/images/hero.jpg"
            alt="About DigiStano"
            className="h-full w-full object-cover opacity-20"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/75" />

        <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_30%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32 lg:py-40">
          <FadeUpSection>
            <div className="max-w-4xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
                About DigiStano
              </p>

              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl xl:text-7xl">
                A leading player in the electrical power industry
              </h1>

              <p className="max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
                DigiStano delivers advanced technology solutions, expert
                technical support, and strong partner representation across the
                UAE and GCC power sector.
              </p>

              <div className="mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                  <p className="text-sm text-slate-300">Industry Focus</p>
                  <p className="mt-2 text-lg font-semibold">Electrical Power</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                  <p className="text-sm text-slate-300">Regional Presence</p>
                  <p className="mt-2 text-lg font-semibold">UAE & GCC</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                  <p className="text-sm text-slate-300">Core Strength</p>
                  <p className="mt-2 text-lg font-semibold">
                    Fast Local Support
                  </p>
                </div>
              </div>
            </div>
          </FadeUpSection>
        </div>
      </section>

      {/* COMPANY INTRO */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/40 to-white" />

        <div className="relative mx-auto max-w-7xl px-6">
          <FadeUpSection className="mb-14 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
              Who We Are
            </p>

            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-5xl">
              Built to serve the power sector with expertise, speed, and trust
            </h2>

            <p className="text-lg leading-8 text-slate-600">
              DigiStano combines technical depth, local market understanding,
              and strong international partnerships to deliver practical value
              across the electrical power industry.
            </p>
          </FadeUpSection>

          <div className="grid gap-8 lg:grid-cols-2">
            <FadeUpSection delay={100}>
              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
                <div className="mb-6 flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-xl text-blue-600">
                    ⚡
                  </span>
                  <h3 className="text-2xl font-semibold text-slate-900">
                    Our Company
                  </h3>
                </div>

                <div className="space-y-6 text-lg leading-8 text-slate-600">
                  <p>
                    DigiStano is established to serve the electrical power
                    industry with innovative and advanced technology solutions,
                    in addition to providing professional representation for
                    international high voltage substation solutions manufacturers
                    in the UAE market.
                  </p>

                  <p>
                    DigiStano is committed to providing the best and fastest-track
                    support to customers and thereby helping our principals to
                    increase their market share and also bring expert knowledge to
                    the local market.
                  </p>

                  <p>
                    DigiStano targeted customer segments vary from utilities such
                    as DEWA, SEWA, TRANSCO, AADC, ADDC, FEWA, to Oil and Gas
                    sector such as ADNOC group, NPCC, Primary and Secondary
                    equipment manufacturers such as SIEMENS, ABB, GE, Schneider
                    Electric, Ducab, Lucy Switchgear, Emirates Transformers, and
                    contractors such as Danway, EEE, and L&amp;T.
                  </p>
                </div>
              </div>
            </FadeUpSection>

            <FadeUpSection delay={220}>
              <div className="rounded-3xl border border-slate-200 bg-slate-950 p-8 text-white shadow-sm md:p-10">
                <div className="mb-6 flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-xl text-blue-400">
                    🛠️
                  </span>
                  <h3 className="text-2xl font-semibold">Our Capability</h3>
                </div>

                <div className="space-y-6 text-lg leading-8 text-slate-300">
                  <p>
                    Our experienced team based in Sharjah, Dubai and Abu Dhabi is
                    equipped with all required test equipment and tools to provide
                    local support on immediate basis.
                  </p>

                  <p>
                    We offer warranty support as part of after-sales services in
                    addition to basic and advanced training courses.
                  </p>

                  <p>
                    DigiStano is managed by a group of experts in the power
                    system field who already have an excellent network in the UAE
                    that will help in expanding the reach of our solutions.
                  </p>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm text-slate-400">Support Base</p>
                    <p className="mt-2 font-semibold text-white">
                      Sharjah, Dubai, Abu Dhabi
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm text-slate-400">Added Value</p>
                    <p className="mt-2 font-semibold text-white">
                      Local support, warranty, training
                    </p>
                  </div>
                </div>
              </div>
            </FadeUpSection>
          </div>
        </div>
      </section>

      {/* MISSION BLOCK */}
      <section className="py-10">
        <div className="mx-auto max-w-7xl px-6">
          <FadeUpSection>
            <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-indigo-50 via-slate-50 to-blue-50 px-8 py-16 shadow-sm md:px-16">
              <div className="absolute -left-10 top-0 h-40 w-40 rounded-full bg-blue-200/30 blur-3xl" />
              <div className="absolute -right-10 bottom-0 h-40 w-40 rounded-full bg-indigo-200/30 blur-3xl" />

              <div className="relative mx-auto max-w-4xl text-center">
                <div className="mb-6 text-5xl font-bold leading-none text-blue-600">
                  “
                </div>

                <p className="text-2xl font-light uppercase leading-relaxed tracking-wide text-slate-800 md:text-4xl md:leading-[1.5]">
                  Our mission at DigiStano is to empower progress, foster
                  enduring partnerships, and drive excellence in the electrical
                  power industry
                </p>

                <p className="mt-6 text-2xl font-bold uppercase tracking-wide text-slate-950 md:text-4xl">
                  Going beyond mere solutions provision.
                </p>
              </div>
            </div>
          </FadeUpSection>
        </div>
      </section>

      {/* VIDEO */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <FadeUpSection className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
              Company Video
            </p>

            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-5xl">
              A closer look at DigiStano
            </h2>

            <p className="text-lg leading-8 text-slate-600">
              An overview of our expertise, solutions, and commitment to
              excellence in the electrical power sector.
            </p>
          </FadeUpSection>

          <FadeUpSection delay={100}>
            <VideoShowcase />
          </FadeUpSection>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <FadeUpSection className="mb-16 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
              Our Values
            </p>

            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-5xl">
              Values we live by
            </h2>

            <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-600">
              The way we work is shaped by strong collaboration, accountability,
              and a continuous commitment to improvement.
            </p>
          </FadeUpSection>

          <div className="grid gap-8 lg:grid-cols-3">
            {values.map((value, index) => (
              <FadeUpSection key={value.number} delay={index * 120}>
                <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-xl font-bold text-white shadow-lg shadow-blue-600/20">
                    {value.number}
                  </div>

                  <h3 className="mb-4 text-2xl font-semibold text-slate-900">
                    {value.title}
                  </h3>

                  <p className="text-lg leading-8 text-slate-600">
                    {value.description}
                  </p>
                </div>
              </FadeUpSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-white py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />
        <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-100/50 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <FadeUpSection>
            <p className="mb-4 inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              Path To Success
            </p>

            <h2 className="mb-6 text-4xl font-bold leading-tight text-slate-900 md:text-6xl">
              Ready to reach new heights? <br />
              Let&apos;s get there, together.
            </h2>

            <p className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-slate-600">
              DigiStano is here to support you every step of the way with
              trusted technical expertise, strong partnerships, and high-value
              solutions.
            </p>

            <a
              href="/contact"
              className="inline-flex items-center rounded-2xl bg-blue-600 px-10 py-4 text-lg font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
            >
              Contact Us
            </a>
          </FadeUpSection>
        </div>
      </section>
    </main>
  );
}