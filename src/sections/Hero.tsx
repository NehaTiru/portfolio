import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Hero = () => {
  const terminalRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [typedLines, setTypedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const commands = [
    { cmd: 'whoami', output: 'Neha Tirunagiri' },
    { cmd: 'cat passion.txt', output: 'Building intelligent solutions with data & code' },
    { cmd: 'cat about.txt', output: 'CS @ Iowa State | Data Science & AI Enthusiast' },
  ];

  const skills = ['Python', 'Data Analysis', 'React', 'AI/ML'];
  const socials = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/NehaTiru', color: 'text-[var(--accent-pink)]' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/neha-tirunagiri', color: 'text-[var(--accent-lavender)]' },
    { name: 'Email', icon: Mail, url: 'mailto:ne2004hat@gmail.com', color: 'text-[var(--accent-mint)]' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        terminalRef.current,
        { opacity: 0, scale: 0.9, y: 30 },
        { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      );

      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.8, x: 50 },
        { opacity: 1, scale: 1, x: 0, duration: 0.8, delay: 0.3, ease: 'power3.out' }
      );
    }, terminalRef);

    const typeSequence = async () => {
      for (let i = 0; i < commands.length; i++) {
        setCurrentLine(i);
        await new Promise(r => setTimeout(r, 500));
        
        const cmd = commands[i].cmd;
        for (let j = 0; j <= cmd.length; j++) {
          setTypedLines(prev => {
            const newLines = [...prev];
            newLines[i * 2] = cmd.slice(0, j);
            return newLines;
          });
          await new Promise(r => setTimeout(r, 40));
        }
        
        await new Promise(r => setTimeout(r, 300));
        
        setTypedLines(prev => {
          const newLines = [...prev];
          newLines[i * 2 + 1] = commands[i].output;
          return newLines;
        });
        
        await new Promise(r => setTimeout(r, 600));
      }
    };

    const timer = setTimeout(typeSequence, 1000);
    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, []);

  // 3D tilt effect for image
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 20;
    const y = (e.clientY - rect.top - rect.height / 2) / 20;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      
      {/* Floating code snippets */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-[var(--text-muted)] font-mono text-xs opacity-20 animate-float">
          {'import { Passion } from "heart";'}
        </div>
        <div className="absolute top-40 right-20 text-[var(--text-muted)] font-mono text-xs opacity-20 animate-float" style={{ animationDelay: '1s' }}>
          {'const dream = "big"; '}
        </div>
        <div className="absolute bottom-40 left-20 text-[var(--text-muted)] font-mono text-xs opacity-20 animate-float" style={{ animationDelay: '2s' }}>
          {'while (learning) { grow(); }'}
        </div>
        <div className="absolute bottom-20 right-10 text-[var(--text-muted)] font-mono text-xs opacity-20 animate-float" style={{ animationDelay: '0.5s' }}>
          {'return <Impact />;'}
        </div>
      </div>

      <div className="relative w-full max-w-6xl mx-auto grid lg:grid-cols-5 gap-8 items-center">
        {/* Main terminal - takes 3 columns */}
        <div 
          ref={terminalRef}
          className="lg:col-span-3 terminal-window opacity-0"
        >
          {/* Terminal header */}
          <div className="terminal-header">
            <div className="flex gap-2">
              <div className="terminal-button red" />
              <div className="terminal-button yellow" />
              <div className="terminal-button green" />
            </div>
            <span className="ml-4 text-[var(--text-secondary)] text-sm font-mono">
              neha@portfolio: ~
            </span>
          </div>

          {/* Terminal content */}
          <div className="terminal-content text-[var(--text-primary)]">
            {/* Welcome message */}
            <div className="mb-4 text-[var(--comment)]">
              {'# Welcome! Last login: ' + new Date().toLocaleDateString()}
            </div>

            {/* Typed commands */}
            {commands.map((_, index) => (
              <div key={index} className="mb-3">
                <div className="flex items-center">
                  <span className="text-[var(--accent-lavender)] mr-2">$</span>
                  <span className="text-[var(--text-primary)]">
                    {typedLines[index * 2] || ''}
                  </span>
                  {currentLine === index && !typedLines[index * 2 + 1] && (
                    <span className="cursor-blink ml-0.5 w-2 h-4 bg-[var(--accent-lavender)]" />
                  )}
                </div>
                
                {typedLines[index * 2 + 1] && (
                  <div className="mt-1 text-[var(--accent-mint)] animate-[reveal_0.3s_ease-out]">
                    {'> ' + typedLines[index * 2 + 1]}
                  </div>
                )}
              </div>
            ))}

            {/* Skills command */}
            {typedLines.length >= 6 && (
              <div className="mt-4 animate-[reveal_0.5s_ease-out]">
                <div className="flex items-center mb-2">
                  <span className="text-[var(--accent-lavender)] mr-2">$</span>
                  <span>ls skills/</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {skills.map((skill, i) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-[var(--bg-elevated)] border border-[var(--border)] rounded-full text-sm text-[var(--accent-lavender)] hover:border-[var(--accent-lavender)] hover:shadow-[0_0_12px_rgba(196,181,253,0.25)] transition-all cursor-default"
                      style={{ animationDelay: `${i * 100}ms` }}
                    >
                      [{skill}]
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Connect command */}
            {typedLines.length >= 6 && (
              <div className="mt-6 animate-[reveal_0.5s_ease-out]">
                <div className="flex items-center mb-3">
                  <span className="text-[var(--accent-lavender)] mr-2">$</span>
                  <span>./connect.sh</span>
                </div>
                <div className="flex gap-4 flex-wrap">
                  {socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 bg-[var(--bg-elevated)] border border-[var(--border)] rounded-lg hover:border-[var(--accent-lavender)] transition-all group`}
                    >
                      <social.icon size={18} className={social.color} />
                      <span className="text-[var(--text-primary)] group-hover:text-[var(--accent-lavender)] transition-colors">
                        {social.name}
                      </span>
                      <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-[var(--accent-lavender)]" />
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Final prompt */}
            {typedLines.length >= 6 && (
              <div className="mt-6 flex items-center animate-[reveal_0.5s_ease-out]">
                <span className="text-[var(--accent-lavender)] mr-2">$</span>
                <span className="cursor-blink w-2 h-4 bg-[var(--accent-lavender)]" />
              </div>
            )}
          </div>
        </div>

        {/* 3D Profile Image - takes 2 columns */}
        <div 
          ref={imageRef}
          className="lg:col-span-2 flex justify-center lg:justify-end opacity-0"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div 
            className="relative group cursor-pointer"
            style={{
              transform: `perspective(1000px) rotateY(${mousePosition.x}deg) rotateX(${-mousePosition.y}deg)`,
              transition: 'transform 0.1s ease-out',
            }}
          >
            {/* Glow effect behind image */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[var(--accent-lavender)] via-[var(--accent-pink)] to-[var(--accent-mint)] rounded-2xl opacity-30 blur-xl group-hover:opacity-50 transition-opacity duration-500" />
            
            {/* Image container */}
            <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-2xl overflow-hidden border-2 border-[var(--border)] group-hover:border-[var(--accent-lavender)] transition-all duration-300 shadow-2xl">
              <img
                src="/images/profile-3d.png"
                alt="Neha Tirunagiri"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)]/40 via-transparent to-transparent" />
            </div>

            {/* Floating badges */}
            <div className="absolute -bottom-3 -right-3 px-3 py-1.5 bg-[var(--bg-elevated)] border border-[var(--border)] rounded-full text-xs text-[var(--accent-lavender)] font-mono shadow-lg">
              ✨ Available for hire
            </div>

            <div className="absolute -top-3 -left-3 px-3 py-1.5 bg-[var(--bg-elevated)] border border-[var(--border)] rounded-full text-xs text-[var(--accent-pink)] font-mono shadow-lg">
              💜 CS @ ISU
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--text-muted)]">
        <span className="text-xs font-mono">scroll to explore</span>
        <div className="w-6 h-10 border border-[var(--border)] rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-[var(--accent-lavender)] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
