import Footer from "@/components/footer/Footer";
import Link from "next/link";
import {
  FaBuilding,
  FaTools,
  FaHospital,
  FaPiggyBank,
  FaStore,
  FaTruck,
  FaPlane,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
type FooterLink = {
  label: string;
  href: string;
};

const footerWebsiteServices: FooterLink[] = [
  { label: "Web Design", href: "/services/web-design" },
  { label: "E-Commerce", href: "/services/ecommerce" },
  { label: "CRM Solutions", href: "/services/crm" },
  { label: "Lead Management", href: "/services/lead-generation-campaigns" },
];

const footerIndustries: FooterLink[] = [
  { label: "Real Estate", href: "/industries/real-estate" },
  { label: "Healthcare & Education", href: "/industries/healthcare-education" },
  { label: "Flooring Businesses", href: "/industries/flooring" },
  { label: "Banking & Finance", href: "/industries/banking-finance" },
];

const footerDigitalMarketing: FooterLink[] = [
  { label: "SEO Services", href: "/services/seo" },
  { label: "PPC Services", href: "/services/ppc-services" },
  { label: "Social Media Marketing", href: "/services/social-media-marketing" },
  { label: "Content Writing", href: "/services/content-writing" },
  { label: "Email Marketing", href: "/services/email-marketing" },
];

const industries = [
  {
    title: "Real Estate",
    desc: "Govira brings over a decade of real estate marketing expertise. From website management to lead generation, we combine digital innovation with industry insight to fuel business growth.",
    icon: FaBuilding,
    link: "/industries/real-estate",
  },
  {
    title: "Flooring Businesses",
    desc: "The flooring industry is seeing a surge in online demand and competition. Govira delivers data-driven digital marketing solutions to generate leads, boost visibility, and help flooring businesses grow online.",
    icon: FaTools,
    link: "/industries/flooring",
  },
  {
    title: "Health Industry Marketing",
    desc: "Govira offers affordable and intelligent digital marketing for the healthcare sector. We help clients meet their goals through strategic insight and innovative tools.",
    icon: FaHospital,
    link: "/industries/education-healthcare",
  },
  {
    title: "Insurance",
    desc: "Govira provides cost-effective digital marketing tailored for the insurance sector. Our strategy blends experience and innovation to drive performance and achieve marketing goals efficiently.",
    icon: FaPiggyBank,
    link: "/industries/banking-financial",
  },
  {
    title: "Retail & Manufacturing",
    desc: "Retail and manufacturing brands need standout digital strategies. Govira helps brands define their value, drive engagement, and generate measurable growth.",
    icon: FaStore,
    link: "/industries/retail-manufacturing",
  },
  {
    title: "Transport & Logistics",
    desc: "Govira crafts custom digital marketing for logistics and transport businesses. Our solutions enhance operations, optimize distribution, and unlock new growth opportunities.",
    icon: FaTruck,
    link: "/industries/transportation-logistics",
  },
];

export default function IndustriesPage() {
  return (
    <main className="pt-32 bg-white">
      {/* BREADCRUMB */}
      <div className="mx-auto max-w-6xl px-6 mb-4">
        <nav className="text-sm text-gray-900">
          <Link href="/" className="hover:text-red-500">
            <strong>Home</strong>
          </Link>{" "}
          &gt; Industries
        </nav>
      </div>

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 mb-20">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-red-500">
          Business-Specific Strategies for Online Growth
        </h1>

        <p className="mt-6 max-w-3xl text-lg text-gray-500">
          With our deep understanding of diverse industries, we develop customized strategies tailored to the unique needs of each business, ensuring long-term growth and success.
        </p>
      </section>

      {/* INDUSTRY CARDS (same layout as Services Page) */}
      <section className="relative py-6">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {industries.map(({ title, desc, icon: Icon, link }) => (
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
      </section>

      {/* CTA Section */}
      <section className="py-12 text-center mx-auto max-w-6xl px-6">
        <h2 className="text-4xl font-semibold">
          Want to know if we are the correct fit for your Business?
        </h2>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-500">
          Our strength lies in designing and executing strategic plans uniquely customized for each business, helping them navigate challenges and unlock their full potential.
        </p>

        <div className="mt-10 flex justify-center gap-6">
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
