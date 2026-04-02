import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, Award, Quote, BookOpen, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        leftPanelRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: leftPanelRef.current,
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        rightPanelRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: rightPanelRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { value: '3+', label: 'Years', sublabel: 'Intern Experience' },
    { value: '10+', label: 'Projects', sublabel: 'Built' },
    { value: '8', label: 'Roles', sublabel: 'Held' },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 px-4 overflow-hidden"
    >
      {/* Section title */}
      <div className="max-w-6xl mx-auto mb-12">
        <div className="flex items-center gap-3 text-[var(--text-muted)] font-mono text-sm mb-4">
          <span className="text-[var(--accent-lavender)]">##</span>
          <span>About Me</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
        {/* Left panel - Markdown viewer */}
        <div ref={leftPanelRef} className="terminal-window opacity-0">
          <div className="terminal-header">
            <div className="flex gap-2">
              <div className="terminal-button red" />
              <div className="terminal-button yellow" />
              <div className="terminal-button green" />
            </div>
            <span className="ml-4 text-[var(--text-secondary)] text-sm font-mono">
              README.md
            </span>
          </div>
          
          <div className="terminal-content font-mono text-sm">
            <div className="space-y-4">
              <div>
                <span className="text-[var(--accent-pink)]"># </span>
                <span className="text-[var(--text-primary)] text-lg font-semibold">About Me</span>
              </div>

              <div className="mt-6">
                <div className="flex items-center gap-2 text-[var(--accent-lavender)] mb-2">
                  <GraduationCap size={16} />
                  <span className="text-[var(--accent-pink)]">## </span>
                  <span>Education</span>
                </div>
                
                <div className="ml-4 space-y-2">
                  <div className="flex items-start gap-2">
                    <Sparkles size={14} className="text-[var(--accent-rose)] mt-1" />
                    <div>
                      <span className="text-[var(--text-primary)] font-semibold">Iowa State University</span>
                      <div className="text-[var(--text-secondary)] text-xs mt-1">
                        <div>• BS Computer Science</div>
                        <div>• Minor: Data Science & Applied AI</div>
                        <div>• GPA: 3.70 | Dean&apos;s List (3 years)</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <div className="flex items-center gap-2 text-[var(--accent-lavender)] mb-2">
                  <Quote size={16} />
                  <span className="text-[var(--accent-pink)]">## </span>
                  <span>Philosophy</span>
                </div>
                
                <div className="ml-4 border-l-2 border-[var(--border)] pl-4">
                  <p className="text-[var(--text-secondary)] italic">
                    &quot;Dream, dream, dream. Dreams transform into thoughts, and thoughts result in action.&quot;
                  </p>
                  <p className="text-[var(--text-muted)] text-xs mt-2">
                    — A.P.J. Abdul Kalam
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <div className="flex items-center gap-2 text-[var(--accent-lavender)] mb-2">
                  <BookOpen size={16} />
                  <span className="text-[var(--accent-pink)]">## </span>
                  <span>Bio</span>
                </div>
                
                <div className="ml-4 text-[var(--text-secondary)] leading-relaxed">
                  Hi, I&apos;m <span className="text-[var(--accent-lavender)]">Neha</span>, a Computer Science 
                  student at Iowa State University who loves turning data into insights and ideas into 
                  impactful solutions. Whether it&apos;s analyzing complex datasets, building intelligent 
                  systems, or creating seamless user experiences I&apos;m passionate about using technology 
                  to make a difference.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right panel - Preview with stats */}
        <div ref={rightPanelRef} className="space-y-6 opacity-0">
          {/* Profile card */}
          <div className="terminal-window p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--accent-lavender)] to-[var(--accent-pink)] flex items-center justify-center text-2xl font-bold text-[var(--bg-primary)]">
                NT
              </div>
              <div>
                <h3 className="text-[var(--text-primary)] font-semibold text-lg">Neha Tirunagiri</h3>
                <p className="text-[var(--text-secondary)] text-sm">Developer & Data Enthusiast</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-[var(--bg-elevated)] rounded text-xs text-[var(--accent-lavender)] border border-[var(--border)]">
                @ Iowa State
              </span>
              <span className="px-2 py-1 bg-[var(--bg-elevated)] rounded text-xs text-[var(--accent-pink)] border border-[var(--border)]">
                Dean&apos;s List
              </span>
              <span className="px-2 py-1 bg-[var(--bg-elevated)] rounded text-xs text-[var(--accent-mint)] border border-[var(--border)]">
                Data Lover
              </span>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="terminal-window p-4 text-center card-hover"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-2xl font-bold text-[var(--accent-lavender)] font-mono">
                  {stat.value}
                </div>
                <div className="text-[var(--text-primary)] text-sm mt-1">
                  {stat.label}
                </div>
                <div className="text-[var(--text-muted)] text-xs">
                  {stat.sublabel}
                </div>
              </div>
            ))}
          </div>

          {/* Quick info */}
          <div className="terminal-window p-6">
            <h4 className="text-[var(--text-primary)] font-semibold mb-4 flex items-center gap-2">
              <Award size={18} className="text-[var(--accent-pink)]" />
              Highlights
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <span className="text-[var(--accent-lavender)]">✦</span>
                <span className="text-[var(--text-secondary)]">First Place - PI515 AI Challenge (Statewide)</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[var(--accent-lavender)]">✦</span>
                <span className="text-[var(--text-secondary)]">Best Project Award - COM S 309</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[var(--accent-lavender)]">✦</span>
                <span className="text-[var(--text-secondary)]">Undergraduate Research Assistant</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[var(--accent-lavender)]">✦</span>
                <span className="text-[var(--text-secondary)]">Academic Excellence Award (3 Consecutive Years)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
