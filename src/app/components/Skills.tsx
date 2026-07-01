import { motion } from 'motion/react';
import { useInView } from './useInView';
import { Code2, Palette, GitBranch, Terminal, Brain, Smartphone, Figma } from 'lucide-react';

export function Skills() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const technicalSkills = [
    { name: 'Python', icon: Terminal, level: 90 },
    { name: 'C Language', icon: Code2, level: 80 },
    { name: 'HTML, CSS & JS', icon: Palette, level: 85 },
    { name: 'AI & Machine Learning', icon: Brain, level: 75 },
  ];

  const tools = [
    { name: 'VS Code', icon: Code2 },
    { name: 'Flutter', icon: Smartphone },
    { name: 'Git Bash & GitHub', icon: GitBranch },
    { name: 'Canva', icon: Palette },
    { name: 'Figma', icon: Figma },
  ];

  return (
    <section id="skills" ref={ref} className="min-h-screen flex items-center justify-center py-20 px-6 relative overflow-hidden z-10">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-tertiary-fixed-dim/5 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="max-w-7xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 font-headline text-5xl md:text-6xl text-3d-metallic tracking-tighter" style={{ fontWeight: 800 }}>
            Skills &amp; Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-container via-tertiary-fixed-dim to-secondary-container mx-auto shadow-[0_0_8px_var(--primary-container)]" />
        </motion.div>
 
        <div className="grid md:grid-cols-2 gap-16">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl mb-6 text-primary-container font-label-caps uppercase tracking-widest font-bold">
              Technical Skills
            </h3>
            <div className="grid gap-4">
              {technicalSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="p-5 bg-surface-dim/40 backdrop-blur-md rounded-2xl border border-glass-white/10 shadow-lg hover:shadow-2xl hover:border-primary-container/30 hover:scale-[1.01] transition-all relative overflow-hidden group"
                  >
                    {/* Screws */}
                    <div className="absolute top-2 left-2 w-1 h-1 rounded-full bg-surface-bright opacity-20"></div>
                    <div className="absolute top-2 right-2 w-1 h-1 rounded-full bg-surface-bright opacity-20"></div>
                    
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 bg-primary-container/10 border border-primary-container/20 rounded-xl text-primary-container group-hover:bg-primary-container/20 transition-all">
                          <Icon size={20} />
                        </div>
                        <span className="font-semibold text-base font-body">{skill.name}</span>
                      </div>
                      <span className="text-sm font-bold text-primary-container drop-shadow-[0_0_5px_var(--primary-container)]">{skill.level}%</span>
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
            <h3 className="text-xl mb-6 text-secondary-container font-label-caps uppercase tracking-widest font-bold">
              Tools &amp; Technologies
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {tools.map((tool, index) => {
                const Icon = tool.icon;
                return (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="p-5 bg-surface-dim/40 backdrop-blur-md rounded-2xl border border-glass-white/10 shadow-lg hover:shadow-2xl hover:scale-105 hover:border-secondary-container/40 transition-all text-center group cursor-pointer relative overflow-hidden"
                  >
                    {/* Screws */}
                    <div className="absolute top-2 left-2 w-1 h-1 rounded-full bg-surface-bright opacity-20"></div>
                    <div className="absolute top-2 right-2 w-1 h-1 rounded-full bg-surface-bright opacity-20"></div>
                    
                    <div className="mb-3 flex justify-center">
                      <div className="p-3 bg-secondary-container/10 border border-secondary-container/20 text-secondary-container rounded-xl group-hover:bg-secondary-container/20 transition-colors inline-block">
                        <Icon size={26} strokeWidth={1.5} />
                      </div>
                    </div>
                    <p className="font-label-caps text-xs uppercase tracking-widest font-bold text-on-surface/90">{tool.name}</p>
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
