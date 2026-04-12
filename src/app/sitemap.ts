import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.digistano.com";

  return [
    // Core
    { url: `${baseUrl}`, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },

    // Services
    { url: `${baseUrl}/services`, lastModified: new Date() },
    { url: `${baseUrl}/services/engineering-services`, lastModified: new Date() },
    { url: `${baseUrl}/services/rental`, lastModified: new Date() },
    { url: `${baseUrl}/services/training`, lastModified: new Date() },
    { url: `${baseUrl}/services/repair-calibration`, lastModified: new Date() },

    // Products
    { url: `${baseUrl}/products`, lastModified: new Date() },
    { url: `${baseUrl}/products/hv-cables`, lastModified: new Date() },
    { url: `${baseUrl}/products/iec-testing`, lastModified: new Date() },
    { url: `${baseUrl}/products/relays`, lastModified: new Date() },
    { url: `${baseUrl}/products/rotating-machines`, lastModified: new Date() },
    { url: `${baseUrl}/products/switchgear`, lastModified: new Date() },
    { url: `${baseUrl}/products/transformers`, lastModified: new Date() },
    { url: `${baseUrl}/products/ct-vt`, lastModified: new Date() },
  ];
}