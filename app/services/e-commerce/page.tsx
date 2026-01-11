"use client";

import React from "react";
import Link from "next/link";
import {
  FaCartShopping,
  FaBox,
  FaCreditCard,
  FaArrowTrendUp,
  FaWrench,
  FaMobile,
  FaShield,
  FaChartLine,
  FaLock,
  FaRocket,
  FaHeadset,
  FaCircleCheck,
} from "react-icons/fa6";
import Footer from "@/components/footer/Footer";

export default function EcommercePage() {
  const services = [
    {
      icon: <FaCartShopping size={30} />,
      title: "Online Store Development",
      desc: "High-performance e-commerce stores designed to convert visitors into customers.",
    },
    {
      icon: <FaBox size={30} />,
      title: "Product & Inventory Management",
      desc: "Smart product organization, pricing control, and real-time stock management.",
    },
    {
      icon: <FaCreditCard size={30} />,
      title: "Payment Gateway Integration",
      desc: "Secure payments with Razorpay, Stripe, PayPal, UPI, and card integrations.",
    },
    {
      icon: <FaArrowTrendUp size={30} />,
      title: "E-Commerce SEO & Growth",
      desc: "SEO-optimized product pages with analytics-driven growth strategies.",
    },
    {
      icon: <FaWrench size={30} />,
      title: "Maintenance & Optimization",
      desc: "Speed optimization, security updates, and ongoing improvements.",
    },
    {
      icon: <FaMobile size={30} />,
      title: "Mobile Commerce Solutions",
      desc: "Fully responsive and mobile-first shopping experiences.",
    },
  ];

  const features = [
    "Mobile-first & responsive design",
    "Secure & PCI-compliant payments",
    "Advanced analytics & reporting",
    "High-speed performance optimization",
    "Data security & encryption",
    "24/7 technical support",
  ];

  return (
    <main className="pt-32 bg-white">
      {/* Breadcrumb + Heading */}
      <section className="mx-auto max-w-6xl px-6 mb-12">
        <nav className="text-sm text-gray-800 mb-4">
          <Link href="/" className="hover:text-red-500 font-bold">Home</Link> &gt;{" "}
          <Link href="/services" className="hover:text-red-500 font-bold">Services</Link> &gt;{" "}
          <span className="font-semibold text-gray-500">E-Commerce</span>
        </nav>

        <h1 className="text-5xl md:text-4xl font-semibold text-red-500">
          E-Commerce Website Development
        </h1>
        <p className="mt-3 text-lg text-gray-600 max-w-5xl">
          Build secure, scalable, and conversion-focused e-commerce platforms that help your business
          sell more online.
        </p>
      </section>

      {/* Services Cards */}
      <section className="mt-8 mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Our E-Commerce Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((item) => (
            <div
              key={item.title}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center"
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="text-red-600">{item.icon}</div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
              </div>
              <p className="text-gray-600 text-left">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why E-Commerce Matters */}
      <section className="mt-20 mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold mb-6">
          Does Your Business Need E-Commerce?
        </h2>
        <p className="text-gray-600 mb-6 max-w-5xl">
          A professionally built e-commerce platform helps businesses increase sales, reduce cart
          abandonment, improve customer trust, and scale efficiently in today’s digital-first world.
        </p>
      </section>

      {/* Features + Benefits */}
      <section className="mt-12 mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-semibold mb-6">Key Features</h2>
          <ul className="space-y-4">
            {features.map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-700">
                <FaCircleCheck className="text-red-500 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-semibold mb-4">Why Choose Govira</h2>
          <p className="text-gray-600">
            We build secure, fast, and scalable e-commerce solutions that are optimized for
            performance, user experience, and growth.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-20 text-center px-6">
        <h2 className="text-3xl font-semibold mb-6">
          Ready to Launch Your Online Store?
        </h2>
        <p className="text-gray-600 mb-8">
          Partner with Govira Technologies to build an e-commerce platform that converts visitors
          into customers.
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
