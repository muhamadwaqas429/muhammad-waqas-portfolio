"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { NavItem } from "./NavItem";
import { NavbarMobile } from "./NavbarMobile";

interface NavbarProps {
  sections: Record<string, React.RefObject<HTMLElement> | null>;
}

export const Navbar: React.FC<NavbarProps> = ({ sections }) => {
  const [active, setActive] = useState<string>("Hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 5);

      let current = "";
      for (const [key, ref] of Object.entries(sections)) {
        if (ref && ref.current) {
          const top = ref.current.getBoundingClientRect().top;
          if (top <= window.innerHeight / 2) current = key;
        }
      }
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/5 border-b border-white/20 transition-all duration-300
        ${scrolled ? "shadow-xl backdrop-brightness-110" : ""}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo on left */}
        <div className="flex items-center gap-3 z-50">
          <Image
            src="/logo.png"
            alt="MW Logo"
            width={50}
            height={50}
            className="animate-glow"
          />
          <span className="text-white font-bold text-xl md:text-2xl tracking-wide">
            Muhammad Waqas
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex gap-6">
          {Object.keys(sections).map((sec) => (
            <NavItem
              key={sec}
              name={sec}
              active={active === sec}
              onClick={() => {
                const ref = sections[sec];
                if (ref && ref.current)
                  ref.current.scrollIntoView({ behavior: "smooth" });
              }}
            />
          ))}
        </div>

        {/* Mobile Hamburger separated on right */}
        <div className="lg:hidden z-50">
          <NavbarMobile sections={sections} />
        </div>
      </div>
    </nav>
  );
};
