// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navigation/Navbar";
import SocialSidebar from "@/components/ui/SocialSidebar"
import Script from "next/script";

export const metadata: Metadata = {
  title: "Govira Technologies — Digital Growth Partner",
  description:
    "Govira Technologies helps businesses grow through design, technology, and performance-driven digital strategies.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[var(--bg)] text-[var(--text)] antialiased" suppressHydrationWarning>
        <Script
          src="https://www.google.com/recaptcha/api.js"
          strategy="afterInteractive"
        />
        <Navbar />
        <SocialSidebar />
        {children}
      </body>
    </html>
  );
}