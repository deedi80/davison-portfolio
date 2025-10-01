// app/education/page.tsx
const educationData = [
  {
    degree: 'Master of Science in Cloud $ Network Security',
    institution: 'University of Bolton, UK',
    years: '2022 - 2024',
    details: 'Specialized in cloud computing, network security, and cybersecurity principles. Completed coursework in Advanced Cloud and Penetration Testing, Global Infrastructure (AWS) & Data Centre, DevOps. Thesis: The Energy Efficiency Of Data Centre: Optimising Resource Utilisation For Sustainability ',
  },
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'Ambrose Alli University, Ekpoma, Nigeria',
    years: '2015 - 2019',
    details: 'Focused on  general computing, algorithms, and data structures. Graduated with Second Class honors. Relevant coursework included Database Management Systems, AI, Real Time Computing, Web Development, and Data Communication and Networking. Project: AAU Student Helpdesk System',
  },
];

export default function EducationPage() {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Education & Certifications</h2>
        
        <div className="relative border-l border-green-200 dark:border-green-800 ml-4">
          {educationData.map((edu, index) => (
            <div key={index} className="mb-8 ml-6">
              <div className="absolute w-3 h-3 bg-green-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-green-400"></div>
              <time className="text-sm font-semibold leading-none text-green-600 dark:text-green-400">{edu.years}</time>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-1">{edu.degree}</h3>
              <p className="text-md font-medium text-gray-600 dark:text-gray-400 mb-2">{edu.institution}</p>
              <p className="text-base text-gray-700 dark:text-gray-300">{edu.details}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Certifications</h3>
            <div className="flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-lg shadow-md dark:bg-yellow-900/30 dark:text-yellow-300">AWS Certified Solutions Architect</span>
                <span className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-lg shadow-md dark:bg-yellow-900/30 dark:text-yellow-300">Microsoft Certified: Azure Fundamentals</span>
                <span className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-lg shadow-md dark:bg-yellow-900/30 dark:text-yellow-300">Microsoft Certified: Cybersecurity Analyst</span>
                <span className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-lg shadow-md dark:bg-yellow-900/30 dark:text-yellow-300">Google IT Support Professional Certificate</span>
                <span className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-lg shadow-md dark:bg-yellow-900/30 dark:text-yellow-300">CompTIA A+ & S+</span>
            </div>
        </div>
      </div>
    </section>
  );
}