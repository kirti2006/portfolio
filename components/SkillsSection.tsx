"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Cpu, Lightbulb, Users } from "lucide-react";
import { skills } from "@/lib/data";

const categories = [
  {
    icon: <Cpu size={20} />,
    label: "Technical Skills",
    items: skills.technical,
    color: "#6d5ce7",
    bg: "rgba(109,92,231,0.07)",
    border: "rgba(109,92,231,0.15)",
  },
  {
    icon: <Lightbulb size={20} />,
    label: "Core Concepts",
    items: skills.concepts,
    color: "#0ea5e9",
    bg: "rgba(14,165,233,0.07)",
    border: "rgba(14,165,233,0.15)",
  },
  {
    icon: <Users size={20} />,
    label: "Soft Skills",
    items: skills.soft,
    color: "#10b981",
    bg: "rgba(16,185,129,0.07)",
    border: "rgba(16,185,129,0.15)",
  },
];

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding" style={{ background: "var(--bg-primary)" }}>
      <div className="container-custom">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4 uppercase tracking-widest"
            style={{ background: "rgba(109,92,231,0.08)", color: "var(--accent-primary)" }}
          >
            <Cpu size={12} />
            Skills
          </div>
          <h2
            className="text-4xl sm:text-5xl font-bold"
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              color: "var(--text-primary)",
            }}
          >
            What I work <span className="gradient-text italic">with</span>
          </h2>
        </motion.div>

        {/* Skill groups */}
        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat, catIdx) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIdx * 0.12 }}
              className="glass-card p-8 gradient-border"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: cat.bg, color: cat.color }}
                >
                  {cat.icon}
                </div>
                <h3 className="font-semibold text-base" style={{ color: "var(--text-primary)" }}>
                  {cat.label}
                </h3>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item, i) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.35, delay: catIdx * 0.12 + i * 0.04 }}
                    className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium cursor-default transition-all duration-200"
                    style={{
                      background: cat.bg,
                      color: cat.color,
                      border: `1px solid ${cat.border}`,
                    }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: `0 4px 12px ${cat.bg}`,
                    }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
