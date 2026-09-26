import { ArrowUpRight } from 'lucide-react';
import { GITHUB_URL } from '@/data/portfolio';

export default function GitHubCTA() {
  return (
    <section className="section-padding pb-24 md:pb-32">
      <div className="max-w-5xl mx-auto">
        <div className="reveal relative card-surface glow-border p-10 md:p-14 text-center overflow-hidden">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent-500/[0.04] via-transparent to-violet2-500/[0.04]" />
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl" />

          <div className="relative">
            <h2 className="font-display font-bold text-2xl md:text-3xl text-white">
              More of my work lives on GitHub.
            </h2>
            <div className="mt-7">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Visit GitHub <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
