import React from "react";
import { motion } from "framer-motion";
import flow from "../assets/flow.svg";
import AnimatedContentFlow from "./AnimatedContentFlow";

// Import all logos from the comp folder
import logo1 from "../assets/comp/client-logo-01.svg";
import logo2 from "../assets/comp/client-logo-02.svg";
import logo3 from "../assets/comp/client-logo-03.svg";
import logo4 from "../assets/comp/client-logo-04.svg";
import logo5 from "../assets/comp/client-logo-05.svg";
import logo6 from "../assets/comp/client-logo-06.svg";
import logo7 from "../assets/comp/client-logo-07.svg";
import logo8 from "../assets/comp/client-logo-08.svg";
import logo9 from "../assets/comp/client-logo-09.svg";
import logo10 from "../assets/comp/client-logo-10.svg";
import logo11 from "../assets/comp/client-logo-11.svg";
import logo12 from "../assets/comp/client-logo-12.svg";

const Hero = () => {
  const brandDark = "#2D3E40";

  const logos = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
    logo11,
    logo12,
  ];

  // Animation variants for hero text elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative w-full min-h-[1000px] md:min-h-[1600px] bg-hero-gradient flex flex-col items-center pt-24 md:pt-38 px-6 overflow-hidden">
      {/* 1. TOP TEXT & DIAGRAM CONTAINER */}
      <motion.div
        className="max-w-[737px] w-full text-center flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="font-outfit text-[32px] md:text-[56px] leading-[110%] font-semibold text-[#1E1E1E] tracking-hero"
          variants={itemVariants}
        >
          One platform <br /> for the entire library
        </motion.h1>

        <motion.p
          className="mt-4 text-[18px] leading-[150%] font-medium text-slate-600 max-w-[500px]"
          variants={itemVariants}
        >
          A trusted, stable platform built for institutions.{" "}
          <br className="hidden md:block" />
          Manage all your digital content in one place.
        </motion.p>

        <motion.div
          className="mt-6 flex flex-wrap justify-center gap-4"
          variants={itemVariants}
        >
          <button
            className="px-6 py-3 rounded-xl text-white font-bold text-[14px] cursor-pointer hover:brightness-110 transition-all active:scale-95"
            style={{ backgroundColor: brandDark }}
          >
            Get Started
          </button>
          <button className="px-6 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-800 font-bold text-[14px] cursor-pointer hover:bg-slate-50 transition-all active:scale-95">
            Get a Demo
          </button>
        </motion.div>

        {/* Content Flow Diagram */}
        <motion.div
          className="mt-20 w-screen max-w-[1000px] flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <AnimatedContentFlow className="mt-8" />
        </motion.div>
      </motion.div>

      {/* 2. LOGO CONTAINER */}
      <div className="mt-28 w-full max-w-[1200px] flex flex-col items-center">
        <h2 className="text-white text-[16px] md:text-[18px] font-medium tracking-tight mb-12 md:mb-16 text-center px-4">
          Trusted by companies across industries
        </h2>

        {/* === DESKTOP VERSION (100% Unchanged Layout) === */}
        <motion.div
          className="hidden md:grid grid-cols-3 lg:grid-cols-6 gap-x-12 gap-y-16 w-full items-center justify-items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {logos.map((logo, index) => (
            <motion.img
              key={`desktop-${index}`}
              src={logo}
              alt={`Client logo ${index + 1}`}
              className="h-7 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 0.7, y: 0 }}
              whileHover={{ opacity: 1, scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            />
          ))}
        </motion.div>

        {/* === MOBILE VERSION (Clean, Edge-to-Edge Infinite Horizontal Marquee) === */}
        <div className="relative w-screen block md:hidden overflow-hidden">
          <motion.div
            className="flex w-max gap-12 px-6 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 25,
              repeat: Infinity,
            }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <img
                key={`mobile-${index}`}
                src={logo}
                alt={`Client logo mobile ${index + 1}`}
                className="h-6 w-auto object-contain opacity-75 max-w-[110px]"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;