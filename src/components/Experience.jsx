import React from 'react';
import { IoBusinessOutline } from "react-icons/io5";
import { ScrollReveal, SectionTitle } from './ScrollReveal';
import { experiences } from '../data/index';

const Experience = () => {
  return (
    <section 
      id="experience" 
      className="py-24 container mx-auto px-6 max-w-4xl relative z-10"
    >
      <SectionTitle 
        number="02." 
        title="My Journey" 
        subTitle="Experience" 
      />
      <div className="relative pl-6 md:pl-10 border-l border-white/10 ml-4 md:ml-6 space-y-16">
        {experiences.map((exp, index) => (
          <ScrollReveal 
            key={index} 
            delay={index * 0.1} 
            className="relative"
          >
            <div className="absolute -left-[33px] md:-left-[49px] top-2 flex items-center justify-center w-4 h-4 rounded-full bg-sky-500 ring-4 ring-[#050505] shadow-[0_0_20px_rgba(14,165,233,0.5)]"></div>
            <div className="group">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className="text-sky-400 font-mono text-xs font-bold tracking-widest uppercase bg-sky-500/10 px-2 py-1 rounded w-fit border border-sky-500/20">
                  {exp.period}
                </span>
                <span className="text-slate-500 text-xs font-semibold uppercase tracking-wider border border-white/10 px-2 py-1 rounded">
                    {exp.type}
                </span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-1 group-hover:text-sky-400 transition-colors">
                {exp.role}
              </h3>
              <div className="flex items-center gap-2 text-slate-400 font-medium mb-6">
                <IoBusinessOutline className="text-sky-500" />
                <span>{exp.company}</span>
              </div>
              <p className="text-slate-400 leading-relaxed max-w-2xl text-sm border-l-2 border-white/5 pl-4 group-hover:border-sky-500/30 transition-colors">
                {exp.desc}
              </p>
            </div>
          </ScrollReveal>
         ))}
      </div>
    </section>
  );
};

export default Experience;