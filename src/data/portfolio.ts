import {
  Cloud,
  Network,
  Code2,
  type LucideIcon,
} from "lucide-react";

export const profile = {
  name: "Chriswin Rojes",
  firstName: "Chriswin",
  lastName: "Rojes",
  title: "Cloud & Networking Engineer",
  headline:
    "Graduate Technical Intern at NLC India Limited | AWS | Python | Networking | M.Sc Computer Science",
  taglines: [
    "Graduate Technical Intern at NLC India Limited",
    "AWS Enthusiast | Python Developer",
    "Network Designer | M.Sc Computer Science Student",
  ],
  about:
    "Passionate Cloud and Networking Engineer with experience in Python, AWS, Network Design and Automation. Interested in Cloud Infrastructure, Network Monitoring and Scalable Solutions.",
  objective:
    "To grow as a Cloud & Networking Engineer by building secure, scalable and automated infrastructure — bridging the gap between robust network design and modern cloud platforms.",
  location: "Tamil Nadu, India",
  email: "chriswinrojes@gmail.com",
  resumeUrl: "/resume.pdf",
  socials: {
    github: "https://github.com/chriswinrojes",
    linkedin: "https://www.linkedin.com/in/chriswin-rojes-6a5749403",
    email: "mailto:chriswinrojes@gmail.com",
  },
};

export const stats = [
  { value: "10+", label: "Projects Completed" },
  { value: "5+", label: "Certifications" },
  { value: "8+", label: "Technologies" },
  { value: "1+", label: "Years Experience" },
];

export interface SkillGroup {
  category: string;
  icon: LucideIcon;
  skills: { name: string; level: number }[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Cloud Technologies",
    icon: Cloud,
    skills: [
      { name: "AWS", level: 85 },
      { name: "EC2", level: 82 },
      { name: "S3", level: 88 },
      { name: "IAM", level: 78 },
      { name: "VPC", level: 80 },
      { name: "CloudWatch", level: 75 },
    ],
  },
  {
    category: "Networking",
    icon: Network,
    skills: [
      { name: "TCP/IP", level: 90 },
      { name: "DHCP", level: 85 },
      { name: "DNS", level: 85 },
      { name: "OSPF", level: 78 },
      { name: "VLAN", level: 80 },
      { name: "Subnetting", level: 88 },
    ],
  },
  {
    category: "Programming",
    icon: Code2,
    skills: [
      { name: "Python", level: 90 },
      { name: "FastAPI", level: 80 },
      { name: "React", level: 78 },
      { name: "SQL", level: 82 },
      { name: "Docker", level: 75 },
      { name: "Linux", level: 85 },
      { name: "Git", level: 86 },
    ],
  },
];

export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  gradient: string;
}

export const projects: Project[] = [
  {
    title: "Smart Network Health Analyzer",
    description:
      "AI-based fault prediction system that captures live network traffic, analyzes packet health, and forecasts potential failures before they impact services.",
    tech: ["Python", "FastAPI", "Scapy", "PostgreSQL", "React"],
    github: "https://github.com/chriswinrojes",
    demo: "#",
    gradient: "from-blue-500/20 to-cyan-500/10",
  },
  {
    title: "Centralized Network Management System",
    description:
      "A single pane of glass to monitor and manage distributed network devices using SNMP polling, with alerting and historical reporting.",
    tech: ["Python", "SQL", "SNMP"],
    github: "https://github.com/chriswinrojes",
    demo: "#",
    gradient: "from-indigo-500/20 to-blue-500/10",
  },
  {
    title: "Cloud Infrastructure Monitoring Dashboard",
    description:
      "Real-time dashboard visualizing AWS resource metrics, cost and health using CloudWatch data with interactive charts and live updates.",
    tech: ["AWS", "React", "Chart.js"],
    github: "https://github.com/chriswinrojes",
    demo: "#",
    gradient: "from-sky-500/20 to-blue-600/10",
  },
];

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
}

export const experiences: ExperienceItem[] = [
  {
    role: "Graduate Technical Intern",
    company: "NLC India Limited",
    period: "Present",
    description:
      "Working on network infrastructure, monitoring and automation for a large-scale public sector enterprise — gaining hands-on exposure to enterprise networking and cloud workflows.",
  },
  {
    role: "Intern",
    company: "Pantech eLearning",
    period: "Internship",
    description:
      "Built Python-based projects and explored cloud & automation tooling, strengthening practical software and infrastructure skills.",
  },
  {
    role: "Intern",
    company: "TRIOS Technologies Pvt Ltd",
    period: "Internship",
    description:
      "Contributed to networking and development tasks, learning industry workflows for designing and maintaining reliable systems.",
  },
];

export interface EducationItem {
  institution: string;
  degree: string;
  detail: string;
}

export const education: EducationItem[] = [
  {
    institution: "SRM Institute of Science and Technology",
    degree: "M.Sc Computer Science",
    detail: "Advanced studies in computing, cloud and modern software systems.",
  },
  {
    institution: "Loyola College",
    degree: "B.Sc Computer Science",
    detail: "Foundation in programming, networks and computer science fundamentals.",
  },
];

export interface Certification {
  category: string;
  title: string;
  description: string;
}

export const certifications: Certification[] = [
  {
    category: "AWS",
    title: "Amazon Web Services",
    description:
      "Cloud computing essentials — compute, storage, networking and security on AWS.",
  },
  {
    category: "Python",
    title: "Python Programming",
    description:
      "Core to advanced Python including automation, APIs and data handling.",
  },
  {
    category: "Networking",
    title: "Computer Networking",
    description:
      "Network design, protocols, routing and troubleshooting fundamentals.",
  },
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];
