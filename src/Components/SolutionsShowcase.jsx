import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import img1 from "../assets/solution/image-card-01.png";
import img2 from "../assets/solution/image-card-02.png";
import img3 from "../assets/solution/image-card-03.png";
import img4 from "../assets/solution/image-card-04.png";
import img5 from "../assets/solution/image-card-05.png";

const SolutionsShowcase = () => {
  const [activeTab, setActiveTab] = useState(0);

  const solutions = [
    {
      id: 0,
      name: "Boundless",
      image: img1,
      title: "Boundless: Deliver Digital Content",
      description:
        "Cloud-based platform that stores, manages, and delivers digital content (ebooks, audiobooks, videos, journals) to patrons anytime, anywhere.",
    },
    {
      id: 1,
      name: "TS360",
      image: img2,
      title: "TS360: Advanced Technical Services",
      description:
        "Streamline your collection management with comprehensive tools for selection, acquisition, and cataloging in one unified interface.",
    },
    {
      id: 2,
      name: "ePopUp",
      image: img3,
      title: "ePopUp: Instant Digital Access",
      description:
        "Engage your community with localized digital collections that can be accessed instantly via QR codes or mobile links.",
    },
    {
      id: 3,
      name: "Content Café",
      image: img4,
      title: "Content Café: Enrich Your Catalog",
      description:
        "Transform your library catalog with high-quality jacket images, reviews, and summaries to create a more engaging browsing experience.",
    },
    {
      id: 4,
      name: "CollectConnect",
      image: img5,
      title: "CollectConnect: Smart Insights",
      description:
        "Powerful analytics to help you understand community needs and optimize your digital collection performance.",
    },
  ];

  return (
    <section className="w-full py-16 md:py-20 flex flex-col items-center bg-white font-outfit">
      {/* 1. HEADER SECTION */}
      <motion.div
        className="flex flex-col items-center mb-10 md:mb-12 text-center px-6 max-w-[800px]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="bg-[#DDE5E0] text-[#354F52] px-4 py-2 rounded-full text-[12px] font-bold mb-4">
          All in one Solution
        </span>
        {/* text-balance automatically equalizes line widths on mobile, eliminating orphaned words */}
        <h2 className="text-[28px] md:text-[38px] font-semibold text-[#1A1A1A] mb-4 text-center tracking-tight leading-[1.25] text-balance">
          Stop Managing Multiple Vendors. <br className="hidden md:block" /> Get Everything You Need in One Place
        </h2>
        <p className="text-[oklch(55.4%_0.046_257.417)] text-[16px] md:text-[18px] font-medium text-balance">
          Manage everything in one platform. Deliver better experiences everywhere.
        </p>
      </motion.div>

      {/* === DESKTOP VERSION (100% Unchanged Layout & Interactions) === */}
      <motion.div
        className="hidden md:flex w-full max-w-[1180px] h-[720px] bg-[#F3F3F3] rounded-[30px] flex-col items-center pt-8 overflow-hidden border border-slate-200/50 shadow-sm mx-4"
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {/* IMAGE CONTAINERS AREA */}
        <div
          className="w-full flex gap-4 mb-10 justify-center"
          role="tablist"
          aria-label="Solution Categories"
        >
          {solutions.map((item, index) => (
            <motion.div
              key={item.id}
              role="tab"
              aria-selected={activeTab === index}
              aria-controls={`panel-${index}`}
              id={`tab-${index}`}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setActiveTab(index);
                }
              }}
              onClick={() => setActiveTab(index)}
              style={{ width: "210px", height: "300px" }}
              className={`relative flex-shrink-0 rounded-[20px] overflow-hidden cursor-pointer group transition-all duration-300 ${activeTab === index ? "ring-2 ring-white/50" : ""
                }`}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className={`absolute inset-0 transition-opacity duration-500 bg-gradient-to-t from-[#354F52] via-[#354F52]/70 to-transparent ${activeTab === index ? "opacity-50" : "opacity-100"
                  }`}
              />
              <div className="absolute bottom-6 w-full flex justify-center">
                <span
                  className={`w-full max-w-[130px] py-2 text-center rounded-full text-[12px] font-bold transition-all duration-300 ${activeTab === index
                      ? "bg-white text-[#354F52] shadow-lg"
                      : "bg-white/20 text-white backdrop-blur-md border border-white/10"
                    }`}
                >
                  {item.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* DETAILS SECTION */}
        <div className="w-full max-w-5xl px-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              id={`panel-${activeTab}`}
              role="tabpanel"
              aria-labelledby={`tab-${activeTab}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="grid grid-cols-2 gap-40 items-start"
            >
              {/* Left Side: Title & Button */}
              <div className="flex flex-col items-start">
                <div className="h-[100px] flex items-start">
                  <h3 className="text-[36px] font-semibold text-[#1E1E1E] leading-[1.2] tracking-tight text-left">
                    {solutions[activeTab].title}
                  </h3>
                </div>
                <button
                  style={{ width: "186px", height: "46px" }}
                  className="mt-8 bg-white rounded-xl border border-slate-300 text-slate-800 font-bold text-[14px] cursor-pointer hover:bg-slate-50 transition-all flex items-center justify-center active:scale-95"
                >
                  Explore Solution
                </button>
              </div>

              {/* Right Side: Subtitle & Description */}
              <div className="flex flex-col pt-1">
                <h4 className="text-[28px] font-medium text-[#1E1E1E] mb-3 opacity-80 text-left">
                  Designed for libraries
                </h4>
                <p className="text-slate-600 text-[16px] leading-relaxed max-w-sm text-left">
                  {solutions[activeTab].description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

      {/* === MOBILE VERSION (Streamlined Clean Mobile Cards) === */}
      <div className="block md:hidden w-full px-4 flex flex-col gap-5">
        {solutions.map((item, index) => (
          <motion.div
            key={`mobile-card-${item.id}`}
            className="w-full bg-[#F8F9F9] rounded-2xl p-6 border border-slate-200/60 flex flex-col justify-between"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
          >
            <div className="flex flex-col items-start w-full">
              {/* Card Headline - Cleared of redundant gray tag and subheading badge */}
              <h3 className="text-[21px] font-semibold text-[#1E1E1E] leading-tight tracking-tight text-left mb-3">
                {item.title}
              </h3>

              {/* Main Description */}
              <p className="text-slate-600 text-[15px] leading-relaxed text-left mb-6">
                {item.description}
              </p>
            </div>

            {/* Action Explore Button Link */}
            <div className="w-full pt-1">
              <button className="h-11 w-full max-w-[170px] bg-white rounded-xl border border-slate-300/80 text-slate-800 font-bold text-[13.5px] cursor-pointer shadow-sm hover:bg-slate-50 active:scale-[0.97] transition-all flex items-center justify-center">
                Explore Solution
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SolutionsShowcase;