"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUp, Code2, Heart } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { personalInfo } from "@/lib/data";

const footerLinks = [
  { icon: <GitHubIcon size={18} />, href: personalInfo.github, label: "GitHub", id: "footer-github" },
  { icon: <LinkedInIcon size={18} />, href: personalInfo.linkedin, label: "LinkedIn", id: "footer-linkedin" },
  { icon: <Mail size={18} />, href: `mailto:${personalInfo.email}`, label: "Email", id: "footer-email" },
];

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      className="relative pt-16 pb-8"
      style={{ background: "var(--text-primary)" }}
    >
      {/* Gradient top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "var(--gradient-accent)" }}
      />

      <div className="container-custom">
        {/* Top row */}
        <div className="grid md:grid-cols-3 gap-10 pb-12 border-b" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center text-white"
                style={{ background: "var(--gradient-accent)" }}
              >
                <Code2 size={18} />
              </div>
              <span className="font-bold text-lg text-white tracking-tight">
                Kirti<span style={{ color: "var(--accent-secondary)" }}>.</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
              {personalInfo.role} building thoughtful digital experiences.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: "rgba(255,255,255,0.4)" }}>
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <button
                    onClick={() => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })}
                    className="text-sm transition-colors duration-200 hover:text-white"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                    id={`footer-nav-${label.toLowerCase()}`}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social + CTA */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: "rgba(255,255,255,0.4)" }}>
              Connect
            </h3>
            <div className="flex gap-3 mb-6">
              {footerLinks.map(({ icon, href, label, id }) => (
                <motion.a
                  key={id}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-200"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    color: "rgba(255,255,255,0.5)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                  whileHover={{
                    scale: 1.1,
                    background: "var(--gradient-accent)",
                    color: "#fff",
                  }}
                  id={id}
                >
                  {icon}
                </motion.a>
              ))}
            </div>
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
              {personalInfo.email}
            </p>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex items-center justify-between pt-8 gap-4 flex-wrap">
          <p className="text-xs flex items-center gap-1.5" style={{ color: "rgba(255,255,255,0.3)" }}>
            © {new Date().getFullYear()} Kirti Singla · Built with{" "}
            <Heart size={11} className="inline" style={{ color: "var(--accent-secondary)" }} />{" "}
            using Next.js & Framer Motion
          </p>

          <motion.button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-xl flex items-center justify-center"
            style={{
              background: "rgba(255,255,255,0.06)",
              color: "rgba(255,255,255,0.5)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
            whileHover={{ scale: 1.1, background: "var(--gradient-accent)", color: "#fff" }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to top"
            id="footer-back-to-top"
          >
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
