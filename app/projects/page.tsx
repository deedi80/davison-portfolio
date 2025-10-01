import { Github, Globe } from 'lucide-react';
import Link from 'next/link';

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

export default function ProjectsPage() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg flex flex-col justify-between dark:bg-gray-800 transition duration-300 hover:scale-[1.02]">
              <div>
                <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-3">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs px-2 py-0.5 bg-gray-100 rounded-full text-gray-600 dark:bg-gray-700 dark:text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex space-x-4 mt-4">
                <Link href={project.repoLink} target="_blank" className="flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                  <Github className="w-5 h-5 mr-2" /> Repository
                </Link>
                <Link href={project.liveLink} target="_blank" className="flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                  <Globe className="w-5 h-5 mr-2" /> Live Demo
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}