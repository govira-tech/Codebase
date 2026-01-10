import React from "react";

interface HeroSplitProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  ctaText: string;
  ctaLink: string;
}

const HeroSplit: React.FC<HeroSplitProps> = ({ title, subtitle, imageUrl, ctaText, ctaLink }) => {
  return (
    <section className="py-20 max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
      <div className="md:w-1/2">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="mb-6">{subtitle}</p>
        <a href={ctaLink} className="bg-blue-600 text-white px-6 py-3 rounded font-semibold">
          {ctaText}
        </a>
      </div>
      <div className="md:w-1/2">
        <img src={imageUrl} alt={title} className="rounded shadow-lg" />
      </div>
    </section>
  );
};

export default HeroSplit;
