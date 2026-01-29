"use client";

import { FC } from "react";
import { FiMail, FiGithub, FiMessageCircle } from "react-icons/fi";

interface HeroActionsProps {
  email?: string;
  github?: string;
  whatsapp?: string;
}

const HeroActions: FC<HeroActionsProps> = ({
  email = "muhamadwaqas429@gmail.com",
  github = "https://github.com/muhamadwaqas429",
  whatsapp = "https://wa.me/03015156142",
}) => {
  return (
    <div className="mt-8 flex flex-wrap gap-4">
      <a
        href={`mailto:${email}?subject=Hire%20Waqas&body=Hi%20Waqas,%0D%0A%0D%0AI%20would%20like%20to%20hire%20you%20for%20a%20project.`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-600 transition"
      >
        <FiMail size={20} />
        Hire Me
      </a>

      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-6 py-3 border border-gray-400 text-gray-200 rounded-lg hover:bg-gray-800 transition"
      >
        <FiGithub size={20} />
        View Projects
      </a>

      <a
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-500 transition"
      >
        <FiMessageCircle size={20} />
        Chat on WhatsApp
      </a>
    </div>
  );
};

export default HeroActions;
