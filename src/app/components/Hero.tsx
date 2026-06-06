import { motion } from 'motion/react';
import { Mail, ArrowRight, Download } from 'lucide-react';
import avatar from '../../assets/avatar.jpg';
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
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg tracking-wide mb-4 text-primary font-bold"
          >
            WELCOME TO MY PORTFOLIO
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-6"
            style={{ fontSize: '4rem', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.02em' }}
          >
            Hi, I'm{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Somil Mittal
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-3 bg-secondary/15 -z-10 rounded-full" />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl mb-8 text-foreground/80"
            style={{ fontWeight: 400, lineHeight: 1.6 }}
          >
            BCA (AI & ML) Student passionate about Artificial Intelligence, Machine Learning, and emerging technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={scrollToProjects}
              className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-xl hover:scale-105 transition-all flex items-center gap-2 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/35 cursor-pointer"
              style={{ fontWeight: 600 }}
            >
              View My Work
              <ArrowRight size={20} />
            </button>
            <a
              href={resumePdf}
              download="Somil_Mittal_Resume.pdf"
              className="px-8 py-4 bg-transparent border-2 border-primary/30 text-primary rounded-xl hover:bg-primary/5 hover:border-primary transition-all flex items-center gap-2 cursor-pointer decoration-transparent select-none text-center"
              style={{ fontWeight: 600 }}
            >
              <Download size={20} />
              Download Resume
            </a>
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-transparent border-2 border-primary/30 text-primary rounded-xl hover:bg-primary/5 hover:border-primary transition-all flex items-center gap-2 cursor-pointer"
              style={{ fontWeight: 600 }}
            >
              <Mail size={20} />
              Contact Me
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/10 rounded-full backdrop-blur-sm border border-primary/20" />
            <div className="absolute inset-8 bg-muted rounded-full flex items-center justify-center border-2 border-primary/20 shadow-2xl overflow-hidden">
              <img src={avatar} alt="Somil Mittal" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full backdrop-blur-sm border border-primary/20 animate-bounce" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/15 rounded-full backdrop-blur-sm border border-secondary/20 animate-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
