"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Award, CheckCircle2 } from "lucide-react";
import { experience, certifications } from "@/lib/data";

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding" style={{ background: "var(--bg-primary)" }}>
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
            <Briefcase size={12} />
            Qualifications
          </div>
          <h2
            className="text-4xl sm:text-5xl font-bold"
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              color: "var(--text-primary)",
            }}
          >
            Learning Experience & <span className="gradient-text italic">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Timeline — takes 3 columns */}
          <div className="lg:col-span-3">
            <h3
              className="text-sm font-semibold uppercase tracking-widest mb-8"
              style={{ color: "var(--text-muted)" }}
            >
              Internship Experience
            </h3>
            <div className="timeline-line space-y-8 pl-12">
              {experience.map((exp, idx) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div
                    className="absolute -left-12 top-1 w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-md"
                    style={{ background: "var(--gradient-accent)" }}
                  >
                    {idx + 1}
                  </div>

                  <div className="glass-card p-6 gradient-border">
                    <div className="flex items-start justify-between flex-wrap gap-3 mb-3">
                      <div>
                        <h4
                          className="font-bold text-lg leading-tight"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {exp.title}
                        </h4>
                        <p
                          className="text-sm font-medium mt-0.5"
                          style={{ color: "var(--accent-primary)" }}
                        >
                          {exp.company} · {exp.type}
                        </p>
                      </div>
                      <span
                        className="text-xs font-medium px-3 py-1 rounded-full shrink-0"
                        style={{
                          background: "rgba(109,92,231,0.07)",
                          color: "var(--text-muted)",
                        }}
                      >
                        {exp.period}
                      </span>
                    </div>

                    <p
                      className="text-sm leading-relaxed mb-4"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {exp.description}
                    </p>

                    <ul className="space-y-1.5">
                      {exp.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-2 text-sm"
                          style={{ color: "var(--text-muted)" }}
                        >
                          <CheckCircle2
                            size={14}
                            className="mt-0.5 shrink-0"
                            style={{ color: "var(--accent-primary)" }}
                          />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications — takes 2 columns */}
          <div className="lg:col-span-2">
            <h3
              className="text-sm font-semibold uppercase tracking-widest mb-8"
              style={{ color: "var(--text-muted)" }}
            >
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="glass-card p-5 gradient-border flex items-start gap-4"
                  whileHover={{ y: -2 }}
                >
                  <div
                    className="text-2xl w-10 h-10 flex items-center justify-center rounded-xl shrink-0"
                    style={{ background: "var(--accent-soft)" }}
                  >
                    {cert.icon}
                  </div>
                  <div>
                    <p
                      className="text-sm font-semibold leading-snug mb-1"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {cert.name}
                    </p>
                    <p className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>
                      {cert.issuer}
                    </p>
                  </div>
                  <Award
                    size={16}
                    className="shrink-0 ml-auto self-center opacity-30"
                    style={{ color: "var(--accent-primary)" }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
