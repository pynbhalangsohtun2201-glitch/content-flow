import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  const faqs = [
    {
      question: "Can I upgrade myself or do I have to upgrade my entire Workspace?",
      answer: "You can upgrade individual licenses or your entire workspace. Upgrading the workspace unlocks shared tools and centralized billing.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards and digital payment platforms.",
    },
    {
      question: "What is your refund policy?",
      answer: "Our policy offers a full refund within 30 days of purchase.",
    },
    {
      question: "How am I billed when I add paid users to a Workspace?",
      answer: "Billing is prorated based on the remaining time in your current monthly or annual billing cycle.",
    },
  ];

  return (
    <section className="w-full py-16 md:py-28 flex flex-col items-center font-['Outfit'] bg-white">
      {/* 1. Header Section */}
      <div className="text-center mb-8 md:mb-12 px-5">
        <h2 className="text-[26px] md:text-[38px] font-bold text-[#1A1A1A] mb-3 md:mb-4 tracking-tight leading-tight text-balance">
          Frequently asked questions
        </h2>
        <p className="text-[15px] md:text-[20px] font-regular text-[#4A4A4A] mb-6 md:mb-8 max-w-3xl mx-auto px-1 leading-relaxed text-balance">
          Find answers to your questions right here, and do not hesitate to
          contact us <br className="hidden md:inline" />
          if you don't find what you're looking for.
        </p>
        <button
          className="text-[15px] md:text-[18px] bg-[#1A1A1A] text-white flex items-center justify-center gap-2 rounded-xl mx-auto transition-transform active:scale-95 hover:bg-black/90 shadow-sm"
          style={{ width: window.innerWidth < 768 ? "140px" : "160px", height: window.innerWidth < 768 ? "42px" : "48px" }}
        >
          Contact us <ArrowRight size={window.innerWidth < 768 ? 16 : 20} />
        </button>
      </div>

      {/* 2. FAQ List */}
      <div className="w-full max-w-[1000px] px-5 md:px-8">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b"
            style={{ borderColor: "rgba(174, 172, 172, 0.3)" }}
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
              id={`faq-question-${index}`}
              className="w-full py-5 md:py-8 flex justify-between items-center text-left transition-colors cursor-pointer gap-4"
            >
              <span className="text-[15.5px] md:text-[20px] font-semibold text-[#1A1A1A] leading-snug">
                {faq.question}
              </span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="flex-shrink-0"
              >
                <ChevronDown size={window.innerWidth < 768 ? 20 : 28} className="text-[#4A4A4A]" />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="pb-5 md:pb-6 text-[14px] md:text-[18px] font-normal text-[#5A5A5A] leading-relaxed max-w-[850px]">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* 3. Secondary Button (Load More) */}
      <button
        className="mt-8 md:mt-12 bg-[#F0F0F0] text-[#1A1A1A] flex items-center justify-center gap-2 rounded-xl font-semibold px-5 md:px-6 hover:bg-[#E5E5E5] transition-all active:scale-95"
        style={{ height: window.innerWidth < 768 ? "40px" : "46px", fontSize: window.innerWidth < 768 ? "14px" : "15px" }}
      >
        Load more
      </button>
    </section>
  );
};

export default FAQSection;