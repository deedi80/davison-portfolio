const experienceData = [
  {
    title: 'Technical Consultant',
    company: 'takepayments Ltd (<em>A Global Payments Company)</em> - United Kingdom',
    years: 'Jan 2025 - Aug 2025',
    description: 'Provided technical support and solutions for payment systems, ensuring secure and efficient transaction processing. Built TermSense: An Intelligent Monitoring for Payment Terminals, Collaborated with cross-functional teams to optimize system performance and enhance user experience.',
  },
  {
    title: 'IT Champion (Service Desk Analyst) - United Kingdom',
    company: 'Teleperformance UK',
    years: 'Mar 2024 - Jan 2025',
    description: 'Delivered exceptional IT support to end-users, resolving technical issues related to hardware, software, and network connectivity. Assisted in the implementation of IT policies and procedures to improve service delivery and user satisfaction.',
  },
  {
    title: 'IT Systems Specialist - Nigeria',
    company: 'Nicota Global Services Ltd',
    years: 'Dec 2019 - Feb 2024',
    description: 'Managed and maintained IT infrastructure, including servers, networks, and security systems. Implemented cloud solutions and ensured data integrity through regular backups and disaster recovery planning. Provided training and support to staff on IT best practices and new technologies.',
  },
  {
    title: 'Student Intern (CCNA) - Nigeria',
    company: 'NIIT Limited (ForeSoft Systems)',
    years: 'Feb 2018 - Oct 2018',
    description: 'Gained hands-on experience in network configuration, troubleshooting, and security protocols. Assisted in the setup and maintenance of local area networks (LANs) and wide area networks (WANs) for clients. Supported senior network engineers in various projects, enhancing my understanding of networking concepts and practices.',
  },
];

export default function ExperiencePage() {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Professional Experience</h2>
        
        <div className="relative border-l border-blue-200 dark:border-blue-800 ml-4">
          {experienceData.map((job, index) => (
            <div key={index} className="mb-8 ml-6">
              <div className="absolute w-3 h-3 bg-blue-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-blue-400"></div>
              <time className="text-sm font-semibold leading-none text-blue-600 dark:text-blue-400">{job.years}</time>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-1">{job.title}</h3>
              <p className="text-md font-medium text-gray-600 dark:text-gray-400 mb-2">{job.company}</p>
              <p className="text-base text-gray-700 dark:text-gray-300">{job.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}