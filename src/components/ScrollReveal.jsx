import React from 'react';
import { motion } from 'framer-motion';

export const ScrollReveal = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

export const SectionTitle = ({ number, title, subTitle }) => (
  <ScrollReveal className="flex items-end gap-4 mb-16">
    <span className="text-5xl md:text-6xl font-black text-white/5 font-sans absolute -z-10 -translate-y-4 translate-x-4 select-none">
       {number}
    </span>
    <div className="flex flex-col">
       <span className="text-sky-400 font-mono text-sm tracking-widest mb-2">{number} // {subTitle}</span>
       <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight uppercase">
         {title} <span className="text-sky-500">_</span>
       </h2>
    </div>
    <div className="h-[1px] bg-gradient-to-r from-blue-600/50 to-transparent flex-grow mb-2 ml-4"></div>
  </ScrollReveal>
);