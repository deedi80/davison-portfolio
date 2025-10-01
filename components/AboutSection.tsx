import Image from 'next/image';
import { User, Briefcase, Award, Mail, Github, LinkedinIcon } from 'lucide-react';

const AboutSection = () => {
  return (
     <section className="py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">About Me</h2>
        
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-xl ring-4 ring-blue-500/50">
              <Image 
                src="/profile-image.jpeg" 
                alt="Davison Isesele's Profile" 
                layout="fill" 
                objectFit="cover" 
              />
            </div>
          </div>

          <div className="w-full md:w-2/3 space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              An IT professional with 4+ years of professional experience.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              My journey started with a curiosity for how computers communicate with each other, which led me to pursue a degree in Computer Science.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              I specialize in Cloud Infrastructure, Cybersecurity, and Networking, with a passion for leveraging technology to solve complex problems and drive business success.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
             I thrive in dynamic environments where I can design secure, scalable solutions, troubleshoot complex systems, and implement cloud-first strategies. I enjoy translating technical challenges into actionable solutions and am constantly exploring emerging technologies to stay ahead in the ever-evolving tech landscape
             </p>
            <div className="flex items-center space-x-4">
                {[
                  {
                    icon: Mail,
                    href: "mailto:codojnr@yahoo.com",
                    color: "emerald",
                  },
                  {
                    icon: Github,
                    href: "https://github.com/deedi80",
                    color: "teal",
                  },
                  {
                    icon: LinkedinIcon,
                    href: "https://www.linkedin.com/in/davison-isesele-cns-mits-8451b819b/",
                    color: "cyan",
                  },
                ].map(({ icon: Icon, href, color }, index) => (
                  <a
                    key={index}
                    href={href}
                    title={
                      href.startsWith("mailto")
                        ? "Send Email"
                        : href.includes("github")
                        ? "Visit GitHub"
                        : href.includes("linkedin")
                        ? "Visit LinkedIn"
                        : "External Link"
                    }
                    className={`group relative p-4 bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl hover:border-${color}-400 hover:bg-${color}-400/10 transition-all duration-300 transform hover:scale-110`}
                  >
                    <Icon
                      size={24}
                      className={`text-gray-400 group-hover:text-${color}-400 transition-colors`}
                    />
                    <div
                      className={`absolute inset-0 bg-${color}-400/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    ></div>
                  </a>
                ))}
              </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                <div className="flex items-center space-x-3 text-blue-600 dark:text-blue-400">
                    <Briefcase className="w-6 h-6" />
                    <span className="font-semibold">4+ Years Experience</span>
                </div>
                <div className="flex items-center space-x-3 text-blue-600 dark:text-blue-400">
                    <User className="w-6 h-6" />
                    <span className="font-semibold">Cloud & Cybersecurity Focus</span>
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
};

export default AboutSection;      