import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, Send, CheckCircle2 } from "lucide-react";
import { profile } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

const contactItems = [
  { icon: Mail, label: "Email", value: profile.email, href: profile.socials.email },
  { icon: Github, label: "GitHub", value: "@chriswinrojes", href: profile.socials.github },
  { icon: Linkedin, label: "LinkedIn", value: "Chriswin Rojes", href: profile.socials.linkedin },
  { icon: MapPin, label: "Location", value: profile.location, href: undefined },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Opens the visitor's mail client pre-filled — no backend required.
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
    window.location.href = `${profile.socials.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden py-24 md:py-32">
      <div className="glow-orb right-1/2 top-1/4 h-80 w-80 translate-x-1/2 bg-accent/10" />

      <div className="relative z-10">
        <SectionHeading
          eyebrow="Let's Talk"
          title="Get In Touch"
          subtitle="Have an opportunity or just want to connect? My inbox is always open."
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {contactItems.map((item) => {
              const Inner = (
                <div className="glass glass-hover flex h-full items-center gap-4 rounded-2xl p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-wider text-fg/40">
                      {item.label}
                    </p>
                    <p className="truncate text-sm font-medium text-fg">{item.value}</p>
                  </div>
                </div>
              );
              return item.href ? (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
                  {Inner}
                </a>
              ) : (
                <div key={item.label}>{Inner}</div>
              );
            })}
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass space-y-4 rounded-3xl p-7"
          >
            <div>
              <label className="mb-1.5 block text-xs font-medium text-fg/60" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className="w-full rounded-xl border border-fg/10 bg-fg/5 px-4 py-3 text-sm text-fg placeholder-fg/30 outline-none transition focus:border-accent/60 focus:shadow-glow-sm"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-medium text-fg/60" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com"
                className="w-full rounded-xl border border-fg/10 bg-fg/5 px-4 py-3 text-sm text-fg placeholder-fg/30 outline-none transition focus:border-accent/60 focus:shadow-glow-sm"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-medium text-fg/60" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project or opportunity..."
                className="w-full resize-none rounded-xl border border-fg/10 bg-fg/5 px-4 py-3 text-sm text-fg placeholder-fg/30 outline-none transition focus:border-accent/60 focus:shadow-glow-sm"
              />
            </div>
            <button type="submit" className="btn-primary w-full">
              {sent ? (
                <>
                  <CheckCircle2 className="h-4 w-4" /> Message Ready
                </>
              ) : (
                <>
                  Send Message <Send className="h-4 w-4" />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
