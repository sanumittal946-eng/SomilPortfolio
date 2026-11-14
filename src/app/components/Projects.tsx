import { motion } from 'motion/react';
import { useInView } from './useInView';
import { ExternalLink, Github, ChevronLeft, ChevronRight, Layers } from 'lucide-react';
import { useRef, useState, useCallback } from 'react';
import codeConnectImg from '../../assets/code_connect.png';
import faceRecImg from '../../assets/face_recognition.png';
import laundryImg from '../../assets/laundry_system.png';
import financeTrackerImg from '../../assets/finance_tracker.png';

export function Projects() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const projects = [
    {
      title: 'Code Connect (GDG Hackathon 1st Place)',
      description: 'A full-stack developer platform featuring real-time code sharing (Code Space), collaboration spaces (Pod Space), an AI Research Assistant, and gamified coding challenges with leaderboards. Secured 1st position at the GDG Hackathon.',
      tags: ['React', 'Full-Stack', 'AI Assistant', 'Real-Time'],
      image: codeConnectImg,
      threeDImage: codeConnectImg,
      aiFeature: 'AI Research Assistant & Real-Time Sync',
      badge: '🏆 1st Place GDG Hackathon',
      badgeColor: 'bg-emerald-500/10 text-emerald-600 dark:bg-primary-container/15 dark:text-primary-container border-emerald-500/30 dark:border-primary-container/30',
      hoverColor: 'hover:border-emerald-500/40 dark:hover:border-primary-container/40',
      demoUrl: 'https://dev-pod-deploy.vercel.app/',
      githubUrl: 'https://github.com/somil566/dev-pod-deploy-.git',
    },
    {
      title: 'Face Recognition Attendance System',
      description: 'An automated computer vision attendance system utilizing OpenCV and face recognition algorithms to identify individuals in real time and log attendance with timestamps.',
      tags: ['Python', 'OpenCV', 'Computer Vision', 'AI'],
      image: faceRecImg,
      threeDImage: faceRecImg,
      aiFeature: 'OpenCV Biometrics & Live Verification',
      badge: '👁️ Computer Vision & AI',
      badgeColor: 'bg-cyan-500/10 text-cyan-600 dark:bg-tertiary-fixed-dim/15 dark:text-tertiary-fixed-dim border-cyan-500/30 dark:border-tertiary-fixed-dim/30',
      hoverColor: 'hover:border-cyan-500/40 dark:hover:border-tertiary-fixed-dim/40',
      demoUrl: 'https://github.com/somil566',
      githubUrl: 'https://github.com/somil566/Face-recoztion-and-attend.git',
    },
    {
      title: 'Laundry Management System Software',
      description: 'Desktop and web database management software designed for laundry operations, including order tracking, customer record management, and automated invoice billing.',
      tags: ['Python', 'SQL', 'Database', 'Management System'],
      image: laundryImg,
      threeDImage: laundryImg,
      aiFeature: 'Relational Database & Workflow Engine',
      badge: '📊 Database & Billing System',
      badgeColor: 'bg-indigo-500/10 text-indigo-600 dark:bg-indigo-400/15 dark:text-indigo-300 border-indigo-500/30 dark:border-indigo-400/30',
      hoverColor: 'hover:border-indigo-500/40 dark:hover:border-indigo-400/40',
      demoUrl: 'https://github.com/somil566',
      githubUrl: 'https://github.com/somil566/smart-laundry-system.git',
    },
    {
      title: 'AI Finance Advisor — SaaS Platform',
      description: 'A full-stack AI-powered personal finance SaaS platform. Enables users to track income, expenses, and budgets in real time, visualize wealth growth through interactive Chart.js dashboards, and receive intelligent financial insights. Built with Supabase authentication, PostgreSQL via Prisma ORM, multi-currency support, and Stripe-powered subscription tiers (Free & Pro).',
      tags: ['Next.js', 'TypeScript', 'Supabase', 'Prisma', 'PostgreSQL', 'Chart.js', 'Stripe'],
      image: financeTrackerImg,
      threeDImage: financeTrackerImg,
      aiFeature: 'AI Financial Forecasting & Analytics',
      badge: '⚡ Full-Stack SaaS & Stripe',
      badgeColor: 'bg-pink-500/10 text-pink-600 dark:bg-secondary-container/15 dark:text-secondary-container border-pink-500/30 dark:border-secondary-container/30',
      hoverColor: 'hover:border-pink-500/40 dark:hover:border-secondary-container/40',
      demoUrl: 'https://finance-tracker-seven-iota.vercel.app/',
      githubUrl: 'https://github.com/somil566/finance-tracker',
    },
  ];

  const getStep = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return 380 + 24;
    const firstCard = el.querySelector<HTMLElement>('.project-card');
    if (firstCard) {
      return firstCard.offsetWidth + 20;
    }
    return Math.min(window.innerWidth * 0.86, 380) + 20;
  }, []);

  const scrollToIndex = useCallback((index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(index, projects.length - 1));
    setActiveIndex(clamped);
    const step = getStep();
    el.scrollTo({ left: clamped * step, behavior: 'smooth' });
  }, [projects.length, getStep]);

  const handlePrev = () => scrollToIndex(activeIndex - 1);
  const handleNext = () => scrollToIndex(activeIndex + 1);

  /* Drag-to-scroll */
  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX - (scrollRef.current?.offsetLeft ?? 0);
    scrollLeft.current = scrollRef.current?.scrollLeft ?? 0;
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    scrollRef.current.scrollLeft = scrollLeft.current - (x - startX.current);
  };
  const onMouseUp = () => {
    if (!isDragging.current || !scrollRef.current) return;
    isDragging.current = false;
    const step = getStep();
    const newIndex = Math.round(scrollRef.current.scrollLeft / step);
    setActiveIndex(Math.max(0, Math.min(newIndex, projects.length - 1)));
  };

  /* Sync dot indicator while native-scrolling */
  const onScroll = () => {
    if (isDragging.current || !scrollRef.current) return;
    const step = getStep();
    const newIndex = Math.round(scrollRef.current.scrollLeft / step);
    setActiveIndex(Math.max(0, Math.min(newIndex, projects.length - 1)));
  };

  return (
    <section id="projects" ref={ref} className="min-h-screen flex items-center justify-center py-14 sm:py-24 px-4 sm:px-6 overflow-hidden circuit-bg relative z-10">
      
      {/* Visual background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-container/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl w-full">

        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 relative"
        >
          <h2 className="mb-4 font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-3d-metallic tracking-tight" style={{ fontWeight: 800 }}>
            Featured Projects
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-500 to-indigo-500 dark:from-primary-container dark:to-secondary-container mx-auto mb-5 rounded-full shadow-[0_0_15px_rgba(195,244,0,0.5)]" />
          <p className="text-sm sm:text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto font-body leading-relaxed px-2">
            Real-world AI systems, computer vision architectures, and modern full-stack web applications.
          </p>
        </motion.div>

        {/* Carousel wrapper with 3D perspective */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative perspective-[1500px]"
        >
          {/* Left/Right fade overlays */}
          <div
            className="pointer-events-none absolute left-0 top-0 h-full w-16 sm:w-24 z-10 hidden md:block"
            style={{ background: 'linear-gradient(to right, var(--background), transparent)' }}
          />
          <div
            className="pointer-events-none absolute right-0 top-0 h-full w-16 sm:w-24 z-10 hidden md:block"
            style={{ background: 'linear-gradient(to left, var(--background), transparent)' }}
          />

          {/* Scrollable track */}
          <div
            ref={scrollRef}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
            onScroll={onScroll}
            className="flex gap-4 sm:gap-8 overflow-x-auto pb-8 hide-scrollbar px-3 sm:px-12"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              cursor: isDragging.current ? 'grabbing' : 'grab',
              scrollSnapType: 'x mandatory',
            }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
                className={`project-card w-[86vw] sm:w-[380px] max-w-[380px] rounded-3xl p-5 sm:p-6 relative group flex-shrink-0 bg-surface-dim border border-border dark:border-glass-white/20 transition-all duration-300 ${project.hoverColor} shadow-md hover:shadow-2xl hover:-translate-y-1.5`}
                style={{
                  scrollSnapAlign: 'start',
                }}
              >
                {/* Visual Screenshot Display */}
                <div className="h-56 w-full rounded-2xl mb-5 relative overflow-hidden border border-border dark:border-glass-white/10 shadow-sm bg-slate-950 group/img">
                  <img
                    src={project.threeDImage}
                    alt={project.title}
                    draggable={false}
                    className="w-full h-full object-cover object-top group-hover/img:scale-105 transition-all duration-700 select-none"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`${project.badgeColor} border px-3 py-1 rounded-lg font-headline text-xs font-semibold shadow-sm backdrop-blur-md`}>
                      {project.badge}
                    </span>
                  </div>
                </div>

                {/* Module Description */}
                <div className="flex flex-col min-h-[220px]">
                  <h3 className="font-headline text-xl text-on-surface mb-2 flex items-center gap-2 group-hover:text-emerald-500 dark:group-hover:text-primary-container transition-colors font-bold">
                    <Layers size={18} className="text-emerald-500 dark:text-primary-container flex-shrink-0" />
                    <span>{project.title}</span>
                  </h3>
                  
                  <p className="font-body text-sm text-on-surface-variant mb-6 flex-grow leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-slate-100 dark:bg-surface-container text-slate-800 dark:text-on-surface font-mono text-[10px] px-2.5 py-1 rounded-lg border border-slate-200 dark:border-glass-white/10 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 mt-auto">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2.5 rounded-xl bg-primary-container text-on-primary-container hover:opacity-90 transition-all flex items-center justify-center gap-1.5 font-headline font-semibold text-xs shadow-md cursor-pointer"
                    >
                      <ExternalLink size={13} />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2.5 bg-surface-dim border border-border dark:border-glass-white/20 text-on-surface hover:border-primary-container rounded-xl transition-all flex items-center justify-center gap-1.5 font-headline font-semibold text-xs shadow-sm hover:shadow-md cursor-pointer"
                    >
                      <Github size={13} />
                      Source
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Carousel controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center justify-center gap-6 mt-8"
        >
          <button
            onClick={handlePrev}
            disabled={activeIndex === 0}
            aria-label="Previous project"
            className="w-12 h-12 rounded-full border border-border dark:border-glass-white/20 flex items-center justify-center transition-all bg-surface-dim text-on-surface hover:border-primary-container cursor-pointer disabled:opacity-30 shadow-md"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Dot Indicators */}
          <div className="flex gap-2 items-center">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                aria-label={`Go to project ${i + 1}`}
                className="transition-all rounded-full h-2 cursor-pointer"
                style={{
                  width: i === activeIndex ? '28px' : '8px',
                  backgroundColor: i === activeIndex ? 'var(--primary-container)' : 'var(--border)',
                }}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={activeIndex === projects.length - 1}
            aria-label="Next project"
            className="w-12 h-12 rounded-full border border-border dark:border-glass-white/20 flex items-center justify-center transition-all bg-surface-dim text-on-surface hover:border-primary-container cursor-pointer disabled:opacity-30 shadow-md"
          >
            <ChevronRight size={22} />
          </button>
        </motion.div>

        {/* Helper prompt */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-4 text-on-surface-variant text-xs font-body"
        >
          Drag horizontally or use arrow buttons to explore projects
        </motion.p>

      </div>
    </section>
  );
}
