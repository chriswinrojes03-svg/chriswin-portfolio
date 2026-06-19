import { motion } from "framer-motion";
import { Github, ExternalLink, FolderGit2 } from "lucide-react";
import { projects } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative overflow-hidden py-24 md:py-32">
      <div className="glow-orb left-1/2 top-0 h-72 w-72 -translate-x-1/2 bg-accent/10" />

      <div className="relative z-10">
        <SectionHeading
          eyebrow="Selected Work"
          title="Featured Projects"
          subtitle="Real-world projects spanning network intelligence, infrastructure management and cloud monitoring."
        />

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -8 }}
              className="group flex flex-col overflow-hidden rounded-3xl glass glass-hover"
            >
              {/* Image / cover */}
              <div className={`relative h-44 overflow-hidden bg-gradient-to-br ${project.gradient}`}>
                <div className="absolute inset-0 bg-grid-blue [background-size:28px_28px] opacity-50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <FolderGit2 className="h-14 w-14 text-fg/30 transition-transform duration-500 group-hover:scale-110 group-hover:text-accent/70" />
                </div>
                <span className="absolute left-4 top-4 rounded-full border border-fg/15 bg-base/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-fg/70 backdrop-blur">
                  Project {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold leading-snug text-fg transition-colors group-hover:text-accent-light">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-fg/55">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-accent/20 bg-accent/5 px-2.5 py-1 text-[11px] font-medium text-accent-light"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-fg/10 px-4 py-2 text-xs font-medium text-fg/80 transition-all hover:border-accent/50 hover:text-fg"
                  >
                    <Github className="h-3.5 w-3.5" /> Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-4 py-2 text-xs font-medium text-accent-light transition-all hover:bg-accent/25"
                  >
                    <ExternalLink className="h-3.5 w-3.5" /> Live Demo
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
