import React from 'react';
import { IoLogoLinkedin, IoMail, IoArrowForward } from "react-icons/io5";
import { ScrollReveal } from './ScrollReveal';

const Footer = () => {
  return (
    <footer 
      id="contact" 
      className="relative min-h-[60vh] lg:min-h-screen flex flex-col items-center justify-center bg-[#050505] overflow-hidden border-t border-white/5"
    >
      
      <div className="absolute inset-0 flex flex-col items-center justify-end lg:justify-center select-none pointer-events-none z-0 pb-24 lg:pb-0">
         <h2 className="text-[26vw] md:text-[18vw] font-black leading-[0.8] tracking-tighter bg-gradient-to-b from-white/25 to-transparent bg-clip-text text-transparent">
           LET'S
         </h2>
         <h2 className="text-[26vw] md:text-[18vw] font-black leading-[0.8] tracking-tighter bg-gradient-to-b from-white/25 to-transparent bg-clip-text text-transparent">
           CONNECT
         </h2>
      </div>

      <div className="relative z-10 px-4 md:px-6 w-full max-w-4xl mb-16 md:mb-0">
         <ScrollReveal>
           <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-16 text-center shadow-2xl shadow-black/50">
              
              <p className="text-sky-400 font-medium tracking-[0.2em] uppercase mb-6 md:mb-8 text-xs md:text-base">
                Have an idea? Wanna discuss?
              </p>

              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
                  <a 
                    href="mailto:purwantoharis499@gmail.com" 
                    className="w-full md:w-auto group relative px-8 py-3 md:py-4 bg-white text-black text-lg font-bold rounded-xl hover:bg-sky-400 transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    <IoMail className="text-xl" />
                    <span>Email Me</span>
                    <IoArrowForward className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </a>
                  
                  <a 
                    href="https://www.linkedin.com/in/haris-purwanto/" 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-full md:w-auto px-8 py-3 md:py-4 bg-transparent border border-white/20 text-white text-lg font-bold rounded-xl hover:bg-white/5 hover:border-white transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    <IoLogoLinkedin className="text-xl" />
                    <span>LinkedIn</span>
                  </a>
              </div>

           </div>
         </ScrollReveal>
      </div>

      <div className="absolute bottom-6 w-full text-center z-10 px-4">
         <div className="text-slate-600 text-[10px] md:text-xs font-mono uppercase tracking-widest flex flex-col gap-2">
            <span>&copy; 2026 All rights reserved.</span>
            <span>Made with ❤️. Designed and developed by Haris Purwanto.</span>
         </div>
      </div>

    </footer>
  );
};

export default Footer;