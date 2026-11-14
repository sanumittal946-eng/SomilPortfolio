import React, { useState } from 'react';
import { motion } from 'motion/react';

export function Hero3DModel() {
  const [mousePos, setMousePos] = useState({ rotateX: 0, rotateY: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Interactive 3D Parallax Tilt Calculation
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth < 768) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    setMousePos({ rotateX, rotateY });
  };

  const handleMouseEnter = () => {
    if (window.innerWidth >= 768) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePos({ rotateX: 0, rotateY: 0 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[380px] sm:h-[480px] md:h-[580px] flex items-center justify-center perspective-[1200px] overflow-hidden sm:overflow-visible select-none"
    >
      {/* ── Ambient Glow behind 3D Model ── */}
      <div className="absolute w-[260px] sm:w-[360px] h-[260px] sm:h-[360px] bg-electric-purple/20 dark:bg-electric-purple/25 rounded-full blur-[80px] sm:blur-[100px] z-0 animate-pulse pointer-events-none" />
      <div className="absolute w-[200px] sm:w-[280px] h-[200px] sm:h-[280px] bg-primary-container/15 rounded-full blur-[70px] sm:blur-[90px] z-0 pointer-events-none" />

      {/* ── 3D Interactive Scene Container ── */}
      <motion.div
        style={{
          transform: isHovered
            ? `rotateX(${mousePos.rotateX}deg) rotateY(${mousePos.rotateY}deg) scale3d(1.02, 1.02, 1.02)`
            : 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
          transformStyle: 'preserve-3d',
          transition: isHovered ? 'transform 0.08s ease-out' : 'transform 0.5s ease-out',
        }}
        className="relative w-full h-full flex items-center justify-center"
      >
        {/* Central 3D Holographic Brain Asset */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="absolute w-full h-full max-w-[280px] sm:max-w-[360px] md:max-w-[440px] max-h-[280px] sm:max-h-[360px] md:max-h-[440px] float-animation z-20 flex items-center justify-center pointer-events-none select-none"
          style={{ transform: 'translateZ(40px)' }}
        >
          <img
            className="w-full h-full object-contain filter drop-shadow-[0_0_30px_rgba(139,92,246,0.4)] sm:drop-shadow-[0_0_40px_rgba(139,92,246,0.5)] dark:drop-shadow-[0_0_50px_rgba(139,92,246,0.6)]"
            alt="3D Holographic neural brain floating with circuits"
            draggable={false}
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHOGdt-bCzCfSbqfGeMc07qlSIZz0JBIOYKbfPoHje6wy5BPMJzBLNCA3K3XHdjqslZs-0P09aSUsKAW6L3UNQAygqnyf0_u8AAspWAcjKqimr9WVzQsWX6YXArau4ridaYzOs4T-Z_VgptOm6RSnL0qQLseEpb9leQ7o-sQppmB_5n_ZGaEHRGHvAbL8ceWJxaH4CehTSpVY3_jjQi6IT5-yl_vtrqFjGnwDTn71yiAFWC1UXdprG9dExZMA2XwQESwGr_1GIkxA"
          />
        </motion.div>

        {/* Floating Code Panel 1 (Top Left) */}
        <motion.div
          initial={{ opacity: 0, x: -30, y: -30 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="absolute top-[4%] sm:top-[8%] left-1 sm:left-[6%] md:left-2 w-48 sm:w-64 scale-[0.82] sm:scale-100 origin-top-left code-panel rounded-2xl p-3 sm:p-4 transform -rotate-6 float-animation z-30 shadow-xl border border-border dark:border-glass-white/20 pointer-events-none"
          style={{
            animationDelay: '-2s',
            transform: isHovered
              ? `rotateX(${mousePos.rotateX * 0.7}deg) rotateY(${mousePos.rotateY * 0.7}deg) translateZ(80px) rotate(-6deg)`
              : 'translateZ(60px) rotate(-6deg)',
          }}
        >
          <div className="flex items-center gap-1.5 border-b border-border dark:border-glass-white/10 pb-2 mb-2">
            <div className="w-2.5 h-2.5 rounded-full bg-secondary-container" />
            <div className="w-2.5 h-2.5 rounded-full bg-primary-container" />
            <div className="w-2.5 h-2.5 rounded-full bg-tertiary-fixed-dim" />
            <span className="text-[10px] font-mono text-on-surface-variant ml-2 font-medium">neural_core.py</span>
          </div>
          <div className="font-mono text-[9px] sm:text-[10px] text-on-surface leading-relaxed opacity-95">
            <span className="text-purple-600 dark:text-[#a855f7] font-semibold">def</span>{' '}
            <span className="text-cyan-600 dark:text-[#06b6d4] font-semibold">optimize_neural_path</span>():<br />
            &nbsp;&nbsp;tensor = load_weights()<br />
            &nbsp;&nbsp;<span className="text-purple-600 dark:text-[#a855f7] font-semibold">while</span> loss &gt; threshold:<br />
            &nbsp;&nbsp;&nbsp;&nbsp;backpropagate(tensor)<br />
            &nbsp;&nbsp;<span className="text-purple-600 dark:text-[#a855f7] font-semibold">return</span> model.compiled()
          </div>
        </motion.div>

        {/* Floating Data Wave Panel 2 (Bottom Right) */}
        <motion.div
          initial={{ opacity: 0, x: 30, y: 30 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute bottom-[4%] sm:bottom-[10%] right-1 sm:right-[6%] md:-right-2 w-52 sm:w-68 scale-[0.82] sm:scale-100 origin-bottom-right code-panel rounded-2xl p-3 sm:p-4 transform rotate-3 float-animation z-30 shadow-xl border border-border dark:border-glass-white/20 pointer-events-none"
          style={{
            animationDelay: '-1s',
            transform: isHovered
              ? `rotateX(${mousePos.rotateX * 0.7}deg) rotateY(${mousePos.rotateY * 0.7}deg) translateZ(80px) rotate(3deg)`
              : 'translateZ(60px) rotate(3deg)',
          }}
        >
          <div className="flex items-center justify-between border-b border-border dark:border-glass-white/10 pb-2 mb-2">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-secondary-container" />
              <div className="w-2.5 h-2.5 rounded-full bg-primary-container" />
              <div className="w-2.5 h-2.5 rounded-full bg-tertiary-fixed-dim" />
            </div>
            <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
              99.4% REAL-TIME
            </span>
          </div>
          <img
            className="w-full h-16 sm:h-20 object-cover opacity-90 rounded-lg dark:mix-blend-screen"
            alt="3D Holographic data wave chart"
            draggable={false}
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNHZL6_AgMpwnoKdENAoBcRNppKSJEQzH7F37yIwPQlqrktYSENWhxjB8ZEiysYcVD7LT9uFLVKzPlOUx2Kc3BaCWoCMrqOgV9YQb1sDF94ZXtXqciZw7HI7nQNCG97SMzJrLX1TuA2U6mYBNbLK2eL-uCP5q8QOtyjxbbhXS-SC1zeY4RCjtOpk9ARj0LLXBd0DmNO7-QnWs0iNlYDn5e9LCNjHG3q56dwabUHxlD94d2DuynjzY9lyactCaECA1pjr6-u_lAOJg"
          />
        </motion.div>

        {/* 3D Vinyl Developer Avatar with VR Goggles (Bottom Left) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="absolute -bottom-10 left-0 w-36 h-48 z-40 hidden sm:block pointer-events-none select-none"
          style={{
            transform: isHovered
              ? `rotateX(${mousePos.rotateX * 0.5}deg) rotateY(${mousePos.rotateY * 0.5}deg) translateZ(100px)`
              : 'translateZ(90px)',
          }}
        >
          <img
            className="w-full h-full object-contain filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.4)] dark:drop-shadow-[0_20px_35px_rgba(0,0,0,0.7)]"
            alt="Developer 3D vinyl avatar with VR goggles"
            draggable={false}
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2Nx9_4QzDIo24ppZKctS1WzFh1JObd1qe6RJg1aBzWbRWZ_g2ByRbSdEwF5QzFb0z5btmzmU2VHP5CBw30Mf6m1RVL3NBzizgVGtXMrLyjJPSFhB8ZWn7R5x_pYKQHkbdEnAvjuu7TPRIzqUWsyaZ2UuboCCofGODxOccDf1N7n0_QJpwmcNybIkC9-i9f4Q-B4KTlxm7B1oYbSwEnwvIJqMirHblmkTdEFRZE1zCwMUOKmN-1FAckdV3r-5bTihivbhfHqBIMqY"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
