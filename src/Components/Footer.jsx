import React from "react";

import playStore from "../assets/Google_Play_Store_badge_EN 1.svg";
import appStore from "../assets/Download_on_the_App_Store_Badge 1.svg";
import logoWhite from "../assets/logo-white.svg";

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
    <footer className="relative w-full min-h-[600px] md:h-[939px] flex flex-col justify-end font-['Outfit'] text-white overflow-hidden">
      {/* 1. SVG Background Layer */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
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
      <div className="max-w-[1280px] mx-auto w-full px-6 pt-32 pb-20">
        <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-28 mb-20 lg:mb-32">
          {/* Link Columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-28">
            {Object.entries(footerLinks).map(([title, links], idx) => (
              <div key={idx} className="min-w-[120px]">
                <h4 className="text-[20px] md:text-[24px] font-medium mb-6 md:mb-8">{title}</h4>
                <ul className="flex flex-col gap-3 md:gap-4">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-[14px] md:text-[16px] font-regular opacity-80 hover:opacity-100 transition-opacity"
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
          <div className="flex flex-row lg:flex-col items-center lg:items-end gap-5">
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

        {/* 3. Bottom Brand Bar (No Divider) */}
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center md:items-end gap-8 md:gap-0">
          <div className="flex items-center">
            <img
              src={logoWhite}
              alt="ContentFlow Logo"
              className="w-40 md:w-50 h-10 md:h-14 object-contain"
            />
          </div>
          <p className="text-[14px] md:text-[16px] font-regular opacity-80">
            © 2026 ContentFlow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
