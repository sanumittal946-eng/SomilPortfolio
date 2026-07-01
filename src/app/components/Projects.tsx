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
      threeDImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3IT1WZrfR1-bwJsoAglqTXVdWDvKC7J8zG6RaU6Y7tp1qacBPxZZeZ2ZFzzDrjOGsoH0g4Asq0J3786V8Ua2zvItQNY0D1StC2cifMARgnl4xjS-HR_nieJ_UNzdDQwSPcskBthJFt4_Ee2uEQnMLNMKPO-AnFo3CJVQMr_w6KzL3IXUWsozuny-oeE4q8CSm60gWWVgRf4xOMW9wAWnxZfjPRRqVVYjiyk0IgWVEB09r3WOO7muIdvF9p0_XGUl8f_N7nZX1ldg',
      status: 'ACTIVE',
      statusColor: 'bg-primary-container text-[#161e00] border-primary-container/30',
      hoverColor: 'hover:border-primary-container/40 hover:shadow-[0_0_25px_rgba(195,244,0,0.2)]',
      btnColor: 'bg-primary-container text-[#161e00] shadow-[0_0_12px_rgba(195,244,0,0.25)] hover:shadow-[0_0_20px_rgba(195,244,0,0.45)]',
      srcBtnHover: 'hover:border-primary-container/40 hover:bg-primary-container/5 hover:text-primary-container hover:shadow-[0_0_15px_rgba(195,244,0,0.15)]',
      demoUrl: 'https://dev-pod-deploy.vercel.app/',
      githubUrl: 'https://github.com/somil566/dev-pod-deploy-.git',
    },
    {
      title: 'Face Recognition Attendance System',
      description: 'An automated computer vision attendance system utilizing OpenCV and face recognition algorithms to identify individuals in real time and log attendance with timestamps.',
      tags: ['Python', 'OpenCV', 'Computer Vision', 'AI'],
      image: faceRecImg,
      threeDImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3WiCvxlqrD43soeLKCStIKXhawfGgtemLykIErFzR7Bq663y785gEqVoEs7GHwHs4uZiIhhxHKINDyfSP0yFb0kaDfzefSl5b8HwDD13Nv4_dTWmX1GFsVNDmFnq0hDCkrZsJuKRv5bqpIMVmKs6FZ2Y4vw_efY0YqqftujqMKah2yuGG56KkwToMlfwexttfu9RVujGV2NfdWBKnWta6buB3J7Wstdj0Ycw10HI3lUqtTqNmHJ_yetMXU7QBX217pNxBwGAou64',
      status: 'SYNCED',
      statusColor: 'bg-tertiary-fixed-dim text-[#00363d] border-tertiary-fixed-dim/30',
      hoverColor: 'hover:border-tertiary-fixed-dim/40 hover:shadow-[0_0_25px_rgba(0,218,243,0.2)]',
      btnColor: 'bg-tertiary-fixed-dim text-[#00363d] shadow-[0_0_12px_rgba(0,218,243,0.25)] hover:shadow-[0_0_20px_rgba(0,218,243,0.45)]',
      srcBtnHover: 'hover:border-tertiary-fixed-dim/40 hover:bg-tertiary-fixed-dim/5 hover:text-tertiary-fixed-dim hover:shadow-[0_0_15px_rgba(0,218,243,0.15)]',
      demoUrl: 'https://github.com/somil566',
      githubUrl: 'https://github.com/somil566/Face-recoztion-and-attend.git',
    },
    {
      title: 'Laundry Management System Software',
      description: 'Desktop/web management software designed for laundry operations, including order tracking, customer record management, and automated billing.',
      tags: ['Python', 'SQL', 'Database', 'Management System'],
      image: laundryImg,
      threeDImage: laundryImg,
      status: 'STABLE',
      statusColor: 'bg-glass-white text-on-surface border-glass-white/30',
      hoverColor: 'hover:border-glass-white/40 hover:shadow-[0_0_25px_rgba(255,255,255,0.15)]',
      btnColor: 'bg-glass-white text-on-surface shadow-[0_0_12px_rgba(255,255,255,0.15)] hover:shadow-[0_0_20px_rgba(255,255,255,0.35)]',
      srcBtnHover: 'hover:border-glass-white/40 hover:bg-glass-white/10 hover:text-on-surface hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]',
      demoUrl: 'https://github.com/somil566',
      githubUrl: 'https://github.com/somil566/smart-laundry-system.git',
    },
    {
      title: 'AI Finance Advisor — SaaS Platform',
      description: 'A full-stack AI-powered personal finance SaaS platform. Enables users to track income, expenses, and budgets in real time, visualize wealth growth through interactive Chart.js dashboards, and receive intelligent financial insights. Built with Supabase authentication, PostgreSQL via Prisma ORM, multi-currency support, and Stripe-powered subscription tiers (Free & Pro).',
      tags: ['Next.js', 'TypeScript', 'Supabase', 'Prisma', 'PostgreSQL', 'Chart.js', 'Stripe'],
      image: financeTrackerImg,
      threeDImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAD2zYT4gcktwpcL69r5iwkxOPpgQuTVaW4Qs6hpnmtuQmXJC1Zoid8cdGgf_EIrmU6L2XUF_MYyQvp8tBcRix7HJzwWTLdmqpiOiECoFnmCGarwjdfSj0AfeQ0GCGibg7VOJo8UFVtAsDwfwdq_IRuVnpsYkgf5lZAjOX2A-mkVoXwNGi0l4fAJZJcMGDWw8ft4qrpYC2IvIFUyUBgOGQ5w8zFDToCj0hhLez4FoYk5gCXW2s4pztjpUSfB2kfHHLfjjpOsgskPjQ',
      status: 'CALCULATING',
      statusColor: 'bg-secondary-container text-white border-secondary-container/30',
      hoverColor: 'hover:border-secondary-container/40 hover:shadow-[0_0_25px_rgba(255,74,141,0.2)]',
      btnColor: 'bg-secondary-container text-white shadow-[0_0_12px_rgba(255,74,141,0.25)] hover:shadow-[0_0_20px_rgba(255,74,141,0.45)]',
      srcBtnHover: 'hover:border-secondary-container/40 hover:bg-secondary-container/5 hover:text-secondary-container hover:shadow-[0_0_15px_rgba(255,74,141,0.15)]',
      demoUrl: 'https://finance-tracker-seven-iota.vercel.app/',
      githubUrl: 'https://github.com/somil566/finance-tracker',
    },
  ];

  const CARD_WIDTH = 380;
  const CARD_GAP = 32;

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
    <section id="projects" ref={ref} className="min-h-screen flex items-center justify-center py-24 px-6 overflow-hidden circuit-bg relative z-10">
      
      {/* Visual background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-container/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl w-full">

        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 relative"
        >
          <h2 className="mb-4 font-headline text-5xl md:text-6xl text-3d-metallic tracking-tighter" style={{ fontWeight: 800 }}>
            Mechanical Modules
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-container to-secondary-container mx-auto mb-6 rounded-full shadow-[0_0_15px_rgba(195,244,0,0.5)]" />
          <p className="text-lg text-on-surface-variant opacity-80 max-w-2xl mx-auto font-body">
            Active deployment of neural architectures. Interfacing with complex environments through physical logic representations.
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
            className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10 hidden md:block"
            style={{ background: 'linear-gradient(to right, #020617, transparent)' }}
          />
          <div
            className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10 hidden md:block"
            style={{ background: 'linear-gradient(to left, #020617, transparent)' }}
          />

          {/* Scrollable track */}
          <div
            ref={scrollRef}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
            onScroll={onScroll}
            className="flex gap-8 overflow-x-auto pb-8 hide-scrollbar"
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
                className={`isometric-card glass-panel rounded-2xl p-6 relative group flex-shrink-0 border border-glass-white/20 transition-all duration-300 ${project.hoverColor} hover:scale-102`}
                style={{
                  width: `${CARD_WIDTH}px`,
                  scrollSnapAlign: 'start',
                }}
              >
                {/* Screws */}
                <div className="absolute top-2 left-2 w-1 h-1 rounded-full bg-surface-bright opacity-20"></div>
                <div className="absolute top-2 right-2 w-1 h-1 rounded-full bg-surface-bright opacity-20"></div>
                <div className="absolute bottom-2 left-2 w-1 h-1 rounded-full bg-surface-bright opacity-20"></div>
                <div className="absolute bottom-2 right-2 w-1 h-1 rounded-full bg-surface-bright opacity-20"></div>

                {/* Tactical Status Badge */}
                <div className={`absolute -top-4 -left-4 ${project.statusColor} border px-3 py-1 rounded-full flex items-center gap-2 z-20 shadow-md`}>
                  <div className="w-1.5 h-1.5 rounded-full bg-current animate-pulse"></div>
                  <span className="font-label-caps text-[9px] font-bold tracking-wider">STATUS: {project.status}</span>
                </div>

                {/* Index Indicator */}
                <div className="absolute top-4 right-4 text-[10px] font-label-caps font-bold text-on-surface/40">
                  {String(index + 1).padStart(2, '0')} // {String(projects.length).padStart(2, '0')}
                </div>

                {/* 3D Visual Rendering Box */}
                <div className={`h-56 w-full bg-surface-container-lowest rounded-xl mb-6 relative overflow-hidden flex justify-center items-center border border-glass-white/10 transition-colors ${
                  project.hoverColor.includes('primary-container')
                    ? 'group-hover:border-primary-container/35'
                    : project.hoverColor.includes('tertiary-fixed-dim')
                    ? 'group-hover:border-tertiary-fixed-dim/35'
                    : project.hoverColor.includes('secondary-container')
                    ? 'group-hover:border-secondary-container/35'
                    : 'group-hover:border-glass-white/35'
                }`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-container/5 to-transparent pointer-events-none" />
                  <img
                    src={project.threeDImage}
                    alt={project.title}
                    draggable={false}
                    className="w-[75%] h-[80%] object-contain drop-shadow-[0_20px_35px_rgba(139,92,246,0.35)] group-hover:scale-110 transition-transform duration-500 select-none"
                  />
                  {/* Tactical visual overlays */}
                  <div className="absolute bottom-2 right-2 flex gap-0.5">
                    <div className="w-[3px] h-3 bg-primary-container opacity-40"></div>
                    <div className="w-[3px] h-4 bg-primary-container opacity-60"></div>
                    <div className="w-[3px] h-2 bg-primary-container opacity-85"></div>
                    <div className="w-[3px] h-5 bg-primary-container"></div>
                  </div>
                </div>

                {/* Module Description */}
                <div className="flex flex-col min-h-[220px]">
                  <h3 className="font-headline text-xl text-primary mb-1 flex items-center gap-2 group-hover:text-primary-container transition-colors" style={{ fontWeight: 700 }}>
                    <Layers size={18} className="text-primary-container" />
                    {project.title}
                  </h3>
                  <p className="font-label-caps text-[10px] text-on-surface/50 mb-3 tracking-wider">MODULE_PROTOCOL_v{index + 1}.0</p>
                  
                  <p className="font-body text-sm text-on-surface/80 opacity-80 mb-6 flex-grow leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-surface-container text-tertiary-fixed-dim font-label-caps text-[9px] px-3 py-1 rounded-full border border-tertiary-fixed-dim/15 tracking-wider uppercase font-semibold"
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
                      className={`flex-1 px-4 py-2.5 rounded-lg hover:scale-105 transition-transform flex items-center justify-center gap-1.5 font-label-caps font-bold text-xs shadow-md ${project.btnColor}`}
                    >
                      <ExternalLink size={13} />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 px-4 py-2.5 bg-transparent border border-glass-white text-on-surface rounded-lg transition-all flex items-center justify-center gap-1.5 font-label-caps font-bold text-xs ${project.srcBtnHover}`}
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
            aria-label="Previous module"
            className="w-12 h-12 rounded-full border flex items-center justify-center transition-all bg-deep-void cursor-pointer disabled:opacity-30"
            style={{
              borderColor: activeIndex === 0 ? 'var(--border)' : 'var(--primary-container)',
              color: activeIndex === 0 ? 'var(--on-surface)' : 'var(--primary-container)',
            }}
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
                  background: i === activeIndex
                    ? 'linear-gradient(to right, var(--primary-container), var(--tertiary-fixed-dim))'
                    : 'rgba(255,255,255,0.1)',
                }}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={activeIndex === projects.length - 1}
            aria-label="Next module"
            className="w-12 h-12 rounded-full border flex items-center justify-center transition-all bg-deep-void cursor-pointer disabled:opacity-30"
            style={{
              borderColor: activeIndex === projects.length - 1 ? 'var(--border)' : 'var(--primary-container)',
              color: activeIndex === projects.length - 1 ? 'var(--on-surface)' : 'var(--primary-container)',
            }}
          >
            <ChevronRight size={22} />
          </button>
        </motion.div>

        {/* Status text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-4 text-on-surface/40 text-xs font-label-caps tracking-widest"
        >
          DRAG TRACK OR USE CONTROLS TO ACCESS ARCHIVES // SYSTEM STABLE
        </motion.p>

      </div>
    </section>
  );
}
