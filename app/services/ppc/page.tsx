"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaSearch,
  FaLock,
  FaPalette,
  FaCogs,
} from "react-icons/fa";
import {
  FaUsers,
  FaLightbulb,
  FaBullhorn,
  FaHandshake,
} from "react-icons/fa";
import {
  FaPenNib,
  FaGoogle,
  FaChartLine,
  FaYoutube,
  FaFacebookF, FaInstagram, FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useEffect, useState } from "react";
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
const whyChoosePPC = [
  "Customized PPC campaigns tailored to your business goals",
  "ROI-focused strategies to maximize every ad spend",
  "Multi-platform expertise: Google, Meta, YouTube, and more",
  "Continuous tracking and optimization for measurable results",
];

const ppcServices = [
  {
    title: "Google Ads Management",
    desc: "From keyword research to ad copy and bidding, we manage Search, Display, Shopping, and YouTube campaigns to deliver real results.",
    icon: <FaGoogle size={28} />,
  },
  {
    title: "Meta Ads (Facebook & Instagram)",
    desc: "Reach your audience by demographics, interests, and behavior. We create ads that engage and convert.",
    icon: <FaFacebookF size={28} />,
  },
  {
    title: "Retargeting Ads",
    desc: "Bring back previous visitors and abandoned carts, boosting conversions and reducing lost opportunities.",
    icon: <FaChartLine size={28} />,
  },
  {
    title: "Landing Page Optimization",
    desc: "Clicks are useless without conversions. We design fast, mobile-friendly landing pages that convert visitors into customers.",
    icon: <FaYoutube size={28} />,
  },
  {
    title: "Conversion Tracking & Reporting",
    desc: "Track every click and conversion. Get clear reports with actionable insights to improve your campaigns.",
    icon: <FaInstagram size={28} />,
  },
];

export default function PPCPage() {
  return (
    <main className="pt-32 bg-white">
      {/* Breadcrumb + Hero */}
      <section className="mx-auto max-w-6xl px-6 mb-16">
        <nav className="text-sm text-gray-800 mb-4">
          <Link href="/" className="hover:text-red-500 font-bold">Home</Link> &gt;{" "}
          <Link href="/services" className="hover:text-red-500 font-bold">Services</Link> &gt;{" "}
          <span className="font-semibold text-gray-500">PPC</span>
        </nav>

        <h1 className="text-5xl md:text-4xl font-semibold text-red-500">
          Best PPC Agency in Vizag & Hyderabad
        </h1>

        <p className="mt-4 text-lg text-gray-600 max-w-6xl">
          Unlock growth with Govira Technologies. We help startups and growing businesses run effective PPC campaigns on Google, Meta, YouTube, and more, driving traffic, leads, and measurable ROI.
        </p>
      </section>

      {/* Why Choose Govira */}
      <section className="mx-auto max-w-6xl px-6 mb-20">
        <h2 className="text-3xl font-semibold mb-8">Why Choose Govira for PPC</h2>
        <ul className="grid sm:grid-cols-2 gap-4 text-gray-700">
          {whyChoosePPC.map((item) => (
            <li key={item} className="bg-white p-5 rounded-xl shadow flex items-start gap-3">
              <span className="text-red-600 font-bold">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* PPC Services Grid */}
      <section className="mx-auto max-w-6xl px-6 mb-20">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Our PPC Services
        </h2>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          {ppcServices.map((service) => (
            <div
              key={service.title}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-red-600">{service.icon}</span>
                <div className="h-[28px] w-[2px] bg-gray-900" />
                <h3 className="font-semibold text-lg">{service.title}</h3>
              </div>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How Govira Helps + Benefits Side by Side */}
      <section className="mx-auto max-w-6xl px-6 mb-20">
        <div className="grid md:grid-cols-2 gap-12">
          {/* How Govira Helps */}
          <div>
            <h2 className="text-3xl font-semibold mb-6">How Govira Helps Clients Succeed</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-3">
              <li>Reduce ad spend while maintaining or increasing traffic</li>
              <li>Optimize ad copy and targeting for better CTR</li>
              <li>Improve quality scores and overall campaign performance</li>
              <li>Deliver cost-effective campaigns with measurable ROI</li>
              <li>Provide transparent reporting and actionable insights</li>
            </ul>
          </div>

          {/* Benefits */}
          <div>
            <h2 className="text-3xl font-semibold mb-6">Benefits of Govira PPC Management</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-3">
              <li>Expert guidance from a dedicated PPC team</li>
              <li>Custom strategies designed for your business goals</li>
              <li>Continuous testing and optimization for best results</li>
              <li>Competitor analysis to outrank rivals effectively</li>
              <li>Latest technology for efficient campaign management</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="mx-auto max-w-6xl px-6 mb-20 text-center">
        <h2 className="text-4xl font-semibold text-red-500 mb-6">
          Ready to Turn Clicks into Customers?
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
          Let Govira Technologies help you run smarter, faster, and more profitable PPC campaigns. Whether you're a startup or a growing business, we create strategies that deliver real results.
        </p>
        <div className="flex justify-center gap-6 flex-wrap">
          <Link href="/contact" className="rounded-full bg-red-600 px-8 py-3 text-white hover:bg-red-700 transition">
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
      <Footer />
    </main>
  );
}
