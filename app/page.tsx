import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import AboutSection from '@/components/AboutSection';
import HeroSection from '@/components/HeroSection';
import TechnicalSkills from '@/components/TechnicalSkills';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Project from '@/components/Project';

export default function HomePage() {
  return (
    <main>
    <HeroSection />
    <AboutSection />
    <TechnicalSkills />
    <Project />
    <Experience />
    <Education/>
    <Contact />
     </main>
  );
}
