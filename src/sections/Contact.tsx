import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, Linkedin, Globe, MapPin, Send, Terminal, Copy, Check, Heart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/NehaTiru',
      icon: Github,
      command: 'curl -X POST github.com/NehaTiru',
      color: 'text-[var(--accent-pink)]',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/neha-tirunagiri',
      icon: Linkedin,
      command: 'ssh linkedin.com/neha-tirunagiri',
      color: 'text-[var(--accent-lavender)]',
    },
    {
      name: 'Personal Website',
      url: 'https://nehatirunagiri.com',
      icon: Globe,
      command: 'open https://nehatirunagiri.com',
      color: 'text-[var(--accent-mint)]',
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        terminalRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: terminalRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText('ne2004hat@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 px-4 overflow-hidden"
    >
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <div className="flex items-center justify-center gap-3 text-[var(--text-muted)] font-mono text-sm mb-4">
          <span className="text-[var(--accent-lavender)]">##</span>
          <span>Get In Touch</span>
        </div>
        <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">
          Let&apos;s Create Something
          <span className="text-[var(--accent-pink)]"> Beautiful</span>
        </h2>
        <p className="text-[var(--text-secondary)]">
          Open to opportunities in Software Engineering, Data Science, and Business Analysis
        </p>
      </div>

      <div 
        ref={terminalRef}
        className="max-w-3xl mx-auto terminal-window opacity-0"
      >
        <div className="terminal-header">
          <div className="flex gap-2">
            <div className="terminal-button red" />
            <div className="terminal-button yellow" />
            <div className="terminal-button green" />
          </div>
          <span className="ml-4 text-[var(--text-secondary)] text-sm font-mono flex items-center gap-2">
            <Terminal size={14} />
            contact.sh
          </span>
        </div>

        <div className="terminal-content font-mono text-sm space-y-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[var(--accent-lavender)]">$</span>
              <span>echo $CONTACT_EMAIL</span>
            </div>
            <div className="mt-2 flex items-center gap-3">
              <span className="text-[var(--accent-mint)]">&gt; ne2004hat@gmail.com</span>
              <button
                onClick={copyEmail}
                className="p-1.5 hover:bg-[var(--bg-elevated)] rounded transition-colors"
                title="Copy email"
              >
                {copied ? (
                  <Check size={14} className="text-[var(--accent-lavender)]" />
                ) : (
                  <Copy size={14} className="text-[var(--text-muted)]" />
                )}
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="mailto:ne2004hat@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[var(--accent-lavender)] to-[var(--accent-purple)] text-[var(--bg-primary)] rounded-lg hover:brightness-110 transition-all font-medium"
            >
              <Send size={16} />
              Send Email
            </a>
          </div>

          <div className="pt-4 border-t border-[var(--border)]">
            <div className="flex items-center gap-2 text-[var(--comment)] mb-3">
              <span># Connect with me</span>
            </div>

            <div className="space-y-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <div className="flex items-center gap-2 flex-1">
                    <span className="text-[var(--accent-lavender)]">$</span>
                    <span className="text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
                      {link.command}
                    </span>
                  </div>
                  <div className={`flex items-center gap-2 px-3 py-1.5 bg-[var(--bg-elevated)] border border-[var(--border)] rounded-lg group-hover:border-[var(--accent-lavender)] transition-colors`}>
                    <link.icon size={16} className={link.color} />
                    <span className="text-[var(--text-primary)] text-xs">{link.name}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-[var(--border)]">
            <div className="flex items-center gap-2">
              <span className="text-[var(--accent-lavender)]">$</span>
              <span>echo $LOCATION</span>
            </div>
            <div className="mt-2 flex items-center gap-2 text-[var(--accent-mint)]">
              <MapPin size={14} className="text-[var(--accent-pink)]" />
              <span>Ames, Iowa, United States</span>
            </div>
          </div>

          <div className="pt-4">
            <div className="text-[var(--comment)]">
              <span className="text-[var(--accent-pink)]"># </span>
              Let&apos;s build something amazing together! ✨
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[var(--accent-lavender)]">$</span>
            <span className="cursor-blink w-2 h-4 bg-[var(--accent-lavender)]" />
          </div>
        </div>
      </div>

      <footer className="max-w-6xl mx-auto mt-24 pt-8 border-t border-[var(--border)]">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-lg font-bold text-[var(--text-primary)]">
              neha@portfolio
            </span>
            <span className="text-[var(--accent-lavender)]">:~$</span>
          </div>

          <p className="text-[var(--text-muted)] text-sm font-mono flex items-center gap-1">
            Made with <Heart size={14} className="text-[var(--accent-pink)] fill-[var(--accent-pink)]" /> by Neha
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-[var(--text-muted)] hover:text-[var(--accent-lavender)] text-sm font-mono transition-colors"
          >
            cd ~
          </button>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
