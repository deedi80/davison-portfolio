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
  Link as LinkIcon, // Renamed to avoid conflict with 'next/link' import
  Zap,
  Github,
  Figma,
  TestTube,
} from "lucide-react";
import { Github as GithubIcon, Globe as GlobeIcon } from 'lucide-react'; // Renamed imports for clarity
import Link from 'next/link';
import Image from 'next/image'; // Added as it was in TechnicalSkills.tsx

// Map skill names to Lucide icons (or a fallback icon)
// NOTE: This map is copied from TechnicalSkills.tsx to provide icons for the project tech stack
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
  "GraphQL": <LinkIcon className="inline w-4 h-4 mr-1" />,
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
  "HTTP/3": <LinkIcon className="inline w-4 h-4 mr-1" />,
  "TCP/IP": <LinkIcon className="inline w-4 h-4 mr-1" />,
  "Load Balancing": <Network className="inline w-4 h-4 mr-1" />,
  "Content Delivery Networks (CDN)": <Network className="inline w-4 h-4 mr-1" />,
  "Firewalls": <Shield className="inline w-4 h-4 mr-1" />,
  "Vercel": <Cloud className="inline w-4 h-4 mr-1" />,
  "Docker": <Dock className="inline w-4 h-4 mr-1" />,
  "Git/GitHub": <GitBranch className="inline w-4 h-4 mr-1" />,
  "CI/CD (GitHub Actions)": <Github className="inline w-4 h-4 mr-1" />,
  "Jest/Testing Library": <TestTube className="inline w-4 h-4 mr-1" />,
  "Figma": <Figma className="inline w-4 h-4 mr-1" />,

  // Add icons for skills in projectData that aren't in TechnicalSkills.tsx
  // This is a crucial step for the new project technologies
  "App Router": <Wrench className="inline w-4 h-4 mr-1" />,
  "Python": <ServerCog className="inline w-4 h-4 mr-1" />, // Using ServerCog as a generic backend/language icon
  "MS Nav": <Database className="inline w-4 h-4 mr-1" />,
  "ML": <Layers className="inline w-4 h-4 mr-1" />,
  "GeminiAI API": <Zap className="inline w-4 h-4 mr-1" />,
  "Mininet": <Network className="inline w-4 h-4 mr-1" />,
  "OpenFlow": <LinkIcon className="inline w-4 h-4 mr-1" />,
  "SDN": <Network className="inline w-4 h-4 mr-1" />,
  "Network Security": <Shield className="inline w-4 h-4 mr-1" />,
  "JS": <Palette className="inline w-4 h-4 mr-1" />, // Generic JS/Frontend icon
  "PHP": <Server className="inline w-4 h-4 mr-1" />,
  "MySQL": <Database className="inline w-4 h-4 mr-1" />,
  "Bootstrap": <Palette className="inline w-4 h-4 mr-1" />,
  "AWS EC2": <Cloud className="inline w-4 h-4 mr-1" />,
  "Ansible": <Wrench className="inline w-4 h-4 mr-1" />,
  "AWS S3": <Cloud className="inline w-4 h-4 mr-1" />,
  "Wireshark": <Network className="inline w-4 h-4 mr-1" />,
  "Nmap": <ShieldCheck className="inline w-4 h-4 mr-1" />,
  "Firewall Configurations": <Shield className="inline w-4 h-4 mr-1" />,
  "IDS/IPS": <ShieldCheck className="inline w-4 h-4 mr-1" />,
  "CSS": <Palette className="inline w-4 h-4 mr-1" />,
};

const projectData = [
  {
    title: 'Portfolio Website',
    description: 'The website you are currently viewing. Focus on performance, SEO, and accessibility with the latest App Router features.',
    tech: ['Next.js', 'App Router', 'TypeScript', 'Vercel', 'Framer Motion'],
    liveLink: '#',
    repoLink: 'https://github.com/deedi80/davison-portfolio',
  },
  {
    title: 'TermSense',
    description: 'An intelligent monitoring system for payment terminals that predicts and prevents transaction failures using machine learning.',
    tech: ['Python', 'React', 'Azure', 'MS Nav', 'Docker', 'ML', 'GeminiAI API'],
    liveLink: 'https://term-sense.vercel.app/',
    repoLink: 'https://github.com/deedi80/TermSense',
  },
    {
    title: 'Network Denial of Service (DoS) Attack Detection and Mitigation using SDN Controllers',
    description: 'In progress - A research project focused on detecting and mitigating DoS attacks in network environments using Software-Defined Networking (SDN) controllers.',
    tech: ['Python', 'Mininet', 'OpenFlow', 'SDN', 'Network Security'],
    liveLink: '#',
    repoLink: '#',
  },
    {
    title: 'Employee Leave Management System',
    description: 'A web application to manage employee leave requests, approvals, and tracking, enhancing HR efficiency and employee satisfaction.',
    tech: ['JS','PHP', 'MySQL', 'Bootstrap', 'AWS EC2','Docker', 'Ansible', 'AWS S3'],
    liveLink: '#',
    repoLink: '#',
  },
    {
    title: 'Network Security Analysis',
    description: 'A project focused on analyzing and improving network security protocols to protect against cyber threats and vulnerabilities.',
    tech: ['Wireshark', 'Nmap', 'Python', 'Firewall Configurations', 'IDS/IPS'],
    liveLink: '#',
    repoLink: '#',
  },
  {
    title: 'AAU Student Helpdesk System',
    description: 'A comprehensive helpdesk system for Ambrose Alli University to streamline student support services, featuring ticket management and real-time chat.',
    tech: ['CSS', 'JS', 'PHP', 'MySQL', 'Bootstrap'],
    liveLink: 'https://aau-students-helpdesk.vercel.app/',
    repoLink: '',
  },
  
];

// Helper to safely get the icon or a fallback (e.g., Wrench if not found)
const getSkillIcon = (skill: string) => {
    // Attempt to match exact skill name first, then try a more generic match
    const icon = skillIcons[skill] || skillIcons[skill.split('/')[0]] || <Wrench className="inline w-4 h-4 mr-1" />;
    // Clone the element and add a small right margin for better spacing within the tag
    return icon;
};

export default function Project() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col justify-between transition duration-300 hover:scale-[1.02] hover:shadow-2xl hover:border-blue-500 border border-transparent">
              <div>
                <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-3">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    // Updated span to include the icon, similar to TechnicalSkills.tsx
                    <span 
                      key={tech} 
                      className="px-4 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 shadow-sm flex items-center gap-1"
                    >
                      {getSkillIcon(tech)}
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex space-x-4 mt-4">
                <Link href={project.repoLink} target="_blank" className="flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                  <GithubIcon className="w-5 h-5 mr-2" /> Repository
                </Link>
                {/* Only render Live Demo link if one is available and not a placeholder */}
                {project.liveLink && project.liveLink !== '#' && (
                    <Link href={project.liveLink} target="_blank" className="flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                      <GlobeIcon className="w-5 h-5 mr-2" /> Live Demo
                    </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}