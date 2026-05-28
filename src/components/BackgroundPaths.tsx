import { motion } from "motion/react";

interface FloatingPathsProps {
  position: number;
}

function FloatingPaths({ position }: FloatingPathsProps) {
  const paths = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 18 * position} -${189 + i * 22}C-${
      380 - i * 18 * position
    } -${189 + i * 22} -${312 - i * 18 * position} ${216 - i * 22} ${
      152 - i * 18 * position
    } ${343 - i * 22}C${616 - i * 18 * position} ${470 - i * 22} ${
      684 - i * 18 * position
    } ${875 - i * 22} ${684 - i * 18 * position} ${875 - i * 22}`,
    width: 0.6 + i * 0.12,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none opacity-80 sm:opacity-50">
      <svg
        className="w-full h-full text-brand-crimson"
        viewBox="0 0 696 316"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.08 + path.id * 0.04}
            initial={{ pathLength: 0.2, opacity: 0.3 }}
            animate={{
              pathLength: 1,
              opacity: [0.2, 0.6, 0.2],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 15 + Math.random() * 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export default function BackgroundPaths() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
      <FloatingPaths position={1} />
      <FloatingPaths position={-1} />
    </div>
  );
}
