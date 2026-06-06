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
    <section id="skills" ref={ref} className="min-h-screen flex items-center justify-center py-20 px-6 bg-muted/30">
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4" style={{ fontSize: '3.5rem', fontWeight: 700, letterSpacing: '-0.02em' }}>
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl mb-6 text-primary" style={{ fontWeight: 700 }}>
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
                    className="p-4 bg-background/60 backdrop-blur-sm rounded-2xl border border-border shadow-lg hover:shadow-xl hover:border-primary/20 hover:scale-102 transition-all"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg text-primary">
                          <Icon size={20} />
                        </div>
                        <span style={{ fontWeight: 600 }}>{skill.name}</span>
                      </div>
                      <span className="text-sm font-bold text-primary">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
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
            <h3 className="text-2xl mb-6 text-secondary" style={{ fontWeight: 700 }}>
              Tools & Technologies
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
                    className="p-5 bg-background/60 backdrop-blur-sm rounded-2xl border border-border shadow-lg hover:shadow-xl hover:scale-105 hover:border-secondary/30 transition-all text-center group"
                  >
                    <div className="mb-3 flex justify-center">
                      <div className="p-3 bg-secondary/10 text-secondary rounded-xl group-hover:bg-secondary/20 transition-colors">
                        <Icon size={28} strokeWidth={1.5} />
                      </div>
                    </div>
                    <p style={{ fontWeight: 600, fontSize: '0.95rem' }}>{tool.name}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Additional Skills Badges */}
            <div className="mt-8">
              <h4 className="text-lg mb-4 text-foreground/80" style={{ fontWeight: 600 }}>
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
                      className="px-4 py-2 bg-primary/5 hover:bg-primary/10 text-primary rounded-full border border-primary/10 transition-colors"
                      style={{ fontWeight: 600, fontSize: '0.85rem' }}
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
