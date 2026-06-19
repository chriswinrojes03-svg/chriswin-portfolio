import { motion } from "framer-motion";
import { skillGroups } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative overflow-hidden py-24 md:py-32">
      <div className="glow-orb right-[-8%] top-1/3 h-80 w-80 bg-accent/10" />

      <div className="relative z-10">
        <SectionHeading
          eyebrow="What I Work With"
          title="Skills & Expertise"
          subtitle="A blend of cloud platforms, networking fundamentals and programming that lets me design, automate and monitor reliable infrastructure."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, gi) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: gi * 0.12 }}
                className="glass glass-hover rounded-3xl p-6"
              >
                <div className="mb-6 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent shadow-glow-sm">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-semibold text-fg">{group.category}</h3>
                </div>

                <div className="space-y-4">
                  {group.skills.map((skill, si) => (
                    <div key={skill.name}>
                      <div className="mb-1.5 flex items-center justify-between text-sm">
                        <span className="font-medium text-fg/80">{skill.name}</span>
                        <span className="text-xs text-accent">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-fg/5">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-accent-dark via-accent to-accent-light"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            delay: 0.2 + si * 0.07,
                            ease: "easeOut",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
