import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronRight, ChevronDown, Folder, FolderOpen, FileCode } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const explorerRef = useRef<HTMLDivElement>(null);
  const [expandedFolders, setExpandedFolders] = useState<string[]>(['languages', 'data', 'frontend', 'tools']);

  const skillCategories = [
    {
      id: 'languages',
      name: 'Languages',
      icon: FileCode,
      skills: [
        { name: 'Python', level: 95 },
        { name: 'SQL', level: 90 },
        { name: 'JavaScript', level: 88 },
        { name: 'TypeScript', level: 85 },
        { name: 'Java', level: 82 },
        { name: 'R', level: 75 },
        { name: 'C++', level: 80 },
        { name: 'C#', level: 70 },
      ],
    },
    {
      id: 'data',
      name: 'Data & Analytics',
      icon: FileCode,
      skills: [
        { name: 'Pandas', level: 92 },
        { name: 'NumPy', level: 88 },
        { name: 'Tableau', level: 85 },
        { name: 'Power BI', level: 82 },
        { name: 'Data Visualization', level: 88 },
        { name: 'Statistical Analysis', level: 80 },
      ],
    },
    {
      id: 'frontend',
      name: 'Web Development',
      icon: FileCode,
      skills: [
        { name: 'React', level: 90 },
        { name: 'HTML/CSS', level: 88 },
        { name: 'Node.js', level: 82 },
        { name: 'FastAPI', level: 78 },
      ],
    },
    {
      id: 'aiml',
      name: 'AI & Machine Learning',
      icon: FileCode,
      skills: [
        { name: 'PyTorch', level: 85 },
        { name: 'TensorFlow', level: 78 },
        { name: 'Computer Vision', level: 82 },
        { name: 'LLMs', level: 80 },
      ],
    },
    {
      id: 'tools',
      name: 'Tools & Cloud',
      icon: FileCode,
      skills: [
        { name: 'Git & GitHub', level: 92 },
        { name: 'AWS', level: 75 },
        { name: 'Docker', level: 72 },
        { name: 'Jupyter', level: 90 },
      ],
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        explorerRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: explorerRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggleFolder = (folderId: string) => {
    setExpandedFolders(prev => 
      prev.includes(folderId) 
        ? prev.filter(id => id !== folderId)
        : [...prev, folderId]
    );
  };

  const renderGitBlocks = (level: number) => {
    const blocks = 10;
    const filledBlocks = Math.round((level / 100) * blocks);
    
    return (
      <div className="flex gap-0.5">
        {Array.from({ length: blocks }).map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-sm transition-all duration-300 ${
              i < filledBlocks 
                ? 'bg-[var(--accent-lavender)]' 
                : 'bg-[var(--border)]'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-24 px-4 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto mb-12">
        <div className="flex items-center gap-3 text-[var(--text-muted)] font-mono text-sm mb-4">
          <span className="text-[var(--accent-lavender)]">##</span>
          <span>Technical Skills</span>
        </div>
        <h2 className="text-3xl font-bold text-[var(--text-primary)]">
          Skills<span className="text-[var(--accent-pink)]">.Explorer</span>
        </h2>
      </div>

      <div 
        ref={explorerRef}
        className="max-w-4xl mx-auto terminal-window opacity-0"
      >
        <div className="terminal-header">
          <span className="text-[var(--text-secondary)] text-sm font-mono">
            EXPLORER
          </span>
        </div>

        <div className="p-4 font-mono text-sm">
          <div className="flex items-center gap-2 text-[var(--text-muted)] mb-2">
            <ChevronDown size={16} />
            <span>SKILLS</span>
          </div>

          <div className="ml-4 space-y-1">
            {skillCategories.map((category) => {
              const isExpanded = expandedFolders.includes(category.id);
              
              return (
                <div key={category.id}>
                  <button
                    onClick={() => toggleFolder(category.id)}
                    className="flex items-center gap-2 w-full text-left hover:bg-[var(--bg-elevated)] rounded px-2 py-1 transition-colors"
                  >
                    {isExpanded ? (
                      <ChevronDown size={16} className="text-[var(--text-muted)]" />
                    ) : (
                      <ChevronRight size={16} className="text-[var(--text-muted)]" />
                    )}
                    {isExpanded ? (
                      <FolderOpen size={16} className="text-[var(--accent-lavender)]" />
                    ) : (
                      <Folder size={16} className="text-[var(--accent-lavender)]" />
                    )}
                    <span className="text-[var(--text-primary)]">{category.name}</span>
                  </button>

                  {isExpanded && (
                    <div className="ml-6 mt-1 space-y-1">
                      {category.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="flex items-center justify-between px-2 py-2 hover:bg-[var(--bg-elevated)] rounded transition-colors group"
                        >
                          <div className="flex items-center gap-3">
                            <category.icon size={14} className="text-[var(--accent-pink)]" />
                            <span className="text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
                              {skill.name}
                            </span>
                          </div>
                          
                          <div className="flex items-center gap-4">
                            {renderGitBlocks(skill.level)}
                            <span className="text-[var(--text-muted)] text-xs w-8 text-right">
                              {skill.level}%
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="px-4 py-2 border-t border-[var(--border)] text-xs text-[var(--text-muted)] font-mono flex justify-between">
          <span>{skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)} skills loaded</span>
          <span>UTF-8</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-8 flex flex-wrap justify-center gap-6 text-sm text-[var(--text-muted)]">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[var(--accent-lavender)] rounded-sm" />
          <span>Expert (90-100%)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[var(--accent-lavender)] opacity-60 rounded-sm" />
          <span>Advanced (80-89%)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[var(--accent-lavender)] opacity-30 rounded-sm" />
          <span>Proficient (70-79%)</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
