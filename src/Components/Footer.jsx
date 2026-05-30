import React from "react";

import playStore from "../assets/Google_Play_Store_badge_EN 1.svg";
import appStore from "../assets/Download_on_the_App_Store_Badge 1.svg";
import logoWhite from "../assets/logo white.svg";

const Footer = () => {
  const footerLinks = {
    Product: [
      "Platform Overview",
      "Digital Collections",
      "Reader Experience",
      "Analytics",
      "Integrations",
    ],
    Solutions: [
      "Public Libraries",
      "Schools",
      "Universities",
      "Community Centers",
    ],
    Resources: ["Case Studies", "Help Center", "Blog", "Contact"],
    Company: ["About", "Careers", "Privacy Policy", "Terms of Service"],
  };

  return (
    <footer className="relative w-full min-h-[600px] md:h-[939px] flex flex-col justify-end font-['Outfit'] text-white overflow-hidden bg-gradient-to-b from-white via-[#52796F] via-[percentage:25%] to-[#2F3E46] md:bg-none">

      {/* 1. Desktop Only: SVG Background Layer (Remains completely untouched) */}
      <div className="hidden md:block absolute inset-0 -z-10" aria-hidden="true">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 939"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0H1440V939H0V0Z" fill="url(#paint0_linear_footer)" />
          <defs>
            <linearGradient
              id="paint0_linear_footer"
              x1="791"
              y1="-40"
              x2="791"
              y2="939"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" stopOpacity="0" />
              <stop offset="0.372609" stopColor="#84A98C" />
              <stop offset="0.550307" stopColor="#52796F" />
              <stop offset="0.770209" stopColor="#354F52" />
              <stop offset="0.951923" stopColor="#2F3E46" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* 2. Main Content Container */}
      <div className="max-w-[1280px] mx-auto w-full px-6 pt-24 md:pt-32 pb-16 md:pb-20 z-10">
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-28 mb-16 lg:mb-32">

          {/* Link Columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 lg:gap-28">
            {Object.entries(footerLinks).map(([title, links], idx) => (
              <div key={idx} className="min-w-[120px]">
                <h4 className="text-[18px] md:text-[24px] font-medium mb-4 md:mb-8 text-white drop-shadow-sm">
                  {title}
                </h4>
                <ul className="flex flex-col gap-3 md:gap-4">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-[14px] md:text-[16px] font-regular text-white/90 hover:text-white transition-opacity"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* App Store Badges */}
          <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-4 md:gap-5 w-full lg:w-auto">
            <div className="cursor-pointer hover:scale-105 transition-transform active:scale-95">
              <img
                src={playStore}
                alt="Get it on Google Play"
                className="h-[40px] md:h-[48px] w-auto object-contain"
              />
            </div>
            <div className="cursor-pointer hover:scale-105 transition-transform active:scale-95">
              <img
                src={appStore}
                alt="Download on the App Store"
                className="h-[40px] md:h-[48px] w-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* 3. Bottom Brand Bar */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-0 w-full text-left">
          <div className="flex items-center">
            <img
              src={logoWhite}
              alt="ContentFlow Logo"
              className="w-36 md:w-50 h-8 md:h-14 object-contain"
            />
          </div>
          <p className="text-[13px] md:text-[16px] font-regular opacity-70">
            © 2026 ContentFlow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;