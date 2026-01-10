import Link from "next/link";
import PortfolioCard from "@/components/sections/PortfolioCard";
import ContactForm from "@/components/ui/ContactForm";
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
import Footer from "@/components/footer/Footer";

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

const portfolioData = [
  {
    title: "Veereance",
    type: "E-Commerce Platform",
    description: "Modern online store with seamless checkout and clothes catalog",
  },
  {
    title: "Anchor Space",
    type: "Website",
    description:
      "Complete branding package with functional website for a co-working space",
  },
  {
    title: "Raksha Safety App",
    type: "Mobile App",
    description:
      "iOS and Android app for personal safety with real-time location tracking",
  },
  {
    title: "Aditi Infrastructures",
    type: "Website",
    description:
      "Leading real estate developer specializing in residential and commercial properties",
  },
  {
    title: "ARK Industries",
    type: "Website",
    description:
      "Manufacturing company website with fastening products and solutions",
  },
  {
    title: "Habit Tracker App",
    type: "Mobile App",
    description:
      "Comprehensive health and fitness tracking app for iOS and Android",
  },
];

export default function PortfolioPage() {
  return (
    <main className="pt-32">

      {/* BREADCRUMB */}
      <div className="mx-auto max-w-6xl px-6 mb-4">
        <nav className="text-sm text-gray-900">
          <Link href="/" className="hover:text-red-500">
            <strong>Home</strong>
          </Link>{" "}
          &gt; Portfolio
        </nav>
      </div>

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 mb-20">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-red-500 mb-4">
          Our Portfolio
        </h1>

        <p className="text-3xl font-semibold text-gray-700 mb-4">
          Driving Exceptional Results with Innovative Strategies
        </p>

        <p className="mt-4 max-w-4xl text-lg text-gray-500">
          At Govira, we prioritize tangible results, showcased in our diverse
          portfolio. Our unconventional approach to digital marketing challenges
          norms, delivering exceptional outcomes across industries, including
          real estate. From flooring to insurance, our innovative digital
          marketing tactics drive success, exceeding expectations and propelling
          businesses forward.
        </p>
      </section>

      {/* PORTFOLIO GRID */}
      <section className="mx-auto max-w-6xl px-6 mb-28">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.map((item, idx) => (
            <PortfolioCard key={idx} item={item} />
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


      {/* CTA */}
      <section className="py-24 bg-[var(--subtle)] text-center">
        <h2 className="text-4xl font-semibold">
          Elevate your Business with Govira
        </h2>

        <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-500">
          If you're ready to experience the power of results-driven digital
          marketing, look no further than Govira. Our proven success across
          industries, bold strategies, and client trust set us apart.
          Let’s help your business thrive in today’s competitive digital
          landscape.
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

      {/* PRE-FOOTER + FOOTER */}
      <Footer />

    </main>
  );
}
