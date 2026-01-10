"use client";

import Link from "next/link";
import { useState } from "react";
import ContactModal from "@/components/ui/ContactModal";
import { FaChevronDown } from "react-icons/fa6";

import dynamic from "next/dynamic";

const ContactForm = dynamic(
  () => import("@/components/ui/ContactForm"),
  { ssr: false }
);

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-white shadow-none">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">

          {/* LEFT LOGO */}
          <Link href="/" className="text-2xl font-bold text-red-600">
            Govira
          </Link>

          {/* CENTER NAV */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className="nav-link">
              Home
            </Link>

            {/* SERVICES */}
            <div className="relative group">
              <Link
                href="/services"
                className="nav-link cursor-pointer flex items-center gap-1">
                Services
                <FaChevronDown className="text-xs mt-[3px]" />
              </Link>

              <div className="dropdown">
                <Link href="/services/web-design">Website Design</Link>
                <Link href="/services/seo">SEO Services</Link>
                <Link href="/services/lead-generation-campaigns">
                  Lead Generation Campaigns
                </Link>
                <Link href="/services/social-media">
                  Social Media Marketing
                </Link>
                <Link href="/services/ppc">PPC Services</Link>
                <Link href="/services/branding">
                  Logo & Brand Book Design
                </Link>
              </div>
            </div>

            {/* INDUSTRIES */}
            <div className="relative group">
              <Link
                href="/industries"
                className="nav-link cursor-pointer flex items-center gap-1">
                Industries
                <FaChevronDown className="text-xs mt-[3px]" />
              </Link>

              <div className="dropdown">
                <Link href="/industries/real-estate">Real Estate</Link>
                <Link href="/industries/education-healthcare">
                  Healthcare & Education
                </Link>
                <Link href="/industries/flooring">
                  Flooring Businesses
                </Link>
                <Link href="/industries/banking-financial">
                  Banking & Finance
                </Link>
                <Link href="/industries/consumer-goods">
                  Consumer Goods
                </Link>
                <Link href="/industries/retail-manufacturing">
                  Retail & Manufacturing
                </Link>
                <Link href="/industries/transportation-logistics">
                  Transportation & Logistics
                </Link>
              </div>
            </div>

            {/* PORTFOLIO */}
            <div className="relative group">
              <Link
                href="/portfolio"
                className="nav-link cursor-pointer flex items-center gap-1">
                Portfolio
                <FaChevronDown className="text-xs mt-[3px]" />
              </Link>

              <div className="dropdown">
                <Link href="/portfolio/websites">Websites</Link>
                <Link href="/portfolio/brandbooks-logos">Logos & Brand Books</Link>
                <Link href="/portfolio/social-creatives">SMO Creatives</Link>
              </div>
            </div>

            <Link href="/testimonials" className="nav-link">
              Testimonials
            </Link>

            <Link href="/contact" className="nav-link">
              Contact
            </Link>
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setModalOpen(true)}
              className="hidden lg:inline-block rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
            >
              Book a Call
            </button>
            <ContactModal open={isModalOpen} onClose={() => setModalOpen(false)} />

            {/* HAMBURGER */}
            <button
              onClick={() => setOpenMenu(true)}
              className="lg:hidden text-red-600 text-2xl"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE / SIDE MENU */}
      {openMenu && (
        <div className="fixed inset-0 z-50 bg-white p-6 overflow-y-auto">
          <button
            onClick={() => setOpenMenu(false)}
            className="text-2xl mb-6"
          >
            ✕
          </button>

          <div className="space-y-6">
            <Section title="Company">
              <MenuLink href="/">Home</MenuLink>
              <MenuLink href="/about">About Us</MenuLink>
              <MenuLink href="/contact">Contact Us</MenuLink>
              <MenuLink href="/careers">Careers</MenuLink>
              <MenuLink href="/testimonials">Testimonials</MenuLink>
              <MenuLink href="/blog">Blog</MenuLink>
              <MenuLink href="/faq">FAQ</MenuLink>
            </Section>

            <Section title="Website Services">
              <MenuLink href="/services/web-design">Web Design</MenuLink>
              <MenuLink href="/services/logo-brand-book-design">
                Logo & Brand Book Design
              </MenuLink>
              <MenuLink href="/services/ecommerce">E-Commerce Website</MenuLink>
              <MenuLink href="/services/crm">CRM System</MenuLink>
              <MenuLink href="/services/lead-generation-campaigns">
                Lead Management
              </MenuLink>
            </Section>

            <Section title="Digital Marketing">
              <MenuLink href="/services/seo">SEO Services</MenuLink>
              <MenuLink href="/services/lead-generation-campaigns">
                Lead Generation Campaigns
              </MenuLink>
              <MenuLink href="/services/social-media-marketing">
                Social Media Marketing
              </MenuLink>
              <MenuLink href="/services/ppc-services">PPC Services</MenuLink>
              <MenuLink href="/services/local-listing">
                Local Listing
              </MenuLink>
              <MenuLink href="/services/content-writing">
                Content Writing
              </MenuLink>
              <MenuLink href="/services/conversion-rate-optimization">
                Conversion Rate Optimization
              </MenuLink>
              <MenuLink href="/services/email-marketing">
                Email Marketing
              </MenuLink>
            </Section>

            <Section title="Portfolio">
              <MenuLink href="/portfolio/websites">Websites</MenuLink>
              <MenuLink href="/portfolio/logos">Logos & Brand Books</MenuLink>
              <MenuLink href="/portfolio/smo-creatives">
                SMO Creatives
              </MenuLink>
            </Section>
          </div>
        </div>
      )}
    </header>
  );
}

/* HELPERS */
function Section({ title, children }: any) {
  return (
    <div>
      <h3 className="mb-2 text-lg font-semibold text-red-600">{title}</h3>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

function MenuLink({ href, children }: any) {
  return (
    <Link href={href} className="block text-gray-700 hover:text-red-600">
      {children}
    </Link>
  );
}

