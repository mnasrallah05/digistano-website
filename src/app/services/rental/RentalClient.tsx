"use client";

import { useEffect, useState } from "react";
import { IconGrid, PageHero, SectionHead } from "@/components/site/Elements";

declare global {
  interface Window {
    grecaptcha?: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

type RentalFormState = {
  full_name: string;
  email: string;
  phone: string;
  company: string;
  rental_start_date: string;
  rental_end_date: string;
  purpose: string;
  selected_equipment: string[];
  website: string;
  formStartedAt: string;
};

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";

const initialForm: RentalFormState = {
  full_name: "",
  email: "",
  phone: "",
  company: "",
  rental_start_date: "",
  rental_end_date: "",
  purpose: "",
  selected_equipment: [],
  website: "",
  formStartedAt: "",
};

const rentalEquipmentPages = [
  { name: "CMC 356", href: "/products/relays/cmc-356", use: "Protection relay testing" },
  { name: "CMC 500", href: "/services/rental/cmc-500", use: "Protection relay and IEC 61850 testing" },
  { name: "CMGPS 588", use: "Time synchronization for protection testing" },
  { name: "ARC256", use: "Arc-flash and protection testing support" },
  { name: "CPC 100", href: "/products/ct-vt/cpc-100", use: "Primary injection and substation testing" },
  { name: "CP TD12", href: "/products/transformers/cp-td12-15", use: "Capacitance and dissipation-factor testing" },
  { name: "CP TD15", href: "/products/transformers/cp-td12-15", use: "15 kV capacitance and dissipation-factor testing" },
  { name: "CP CR600", href: "/products/rotating-machines/cp-cr600", use: "Rotating-machine insulation testing" },
  { name: "CP CB2", href: "/services/rental/cp-cb2", use: "High-current amplification for CPC 100" },
  { name: "COMPANO 100", href: "/products/ct-vt/compano-100", use: "Portable electrical testing" },
  { name: "CT Analyzer", href: "/products/ct-vt/ct-analyzer", use: "Current-transformer testing" },
  { name: "TESTRANO 600", href: "/products/transformers/testrano-600", use: "Three-phase transformer testing" },
  { name: "CIBANO 500", href: "/products/switchgear/cibano-500", use: "Circuit-breaker testing" },
  { name: "CB TN3", use: "Specialized electrical testing applications" },
  { name: "MPD 600", use: "Partial-discharge measurement" },
  { name: "MPD 800", href: "/products/switchgear/mpd-800", use: "Partial-discharge measurement and analysis" },
  { name: "CAL 542", use: "Partial-discharge calibration" },
  { name: "MCC210L", use: "Specialized electrical testing applications" },
  { name: "HFCT", use: "High-frequency partial-discharge measurement" },
  { name: "UVS610", use: "Specialized electrical testing applications" },
  { name: "MONTESTO 200", href: "/products/switchgear/montesto-200", use: "Temporary online partial-discharge monitoring" },
  { name: "FRANEO 800", href: "/products/transformers/franeo-800", use: "SFRA transformer diagnostics" },
  { name: "DIRANA", href: "/products/transformers/dirana", use: "Dielectric-response and insulation diagnostics" },
  { name: "HVA45TD", href: "/products/hv-cables/hva45-hva45td", use: "VLF and Tan Delta cable testing" },
  { name: "HVA60", href: "/products/hv-cables/hva60", use: "VLF cable testing" },
  { name: "HVA68-2", use: "Extra-power VLF cable testing" },
  { name: "ILG G2Pro", use: "Specialized cable testing applications" },
  { name: "Ariadna CI", use: "Cable identification" },
  { name: "MRT700", use: "Specialized electrical testing applications" },
  { name: "Megger test equipment", href: "/services/rental/megger", use: "Megger equipment rental enquiries" },
  { name: "b2 electronics equipment", href: "/services/rental/b2-electronics", use: "VLF and cable-diagnostic equipment" },
];

export default function RentalClient() {
  const [form, setForm] = useState<RentalFormState>(initialForm);

  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error" | "";
    text: string;
  }>({
    type: "",
    text: "",
  });

  const allEquipment = [
    "CMC 356", "CMC 500", "CMGPS 588", "ARC256", "CPC 100", "CPTD12", "CPTD15",
    "CP CR600", "CP CB2", "COMPANO 100", "CT Analyzer", "TESTRANO 600", "CIBANO 500",
    "CB TN3", "MPD 600", "MPD 800", "CAL 542", "MCC210L", "HFCT", "UVS610",
    "MONTESTO 200", "FRANEO 800", "DIRANA", "HVA45TD", "HVA60", "HVA68-2",
    "ILG G2Pro", "Ariadna CI", "MRT700", "Other",
  ];

  useEffect(() => {
    setForm((prev) => ({
      ...prev,
      formStartedAt: String(Date.now()),
    }));
  }, []);

  useEffect(() => {
    if (!RECAPTCHA_SITE_KEY) return;

    const existingScript = document.querySelector(
      `script[src^="https://www.google.com/recaptcha/api.js?render="]`
    );

    if (existingScript) return;

    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  }, []);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleEquipmentToggle(item: string) {
    setForm((prev) => {
      const exists = prev.selected_equipment.includes(item);

      if (exists) {
        return {
          ...prev,
          selected_equipment: prev.selected_equipment.filter((x) => x !== item),
        };
      }

      return {
        ...prev,
        selected_equipment: [...prev.selected_equipment, item],
      };
    });
  }

  function resetForm() {
    setForm({
      ...initialForm,
      formStartedAt: String(Date.now()),
    });
  }

  async function getRecaptchaToken(): Promise<string> {
    if (!RECAPTCHA_SITE_KEY) {
      throw new Error("reCAPTCHA site key is missing.");
    }

    if (!window.grecaptcha) {
      throw new Error("reCAPTCHA is not ready yet. Please try again.");
    }

    return await new Promise<string>((resolve, reject) => {
      window.grecaptcha?.ready(async () => {
        try {
          const token = await window.grecaptcha?.execute(RECAPTCHA_SITE_KEY, {
            action: "rental_form_submit",
          });

          if (!token) {
            reject(new Error("Failed to get reCAPTCHA token."));
            return;
          }

          resolve(token);
        } catch {
          reject(new Error("Failed to verify reCAPTCHA. Please try again."));
        }
      });
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setMessage({ type: "", text: "" });

    try {
      const recaptchaToken = await getRecaptchaToken();

      const res = await fetch("/api/rental-requests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: form.full_name,
          email: form.email,
          phone: form.phone,
          company: form.company,
          rentalStartDate: form.rental_start_date,
          rentalEndDate: form.rental_end_date,
          purpose: form.purpose,
          selectedEquipment: form.selected_equipment,
          website: form.website,
          formStartedAt: form.formStartedAt,
          recaptchaToken,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to submit rental request");
      }

      setMessage({
        type: "success",
        text: "Your rental request has been submitted successfully.",
      });

      resetForm();
    } catch (error) {
      const err = error as Error;
      setMessage({
        type: "error",
        text: err.message || "Something went wrong. Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="ds-page">
      <PageHero
        label="Rental services"
        title="Flexible rental solutions for specialized testing equipment"
        text="DigiStano provides cost-effective rental solutions for high-end testing equipment to support short-term requirements, project needs, shutdowns, and commissioning activities."
        image="/images/rental.jpg"
        stats={[
          { label: "Availability", value: "Fast Response" },
          { label: "Scope", value: "Project Based" },
          { label: "Support", value: "Technical Assistance" },
        ]}
      >
        <a href="#rental-form" className="ds-button">Request equipment <span aria-hidden="true">→</span></a>
      </PageHero>

      <section className="ds-section">
        <div className="ds-container">
          <SectionHead label="Why rent from DigiStano" title="Practical equipment access tailored to your project timeline." text="Our rental model is designed for speed, flexibility, and technical value in demanding power system environments." />
          <IconGrid items={[
            { icon: "bolt", title: "Fast availability", text: "Fast equipment availability for urgent project requirements." },
            { icon: "gauge", title: "No capital outlay", text: "Access to specialized testing equipment without capital investment." },
            { icon: "wrench", title: "Shutdown support", text: "Support for shutdowns, commissioning, and temporary site needs." },
            { icon: "calendar", title: "Flexible durations", text: "Flexible rental durations based on project scope." },
            { icon: "truck", title: "Reduced downtime", text: "Reduced downtime through rapid equipment access." },
            { icon: "shield", title: "Technical support", text: "Technical support available when required." },
          ]} />
        </div>
      </section>

      <section className="ds-section ds-section-tint">
        <div className="ds-container">
          <SectionHead label="Available rental equipment" title="Browse popular electrical test equipment for rent." text="Review equipment capabilities and submit a request for current availability, rental duration, delivery, and technical support." />
          <div className="ds-equipment-list">
            {rentalEquipmentPages.map((item) => (
              <a key={item.name} href={item.href ?? "#rental-form"} data-reveal>
                <h3>Rent {item.name}</h3>
                <p>{item.use}</p>
                <span className="ds-text-link">{item.href ? "View equipment details" : "Request availability"} <span aria-hidden="true">→</span></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="rental-form" className="ds-section">
        <div className="ds-container">
          <SectionHead label="Equipment rent form" title="Submit your rental request." text="Tell us what equipment you need and the expected rental period. Our team will review availability and contact you with the next steps." />
          <div className="ds-split" data-reveal>
            <div className="ds-dark-card">
              <h3>Rental request process</h3>
              <ol>
                <li><p>1. Select the required equipment</p><p>Choose one or more devices based on your testing scope or site requirement.</p></li>
                <li><p>2. Share your project dates</p><p>Provide the expected rental start and end dates so we can check availability.</p></li>
                <li><p>3. We contact you</p><p>Our team reviews your request and responds with confirmation, availability, and rental coordination details.</p></li>
              </ol>
            </div>

            <form onSubmit={handleSubmit} className="ds-form">
              <div style={{ display: "none" }} aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input id="website" name="website" type="text" value={form.website} onChange={handleChange} tabIndex={-1} autoComplete="off" />
              </div>
              <input type="hidden" name="formStartedAt" value={form.formStartedAt} readOnly />

              <div className="ds-field">
                <label htmlFor="full_name">Full name *</label>
                <input id="full_name" name="full_name" type="text" value={form.full_name} onChange={handleChange} required maxLength={120} placeholder="Your full name" />
              </div>

              <div className="ds-field">
                <label htmlFor="company">Company</label>
                <input id="company" name="company" type="text" value={form.company} onChange={handleChange} maxLength={160} placeholder="Company name" />
              </div>

              <div className="ds-field">
                <label htmlFor="email">Email *</label>
                <input id="email" name="email" type="email" value={form.email} onChange={handleChange} required maxLength={160} placeholder="Your email" />
              </div>

              <div className="ds-field">
                <label htmlFor="phone">Phone number *</label>
                <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} required maxLength={40} placeholder="Your phone number" />
              </div>

              <div className="ds-field">
                <label htmlFor="rental_start_date">Rental start date *</label>
                <input id="rental_start_date" name="rental_start_date" type="date" value={form.rental_start_date} onChange={handleChange} required />
              </div>

              <div className="ds-field">
                <label htmlFor="rental_end_date">Rental end date *</label>
                <input id="rental_end_date" name="rental_end_date" type="date" value={form.rental_end_date} onChange={handleChange} required />
              </div>

              <div className="ds-field ds-field-full">
                <label htmlFor="purpose">Purpose of rental *</label>
                <textarea id="purpose" name="purpose" rows={5} value={form.purpose} onChange={handleChange} required maxLength={3000} placeholder="Please tell us what the equipment is needed for" />
              </div>

              <div className="ds-field-full">
                <label style={{ display: "block", marginBottom: 10, fontSize: 12, fontWeight: 650 }}>Please select equipment *</label>
                <div className="ds-checkbox-grid">
                  {allEquipment.map((item) => (
                    <label key={item}>
                      <input type="checkbox" checked={form.selected_equipment.includes(item)} onChange={() => handleEquipmentToggle(item)} />
                      {item}
                    </label>
                  ))}
                </div>
              </div>

              <p className="ds-form-note">This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>

              {message.text ? (
                <div className={`ds-form-banner ${message.type === "success" ? "ds-form-banner-success" : "ds-form-banner-error"}`}>{message.text}</div>
              ) : null}

              <div className="ds-form-actions">
                <p>By submitting this form, you allow DigiStano to contact you regarding your rental request and equipment availability.</p>
                <button type="submit" disabled={submitting} className="ds-form-submit">{submitting ? "Submitting..." : "Submit Rental Request"}</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
