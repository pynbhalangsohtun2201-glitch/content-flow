import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

import em1 from "../assets/Empowers/em1.png";
import em2 from "../assets/Empowers/em2.png";
import em3 from "../assets/Empowers/em3.png";

const EmpowerSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(1212);
  const gap = 40;

  // Handle responsive card width
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1260) {
        setCardWidth(window.innerWidth - 40);
      } else {
        setCardWidth(1212);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slides = [
    {
      title: "Community Outreach",
      image: em1,
      description:
        "Cloud-based platform that stores, manages, and delivers digital content to patrons anytime, anywhere.",
    },
    {
      title: "Patron Joy",
      image: em2,
      description:
        "Delivering a seamless discovery experience that ensures every reader finds exactly what they need.",
    },
    {
      title: "Digital Formats",
      image: em3,
      description:
        "Unifying various media types into a single interface for complex digital collections.",
    },
  ];

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <section className="w-full md:min-h-[85vh] py-12 md:py-32 flex flex-col items-center bg-white font-['Outfit'] overflow-hidden">
      {/* Header Area */}
      <div className="text-center mb-6 md:mb-10 px-4">
        <h2 className="text-[32px] md:text-[38px] font-semibold text-[#1A1A1A] mb-3 tracking-tight leading-[1.15] text-balance">
          A Platform That Empowers Everyone
        </h2>
        <p className="text-[oklch(55.4%_0.046_257.417)] text-[16px] md:text-[18px] font-medium max-w-2xl mx-auto text-balance">
          From institutions to individual readers, one platform serves everyone
        </p>
      </div>

      {/* Main Slider Viewport */}
      <motion.div
        className="relative w-full overflow-visible"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* The Track */}
        <motion.div
          className="flex"
          role="tablist"
          aria-label="Empowerment sections"
          style={{
            gap: `${gap}px`,
            paddingLeft: `calc(50% - ${cardWidth / 2}px)`,
            paddingRight: `calc(50% - ${cardWidth / 2}px)`
          }}
          animate={{ x: -(currentIndex * (cardWidth + gap)) }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              role="tabpanel"
              aria-hidden={currentIndex !== index}
              className="flex-shrink-0 flex flex-col md:flex-row items-center justify-between px-5 md:px-16 pt-6 md:pt-10 transition-all duration-500 relative overflow-hidden border border-slate-200/50"
              style={{
                width: `${cardWidth}px`,
                height: window.innerWidth < 768 ? "auto" : "480px",
                borderRadius: "24px",
                paddingBottom: "0px"
              }}
            >
              {/* SVG Background Layer */}
              <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
                <svg width="100%" height="100%" viewBox="0 0 1212 480" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                  <rect width="1212" height="480" rx="20" fill="url(#paint0_linear_2335_199)" />
                  <defs>
                    {/* Rebalanced stops for clean dark-teal contrast distribution behind mobile typography */}
                    <linearGradient id="paint0_linear_2335_199" x1="50%" y1="0%" x2="50%" y2="100%" gradientUnits="objectBoundingBox">
                      <stop offset="0%" stopColor="#2F3E46" />
                      <stop offset="30%" stopColor="#354F52" />
                      <stop offset="65%" stopColor="#52796F" />
                      <stop offset="85%" stopColor="#84A98C" />
                      <stop offset="100%" stopColor="#FAFAF8" />
                    </linearGradient>
                  </defs>
                </svg>
                {/* Backdrop blur for the glass effect */}
                <div className="absolute inset-0 backdrop-blur-[20px]" />
              </div>

              {/* Left Content Area */}
              <div className="w-full md:w-[500px] flex flex-col gap-3 md:gap-5 text-white pb-4 md:pb-10 relative z-10 text-left">
                <h3 className="text-[25px] md:text-[32px] font-medium leading-tight">
                  {slide.title}
                </h3>
                <p className="text-[15px] md:text-[17px] opacity-90 leading-relaxed font-light max-w-sm">
                  {slide.description}
                </p>
                <button
                  className="bg-white text-[#354F52] rounded-xl font-bold transition-all hover:bg-gray-50 active:scale-95 flex items-center justify-center mt-3 md:mt-6 shadow-sm"
                  style={{
                    width: "190px",
                    height: "42px",
                    fontSize: "13.5px",
                  }}
                >
                  Explore the Full Experience
                </button>
              </div>

              {/* Right Side - Image Content */}
              <div
                className="w-full md:w-[480px] h-[185px] md:h-[440px] self-center md:self-end overflow-hidden relative z-10 mt-4 md:mt-0 shadow-inner"
                style={{
                  borderTopLeftRadius: "16px",
                  borderTopRightRadius: "16px",
                }}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Navigation Controls (Perfectly visible inside viewport fold) */}
      <div className="w-full max-w-[1212px] flex justify-center gap-4 mt-6 md:mt-8 px-4">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${currentIndex === 0
              ? "opacity-20 cursor-not-allowed bg-[#D9D9D9]"
              : "bg-[#D9D9D9] hover:bg-gray-300 active:scale-90"
            }`}
        >
          <ArrowLeft size={20} className="text-black" />
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex === slides.length - 1}
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${currentIndex === slides.length - 1
              ? "opacity-20 cursor-not-allowed bg-[#D9D9D9]"
              : "bg-[#D9D9D9] hover:bg-gray-300 active:scale-90"
            }`}
        >
          <ArrowRight size={20} className="text-black" />
        </button>
      </div>
    </section>
  );
};

export default EmpowerSlider;