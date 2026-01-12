"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Link from "next/link";
import Footer from "@/components/footer/Footer";

const contactScrollingItems = [
  "Websites",
  "E-Commerce",
  "PPC",
  "Lead Campaigns",
  "Social Media",
  "SEO Services",
  "Branding",
];

const businessTypes = [
  "Real Estate",
  "Flooring Business",
  "Healthcare Industry",
  "E-Commerce",
  "Corporate",
];

const companyTurnoverOptions = [
  "Newly Seeded",
  "Newly Funded",
  "0cr to 5cr",
  "5cr to 10cr",
  "Above 10cr",
];

const monthlyBudgetOptions = [
  "25k-50k",
  "50k-1 Lakh",
  "1 Lakh to 2 Lakhs",
  "Above 2 Lakhs",
];

const startOptions = ["Immediately", "15 Days", "1 Month"];

const timezones = [
  "Asia/Kolkata",
  "America/New_York",
  "Europe/London",
  "Australia/Sydney",
];

const preferredModes = ["Call", "WhatsApp", "Virtual Meeting"];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    countryCode: "+91",
    email: "",
    company: "",
    website: "",
    businessType: "",
    turnover: "",
    servicesArray: [] as string[],
    otherService: "",
    budget: "",
    start: "",
    preferredDate: new Date(),
    timezone: "Asia/Kolkata",
    mode: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [scrollIndex, setScrollIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollIndex((prev) => (prev + 1) % contactScrollingItems.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // ---------------------------------------------------
  // HANDLE SUBMIT
  // ---------------------------------------------------
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (form.servicesArray.length === 0) {
      setStatus("Please select at least one service.");
      return;
    }

    // -----------------------------
    // Validate phone (global)
    // -----------------------------
    const numericPhone = form.phone.replace(/\D/g, ""); // remove non-digits
    if (numericPhone.length < 6 || numericPhone.length > 15) {
      setStatus("Please enter a valid phone number.");
      return;
    }

    // -----------------------------
    // Validate date
    // -----------------------------
    if (!(form.preferredDate instanceof Date) || isNaN(form.preferredDate.getTime())) {
      setStatus("Please select a valid date and time.");
      return;
    }

    setStatus("Sending…");

    const { error } = await supabase.from("contact_requests").insert([
      {
        name: form.name,
        phone: `${form.countryCode} ${form.phone}`,
        email: form.email,
        company: form.company,
        website: form.website,
        business_type: form.businessType,
        company_turnover: form.turnover,
        services: form.servicesArray.join(", "),
        other_service: form.servicesArray.includes("Other")
          ? form.otherService
          : null,
        monthly_budget: form.budget,
        start_timeline: form.start,
        preferred_date: form.preferredDate.toISOString(),
        preferred_timezone: form.timezone,
        preferred_mode: form.mode,
        message: form.message,
        created_at: new Date(),
      },
    ]);

    if (error) {
      setStatus("Something went wrong. Try again.");
      return;
    }

    // -----------------------------
    // SEND EMAIL NOTIFICATION
    // -----------------------------
    await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setStatus("We’ll be in touch shortly.");

    // RESET FORM
    setForm({
      name: "",
      phone: "",
      countryCode: "+91",
      email: "",
      company: "",
      website: "",
      businessType: "",
      turnover: "",
      servicesArray: [],
      otherService: "",
      budget: "",
      start: "",
      preferredDate: new Date(),
      timezone: "Asia/Kolkata",
      mode: "",
      message: "",
    });
  }

  return (
    <>
      <main className="pt-32 px-6 max-w-6xl mx-auto">
        <div className="mb-12">
          <nav className="text-sm text-gray-700 mb-2">
            <Link href="/" className="hover:text-red-500">
              <strong>Home</strong>
            </Link>{" "}
            &gt; Contact Us
          </nav>

          <h1 className="text-5xl font-semibold tracking-tight">
            Contact Us –{" "}
            <span className="text-red-500">
              {contactScrollingItems[scrollIndex]}
            </span>
          </h1>

          <p className="mt-4 text-lg text-gray-600 max-w-md">
            Whether it’s a new product, a redesign, or scaling growth — we’d
            love to hear about it.
          </p>
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* FORM */}
        {/* ---------------------------------------------------------------- */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* ROW 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 -mt-6">
            <div>
              <label className="text-xs font-semibold">YOUR NAME</label>
              <input
                required
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1"
              />
            </div>

            <div>
              <label className="text-xs font-semibold">PHONE NUMBER</label>
              <div className="flex items-center border border-gray-300 rounded-lg px-2 py-1 mt-1">
                <select
                  value={form.countryCode}
                  onChange={(e) =>
                    setForm({ ...form, countryCode: e.target.value })
                  }
                  className="outline-none pr-2 border-r"
                >
                  <option>+91</option>
                  <option>+1</option>
                  <option>+44</option>
                  <option>+61</option>
                </select>
                <input
                  required
                  placeholder="98765 43210"
                  value={form.phone}
                  onChange={(e) =>
                    setForm({ ...form, phone: e.target.value })
                  }
                  className="w-full outline-none px-2 py-1"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold">EMAIL</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1"
              />
            </div>
          </div>

          {/* ROW 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold">COMPANY NAME</label>
              <input
                value={form.company}
                onChange={(e) =>
                  setForm({ ...form, company: e.target.value })
                }
                className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1"
              />
            </div>

            <div>
              <label className="text-xs font-semibold">WEBSITE (Optional)</label>
              <input
                value={form.website}
                onChange={(e) =>
                  setForm({ ...form, website: e.target.value })
                }
                className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1"
              />
            </div>
          </div>

          {/* ROW 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold">BUSINESS TYPE</label>
              <select
                value={form.businessType}
                onChange={(e) =>
                  setForm({ ...form, businessType: e.target.value })
                }
                className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1"
              >
                <option value="">Please select</option>
                {businessTypes.map((b) => (
                  <option key={b}>{b}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold">COMPANY TURNOVER (₹)</label>
              <select
                value={form.turnover}
                onChange={(e) =>
                  setForm({ ...form, turnover: e.target.value })
                }
                className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1"
              >
                <option value="">Please select</option>
                {companyTurnoverOptions.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <label className="text-xs font-semibold block mb-1">
              WHAT SERVICES ARE YOU LOOKING FOR?
            </label>

            <div className="flex flex-wrap gap-2">
              {[
                "SEO",
                "Lead Generation/PPC",
                "Social Media Management",
                "Website Design",
                "E-Commerce",
                "Other",
              ].map((service) => (
                <label
                  key={service}
                  className={`flex items-center gap-2 px-3 py-2 rounded-full border cursor-pointer ${form.servicesArray.includes(service)
                      ? "border-red-600 text-red-600"
                      : "border-gray-300 text-gray-700"
                    }`}
                >
                  <input
                    type="checkbox"
                    checked={form.servicesArray.includes(service)}
                    className="hidden"
                    onChange={() => {
                      if (form.servicesArray.includes(service)) {
                        setForm({
                          ...form,
                          servicesArray: form.servicesArray.filter(
                            (s) => s !== service
                          ),
                        });
                      } else {
                        setForm({
                          ...form,
                          servicesArray: [...form.servicesArray, service],
                        });
                      }
                    }}
                  />
                  <span
                    className={`w-3 h-3 rounded-full border ${form.servicesArray.includes(service)
                        ? "bg-red-600 border-red-600"
                        : "border-gray-400"
                      }`}
                  ></span>
                  {service}
                </label>
              ))}
            </div>

            {form.servicesArray.includes("Other") && (
              <input
                placeholder="Please specify other service"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-3"
                value={form.otherService}
                onChange={(e) =>
                  setForm({ ...form, otherService: e.target.value })
                }
              />
            )}
          </div>

          {/* BUDGET + START */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold">MONTHLY BUDGET (₹)</label>
              <select
                value={form.budget}
                onChange={(e) =>
                  setForm({ ...form, budget: e.target.value })
                }
                className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1"
              >
                <option value="">Please select</option>
                {monthlyBudgetOptions.map((b) => (
                  <option key={b}>{b}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold">
                HOW SOON WOULD YOU LIKE TO GET STARTED?
              </label>
              <select
                value={form.start}
                onChange={(e) =>
                  setForm({ ...form, start: e.target.value })
                }
                className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1"
              >
                <option value="">Please select</option>
                {startOptions.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>

          {/* DATE + TIMEZONE + MODE */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col">
              <label className="text-xs font-semibold mb-1">
                PREFERRED DATE & TIME
              </label>
              <DatePicker
                selected={form.preferredDate}
                onChange={(date: Date | null) =>
                  setForm({
                    ...form,
                    preferredDate: date ?? new Date(),
                  })
                }
                showTimeSelect
                dateFormat="Pp"
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
              />
            </div>

            <div>
              <label className="text-xs font-semibold">
                PREFERRED TIMEZONE
              </label>
              <select
                value={form.timezone}
                onChange={(e) =>
                  setForm({ ...form, timezone: e.target.value })
                }
                className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1"
              >
                {timezones.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold">
                PREFERRED MODE
              </label>
              <select
                value={form.mode}
                onChange={(e) =>
                  setForm({ ...form, mode: e.target.value })
                }
                className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1"
              >
                <option value="">Please select</option>
                {preferredModes.map((m) => (
                  <option key={m}>{m}</option>
                ))}
              </select>
            </div>
          </div>

          {/* MESSAGE */}
          <div>
            <label className="text-xs font-semibold">MESSAGE</label>
            <textarea
              rows={4}
              value={form.message}
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
              className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1"
            />
          </div>

          {/* SUBMIT */}
          <div className="flex justify-start">
            <button className="px-8 py-3 rounded-full bg-red-600 text-white hover:bg-red-700 transition">
              Submit message
            </button>
          </div>

          {status && (
            <p className="text-sm pt-1 text-gray-500">{status}</p>
          )}
        </form>
      </main>

      <Footer />
    </>
  );
}
