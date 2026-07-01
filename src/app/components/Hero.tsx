import { motion } from 'motion/react';
import { Mail, ArrowRight, Download, Github } from 'lucide-react';
import resumePdf from '../../assets/Resume.pdf';

export function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-32 pb-24 relative overflow-hidden bg-deep-void">
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none z-0" />
      
      {/* Ambient Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-electric-purple/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-primary-container/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center relative z-10 px-6">
        
        {/* Left Side: Headline and Actions */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col z-30"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xs tracking-widest mb-4 text-primary-container font-label-caps font-bold border border-primary-container/20 bg-primary-container/5 px-3 py-1 rounded-full w-fit shadow-[inset_0_0_10px_rgba(195,244,0,0.1)]"
          >
            NEURAL ENGINE ACTIVATED // BCA (AI & ML)
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-4 font-headline text-5xl md:text-6xl text-3d-metallic leading-tight tracking-tight"
            style={{ fontWeight: 800 }}
          >
            Hi, I'm Somil Mittal!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl mb-8 font-body text-on-surface opacity-90 leading-relaxed max-w-lg"
          >
            I build real-world AI solutions and craft high-fidelity digital interfaces. Specialized in Machine Learning architectures and emerging intelligent technologies.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={scrollToProjects}
              className="px-8 py-4 bg-primary-fixed text-on-primary rounded-xl hover:-translate-y-1 transition-all flex items-center gap-2 font-label-caps font-bold shadow-[0_0_20px_rgba(195,244,0,0.4)] cursor-pointer"
            >
              View My Work
              <ArrowRight size={18} />
            </button>
            <a
              href={resumePdf}
              download="Somil_Mittal_Resume.pdf"
              className="px-8 py-4 bg-transparent border-2 border-primary-container/30 text-on-surface rounded-xl hover:bg-primary-container/5 hover:border-primary-container transition-all flex items-center gap-2 cursor-pointer decoration-transparent select-none text-center font-label-caps font-bold"
            >
              <Download size={18} />
              Resume
            </a>
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-transparent border-2 border-glass-white text-on-surface rounded-xl hover:bg-glass-white/20 transition-all flex items-center gap-2 cursor-pointer font-label-caps font-bold"
            >
              <Mail size={18} />
              Contact
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="flex items-center gap-4 mt-8"
          >
            <span className="text-xs text-on-surface/50 font-label-caps font-medium tracking-wider uppercase">Find me on</span>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/sanumittal946-eng"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-3 rounded-xl border border-glass-white bg-glass-white text-on-surface hover:text-primary-container hover:border-primary-container/50 hover:scale-110 transition-all duration-300 shadow-sm"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/somil-mittal-0803aa33a"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-3 rounded-xl border border-glass-white bg-glass-white text-on-surface hover:text-secondary-container hover:border-secondary-container/50 hover:scale-110 transition-all duration-300 shadow-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side: 3D Central Composition */}
        <div className="relative w-full h-[550px] flex items-center justify-center">
          
          {/* Ambient Glow behind Brain */}
          <div className="absolute w-[350px] h-[350px] bg-electric-purple/20 rounded-full blur-[80px] z-0 animate-pulse pointer-events-none" />

          {/* Central Brain Asset */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="absolute w-full h-full max-w-[450px] max-h-[450px] float-animation z-20 flex items-center justify-center"
          >
            <img
              className="w-full h-full object-contain filter drop-shadow-[0_0_40px_rgba(139,92,246,0.5)]"
              alt="3D Holographic brain floating with circuits"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHOGdt-bCzCfSbqfGeMc07qlSIZz0JBIOYKbfPoHje6wy5BPMJzBLNCA3K3XHdjqslZs-0P09aSUsKAW6L3UNQAygqnyf0_u8AAspWAcjKqimr9WVzQsWX6YXArau4ridaYzOs4T-Z_VgptOm6RSnL0qQLseEpb9leQ7o-sQppmB_5n_ZGaEHRGHvAbL8ceWJxaH4CehTSpVY3_jjQi6IT5-yl_vtrqFjGnwDTn71yiAFWC1UXdprG9dExZMA2XwQESwGr_1GIkxA"
            />
          </motion.div>

          {/* Floating Code Panel 1 (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -30, y: -30 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute top-[10%] left-[5%] md:left-0 w-60 h-40 code-panel rounded-xl p-4 transform -rotate-6 float-animation z-10 shadow-lg pointer-events-none"
            style={{ animationDelay: '-2s' }}
          >
            <div className="flex items-center gap-1.5 border-b border-glass-white/20 pb-2 mb-2">
              <div className="w-2.5 h-2.5 rounded-full bg-secondary-container"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-primary-container"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-tertiary-fixed-dim"></div>
            </div>
            <div className="font-mono text-[9px] text-tertiary-fixed-dim leading-relaxed opacity-90">
              <span className="text-[#a855f7]">def</span> <span className="text-[#06b6d4]">optimize_neural_path</span>():<br />
              &nbsp;&nbsp;tensor = load_weights()<br />
              &nbsp;&nbsp;<span className="text-[#a855f7]">while</span> loss &gt; threshold:<br />
              &nbsp;&nbsp;&nbsp;&nbsp;backpropagate(tensor)<br />
              &nbsp;&nbsp;<span className="text-[#a855f7]">return</span> model.compiled()
            </div>
          </motion.div>

          {/* Floating Data Viz Panel 2 (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: 30 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="absolute bottom-[15%] right-[5%] md:-right-4 w-64 h-36 code-panel rounded-xl p-4 transform rotate-3 float-animation z-30 shadow-lg pointer-events-none"
            style={{ animationDelay: '-1s' }}
          >
            <div className="flex items-center gap-1.5 border-b border-glass-white/20 pb-2 mb-2">
              <div className="w-2.5 h-2.5 rounded-full bg-secondary-container"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-primary-container"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-tertiary-fixed-dim"></div>
            </div>
            <img
              className="w-full h-20 object-cover opacity-90 rounded mix-blend-screen"
              alt="3D Holographic data wave chart"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNHZL6_AgMpwnoKdENAoBcRNppKSJEQzH7F37yIwPQlqrktYSENWhxjB8ZEiysYcVD7LT9uFLVKzPlOUx2Kc3BaCWoCMrqOgV9YQb1sDF94ZXtXqciZw7HI7nQNCG97SMzJrLX1TuA2U6mYBNbLK2eL-uCP5q8QOtyjxbbhXS-SC1zeY4RCjtOpk9ARj0LLXBd0DmNO7-QnWs0iNlYDn5e9LCNjHG3q56dwabUHxlD94d2DuynjzY9lyactCaECA1pjr6-u_lAOJg"
            />
          </motion.div>

          {/* Vinyl Avatar Placeholder (Bottom Left) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="absolute -bottom-16 left-0 w-36 h-48 z-40 hidden md:block"
          >
            <img
              className="w-full h-full object-contain filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.6)]"
              alt="Developer 3D vinyl avatar with VR goggles"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2Nx9_4QzDIo24ppZKctS1WzFh1JObd1qe6RJg1aBzWbRWZ_g2ByRbSdEwF5QzFb0z5btmzmU2VHP5CBw30Mf6m1RVL3NBzizgVGtXMrLyjJPSFhB8ZWn7R5x_pYKQHkbdEnAvjuu7TPRIzqUWsyaZ2UuboCCofGODxOccDf1N7n0_QJpwmcNybIkC9-i9f4Q-B4KTlxm7B1oYbSwEnwvIJqMirHblmkTdEFRZE1zCwMUOKmN-1FAckdV3r-5bTihivbhfHqBIMqY"
            />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
