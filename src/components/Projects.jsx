import React from 'react';
import { IoArrowForward, IoLockClosed, IoLogoGithub } from "react-icons/io5";
import { ScrollReveal, SectionTitle } from './ScrollReveal';
import { projects } from '../data/index';

const BentoCard = ({ children, className, delay = 0 }) => (
  <ScrollReveal delay={delay} className={`bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-3xl p-8 transition-all duration-500 ease-in-out ${className}`}>
    {children}
  </ScrollReveal>
);

const Projects = () => {
  return (
    <section id="projects" className="py-24 container mx-auto max-w-6xl relative z-10">
      <SectionTitle number="01." title="Selected Works" subTitle="Projects" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-[320px]">
        {projects.map((project, i) => (
          <BentoCard 
            key={i} 
            delay={i * 0.1}
            className={`relative overflow-hidden flex flex-col justify-end group ${project.span} 
              h-auto md:h-full
              ${project.isConfidential 
                ? 'cursor-not-allowed opacity-60 grayscale-[0.3] border-white/5 bg-black/20' 
                : 'hover:border-white/40 hover:bg-slate-900/80'
              }`}
          >
            <div className={`absolute -bottom-20 -left-20 w-[350px] h-[350px] bg-gradient-to-br ${project.color} opacity-10 blur-[100px] group-hover:opacity-30 transition-all duration-700`}></div>

            <div className="relative z-10 w-full flex flex-col gap-4 mt-12 md:mt-0">
              <div className="flex flex-col gap-3">
                {project.isConfidential && (
                  <div className="flex items-center gap-1 bg-red-500/20 border border-red-500/30 text-red-400 px-2 py-1 rounded-lg w-fit">
                    <IoLockClosed size={10} />
                    <span className="text-[9px] font-bold tracking-wider uppercase">Private</span>
                  </div>
                )}
                
                <div className="flex flex-wrap gap-1.5 items-center">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[10px] text-slate-300 font-mono lowercase group-hover:text-white transition-colors">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-1 tracking-tight">
                  {project.title}
                </h3>
                <div className="text-slate-400 text-sm md:line-clamp-2 leading-relaxed group-hover:text-slate-300 transition-colors font-light">
                  {project.isConfidential && project.note && (
                    <div>{project.note}</div>
                  )}
                  <div>{project.desc}</div>
                </div>
              </div>

              <div className="flex justify-start gap-3 mt-2">
                {!project.isConfidential && (
                  <>
                    {project.githubLink && (
                      <a 
                        href={project.githubLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 text-white bg-black/40 backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-black"
                      >
                        <IoLogoGithub size={18} />
                        <span className="text-[11px] font-bold uppercase tracking-wider">Source</span>
                      </a>
                    )}
                    {project.demoLink && (
                      <a 
                        href={project.demoLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 text-white bg-black/40 backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-black"
                      >
                        <span className="text-[11px] font-bold uppercase tracking-wider pl-1">Live Preview</span>
                        <IoArrowForward size={18} className="-rotate-45" />
                      </a>
                    )}
                  </>
                )}
                
                {project.isConfidential && (
                  <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-red-500/20 text-red-500 bg-black/20 text-[11px] font-bold uppercase tracking-wider">
                    <IoLockClosed size={16} /> Restricted Access
                  </div>
                )}
              </div>
            </div>

          </BentoCard>
        ))}
      </div>
    </section>
  );
};

export default Projects;