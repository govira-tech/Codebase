import Footer from "@/components/footer/Footer";
import Link from "next/link";
import { FaDesktop, FaSearch, FaChartLine, FaBullhorn, FaLocationArrow, FaHandshake, FaDollarSign, FaUsers, FaKey } from "react-icons/fa";

const servicesBoxes = [
  { title: "Flooring Website", icon: <FaDesktop size={24} /> },
  { title: "SEO Strategy", icon: <FaSearch size={24} /> },
  { title: "Social Media Promotions", icon: <FaBullhorn size={24} /> },
  { title: "Brand Reputation", icon: <FaChartLine size={24} /> },
  { title: "Local Presence", icon: <FaLocationArrow size={24} /> },
  { title: "Pay Per Click", icon: <FaDollarSign size={24} /> },
  { title: "Traffic Improvements", icon: <FaChartLine size={24} /> },
  { title: "Keyword Improvements", icon: <FaKey size={24} /> },
  { title: "Lead Conversion", icon: <FaUsers size={24} /> },
];

// Flooring Page Content
export default function FlooringPage() {
  return (
    <main className="pt-32">
      {/* HERO VIDEO WITH OVERLAY CONTENT */}
      <section className="mx-auto max-w-7xl px-6 -mt-16 mb-12">
        <div className="relative rounded-2xl overflow-hidden border">

          {/* VIDEO */}
          <video
            src="/videos/Flooring_GIF_Generation.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-[420px] md:h-[560px] object-cover"
          />

          {/* DARK GRADIENT (readability) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

          {/* OVERLAY CONTENT */}
          <div className="absolute inset-0 flex items-end">
            <div className="p-8 md:p-12 max-w-4xl text-white">

              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
                Digital Solutions
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium text-white/90 mb-6">
                Built for Today’s Fast-Growing Flooring Brands
              </h2>

              <p className="text-lg text-white/80 max-w-2xl">
                We can change Your Future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO FOR YOUR FLOORING BUSINESS */}
      <section className="mx-auto max-w-6xl px-6 mb-20">
        <h2 className="text-3xl font-semibold text-center mb-14">
          What We Do for Your Flooring Business
        </h2>

        {/* Table */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0">
          {servicesBoxes.map((service, index) => (
            <div
              key={index}
              className="
              relative
              p-8
              border-red-600
              border-t
              border-l
              md:[&:nth-child(3n)]:border-r
              [&:nth-last-child(-n+3)]:border-b
              text-center"
            >
              {/* Number */}
              <span className="absolute top-5 right-5 text-2xl font-bold text-red-400">
                {String(index + 1).padStart(2, '0')}
              </span>

              {/* Icon */}
              <div className="mb-4 flex justify-center text-red-600 text-3xl">{service.icon}</div>
              {/* Title */}
              <h3 className="font-semibold text-lg text-gray-900">{service.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* OUR FLOORING WEBSITE PACKAGE INCLUDES */}
      <section className="mx-auto max-w-6xl px-6 mb-20">
        <h2 className="text-3xl font-semibold text-center mb-14">
          Our Flooring Website Package Includes
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {[
            "User-friendly Website",
            "Lead Management System",
            "Lead Reporting System",
            "Email Campaigns",
            "Blog (News Articles)",
            "Promotional Management",
            "Estimate & Invoice Creator",
            "Room Scene Creator",
            "Smart Wall Communication",
            "Employment Database Manager",
            "User Management",
            "Social Media Manager",
          ].map((item, index) => (
            <div
              key={index}
              className="
          group
          flex
          items-center
          gap-3
          rounded-full
          border
          border-red-200
          bg-red-50/50
          px-6
          py-3
          text-gray-800
          transition
          hover:-translate-y-1
          hover:border-red-600
          hover:bg-white
        "
            >
              {/* Accent dot */}
              <span className="h-2 w-2 rounded-full bg-red-600 flex-shrink-0"></span>

              <span className="font-medium">
                {item}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* REASONS TO CHOOSE US */}
      <section className="mx-auto max-w-6xl px-6 mb-20">
        <h2 className="text-3xl font-semibold text-center mb-14">
          Reasons to Choose Govira as Your Flooring Digital Marketing Partner
        </h2>
        <ul className="list-disc list-inside text-lg text-gray-600">
          <li>We specialize in designing flooring websites that engage and convert.</li>
          <li>Our dedicated social media marketers will elevate your business online.</li>
          <li>We employ creative branding strategies backed by the latest technologies.</li>
          <li>Our paid ads will deliver quick and impactful results for your business.</li>
          <li>We have battle-tested strategies to grow organic traffic, leads, and sales.</li>
          <li>Our SEO strategies are tailored to complement and enhance your flooring business.</li>
        </ul>
      </section>

      {/* FREE ANALYSIS */}
      <section className="mx-auto max-w-6xl px-6 mb-24 text-center">
        <h2 className="text-3xl font-semibold text-red-500 mb-6">
          Submit Your Website Today for FREE Analysis
        </h2>
        <div className="flex justify-center items-center gap-4">
          <input
            type="url"
            placeholder="Enter your website URL"
            className="px-4 py-2 border border-gray-300 rounded-md"
          />
          <button className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition">
            Submit
          </button>
        </div>
        <p className="mt-4 text-gray-600">
          “Effective Communication is our goal in every aspect of our business.”
        </p>
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
      <Footer />
    </main >
  );
}
