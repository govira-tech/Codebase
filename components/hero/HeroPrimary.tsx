import React from "react";

interface HeroPrimaryProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

const HeroPrimary: React.FC<HeroPrimaryProps> = ({ title, subtitle, ctaText, ctaLink }) => {
  return (
    <section className="bg-blue-600 text-white py-20 text-center px-4">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="mb-6">{subtitle}</p>
      <a href={ctaLink} className="bg-white text-blue-600 px-6 py-3 rounded font-semibold">
        {ctaText}
      </a>
    </section>
  );
};

export default HeroPrimary;
