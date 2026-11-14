import { motion } from 'motion/react';
import { useInView } from './useInView';
import {
  PythonLogo,
  CLogo,
  HtmlCssJsLogo,
  AiMachineLearningLogo,
  OpenCvLogo,
  ReactLogo,
  VsCodeLogo,
  GitGitHubLogo,
  FlutterLogo,
  OpenCvPyTorchLogo,
  FigmaLogo,
  CanvaLogo,
} from './TechLogos';

export function Skills() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const technicalSkills = [
    { name: 'Python', icon: PythonLogo, level: 90 },
    { name: 'C Language', icon: CLogo, level: 80 },
    { name: 'HTML, CSS & JS', icon: HtmlCssJsLogo, level: 85 },
    { name: 'AI & Machine Learning', icon: AiMachineLearningLogo, level: 80 },
    { name: 'Computer Vision & OpenCV', icon: OpenCvLogo, level: 85 },
    { name: 'Full-Stack Web (React/Next.js)', icon: ReactLogo, level: 82 },
  ];

  const tools = [
    { name: 'VS Code', icon: VsCodeLogo },
    { name: 'Git & GitHub', icon: GitGitHubLogo },
    { name: 'Flutter', icon: FlutterLogo },
    { name: 'OpenCV / PyTorch', icon: OpenCvPyTorchLogo },
    { name: 'Figma', icon: FigmaLogo },
    { name: 'Canva', icon: CanvaLogo },
  ];

  return (
    <section id="skills" ref={ref} className="min-h-screen flex items-center justify-center py-14 sm:py-20 px-4 sm:px-6 relative overflow-hidden z-10">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-tertiary-fixed-dim/5 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="max-w-7xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="mb-4 font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-3d-metallic tracking-tighter" style={{ fontWeight: 800 }}>
            Skills &amp; Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-container via-tertiary-fixed-dim to-secondary-container mx-auto shadow-[0_0_8px_var(--primary-container)]" />
        </motion.div>
 
        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg sm:text-xl mb-6 text-primary-container font-label-caps uppercase tracking-widest font-bold">
              Technical Skills
            </h3>
            <div className="grid gap-3.5 sm:gap-4">
              {technicalSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="p-4 sm:p-5 bg-surface-dim rounded-2xl border border-border dark:border-glass-white/10 shadow-sm hover:shadow-md hover:border-emerald-500/30 dark:hover:border-primary-container/30 hover:scale-[1.01] transition-all relative overflow-hidden group"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3 sm:gap-3.5">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-surface-container/70 border border-border dark:border-glass-white/10 flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs flex-shrink-0">
                          <Icon size={20} />
                        </div>
                        <span className="font-semibold text-sm sm:text-base font-body text-on-surface">{skill.name}</span>
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-emerald-600 dark:text-primary-container">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-surface-container rounded-full overflow-hidden border border-glass-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-primary-container to-tertiary-fixed-dim rounded-full shadow-[0_0_10px_var(--tertiary-fixed-dim)]"
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
 
          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg sm:text-xl mb-6 text-secondary-container font-label-caps uppercase tracking-widest font-bold">
              Tools &amp; Technologies
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {tools.map((tool, index) => {
                const Icon = tool.icon;
                return (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="p-3.5 sm:p-5 bg-surface-dim rounded-2xl border border-border dark:border-glass-white/10 shadow-sm hover:shadow-md hover:scale-105 hover:border-secondary-container/40 transition-all text-center group cursor-pointer relative overflow-hidden"
                  >
                    <div className="mb-2.5 sm:mb-3 flex justify-center">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-surface-container/70 border border-border dark:border-glass-white/10 flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs">
                        <Icon size={24} />
                      </div>
                    </div>
                    <p className="font-label-caps text-[11px] sm:text-xs uppercase tracking-wider sm:tracking-widest font-bold text-on-surface/90">{tool.name}</p>
                  </motion.div>
                );
              })}
            </div>
 
            {/* Additional Skills Badges */}
            <div className="mt-8">
              <h4 className="text-sm font-label-caps uppercase tracking-widest text-on-surface/50 font-bold mb-4">
                Other Skills
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {['Teamwork', 'Time Management', 'Leadership', 'Critical Thinking', 'Problem Solving'].map(
                  (badge, index) => (
                    <motion.span
                      key={badge}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                      className="px-4 py-2 bg-glass-white/5 hover:bg-glass-white/10 text-tertiary-fixed-dim rounded-full border border-tertiary-fixed-dim/20 hover:border-tertiary-fixed-dim/40 transition-all font-label-caps text-xs uppercase tracking-wider font-bold cursor-default shadow-sm hover:shadow-[0_0_12px_rgba(0,218,243,0.2)]"
                    >
                      {badge}
                    </motion.span>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
