import Link from "next/link";
import Image from "next/image";
import { FaBullhorn, FaChartLine, FaUsersCog, FaEnvelope } from "react-icons/fa";
import Footer from "@/components/footer/Footer";
import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
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
const servicesBoxes = [
  "Exclusive Landing Page",
  "Lead Management System",
  "Lead Reporting System",
  "User Management",
  "High Impact FB Business Page",
  "Facebook & Instagram Ads",
  "Attractive Ad Copies & Ads",
  "Different kinds of Ads",
];

const workflowSteps = [
  { icon: <FaBullhorn className="text-red-600 text-2xl" />, title: "Ad Spending", desc: "Optimize your ad budgets efficiently" },
  { icon: <FaUsersCog className="text-red-600 text-2xl" />, title: "Custom Audience", desc: "Target the right audience for maximum ROI" },
  { icon: <FaChartLine className="text-red-600 text-2xl" />, title: "Ad Technologies", desc: "Advanced tools for tracking and optimizing campaigns" },
  { icon: <FaEnvelope className="text-red-600 text-2xl" />, title: "Account Manager", desc: "Dedicated manager to guide your campaigns" },
  { icon: <FaChartLine className="text-red-600 text-2xl" />, title: "Reporting", desc: "Weekly & monthly performance insights" },
];

const reasons = [
  "Expertly designed real estate websites that captivate visitors.",
  "Paid ads crafted to maximize leads and conversions.",
  "Dedicated social media strategies to enhance online presence.",
  "Traffic growth, lead generation, and sales optimization.",
  "Branding executed with the latest technology trends.",
  "Tailored social media campaigns to complement your real estate business.",
];

export default function RealEstatePage() {
  return (
    <main className="pt-32 bg-white">
    {/* Breadcrumb + Hero */}
      <section className="mx-auto max-w-6xl px-6 mb-16">
        <nav className="text-sm text-gray-800 mb-4">
          <Link href="/" className="hover:text-red-500 font-bold">Home</Link> &gt;{" "}
          <Link href="/industries" className="hover:text-red-500 font-bold">Industries</Link> &gt;{" "}
          <span className="font-semibold text-gray-500">Real Estate Services</span>
        </nav>

        <h1 className="text-5xl md:text-4xl font-semibold text-red-500 mb-4">
          AI-Powered Digital Marketing for Real Estate
        </h1>

        <p className="text-lg text-gray-600 max-w-5xl">
          Drive more leads, sales, and engagement with Govira’s expert strategies tailored for real estate businesses. 
          With our experience, we know the market inside out and help your brand stand out online.
        </p>

        <p className="text-lg text-gray-600 max-w-5xl">
          From lead generation and social media marketing to conversion-focused ad campaigns, we design strategies that boost revenue, elevate brand reputation, and make your business thrive.
        </p>
      </section>

      {/* WHAT WE DO */}
      <section className="mx-auto max-w-6xl px-6 mb-20">
        <h2 className="text-3xl font-semibold text-center mb-12">
          What We Do for Your Real Estate Business
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-3">Tailored Business Strategies</h3>
            <p className="text-gray-600 leading-relaxed">
              We analyze your business model and craft a custom marketing strategy suited to current market trends. 
              Using SEO, PPC, Facebook Ads, and more, we strengthen your online presence and generate measurable results.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">AIDA Marketing Strategy</h3>
            <p className="text-gray-600 leading-relaxed">
              Attention, Interest, Desire & Action. We design campaigns that follow the AIDA framework to attract your ideal clients, spark interest, drive desire, and prompt them to take action.
            </p>
          </div>
        </div>
      </section>

      {/* WEBSITE PACKAGE */}
      <section className="mx-auto max-w-6xl px-6 mb-24">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Our Real Estate Website Package
        </h2>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
          {/* Boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 flex-1">
            {servicesBoxes.map((service, i) => (
              <div
                key={i}
                className="border border-red-600 p-6 text-center font-medium text-gray-700 hover:bg-red-50 transition"
              >
                {service}
              </div>
            ))}
          </div>

          {/* Animated Buildings */}
          <div className="flex-1 flex justify-center md:justify-end">
            <Image
              src="/images/real-estate-building.png"
              alt="Real Estate Building"
              width={400}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="mx-auto max-w-6xl px-6 mb-24">
        <h2 className="text-3xl font-semibold text-center mb-12">Our Regular Approach</h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {workflowSteps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center relative">
              <div className="p-4 bg-red-100 rounded-full mb-3">{step.icon}</div>
              <h4 className="font-semibold">{step.title}</h4>
              <p className="text-gray-500 text-sm">{step.desc}</p>

              {/* Arrow except last */}
              {i < workflowSteps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-[-50px] -mt-6 transform -translate-y-1/2 text-red-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="40"
                    viewBox="0 0 32 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="2" y1="12" x2="28" y2="12" />
                    <polyline points="20 5 28 12 20 19" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* REASONS TO CHOOSE US */}
      <section className="mx-auto max-w-6xl px-6 mb-24">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Reasons to Choose Govira for Your Real Estate Business
        </h2>

        <ul className="space-y-4 text-gray-600 list-disc list-inside">
          {reasons.map((reason, i) => (
            <li key={i}>{reason}</li>
          ))}
        </ul>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-xl font-medium mb-4">Submit your website today for a FREE analysis</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <input
              type="text"
              placeholder="Enter your website URL"
              className="border border-gray-300 rounded px-4 py-2 w-full sm:w-80 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <button className="bg-red-600 text-white rounded px-6 py-2 hover:bg-red-700 transition">
              Submit
            </button>
          </div>
          <p className="mt-6 text-gray-500 italic">
            “Effective Communication is our goal in every aspect of our business.”
          </p>
        </div>
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
              <li><Link href="/about">About Us</Link></li>
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
