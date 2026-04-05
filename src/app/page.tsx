"use client";

import { useEffect, useRef, useState } from "react";
import IsoSlider from "@/components/sections/IsoSlider";
import ClientsSlider from "@/components/sections/ClientsSlider";


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

export default function Home() {
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

  const solutions = [
    {
      title: "Transformer Testing Solutions",
      image: "/images/transformer-testing.jpg",
      href: "/products/transformers",
    },
    {
      title: "Switchgear Testing Solutions",
      image: "/images/switchgear-testing.jpg",
      href: "/products/switchgear",
    },
    {
      title: "Rotating Machines Testing Solutions",
      image: "/images/rotating-machines.jpg",
      href: "/products/rotating-machines",
    },
    {
      title: "Relays, Meters, Power Quality and Secondary Injection",
      image: "/images/relay-testing.jpg",
      href: "/products/relays",
    },
    {
      title: "MV and HV Cables Testing Solutions",
      image: "/images/cables-testing.jpg",
      href: "/products/hv-cables",
    },
    {
      title: "Instrument Transformers (CT/VT) Testing Solutions",
      image: "/images/ct-vt-testing.jpg",
      href: "/products/ct-vt-testing",
    },
  ];

  const locations = [
    {
      title: "Dubai, UAE",
      company: "DigiStano Electric",
      mapEmbed:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d17780.40516567187!2d55.39063!3d25.117876!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f65feed514db1%3A0xabb3ace642f1d5d0!2sDigiStano%20Electric!5e1!3m2!1sen!2sae!4v1774865428602!5m2!1sen!2sae",
      mapLink:
        "https://www.google.com/maps/place/DigiStano+Electric/@25.117876,55.39063,17z",
    },
    {
      title: "Abu Dhabi, UAE",
      company: "DigiStano Energy Trading & Services LLC",
      mapEmbed:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1145045.1435203312!2d54.533967!3d24.344265!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e4123dc89bfdb%3A0xeed0f5dc1c9699b3!2sDigiStano%20Energy%20Trading%20and%20Services%20LLC!5e1!3m2!1sen!2sae!4v1774865500699!5m2!1sen!2sae",
      mapLink:
        "https://www.google.com/maps/place/DigiStano+Energy+Trading+and+Services+LLC/",
    },
    {
      title: "Manama, Bahrain",
      company: "Digistano Services Co. W.L.L",
      mapEmbed:
        "https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d35232.81217750475!2d50.575738!3d26.222485!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDEzJzIxLjAiTiA1MMKwMzUnMDUuMyJF!5e1!3m2!1sen!2sae!4v1774865568773!5m2!1sen!2sae",
      mapLink:
        "https://www.google.com/maps/search/?api=1&query=26.222485,50.575738",
    },
    {
      title: "Al Khobar, KSA",
      company: "Digistano Contracting LLC",
      mapEmbed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4401.115145935907!2d50.16965367607958!3d26.301253986099084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49e9007f30e8ff%3A0xd29f559b713895e7!2sDigistano%20Contracting%20LLC!5e1!3m2!1sen!2sae!4v1774865639570!5m2!1sen!2sae",
      mapLink:
        "https://www.google.com/maps/place/Digistano+Contracting+LLC/",
    },
  ];

  return (
    <main>
      {/* HERO */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden text-white">
        <div className="absolute inset-0">
          <img
            src="/images/hero.jpg"
            alt="DigiStano hero"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <h2 className="mb-6 text-lg font-semibold uppercase tracking-[0.6em] text-blue-400 drop-shadow-md md:text-2xl lg:text-3xl">
            DIGISTANO
          </h2>

          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
            High-End Testing Equipment
          </h1>

          <p className="mx-auto mb-8 max-w-3xl text-base text-gray-300 md:text-xl">
            Cutting-edge technology for precise and reliable electrical testing
            solutions across power, commissioning, diagnostics, and field
            applications.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/products"
              className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
            >
              Explore Products
            </a>

            <a
              href="/contact"
              className="rounded-lg border border-white px-6 py-3 font-medium text-white transition hover:bg-white hover:text-black"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <FadeUpSection className="mb-14 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
              Our Services
            </p>

            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Comprehensive technical services for power and testing applications
            </h2>

            <p className="text-lg text-gray-600">
              DigiStano delivers specialized support across engineering, equipment
              rental, technical training, and repair & calibration services.
            </p>
          </FadeUpSection>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => (
              <FadeUpSection key={service.title} delay={index * 120}>
                <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl text-blue-600">
                    {service.icon}
                  </div>

                  <h3 className="mb-3 text-xl font-semibold text-gray-900">
                    {service.title}
                  </h3>

                  <p className="mb-5 leading-7 text-gray-600">
                    {service.description}
                  </p>

                  <a
                    href={service.href}
                    className="font-medium text-blue-600 hover:text-blue-700"
                  >
                    Learn more →
                  </a>
                </div>
              </FadeUpSection>
            ))}
          </div>
        </div>
      </section>

      {/* OUR SOLUTIONS */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <FadeUpSection className="mb-14">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
              Our Solutions
            </p>

            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Power System Testing Solutions
            </h2>

            <p className="max-w-3xl text-lg text-gray-600">
              Explore our solution areas designed to support testing, diagnostics,
              maintenance, and commissioning across electrical power systems.
            </p>
          </FadeUpSection>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {solutions.map((solution, index) => (
              <FadeUpSection key={solution.title} delay={index * 120}>
                <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="h-56 overflow-hidden">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="mb-4 text-xl font-semibold text-gray-900">
                      {solution.title}
                    </h3>

                    <a
                      href={solution.href}
                      className="font-medium text-blue-600 hover:text-blue-700"
                    >
                      View Products →
                    </a>
                  </div>
                </div>
              </FadeUpSection>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US / WHO WE ARE */}
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
          <FadeUpSection>
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
                Why Choose Us
              </p>

              <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
                Trusted technical partner across the GCC
              </h2>

              <p className="mb-5 text-lg leading-8 text-gray-600">
                DigiStano is a reliable, trustworthy, competent, and certified
                technical services provider serving the energy sector across the GCC
                region, with headquarters in Abu Dhabi, United Arab Emirates.
              </p>

              <p className="mb-5 text-lg leading-8 text-gray-600">
                We operate across the UAE, Bahrain, Saudi Arabia, and Oman,
                delivering strong regional expertise and a deep understanding of the
                energy industry’s operational and technical requirements.
              </p>

              <p className="mb-5 text-lg leading-8 text-gray-600">
                Our goal is to be the trusted partner of choice by providing
                reliable, sustainable, and high-value solutions across testing,
                commissioning, maintenance, and evolving technical applications.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                  <h3 className="mb-2 font-semibold text-gray-900">
                    Regional Coverage
                  </h3>
                  <p className="text-gray-600">
                    UAE, Bahrain, Saudi Arabia, and Qatar.
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                  <h3 className="mb-2 font-semibold text-gray-900">
                    Certified Quality
                  </h3>
                  <p className="text-gray-600">
                    Committed to internationally recognized standards.
                  </p>
                </div>
              </div>
            </div>
          </FadeUpSection>

          <FadeUpSection delay={150}>
            <IsoSlider />
          </FadeUpSection>
        </div>
      </section>

      <FadeUpSection>
        <ClientsSlider />
      </FadeUpSection>

      {/* HOME PAGE ONLY CTA */}
      <section className="border-b border-white/10 bg-[#17175a] text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center">
          <FadeUpSection>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
              Get In Touch
            </p>

            <h2 className="mb-4 text-3xl font-bold md:text-5xl">
              Let’s discuss your requirements
            </h2>

            <p className="mx-auto max-w-3xl text-base text-gray-200 md:text-lg">
              We welcome your inquiries, feedback, and project discussions. Our team
              will respond within our working hours.
            </p>
          </FadeUpSection>
        </div>
      </section>

      {/* HOME PAGE ONLY CONTACT CARDS */}
      <section className="bg-white text-gray-900">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-16 md:grid-cols-3">
          <FadeUpSection delay={0}>
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-2xl text-blue-600">
                📍
              </div>
              <h3 className="mb-4 text-2xl font-semibold">Office Address</h3>
              <p className="leading-8 text-gray-600">
                SIT Tower, 7th Floor, Dubai Silicon Oasis, Dubai, UAE
              </p>
            </div>
          </FadeUpSection>

          <FadeUpSection delay={120}>
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-50 text-2xl text-emerald-600">
                ☎️
              </div>
              <h3 className="mb-4 text-2xl font-semibold">Phone Number</h3>
              <p className="leading-8 text-gray-600">
                Dubai: 04-3373764
                <br />
                Abu Dhabi: 02-5513114
              </p>
            </div>
          </FadeUpSection>

          <FadeUpSection delay={240}>
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-violet-50 text-2xl text-violet-600">
                ✉️
              </div>
              <h3 className="mb-4 text-2xl font-semibold">Email Address</h3>
              <p className="leading-8 text-gray-600">
                sales@digistano.com
                <br />
                www.digistano.com
              </p>
            </div>
          </FadeUpSection>
        </div>
      </section>

      {/* HOME PAGE ONLY LOCATIONS */}
      <section className="bg-[#17175a] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <FadeUpSection className="mb-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
              Locations
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">
              Regional Presence Across GCC
            </h2>
          </FadeUpSection>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {locations.map((location, index) => (
              <FadeUpSection key={location.title} delay={index * 120}>
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                  <div className="h-56 overflow-hidden bg-white">
                    <iframe
                      src={location.mapEmbed}
                      className="h-full w-full border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                      title={location.title}
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="mb-2 text-xl font-semibold">{location.title}</h3>
                    <p className="mb-4 font-medium text-blue-200">{location.company}</p>

                    <a
                      href={location.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-lg border border-blue-300/30 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white hover:text-[#17175a]"
                    >
                      Open in Google Maps
                    </a>
                  </div>
                </div>
              </FadeUpSection>
            ))}
          </div>
        </div>
      </section>

      
    </main>
  );
}