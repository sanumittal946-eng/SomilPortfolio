import { Github, Linkedin, Mail, Heart, ArrowUp, Code2 } from 'lucide-react';

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
    color: 'primary',
  },
  {
    label: 'LinkedIn',
    href:  'https://www.linkedin.com/in/somil-mittal-293a72283',
    icon:  <Linkedin size={18} />,
    color: 'secondary',
  },
  {
    label: 'GitHub',
    href:  'https://github.com/somil566',
    icon:  <Github size={18} />,
    color: 'primary',
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative border-t border-border bg-background/80 backdrop-blur-sm">

      {/* Top gradient line */}
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{ background: 'linear-gradient(to right, transparent, var(--primary), var(--secondary), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6 pt-14 pb-8">

        {/* ── Main grid ─────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, var(--primary), var(--secondary))' }}
              >
                <Code2 size={16} color="white" />
              </div>
              <span style={{ fontWeight: 800, fontSize: '1.2rem', letterSpacing: '-0.02em' }}>
                Somil Mittal
              </span>
            </div>
            <p className="text-foreground/55 text-sm leading-relaxed mb-5">
              Full-Stack Developer &amp; AI Enthusiast building smart, scalable,
              and beautiful digital experiences.
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
                  className="w-9 h-9 rounded-xl flex items-center justify-center border transition-all hover:scale-110 hover:shadow-lg"
                  style={{
                    borderColor: `var(--${color})30`,
                    color:       `var(--${color})`,
                    background:  `var(--${color})08`,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = `var(--${color})`;
                    (e.currentTarget as HTMLElement).style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = `var(--${color})08`;
                    (e.currentTarget as HTMLElement).style.color = `var(--${color})`;
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm mb-5 text-foreground/40 uppercase tracking-widest" style={{ fontWeight: 700 }}>
              Navigate
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-foreground/60 hover:text-primary transition-colors flex items-center gap-2 group"
                    style={{ fontWeight: 500 }}
                  >
                    <span
                      className="w-0 h-px bg-primary transition-all duration-300 group-hover:w-4"
                      style={{ display: 'inline-block' }}
                    />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Status / availability */}
          <div>
            <h4 className="text-sm mb-5 text-foreground/40 uppercase tracking-widest" style={{ fontWeight: 700 }}>
              Status
            </h4>

            {/* Availability badge */}
            <div className="flex items-center gap-2 mb-5">
              <span className="relative flex h-2.5 w-2.5">
                <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                  style={{ background: '#22c55e' }}
                />
                <span
                  className="relative inline-flex rounded-full h-2.5 w-2.5"
                  style={{ background: '#22c55e' }}
                />
              </span>
              <span className="text-sm font-semibold" style={{ color: '#22c55e' }}>
                Available for work
              </span>
            </div>

            <p className="text-foreground/50 text-sm leading-relaxed mb-5">
              Open to freelance projects, internships, and full-time roles.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all hover:scale-105 hover:shadow-md"
              style={{
                background:  'linear-gradient(135deg, var(--primary), var(--secondary))',
                color:       'white',
                fontWeight:  600,
              }}
            >
              <Mail size={14} />
              Hire Me
            </a>
          </div>
        </div>

        {/* ── Bottom bar ──────────────────────────────────────────────── */}
        <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-foreground/45 text-sm flex items-center gap-1.5">
            © {year} Somil Mittal · Crafted with
            <Heart size={13} className="text-red-500 fill-red-500 animate-pulse" />
            and lots of coffee
          </p>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-2 text-sm text-foreground/45 hover:text-primary transition-colors group"
            style={{ fontWeight: 500 }}
          >
            Back to top
            <span className="w-7 h-7 rounded-lg border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary/5 transition-all">
              <ArrowUp size={14} />
            </span>
          </button>
        </div>

      </div>
    </footer>
  );
}
