"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NavItem } from "./NavItem";
import { scrollToSection } from "./navbar-utils";

interface NavbarMobileProps {
  sections: Record<string, React.RefObject<HTMLElement | null>>;
}

export const NavbarMobile: React.FC<NavbarMobileProps> = ({ sections }) => {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  if (!mounted) return null;

  return (
    <>
      {/* Hamburger */}
      <button
        onClick={() => setOpen(true)}
        className="p-2 text-white"
        aria-label="Open menu"
      >
        <Menu size={28} />
      </button>

      {createPortal(
        <AnimatePresence>
          {open && (
            <>
              {/* Backdrop */}
              <motion.div
                className="fixed inset-0 z-[9998] bg-black/40 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setOpen(false)}
              />

              {/* Panel */}
              <motion.aside
                className="
                  fixed top-0 right-0 z-[9999]
                  h-[100svh] w-[85%] max-w-sm
                  bg-gradient-to-b from-[#0b0f1a]/95 to-[#020617]/95
                  backdrop-blur-xl
                  shadow-2xl
                  border-l border-white/10
                "
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {/* Header */}
                <div className="flex items-center justify-between px-6 pt-6">
                  <span className="text-white font-semibold tracking-wide">
                    Menu
                  </span>
                  <button
                    onClick={() => setOpen(false)}
                    className="text-white/80 hover:text-white"
                  >
                    <X size={26} />
                  </button>
                </div>

                {/* Divider */}
                <div className="my-6 h-px bg-white/10" />

                {/* Nav */}
                <nav className="px-6">
                  <ul className="flex flex-col gap-2">
                    {Object.keys(sections).map((sec) => (
                      <li key={sec}>
                        <NavItem
                          name={sec}
                          variant="mobile"
                          onClick={() => {
                            scrollToSection(sections[sec]);
                            setOpen(false);
                          }}
                        />
                      </li>
                    ))}
                  </ul>
                </nav>
              </motion.aside>
            </>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </>
  );
};
