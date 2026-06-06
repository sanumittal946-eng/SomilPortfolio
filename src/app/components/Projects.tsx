import { motion } from 'motion/react';
import { useInView } from './useInView';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
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
      demoUrl: 'https://dev-pod-deploy.vercel.app/',
      githubUrl: 'https://github.com/somil566/dev-pod-deploy-.git',
    },
    {
      title: 'Face Recognition Attendance System',
      description: 'An automated computer vision attendance system utilizing OpenCV and face recognition algorithms to identify individuals in real time and log attendance with timestamps.',
      tags: ['Python', 'OpenCV', 'Computer Vision', 'AI'],
      image: faceRecImg,
      demoUrl: 'https://github.com/somil566',
      githubUrl: 'https://github.com/somil566/Face-recoztion-and-attend.git',
    },
    {
      title: 'Laundry Management System Software',
      description: 'Desktop/web management software designed for laundry operations, including order tracking, customer record management, and automated billing.',
      tags: ['Python', 'SQL', 'Database', 'Management System'],
      image: laundryImg,
      demoUrl: 'https://github.com/somil566',
      githubUrl: 'https://github.com/somil566/smart-laundry-system.git',
    },
    {
      title: 'AI Finance Advisor — SaaS Platform',
      description: 'A full-stack AI-powered personal finance SaaS platform. Enables users to track income, expenses, and budgets in real time, visualize wealth growth through interactive Chart.js dashboards, and receive intelligent financial insights. Built with Supabase authentication, PostgreSQL via Prisma ORM, multi-currency support, and Stripe-powered subscription tiers (Free & Pro).',
      tags: ['Next.js', 'TypeScript', 'Supabase', 'Prisma', 'PostgreSQL', 'Chart.js', 'Stripe'],
      image: financeTrackerImg,
      demoUrl: 'https://finance-tracker-seven-iota.vercel.app/',
      githubUrl: 'https://github.com/somil566/finance-tracker',
    },
  ];

  const CARD_WIDTH = 380;
  const CARD_GAP = 24;

  const scrollToIndex = useCallback((index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(index, projects.length - 1));
    setActiveIndex(clamped);
    el.scrollTo({ left: clamped * (CARD_WIDTH + CARD_GAP), behavior: 'smooth' });
  }, [projects.length]);

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
    const newIndex = Math.round(scrollRef.current.scrollLeft / (CARD_WIDTH + CARD_GAP));
    setActiveIndex(Math.max(0, Math.min(newIndex, projects.length - 1)));
  };

  /* Sync dot indicator while native-scrolling */
  const onScroll = () => {
    if (isDragging.current || !scrollRef.current) return;
    const newIndex = Math.round(scrollRef.current.scrollLeft / (CARD_WIDTH + CARD_GAP));
    setActiveIndex(Math.max(0, Math.min(newIndex, projects.length - 1)));
  };

  return (
    <section id="projects" ref={ref} className="min-h-screen flex items-center justify-center py-20 px-6 overflow-hidden">
      <div className="max-w-7xl w-full">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4" style={{ fontSize: '3.5rem', fontWeight: 700, letterSpacing: '-0.02em' }}>
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-4" />
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </motion.div>

        {/* Carousel wrapper */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          {/* Left fade overlay */}
          <div
            className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10"
            style={{ background: 'linear-gradient(to right, var(--background), transparent)' }}
          />
          {/* Right fade overlay */}
          <div
            className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10"
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
            className="flex gap-6 overflow-x-auto pb-6 hide-scrollbar"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              cursor: isDragging.current ? 'grabbing' : 'grab',
              paddingLeft: '48px',
              paddingRight: '48px',
              scrollSnapType: 'x mandatory',
            }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
                className="group bg-background/60 backdrop-blur-sm rounded-2xl border border-border overflow-hidden shadow-lg hover:shadow-2xl hover:border-primary/30 transition-all hover:scale-[1.02] flex-shrink-0"
                style={{
                  width: `${CARD_WIDTH}px`,
                  scrollSnapAlign: 'start',
                }}
              >
                {/* Thumbnail */}
                <div className="relative h-52 bg-muted/50 overflow-hidden border-b border-border">
                  <img
                    src={project.image}
                    alt={project.title}
                    draggable={false}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 select-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  {/* Index badge */}
                  <div
                    className="absolute top-3 right-3 text-xs px-2 py-1 rounded-full backdrop-blur-md"
                    style={{
                      background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                      color: 'var(--primary-foreground)',
                      fontWeight: 700,
                    }}
                  >
                    {String(index + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col" style={{ minHeight: '260px' }}>
                  <h3
                    className="text-xl mb-2 group-hover:text-primary transition-colors"
                    style={{ fontWeight: 700 }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-foreground/75 mb-4 flex-1"
                    style={{ fontSize: '0.9rem', lineHeight: 1.65 }}
                  >
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary/5 text-primary rounded-full text-xs border border-primary/10"
                        style={{ fontWeight: 600 }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 px-4 py-2.5 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-lg hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-md shadow-primary/10 hover:shadow-lg hover:shadow-primary/20 cursor-pointer"
                      style={{ fontWeight: 600, fontSize: '0.9rem' }}
                    >
                      <ExternalLink size={15} />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 px-4 py-2.5 bg-transparent border-2 border-primary/20 text-primary rounded-lg hover:bg-primary/5 hover:border-primary/50 transition-all flex items-center justify-center gap-2 cursor-pointer"
                      style={{ fontWeight: 600, fontSize: '0.9rem' }}
                    >
                      <Github size={15} />
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Controls row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center justify-center gap-6 mt-6"
        >
          {/* Prev button */}
          <button
            onClick={handlePrev}
            disabled={activeIndex === 0}
            aria-label="Previous project"
            className="w-11 h-11 rounded-full border-2 flex items-center justify-center transition-all"
            style={{
              borderColor: activeIndex === 0 ? 'var(--border)' : 'var(--primary)',
              color: activeIndex === 0 ? 'var(--foreground)' : 'var(--primary)',
              opacity: activeIndex === 0 ? 0.35 : 1,
              background: 'var(--background)',
            }}
          >
            <ChevronLeft size={20} />
          </button>

          {/* Dot indicators */}
          <div className="flex gap-2 items-center">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                aria-label={`Go to project ${i + 1}`}
                className="transition-all rounded-full"
                style={{
                  width: i === activeIndex ? '28px' : '8px',
                  height: '8px',
                  background: i === activeIndex
                    ? 'linear-gradient(to right, var(--primary), var(--secondary))'
                    : 'var(--border)',
                  opacity: i === activeIndex ? 1 : 0.5,
                }}
              />
            ))}
          </div>

          {/* Next button */}
          <button
            onClick={handleNext}
            disabled={activeIndex === projects.length - 1}
            aria-label="Next project"
            className="w-11 h-11 rounded-full border-2 flex items-center justify-center transition-all"
            style={{
              borderColor: activeIndex === projects.length - 1 ? 'var(--border)' : 'var(--primary)',
              color: activeIndex === projects.length - 1 ? 'var(--foreground)' : 'var(--primary)',
              opacity: activeIndex === projects.length - 1 ? 0.35 : 1,
              background: 'var(--background)',
            }}
          >
            <ChevronRight size={20} />
          </button>
        </motion.div>

        {/* Project counter text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-3 text-foreground/40 text-sm"
        >
          {activeIndex + 1} of {projects.length} projects &nbsp;·&nbsp; drag or use arrows to explore
        </motion.p>

      </div>
    </section>
  );
}
