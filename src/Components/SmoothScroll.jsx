import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

/**
 * SmoothScroll Component
 * Wraps the application to provide a fluid, momentum-based scrolling experience.
 */
const SmoothScroll = ({ children }) => {
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  // 1. Track the native scroll position
  const { scrollY } = useScroll();

  // 2. Create a "smoothed" scroll value using a spring physics simulation
  // Increase stiffness for a faster response, increase damping for less "bounce"
  const smoothY = useSpring(scrollY, {
    // Adjusted stiffness and damping for a faster feel
    stiffness: 60, // Increased stiffness
    damping: 10, // Decreased damping slightly
    mass: 0.2,
    restDelta: 0.001,
  });

  // 3. Map the smoothed value to a negative translateY
  const y = useTransform(smoothY, (value) => -value);

  // 4. Synchronize the total page height so the browser's scrollbar remains accurate
  useEffect(() => {
    const handleResize = () => {
      if (contentRef.current) {
        setContentHeight(contentRef.current.scrollHeight);
      }
    };

    handleResize();

    const resizeObserver = new ResizeObserver(handleResize);
    if (contentRef.current) resizeObserver.observe(contentRef.current);

    return () => resizeObserver.disconnect();
  }, [children]);

  return (
    <>
      <motion.div
        ref={contentRef}
        style={{ y }}
        className="fixed top-0 left-0 w-full flex flex-col overflow-hidden will-change-transform"
      >
        {children}
      </motion.div>
      {/* Spacer that provides actual scrollable height to the body */}
      <div style={{ height: contentHeight }} aria-hidden="true" />
    </>
  );
};

export default SmoothScroll;
