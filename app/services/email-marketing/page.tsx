import React from 'react';
import { 
  FaEnvelope, 
  FaPaintbrush, 
  FaUsers, 
  FaArrowsRotate, 
  FaShield, 
  FaChartLine,
  FaCircleCheck,
  FaMobile,
  FaClipboardList,
  FaRobot,
  FaBell
} from 'react-icons/fa6';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/footer/Footer';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function EmailMarketingPage() {
  const services = [
    {
      icon: FaClipboardList,
      title: 'Email Campaign Strategy & Planning',
      description: 'We develop email marketing strategies aligned with your business goals, audience behavior, and customer lifecycle.',
    },
    {
      icon: FaPaintbrush,
      title: 'Email Design & Content Creation',
      description: 'Engaging email designs and compelling copy that drive opens, clicks, and conversions.',
    },
    {
      icon: FaUsers,
      title: 'Audience Segmentation & List Management',
      description: 'Segment subscribers based on demographics, behavior, and engagement for precise targeting.',
    },
    {
      icon: FaRobot,
      title: 'Marketing Automation & Drip Campaigns',
      description: 'Automated welcome emails, follow-ups, lead nurturing, and re-engagement workflows.',
    },
    {
      icon: FaShield,
      title: 'Deliverability & Compliance Management',
      description: 'Ensure inbox placement with best practices for spam control, GDPR, and email compliance.',
    },
    {
      icon: FaChartLine,
      title: 'Performance Tracking & Optimization',
      description: 'Monitor open rates, CTRs, conversions, and A/B test campaigns for continuous improvement.',
    },
  ];

  const whyChoose = [
    'Data-driven email marketing strategies',
    'Advanced audience segmentation & targeting',
    'High-converting email copy & design',
    'Automated workflows & drip campaigns',
    'Focus on deliverability & compliance',
    'Continuous optimization & performance tracking',
  ];

  const featuresLeft = [
    'Personalized email content',
    'Mobile-responsive templates',
    'Dynamic content & personalization',
    'Automated scheduling',
    'A/B testing capabilities',
  ];

  const featuresRight = [
    'Email list hygiene & management',
    'Campaign analytics & reporting',
    'CRM & marketing tool integration',
    'Trigger-based email automation',
    'Scalable campaign architecture',
  ];

  const businessGrowth = [
    'Increase customer engagement and retention',
    'Nurture leads through the sales funnel',
    'Drive repeat purchases and conversions',
    'Strengthen brand communication',
    'Improve ROI with cost-effective marketing',
    'Gain actionable insights from campaign data',
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Combined Breadcrumb + Hero Section */}
        <section className="bg-white pt-24 pb-16 md:pb-20 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            {/* Breadcrumb */}
            <nav className="text-sm text-gray-800 px-6 mb-4">
              <Link href="/" className="hover:text-red-500 font-bold">
                Home
              </Link>{' '}
              &gt;{' '}
              <Link href="/services" className="hover:text-red-500 font-bold">
                Services
              </Link>{' '}
              &gt;{' '}
              <span className="font-semibold text-gray-500">Email Marketing</span>
            </nav>

            {/* Hero Content */}
            <h1 className="text-2xl md:text-3xl px-6  font-bold text-red-600 mb-6">
              Email Marketing Services That Drive Engagement & Conversions
            </h1>
            <p className="text-lg md:text-xl px-6  text-gray-700 max-w-3xl leading-relaxed">
              Boost customer engagement, nurture leads, and increase conversions with Govira's result-driven email marketing services. 
              We create targeted, personalized, and automated email campaigns that deliver measurable ROI.
            </p>
          </div>
        </section>

        {/* Our Email Marketing Services */}
        <section className="bg-white py-8 md:py-12 px-6 md:px-12">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
              Our Email Marketing Services
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

        {/* Email Marketing Features We Deliver */}
        <section className="bg-white py-8 md:py-12 px-6 md:px-12">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
              Email Marketing Features We Deliver
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Left Column */}
              <div>
                <ul className="space-y-4">
                  {featuresLeft.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-red-500 text-xl mt-0.5">•</span>
                      <span className="text--700 text-lg">{feature}</span>
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

        {/* How Email Marketing Helps Your Business Grow & Why Choose Govira */}
        <section className="bg-white py-8 md:py-12 px-6 md:px-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* How Email Marketing Helps */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                  How Email Marketing Helps Your Business Grow
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
                  Why Choose Govira for Email Marketing
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
              Ready to Boost Engagement & Drive Conversions?
            </h2>
            <p className="text-base md:text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              Let Govira Technologies help you create impactful email campaigns that nurture leads and convert subscribers into loyal customers. Whether you're launching your first campaign or scaling your email strategy, we deliver results that matter.
            </p>
            <div className="flex flex-wrap gap-4 justify-center items-center">
              <a
                href="/contact"
                className="inline-block bg-red-600 text-white px-8 py-3 rounded-full font-medium hover:bg-red-700 transition-colors"
              >
                Contact Us
              </a>
              <a
                href="https://wa.me/01 9701935111"
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