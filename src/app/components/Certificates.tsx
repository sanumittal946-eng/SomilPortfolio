import { motion } from 'motion/react';
import { useEffect } from 'react';
import { useInView } from './useInView';
import { Award, ExternalLink, BadgeCheck } from 'lucide-react';
import googleCertPdf from '../../assets/Google Certified.pdf';
import nptelCertPdf from '../../assets/NPTEL Certificet.pdf';

export function Certificates() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

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
  ];

  return (
    <section id="certificates" ref={ref} className="min-h-screen flex items-center justify-center py-20 px-6">
      <div className="max-w-7xl w-full">

        {/* ── Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4" style={{ fontSize: '3.5rem', fontWeight: 700, letterSpacing: '-0.02em' }}>
            Certifications &amp; Badges
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-4" />
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
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
              className="group relative p-6 bg-background/60 backdrop-blur-sm rounded-2xl border border-foreground/10 shadow-lg hover:shadow-2xl hover:scale-105 transition-all overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-foreground/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />

              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-foreground/10 rounded-xl group-hover:bg-foreground/20 transition-colors flex-shrink-0">
                    <Award size={28} className="text-foreground/70" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg mb-2" style={{ fontWeight: 700, lineHeight: 1.3 }}>
                      {cert.name}
                    </h3>
                    <p className="text-foreground/60 mb-1" style={{ fontWeight: 500, fontSize: '0.9rem' }}>
                      {cert.platform}
                    </p>
                    <p className="text-sm text-foreground/50">{cert.year}</p>
                  </div>
                </div>

                <a
                  href={cert.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-4 px-4 py-2.5 bg-foreground/5 border border-foreground/10 rounded-lg hover:bg-foreground hover:text-background transition-all flex items-center justify-center gap-2"
                  style={{ fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}
                >
                  View Certificate
                  <ExternalLink size={16} />
                </a>
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
            <BadgeCheck size={22} className="text-primary" />
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Verified Digital Badges</h3>
            <div className="flex-1 h-px bg-border ml-2" />
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
                    background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                    filter: 'blur(8px)',
                    zIndex: 0,
                  }}
                />

                {/* Badge card */}
                <div
                  className="relative rounded-2xl border border-border bg-background/80 backdrop-blur-sm p-5 shadow-lg group-hover:shadow-2xl transition-all flex flex-col items-center gap-3"
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
                    className="flex items-center gap-1.5 text-xs text-foreground/50 hover:text-primary transition-colors mt-1"
                    style={{ fontWeight: 500 }}
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
    </section>
  );
}
