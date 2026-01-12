"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaBullhorn,
  FaPalette,
  FaChartLine,
  FaUsers,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

type FooterLink = {
  label: string;
  href: string;
};

const footerWebsiteServices = [
  { label: "Web Design", href: "/services/web-design" },
  { label: "Logo & Brand Book", href: "/services/branding" },
  { label: "E-Commerce Website", href: "/services/e-commerce" },
  { label: "CRM System", href: "/services/crm" },
  { label: "Lead Management", href: "/services/lead-generation-campaigns" },
];

const footerIndustries = [
  { label: "Real Estate", href: "/industries/real-estate" },
  { label: "Banking & Financial", href: "/industries/banking-finance" },
  { label: "Education & Healthcare", href: "/industries/education-healthcare" },
  { label: "Retail & Manufacturing", href: "/industries/retail-manufacturing" },
  { label: "Travel & Hospitality", href: "/industries/travel-hospitality" },
  { label: "Transportation & Logistics", href: "/industries/transport-logistics" },
];

const footerDigitalMarketing = [
  { label: "SEO Services", href: "/services/seo" },
  { label: "Lead Generation", href: "/services/lead-generation" },
  { label: "Social Media Marketing", href: "/services/social-media" },
  { label: "PPC Services", href: "/services/ppc" },
  { label: "Content Marketing", href: "/services/content-marketing" },
  { label: "Email Marketing", href: "/services/email-marketing" },
  { label: "Conversion Rate Optimization", href: "/services/conversion-optimization" },
];

const creatives = [
  {
    title: "Brand Awareness Creatives",
    desc: "Eye-catching visuals designed to build recognition and establish brand identity.",
  },
  {
    title: "Product Launch Campaigns",
    desc: "High-impact launch creatives that highlight features and drive curiosity.",
  },
  {
    title: "Festival & Seasonal Ads",
    desc: "Timely creatives crafted for festive moments and special occasions.",
  },
  {
    title: "Promotional & Offer Ads",
    desc: "Sales-focused designs optimized for clicks, leads, and conversions.",
  },
  {
    title: "Instagram & Facebook Posts",
    desc: "Scroll-stopping posts designed for engagement and consistency.",
  },
  {
    title: "Story & Reel Creatives",
    desc: "Vertical-first designs built for attention and fast consumption.",
  },
];

const whyGoviraCreatives = [
  {
    title: "Creative-First Approach",
    icon: <FaPalette size={28} />,
    desc: "We blend design trends with brand strategy to create meaningful visuals.",
  },
  {
    title: "Startup Agility",
    icon: <FaUsers size={28} />,
    desc: "As a young team, we move fast, adapt quickly, and experiment smartly.",
  },
  {
    title: "Marketing-Aligned Designs",
    icon: <FaBullhorn size={28} />,
    desc: "Every creative supports a clear marketing goal—not just aesthetics.",
  },
  {
    title: "Growth-Focused Mindset",
    icon: <FaChartLine size={28} />,
    desc: "Our designs are built to support engagement, reach, and brand growth.",
  },
];

export default function SocialCreativesPortfolioPage() {
  return (
    <main className="pt-32 bg-white">

      {/* BREADCRUMB + HERO */}
      <section className="mx-auto max-w-6xl px-6 mb-16">
        <nav className="text-sm text-gray-800 mb-4">
          <Link href="/" className="hover:text-red-500 font-bold">Home</Link> &gt;{" "}
          <Link href="/portfolio" className="hover:text-red-500 font-bold">Portfolio</Link> &gt;{" "}
          <span className="font-semibold text-gray-500">SMO Creatives & Ads</span>
        </nav>

        <h1 className="text-5xl md:text-4xl font-semibold text-red-500 mb-4">
          SMO Creatives & Ads
        </h1>

        <p className="text-lg text-gray-600 max-w-5xl">
          Our ad creatives and social media designs are crafted to make an impact—
          both visually and strategically. From product launches and festival
          campaigns to brand awareness ads, we create content that captures
          attention, strengthens brand identity, and aligns with your marketing goals.
        </p>
      </section>

      {/* WHAT WE DESIGN – CLEAN 2x3 GRID WITH NUMBERS */}
      <section className="mx-auto max-w-6xl px-6 mb-24">
        <h2 className="text-3xl font-semibold text-center mb-14">
          Types of SMO Creatives We Design
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0">
          {creatives.map((item, index) => (
            <div
              key={item.title}
              className="
          relative
          p-8
          border-red-600
          border-t
          border-l
          md:[&:nth-child(3n)]:border-r
          [&:nth-last-child(-n+3)]:border-b
        "
            >
              {/* Number */}
              <span className="absolute top-5 right-5 text-2xl font-semibold text-red-400">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* STARTUP POSITIONING */}
      <section className="mx-auto max-w-6xl px-6 mb-24">
        <h2 className="text-3xl font-semibold text-center text-red-500 mb-8">
          Why Brands Choose Govira for Social Creatives
        </h2>

        <p className="text-lg text-gray-600 max-w-6xl mx-auto text-center mb-12">
          Govira Technologies brings fresh creativity, modern design thinking,
          and a results-driven mindset.
          We understand current trends, platform algorithms, and audience behavior,
          helping brands stand out in a crowded digital space.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {whyGoviraCreatives.map((item) => (
            <div
              key={item.title}
              className="bg-white p-6 rounded-xl shadow flex gap-4 hover:shadow-lg transition"
            >
              <div className="text-red-600 mt-1">{item.icon}</div>
              <div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-20 text-center px-6">
        <h2 className="text-3xl font-semibold mb-6">
          Want Creatives That Actually Perform?
        </h2>
        <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
          Whether you’re launching a new brand, promoting an offer,
          or building long-term awareness, our SMO creatives are designed
          to engage your audience and support your growth goals.
        </p>
        <div className="flex justify-center gap-6 flex-wrap">
          <Link
            href="/contact"
            className="rounded-full bg-red-600 px-8 py-3 text-white hover:bg-red-700 transition"
          >
            Contact Us
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
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 grid gap-16 lg:grid-cols-5">

          {/* BRAND */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Govira</h3>
            <p className="text-[var(--muted)] mb-6">
              Empowering your digital growth with expert solutions.
            </p>

            <p className="font-medium mb-2">Follow Us</p>
            <div className="flex gap-4 text-xl text-[var(--muted)]">
              <FaFacebookF />
              <FaInstagram />
              <FaXTwitter />
              <FaLinkedinIn />
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2 text-[var(--muted)]">
              <li><Link href="/">Home</Link></li>
              { /* <li><Link href="/about">About Us</Link></li> */}
              <li><Link href="/services">Our Services</Link></li>
              <li><Link href="/industries">Industries</Link></li>
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/faqs">FAQs</Link></li>
            </ul>
          </div>

          {/* WEBSITE SERVICES */}
          <div>
            <h4 className="font-medium mb-4">Website Services</h4>
            <ul className="space-y-2 text-[var(--muted)]">
              {footerWebsiteServices.map((item) => (
                <li key={item.href}><Link href={item.href}>{item.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* INDUSTRIES */}
          <div>
            <h4 className="font-medium mb-4">Industries We Serve</h4>
            <ul className="space-y-2 text-[var(--muted)]">
              {footerIndustries.map((item) => (
                <li key={item.href}><Link href={item.href}>{item.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* DIGITAL MARKETING */}
          <div>
            <h4 className="font-medium mb-4">Digital Marketing</h4>
            <ul className="space-y-2 text-[var(--muted)]">
              {footerDigitalMarketing.map((item) => (
                <li key={item.href}><Link href={item.href}>{item.label}</Link></li>
              ))}
            </ul>

            <div className="mt-6">
              <p className="font-medium">Reach out to us anytime</p>
              <a href="mailto:support@govira.tech" className="block text-gray-500 hover:text-red-600">
                support@govira.tech
              </a>
              <a href="tel:+91 97019 35111" className="block text-gray-500 hover:text-red-600">
                INDIA +91 97019 35111, +91 92466 18353
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER BOTTOM */}
      <footer className="bg-neutral-900 text-white pt-12">
        <div className="mx-auto max-w-7xl px-6 text-center text-gray-400">
          <p>Govira Technologies Solutions – Empowering your Digital Growth with Expert Solutions</p>
          <div className="mt-2 flex flex-wrap justify-center gap-6 text-sm">
            <a href="/services" className="hover:text-white">Services</a>
            <a href="/industries" className="hover:text-white">Industries</a>
            <a href="/portfolio" className="hover:text-white">Portfolio</a>
            <a href="/contact" className="hover:text-white">Contact</a>
          </div>
          <p className="mt-2">© 2026 Govira Technologies Solutions. All rights reserved.</p>
        </div>
      </footer>

    </main>
  );
}
