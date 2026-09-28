import React from 'react';
import { motion } from 'motion/react';
import { Download, Mail } from 'lucide-react';
import { WashiTape, WaveDoodle } from './Doodles';
import { soundEngine } from '../utils/audio';

interface AboutSectionProps {
  onOpenContact: () => void;
  onOpenResume: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenContact,
  onOpenResume,
}) => {
  return (
    <section className="relative w-full max-w-5xl mx-auto mt-12 px-4">
      {/* Top Floating Washi Tape holding the sheet */}
      <div className="flex justify-center -mb-2.5 relative z-10 select-none">
        <WashiTape color="yellow" width="w-36" rotation={0.8} />
      </div>

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
        className="relative bg-[#FFFDF9] rounded-[28px] md:rounded-[36px] border-[3px] border-[#111111] shadow-ink-lg p-6 sm:p-8 md:p-10"
      >
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-baseline gap-2">
            <span className="text-xl sm:text-2xl font-serif font-black text-[#FF6B5F]">
              01.
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-black text-[#111111]">
              Sobre Mim
            </h2>
          </div>
          <WaveDoodle color="#F4C542" />
        </div>

        {/* Narrative Text */}
        <div className="text-sm sm:text-base leading-relaxed text-[#222222] font-normal space-y-4 text-justify sm:text-left">
          <p>
            Minha especialidade é pegar desafios e demandas concretas e desenvolvê-las em soluções digitais que sejam funcionais, fáceis de usar e focadas nas pessoas. Combinando design de UX/UI com Front-end, trabalho em todo o processo de criação de experiências digitais, desde a investigação inicial e o desenho da solução até a prototipagem, a estrutura da interface e a sua construção.
          </p>
          <p>
            Aplico Design Thinking, pesquisa de UX, UX Writing, acessibilidade e prototipagem para embasar minhas escolhas de design e construir interfaces que harmonizem a experiência do usuário, o visual e a tecnologia. Meu objetivo é criar produtos digitais que, além de funcionais, sejam intuitivos, úteis e transmitam valor para seus usuários.
          </p>
        </div>

        {/* Subtle Dashed Divider */}
        <div className="w-full border-t-2 border-dashed border-[#111111]/20 my-6 sm:my-8" />

        {/* Action Buttons with Organic Sketchbook Motion */}
        <div className="flex flex-wrap items-center gap-4">
          <motion.button
            onClick={() => {
              soundEngine.playPaperFlip();
              onOpenResume();
            }}
            whileHover={{ scale: 1.02, rotate: -1 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-5 py-3 rounded-full bg-[#3157D5] text-white font-bold text-xs sm:text-sm border-2 border-[#111111] shadow-ink cursor-pointer hover:bg-[#2546b3] transition-colors"
          >
            <Download size={16} />
            <span>Baixar Currículo</span>
          </motion.button>

          <motion.button
            onClick={() => {
              soundEngine.playPencilTick();
              onOpenContact();
            }}
            whileHover={{ scale: 1.02, rotate: 1 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-5 py-3 rounded-full bg-[#F4C542] text-[#111111] font-bold text-xs sm:text-sm border-2 border-[#111111] shadow-ink cursor-pointer hover:bg-[#ebbb38] transition-colors"
          >
            <Mail size={16} />
            <span>Me Mande uma Mensagem</span>
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};
