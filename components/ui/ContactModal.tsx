"use client";
import { useEffect } from "react";
import ContactForm from "./ContactForm";

export default function ContactModal({ open, onClose }: any) {

  // Run effect ONLY when open changes
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; // always restore on unmount
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999] bg-black/40 backdrop-blur-sm flex justify-center items-center p-4">
      <div className="bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto scrollbar-hide rounded-2xl shadow-xl p-8 relative">

        <button
          onClick={onClose}
          className="absolute right-6 top-6 text-3xl text-gray-600 hover:text-red-600 transition"
        >
          ✕
        </button>

        <h2 className="text-3xl font-bold text-red-600 mb-2">
          Get in Touch with us
        </h2>

        <ContactForm onClose={onClose} />
      </div>
    </div>
  );
}
