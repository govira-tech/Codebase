import React from 'react';
import { 
  FaClipboardList, 
  FaPenNib, 
  FaFile, 
  FaImage, 
  FaBullhorn, 
  FaChartLine,
  FaCircleCheck
} from 'react-icons/fa6';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/footer/Footer';
import Link from 'next/link';

export default function ContentMarketingPage() {
  const services = [
    {
      icon: FaClipboardList,
      title: 'Content Strategy & Planning',
      description: 'We build a clear content roadmap based on audience research, keywords, and business objectives.',
    },
    {
      icon: FaPenNib,
      title: 'Blog & Article Writing',
      description: 'SEO-optimized blogs and articles that drive organic traffic and establish thought leadership.',
    },
    {
      icon: FaFile,
      title: 'Website & Landing Page Content',
      description: 'Conversion-focused website copy that communicates value and improves user engagement.',
    },
    {
      icon: FaImage,
      title: 'Visual & Multimedia Content',
      description: 'Engaging infographics, videos, and visual assets that increase reach and retention.',
    },
    {
      icon: FaBullhorn,
      title: 'Content Distribution & Promotion',
      description: 'Strategic distribution across search engines, social media, email, and other channels.',
    },
    {
      icon: FaChartLine,
      title: 'Content Performance & Optimization',
      description: 'Track engagement, traffic, and conversions to continuously refine content strategy.',
    },
  ];

  const whyChoose = [
    'Strategy-first approach aligned with business goals',
    'High-quality, audience-focused content creation',
    'SEO-driven content for long-term visibility',
    'Consistent brand voice across all platforms',
    'Data-backed content performance tracking',
    'Continuous optimization and content scaling',
  ];

  const featuresLeft = [
    'SEO-optimized content',
    'Audience-focused storytelling',
    'Consistent publishing schedules',
    'Keyword & topic research',
    'Brand tone & messaging alignment',
  ];

  const featuresRight = [
    'Content calendars & planning',
    'Performance analytics & reporting',
    'Multi-channel content support',
    'Lead-focused content funnels',
    'Scalable content frameworks',
  ];

  const businessGrowth = [
    'Increase brand awareness and visibility',
    'Build trust and authority in your industry',
    'Drive consistent organic traffic',
    'Improve lead quality and conversions',
    'Support sales and marketing efforts',
    'Deliver long-term marketing ROI',
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Combined Breadcrumb + Hero Section */}
        <section className="bg-white pt-24 pb-16 md:pb-20 px-6 md:px-12">
          <div className="max-w-7xl mx-auto px-6">
            {/* Breadcrumb */}
            <nav className="text-sm text-gray-800 mb-4">
              <Link href="/" className="hover:text-red-500 font-bold">
                Home
              </Link>{' '}
              &gt;{' '}
              <Link href="/services" className="hover:text-red-500 font-bold">
                Services
              </Link>{' '}
              &gt;{' '}
              <span className="font-semibold text-gray-500">Content Marketing</span>
            </nav>

            {/* Hero Content */}
            <h1 className="text-2xl md:text-3xl font-bold text-red-600 mb-6">
              Content Marketing Services That Build Trust & Drive Growth
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl leading-relaxed">
              Attract, engage, and convert your audience with Govira's strategic content marketing services. 
              We create valuable, relevant, and consistent content that strengthens your brand and drives measurable business results.
            </p>
          </div>
        </section>

        {/* Our Content Marketing Services */}
        <section className="bg-white py-8 md:py-12 px-6 md:px-12">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
              Our Content Marketing Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow hover:shadow-lg transition-all p-6 flex items-start gap-4"
                  >
                    <Icon className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <div className="h-7 w-[2px] bg-gray-900 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Content Marketing Features We Deliver */}
        <section className="bg-white py-8 md:py-12 px-6 md:px-12">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
              Content Marketing Features We Deliver
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Left Column */}
              <div>
                <ul className="space-y-4">
                  {featuresLeft.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-red-500 text-xl mt-0.5">•</span>
                      <span className="text-gray-700 text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Right Column */}
              <div>
                <ul className="space-y-4">
                  {featuresRight.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-red-500 text-xl mt-0.5">•</span>
                      <span className="text-gray-700 text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How Content Marketing Helps Your Business Grow & Why Choose Govira */}
        <section className="bg-white py-8 md:py-12 px-6 md:px-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* How Content Marketing Helps */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                  How Content Marketing Helps Your Business Grow
                </h2>
                <ul className="space-y-4">
                  {businessGrowth.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-red-500 text-xl mt-0.5">•</span>
                      <span className="text-gray-700 text-lg">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Why Choose Govira */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                  Why Choose Govira for Content Marketing
                </h2>
                <ul className="space-y-4">
                  {whyChoose.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <FaCircleCheck className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white py-16 md:py-20 px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-6">
              Ready to Build Trust & Drive Growth?
            </h2>
            <p className="text-base md:text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              Let Govira Technologies help you create strategic content that attracts your ideal audience and converts them into loyal customers. Whether you're starting from scratch or scaling your content efforts, we deliver results that matter.
            </p>
            <div className="flex flex-wrap gap-4 justify-center items-center">
              <a
                href="/contact"
                className="inline-block bg-red-600 text-white px-8 py-3 rounded-full font-medium hover:bg-red-700 transition-colors"
              >
                Contact Us
              </a>
              <a
                href="https://wa.me/91 9701935111"
                className="inline-block bg-white text-green-600 px-8 py-3 rounded-full font-medium border-2 border-green-600 hover:bg-green-50 transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}