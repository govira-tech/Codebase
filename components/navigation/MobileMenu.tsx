import React from "react";
import Link from "next/link";

interface MobileMenuProps {
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ onClose }) => {
  return (
    <div className="md:hidden bg-white shadow-md px-4 py-6 space-y-4">
      <Link href="/industries" onClick={onClose} className="block">Industries</Link>
      <Link href="/services" onClick={onClose} className="block">Services</Link>
      <Link href="/career-opportunities" onClick={onClose} className="block">Careers</Link>
      <Link href="/contact" onClick={onClose} className="block">Contact</Link>
    </div>
  );
};

export default MobileMenu;
