import { useState } from 'react';
import { Mail, Github, Linkedin, Heart, ArrowUp, Code2 } from 'lucide-react';
import logoImg from '../../assets/logo.png';

const NAV_LINKS = [
  { label: 'About',        href: '#about' },
  { label: 'Skills',       href: '#skills' },
  { label: 'Projects',     href: '#projects' },
  { label: 'Education',    href: '#education' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact',      href: '#contact' },
];

const SOCIAL_LINKS = [
  {
    label: 'Email',
    href:  'mailto:somilmittal946@gmail.com',
    icon:  <Mail size={18} />,
    color: 'cyan',
  },
  {
    label: 'LinkedIn',
    href:  'https://www.linkedin.com/in/somil-mittal-293a72283',
    icon:  <Linkedin size={18} />,
    color: 'pink',
  },
  {
    label: 'GitHub',
    href:  'https://github.com/somil566',
    icon:  <Github size={18} />,
    color: 'lime',
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-deep-void border-t border-glass-white/10 pt-16 pb-8 shadow-[0_-20px_50px_rgba(139,92,246,0.15)] w-full px-6 md:px-12 relative overflow-hidden z-10">
      
      {/* Top neon gradient line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary-container to-transparent drop-shadow-[0_0_8px_var(--primary-container)]" />

      {/* Background ambient glow effect */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-electric-purple/10 rounded-full blur-[80px] pointer-events-none z-0" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ── Main grid ─────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Column 1: Brand & Logo */}
          <div className="relative p-6 bg-surface-dim/20 backdrop-blur-sm rounded-2xl border border-glass-white/10 group">
            {/* Screws */}
            <div className="absolute top-2 left-2 w-1 h-1 rounded-full bg-surface-bright opacity-20"></div>
            <div className="absolute top-2 right-2 w-1 h-1 rounded-full bg-surface-bright opacity-20"></div>
            <div className="absolute bottom-2 left-2 w-1 h-1 rounded-full bg-surface-bright opacity-20"></div>
            <div className="absolute bottom-2 right-2 w-1 h-1 rounded-full bg-surface-bright opacity-20"></div>

            <div className="flex items-center mb-4">
              <div className="w-9 h-9 rounded-xl overflow-hidden flex items-center justify-center bg-primary-container/10 border border-primary-container/20 text-primary-container drop-shadow-[0_0_5px_var(--primary-container)]">
                <img src={logoImg} alt="SM Logo" className="w-full h-full object-cover" />
              </div>
              <span className="font-headline text-lg font-bold text-on-surface select-none ml-3">
                SOMIL MITTAL
              </span>
            </div>
            <p className="text-on-surface/65 text-sm font-body leading-relaxed mb-6 mt-4">
              Full-Stack Developer &amp; AI Enthusiast building smart, scalable,
              and visually premium digital experiences.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {SOCIAL_LINKS.map(({ label, href, icon, color }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300 hover:scale-110 ${
                    color === 'cyan'
                      ? 'border-tertiary-fixed-dim/20 hover:border-tertiary-fixed-dim/50 hover:bg-tertiary-fixed-dim/10 text-tertiary-fixed-dim hover:shadow-[0_0_15px_rgba(0,218,243,0.4)]'
                      : color === 'pink'
                      ? 'border-secondary-container/20 hover:border-secondary-container/50 hover:bg-secondary-container/10 text-secondary-container hover:shadow-[0_0_15px_rgba(255,74,141,0.4)]'
                      : 'border-primary-container/20 hover:border-primary-container/50 hover:bg-primary-container/10 text-primary-container hover:shadow-[0_0_15px_rgba(195,244,0,0.4)]'
                  }`}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="p-6">
            <h4 className="text-xs mb-6 text-on-surface/40 font-label-caps uppercase tracking-widest font-bold">
              Navigate
            </h4>
            <ul className="space-y-3.5">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm font-body text-on-surface/65 hover:text-primary-container transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-[2px] bg-primary-container transition-all duration-300 group-hover:w-3 shadow-[0_0_8px_var(--primary-container)]" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Availability & Contact Action */}
          <div className="p-6 relative bg-surface-dim/20 backdrop-blur-sm rounded-2xl border border-glass-white/10 group">
            {/* Screws */}
            <div className="absolute top-2 left-2 w-1 h-1 rounded-full bg-surface-bright opacity-20"></div>
            <div className="absolute top-2 right-2 w-1 h-1 rounded-full bg-surface-bright opacity-20"></div>
            <div className="absolute bottom-2 left-2 w-1 h-1 rounded-full bg-surface-bright opacity-20"></div>
            <div className="absolute bottom-2 right-2 w-1 h-1 rounded-full bg-surface-bright opacity-20"></div>

            <h4 className="text-xs mb-6 text-on-surface/40 font-label-caps uppercase tracking-widest font-bold">
              Status
            </h4>

            {/* Availability status badge */}
            <div className="flex items-center gap-2.5 mb-5 p-3 bg-emerald-500/5 rounded-xl border border-emerald-500/20 max-w-fit glow-green">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-label-caps uppercase tracking-wider font-bold text-emerald-400">
                Available for work
              </span>
            </div>

            <p className="text-on-surface/65 text-sm font-body leading-relaxed mb-6">
              Open to freelance collaborations, academic research, and full-time engineering roles.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-label-caps uppercase tracking-widest font-bold bg-primary-container text-on-primary-container hover:scale-105 hover:-translate-y-0.5 transition-all shadow-[0_0_15px_rgba(195,244,0,0.4)] hover:shadow-[0_0_25px_rgba(195,244,0,0.65)]"
            >
              <Mail size={14} />
              Hire Me
            </a>
          </div>

        </div>

        {/* ── Bottom Bar ──────────────────────────────────────────────── */}
        <div className="max-w-7xl mx-auto pt-6 border-t border-glass-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
          <p className="text-on-surface/45 text-xs font-label-caps uppercase tracking-wider font-bold flex items-center flex-wrap justify-center gap-1.5">
            © {year} Somil Mittal · Crafted with
            <Heart size={13} className="text-secondary-container fill-secondary-container animate-pulse" />
            and lots of coffee
          </p>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-2.5 text-xs font-label-caps uppercase tracking-widest font-bold text-on-surface/45 hover:text-primary-container transition-colors group cursor-pointer"
          >
            Back to top
            <span className="w-8 h-8 rounded-full border border-glass-white/20 bg-glass-white/5 flex items-center justify-center group-hover:border-primary-container group-hover:bg-primary-container/10 group-hover:shadow-[0_0_10px_rgba(195,244,0,0.2)] transition-all">
              <ArrowUp size={14} />
            </span>
          </button>
        </div>

      </div>
    </footer>
  );
}
