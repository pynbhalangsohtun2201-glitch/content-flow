import React from "react";
import { motion } from "framer-motion";

const AnimatedContentFlow = ({ className }) => {
  // True centerlines for both the visual paths and the data particles
  const trackTop =
    "M49.3 82.2 C122.1 167.9 180.1 226.5 239.9 270.3 C300.7 314.7 363.3 343.8 445.0 370.3";
  const trackMidTop = "M46 252.6 C177.3 323.7 268.3 345.9 439.0 371.3";
  const trackStraight = "M46 369.3 H446";
  const trackMidBottom = "M46 489.0 C177.7 419.8 268.3 397.3 438.7 372.3";
  const trackBottom =
    "M49.8 669.6 C122.5 581.5 180.5 521.1 240.6 475.8 C301.6 429.8 364.5 399.6 446.0 372.3";

  return (
    <div className={`w-full max-w-[1100px] relative overflow-hidden aspect-[1124/724] ${className || ""}`}>
      <svg
        viewBox="0 0 1124 724"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-2xl"
        style={{ shapeRendering: "geometricPrecision" }}
      >
        {/* MAIN BACKGROUND SHADOW */}
        <g filter="url(#filter0_d_2306_2576)">
          <path
            d="M23 43C23 31.9543 31.9543 23 43 23H1081C1092.05 23 1101 31.9543 1101 43V681C1101 692.046 1092.05 701 1081 701H43C31.9543 701 23 692.046 23 681V43Z"
            fill="white"
          />
        </g>

        {/* BROWSER WINDOW DOTS */}
        <circle cx="49.6647" cy="48.7077" r="6.66473" fill="#F7655A" />
        <circle cx="73.8347" cy="48.7077" r="6.66473" fill="#F3D053" />
        <circle cx="98.3347" cy="48.7077" r="6.66473" fill="#62D06B" />

        {/* NATIVE SVG BACKGROUND BLUR (Replaced foreignObject) */}
        <rect
          x="46"
          y="73"
          width="1032"
          height="605"
          rx="20"
          fill="#000000"
          fillOpacity="0.05"
          filter="url(#native_card_blur)"
        />

        {/* MAIN CANVAS GRADIENT CONTAINER */}
        <rect
          x="46"
          y="73"
          width="1032"
          height="605"
          rx="20"
          fill="url(#paint0_linear_2306_2576)"
        />

        {/* OUTPUT LINE - Flowing gradient animation */}
        <path
          d="M1079 375.293H683V369.293H1079V375.293Z"
          fill="url(#output_flow_gradient)"
        />

        {/* INPUT LINES - Centerline Strokes */}
        <path
          d={trackStraight}
          stroke="url(#paint2_linear_2306_2576)"
          strokeWidth="4"
          fill="none"
        />
        <path
          d={trackTop}
          stroke="url(#paint4_linear_2306_2576)"
          strokeWidth="4"
          fill="none"
        />
        <path
          d={trackMidTop}
          stroke="url(#paint5_linear_2306_2576)"
          strokeWidth="4"
          fill="none"
        />
        <path
          d={trackMidBottom}
          stroke="url(#paint7_linear_2306_2576)"
          strokeWidth="4"
          fill="none"
        />
        <path
          d={trackBottom}
          stroke="url(#paint6_linear_2306_2576)"
          strokeWidth="4"
          fill="none"
        />

        {/* MOTION PARTICLES */}
        {[
          trackTop,
          trackMidTop,
          trackStraight,
          trackMidBottom,
          trackBottom,
        ].map((path, i) => (
          <motion.circle
            key={i}
            r="5"
            fill="#D3F477"
            style={{ offsetPath: `path("${path}")` }}
            animate={{ offsetDistance: ["0%", "100%"], opacity: [0, 1, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
              delay: i * 1.2,
            }}
          />
        ))}

        {/* CENTRAL HERO PILL BAR */}
        <g transform="translate(446, 335.293)">
          {/* NATIVE SVG PILL BLUR (Replaced foreignObject) */}
          <rect
            x="1.5"
            y="1.5"
            width="237"
            height="77"
            rx="38.5"
            fill="#000000"
            fillOpacity="0.1"
            filter="url(#native_pill_blur)"
          />

          {/* Static Base Border */}
          <rect
            x="1.5"
            y="1.5"
            width="237"
            height="77"
            rx="38.5"
            fill="url(#paint3_linear_2306_2576)"
            fillOpacity="0.2"
            stroke="url(#paint0_linear_2312_2603)"
            strokeWidth="4"
            strokeOpacity="0.3"
          />

          {/* Animated Chase Motion - Moving Spotlight Technique */}
          <g mask="url(#border_track_mask)">
            <motion.circle
              r="50"
              fill="url(#chase_radial_gradient)"
              style={{
                offsetPath: `path("M 40 1.5 H 200 A 38.5 38.5 0 0 1 200 78.5 H 40 A 38.5 38.5 0 0 1 40 1.5 Z")`,
                offsetRotate: "auto",
              }}
              animate={{ offsetDistance: ["0%", "100%"] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </g>

          {/* Core Branding Text */}
          <text
            x="120"
            y="41"
            fill="white"
            textAnchor="middle"
            dominantBaseline="middle"
            style={{
              fontSize: "28px",
              fontWeight: "500",
              fontFamily: "Outfit",
              pointerEvents: "none",
            }}
          >
            ContentFlow
          </text>
        </g>

        {/* Connection Point Glow (Left Side) */}
        <g filter="url(#filter0_f_2306_2509)">
          <circle cx="446" cy="373.793" r="11" fill="white" />
        </g>
        <circle cx="446" cy="373.793" r="6" fill="white" />

        {/* Connection Point Glow (Right Side) */}
        <g filter="url(#filter0_f_2306_2509)">
          <circle cx="683" cy="372.293" r="11" fill="white" />
        </g>

        {/* SYSTEM REFS & GLOW GRAPHICS CONFIG */}
        <defs>
          {/* Responsive Glass Filter Specs */}
          <filter id="native_card_blur" x="0%" y="0%" width="100%" height="100%">
            <feGaussianBlur stdDeviation="10" />
          </filter>
          <filter id="native_pill_blur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="20" />
          </filter>

          <filter
            id="filter0_d_2306_2576"
            x="0"
            y="0"
            width="1124"
            height="724"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="11" />
            <feGaussianBlur stdDeviation="11.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0817014 0 0 0 0 0.125713 0 0 0 0 0.154167 0 0 0 0.08 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_2306_2576"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_2306_2576"
              result="shape"
            />
          </filter>

          <motion.linearGradient
            id="output_flow_gradient"
            gradientUnits="userSpaceOnUse"
            x1="680"
            y1="372.293"
            x2="1079"
            y2="372.293"
            animate={{
              x1: [280, 1079],
              x2: [680, 1479],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#D3F477" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.2" />
          </motion.linearGradient>

          <mask id="border_track_mask">
            <path
              d="M 40 1.5 H 200 A 38.5 38.5 0 0 1 200 78.5 H 40 A 38.5 38.5 0 0 1 40 1.5 Z"
              fill="none"
              stroke="white"
              strokeWidth="4"
            />
          </mask>

          <radialGradient id="chase_radial_gradient">
            <stop offset="0%" stopColor="#D3F477" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#737373" stopOpacity="0" />
          </radialGradient>

          <filter
            id="filter0_f_2306_2509"
            x="665"
            y="357.293"
            width="30"
            height="30"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="2"
              result="effect1_foregroundBlur_2306_2509"
            />
          </filter>

          <linearGradient
            id="paint0_linear_2312_2603"
            x1="24.5"
            y1="3"
            x2="221"
            y2="77"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#D3F477" stopOpacity="0.4" />
            <stop
              offset="0.499344"
              stopColor="#D9D9D9"
              stopOpacity="0.349672"
            />
            <stop offset="1" stopColor="#D1F470" stopOpacity="0.6" />
          </linearGradient>

          <linearGradient
            id="paint0_linear_2306_2576"
            x1="1216.87"
            y1="22.5"
            x2="561.366"
            y2="677.365"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FAFAF8" />
            <stop offset="0.372609" stopColor="#84A98C" />
            <stop offset="0.550307" stopColor="#52796F" />
            <stop offset="0.770209" stopColor="#354F52" />
            <stop offset="0.951923" stopColor="#2F3E46" />
          </linearGradient>

          <linearGradient
            id="paint2_linear_2306_2576"
            x1="49.5997"
            y1="367.293"
            x2="426.03"
            y2="367.293"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#D3F477" />
            <stop offset="1" stopColor="#F7FDE5" stopOpacity="0.6" />
          </linearGradient>

          <linearGradient
            id="paint3_linear_2306_2576"
            x1="446"
            y1="372.293"
            x2="680"
            y2="372.293"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="0.408654" stopColor="#999999" />
            <stop offset="0.985577" stopColor="white" />
          </linearGradient>

          <linearGradient
            id="paint4_linear_2306_2576"
            x1="246.892"
            y1="80.4375"
            x2="246.892"
            y2="372.194"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#D3F477" />
            <stop offset="1" stopColor="#F7FDE5" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient
            id="paint5_linear_2306_2576"
            x1="242.647"
            y1="250.367"
            x2="242.647"
            y2="373.271"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#D3F477" />
            <stop offset="1" stopColor="#F7FDE5" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient
            id="paint6_linear_2306_2576"
            x1="247.636"
            y1="370.395"
            x2="247.636"
            y2="671.289"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#D3F477" />
            <stop offset="1" stopColor="#F7FDE5" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient
            id="paint7_linear_2306_2576"
            x1="242.644"
            y1="370.312"
            x2="242.644"
            y2="491.279"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#D3F477" />
            <stop offset="1" stopColor="#F7FDE5" stopOpacity="0.6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default AnimatedContentFlow;