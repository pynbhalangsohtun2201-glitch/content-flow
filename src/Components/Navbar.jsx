import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
// Ensure the filename matches exactly (including spaces)
import Logo from "../assets/Content Flow.svg";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll position for glassmorphism effect
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Your specific brand color for the "Log in" text
  const brandColor = "#2D3E40";

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-[100] flex items-center justify-between px-6 py-4 lg:px-16 transition-all duration-500 ${
        isScrolled 
          ? "bg-white/80 backdrop-blur-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]" 
          : "bg-transparent"
      }`}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      aria-label="Main navigation"
    >
      {/* Left: Logo & Brand (Combined in your SVG) */}
      <motion.div
        className="flex items-center cursor-pointer"
        whileHover={{ scale: 1.02 }}
        active={{ scale: 0.98 }}
      >
        <img
          src={Logo}
          alt="ContentFlow Home"
          className="h-6 w-auto block object-contain"
        />
      </motion.div>

      {/* Right: Nav Links + Auth */}
      <div className="hidden md:flex items-center gap-6">
        {/* Main Navigation Links */}
        <div className="flex items-center gap-5 text-[15px] font-semibold text-slate-800" role="menubar">
          <button 
            className="flex items-center gap-1 hover:text-slate-500 transition-colors cursor-pointer"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Products <ChevronDown size={14} strokeWidth={2.5} />
          </button>
          <a href="#" className="hover:text-slate-500 transition-colors">
            Why us
          </a>
          <a href="#" className="hover:text-slate-500 transition-colors">
            Customers
          </a>
          <a href="#" className="hover:text-slate-500 transition-colors">
            Contact
          </a>
        </div>

        {/* Vertical Separator - matches the screenshot's thin gray line */}
        <div className="h-6 w-[1px] bg-slate-300/80 mx-1" />

        {/* Auth Group */}
        <div className="flex items-center gap-5">
          <button
            className="text-[14px] font-bold hover:opacity-70 transition-opacity cursor-pointer"
            style={{ color: brandColor }}
          >
            Log in
          </button>
          <button className="px-6 py-2.5 bg-white border border-slate-300 rounded-xl text-[14px] font-bold hover:bg-slate-50 transition-all active:scale-95 cursor-pointer">
            Sign up
          </button>
        </div>
      </div>

      {/* Mobile Hamburger Menu Toggle */}
      <button
        className="md:hidden p-2 text-slate-800 cursor-pointer"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMobileMenuOpen}
      >
        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Slide-down (Responsive View) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="absolute top-full left-0 w-full bg-white shadow-2xl border-t border-slate-100 flex flex-col p-8 gap-6 z-50 md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <a href="#" className="text-lg font-semibold text-slate-800">
              Products
            </a>
            <a href="#" className="text-lg font-semibold text-slate-800">
              Why us
            </a>
            <a href="#" className="text-lg font-semibold text-slate-800">
              Customers
            </a>
            <a href="#" className="text-lg font-semibold text-slate-800">
              Contact
            </a>
            <div className="h-[1px] w-full bg-slate-100" />
            <button
              className="text-left text-lg font-semibold"
              style={{ color: brandColor }}
            >
              Log in
            </button>
            <button className="w-full py-4 bg-[#2D3E40] text-white rounded-xl font-bold active:scale-[0.98] transition-transform">
              Sign up
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
