import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI, Type } from "@google/genai";

// Verified Production Deployment Checkpoint - Robust Full-Stack Server Configuration
dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-initialize Gemini client
let ai: GoogleGenAI | null = null;
const API_KEY = process.env.GEMINI_API_KEY;

if (API_KEY) {
  try {
    ai = new GoogleGenAI({
      apiKey: API_KEY,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
    console.log("Gemini API successfully initialized on server.");
  } catch (err) {
    console.error("Failed to initialize GoogleGenAI:", err);
  }
} else {
  console.warn("GEMINI_API_KEY environment variable not found. Server will run in premium fallback demo mode.");
}

// API endpoint for interactive Gemini Creative Proposal Generator
app.post("/api/proposal", async (req, res) => {
  const { idea, vibe, details } = req.body;

  if (!idea) {
    return res.status(400).json({ error: "Please provide a project idea or brand description." });
  }

  // Fallback high-quality demo generator if Gemini API key is missing
  if (!ai) {
    const formattedVibe = vibe || "Futuristic Cyberpunk";
    const demoProposals: Record<string, any> = {
      "Cyberpunk Red & Obsidian": {
        conceptName: "NEO_NEXUS",
        tagline: "Unleash decentralized experiences in the neon dark.",
        elevatorPitch: "A radical, tactile, dark cyberpunk portal designed for digital rebels. We combine liquid particle cursor dynamics with harsh neon-red lighting and asymmetrical grids to turn a standard application into an unforgettable interactive statement.",
        colorPalette: {
          primary: "#D2042D",
          secondary: "#FF4D6D",
          background: "#000000",
          ambience: "Shadow-stealth obsidian surface backed by a intense, rhythmic soft red radial glow.",
        },
        designDirection: {
          typography: "Space Grotesk (bold display titles) layered with JetBrains Mono (tech-matrix logs).",
          interactiveFocus: "A mouse-interactive 3D particle mesh that responds to cursor velocity, generating red neon ripples.",
          visualMood: "Sleek obsidian panels with micro-friction hover states, textured grain, and ultra-high-contrast elements.",
        },
        features: [
          { title: "Quantum State Grid", description: "A high-performance interface loaded with floating glass cards and holographic metrics." },
          { title: "Fluid Kinetic Transition", description: "Ultra-smooth page reveals mimicking camera shutter triggers and deep radial expansions." },
          { title: "Neural Contact Node", description: "An advanced, magnetic modal form which guides potential alliance leads elegantly." },
        ],
        techStack: ["React 19", "Tailwind CSS v4", "motion (Framer)", "Lucide Icons", "JetBrains Mono Font"],
        isFallback: true,
      },
      "Swiss Brutalist Luxury": {
        conceptName: "MONOLITH.ONE",
        tagline: "Architectural integrity meets raw digital performance.",
        elevatorPitch: "A structural luxury environment drawing from high-end Swiss typography and brutalist architectural scales. It conveys unbreakable authority and premium precision, designed for brands who want to dominate with silence and scale rather than clutter.",
        colorPalette: {
          primary: "#D2042D",
          secondary: "#7A0019",
          background: "#0B0B0F",
          ambience: "Solid mineral slabs illuminated by structural wine-red spotlight outlines.",
        },
        designDirection: {
          typography: "Satoshi paired with Neue Montreal. Massive 120px scale headings that squeeze out empty space.",
          interactiveFocus: "Sticky-drag layout elements that let users play with the proportions, paired with soundless gravity effects.",
          visualMood: "Monumental layout grids with custom borders, heavy shadows, and deep dark-slate block styling.",
        },
        features: [
          { title: "Asymmetrical Hero Canvas", description: "A layout containing heavy, architectural text column blocks and interactive frame offsets." },
          { title: "Gravity Scrolling Portfolio", description: "Sections that clip into place rigidly, conveying mechanical feedback and structural beauty." },
          { title: "Pure Steel Core Form", description: "Ultra-clean input fields responding with aggressive neon crimson line expansions." },
        ],
        techStack: ["React 19", "Tailwind CSS v4", "motion (Framer)", "Satoshi Spec Font", "Lenis Smooth Scroll"],
        isFallback: true,
      },
      "Clean Minimalism": {
        conceptName: "AIR_BASE",
        tagline: "Pure high-contrast styling with absolute negative space.",
        elevatorPitch: "An elite layout leveraging expansive negative space, ultra-crisp borders, and refined outline display typography. Understated layout structures are emphasized by rich red glowing orbs and gorgeous subtle fading mask-gradients.",
        colorPalette: {
          primary: "#D2042D",
          secondary: "#000000",
          background: "#000000",
          ambience: "Pure backdropped absolute dark space highlighted with ambient red glowing orbs and layout masks.",
        },
        designDirection: {
          typography: "Inter Sans (geometric display titles with outlines) with JetBrains Mono (refined data values).",
          interactiveFocus: "Smooth page-fading transitions paired with absolute coordinate trackings and laser line animations.",
          visualMood: "Squeaky-clean high contrast alignments, elegant double borders, and fluid radial micro-effects.",
        },
        features: [
          { title: "Fading Mask Headers", description: "Cinematic, luxury headers loaded with dynamic mask-images that render beautiful light reflections." },
          { title: "Structural Bento Rail", description: "Glass cards overlaid with backdrop filters and custom thin red container borders." },
          { title: "Zen Intel Briefing", description: "Whisper-quiet interactive inputs designed to collect, parse, and showcase digital proposals silently." },
        ],
        techStack: ["React 19", "Tailwind CSS v4", "motion (Framer)", "Inter Sans Font", "JetBrains Mono"],
        isFallback: true,
      },
      "Default Premium Accent": {
        conceptName: "AETHER_CREATIVE",
        tagline: "Ethereal digital craftsmanship built for higher heights.",
        elevatorPitch: `A custom-tailored blueprint designed to realize your concept: "${idea}". This digital theater matches a high-tech luxurious look with immersive fluid motion. It relies on a deep charcoal stage overlaid with gentle crimson glowing particles, ensuring pristine typography and visual rhythm.`,
        colorPalette: {
          primary: "#D2042D",
          secondary: "#E0115F",
          background: "#0B0B0F",
          ambience: "An dark ambient atmospheric stage framed with hovering floating crimson glowing orbs.",
        },
        designDirection: {
          typography: "Elegant 'Space Grotesk' headings with tight geometric leading, paired with 'Inter' body cells for superior legibility.",
          interactiveFocus: "An elaborate mouse-following glowing trail of red dust particles interacting smoothly with portfolio sections.",
          visualMood: "Sophisticated glassmorphic elements holding 24px rounded corners and double glowing borders.",
        },
        features: [
          { title: "Hyper-Interactive Showcases", description: "Smooth slide-out bento panels triggering 3D visual rotations on interactive click actions." },
          { title: "Dynamic Storyflow Timeline", description: "A majestic visual connector pathway glowing softly in crimson as the user triggers scroll thresholds." },
          { title: "Intelligent Brief Hub", description: "An interactive workspace allowing prospective clients to dynamically expand project requirements." },
        ],
        techStack: ["React 19", "Tailwind CSS v4", "motion (Framer)", "Lucide Icons", "Google Fonts API"],
        isFallback: true,
      }
    };

    // Pick fallback portfolio template based on vibe selection
    let chosen = demoProposals["Default Premium Accent"];
    if (vibe?.toLowerCase().includes("cyberpunk")) {
      chosen = demoProposals["Cyberpunk Red & Obsidian"];
    } else if (vibe?.toLowerCase().includes("brutalist") || vibe?.toLowerCase().includes("luxury")) {
      chosen = demoProposals["Swiss Brutalist Luxury"];
    } else if (vibe?.toLowerCase().includes("minimal") || vibe?.toLowerCase().includes("clean")) {
      chosen = demoProposals["Clean Minimalism"];
    } else {
      // Modify custom name or tagline to match idea
      chosen.conceptName = idea.toUpperCase().replace(/[^A-Z_]/g, "").slice(0, 12) || "AETHER_STUDIO";
      if (chosen.conceptName.length < 3) chosen.conceptName = "AETHER_STUDIO";
    }

    // Small timeout to simulate AI generation
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return res.json(chosen);
  }

  // Gemini API exists! Let's generate a stunning design response
  try {
    const prompt = `You are the lead AI Creative Director and Design Technologist of a highly premium digital studio 'aivéra'.
A prospective elite client wants to build a project. Under your creative leadership, build a cinematic, luxurious design concept blueprint and proposal.

User Criteria:
- Project Idea: "${idea}"
- Target Highlight Vibe: "${vibe || "Dark Futuristic Red Accent"}"
- Special Specifications: "${details || "None specified"}"

Your studio style is dark, minimal, luxurious, high-performance, and futuristic, referencing red and obsidian lighting accents.
Formulate a spectacular, professional creative response in JSON with the exact requested fields. Match the client specifications and project idea precisely. Provide breathtaking design ideas, interactive focuses, features, and color palettes.

Return a JSON object conforming precisely to the following criteria:
- conceptName (string): Clean, bold, premium technical name. E.g. CHRONOS, MATRIX_ONE, KAIZEN, APEX, NEURAL_SOUL.
- tagline (string): A short, punchy, beautiful design slogan.
- elevatorPitch (string): A sophisticated, dramatic explanation of why this creative concept perfectly answers their specifications. Max 3 sentences, written with intense creative passion.
- colorPalette (object):
   - primary (string): Hex color code starting with # (prefer crimson red shades, e.g., #D2042D, #FF003C)
   - secondary (string): Hex color code starting with #
   - background (string): Hex color code starting with # (must be highly refined dark background code, e.g. #000000, #0B0B0F, #121212)
   - ambience (string): An evocative, design-rich phrase describing the physical atmosphere (e.g., "Deep charcoal slabs with hovering soft neon-red light and particle dust")
- designDirection (object):
   - typography (string): A short statement specifying heading and body type pairings (e.g. Satoshi display + JetBrains Mono details)
   - interactiveFocus (string): A creative description of a highly immersive custom interaction (e.g. mouse dynamic canvas distortion, magnetic fluid menus, horizontal smooth slider with lens blur effects)
   - visualMood (string): High-contrast layout adjectives (e.g. "architectural minimalism with micro-friction hover states")
- features (array of objects): 3 custom elite feature components for their project. Each object must have:
   - title (string)
   - description (string)
- techStack (array of strings): 4 to 5 premium development terms matching this build. E.g. ["React 19", "Tailwind CSS v4", "motion (Framer)", "Three.js", "GSAP ScrollTrigger"].`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            conceptName: { type: Type.STRING },
            tagline: { type: Type.STRING },
            elevatorPitch: { type: Type.STRING },
            colorPalette: {
              type: Type.OBJECT,
              properties: {
                primary: { type: Type.STRING },
                secondary: { type: Type.STRING },
                background: { type: Type.STRING },
                ambience: { type: Type.STRING },
              },
              required: ["primary", "secondary", "background", "ambience"],
            },
            designDirection: {
              type: Type.OBJECT,
              properties: {
                typography: { type: Type.STRING },
                interactiveFocus: { type: Type.STRING },
                visualMood: { type: Type.STRING },
              },
              required: ["typography", "interactiveFocus", "visualMood"],
            },
            features: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  title: { type: Type.STRING },
                  description: { type: Type.STRING },
                },
                required: ["title", "description"],
              },
            },
            techStack: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
            },
          },
          required: ["conceptName", "tagline", "elevatorPitch", "colorPalette", "designDirection", "features", "techStack"],
        },
      },
    });

    const textOutput = response.text || "";
    const proposal = JSON.parse(textOutput.trim());
    return res.json({ ...proposal, isFallback: false });
  } catch (error: any) {
    console.error("Gemini creative briefing error:", error);
    return res.status(500).json({ error: "Failed to generate design concept. The creative pipeline had a thermal cycle error. Let's try again." });
  }
});

// Serve Vite dynamic client files or compiled production bundle
const startServer = async () => {
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
    console.log("Mounted Vite development middleware client-side routing.");
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
    console.log("Serving compiled static assets from dist/");
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Cinematic Portfolio Server listening at http://localhost:${PORT}`);
  });
};

startServer().catch((error) => {
  console.error("Failed to start server:", error);
});
