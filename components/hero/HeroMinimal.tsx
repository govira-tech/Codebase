import React from "react";

interface Props {
  title: string;
  subtitle: string;
}

const HeroMinimal: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <section className="text-center py-20 bg-white">
      <h1 className="text-5xl font-bold mb-4">{title}</h1>
      <p className="text-lg text-gray-600">{subtitle}</p>
    </section>
  );
};

export default HeroMinimal;
