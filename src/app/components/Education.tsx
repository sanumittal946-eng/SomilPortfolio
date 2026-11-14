import { motion } from 'motion/react';
import { useInView } from './useInView';
import { GraduationCap, Calendar, Briefcase } from 'lucide-react';

export function Education() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const education = [
    {
      degree: 'Web Development Intern',
      branch: 'Codveda Technologies',
      institution: 'Internship Program — May 2026 - June 2026',
      year: 'May 2026 - June 2026',
      grade: 'ISO 9001:2015 & MSME Certified IT Firm',
      isWork: true,
    },
    {
      degree: 'Bachelor of Computer Application',
      branch: 'Artificial Intelligence & Machine Learning',
      institution: 'Poornima University, Jaipur',
      year: 'Aug. 2025 - Present',
      grade: 'BCA (AI & ML) Student',
      isWork: false,
    },
    {
      degree: 'Student Chapter Member',
      branch: 'Association for Computing Machinery (ACM)',
      institution: 'Poornima University, Jaipur',
      year: 'Jan. 2026 - Present',
      grade: 'Designing Digital Creatives & Organizing Workshops',
      isWork: false,
    },
  ];

  return (
    <section id="education" ref={ref} className="min-h-screen flex items-center justify-center py-14 sm:py-20 px-4 sm:px-6 relative overflow-hidden z-10">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric-purple/5 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="max-w-5xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="mb-4 font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-3d-metallic tracking-tighter" style={{ fontWeight: 800 }}>
             Education &amp; Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-container via-tertiary-fixed-dim to-secondary-container mx-auto shadow-[0_0_8px_var(--primary-container)]" />
        </motion.div>
 
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 sm:left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary-container/20 via-tertiary-fixed-dim/20 to-secondary-container/20" />
 
          <div className="space-y-8 sm:space-y-12">
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
                <div className={`absolute left-4 sm:left-8 md:left-1/2 w-4 sm:w-5 h-4 sm:h-5 rounded-full border-4 border-deep-void transform -translate-x-1/2 z-10 animate-pulse ${
                  index % 2 === 0 
                    ? 'bg-primary-container shadow-[0_0_12px_rgba(195,244,0,0.8)]' 
                    : 'bg-secondary-container shadow-[0_0_12px_rgba(255,74,141,0.8)]'
                }`} />
 
                {/* Content Card */}
                <div className={`w-full md:w-[calc(50%-3rem)] ml-9 sm:ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                  <div className={`p-4 sm:p-6 bg-surface-dim rounded-2xl border border-border dark:border-glass-white/10 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all relative overflow-hidden group ${
                    index % 2 === 0 ? 'hover:border-primary-container/30' : 'hover:border-secondary-container/30'
                  }`}>
                    <div className="flex items-start gap-3.5 sm:gap-4">
                      <div className={`p-2.5 sm:p-3 rounded-xl flex-shrink-0 border ${
                        index % 2 === 0 
                          ? 'bg-primary-container/10 border-primary-container/20 text-emerald-600 dark:text-primary-container' 
                          : 'bg-secondary-container/10 border-secondary-container/20 text-pink-600 dark:text-secondary-container'
                      }`}>
                        {edu.isWork ? (
                          <Briefcase size={22} strokeWidth={1.5} />
                        ) : (
                          <GraduationCap size={22} strokeWidth={1.5} />
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl mb-1 font-bold font-headline text-on-surface">
                          {edu.degree}
                        </h3>
                        <p className="text-on-surface/90 mb-1.5 sm:mb-2 font-semibold text-sm sm:text-base font-body">
                          {edu.branch}
                        </p>
                        <p className="text-on-surface-variant mb-2.5 sm:mb-3 text-xs sm:text-sm font-medium font-body">{edu.institution}</p>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-label-caps uppercase tracking-wider font-semibold text-on-surface-variant">
                          <div className="flex items-center gap-1.5">
                            <Calendar size={14} />
                            <span>{edu.year}</span>
                          </div>
                          <span>•</span>
                          <span className={index % 2 === 0 ? 'text-emerald-600 dark:text-primary-container font-bold' : 'text-pink-600 dark:text-secondary-container font-bold'}>{edu.grade}</span>
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
