import React from "react";
import Link from "next/link";

interface NavLinkProps {
  href: string;
  label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label }) => {
  return (
    <Link
      href={href}
      className="text-gray-700 hover:text-blue-600 transition"
    >
      {label}
    </Link>
  );
};

export default NavLink;
