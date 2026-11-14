import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

// ── 1. Python Official Logo (Iconic Blue & Yellow Snakes with Eyes) ──
export function PythonLogo({ size = 24, className = '' }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.006 2.752h5.814v.826H3.9S0 5.782 0 11.897c0 6.114 3.407 5.9 3.407 5.9h2.033v-2.85s-.11-3.407 3.351-3.407h5.757s3.24.053 3.24-3.132V3.132S18.307 0 11.914 0zm-3.23 1.838a1.05 1.05 0 0 1 1.05 1.05 1.05 1.05 0 0 1-1.05 1.05 1.05 1.05 0 0 1-1.05-1.05 1.05 1.05 0 0 1 1.05-1.05z"
        fill="#3776AB"
      />
      <path
        d="M12.086 24c6.094 0 5.714-2.656 5.714-2.656l-.006-2.752H11.98v-.826h8.12s3.9.452 3.9-5.663c0-6.114-3.407-5.9-3.407-5.9h-2.033v2.85s.11 3.407-3.351 3.407H9.452s-3.24-.053-3.24 3.132v5.275s-.527 3.133 5.866 3.133zm3.23-1.838a1.05 1.05 0 0 1-1.05-1.05 1.05 1.05 0 0 1 1.05-1.05 1.05 1.05 0 0 1 1.05 1.05 1.05 1.05 0 0 1-1.05 1.05z"
        fill="#FFD43B"
      />
    </svg>
  );
}

// ── 2. C Programming Language Official Logo (Iconic Blue Hexagon Shield) ──
export function CLogo({ size = 24, className = '' }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
      <path
        fill="#00599C"
        d="M117.5 35.8L66.7 6.4c-1.7-1-3.7-1-5.4 0L10.5 35.8c-1.7 1-2.7 2.8-2.7 4.7v58.9c0 1.9 1 3.7 2.7 4.7l50.8 29.4c1.7 1 3.7 1 5.4 0l50.8-29.4c1.7-1 2.7-2.8 2.7-4.7V40.5c0-1.9-1-3.7-2.7-4.7z"
      />
      <path
        fill="#004482"
        d="M64 6.4c-.9 0-1.8.3-2.7.8L10.5 36.6c-1.7 1-2.7 2.8-2.7 4.7v58.9c0 1.9 1 3.7 2.7 4.7l50.8 29.4c.9.5 1.8.8 2.7.8V6.4z"
      />
      <path
        fill="#FFFFFF"
        d="M64.6 40.5c-14.7 0-25.2 9.5-25.2 23.5 0 14.1 10.5 23.5 25.2 23.5 9.4 0 17.5-4.4 21.6-11.4l-11.2-6.5c-2.3 4.1-6.1 6.5-10.4 6.5-7.5 0-12.7-5.3-12.7-12.1 0-6.8 5.2-12.1 12.7-12.1 4.3 0 8.1 2.4 10.4 6.5l11.2-6.5c-4.1-7-12.2-11.4-21.6-11.4z"
      />
    </svg>
  );
}

// ── 3. HTML5, CSS3 & JavaScript Official Combo ──
export function HtmlCssJsLogo({ size = 26, className = '' }: LogoProps) {
  return (
    <div className={`flex items-center -space-x-1 ${className}`} style={{ width: size * 1.5, height: size }}>
      {/* HTML5 Shield */}
      <svg width={size * 0.7} height={size} viewBox="0 0 512 512" fill="none">
        <path d="M71 460L30 0h452l-41 460-185 52-185-52z" fill="#E34F26" />
        <path d="M256 472l149-42 35-392H256v434z" fill="#EF652A" />
        <path d="M256 208h74l-7 77-67 19v44l117-33 16-180H256v73zm0-109h148l4-44H256v44z" fill="#FFFFFF" />
        <path d="M256 208v-73H108l4 44h144v29zm0 96l-67-19-4-50H137l8 97 111 31v-59z" fill="#EBEBEB" />
      </svg>
      {/* CSS3 Shield */}
      <svg width={size * 0.7} height={size} viewBox="0 0 512 512" fill="none">
        <path d="M71 460L30 0h452l-41 460-185 52-185-52z" fill="#1572B6" />
        <path d="M256 472l149-42 35-392H256v434z" fill="#33A9DC" />
        <path d="M256 208h74l-7 77-67 19v44l117-33 16-180H256v73zm0-109h148l4-44H256v44z" fill="#FFFFFF" />
        <path d="M256 208v-73H108l4 44h144v29zm0 96l-67-19-4-50H137l8 97 111 31v-59z" fill="#EBEBEB" />
      </svg>
      {/* JavaScript Square */}
      <svg width={size * 0.7} height={size} viewBox="0 0 24 24">
        <rect width="24" height="24" rx="4" fill="#F7DF1E" />
        <path
          d="M6.5 18.5l1.8-1.1c.4.7.7 1.2 1.5 1.2.8 0 1.3-.3 1.3-1.5V10h2.3v7.2c0 2.4-1.4 3.5-3.5 3.5-1.9 0-3-1-3.4-2.2zm7.6-.3l1.8-1c.5.8 1.1 1.4 2.2 1.4 1 0 1.6-.5 1.6-1.2 0-.8-.6-1.1-1.8-1.6l-.6-.3c-1.8-.7-3-1.7-3-3.6 0-1.8 1.4-3.2 3.5-3.2 1.5 0 2.6.5 3.4 1.9l-1.8 1.1c-.4-.7-.8-1-1.6-1-.8 0-1.3.4-1.3 1 0 .7.5 1 1.5 1.4l.6.3c2.1.9 3.3 1.8 3.3 3.8 0 2.2-1.7 3.4-3.8 3.4-2.1 0-3.4-1-4.1-2.4z"
          fill="#000000"
        />
      </svg>
    </div>
  );
}

// ── 4. OpenCV Official Logo (Iconic Red, Green & Blue Interlocking Tri-Circles) ──
export function OpenCvLogo({ size = 24, className = '' }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 1024 1024" className={className}>
      {/* Red Circle (Top) */}
      <path
        d="M512 0c-141.4 0-256 114.6-256 256 0 107.5 66.4 199.5 160 237.2v-115.6c-37.1-26.6-60-70.1-60-121.6 0-79.5 64.5-144 144-144s144 64.5 144 144c0 51.5-22.9 95-60 121.6v115.6c93.6-37.7 160-129.7 160-237.2 0-141.4-114.6-256-256-256z"
        fill="#EA4335"
      />
      {/* Green Circle (Bottom Left) */}
      <path
        d="M192 480c-141.4 0-256 114.6-256 256s114.6 256 256 256c107.5 0 199.5-66.4 237.2-160h-115.6c-26.6 37.1-70.1 60-121.6 60-79.5 0-144-64.5-144-144s64.5-144 144-144c51.5 0 95 22.9 121.6 60h115.6c-37.7-93.6-129.7-160-237.2-160z"
        fill="#34A853"
      />
      {/* Blue Circle (Bottom Right) */}
      <path
        d="M832 480c-107.5 0-199.5 66.4-237.2 160h115.6c26.6-37.1 70.1-60 121.6-60 79.5 0 144 64.5 144 144s-64.5 144-144 144c-51.5 0-95-22.9-121.6-60h-115.6c37.7 93.6 129.7 160 237.2 160 141.4 0 256-114.6 256-256s-114.6-256-256-256z"
        fill="#4285F4"
      />
    </svg>
  );
}

// ── 5. PyTorch Official Logo (Iconic Orange/Red Flame with Connection Node) ──
export function PyTorchLogo({ size = 24, className = '' }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
      <path
        d="M12.655.006a10.64 10.64 0 0 0-3.693.896c-.443.21-.497.778-.13.987l1.096.623a.62.62 0 0 0 .622-.016 7.8 7.8 0 0 1 2.05-.623c4.717-.74 8.79 3.036 8.35 7.747-.384 4.126-3.83 7.37-7.973 7.494a8.212 8.212 0 0 1-5.836-2.28 7.915 7.915 0 0 1-2.45-6.07c.077-2.617 1.4-4.836 3.42-6.108a.596.596 0 0 0 .267-.563l-.155-1.24a.593.593 0 0 0-.698-.51 10.638 10.638 0 0 0-4.99 3.518C.89 6.275.466 9.49.5 12.637c.074 6.177 5.093 11.233 11.272 11.357 6.47.13 11.728-5.068 11.728-11.517C23.5 5.568 18.528.163 12.655.006z"
        fill="#EE4C2C"
      />
      <path d="M13.684 4.095a1.278 1.278 0 1 1-2.556 0 1.278 1.278 0 0 1 2.556 0z" fill="#EE4C2C" />
      <path
        d="M14.654 6.78a.428.428 0 0 0-.585-.145l-4.51 2.766a.43.43 0 0 0-.154.582l.86 1.488c.11.19.349.261.545.16l4.51-2.767a.43.43 0 0 0 .154-.582l-.82-1.502z"
        fill="#EE4C2C"
      />
    </svg>
  );
}

// ── 6. AI & Machine Learning Duo Logo (TensorFlow + PyTorch Synergy) ──
export function AiMachineLearningLogo({ size = 24, className = '' }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
      <path d="M1.292 5.856L11.54 0v24l-4.095-2.378V7.525l-6.153 3.56V5.856z" fill="#FF6F00" />
      <path d="M22.708 5.856L12.46 0v24l4.095-2.378V7.525l6.153 3.56V5.856z" fill="#FFA800" />
    </svg>
  );
}

// ── 7. React Atom Official Logo (Cyan Nucleus & Orbits) ──
export function ReactLogo({ size = 24, className = '' }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="-11.5 -10.23174 23 20.46348" className={className}>
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

// ── 8. VS Code Official Logo (Microsoft Blue Origami Ribbon) ──
export function VsCodeLogo({ size = 24, className = '' }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
      <path
        d="M17.583 23.667a1.667 1.667 0 0 0 1.25-.567l4.75-4.417a1.667 1.667 0 0 0 .417-1.15V6.467a1.667 1.667 0 0 0-.417-1.15l-4.75-4.417a1.667 1.667 0 0 0-2.317.333L8.7 8.35 4.383 5.083a1.25 1.25 0 0 0-1.466 0l-2.5 1.884a1.25 1.25 0 0 0-.417 1.15v7.766a1.25 1.25 0 0 0 .417 1.15l2.5 1.884a1.25 1.25 0 0 0 1.466 0l4.317-3.267 7.817 7.117a1.667 1.667 0 0 0 1.066.417z"
        fill="#0065A9"
      />
      <path
        d="M18.833 23.1l4.75-4.417a1.667 1.667 0 0 0 .417-1.15V6.467a1.667 1.667 0 0 0-.417-1.15L18.833.9a1.667 1.667 0 0 0-1.766-.233L7.75 6.2 16.5 12l-8.75 5.8 9.317 5.533a1.667 1.667 0 0 0 1.766-.233z"
        fill="#007ACC"
      />
      <path
        d="M18.833 23.1a1.667 1.667 0 0 0 .417-1.15V2.05a1.667 1.667 0 0 0-.417-1.15L16.5.9 8.7 8.35 16.5 12l-7.8 3.65 7.8 7.45z"
        fill="#1F9CF0"
      />
    </svg>
  );
}

// ── 9. Git Official Logo (Orange-Red Diamond Branch Node) ──
export function GitLogo({ size = 24, className = '' }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
      <path
        d="M23.546 10.93L13.067.452a1.5 1.5 0 0 0-2.126 0L8.808 2.585l3.056 3.055a1.782 1.782 0 0 1 2.26 2.285l3.082 3.082a1.783 1.783 0 1 1-1.07 1.054l-2.88-2.88c-.372.106-.777.106-1.15 0l-2.456 2.456a1.785 1.785 0 1 1-1.064-.326l2.49-2.49a1.794 1.794 0 0 1-.303-1.61L8.78 4.195 1.454 11.52a1.5 1.5 0 0 0 0 2.126l10.479 10.478a1.5 1.5 0 0 0 2.126 0l9.487-9.487a1.5 1.5 0 0 0 0-2.127z"
        fill="#F05032"
      />
    </svg>
  );
}

// ── 10. Flutter Official Logo (Google Cyan & Blue Layered Geometric Wings) ──
export function FlutterLogo({ size = 24, className = '' }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
      <path d="M14.314 0L2.3 12 6 15.7 21.684 0h-7.37z" fill="#47C5FB" />
      <path d="M14.286 11.314L8.17 17.43l3.7 3.7 3.7-3.7 6.114-6.116h-7.398z" fill="#00569E" />
      <path d="M21.684 24l-6.114-6.114 3.7-3.7L24 18.886 21.684 24z" fill="#00B5F8" />
      <path d="M11.87 21.13l3.7 2.87h6.114L15.57 17.43l-3.7 3.7z" fill="#01579B" />
    </svg>
  );
}

// ── 11. Figma Official Logo (Iconic 5-Color Layout) ──
export function FigmaLogo({ size = 24, className = '' }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 38 57" className={className}>
      <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE" />
      <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0ACF83" />
      <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#FF7262" />
      <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E" />
      <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF" />
    </svg>
  );
}

// ── 12. Canva Official Logo (Vibrant Gradient Circle with Stylized "C") ──
export function CanvaLogo({ size = 24, className = '' }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
      <circle cx="12" cy="12" r="11" fill="url(#canva-grad)" />
      <path
        d="M14.5 16.5c-2.3 0-4.2-1.7-4.2-4.5 0-3.1 2.2-4.5 4.3-4.5 1.5 0 2.5.7 2.9 1.4l-1.3 1c-.3-.5-.9-.9-1.6-.9-1.4 0-2.4 1.1-2.4 3 0 1.8 1.1 2.9 2.5 2.9.8 0 1.5-.4 1.8-1l1.3.9c-.6 1-1.7 1.7-3.3 1.7z"
        fill="#FFFFFF"
      />
      <defs>
        <linearGradient id="canva-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00C4CC" />
          <stop offset="100%" stopColor="#7D2AE8" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// ── 13. ACM Official Logo (Association for Computing Machinery) ──
export function AcmLogo({ size = 24, className = '' }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
      <path d="M50 5 L95 50 L50 95 L5 50 Z" fill="none" stroke="#0075A2" strokeWidth="7" strokeLinejoin="round" />
      <text x="50" y="58" fontSize="26" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle" fill="#0075A2">
        acm
      </text>
    </svg>
  );
}

// ── 14. OpenCV & PyTorch Dual Vision Logo ──
export function OpenCvPyTorchLogo({ size = 26, className = '' }: LogoProps) {
  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      <OpenCvLogo size={size * 0.9} />
      <span className="text-on-surface-variant/40 text-xs">/</span>
      <PyTorchLogo size={size * 0.9} />
    </div>
  );
}

// ── 15. Git & GitHub Dual Logo ──
export function GitGitHubLogo({ size = 26, className = '' }: LogoProps) {
  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      <GitLogo size={size * 0.9} />
      <span className="text-on-surface-variant/40 text-xs">&amp;</span>
      <svg width={size * 0.9} height={size * 0.9} viewBox="0 0 24 24" fill="currentColor" className="text-on-surface">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        />
      </svg>
    </div>
  );
}
