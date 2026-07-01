import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import logoImg from '../../assets/logo.png';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const isDarkNow = document.documentElement.classList.contains('dark');
    setTheme(isDarkNow ? 'dark' : 'light');
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className="fixed top-4 left-0 right-0 z-50 flex items-center justify-center px-4 md:px-6 transition-all duration-300"
    >
      <div
        className={`w-full max-w-7xl mx-auto px-4 sm:px-6 py-3 transition-all duration-300 rounded-2xl md:rounded-full border border-glass-white/20 shadow-[0_10px_30px_rgba(2,6,23,0.5)] ${
          isScrolled || isMobileMenuOpen
            ? 'bg-deep-void/90 backdrop-blur-xl border-primary-container/20 shadow-[0_0_30px_rgba(139,92,246,0.15)]'
            : 'bg-glass-white/5 backdrop-blur-md'
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg overflow-hidden border border-glass-white/20 shadow-[0_0_10px_rgba(0,218,243,0.25)] flex items-center justify-center bg-surface-dim">
              <img src={logoImg} alt="SM Logo" className="w-full h-full object-cover" />
            </div>
            <div className="text-base sm:text-lg md:text-xl font-headline tracking-tighter truncate whitespace-nowrap" style={{ fontWeight: 800 }}>
              <span className="bg-gradient-to-r from-primary-container via-tertiary-fixed-dim to-secondary-container bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(0,218,243,0.3)]">
                Somil Mittal
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollToSection(link)}
                className="text-on-surface/80 hover:text-primary-container transition-all relative group font-label-caps text-xs uppercase tracking-widest font-bold cursor-pointer"
              >
                {link}
                <span className="absolute -bottom-1.5 left-0 w-0 h-[2px] bg-primary-container transition-all duration-300 group-hover:w-full shadow-[0_0_8px_var(--primary-container)]" />
              </button>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full border border-glass-white/20 bg-glass-white/10 hover:bg-glass-white/20 hover:border-primary-container/40 text-on-surface hover:text-primary-container transition-all duration-300 relative overflow-hidden group cursor-pointer"
              aria-label="Toggle Theme"
            >
              <div className="relative w-5 h-5 flex items-center justify-center">
                <span className={`absolute transition-all duration-500 ${theme === 'dark' ? 'rotate-0 scale-100 opacity-100' : 'rotate-90 scale-0 opacity-0'}`}>
                  <Sun size={18} />
                </span>
                <span className={`absolute transition-all duration-500 ${theme === 'light' ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'}`}>
                  <Moon size={18} />
                </span>
              </div>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2.5 bg-primary-container text-on-primary-container rounded-full hover:scale-105 hover:-translate-y-0.5 transition-all shadow-[0_0_15px_rgba(195,244,0,0.4)] hover:shadow-[0_0_25px_rgba(195,244,0,0.65)] font-label-caps text-xs uppercase tracking-widest font-bold cursor-pointer"
            >
              Initialize Contact
            </button>
          </nav>

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-glass-white/20 bg-glass-white/10 text-on-surface hover:text-primary-container cursor-pointer"
              aria-label="Toggle Theme"
            >
              <div className="w-5 h-5 flex items-center justify-center relative">
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </div>
            </button>
            <button
              className="p-2 text-on-surface hover:text-primary-container transition-colors cursor-pointer"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-2 flex flex-col gap-2.5 animate-in fade-in slide-in-from-top-4 duration-300 border-t border-glass-white/10 pt-4">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollToSection(link)}
                className="text-on-surface/80 hover:text-primary-container hover:bg-glass-white/5 transition-all text-left px-4 py-3 rounded-xl font-label-caps text-xs uppercase tracking-widest font-bold cursor-pointer flex items-center justify-between group"
              >
                {link}
                <span className="w-1.5 h-1.5 rounded-full bg-primary-container opacity-0 group-hover:opacity-100 shadow-[0_0_8px_var(--primary-container)] transition-opacity" />
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="mt-2 px-6 py-3.5 bg-primary-container text-on-primary-container rounded-xl w-full text-center font-label-caps text-xs uppercase tracking-widest font-bold shadow-[0_0_15px_rgba(195,244,0,0.3)] hover:shadow-[0_0_25px_rgba(195,244,0,0.55)] transition-all cursor-pointer"
            >
              Initialize Contact
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
