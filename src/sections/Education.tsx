import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, Award, Calendar, BookOpen } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      minor: 'Data Science and Applied AI',
      school: 'Iowa State University',
      location: 'Ames, Iowa',
      period: 'Aug 2022 - Aug 2026',
      gpa: 'Dean\'s List',
      achievements: [
        'First Place – Pi515 AI Challenge 2025',
        'Undergraduate Research Assistant',
        'Teaching Assistant for Android Development',
      ],
    },
    {
      degree: 'High School Diploma',
      school: 'SBOA School & Junior College',
      location: 'India',
      period: 'Apr 2013 - May 2022',
      achievements: [
        'Strong foundation in Mathematics and Science',
        'Active participant in coding competitions',
      ],
    },
  ];

  const certifications = [
    { name: 'Advanced Technical Interview Prep', provider: 'CodePath' },
    { name: 'Data Manipulation with Pandas', provider: 'DataCamp' },
    { name: 'Prompt Design in Vertex AI', provider: 'Google Cloud' },
    { name: 'Image Processing in Python', provider: 'DataCamp' },
    { name: 'Microsoft Power BI for Beginners', provider: 'Microsoft' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
          },
        }
      );

      // Content animation
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="education"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-[#010101] overflow-hidden"
    >
      {/* Background */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#ff5a65]/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={headingRef} className="text-center mb-16">
          <span className="text-[#ff5a65] text-sm font-medium uppercase tracking-widest mb-4 block">
            Academic Background
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Education & Certifications
          </h2>
        </div>

        {/* Content */}
        <div ref={contentRef} className="grid lg:grid-cols-3 gap-8">
          {/* Education cards */}
          <div className="lg:col-span-2 space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="glass p-6 lg:p-8 rounded-2xl border border-[#292929] hover:border-[#ff5a65]/50 transition-all"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#ff5a65]/10 text-[#ff5a65] flex-shrink-0">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-display text-xl font-semibold mb-1">
                      {edu.degree}
                    </h3>
                    {edu.minor && (
                      <p className="text-[#ff5a65] text-sm mb-2">Minor: {edu.minor}</p>
                    )}
                    <p className="text-[#b5b5b5]">{edu.school}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mb-6 text-sm text-[#b5b5b5]">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Award size={14} />
                    <span>{edu.gpa || edu.location}</span>
                  </div>
                </div>

                {/* Achievements */}
                <div className="space-y-2">
                  <p className="text-white text-sm font-medium mb-2">Key Achievements:</p>
                  {edu.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start gap-2 text-[#b5b5b5] text-sm">
                      <span className="text-[#ff5a65] mt-1">•</span>
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="glass p-6 rounded-2xl border border-[#292929]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#ff5a65]/10 text-[#ff5a65]">
                <BookOpen size={20} />
              </div>
              <h3 className="text-white font-display text-lg font-semibold">Certifications</h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="p-4 bg-[#141414] rounded-xl border border-[#292929] hover:border-[#ff5a65]/30 transition-colors"
                >
                  <p className="text-white text-sm font-medium mb-1">{cert.name}</p>
                  <p className="text-[#b5b5b5] text-xs">{cert.provider}</p>
                </div>
              ))}
            </div>

            {/* Languages */}
            <div className="mt-8 pt-6 border-t border-[#292929]">
              <h4 className="text-white font-medium mb-4">Languages</h4>
              <div className="flex flex-wrap gap-2">
                {['English', 'Telugu', 'Hindi'].map((lang) => (
                  <span
                    key={lang}
                    className="px-3 py-1.5 bg-[#141414] border border-[#292929] rounded-full text-sm text-[#b5b5b5]"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
