// app/publications/page.tsx
import { BookOpen } from 'lucide-react';
import Link from 'next/link';

const publications = [
  {
    title: 'Energy Efficiency of Data Centre: Optimising Resource Utilisation for Sustainability',
    journal: 'Research Gate',
    year: 2023,
    link: 'https://www.researchgate.net/publication/381650145_The_Energy_Efficiency_of_Data_Centre_Optimizing_Resource_Utilization_for_Sustainability',
    details: 'A comprehensive study on strategies to enhance energy efficiency in data centers through optimized resource utilization and sustainable practices.',
  },
  {
    title: 'Analysing The Effectiveness of Data Centre Virtualization in Reducing Energy Usage in a Green Data Centre',
    journal: 'Research Gate',
    year: 2023,
    link: 'https://www.researchgate.net/publication/381650056_Analysing_The_Effectiveness_of_Data_Centre_Virtualization_in_Reducing_Energy_Usage_in_a_Green_Data_Centre',
    details: 'Study on how virtualization technologies can optimize energy consumption in data centers, contributing to greener IT practices.',
  },
];

export default function PublicationsPage() {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Publications</h2>
        
        <ul className="space-y-8">
          {publications.map((pub, index) => (
            <li key={index} className="bg-white p-6 rounded-xl shadow-lg dark:bg-gray-800 hover:shadow-xl transition duration-300">
              <div className="flex items-start space-x-4">
                <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white hover:text-blue-600">
                    <Link href={pub.link} target="_blank" className="hover:underline">{pub.title}</Link>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">{pub.journal} • {pub.year}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}