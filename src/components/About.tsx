import { useState } from "react";
import { motion } from "framer-motion";
import { Download, Target, Rocket, Award, Cpu, Briefcase } from "lucide-react";
import { profile, stats } from "../data/portfolio";

const statIcons = [Rocket, Award, Cpu, Briefcase];

export default function About() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="section-padding relative overflow-hidden py-24 md:py-32">
      <div className="glow-orb left-[-8%] top-1/4 h-72 w-72 bg-accent/10" />

      <div className="relative z-10 grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
        {/* Image left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -left-4 -top-4 h-full w-full rounded-3xl border border-accent/20" />
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-fg/10 shadow-glow-sm">
            <div className="absolute inset-0 z-10 bg-gradient-to-tr from-accent/15 to-transparent" />
            {!imgError ? (
              <img
                src="./about.jpg"
                alt="Chriswin Rojes"
                onError={(e) => {
                  // Fall back to the profile photo, then to the styled placeholder.
                  const img = e.currentTarget;
                  if (!img.dataset.fallback) {
                    img.dataset.fallback = "1";
                    img.src = "./profile.png";
                  } else {
                    setImgError(true);
                  }
                }}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-base-card to-base-soft">
                <div className="flex flex-col items-center gap-3 text-fg/40">
                  <Cpu className="h-12 w-12 text-accent/60" />
                  <p className="px-6 text-center text-xs">
                    Add an image as <code className="text-accent">public/about.jpg</code>
                  </p>
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Content right */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow">Get To Know</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-fg sm:text-4xl md:text-5xl">
            About Me
          </h2>
          <span className="mt-3 block h-1 w-20 rounded-full bg-gradient-to-r from-accent to-accent-light" />

          <p className="mt-6 leading-relaxed text-fg/60">{profile.about}</p>

          <div className="mt-6 flex items-start gap-3 rounded-2xl glass p-4">
            <Target className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
            <div>
              <h3 className="text-sm font-semibold text-fg">Career Objective</h3>
              <p className="mt-1 text-sm leading-relaxed text-fg/55">
                {profile.objective}
              </p>
            </div>
          </div>

          <a href={profile.resumeUrl} download className="btn-primary mt-7">
            Download Resume <Download className="h-4 w-4" />
          </a>
        </motion.div>
      </div>

      {/* Stats */}
      <div className="relative z-10 mt-16 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {stats.map((stat, i) => {
          const Icon = statIcons[i % statIcons.length];
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass glass-hover rounded-2xl p-5 text-center"
            >
              <Icon className="mx-auto mb-3 h-6 w-6 text-accent" />
              <p className="text-3xl font-extrabold text-fg md:text-4xl">{stat.value}</p>
              <p className="mt-1 text-xs text-fg/50 md:text-sm">{stat.label}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
