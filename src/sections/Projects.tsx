import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Folder, ExternalLink, Github, ChevronLeft, ChevronRight, Youtube } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: 'Autonomous Robotic Chess System',
      description: 'Built a fully autonomous robotic chess system that detects real chessboard states using computer vision, computes optimal moves with the Stockfish chess engine, and physically executes moves using a UR10e robotic arm. Integrates ROS, YOLO-based vision, MuJoCo simulation, and a web interface.',
      association: 'Iowa State University',
      image: '/images/project-chess.jpg',
      languages: [
        { name: 'Python', color: 'bg-[#3572A5]' },
        { name: 'ROS', color: 'bg-[#22314E]' },
        { name: 'YOLO', color: 'bg-[#00FFFF]' },
        { name: 'React', color: 'bg-[#61DAFB]' },
      ],
      stars: 42,
      forks: 12,
      updated: 'Dec 2025',
      links: { 
        demo: 'https://www.youtube.com/watch?v=j55UGXcVj3g&t=1s', 
        github: 'https://github.com/NehaTiru/Autonomous-Robotic-Chess-System' 
      },
      hasVideo: true,
    },
    {
      title: 'ByteForce Crop Disease Detection System',
      description: 'Award-winning AI system for sustainable farming that identifies plant diseases with 96%+ accuracy across multiple crops. Built comprehensive deep learning models using 100k+ images, achieving instant disease identification with weather-informed treatment recommendations.',
      association: 'Personal Project',
      image: '/images/project-crop.jpg',
      languages: [
        { name: 'Python', color: 'bg-[#3572A5]' },
        { name: 'TensorFlow', color: 'bg-[#FF6F00]' },
        { name: 'React', color: 'bg-[#61DAFB]' },
        { name: 'FastAPI', color: 'bg-[#009688]' },
      ],
      stars: 38,
      forks: 8,
      updated: 'May 2025',
      links: { 
        github: 'https://github.com/NehaTiru/ByteForce-AI-powered-crop-detection' 
      },
      hasVideo: false,
    },
    {
      title: 'AI-Housing-Insights-ChatBot',
      description: 'AI-powered chatbot providing comprehensive housing insights through advanced data analysis, satellite imagery processing, and interactive mapping. Integrated NASA\'s Prithvi model for small community data analysis with image processing capabilities.',
      association: 'ISU Extension and Outreach',
      image: '/images/project-housing.jpg',
      languages: [
        { name: 'Python', color: 'bg-[#3572A5]' },
        { name: 'React', color: 'bg-[#61DAFB]' },
        { name: 'LlamaIndex', color: 'bg-[#FF6F00]' },
        { name: 'Google Earth Engine', color: 'bg-[#4285F4]' },
      ],
      stars: 45,
      forks: 10,
      updated: 'July 2024',
      links: { 
        demo: 'https://www.youtube.com/watch?v=jyJ_YoebbUw', 
        github: 'https://github.com/NehaTiru/ai-housing-chatbot' 
      },
      hasVideo: true,
    },
    {
      title: 'cyclone-Connect',
      description: 'Multi-user campus management app with interfaces for students, advisors, and faculty. Includes real-time chat, scheduling, and health tools using WebSocket technology. Won 1st place out of 52 teams in App Development course.',
      association: 'Iowa State University',
      image: '/images/project-cyclone.jpg',
      languages: [
        { name: 'Java', color: 'bg-[#B07219]' },
        { name: 'Spring Boot', color: 'bg-[#6DB33F]' },
        { name: 'MySQL', color: 'bg-[#4479A1]' },
        { name: 'WebSocket', color: 'bg-[#FF6600]' },
      ],
      stars: 56,
      forks: 15,
      updated: 'May 2024',
      links: { 
        demo: 'https://www.youtube.com/watch?v=XkTYOFwKoS0', 
        github: 'https://github.com/NehaTiru/CycloneConnect' 
      },
      hasVideo: true,
    },
    {
      title: 'Iphone-ecommerce',
      description: 'Comprehensive e-commerce platform featuring interactive 3D iPhone visualizations, secure checkout process, and seamless user experience. Full-stack application with React frontend and Node.js backend.',
      association: 'Iowa State University',
      image: '/images/project-iphone.jpg',
      languages: [
        { name: 'React', color: 'bg-[#61DAFB]' },
        { name: 'Node.js', color: 'bg-[#339933]' },
        { name: 'MongoDB', color: 'bg-[#47A248]' },
        { name: 'Express.js', color: 'bg-[#404040]' },
      ],
      stars: 34,
      forks: 6,
      updated: 'Dec 2023',
      links: { 
        demo: 'https://github.com/NehaTiru/iphone-ecommerce#demo', 
        github: 'https://github.com/NehaTiru/MyIphones' 
      },
      hasVideo: false,
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gridRef.current?.querySelectorAll('.project-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 80%',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-24 px-4 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto mb-12">
        <div className="flex items-center gap-3 text-[var(--text-muted)] font-mono text-sm mb-4">
          <span className="text-[var(--accent-lavender)]">##</span>
          <span>Featured Work</span>
        </div>
        <h2 className="text-3xl font-bold text-[var(--text-primary)]">
          Projects<span className="text-[var(--accent-pink)]">.Repository</span>
        </h2>
      </div>

      <div className="max-w-6xl mx-auto mb-8">
        <div className="terminal-window overflow-hidden">
          <div className="terminal-header">
            <div className="flex gap-2">
              <div className="terminal-button red" />
              <div className="terminal-button yellow" />
              <div className="terminal-button green" />
            </div>
            <span className="ml-4 text-[var(--text-secondary)] text-sm font-mono flex items-center gap-2">
              <Folder size={14} />
              {projects[activeProject].title}
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-0">
            <div className="relative aspect-video lg:aspect-auto overflow-hidden">
              <img
                src={projects[activeProject].image}
                alt={projects[activeProject].title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-surface)] via-transparent to-transparent" />
              
              <div className="absolute bottom-4 right-4 flex gap-2">
                <button
                  onClick={prevProject}
                  className="w-10 h-10 flex items-center justify-center bg-[var(--bg-elevated)] border border-[var(--border)] rounded-lg hover:border-[var(--accent-lavender)] transition-colors"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={nextProject}
                  className="w-10 h-10 flex items-center justify-center bg-[var(--bg-elevated)] border border-[var(--border)] rounded-lg hover:border-[var(--accent-lavender)] transition-colors"
                >
                  <ChevronRight size={18} />
                </button>
              </div>

              <div className="absolute bottom-4 left-4 flex gap-2">
                {projects.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveProject(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === activeProject 
                        ? 'bg-[var(--accent-lavender)] w-6' 
                        : 'bg-[var(--border)]'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[var(--accent-pink)] text-sm font-medium">
                    {projects[activeProject].association}
                  </span>
                  <span className="text-[var(--border)]">•</span>
                  <span className="text-[var(--text-muted)] text-sm">
                    {projects[activeProject].updated}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold text-[var(--text-primary)] mb-4">
                  {projects[activeProject].title}
                </h3>
                <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
                  {projects[activeProject].description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {projects[activeProject].languages.map((lang) => (
                    <span
                      key={lang.name}
                      className="flex items-center gap-1.5 px-2 py-1 bg-[var(--bg-elevated)] rounded text-xs"
                    >
                      <span className={`w-2.5 h-2.5 rounded-full ${lang.color}`} />
                      <span className="text-[var(--text-secondary)]">{lang.name}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[var(--text-muted)] text-xs">
                  Updated {projects[activeProject].updated}
                </span>
                <div className="flex gap-3">
                  <a
                    href={projects[activeProject].links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[var(--bg-elevated)] border border-[var(--border)] rounded-lg hover:border-[var(--accent-lavender)] transition-colors text-sm"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={projects[activeProject].links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[var(--accent-lavender)] to-[var(--accent-purple)] text-[var(--bg-primary)] rounded-lg hover:brightness-110 transition-all text-sm font-medium"
                  >
                    {projects[activeProject].hasVideo ? (
                      <Youtube size={16} />
                    ) : (
                      <ExternalLink size={16} />
                    )}
                    {projects[activeProject].hasVideo ? 'Watch Demo' : 'Live Demo'}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div 
        ref={gridRef}
        className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-5 gap-4"
      >
        {projects.map((project, index) => (
          <button
            key={project.title}
            onClick={() => setActiveProject(index)}
            className={`project-card terminal-window p-4 text-left card-hover ${
              index === activeProject ? 'border-[var(--accent-lavender)]' : ''
            }`}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <Folder size={18} className="text-[var(--accent-lavender)]" />
                <span className="font-mono text-sm text-[var(--text-primary)] truncate">
                  {project.title.slice(0, 12)}...
                </span>
              </div>
              <ExternalLink size={14} className="text-[var(--text-muted)]" />
            </div>

            <p className="text-[var(--text-secondary)] text-xs mb-4 line-clamp-2">
              {project.description}
            </p>

            <div className="flex items-center justify-between text-xs text-[var(--text-muted)]">
              <div className="flex gap-2">
                {project.languages.slice(0, 2).map((lang) => (
                  <span key={lang.name} className={`w-2.5 h-2.5 rounded-full ${lang.color}`} />
                ))}
              </div>
              <span>{project.updated}</span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default Projects;
