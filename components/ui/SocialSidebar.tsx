import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export default function SocialSidebar() {
  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-4">
      <Link
        href="https://www.facebook.com/goviratechnologies"
        target="_blank"
        className="w-10 h-10 flex items-center justify-center rounded-full border hover:bg-[var(--accent)] hover:text-white transition"
      >
        <FaFacebookF />
      </Link>

      <Link
        href="https://www.instagram.com/goviratechnologies"
        target="_blank"
        className="w-10 h-10 flex items-center justify-center rounded-full border hover:bg-[var(--accent)] hover:text-white transition"
      >
        <FaInstagram />
      </Link>

      <Link
        href="https://x.com/goviratech"
        target="_blank"
        className="w-10 h-10 flex items-center justify-center rounded-full border hover:bg-[var(--accent)] hover:text-white transition"
      >
        <FaXTwitter />
      </Link>

      <Link
        href="https://www.linkedin.com/company/govira-technologies"
        target="_blank"
        className="w-10 h-10 flex items-center justify-center rounded-full border hover:bg-[var(--accent)] hover:text-white transition"
      >
        <FaLinkedinIn />
      </Link>
    </div>
  );
}
