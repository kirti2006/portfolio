import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Kirti — Software Engineer & AI/ML Enthusiast",
  description:
    "Personal portfolio of Kirti — a Computer Science student passionate about software engineering, AI/ML, and building impactful software. View projects, experience, and more.",
  keywords: [
    "Kirti",
    "portfolio",
    "full-stack developer",
    "AI developer",
    "Next.js developer",
    "software engineer",
    "Python developer",
    "computer science student",
  ],
  authors: [{ name: "Kirti" }],
  openGraph: {
    title: "Kirti — Software Engineer & AI/ML Enthusiast",
    description:
      "Personal portfolio of Kirti — building intelligent software and scalable systems one line at a time.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kirti — Developer Portfolio",
    description: "Software Engineer & AI/ML Enthusiast. Check out my projects and experience.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
