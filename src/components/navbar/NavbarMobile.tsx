"use client";

import React, { useState } from "react";
import { NavItem } from "./NavItem";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";

interface NavbarMobileProps {
  sections: Record<string, React.RefObject<HTMLElement | null>>;
}

export const NavbarMobile: React.FC<NavbarMobileProps> = ({ sections }) => {
  const [open, setOpen] = useState(false);

  const handleLinkClick = (ref: React.RefObject<HTMLElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <>
      {/* Hamburger icon */}
      <button
        onClick={() => setOpen(true)}
        className="fixed top-4 right-4 z-50 text-white p-2 rounded-md hover:bg-white/10 transition"
        aria-label="Open menu"
      >
        <Menu size={28} />
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />

            {/* Slide-in panel */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 left-0 w-full h-full z-50 flex flex-col items-center justify-center gap-12 bg-white/5 backdrop-blur-xl p-6"
            >
              {/* Close button */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-6 right-6 text-white hover:text-cyan-400 transition"
                aria-label="Close menu"
              >
                <X size={28} />
              </button>

              {/* Logo */}
              <div className="flex items-center gap-3 mb-12">
                <Image
                  src="/logo.svg"
                  alt="MW Logo"
                  width={60}
                  height={60}
                  className="animate-glow"
                />
                <span className="text-white font-bold text-2xl tracking-wide">
                  Muhammad Waqas
                </span>
              </div>

              {/* Links */}
              <div className="flex flex-col gap-6 items-center">
                {Object.keys(sections).map((sec) => (
                  <NavItem
                    key={sec}
                    name={sec}
                    onClick={() => handleLinkClick(sections[sec])}
                  />
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
