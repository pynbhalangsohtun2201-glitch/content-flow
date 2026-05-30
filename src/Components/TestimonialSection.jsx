import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import hd1 from "../assets/Headshot/hd1.png";
import hd2 from "../assets/Headshot/hd2.png";
import hd3 from "../assets/Headshot/hd3.png";
import hd4 from "../assets/Headshot/hd4.png";
import hd5 from "../assets/Headshot/hd5.png";
import hd6 from "../assets/Headshot/hd6.png";

const TestimonialSection = () => {
  const [isLibrary, setIsLibrary] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Monitor screen width to dynamically compute accurate loop tracking variables
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // Run initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const libraryReviews = [
    {
      name: "Sarah Jenkins",
      role: "Head Librarian",
      image: hd1,
      review:
        "This platform has transformed how we manage our digital archives. The accessibility and speed are unmatched in the industry.",
    },
    {
      name: "Marcus Chen",
      role: "IT Director",
      image: hd2,
      review: "The integration process was seamless across all our branches. Our technical team was impressed by the robust API support.",
    },
    {
      name: "Julian Vance",
      role: "Operations Lead",
      image: hd3,
      review: "Finally, a solution that understands institutional scaling. It handles our million-plus catalog with absolute precision and ease.",
    },
  ];

  const userReviews = [
    {
      name: "Diana Moretti",
      role: "Avid Reader",
      image: hd4,
      review:
        "The mobile discovery experience makes finding my next book so easy. I spend more time reading and less time searching now.",
    },
    {
      name: "Aaron Mitchell",
      role: "Creative Director",
      image: hd5,
      review:
        "I love how I can access journals and videos all in one interface. It has become an essential tool for my daily research projects.",
    },
    {
      name: "Sophie Turner",
      role: "Researcher",
      image: hd6,
      review:
        "The digital format support is the best I've encountered so far. The high-resolution viewer is a game changer for archival work.",
    },
  ];

  const activeData = isLibrary ? libraryReviews : userReviews;
  const carouselData = [...activeData, ...activeData, ...activeData, ...activeData];

  // Dynamic values based on viewport configuration
  const cardWidth = isMobile ? 310 : 620;
  const gapWidth = isMobile ? 16 : 40;
  const setWidth = (cardWidth + gapWidth) * 3;

  return (
    <section className="w-full pt-12 pb-20 md:pt-24 md:pb-40 flex flex-col items-center font-['Outfit'] bg-[#FAFAF8] overflow-hidden">
      {/* 1. Header Area - Optimized text metrics for mobile */}
      <h2 className="text-[26px] md:text-[38px] font-semibold text-[#1A1A1A] mb-6 md:mb-10 text-center max-w-4xl leading-[1.2] md:leading-[1.1] tracking-tight px-5 text-balance">
        Trusted by the world’s best storytellers <br className="hidden md:inline" />
        and the communities that share them.
      </h2>

      {/* 2. Toggle Switch Area - Compressed spacing and cleaner sizing on mobile */}
      <div className="flex items-center gap-4 md:gap-5 mb-10 md:mb-20">
        <motion.div
          onClick={() => setIsLibrary(!isLibrary)}
          className="relative cursor-pointer flex items-center px-1"
          animate={{ backgroundColor: isLibrary ? "#D9D9D9" : "#354F52" }}
          transition={{ duration: 0.3 }}
          style={{
            width: isMobile ? "68px" : "84px",
            height: isMobile ? "34px" : "40px",
            borderRadius: "24px",
          }}
        >
          <motion.div
            animate={{ x: isLibrary ? 0 : isMobile ? 32 : 42 }}
            transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
            className="bg-white rounded-full shadow-sm"
            style={{
              width: isMobile ? "24px" : "28px",
              height: isMobile ? "24px" : "28px"
            }}
          />
        </motion.div>
        <span className="text-[16px] md:text-[22px] font-medium text-[#354F52] min-w-[100px] md:min-w-[140px] text-left">
          {isLibrary ? "For Libraries" : "For Users"}
        </span>
      </div>

      {/* 3. Infinite Marquee Loop Track */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-4 md:gap-10"
          animate={{ x: [0, -setWidth] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: isMobile ? 25 : 45, // Balances horizontal travel speeds across screens
              ease: "linear",
            },
          }}
          style={{ width: "fit-content" }}
        >
          {carouselData.map((item, index) => (
            <motion.div
              key={`${isLibrary ? "lib" : "user"}-${index}`}
              className="bg-white border border-slate-200/50 shadow-[0_12px_40px_rgba(0,0,0,0.03)] md:shadow-[0_20px_60px_rgba(0,0,0,0.04)] p-5 md:p-10 flex flex-col gap-4 md:gap-6 flex-shrink-0 justify-center text-left"
              style={{
                width: `${cardWidth}px`,
                height: isMobile ? "190px" : "260px",
                borderRadius: isMobile ? "24px" : "32px",
              }}
            >
              {/* Card Top: Identity */}
              <div className="flex items-center gap-3 md:gap-5">
                <div className="w-11 h-11 md:w-16 md:h-16 rounded-full overflow-hidden shadow-inner bg-slate-100 border-2 md:border-4 border-slate-50 flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="overflow-hidden">
                  <h4 className="text-[16px] md:text-[22px] font-bold text-[#1A1A1A] truncate leading-tight">
                    {item.name}
                  </h4>
                  <p className="text-[13px] md:text-[16px] text-slate-500 font-medium truncate mt-0.5">{item.role}</p>
                </div>
              </div>

              {/* Card Bottom: Review Description text */}
              <p className="text-[13.5px] md:text-[18px] text-[#4A4A4A] leading-relaxed font-regular line-clamp-3">
                "{item.review}"
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;