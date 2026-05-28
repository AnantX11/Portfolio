import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ProposalResult } from "../types";
import {
  Cpu,
  Sparkles,
  ArrowRight,
  RefreshCw,
  Layers,
  Palette,
  Terminal,
  CheckCircle,
  Copy,
  Check,
  Zap,
} from "lucide-react";

export default function BriefBuilder() {
  const [idea, setIdea] = useState("");
  const [vibe, setVibe] = useState("Clean Minimalism");
  const [details, setDetails] = useState("");
  
  const [loading, setLoading] = useState(false);
  const [loaderStep, setLoaderStep] = useState(0);
  const [proposal, setProposal] = useState<ProposalResult | null>(null);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const vibePresets = [
    { name: "Clean Minimalism", desc: "Pure high-contrast styling with luxury layout mask-gradients." },
    { name: "Cyberpunk Red & Obsidian", desc: "Harsh laser highlights and dark glass panels." },
    { name: "Swiss Brutalist Luxury", desc: "Massive layouts, rigid grids, and heavy typography." },
    { name: "High-Contrast Liquid Art", desc: "Fluid orbs, sleek overlays, and kinetic transitions." },
  ];

  const suggestedIdeas = [
    "A timepiece marketplace simulator with ticking audio triggers.",
    "Spatial computing control dashboard with wireframe structures.",
    "A decentralized agency showcase featuring radial responsive grids.",
  ];

  const loadingSteps = [
    "INITIALIZING CREATIVE ENGINE...",
    "CONTACTING CORE CO-PROCESSOR...",
    "SYNTHESIZING BRAND PALETTES...",
    "DRAFTING PROPOSAL SPECIFICATIONS..."
  ];

  const triggerLoaderCycles = (): Promise<void> => {
    return new Promise((resolve) => {
      setLoaderStep(0);
      const interval = setInterval(() => {
        setLoaderStep((prev) => {
          if (prev >= loadingSteps.length - 1) {
            clearInterval(interval);
            resolve();
            return prev;
          }
          return prev + 1;
        });
      }, 700);
    });
  };

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!idea.trim()) return;

    setLoading(true);
    setError(null);
    setProposal(null);

    // Run parallel tasks: trigger loading slide cycles and execute network API call
    const loaderPromise = triggerLoaderCycles();
    
    try {
      const response = await fetch("/api/proposal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idea, vibe, details }),
      });

      if (!response.ok) {
        throw new Error("Creative stream timed out. Please retry.");
      }

      const result = await response.json();
      
      // Wait for at least the loader animation sequences to complete
      await loaderPromise;
      setProposal(result);
    } catch (err: any) {
      setError(err?.message || "Encountered a server pipeline error. Let's try once more.");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (!proposal) return;
    const formatText = `
CONCEPT: ${proposal.conceptName}
TAGLINE: ${proposal.tagline}
ELEVATOR PITCH: ${proposal.elevatorPitch}

COLOR PALETTE:
- Primary: ${proposal.colorPalette.primary}
- Secondary: ${proposal.colorPalette.secondary}
- Background: ${proposal.colorPalette.background}
- Physical Atmospheric Ambience: ${proposal.colorPalette.ambience}

DESIGN DIRECTION:
- Typography: ${proposal.designDirection.typography}
- Interactive Feature Focus: ${proposal.designDirection.interactiveFocus}
- Layout Visual Adjectives: ${proposal.designDirection.visualMood}

KEY FEATURE MODULES:
${proposal.features.map((f, i) => `${i + 1}. ${f.title}: ${f.description}`).join("\n")}

RECOMMENDED TECH STACK:
${proposal.techStack.join(", ")}
    `;

    navigator.clipboard.writeText(formatText.trim()).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section id="brief" className="py-24 md:py-32 relative bg-neutral-950 overflow-hidden border-b border-white/5">
      {/* Absolute Crimson Spotlights */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] h-[350px] bg-brand-crimson/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[250px] h-[250px] bg-brand-wine/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="brief-header">
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Aivéra Code Studio: <span className="text-glow-red text-brand-light-red">Aesthetic Engine</span>
          </h2>
          <p className="text-white/60 text-sm">
            Leverage server-side artificial intelligence to draft high-end design proposals. Describe your product idea, click synthesize, and let the AI draft concept branding systems, color hex maps, and interactive wireframes instantaneously.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Creative briefing inputs (5 columns) */}
          <div className="lg:col-span-5 bg-dark-charcoal border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl relative smooth-outline-box" id="brief-controls-card">

            <form onSubmit={handleGenerate} className="space-y-6">
              
              {/* Product input segment */}
              <div>
                <label className="block font-mono text-[10px] text-zinc-400 uppercase tracking-widest mb-2.5">
                  Describe Your Product Idea
                </label>
                <textarea
                  value={idea}
                  onChange={(e) => setIdea(e.target.value)}
                  placeholder="e.g. A digital premium watch collection platform with real-time horizontal parralax sliders..."
                  className="w-full h-24 bg-black/60 border border-white/10 rounded-xl p-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-brand-crimson focus:ring-1 focus:ring-brand-crimson/50 resize-none transition-all duration-300"
                  required
                />
                
                {/* Suggestions buttons */}
                <div className="mt-2.5 flex flex-wrap gap-2 text-left">
                  {suggestedIdeas.map((suggest, s_idx) => (
                    <button
                      key={s_idx}
                      type="button"
                      onClick={() => setIdea(suggest)}
                      className="text-[10px] text-white/40 hover:text-brand-crimson bg-white/2 hover:bg-brand-crimson/5 border border-white/5 px-2.5 py-1 rounded transition-all duration-300 text-left line-clamp-1 truncate"
                    >
                      + {suggest}
                    </button>
                  ))}
                </div>
              </div>

              {/* Vibe Selection Segment */}
              <div>
                <label className="block font-mono text-[10px] text-zinc-400 uppercase tracking-widest mb-2.5">
                  Target Aesthetic Vibe
                </label>
                <div className="space-y-2.5">
                  {vibePresets.map((preset) => (
                    <div
                      key={preset.name}
                      onClick={() => setVibe(preset.name)}
                      className={`p-3 rounded-xl border cursor-pointer text-left transition-all duration-300 relative flex justify-between items-center ${
                        vibe === preset.name
                          ? "bg-brand-crimson/10 border-brand-crimson"
                          : "bg-black/40 border-white/5 hover:border-white/10"
                      }`}
                    >
                      <div>
                        <div className="font-display text-xs font-bold text-white tracking-wide">
                          {preset.name}
                        </div>
                        <div className="text-[10px] text-zinc-400 mt-0.5">
                          {preset.desc}
                        </div>
                      </div>
                      <span
                        className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${
                          vibe === preset.name
                            ? "border-brand-crimson bg-brand-crimson"
                            : "border-white/20 bg-transparent"
                        }`}
                      >
                        {vibe === preset.name && (
                          <span className="w-1.5 h-1.5 bg-white rounded-full" />
                        )}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Special details (optional) */}
              <div>
                <label className="block font-mono text-[10px] text-zinc-400 uppercase tracking-widest mb-2.5">
                  Key Integration Features (Optional)
                </label>
                <input
                  type="text"
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="e.g. Interactive sound toggle, real timeline model..."
                  className="w-full bg-black/60 border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white placeholder-white/20 focus:outline-none focus:border-brand-crimson focus:ring-1 focus:ring-brand-crimson/50 transition-all duration-300"
                />
              </div>

              {/* Submit triggers */}
              <button
                type="submit"
                disabled={loading || !idea.trim()}
                className={`w-full py-4 rounded-xl font-mono text-xs tracking-widest font-extrabold flex items-center justify-center gap-2 border transition-all duration-300 select-none cursor-pointer ${
                  loading || !idea.trim()
                    ? "bg-zinc-800/50 text-zinc-500 border-transparent cursor-not-allowed"
                    : "bg-brand-crimson text-white border-brand-crimson hover:bg-brand-neon hover:border-brand-neon hover:shadow-[0_0_20px_rgba(255,0,60,0.4)]"
                }`}
              >
                {loading ? (
                  <>
                    <RefreshCw className="w-4.5 h-4.5 animate-spin text-brand-crimson" />
                    CO_GENERATING...
                  </>
                ) : (
                  <>
                    SYNTHESIZE CONCEPT BRIEF
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Side: Creative output panel / response (7 columns) */}
          <div className="lg:col-span-7 h-full" id="brief-output-canvas">
            {/* Standard pre-submit layout state */}
            {!loading && !proposal && !error && (
              <div className="h-full min-h-[460px] border border-dashed border-white/10 rounded-3xl flex flex-col items-center justify-center p-8 bg-white/1 text-center">
                <div className="p-4 rounded-full bg-white/3 border border-white/5 text-brand-crimson mb-6">
                  <Cpu className="w-8 h-8" />
                </div>
                <h3 className="font-display text-lg font-bold text-white tracking-wide mb-2">
                  Aesthetic Engine Awaiting Directives
                </h3>
                <p className="text-zinc-500 text-xs max-w-sm leading-relaxed">
                  Input your digital ideas on the left. Our Gemini-powered co-design director will synthesize custom layout and color systems for your brand.
                </p>
              </div>
            )}

            {/* Simulated AI Synthesizer loading state */}
            {loading && (
              <div className="h-full min-h-[460px] border border-brand-crimson/40 bg-zinc-950 rounded-3xl flex flex-col items-center justify-center p-8 shadow-2xl relative">
                {/* Neon line overlay */}
                <span className="absolute top-0 left-0 w-full h-[3px] bg-brand-crimson animate-pulse" />
                
                <div className="relative mb-8">
                  <div className="w-16 h-16 rounded-full border-2 border-brand-crimson/25 border-t-brand-crimson animate-spin flex items-center justify-center" />
                  <Sparkles className="w-5 h-5 text-brand-crimson absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
                </div>

                <h3 className="font-display text-lg font-bold text-white tracking-wide mb-2 animate-bounce">
                  {loadingSteps[loaderStep]}
                </h3>

                <p className="text-zinc-500 text-xs text-center max-w-xs leading-relaxed">
                  Querying server-side AI pipeline models to synthesize typography, aesthetic colors, page wireframe assets, and technical specs.
                </p>
              </div>
            )}

            {/* Error fallback display */}
            {error && !loading && (
              <div className="h-full min-h-[460px] border border-red-500/20 bg-black/60 rounded-3xl flex flex-col items-center justify-center p-8 text-center shadow-lg">
                <span className="p-3 rounded-full bg-red-500/10 text-red-400 mb-4">
                  <Terminal className="w-6 h-6" />
                </span>
                <h3 className="font-display text-lg font-bold text-white mb-2">
                  Creative Cycle Error
                </h3>
                <p className="text-xs text-zinc-400 max-w-sm mb-6 leading-relaxed">
                  {error}
                </p>
                <button
                  onClick={handleGenerate}
                  className="px-5 py-2.5 bg-white/5 hover:bg-brand-crimson hover:text-white border border-white/10 rounded-xl text-xs font-mono tracking-wider transition-colors duration-300"
                >
                  RE-EXECUTE PIPELINE
                </button>
              </div>
            )}

            {/* Majestic proposal output showcase */}
            {proposal && !loading && !error && (
              <AnimatePresence mode="wait">
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="bg-dark-charcoal border border-white/10 rounded-3xl p-6 md:p-8 relative shadow-2xl text-left smooth-outline-box"
                >
                  {/* Glowing header banner background */}
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-brand-crimson to-transparent" />

                  {/* Top Details Metadata row */}
                  <div className="flex justify-between items-center border-b border-white/5 pb-4 mb-6">
                    <div className="flex items-center gap-2 font-mono text-[9px] text-zinc-400 tracking-widest uppercase">
                      Aesthetic Proposal
                    </div>
                    
                    <button
                      onClick={copyToClipboard}
                      className="p-2 bg-white/3 hover:bg-brand-crimson text-white hover:text-white border border-white/5 rounded-lg text-xs font-mono flex items-center gap-1.5 transition-all duration-300 cursor-pointer select-none"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          COPIED
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          COPY CODE
                        </>
                      )}
                    </button>
                  </div>

                  {proposal.isFallback && (
                    <div className="mb-4 text-center px-3 py-1 bg-brand-crimson/5 border border-brand-crimson/20 rounded-lg text-[10px] font-mono text-brand-light-red uppercase tracking-widest">
                      Baseline Preset Proposal
                    </div>
                  )}

                  {/* Brand Concept Heading Row */}
                  <div className="mb-6">
                    <h3 className="font-display text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                      {proposal.conceptName}
                    </h3>
                    <p className="font-mono text-xs text-brand-light-red italic mt-1 font-semibold">
                      "{proposal.tagline}"
                    </p>
                  </div>

                  {/* Elevator Pitch speech block */}
                  <div className="mb-8 p-4 rounded-xl bg-black/40 border border-white/5 font-sans text-sm text-slate-300 leading-relaxed italic border-l-2 border-l-brand-crimson">
                    "{proposal.elevatorPitch}"
                  </div>

                  {/* Bento-grid parameters mapping */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
                    
                    {/* Color Swatch block (Palette) */}
                    <div className="p-4 rounded-xl bg-white/2 border border-white/5">
                      <div className="flex items-center gap-2 text-brand-crimson mb-4">
                        <Palette className="w-3.5 h-3.5" />
                        <span className="font-mono text-[10px] text-zinc-300 tracking-widest uppercase">
                          STUDIO PALETTE
                        </span>
                      </div>
                      <div className="flex gap-3 mb-4">
                        {[
                          proposal.colorPalette.background,
                          proposal.colorPalette.secondary,
                          proposal.colorPalette.primary,
                        ].map((cVal, ci) => (
                          <div key={ci} className="group relative flex flex-col items-center">
                            <span
                              className="w-10 h-10 rounded-full border border-white/10 shadow-lg cursor-help transition-transform duration-300 group-hover:scale-110 active:scale-95"
                              style={{ backgroundColor: cVal }}
                              title={cVal}
                            />
                            <span className="absolute -bottom-5 text-[9px] font-mono text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              {cVal}
                            </span>
                          </div>
                        ))}
                      </div>
                      <p className="text-[11px] text-zinc-400 mt-5 leading-relaxed bg-black/30 p-2 rounded">
                        <span className="text-[10px] font-mono text-brand-crimson block mb-0.5">Ambient Environment</span>
                        {proposal.colorPalette.ambience}
                      </p>
                    </div>

                    {/* Design Adjectives & Font Pairings */}
                    <div className="p-4 rounded-xl bg-white/2 border border-white/5 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-brand-crimson mb-4">
                          <Layers className="w-3.5 h-3.5" />
                          <span className="font-mono text-[10px] text-zinc-300 tracking-widest uppercase">
                            CREATIVE MATRIX
                          </span>
                        </div>
                        <div className="space-y-3">
                          <div className="text-xs">
                            <span className="font-mono text-[9px] text-brand-light-red uppercase tracking-wider block">Typography</span>
                            <span className="text-white/80">{proposal.designDirection.typography}</span>
                          </div>
                          <div className="text-xs">
                            <span className="font-mono text-[9px] text-brand-light-red uppercase tracking-wider block">Kinetic Focus</span>
                            <span className="text-white/80">{proposal.designDirection.interactiveFocus}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="pt-3 border-t border-white/5 text-[11px] text-zinc-400 flex items-center gap-1">
                        <span className="font-mono text-brand-crimson">MOOD:</span>
                        {proposal.designDirection.visualMood}
                      </div>
                    </div>
                  </div>

                  {/* Core Features cards */}
                  <div className="space-y-3.5 mb-8">
                    <span className="font-mono text-[10px] text-zinc-400 tracking-widest uppercase block mb-1">
                      Key Features
                    </span>
                    {proposal.features.map((feat, fi) => (
                      <div
                        key={fi}
                        className="p-3.5 rounded-xl bg-black/50 border border-white/5 hover:border-brand-crimson/30 transition-all duration-300 flex gap-3Items text-left"
                      >
                        <span className="p-1.5 h-fit rounded bg-brand-crimson/10 text-brand-crimson font-mono text-xs font-bold leading-none shrink-0">
                          {fi+1}
                        </span>
                        <div>
                          <h4 className="font-display text-sm font-bold text-white tracking-wide">
                            {feat.title}
                          </h4>
                          <p className="text-white/50 text-[11px] leading-relaxed mt-0.5">
                            {feat.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Recommended Technologous Tags stack */}
                  <div className="pt-5 border-t border-white/5">
                    <span className="font-mono text-[9px] text-zinc-400 tracking-widest uppercase block mb-2.5">
                      Recommended Tech Stack
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {proposal.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-[9px] text-zinc-300 bg-white/5 border border-white/5 px-2.5 py-1 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </motion.div>
              </AnimatePresence>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
