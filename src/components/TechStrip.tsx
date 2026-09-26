import { TECH_STRIP } from '@/data/portfolio';

export default function TechStrip() {
  const doubled = [...TECH_STRIP, ...TECH_STRIP];
  return (
    <div className="relative border-y border-white/[0.05] bg-ink-900/40 py-6 overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink-950 to-transparent z-10 pointer-events-none" />
      <div className="flex w-max animate-marquee">
        {doubled.map((tech, i) => (
          <div
            key={`${tech}-${i}`}
            className="flex items-center gap-3 mx-8 shrink-0"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent-500/40" />
            <span className="font-display text-lg text-gray-400 hover:text-white transition-colors duration-300 whitespace-nowrap">
              {tech}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
