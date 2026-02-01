import React from 'react';
import { IoLogoLinkedin, IoMail, IoArrowForward } from "react-icons/io5";
import { ScrollReveal } from './ScrollReveal';

const Footer = () => {
  return (
    <footer id="contact" className="relative h-[40vh] md:h-[80vh] flex flex-col items-center justify-center bg-[#050505] overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 flex flex-col items-center justify-center select-none pointer-events-none z-0">
         <h2 className="text-[22vw] md:text-[18vw] font-black text-[#111] leading-[0.8] tracking-tighter">LET'S</h2>
         <h2 className="text-[22vw] md:text-[18vw] font-black text-[#111] leading-[0.8] tracking-tighter">CONNECT</h2>
      </div>
      <div className="relative z-10 flex flex-col items-center gap-8">
         <ScrollReveal>
           <p className="text-sky-400 font-medium tracking-widest uppercase mb-4 text-center text-sm">Have an idea? Wanna discuss?</p>
         </ScrollReveal>
         <ScrollReveal delay={0.2} className="flex items-center gap-4 md:gap-6">
            <a href="mailto:purwantoharis499@gmail.com" className="group relative px-10 py-5 bg-white text-black text-lg md:text-xl font-bold rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-sky-500/50 flex items-center gap-3">
               <IoMail className="text-2xl" />
               <span>Email Me</span>
               <IoArrowForward className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/haris-purwanto/" className="w-16 h-16 flex items-center justify-center bg-white/5 border border-white/10 rounded-full text-white hover:bg-blue-600 hover:border-transparent transition-all duration-300 shadow-lg" title="LinkedIn">
               <IoLogoLinkedin className="text-2xl" />
            </a>
         </ScrollReveal>
      </div>
      <div className="absolute bottom-8 text-slate-700 text-xs text-center font-mono uppercase tracking-widest z-10">
         <div>&copy; 2026 All rights reserved.</div>
         <div>Made with ❤️. Designed and developed by Haris Purwanto.</div>
      </div>
    </footer>
  );
};

export default Footer;