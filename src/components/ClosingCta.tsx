import React from 'react';
import { motion } from 'motion/react';
import { Mail, Download } from 'lucide-react';
import { soundEngine } from '../utils/audio';

interface ClosingCtaProps {
  onOpenContact: () => void;
  onOpenResume: () => void;
}

export const ClosingCta: React.FC<ClosingCtaProps> = ({
  onOpenContact,
  onOpenResume,
}) => {
  return (
    <footer className="relative w-full max-w-5xl mx-auto mt-16 mb-12 px-4">
      {/* Big Closing Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5 }}
        className="relative bg-[#FFFDF9] rounded-[28px] md:rounded-[36px] border-[3px] border-[#111111] shadow-ink-lg p-8 sm:p-12 md:p-14 text-center"
      >
        {/* Three Vertical Tape Strips at top center */}
        <div className="flex justify-center gap-1.5 -mt-12 sm:-mt-16 mb-6 select-none">
          <div className="w-2.5 h-7 sm:h-9 bg-[#FF6B5F] washi-tape-straight -rotate-2" />
          <div className="w-2.5 h-7 sm:h-9 bg-[#FF6B5F] washi-tape-straight rotate-1" />
          <div className="w-2.5 h-7 sm:h-9 bg-[#FF6B5F] washi-tape-straight -rotate-1" />
        </div>

        {/* Impactful Headline */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-serif font-black text-[#111111] leading-tight max-w-2xl mx-auto">
          Vamos construir algo memorável juntas?
        </h2>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm md:text-base text-gray-700 max-w-xl mx-auto mt-3 mb-8 leading-relaxed">
          Combinando estratégia de UX/UI com desenvolvimento Frontend para transformar requisitos complexos em interfaces humanas.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <motion.button
            onClick={() => {
              soundEngine.playPencilTick();
              onOpenContact();
            }}
            whileHover={{ scale: 1.02, rotate: -0.5 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#111111] text-white font-bold text-xs sm:text-sm border-2 border-[#111111] shadow-ink hover:bg-black cursor-pointer transition-colors"
          >
            <Mail size={16} />
            <span>Me Mande uma Mensagem</span>
          </motion.button>

          <motion.button
            onClick={() => {
              soundEngine.playPaperFlip();
              onOpenResume();
            }}
            whileHover={{ scale: 1.02, rotate: 0.5 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-[#111111] font-bold text-xs sm:text-sm border-2 border-[#111111] shadow-ink hover:bg-gray-50 cursor-pointer transition-colors"
          >
            <Download size={16} />
            <span>Baixar Currículo</span>
          </motion.button>
        </div>

        {/* Internal Divider */}
        <div className="w-full h-px bg-[#111111]/15 my-8" />

        {/* Bottom Credits & Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-gray-700">
          <div>
            <span>© Dayane Pontes · UX/UI & Frontend Developer</span>
          </div>

          <div className="flex items-center gap-3 text-[#111111]">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#3157D5] transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-gray-400">·</span>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#3157D5] transition-colors"
            >
              GitHub
            </a>
            <span className="text-gray-400">·</span>
            <button
              onClick={onOpenResume}
              className="hover:text-[#3157D5] transition-colors cursor-pointer"
            >
              Portfólio
            </button>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};
