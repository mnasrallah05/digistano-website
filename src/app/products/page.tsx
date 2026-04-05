export default function ProductsLandingPage() {
  const products = [
  {
    title: "MV & HV Cables Testing",
    image: "/images/cables-testing.jpg",
    href: "/products/hv-cables",
  },
  {
    title: "Relays & Meters Testing",
    image: "/images/relay-testing.jpg",
    href: "/products/relays",
  },
  {
    title: "Rotating Machines Testing",
    image: "/images/rotating-machines.jpg",
    href: "/products/rotating-machines",
  },
  {
    title: "Switchgear Testing",
    image: "/images/switchgear-testing.jpg",
    href: "/products/switchgear",
  },
  {
    title: "Transformer Testing",
    image: "/images/transformer-testing.jpg",
    href: "/products/transformers",
  },
  {
    title: "Instrument Transformers (CT/VT) Testing",
    image: "/images/ct-vt-testing.jpg",
    href: "/products/ct-vt-testing",
  },
];

  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0">
          <img
            src="/images/hero.jpg"
            alt="Products"
            className="h-full w-full object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/75" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
              Our Products
            </p>

            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
              High-end testing solutions for electrical power systems
            </h1>

            <p className="max-w-3xl text-lg leading-8 text-slate-300">
              Explore DigiStano&apos;s product categories designed to support
              testing, commissioning, diagnostics, maintenance, and technical
              operations across the power sector.
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
              Product Categories
            </p>

            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
              Explore our key solution areas
            </h2>

            <p className="text-lg text-slate-600">
              Select a category below to browse the relevant DigiStano product
              range and application areas.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.title}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <h3 className="mb-4 text-xl font-semibold text-slate-900">
                    {product.title}
                  </h3>

                  <a
                    href={product.href}
                    className="font-medium text-blue-600 hover:text-blue-700"
                  >
                    View Products →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            Need Guidance
          </p>

          <h2 className="mb-6 text-3xl font-bold text-slate-900 md:text-5xl">
            Let us help you choose the right testing solution
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-slate-600">
            Speak with DigiStano for support in selecting products based on your
            technical requirements, applications, and project scope.
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