import React from 'react';
import { ScrollReveal, SectionTitle } from './ScrollReveal';
import { techIcons } from '../data/index';

const TechStack = () => {
  return (
    <section 
      id="stack" 
      className="py-24 relative z-10 bg-white/[0.01]"
    >
      <div className="container mx-auto max-w-6xl">

        <SectionTitle 
          number="03." 
          title="Used technology" 
          subTitle="Tech Stack" 
        />

        <ScrollReveal>
          <div className="bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-3xl p-8 md:p-12 overflow-hidden relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[200px] bg-sky-500/10 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="flex overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
              <div className="flex gap-12 md:gap-20 py-4 w-max animate-[infinite-scroll_20s_linear_infinite] hover:[animation-play-state:paused]">
                {[...techIcons, ...techIcons].map((tech, index) => (
                  <div 
                    key={index} 
                    className="flex flex-col items-center justify-center gap-4 text-slate-500 hover:text-sky-400 transition-colors duration-300 group/icon cursor-pointer"
                  >
                    <div className="text-4xl md:text-5xl filter grayscale group-hover/icon:grayscale-0 transition duration-300 transform group-hover/icon:scale-110">
                      {tech.icon}
                    </div>
                    <span className="text-xs font-mono opacity-0 group-hover/icon:opacity-100 transition-opacity absolute -bottom-2">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TechStack;