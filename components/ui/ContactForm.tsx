"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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

interface ContactFormProps {
  onClose?: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onClose }) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    website: "",
    businessType: "",
    turnover: "",
    budget: "",
    start: "",
    preferredDate: new Date(),
    timezone: "Asia/Kolkata",
    mode: "",
    message: "",
    servicesArray: [] as string[],
    otherService: "",
    countryCode: "+91",
  });

  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending…");

    // reCAPTCHA validation
    const token = (window as any).grecaptcha.getResponse();
    if (!token) {
      setStatus("Please complete the reCAPTCHA.");
      return;
    }

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
        other_service: form.otherService || null,
        monthly_budget: form.budget,
        start_timeline: form.start,
        preferred_date: form.preferredDate.toISOString(),
        preferred_timezone: form.timezone,
        preferred_mode: form.mode,
        message: form.message,
        created_at: new Date(),
        recaptcha_token: token,
      },
    ]);

    if (error) {
      console.error(error);
      setStatus("Something went wrong. Try again.");
      return;
    }
    await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setStatus("We’ll be in touch shortly.");
    (window as any).grecaptcha.reset();

    // RESET FORM
    setForm({
      name: "",
      phone: "",
      email: "",
      company: "",
      website: "",
      businessType: "",
      turnover: "",
      budget: "",
      start: "",
      preferredDate: new Date(),
      timezone: "Asia/Kolkata",
      mode: "",
      message: "",
      servicesArray: [],
      otherService: "",
      countryCode: "+91",
    });

    onClose?.();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-1">

      {/* ROW 1: NAME + PHONE + EMAIL */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="text-xs font-semibold">YOUR NAME</label>
          <input
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 outline-none focus:ring-1 focus:ring-red-600"
          />
        </div>

        <div>
          <label className="text-xs font-semibold">PHONE NUMBER</label>
          <div className="flex items-center border border-gray-300 rounded-lg px-2 py-1 mt-1">
            <select
              className="outline-none pr-2 border-r"
              value={form.countryCode}
              onChange={(e) => setForm({ ...form, countryCode: e.target.value })}
            >
              <option>+91</option>
              <option>+1</option>
              <option>+44</option>
              <option>+61</option>
            </select>
            <input
              required
              placeholder="91234 56789"
              className="w-full outline-none px-2 py-1"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
          </div>
        </div>

        <div>
          <label className="text-xs font-semibold">EMAIL</label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 outline-none focus:ring-1 focus:ring-red-600"
          />
        </div>
      </div>

      {/* ROW 2: COMPANY + WEBSITE */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-semibold">COMPANY NAME</label>
          <input
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 outline-none focus:ring-1 focus:ring-red-600"
          />
        </div>

        <div>
          <label className="text-xs font-semibold">WEBSITE LINK (OPTIONAL)</label>
          <input
            value={form.website}
            onChange={(e) => setForm({ ...form, website: e.target.value })}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 outline-none focus:ring-1 focus:ring-red-600"
          />
        </div>
      </div>

      {/* ROW 3: BUSINESS TYPE + TURNOVER */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-semibold">BUSINESS TYPE</label>
          <select
            required
            value={form.businessType}
            onChange={(e) => setForm({ ...form, businessType: e.target.value })}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 outline-none focus:ring-1 focus:ring-red-600 appearance-none"
          >
            <option value="">please select</option>
            {businessTypes.map((b) => <option key={b}>{b}</option>)}
          </select>
        </div>

        <div>
          <label className="text-xs font-semibold">COMPANY TURNOVER (₹)</label>
          <select
            required
            value={form.turnover}
            onChange={(e) => setForm({ ...form, turnover: e.target.value })}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 outline-none focus:ring-1 focus:ring-red-600 appearance-none"
          >
            <option value="">please select</option>
            {companyTurnoverOptions.map((t) => <option key={t}>{t}</option>)}
          </select>
        </div>
      </div>

      {/* SERVICES */}
      <div>
        <label className="text-xs font-semibold block mb-2">WHAT SERVICES ARE YOU LOOKING FOR?</label>
        <div className="flex flex-wrap gap-2">
          {["SEO", "Lead Generation/PPC", "Social Media Management", "Website Design", "E-Commerce", "Other"].map((service) => (
            <label key={service} className={`flex items-center gap-2 px-3 py-2 rounded-full border cursor-pointer
              ${form.servicesArray.includes(service)
                ? "border-red-600 text-red-600"
                : "border-gray-300 text-gray-700"
              }`}
            >
              <input
                type="checkbox"
                className="hidden"
                checked={form.servicesArray.includes(service)}
                onChange={() => {
                  if (form.servicesArray.includes(service)) {
                    setForm({ ...form, servicesArray: form.servicesArray.filter((s) => s !== service) });
                  } else {
                    setForm({ ...form, servicesArray: [...form.servicesArray, service] });
                  }
                }}
              />
              <span className={`w-3 h-3 rounded-full border
                ${form.servicesArray.includes(service) ? "bg-red-600 border-red-600" : "border-gray-400"}`}>
              </span>
              {service}
            </label>
          ))}
        </div>
        {form.servicesArray.includes("Other") && (
          <input
            placeholder="Please specify other service"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-3 outline-none focus:ring-1 focus:ring-red-600"
            value={form.otherService}
            onChange={(e) => setForm({ ...form, otherService: e.target.value })}
          />
        )}
      </div>

      {/* BUDGET + START TIMELINE */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-semibold">MONTHLY BUDGET (₹)</label>
          <select
            required
            value={form.budget}
            onChange={(e) => setForm({ ...form, budget: e.target.value })}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 outline-none focus:ring-1 focus:ring-red-600 appearance-none"
          >
            <option value="">please select</option>
            {monthlyBudgetOptions.map((b) => <option key={b}>{b}</option>)}
          </select>
        </div>

        <div>
          <label className="text-xs font-semibold">HOW SOON WOULD YOU LIKE TO GET STARTED?</label>
          <select
            required
            value={form.start}
            onChange={(e) => setForm({ ...form, start: e.target.value })}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 outline-none focus:ring-1 focus:ring-red-600 appearance-none"
          >
            <option value="">please select</option>
            {startOptions.map((s) => <option key={s}>{s}</option>)}
          </select>
        </div>
      </div>

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
          <label className="text-xs font-semibold">PREFERRED TIMEZONE</label>
          <select
            required
            value={form.timezone}
            onChange={(e) => setForm({ ...form, timezone: e.target.value })}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 outline-none focus:ring-1 focus:ring-red-600 appearance-none"
          >
            {timezones.map((t) => <option key={t}>{t}</option>)}
          </select>
        </div>

        <div>
          <label className="text-xs font-semibold">PREFERRED MODE</label>
          <select
            required
            value={form.mode}
            onChange={(e) => setForm({ ...form, mode: e.target.value })}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 outline-none focus:ring-1 focus:ring-red-600 appearance-none"
          >
            <option value="">please select</option>
            {preferredModes.map((m) => <option key={m}>{m}</option>)}
          </select>
        </div>
      </div>

      {/* MESSAGE */}
      <div>
        <label className="text-xs font-semibold">MESSAGE</label>
        <textarea
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 outline-none focus:ring-1 focus:ring-red-600"
        />
      </div>

      {/* RECAPTCHA */}
      <div>
        <div className="g-recaptcha" data-sitekey="6LelVTssAAAAAFkcDvx1KtV_qduaXCBgEPu0eaGx"></div>
      </div>

      {/* SUBMIT */}
      <div className="md:col-span-2 flex justify-start">
        <button className="px-8 py-3 rounded-full bg-red-600 text-white hover:bg-red-700 transition">
          Submit
        </button>
      </div>

    </form>
  );
};

export default ContactForm;
