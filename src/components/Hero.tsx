import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight, Download, UserPlus } from "lucide-react";
import { profile } from "../data/portfolio";
import ParticleBackground from "./ParticleBackground";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function DotGrid() {
  return (
    <div className="absolute right-2 top-1/3 hidden grid-cols-6 gap-2.5 lg:grid" aria-hidden="true">
      {Array.from({ length: 36 }).map((_, i) => (
        <motion.span
          key={i}
          className="h-1.5 w-1.5 rounded-full bg-accent/40"
          initial={{ opacity: 0.15 }}
          animate={{ opacity: [0.15, 0.6, 0.15] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: (i % 6) * 0.2,
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid-blue [background-size:60px_60px] opacity-40" />
      <div className="glow-orb left-[-10%] top-[10%] h-96 w-96 bg-accent/25" />
      <div className="glow-orb right-[5%] bottom-[5%] h-80 w-80 bg-accent-dark/25" />
      <ParticleBackground />
      <DotGrid />

      {/* Watermark initials */}
      <span className="pointer-events-none absolute right-[18%] top-1/2 -translate-y-1/2 select-none text-[26rem] font-black leading-none text-fg/[0.015]">
        CR
      </span>

      <div className="section-padding relative z-10 grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* Left: text */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={item}
            className="mb-3 flex items-center gap-3 text-accent"
          >
            <span className="h-px w-10 bg-accent" />
            <span className="text-sm font-medium tracking-wide">Hello, I'm</span>
          </motion.p>

          <motion.h1
            variants={item}
            className="text-5xl font-extrabold leading-[1.05] tracking-tight text-fg sm:text-6xl xl:text-7xl"
          >
            {profile.firstName}{" "}
            <span className="gradient-text">{profile.lastName}</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 text-lg font-medium uppercase tracking-[0.25em] text-fg/70 sm:text-xl"
          >
            {profile.title}
          </motion.p>

          <motion.div variants={item} className="mt-6 max-w-xl space-y-1.5">
            {profile.taglines.map((line) => (
              <p key={line} className="text-sm leading-relaxed text-fg/55 sm:text-base">
                {line}
              </p>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#projects" className="btn-primary">
              View My Work <ArrowRight className="h-4 w-4" />
            </a>
            <a href={profile.resumeUrl} download className="btn-outline">
              Download Resume <Download className="h-4 w-4" />
            </a>
            <a href="#contact" className="btn-outline">
              Hire Me <UserPlus className="h-4 w-4" />
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div variants={item} className="mt-9 flex items-center gap-5">
            {[
              { icon: Github, href: profile.socials.github, label: "GitHub" },
              { icon: Linkedin, href: profile.socials.linkedin, label: "LinkedIn" },
              { icon: Mail, href: profile.socials.email, label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-fg/10 text-fg/70 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:text-accent hover:shadow-glow-sm"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-md lg:max-w-lg"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-fg/10 shadow-glow-lg">
            {/* Blue overlays */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-base via-base/30 to-transparent" />
            <div className="absolute inset-0 z-10 bg-accent/10 mix-blend-overlay" />

            {!imgError ? (
              <img
                src="/profile.jpg"
                alt={profile.name}
                onError={() => setImgError(true)}
                className="h-full w-full object-cover grayscale-[15%]"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-gradient-to-br from-base-card to-base-soft">
                <div className="flex h-28 w-28 items-center justify-center rounded-full border-2 border-accent/40 text-4xl font-extrabold shadow-glow">
                  <span className="text-accent">C</span>
                  <span className="text-fg">R</span>
                </div>
                <p className="px-6 text-center text-xs text-fg/40">
                  Add your photo as <code className="text-accent">public/profile.jpg</code>
                </p>
              </div>
            )}
          </div>

          {/* Floating accent ring */}
          <motion.div
            className="absolute -right-6 -top-6 h-24 w-24 rounded-full border border-accent/30"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <div className="glow-orb -bottom-8 left-1/2 h-40 w-40 -translate-x-1/2 bg-accent/20" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-fg/40 lg:flex"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        aria-label="Scroll to About"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="h-9 w-5 rounded-full border border-fg/20 p-1">
          <span className="block h-1.5 w-full rounded-full bg-accent" />
        </span>
      </motion.a>
    </section>
  );
}
