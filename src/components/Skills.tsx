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
  Instagram,
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
      case "Video":
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
      case "Instagram":
        return <Instagram className="w-4 h-4" />;
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
    <section id="skills" className="pt-[47px] pb-[47px] pl-0 bg-[#050508] relative border-b border-white/5 overflow-hidden">
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
              Our professional <span className="text-glow-red text-brand-light-red">expertise.</span>
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
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 xs:gap-4 sm:gap-6" 
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
                  className="aspect-square p-4 sm:p-5 rounded-2xl bg-dark-charcoal border border-white/10 relative overflow-hidden group hover:border-brand-crimson/50 hover:-translate-y-1 transition-all duration-350 shadow-xl flex flex-col justify-between smooth-outline-box"
                >
                  {/* Micro glow on progress hovered */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-brand-crimson/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Top row: Icon and Level */}
                  <div className="flex items-center justify-between w-full mb-1">
                    <div className="p-2 rounded-lg bg-white/5 text-brand-crimson group-hover:bg-brand-crimson group-hover:text-white transition-all duration-350">
                      {getSkillIcon(skill.iconName)}
                    </div>
                    <span className="font-mono text-[10px] sm:text-xs text-brand-light-red font-semibold bg-brand-crimson/10 px-2 py-0.5 rounded tracking-wide">
                      {skill.level}
                    </span>
                  </div>

                  {/* Mid section: Title, centered or weighted */}
                  <div className="flex-grow flex flex-col justify-center my-2">
                    <h3 className="font-display text-xs sm:text-sm md:text-base font-bold text-white tracking-wide leading-snug line-clamp-3">
                      {skill.name}
                    </h3>
                  </div>

                  {/* Bottom section: Progress rate & line */}
                  <div className="w-full">
                    <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-brand-wine via-brand-crimson to-brand-light-red rounded-full shadow-[0_0_8px_rgba(255,0,60,0.5)]"
                      />
                    </div>
                    <div className="flex justify-between items-center mt-2 font-mono text-[9px] sm:text-[10px] text-white/40 uppercase tracking-widest">
                      <span>CAPABILITY</span>
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
