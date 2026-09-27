import { useState } from 'react';
import { Github, Send } from 'lucide-react';
import { GITHUB_URL, EMAIL } from '@/data/portfolio';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

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
          <form onSubmit={handleSubmit} className="mt-9 max-w-xl mx-auto text-left space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact-name" className="block text-sm text-gray-400 mb-1.5">Name</label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-ink-850/60 border border-white/[0.06] text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-accent-500/40 transition-colors duration-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm text-gray-400 mb-1.5">Email</label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-ink-850/60 border border-white/[0.06] text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-accent-500/40 transition-colors duration-300"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="contact-message" className="block text-sm text-gray-400 mb-1.5">Message</label>
              <textarea
                id="contact-message"
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-ink-850/60 border border-white/[0.06] text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-accent-500/40 transition-colors duration-300 resize-none"
                placeholder="Tell me about your project or opportunity..."
              />
            </div>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button type="submit" className="btn-primary">
                <Send size={16} /> Send Message
              </button>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost hover:text-accent-200"
              >
                <Github size={16} /> GitHub
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
