import type { Metadata } from "next";

export const SITE = "https://www.digistano.com";
export const PD_PATH = "/services/engineering-services/partial-discharge-testing";
export const ENQUIRY_PATH = "/services/engineering-services#appointment";
export const countries = ["United Arab Emirates", "Saudi Arabia", "Oman", "Qatar", "Bahrain"];
export const areaServed = countries.map((name) => ({ "@type": "Country", name }));

export const serviceItems = [
  {
    title: "Partial Discharge Testing",
    menuTitle: "Partial Discharge Testing",
    description: "Online and offline PD assessment for GIS, switchgear, cables, transformers, motors and generators.",
    href: PD_PATH,
    image: "/images/field/pd-testing-service-v2.jpg",
  },
  {
    title: "Cable & VLF Testing",
    menuTitle: "Cable & VLF Testing",
    description: "MV cable withstand testing, VLF-PD diagnostics and Tan Delta assessment.",
    href: "/services/engineering-services/mv-cable-vlf-testing",
    image: "/images/field/cable-vlf-service-v4.webp",
  },
  {
    title: "Electrical Testing & Commissioning",
    menuTitle: "Electrical Testing & Commissioning",
    description: "Field engineering support across power-system testing and commissioning applications.",
    href: "/services/engineering-services",
    image: "/images/field/commissioning-service-v3.webp",
  },
  {
    title: "Technical Training",
    menuTitle: "Technical Training",
    description: "Practical learning for electrical testing and diagnostic applications.",
    href: "/services/training",
    image: "/images/training.jpg",
  },
  {
    title: "Repair & Calibration",
    menuTitle: "Repair & Calibration",
    description: "Support to maintain the performance and confidence of your test equipment.",
    href: "/services/repair-calibration",
    image: "/images/field/repair-calibration-service-v2.webp",
  },
] as const;

export function pageMetadata(title: string, description: string, path: string, image = "/images/EngineeringServices.jpg"): Metadata {
  const fullTitle = title.includes("DigiStano") ? title : `${title} | DigiStano`;
  return {
    title: fullTitle, description, alternates: { canonical: `${SITE}${path}` },
    openGraph: { title: fullTitle, description, url: `${SITE}${path}`, siteName: "DigiStano", type: "website", locale: "en_GB", images: [{ url: `${SITE}${image}`, alt: title }] },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [`${SITE}${image}`] },
  };
}

export const pdApplications = [
  { slug: "gis-switchgear", title: "GIS & switchgear", service: "GIS & Switchgear Partial Discharge Testing", image: "/images/field/gis-switchgear-v2.webp", focus: "Compartments, connections & insulation", summary: "Assess insulation activity in gas-insulated and medium-voltage switchgear, with a scope built around your installation.", intro: "DigiStano provides partial discharge testing and diagnostic support for GIS and MV/HV switchgear. The assessment is planned around the switchgear design, available measurement points and whether the equipment can be taken out of service.", inputs: ["Switchgear manufacturer, model and rated voltage", "Number of bays, panels or compartments", "Available sensor ports and previous survey results", "Site access and permitted outage windows"], question: "Can GIS and switchgear be assessed while energised?", answer: "Online assessment may be possible where the installation provides suitable measurement access and the site permits the work. Sensor installation or additional testing can still require an outage. The engineering team confirms this during scope review." },
  { slug: "cables", title: "MV & HV cables", service: "Cable Partial Discharge Testing", image: "/images/field/cables-asset-v3.webp", focus: "Cables, joints & terminations", summary: "PD diagnostics for cable systems, joints and terminations, supporting commissioning and condition assessment.", intro: "DigiStano supports onsite partial discharge assessment of MV and HV cable systems and their accessories. Cable information, the testing objective and the available test supply determine the practical measurement scope.", inputs: ["Cable type, rated voltage and circuit length", "Joint and termination details", "Commissioning or in-service assessment objective", "Access at cable ends and outage availability"], question: "Is a VLF withstand test the same as a PD test?", answer: "No. A withstand test and a PD measurement answer different questions. The test plan should state whether it requires withstand testing, PD measurement, Tan Delta assessment or a combination." },
  { slug: "transformers", title: "Power transformers", service: "Transformer Partial Discharge Testing", image: "/images/field/transformer-asset-v2.webp", focus: "Power & distribution transformers", summary: "Insulation diagnostics for power and distribution transformers, informed by operating conditions and asset history.", intro: "DigiStano provides partial discharge diagnostic support for power and distribution transformers. The scope considers transformer construction, available connections, site interference and the reason for the investigation.", inputs: ["Transformer type, rated voltage and power rating", "Reason for the investigation and operating history", "Existing diagnostic reports and relevant alarms", "Available measurement connections and outage constraints"], question: "Does a PD measurement give the complete condition of a transformer?", answer: "PD testing addresses one aspect of insulation behaviour. It should be considered alongside operating history, other diagnostic results and the assessment objective." },
  { slug: "motors-generators", title: "Motors & generators", service: "Motor & Generator Partial Discharge Testing", image: "/images/field/motor-asset-v2.webp", focus: "Stator insulation & condition trends", summary: "Online and offline PD assessment for rotating-machine insulation and condition monitoring programmes.", intro: "DigiStano supports online and offline partial discharge measurement for motors and generators. The assessment is shaped by the machine design, installed measurement couplers, loading conditions and maintenance programme.", inputs: ["Machine type, rated voltage and power rating", "Available couplers or measurement connections", "Operating load, relevant temperatures and past measurements", "Maintenance schedule and outage availability"], question: "Why record operating conditions with online PD measurements?", answer: "Operating conditions provide context for interpretation and comparisons over time. Record relevant load and temperature information with the measurements." },
];

export const pdFaqs = [
  { q: "Where does DigiStano provide PD testing?", a: "DigiStano provides partial discharge testing in the UAE, Saudi Arabia, Oman, Qatar and Bahrain. Our headquarters are in Abu Dhabi, with offices in the UAE, Saudi Arabia and Bahrain." },
  { q: "Which assets can you assess?", a: "Our PD service covers GIS and switchgear, MV/HV cables, power and distribution transformers, motors and generators. The measurement arrangement is selected for the asset and project objective." },
  { q: "Will the equipment need to be shut down?", a: "Offline testing requires an outage. Online measurements may be possible where suitable access and site arrangements permit. Installing sensors or making connections can still require an outage." },
  { q: "How much does partial discharge testing cost?", a: "Pricing depends on asset type and quantity, rated voltage, scope, site location, access, outage arrangements and reporting needs. Share your asset list and preferred dates for a project-specific proposal." },
  { q: "How long does a PD survey take?", a: "Duration depends on the number of assets, measurement access, interference, operating conditions and analysis scope. Survey duration and report timing are agreed in the proposal." },
  { q: "Can I rent the test equipment instead?", a: "Equipment rental is a separate supporting service. If you need measurements and interpretation performed for you, request an engineering assessment." },
];
