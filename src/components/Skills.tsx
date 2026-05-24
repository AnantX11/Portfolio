import { useState } from "react";
import { SKILLS_DATA } from "../data";
import { Skill } from "../types";
import { motion, AnimatePresence } from "motion/react";
import {
  Component,
  Palette,
  Sparkles,
  ShieldCheck,
  Server,
  Cpu,
  Activity,
  Layers,
  Video,
  Hammer,
  Github,
  Laptop,
  ShoppingBag,
  MessageCircle,
  Figma,
  Megaphone,
  Users,
} from "lucide-react";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { label: "ALL TECH", value: "all" },
    { label: "FRONTEND", value: "frontend" },
    { label: "BACKEND", value: "backend" },
    { label: "CREATIVE DESIGN", value: "design" },
    { label: "COMPILERS & TOOLS", value: "tools" },
  ];

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case "Component":
        return <Component className="w-4 h-4" />;
      case "Palette":
        return <Palette className="w-4 h-4" />;
      case "Sparkles":
        return <Sparkles className="w-4 h-4" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-4 h-4" />;
      case "Server":
        return <Server className="w-4 h-4" />;
      case "Cpu":
        return <Cpu className="w-4 h-4" />;
      case "Activity":
        return <Activity className="w-4 h-4" />;
      case "Layers":
        return <Layers className="w-4 h-4" />;
      case "Film":
        return <Video className="w-4 h-4" />;
      case "Hammer":
        return <Hammer className="w-4 h-4" />;
      case "Github":
        return <Github className="w-4 h-4" />;
      case "ShoppingBag":
        return <ShoppingBag className="w-4 h-4" />;
      case "MessageCircle":
        return <MessageCircle className="w-4 h-4" />;
      case "Figma":
        return <Figma className="w-4 h-4" />;
      case "Megaphone":
        return <Megaphone className="w-4 h-4" />;
      case "Users":
        return <Users className="w-4 h-4" />;
      default:
        return <Laptop className="w-4 h-4" />;
    }
  };

  const filteredSkills = SKILLS_DATA.filter((skill) => {
    if (activeCategory === "all") return true;
    return skill.category === activeCategory;
  });

  return (
    <section id="skills" className="py-24 bg-[#050508] relative border-b border-white/5 overflow-hidden">
      {/* Background radial atmosphere orb */}
      <div className="absolute bottom-0 right-1/10 w-[300px] h-[300px] bg-brand-wine/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8"
        >
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Our professional <span className="text-glow-red text-brand-light-red">technological engines.</span>
            </h2>
          </div>

          {/* Category Pill select */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-4 py-2 font-mono text-[9px] tracking-widest border rounded transition-all duration-300 cursor-pointer ${
                  activeCategory === cat.value
                    ? "bg-brand-crimson text-white border-brand-crimson neon-glow-red"
                    : "bg-white/2 text-white/50 border-white/5 hover:border-white/10 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" 
          id="skills-grid-canvas"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill: Skill, i) => {
              const skillId = `skill-card-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, "")}`;
              return (
                <motion.div
                  layout
                  key={skill.name}
                  id={skillId}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="p-5 rounded-2xl bg-dark-charcoal border border-white/10 relative overflow-hidden group hover:border-brand-crimson/50 hover:-translate-y-1 transition-all duration-350 shadow-xl"
                >
                  {/* Micro glow on progress hovered */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-brand-crimson/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-white/5 text-brand-crimson group-hover:bg-brand-crimson group-hover:text-white transition-all duration-350">
                        {getSkillIcon(skill.iconName)}
                      </div>
                      <h3 className="font-display text-sm font-bold text-white tracking-wide">
                        {skill.name}
                      </h3>
                    </div>
                    <span className="font-mono text-xs text-brand-light-red font-semibold bg-brand-crimson/10 px-2 py-0.5 rounded">
                      {skill.level}
                    </span>
                  </div>

                  {/* Progress bar container */}
                  <div className="mt-4">
                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-brand-wine via-brand-crimson to-brand-light-red rounded-full shadow-[0_0_8px_rgba(255,0,60,0.5)]"
                      />
                    </div>
                    <div className="flex justify-between items-center mt-2.5 font-mono text-[9px] text-white/40 uppercase tracking-widest">
                      <span>CAPABILITY RATE</span>
                      <span className="text-slate-300 font-semibold">{skill.percentage}%</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
