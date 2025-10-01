// app/resume/page.tsx
import { Download, FileText } from 'lucide-react';
import Link from 'next/link';

export default function ResumePage() {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">My Resume</h2>
        
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          A detailed breakdown of my professional journey, skills, and education.
        </p>

        <Link
          href="#"
          download
          className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full shadow-xl text-white bg-green-600 hover:bg-green-700 transition duration-300 transform hover:scale-105"
        >
          <Download className="mr-3 h-6 w-6" />
          Download Full Resume (PDF)
        </Link>

        <div className="mt-12 bg-white p-8 rounded-xl shadow-2xl border border-gray-100 dark:bg-gray-800 dark:border-gray-700">
            <FileText className="w-10 h-10 text-blue-600 mx-auto mb-4 dark:text-blue-400" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Web View</h3>
            <p className="text-gray-600 dark:text-gray-400">
                You can view the simplified, web-optimized version of my resume below.
            </p>
            {/* NOTE: For a full web view, you would embed the components from 
                your Experience, Education, and Skills pages here, or use a 
                library like 'react-pdf' for a seamless inline preview.
            */}
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 italic">
                (Content from the Experience, Education, and Skills pages would be rendered here for SEO benefit.)
            </p>
        </div>
      </div>
    </section>
  );
}