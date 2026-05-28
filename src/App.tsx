import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, ArrowDown, ArrowUpRight, Cpu, Code2, Zap } from "lucide-react";

// Import modular layouts
import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackgroundPaths from "./components/BackgroundPaths";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [currentTime, setCurrentTime] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Responsive device check
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Premium Preloader Logic
  useEffect(() => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 8) + 2;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        setTimeout(() => {
          setIsLoading(false);
        }, 400);
      }
      setLoadingProgress(progress);
    }, 60);
    return () => clearInterval(interval);
  }, []);

  // Smooth scroll navigate handler
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Keep track of UTC Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toUTCString().replace("GMT", "UTC"));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Set up high performance Section intersection observer
  useEffect(() => {
    const sections = ["home", "about", "services", "projects", "contact"];
    const observers = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-20% 0px -60% 0px", // Focus middle of viewpoint
        threshold: 0
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observers.observe(el);
    });

    return () => observers.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-black text-white selection:bg-brand-crimson selection:text-white antialiased">
      
      {/* Premium Full-screen System Preloader */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              y: "-100%",
              transition: { duration: 1.0, ease: [0.76, 0, 0.24, 1] } 
            }}
            className="fixed inset-0 z-[100] flex flex-col justify-between p-8 md:p-12 bg-black select-none pointer-events-auto"
          >
            {/* Top row - elegant tiny branding */}
            <div className="flex justify-between items-center z-10 font-mono text-[8px] text-white/30 tracking-[0.3em] uppercase">
              <span>AIVÉRA // DESIGN DIRECTORY</span>
              <span>EST. 2026</span>
            </div>

            {/* Main Center - pristine ultra-premium logo */}
            <div className="flex flex-col items-center justify-center text-center z-10 relative">
              <div className="absolute w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-brand-crimson/5 rounded-full blur-[100px] pointer-events-none -translate-y-6" />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.98, letterSpacing: "0.2em" }}
                animate={{ opacity: 1, scale: 1, letterSpacing: "0.6em" }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-3.5 mb-8 pl-[0.6em]"
              >
                <h1 className="font-display text-4xl md:text-5xl font-light uppercase text-white tracking-widest selection:bg-brand-crimson">
                  aivéra
                </h1>
              </motion.div>

              {/* Minimal Line Progress Bar */}
              <div className="w-32 max-w-full">
                <div className="w-full h-[1px] bg-white/10 relative overflow-hidden">
                  <div 
                    className="absolute left-0 top-0 h-full bg-white transition-all duration-150 ease-out"
                    style={{ width: `${loadingProgress}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Bottom row - fine print & real UTC clock */}
            <div className="flex justify-between items-end z-10 font-mono text-[8px] text-white/30 tracking-[0.3em] uppercase animate-pulse-slow">
              <span>PARIS // LONDON // NEW YORK</span>
              <span>{currentTime || "UTC CLOCK"}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Noise filter and grid matrix overlays */}
      <div className="fixed inset-0 z-40 noise-overlay pointer-events-none" />
      <div className="fixed inset-0 z-0 bg-mesh-radial pointer-events-none opacity-60" />
      
      {/* Structural Glass Grid Matrix - Futuristic look */}
      <div className="fixed inset-0 z-0 grid grid-cols-4 lg:grid-cols-12 gap-6 max-w-7xl mx-auto px-6 md:px-12 pointer-events-none opacity-10">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="h-full border-r border-white/5 last:border-r-0" />
        ))}
      </div>

      {/* Primary Sticky Header */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* MAIN CONTAINER */}
      <main className="relative z-10">
        
        {/* HERO SECTION CONTAINER */}
        <section
          id="home"
          className="min-h-screen flex flex-col justify-center items-center pt-24 pb-12 relative overflow-hidden"
        >
          {/* Animated Background Paths Backdrop */}
          <BackgroundPaths />

          {/* Pulsing Backlight atmospheric halo */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] [height:450px] bg-brand-crimson/15 rounded-full blur-[140px] pointer-events-none animate-pulse-slow" />

          <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex-1 flex flex-col justify-center relative">
            
            {/* Middle Main Copy Area */}
            <div className="my-auto text-left max-w-5xl pt-[38px] pb-16 flex" id="hero-title-canvas">
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={!isLoading ? { opacity: 1, y: 0 } : { opacity: 0 }}
                transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="hidden md:flex vertical-label border-r border-white/10 pr-4 mr-8 pt-2"
              >
                Managed by Priyam & Team
              </motion.div>
              
              <div className="flex-1">
                <motion.span 
                  initial={{ opacity: 0, x: -15 }}
                  animate={!isLoading ? { opacity: 1, x: 0 } : { opacity: 0 }}
                  transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] font-semibold text-brand-light-red mb-8 uppercase"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  Mock Your Limits!
                </motion.span>

                <motion.h1 
                  initial={{ opacity: 0, y: 35 }}
                  animate={!isLoading ? { opacity: 1, y: 0 } : { opacity: 0 }}
                  transition={{ duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none text-white mb-8 mask-gradient uppercase break-words"
                >
                  We Build<br />
                  <span className="text-outline">Digital Dominance.</span>
                </motion.h1>

                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={!isLoading ? { opacity: 1, y: 0 } : { opacity: 0 }}
                  transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="text-white/70 font-sans text-sm md:text-base max-w-2xl leading-relaxed mb-10"
                >
                  aivéra crafts high-performance web platforms, intelligent AI chatbots, custom workflows, hyper-targeted ad campaigns, and high-retention video content designed for absolute conversion.
                </motion.p>

                {/* Action Coordinates CTA group */}
                <motion.div 
                  initial={{ opacity: 0, y: 25 }}
                  animate={!isLoading ? { opacity: 1, y: 0 } : { opacity: 0 }}
                  transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-wrap items-center gap-6"
                >
                  <button
                    onClick={() => handleNavigate("contact")}
                    className="group flex items-center gap-2 bg-brand-crimson hover:brightness-110 hover:shadow-[0_0_20px_rgba(210,4,45,0.4)] text-white font-mono text-xs tracking-widest font-extrabold px-8 py-4 rounded-sm transition-all duration-300 cursor-pointer border border-brand-crimson"
                  >
                    START YOUR PROJECT
                    <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>

                  <div className="hidden sm:block h-[1px] w-24 bg-white/20"></div>

                  <button
                    onClick={() => handleNavigate("services")}
                    className="group flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white font-mono text-xs tracking-widest px-7 py-4 rounded-sm border border-white/10 hover:border-white/25 transition-all duration-300 cursor-pointer"
                  >
                    OUR SERVICES
                  </button>
                </motion.div>
              </div>
            </div>

          </div>
        </section>

        {/* Bespoke interactive layouts lists */}
        <About />
        <Services />
        <Projects />
        <Skills />
        <Process />
        <Contact />
      </main>

      {/* Global Footer anchor details overlay */}
      <Footer onNavigate={handleNavigate} />

    </div>
  );
}
