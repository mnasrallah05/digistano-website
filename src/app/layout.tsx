import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.digistano.com"),

  title: {
    default: "DigiStano | Electrical Testing & Engineering Solutions",
    template: "%s",
  },

  description:
    "DigiStano Energy L.L.C provides electrical testing, engineering services, and equipment rental solutions across key GCC markets.",

  keywords: [
    "DigiStano",
    "Electrical Testing",
    "Engineering Services",
    "Equipment Rental",
    "Power System Testing",
    "High Voltage Testing",
    "GCC",
    "UAE",
    "Saudi Arabia",
    "Bahrain",
  ],

  authors: [{ name: "DigiStano Energy L.L.C" }],

  openGraph: {
    title: "DigiStano | Electrical Testing & Engineering Solutions",
    description:
      "Professional electrical testing, engineering services, and equipment rental solutions across key GCC markets.",
    url: "https://www.digistano.com",
    siteName: "DigiStano",
    locale: "en_US",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/icon8.png", // change if you have custom logo
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.digistano.com/#organization",
        name: "DigiStano Energy L.L.C",
        alternateName: "DigiStano",
        url: "https://www.digistano.com",
        logo: "https://www.digistano.com/images/digistano-logo.png",
        description:
          "DigiStano is headquartered in Abu Dhabi, with offices in the UAE, Saudi Arabia, and Bahrain, serving key GCC markets.",
        email: "sales@digistano.com",
        telephone: "+97125513114",
        address: {
          "@type": "PostalAddress",
          streetAddress: "SIT Tower, 7th Floor, Dubai Silicon Oasis",
          addressLocality: "Dubai",
          addressCountry: "AE",
        },
        areaServed: [
          { "@type": "Country", name: "United Arab Emirates" },
          { "@type": "Country", name: "Saudi Arabia" },
          { "@type": "Country", name: "Bahrain" },
          { "@type": "Country", name: "Oman" },
          { "@type": "Country", name: "Qatar" },
        ],
        location: [
          {
            "@type": "Place",
            name: "DigiStano Headquarters",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Abu Dhabi",
              addressCountry: "AE",
            },
          },
          {
            "@type": "Place",
            name: "DigiStano Dubai Office",
            address: {
              "@type": "PostalAddress",
              streetAddress: "SIT Tower, 7th Floor, Dubai Silicon Oasis",
              addressLocality: "Dubai",
              addressCountry: "AE",
            },
          },
          {
            "@type": "Place",
            name: "DigiStano Saudi Arabia Office",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Al Khobar",
              addressCountry: "SA",
            },
          },
          {
            "@type": "Place",
            name: "DigiStano Bahrain Office",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Manama",
              addressCountry: "BH",
            },
          },
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "headquarters",
            telephone: "+97125513114",
            email: "sales@digistano.com",
          },
          {
            "@type": "ContactPoint",
            contactType: "Dubai office",
            telephone: "+97143373764",
            email: "sales@digistano.com",
          },
        ],
        sameAs: ["https://www.linkedin.com/company/digistano/"],
      },
      {
        "@type": "WebSite",
        "@id": "https://www.digistano.com/#website",
        url: "https://www.digistano.com",
        name: "DigiStano",
        publisher: { "@id": "https://www.digistano.com/#organization" },
        inLanguage: "en",
      },
    ],
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
          }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
