import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight, MonitorUp } from "lucide-react";

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "HOME", id: "home" },
    { label: "ABOUT", id: "about" },
    { label: "SERVICES", id: "services" },
    { label: "PROJECTS", id: "projects" },
    { label: "CONTACT", id: "contact" },
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/80 backdrop-blur-md py-4 border-b border-white/5"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <button
            id="nav-logo"
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-2 text-white font-display text-xl md:text-2xl font-bold tracking-widest cursor-pointer group"
          >
            <div className="w-2 h-2 bg-brand-crimson rounded-full animate-pulse shrink-0"></div>
            <span className="text-white transition-transform group-hover:scale-110">aivéra</span>
          </button>

          {/* Desktop Nav Items */}
          <div id="desktop-nav-links" className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative font-mono text-xs tracking-widest transition-colors duration-300 cursor-pointer ${
                  activeSection === item.id
                    ? "text-brand-crimson font-medium"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-0 w-full h-[2px] bg-brand-crimson"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Hire Me CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => handleNavClick("contact")}
              className="group flex items-center gap-1 bg-white/5 hover:bg-brand-crimson hover:text-white text-white font-mono text-xs tracking-widest transition-all duration-300 border border-white/10 hover:border-brand-crimson px-5 py-2.5 rounded-full cursor-pointer "
            >
              COLABORATE
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white flex items-center justify-center cursor-pointer hover:bg-white/5 rounded-lg border border-white/5"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-brand-crimson" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Screen Mobile overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-45 bg-black/95 backdrop-blur-lg flex flex-col justify-center px-8 md:px-16"
          >
            <div className="flex flex-col gap-6 text-left max-w-md mx-auto w-full">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => handleNavClick(item.id)}
                  className={`font-display text-3xl font-extrabold tracking-tight text-left cursor-pointer transition-colors duration-300 hover:text-brand-crimson ${
                    activeSection === item.id ? "text-brand-crimson text-glow-red" : "text-white"
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                onClick={() => handleNavClick("contact")}
                className="mt-6 flex items-center justify-center gap-2 bg-brand-crimson hover:bg-brand-neon text-white font-mono text-sm tracking-widest px-6 py-4 rounded-lg transition-colors.duration-300 cursor-pointer w-full text-center"
              >
                LET'S DISCUSS
                <ArrowUpRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
