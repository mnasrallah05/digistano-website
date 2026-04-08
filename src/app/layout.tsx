import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.digistano.com"),

  title: {
    default: "DigiStano | Electrical Testing & Engineering Solutions",
    template: "%s | DigiStano",
  },

  description:
    "DigiStano Energy L.L.C provides electrical testing, engineering services, and equipment rental solutions across the GCC region.",

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
      "Professional electrical testing, engineering services, and equipment rental solutions across the GCC.",
    url: "https://www.digistano.com",
    siteName: "DigiStano",
    locale: "en_US",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico", // change if you have custom logo
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}