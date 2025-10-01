"use client";
import {
  Palette,
  Server,
  Cloud,
  ShieldCheck,
  Network,
  Wrench,
  Cloud as GcpIcon,
  Layers,
  ServerCog,
  Database,
  GitBranch,
  Dock,
  Shield,
  Globe,
  Link,
  Zap,
  Github,
  Figma,
  FlaskConical,
  TestTube,
} from "lucide-react";
import Image from 'next/image';

// Map skill names to Lucide icons (or fallback icons)
const skillIcons: Record<string, JSX.Element> = {
  "AWS (EC2, S3, Lambda)": <Cloud className="inline w-4 h-4 mr-1" />,
  "Azure": <Cloud className="inline w-4 h-4 mr-1" />,
  "GCP": <GcpIcon className="inline w-4 h-4 mr-1" />,
  "Terraform": <Layers className="inline w-4 h-4 mr-1" />,
  "Kubernetes (K8s)": <ServerCog className="inline w-4 h-4 mr-1" />,
  "Serverless": <Zap className="inline w-4 h-4 mr-1" />,
  "Node.js": <Server className="inline w-4 h-4 mr-1" />,
  "Express": <Server className="inline w-4 h-4 mr-1" />,
  "Prisma": <Database className="inline w-4 h-4 mr-1" />,
  "PostgreSQL": <Database className="inline w-4 h-4 mr-1" />,
  "MongoDB": <Database className="inline w-4 h-4 mr-1" />,
  "GraphQL": <Link className="inline w-4 h-4 mr-1" />,
  "Vercel Serverless": <Cloud className="inline w-4 h-4 mr-1" />,
  "Next.js": <Cloud className="inline w-4 h-4 mr-1" />,
  "React": <Cloud className="inline w-4 h-4 mr-1" />,
  "TypeScript": <Cloud className="inline w-4 h-4 mr-1" />,
  "Tailwind CSS": <Palette className="inline w-4 h-4 mr-1" />,
  "Framer Motion": <Palette className="inline w-4 h-4 mr-1" />,
  "Redux/Zustand": <Palette className="inline w-4 h-4 mr-1" />,
  "OWASP Top 10": <Shield className="inline w-4 h-4 mr-1" />,
  "Penetration Testing": <ShieldCheck className="inline w-4 h-4 mr-1" />,
  "Identity & Access Management (IAM)": <ShieldCheck className="inline w-4 h-4 mr-1" />,
  "TLS/SSL": <Shield className="inline w-4 h-4 mr-1" />,
  "Security Audits": <ShieldCheck className="inline w-4 h-4 mr-1" />,
  "DNS": <Globe className="inline w-4 h-4 mr-1" />,
  "HTTP/3": <Link className="inline w-4 h-4 mr-1" />,
  "TCP/IP": <Link className="inline w-4 h-4 mr-1" />,
  "Load Balancing": <Network className="inline w-4 h-4 mr-1" />,
  "Content Delivery Networks (CDN)": <Network className="inline w-4 h-4 mr-1" />,
  "Firewalls": <Shield className="inline w-4 h-4 mr-1" />,
  "Vercel": <Cloud className="inline w-4 h-4 mr-1" />,
  "Docker": <Dock className="inline w-4 h-4 mr-1" />,
  "Git/GitHub": <GitBranch className="inline w-4 h-4 mr-1" />,
  "CI/CD (GitHub Actions)": <Github className="inline w-4 h-4 mr-1" />,
  "Jest/Testing Library": <TestTube className="inline w-4 h-4 mr-1" />,
  "Figma": <Figma className="inline w-4 h-4 mr-1" />,
};

const skillCategories = [
  {
    category: "Frontend",
    icon: <Palette className="w-6 h-6 text-blue-500" />,
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Redux/Zustand",
    ],
  },
  {
    category: "Backend & Database",
    icon: <Server className="w-6 h-6 text-green-500" />,
    skills: [
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "MongoDB",
      "GraphQL",
      "Vercel Serverless",
    ],
  },
  {
    category: "Cloud Infrastructure",
    icon: <Cloud className="w-6 h-6 text-purple-500" />,
    skills: [
      "AWS (EC2, S3, Lambda)",
      "Azure",
      "GCP",
      "Terraform",
      "Kubernetes (K8s)",
      "Serverless",
    ],
  },
  {
    category: "Cybersecurity",
    icon: <ShieldCheck className="w-6 h-6 text-red-500" />,
    skills: [
      "OWASP Top 10",
      "Penetration Testing",
      "Identity & Access Management (IAM)",
      "TLS/SSL",
      "Security Audits",
    ],
  },
  {
    category: "Networking",
    icon: <Network className="w-6 h-6 text-yellow-500" />,
    skills: [
      "DNS",
      "HTTP/3",
      "TCP/IP",
      "Load Balancing",
      "Content Delivery Networks (CDN)",
      "Firewalls",
    ],
  },
  {
    category: "DevOps & Tools",
    icon: <Wrench className="w-6 h-6 text-indigo-500" />,
    skills: [
      "Vercel",
      "Docker",
      "Git/GitHub",
      "CI/CD (GitHub Actions)",
      "Jest/Testing Library",
      "Figma",
    ],
  },
];

export default function TechnicalSkills() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((group) => (
            <div
              key={group.category}
              className="bg-gray-100 dark:bg-gray-900/70 p-6 rounded-xl shadow-lg transition duration-300 hover:shadow-2xl hover:border-blue-500 border border-transparent"
            >
              <div className="flex items-center gap-2 mb-6 border-b pb-3">
                {group.icon}
                <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400">
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 shadow-sm flex items-center gap-1"
                  >
                    {skillIcons[skill] || null}
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}