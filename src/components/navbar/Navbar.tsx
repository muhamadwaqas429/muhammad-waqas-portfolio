"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { NavItem } from "./NavItem";
import { NavbarMobile } from "./NavbarMobile";
import { scrollToSection } from "./navbar-utils";

interface NavbarProps {
  sections: Record<string, React.RefObject<HTMLElement | null>>;
}

export const Navbar: React.FC<NavbarProps> = ({ sections }) => {
  const [active, setActive] = useState("Hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      let current = "Hero";
      for (const [key, ref] of Object.entries(sections)) {
        if (ref.current) {
          const top = ref.current.getBoundingClientRect().top;
          if (top <= window.innerHeight / 2) current = key;
        }
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [sections]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all
        ${scrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"}
      `}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-[70px]">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
          <span className="text-white font-semibold text-lg">
            Muhammad Waqas
          </span>
        </div>

        {/* Desktop */}
        <div className="hidden lg:flex gap-8">
          {Object.keys(sections).map((sec) => (
            <NavItem
              key={sec}
              name={sec}
              active={active === sec}
              onClick={() => scrollToSection(sections[sec])}
            />
          ))}
        </div>

        {/* Mobile */}
        <div className="lg:hidden">
          <NavbarMobile sections={sections} />
        </div>
      </div>
    </nav>
  );
};
