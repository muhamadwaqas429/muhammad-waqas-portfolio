"use client";

import React from "react";
import { motion } from "framer-motion";

interface NavItemProps {
  name: string;
  onClick: () => void;
  active?: boolean;
}

export const NavItem: React.FC<NavItemProps> = ({ name, onClick, active }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1, color: "#00fff0" }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="text-white text-xl md:text-2xl font-semibold relative focus:outline-none"
    >
      {name}
      {active && (
        <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-cyan-400 rounded" />
      )}
    </motion.button>
  );
};
