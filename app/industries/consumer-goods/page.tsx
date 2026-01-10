"use client";

import React from "react";
import Link from "next/link";
import Footer from "@/components/footer/Footer";

export default function ConsumerGoodsPage() {
  return (
    <main className="pt-32 bg-white">

      {/* BREADCRUMB + HERO */}
      <section className="mx-auto max-w-6xl px-6 mb-16">
        <nav className="text-sm text-gray-800 mb-4">
          <Link href="/" className="hover:text-red-500 font-bold">Home</Link> &gt;{" "}
          <Link href="/industries" className="hover:text-red-500 font-bold">Industries</Link> &gt;{" "}
          <span className="font-semibold text-gray-500">Consumer Goods</span>
        </nav>

        <h1 className="text-5xl md:text-4xl font-semibold text-red-500 mb-4">
          Digital Marketing & SEO for the Consumer Goods Industry
        </h1>

        <p className="text-lg text-gray-600 max-w-5xl">
          Consumer Goods companies, historically the largest offline advertisers, are now fully embracing the digital world. By delivering engaging experiences, personalized campaigns, and innovative online strategies, brands like Pepsi are connecting with younger audiences in ways never possible before.
        </p>

        <p className="mt-4 text-gray-600 max-w-5xl">
          From brand-building websites to relationship-focused customer communication, cost-effective sampling, and high-value product research, digital marketing offers efficient, affordable, and scalable access to mass consumers.
        </p>
      </section>

      {/* SEO IMPACT SECTION */}
      <section className="mx-auto max-w-6xl px-6 mb-20">
        <h2 className="text-3xl font-semibold text-center mb-14">
          How SEO Drives Sales for Consumer Goods Companies
        </h2>

        <p className="text-gray-600 text-lg text-center max-w-4xl mx-auto mb-8">
          Understanding why visitors come to your website is key to driving sales. Studies show:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto text-gray-700 text-lg">
          <div className="flex justify-between border-b py-2">
            <span>30%</span>
            <span>Visited specifically for the company website</span>
          </div>
          <div className="flex justify-between border-b py-2">
            <span>73%</span>
            <span>Were researching products</span>
          </div>
          <div className="flex justify-between border-b py-2">
            <span>64%</span>
            <span>Needed help with purchase decisions</span>
          </div>
          <div className="flex justify-between border-b py-2">
            <span>50%</span>
            <span>Were looking for promotions or offers</span>
          </div>
        </div>
      </section>

      {/* HOW WE HELP SECTION */}
      <section className="mx-auto max-w-6xl px-6 mb-20">
        <h2 className="text-3xl font-semibold text-center mb-14">
          How We Help Consumer Goods Brands
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side bullets */}
          <div className="space-y-6 text-gray-600 text-lg">
            <p>
              Whether your brand sells food and beverages, cosmetics, hygiene products, or household items, Govira ensures your consumer goods company thrives online. Our expertise covers every niche of the consumer goods industry.
            </p>

            <p>
              We perform comprehensive technical audits, reviewing keyword focus, usability, schema markup, site speed, voice search, site structure, visitor flow, and content on every page of your website.
            </p>

            <p>
              We take the time to understand your audience, products, market, and competitors. Then, we optimize your site architecture and create fresh content to expand product categories while providing maximum value to your customers.
            </p>

            <p>
              Our strong SEO and digital marketing campaigns improve visibility, boost online presence, and ultimately drive sales. In today’s competitive global market, a high-ranking website is essential to outperform competitors.
            </p>
          </div>

          {/* Right side GIF placeholder */}
          <div className="flex justify-center">
            <img
              src="/gifs/consumer-goods-animation.gif"
              alt="Consumer Goods Marketing Animation"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="mx-auto max-w-6xl px-6 mb-22 text-center">
        <h2 className="text-3xl font-semibold text-red-500 mb-6">
          Grow Your Consumer Goods Brand with Govira
        </h2>

        <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-8">
          We help consumer goods brands connect with their audience through smart digital strategies. From social media campaigns to SEO and paid ads, we create strategies that build visibility, drive sales, and strengthen brand loyalty.
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
