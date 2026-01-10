"use client";

import React from "react";
import Link from "next/link";
import {
  FaBullhorn,
  FaChartLine,
  FaUsers,
  FaRocket,
  FaEnvelopeOpenText,
  FaGoogle,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Footer from "@/components/footer/Footer";
type FooterLink = {
  label: string;
  href: string;
};
const footerWebsiteServices: FooterLink[] = [
  { label: "Web Design", href: "/services/web-design" },
  { label: "E-Commerce", href: "/services/seo" },
  { label: "CRM Solutions", href: "/services/ppc" },
  { label: "Lead Management", href: "/services/lead-generation-campaigns" },
];

const footerIndustries: FooterLink[] = [
  { label: "Real Estate", href: "/industries/real-estate" },
  { label: "Healthcare & Education", href: "/industries/healthcare-education" },
  { label: "Flooring Businesses", href: "/industries/flooring-businesses" },
  { label: "Banking & Finance", href: "/industries/banking-finance" },
];

const footerDigitalMarketing: FooterLink[] = [
  { label: "SEO Services", href: "/services/seo" },
  { label: "PPC Services", href: "/services/ppc-services" },
  { label: "Social Media Marketing", href: "/services/social-media-marketing" },
  { label: "Content Writing", href: "/services/content-writing" },
  { label: "Email Marketing", href: "/services/email-marketing" },
];
const platforms = [
  { title: "Google Ads", icon: <FaGoogle size={28} /> },
  { title: "Meta Ads (Facebook & Instagram)", icon: <FaFacebookF size={28} /> },
  { title: "LinkedIn Campaigns", icon: <FaLinkedinIn size={28} /> },
  { title: "YouTube Ads", icon: <FaYoutube size={28} /> },
  { title: "Email Marketing", icon: <FaEnvelopeOpenText size={28} /> },
];

const leadBenefits = [
  {
    title: "Optimize Your Marketing ROI",
    icon: <FaChartLine size={32} />,
    desc: "With analytics, A/B testing, and behavioral targeting, we continuously refine campaigns to improve conversions and lower acquisition costs.",
  },
  {
    title: "Attract, Nurture & Convert",
    icon: <FaUsers size={32} />,
    desc: "We guide the right audience through SEO, PPC, landing pages, social media, and email marketing—customized for your business goals.",
  },
  {
    title: "Better Leads, Better Sales",
    icon: <FaRocket size={32} />,
    desc: "Our intent-driven targeting ensures sales-ready prospects enter your pipeline, improving close rates and sales efficiency.",
  },
];

export default function LeadGenerationPage() {
  return (
    <main className="pt-32 bg-white">

      {/* BREADCRUMB + HERO */}
      <section className="mx-auto max-w-6xl px-6 mb-12">
        <nav className="text-sm text-gray-800 mb-4">
          <Link href="/" className="hover:text-red-500 font-bold">Home</Link> &gt;{" "}
          <Link href="/services" className="hover:text-red-500 font-bold">Services</Link> &gt;{" "}
          <span className="font-semibold text-gray-500">Lead Generation Campaigns</span>
        </nav>

        <h1 className="text-5xl md:text-4xl font-semibold text-red-500">
          Lead Generation Campaigns
        </h1>

        <h2 className="mt-3 text-2xl font-semibold text-gray-800">
          Driving Quality Leads with Precision
        </h2>

        <p className="mt-4 text-lg text-gray-600 max-w-7xl">
          In today’s digital-first world, consistent lead generation is essential for scaling your sales pipeline. At Govira, we design result-driven lead generation campaigns that help businesses attract the right audience, capture genuine interest, and convert prospects into qualified leads through targeted digital channels. By combining smart strategy, data-driven insights, and creative execution, Govira delivers measurable growth and long-term business value.
        </p>
      </section>

      {/* PLATFORMS SECTION */}
      <section className="mt-12 mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Powering Outreach through Multiple Platforms
        </h2>

        <p className="text-lg text-gray-600 text-center max-w-5xl mx-auto mb-12">
          A powerful lead generation campaign reaches potential buyers where they spend their time—maximizing visibility, engagement, and conversions across digital channels such as Google Ads, Meta (Facebook & Instagram), LinkedIn, YouTube, and email marketing.
        </p>
      </section>

      {/* BENEFITS / APPROACH */}
      <section className="mt-20 mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold text-center text-red-500 mb-12">
          Ensuring Flawless Execution
        </h2>

        <div className="grid sm:grid-cols-3 gap-12">
          {leadBenefits.map((item) => (
            <div
              key={item.title}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center"
            >
              <div className="text-red-600 flex justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-600 mt-4">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PARTNER WITH GOVIRA */}
      <section className="mt-20 mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Unlocking Sales Potential
        </h2>

        <p className="text-lg text-gray-600 text-center max-w-6xl mx-auto mb-6">
          At Govira, we don’t just run ads—we build scalable lead engines. From strategic planning and precise execution to continuous real-time optimization, our team ensures every campaign is designed to deliver measurable results. Whether you’re launching a new product or expanding your market presence, we help you consistently fill your sales funnel with high-quality, conversion-ready leads.
        </p>
        {/* WHY LEAD GENERATION MATTERS */}
        <section className="mt-20 mx-auto max-w-6xl px-6 pb-20">
          <h2 className="text-3xl font-semibold text-center text-red-500 mb-6">
            Why Lead Generation Matters
          </h2>

          <p className="text-lg text-gray-600 text-center max-w-6xl mx-auto">
            In a world where attention defines success, lead generation campaigns put your brand in front of the right people at the right time. Don’t wait for customers to find you—let Govira bring the right audience straight to your door.
          </p>
        </section>
        <div className="flex justify-center gap-6 flex-wrap">
          <Link
            href="/contact"
            className="rounded-full bg-red-600 px-8 py-3 text-white hover:bg-red-700 transition"
          >
            Get Started
          </Link>

          <a
            href="https://wa.me/91 9701935111"
            className="rounded-full border border-green-600 px-8 py-3 text-green-600 hover:bg-green-600 hover:text-white transition"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>

      {/* PRE-FOOTER + FOOTER */}
      <Footer />
    </main>
  );
}
