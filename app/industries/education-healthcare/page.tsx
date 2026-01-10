import Footer from "@/components/footer/Footer";
import Link from "next/link";
import { FaUserMd, FaGlobe, FaChartLine, FaSearch, FaComments, FaKey, FaPenNib, FaMobileAlt, FaBolt } from "react-icons/fa";
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
export default function EducationHealthcarePage() {
  return (
    <>
      <main className="pt-32">

        {/* BREADCRUMB + HERO */}
        <section className="mx-auto max-w-6xl px-6 mb-16">
          <nav className="text-sm text-gray-800 mb-4">
            <Link href="/" className="hover:text-red-500 font-bold">Home</Link> &gt;{" "}
            <Link href="/industries" className="hover:text-red-500 font-bold">Industries</Link> &gt;{" "}
            <span className="font-semibold text-gray-500">Healthcare & Education</span>
          </nav>

          <h1 className="text-5xl md:text-4xl font-semibold text-red-500 mb-4">
            Healthcare & Educational
          </h1>

          <p className="text-lg text-gray-600 max-w-5xl">
            In today’s competitive digital world, gaining visibility is more challenging than ever.
            But with the right SEO strategies tailored to the Education & Healthcare industries,
            your practice or institution can rise to the top. Let Govira help you stand out and drive more
            leads, patients, and students to your door!
          </p>
        </section>

        {/* WHAT IS HEALTHCARE SEO */}
        <section className="mx-auto max-w-6xl px-6 mb-20 flex justify-between items-start">
          {/* Text content */}
          <div className="flex-1 pr-8">
            <h2 className="text-3xl font-semibold text-left mb-6">
              SEO for Healthcare
            </h2>

            <p className="text-lg text-gray-600 text-left">
              SEO (Search Engine Optimization) is the key to ensuring your practice is visible on Google, Bing, and Yahoo!
              Regular maintenance and updates to your website ensure your business ranks well in search results.
              Healthcare SEO is essential because patients are actively searching for health-related information online.
              Ranking high on search engines ensures that your practice is one of the first names they see—gaining trust and capturing leads.
            </p>

            <p className="text-lg text-gray-600 mt-6 text-left">
              When selecting a digital marketing agency for your medical or educational needs, consider their industry-specific expertise,
              proven track record, and the services they offer. At Govira, we specialize in driving meaningful results with a deep understanding of the healthcare and education industries.
            </p>
          </div>

          {/* GIF Section */}
          <div className="flex-none w-1/3">
            <img
              src="/images/healthcare-seo.png"
              alt="Healthcare SEO Services"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </section>


        {/* BENEFITS OF SEO FOR HEALTHCARE INDUSTRY */}
        <section className="mx-auto max-w-6xl px-6 mb-24">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Key Benefits of SEO for the Healthcare Industry
          </h2>

          <div className="flex justify-center gap-12">
            <div className="flex flex-col items-center text-center text-gray-600">
              <FaUserMd className="text-4xl text-red-600 mb-4"/>
              <p className="font-semibold">Attract More Patients</p>
            </div>
            <div className="flex flex-col items-center text-center text-gray-600">
              <FaGlobe className="text-4xl text-red-600 mb-4"/>
              <p className="font-semibold">Increase Website Traffic</p>
            </div>
            <div className="flex flex-col items-center text-center text-gray-600">
              <FaChartLine className="text-4xl text-red-600 mb-4"/>
              <p className="font-semibold">Enhance Brand Awareness</p>
            </div>
            <div className="flex flex-col items-center text-center text-gray-600">
              <FaSearch className="text-4xl text-red-600 mb-4"/>
              <p className="font-semibold">Improve Online Visibility</p>
            </div>
            <div className="flex flex-col items-center text-center text-gray-600">
              <FaComments className="text-4xl text-red-600 mb-4"/>
              <p className="font-semibold">Protect Your Online Reputation</p>
            </div>
          </div>
        </section>

        {/* SEO FOR HIGHER EDUCATION */}
        <section className="mx-auto max-w-6xl px-6 mb-24">
          <h2 className="text-3xl font-semibold text-left mb-6 ">
            SEO for Higher Education Institutions
          </h2>

          <p className="text-lg text-gray-600">
            In the world of higher education, SEO plays a crucial role in driving prospective students to your website.
            Without proper SEO, your institution could miss out on valuable organic traffic, making it harder for students to find you.
            A well-optimized higher education website enhances visibility, builds trust, and leads to a stronger connection with future students.
          </p>
        </section>

        {/* OPTIMIZING YOUR WEBSITE FOR PROSPECTIVE STUDENTS */}
        <section className="mx-auto max-w-6xl px-6 mb-24">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Get Students In the Door: SEO That Works
          </h2>

          <div className="flex justify-center gap-12">
            <div className="flex flex-col items-center text-center text-gray-600">
              <FaKey className="text-4xl text-red-600 mb-4"/>
              <p className="font-semibold">Use Relevant Keywords</p>
            </div>
            <div className="flex flex-col items-center text-center text-gray-600">
              <FaPenNib className="text-4xl text-red-600 mb-4"/>
              <p className="font-semibold">Create Student-Centric Content</p>
            </div>
            <div className="flex flex-col items-center text-center text-gray-600">
              <FaMobileAlt className="text-4xl text-red-600 mb-4"/>
              <p className="font-semibold">Improve Mobile Experience</p>
            </div>
            <div className="flex flex-col items-center text-center text-gray-600">
              <FaSearch className="text-4xl text-red-600 mb-4"/>
              <p className="font-semibold">Optimize Navigation & CTAs</p>
            </div>
            <div className="flex flex-col items-center text-center text-gray-600">
              <FaBolt className="text-4xl text-red-600 mb-4"/>
              <p className="font-semibold">Boost Page Speed & SEO Tags</p>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE GOVIRA DIGITAL MARKETING */}
        <section className="mx-auto max-w-6xl px-6 mb-24">
          <h2 className="text-3xl font-semibold text-center mb-8">
            Why Choose Govira for Your Digital Marketing Needs?
          </h2>

          <p className="text-lg text-gray-600">
            At Govira, we offer comprehensive digital marketing plans designed to help healthcare practices and educational institutions
            thrive in the competitive digital landscape. From SEO to content creation, we provide tailored solutions that meet the needs
            of every market & budget.
          </p>

          <p className="text-lg text-gray-600 mt-6">
            Our goal is to ensure that your practice or institution remains visible to your audience, boosts engagement, and grows leads
            with every campaign. With our proven track record in healthcare and education, you can trust us to drive results.
          </p>
        </section>
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
      </main>

      <Footer />
    </>
  );
}
