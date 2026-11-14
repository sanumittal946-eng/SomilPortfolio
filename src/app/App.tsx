import { useState, useEffect } from 'react';
import { Toaster } from 'sonner';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Certificates } from './components/Certificates';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ThreeDBackground } from './components/ThreeDBackground';
import { AiAssistant } from './components/AiAssistant';
import { ThreeDScrollSection } from './components/ThreeDScrollSection';
import { NotFound } from './components/NotFound';
import { ErrorBoundary } from './components/ErrorBoundary';
import { PrivacyPolicy } from './components/PrivacyPolicy';

export default function App() {
  const [isNotFound, setIsNotFound] = useState(false);
  const [isPrivacy, setIsPrivacy] = useState(false);

  useEffect(() => {
    const checkRoute = () => {
      const pathname = window.location.pathname.toLowerCase();
      const search = window.location.search.toLowerCase();
      const hash = window.location.hash.toLowerCase();

      // Check Privacy Policy route
      if (
        hash === '#privacy' ||
        search.includes('page=privacy') ||
        pathname.includes('/privacy')
      ) {
        setIsPrivacy(true);
        setIsNotFound(false);
        return;
      }
      setIsPrivacy(false);

      // Explicit testing parameters or hash
      if (search.includes('error=404') || search.includes('test=404') || hash === '#404') {
        setIsNotFound(true);
        return;
      }

      // Normalized path matching for GitHub Pages base (/SomilPortfolio/) and local dev (/)
      const normalized = pathname.replace(/\/+$/, '') || '/';
      const validPaths = [
        '/',
        '/somilportfolio',
        '/index.html',
        '/somilportfolio/index.html',
        '/somilportfolio/privacy',
        '/somilportfolio/privacy.html',
        '/privacy',
        '/privacy.html',
      ];

      const isValid = validPaths.includes(normalized);
      setIsNotFound(!isValid);
    };

    checkRoute();
    window.addEventListener('popstate', checkRoute);
    window.addEventListener('hashchange', checkRoute);
    return () => {
      window.removeEventListener('popstate', checkRoute);
      window.removeEventListener('hashchange', checkRoute);
    };
  }, []);

  const handleResetToHome = () => {
    const base = window.location.pathname.toLowerCase().includes('/somilportfolio')
      ? '/SomilPortfolio/'
      : '/';
    window.history.pushState(null, '', base);
    setIsNotFound(false);
    setIsPrivacy(false);
  };

  const handleOpenPrivacy = () => {
    window.location.hash = '#privacy';
    setIsPrivacy(true);
    setIsNotFound(false);
  };

  const handleBackFromPrivacy = () => {
    const base = window.location.pathname.toLowerCase().includes('/somilportfolio')
      ? '/SomilPortfolio/'
      : '/';
    window.history.pushState(null, '', base);
    setIsPrivacy(false);
    setIsNotFound(false);
  };

  return (
    <ErrorBoundary>
      {isPrivacy ? (
        <PrivacyPolicy onBack={handleBackFromPrivacy} />
      ) : isNotFound ? (
        <NotFound onReset={handleResetToHome} />
      ) : (
        <div className="min-h-screen bg-background text-foreground antialiased relative overflow-x-hidden selection:bg-primary-container selection:text-on-primary-container">
          <ThreeDBackground />
          <Toaster position="top-right" richColors />
          <Header />
          <main className="relative z-10 flex flex-col gap-12 sm:gap-16">
            <Hero />
            <ThreeDScrollSection id="section-about">
              <About />
            </ThreeDScrollSection>
            <ThreeDScrollSection id="section-skills">
              <Skills />
            </ThreeDScrollSection>
            <ThreeDScrollSection id="section-projects">
              <Projects />
            </ThreeDScrollSection>
            <ThreeDScrollSection id="section-education">
              <Education />
            </ThreeDScrollSection>
            <ThreeDScrollSection id="section-certificates">
              <Certificates />
            </ThreeDScrollSection>
            <ThreeDScrollSection id="section-contact">
              <Contact />
            </ThreeDScrollSection>
          </main>
          <Footer onOpenPrivacy={handleOpenPrivacy} />
          <AiAssistant />
        </div>
      )}
    </ErrorBoundary>
  );
}
