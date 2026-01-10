import React from "react";

interface CaseStudyHighlightProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const CaseStudyHighlight: React.FC<CaseStudyHighlightProps> = ({ title, description, imageUrl, link }) => {
  return (
    <section className="py-12 max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="mb-6">{description}</p>
        <a href={link} className="bg-blue-600 text-white px-6 py-3 rounded font-semibold">
          Read Case Study
        </a>
      </div>
      <div className="md:w-1/2">
        <img src={imageUrl} alt={title} className="rounded shadow-lg" />
      </div>
    </section>
  );
};

export default CaseStudyHighlight;
