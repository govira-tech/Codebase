"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer/Footer";
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
export default function BrandingPage() {
  return (
    <main className="pt-32 bg-white">
      {/* Breadcrumb + Hero */}
      <section className="mx-auto max-w-6xl px-6 mb-16">
        <nav className="text-sm text-gray-800 mb-4">
          <Link href="/" className="hover:text-red-500 font-bold">Home</Link> &gt;{" "}
          <Link href="/services" className="hover:text-red-500 font-bold">Services</Link> &gt;{" "}
          <span className="font-semibold text-gray-500">Logo & Brand Book</span>
        </nav>

        <h1 className="text-5xl md:text-4xl font-semibold text-red-500 mb-4">
          Logo & Brand Book Design Services
        </h1>
        <p className="text-2xl text-gray-700 mb-6">
          Craft a Brand Identity that Speaks Volumes
        </p>

        <p className="text-lg text-gray-600 max-w-6xl">
          At Govira Technologies, we don't just design logos — we craft lasting brand identities
          that resonate deeply with your audience. Whether you're a startup looking to make a strong
          first impression or an established company rebranding, our solutions bring your vision to life.
        </p>
      </section>

      {/* Services Offered */}
      <section className="mx-auto max-w-6xl px-6 mb-20">
        <h2 className="text-3xl font-semibold mb-8">What We Offer</h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-lg mb-2">Logo Design</h3>
            <p className="text-gray-600">
              Your logo is your brand’s face — unique, memorable, and meaningful. We create logos
              that reflect your values and stand out across all platforms.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-lg mb-2">Brand Book</h3>
            <p className="text-gray-600">
              Defines your logo, colors, typography, and tone — ensuring cohesive, professional
              communication across all channels.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-lg mb-2">Brand Identity Assets</h3>
            <p className="text-gray-600">
              We bring your brand to life through functional and impactful assets — business cards,
              packaging, social media graphics, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Why Branding Matters */}
      <section className="mx-auto max-w-6xl px-6 mb-20">
        <h2 className="text-3xl font-semibold mb-6">Why Branding Matters</h2>
        <p className="text-gray-600 max-w-6xl">
          In a crowded marketplace, your brand is more than a logo — it's your promise, values, and story.
          Strategic branding builds trust, creates emotional connections, and separates you from the competition.
          At Govira, we ensure your branding is strategic, emotional, and consistent across all mediums.
        </p>
      </section>

      {/* Our Process */}
      <section className="mx-auto max-w-6xl px-6 mb-20">
        <h2 className="text-3xl font-semibold mb-8 text-center">Our Branding Process</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold mb-2">Discovery & Briefing</h3>
            <p className="text-gray-600">We understand your brand goals, values, and audience through detailed discussions and a creative brief.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold mb-2">Research & Moodboarding</h3>
            <p className="text-gray-600">We explore your industry, competitors, and design directions to build moodboards that set the tone.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold mb-2">Logo Concepts & Feedback Loops</h3>
            <p className="text-gray-600">We present initial logo options and refine them based on your input through structured feedback rounds.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold mb-2">Brand Book Creation</h3>
            <p className="text-gray-600">We compile your visual identity into a brand book — covering logo use, colors, fonts, and tone.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold mb-2">Final Delivery & Launch Support</h3>
            <p className="text-gray-600">All final assets are delivered in ready-to-use formats, with optional support for a smooth brand rollout.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-20 text-center px-6 mb-20">
        <h2 className="text-3xl font-semibold mb-6">Let’s Design a Brand That Speaks for You</h2>
        <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
          Whether starting from scratch or refreshing your brand, Govira Technologies is your creative partner in building a bold, consistent, and unforgettable identity.
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

      {/* PRE-FOOTER + FOOTER */}
      <Footer />
    </main>
  );
}
