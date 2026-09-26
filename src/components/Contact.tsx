import { Mail, Github } from 'lucide-react';
import { GITHUB_URL, EMAIL } from '@/data/portfolio';

export default function Contact() {
  return (
    <section id="contact" className="section-padding py-24 md:py-32">
      <div className="max-w-5xl mx-auto text-center">
        <div className="reveal">
          <span className="section-label">Contact</span>
          <h2 className="mt-4 font-display font-bold text-4xl md:text-5xl text-gradient">
            Let's Build Something.
          </h2>
          <p className="mt-5 text-lg text-gray-400 max-w-xl mx-auto">
            Have an idea, opportunity or project in mind? I'd love to connect.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a href={`mailto:${EMAIL}`} className="btn-primary">
              <Mail size={16} /> Email Me
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost hover:text-accent-200"
            >
              <Github size={16} /> GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
