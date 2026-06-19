import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  return (
    <motion.div
      className={`mb-14 flex flex-col gap-3 ${
        align === "center" ? "items-center text-center" : "items-start text-left"
      }`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="text-3xl font-bold tracking-tight text-fg sm:text-4xl md:text-5xl">
        {title}
      </h2>
      <span className="mt-1 h-1 w-20 rounded-full bg-gradient-to-r from-accent to-accent-light" />
      {subtitle && (
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-fg/55 md:text-base">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
