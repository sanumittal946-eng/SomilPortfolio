import { motion } from 'motion/react';
import { useInView } from './useInView';
import { GraduationCap, Calendar } from 'lucide-react';

export function Education() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const education = [
    {
      degree: 'Bachelor of Computer Application',
      branch: 'Artificial Intelligence & Machine Learning',
      institution: 'Poornima University, Jaipur',
      year: 'Aug. 2025 - Present',
      grade: 'BCA (AI & ML) Student',
    },
    {
      degree: 'Student Chapter Member',
      branch: 'Association for Computing Machinery (ACM)',
      institution: 'Poornima University, Jaipur',
      year: 'Jan. 2026 - Present',
      grade: 'Designing Digital Creatives & Organizing Workshops',
    },
  ];

  return (
    <section id="education" ref={ref} className="min-h-screen flex items-center justify-center py-20 px-6 bg-muted/30">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4" style={{ fontSize: '3.5rem', fontWeight: 700, letterSpacing: '-0.02em' }}>
            Education & Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/30 to-secondary/30" />

          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-8 md:left-1/2 w-4 h-4 rounded-full border-4 border-background transform -translate-x-1/2 z-10 ${
                  index % 2 === 0 ? 'bg-primary' : 'bg-secondary'
                }`} />

                {/* Content Card */}
                <div className={`w-full md:w-[calc(50%-3rem)] ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                  <div className={`p-6 bg-background/60 backdrop-blur-sm rounded-2xl border border-border shadow-lg hover:shadow-2xl hover:scale-105 transition-all hover:border-${index % 2 === 0 ? 'primary' : 'secondary'}/20`}>
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl flex-shrink-0 ${
                        index % 2 === 0 ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'
                      }`}>
                        <GraduationCap size={28} strokeWidth={1.5} />
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-xl mb-1 font-bold ${
                          index % 2 === 0 ? 'text-primary' : 'text-secondary'
                        }`}>
                          {edu.degree}
                        </h3>
                        <p className="text-foreground/80 mb-2" style={{ fontWeight: 600 }}>
                          {edu.branch}
                        </p>
                        <p className="text-foreground/60 mb-2" style={{ fontWeight: 500 }}>{edu.institution}</p>
                        <div className="flex items-center gap-4 text-sm text-foreground/60">
                          <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            <span>{edu.year}</span>
                          </div>
                          <span>•</span>
                          <span style={{ fontWeight: 600 }}>{edu.grade}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
