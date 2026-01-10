"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface FAQItemProps {
    question: string;
    answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-center justify-between py-4 text-left focus:outline-none"
            >
                <span className="font-medium text-lg">{question}</span>
                {isOpen ? (
                    <FaChevronUp className="text-[var(--accent)]" />
                ) : (
                    <FaChevronDown className="text-gray-400" />
                )}
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"
                    }`}
            >
                <p className="text-[var(--muted)]">{answer}</p>
            </div>
        </div>
    );
}