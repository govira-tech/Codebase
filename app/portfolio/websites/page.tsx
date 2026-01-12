"use client";

import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

type PortfolioItem = {
  title: string;
  category: string;
  imgSrc: string;
  link?: string;
};

// Footer Data
const footerWebsiteServices = [
  { label: "Web Design", href: "/services/web-design" },
  { label: "Logo & Brand Book", href: "/services/branding" },
  { label: "E-Commerce Website", href: "/services/e-commerce" },
  { label: "CRM System", href: "/services/crm" },
  { label: "Lead Management", href: "/services/lead-generation-campaigns" },
];

const footerIndustries = [
  { label: "Real Estate", href: "/industries/real-estate" },
  { label: "Banking & Financial", href: "/industries/banking-finance" },
  { label: "Education & Healthcare", href: "/industries/education-healthcare" },
  { label: "Retail & Manufacturing", href: "/industries/retail-manufacturing" },
  { label: "Travel & Hospitality", href: "/industries/travel-hospitality" },
  { label: "Transportation & Logistics", href: "/industries/transport-logistics" },
];

const footerDigitalMarketing = [
  { label: "SEO Services", href: "/services/seo" },
  { label: "Lead Generation", href: "/services/lead-generation" },
  { label: "Social Media Marketing", href: "/services/social-media" },
  { label: "PPC Services", href: "/services/ppc" },
  { label: "Content Marketing", href: "/services/content-marketing" },
  { label: "Email Marketing", href: "/services/email-marketing" },
  { label: "Conversion Rate Optimization", href: "/services/conversion-optimization" },
];

// Portfolio Data
const portfolioItems: PortfolioItem[] = [
  {
    title: "E-Commerce Platform",
    category: "",
    imgSrc: "/logos/veeraence.png",
  },
  {
    title: "Website",
    category: "",
    imgSrc: "/logos/anchor-space.jpeg",
  },
  {
    title: "Mobile App",
    category: "",
    imgSrc: "/logos/raksha.jpg",
  },
  {
    title: "Website",
    category: "",
    imgSrc: "/logos/aditi.jpeg",
  },
  {
    title: "Website",
    category: "",
    imgSrc: "/logos/ark.png",
  },
  {
    title: "Mobile App",
    category: "",
    imgSrc: "/logos/habit-tracker.png",
  },
];

export default function PortfolioPage() {
  return (
    <main className="pt-32 bg-white">

      {/* Breadcrumb + Hero */}
      <section className="mx-auto max-w-6xl px-6 mb-16">
        <nav className="text-sm text-gray-800 mb-4">
          <Link href="/" className="hover:text-red-500 font-bold">Home</Link> &gt;{" "}
          <Link href="/portfolio" className="hover:text-red-500 font-bold">Portfolio</Link> &gt;{" "}
          <span className="font-semibold text-gray-500">Website & App Portfolio</span>
        </nav>

        <h1 className="text-5xl md:text-4xl font-semibold text-red-500 mb-4">
          Website & App Portfolio
        </h1>

        <p className="text-3xl font-semibold text-gray-700 mb-4">
          Showcasing Our Creative Work
        </p>

        <p className="text-lg text-gray-600 max-w-4xl mb-0">
          As a young startup, we have successfully delivered 5 websites and 3 mobile apps,
          designed to provide outstanding user experience, modern aesthetics, and seamless functionality.
          Our projects reflect creativity, innovation, and a results-driven approach.
        </p>
      </section>

      {/* PORTFOLIO GRID */}
      <section className="mx-auto max-w-6xl px-6 mb-28">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl border bg-white overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={item.imgSrc}
                alt={item.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CLIENT LOGOS */}
      <section className="mx-auto max-w-6xl px-6 mb-22">
        <div className="relative overflow-hidden">
          {/* Gradient fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent z-10" />

          {/* Scrolling container */}
          <div className="flex w-max animate-scroll gap-16">
            {[
              "/logos/veeraence.png",
              "/logos/anchor-space.jpeg",
              "/logos/raksha.jpg",
              "/logos/aditi.jpeg",
              "/logos/ark-industries.png",
              "/logos/habit-tracker.png",
            ].map((logo, idx) => (
              <img
                key={idx}
                src={logo}
                alt="Client logo"
                className="h-16 md:h-20 lg:h-24 w-auto object-contain transition"
              />
            ))}

            {/* duplicate for seamless loop */}
            {[
              "/logos/veeraence.png",
              "/logos/anchor-space.jpeg",
              "/logos/raksha.jpg",
              "/logos/aditi.jpeg",
              "/logos/ark-industries.png",
              "/logos/habit-tracker.png",
            ].map((logo, idx) => (
              <img
                key={`dup-${idx}`}
                src={logo}
                alt="Client logo"
                className="h-16 md:h-20 lg:h-24 w-auto object-contain transition"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Elevate Section */}
      <section className="mt-20 text-center px-6">
        <h2 className="text-3xl font-semibold mb-6">Ready to Build Your Project?</h2>
        <p className="text-gray-600 mb-8">
          Let Govira Technologies create a website or mobile app that engages, converts, and grows your business.
        </p>
        <div className="flex justify-center gap-6 flex-wrap">
          <Link href="/contact" className="rounded-full bg-red-600 px-8 py-3 text-white hover:bg-red-700 transition">
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

      {/* PRE-FOOTER SECTION */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 grid gap-16 lg:grid-cols-5">

          {/* BRAND */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Govira</h3>
            <p className="text-gray-500 mb-6">
              Empowering your digital growth with expert solutions.
            </p>

            <p className="font-medium mb-2">Follow Us</p>
            <div className="flex gap-4 text-xl text-gray-500">
              <a href="#" className="hover:text-red-600"><FaFacebookF /></a>
              <a href="#" className="hover:text-red-600"><FaInstagram /></a>
              <a href="#" className="hover:text-red-600"><FaXTwitter /></a>
              <a href="#" className="hover:text-red-600"><FaLinkedinIn /></a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-500">
              <li><Link href="/">Home</Link></li>
              { /* <li><Link href="/about">About Us</Link></li> */}
              <li><Link href="/services">Our Services</Link></li>
              <li><Link href="/industries">Industries</Link></li>
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/faqs">FAQs</Link></li>
            </ul>
          </div>

          {/* WEBSITE SERVICES */}
          <div>
            <h4 className="font-medium mb-4">Website Services</h4>
            <ul className="space-y-2 text-gray-500">
              {footerWebsiteServices.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-red-600">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* INDUSTRIES */}
          <div>
            <h4 className="font-medium mb-4">Industries We Serve</h4>
            <ul className="space-y-2 text-gray-500">
              {footerIndustries.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-red-600">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* DIGITAL MARKETING */}
          <div>
            <h4 className="font-medium mb-4">Digital Marketing</h4>
            <ul className="space-y-2 text-gray-500">
              {footerDigitalMarketing.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-red-600">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <p className="font-medium">Reach out to us anytime</p>
              <a href="mailto:support@govira.tech" className="block text-gray-500 hover:text-red-600">
                support@govira.tech
              </a>
              <a href="tel:+919701935111" className="block text-gray-500 hover:text-red-600">
                INDIA +91 97019 35111, +91 92466 18353
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER BOTTOM */}
      <footer className="bg-neutral-900 text-white pt-12">
        <div className="mx-auto max-w-7xl px-6 text-center text-gray-400">
          <p>Govira Technologies Solutions – Empowering your Digital Growth with Expert Solutions</p>
          <div className="mt-2 flex flex-wrap justify-center gap-6 text-sm">
            <a href="/services" className="hover:text-white">Services</a>
            <a href="/industries" className="hover:text-white">Industries</a>
            <a href="/portfolio" className="hover:text-white">Portfolio</a>
            <a href="/contact" className="hover:text-white">Contact</a>
          </div>
          <p className="mt-2">© 2026 Govira Technologies Solutions. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
