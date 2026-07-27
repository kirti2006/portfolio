"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Layers, ArrowRight } from "lucide-react";
import { GitHubIcon } from "@/components/icons/LinkedInIcon";
import { projects } from "@/lib/data";

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding" style={{ background: "var(--bg-secondary)" }}>
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
            <Layers size={12} />
            Featured Projects
          </div>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <h2
              className="text-4xl sm:text-5xl font-bold"
              style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                color: "var(--text-primary)",
              }}
            >
              Things I&apos;ve{" "}
              <span className="gradient-text italic">built</span>
            </h2>
            <a
              href="https://github.com/kirti2006"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70"
              style={{ color: "var(--accent-primary)" }}
              id="projects-view-all"
            >
              View all on GitHub <ArrowRight size={15} />
            </a>
          </div>
        </motion.div>

        {/* Project cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: idx * 0.15 }}
              className="glass-card gradient-border group relative overflow-hidden"
              whileHover={{ y: -4 }}
              style={{ transition: "box-shadow 0.3s ease" }}
            >
              {/* Gradient top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "var(--gradient-accent)" }}
              />

              <div className="p-8">
                {/* Period badge */}
                <div
                  className="inline-flex text-xs font-medium px-3 py-1 rounded-full mb-4"
                  style={{
                    background: "rgba(109,92,231,0.06)",
                    color: "var(--text-muted)",
                  }}
                >
                  {project.period}
                </div>

                {/* Title */}
                <h3
                  className="text-2xl font-bold mb-1"
                  style={{
                    fontFamily: "'DM Serif Display', Georgia, serif",
                    color: "var(--text-primary)",
                  }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-sm font-medium mb-4"
                  style={{ color: "var(--accent-primary)" }}
                >
                  {project.subtitle}
                </p>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 mb-8">
                  {project.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2 text-sm"
                      style={{ color: "var(--text-muted)" }}
                    >
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: "var(--accent-primary)" }}
                      />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium"
                      style={{
                        background: "rgba(109,92,231,0.07)",
                        color: "var(--accent-primary)",
                        border: "1px solid rgba(109,92,231,0.12)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white"
                    style={{ background: "var(--gradient-accent)" }}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    id={`project-github-${project.title.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <GitHubIcon size={15} />
                    Source Code
                  </motion.a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-medium hover:opacity-70 transition-opacity"
                    style={{ color: "var(--text-muted)" }}
                    id={`project-live-${project.title.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
