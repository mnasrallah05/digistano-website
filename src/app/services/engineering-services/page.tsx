"use client";

import { useState } from "react";

export default function EngineeringServicesPage() {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    appointment_date: "",
    time_slot: "9 am - 11 am",
    purpose: "",
    meeting_type: "Online",
    phone: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error" | "";
    text: string;
  }>({
    type: "",
    text: "",
  });

  const capabilityItems = [
    "Rotating Machines Testing solutions",
    "HV/MV Cables Testing Solutions",
    "HV/MV Switchgear Testing Solutions including GIS",
    "Power/Distribution Transformers Testing Solutions",
    "Power System Protection System Testing solutions",
    "IEC61850 systems Testing solutions",
    "Cyber Security Testing Solutions",
    "Offline and Online Partial Discharge Measurement",
    "Online Partial Discharge Monitoring Systems",
    "Asset Management Systems solutions",
    "Energy Meters Testing solution",
    "CT/VT Testing Solutions",
    "Transmission Lines Testing solutions",
    "Substation Grounding, Step & Touch Voltage Testing solutions",
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

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setMessage({ type: "", text: "" });

    try {
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

      setForm({
        full_name: "",
        email: "",
        appointment_date: "",
        time_slot: "9 am - 11 am",
        purpose: "",
        meeting_type: "Online",
        phone: "",
      });
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
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0">
          <img
            src="/images/engineering-services.jpg"
            alt="Engineering Services"
            className="h-full w-full object-cover opacity-30"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/70" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
              Engineering Services
            </p>

            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
              Onsite technical support for critical power system applications
            </h1>

            <p className="mb-8 max-w-2xl text-lg leading-8 text-slate-300">
              DigiStano provides local sales support, product demonstration,
              testing, training, and field engineering services across electrical
              power systems in the GCC.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#appointment"
                className="rounded-xl bg-blue-600 px-6 py-4 text-center font-semibold text-white transition hover:bg-blue-700"
              >
                Book an Appointment
              </a>

              <a
                href="#capabilities"
                className="rounded-xl border border-white/20 bg-white/5 px-6 py-4 text-center font-semibold text-white transition hover:bg-white hover:text-slate-950"
              >
                Explore Capabilities
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <p className="text-sm text-slate-300">Coverage</p>
                <p className="mt-1 text-lg font-semibold">Across GCC</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <p className="text-sm text-slate-300">Focus</p>
                <p className="mt-1 text-lg font-semibold">Testing & Support</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <p className="text-sm text-slate-300">Approach</p>
                <p className="mt-1 text-lg font-semibold">Reliable & Practical</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
            <img
              src="/images/engineering-services.jpg"
              alt="DigiStano engineering team"
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
              Why DigiStano
            </p>

            <h2 className="mb-6 text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
              Engineering expertise backed by field understanding
            </h2>

            <p className="mb-6 text-lg leading-8 text-slate-600">
              Our engineering team supports clients with local sales assistance,
              onsite technical services, product demonstrations, training, and
              testing activities tailored to real project conditions.
            </p>

            <p className="text-lg leading-8 text-slate-600">
              We focus on practical execution, fast support response, and technical
              reliability to help clients achieve efficient testing,
              commissioning, and diagnostics across power system assets.
            </p>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section id="capabilities" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
              Capabilities
            </p>
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
              Technical support across major testing disciplines
            </h2>
            <p className="text-lg text-slate-600">
              Our team supports a wide range of power system testing and diagnostic
              applications with practical, site-ready engineering services.
            </p>
          </div>

          <div className="grid gap-x-12 gap-y-4 md:grid-cols-2">
            {capabilityItems.map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 border-b border-slate-200 py-4"
              >
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-blue-600" />
                <p className="text-base leading-7 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIALIST STRIP */}
      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
              Specialist Focus
            </p>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Partial discharge measurement and monitoring support
            </h2>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              DigiStano supports portable and online partial discharge monitoring
              for critical power assets, helping clients improve diagnostics,
              maintenance planning, and equipment reliability.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <h3 className="mb-6 text-2xl font-semibold">
              Common applications
            </h3>

            <div className="space-y-4">
              {pdItems.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4 border-b border-white/10 pb-4"
                >
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-blue-400" />
                  <p className="text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-10 md:grid-cols-3">
          <div className="rounded-2xl bg-slate-50 p-6">
            <p className="text-sm text-slate-500">Regional Presence</p>
            <p className="mt-2 text-xl font-semibold text-slate-900">
              UAE, Bahrain, Saudi Arabia, Oman
            </p>
          </div>

          <div className="rounded-2xl bg-slate-50 p-6">
            <p className="text-sm text-slate-500">Service Value</p>
            <p className="mt-2 text-xl font-semibold text-slate-900">
              Demonstration, testing, training, and support
            </p>
          </div>

          <div className="rounded-2xl bg-slate-50 p-6">
            <p className="text-sm text-slate-500">Technical Strength</p>
            <p className="mt-2 text-xl font-semibold text-slate-900">
              Field-focused engineering execution
            </p>
          </div>
        </div>
      </section>

      {/* APPOINTMENT */}
      <section id="appointment" className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
              Appointment
            </p>
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-5xl">
              Request a consultation with our engineering team
            </h2>
            <p className="text-lg leading-8 text-slate-600">
              Share your requirements and preferred timing. Our team will review
              your request and contact you to confirm the appointment.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
            <div className="rounded-3xl bg-slate-950 p-8 text-white">
              <h3 className="mb-6 text-2xl font-semibold">
                What happens next?
              </h3>

              <div className="space-y-6">
                <div>
                  <p className="font-semibold">1. Submit your request</p>
                  <p className="mt-2 text-slate-300">
                    Provide your preferred date, time, and purpose of the appointment.
                  </p>
                </div>

                <div>
                  <p className="font-semibold">2. We review it quickly</p>
                  <p className="mt-2 text-slate-300">
                    Our team checks availability and aligns the request with the
                    relevant engineering support scope.
                  </p>
                </div>

                <div>
                  <p className="font-semibold">3. We confirm with you</p>
                  <p className="mt-2 text-slate-300">
                    You’ll receive confirmation by email, and we will coordinate the
                    next steps directly.
                  </p>
                </div>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10"
            >
              <div className="grid gap-6 md:grid-cols-2">
                <div className="md:col-span-1">
                  <label className="mb-2 block text-sm font-semibold text-slate-900">
                    Full name *
                  </label>
                  <input
                    name="full_name"
                    type="text"
                    value={form.full_name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3.5 outline-none transition focus:border-blue-600"
                  />
                </div>

                <div className="md:col-span-1">
                  <label className="mb-2 block text-sm font-semibold text-slate-900">
                    Email *
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="Your email"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3.5 outline-none transition focus:border-blue-600"
                  />
                </div>

                <div className="md:col-span-1">
                  <label className="mb-2 block text-sm font-semibold text-slate-900">
                    Appointment date *
                  </label>
                  <input
                    name="appointment_date"
                    type="date"
                    value={form.appointment_date}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-slate-300 px-4 py-3.5 outline-none transition focus:border-blue-600"
                  />
                </div>

                <div className="md:col-span-1">
                  <label className="mb-2 block text-sm font-semibold text-slate-900">
                    Phone number *
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="Your phone number"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3.5 outline-none transition focus:border-blue-600"
                  />
                </div>

                <div className="md:col-span-1">
                  <label className="mb-2 block text-sm font-semibold text-slate-900">
                    Preferred time slot *
                  </label>
                  <select
                    name="time_slot"
                    value={form.time_slot}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-300 px-4 py-3.5 outline-none transition focus:border-blue-600"
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="md:col-span-1">
                  <label className="mb-2 block text-sm font-semibold text-slate-900">
                    Meeting type *
                  </label>
                  <select
                    name="meeting_type"
                    value={form.meeting_type}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-300 px-4 py-3.5 outline-none transition focus:border-blue-600"
                  >
                    <option value="Online">Online</option>
                    <option value="Office">Office</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-semibold text-slate-900">
                    Purpose of appointment
                  </label>
                  <textarea
                    name="purpose"
                    rows={6}
                    value={form.purpose}
                    onChange={handleChange}
                    placeholder="Tell us what you need regarding engineering services"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3.5 outline-none transition focus:border-blue-600"
                  />
                </div>

                {message.text ? (
                  <div
                    className={`md:col-span-2 rounded-xl px-4 py-4 text-sm font-medium ${
                      message.type === "success"
                        ? "border border-green-200 bg-green-50 text-green-700"
                        : "border border-red-200 bg-red-50 text-red-700"
                    }`}
                  >
                    {message.text}
                  </div>
                ) : null}

                <div className="md:col-span-2 flex items-center justify-between gap-4 pt-2">
                  <p className="max-w-xl text-sm leading-6 text-slate-500">
                    By submitting this form, you allow DigiStano to contact you
                    regarding your appointment request.
                  </p>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="shrink-0 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {submitting ? "Submitting..." : "Submit Request"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}