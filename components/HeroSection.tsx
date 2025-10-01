"use client";
import React, { use } from "react";
import Image from "next/image";
import { Code, Cloud, ShieldCheck, ArrowDown, Terminal, Mail, Github, LinkedinIcon, Code2 } from "lucide-react";
import {useEffect, useState, } from "react";

const HeroSection = () => {
    const [currentTech, setCurrentTech] = useState(0);
    const technologies = ["Python", "Cybersecurity", "Networking", "DevOps", "Scripting", "Automation", "React", "Next.js", "TypeScript", "AWS", "Azure"];
    useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % technologies.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [technologies.length]);
    return (
        <section className="py-16">
            <div className="max-w-5xl mx-auto px-4 text-center">
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                    Hi, I'm <span className="text-blue-600 dark:text-blue-400">Davison</span>
                </h1>
            </div>

            <div className="max-w-3xl mx-auto px-4 text-center mt-6">
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    My expertise lies at the intersection of <span className="text-blue-600 dark:text-blue-400">{technologies[currentTech]}</span>, where I design, implement, and maintain the systems that power modern applications.
                </p>
            </div>

        </section>
    );
};

export default HeroSection;