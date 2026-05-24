import { PROCESS_DATA } from "../data";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 bg-black relative border-b border-white/5 overflow-hidden">
      {/* Background flare blur */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-brand-wine/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-20" 
          id="process-head"
        >
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight mb-6">
            The Aivéra Production <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-crimson via-brand-light-red to-white">Workflow.</span>
          </h2>
          <p className="text-white/60 text-sm">
            We operate with strict timeline thresholds. Explore our structured workflow phases meticulously engineered to deliver unshakeable performance metrics and luxurious layouts.
          </p>
        </motion.div>

        {/* Process Steps Loop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" id="process-timeline-canvas">
          {PROCESS_DATA.map((step, idx) => {
            const stepId = `process-box-${step.step}`;
            return (
              <motion.div
                key={step.step}
                id={stepId}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="p-6 md:p-8 rounded-2xl bg-dark-charcoal border border-white/5 relative group hover:border-brand-crimson/50 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl min-h-[290px]"
              >
                {/* Backdrop layout step counters */}
                <div className="absolute -top-6 -right-6 font-display text-8xl font-black text-white/2 group-hover:text-brand-crimson/5 group-hover:scale-105 transition-all duration-500 select-none">
                  {step.step}
                </div>

                <div>
                  {/* Step Code Row */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-[10px] text-brand-crimson font-extrabold tracking-widest bg-brand-crimson/10 px-3 py-1 border border-brand-crimson/20 rounded-full">
                      STEP_{step.step}
                    </span>
                    <span className="font-mono text-[9px] text-white/30 tracking-wider">
                      {step.duration}
                    </span>
                  </div>

                  <h3 className="font-mono text-[10px] text-white/40 tracking-widest uppercase mb-2">
                    {step.phase}
                  </h3>

                  <h4 className="font-display text-lg font-bold text-white tracking-wide mb-3 group-hover:text-brand-crimson transition-all duration-300">
                    {step.title}
                  </h4>

                  <p className="text-white/50 text-xs leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Progress bar overlay indicator on bento card bottom */}
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white/5 group-hover:bg-brand-crimson/50 transition-colors duration-300" />
              </motion.div>
            );
          })}
        </div>

        {/* Client Guarantee Alert banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="mt-16 p-6 rounded-2xl bg-[#09090d] border border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto text-left shadow-lg"
        >
          <div className="flex gap-4 items-center">
            <div className="p-3 bg-brand-crimson/10 border border-brand-crimson/20 text-brand-crimson rounded-xl">
              <ShieldCheck className="w-5 h-5 text-glow-red" />
            </div>
            <div>
              <h4 className="font-display text-sm font-bold text-white tracking-wide">
                Rigorous Quality Commitment
              </h4>
              <p className="text-white/50 text-xs mt-0.5">
                We design with client-side performance score requirements. Every deployment includes visual testing and dark contrast ratio validation.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
