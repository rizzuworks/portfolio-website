import React from 'react';
import { IoArrowForward, IoLockClosed } from "react-icons/io5";
import { ScrollReveal, SectionTitle } from './ScrollReveal';
import { projects } from '../data/index';

const BentoCard = ({ children, className, delay = 0 }) => (
  <ScrollReveal delay={delay} className={`bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-3xl p-6 hover:border-white/20 transition-colors duration-300 ${className}`}>
    {children}
  </ScrollReveal>
);

const Projects = () => {
  return (
    <section id="projects" className="py-24 container mx-auto px-6 max-w-6xl relative z-10">
      <SectionTitle number="01." title="Selected Works" subTitle="Projects" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
        {projects.map((project, i) => (
          <BentoCard 
            key={i} 
            delay={i * 0.1}
            className={`relative overflow-hidden flex flex-col justify-end ${project.span} 
              ${project.isConfidential 
                ? 'cursor-not-allowed opacity-60 grayscale-[0.3] border-white/5 bg-black/20' 
                : 'group hover:border-white/20'
              }`}
          >
            {!project.isConfidential && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="absolute inset-0 z-20"
                aria-label={`View project ${project.title}`}
              ></a>
            )}
            
            <div className={`absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-br ${project.color} opacity-20 blur-[80px] group-hover:opacity-30 transition-opacity`}></div>

            <div className="relative z-10 w-full pointer-events-none">
              <div className="mb-4 flex flex-wrap gap-2 items-center">
                  {project.isConfidential && (
                    <div className="flex items-center gap-1 bg-red-500/20 border border-red-500/30 text-red-400 px-2 py-1 rounded-lg w-fit">
                      <IoLockClosed size={12} />
                      <span className="text-[10px] font-bold tracking-wider">RESTRICTED</span>
                    </div>
                  )}
                  <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300 font-mono">
                    {project.tech.join(" • ")}
                  </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 group-hover:translate-x-2 transition-transform">{project.title}</h3>
              <div className="text-slate-400 text-sm line-clamp-2">
                <div>{project.isConfidential ? project.note : ""}</div>
                <div>{project.desc}</div>
              </div>
            </div>

            <div className={`absolute top-6 right-6 p-2 rounded-full border bg-black/20 backdrop-blur-sm transition-colors z-10
                ${project.isConfidential 
                  ? 'border-red-500/30 text-red-500'
                  : 'border-white/10 text-white group-hover:bg-white group-hover:text-black'
                }`}
            >
              {project.isConfidential ? (
                <IoLockClosed />
              ) : (
                <IoArrowForward className="-rotate-45" />
              )}
            </div>

          </BentoCard>
        ))}
      </div>
    </section>
  );
};

export default Projects;