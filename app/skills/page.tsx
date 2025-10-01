const skillCategories = [
  {
    category: 'Frontend',
    skills: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Redux/Zustand'],
  },
  {
    category: 'Backend & Database',
    skills: ['Node.js', 'Express', 'Prisma', 'PostgreSQL', 'MongoDB', 'GraphQL', 'Vercel Serverless'],
  },
  {
    category: 'Cloud Infrastructure',
    skills: ['AWS (EC2, S3, Lambda)', 'Azure', 'GCP', 'Terraform', 'Kubernetes (K8s)', 'Serverless'],
  },
  {
    category: 'Cybersecurity',
    skills: ['OWASP Top 10', 'Penetration Testing', 'Identity & Access Management (IAM)', 'TLS/SSL', 'Security Audits'],
  },
  {
    category: 'Networking',
    skills: ['DNS', 'HTTP/3', 'TCP/IP', 'Load Balancing', 'Content Delivery Networks (CDN)', 'Firewalls'],
  },
  {
    category: 'DevOps & Tools',
    skills: ['Vercel', 'Docker', 'Git/GitHub', 'CI/CD (GitHub Actions)', 'Jest/Testing Library', 'Figma'],
  },
];

export default function SkillsPage() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Technical Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((group) => (
            <div key={group.category} className="bg-white p-6 rounded-xl shadow-lg dark:bg-gray-800 transition duration-300 hover:shadow-2xl hover:border-blue-500 border border-transparent">
              <h3 className="text-2xl font-semibold mb-6 border-b pb-3 text-blue-600 dark:text-blue-400 dark:border-gray-700">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 shadow-sm"
                  >
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