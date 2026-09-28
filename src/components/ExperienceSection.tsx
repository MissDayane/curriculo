import React from 'react';
import { motion } from 'motion/react';
import { WashiTape, StampSupportBadge } from './Doodles';
import { soundEngine } from '../utils/audio';

export const ExperienceSection: React.FC = () => {
  return (
    <section className="relative w-full max-w-5xl mx-auto mt-14 px-4">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
        <div>
          <div className="flex items-baseline gap-2">
            <span className="text-xl sm:text-2xl font-serif font-black text-[#3157D5]">
              02.
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-black text-[#111111]">
              Experiência Profissional
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">
            Trajetória prática conectando dados, design de produto e engenharia frontend
          </p>
        </div>

        <div className="self-start sm:self-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#111111]/30 bg-[#EDE8DC] text-[11px] font-bold text-[#111111]">
            <span className="w-2 h-2 rounded-full bg-[#111111]" />
            ATUAÇÃO CONTÍNUA
          </span>
        </div>
      </div>

      {/* Top Two Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Card 1: Data Curation & Data Annotation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          whileHover={{ y: -3, rotate: -0.5 }}
          transition={{ duration: 0.3 }}
          onMouseEnter={() => soundEngine.playPencilTick()}
          className="relative bg-[#FFFDF9] rounded-[24px] border-[3px] border-[#111111] shadow-ink-lg p-6 flex flex-col justify-between"
        >
          {/* Top Washi Tape */}
          <div className="absolute -top-3 left-12 select-none">
            <WashiTape color="rose" width="w-28" rotation={-1.5} />
          </div>

          <div>
            {/* Header row with date & client tag */}
            <div className="flex items-center justify-between mb-3 mt-1">
              <span className="text-[11px] font-mono font-bold text-[#FF6B5F] bg-[#FF6B5F]/10 px-2 py-0.5 rounded border border-[#FF6B5F]/30">
                Out/2025 – Nov/2025
              </span>
              <span className="text-[11px] font-bold tracking-wider text-gray-500 uppercase font-mono">
                UNOPS
              </span>
            </div>

            {/* Title & Organization */}
            <h3 className="text-lg sm:text-xl font-serif font-black text-[#111111] leading-snug">
              Data Curation & Data Annotation
            </h3>
            <p className="text-xs font-bold text-[#3157D5] mt-1 mb-4">
              UNOPS — Nosso Chão, Nossa História
            </p>

            {/* Bullet list with Coral Accent Bars */}
            <ul className="space-y-3 text-xs sm:text-sm text-[#333]">
              <li className="flex items-start gap-2.5">
                <span className="w-1 h-3.5 bg-[#FF6B5F] rounded-full shrink-0 mt-1" />
                <span>
                  Realizei curadoria, limpeza e padronização de dados, preparando bases para soluções de IA.
                </span>
              </li>

              <li className="flex items-start gap-2.5">
                <span className="w-1 h-3.5 bg-[#FF6B5F] rounded-full shrink-0 mt-1" />
                <span>
                  Executei data labeling e annotation, classificando e estruturando informações para treinamento de modelos.
                </span>
              </li>

              <li className="flex items-start gap-2.5">
                <span className="w-1 h-3.5 bg-[#FF6B5F] rounded-full shrink-0 mt-1" />
                <span>
                  Realizei validação e controle de qualidade, identificando inconsistências, duplicidades e erros de formatação.
                </span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Card 2: Estagiária de Tecnologia, UX/UI & Front-end */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          whileHover={{ y: -3, rotate: 0.5 }}
          transition={{ duration: 0.3 }}
          onMouseEnter={() => soundEngine.playPencilTick()}
          className="relative bg-[#FFFDF9] rounded-[24px] border-[3px] border-[#111111] shadow-ink-lg p-6 flex flex-col justify-between"
        >
          {/* Top Washi Tape */}
          <div className="absolute -top-3 right-12 select-none">
            <WashiTape color="green" width="w-28" rotation={1} />
          </div>

          <div>
            {/* Header row with date & active badge */}
            <div className="flex items-center justify-between mb-3 mt-1">
              <span className="text-[11px] font-mono font-bold text-[#145336] bg-[#55B98C]/15 px-2 py-0.5 rounded border border-[#55B98C]/30">
                Nov/2024 – Atual
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#145336]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#55B98C] animate-pulse" />
                Em atividade
              </span>
            </div>

            {/* Title & Organization */}
            <h3 className="text-lg sm:text-xl font-serif font-black text-[#111111] leading-snug">
              Estagiária de Tecnologia, UX/UI & Front-end
            </h3>
            <p className="text-xs font-bold text-[#55B98C] mt-1 mb-4">
              Centro de Inovação e Robótica — CESMAC
            </p>

            {/* Bullet list with Green Accent Bars */}
            <ul className="space-y-3 text-xs sm:text-sm text-[#333]">
              <li className="flex items-start gap-2.5">
                <span className="w-1 h-3.5 bg-[#55B98C] rounded-full shrink-0 mt-1" />
                <span>
                  Liderei mais de 30 projetos de UX/UI, da descoberta do problema e levantamento de requisitos à prototipagem e evolução do produto.
                </span>
              </li>

              <li className="flex items-start gap-2.5">
                <span className="w-1 h-3.5 bg-[#55B98C] rounded-full shrink-0 mt-1" />
                <span>
                  Analiso requisitos de software com equipes e stakeholders, traduzindo necessidades em funcionalidades, fluxos e soluções digitais.
                </span>
              </li>

              <li className="flex items-start gap-2.5">
                <span className="w-1 h-3.5 bg-[#55B98C] rounded-full shrink-0 mt-1" />
                <span>
                  Aplico Design Thinking, UX Research, arquitetura da informação e prototipagem na criação de experiências centradas no usuário.
                </span>
              </li>

              <li className="flex items-start gap-2.5">
                <span className="w-1 h-3.5 bg-[#55B98C] rounded-full shrink-0 mt-1" />
                <span>
                  Desenvolvo interfaces no Figma e aplicações web com HTML, CSS, JavaScript e React, conectando design e tecnologia na construção dos produtos.
                </span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Card 3: UN IT Assistant (Full Width) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        whileHover={{ y: -3 }}
        transition={{ duration: 0.3 }}
        onMouseEnter={() => soundEngine.playPencilTick()}
        className="relative bg-[#FFFDF9] rounded-[24px] border-[3px] border-[#111111] shadow-ink-lg p-6 sm:p-8"
      >
        {/* Top Washi Tape */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 select-none">
          <WashiTape color="blue" width="w-32" rotation={-0.5} />
        </div>

        {/* Circular Stamp on Top-Right */}
        <div className="absolute top-4 right-4 sm:top-6 sm:right-8 select-none pointer-events-none">
          <StampSupportBadge />
        </div>

        {/* Header row with date */}
        <div className="mb-3 mt-1">
          <span className="text-[11px] font-mono font-bold text-[#3157D5] bg-[#3157D5]/10 px-2 py-0.5 rounded border border-[#3157D5]/30">
            Abr/2025 – Out/2025
          </span>
        </div>

        {/* Title & Organization */}
        <h3 className="text-xl sm:text-2xl font-serif font-black text-[#111111] leading-snug">
          UN IT Assistant
        </h3>
        <p className="text-xs font-bold text-[#3157D5] mt-1 mb-5">
          UNOPS — Nosso Chão, Nossa História
        </p>

        {/* 2-Columns Bullet List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6 text-xs sm:text-sm text-[#333]">
          {/* Left Column */}
          <div className="space-y-3">
            <div className="flex items-start gap-2.5">
              <span className="w-1 h-3.5 bg-[#3157D5] rounded-full shrink-0 mt-1" />
              <span>
                Prestei suporte técnico N1 a equipes e mobilizadores, solucionando problemas em ferramentas digitais e dispositivos.
              </span>
            </div>

            <div className="flex items-start gap-2.5">
              <span className="w-1 h-3.5 bg-[#3157D5] rounded-full shrink-0 mt-1" />
              <span>
                Realizei monitoramento de dispositivos e suporte operacional, identificando ocorrências e garantindo a continuidade das atividades.
              </span>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-3">
            <div className="flex items-start gap-2.5">
              <span className="w-1 h-3.5 bg-[#3157D5] rounded-full shrink-0 mt-1" />
              <span>
                Conduzi treinamentos e orientações, simplificando processos técnicos para facilitar o uso das ferramentas.
              </span>
            </div>

            <div className="flex items-start gap-2.5">
              <span className="w-1 h-3.5 bg-[#3157D5] rounded-full shrink-0 mt-1" />
              <span>
                Produzi relatórios e documentação técnica, sistematizando problemas e oportunidades de melhoria.
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
