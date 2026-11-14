import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';

interface ThreeDScrollSectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export function ThreeDScrollSection({
  children,
  id,
  className = '',
}: ThreeDScrollSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 85,
    damping: 25,
    restDelta: 0.001,
  });

  // 3D Perspective Transformations: smooth on mobile, rich on desktop
  const opacity = useTransform(smoothProgress, [0, 0.15, 0.85, 1], [0.4, 1, 1, 0.4]);
  const scale = useTransform(smoothProgress, [0, 0.18, 0.82, 1], [0.97, 1, 1, 0.97]);
  const rotateXDesktop = useTransform(smoothProgress, [0, 0.18, 0.82, 1], [3, 0, 0, -3]);
  const yDesktop = useTransform(smoothProgress, [0, 0.18, 0.82, 1], [30, 0, 0, -30]);
  const yMobile = useTransform(smoothProgress, [0, 0.15, 0.85, 1], [12, 0, 0, -12]);

  return (
    <motion.section
      ref={sectionRef}
      id={id}
      style={{
        opacity,
        scale: isMobile ? 1 : scale,
        rotateX: isMobile ? 0 : rotateXDesktop,
        y: isMobile ? yMobile : yDesktop,
        transformPerspective: isMobile ? undefined : 1200,
      }}
      className={`relative w-full overflow-hidden sm:overflow-visible ${className}`}
    >
      {children}
    </motion.section>
  );
}
