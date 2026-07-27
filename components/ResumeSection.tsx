"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, FileText, Eye } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function ResumeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="resume" className="section-padding" style={{ background: "var(--bg-primary)" }}>
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden"
          style={{ background: "var(--gradient-accent)" }}
        >
          {/* Decorative shapes */}
          <div
            className="absolute -top-16 -right-16 w-64 h-64 rounded-full opacity-20"
            style={{ background: "rgba(255,255,255,0.3)" }}
          />
          <div
            className="absolute bottom-0 left-24 w-40 h-40 rounded-full opacity-10"
            style={{ background: "rgba(255,255,255,0.4)" }}
          />

          <div className="relative z-10 p-12 sm:p-16 flex flex-col md:flex-row items-center gap-8 justify-between">
            {/* Text */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <FileText size={24} className="text-white opacity-80" />
                <span className="text-white/70 font-medium text-sm uppercase tracking-widest">
                  Resume
                </span>
              </div>
              <h2
                className="text-3xl sm:text-4xl font-bold text-white mb-3"
                style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
              >
                Want to know more?
              </h2>
              <p className="text-white/75 text-base max-w-md leading-relaxed">
                View my full resume to see my complete background, skills, and experience —
                or reach out directly and let&apos;s talk.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <motion.a
                href={personalInfo.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-7 py-3.5 rounded-2xl font-semibold text-sm bg-white"
                style={{ color: "var(--accent-primary)" }}
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0 12px 30px rgba(0,0,0,0.2)",
                }}
                whileTap={{ scale: 0.97 }}
                id="resume-download"
              >
                <ExternalLink size={16} />
                View Resume
              </motion.a>
              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-7 py-3.5 rounded-2xl font-semibold text-sm border-2 border-white/30 text-white hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                id="resume-linkedin"
              >
                <Eye size={16} />
                View LinkedIn
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
