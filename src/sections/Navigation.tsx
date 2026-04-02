import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { Menu, X, GitBranch, Sparkles } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const navRef = useRef<HTMLElement>(null);

  const navLinks = [
    { name: 'about', label: 'About', href: '#about' },
    { name: 'skills', label: 'Skills', href: '#skills' },
    { name: 'projects', label: 'Projects', href: '#projects' },
    { name: 'experience', label: 'Experience', href: '#experience' },
    { name: 'contact', label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navLinks.map(link => link.name);
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, delay: 0.5, ease: 'power3.out' }
    );
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 opacity-0 ${
          isScrolled
            ? 'bg-[var(--bg-surface)]/95 backdrop-blur-md border-b border-[var(--border)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-2 font-mono text-sm"
            >
              <Sparkles size={16} className="text-[var(--accent-pink)]" />
              <span className="text-[var(--text-primary)] font-semibold">neha</span>
              <span className="text-[var(--text-muted)]">@</span>
              <span className="text-[var(--accent-lavender)]">portfolio</span>
              <span className="text-[var(--text-muted)]">:~$</span>
            </a>

            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-3 py-1.5 rounded text-sm font-mono transition-all ${
                    activeSection === link.name
                      ? 'text-[var(--accent-lavender)] bg-[var(--bg-elevated)]'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="hidden md:flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-[var(--accent-lavender)] to-[var(--accent-purple)] text-[var(--bg-primary)] text-sm font-medium rounded-lg hover:brightness-110 transition-all"
            >
              Let&apos;s Talk
            </a>

            <button
              className="md:hidden p-2 text-[var(--text-primary)]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-[var(--bg-surface)] border-b border-[var(--border)] transition-all duration-300 ${
            isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`block px-3 py-2 rounded text-sm font-mono ${
                  activeSection === link.name
                    ? 'text-[var(--accent-lavender)] bg-[var(--bg-elevated)]'
                    : 'text-[var(--text-secondary)]'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="block px-3 py-2 mt-2 bg-gradient-to-r from-[var(--accent-lavender)] to-[var(--accent-purple)] text-[var(--bg-primary)] text-sm font-medium rounded-lg text-center"
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      </nav>

      <div className={`fixed bottom-0 left-0 right-0 z-50 bg-[var(--bg-elevated)] border-t border-[var(--border)] transition-transform duration-300 ${
        isScrolled ? 'translate-y-0' : 'translate-y-full'
      }`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-6 text-xs font-mono">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 text-[var(--text-secondary)]">
                <GitBranch size={12} className="text-[var(--accent-pink)]" />
                <span>main</span>
              </div>
              <div className="text-[var(--text-muted)]">
                {activeSection ? `${activeSection}.tsx` : 'portfolio.tsx'}
              </div>
            </div>

            <div className="flex items-center gap-4 text-[var(--text-muted)]">
              <span>UTF-8</span>
              <span>TypeScript</span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[var(--accent-lavender)]" />
                Ready
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
