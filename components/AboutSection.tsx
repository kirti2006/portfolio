"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Sparkles } from "lucide-react";
import { personalInfo, stats } from "@/lib/data";

function StatCard({ label, value, index }: { label: string; value: string; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card p-6 text-center gradient-border"
    >
      <div
        className="text-3xl font-bold mb-1 gradient-text"
        style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
      >
        {value}
      </div>
      <div className="text-sm font-medium" style={{ color: "var(--text-muted)" }}>
        {label}
      </div>
    </motion.div>
  );
}

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" style={{ background: "var(--bg-secondary)" }}>
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
            style={{
              background: "rgba(109,92,231,0.08)",
              color: "var(--accent-primary)",
            }}
          >
            <Sparkles size={12} />
            About Me
          </div>
          <h2
            className="text-4xl sm:text-5xl font-bold leading-tight"
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              color: "var(--text-primary)",
            }}
          >
            A little about{" "}
            <span className="gradient-text italic">who I am</span>
          </h2>
        </motion.div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p
              className="text-lg leading-relaxed mb-6"
              style={{ color: "var(--text-secondary)" }}
            >
              {personalInfo.bio}
            </p>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "var(--text-muted)" }}
            >
              When I&apos;m not writing code, I&apos;m exploring new technologies, working through
              algorithmic challenges, or designing intuitive user experiences. I believe great
              software lives at the intersection of technical depth and thoughtful design.
            </p>
            <div
              className="flex items-center gap-2 text-sm font-medium"
              style={{ color: "var(--text-muted)" }}
            >
              <MapPin size={15} style={{ color: "var(--accent-primary)" }} />
              {personalInfo.location}
            </div>
          </motion.div>

          {/* Visual card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            <div
              className="rounded-2xl p-8 relative overflow-hidden"
              style={{
                background: "var(--gradient-card)",
                border: "1px solid var(--border)",
              }}
            >
              {/* Decorative circle */}
              <div
                className="absolute -top-12 -right-12 w-48 h-48 rounded-full opacity-20"
                style={{ background: "var(--gradient-accent)" }}
              />

              <div
                className="text-5xl font-bold mb-3 gradient-text relative z-10"
                style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
              >
                K
              </div>
              <p className="text-2xl font-bold mb-1 relative z-10" style={{ color: "var(--text-primary)" }}>
                Kirti
              </p>
              <p className="text-sm mb-6 relative z-10" style={{ color: "var(--text-muted)" }}>
                B.Tech CSE · K.R. Mangalam University
              </p>

              <div className="space-y-3 relative z-10">
                {[
                  { label: "Currently learning", value: "AI/ML & System Design" },
                  { label: "Interests", value: "Software Engineering & AI/ML" },
                  { label: "Always up for", value: "Challenging side projects" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex items-start gap-3">
                    <span
                      className="w-2 h-2 rounded-full mt-2 shrink-0"
                      style={{ background: "var(--accent-primary)" }}
                    />
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--text-muted)" }}>
                        {label}
                      </span>
                      <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                        {value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <StatCard key={s.label} label={s.label} value={s.value} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
