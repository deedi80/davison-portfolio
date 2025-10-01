import { User, Briefcase, Award } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">About Me</h2>
        
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-xl ring-4 ring-blue-500/50">
              <Image 
                src="../public/profile-image.jpeg" 
                alt="Davison Isesele's Profile" 
                layout="fill" 
                objectFit="cover" 
              />
            </div>
          </div>

          <div className="w-full md:w-2/3 space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Hello! I'm Davison, an IT professional with **3+ years of professional experience** My expertise lies at the intersection of Cloud Infrastructure, Cybersecurity, and Networking.  My journey started with a curiosity for how computers communicate with each other, which led me to pursue a degree in Computer Science and certifications in AWS, Azure and CompTIA Security+.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
             I thrive in dynamic environments where I can design secure, scalable solutions, troubleshoot complex systems, and implement cloud-first strategies. I enjoy translating technical challenges into actionable solutions and am constantly exploring emerging technologies to stay ahead in the ever-evolving tech landscape
             </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                <div className="flex items-center space-x-3 text-blue-600 dark:text-blue-400">
                    <Briefcase className="w-6 h-6" />
                    <span className="font-semibold">3+ Years Experience</span>
                </div>
                <div className="flex items-center space-x-3 text-blue-600 dark:text-blue-400">
                    <User className="w-6 h-6" />
                    <span className="font-semibold">Cloud and Cybersecurity Focus</span>
                </div>
                <div className="flex items-center space-x-3 text-blue-600 dark:text-blue-400">
                    <Award className="w-6 h-6" />
                    <span className="font-semibold">Certified Architect</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}