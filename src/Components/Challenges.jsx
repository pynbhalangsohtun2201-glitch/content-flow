import React from "react";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";

import challenge1 from "../assets/Problem/1.png";
import challenge2 from "../assets/Problem/2.png";
import challenge3 from "../assets/Problem/3.png";

const Challenges = () => {
  const challenges = [
    {
      id: 1,
      title: "Vendor Fragmentation",
      description:
        "Multiple vendors. Multiple contracts. Multiple invoices. Multiple support teams",
      image: challenge1,
      alt: "Illustration showing multiple disconnected digital services"
    },
    {
      id: 2,
      title: "Limited reach",
      description:
        "40% of your community has no digital library access. Schools, seniors, remote residents, invisible to your services.",
      image: challenge2,
      alt: "Diagram showing groups of people lacking access to library services"
    },
    {
      id: 3,
      title: "Implementation Friction",
      description:
        "Enterprise solutions take months to implement. Your community waits. Budgets expire. Momentum dies.",
      image: challenge3,
      alt: "Abstract representation of implementation delays and friction"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="w-full py-32 px-6 bg-white flex flex-col items-center font-outfit">
      <motion.div
        className="max-w-6xl w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.h2
          className="text-[30px] md:text-[38px] font-semibold text-center mb-14 text-[#1A1A1A] tracking-tight"
          variants={cardVariants}
        >
          Why Libraries Struggle with Digital Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          {challenges.map((item) => (
            <motion.div
              key={item.id}
              className="flex flex-col rounded-xl overflow-hidden border border-slate-200/60 shadow-none transition-all duration-300 hover:shadow-md group bg-white"
              variants={cardVariants}
            >
              {/* Visual Container */}
              <div className="bg-[#F8F9FA] h-[320px] flex items-center justify-center p-6 overflow-hidden">
                <motion.img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-contain"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              {/* Bottom Content Section */}
              <div className="bg-[#EAE6E6] p-8 flex flex-col items-start flex-grow">
                <h3 className="text-[20px] font-bold text-[#1E1E1E] mb-3 leading-tight text-left">
                  {item.title}
                </h3>
                <p className="text-slate-700 text-[14px] font-regular leading-relaxed mb-8 text-left">
                  {item.description}
                </p>

                <button className="mt-auto flex items-center text-[#1E1E1E] font-bold text-[16px] group/btn cursor-pointer transition-opacity hover:opacity-70">
                  Learn more
                  <MoveRight
                    className="ml-2.5 transition-transform group-hover/btn:translate-x-1"
                    size={20}
                    strokeWidth={2.5}
                  />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Challenges;
