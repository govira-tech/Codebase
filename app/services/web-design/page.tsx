"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaSearch,
  FaLock,
  FaPalette,
  FaCogs,
} from "react-icons/fa";
import {
  FaUsers,
  FaLightbulb,
  FaBullhorn,
  FaHandshake,
} from "react-icons/fa";
import {
  FaGlobe,
  FaShoppingCart,
  FaUsersCog,
  FaMousePointer,
  FaShareAlt,
  FaMapMarkerAlt,
  FaPenNib,
  FaChartLine,
  FaEnvelope,
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

const animatedServices = [
  "Brand Logo Design",
  "Mobile App Design",
  "Landing Page Design",
  "Web Application Design",
  "Website Redesign",
  "Responsive Website",
  "E-Commerce Website",
];

export default function WebDesignPage() {
  const processSteps = [
    {
      title: "Custom Website Design",
      icon: <FaLaptopCode size={30} />,
      desc: "At Govira, we create unique websites tailored to your brand and business goals. Our designs are visually appealing, user-friendly, and crafted to make a lasting impression."
    },
    {
      title: "Responsive Web Design",
      icon: <FaMobileAlt size={30} />,
      desc: "Your website will look and perform flawlessly on all devices. We ensure smooth browsing for desktop, tablet, and mobile users, enhancing engagement and customer satisfaction."
    },
    {
      title: "Search Engine Optimization (SEO)",
      icon: <FaSearch size={30} />,
      desc: "We design websites that are not only beautiful but also SEO-friendly. This helps your business rank higher on search engines, attract more visitors, and stay ahead of the competition."
    },
    {
      title: "Security Integration (HTTPS)",
      icon: <FaLock size={30} />,
      desc: "Your website’s security is our priority. By integrating HTTPS, we protect user data, build trust with your visitors, and ensure a safe browsing experience."
    },
    {
      title: "Modern & Professional Design",
      icon: <FaPalette size={30} />,
      desc: "Stand out with a professional website that captures attention and reflects your brand identity. We focus on clean, modern designs that leave a strong impression."
    },
    {
      title: "Advanced Functionality",
      icon: <FaCogs size={30} />,
      desc: "From e-commerce integration to interactive features, we provide advanced solutions that enhance your website’s performance and help your business grow online."
    },
  ];

  const [serviceIndex, setServiceIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setServiceIndex((prev) => (prev + 1) % animatedServices.length);
    }, 2000); // 2 seconds

    return () => clearInterval(interval);
  }, []);

  const uxuiCards = [
    "Interface Design",
    "Prototyping Design",
    "User Testing",
    "Interactive Design",
    "Optimal Design",
    "Requirement Analysis",
    "Prototype Design",
    "Usability Testing",
  ];

  const whyGovira = [
    { title: "Expertise", icon: <FaUsers size={30} />, desc: "Delivering results across industries." },
    { title: "Ethical Approach", icon: <FaLightbulb size={30} />, desc: "Integrity-driven solutions aligned with your goals." },
    { title: "Digital Marketing Prowess", icon: <FaBullhorn size={30} />, desc: "Comprehensive services: SEO, PPC, E-commerce, and more." },
    { title: "Customer-Centric Focus", icon: <FaHandshake size={30} />, desc: "Transparent collaboration & communication throughout." },
  ];

  const services = [
    "Brand Logo Design",
    "Mobile App Design",
    "Landing Page Design",
    "Web Application Design",
    "Website Redesign",
    "Responsive Website",
    "E-Commerce Website",
  ];

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
          <span className="font-semibold text-gray-500">Web Design Services</span>
        </nav>

        {/* Page Heading */}
        <h1 className="text-5xl md:text-4xl font-semibold text-red-500">
          Web Design Services
        </h1>
        <p className="mt-3 text-lg text-gray-600 max-w-5xl">
          In Govira we combine technology and innovation to create beautiful, fast, and conversion-focused websites that drive traffic, generate leads, and maximize ROI.
        </p>
      </section>


      {/* Process Section */}
      <section className="mt-8 mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">Our Web Development Process</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {processSteps.map((step) => (
            <div key={step.title} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
              <div className="flex items-center gap-4 mb-2">
                <div className="text-red-600 mb-4">{step.icon}</div>
                <h3 className="font-semibold text-lg">{step.title}</h3>
              </div>
              <p className="text-gray-600 text-left">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* UX/UI Design Experts */}
      <section className="mt-20 mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold text-center text-red-500 mb-12">UX/UI Design Experts - Important Role</h2>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
          {uxuiCardsWithIcons.map((item) => (
            <div
              key={item.title}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex items-center gap-2"
            >
              {item.icon} <span className="font-medium text-gray-800 font-inter">| {item.title}</span>
            </div>
          ))}
        </div>
      </section>


      {/* Who This is For */}
      <section className="mt-20 mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold mb-6">Who This is For</h2>
        <p className="mb-4">
          Businesses that want more than just a website. We create digital experiences that support marketing, sales, branding, and user engagement. Our clients range from startups to established enterprises across diverse industries.
        </p>
      </section>
      <section className="mt-12 mx-auto max-w-6xl px-6">
        {/* Business Need Text */}
        <div className="text-left text-gray-900">
          <h3 className="text-3xl font-bold mb-3">Does Your Business Need Professional Web Design?</h3>
          <p className="mb-4">
            In today’s digital world, first impressions matter. Your website is often the first interaction customers have with your brand, and it must earn their trust immediately.
            Studies show that 94% of users are less likely to trust a business with a poorly designed website. Outdated or cluttered designs can drive potential customers away.
          </p>
          <p>
            That’s why investing in professional web design services is essential — to engage visitors, strengthen your brand, and convert traffic into loyal customers.
          </p>
        </div>
      </section>

      {/* Why Choose Govira + Services */}
      <section className="mt-20 mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-semibold mb-8">Why Choose Govira</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {whyGovira.map((item) => (
              <div key={item.title} className="flex items-start gap-4 bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                <div className="text-red-600 mt-1">{item.icon}</div>
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Brand Need + Services */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-semibold mb-4">
            What Does Your Brand Need?
          </h2>

          {/* Description */}
          <p className="text-gray-600 max-w-xl mb-6">
            If you want to improve your business and achieve your digital marketing goals,
            invest in professional web design services like Govira.
          </p>

          {/* Animated Service Text */}
          <h1 className="text-5xl font-semibold tracking-tight">
            <span
              key={serviceIndex}
              className="text-red-500 transition-opacity duration-500"
            >
              {animatedServices[serviceIndex]}
            </span>
          </h1>
        </div>
      </section>

      {/* Ready to Elevate Section */}
      <section className="mt-20 text-center px-6">
        <h2 className="text-3xl font-semibold mb-6">Ready to Elevate Your Business?</h2>
        <p className="text-gray-600 mb-8">
          Invest in professional web design services with Govira to improve your online presence, generate leads, and achieve your digital marketing goals.
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

      {/* PRE-FOOTER SECTION */}
      <section className="py-16 ">
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
              <a href="tel:+91 97019 35111" className="block text-gray-500 hover:text-red-600">
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
