import Link from "next/link";

const brandElements = [
  {
    title: "Brand Strategy & Positioning",
    desc: "We define your brand’s purpose, values, and positioning to create a strong foundation that connects with your audience and differentiates you in the market.",
  },
  {
    title: "Logo Design Systems",
    desc: "Unique and versatile logo concepts designed to work seamlessly across digital, print, and marketing platforms.",
  },
  {
    title: "Color Palette & Typography",
    desc: "Carefully selected colors and fonts that reflect your brand’s personality while ensuring consistency and visual harmony.",
  },
  {
    title: "Brand Voice & Messaging",
    desc: "Clear tone-of-voice guidelines that define how your brand communicates across ads, websites, and social platforms.",
  },
  {
    title: "Imagery & Visual Style",
    desc: "Direction for photography, illustrations, and graphic elements that reinforce a unified and professional brand look.",
  },
  {
    title: "Brand Usage Guidelines",
    desc: "Practical do’s and don’ts that ensure your brand remains consistent and recognizable wherever it appears.",
  },
];

export default function BrandBooksLogosPage() {
  return (
    <main className="pt-32 bg-white">

      {/* BREADCRUMB + HERO */}
      <section className="mx-auto max-w-6xl px-6 mb-20">
        <nav className="text-sm text-gray-800 mb-4">
          <Link href="/" className="hover:text-red-500 font-bold">Home</Link> &gt;{" "}
          <Link href="/portfolio" className="hover:text-red-500 font-bold">Portfolio</Link> &gt;{" "}
          <span className="font-semibold text-gray-500">Logos & Brand Books</span>
        </nav>

        <h1 className="text-5xl md:text-4xl font-semibold text-red-500 mb-4">
          Logos & Brand Books
        </h1>

        <p className="text-3xl font-semibold text-gray-700 mb-6">
          Brands That Trust Us. Designs That Speak for Themselves.
        </p>

        <p className="text-lg text-gray-600 max-w-4xl">
          At Govira Technologies, we help startups and growing businesses build a
          strong, recognizable brand identity. Our logo and brand book designs
          are crafted to reflect your vision, values, and voice—ensuring your
          brand looks consistent, professional, and memorable across every
          platform.
        </p>
      </section>

      {/* WHAT WE CREATE – NUMBERED GRID */}
      <section className="mx-auto max-w-6xl px-6 mb-24">
        <h2 className="text-3xl font-semibold text-center mb-14">
          What Our Brand Books Cover
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0">
          {brandElements.map((item, index) => (
            <div
              key={item.title}
              className="
                relative
                p-8
                border-red-600
                border-t
                border-l
                md:[&:nth-child(3n)]:border-r
                [&:nth-last-child(-n+3)]:border-b
              "
            >
              {/* Number */}
              <span className="absolute top-5 right-5 text-2xl font-bold text-red-400">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* VALUE SECTION */}
      <section className="mx-auto max-w-6xl px-6 mb-24">
        <h2 className="text-3xl font-semibold mb-6">
          Crafted with Creativity, Backed by Strategy
        </h2>

        <p className="text-lg text-gray-600 max-w-4xl">
          Every brand has a story—and our goal is to help you tell it with clarity
          and confidence. We don’t just design logos; we create brand systems
          that build trust, improve recognition, and support long-term growth.
          Our strategic approach ensures your brand is
          built to scale.
        </p>
      </section>

      {/* CTA */}
      <section className="py-22 text-center px-6">
        <h2 className="text-3xl font-semibold mb-4">
          Need Help Building Your Brand Identity?
        </h2>

        <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
          Whether you’re launching a new brand or refining an existing one,
          Govira Technologies is here to help you create a brand identity that
          stands out and stays consistent.
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
      {/* PRE-FOOTER + FOOTER */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 grid gap-16 lg:grid-cols-5">

          {/* BRAND + SOCIAL */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Govira</h3>
            <p className="text-[var(--muted)] mb-6">
              Empowering your digital growth with expert solutions.
            </p>

            <p className="font-medium mb-2">Follow Us</p>
            <div className="flex gap-4 text-xl text-[var(--muted)]">
              <a href="#" aria-label="Facebook" className="hover:text-[var(--accent)] transition">FB</a>
              <a href="#" aria-label="Instagram" className="hover:text-[var(--accent)] transition">IG</a>
              <a href="#" aria-label="Twitter" className="hover:text-[var(--accent)] transition">TW</a>
              <a href="#" aria-label="LinkedIn" className="hover:text-[var(--accent)] transition">LI</a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2 text-[var(--muted)]">
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
            <ul className="space-y-2 text-[var(--muted)]">
              <li><Link href="/services/web-design">Web Design</Link></li>
              <li><Link href="/services/seo">SEO</Link></li>
              <li><Link href="/services/ppc">PPC</Link></li>
              <li><Link href="/services/social-media">Social Media</Link></li>
            </ul>
          </div>

          {/* INDUSTRIES */}
          <div>
            <h4 className="font-medium mb-4">Industries We Serve</h4>
            <ul className="space-y-2 text-[var(--muted)]">
              <li><Link href="/industries/real-estate">Real Estate</Link></li>
              <li><Link href="/industries/healthcare-education">Healthcare & Education</Link></li>
              <li><Link href="/industries/flooring-businesses">Flooring Businesses</Link></li>
              <li><Link href="/industries/banking-finance">Banking & Finance</Link></li>
            </ul>
          </div>

          {/* DIGITAL MARKETING */}
          <div>
            <h4 className="font-medium mb-4">Digital Marketing</h4>
            <ul className="space-y-2 text-[var(--muted)]">
              <li><Link href="/services/seo">SEO Services</Link></li>
              <li><Link href="/services/ppc-services">PPC Services</Link></li>
              <li><Link href="/services/social-media-marketing">Social Media Marketing</Link></li>
              <li><Link href="/services/content-writing">Content Writing</Link></li>
            </ul>

            <div className="mt-6">
              <p className="font-medium">Reach out to us anytime</p>
              <a href="mailto:support@govira.tech" className="block text-[var(--muted)] hover:text-[var(--accent)] transition">
                support@govira.tech
              </a>
              <a href="tel:+91 97019 35111" className="block text-[var(--muted)] hover:text-[var(--accent)] transition">
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
