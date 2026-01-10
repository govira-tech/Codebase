import React from "react";

interface FAQ {
  question: string;
  answer: string;
}

interface IndustryPageLayoutProps {
  title: string;
  description: string;
  highlights: string[];
  faqs: FAQ[];
  ctaText: string;
  ctaLink: string;
  imageUrl: string;
}

const IndustryPageLayout: React.FC<IndustryPageLayoutProps> = ({
  title,
  description,
  highlights,
  faqs,
  ctaText,
  ctaLink,
  imageUrl,
}) => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-6 text-center">{title}</h1>

      {/* Description */}
      <p className="mb-8 text-center whitespace-pre-line">{description}</p>

      {/* Highlights */}
      {highlights.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Highlights</h2>
          <ul className="list-disc list-inside space-y-2">
            {highlights.map((highlight, idx) => (
              <li key={idx}>{highlight}</li>
            ))}
          </ul>
        </div>
      )}

      {/* FAQs */}
      {faqs.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">FAQs</h2>
          {faqs.map((faq, idx) => (
            <div key={idx} className="mb-4">
              <h3 className="font-medium">{faq.question}</h3>
              <p className="ml-4">{faq.answer}</p>
            </div>
          ))}
        </div>
      )}

      {/* CTA */}
      <div className="text-center mb-8">
        <a
          href={ctaLink}
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
        >
          {ctaText}
        </a>
      </div>

      {/* Image */}
      {imageUrl && (
        <div className="flex justify-center">
          <img src={imageUrl} alt={title} className="rounded-lg shadow-lg max-w-full" />
        </div>
      )}
    </section>
  );
};

export default IndustryPageLayout;
