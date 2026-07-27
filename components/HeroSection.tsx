"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail, Sparkles } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { personalInfo } from "@/lib/data";

export default function HeroSection() {
  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="blob absolute"
          style={{
            width: 600,
            height: 600,
            background: "radial-gradient(circle, #a79af4 0%, transparent 70%)",
            top: "-10%",
            right: "-10%",
          }}
          animate={{
            scale: [1, 1.15, 1],
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="blob absolute"
          style={{
            width: 400,
            height: 400,
            background: "radial-gradient(circle, #c7d2fe 0%, transparent 70%)",
            bottom: "5%",
            left: "-5%",
          }}
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -15, 0],
            y: [0, 15, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="blob absolute"
          style={{
            width: 300,
            height: 300,
            background: "radial-gradient(circle, #ddd6fe 0%, transparent 70%)",
            top: "40%",
            left: "30%",
          }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, #6d5ce7 0px, transparent 1px, transparent 80px, #6d5ce7 80px), repeating-linear-gradient(90deg, #6d5ce7 0px, transparent 1px, transparent 80px, #6d5ce7 80px)",
        }}
      />

      <div className="container-custom relative z-10 py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-sm font-medium"
            style={{
              background: "rgba(109, 92, 231, 0.08)",
              border: "1px solid rgba(109, 92, 231, 0.2)",
              color: "var(--accent-primary)",
            }}
          >
            <Sparkles size={14} />
            <span>Open to Opportunities</span>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1
              className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-6"
              style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                color: "var(--text-primary)",
              }}
            >
              Hi, I&apos;m{" "}
              <span className="gradient-text">Kirti</span>
              <span style={{ color: "var(--accent-primary)" }}>.</span>
            </h1>
          </motion.div>

          {/* Role */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-xl sm:text-2xl font-medium mb-4"
            style={{ color: "var(--text-secondary)" }}
          >
            {personalInfo.role}
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="text-base sm:text-lg max-w-xl mb-12 leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            {personalInfo.tagline}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="flex flex-wrap gap-4 items-center mb-16"
          >
            <motion.button
              onClick={() => scrollToSection("#projects")}
              className="px-7 py-3.5 rounded-2xl font-semibold text-white text-sm"
              style={{ background: "var(--gradient-accent)" }}
              whileHover={{
                scale: 1.04,
                boxShadow: "0 12px 30px rgba(109, 92, 231, 0.4)",
              }}
              whileTap={{ scale: 0.97 }}
              id="hero-view-projects"
            >
              View Projects
            </motion.button>
            <motion.a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-sm"
              style={{
                background: "rgba(109,92,231,0.07)",
                border: "1px solid rgba(109,92,231,0.2)",
                color: "var(--accent-primary)",
              }}
              whileHover={{ scale: 1.04, background: "rgba(109,92,231,0.12)" }}
              whileTap={{ scale: 0.97 }}
              id="hero-github"
            >
              <GitHubIcon size={16} />
              GitHub
            </motion.a>
            <motion.a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-sm"
              style={{
                background: "rgba(10,102,194,0.07)",
                border: "1px solid rgba(10,102,194,0.2)",
                color: "#0a66c2",
              }}
              whileHover={{ scale: 1.04, background: "rgba(10,102,194,0.12)" }}
              whileTap={{ scale: 0.97 }}
              id="hero-linkedin"
            >
              <LinkedInIcon size={16} />
              LinkedIn
            </motion.a>
          </motion.div>

          {/* Social quick links row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex items-center gap-4"
            style={{ color: "var(--text-muted)" }}
          >
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2 text-sm hover:opacity-75 transition-opacity"
              id="hero-email"
            >
              <Mail size={15} />
              {personalInfo.email}
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollToSection("#about")}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs font-medium"
        style={{ color: "var(--text-muted)" }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        id="hero-scroll-down"
      >
        <span>Scroll</span>
        <ArrowDown size={16} />
      </motion.button>
    </section>
  );
}
