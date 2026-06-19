import { motion } from "framer-motion";
import { Cloud, Code2, Network, BadgeCheck } from "lucide-react";
import { certifications } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

const iconMap: Record<string, typeof Cloud> = {
  AWS: Cloud,
  Python: Code2,
  Networking: Network,
};

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="section-padding relative overflow-hidden py-24 md:py-32"
    >
      <div className="glow-orb left-[-6%] bottom-0 h-72 w-72 bg-accent/10" />

      <div className="relative z-10">
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications"
          subtitle="Verified knowledge across cloud, programming and networking domains."
        />

        <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
          {certifications.map((cert, i) => {
            const Icon = iconMap[cert.category] ?? BadgeCheck;
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-3xl glass glass-hover p-7"
              >
                <div className="absolute right-0 top-0 h-24 w-24 -translate-y-8 translate-x-8 rounded-full bg-accent/10 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent shadow-glow-sm">
                    <Icon className="h-6 w-6" />
                  </span>
                  <BadgeCheck className="h-5 w-5 text-accent/60" />
                </div>
                <span className="mt-5 block text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                  {cert.category}
                </span>
                <h3 className="mt-1 text-lg font-semibold text-fg">{cert.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg/55">
                  {cert.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
