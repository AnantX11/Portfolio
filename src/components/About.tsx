import { motion } from "motion/react";
import { User, Target, Award, Rocket } from "lucide-react";

export default function About() {
  const stats = [
    { value: "Precision", desc: "Every pixel deliberate, every line of code purposeful.", icon: Target },
    { value: "Velocity", desc: "From concept to launch in weeks, not months.", icon: Rocket },
    { value: "Dominance", desc: "Brands that don't just compete — they lead.", icon: Award },
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative bg-black overflow-hidden border-b border-white/5">
      {/* Absolute Ambient Background Lights */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] h-[350px] bg-brand-wine/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column - Cyberpunk Visual Identity Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative group" 
            id="about-visual-canvas"
          >
            {/* Glow backing frame */}
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-crimson to-brand-wine rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity duration-500" />
            
            {/* Crazy smooth background vector outline loops & glows */}
            <div className="absolute inset-0 -m-8 pointer-events-none overflow-visible flex items-center justify-center z-0">
              {/* Outer Slow Rotating Ring */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                className="absolute w-[115%] h-[115%] border border-brand-crimson/10 rounded-[2.5rem] opacity-65 group-hover:border-brand-crimson/25 transition-colors duration-500"
              />
              {/* Inner Counter-Rotating Dashed Star Ring */}
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute w-[108%] h-[108%] border border-dashed border-white/5 rounded-[2rem] opacity-50 group-hover:opacity-80 transition-opacity duration-500"
              />
              {/* Giant fluid ambient aura breathing behind */}
              <motion.div 
                animate={{ scale: [1, 1.04, 1], opacity: [0.12, 0.22, 0.12] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-[320px] h-[320px] bg-gradient-to-tr from-brand-crimson/15 via-transparent to-brand-wine/10 rounded-full blur-[60px]"
              />
            </div>
            
            {/* Main picture framework */}
            <motion.div 
              animate={{ 
                y: [0, -12, 4, -8, 0],
                rotate: [0, 0.8, -0.6, 0.4, 0]
              }}
              transition={{ 
                duration: 16, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="relative bg-dark-charcoal/90 border border-white/10 rounded-2xl p-4 overflow-hidden shadow-2xl z-10"
            >
              <div className="absolute top-3 left-3 flex gap-1.5 z-10">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-crimson animate-pulse" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
              </div>

              <div className="aspect-[4/5] relative rounded-lg overflow-hidden bg-black flex items-center justify-center animate-fade-in-slow">
                <img
                  src="https://i.imgur.com/ABh4Yso.jpeg"
                  alt="Aesthetic Workspace"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Visual Glass overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-transparent border-transparent">
                  <div className="font-mono text-[10px] text-brand-crimson tracking-widest mb-1">
                    FOUNDER'S conviction
                  </div>
                  <div className="font-display text-sm font-bold text-white tracking-wide">
                    "Every project receives obsessive attention, premium execution, and a relentless focus on results."
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Brand introduction */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center" 
            id="about-content-card"
          >
            <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              One vision, <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-crimson via-brand-light-red to-white">infinite precision.</span>
            </h2>
            
            <div className="space-y-4 mb-8 text-center">
              <p className="text-white/90 text-sm md:text-base leading-relaxed font-semibold text-center">
                Aivéra is a premium digital agency built for ambitious founders, blending cutting-edge technology with refined design craftsmanship to create digital experiences that captivate, convert, and command attention. Every detail is intentional, every project a statement.
              </p>
              <p className="text-white/90 text-sm md:text-base leading-relaxed font-semibold text-center">
                Founded by Priyam, Aivéra is powered by a team of 12 skilled professionals united by precision, innovation, and an uncompromising creative standard — delivering modern, scalable solutions distinguished by sophistication and lasting impact.
              </p>
            </div>

            {/* Micro Stats Grids */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  id={`stat-block-${i}`}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                  className="p-4 bg-white/2 rounded-xl border border-white/5 transition-all duration-300 hover:border-brand-crimson/30 hover:bg-white/5"
                >
                  <div className="flex items-center gap-2 text-brand-crimson mb-2">
                    <stat.icon className="w-5 h-5 animate-pulse" />
                    <span className="font-display text-lg font-bold tracking-tight text-white">
                      {stat.value}
                    </span>
                  </div>
                  <div className="text-xs text-slate-400">
                    {stat.desc}
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
