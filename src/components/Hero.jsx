import React from 'react';
import { motion } from 'framer-motion';
import { 
  IoLogoGithub, 
  IoLogoLinkedin, 
  IoArrowForward, 
  IoChevronDown, 
  IoShapesOutline, // Icon untuk Desain/UI
  IoCodeSlash      // Icon untuk Code
} from "react-icons/io5";
import { ScrollReveal } from './ScrollReveal';

const Hero = () => {
  const handleScrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section 
      id="about" 
      className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20"
    >
      
      <div className="max-w-4xl relative">
        <ScrollReveal delay={0.1}>
          <h2 className="text-2xl md:text-3xl font-medium text-slate-400 mb-4">
            Hi, I'm <span className="text-white font-bold">Haris Purwanto</span> <span className="inline-block animate-wave origin-[70%_70%]">👋</span>
          </h2>
          
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-[1.1]">
            Crafting Delightful <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-400 to-blue-600 animate-gradient-x bg-[length:200%_auto]">
              User Interfaces.
            </span>
          </h1>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <p className="max-w-xl mx-auto text-lg text-slate-400 mb-10 leading-relaxed">
            Mainly <span className="text-white font-medium">developing front-end</span> applications 
            and occasionally <span className="text-white font-medium">designing UI/UX</span>, 
            with a strong focus on creating clean, responsive, and user-friendly interfaces.
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={0.3}>
          <div className="flex flex-row justify-center gap-4 items-center">
            <button 
              onClick={() => handleScrollTo('projects')}
              className="group relative px-8 py-4 bg-white text-black rounded-full font-bold text-sm transition-all hover:bg-sky-50 hover:scale-105 flex items-center gap-2 hover:cursor-pointer"
            >
              <IoShapesOutline className="text-lg" />
              View My Works
            </button>
            <a 
              href="https://github.com/rizzuworks"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 rounded-full border border-white/10 text-white font-bold text-sm hover:bg-white/5 transition flex items-center gap-2"
            >
              <IoCodeSlash className="text-lg" />
              View Code
            </a>
          </div>
        </ScrollReveal>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 cursor-pointer hover:text-white transition-colors"
          onClick={() => handleScrollTo('projects')}
      >
          <motion.div
            animate={{ y: [0, 10, 0] }} 
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              repeatType: "loop"
            }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-[10px] uppercase tracking-widest opacity-50">Scroll</span>
            <IoChevronDown size={24} />
          </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;