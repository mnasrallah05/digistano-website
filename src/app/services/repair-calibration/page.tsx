export default function RepairAndCalibrationPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0">
          <img
            src="/images/repair-calibration.jpg"
            alt="Repair and Calibration Services"
            className="h-full w-full object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/75" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
              Repair & Calibration
            </p>

            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
              Reliable repair and calibration services for your equipment
            </h1>

            <p className="max-w-3xl text-lg leading-8 text-slate-300">
              Maximize efficiency and performance with DigiStano&apos;s reliable
              repair and calibration services for your equipment.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20">
        <div className="mx-auto max-w-[1600px] px-6">
          <div className="grid items-center gap-12 xl:gap-16 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="relative group w-full">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-blue-600/20 to-indigo-600/20 blur-2xl transition duration-500 group-hover:from-blue-600/30 group-hover:to-indigo-600/30" />

                <div className="relative w-full overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src="/images/repair-calibration.jpg"
                    alt="Repair and calibration work"
                    className="block h-[520px] w-full object-cover object-center transition duration-700 group-hover:scale-105 xl:h-[580px]"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
                Precision Support
              </p>

              <h2 className="mb-6 text-4xl font-bold leading-tight text-slate-900 xl:text-5xl">
                Keep your equipment accurate, efficient, and dependable
              </h2>

              <p className="mb-6 text-lg leading-9 text-slate-600">
                DigiStano&apos;s repair and calibration services are designed to
                meet the needs of a range of industries, including manufacturing,
                construction, healthcare, and more.
              </p>

              <p className="text-lg leading-9 text-slate-600">
                We help clients reduce downtime, improve measurement accuracy,
                and maintain equipment performance through reliable service and
                technical support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE HIGHLIGHTS */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
              Service Highlights
            </p>
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
              End-to-end repair and calibration capabilities
            </h2>
            <p className="text-lg text-slate-600">
              Our services are structured to restore performance, ensure
              consistency, and minimize disruption to your operations.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-600">
                🔧
              </div>
              <h3 className="mb-3 text-xl font-semibold text-slate-900">
                Repair Services
              </h3>
              <p className="leading-7 text-slate-700">
                Our technicians are trained to diagnose and fix a wide range of
                issues, including mechanical failures, electrical problems, and
                software issues.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-600">
                📏
              </div>
              <h3 className="mb-3 text-xl font-semibold text-slate-900">
                Calibration Accuracy
              </h3>
              <p className="leading-7 text-slate-700">
                We use industry-standard calibration equipment to ensure that
                equipment is functioning accurately and consistently across your
                applications.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-600">
                🚚
              </div>
              <h3 className="mb-3 text-xl font-semibold text-slate-900">
                On-Site Support
              </h3>
              <p className="leading-7 text-slate-700">
                We also offer on-site repair services for larger equipment,
                minimizing downtime and reducing the need for equipment
                transportation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILS */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-slate-900">
                  What We Cover
                </h2>
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50 text-lg text-blue-600">
                  ⚙
                </span>
              </div>
              <div className="mb-6 h-1 w-14 rounded bg-blue-600" />

              <ul className="space-y-4">
                {[
                  "Mechanical failures",
                  "Electrical problems",
                  "Software issues",
                  "Performance consistency checks",
                  "Measurement accuracy verification",
                  "Preventive servicing support",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-blue-600" />
                    <span className="text-base leading-7 text-slate-700">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-slate-900">
                  Why It Matters
                </h2>
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50 text-lg text-blue-600">
                  ✓
                </span>
              </div>
              <div className="mb-6 h-1 w-14 rounded bg-blue-600" />

              <p className="mb-6 text-base leading-8 text-slate-600">
                Proper repair and calibration reduce downtime, extend equipment
                life, and improve operational confidence in demanding
                environments.
              </p>

              <p className="text-base leading-8 text-slate-600">
                At DigiStano, we are committed to providing clients with
                reliable, efficient, and technically sound support to keep
                equipment operating at the required standard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">
            Need Support
          </p>

          <h2 className="mb-6 text-3xl font-bold text-slate-900 md:text-4xl">
            Contact us to learn more about our repair and calibration offerings
          </h2>

          <p className="mx-auto mb-8 max-w-3xl text-lg leading-8 text-slate-600">
            We can help you restore performance, improve reliability, and ensure
            your equipment remains accurate and ready for operation.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center rounded-xl bg-emerald-500 px-8 py-4 font-semibold text-white transition hover:bg-emerald-600"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}