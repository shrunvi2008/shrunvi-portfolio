import { SKILL_GROUPS } from '@/data/portfolio';

export default function Skills() {
  return (
    <section id="skills" className="section-padding py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="reveal">
          <span className="section-label">Skills</span>
          <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl text-white">
            Skills &amp; Technologies
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILL_GROUPS.map((group, i) => (
            <div
              key={group.category}
              className="reveal card-surface glow-border p-6 transition-all duration-300 hover:-translate-y-1"
              data-reveal-delay={i * 100}
            >
              <h3 className="font-mono text-xs uppercase tracking-wider text-accent-400/80">
                {group.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-lg text-sm font-medium bg-white/[0.04] border border-white/[0.07] text-gray-300 hover:border-accent-500/30 hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
