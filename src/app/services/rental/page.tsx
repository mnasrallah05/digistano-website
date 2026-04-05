"use client";

import { useState } from "react";

export default function RentalPage() {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    company: "",
    rental_start_date: "",
    rental_end_date: "",
    purpose: "",
    selected_equipment: [] as string[],
  });

  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error" | "";
    text: string;
  }>({
    type: "",
    text: "",
  });

  const benefits = [
    "Fast equipment availability for urgent project requirements",
    "Access to specialized testing equipment without capital investment",
    "Support for shutdowns, commissioning, and temporary site needs",
    "Flexible rental durations based on project scope",
    "Reduced downtime through rapid equipment access",
    "Technical support available when required",
  ];

  const allEquipment = [
    "CMC 356",
    "CMGPS 588",
    "ARC256",
    "CPC 100",
    "CPTD12",
    "CPTD15",
    "CP CR600",
    "CP CB2",
    "COMPANO 100",
    "CT Analyzer",
    "TESTRANO 600",
    "CIBANO 500",
    "CB TN3",
    "MPD 600",
    "MPD 800",
    "CAL 542",
    "MCC210L",
    "HFCT",
    "UVS610",
    "MONTESTO 200",
    "FRANEO 800",
    "DIRANA",
    "HVA45TD",
    "HVA60",
    "HVA68-2",
    "ILG G2Pro",
    "Ariadna CI",
    "MRT700",
    "Other",
  ];

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

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setMessage({ type: "", text: "" });

    try {
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

      setForm({
        full_name: "",
        email: "",
        phone: "",
        company: "",
        rental_start_date: "",
        rental_end_date: "",
        purpose: "",
        selected_equipment: [],
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
            src="/images/rental.jpg"
            alt="Rental Services"
            className="h-full w-full object-cover opacity-30"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/70" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
              Rental Services
            </p>

            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
              Flexible rental solutions for specialized testing equipment
            </h1>

            <p className="mb-8 max-w-2xl text-lg leading-8 text-slate-300">
              DigiStano provides cost-effective rental solutions for high-end
              testing equipment to support short-term requirements, project
              needs, shutdowns, and commissioning activities.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#rental-form"
                className="rounded-xl bg-blue-600 px-6 py-4 text-center font-semibold text-white transition hover:bg-blue-700"
              >
                Request Equipment
              </a>

              <a
                href="#rental-form"
                className="rounded-xl border border-white/20 bg-white/5 px-6 py-4 text-center font-semibold text-white transition hover:bg-white hover:text-slate-950"
              >
                Start Rental Request
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <p className="text-sm text-slate-300">Availability</p>
                <p className="mt-1 text-lg font-semibold">Fast Response</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <p className="text-sm text-slate-300">Scope</p>
                <p className="mt-1 text-lg font-semibold">Project Based</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <p className="text-sm text-slate-300">Support</p>
                <p className="mt-1 text-lg font-semibold">Technical Assistance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20">
        <div className="mx-auto max-w-[1600px] px-6">
          <div className="grid items-center gap-12 xl:gap-16 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="relative group w-full">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-blue-600/20 to-indigo-600/20 blur-2xl transition duration-500 group-hover:from-blue-600/30 group-hover:to-indigo-600/30" />

                <div className="relative w-full overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src="/images/rental-equipment.jpg"
                    alt="Rental equipment"
                    className="block h-[520px] w-full object-cover object-center transition duration-700 group-hover:scale-105 xl:h-[580px]"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
                Rental Solutions
              </p>

              <h2 className="mb-6 text-4xl font-bold leading-tight text-slate-900 xl:text-5xl">
                Access critical test equipment without ownership overhead
              </h2>

              <p className="mb-6 text-lg leading-9 text-slate-600">
                DigiStano offers rental equipment services to support individuals,
                contractors, utilities, and industrial clients with specialized
                testing needs on short notice and flexible durations.
              </p>

              <p className="text-lg leading-9 text-slate-600">
                Whether for site commissioning, diagnostics, planned shutdowns, or
                temporary replacement needs, our rental solutions provide a
                practical and cost-effective way to access advanced equipment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
              Why Rent From DigiStano
            </p>
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
              Practical equipment access tailored to your project timeline
            </h2>
            <p className="text-lg text-slate-600">
              Our rental model is designed for speed, flexibility, and technical
              value in demanding power system environments.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {benefits.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-600">
                  ⚡
                </div>
                <p className="leading-7 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RENTAL FORM */}
      <section id="rental-form" className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
              Equipment Rent Form
            </p>
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-5xl">
              Submit your rental request
            </h2>
            <p className="text-lg leading-8 text-slate-600">
              Tell us what equipment you need and the expected rental period. Our
              team will review availability and contact you with the next steps.
            </p>
          </div>

          <div className="grid items-start gap-10 lg:grid-cols-[0.72fr_1.28fr]">
            <div className="self-start rounded-3xl bg-slate-950 p-8 text-white">
              <h3 className="mb-6 text-2xl font-semibold">
                Rental request process
              </h3>

              <div className="space-y-6">
                <div>
                  <p className="font-semibold">1. Select the required equipment</p>
                  <p className="mt-2 text-slate-300">
                    Choose one or more devices based on your testing scope or
                    site requirement.
                  </p>
                </div>

                <div>
                  <p className="font-semibold">2. Share your project dates</p>
                  <p className="mt-2 text-slate-300">
                    Provide the expected rental start and end dates so we can
                    check availability.
                  </p>
                </div>

                <div>
                  <p className="font-semibold">3. We contact you</p>
                  <p className="mt-2 text-slate-300">
                    Our team reviews your request and responds with confirmation,
                    availability, and rental coordination details.
                  </p>
                </div>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10"
            >
              <div className="grid gap-6 md:grid-cols-2">
                <div>
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

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-900">
                    Company
                  </label>
                  <input
                    name="company"
                    type="text"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Company name"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3.5 outline-none transition focus:border-blue-600"
                  />
                </div>

                <div>
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

                <div>
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

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-900">
                    Rental start date *
                  </label>
                  <input
                    name="rental_start_date"
                    type="date"
                    value={form.rental_start_date}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-slate-300 px-4 py-3.5 outline-none transition focus:border-blue-600"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-900">
                    Rental end date *
                  </label>
                  <input
                    name="rental_end_date"
                    type="date"
                    value={form.rental_end_date}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-slate-300 px-4 py-3.5 outline-none transition focus:border-blue-600"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-semibold text-slate-900">
                    Purpose of rental
                  </label>
                  <textarea
                    name="purpose"
                    rows={5}
                    value={form.purpose}
                    onChange={handleChange}
                    placeholder="Please tell us what the equipment is needed for"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3.5 outline-none transition focus:border-blue-600"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="mb-4 block text-sm font-semibold text-slate-900">
                    Please select equipment *
                  </label>

                  <div className="grid gap-3 md:grid-cols-2">
                    {allEquipment.map((item) => {
                      const checked = form.selected_equipment.includes(item);

                      return (
                        <label
                          key={item}
                          className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-4 transition ${
                            checked
                              ? "border-blue-600 bg-blue-50"
                              : "border-slate-300 bg-white"
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => handleEquipmentToggle(item)}
                            className="h-4 w-4"
                          />
                          <span className="text-slate-800">{item}</span>
                        </label>
                      );
                    })}
                  </div>
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
                    regarding your rental request and equipment availability.
                  </p>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="shrink-0 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {submitting ? "Submitting..." : "Submit Rental Request"}
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