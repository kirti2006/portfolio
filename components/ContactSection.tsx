"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MessageSquare } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { personalInfo } from "@/lib/data";

const contactLinks = [
  {
    icon: <Mail size={20} />,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    id: "contact-email",
  },
  {
    icon: <GitHubIcon size={20} />,
    label: "GitHub",
    value: "github.com/kirti2006",
    href: personalInfo.github,
    id: "contact-github",
  },
  {
    icon: <LinkedInIcon size={20} />,
    label: "LinkedIn",
    value: "linkedin.com/in/kirti-dev06",
    href: personalInfo.linkedin,
    id: "contact-linkedin",
  },
  {
    icon: <Phone size={20} />,
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
    id: "contact-phone",
  },
];

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding" style={{ background: "var(--bg-secondary)" }}>
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
            <MessageSquare size={12} />
            Get in Touch
          </div>
          <h2
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              color: "var(--text-primary)",
            }}
          >
            Let&apos;s{" "}
            <span className="gradient-text italic">connect</span>
          </h2>
          <p className="text-base max-w-xl" style={{ color: "var(--text-muted)" }}>
            I&apos;m always open to exciting opportunities, collaborations, or just a friendly chat.
            Reach out via any of the links below and I&apos;ll get back to you promptly.
          </p>
        </motion.div>

        {/* Contact links Grid */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {contactLinks.map((link, i) => (
            <motion.a
              key={link.id}
              href={link.href}
              target={link.href.startsWith("mailto") || link.href.startsWith("tel") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-4 p-6 glass-card gradient-border group text-center"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.08 }}
              whileHover={{ y: -4 }}
              id={link.id}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
                style={{
                  background: "var(--accent-soft)",
                  color: "var(--accent-primary)",
                }}
              >
                {link.icon}
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: "var(--text-muted)" }}>
                  {link.label}
                </p>
                <p className="text-sm font-medium" style={{ color: "var(--text-primary)", wordBreak: "break-all" }}>
                  {link.value}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
