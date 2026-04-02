import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [hoveredCommit, setHoveredCommit] = useState<number | null>(null);

  const experiences = [
    {
      hash: '8a3f2d1',
      title: 'Software Developer Intern',
      company: 'Buildertrend',
      location: 'Omaha, Nebraska',
      period: 'May 2025 - Aug 2025',
      type: 'Internship',
      description: [
        'Developed and deployed production-ready features for a React-based SaaS platform using ASP.NET Core and SQL Server',
        'Engineered full-stack features using React.js, TypeScript, JavaScript, and C# (.NET)',
        'Resolved 20+ production support tickets',
        'Delivered features in Agile environment (Scrum, Kanban)',
      ],
      skills: ['React', 'TypeScript', 'C#', '.NET', 'Agile'],
      branch: 'main',
    },
    {
      hash: '2d7a1f9',
      title: 'Undergraduate Research Assistant',
      company: 'ISU Department of Computer Science',
      location: 'Ames, Iowa',
      period: 'Aug 2025 - Present',
      type: 'Research',
      description: [
        'Building Split Fed, Split Learning, and Federated Learning pipelines',
        'Implementing client-server ResNet-18 partitioning',
        'Engineered HAM10000 medical imaging dataset pipeline',
        'Developing distributed training workflows on A100 GPUs',
      ],
      skills: ['PyTorch', 'Deep Learning', 'Distributed Systems', 'GPU'],
      branch: 'research/federated-learning',
    },
    {
      hash: '9c4e8b2',
      title: 'AI Research Intern',
      company: 'ISU Extension and Outreach',
      location: 'Ames, Iowa',
      period: 'May 2024 - July 2024',
      type: 'Internship',
      description: [
        'Developed AI-powered tool integrating Large Language Models (LLMs)',
        'Utilized React.js, Llama-Index, and Google Earth Engine',
        'Created custom SQL Agent for structured datasets',
        'Combined satellite imagery with Segformer models',
      ],
      skills: ['React', 'LLMs', 'Google Earth Engine', 'SQL'],
      branch: 'feature/ai-research',
    },
    {
      hash: '5e8c3a7',
      title: 'Undergraduate Teaching Assistant',
      company: 'ISU Department of ECE',
      location: 'Ames, Iowa',
      period: 'Aug 2025 - Jan 2026',
      type: 'Teaching',
      description: [
        'Helped students build Android apps with Java and Android Studio',
        'Guided students through debugging and OOP concepts',
        'Worked with instructors for smooth lab operations',
      ],
      skills: ['Java', 'Android', 'OOP', 'Mentorship'],
      branch: 'teaching/android-dev',
    },
    {
      hash: '3f7b2e5',
      title: 'Computer Science Help Room Tutor',
      company: 'Iowa State University',
      location: 'Ames, Iowa',
      period: 'Aug 2025 - Dec 2025',
      type: 'Tutoring',
      description: [
        'Provided one-on-one tutoring for CS students',
        'Helped with programming assignments and concepts',
        'Explained algorithms, data structures, and debugging techniques',
      ],
      skills: ['Teaching', 'Problem Solving', 'Communication'],
      branch: 'tutoring/cs-help',
    },
    {
      hash: '7a1d4c6',
      title: 'Information Technology Support Specialist',
      company: 'ISU Department of ECE',
      location: 'Ames, Iowa',
      period: 'Oct 2023 - May 2025',
      type: 'Part-time',
      description: [
        'Provided technical support for faculty and students',
        'Managed computer labs and equipment',
        'Troubleshot hardware and software issues',
      ],
      skills: ['IT Support', 'Troubleshooting', 'Customer Service'],
      branch: 'support/it-specialist',
    },
    {
      hash: '1b6d4e8',
      title: 'Data Research Analyst Intern',
      company: 'Kingland',
      location: 'Ames, Iowa',
      period: 'May 2023 - Aug 2023',
      type: 'Internship',
      description: [
        'Provided data maintenance for capital markets and banking firms',
        'Conducted internet-based research for financial datasets',
        'Ensured data accuracy for client deliverables',
      ],
      skills: ['Data Analysis', 'Research', 'Financial Data'],
      branch: 'feature/data-analysis',
    },
    {
      hash: '4c9a2f1',
      title: 'Mathematics Tutor',
      company: 'ISU Academic Success Center',
      location: 'Ames, Iowa',
      period: 'Jan 2023 - May 2023',
      type: 'Tutoring',
      description: [
        'Tutored students in mathematics courses',
        'Helped students understand complex mathematical concepts',
        'Developed personalized learning strategies',
      ],
      skills: ['Mathematics', 'Teaching', 'Patience'],
      branch: 'tutoring/math',
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const commits = timelineRef.current?.querySelectorAll('.commit-item');
      if (commits) {
        gsap.fromTo(
          commits,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: timelineRef.current,
              start: 'top 80%',
            },
          }
        );
      }

      const line = timelineRef.current?.querySelector('.timeline-line');
      if (line) {
        gsap.fromTo(
          line,
          { scaleY: 0 },
          {
            scaleY: 1,
            duration: 1.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: timelineRef.current,
              start: 'top 80%',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-24 px-4 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto mb-12">
        <div className="flex items-center gap-3 text-[var(--text-muted)] font-mono text-sm mb-4">
          <span className="text-[var(--accent-lavender)]">##</span>
          <span>Work Experience</span>
        </div>
        <h2 className="text-3xl font-bold text-[var(--text-primary)]">
          Experience<span className="text-[var(--accent-pink)]">.git log</span>
        </h2>
      </div>

      <div 
        ref={timelineRef}
        className="max-w-4xl mx-auto terminal-window"
      >
        <div className="terminal-header">
          <span className="text-[var(--text-secondary)] text-sm font-mono">
            TERMINAL
          </span>
        </div>

        <div className="p-6 font-mono text-sm relative">
          <div className="flex items-center gap-2 text-[var(--text-muted)] mb-6">
            <span className="text-[var(--accent-lavender)]">$</span>
            <span>git log --oneline --graph --all</span>
          </div>

          <div className="relative">
            <div className="absolute left-[7px] top-0 bottom-0 w-0.5 bg-[var(--border)] timeline-line origin-top" />

            <div className="space-y-5">
              {experiences.map((exp, index) => (
                <div
                  key={exp.hash}
                  className="commit-item relative flex gap-4 opacity-0"
                  onMouseEnter={() => setHoveredCommit(index)}
                  onMouseLeave={() => setHoveredCommit(null)}
                >
                  <div className="relative z-10">
                    <div 
                      className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                        hoveredCommit === index
                          ? 'bg-[var(--accent-lavender)] border-[var(--accent-lavender)] scale-125'
                          : 'bg-[var(--bg-surface)] border-[var(--accent-lavender)]'
                      }`}
                    >
                      {index === 0 && (
                        <span className="absolute inset-0 rounded-full bg-[var(--accent-lavender)] animate-ping opacity-50" />
                      )}
                    </div>
                  </div>

                  <div 
                    className={`flex-1 pb-5 border-b border-[var(--border)] transition-all duration-300 ${
                      hoveredCommit === index ? 'bg-[var(--bg-elevated)] -mx-2 px-2 py-2 rounded' : ''
                    }`}
                  >
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-[var(--accent-pink)] font-semibold">
                        {exp.hash}
                      </span>
                      {index === 0 && (
                        <span className="px-2 py-0.5 bg-[var(--accent-lavender)]/20 text-[var(--accent-lavender)] text-xs rounded">
                          HEAD -&gt; main
                        </span>
                      )}
                      <span className="text-[var(--text-muted)] text-xs">
                        ({exp.branch})
                      </span>
                    </div>

                    <h3 className="text-[var(--text-primary)] font-semibold mb-1">
                      {exp.title}
                    </h3>

                    <div className="flex flex-wrap items-center gap-4 text-[var(--text-secondary)] text-xs mb-3">
                      <span className="flex items-center gap-1">
                        <Briefcase size={12} />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={12} />
                        {exp.location}
                      </span>
                    </div>

                    <div 
                      className={`overflow-hidden transition-all duration-300 ${
                        hoveredCommit === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <ul className="space-y-1 mb-3">
                        {exp.description.map((desc, i) => (
                          <li key={i} className="text-[var(--text-muted)] text-xs flex items-start gap-2">
                            <span className="text-[var(--accent-lavender)] mt-0.5">•</span>
                            {desc}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-0.5 bg-[var(--bg-surface)] border border-[var(--border)] rounded text-xs text-[var(--text-secondary)]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2">
            <span className="text-[var(--accent-lavender)]">$</span>
            <span className="cursor-blink w-2 h-4 bg-[var(--accent-lavender)]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
