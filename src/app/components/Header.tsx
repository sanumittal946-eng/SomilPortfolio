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

  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Certificates', 'Contact'];

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
        className={`w-full max-w-7xl mx-auto px-4 sm:px-6 py-3 transition-all duration-300 rounded-2xl md:rounded-full border shadow-xl ${
          isScrolled || isMobileMenuOpen
            ? 'bg-surface-dim/95 dark:bg-deep-void/90 backdrop-blur-xl border-border dark:border-primary-container/20 shadow-2xl'
            : 'bg-surface-dim/80 dark:bg-glass-white/5 border-border dark:border-glass-white/20 backdrop-blur-md'
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl overflow-hidden border border-border dark:border-glass-white/20 shadow-sm flex items-center justify-center bg-surface-dim">
              <img src={logoImg} alt="SM Logo" className="w-full h-full object-cover" />
            </div>
            <div className="text-base sm:text-lg md:text-xl font-headline tracking-tight font-extrabold truncate whitespace-nowrap">
              <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-indigo-600 dark:from-primary-container dark:via-tertiary-fixed-dim dark:to-secondary-container bg-clip-text text-transparent">
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
                className="text-on-surface-variant hover:text-on-surface transition-all relative group font-headline text-xs uppercase tracking-wider font-semibold cursor-pointer"
              >
                {link}
                <span className="absolute -bottom-1.5 left-0 w-0 h-[2px] bg-primary-container transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full border border-border dark:border-glass-white/20 bg-surface-container/60 dark:bg-glass-white/10 hover:border-primary-container text-on-surface transition-all duration-300 relative overflow-hidden group cursor-pointer shadow-sm"
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
              className="px-6 py-2.5 bg-primary-container text-on-primary-container rounded-full hover:scale-105 hover:-translate-y-0.5 transition-all shadow-md font-headline text-xs uppercase tracking-wider font-bold cursor-pointer"
            >
              Get in Touch
            </button>
          </nav>

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex items-center gap-2.5 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl border border-border dark:border-glass-white/20 bg-surface-container/60 dark:bg-glass-white/10 text-on-surface cursor-pointer"
              aria-label="Toggle Theme"
            >
              <div className="w-5 h-5 flex items-center justify-center relative">
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </div>
            </button>
            <button
              className="p-2 text-on-surface hover:text-primary-container transition-colors cursor-pointer rounded-xl border border-border dark:border-glass-white/20 bg-surface-container/60 dark:bg-glass-white/10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-2 flex flex-col gap-2 animate-in fade-in slide-in-from-top-4 duration-300 border-t border-border dark:border-glass-white/10 pt-4">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollToSection(link)}
                className="text-on-surface hover:text-primary-container hover:bg-surface-container/60 transition-all text-left px-4 py-3 rounded-xl font-headline text-sm font-semibold cursor-pointer flex items-center justify-between group"
              >
                {link}
                <span className="w-1.5 h-1.5 rounded-full bg-primary-container opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="mt-2 px-6 py-3.5 bg-primary-container text-on-primary-container rounded-xl w-full text-center font-headline text-sm font-bold shadow-md transition-all cursor-pointer min-h-[44px]"
            >
              Get in Touch
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
