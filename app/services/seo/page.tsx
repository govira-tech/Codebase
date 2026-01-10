"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaSearch, FaChartLine, FaCogs, FaLink, FaRobot, FaClipboardList, FaGlobe } from "react-icons/fa";
import { FaUsers, FaPenNib, FaFacebookF, FaInstagram, FaLinkedinIn, } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import Footer from "@/components/footer/Footer";

type FooterLink = {
  label: string;
  href: string;
};  

const seoServices = [
  { title: "On-Page SEO", icon: <FaSearch size={28} className="text-red-600"/> },
  { title: "Off-Page SEO", icon: <FaLink size={28} className="text-red-600"/> },
  { title: "Technical SEO", icon: <FaCogs size={28} className="text-red-600"/> },
  { title: "Link Building", icon: <FaRobot size={28} className="text-red-600"/> },
  { title: "Site Audit", icon: <FaClipboardList size={28} className="text-red-600"/> },
  { title: "Keyword Analysis", icon: <FaChartLine size={28} className="text-red-600"/> },
  { title: "SSL Implementation", icon: <FaGlobe size={28} className="text-red-600" /> },
  { title: "Competitor Analysis", icon: <FaUsers size={28} className="text-red-600"/> },
  { title: "Google Analytics Integration", icon: <FaChartLine size={28} className="text-red-600"/> },
  { title: "Google Business Listing", icon: <FaGlobe size={28} className="text-red-600"/> },
  { title: "Content Creation & Optimization", icon: <FaPenNib size={28} className="text-red-600"/> },
  { title: "Google Ads Management", icon: <FaChartLine size={28} className="text-red-600"/> },
];

const footerDigitalMarketing: FooterLink[] = [
  { label: "SEO Services", href: "/services/seo" },
  { label: "PPC Services", href: "/services/ppc-services" },
  { label: "Social Media Marketing", href: "/services/social-media-marketing" },
  { label: "Content Writing", href: "/services/content-writing" },
  { label: "Email Marketing", href: "/services/email-marketing" },
];
const seoPackages = [
  {
    name: "Silver",
    description: "For small to mid-sized businesses looking to build a solid SEO foundation.",
    keywords: 10,
    blogPosts: 1,
    localListings: 5,
  },
  {
    name: "Gold",
    description: "Perfect for businesses ready to scale their SEO efforts and compete at a higher level.",
    keywords: 30,
    blogPosts: 2,
    localListings: 10,
  },
  {
    name: "Platinum",
    description: "Ideal for large businesses or enterprises seeking the highest level of SEO dominance.",
    keywords: 40,
    blogPosts: 3,
    localListings: 15,
  },
];

const footerWebsiteServices: FooterLink[] = [
  { label: "Web Design", href: "/services/web-design" },
  { label: "E-Commerce", href: "/services/ecommerce" },
  { label: "CRM Solutions", href: "/services/crm" },
  { label: "Lead Management", href: "/services/lead-generation-campaigns" },
];

const footerIndustries: FooterLink[] = [
  { label: "Real Estate", href: "/industries/real-estate" },
  { label: "Healthcare & Education", href: "/industries/healthcare-education" },
  { label: "Flooring Businesses", href: "/industries/flooring-businesses" },
  { label: "Banking & Finance", href: "/industries/banking-finance" },
];

export default function SEOPage() {
  const [serviceIndex, setServiceIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setServiceIndex((prev) => (prev + 1) % seoServices.length);
    }, 2000); // 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="pt-32 bg-white">
      <section className="mx-auto max-w-6xl px-6 mb-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-800 mb-4">
          <Link href="/" className="hover:text-red-500 font-bold">
            Home
          </Link>{" "}
          &gt;{" "}
          <Link href="/services" className="hover:text-red-500 font-bold">
            Services
          </Link>{" "}
          &gt;{" "}
          <span className="font-semibold text-gray-500">SEO Services</span>
        </nav>

        {/* Page Heading */}
        <h1 className="text-5xl md:text-4xl font-semibold text-red-500">SEO Services</h1>
        <p className="mt-3 text-lg text-gray-600 max-w-7xl">
          SEO built for long-term growth, not quick wins. Govira Technologies, the premier digital marketing agency in Vizag, helps enhance your website's organic ranking through a strategic blend of on-page and off-page SEO.
        </p>
      </section>

      {/* Our Comprehensive SEO Services */}
      <section className="mt-8 mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">Our Comprehensive SEO Services</h2>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
          {seoServices.map((service) => (
            <div
              key={service.title}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex items-center gap-2"
            >
              {/* Service Icon and Title with Separator */}
              {service.icon}
              <div className="h-[28px] w-[1px] bg-gray-900 mx-2" />
              <span className="font-medium text-gray-800 font-inter"> {service.title}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SEO Plans & Pricing */}
      <section className="mt-20 mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-semibold text-center mb-14">
          Our Tailored SEO Plans & Pricing
        </h2>

        {/** COMMON ON-PAGE FOR SILVER, GOLD, PLATINUM */}
        {/** You can move this to top of file if needed */}
        {/** const ON_PAGE_COMMON = [...] */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* ---------------- SILVER ---------------- */}
          <div className="rounded-xl shadow bg-white overflow-hidden border">
            <div className="bg-blue-100 text-center py-6">
              <h3 className="text-2xl font-bold text-blue-700">SILVER</h3>
              <p className="text-4xl font-extrabold mt-2">10</p>
              <p className="text-gray-600 text-sm mt-1">SEO Keyword Sets</p>
            </div>

            <div className="p-6 text-sm leading-relaxed space-y-4">
              {/* ON-PAGE */}
              <ul className="space-y-2 text-gray-700">
                <li className="font-semibold text-gray-900">ON-PAGE SEO</li>

                {[
                  "Canonical Check & Fixing",
                  "URL Structure Suggestions",
                  "Search Engine Indexing Check",
                  "Duplicate Content Checking",
                  "Broken Link Detection",
                  "Page Speed Check & Optimization",
                  "Meta Tags Optimization",
                  "Header Tags Optimization",
                  "Alt Tags Optimization",
                  "Robots.txt Optimization",
                  "Google Webmaster Verification",
                  "Google Analytics Installation",
                  "1 Blog Writing & Posting"
                ].map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-green-600 font-bold">✔</span> {item}
                  </li>
                ))}

                {/* OFF-PAGE SEO SAME AS BEFORE */}
                <li className="font-semibold text-gray-900 mt-4">OFF-PAGE SEO</li>
                {[
                  "5 Social Bookmarking",
                  "1 Article Writing",
                  "5 Article Syndication",
                  "2 Web 2.0 Creation",
                  "5 Infographic Submissions",
                  "5 Directory Submissions",
                  "5 Social Bookmarking Blog Page",
                  "1 Blog Submission",
                  "Free Classified Ads",
                  "Blog Directory Submission",
                  "Submission in Weebly",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-green-600 font-bold">✔</span> {item}
                  </li>
                ))}

                <li className="flex gap-2 text-red-600">
                  <span className="font-bold">✘</span> Upload YouTube with URL
                </li>

                {/* LOCAL LISTINGS SAME AS BEFORE */}
                <li className="font-semibold text-gray-900 mt-4">LOCAL LISTINGS</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">✔</span>5 Local Listings</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">✔</span>Scan Existing</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">✔</span>Claim Listings</li>
              </ul>

              <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg mt-6">
                Contact Us
              </button>
            </div>
          </div>


          {/* ---------------- GOLD ---------------- */}
          <div className="rounded-xl shadow bg-white overflow-hidden border">
            <div className="bg-yellow-100 text-center py-6">
              <h3 className="text-2xl font-bold text-yellow-700">GOLD</h3>
              <p className="text-4xl font-extrabold mt-2">20</p>
              <p className="text-gray-600 text-sm mt-1">SEO Keyword Sets</p>
            </div>

            <div className="p-6 text-sm leading-relaxed space-y-4">
              {/* ON-PAGE (same as silver) */}
              <ul className="space-y-2 text-gray-700">
                <li className="font-semibold text-gray-900">ON-PAGE SEO</li>

                {[
                  "Canonical Check & Fixing",
                  "URL Structure Suggestions",
                  "Search Engine Indexing Check",
                  "Duplicate Content Checking",
                  "Broken Link Detection",
                  "Page Speed Check & Optimization",
                  "Meta Tags Optimization",
                  "Header Tags Optimization",
                  "Alt Tags Optimization",
                  "Robots.txt Optimization",
                  "Google Webmaster Verification",
                  "Google Analytics Installation",
                  "2 Blog Writing & Posting"
                ].map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-green-600 font-bold">✔</span> {item}
                  </li>
                ))}

                {/* OFF-PAGE SAME AS BEFORE */}
                <li className="font-semibold text-gray-900 mt-4">OFF-PAGE SEO</li>
                {[
                  "10 Social Bookmarking",
                  "1 Article Writing",
                  "10 Article Syndication",
                  "5 Web 2.0 Creation",
                  "5 Infographic Submissions",
                  "10 Directory Submissions",
                  "5 Social Bookmarking Blog Page",
                  "2 Blog Submissions",
                  "Free Classified Ads",
                  "Blog Directory Submission",
                  "Submission in Weebly",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-green-600 font-bold">✔</span> {item}
                  </li>
                ))}

                <li className="flex gap-2 text-red-600">
                  <span className="font-bold">✘</span> Upload YouTube with URL
                </li>

                {/* LOCAL LISTINGS SAME AS BEFORE */}
                <li className="font-semibold text-gray-900 mt-4">LOCAL LISTINGS</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">✔</span>10 Local Listings</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">✔</span>Scan Existing</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">✔</span>Claim Listings</li>
              </ul>

              <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg mt-6">
                Contact Us
              </button>
            </div>
          </div>


          {/* ---------------- PLATINUM ---------------- */}
          <div className="rounded-xl shadow bg-white overflow-hidden border">
            <div className="bg-green-100 text-center py-6">
              <h3 className="text-2xl font-bold text-green-700">PLATINUM</h3>
              <p className="text-4xl font-extrabold mt-2">30</p>
              <p className="text-gray-600 text-sm mt-1">SEO Keyword Sets</p>
            </div>

            <div className="p-6 text-sm leading-relaxed space-y-4">
              {/* ON-PAGE (same as silver + gold) */}
              <ul className="space-y-2 text-gray-700">
                <li className="font-semibold text-gray-900">ON-PAGE SEO</li>

                {[
                  "Canonical Check & Fixing",
                  "URL Structure Suggestions",
                  "Search Engine Indexing Check",
                  "Duplicate Content Checking",
                  "Broken Link Detection",
                  "Page Speed Check & Optimization",
                  "Meta Tags Optimization",
                  "Header Tags Optimization",
                  "Alt Tags Optimization",
                  "Robots.txt Optimization",
                  "Google Webmaster Verification",
                  "Google Analytics Installation",
                  "3 Blog Writing & Posting"
                ].map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-green-600 font-bold">✔</span> {item}
                  </li>
                ))}

                {/* OFF-PAGE SAME AS BEFORE */}
                <li className="font-semibold text-gray-900 mt-4">OFF-PAGE SEO</li>
                {[
                  "15 Social Bookmarking",
                  "2 Article Writing",
                  "15 Article Syndication",
                  "10 Web 2.0 Creation",
                  "5 Infographic Submissions",
                  "20 Directory Submissions",
                  "10 Social Bookmarking Blog Page",
                  "3 Blog Submissions",
                  "Free Classified Ads",
                  "Blog Directory Submission",
                  "Submission in Weebly",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-green-600 font-bold">✔</span> {item}
                  </li>
                ))}

                <li className="flex gap-2 text-green-600">
                  <span className="font-bold">✔</span> Upload YouTube with URL
                </li>

                {/* LOCAL LISTINGS SAME */}
                <li className="font-semibold text-gray-900 mt-4">LOCAL LISTINGS</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">✔</span>15 Local Listings</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">✔</span>Scan Existing</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">✔</span>Claim Listings</li>
              </ul>

              <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg mt-6">
                Contact Us
              </button>
            </div>
          </div>


          {/* ---------------- DIAMOND ---------------- */}
          <div className="rounded-xl shadow bg-white overflow-hidden border">
            <div className="bg-purple-100 text-center py-6">
              <h3 className="text-2xl font-bold text-purple-700">DIAMOND</h3>
              <p className="text-4xl font-extrabold mt-2">50</p>
              <p className="text-gray-600 text-sm mt-1">SEO Keyword Sets</p>
            </div>

            <div className="p-6 text-sm leading-relaxed space-y-4">

              {/* ADVANCED ON-PAGE FOR DIAMOND */}
              <ul className="space-y-2 text-gray-700">
                <li className="font-semibold text-gray-900">ON-PAGE SEO</li>

                {[
                  "Advanced Keyword Research & Analysis",
                  "Competitor SEO Analysis",
                  "In-Depth Site Audit & Reporting",
                  "Google Verification & Analytics Setup",
                  "Enterprise-Level Optimization",
                  "Full Technical SEO Suite",
                  "AI-Based SEO Insights",
                  "Image CDN Optimization",
                  "Advanced Schema Markup",
                  "Core Web Vitals Boost",
                  "Custom UX/UI SEO Tuning",
                  "6 Blog Writing & Posting",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-green-600 font-bold">✔</span> {item}
                  </li>
                ))}

                {/* OFF-PAGE SAME */}
                <li className="font-semibold text-gray-900 mt-4">OFF-PAGE SEO</li>
                {[
                  "25 Social Bookmarking",
                  "4 Articles / Month",
                  "25 Article Syndication",
                  "15 Web 2.0 Creation",
                  "15 Infographic Sharing",
                  "30 Directory Submissions",
                  "20 Blog Submissions",
                  "High DA Backlinks",
                  "PR Articles",
                  "Social Bookmarking Blog Page",
                  "Video Submission",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-green-600 font-bold">✔</span> {item}
                  </li>
                ))}

                <li className="flex gap-2 text-green-600">
                  <span className="font-bold">✔</span> Upload YouTube with URL
                </li>

                {/* LOCAL LISTINGS */}
                <li className="font-semibold text-gray-900 mt-4">LOCAL LISTINGS</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">✔</span>20 Local Listings</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">✔</span>Scan Existing</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">✔</span>Claim Listings</li>
              </ul>

              <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg mt-6">
                Contact Us
              </button>
            </div>
          </div>

        </div>
      </section>



      {/* Problem-Solving Approach */}
      <section className="mt-20 mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">We Provide Solutions to Your Problems</h2>
        <p className="text-lg text-gray-600 mb-8">
          At Govira Technologies, we don’t just identify issues; we provide effective solutions. Whether you're facing a Google algorithm update or site performance issues, our expert team is ready to solve any challenges.
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
