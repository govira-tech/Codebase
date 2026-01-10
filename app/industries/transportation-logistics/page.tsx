"use client";

import React from "react";
import Link from "next/link";
import { FaChartLine, FaBullhorn, FaSearch, FaDesktop, FaUsers, FaFileAlt } from "react-icons/fa";
import Footer from "@/components/footer/Footer";

const strategies = [
  {
    title: "Website & Landing Page Development",
    desc: "Create optimized websites and landing pages tailored for logistics services.",
    icon: <FaDesktop size={24} />,
  },
  {
    title: "SEO & Local Search Optimization",
    desc: "Ensure your business ranks higher locally and in search engines for targeted queries.",
    icon: <FaSearch size={24} />,
  },
  {
    title: "Google Ads & LinkedIn Lead Generation",
    desc: "Reach decision-makers through paid campaigns that deliver measurable leads.",
    icon: <FaBullhorn size={24} />,
  },
  {
    title: "Content Marketing",
    desc: "Educate your audience with helpful and engaging logistics-related content.",
    icon: <FaFileAlt size={24} />,
  },
  {
    title: "Analytics & Performance Dashboards",
    desc: "Track KPIs and measure ROI with real-time dashboards for informed decisions.",
    icon: <FaChartLine size={24} />,
  },
  {
    title: "Customer Engagement & CRM",
    desc: "Manage client relationships effectively and nurture leads into loyal customers.",
    icon: <FaUsers size={24} />,
  },
];

export default function TransportLogisticsPage() {
  return (
    <main className="pt-32 bg-white">

      {/* BREADCRUMB + HERO */}
      <section className="mx-auto max-w-6xl px-6 mb-16">
        <nav className="text-sm text-gray-800 mb-4">
          <Link href="/" className="hover:text-red-500 font-bold">Home</Link> &gt;{" "}
          <Link href="/industries" className="hover:text-red-500 font-bold">Industries</Link> &gt;{" "}
          <span className="font-semibold text-gray-500">Transport & Logistics</span>
        </nav>

        <h1 className="text-5xl md:text-4xl font-semibold text-red-500 mb-4">
          Transport & Logistics Marketing
        </h1>

        <p className="text-lg text-gray-600 max-w-5xl">
          The Transport and Logistics industries are continuously evolving, seeking higher productivity and profitability. While transportation focuses on moving goods efficiently, logistics encompasses end-to-end flow management—including storage, inventory, handling, and packaging. Efficient digital marketing is essential for companies to stay competitive, optimize operations, and reach their target clients effectively.
        </p>
      </section>

      {/* STRATEGIES TABLE */}
      <section className="mx-auto max-w-6xl px-6 mb-24">
        <h2 className="text-3xl font-semibold text-center mb-14">
          Promotion Amid Disruption
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 border-t border-l border-red-600">
          {strategies.map((item, index) => (
            <div
              key={item.title}
              className="relative p-6 border-red-600 border-b border-r flex flex-col items-start"
            >
              {/* Icon */}
              <div className="text-red-600 mb-3">{item.icon}</div>
              {/* Title */}
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              {/* Description */}
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY GOVIRA */}
      <section className="mx-auto max-w-6xl px-6 mb-24">
        <h2 className="text-3xl font-semibold text-red-500 mb-8 text-center">
          Why Choose Govira
        </h2>

        <p className="text-gray-600 text-lg max-w-4xl mx-auto text-center mb-12">
          Govira is a trusted partner for Transport & Logistics companies looking to scale digitally. Our experienced team develops result-driven strategies that align with the latest technology, ensuring your online presence is strong, visible, and engaging. We specialize in targeted keyword strategies, SEO, and digital campaigns that deliver measurable growth and increased sales.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-lg mb-2">Expertise in T&L Sector</h3>
            <p className="text-gray-600">
              Speed up your digital transformation with our deep industry knowledge and tailored marketing solutions.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-lg mb-2">Result-Oriented Campaigns</h3>
            <p className="text-gray-600">
              Exclusive strategies designed to achieve online targets and measurable ROI for your business.
            </p>
          </div>
        </div>
      </section>

      {/* MORE BENEFITS */}
      <section className="mx-auto max-w-6xl px-6 mb-16">
        <h2 className="text-3xl font-semibold text-center mb-8 text-gray-900">
          More Benefits with Govira
        </h2>

        <p className="text-gray-600 text-lg max-w-5xl mx-auto text-center mb-6">
          Beyond traditional marketing, Govira provides cost-effective digital campaigns that deliver tangible results. Our SEO and SMO services follow the latest search engine trends, helping you stay ahead of competitors. With data-driven insights and strategic planning, we ensure your Transport & Logistics business reaches its full digital potential.
        </p>

        <ul className="list-disc list-inside text-gray-600 max-w-3xl mx-auto space-y-2 text-lg">
          <li className='w-full text-left'>Enhanced visibility through tailored SEO strategies.</li>
          <li className='w-full text-left'>Targeted digital campaigns reaching the right audience.</li>
          <li className='w-full text-left'>Data-driven insights for optimized marketing decisions.</li>
          <li className='w-full text-left'>Strengthened brand authority and credibility in your niche.</li>
          <li className='w-full text-left'>Continuous performance monitoring and campaign refinement.</li>
        </ul>
      </section>
      {/* CTA SECTION */}
      <section className="mx-auto max-w-6xl px-6 mb-22 text-center">
        <h2 className="text-3xl font-semibold text-red-500 mb-6">
          Elevate Your Transport & Logistics Business with Govira
        </h2> 
        <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-8">
          Partner with Govira to unlock the full potential of digital marketing for your Transport & Logistics company. Our customized strategies are designed to enhance your online presence, attract quality leads, and drive sustainable growth in a competitive market.
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
      <Footer />
    </main>
  );
}
