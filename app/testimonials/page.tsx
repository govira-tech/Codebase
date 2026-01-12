"use client";

import Link from "next/link";
import Footer from "@/components/footer/Footer";

const testimonials = [
  {
    quote:
      "Govira provided excellent services for SOP implementation and manufacturing monitoring, ensuring smooth operations.",
    company: "ARK Industries.",
  },
  {
    quote:
      "Thanks to Govira's e-commerce solutions, our sales have grown tremendously and our online presence has improved.",
    company: "Veereance",
  },
  {
    quote:
      "Professional, responsive, and innovative. Govira transformed our app idea into a successful product.",
    company: "Habit Tracker",
  },
  {
    quote:
      "Their digital marketing strategy doubled our leads and helped us reach the right audience efficiently.",
    company: "Anchor Space",
  },
  {
    quote:
      "Outstanding UX design and a seamless mobile launch—Govira made it effortless for our team.",
    company: "Raksha",
  },
  {
    quote:
      "Highly recommend Govira for real estate digital solutions, their expertise and support are unmatched.",
    company: "Aditi Infrastructures & Developers",
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <main className="pt-32 bg-white">
        {/* BREADCRUMB + HERO */}
        <section className="mx-auto max-w-6xl px-6 mb-16">
          <nav className="text-sm text-gray-800 mb-4">
            <Link href="/" className="hover:text-red-500 font-bold">
              Home
            </Link>{" "}
            &gt;{" "}
            <span className="font-semibold text-gray-500">Testimonials</span>
          </nav>

          <h1 className="text-5xl md:text-4xl font-semibold text-red-500 mb-4">
            What Clients Say About Us
          </h1>

          <p className="text-lg text-gray-600 max-w-5xl">
            We believe in delivering measurable value.
            Here’s how brands describe their experience working with Govira.
          </p>
        </section>

        {/* TESTIMONIAL CARDS */}
        <section className="mx-auto max-w-6xl px-6 pb-24">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="rounded-xl border border-gray-200 bg-white p-8 hover:shadow-lg transition-all flex flex-col gap-4"
              >
                {/* Avatar Placeholder */}
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-semibold text-lg">
                  {t.company.charAt(0)}
                </div>

                <p className="text-base leading-relaxed text-gray-800">
                  “{t.quote}”
                </p>

                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-gray-900">
                    {t.company}
                  </h4>
                </div>
              </div>
            ))}
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
            href="https://wa.me/919701935111"
            className="rounded-full border border-green-600 px-8 py-3 text-green-600 hover:bg-green-600 hover:text-white transition"
          >
            Chat on WhatsApp
          </a>
        </div>
      </main>

      <Footer />
    </>
  );
}
