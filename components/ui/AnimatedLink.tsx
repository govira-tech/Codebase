import React from "react";
import Link from "next/link";

interface Props {
  href: string;
  children: React.ReactNode;
}

const AnimatedLink: React.FC<Props> = ({ href, children }) => {
  return (
    <Link href={href} className="text-blue-600 hover:underline transition-all duration-200">
      {children}
    </Link>
  );
};

export default AnimatedLink;
