import { SERVICES_DATA } from "../data";
import { Framer, Code2, Compass, Zap, Cpu, HelpCircle, Sparkles, User, Check, Film } from "lucide-react";
import { motion } from "motion/react";

export default function Services() {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "Framer":
        return <Framer className="w-6 h-6" />;
      case "Code2":
        return <Code2 className="w-6 h-6" />;
      case "Compass":
        return <Compass className="w-6 h-6" />;
      case "Zap":
        return <Zap className="w-6 h-6" />;
      case "Cpu":
        return <Cpu className="w-6 h-6" />;
      case "Sparkles":
        return <Sparkles className="w-6 h-6" />;
      case "User":
        return <User className="w-6 h-6" />;
      case "Film":
        return <Film className="w-6 h-6" />;
      default:
        return <HelpCircle className="w-6 h-6" />;
    }
  };

  return (
    <section id="services" className="py-24 md:py-32 bg-[#050508] relative border-b border-white/5 overflow-hidden">
      {/* Background soft lighting mesh */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-brand-crimson/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-brand-crimson/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        
        {/* Section Header */}
        <motion.div 
          id="services-header" 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mb-16 md:mb-20 text-left"
        >
          <span className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] font-semibold text-brand-light-red mb-4 uppercase">
            Our capabilities
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Services that <span className="text-glow-red text-brand-light-red">dominate.</span>
          </h2>
          <p className="text-white/60 text-sm md:text-base">
            Five core capabilities, one obsessive mission: make your brand impossible to ignore.
          </p>
        </motion.div>

        {/* Clean Premium Bento Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.id}
              id={`service-item-${service.id}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-gradient-to-b from-white/10 to-brand-crimson/10 hover:from-brand-crimson/30 hover:to-brand-crimson/10 p-px rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-brand-crimson/5 transition-all duration-300"
            >
              <div className="bg-[#0a0a0f] rounded-[15px] p-8 transition-all duration-300 relative overflow-hidden flex flex-col justify-between min-h-[360px] h-full group-hover:-translate-y-0.5 border border-white/5">
                {/* Internal ambient flare */}
                <div className="absolute -bottom-20 -right-20 w-[150px] h-[150px] bg-brand-crimson/5 group-hover:bg-brand-crimson/10 rounded-full blur-[60px] pointer-events-none transition-all duration-500" />
                
                <div>
                  {/* Icon Box */}
                  <div className="p-3.5 bg-white/2 border border-white/10 text-white/70 group-hover:bg-brand-crimson group-hover:text-white group-hover:border-brand-crimson rounded-xl w-fit transition-all duration-300 mb-6">
                    {getServiceIcon(service.iconName)}
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl font-bold text-white tracking-wide mb-3 group-hover:text-brand-light-red transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-white/60 leading-relaxed mb-8 font-sans">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Specific Capabilities Tagged Bullets list */}
                <div className="flex flex-col gap-2.5 mt-auto">
                  <div className="h-[1px] w-full bg-white/5 my-2" />
                  {service.bullets.map((bullet, k) => (
                    <div 
                      key={k} 
                      className="flex gap-3 items-center text-left text-xs text-white/80"
                    >
                      <span className="relative flex h-2 w-2 shrink-0 my-auto">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-light-red opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-crimson shadow-[0_0_8px_#d2042d]"></span>
                      </span>
                      <span className="font-mono text-[11px] text-white/70 group-hover:text-white/95 transition-colors duration-300">
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
