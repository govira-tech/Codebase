import React from "react";
import Navbar from "../../components/navigation/Navbar";
import Footer from "../../components/footer/Footer";
import HeroPrimary from "../../components/hero/HeroPrimary";
import CTASection from "../../components/sections/CTASection";

const careerOpportunities = [
  { title: "Software Engineer", description: "Work on cutting-edge web technologies.", link: "/careers/software-engineer" },
  { title: "UI/UX Designer", description: "Design beautiful and functional interfaces.", link: "/careers/ui-ux-designer" },
  { title: "Digital Marketing Specialist", description: "Drive campaigns and SEO strategy.", link: "/careers/digital-marketing" },
];

const CareerOpportunitiesPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <HeroPrimary
        title="Join Our Team"
        subtitle="Explore career opportunities and grow with Govira Technologies."
        ctaText="View Open Positions"
        ctaLink="#opportunities"
      />

      <section id="opportunities" className="py-12 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Open Positions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {careerOpportunities.map((job, idx) => (
            <div key={idx} className="border rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="font-semibold text-xl mb-2">{job.title}</h3>
              <p className="mb-4">{job.description}</p>
              <a href={job.link} className="text-blue-600 font-semibold hover:underline">
                Apply Now
              </a>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        message="Ready to start your journey with us?"
        ctaText="Contact HR"
        ctaLink="/contact"
      />
      <Footer />
    </>
  );
};

export default CareerOpportunitiesPage;
