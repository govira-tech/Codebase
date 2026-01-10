import React from "react";

interface CTASectionProps {
  message: string;
  ctaText: string;
  ctaLink: string;
}

const CTASection: React.FC<CTASectionProps> = ({ message, ctaText, ctaLink }) => {
  return (
    <section className="py-12 bg-blue-600 text-white text-center">
      <h2 className="text-3xl font-bold mb-6">{message}</h2>
      <a href={ctaLink} className="bg-white text-blue-600 px-6 py-3 rounded font-semibold">
        {ctaText}
      </a>
    </section>
  );
};

export default CTASection;
