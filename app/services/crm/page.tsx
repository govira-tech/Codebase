"use client";

import React from "react";
import Link from "next/link";
import {
  FaDatabase,
  FaUsers,
  FaChartLine,
  FaArrowsRotate,
  FaGgCircle,
  FaShieldCat,
  FaBullseye,
  FaEnvelope,
  FaChartBar,
  FaClock,
} from "react-icons/fa6";
import Footer from "@/components/footer/Footer";

export default function CRMPage() {
  const processSteps = [
    {
      title: "Centralized Customer Intelligence",
      icon: <FaDatabase size={30} />,
      desc: "Unify customer data, interactions, and history into a single CRM platform for complete visibility and smarter decisions.",
    },
    {
      title: "Sales Process Automation",
      icon: <FaArrowsRotate size={30} />,
      desc: "Automate lead assignment, follow-ups, reminders, and deal tracking to help teams close deals faster.",
    },
    {
      title: "Personalized Customer Engagement",
      icon: <FaUsers size={30} />,
      desc: "Deliver personalized communication based on customer behavior, preferences, and lifecycle stage.",
    },
    {
      title: "Real-Time Insights & Reporting",
      icon: <FaChartLine size={30} />,
      desc: "Monitor sales pipelines, customer engagement, and team performance through real-time dashboards.",
    },
    {
      title: "Seamless Tool Integration",
      icon: <FaGgCircle size={30} />,
      desc: "Integrate CRM with marketing, email, ERP, payment, and support tools for a connected ecosystem.",
    },
    {
      title: "Scalable & Secure CRM",
      icon: <FaShieldCat size={30} />,
      desc: "Enterprise-grade security, role-based access, and scalable architecture that grows with your business.",
    },
  ];

  const marketingRole = [
    {
      title: "Audience Segmentation",
      icon: <FaBullseye size={30} />,
      desc: "Segment customers based on behavior, demographics, and engagement to run highly targeted campaigns.",
    },
    {
      title: "Personalized Campaigns",
      icon: <FaEnvelope size={30} />,
      desc: "Create personalized email and marketing campaigns that increase engagement and conversions.",
    },
    {
      title: "Campaign Performance Tracking",
      icon: <FaChartBar size={30} />,
      desc: "Track leads, conversions, and ROI to understand what campaigns perform best.",
    },
    {
      title: "Customer Lifecycle Management",
      icon: <FaClock size={30} />,
      desc: "Manage customers across every stage — from acquisition to retention and loyalty.",
    },
  ];


  return (
    <main className="pt-32 bg-white">
      {/* BREADCRUMB + HERO */}
      <section className="mx-auto max-w-6xl px-6 mb-12">
        <nav className="text-sm text-gray-800 mb-4">
          <Link href="/" className="hover:text-red-500 font-bold">
            Home
          </Link>{" "}
          &gt;{" "}
          <Link href="/services" className="hover:text-red-500 font-bold">
            Services
          </Link>{" "}
          &gt;{" "}
          <span className="font-semibold text-gray-500">
            Customer Relationship Management
          </span>
        </nav>

        <h1 className="text-5xl md:text-4xl font-semibold text-red-500">
          CRM Solutions
        </h1>
        <p className="mt-3 text-lg text-gray-600 max-w-5xl">
          Govira CRM solutions help businesses manage customers, automate sales,
          and improve engagement through data-driven insights and intelligent
          workflows.
        </p>
      </section>

      {/* CRM PROCESS */}
      <section className="mt-8 mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Key CRM Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {processSteps.map((step) => (
            <div
              key={step.title}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center"
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="text-red-600 mb-4">{step.icon}</div>
                <h3 className="font-semibold text-lg">{step.title}</h3>
              </div>
              <p className="text-gray-600 text-left">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CRM IN MARKETING */}
      <section className="mt-20 mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold text-center text-red-500 mb-12">
          CRM’s Role in Marketing
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {marketingRole.map((item) => (
            <div
              key={item.title}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center"
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="text-red-600 mb-4">{item.icon}</div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
              </div>
              <p className="text-gray-600 text-left">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>


      {/* WHO THIS IS FOR */}
      <section className="mt-20 mx-auto text-center max-w-6xl px-6">
        <h2 className="text-3xl font-semibold text-red-500 mb-6">Who This is For</h2>
        <p>
          Businesses looking to improve customer relationships, sales efficiency,
          and marketing performance using a centralized CRM platform.
        </p>
      </section>

      {/* BUSINESS NEED */}
      <section className="mt-12 mx-auto max-w-6xl px-6">
        <h3 className="text-3xl font-bold mb-3 text-center">
          Does Your Business Need a CRM System?
        </h3>
        <p className="mb-4 text-center">
          Managing customers manually leads to missed opportunities, slow
          follow-ups, and poor customer experiences. A CRM system centralizes
          everything and enables smarter decisions.
        </p>
        <p className="text-center">
          Govira CRM solutions help you automate, analyze, and scale customer
          relationships effectively.
        </p>
      </section>

      {/* CTA */}
      <section className="mt-20 text-center px-6">
        <h2 className="text-3xl font-semibold mb-6">
          Ready to Build a Smarter CRM?
        </h2>
        <p className="text-gray-600 mb-8">
          Empower your sales and marketing teams with Govira’s CRM solutions.
        </p>
        <div className="flex justify-center gap-6 flex-wrap">
          <Link
            href="/contact"
            className="rounded-full bg-red-600 px-8 py-3 text-white hover:bg-red-700 transition"
          >
            Contact Us
          </Link>
          <a
            href="https://wa.me/919701935111"
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
