"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  project: any;
  index: number;
};

export default function ProjectItem({ project, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="group grid md:grid-cols-2 gap-10 items-center"
    >
      {/* Image */}
      <div className="relative rounded-2xl overflow-hidden border border-white/10 group-hover:border-purple-400 transition">
        <Image
          src={project.image}
          alt={project.title}
          width={900}
          height={500}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />
      </div>

      {/* Content */}
      <div>
        <h3 className="text-3xl font-bold mb-4 group-hover:text-purple-400 transition">
          {project.title}
        </h3>

        <p className="text-gray-400 mb-6">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-3 mb-6">
          {project.tech.map((t: string, i: number) => (
            <span
              key={i}
              className="px-3 py-1 text-xs bg-white/10 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>

        <a
          href={project.link}
          className="text-purple-400 hover:text-purple-300 font-medium"
        >
          View Project →
        </a>
      </div>
    </motion.div>
  );
}
