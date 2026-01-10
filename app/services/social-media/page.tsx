"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGift } from "react-icons/fa"; // This exists
// For FaAd, you need a different icon, e.g., FaBullhorn or FaMegaphone
import {
  FaUsers,
  FaLightbulb,
  FaBullhorn,
  FaHandshake,
} from "react-icons/fa";
import {
  FaPenNib,
  FaPencilRuler,
  FaDraftingCompass,
  FaDesktop,
  FaCheckCircle,
  FaClipboardList,
  FaProjectDiagram,
  FaEye,
  FaFacebookF, FaInstagram, FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useEffect, useState } from "react";
import Footer from "@/components/footer/Footer";
type FooterLink = {
  label: string;
  href: string;
};
const uxuiCardsWithIcons = [
  { title: "Interface Design", icon: <FaPencilRuler size={24} /> },
  { title: "Prototyping Design", icon: <FaDraftingCompass size={24} /> },
  { title: "User Testing", icon: <FaUsers size={24} /> },
  { title: "Interactive Design", icon: <FaDesktop size={24} /> },
  { title: "Optimal Design", icon: <FaCheckCircle size={24} /> },
  { title: "Requirement Analysis", icon: <FaClipboardList size={24} /> },
  { title: "Prototype Design", icon: <FaProjectDiagram size={24} /> },
  { title: "Usability Testing", icon: <FaEye size={24} /> },
];
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
const whyChooseSMO = [
  "We have experienced social media marketing experts",
  "We craft tailor-made strategies for your brand",
  "We stay ahead of trends and platform updates",
  "We help increase your brand exposure and engagement",
];

const socialMediaServices = [
  {
    title: "Social Media Management",
    desc: "Strategic planning, scheduling, and publishing to build consistent brand visibility across platforms.",
    icon: <FaBullhorn size={28} />,
  },
  {
    title: "Content Creation",
    desc: "Custom-designed text, visuals, and videos focused on engagement and brand awareness.",
    icon: <FaPenNib size={28} />,
  },
  {
    title: "Community Management & Engagement",
    desc: "Building long-term relationships with followers through timely responses and interaction.",
    icon: <FaUsers size={28} />,
  },
  {
    title: "Influencer Marketing",
    desc: "Partnering with relevant influencers to amplify reach and build authentic trust.",
    icon: <FaHandshake size={28} />,
  },
  {
    title: "Social Media Contests & Promotions",
    desc: "Professionally designed campaigns that boost interaction and brand recall.",
    icon: <FaGift size={28} />,
  },
  {
    title: "Paid Social Media Advertising",
    desc: "Highly targeted ad campaigns focused on engagement, leads, and ROI.",
    icon: <FaBullhorn size={28} />,
  },
];

export default function SocialMediaPage() {
  return (
    <main className="pt-32 bg-white">
      {/* Breadcrumb + Hero */}
      <section className="mx-auto max-w-6xl px-6 mb-16">
        <nav className="text-sm text-gray-800 mb-4">
          <Link href="/" className="hover:text-red-500 font-bold">Home</Link> &gt;{" "}
          <Link href="/services" className="hover:text-red-500 font-bold">Services</Link> &gt;{" "}
          <span className="font-semibold text-gray-500">Social Media</span>
        </nav>

        <h1 className="text-5xl md:text-4xl font-semibold text-red-500">
          Best Social Media Marketing in Vizag & Hyderabad
        </h1>

        <p className="mt-4 text-lg text-gray-600 max-w-6xl">
          Choose the top social media marketing agency in Hyderabad & Vizag.
          At Govira Technologies, we help brands thrive across Facebook, Instagram,
          Twitter, and Pinterest through data-driven, creative social media strategies.
        </p>
      </section>

      {/* Why Choose Govira */}
      <section className="mx-auto max-w-6xl px-6 mb-20">
        <h2 className="text-3xl font-semibold mb-8">Choose SMO Services from Us</h2>
        <ul className="grid sm:grid-cols-2 gap-4 text-gray-700">
          {whyChooseSMO.map((item) => (
            <li
              key={item}
              className="bg-white p-5 rounded-xl shadow flex items-start gap-3"
            >
              <span className="text-red-600 font-bold">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Services Grid */}
      <section className="mx-auto max-w-6xl px-6 mb-20">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Social Media Services Offered by Us
        </h2>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          {socialMediaServices.map((service) => (
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

      {/* Authority Section */}
      <section className="mx-auto max-w-6xl px-6 mb-24">
        <h2 className="text-3xl font-semibold text-center text-red-500 mb-8">
          Best SMO Services in Vizag & Hyderabad
        </h2>

        <p className="text-lg text-gray-600 max-w-6xl mx-auto text-center">
          Govira Technologies takes a holistic approach to social media optimization—
          blending creativity with data-driven insights to expand your reach.
          Through engaging content, eye-catching visuals, and strategic posting,
          we ensure your brand resonates with the right audience and leaves a lasting impact.
          We don’t just manage accounts—we partner in your business growth journey.
        </p>
      </section>

      <div className="mt-10 flex justify-center gap-6">
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

      {/* PRE-FOOTER + FOOTER */}
      <Footer />
    </main>
  );
}
