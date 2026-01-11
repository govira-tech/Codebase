
'use client';

import Link from 'next/link';
import { FaDatabase, FaChartLine, FaUsers, FaGgCircle, FaArrowsRotate, FaShieldCat, FaBullseye, FaEnvelope, FaChartBar, FaClock } from 'react-icons/fa6';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/footer/Footer';

export default function CRMPage() {

  const keyPoints = [
    {
      icon: FaDatabase,
      title: 'Centralized Customer Intelligence',
      description: 'Govira CRM unifies customer data, interactions, and history into one powerful platform for better visibility and decision-making.',
    },
    {
      icon: FaArrowsRotate,
      title: 'Sales Process Automation',
      description: 'Automate lead assignment, follow-ups, reminders, and deal tracking to help sales teams close faster with less manual effort.',
    },
    {
      icon: FaUsers,
      title: 'Personalized Customer Engagement',
      description: 'Deliver tailored communication based on customer behavior, preferences, and lifecycle stage.',
    },
    {
      icon: FaChartLine,
      title: 'Real-Time Insights & Reporting',
      description: 'Gain actionable insights through dashboards and analytics that track sales performance and customer engagement.',
    },
    {
      icon: FaGgCircle,
      title: 'Seamless Tool Integration',
      description: 'Integrate CRM with marketing, email, payment, ERP, and support systems for a connected business ecosystem.',
    },
    {
      icon: FaShieldCat,
      title: 'Scalable & Secure Architecture',
      description: 'Built to grow with your business, ensuring data security, role-based access, and long-term scalability.',
    },
  ];

  const marketingFeatures = [
    {
      icon: FaBullseye,
      title: 'Audience Segmentation & Targeting',
      description: 'CRM enables precise customer segmentation, allowing marketers to run highly targeted and relevant campaigns.',
    },
    {
      icon: FaEnvelope,
      title: 'Personalized Marketing Campaigns',
      description: 'Use customer data to personalize emails, offers, and messaging, improving engagement and conversion rates.',
    },
    {
      icon: FaChartBar,
      title: 'Campaign Performance Tracking',
      description: 'Track leads, conversions, and customer journeys to measure campaign effectiveness and ROI accurately.',
    },
    {
      icon: FaClock,
      title: 'Customer Lifecycle Management',
      description: 'CRM helps nurture leads through every stage — from awareness to retention — ensuring consistent and meaningful marketing interactions.',
    },
  ];

  const whyChoose = [
    'Custom CRM solutions tailored to your business processes',
    'Expertise in cloud-based and on-premise CRM systems',
    'Seamless integration with sales, marketing, and support tools',
    'Automation to reduce manual work and increase productivity',
    'Secure data handling and role-based access control',
    'Continuous support, optimization, and scalability',
  ];

  const businessBenefits = [
    'Improve customer engagement and retention',
    'Increase sales team productivity',
    'Gain visibility into sales performance',
    'Reduce response time and manual effort',
    'Make data-driven business decisions',
    'Build long-term customer relationships',
  ];

  const industries = [
    'Real Estate',
    'Healthcare & Education',
    'Banking & Finance',
    'Retail & E-Commerce',
    'Service-Based Businesses',
    'B2B & Enterprise Companies',
  ];

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <Navbar />

      {/* Breadcrumb + Hero Section */}
      <section className="pt-24 pb-16 md:pb-20  md:px-12">
        <div className="max-w-7xl mx-auto">
          <nav className="text-sm px-6 text-gray-800 mb-4">
            <Link href="/" className="hover:text-red-500 font-bold">
              Home
            </Link>{' '}
            &gt;{' '}
            <Link href="/services" className="hover:text-red-500 font-bold">
              Services
            </Link>{' '}
            &gt;{' '}
            <span className="font-semibold px-6 text-gray-500">Customer Relationship Management (CRM)</span>
          </nav>

          <div>
            <h1 className="text-red-500 text-3xl md:text-4xl px-6 font-bold mb-4">Customer Relationship Management (CRM)</h1>
            <p className="text-gray-700 text-lg md:text-xl px-6 max-w-3xl leading-relaxed">
              Streamline customer relationships, improve sales efficiency, and enhance customer engagement with Govira's powerful CRM solutions. 
              We design and implement CRM systems that centralize data, automate workflows, and help your teams close more deals.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-8 md:py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-12 text-gray-900">
            Key CRM Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {keyPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow hover:shadow-lg transition-all">
                  <div className="flex items-start gap-4 p-6">
                    <Icon className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div className="h-7 w-[2px] bg-gray-900" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{point.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed mt-2">{point.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integral Role of CRM in Marketing Section */}
      <section className="py-16 md:py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-12 text-gray-900">
            Integral Role of CRM in Marketing
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {marketingFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow hover:shadow-lg transition-all">
                  <div className="flex items-start gap-4 p-6">
                    <Icon className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div className="h-7 w-[2px] bg-gray-900" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed mt-2">{feature.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Business Benefits & Industries */}
      <section className="py-16 md:py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Column - Business Benefits */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">
                How CRM Helps Clients Succeed
              </h2>

              <ul className="space-y-4">
                {businessBenefits.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700">
                    <span className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0 mt-2"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column - Industries */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">
                Industries We Serve
              </h2>

              <ul className="space-y-4">
                {industries.map((industry, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700">
                    <span className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0 mt-2"></span>
                    <span>{industry}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mt-20 text-center px-6 md:px-12">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-6">Ready to Implement a Smarter CRM System?</h2>
          <p className="text-gray-600 mb-8">
            Transform the way you manage customers and grow your business with Govira's CRM solutions.
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <Link href="/contact" className="rounded-full bg-red-600 px-8 py-3 text-white hover:bg-red-700 transition">
              Talk to Our CRM Experts
            </Link>
            <a
              href="https://wa.me/91 9701935111"
              className="rounded-full border border-green-600 px-8 py-3 text-green-600 hover:bg-green-600 hover:text-white transition"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
