"use client";

import { FormEvent, useState } from "react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Something went wrong.");
      }

      setStatus({
        type: "success",
        message:
          "Your message has been sent successfully. Our team will contact you soon.",
      });
      setForm(initialForm);
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
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/75" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
                Contact
              </p>

              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
                Let’s discuss your
                <br />
                project requirements
              </h1>

              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                Contact DigiStano for engineering services, rental equipment,
                testing solutions, training, and technical support. Our team is
                ready to assist you with the right solution for your business.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm text-slate-400">Response</p>
                  <p className="mt-2 text-xl font-semibold text-white">
                    Fast Support
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm text-slate-400">Coverage</p>
                  <p className="mt-2 text-xl font-semibold text-white">
                    UAE & Region
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm text-slate-400">Focus</p>
                  <p className="mt-2 text-xl font-semibold text-white">
                    Technical Solutions
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-sm">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
                  Get in Touch
                </p>
                <h2 className="mb-4 text-3xl font-bold text-white">
                  We would love to hear from you
                </h2>
                <p className="leading-8 text-slate-300">
                  Share your inquiry and our team will get back to you regarding
                  products, testing solutions, training, rentals, or technical
                  consultation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-12">
            {/* LEFT SIDE */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
                  Contact Us
                </p>
                <h2 className="mb-4 text-4xl font-bold text-slate-900">
                  Contact Us
                </h2>
                <p className="mb-10 text-lg leading-8 text-slate-600">
                  We would love to speak with you. Feel free to reach out using
                  the details below.
                </p>

                <div className="mb-10">
                  <h3 className="mb-4 text-2xl font-bold text-slate-900">
                    Get In Touch
                  </h3>
                  <div className="space-y-2 text-lg leading-8 text-slate-600">
                    <p>Dubai Office : +971 4 3373764</p>
                    <p>Abu Dhabi Office : +9712 551314</p>
                    <p>
                      <a
                        href="mailto:sales@digistano.com"
                        className="text-blue-600 hover:text-blue-700"
                      >
                        sales@digistano.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="mb-10">
                  <h3 className="mb-4 text-2xl font-bold text-slate-900">
                    Hours
                  </h3>
                  <div className="space-y-2 text-lg leading-8 text-slate-600">
                    <p>Sun-Thu 8:30AM - 5:30PM</p>
                    <p>Fri 08:30AM - 12:30PM</p>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <h3 className="mb-3 text-xl font-bold text-slate-900">
                    Why contact DigiStano?
                  </h3>
                  <ul className="space-y-3 text-slate-600">
                    <li>• Product inquiries and technical consultation</li>
                    <li>• Engineering services and project support</li>
                    <li>• Rental equipment requests</li>
                    <li>• Training and solution recommendations</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE FORM */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
                  Send Message
                </p>
                <h2 className="mb-8 text-3xl font-bold text-slate-900">
                  Request a callback or send an inquiry
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Your name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-slate-300 px-4 py-4 outline-none transition focus:border-blue-600"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Your email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-slate-300 px-4 py-4 outline-none transition focus:border-blue-600"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Phone Number*
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="text"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="Enter your phone number"
                      className="w-full rounded-xl border border-slate-300 px-4 py-4 outline-none transition focus:border-blue-600"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-slate-300 px-4 py-4 outline-none transition focus:border-blue-600"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Your message (optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={8}
                      className="w-full rounded-xl border border-slate-300 px-4 py-4 outline-none transition focus:border-blue-600"
                    />
                  </div>

                  {status.message ? (
                    <div
                      className={`rounded-xl border px-4 py-4 text-sm ${
                        status.type === "success"
                          ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                          : "border-red-200 bg-red-50 text-red-700"
                      }`}
                    >
                      {status.message}
                    </div>
                  ) : null}

                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex min-w-[180px] items-center justify-center rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {loading ? "Sending..." : "Submit"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}