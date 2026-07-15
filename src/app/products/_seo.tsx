import type { Metadata } from "next";
import type { ReactNode } from "react";

const BASE_URL = "https://www.digistano.com";

type ProductInfo = {
  name: string;
  brand?: string;
  rental?: boolean;
  canonical: string;
};

const products: Record<string, ProductInfo> = {
  "ba100": { name: "BA100", brand: "b2 electronics", canonical: "transformers/ba100" },
  "ba80": { name: "BA80", brand: "b2 electronics", canonical: "transformers/ba80" },
  "cibano-500": { name: "CIBANO 500", brand: "OMICRON", rental: true, canonical: "switchgear/cibano-500" },
  "cmc-256-plus": { name: "CMC 256plus", brand: "OMICRON", canonical: "relays/cmc-256-plus" },
  "cmc-353": { name: "CMC 353", brand: "OMICRON", canonical: "relays/cmc-353" },
  "cmc-356": { name: "CMC 356", brand: "OMICRON", rental: true, canonical: "relays/cmc-356" },
  "compano-100": { name: "COMPANO 100", brand: "OMICRON", rental: true, canonical: "ct-vt/compano-100" },
  "cp-cr600": { name: "CP CR600", brand: "OMICRON", rental: true, canonical: "rotating-machines/cp-cr600" },
  "cp-td12-15": { name: "CP TD12 / CP TD15", brand: "OMICRON", rental: true, canonical: "transformers/cp-td12-15" },
  "cpc-100": { name: "CPC 100", brand: "OMICRON", rental: true, canonical: "ct-vt/cpc-100" },
  "ct-analyzer": { name: "CT Analyzer", brand: "OMICRON", rental: true, canonical: "ct-vt/ct-analyzer" },
  "dirana": { name: "DIRANA", brand: "OMICRON", rental: true, canonical: "transformers/dirana" },
  "franeo-800": { name: "FRANEO 800", brand: "OMICRON", rental: true, canonical: "transformers/franeo-800" },
  "hva120": { name: "HVA120", brand: "b2 electronics", canonical: "hv-cables/hva120" },
  "hva28-hva28td": { name: "HVA28 / HVA28TD", brand: "b2 electronics", canonical: "hv-cables/hva28-hva28td" },
  "hva34-1-hva34td-1": { name: "HVA34-1 / HVA34TD-1", brand: "b2 electronics", canonical: "hv-cables/hva34-1-hva34td-1" },
  "hva45-hva45td": { name: "HVA45 / HVA45TD", brand: "b2 electronics", rental: true, canonical: "hv-cables/hva45-hva45td" },
  "hva60": { name: "HVA60", brand: "b2 electronics", rental: true, canonical: "hv-cables/hva60" },
  "hva90": { name: "HVA90", brand: "b2 electronics", canonical: "hv-cables/hva90" },
  "iedscout": { name: "IEDScout", brand: "OMICRON", canonical: "iec-testing/iedscout" },
  "isio-200": { name: "ISIO 200", brand: "OMICRON", canonical: "iec-testing/isio-200" },
  "moncablo": { name: "MONCABLO", brand: "OMICRON", canonical: "hv-cables/moncablo" },
  "mongemo": { name: "MONGEMO", brand: "OMICRON", canonical: "rotating-machines/mongemo" },
  "montesto-200": { name: "MONTESTO 200", brand: "OMICRON", rental: true, canonical: "switchgear/montesto-200" },
  "mpd-800": { name: "MPD 800", brand: "OMICRON", rental: true, canonical: "switchgear/mpd-800" },
  "pd120-2-pdtd120-2": { name: "PD120-2 / PDTD120-2", brand: "b2 electronics", canonical: "hv-cables/pd120-2-pdtd120-2" },
  "pd60-2-pdtd60-2": { name: "PD60-2 / PDTD60-2", brand: "b2 electronics", canonical: "hv-cables/pd60-2-pdtd60-2" },
  "pd90-2-pdtd90-2": { name: "PD90-2 / PDTD90-2", brand: "b2 electronics", canonical: "hv-cables/pd90-2-pdtd90-2" },
  "primary-test-manager-ptm": { name: "Primary Test Manager (PTM)", brand: "OMICRON", canonical: "ct-vt/primary-test-manager-ptm" },
  "stationscout": { name: "StationScout", brand: "OMICRON", canonical: "iec-testing/stationscout" },
  "testrano-600": { name: "TESTRANO 600", brand: "OMICRON", rental: true, canonical: "transformers/testrano-600" },
  "votano-100": { name: "VOTANO 100", brand: "OMICRON", canonical: "ct-vt/votano-100" },
};

const categoryNames: Record<string, string> = {
  "ct-vt": "CT and VT Testing",
  "hv-cables": "MV and HV Cable Testing",
  "iec-testing": "IEC 61850 and SCADA Testing",
  "relays": "Protection Relay Testing",
  "rotating-machines": "Rotating Machine Testing",
  "switchgear": "Switchgear Testing",
  "transformers": "Transformer Testing",
};

function getProduct(route: string) {
  const [category, slug] = route.split("/");
  const product = products[slug];

  if (!product) {
    throw new Error(`Missing SEO configuration for product route: ${route}`);
  }

  return { category, slug, product };
}

export const canonicalProductRoutes = Array.from(
  new Set(Object.values(products).map((product) => product.canonical))
).sort();

export function createProductMetadata(route: string): Metadata {
  const { category, slug, product } = getProduct(route);
  const categoryName = categoryNames[category] ?? "Electrical Testing";
  const canonicalUrl = `${BASE_URL}/products/${product.canonical}`;
  const brandAndName = product.brand
    ? `${product.brand} ${product.name}`
    : product.name;
  const title = product.rental
    ? `${brandAndName} Rental UAE & KSA | DigiStano`
    : `${brandAndName} Testing Solution UAE | DigiStano`;
  const description = product.rental
    ? `Rent ${brandAndName} from DigiStano for ${categoryName.toLowerCase()} projects in the UAE and Saudi Arabia. Request availability, flexible rental terms, calibration support, and technical assistance.`
    : `Explore ${brandAndName} for ${categoryName.toLowerCase()} applications. DigiStano provides equipment solutions, engineering expertise, and technical support across the UAE and GCC.`;
  const image = `${BASE_URL}/images/products/${slug}.png`;

  return {
    title: { absolute: title },
    description,
    keywords: [
      `${brandAndName} ${product.rental ? "rental" : "testing"}`,
      `${product.name} UAE`,
      `${product.name} Saudi Arabia`,
      `${categoryName} equipment`,
      "electrical test equipment UAE",
      "DigiStano",
    ],
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "DigiStano",
      type: "website",
      locale: "en_US",
      images: [{ url: image, alt: `${brandAndName} from DigiStano` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: { index: true, follow: true },
  };
}

export function ProductSeoLayout({
  route,
  children,
}: {
  route: string;
  children: ReactNode;
}) {
  const { category, slug, product } = getProduct(route);
  const categoryName = categoryNames[category] ?? "Electrical Testing";
  const currentUrl = `${BASE_URL}/products/${route}`;
  const canonicalUrl = `${BASE_URL}/products/${product.canonical}`;
  const image = `${BASE_URL}/images/products/${slug}.png`;
  const brandAndName = product.brand
    ? `${product.brand} ${product.name}`
    : product.name;
  const description = product.rental
    ? `${brandAndName} equipment rental for ${categoryName.toLowerCase()} projects in the UAE and Saudi Arabia.`
    : `${brandAndName} equipment solution for ${categoryName.toLowerCase()} applications across the UAE and GCC.`;

  const graph: Record<string, unknown>[] = [
    {
      "@type": "Service",
      "@id": `${canonicalUrl}#service`,
      name: product.rental
        ? `${brandAndName} Rental`
        : `${brandAndName} Equipment Solution`,
      description,
      image,
      url: canonicalUrl,
      category: categoryName,
      serviceType: product.rental
        ? "Electrical testing equipment rental"
        : `${categoryName} equipment solution`,
      provider: { "@id": `${BASE_URL}/#organization` },
      areaServed: [
        { "@type": "Country", name: "Saudi Arabia" },
        { "@type": "Country", name: "United Arab Emirates" },
        { "@type": "Country", name: "Qatar" },
        { "@type": "Country", name: "Oman" },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${currentUrl}#breadcrumbs`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Products", item: `${BASE_URL}/products` },
        { "@type": "ListItem", position: 3, name: categoryName, item: `${BASE_URL}/products/${category}` },
        { "@type": "ListItem", position: 4, name: product.name, item: currentUrl },
      ],
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": graph,
  };
  const whatsappText = encodeURIComponent(
    `Hello DigiStano, I would like to check rental availability for ${product.name}.`
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      {children}
      {product.rental ? (
        <section className="border-t border-slate-200 bg-slate-950 py-16 text-white">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 lg:flex-row lg:items-center">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
                Equipment Rental UAE & KSA
              </p>
              <h2 className="text-3xl font-bold md:text-4xl">
                Need to rent {product.name}?
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-300">
                Ask DigiStano about availability, rental duration, calibration
                documentation, delivery, and technical support for your project.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a
                href="/services/rental#rental-form"
                className="rounded-xl bg-blue-600 px-6 py-4 text-center font-semibold text-white transition hover:bg-blue-700"
              >
                Request Rental Quote
              </a>
              <a
                href={`https://wa.me/971509020692?text=${whatsappText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/20 px-6 py-4 text-center font-semibold text-white transition hover:bg-white hover:text-slate-950"
              >
                Ask on WhatsApp
              </a>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
