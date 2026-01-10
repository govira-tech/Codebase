import Footer from "@/components/footer/Footer";
import Link from "next/link";
const testimonials = [
  {
    quote:
      "Govira helped us turn our digital presence into a predictable growth channel.",
    name: "Sarah Johnson",
    company: "TechStart Inc.",
  },
  {
    quote:
      "Our e-commerce revenue grew by over 250% within the first quarter.",
    name: "Michael Chen",
    company: "Global Retail Co.",
  },
  {
    quote:
      "The systems they built streamlined our operations across teams.",
    name: "Emily Rodriguez",
    company: "Healthcare Plus",
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <main className="pt-32">
        {/* BREADCRUMB + HERO */}
      <section className="mx-auto max-w-6xl px-6 mb-16">
        <nav className="text-sm text-gray-800 mb-4">
          <Link href="/" className="hover:text-red-500 font-bold">Home</Link> &gt;{" "}
          <Link href="/testimonials" className="hover:text-red-500 font-semibold">Testimonials</Link>
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
                className="rounded-xl border border-[#e5e5e5] bg-white p-8 hover:shadow-md transition-all flex flex-col gap-4"
              >
                {/* Avatar Circle Placeholder */}
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-semibold text-lg">
                  {t.name.charAt(0)}
                </div>

                <p className="text-lg leading-relaxed text-gray-800">
                  “{t.quote}”
                </p>

                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-gray-900">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.company}</p>
                </div>
              </div>
            ))}

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
