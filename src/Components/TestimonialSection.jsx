import React, { useState } from "react";
import { motion } from "framer-motion";

import hd1 from "../assets/Headshot/hd1.png";
import hd2 from "../assets/Headshot/hd2.png";
import hd3 from "../assets/Headshot/hd3.png";
import hd4 from "../assets/Headshot/hd4.png";
import hd5 from "../assets/Headshot/hd5.png";
import hd6 from "../assets/Headshot/hd6.png";

const TestimonialSection = () => {
  const [isLibrary, setIsLibrary] = useState(true);

  // Content for both states
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
  // Triple the data to ensure the screen is always filled during the loop
  const carouselData = [...activeData, ...activeData, ...activeData, ...activeData];

  // Calculate the precise width of one set of items for a seamless loop
  // Card (620px) + Gap (40px) = 660px per item. 3 items = 1980px.
  const setWidth = (620 + 40) * 3;

  return (
    <section className="w-full pt-24 pb-40 flex flex-col items-center font-['Outfit'] bg-[#FAFAF8] overflow-hidden">
      {/* 1. Header - Forced 2-line split */}
      <h2 className="text-[38px] font-semibold text-[#1A1A1A] mb-10 text-center max-w-4xl leading-[1.1] tracking-tight px-4">
        Trusted by the world’s best storytellers <br /> 
        and the communities that share them.
      </h2>

      {/* 2. Toggle Switch Area - Smooth Tween to Dark Green */}
      <div className="flex items-center gap-5 mb-20">
        <motion.div
          onClick={() => setIsLibrary(!isLibrary)}
          className="relative cursor-pointer flex items-center px-1.5"
          animate={{ backgroundColor: isLibrary ? "#D9D9D9" : "#354F52" }}
          transition={{ duration: 0.3 }}
          style={{
            width: "84px",
            height: "40px",
            borderRadius: "24px",
          }}
        >
          <motion.div
            animate={{ x: isLibrary ? 0 : 42 }}
            transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
            className="bg-white rounded-full shadow-md"
            style={{ width: "28px", height: "28px" }}
          />
        </motion.div>
        <span className="text-[22px] font-medium text-[#354F52] min-w-[140px]">
          {isLibrary ? "For Libraries" : "For Users"}
        </span>
      </div>

      {/* 3. Infinite Carousel Area */}
      <div className="relative w-full overflow-hidden">
        <motion.div 
          className="flex gap-10"
          animate={{ x: [0, -setWidth] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 45, // Slightly slower for the more compact look
              ease: "linear",
            },
          }}
          style={{ width: "fit-content" }}
        >
          {carouselData.map((item, index) => (
            <motion.div
              key={`${isLibrary ? "lib" : "user"}-${index}`}
              className="bg-white border border-slate-200/50 shadow-[0_20px_60px_rgba(0,0,0,0.04)] p-10 flex flex-col gap-6 flex-shrink-0"
              style={{
                width: "620px", // Reduced width
                height: "260px", // Reduced height
                borderRadius: "32px",
              }}
            >
              {/* Card Top: Identity */}
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-full overflow-hidden shadow-inner bg-slate-100 border-4 border-slate-50">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-[22px] font-bold text-[#1A1A1A]">
                    {item.name}
                  </h4>
                  <p className="text-[16px] text-slate-500 font-medium">{item.role}</p>
                </div>
              </div>

              {/* Card Bottom: Review */}
              <p className="text-[18px] text-[#4A4A4A] leading-relaxed font-regular line-clamp-3">
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
