import React, { useState } from 'react';
import { motion } from 'motion/react';
import { DayaneAvatar, StarDoodle } from './Doodles';
import { soundEngine } from '../utils/audio';
import { Volume2, VolumeX, Sparkles, Check, Copy } from 'lucide-react';

interface HeaderHeroProps {
  cursorTrailEnabled: boolean;
  setCursorTrailEnabled: (v: boolean) => void;
  onOpenContact: () => void;
  onOpenResume: () => void;
}

export const HeaderHero: React.FC<HeaderHeroProps> = ({
  cursorTrailEnabled,
  setCursorTrailEnabled,
  onOpenContact,
  onOpenResume,
}) => {
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const toggleAudio = () => {
    const next = !audioEnabled;
    setAudioEnabled(next);
    soundEngine.enabled = next;
    if (next) soundEngine.playPencilTick();
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('contato.dayanepontes@gmail.com');
    setCopiedEmail(true);
    soundEngine.playPencilTick();
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+5582999990000');
    setCopiedPhone(true);
    soundEngine.playPencilTick();
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <header className="relative w-full max-w-5xl mx-auto pt-6 px-4">
      {/* Top Utility Controls: Audio & Cursor Mode */}
      <div className="flex items-center justify-end gap-2 mb-3 text-xs font-semibold text-[#111111] no-print">
        <button
          onClick={toggleAudio}
          className={`flex items-center gap-1.5 px-3 py-1 rounded-full border-2 border-[#111111] transition-all cursor-pointer ${
            audioEnabled ? 'bg-[#55B98C] text-white shadow-ink-sm' : 'bg-white/80 hover:bg-white'
          }`}
          title="Ativar/desativar sons táteis de papel e grafite"
        >
          {audioEnabled ? <Volume2 size={13} /> : <VolumeX size={13} />}
          <span>{audioEnabled ? 'Sons: Ativos' : 'Sons: Mudos'}</span>
        </button>

        <button
          onClick={() => {
            soundEngine.playPencilTick();
            setCursorTrailEnabled(!cursorTrailEnabled);
          }}
          className={`flex items-center gap-1.5 px-3 py-1 rounded-full border-2 border-[#111111] transition-all cursor-pointer ${
            cursorTrailEnabled ? 'bg-[#F4C542] text-[#111111] shadow-ink-sm' : 'bg-white/80 hover:bg-white'
          }`}
          title="Ativar/desativar rastro de grafite e rabisco no cursor"
        >
          <Sparkles size={13} />
          <span>{cursorTrailEnabled ? 'Rabisco: Ligado' : 'Rabisco: Desligado'}</span>
        </button>
      </div>

      {/* Main Hero Card Container */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="relative bg-[#FFFDF9] rounded-[28px] md:rounded-[36px] border-[3px] border-[#111111] shadow-ink-lg p-6 sm:p-8 md:p-10"
      >
        {/* Top-Right Hanging Ribbon / Washi Bookmark */}
        <div className="absolute -top-3.5 right-6 sm:right-10 z-10 select-none">
          <div className="bg-[#FF6B5F] text-white text-[11px] sm:text-xs font-bold px-3 py-1.5 rounded-sm border-2 border-[#111111] shadow-ink-sm flex items-center gap-2 transform rotate-1">
            <span>Portfólio & Currículo</span>
            <span className="opacity-80">||</span>
          </div>
        </div>

        {/* Content Grid */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
          {/* Avatar Illustration */}
          <div className="relative group">
            <DayaneAvatar />
            {/* Playful doodle tag */}
            <span className="absolute -bottom-2 -right-1 bg-[#F4C542] text-[#111111] text-[10px] font-bold px-2 py-0.5 rounded border border-[#111111] rotate-6 shadow-xs select-none">
              Olá! 👋
            </span>
          </div>

          {/* Bio & Details Column */}
          <div className="flex-1 w-full text-center md:text-left">
            {/* Top Badges */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#3157D5]/40 bg-[#E8EEFF] text-xs font-medium text-[#3157D5]">
                <span className="w-2 h-2 rounded-full bg-[#3157D5] animate-pulse" />
                Disponível para novos desafios
              </span>

              <span className="inline-flex items-center px-3 py-1 rounded-full border-2 border-[#111111] bg-[#F7F3EA] text-xs font-bold text-[#111111]">
                UX/UI & Frontend Developer
              </span>
            </div>

            {/* Big Editorial Name */}
            <div className="flex items-center justify-center md:justify-start gap-2 my-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-serif font-black tracking-tight text-[#111111]">
                Dayane Pontes
              </h1>
              <span
                onClick={() => soundEngine.playPencilTick()}
                className="cursor-pointer"
                title="Brilho de inspiração criativa"
              >
                <StarDoodle size={32} color="#F4C542" />
              </span>
            </div>

            {/* Divider line subtle */}
            <div className="w-full h-px bg-[#111111]/10 my-3" />

            {/* Contact Details in 2 Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 text-xs sm:text-sm text-[#333]">
              {/* Left Column */}
              <div className="space-y-2">
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FF6B5F] shrink-0" />
                  <span className="font-semibold text-[#111111]">Endereço:</span>
                  <span className="text-gray-700">Maceió, Alagoas — Brasil</span>
                </div>

                <div className="flex items-center justify-center md:justify-start gap-2 group">
                  <span className="w-2 h-2 rounded-full bg-[#8A8478] shrink-0" />
                  <span className="font-semibold text-[#111111]">Telefone:</span>
                  <button
                    onClick={handleCopyPhone}
                    className="text-gray-700 hover:text-[#3157D5] transition-colors flex items-center gap-1 cursor-pointer"
                    title="Clique para copiar telefone"
                  >
                    <span>+55 (82) 99999-0000</span>
                    {copiedPhone ? (
                      <Check size={12} className="text-[#55B98C]" />
                    ) : (
                      <Copy size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </button>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-2">
                <div className="flex items-center justify-center md:justify-start gap-2 group">
                  <span className="w-2 h-2 rounded-full bg-[#55B98C] shrink-0" />
                  <span className="font-semibold text-[#111111]">Email:</span>
                  <button
                    onClick={handleCopyEmail}
                    className="text-[#3157D5] hover:underline font-medium flex items-center gap-1 cursor-pointer"
                    title="Clique para copiar email"
                  >
                    <span>contato.dayanepontes@gmail.com</span>
                    {copiedEmail ? (
                      <span className="text-[10px] bg-[#55B98C] text-white px-1.5 py-0.5 rounded font-mono">
                        Copiado!
                      </span>
                    ) : (
                      <Copy size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-center md:justify-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#3157D5] shrink-0" />
                  <span className="font-semibold text-[#111111]">Links:</span>
                  <div className="flex items-center gap-1.5 font-medium text-[#3157D5]">
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline"
                    >
                      LinkedIn
                    </a>
                    <span className="text-gray-400">·</span>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline"
                    >
                      GitHub
                    </a>
                    <span className="text-gray-400">·</span>
                    <button
                      onClick={onOpenResume}
                      className="hover:underline text-[#3157D5] cursor-pointer"
                    >
                      Portfólio
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </header>
  );
};
