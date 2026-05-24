import { ArrowUpRight, Instagram, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-black relative border-b border-white/5 overflow-hidden">
      {/* Background Red Flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-wine/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        
        {/* Section Header */}
        <motion.div 
          id="projects-head" 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mb-16 text-left"
        >
          <span className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] font-semibold text-brand-light-red mb-4 uppercase">
            Proven Results &amp; Trust
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Our client success, <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-crimson via-brand-light-red to-white">raw &amp; verified.</span>
          </h2>
          <p className="text-white/60 text-sm md:text-base leading-relaxed">
            We don't rely on polished case study templates. Explore live conversions, client chats, and real behind-the-scenes metrics straight from our active operations.
          </p>
        </motion.div>

        {/* Client Reviews CTA Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98, y: 25 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-gradient-to-r from-brand-crimson/5 via-black/40 to-white/1 border border-white/10 hover:border-brand-crimson/40 rounded-2xl p-8 md:p-12 relative overflow-hidden transition-all duration-500 group"
        >
          {/* Circular neon gradient glow */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] opacity-20 group-hover:opacity-30 rounded-full blur-[50px] transition-all duration-500 pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div className="flex gap-6 items-center flex-col sm:flex-row text-center sm:text-left">
              {/* Instagram highlight-like live circle ring */}
              <div className="relative shrink-0 p-[3px] rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] hover:scale-105 transition-transform duration-500 cursor-pointer">
                <div className="p-1.5 bg-black rounded-full">
                  <div className="w-16 h-16 rounded-full bg-dark-charcoal hover:bg-black/80 flex items-center justify-center transition-colors">
                    <Instagram className="w-8 h-8 text-white group-hover:text-[#ee2a7b] transition-colors duration-300" />
                  </div>
                </div>
                {/* Live "Reviews" indicator badge */}
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 px-2.5 py-0.5 text-[8px] tracking-widest font-mono font-extrabold text-white bg-[#ee2a7b] rounded-full uppercase scale-90 shadow-lg select-none">
                  Reviews
                </span>
              </div>
              
              <div>
                <span className="inline-block font-mono text-[10px] tracking-[0.2em] font-bold text-brand-light-red mb-2 uppercase">
                  Verifiable client success
                </span>
                <h3 className="font-display text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-3">
                  Explore Live Reviews &amp; Stories
                </h3>
                <p className="text-sm text-white/60 max-w-xl leading-relaxed">
                  We don't just talk about results—we archive them transparently. Discover raw feedback, real-time client conversions, and behind-the-scenes milestones directly in our Instagram Highlights.
                </p>
              </div>
            </div>

            <a
              href="https://www.instagram.com/stories/highlights/18102655456804412/?__pwa=1"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 bg-gradient-to-r from-[#ee2a7b] to-[#6228d7] hover:from-[#f9ce34] hover:to-[#ee2a7b] text-white font-mono text-xs tracking-widest font-bold rounded-xl flex items-center gap-2 group-hover:scale-[1.02] shadow-[0_0_20px_rgba(238,42,123,0.3)] hover:shadow-[0_0_30px_rgba(238,42,123,0.5)] transition-all duration-500 whitespace-nowrap"
            >
              LAUNCH HIGHLIGHTS_
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
