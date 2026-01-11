'use client';

import Link from 'next/link';
import { FaCartShopping, FaBox, FaCreditCard, FaArrowTrendUp, FaWrench, FaMobile, FaShield, FaChartLine, FaLock, FaRocket, FaHeadset, FaCircleCheck } from 'react-icons/fa6';
import Button from '@/components/ui/Button';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/footer/Footer';

export default function EcommercePage() {

  const services = [
    {
      icon: FaCartShopping,
      title: 'Online Store Development',
      description: 'High-performance e-commerce stores designed to convert visitors into customers.',
    },
    {
      icon: FaBox,
      title: 'Product & Inventory Management',
      description: 'Smart product organization, pricing control, and stock management.',
    },
    {
      icon: FaCreditCard,
      title: 'Payment Gateway Integration',
      description: 'Secure payments with Razorpay, Stripe, PayPal, UPI, and cards.',
    },
    {
      icon: FaArrowTrendUp,
      title: 'E-Commerce SEO & Growth',
      description: 'Search-optimized product pages and analytics-driven growth strategies.',
    },
    {
      icon: FaWrench,
      title: 'Maintenance & Optimization',
      description: 'Speed optimization, security updates, and continuous improvements.',
    },
    {
      icon: FaMobile,
      title: 'Mobile Commerce Solutions',
      description: 'Fully responsive designs optimized for mobile shopping experiences.',
    },
  ];

  const features = [
    {
      icon: FaMobile,
      title: 'Mobile-First Design',
      description: 'Every store is optimized for mobile devices, ensuring seamless shopping experience across all screen sizes.',
    },
    {
      icon: FaShield,
      title: 'Secure & PCI Compliant',
      description: 'Industry-leading security standards and PCI DSS compliance to protect customer data and transactions.',
    },
    {
      icon: FaChartLine,
      title: 'Analytics Integration',
      description: 'Track sales, customer behavior, and performance metrics with powerful analytics and reporting tools.',
    },
    {
      icon: FaLock,
      title: 'Data Protection',
      description: 'Advanced encryption and security protocols to safeguard sensitive customer and business information.',
    },
    {
      icon: FaRocket,
      title: 'High Performance',
      description: 'Lightning-fast loading speeds and optimized database queries for excellent user experience.',
    },
    {
      icon: FaHeadset,
      title: '24/7 Support',
      description: 'Round-the-clock technical support to ensure your store runs smoothly without interruption.',
    },
  ];

  const whyChoose = [
    'Custom-built e-commerce solutions',
    'Shopify, WooCommerce & custom platforms',
    'Mobile-first & fast-loading stores',
    'Secure payment & checkout systems',
    'SEO-optimized product pages',
    'Ongoing support & performance monitoring',
  ];

  const whoFor = [
    'Online retailers looking to expand',
    'Startups launching their first store',
    'Enterprises needing scalability',
    'Businesses migrating from legacy systems',
    'Companies seeking mobile commerce',
  ];

  const businessNeeds = [
    'Increase online sales and conversions',
    'Reduce cart abandonment rates',
    'Improve customer shopping experience',
    'Build customer trust & security',
    'Scale your business efficiently',
    'Gain actionable sales insights',
  ];

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <Navbar />

      {/* Breadcrumb + Hero Section */}
      <section className="pt-24 pb-16 md:pb-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <nav className="text-sm text-gray-800 mb-4">
            <Link href="/" className="hover:text-red-500 font-bold">
              Home
            </Link>{' '}
            &gt;{' '}
            <Link href="/services" className="hover:text-red-500 font-bold">
              Services
            </Link>{' '}
            &gt;{' '}
            <span className="font-semibold text-gray-500">E-Commerce</span>
          </nav>

          <div>
            <h1 className="text-red-500 text-3xl md:text-4xl font-bold mb-4">E-Commerce Website Development</h1>
            <p className="text-gray-700 text-lg md:text-xl max-w-3xl leading-relaxed">
              Build powerful, secure, and conversion-focused e-commerce websites that help your business sell more online. 
              From startups to enterprises, Govira delivers scalable online stores tailored to your brand.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-8 md:py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-12 text-gray-900">
            Our E-Commerce Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow hover:shadow-lg transition-all">
                  <div className="flex items-start gap-4 p-6">
                    <Icon className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div className="h-7 w-[2px] bg-gray-900" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed mt-2">{service.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-8 md:py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-12 text-gray-900">
            E-Commerce Features We Deliver
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
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

      {/* Who This Is For */}
      <section className="py-16 md:py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            Who This Is For
          </h2>

          <p className="text-gray-700 text-lg mb-8 leading-relaxed max-w-3xl">
            E-commerce development is ideal for businesses of all sizes looking to establish or expand their online presence. 
            Whether you're a startup launching your first store or an enterprise seeking scalability, our solutions are designed 
            to meet your unique business needs.
          </p>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
            {whoFor.map((item, index) => (
              <li key={index} className="flex items-center gap-3 text-gray-800">
                <span className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Does Your Business Need + Why Choose Govira */}
      <section className="py-8 md:py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Does Your Business Need */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                Does Your Business Need Professional E-Commerce Development?
              </h2>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                In today's digital world, having a strong online store is essential. A professional e-commerce platform 
                can significantly impact your business success. If you're looking to increase sales, improve customer experience, 
                and stay competitive, it's time to invest in quality e-commerce development.
              </p>
              <ul className="space-y-4">
                {businessNeeds.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-red-500 text-xl mt-0.5">•</span>
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Why Choose Govira */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                Why Choose Govira
              </h2>
              <ul className="space-y-4">
                {whyChoose.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <FaCircleCheck className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-lg">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mt-20 text-center px-6">
        <h2 className="text-3xl font-semibold mb-6">Ready to Elevate Your Business?</h2>
        <p className="text-gray-600 mb-8">
          Invest in professional e-commerce solutions with Govira to boost your online sales, reach more customers, and achieve your business growth goals.
        </p>
        <div className="flex justify-center gap-6 flex-wrap">
          <Link href="/contact" className="rounded-full bg-red-600 px-8 py-3 text-white hover:bg-red-700 transition">
            Contact Us
          </Link>
          <a
            href="https://wa.me/918888888888"
            className="rounded-full border border-green-600 px-8 py-3 text-green-600 hover:bg-green-600 hover:text-white transition"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}