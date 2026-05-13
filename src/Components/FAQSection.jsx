import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  const faqs = [
    {
      question:
        "Can I upgrade myself or do I have to upgrade my entire Workspace?",
      answer:
        "To upgrade ClickUp, you'll need to upgrade your entire Workspace, which means all members in your Workspace.",
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
      answer:
        "Billing is prorated based on the remaining time in your current cycle.",
    },
  ];

  return (
    <section className="w-full py-30 flex flex-col items-center font-['Outfit'] bg-white">
      {/* 1. Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-[38px] font-bold text-[#1A1A1A] mb-4">
          Frequently asked questions
        </h2>
        <p className="text-[20px] font-regular text-[#4A4A4A] mb-8 max-w-3xl mx-auto px-4 leading-relaxed">
          Find answers to your questions right here, and do not hesitate to
          contact us <br />
          if you don't find what you're looking for.
        </p>
        <button
          className=" text-[18px] bg-[#1A1A1A] text-white flex items-center justify-center gap-2 rounded-xl mx-auto transition-transform active:scale-95 hover:bg-black/90"
          style={{ width: "160px", height: "48px" }}
        >
          Contact us <ArrowRight size={20} />
        </button>
      </div>

      {/* 2. FAQ List */}
      <div className="w-full max-w-[1000px] px-8">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b"
            style={{ borderColor: "rgba(174, 172, 172, 0.5)" }}
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
              id={`faq-question-${index}`}
              className="w-full py-8 flex justify-between items-center text-left transition-colors cursor-pointer"
            >
              <span className="text-[20px] font-semibold">{faq.question}</span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={28} />
              </motion.div>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 text-[18px] font-normal text-[#4A4A4A] leading-relaxed max-w-[850px]">
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
        className="mt-12 bg-[#F0F0F0] text-[#1A1A1A] flex items-center justify-center gap-2 rounded-xl font-semibold px-6 hover:bg-[#E5E5E5] transition-all active:scale-95"
        style={{ height: "46px", fontSize: "15px" }}
      >
        Load more
      </button>
    </section>
  );
};

export default FAQSection;
