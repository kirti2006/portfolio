"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";
import { education } from "@/lib/data";

const scoreColors: Record<string, { bg: string; text: string }> = {
  cgpa: { bg: "rgba(109,92,231,0.1)", text: "#6d5ce7" },
  percentage: { bg: "rgba(16,185,129,0.1)", text: "#10b981" },
};

export default function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding" style={{ background: "var(--bg-secondary)" }}>
      <div className="container-custom">
        {/* Header */}
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
            <GraduationCap size={12} />
            Education
          </div>
          <h2
            className="text-4xl sm:text-5xl font-bold"
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              color: "var(--text-primary)",
            }}
          >
            My academic{" "}
            <span className="gradient-text italic">journey</span>
          </h2>
        </motion.div>

        {/* Education cards */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-8 top-8 bottom-8 w-px hidden md:block"
            style={{ background: "var(--border-strong)" }}
          />

          <div className="space-y-6">
            {education.map((edu, idx) => {
              const color = scoreColors[edu.scoreType];
              return (
                <motion.article
                  key={edu.institution}
                  initial={{ opacity: 0, y: 25 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: idx * 0.13 }}
                  className="relative md:pl-20"
                >
                  {/* Timeline dot */}
                  <div
                    className="hidden md:flex absolute left-4 top-6 w-8 h-8 rounded-full items-center justify-center -translate-x-1/2 text-white"
                    style={{ background: "var(--gradient-accent)" }}
                  >
                    <GraduationCap size={14} />
                  </div>

                  <div
                    className="glass-card p-6 gradient-border group"
                    style={{ transition: "box-shadow 0.3s ease" }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3
                          className="text-xl font-bold mb-1"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {edu.institution}
                        </h3>
                        <p
                          className="text-sm font-medium mb-2"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          {edu.degree}
                        </p>
                        <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                          {edu.period}
                        </p>
                      </div>

                      <div
                        className="self-start px-4 py-2 rounded-xl text-sm font-bold shrink-0"
                        style={{ background: color.bg, color: color.text }}
                      >
                        {edu.score}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
