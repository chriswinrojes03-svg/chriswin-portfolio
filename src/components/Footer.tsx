import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { profile, navLinks } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="section-padding relative border-t border-fg/10 bg-base-soft/50 py-12">
      <div className="glow-orb left-1/2 top-0 h-40 w-72 -translate-x-1/2 bg-accent/10" />

      <div className="relative z-10 flex flex-col items-center gap-8">
        <a href="#home" className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-accent/40 bg-accent/10 text-lg font-extrabold shadow-glow-sm">
            <span className="text-accent">C</span>
            <span className="text-fg">R</span>
          </span>
          <span className="text-sm font-semibold text-fg">{profile.name}</span>
        </a>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-fg/55 transition-colors hover:text-accent"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
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
              className="flex h-10 w-10 items-center justify-center rounded-full border border-fg/10 text-fg/60 transition-all hover:-translate-y-1 hover:border-accent/60 hover:text-accent"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>

        <div className="flex w-full flex-col items-center gap-4 border-t border-fg/5 pt-6 text-center sm:flex-row sm:justify-between">
          <p className="text-xs text-fg/40">
            © {new Date().getFullYear()} {profile.name}. Built with React, Tailwind & Framer Motion.
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-1.5 text-xs text-fg/50 transition-colors hover:text-accent"
          >
            Back to top <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
