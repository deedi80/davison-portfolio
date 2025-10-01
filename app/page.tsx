import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import AboutSection from '@/components/AboutSection';
import HeroSection from '@/components/HeroSection';
import TechnicalSkills from '@/components/TechnicalSkills';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact'

export default function HomePage() {
  return (
    <main>
    <HeroSection />
    <AboutSection />
    <TechnicalSkills />
    <Experience />
    <Education/>
    <Contact />
     </main>
  );
}
