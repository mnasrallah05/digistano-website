import type { MetadataRoute } from "next";
import { canonicalProductRoutes } from "./products/_seo";

const baseUrl = "https://www.digistano.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const coreRoutes = [
    "",
    "/about",
    "/contact",
    "/services",
    "/services/engineering-services",
    "/services/engineering-services/partial-discharge-testing",
    "/services/engineering-services/mv-cable-vlf-testing",
    "/services/rental",
    "/services/rental/cmc-500",
    "/services/rental/cp-cb2",
    "/services/rental/megger",
    "/services/rental/b2-electronics",
    "/services/training",
    "/services/repair-calibration",
    "/products",
    "/products/hv-cables",
    "/products/iec-testing",
    "/products/relays",
    "/products/rotating-machines",
    "/products/switchgear",
    "/products/transformers",
    "/products/ct-vt",
  ];

  const corePages: MetadataRoute.Sitemap = coreRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/services/rental" ? 0.9 : 0.8,
  }));

  const productPages: MetadataRoute.Sitemap = canonicalProductRoutes.map(
    (route) => ({
      url: `${baseUrl}/products/${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    })
  );

  return [...corePages, ...productPages];
}
