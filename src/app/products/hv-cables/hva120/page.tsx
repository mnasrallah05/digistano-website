"use client";

export default function HVA120Page() {
  const highlights = [
    "Compact and portable VLF test system",
    "High voltage output power-to-weight ratio",
    "VLF and DC testing capabilities",
    "Sheath testing with fault location mode",
    "Continuous operation (no thermal limitation)",
    "Integrated safety and protection system",
  ];

  const features = [
    {
      title: "Performance",
      text: "Outstanding features considering size and weight versus output load.",
    },
    {
      title: "Duty cycle",
      text: "Operating time is not thermally limited; the system may operate continuously.",
    },
    {
      title: "Safety first",
      text: "Includes two independent earthing devices (electronic and mechanical) and an integrated 12 kV transient protection system to protect both operator and device.",
    },
    {
      title: "Connectivity",
      text: "On-site operation without external PC. Results can be downloaded via USB for reporting and analysis.",
    },
    {
      title: "Solid HV connectors",
      text: "Robust connectors allow flexible cable use, easy replacement, and upgrade paths.",
    },
    {
      title: "Service & maintenance",
      text: "Dry-type transformer with no oil or arcing contacts ensures minimal maintenance.",
    },
  ];

  const specs = [
    { label: "Output voltage", value: "max. 120 kVpeak, 85 kVrms" },
    { label: "Output load", value: "0.5 μF @ 0.1 Hz @ 85 kVrms" },
    { label: "Output load", value: "5.0 μF @ 0.01 Hz @ 85 kVrms" },
    { label: "Weight", value: "198 kg / 436.5 lbs" },
  ];

  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/70" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
                MV & HV Cables Testing Solutions
              </p>

              <h1 className="mb-5 text-4xl font-bold md:text-6xl">
                HVA120
              </h1>

              <p className="mb-6 text-xl text-slate-300">
                Compact VLF high-voltage cable test system
              </p>

              <p className="text-lg leading-8 text-slate-400">
                The HVA120 is a compact and portable VLF test set designed for
                medium voltage cable testing. It performs VLF and DC testing,
                including sheath testing with fault location capabilities.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#product-details"
                  className="rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white hover:bg-blue-700"
                >
                  View Details
                </a>

                <a
                  href="/brochures/DHV1447_HVA120_datasheet_EN_Rev01.pdf"
                  target="_blank"
                  className="rounded-xl border border-white/30 px-6 py-4 font-semibold text-white hover:bg-white/10"
                >
                  Download Brochure
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative group">
                <div className="absolute -inset-4 rounded-3xl bg-blue-500/20 blur-2xl" />

                <div className="relative rounded-3xl bg-white/5 p-6">
                  <img
                    src="/images/products/hva120.png"
                    alt="HVA120"
                    className="w-full transition duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-3xl font-bold text-slate-900">
            Key Highlights
          </h2>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item}
                className="rounded-xl border bg-white p-6 shadow-sm hover:shadow-lg transition"
              >
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILS */}
      <section id="product-details" className="py-20">
        <div className="mx-auto max-w-7xl px-6 grid gap-10 lg:grid-cols-12">
          {/* LEFT */}
          <div className="lg:col-span-8">
            <h2 className="text-3xl font-bold mb-6">
              Description
            </h2>

            <div className="space-y-6 text-lg text-slate-700 leading-8">
              <p>
                The compact design and unmatched high voltage output power to
                weight ratio of the HVA test sets make them highly desirable
                across all voltage levels.
              </p>

              <p>
                The HVA120 determines the condition of medium voltage cables
                and performs VLF and DC testing, including sheath testing with
                fault location mode.
              </p>
            </div>

            {/* FEATURES */}
            <div className="mt-10 grid md:grid-cols-2 gap-6">
              {features.map((f) => (
                <div key={f.title} className="border rounded-xl p-6 bg-white">
                  <h3 className="font-bold text-xl mb-2">{f.title}</h3>
                  <p className="text-slate-600">{f.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-4">
            <div className="border rounded-2xl p-6 bg-slate-50">
              <h3 className="font-bold text-xl mb-4">Technical Specifications</h3>

              <div className="space-y-4">
                {specs.map((s, i) => (
                  <div key={i}>
                    <p className="text-sm text-slate-500">{s.label}</p>
                    <p className="font-semibold">{s.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="/products/hv-cables"
              className="block mt-6 text-center bg-blue-600 text-white py-3 rounded-xl"
            >
              Back to Category
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}