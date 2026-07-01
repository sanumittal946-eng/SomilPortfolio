import { motion } from 'motion/react';
import { useInView } from './useInView';
import { GraduationCap, Sparkles, MapPin } from 'lucide-react';
import avatar from '../../assets/avatar.jpg';

export function About() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="about" ref={ref} className="min-h-screen flex items-center justify-center py-20 px-6 relative overflow-hidden z-10">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-electric-purple/5 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="max-w-7xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 font-headline text-5xl md:text-6xl text-3d-metallic tracking-tighter" style={{ fontWeight: 800 }}>
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-container via-tertiary-fixed-dim to-secondary-container mx-auto shadow-[0_0_8px_var(--primary-container)]" />
        </motion.div>
 
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            {/* Holographic Isometric Avatar frame */}
            <div className="relative w-full max-w-sm aspect-square group select-none">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-container/20 to-electric-purple/10 rounded-3xl blur-2xl z-0 pointer-events-none group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-glass-white/5 backdrop-blur-md rounded-3xl border border-glass-white/20 p-6 shadow-[0_0_30px_rgba(139,92,246,0.15)] group-hover:border-primary-container/30 group-hover:shadow-[0_0_40px_rgba(195,244,0,0.25)] transition-all duration-500 flex items-center justify-center">
                <div className="w-full h-full rounded-2xl overflow-hidden border border-glass-white/10 relative">
                  <img src={avatar} alt="Somil Mittal" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-void/40 to-transparent pointer-events-none" />
                </div>
              </div>
              <div className="absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-primary-container/40 rounded-tr-2xl group-hover:border-primary-container transition-colors duration-500" />
              <div className="absolute -bottom-3 -left-3 w-16 h-16 border-b-2 border-l-2 border-secondary-container/40 rounded-bl-2xl group-hover:border-secondary-container transition-colors duration-500" />
            </div>
          </motion.div>
 
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-md md:text-lg mb-8 text-on-surface/80 font-body leading-relaxed">
              I am a highly motivated BCA (AI & ML) student with a strong passion for Artificial Intelligence,
              Machine Learning, and building advanced digital architectures. I excel in problem-solving, collaborative
              team environments, and translating complex mathematical or technical concepts into clean, performant applications.
            </p>
 
            <div className="space-y-4">
              
              {/* Card 1: Education */}
              <div className="flex items-start gap-4 p-5 bg-surface-dim/40 backdrop-blur-md rounded-2xl border border-glass-white/10 shadow-lg hover:shadow-2xl hover:border-primary-container/30 hover:scale-[1.01] transition-all duration-300 relative overflow-hidden group">
                {/* Decorative Tech Screws */}
                <div className="absolute top-2 left-2 w-1 h-1 rounded-full bg-surface-bright opacity-30 shadow-inner"></div>
                <div className="absolute top-2 right-2 w-1 h-1 rounded-full bg-surface-bright opacity-30 shadow-inner"></div>
                <div className="absolute bottom-2 left-2 w-1 h-1 rounded-full bg-surface-bright opacity-30 shadow-inner"></div>
                <div className="absolute bottom-2 right-2 w-1 h-1 rounded-full bg-surface-bright opacity-30 shadow-inner"></div>
                
                <div className="p-3 bg-primary-container/10 border border-primary-container/20 rounded-xl text-primary-container mt-1 group-hover:bg-primary-container/20 transition-all">
                  <GraduationCap className="flex-shrink-0" size={22} />
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-label-caps uppercase tracking-widest text-primary-container font-bold">Education</h3>
                  <p className="text-on-surface font-semibold text-base font-body">Bachelor of Computer Applications (AI & ML)</p>
                  <p className="text-xs text-on-surface/50 font-label-caps uppercase tracking-wider font-bold">Poornima University • 2025 - 2028</p>
                </div>
              </div>
 
              {/* Card 2: Location */}
              <div className="flex items-start gap-4 p-5 bg-surface-dim/40 backdrop-blur-md rounded-2xl border border-glass-white/10 shadow-lg hover:shadow-2xl hover:border-secondary-container/30 hover:scale-[1.01] transition-all duration-300 relative overflow-hidden group">
                {/* Decorative Tech Screws */}
                <div className="absolute top-2 left-2 w-1 h-1 rounded-full bg-surface-bright opacity-30 shadow-inner"></div>
                <div className="absolute top-2 right-2 w-1 h-1 rounded-full bg-surface-bright opacity-30 shadow-inner"></div>
                <div className="absolute bottom-2 left-2 w-1 h-1 rounded-full bg-surface-bright opacity-30 shadow-inner"></div>
                <div className="absolute bottom-2 right-2 w-1 h-1 rounded-full bg-surface-bright opacity-30 shadow-inner"></div>

                <div className="p-3 bg-secondary-container/10 border border-secondary-container/20 rounded-xl text-secondary-container mt-1 group-hover:bg-secondary-container/20 transition-all">
                  <MapPin className="flex-shrink-0" size={22} />
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-label-caps uppercase tracking-widest text-secondary-container font-bold">Location</h3>
                  <p className="text-on-surface font-semibold text-base font-body">Jaipur, India</p>
                  <p className="text-xs text-on-surface/50 font-label-caps uppercase tracking-wider font-bold">Pink City // Rajasthan</p>
                </div>
              </div>
 
              {/* Card 3: Activities */}
              <div className="flex items-start gap-4 p-5 bg-surface-dim/40 backdrop-blur-md rounded-2xl border border-glass-white/10 shadow-lg hover:shadow-2xl hover:border-tertiary-fixed-dim/30 hover:scale-[1.01] transition-all duration-300 relative overflow-hidden group">
                {/* Decorative Tech Screws */}
                <div className="absolute top-2 left-2 w-1 h-1 rounded-full bg-surface-bright opacity-30 shadow-inner"></div>
                <div className="absolute top-2 right-2 w-1 h-1 rounded-full bg-surface-bright opacity-30 shadow-inner"></div>
                <div className="absolute bottom-2 left-2 w-1 h-1 rounded-full bg-surface-bright opacity-30 shadow-inner"></div>
                <div className="absolute bottom-2 right-2 w-1 h-1 rounded-full bg-surface-bright opacity-30 shadow-inner"></div>

                <div className="p-3 bg-tertiary-fixed-dim/10 border border-tertiary-fixed-dim/20 rounded-xl text-tertiary-fixed-dim mt-1 group-hover:bg-tertiary-fixed-dim/20 transition-all">
                  <Sparkles className="flex-shrink-0" size={22} />
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-label-caps uppercase tracking-widest text-tertiary-fixed-dim font-bold">Activities</h3>
                  <p className="text-on-surface font-semibold text-base font-body">ACM Student Chapter Member</p>
                  <p className="text-xs text-on-surface/50 font-label-caps uppercase tracking-wider font-bold">Designing Digital Creatives & Organizing Events</p>
                </div>
              </div>
              
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
