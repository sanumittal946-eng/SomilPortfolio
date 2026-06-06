import { motion } from 'motion/react';
import { useInView } from './useInView';
import { GraduationCap, Sparkles, MapPin } from 'lucide-react';
import avatar from '../../assets/avatar.jpg';

export function About() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="about" ref={ref} className="min-h-screen flex items-center justify-center py-20 px-6">
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4" style={{ fontSize: '3.5rem', fontWeight: 700, letterSpacing: '-0.02em' }}>
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/15 to-secondary/5 rounded-3xl backdrop-blur-sm border border-primary/20 shadow-2xl" />
              <div className="absolute inset-8 bg-muted rounded-3xl border-2 border-primary/20 flex items-center justify-center overflow-hidden">
                <img src={avatar} alt="Photo" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 border-4 border-primary/20 rounded-full" />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 border-4 border-secondary/20 rounded-full" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-lg mb-6 text-foreground/80" style={{ fontWeight: 400, lineHeight: 1.8 }}>
              I am a motivated BCA (AI & ML) student with a strong interest in Artificial Intelligence,
              Machine Learning, and emerging technologies. I excel in problem-solving, teamwork, and
              applying technical knowledge to build real-world applications.
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-4 p-4 bg-background/60 rounded-xl border border-border shadow-md hover:border-primary/30 transition-all">
                <div className="p-2.5 bg-primary/10 rounded-xl text-primary mt-1">
                  <GraduationCap className="flex-shrink-0" size={24} />
                </div>
                <div>
                  <h3 className="mb-1" style={{ fontWeight: 600 }}>Education</h3>
                  <p className="text-foreground/80">Bachelor of Computer Applications (AI & ML)</p>
                  <p className="text-sm text-foreground/60">Poornima University • 2025-2028</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-background/60 rounded-xl border border-border shadow-md hover:border-secondary/30 transition-all">
                <div className="p-2.5 bg-secondary/10 rounded-xl text-secondary mt-1">
                  <MapPin className="flex-shrink-0" size={24} />
                </div>
                <div>
                  <h3 className="mb-1" style={{ fontWeight: 600 }}>Location</h3>
                  <p className="text-foreground/80">Jaipur, India</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-background/60 rounded-xl border border-border shadow-md hover:border-primary/30 transition-all">
                <div className="p-2.5 bg-primary/10 rounded-xl text-primary mt-1">
                  <Sparkles className="flex-shrink-0" size={24} />
                </div>
                <div>
                  <h3 className="mb-1" style={{ fontWeight: 600 }}>Activities</h3>
                  <p className="text-foreground/80">
                    Active member of the ACM Student Chapter, dedicated to continuous learning and event organization.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
