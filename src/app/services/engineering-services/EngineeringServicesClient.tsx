"use client";

import { useEffect, useState } from "react";
import { Button, IconGrid, PageHero, SectionHead } from "@/components/site/Elements";

declare global {
  interface Window {
    grecaptcha?: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

type AppointmentFormState = {
  full_name: string;
  email: string;
  appointment_date: string;
  time_slot: string;
  purpose: string;
  meeting_type: string;
  phone: string;
  website: string;
  formStartedAt: string;
};

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";

const initialForm: AppointmentFormState = {
  full_name: "",
  email: "",
  appointment_date: "",
  time_slot: "9 am - 11 am",
  purpose: "",
  meeting_type: "Online",
  phone: "",
  website: "",
  formStartedAt: "",
};

export default function EngineeringServicesClient() {
  const [form, setForm] = useState<AppointmentFormState>(initialForm);

  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error" | "";
    text: string;
  }>({
    type: "",
    text: "",
  });

  const capabilityItems = [
    { label: "Rotating Machines Testing solutions" },
    { label: "HV/MV Cables Testing Solutions", href: "/services/engineering-services/mv-cable-vlf-testing" },
    { label: "HV/MV Switchgear Testing Solutions including GIS", href: "/services/engineering-services/partial-discharge-testing" },
    { label: "Power/Distribution Transformers Testing Solutions" },
    { label: "Power System Protection System Testing solutions" },
    { label: "IEC61850 systems Testing solutions" },
    { label: "Cyber Security Testing Solutions" },
    { label: "Offline and Online Partial Discharge Measurement", href: "/services/engineering-services/partial-discharge-testing" },
    { label: "Online Partial Discharge Monitoring Systems", href: "/services/engineering-services/partial-discharge-testing" },
    { label: "Asset Management Systems solutions" },
    { label: "Energy Meters Testing solution" },
    { label: "CT/VT Testing Solutions" },
    { label: "Transmission Lines Testing solutions" },
    { label: "Substation Grounding, Step & Touch Voltage Testing solutions" },
  ];

  const pdItems = [
    "Rotating Machines",
    "High Voltage & Medium Voltage Cables",
    "High Voltage & Medium Voltage Switchgear",
    "Power & Distribution Transformers",
  ];

  const timeSlots = [
    "9 am - 11 am",
    "11 am - 1 pm",
    "1 pm - 3 pm",
    "3 pm - 5 pm",
    "Other",
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
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
            action: "appointment_form_submit",
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

      const res = await fetch("/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: form.full_name,
          email: form.email,
          appointmentDate: form.appointment_date,
          timeSlot: form.time_slot,
          purpose: form.purpose,
          meetingType: form.meeting_type,
          phone: form.phone,
          serviceName: "Engineering Services",
          website: form.website,
          formStartedAt: form.formStartedAt,
          recaptchaToken,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to submit appointment");
      }

      setMessage({
        type: "success",
        text: "Your appointment request has been submitted successfully.",
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
        label="Engineering services"
        title="Electrical testing and diagnostic support for critical power assets"
        text="DigiStano provides partial discharge diagnostics, cable testing, commissioning, training, and field engineering support across the UAE, Saudi Arabia, Oman, Qatar, and Bahrain."
        image="/images/field/commissioning-service-v3.webp"
        stats={[
          { label: "Coverage", value: "Across GCC" },
          { label: "Focus", value: "Testing & Support" },
          { label: "Approach", value: "Reliable & Practical" },
        ]}
      >
        <Button href="#appointment">Book an appointment</Button>
        <Button href="#capabilities" secondary>Explore capabilities</Button>
      </PageHero>

      <section className="ds-section">
        <div className="ds-container ds-split" data-reveal>
          <div>
            <p className="ds-eyebrow"><span />Why DigiStano</p>
            <h2 style={{ fontSize: 34, marginBottom: 20 }}>Engineering expertise backed by field understanding</h2>
          </div>
          <div style={{ display: "grid", gap: 16 }}>
            <p className="ds-body-copy">Our engineering team supports clients with testing, diagnostics, commissioning, training, and field engineering services tailored to real project conditions.</p>
            <p className="ds-body-copy">We focus on practical execution, fast support response, and technical reliability to help clients achieve efficient testing, commissioning, and diagnostics across power system assets.</p>
          </div>
        </div>
      </section>

      <section id="capabilities" className="ds-section ds-section-tint">
        <div className="ds-container">
          <SectionHead label="Capabilities" title="Technical support across major testing disciplines." text="Our team supports a wide range of power system testing and diagnostic applications with practical, site-ready engineering services." />
          <div className="ds-capability-list">
            {capabilityItems.map((item) =>
              item.href
                ? <a key={item.label} href={item.href}>{item.label} <span aria-hidden="true">→</span></a>
                : <p key={item.label}>{item.label}</p>
            )}
          </div>
        </div>
      </section>

      <section className="ds-section ds-dark-section">
        <div className="ds-container ds-split" data-reveal>
          <div>
            <p className="ds-eyebrow"><span />Specialist focus</p>
            <h2 style={{ fontSize: 32, marginBottom: 20 }}>Partial discharge measurement and monitoring support</h2>
            <p style={{ maxWidth: 520 }}>DigiStano supports portable and online partial discharge monitoring for critical power assets, helping clients improve diagnostics, maintenance planning, and equipment reliability.</p>
            <div className="ds-actions"><Button href="/services/engineering-services/partial-discharge-testing" light>Explore partial discharge testing</Button></div>
          </div>
          <div className="ds-dark-card">
            <h3>Common applications</h3>
            <ul>{pdItems.map((item) => <li key={item}><p>{item}</p></li>)}</ul>
          </div>
        </div>
      </section>

      <section className="ds-section">
        <div className="ds-container">
          <IconGrid items={[
            { icon: "compass", title: "Regional presence", text: "UAE, Bahrain, Saudi Arabia, Oman and Qatar." },
            { icon: "spark", title: "Service value", text: "Demonstration, testing, training, and support." },
            { icon: "gauge", title: "Technical strength", text: "Field-focused engineering execution." },
          ]} />
        </div>
      </section>

      <section id="appointment" className="ds-section ds-section-tint">
        <div className="ds-container">
          <SectionHead label="Appointment" title="Request a consultation with our engineering team." text="Share your requirements and preferred timing. Our team will review your request and contact you to confirm the appointment." />
          <div className="ds-split" data-reveal>
            <div className="ds-dark-card">
              <h3>What happens next?</h3>
              <ol>
                <li><p>1. Submit your request</p><p>Provide your preferred date, time, and purpose of the appointment.</p></li>
                <li><p>2. We review it quickly</p><p>Our team checks availability and aligns the request with the relevant engineering support scope.</p></li>
                <li><p>3. We confirm with you</p><p>You&rsquo;ll receive confirmation by email, and we will coordinate the next steps directly.</p></li>
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
                <label htmlFor="email">Email *</label>
                <input id="email" name="email" type="email" value={form.email} onChange={handleChange} required maxLength={160} placeholder="Your email" />
              </div>

              <div className="ds-field">
                <label htmlFor="appointment_date">Appointment date *</label>
                <input id="appointment_date" name="appointment_date" type="date" value={form.appointment_date} onChange={handleChange} required />
              </div>

              <div className="ds-field">
                <label htmlFor="phone">Phone number *</label>
                <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} required maxLength={40} placeholder="Your phone number" />
              </div>

              <div className="ds-field">
                <label htmlFor="time_slot">Preferred time slot *</label>
                <select id="time_slot" name="time_slot" value={form.time_slot} onChange={handleChange}>
                  {timeSlots.map((slot) => <option key={slot} value={slot}>{slot}</option>)}
                </select>
              </div>

              <div className="ds-field">
                <label htmlFor="meeting_type">Meeting type *</label>
                <select id="meeting_type" name="meeting_type" value={form.meeting_type} onChange={handleChange}>
                  <option value="Online">Online</option>
                  <option value="Office">Office</option>
                </select>
              </div>

              <div className="ds-field ds-field-full">
                <label htmlFor="purpose">Purpose of appointment *</label>
                <textarea id="purpose" name="purpose" rows={6} value={form.purpose} onChange={handleChange} required maxLength={3000} placeholder="Tell us what you need regarding engineering services" />
              </div>

              <p className="ds-form-note">This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>

              {message.text ? (
                <div className={`ds-form-banner ${message.type === "success" ? "ds-form-banner-success" : "ds-form-banner-error"}`}>{message.text}</div>
              ) : null}

              <div className="ds-form-actions">
                <p>By submitting this form, you allow DigiStano to contact you regarding your appointment request.</p>
                <button type="submit" disabled={submitting} className="ds-form-submit">{submitting ? "Submitting..." : "Submit Request"}</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
