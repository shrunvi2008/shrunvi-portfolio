import { EXPERIENCE } from '@/data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="section-padding py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="reveal">
          <span className="section-label">Experience</span>
          <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl text-white">
            Experience &amp; Activities
          </h2>
        </div>

        <div className="mt-14 relative max-w-3xl">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent-500/40 via-white/[0.08] to-transparent" />

          {EXPERIENCE.map((item, i) => (
            <div
              key={item.title}
              className="reveal relative pl-10 pb-10 last:pb-0"
              data-reveal-delay={i * 150}
            >
              {/* Dot */}
              <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-ink-850 border-2 border-accent-500/50 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-accent-400" />
              </div>

              <div className="card-surface glow-border p-5 transition-all duration-300 hover:-translate-y-0.5">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-display font-semibold text-white">{item.title}</h3>
                  <span className="shrink-0 text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded-md bg-accent-500/10 text-accent-300 border border-accent-500/15">
                    {item.tag}
                  </span>
                </div>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
