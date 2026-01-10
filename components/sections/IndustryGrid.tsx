import React from "react";
import Link from "next/link";

interface Industry {
  name: string;
  path: string;
}

interface IndustryGridProps {
  industries: Industry[];
}

const IndustryGrid: React.FC<IndustryGridProps> = ({ industries }) => {
  return (
    <section className="py-12 max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Industries</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {industries.map((industry, idx) => (
          <Link
            key={idx}
            href={industry.path}
            className="border rounded-lg p-6 text-center hover:shadow-lg transition"
          >
            {industry.name}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default IndustryGrid;
