import { Award, CheckCircle2 } from 'lucide-react';
import { CERTIFICATIONS } from '@/data/portfolio';

export default function Certifications() {
  return (
    <section className="section-padding pb-24 md:pb-32">
      <div className="max-w-7xl mx-auto">
        <div className="reveal">
          <span className="section-label">Credentials</span>
          <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl text-white">
            Certifications &amp; Achievements
          </h2>
        </div>

        <div className="mt-10 grid sm:grid-cols-3 gap-4">
          {CERTIFICATIONS.map((cert, i) => (
            <div
              key={cert}
              className="reveal card-surface p-5 flex items-start gap-3 transition-all duration-300 hover:-translate-y-1 hover:border-accent-500/20"
              data-reveal-delay={i * 100}
            >
              <CheckCircle2 className="shrink-0 text-accent-400 mt-0.5" size={18} />
              <div>
                <p className="text-sm font-medium text-white leading-snug">{cert}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
