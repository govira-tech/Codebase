"use client";

import React from "react";
import Link from "next/link";
import Footer from "@/components/footer/Footer";
import { FaBullhorn, FaShoppingCart, FaChartLine, FaUsers, FaDollarSign, FaLaptop, FaClipboardCheck, FaHandshake, FaEnvelope } from "react-icons/fa";

const strategies = [
  { title: "Targeted Ad Campaigns", desc: "Reach specific buyer personas", icon: <FaBullhorn size={28} /> },
  { title: "E-Commerce Optimization", desc: "Better product visibility and conversions", icon: <FaShoppingCart size={28} /> },
  { title: "Product-Centric SEO", desc: "Rank higher on search engines and marketplaces", icon: <FaChartLine size={28} /> },
  { title: "Influencer & Affiliate Marketing", desc: "Build brand trust and awareness", icon: <FaUsers size={28} /> },
  { title: "Social Media Storytelling", desc: "Engage audience and showcase products", icon: <FaEnvelope size={28} /> },
  { title: "Performance Tracking & Analytics", desc: "Real-time insights and ROI improvement", icon: <FaDollarSign size={28} /> },
  { title: "Conversion Rate Optimization (CRO)", desc: "Turn clicks into customers", icon: <FaLaptop size={28} /> },
  { title: "Reputation & Review Management", desc: "Build trust and credibility", icon: <FaClipboardCheck size={28} /> },
  { title: "Personalized Content Marketing", desc: "For both B2C and B2B audiences", icon: <FaHandshake size={28} /> },
];

const salesPoints = [
  { title: "Online Presence", desc: "A well-optimized website and SEO ensure your products are easily found by potential customers." },
  { title: "Digital Marketing", desc: "Target decision-makers through LinkedIn ads, email campaigns, and industry-specific content." },
  { title: "Capabilities", desc: "Showcase capabilities effectively using product videos, case studies, and virtual plant tours." },
  { title: "Leads with Automation", desc: "Email workflows and CRM integration help move prospects through the sales funnel efficiently." },
  { title: "Data-Driven Decisions", desc: "Track buyer behavior and campaign performance to refine strategies and improve ROI." },
];

export default function RetailManufacturingPage() {
  return (
    <main className="pt-32 bg-white">

      {/* BREADCRUMB + HERO */}
      <section className="mx-auto max-w-6xl px-6 mb-16">
        <nav className="text-sm text-gray-800 mb-4">
          <Link href="/" className="hover:text-red-500 font-bold">Home</Link> &gt;{" "}
          <Link href="/industries" className="hover:text-red-500 font-bold">Industries</Link> &gt;{" "}
          <span className="font-semibold text-gray-500">Retail & Manufacturing</span>
        </nav>

        <h1 className="text-5xl md:text-4xl font-semibold text-red-500 mb-4">
          Digital Marketing for Retail & Manufacturing Companies
        </h1>

        <p className="text-lg text-gray-600 max-w-5xl">
          Marketing a manufacturing or retail business starts with understanding the type of products and the needs of your customers. Whether you offer commodity goods or customized solutions, your marketing strategy must adapt to your customers’ preferences and buying behaviors.
        </p>

        <p className="mt-4 text-gray-600 max-w-5xl">
          At Govira, we design strategies that help manufacturers and retailers align their products with market demand, improve visibility, and drive sales efficiently in today’s competitive environment.
        </p>
      </section>

      {/* STRATEGIES SECTION */}
      <section className="mx-auto max-w-6xl px-6 mb-20">
        <h2 className="text-3xl font-semibold text-center mb-14">
          Our Retail & Manufacturing Strategies
        </h2>

        <p className="text-gray-600 text-lg text-center max-w-4xl mx-auto mb-12">
          In today’s rapidly evolving market, businesses must adopt innovative strategies to stay ahead. Here’s how we help our clients succeed:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 border-t border-l border-r [&:nth-last-child(-n+3)]:border border-red-600">
          {strategies.map((item, index) => (
            <div
              key={item.title}
              className="
                relative p-8 border-red-600 border-b border-r flex flex-col items-center text-center
                md:[&:nth-child(3n)]:border-r-0
                [&:nth-last-child(-n+3)]:border-b-0
              "
            >
              <div className="text-red-500 mb-3">{item.icon}</div>
              <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SALES BOOST SECTION */}
      <section className="mx-auto max-w-6xl px-6 mb-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* LEFT SIDE (Sticky wrapper) */}
          <div className="lg:sticky lg:top-32 lg:h-fit space-y-6">
            <h2 className="text-3xl font-semibold text-left">
              How Manufacturing Companies <br />
              Can Increase Sales
            </h2>

            <p className="text-gray-600 text-lg">
              Manufacturing companies can boost sales by adopting targeted digital
              strategies that enhance visibility, attract the right buyers, and
              streamline the customer journey.
            </p>
          </div>

          {/* Right side points 3x2 table */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border-t border-l border-red-600">
            {salesPoints.map((item, index) => (
              <div
                key={item.title}
                className="relative p-6 border-red-600 border-b border-r"
              >
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE MAKE THINGS EASY */}
      <section className="mx-auto max-w-6xl px-6 mb-24">
        <h2 className="text-3xl font-semibold text-center mb-8">
          How We Make Things Easy
        </h2>

        <p className="text-gray-600 text-lg max-w-4xl mx-auto text-center">
          At Govira, every client gets a tailored plan. We start with a detailed research process, then create an actionable strategy that drives customer satisfaction, expands reach, and maximizes profits for manufacturers & retailers alike.
        </p>
      </section>
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
      <Footer />
    </main>
  );
}
