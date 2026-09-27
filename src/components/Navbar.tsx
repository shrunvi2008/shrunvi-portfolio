import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '@/data/portfolio';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Active section detection via IntersectionObserver
  useEffect(() => {
    const sections = NAV_LINKS.map((link) =>
      document.querySelector(link.href),
    ).filter(Boolean) as Element[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.2, rootMargin: '-80px 0px -50% 0px' },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleClick = (href: string) => {
    setOpen(false);
    setActive(href);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ink-950/80 backdrop-blur-xl border-b border-white/[0.06]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="section-padding h-16 md:h-20 flex items-center justify-between">
        <a
          href="#home"
          className="font-display font-bold text-sm md:text-base tracking-wide text-white hover:text-accent-300 transition-colors duration-300"
        >
          SHRUNVI KAMOLKAR
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.href;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => handleClick(link.href)}
                  className={`relative px-3.5 py-2 text-sm rounded-lg transition-colors duration-300 hover:bg-white/[0.04] ${
                    isActive
                      ? 'text-white'
                      : 'text-gray-400 hover:text-accent-300'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute left-1/2 -translate-x-1/2 bottom-1 h-px bg-accent-400 rounded-full transition-all duration-300 ${
                      isActive
                        ? 'w-5 opacity-100 shadow-[0_0_6px_1px_rgba(47,143,255,0.5)]'
                        : 'w-0 opacity-0'
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 text-gray-300 hover:text-accent-300 transition-colors duration-300"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="section-padding pb-6 flex flex-col gap-1 bg-ink-950/95 backdrop-blur-xl border-b border-white/[0.06]">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.href;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => handleClick(link.href)}
                  className={`block px-4 py-3 text-sm rounded-lg transition-colors duration-300 ${
                    isActive
                      ? 'text-accent-300 bg-accent-500/[0.06]'
                      : 'text-gray-300 hover:text-accent-300 hover:bg-white/[0.04]'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
