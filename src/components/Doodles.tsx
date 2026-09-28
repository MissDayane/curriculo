import React from 'react';
import { motion } from 'motion/react';

// Washi Tape Component with realistic jagged edges & craft paper texture
interface WashiTapeProps {
  color?: 'yellow' | 'coral' | 'rose' | 'green' | 'blue' | 'gray';
  className?: string;
  rotation?: number;
  width?: string;
}

export const WashiTape: React.FC<WashiTapeProps> = ({
  color = 'yellow',
  className = '',
  rotation = 0,
  width = 'w-24',
}) => {
  const colorMap = {
    yellow: 'bg-[#F4C542]/85 text-[#8A6A08]',
    coral: 'bg-[#FF6B5F]/85 text-[#7A1E17]',
    rose: 'bg-[#D98BB7]/85 text-[#6B2851]',
    green: 'bg-[#55B98C]/85 text-[#145336]',
    blue: 'bg-[#3157D5]/80 text-[#0E2368]',
    gray: 'bg-[#D0CAC0]/85 text-[#4A453C]',
  };

  return (
    <div
      style={{ transform: `rotate(${rotation}deg)` }}
      className={`h-5 ${width} ${colorMap[color]} washi-tape select-none pointer-events-none transition-transform duration-300 ${className}`}
      aria-hidden="true"
    />
  );
};

// 4-point and 5-point Hand-drawn Stars
export const StarDoodle: React.FC<{
  className?: string;
  size?: number;
  color?: string;
  animate?: boolean;
}> = ({ className = '', size = 24, color = '#F4C542', animate = true }) => {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block ${className}`}
      animate={animate ? { rotate: [0, 15, -10, 0], scale: [1, 1.1, 0.95, 1] } : undefined}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    >
      <path
        d="M12 2C12.4 7.2 16.8 11.6 22 12C16.8 12.4 12.4 16.8 12 22C11.6 16.8 7.2 12.4 2 12C7.2 11.6 11.6 7.2 12 2Z"
        fill={color}
        stroke="#111111"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
};

// Squiggle wave doodle (used in "01. Sobre Mim ~~~")
export const WaveDoodle: React.FC<{ className?: string; color?: string }> = ({
  className = '',
  color = '#F4C542',
}) => {
  return (
    <svg
      width="48"
      height="14"
      viewBox="0 0 48 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block ${className}`}
    >
      <motion.path
        d="M2 7C5 2 9 2 12 7C15 12 19 12 22 7C25 2 29 2 32 7C35 12 39 12 42 7C44 4 46 5 46 7"
        stroke={color}
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      />
    </svg>
  );
};

// Hand-drawn arrow with draw-on path
export const HandDrawnArrow: React.FC<{
  className?: string;
  color?: string;
  direction?: 'down' | 'right' | 'up-right';
}> = ({ className = '', color = '#111111', direction = 'right' }) => {
  return (
    <motion.svg
      width="32"
      height="24"
      viewBox="0 0 32 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block ${className}`}
      whileHover={{ x: 3, rotate: 2 }}
      transition={{ duration: 0.2 }}
    >
      {direction === 'right' && (
        <>
          <path
            d="M3 12.2C10.5 11.8 19 12.1 27 12"
            stroke={color}
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <path
            d="M20.5 6C23 8.5 26.5 11 28 12.2C26.5 13.5 23 16 20.5 18"
            stroke={color}
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )}
      {direction === 'down' && (
        <>
          <path
            d="M16 3C16 10.5 15.8 18 16 22"
            stroke={color}
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <path
            d="M10 16C12.5 18.5 15 21.5 16 23C17 21.5 19.5 18.5 22 16"
            stroke={color}
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )}
      {direction === 'up-right' && (
        <>
          <path
            d="M5 19C12 15 19 10 25 5"
            stroke={color}
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <path
            d="M16 4.5C20 4.8 24 4.8 26 5C26 7 26 11 25.5 15"
            stroke={color}
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )}
    </motion.svg>
  );
};

// Circular Dashed Stamp "SUPORTE N1"
export const StampSupportBadge: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div
      className={`stamp-support w-20 h-20 flex flex-col items-center justify-center p-1 text-center bg-white/40 shadow-sm ${className}`}
      title="Certificação / Vivência Suporte N1"
    >
      <div className="w-full h-full border border-dashed border-[#8A8478] rounded-full flex flex-col items-center justify-center">
        <span className="text-[9px] font-bold text-[#6B6457] tracking-wider">SUPORTE</span>
        <span className="text-[13px] font-extrabold text-[#111111] leading-none">N1</span>
        <div className="flex gap-0.5 mt-0.5">
          <span className="text-[7px] text-[#8A8478]">★</span>
          <span className="text-[7px] text-[#8A8478]">★</span>
        </div>
      </div>
    </div>
  );
};

// Hand-Drawn Avatar Portrait matching the user's reference illustration
export const DayaneAvatar: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <motion.div
      className={`relative w-36 h-36 md:w-44 md:h-44 shrink-0 rounded-full border-[3px] border-[#111111] bg-[#FFEFA8] overflow-hidden shadow-ink-sm flex items-center justify-center select-none ${className}`}
      whileHover={{ rotate: 1.5, scale: 1.02 }}
      transition={{ duration: 0.25 }}
    >
      {/* Background yellow tone */}
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Soft circle base */}
        <circle cx="100" cy="100" r="95" fill="#FFEFA8" />

        {/* Shoulders & Clothing */}
        <path
          d="M30 200 C35 155, 60 148, 100 148 C140 148, 165 155, 170 200 Z"
          fill="#111111"
        />
        {/* Collar / V-neck detail */}
        <path
          d="M86 148 L100 166 L114 148 Z"
          fill="#F7F3EA"
          stroke="#111111"
          strokeWidth="2.5"
        />

        {/* Neck */}
        <path
          d="M87 120 L87 148 C93 151, 107 151, 113 148 L113 120 Z"
          fill="#FDDEC5"
          stroke="#111111"
          strokeWidth="2.5"
        />

        {/* Hair - back volume */}
        <path
          d="M48 95 C45 50, 75 30, 100 30 C125 30, 155 50, 152 95 C152 135, 142 155, 138 158 C135 142, 130 115, 126 110 C126 110, 74 110, 74 110 C70 115, 65 142, 62 158 C58 155, 48 135, 48 95 Z"
          fill="#111111"
        />

        {/* Face */}
        <path
          d="M66 90 C66 65, 80 54, 100 54 C120 54, 134 65, 134 90 C134 118, 122 134, 100 134 C78 134, 66 118, 66 90 Z"
          fill="#FFE0CE"
          stroke="#111111"
          strokeWidth="2.5"
        />

        {/* Hair bangs / front bob cut */}
        <path
          d="M62 82 C65 55, 82 48, 100 48 C118 48, 135 55, 138 82 C134 72, 124 66, 112 67 C104 68, 96 68, 88 67 C76 66, 66 72, 62 82 Z"
          fill="#111111"
        />

        {/* Glasses - Left Rim */}
        <circle
          cx="82"
          cy="92"
          r="14.5"
          fill="#FFFFFF"
          stroke="#111111"
          strokeWidth="3.2"
        />
        {/* Glasses - Right Rim */}
        <circle
          cx="118"
          cy="92"
          r="14.5"
          fill="#FFFFFF"
          stroke="#111111"
          strokeWidth="3.2"
        />
        {/* Glasses bridge */}
        <path
          d="M96.5 90 C100 88, 103.5 88, 103.5 90"
          stroke="#111111"
          strokeWidth="3.2"
          strokeLinecap="round"
        />

        {/* Eyes inside glasses */}
        <circle cx="82" cy="92" r="3.2" fill="#111111" />
        <circle cx="80.8" cy="90.5" r="1.1" fill="#FFFFFF" />

        <circle cx="118" cy="92" r="3.2" fill="#111111" />
        <circle cx="116.8" cy="90.5" r="1.1" fill="#FFFFFF" />

        {/* Eyebrows above glasses */}
        <path
          d="M72 74 C76 72, 86 73, 90 75"
          stroke="#111111"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M110 75 C114 73, 124 72, 128 74"
          stroke="#111111"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Nose dot */}
        <path
          d="M99.5 106 C100 107.5, 101.5 107.5, 102 106"
          stroke="#111111"
          strokeWidth="1.8"
          strokeLinecap="round"
        />

        {/* Smile */}
        <path
          d="M92 116 C96 121, 104 121, 108 116"
          stroke="#111111"
          strokeWidth="2.2"
          strokeLinecap="round"
        />

        {/* Cheeks blush */}
        <circle cx="70" cy="105" r="4.5" fill="#FF8D80" opacity="0.45" />
        <circle cx="130" cy="105" r="4.5" fill="#FF8D80" opacity="0.45" />
      </svg>
    </motion.div>
  );
};
