import Link from "next/link";
import {
  FaGlobe,
  FaShoppingCart,
  FaUsersCog,
  FaBullhorn,
  FaSearch,
  FaMousePointer,
  FaShareAlt,
  FaMapMarkerAlt,
  FaPenNib,
  FaChartLine,
  FaEnvelope,
  FaFacebookF, FaInstagram, FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

type FooterLink = {
  label: string;
  href: string;
};

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

const webServices = [
  {
    title: "Web Design Services",
    desc: "Engaging, responsive websites designed to impress and convert visitors into customers.",
    icon: FaGlobe,
    link: "/services/web-design",
  },
  {
    title: "E-Commerce",
    desc: "User-friendly e-commerce platforms that simplify operations and boost online sales.",
    icon: FaShoppingCart,
    link: "/services/e-commerce",
  },
  {
    title: "CRM Solutions",
    desc: "Smart CRM systems to manage leads, customers, and long-term relationships effortlessly.",
    icon: FaUsersCog,
    link: "/services/crm",
  },
  {
    title: "Lead Management",
    desc: "Advanced lead management solutions to capture, nurture, and convert prospects.",
    icon: FaBullhorn,
    link: "/services/lead-generation-campaigns",
  },
];

const marketingServices = [
  {
    title: "SEO Services",
    desc: "Tailored SEO strategies that improve rankings, visibility, and organic traffic.",
    icon: FaSearch,
    link: "/services/seo",
  },
  {
    title: "Pay-Per-Click Advertising",
    desc: "ROI-driven PPC campaigns optimized for leads, sales, and scalability.",
    icon: FaMousePointer,
    link: "/services/ppc",
  },
  {
    title: "Social Media Marketing",
    desc: "Strategic content and campaigns that build engagement and brand trust.",
    icon: FaShareAlt,
    link: "/services/social-media",
  },
  {
    title: "Local Listing Services",
    desc: "Improve local search visibility and attract high-intent nearby customers.",
    icon: FaMapMarkerAlt,
    link: "",
  },
  {
    title: "Compelling Content",
    desc: "SEO-optimized content that informs, engages, and converts your audience.",
    icon: FaPenNib,
    link: "/services/content-marketing",
  },
  {
    title: "Conversion Rate Optimization",
    desc: "Data-driven CRO strategies to maximize leads and sales from existing traffic.",
    icon: FaChartLine,
    link: "/services/conversion-rate-optimization",
  },
  {
    title: "Email Marketing",
    desc: "Targeted email campaigns that nurture leads and build lasting relationships.",
    icon: FaEnvelope,
    link: "/services/email-marketing",
  },
];

export default function ServicesPage() {
  return (
    <main className="pt-32">
      <section className="mx-auto max-w-6xl mb-10">
        {/* BREADCRUMB */}
        <nav className="text-sm text-gray-800 mb-4 -ml-8">
          <Link href="/" className="hover:text-red-500 font-bold">
            Home
          </Link>{" "}
          &gt;{" "}
          <Link href="/services" className="text-gray-500 hover:text-red-500 font-bold">
            Services
          </Link>{" "}
        </nav>
      </section>
      {/* HERO */}
      {/*<section className="mx-auto max-w-7xl px-6 mb-24">
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
          Our Digital Marketing Services
        </h1>

        <p className="mt-6 max-w-3xl text-lg text-gray-500">
          We assist you in attaining digital growth by building responsive websites
          and performance-driven strategies that enhance brand visibility and ROI.
        </p>
      </section>*/}

      {/* WEB SERVICES */}
      {/* Main Content Wrapper */}
      <section className="relative py-0">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-12">

            {/* LEFT SIDEBAR - STICKY TITLE */}
            <div className="lg:col-span-3 lg:sticky lg:top-32 lg:h-fit">
              <h1 className="text-4xl md:text-4xl font-semibold tracking-tight text-red-600 leading-tight">
                Our Digital Marketing Services
              </h1>
              <p className="mt-6 text-lg text-gray-500">
                We assist you in attaining digital growth by building responsive websites
                and performance-driven strategies that enhance brand visibility and ROI.
              </p>
            </div>

            {/* RIGHT CONTENT - STACKED SECTIONS */}
            <div className="lg:col-span-7 space-y-24">

              {/* WEB SERVICES BLOCK */}
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl font-semibold leading-tight">
                    Web Solutions Designed to Deliver Real Results
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
                    We design and develop digital solutions that are scalable,
                    conversion-focused, and built for long-term success.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-8">
                  {webServices.map(({ title, desc, icon: Icon, link }) => (
                    <Link
                      key={title}
                      href={link}
                      className="rounded-xl border border-[#e5e5e5] bg-white p-6 flex flex-col gap-4 hover:shadow-md transition-all"
                    >
                      <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                        <Icon className="text-red-600 text-xl" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {desc}
                      </p>
                      <span className="text-sm font-medium text-red-600 mt-auto">
                        Know More →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
              {/* MARKETING SERVICES BLOCK */}
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl font-semibold leading-tight">
                    Digital Marketing Services Tailored for Success
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
                    Strategic digital marketing services designed to maximize reach,
                    engagement, and measurable business growth.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-8">
                  {marketingServices.map(({ title, desc, icon: Icon, link }) => (
                    <Link
                      key={title}
                      href={link}
                      className="rounded-xl border border-[#e5e5e5] bg-white p-6 flex flex-col gap-4 hover:shadow-md transition-all"
                    >
                      <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                        <Icon className="text-red-600 text-xl" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {desc}
                      </p>
                      <span className="text-sm font-medium text-red-600 mt-auto">
                        Know More →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <h2 className="text-4xl font-semibold">
          Want to know if we can help you with your website?
        </h2>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-500">
          Contact Govira today and discover how our digital solutions can
          accelerate your growth.
        </p>

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
      </section>
      {/* PRE-FOOTER SECTION */}
      <section className="py-14">
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
