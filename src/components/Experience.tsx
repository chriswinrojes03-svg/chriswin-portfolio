import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { experiences, education } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative overflow-hidden py-24 md:py-32">
      <div className="glow-orb right-[-6%] top-1/4 h-72 w-72 bg-accent/10" />

      <div className="relative z-10">
        <SectionHeading
          eyebrow="My Journey"
          title="Experience & Education"
          subtitle="Hands-on internships and academic foundations shaping my path as a Cloud & Networking Engineer."
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Experience timeline */}
          <div>
            <div className="mb-8 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent shadow-glow-sm">
                <Briefcase className="h-5 w-5" />
              </span>
              <h3 className="text-xl font-semibold text-fg">Experience</h3>
            </div>

            <div className="relative ml-3 border-l border-fg/10 pl-8">
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="relative mb-9 last:mb-0"
                >
                  <span className="absolute -left-[2.6rem] top-1 flex h-4 w-4 items-center justify-center">
                    <span className="absolute h-4 w-4 animate-ping rounded-full bg-accent/40" />
                    <span className="h-3 w-3 rounded-full border-2 border-base bg-accent" />
                  </span>
                  <div className="glass glass-hover rounded-2xl p-5">
                    <span className="text-[11px] font-medium uppercase tracking-wider text-accent">
                      {exp.period}
                    </span>
                    <h4 className="mt-1 text-base font-semibold text-fg">{exp.role}</h4>
                    <p className="text-sm font-medium text-accent-light">{exp.company}</p>
                    <p className="mt-2 text-sm leading-relaxed text-fg/55">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="mb-8 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent shadow-glow-sm">
                <GraduationCap className="h-5 w-5" />
              </span>
              <h3 className="text-xl font-semibold text-fg">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.institution}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="glass glass-hover rounded-2xl p-6"
                >
                  <h4 className="text-base font-semibold text-fg">{edu.degree}</h4>
                  <p className="mt-1 text-sm font-medium text-accent-light">
                    {edu.institution}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-fg/55">{edu.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
