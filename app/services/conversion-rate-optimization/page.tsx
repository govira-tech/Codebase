import React from 'react';
import { 
  FaChartLine, 
  FaMagnifyingGlass, 
  FaFlask, 
  FaFileLines, 
  FaWandMagicSparkles, 
  FaChartBar,
  FaCircleCheck
} from 'react-icons/fa6';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/footer/Footer';
import Link from 'next/link';

export default function ConversionRateOptimizationPage() {
  const services = [
    {
      icon: FaChartLine,
      title: 'CRO Audit & Analysis',
      description: 'Comprehensive website and funnel audits to identify conversion barriers and growth opportunities.',
    },
    {
      icon: FaMagnifyingGlass,
      title: 'User Behavior & Funnel Analysis',
      description: 'Analyze heatmaps, session recordings, and funnels to understand how users interact with your site.',
    },
    {
      icon: FaFlask,
      title: 'A/B Testing & Experimentation',
      description: 'Test headlines, layouts, CTAs, forms, and flows to identify what converts best.',
    },
    {
      icon: FaFileLines,
      title: 'Landing Page Optimization',
      description: 'Optimize landing pages for clarity, relevance, speed, and conversion-focused messaging.',
    },
    {
      icon: FaWandMagicSparkles,
      title: 'UX & UI Conversion Improvements',
      description: 'Enhance usability, navigation, and design elements to reduce friction and boost engagement.',
    },
    {
      icon: FaChartBar,
      title: 'CRO Reporting & Continuous Optimization',
      description: 'Track results, measure impact, and refine strategies based on performance data.',
    },
  ];

  const whyChoose = [
    'Data-driven CRO strategies based on real user insights',
    'In-depth analysis of user behavior and funnels',
    'Continuous A/B testing and experimentation',
    'UX and UI optimization focused on conversions',
    'Clear reporting with measurable improvements',
    'Ongoing optimization and performance refinement',
  ];

  const featuresLeft = [
    'Conversion-focused audits',
    'User journey mapping',
    'Heatmap & session analysis',
    'CTA and form optimization',
    'Page speed improvements',
  ];

  const featuresRight = [
    'A/B and multivariate testing',
    'Funnel performance tracking',
    'Conversion analytics dashboards',
    'Mobile and desktop optimization',
    'Data-backed decision frameworks',
  ];

  const businessGrowth = [
    'Increase conversions without increasing ad spend',
    'Improve user experience and satisfaction',
    'Reduce bounce rates and drop-offs',
    'Maximize ROI from existing traffic',
    'Gain insights into customer behavior',
    'Build a scalable, performance-driven website',
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Combined Breadcrumb + Hero Section */}
        <section className="bg-white pt-24 pb-16 md:pb-20 px-4 md:px-12">
          <div className="max-w-7xl mx-auto">
            {/* Breadcrumb */}
            <nav className="text-sm px-24  text-gray-800 mb-4">
              <Link href="/" className="hover:text-red-500 font-bold">
                Home
              </Link>{' '}
              &gt;{' '}
              <Link href="/services" className="hover:text-red-500 font-bold">
                Services
              </Link>{' '}
              &gt;{' '}
              <span className="font-semibold text-gray-500">Conversion Rate Optimization</span>
            </nav>

            {/* Hero Content */}
            <h1 className="text-2xl px-24 md:text-3xl font-bold text-red-600 mb-6">
              Conversion Rate Optimization Services That Turn Visitors into Customers
            </h1>
            <p className="mt-3 text-lg px-24 text-gray-600 max-w-5xl">
              Maximize the value of your website traffic with Govira's Conversion Rate Optimization services. 
              We analyze user behavior, remove friction points, and optimize user journeys to increase conversions and revenue.
            </p>
          </div>
        </section>

        {/* Our CRO Services */}
        <section className="bg-white py-8 md:py-12 px-6 md:px-12">
          <div className="max-w-7xl mx-auto px-24 -mt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
              Our Conversion Rate Optimization Services
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

        {/* CRO Features We Deliver */}
        <section className="bg-white py-8 md:py-12 px-6 md:px-12">
          <div className="max-w-7xl mx-auto px-24">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
              CRO Features We Deliver
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

        {/* How CRO Helps Your Business Grow & Why Choose Govira */}
        <section className="bg-white py-8 md:py-12 px-6 md:px-12">
          <div className="max-w-7xl mx-auto px-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* How CRO Helps */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                  How Conversion Rate Optimization Helps Your Business Grow
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
                  Why Choose Govira for Conversion Rate Optimization
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
              Ready to Turn Visitors into Customers?
            </h2>
            <p className="text-base md:text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              Let Govira Technologies help you unlock the full potential of your website. Our data-driven CRO strategies will help you increase conversions, improve user experience, and maximize revenue from your existing traffic.
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