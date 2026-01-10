// app/page.tsx
"use client";

import Link from "next/link";
import FAQItem from "@/components/ui/FAQItem";
import SocialSidebar from "@/components/ui/SocialSidebar";
import { FaLaptopCode, FaShoppingCart, FaSearch, FaUsers, FaChartLine, FaBullseye, FaDollarSign, FaCogs } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// Top of your file
const testimonials = [
  {
    quote: "Govira provided excellent services for SOP implementation and manufacturing monitoring, ensuring smooth operations.",
    company: "ARK Industries.",
  },
  {
    quote: "Thanks to Govira's e-commerce solutions, our sales have grown tremendously and our online presence has improved.",
    company: "Veereance",
  },
  {
    quote: "Professional, responsive, and innovative. Govira transformed our app idea into a successful product.",
    company: "Habit Tracker",
  },
  {
    quote: "Their digital marketing strategy doubled our leads and helped us reach the right audience efficiently.",
    company: "Anchor Space",
  },
  {
    quote: "Outstanding UX design and a seamless mobile launch—Govira made it effortless for our team.",
    company: "Raksha",
  },
  {
    quote: "Highly recommend Govira for real estate digital solutions, their expertise and support are unmatched.",
    company: "Aditi Infrastructures & Developers",
  },
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
  { label: "Lead Generation", href: "/services/lead-generation-campaigns" },
  { label: "Social Media Marketing", href: "/services/social-media" },
  { label: "PPC Services", href: "/services/ppc" },
  { label: "Content Marketing", href: "/services/content-marketing" },
  { label: "Email Marketing", href: "/services/email-marketing" },
  { label: "Conversion Rate Optimization", href: "/services/conversion-optimization" },
];

const services = [
  {
    title: "Web Design",
    desc: "Beautiful, responsive websites that captivate your audience.",
    icon: FaLaptopCode,
    link: "/services/web-design",
  },
  {
    title: "E-Commerce",
    desc: "Powerful online stores with seamless shopping experiences.",
    icon: FaShoppingCart,
    link: "/services/e-commerce",
  },
  {
    title: "SEO",
    desc: "Boost visibility and rank higher in search results.",
    icon: FaSearch,
    link: "/services/seo",
  },
  {
    title: "Lead Management",
    desc: "Capture, nurture, and convert leads efficiently.",
    icon: FaUsers,
    link: "/services/lead-generation-campaigns",
  },
  {
    title: "Social Media Marketing",
    desc: "Build brand presence across all platforms.",
    icon: FaChartLine,
    link: "/services/social-media",
  },
  {
    title: "Conversion Optimization",
    desc: "Turn more visitors into customers.",
    icon: FaBullseye,
    link: "/services/conversion-optimization",
  },
  {
    title: "PPC",
    desc: "Targeted pay-per-click campaigns that deliver results.",
    icon: FaDollarSign,
    link: "/services/ppc",
  },
  {
    title: "CRM Solutions",
    desc: "Customized CRM systems for better relationships.",
    icon: FaCogs,
    link: "/services/crm",
  },
  {
    title: "Data Analytics",
    desc: "Data-driven insights to fuel business growth.",
    icon: FaChartLine,
    link: "/services/data-analytics",
  },
];

const faqs = [
  {
    question: "What services does Govira Technologies offer?",
    answer:
      "We offer web design, e-commerce development, SEO, lead management, social media marketing, conversion optimization, PPC campaigns, and CRM solutions.",
  },
  {
    question: "How long does it take to complete a typical project?",
    answer:
      "Websites usually take 4–6 weeks. Complex platforms can take 3–6 months depending on scope.",
  },
  {
    question: "Do you work with specific industries?",
    answer:
      "Yes. Hotels, restaurants, schools, hospitals, e-commerce, and corporate sectors.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "Flexible pricing based on requirements with transparent proposals.",
  },
  {
    question: "Do you provide support after project completion?",
    answer:
      "Yes. We offer ongoing maintenance and optimization packages.",
  },
  {
    question: "Can you help with digital marketing?",
    answer:
      "Absolutely. SEO, PPC, social media, and CRO for new or existing websites.",
  },
  {
    question: "How do I get started?",
    answer:
      "Contact us via the form or phone for a free consultation.",
  },
  {
    question: "Do you use templates?",
    answer:
      "No. Every solution is custom-built for your brand.",
  },
];

export default function HomePage() {
  return (

    <main className="pt-32 bg-white text-black">
      <SocialSidebar />

      {/* HERO VIDEO WITH OVERLAY CONTENT */}
      <section className="mx-auto max-w-7xl px-6 -mt-16 mb-28">
        <div className="relative rounded-2xl overflow-hidden border">

          {/* VIDEO */}
          <video
            src="/videos/Intro.mp4"
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

              <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
                We build digital systems
                <br />
                that{" "}
                <span className="text-[var(--accent)]">
                  turn attention into growth
                </span>
                .
              </h1>

              <p className="mt-6 text-lg text-white/80 max-w-2xl">
                Govira Technologies partners with ambitious businesses to design,
                develop, and scale high-impact digital experiences.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="bg-[var(--accent)] text-white px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition"
                >
                  Start a Project
                </Link>
                <Link
                  href="/portfolio"
                  className="px-6 py-3 rounded-full text-sm border border-white/40 hover:border-white transition"
                >
                  View Work
                </Link>
              </div>

              {/* STATS */}
              <div className="mt-10 flex flex-wrap gap-10 text-sm text-white/70 text-center">
                <span>
                  <strong className="text-white">5+</strong> Projects Delivered
                </span>
                <span>
                  <strong className="text-white">Growth-Focused</strong> Strategy
                </span>
                <span>
                  <strong className="text-white">Senior</strong> Team Only
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/*  I kept wantedly like this, if no video then u can comment out this til hero section
        INTRO VIDEO 
        <section className="mx-auto max-w-7xl px-6 mb-18">
             <div className="rounded-2xl overflow-hidden border">
            <video
            src="/videos/Intro.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-[360px] md:h-[420px] object-cover"/>
            </div>
        </section>

       /* HERO  
      <section className="mx-auto max-w-7xl px-6">
        <h1 className="text-5xl md:text-7xl font-semibold leading-tight tracking-tight">
          We build digital systems
          <br />
          that{" "}
          <span className="text-[var(--accent)]">
            turn attention into growth
          </span>
          .
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-[var(--muted)]">
          Govira Technologies partners with ambitious businesses to design,
          develop, and scale high-impact digital experiences.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="bg-[var(--accent)] text-white px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition"
          >
            Start a Project
          </Link>
          <Link
            href="/portfolio"
            className="px-6 py-3 rounded-full text-sm border hover:border-[var(--accent)] transition"
          >
            View Work
          </Link>
        </div>

        /* Inline Stats (NO CARDS) 
        <div className="mt-16 flex flex-wrap gap-8 text-sm text-[var(--muted)]">
          <span>
            <strong className="text-[var(--text)]">5+</strong> Projects Delivered
          </span>
          <span>
            <strong className="text-[var(--text)]">Growth-Focused</strong>{" "}
            Strategy
          </span>
          <span>
            <strong className="text-[var(--text)]">Senior</strong> Team Only
          </span>
        </div>
      </section> */}

      {/* SERVICES – Sticky Grid Layout */}
      <section className="relative py-18">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-12">

            {/* LEFT – SCROLLING CONTENT (30%) */}
            <div className="lg:col-span-3 lg:sticky lg:top-32 lg:h-fit">
              <h2 className="text-4xl font-semibold leading-tight">
                Our Services
              </h2>

              <p className="mt-6 text-lg text-[var(--muted)]">
                From strategy to execution, we offer a full range of digital marketing and
                web development services tailored to help your brand thrive online.
              </p>

              <div className="mt-8">
                <Link
                  href="/services"
                  className="rounded-full bg-red-600 px-8 py-3 text-white hover:bg-red-700 transition"
                >
                  All Services
                </Link>
              </div>
            </div>

            {/* RIGHT – STICKY SERVICES GRID (70%) */}
            <div className="lg:col-span-7">
              <div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {services.map(({ title, desc, icon: Icon, link }, i) => (
                    <Link
                      href={link}
                      key={i}
                      className="relative rounded-xl border bg-white p-4 flex flex-col items-start gap-4 border-red-600 hover:shadow-lg transition"
                    >
                      {/* Number */}
                      <span className="absolute top-5 right-5 text-2xl font-bold text-red-400">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <Icon className="text-3xl text-[var(--accent)]" />
                      <h3 className="text-xl font-medium">{title}</h3>
                      <p className="mt-2 text-sm text-[var(--muted)]">{desc}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-4xl font-semibold text-center">
            Industries We Serve
          </h2>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Hotels",
              "Restaurants",
              "Schools",
              "Hospitals",
              "E-Commerce",
              "Corporate",
            ].map((industry) => (
              <div
                key={industry}
                className="rounded-lg border p-6 text-center hover:border-[var(--accent)] transition"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* PORTFOLIO */}
      <section className="py-1">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-4xl font-semibold text-center">
            Our Portfolio
          </h2>

          <h1 className="text-2xl font-semibold text-center mt-4 text-gray-800">
            Showing our best work across websites, e-commerce & apps
          </h1>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["Veereance", "E-Commerce Platform"],
              ["Anchor Space", "Website"],
              ["Raksha Safety App", "Mobile App"],
              ["Aditi Infrastructures", "Website"],
              ["ARK Industries", "Website"],
              ["Habit Tracker App", "Mobile App"],
            ].map(([title, type]) => (
              <div key={title} className="rounded-xl border bg-white p-6">
                <h3 className="text-lg font-medium">{title}</h3>
                <p className="mt-1 text-sm text-[var(--muted)]">{type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CLIENT LOGOS MARQUEE */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 space-y-8">

          {/* Row 1: left → right */}
          <div className="overflow-hidden relative">
            <div className="flex w-max animate-scroll-left gap-16">
              {[
                "/logos/veeraence.png",
                "/logos/anchor-space.jpeg",
                "/logos/raksha.jpg",
                "/logos/aditi.jpeg",
                "/logos/ark-industries.png",
                "/logos/habit-tracker.png",
              ].map((logo: string, idx: number) => (
                <img
                  key={`row1-${idx}`}
                  src={logo}
                  alt={`Client logo ${idx + 1}`}
                  className="h-20 md:h-24 w-auto object-contain transition"
                />
              ))}

              {/* duplicate for seamless scroll */}
              {[
                "/logos/veeraence.png",
                "/logos/anchor-space.jpeg",
                "/logos/raksha.jpg",
                "/logos/aditi.jpeg",
                "/logos/ark-industries.png",
                "/logos/habit-tracker.png",
              ].map((logo: string, idx: number) => (
                <img
                  key={`row1-dup-${idx}`}
                  src={logo}
                  alt={`Client logo duplicate ${idx + 1}`}
                  className="h-20 md:h-24 w-auto object-contain transition"
                />
              ))}
            </div>
          </div>

          {/* Row 2: right → left */}
          <div className="overflow-hidden relative">
            <div className="flex w-max animate-scroll-right gap-16">
              {[
                "/logos/veeraence.png",
                "/logos/anchor-space.jpeg",
                "/logos/raksha.jpg",
                "/logos/aditi.jpeg",
                "/logos/ark-industries.png",
                "/logos/habit-tracker.png",
              ].map((logo: string, idx: number) => (
                <img
                  key={`row2-${idx}`}
                  src={logo}
                  alt={`Client logo ${idx + 1}`}
                  className="h-20 md:h-24 w-auto object-contain transition"
                />
              ))}

              {/* duplicate for seamless scroll */}
              {[
                "/logos/veeraence.png",
                "/logos/anchor-space.jpeg",
                "/logos/raksha.jpg",
                "/logos/aditi.jpeg",
                "/logos/ark-industries.png",
                "/logos/habit-tracker.png",
              ].map((logo: string, idx: number) => (
                <img
                  key={`row2-dup-${idx}`}
                  src={logo}
                  alt={`Client logo duplicate ${idx + 1}`}
                  className="h-20 md:h-24 w-auto object-contain transition"
                />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-4xl font-semibold text-center">
            Our Process
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-4">
            {[
              ["01", "Ideate", "Analyze brand, audience & goals"],
              ["02", "Develop", "Build scalable digital systems"],
              ["03", "Design", "Craft engaging user experiences"],
              ["04", "Results", "Optimize & deliver measurable growth"],
            ].map(([num, title, desc]) => (
              <div key={num} className="text-center">
                <span className="text-3xl font-bold text-[var(--accent)]">
                  {num}
                </span>
                <h3 className="mt-4 font-medium">{title}</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* TESTIMONIALS */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-4xl font-semibold text-center">
            What Our Clients Say
          </h2>

          <div className="mt-16 ">
            <Slider
              dots={true}
              infinite={true}
              speed={600}
              slidesToShow={2}
              slidesToScroll={2}
              arrows={true}
              responsive={[
                { breakpoint: 1024, settings: { slidesToShow: 2 } },
                { breakpoint: 640, settings: { slidesToShow: 1 } },
              ]}
            >
              {testimonials.map((item, idx) => (
                <div key={idx} className="p-4">
                  <div className="rounded-xl border-2 border-red-100 p-6 bg-white shadow hover:shadow-lg transition">
                    <p className="text-sm text-gray-600">“{item.quote}”</p>
                    <p className="mt-4 font-medium">{item.company}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-4xl font-semibold text-center">
            Frequently Asked Questions
          </h2>

          <div className="mt-12 space-y-2">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION (light background like other sections) */}
      {/*
<section className="py-24 bg-white">
 <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-12">
     CONTACT INFO 
    <div>
      <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>
      <p className="text-gray-600">
        Ready to start your digital transformation? Contact us today for a free consultation
      </p>

      <div className="space-y-4 text-gray-300">
        <div>
          <h3 className="font-medium">Email</h3>
          <p>info@goviratechnologies.com</p>
          <p>support@goviratechnologies.com</p>
        </div>

        <div>
          <h3 className="font-medium">Phone</h3>
          <p>+91 97019 35111</p>
        </div>

        <div>
          <h3 className="font-medium">Office</h3>
          <p>123 Digital Street</p>
          <p>San Francisco, CA 94102</p>
        </div>

        <div>
          <h3 className="font-medium">Business Hours</h3>
          <p>Mon-Fri: 9:00 AM - 6:00 PM</p>
          <p>Sat: 10:00 AM - 4:00 PM</p>
          <p>Sun: Closed</p>
        </div>
      </div>
    </div>
    
     CONTACT FORM 
    <div className="md:col-span-2">
      <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
      <form className="grid gap-4 md:grid-cols-2">
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium">Name *</label>
          <input
            type="text"
            placeholder="Your full name"
            className="p-2 rounded bg-neutral-800 text-white border border-neutral-700"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium">Email *</label>
          <input
            type="email"
            placeholder="your@email.com"
            className="p-2 rounded bg-neutral-800 text-white border border-neutral-700"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium">Phone</label>
          <input
            type="text"
            placeholder="+91 97019 35111"
            className="p-2 rounded bg-neutral-800 text-white border border-neutral-700"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium">Company</label>
          <input
            type="text"
            placeholder="Your company name"
            className="p-2 rounded bg-neutral-800 text-white border border-neutral-700"
          />
        </div>

        <div className="flex flex-col md:col-span-2">
          <label className="mb-1 text-sm font-medium">Services Required</label>
          <select className="p-2 rounded bg-neutral-800 text-white border border-neutral-700">
            <option>Select a service</option>
            {services.map(({ title }, i) => (
              <option key={i}>{title}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col md:col-span-2">
          <label className="mb-1 text-sm font-medium">Message *</label>
          <textarea
            placeholder="Tell us about your project..."
            rows={4}
            className="p-2 rounded bg-neutral-800 text-white border border-neutral-700"
          />
        </div>

        <button
          type="submit"
          className="md:col-span-2 bg-[var(--accent)] hover:opacity-90 text-white py-3 rounded mt-2"
        >
          Send Message
        </button>
      </form>
    </div>
   </div> 
  </section>*/}
      {/* CTA */}
      <section className="py-22 text-center">
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
      {/* PRE-FOOTER */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 grid gap-16 lg:grid-cols-5">

          {/* BRAND + SOCIAL */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Govira</h3>
            <p className="text-[var(--muted)] mb-6">
              Empowering your digital growth with expert solutions.
            </p>

            <p className="font-medium mb-2">Follow Us</p>
            <div className="flex gap-4 text-xl text-[var(--muted)]">
              <a href="#" aria-label="Facebook" className="hover:text-[var(--accent)] transition">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-[var(--accent)] transition">
                <FaInstagram />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-[var(--accent)] transition">
                <FaXTwitter />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-[var(--accent)] transition">
                <FaLinkedinIn />
              </a>
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
              {footerWebsiteServices.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-[var(--accent)] transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          {/* INDUSTRIES */}
          <div>
            <h4 className="font-medium mb-4">Industries We Serve</h4>
            <ul className="space-y-2 text-[var(--muted)]">
              {footerIndustries.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-[var(--accent)] transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          {/* DIGITAL MARKETING */}
          <div>
            <h4 className="font-medium mb-4">Digital Marketing</h4>
            <ul className="space-y-2 text-[var(--muted)]">
              {footerDigitalMarketing.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-[var(--accent)] transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <p className="font-medium">Reach out to us anytime</p>
              <a
                href="mailto:support@govira.tech"
                className="block text-[var(--muted)] hover:text-[var(--accent)] transition"
              >
                support@govira.tech
              </a>
              <a
                href="tel:+91 97019 35111"
                className="block text-[var(--muted)] hover:text-[var(--accent)] transition"
              >
                INDIA +91 97019 35111
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
          <p className="mt-2">© 2025 Govira Technologies Solutions. All rights reserved.</p>
        </div>
      </footer>

    </main>

  );

}
