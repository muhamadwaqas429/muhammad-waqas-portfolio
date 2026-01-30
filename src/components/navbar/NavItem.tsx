"use client";

import { motion } from "framer-motion";

interface NavItemProps {
  name: string;
  onClick: () => void;
  active?: boolean;
  variant?: "desktop" | "mobile";
}

export const NavItem: React.FC<NavItemProps> = ({
  name,
  onClick,
  active,
  variant = "desktop",
}) => {
  return (
    <motion.button
      whileTap={{ scale: 0.96 }}
      onClick={onClick}
      className={`
        w-full text-center font-medium tracking-wide
        ${
          variant === "desktop"
            ? "text-white text-lg hover:text-cyan-400"
            : "text-white text-2xl py-4"
        }
      `}
    >
      {name}

      {active && variant === "desktop" && (
        <span className="block mx-auto mt-1 h-[2px] w-6 bg-cyan-400 rounded" />
      )}
    </motion.button>
  );
};
