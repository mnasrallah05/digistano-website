"use client";

import { FormEvent, useEffect, useState } from "react";
import { PageHero } from "@/components/site/Elements";

declare global {
  interface Window {
    grecaptcha?: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

type FormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  website: string;
  formStartedAt: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
  website: "",
  formStartedAt: "",
};

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";

export default function ContactClient() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | "";
    message: string;
  }>({
    type: "",
    message: "",
  });

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

    return () => {
      // keep script loaded for future page visits
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const resetForm = () => {
    setForm({
      ...initialForm,
      formStartedAt: String(Date.now()),
    });
  };

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
            action: "contact_form_submit",
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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const recaptchaToken = await getRecaptchaToken();

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          recaptchaToken,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.message || "Something went wrong.");
      }

      setStatus({
        type: "success",
        message:
          "Your message has been sent successfully. Our team will contact you soon.",
      });

      resetForm();
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Failed to send your message.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="ds-page">
      <PageHero
        label="Contact"
        title="Let's discuss your project requirements"
        text="Contact DigiStano for partial discharge testing, electrical diagnostics, field engineering, or supporting equipment rental. Start with the asset, site, and decision you need to make."
        stats={[
          { label: "Response", value: "Fast Support" },
          { label: "Coverage", value: "Five GCC Markets" },
          { label: "Focus", value: "Technical Solutions" },
        ]}
      />

      <section className="ds-section">
        <div className="ds-container">
          <div className="ds-split" data-reveal>
            <div>
              <p className="ds-eyebrow"><span />Contact us</p>
              <h2 style={{ fontSize: 32, marginBottom: 18 }}>We would love to speak with you</h2>
              <p className="ds-body-copy" style={{ marginBottom: 30 }}>Reach out using the details below and our team will get back to you regarding products, testing solutions, training, rentals, or technical consultation.</p>

              <div style={{ marginBottom: 30 }}>
                <h3 style={{ fontSize: 18, marginBottom: 14 }}>Get in touch</h3>
                <div className="ds-body-copy" style={{ display: "grid", gap: 6 }}>
                  <p style={{ margin: 0 }}>Dubai Office: +971 4 3373764</p>
                  <p style={{ margin: 0 }}>Abu Dhabi Headquarters: +971 2 5513114</p>
                  <p style={{ margin: 0 }}><a href="mailto:sales@digistano.com" className="ds-text-link" style={{ display: "inline" }}>sales@digistano.com</a></p>
                </div>
              </div>

              <div style={{ marginBottom: 30 }}>
                <h3 style={{ fontSize: 18, marginBottom: 14 }}>Hours</h3>
                <div className="ds-body-copy" style={{ display: "grid", gap: 6 }}>
                  <p style={{ margin: 0 }}>Sun&ndash;Thu 8:30am &ndash; 5:30pm</p>
                  <p style={{ margin: 0 }}>Fri 8:30am &ndash; 12:30pm</p>
                </div>
              </div>

              <div className="ds-notice">
                <strong style={{ display: "block", marginBottom: 10, color: "var(--ink)" }}>Why contact DigiStano?</strong>
                Partial discharge testing and diagnostics &middot; Electrical testing and project support &middot; Rental equipment requests &middot; Training and solution recommendations
              </div>
            </div>

            <form onSubmit={handleSubmit} className="ds-form">
              {/* Honeypot */}
              <div style={{ display: "none" }} aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input id="website" name="website" type="text" value={form.website} onChange={handleChange} tabIndex={-1} autoComplete="off" />
              </div>
              <input type="hidden" name="formStartedAt" value={form.formStartedAt} readOnly />

              <div className="ds-field">
                <label htmlFor="name">Your name</label>
                <input id="name" name="name" type="text" value={form.name} onChange={handleChange} required maxLength={120} />
              </div>

              <div className="ds-field">
                <label htmlFor="email">Your email</label>
                <input id="email" name="email" type="email" value={form.email} onChange={handleChange} required maxLength={160} />
              </div>

              <div className="ds-field">
                <label htmlFor="phone">Phone number *</label>
                <input id="phone" name="phone" type="text" value={form.phone} onChange={handleChange} required maxLength={40} placeholder="Enter your phone number" />
              </div>

              <div className="ds-field">
                <label htmlFor="subject">Subject</label>
                <input id="subject" name="subject" type="text" value={form.subject} onChange={handleChange} required maxLength={160} />
              </div>

              <div className="ds-field ds-field-full">
                <label htmlFor="message">Your message</label>
                <textarea id="message" name="message" value={form.message} onChange={handleChange} rows={7} required maxLength={3000} />
              </div>

              <p className="ds-form-note">This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>

              {status.message ? (
                <div className={`ds-form-banner ${status.type === "success" ? "ds-form-banner-success" : "ds-form-banner-error"}`}>
                  {status.message}
                </div>
              ) : null}

              <div className="ds-form-actions">
                <button type="submit" disabled={loading} className="ds-form-submit">
                  {loading ? "Sending..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
