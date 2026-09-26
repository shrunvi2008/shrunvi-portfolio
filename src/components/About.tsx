import { ABOUT_CARDS } from '@/data/portfolio';

export default function About() {
  return (
    <section id="about" className="section-padding py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="reveal">
          <span className="section-label">About</span>
          <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl text-white">
            About Me
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-gray-400 leading-relaxed">
            I'm a Computer Science Engineering student passionate about software development, AI and
            building practical technology solutions. I enjoy turning ideas into working projects
            while continuously strengthening my programming, development and problem-solving skills.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {ABOUT_CARDS.map((card, i) => (
            <div
              key={card.num}
              className="reveal card-surface glow-border p-6 group transition-all duration-300 hover:-translate-y-1"
              data-reveal-delay={i * 120}
            >
              <span className="font-mono text-xs text-accent-400/70">{card.num}</span>
              <h3 className="mt-4 font-display font-semibold text-lg text-white group-hover:text-accent-200 transition-colors">
                {card.title}
              </h3>
              <p className="mt-2.5 text-sm text-gray-400 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
