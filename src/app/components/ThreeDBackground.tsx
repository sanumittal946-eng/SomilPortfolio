import { useEffect, useRef } from 'react';

interface ShootingStar {
  x: number; y: number;
  vx: number; vy: number;
  len: number;
  life: number;
  maxLife: number;
  active: boolean;
}

export function ThreeDBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef  = useRef({ x: -9999, y: -9999, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = (canvas.width  = window.innerWidth);
    let H = (canvas.height = window.innerHeight);
    let raf: number;
    const isMobile = W < 768;

    // ── Color helper ──────────────────────────────────────────────────
    const getColors = () => {
      const s         = getComputedStyle(document.documentElement);
      const primary   = s.getPropertyValue('--primary').trim()   || '#4f46e5';
      const secondary = s.getPropertyValue('--secondary').trim() || '#06b6d4';
      const isDark    = document.documentElement.classList.contains('dark');
      return { primary, secondary, isDark };
    };

    const withAlpha = (hex: string, alpha: number) =>
      hex + Math.round(Math.max(0, Math.min(1, alpha)) * 255).toString(16).padStart(2, '0');

    // ── Dot grid parameters ───────────────────────────────────────────
    const SPACING    = isMobile ? 38 : 46;   // gap between dots
    const DOT_R      = isMobile ? 0.9 : 1.1; // base dot radius
    const INFLUENCE  = 130;                   // mouse ripple radius
    const STRENGTH   = 22;                    // max pixel displacement

    // ── Shooting stars ────────────────────────────────────────────────
    const NUM_STARS = isMobile ? 2 : 4;
    const shootingStars: ShootingStar[] = Array.from({ length: NUM_STARS }, () => ({
      x: 0, y: 0, vx: 0, vy: 0, len: 0,
      life: 0, maxLife: 0, active: false,
    }));

    const activateStar = (s: ShootingStar) => {
      s.x = Math.random() * W * 0.8;
      s.y = Math.random() * H * 0.4;
      const angle = 0.1 + Math.random() * 0.3;
      const spd   = 10 + Math.random() * 6;
      s.vx = Math.cos(angle) * spd;
      s.vy = Math.sin(angle) * spd;
      s.len     = 80 + Math.random() * 100;
      s.life    = 0;
      s.maxLife = 30 + Math.random() * 25;
      s.active  = true;
    };
    shootingStars.forEach((s, i) =>
      setTimeout(() => activateStar(s), i * 2200 + Math.random() * 3500)
    );

    // ── Events ────────────────────────────────────────────────────────
    const onMouse = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;
    };
    const onLeave = () => { mouseRef.current.active = false; };
    const onResize = () => {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener('mousemove', onMouse);
    window.addEventListener('mouseleave', onLeave);
    window.addEventListener('resize', onResize);

    // ── Main loop ─────────────────────────────────────────────────────
    const loop = () => {
      ctx.clearRect(0, 0, W, H);
      const { primary, secondary, isDark } = getColors();
      const mouse = mouseRef.current;

      /* ── 1. Magnetic dot grid ──────────────────────────────────────── */
      const cols = Math.ceil(W / SPACING) + 2;
      const rows = Math.ceil(H / SPACING) + 2;
      const offX = (W % SPACING) / 2;
      const offY = (H % SPACING) / 2;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const gx = offX + c * SPACING;
          const gy = offY + r * SPACING;

          // Mouse repulsion / attraction
          let dx = 0, dy = 0;
          if (mouse.active) {
            const mx = gx - mouse.x;
            const my = gy - mouse.y;
            const dist = Math.sqrt(mx * mx + my * my);
            if (dist < INFLUENCE && dist > 0) {
              const force = (1 - dist / INFLUENCE) ** 2; // quadratic falloff
              dx = (mx / dist) * force * STRENGTH;
              dy = (my / dist) * force * STRENGTH;
            }
          }

          const px = gx + dx;
          const py = gy + dy;

          // Distance to mouse for color mixing
          const mdist = mouse.active
            ? Math.sqrt((px - mouse.x) ** 2 + (py - mouse.y) ** 2)
            : 9999;
          const proximity = Math.max(0, 1 - mdist / INFLUENCE);

          // Base dot opacity: very subtle
          const baseAlpha = isDark ? 0.12 : 0.09;
          const dotAlpha  = baseAlpha + proximity * (isDark ? 0.45 : 0.3);
          const dotSize   = DOT_R + proximity * 1.2;

          // Color: mix primary & secondary based on grid position + proximity
          const usePrimary = (r + c) % 2 === 0;
          const color = proximity > 0.05
            ? (usePrimary ? primary : secondary)
            : (isDark ? '#ffffff' : primary);

          ctx.save();
          ctx.globalAlpha = dotAlpha;
          if (proximity > 0.2 && isDark) {
            ctx.shadowBlur  = proximity * 8;
            ctx.shadowColor = color;
          }
          ctx.fillStyle = color;
          ctx.beginPath();
          ctx.arc(px, py, dotSize, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }

      /* ── 2. Subtle connection lines near mouse ─────────────────────── */
      if (mouse.active) {
        const nearDots: { x: number; y: number }[] = [];
        const cols2 = Math.ceil(W / SPACING) + 2;
        const rows2 = Math.ceil(H / SPACING) + 2;

        for (let r = 0; r < rows2; r++) {
          for (let c = 0; c < cols2; c++) {
            const gx = offX + c * SPACING;
            const gy = offY + r * SPACING;
            const mx2 = gx - mouse.x;
            const my2 = gy - mouse.y;
            const dist = Math.sqrt(mx2 * mx2 + my2 * my2);
            if (dist < INFLUENCE) {
              const force = (1 - dist / INFLUENCE) ** 2;
              nearDots.push({
                x: gx + (mx2 / dist) * force * STRENGTH,
                y: gy + (my2 / dist) * force * STRENGTH,
              });
            }
          }
        }

        // Draw lines between nearby displaced dots
        for (let i = 0; i < nearDots.length; i++) {
          for (let j = i + 1; j < nearDots.length; j++) {
            const dx2 = nearDots[i].x - nearDots[j].x;
            const dy2 = nearDots[i].y - nearDots[j].y;
            const d2  = Math.sqrt(dx2 * dx2 + dy2 * dy2);
            if (d2 < SPACING * 1.5) {
              const lineAlpha = (1 - d2 / (SPACING * 1.5)) * (isDark ? 0.12 : 0.07);
              ctx.save();
              ctx.globalAlpha = lineAlpha;
              ctx.strokeStyle = primary;
              ctx.lineWidth   = 0.5;
              ctx.beginPath();
              ctx.moveTo(nearDots[i].x, nearDots[i].y);
              ctx.lineTo(nearDots[j].x, nearDots[j].y);
              ctx.stroke();
              ctx.restore();
            }
          }
        }
      }

      /* ── 3. Shooting stars ─────────────────────────────────────────── */
      shootingStars.forEach((s) => {
        if (!s.active) return;
        s.life++;
        s.x += s.vx;
        s.y += s.vy;

        const prog  = s.life / s.maxLife;
        const alpha = prog < 0.25 ? prog / 0.25 : prog > 0.65 ? (1 - prog) / 0.35 : 1;
        const spd   = Math.hypot(s.vx, s.vy);
        const tailX = s.x - (s.vx / spd) * s.len;
        const tailY = s.y - (s.vy / spd) * s.len;

        const sGrad = ctx.createLinearGradient(tailX, tailY, s.x, s.y);
        sGrad.addColorStop(0,    withAlpha(primary,   0));
        sGrad.addColorStop(0.6,  withAlpha(secondary, 0.5));
        sGrad.addColorStop(1,    '#ffffff');

        ctx.save();
        ctx.globalAlpha = alpha * (isDark ? 0.7 : 0.4);
        ctx.strokeStyle = sGrad;
        ctx.lineWidth   = 1.5;
        ctx.lineCap     = 'round';
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(s.x, s.y);
        ctx.stroke();

        if (isDark) {
          ctx.globalAlpha = alpha * 0.55;
          ctx.shadowBlur  = 12;
          ctx.shadowColor = '#ffffff';
          ctx.fillStyle   = '#ffffff';
          ctx.beginPath();
          ctx.arc(s.x, s.y, 1.3, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();

        if (s.life >= s.maxLife) {
          s.active = false;
          setTimeout(() => activateStar(s), 3000 + Math.random() * 5000);
        }
      });

      /* ── 4. Mouse cursor halo ──────────────────────────────────────── */
      if (mouse.active) {
        const hr    = 160;
        const hGrad = ctx.createRadialGradient(
          mouse.x, mouse.y, 0,
          mouse.x, mouse.y, hr
        );
        hGrad.addColorStop(0,   withAlpha(primary,   isDark ? 0.08 : 0.05));
        hGrad.addColorStop(0.5, withAlpha(secondary, isDark ? 0.03 : 0.02));
        hGrad.addColorStop(1,   withAlpha(primary,   0));
        ctx.save();
        ctx.fillStyle   = hGrad;
        ctx.globalAlpha = 1;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, hr, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMouse);
      window.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 w-full h-full pointer-events-none select-none overflow-hidden"
      style={{ zIndex: 0 }}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />
    </div>
  );
}
