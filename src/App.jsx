import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import TechStack from './components/TechStack';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="bg-[#050505] font-sans text-slate-300 selection:bg-sky-500/30 selection:text-sky-200 overflow-x-hidden">
      
      <style>{`
        html { scroll-behavior: smooth; }
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>

      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-600 opacity-20 blur-[100px]"></div>
      </div>

      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <TechStack />
      <Footer />
    </div>
  );
};

export default App;