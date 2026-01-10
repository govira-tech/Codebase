import React from "react";

interface Step {
  title: string;
  description: string;
}

interface ProcessTimelineProps {
  steps: Step[];
}

const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ steps }) => {
  return (
    <section className="py-12 max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Process</h2>
      <div className="space-y-6">
        {steps.map((step, idx) => (
          <div key={idx} className="flex flex-col md:flex-row gap-4 items-start">
            <div className="font-bold text-xl w-24">{idx + 1}.</div>
            <div>
              <h3 className="font-semibold">{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessTimeline;
