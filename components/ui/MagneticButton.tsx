import React from "react";

interface Props {
  children: React.ReactNode;
}

const MagneticButton: React.FC<Props> = ({ children }) => {
  return (
    <button className="px-6 py-2 bg-purple-600 text-white rounded hover:scale-105 transition-transform duration-200">
      {children}
    </button>
  );
};

export default MagneticButton;
