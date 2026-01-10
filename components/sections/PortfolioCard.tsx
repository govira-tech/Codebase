// components/sections/PortfolioCard.tsx
import React from "react";

interface PortfolioItem {
  title: string;
  type: string;
  description: string;
}

interface PortfolioCardProps {
  item: PortfolioItem;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ item }) => {
  return (
    <div className="border rounded-lg p-6 shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
      <p className="text-sm text-gray-500 mb-4">{item.type}</p>
      <p className="text-gray-700">{item.description}</p>
    </div>
  );
};

export default PortfolioCard;
