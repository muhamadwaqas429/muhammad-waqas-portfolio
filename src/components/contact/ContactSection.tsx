"use client";

import ContactBackground from "./ContactBackground";
import { contactInfo } from "./contactData";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      <ContactBackground />

      <motion.div
        className="relative z-10 text-center space-y-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-5xl font-extrabold text-white">Get in Touch</h2>
        <p className="text-gray-300 text-lg max-w-xl mx-auto">
          I'm open to opportunities. Feel free to reach out via email, or
          connect with me on GitHub and LinkedIn.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center mt-6">
          <a
            href={`mailto:${contactInfo.email}`}
            className="px-6 py-3 bg-pink-500 hover:bg-pink-400 transition rounded-xl text-white font-semibold"
          >
            Email Me
          </a>
          <a
            href={contactInfo.github}
            target="_blank"
            className="px-6 py-3 bg-gray-800 hover:bg-gray-700 transition rounded-xl text-white font-semibold"
          >
            GitHub
          </a>
          <a
            href={contactInfo.linkedin}
            target="_blank"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 transition rounded-xl text-white font-semibold"
          >
            LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
}
