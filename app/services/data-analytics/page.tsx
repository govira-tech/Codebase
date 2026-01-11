"use client";

import React from "react";
import Link from "next/link";
import Footer from "@/components/footer/Footer";

export default function DataAnalyticsPage() {
  return (
    <main className="pt-32 bg-white">
      {/* Breadcrumb + Hero */}
      <section className="mx-auto max-w-6xl px-6 mb-16">
        <nav className="text-sm text-gray-800 mb-4">
          <Link href="/" className="hover:text-red-500 font-bold">Home</Link> &gt;{" "}
          <Link href="/services" className="hover:text-red-500 font-bold">Services</Link> &gt;{" "}
          <span className="font-semibold text-gray-500">Data Analytics</span>
        </nav>

        <h1 className="text-5xl md:text-4xl font-semibold text-red-500 mb-4">
          Data Analytics Services
        </h1>
        <p className="text-2xl text-gray-700 mb-6">
          Turn Data into Actionable Business Insights
        </p>

        <p className="text-lg text-gray-600 max-w-6xl">
          At Govira Technologies, we help businesses unlock the true power of their data.
          Our data analytics solutions transform raw data into clear insights that drive
          smarter decisions, improve performance, and accelerate growth.
        </p>
      </section>

      {/* Services Offered */}
      <section className="mx-auto max-w-6xl px-6 mb-20">
        <h2 className="text-3xl font-semibold mb-8">What We Offer</h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-lg mb-2">Business Intelligence</h3>
            <p className="text-gray-600">
              Interactive dashboards and reports that give you real-time visibility
              into KPIs, trends, and performance metrics.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-lg mb-2">Data Visualization</h3>
            <p className="text-gray-600">
              We convert complex datasets into clear, visual stories that make insights
              easy to understand and act upon.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-lg mb-2">Advanced Analytics</h3>
            <p className="text-gray-600">
              Predictive and trend analysis to identify opportunities, risks, and
              future outcomes using historical data.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-lg mb-2">Customer & Market Insights</h3>
            <p className="text-gray-600">
              Understand customer behavior, preferences, and market patterns to
              optimize strategies and offerings.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-lg mb-2">Data Integration</h3>
            <p className="text-gray-600">
              We consolidate data from multiple sources into a single, reliable
              analytics ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Why Data Analytics Matters */}
      <section className="mx-auto max-w-6xl px-6 mb-20">
        <h2 className="text-3xl font-semibold mb-6">Why Data Analytics Matters</h2>
        <p className="text-gray-600 max-w-6xl">
          Data-driven organizations outperform their competitors.
          With the right analytics strategy, businesses gain clarity, reduce risks,
          uncover hidden opportunities, and make confident decisions backed by facts —
          not assumptions.
        </p>
      </section>

      {/* Our Process */}
      <section className="mx-auto max-w-6xl px-6 mb-20">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Our Data Analytics Process
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold mb-2">Requirement Analysis</h3>
            <p className="text-gray-600">
              We understand your business goals, challenges, and data sources to
              define the right analytics approach.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold mb-2">Data Collection & Cleaning</h3>
            <p className="text-gray-600">
              Raw data is gathered, validated, and cleaned to ensure accuracy and
              reliability.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold mb-2">Analysis & Modeling</h3>
            <p className="text-gray-600">
              We apply analytical techniques to uncover patterns, insights, and
              predictive signals.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold mb-2">Visualization & Reporting</h3>
            <p className="text-gray-600">
              Insights are delivered through intuitive dashboards and clear reports
              tailored to stakeholders.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold mb-2">Insights & Optimization</h3>
            <p className="text-gray-600">
              We help you translate insights into actions and continuously optimize
              performance.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-20 text-center px-6 mb-20">
        <h2 className="text-3xl font-semibold mb-6">
          Make Smarter Decisions with Data
        </h2>
        <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
          Let Govira Technologies help you transform data into strategic advantage
          through powerful analytics and insights.
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

      {/* Footer */}
      <Footer />
    </main>
  );
}
