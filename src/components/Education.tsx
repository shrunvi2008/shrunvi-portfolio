import { GraduationCap, Calendar } from 'lucide-react';

export default function Education() {
  return (
    <section className="section-padding py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="reveal">
          <span className="section-label">Education</span>
          <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl text-white">Education</h2>
        </div>

        <div className="mt-14 max-w-3xl">
          <div className="reveal card-surface glow-border p-7 md:p-8 transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-accent-500/20 to-violet2-500/20 border border-white/10 flex items-center justify-center">
                <GraduationCap className="text-accent-300" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-display font-bold text-xl text-white">
                  B.Tech — Computer Science Engineering
                </h3>
                <p className="mt-1.5 text-sm text-gray-400">
                  Malla Reddy Vishwavidhyapeeth
                </p>
                <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.07]">
                  <Calendar size={14} className="text-accent-400" />
                  <span className="text-sm text-gray-300">Expected Graduation: 2029</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
