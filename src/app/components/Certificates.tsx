import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { useInView } from './useInView';
import { Award, ExternalLink, BadgeCheck, X, Eye } from 'lucide-react';
import googleCertPdf from '../../assets/Google Certified.pdf';
import nptelCertPdf from '../../assets/NPTEL Certificet.pdf';
import unstopCertJpg from '../../assets/UNSTOP DSA in Python.jpg';
import gdgCertJpeg from '../../assets/Google DEV won.jpeg';
import codvedaCertPdf from '../../assets/Codveda Internship Certificate.pdf';

export function Certificates() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [activeCert, setActiveCert] = useState<any | null>(null);

  // Load Credly embed script dynamically
  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="//cdn.credly.com/assets/utilities/embed.js"]'
    );
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = '//cdn.credly.com/assets/utilities/embed.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const certificates = [
    {
      name: 'Gemini Certified Student',
      platform: 'Google',
      year: '2026',
      pdfUrl: googleCertPdf as string,
    },
    {
      name: 'NPTEL Certification',
      platform: 'NPTEL — IIT',
      year: '2026',
      pdfUrl: nptelCertPdf as string,
    },
    {
      name: 'Python DSA Completion',
      platform: 'Unstop',
      year: '2026',
      pdfUrl: unstopCertJpg as string,
    },
    {
      name: '1st Place — Let\'s Hack It Hackathon',
      platform: 'GDG On Campus Poornima University',
      year: '2025',
      pdfUrl: gdgCertJpeg as string,
    },
    {
      name: 'Web Development Intern',
      platform: 'Codveda Technologies',
      year: '2026',
      pdfUrl: codvedaCertPdf as string,
    },
  ];

  const credlyBadges = [
    {
      id: '82976cba-ca1b-4a3a-ba56-a25bd799c546',
      width: 150,
      height: 270,
      label: 'View this badge on Credly',
    },
    {
      id: 'a06cf9ce-1308-485d-b9c9-da81528988a1',
      width: 150,
      height: 270,
      label: 'View this badge on Credly',
    },
    {
      id: '1764e4aa-3fef-4a9d-bc4e-f1fe0dde3e87',
      width: 150,
      height: 270,
      label: 'View this badge on Credly',
    },
    {
      id: '0191cd86-8141-41f3-b643-5f9be42e21b6',
      width: 150,
      height: 270,
      label: 'View this badge on Credly',
    },
    {
      id: 'c2f5fde0-bd28-454a-ab7c-b22e9e67699b',
      width: 150,
      height: 270,
      label: 'View this badge on Credly',
    },
    {
      id: 'da191e22-d7f8-411d-9c95-2dbc12e0d30f',
      width: 150,
      height: 270,
      label: 'View this badge on Credly',
    },
  ];

  return (
    <section id="certificates" ref={ref} className="min-h-screen flex items-center justify-center py-20 px-6 relative overflow-hidden z-10">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[550px] h-[550px] bg-electric-purple/5 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="max-w-7xl w-full relative z-10">
 
        {/* ── Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 font-headline text-5xl md:text-6xl text-3d-metallic tracking-tighter" style={{ fontWeight: 800 }}>
            Certifications &amp; Badges
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-container via-tertiary-fixed-dim to-secondary-container mx-auto mb-4 shadow-[0_0_8px_var(--primary-container)]" />
          <p className="text-md md:text-lg text-on-surface/75 max-w-2xl mx-auto font-body">
            Professional certifications, completed courses, and verified digital badges
          </p>
        </motion.div>
 
        {/* ── Certificate Cards ── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="group relative p-6 bg-surface-dim/40 backdrop-blur-md rounded-2xl border border-glass-white/10 shadow-lg hover:shadow-2xl hover:scale-105 hover:border-primary-container/30 transition-all overflow-hidden"
            >
              {/* Screws */}
              <div className="absolute top-2 left-2 w-1 h-1 rounded-full bg-surface-bright opacity-20"></div>
              <div className="absolute top-2 right-2 w-1 h-1 rounded-full bg-surface-bright opacity-20"></div>
              <div className="absolute bottom-2 left-2 w-1 h-1 rounded-full bg-surface-bright opacity-20"></div>
              <div className="absolute bottom-2 right-2 w-1 h-1 rounded-full bg-surface-bright opacity-20"></div>

              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
 
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-primary-container/10 border border-primary-container/20 rounded-xl group-hover:bg-primary-container/20 text-primary-container transition-colors flex-shrink-0">
                    <Award size={26} strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold font-body text-on-surface group-hover:text-primary-container transition-colors mb-2" style={{ lineHeight: 1.3 }}>
                      {cert.name}
                    </h3>
                    <p className="text-on-surface/70 font-semibold text-sm font-body mb-1">
                      {cert.platform}
                    </p>
                    <p className="text-xs text-on-surface/40 font-label-caps uppercase tracking-wider font-bold">{cert.year}</p>
                  </div>
                </div>
 
                <div className="flex gap-2.5 mt-6">
                  <button
                    onClick={() => setActiveCert(cert)}
                    className="flex-1 px-4 py-2.5 bg-primary-container/10 border border-primary-container/20 text-primary-container hover:bg-primary-container hover:text-on-primary-container rounded-lg hover:shadow-[0_0_12px_var(--primary-container)] transition-all flex items-center justify-center gap-2 font-label-caps text-xs uppercase tracking-widest font-bold cursor-pointer"
                  >
                    <Eye size={14} />
                    View Preview
                  </button>
                  <a
                    href={cert.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2.5 bg-glass-white/5 border border-glass-white/10 hover:border-primary-container/30 rounded-lg hover:bg-glass-white/20 text-on-surface hover:text-primary-container transition-all flex items-center justify-center cursor-pointer"
                    title="Open in new tab"
                  >
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
 
        {/* ── Digital Badges (Credly) ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Sub-heading */}
          <div className="flex items-center gap-3 mb-8">
            <BadgeCheck size={22} className="text-secondary-container drop-shadow-[0_0_5px_var(--secondary-container)]" />
            <h3 style={{ fontSize: '1.25rem' }} className="font-label-caps uppercase tracking-widest text-secondary-container font-bold">Verified Digital Badges</h3>
            <div className="flex-1 h-px bg-glass-white/10 ml-4" />
          </div>
 
          <div className="flex flex-wrap gap-6 justify-center md:justify-start">
            {credlyBadges.map((badge) => (
              <motion.div
                key={badge.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative group"
              >
                {/* Glow ring */}
                <div
                  className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(135deg, var(--primary-container), var(--tertiary-fixed-dim))',
                    filter: 'blur(8px)',
                    zIndex: 0,
                  }}
                />
 
                {/* Badge card */}
                <div
                  className="relative rounded-2xl border border-glass-white/10 bg-surface-dim/80 backdrop-blur-sm p-5 shadow-lg group-hover:shadow-[0_0_20px_rgba(0,218,243,0.3)] transition-all flex flex-col items-center gap-3"
                  style={{ zIndex: 1 }}
                >
                  {/* Credly embed */}
                  <div
                    data-iframe-width={badge.width}
                    data-iframe-height={badge.height}
                    data-share-badge-id={badge.id}
                    data-share-badge-host="https://www.credly.com"
                  />
 
                  {/* Credly attribution */}
                  <a
                    href={`https://www.credly.com/badges/${badge.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-[10px] text-on-surface/45 hover:text-tertiary-fixed-dim transition-colors mt-1 font-label-caps uppercase tracking-wider font-bold"
                  >
                    <ExternalLink size={12} />
                    Verify on Credly
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
 
      </div>

      {/* ── Certificate Preview Modal ── */}
      {activeCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-deep-void/90 backdrop-blur-md animate-fade-in">
          <div className="relative bg-surface-dim rounded-2xl border border-glass-white/20 p-6 max-w-4xl w-full h-[85vh] flex flex-col shadow-[0_0_50px_rgba(139,92,246,0.35)]">
            
            {/* Screws */}
            <div className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full bg-surface-bright opacity-30"></div>
            <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-surface-bright opacity-30"></div>
            <div className="absolute bottom-2 left-2 w-1.5 h-1.5 rounded-full bg-surface-bright opacity-30"></div>
            <div className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full bg-surface-bright opacity-30"></div>

            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-glass-white/10 pb-4 mb-4">
              <div>
                <h3 className="text-lg font-bold font-headline text-primary-container">{activeCert.name}</h3>
                <p className="text-xs text-on-surface/60 font-body mt-0.5">{activeCert.platform} · {activeCert.year}</p>
              </div>
              <button 
                onClick={() => setActiveCert(null)}
                className="p-2 rounded-lg bg-glass-white/5 border border-glass-white/10 text-on-surface/70 hover:text-white hover:bg-glass-white/20 transition-all cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Body: Document Preview */}
            <div className="flex-1 bg-surface-container rounded-xl border border-glass-white/10 overflow-hidden flex items-center justify-center relative">
              {activeCert.pdfUrl.toLowerCase().includes('.pdf') ? (
                <iframe 
                  src={activeCert.pdfUrl} 
                  title={activeCert.name} 
                  className="w-full h-full border-none bg-surface-container"
                />
              ) : (
                <img 
                  src={activeCert.pdfUrl} 
                  alt={activeCert.name} 
                  className="max-w-full max-h-full object-contain p-2"
                />
              )}
            </div>

            {/* Modal Footer */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-glass-white/10 pt-4 mt-4">
              <span className="text-xs text-on-surface/40 font-label-caps uppercase tracking-wider font-semibold">
                SECURE ACCESS LOGGED // ENCRYPTED LINK
              </span>
              <div className="flex gap-3 w-full sm:w-auto">
                <a
                  href={activeCert.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none px-5 py-2.5 bg-primary-container text-on-primary-container hover:scale-105 transition-all rounded-lg flex items-center justify-center gap-1.5 font-label-caps font-bold text-xs shadow-md shadow-primary-container/20"
                >
                  <ExternalLink size={14} />
                  Open in New Tab
                </a>
                <button
                  onClick={() => setActiveCert(null)}
                  className="flex-1 sm:flex-none px-5 py-2.5 bg-transparent border border-glass-white text-on-surface hover:bg-glass-white/15 transition-all rounded-lg font-label-caps font-bold text-xs cursor-pointer"
                >
                  Close Preview
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
