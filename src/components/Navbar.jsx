import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MENU = ["About", "Projects", "Experience", "Stack"];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 40);
      if (window.scrollY > 40) setOpen(false);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (e, id) => {
    e.preventDefault();
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center">
        <motion.div
          initial={false}
          animate={{
            width: isScrolled ? 1200 : 640,
            marginTop: isScrolled ? 16 : 24,
          }}
          transition={{ type: "spring", stiffness: 120, damping: 22 }}
          className="w-full max-w-[1100px] px-4 xl:px-0"
        >
          <nav className="backdrop-blur-xl bg-black/80 border border-white/10 shadow-xl px-6 py-4 rounded-2xl">
            <div className="flex items-center justify-between">
              <a href="/" className="text-white font-bold text-lg whitespace-nowrap">
                Haris.
              </a>

              <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
                {MENU.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => scrollTo(e, item.toLowerCase())}
                    className="hover:text-white transition relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-sky-500 group-hover:w-full transition-all"></span>
                  </a>
                ))}
              </div>

              <div className="flex items-center gap-3">
                {/* CTA DESKTOP */}
                <a
                  href="#contact"
                  onClick={(e) => scrollTo(e, "contact")}
                  className="hidden md:inline-flex bg-white text-black px-6 py-2 rounded-xl text-sm font-bold whitespace-nowrap hover:bg-slate-200 transition"
                >
                  Let’s Talk
                </a>

                <button
                  onClick={() => setOpen(!open)}
                  className="md:hidden w-11 h-11 flex items-center justify-center border border-white/10 rounded-xl"
                  aria-label="Toggle menu"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <motion.path
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      initial={false}
                      animate={{
                        d: open ? "M6 6 L18 18" : "M4 7 L20 7",
                      }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                    />
                    <motion.path
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      initial={false}
                      animate={{
                        opacity: open ? 0 : 1,
                        d: "M4 12 L20 12",
                      }}
                      transition={{ duration: 0.15 }}
                    />
                    <motion.path
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      initial={false}
                      animate={{
                        d: open ? "M6 18 L18 6" : "M4 17 L20 17",
                      }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                    />
                  </svg>
                </button>
              </div>
            </div>
          </nav>
        </motion.div>
      </div>

      {/* MOBILE OVERLAY */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-xl"
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="h-full flex flex-col items-center justify-center gap-8 text-xl font-semibold text-white"
            >
              {MENU.map((item, i) => (
                <motion.a
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => scrollTo(e, item.toLowerCase())}
                  className="hover:text-sky-400 transition"
                >
                  {item}
                </motion.a>
              ))}

              <a
                href="#contact"
                onClick={(e) => scrollTo(e, "contact")}
                className="mt-6 bg-white text-black px-10 py-4 rounded-xl font-bold text-base hover:bg-slate-200 transition"
              >
                Let’s Talk
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
