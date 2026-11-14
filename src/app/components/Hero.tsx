import { motion } from 'motion/react';
import { Mail, ArrowRight, Download, Github } from 'lucide-react';
import resumePdf from '../../assets/Resume.pdf';
import { Hero3DModel } from './Hero3DModel';

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
    <section id="home" className="min-h-screen flex items-center justify-center pt-28 md:pt-32 pb-20 relative overflow-hidden bg-background">
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 cyber-grid opacity-20 dark:opacity-30 pointer-events-none z-0" />

      {/* Ambient Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-electric-purple/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-primary-container/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-10 lg:gap-12 items-center relative z-10 px-4 sm:px-6">

        {/* Left Side: Headline and Actions */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col z-30"
        >
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-3 font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-on-surface font-extrabold leading-[1.15] tracking-tight"
          >
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-emerald-500 via-teal-400 to-indigo-500 dark:from-primary-container dark:via-tertiary-fixed-dim dark:to-secondary-container bg-clip-text text-transparent">
              Somil Mittal
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-base sm:text-lg md:text-xl font-semibold text-emerald-600 dark:text-primary-container mb-4 font-headline"
          >
            AI &amp; Machine Learning Developer · Poornima University
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-base sm:text-lg mb-8 font-body text-on-surface-variant leading-relaxed max-w-lg"
          >
            I build real-world AI applications and craft high-performance web systems. Specialized in Machine Learning architectures, Computer Vision, and scalable full-stack engineering.
          </motion.p>

          {/* Action Buttons (High Contrast & Visible in Both Light and Dark Modes) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
          >
            <button
              onClick={scrollToProjects}
              className="px-7 py-3.5 bg-primary-container text-on-primary-container rounded-2xl hover:scale-105 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 font-headline font-semibold shadow-lg shadow-primary-container/20 cursor-pointer min-h-[48px]"
            >
              <span>View My Work</span>
              <ArrowRight size={18} />
            </button>
            <a
              href={resumePdf}
              download="Somil_Mittal_Resume.pdf"
              className="px-7 py-3.5 bg-surface-dim border-2 border-border dark:border-glass-white/20 text-on-surface hover:border-primary-container rounded-2xl transition-all flex items-center justify-center gap-2 cursor-pointer decoration-transparent select-none text-center font-headline font-semibold shadow-sm min-h-[48px]"
            >
              <Download size={18} />
              <span>Resume</span>
            </a>
            <button
              onClick={scrollToContact}
              className="px-7 py-3.5 bg-surface-dim border-2 border-border dark:border-glass-white/20 text-on-surface hover:border-primary-container rounded-2xl transition-all flex items-center justify-center gap-2 cursor-pointer font-headline font-semibold shadow-sm min-h-[48px]"
            >
              <Mail size={18} />
              <span>Contact</span>
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex items-center gap-4 mt-8"
          >
            <span className="text-xs text-on-surface-variant font-medium tracking-wider uppercase">Connect</span>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/sanumittal946-eng"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-3 rounded-2xl border border-border dark:border-glass-white/20 bg-surface-dim text-on-surface hover:text-emerald-500 dark:hover:text-primary-container hover:border-primary-container transition-all shadow-sm"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/somil-mittal-293a72283"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-3 rounded-2xl border border-border dark:border-glass-white/20 bg-surface-dim text-on-surface hover:text-blue-500 hover:border-blue-500 transition-all shadow-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side: 3D Holographic Model Composition */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="relative w-full flex items-center justify-center"
        >
          <Hero3DModel />
        </motion.div>
      </div>
    </section>
  );
}
