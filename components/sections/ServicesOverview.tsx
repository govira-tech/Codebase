import React from "react";

interface Service {
  title: string;
  description: string;
}

interface ServicesOverviewProps {
  services: Service[];
}

const ServicesOverview: React.FC<ServicesOverviewProps> = ({ services }) => {
  return (
    <section className="py-12 max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, idx) => (
          <div key={idx} className="border rounded-lg p-6 hover:shadow-lg transition">
            <h3 className="font-semibold text-xl mb-2">{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesOverview;
