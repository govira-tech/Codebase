"use client";

import React from "react";
import Link from "next/link";
import { FaSearch, FaChartLine, FaBullhorn, FaUsers, FaGlobe, FaHandshake, FaDollarSign, FaKey } from "react-icons/fa";
import Footer from "@/components/footer/Footer";

// 2x3 Advantages Grid
const advantages = [
  { title: "Social Media", icon: <FaBullhorn size={28} />, desc: "Direct interaction with customers to understand needs and trends." },
  { title: "Online Presence", icon: <FaGlobe size={28} />, desc: "Build a strong financial brand and attract more customers." },
  { title: "Digital Marketing", icon: <FaChartLine size={28} />, desc: "Reach wider audience at lower cost than traditional methods." },
  { title: "Tracking User Behavior", icon: <FaUsers size={28} />, desc: "Improve services based on real-time customer feedback." },
  { title: "Requirement Analysis", icon: <FaHandshake size={28} />, desc: "Stay informed about competitors, market, and customers." },
  { title: "Customer Reach", icon: <FaDollarSign size={28} />, desc: "Expand investment banking reach effectively via digital platforms." },
];

// 2x2 Strategies Cards
const strategies = [
  { title: "SEO", icon: <FaSearch size={28} />, desc: "Top Google ranking through organic strategies for better visibility." },
  { title: "Content Marketing", icon: <FaChartLine size={28} />, desc: "Educate customers and build trust through quality content." },
  { title: "Geofencing & IP Targeting", icon: <FaKey size={28} />, desc: "Target specific groups or regions with precise digital campaigns." },
  { title: "Pay-Per-Click", icon: <FaDollarSign size={28} />, desc: "Pay only when a user clicks, ensuring efficient ad spending." },
];

export default function BankingFinancialPage() {
  return (
    <main className="pt-32 bg-white">

      {/* BREADCRUMB + HERO */}
      <section className="mx-auto max-w-6xl px-6 mb-16">
        <nav className="text-sm text-gray-800 mb-4">
          <Link href="/" className="hover:text-red-500 font-bold">Home</Link> &gt;{" "}
          <Link href="/industries" className="hover:text-red-500 font-bold">Industries</Link> &gt;{" "}
          <span className="font-semibold text-gray-500">Banking & Financial Services</span>
        </nav>

        <h1 className="text-5xl md:text-4xl font-semibold text-red-500 mb-4">
          Digital Marketing Services in Hyderabad for Banks & Finance
        </h1>

        <p className="text-lg text-gray-600 max-w-5xl">
          Digital marketing is booming worldwide, helping businesses connect globally.
          The banking and financial sector, though long-established, must adapt to trends—making modern advertising essential for continued growth and relevance.
        </p>

        <p className="mt-4 text-gray-600 max-w-5xl">
          Digital marketing is a prominent way to promote products. While marketing hasn't been a major focus in BFSI, it’s now essential for banks to stand out. Traditional marketing holds little value as customers increasingly shift to digital platforms.
        </p>
      </section>

      {/* ADVANTAGES 2x3 TABLE WITH ICONS */}
      <section className="mx-auto max-w-6xl px-6 mb-20">
        <h2 className="text-3xl font-semibold text-center mb-14">
          Advantages of Digital Marketing for Banking and Financial Service
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {advantages.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="text-red-600 mt-1">{item.icon}</div>
              <div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DIGITAL MARKETING STRATEGIES 2x2 CARDS */}
      <section className="mx-auto max-w-6xl px-6 mb-20">
        <h2 className="text-3xl font-semibold text-center mb-14">
          Digital Marketing Strategies that Work for Banks and Financial Service Providers
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {strategies.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex gap-4">
              <div className="text-red-600 mt-1">{item.icon}</div>
              <div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT MAKES OUR SEO SERVICES UNIQUE */}
      <section className="mx-auto max-w-6xl px-6 mb-22">
        <h2 className="text-3xl font-semibold text-center mb-8">
          What Makes Our SEO Services Unique?
        </h2>

        <p className="text-gray-600 text-lg max-w-4xl mx-auto text-center">
          Our SEO service is unique because we are unique. We are a group of enthusiastic, energetic, artistic, capable, and interested individuals willing to make things work for you.
          We craft a foolproof plan for our clients along with a few backup strategies for any unforeseen scenarios.
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
      <Footer />
    </main>
  );
}
