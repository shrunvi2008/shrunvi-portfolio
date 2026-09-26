import { ArrowRight, Github, Download } from 'lucide-react';
import { GITHUB_URL } from '@/data/portfolio';

export default function Hero() {
  return (
    <section id="home" className="section-padding pt-32 md:pt-36 pb-16 md:pb-24 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* LEFT */}
        <div>
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent-500/20 bg-accent-500/[0.06] text-xs font-mono uppercase tracking-wider text-accent-300 animate-fade-up"
            style={{ animationDelay: '0s' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent-400 animate-glow-pulse" />
            Open to Internship Opportunities
          </div>

          <h1
            className="mt-6 font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-white animate-fade-up"
            style={{ animationDelay: '0.1s' }}
          >
            Computer Science Student
            <br />
            <span className="text-gradient">& Developer</span>
          </h1>

          <p
            className="mt-6 max-w-xl text-base lg:text-lg text-gray-400 leading-relaxed animate-fade-up"
            style={{ animationDelay: '0.25s' }}
          >
            I'm Shrunvi Kamolkar, a Computer Science Engineering student who enjoys building
            practical software projects, exploring AI, and continuously improving my programming
            and problem-solving skills.
          </p>

          <div
            className="mt-8 flex flex-wrap gap-3 animate-fade-up"
            style={{ animationDelay: '0.4s' }}
          >
            <a href="#projects" className="btn-primary">
              View Projects <ArrowRight size={16} />
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost hover:text-accent-200"
            >
              <Github size={16} /> GitHub
            </a>
            <a href="#contact" className="btn-ghost hover:text-accent-200">
              <Download size={16} /> Download Resume
            </a>
          </div>
        </div>

        {/* RIGHT — profile frame */}
        <div
          className="relative animate-scale-in"
          style={{ animationDelay: '0.3s' }}
        >
          {/* Decorative glows */}
          <div className="absolute -inset-4 bg-gradient-to-br from-accent-500/10 via-transparent to-violet2-500/10 rounded-3xl blur-2xl animate-glow-pulse" />
          <div className="absolute -top-3 -right-3 w-24 h-24 border border-accent-500/20 rounded-2xl animate-float-slow" />
          <div className="absolute -bottom-4 -left-4 w-20 h-20 border border-violet2-500/15 rounded-full animate-float-slower" />

          {/* Frame */}
          <div className="relative glow-border rounded-3xl bg-ink-850/80 border border-white/[0.08] p-2 overflow-hidden">
            <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-ink-800 via-ink-850 to-ink-900 flex items-center justify-center relative overflow-hidden">
              <img
                src="/assets/images/WhatsApp_Image_2026-09-15_at_8.29.08_PM.jpeg"
                alt="Shrunvi Kamolkar"
                className="absolute inset-0 z-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-ink-950/25 via-transparent to-ink-900/10" />

              {/* Grid pattern */}
              <div
                className="absolute inset-0 z-10 opacity-[0.04]"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
                  backgroundSize: '32px 32px',
                }}
              />

              {/* Corner accents */}
              <div className="absolute top-3 left-3 z-20 w-6 h-6 border-l border-t border-accent-500/30 rounded-tl-lg" />
              <div className="absolute bottom-3 right-3 z-20 w-6 h-6 border-r border-b border-violet2-500/30 rounded-br-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
