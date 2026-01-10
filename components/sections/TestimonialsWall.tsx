import React from "react";

interface Testimonial {
  name: string;
  role: string;
  feedback: string;
}

interface TestimonialsWallProps {
  testimonials: Testimonial[];
}

const TestimonialsWall: React.FC<TestimonialsWallProps> = ({ testimonials }) => {
  return (
    <section className="py-12 max-w-6xl mx-auto px-4 bg-gray-100">
      <h2 className="text-3xl font-bold mb-8 text-center">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((t, idx) => (
          <div key={idx} className="border rounded-lg p-6 bg-white">
            <p className="mb-4">&quot;{t.feedback}&quot;</p>
            <p className="font-semibold">{t.name}</p>
            <p className="text-gray-500">{t.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsWall;
