import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  showSubtitle = false,
  className = ''
}) => {
  // SVG White Crown / Dealership Crest Icon
  const CrownIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} text-white drop-shadow-[0_2px_8px_rgba(255,255,255,0.4)]`}
      aria-hidden="true"
    >
      {/* Crown base platform */}
      <path
        d="M12 48H52V52C52 53.1 51.1 54 50 54H14C12.9 54 12 53.1 12 52V48Z"
        fill="currentColor"
      />
      <rect x="16" y="49.5" width="32" height="2" rx="1" fill="#071A3D" opacity="0.6" />
      
      {/* Crown main peaks */}
      <path
        d="M10 46L16 20L28 35L32 12L36 35L48 20L54 46H10Z"
        fill="currentColor"
      />
      
      {/* Peak Jewels / Spheres */}
      <circle cx="32" cy="11" r="3.8" fill="currentColor" />
      <circle cx="16" cy="19" r="3.2" fill="currentColor" />
      <circle cx="48" cy="19" r="3.2" fill="currentColor" />
      
      {/* Center diamond automotive accent */}
      <path
        d="M32 25L36 32L32 39L28 32Z"
        fill="#071A3D"
      />
      <circle cx="22" cy="42" r="1.8" fill="#071A3D" />
      <circle cx="32" cy="42" r="2.2" fill="#FF8A00" />
      <circle cx="42" cy="42" r="1.8" fill="#071A3D" />
    </svg>
  );

  if (size === 'xl') {
    return (
      <div className={`inline-flex flex-col items-center select-none ${className}`}>
        {/* Top Crest / Crown & Script Row */}
        <div className="flex items-center justify-center gap-3 sm:gap-4">
          <div className="p-2 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_0_25px_rgba(255,255,255,0.15)] flex items-center justify-center">
            <CrownIcon className="w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16" />
          </div>
          <span
            className="font-script text-[#7B61C9] text-5xl sm:text-7xl lg:text-8xl tracking-wide font-normal drop-shadow-[0_4px_16px_rgba(123,97,201,0.5)] transform -rotate-2"
            style={{
              fontFamily: "'Great Vibes', 'Playball', cursive",
              textShadow: '0 0 35px rgba(123, 97, 201, 0.6)'
            }}
          >
            Premium
          </span>
        </div>

        {/* IMPORTS Bold Modern Lettering */}
        <div className="mt-1 sm:mt-2">
          <span
            className="font-heading font-black text-[#FF8A00] text-4xl sm:text-6xl lg:text-7xl tracking-[0.18em] sm:tracking-[0.22em] uppercase drop-shadow-[0_4px_24px_rgba(255,138,0,0.5)] leading-none inline-block pl-2"
            style={{
              fontFamily: "'Montserrat', 'Outfit', sans-serif"
            }}
          >
            IMPORTS
          </span>
        </div>

        {showSubtitle && (
          <div className="mt-3 flex items-center gap-2 text-[11px] sm:text-xs font-bold tracking-[0.25em] uppercase text-slate-300">
            <span className="w-6 sm:w-10 h-[1px] bg-gradient-to-r from-transparent to-[#FF8A00]"></span>
            <span>ALMAS KHALIL CAR VILLAGE • PESHAWAR</span>
            <span className="w-6 sm:w-10 h-[1px] bg-gradient-to-l from-transparent to-[#FF8A00]"></span>
          </div>
        )}
      </div>
    );
  }

  if (size === 'lg') {
    return (
      <div className={`inline-flex flex-col select-none ${className}`}>
        <div className="flex items-center gap-2.5 sm:gap-3">
          <CrownIcon className="w-7 h-7 sm:w-9 sm:h-9" />
          <div className="flex flex-col">
            <span
              className="font-script text-[#7B61C9] text-3xl sm:text-4xl tracking-wide leading-none"
              style={{
                fontFamily: "'Great Vibes', 'Playball', cursive",
                textShadow: '0 0 20px rgba(123, 97, 201, 0.45)'
              }}
            >
              Premium
            </span>
            <span
              className="font-heading font-black text-[#FF8A00] text-xl sm:text-2xl tracking-[0.2em] uppercase leading-none mt-1"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              IMPORTS
            </span>
          </div>
        </div>
        {showSubtitle && (
          <span className="text-[10px] font-semibold tracking-wider text-slate-400 mt-1 pl-10">
            PESHAWAR, PAKISTAN
          </span>
        )}
      </div>
    );
  }

  // sm & md for Sticky Navbar & Compact Cards
  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Clean White Crown Icon */}
      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white/5 border border-white/15 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(255,255,255,0.15)]">
        <CrownIcon className={size === 'sm' ? 'w-5 h-5' : 'w-6 h-6'} />
      </div>

      {/* Text Lockup */}
      <div className="flex flex-col justify-center leading-tight">
        <div className="flex items-baseline gap-1.5">
          <span
            className={`font-script text-[#7B61C9] leading-none ${
              size === 'sm' ? 'text-2xl' : 'text-2xl sm:text-3xl'
            }`}
            style={{
              fontFamily: "'Great Vibes', 'Playball', cursive",
              textShadow: '0 0 15px rgba(123, 97, 201, 0.4)'
            }}
          >
            Premium
          </span>
          <span
            className={`font-heading font-black text-[#FF8A00] tracking-[0.16em] uppercase leading-none ${
              size === 'sm' ? 'text-sm' : 'text-sm sm:text-base'
            }`}
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            IMPORTS
          </span>
        </div>
        {showSubtitle && (
          <span className="text-[9px] tracking-widest text-slate-400 font-semibold uppercase -mt-0.5">
            Peshawar
          </span>
        )}
      </div>
    </div>
  );
};
