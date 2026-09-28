import React from 'react';
import { motion } from 'motion/react';

// Connects Card 1 to Card 2 (curved playful arrow with draw-on animation)
export const ConnectorArrowLeftToCenter: React.FC<{ isVisible?: boolean }> = () => {
  return (
    <div className="hidden md:block absolute -top-5 left-[30%] -translate-x-1/2 w-28 h-12 z-20 pointer-events-none select-none">
      <svg
        viewBox="0 0 120 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
      >
        {/* Playful curved path */}
        <motion.path
          d="M 10,38 C 40,8 80,12 105,26"
          stroke="#111111"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="4 4"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.9, ease: 'easeInOut' }}
        />
        {/* Arrowhead */}
        <motion.path
          d="M 94,18 L 107,27 L 97,35"
          stroke="#111111"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.4, delay: 0.7, ease: 'easeOut' }}
        />
        {/* Tiny doodle sparkle near arrow */}
        <motion.text
          x="55"
          y="12"
          fontSize="12"
          fill="#3157D5"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.3, delay: 0.85 }}
          className="font-bold select-none"
        >
          ✦
        </motion.text>
      </svg>
    </div>
  );
};

// Connects Card 2 to Card 3 (curved playful arrow with draw-on animation)
export const ConnectorArrowCenterToRight: React.FC<{ isVisible?: boolean }> = () => {
  return (
    <div className="hidden md:block absolute -top-5 left-[64%] -translate-x-1/2 w-28 h-12 z-20 pointer-events-none select-none">
      <svg
        viewBox="0 0 120 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
      >
        {/* Playful wave arc */}
        <motion.path
          d="M 12,24 C 35,42 75,38 106,18"
          stroke="#111111"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="4 4"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.9, delay: 0.2, ease: 'easeInOut' }}
        />
        {/* Arrowhead */}
        <motion.path
          d="M 95,12 L 108,17 L 102,28"
          stroke="#111111"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.4, delay: 0.9, ease: 'easeOut' }}
        />
        {/* Tiny doodle sparkle near arrow */}
        <motion.text
          x="52"
          y="44"
          fontSize="12"
          fill="#FF6B5F"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.3, delay: 1.05 }}
          className="font-bold select-none"
        >
          ✎
        </motion.text>
      </svg>
    </div>
  );
};

// Vertical Mobile Arrow between stacked cards
export const VerticalMobileArrow: React.FC<{ label?: string }> = ({ label }) => {
  return (
    <div className="md:hidden flex flex-col items-center justify-center my-3 py-1 select-none pointer-events-none">
      <svg width="40" height="36" viewBox="0 0 40 36" fill="none" className="overflow-visible">
        <motion.path
          d="M 20,2 L 20,26"
          stroke="#111111"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeDasharray="3 3"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        />
        <motion.path
          d="M 14,20 L 20,28 L 26,20"
          stroke="#111111"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        />
      </svg>
      {label && (
        <span className="text-[10px] font-hand text-gray-500 font-bold -mt-1">
          {label}
        </span>
      )}
    </div>
  );
};
