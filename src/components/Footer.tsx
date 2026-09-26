import { Github, Mail } from 'lucide-react';
import { GITHUB_URL, EMAIL } from '@/data/portfolio';

export default function Footer() {
  return (
    <footer className="section-padding py-10 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">© 2026 Shrunvi Kamolkar</p>

        <div className="flex items-center gap-5">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 hover:text-accent-300 transition-colors duration-300 inline-flex items-center gap-1.5"
          >
            <Github size={15} /> GitHub
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="text-sm text-gray-400 hover:text-accent-300 transition-colors duration-300 inline-flex items-center gap-1.5"
          >
            <Mail size={15} /> Email
          </a>
        </div>

        <p className="text-xs font-mono text-gray-600">Designed with curiosity.</p>
      </div>
    </footer>
  );
}
