import { TrendingUp, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

const ADVANTAGES = [
  {
    id: "growth",
    icon: <TrendingUp className="w-5 h-5 text-brand-light-red text-glow-red" />,
    badge: "Scale & Impact",
    title: "Confirmed Growth",
    description: "Monitoring core scale metrics, optimizing active ad funnels, and executing continuous performance layers to ensure exponential, predictable enterprise growth.",
    accentColor: "from-brand-crimson to-brand-light-red"
  },
  {
    id: "quality",
    icon: <ShieldCheck className="w-5 h-5 text-brand-light-red text-glow-red" />,
    badge: "Elite Standards",
    title: "Rigorous Quality Commitment",
    description: "We design with client-side performance score requirements. Every deployment includes visual testing, dark contrast ratio validation, and clean type-safe components.",
    accentColor: "from-brand-wine to-brand-crimson"
  }
];

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
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight mb-6 animate-pulse-subtle">
            Why <span className="text-glow-red text-brand-light-red">Aivéra?</span>
          </h2>
          <p className="text-white/60 text-sm max-w-2xl mx-auto">
            A dedication to unmatched visual craftsmanship, flawless client performance compliance, and persistent scalability. Discover why high-growth enterprises partner with our technical engines.
          </p>
        </motion.div>

        {/* Advantage Cards Loop */}
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-8" id="process-timeline-canvas">
          {ADVANTAGES.map((item, idx) => {
            return (
              <motion.div
                key={item.id}
                id={`advantage-box-${item.id}`}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative bg-gradient-to-b from-white/10 to-brand-crimson/10 hover:from-brand-crimson/30 hover:to-brand-crimson/10 p-px rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-brand-crimson/5 transition-all duration-300"
              >
                <div className="p-8 md:p-10 rounded-[15px] bg-dark-charcoal relative transition-all duration-300 group-hover:-translate-y-0.5 flex flex-col justify-between overflow-hidden min-h-[260px] border border-white/5">
                  {/* Decorative background ambient light on hover */}
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-brand-crimson/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div>
                    {/* Icon and Subtitling Row */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-white/5 border border-white/10 text-brand-crimson rounded-xl group-hover:bg-brand-crimson group-hover:text-white group-hover:border-transparent transition-all duration-300">
                        {item.icon}
                      </div>
                      <span className="font-mono text-[10px] text-brand-crimson font-bold tracking-widest uppercase bg-brand-crimson/10 px-3 py-1 rounded">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="font-display text-xl md:text-2xl font-bold text-white tracking-wide mb-4 group-hover:text-brand-light-red transition-all duration-300">
                      {item.title}
                    </h3>

                    <p className="text-white/60 text-sm leading-relaxed antialiased">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom decorative bar with a subtle gradient */}
                  <span className="absolute bottom-0 left-0 w-full h-[3px] bg-white/5 group-hover:bg-gradient-to-r group-hover:from-brand-crimson group-hover:to-brand-light-red transition-all duration-300" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

