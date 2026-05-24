import { Cpu, ArrowUp, ArrowUpRight } from "lucide-react";

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const links = [
    { label: "Home Base", id: "home" },
    { label: "About Studio", id: "about" },
    { label: "Our Services", id: "services" },
    { label: "Portfolio Works", id: "projects" },
    { label: "Collaborate", id: "contact" },
  ];

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer" className="pt-10 pb-16 bg-black relative border-t border-white/5 overflow-hidden">
      {/* Background flare micro spotlight */}
      <div className="absolute bottom-0 right-1/2 translate-x-1/2 w-[240px] h-[100px] bg-brand-crimson/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-left">
        
        {/* Glowing Divider Line */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-brand-crimson/50 to-transparent mb-12 shadow-[0_0_8px_rgba(210,4,45,0.3)]" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Column 1: Logo & Tagline (5 columns) */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <button
              onClick={() => onNavigate("home")}
              className="flex items-center gap-2 text-white font-display text-xl md:text-2xl font-bold tracking-widest cursor-pointer w-fit"
            >
              <span className="text-brand-crimson">AIVÉRA</span>
            </button>
            <p className="text-white/40 text-[11px] leading-relaxed max-w-sm">
              We design and craft futuristic, modern web products. Built under rigorous layout architectures and high-contrasting neon crimson lighting, ensuring pristine authority and luxury digital performance.
            </p>
          </div>

          {/* Column 2: Navigation Links (4 columns) */}
          <div className="md:col-span-4">
            <h4 className="font-mono text-[9px] text-zinc-500 tracking-widest uppercase mb-4">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className="text-left font-mono text-[10px] text-white/50 hover:text-brand-crimson tracking-wider transition-colors duration-300 cursor-pointer w-fit uppercase"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Column 3: Back to top (3 columns) */}
          <div className="md:col-span-3 flex flex-col gap-4 items-start md:items-end">
            <button
              onClick={handleBackToTop}
              className="flex items-center gap-2 text-[10px] font-mono text-zinc-400 hover:text-white uppercase tracking-widest bg-white/3 hover:bg-brand-crimson px-4 py-2 border border-white/5 hover:border-brand-crimson rounded-lg transition-all duration-300 cursor-pointer w-fit font-bold select-none"
            >
              Back to Top
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>



      </div>
    </footer>
  );
}
