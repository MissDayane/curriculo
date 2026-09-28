import React from 'react';
import { motion } from 'motion/react';
import { WashiTape } from './Doodles';
import {
  ConnectorArrowLeftToCenter,
  ConnectorArrowCenterToRight,
  VerticalMobileArrow,
} from './ConnectingArrows';
import {
  DesignSystemWireframe,
  DataCurationWireframe,
  UserResearchWireframe,
} from './ProjectWireframes';
import { ProjectData } from './Modals';
import { soundEngine } from '../utils/audio';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectData) => void;
}

const projectsList: ProjectData[] = [
  {
    id: 'estudo-01',
    number: 'ESTUDO 01',
    tapeColor: 'yellow',
    title: 'Design System & Interface Web',
    subtitle: 'Arquitetura de Componentes Modulares & Acessibilidade',
    tag: 'Figma & React',
    summary:
      'Arquitetura de componentes modulares, pesquisa centrada no usuário, acessibilidade e padrões consistentes para ecossistemas digitais.',
    desafio:
      'Diferentes equipes criavam telas com padrões divergentes, sem documentação unificada de design tokens e com inconsistências de acessibilidade em fluxos críticos.',
    solucao:
      'Construção de uma biblioteca modular no Figma integrada a componentes reativos em React e Tailwind CSS, cobrindo contraste WCAG 2.1 AA, estados interativos e tipografia balanceada.',
    impacto:
      'Redução de 40% no tempo de desenvolvimento de novas features e aumento imediato na consistência visual e usabilidade percebida.',
    ferramentas: ['Figma', 'React', 'Tailwind CSS', 'Design Tokens', 'Storybook', 'WCAG 2.1'],
  },
  {
    id: 'estudo-02',
    number: 'ESTUDO 02',
    tapeColor: 'yellow',
    title: 'Curadoria de Dados & Modelagem IA',
    subtitle: 'Pipeline de Anotação Semântica & Garantia de Qualidade',
    tag: 'Python & Dados',
    summary:
      'Fluxos de validação de qualidade, anotação semântica e rotulagem para alimentação de modelos preditivos e assistentes inteligentes.',
    desafio:
      'Grandes volumes de dados não estruturados continham duplicidades, ruídos de formatação e incoerências que impediam o treinamento assertivo de modelos.',
    solucao:
      'Estruturação de um pipeline sistemático de limpeza com scripts em Python, definição de taxonomia com guias de anotação e dupla checagem por amostragem estatística.',
    impacto:
      'Garantia de 99.4% de precisão nos datasets anotados na UNOPS, acelerando o ciclo de treinamento e validação da inteligência artificial.',
    ferramentas: ['Python (Pandas)', 'Data Labeling', 'Data Annotation', 'Data Cleaning', 'Controle de Qualidade'],
  },
  {
    id: 'estudo-03',
    number: 'ESTUDO 03',
    tapeColor: 'rose',
    title: 'Pesquisa com Usuários & Protótipo',
    subtitle: 'Mapeamento de Jornada & Validação com Usuários Reais',
    tag: 'Design Thinking',
    summary:
      'Mapeamento de jornada do usuário, testes de usabilidade e prototipagem interativa de alta fidelidade para produtos centrados em pessoas.',
    desafio:
      'Usuários encontravam gargalos e desistiam antes de concluir fluxos digitais complexos por falta de clareza e excesso de carga cognitiva.',
    solucao:
      'Condução de entrevistas em profundidade, criação de mapas de empatia, simplificação de etapas e testes de usabilidade com protótipo de alta fidelidade navegável.',
    impacto:
      'Identificação prévia de 85% dos atritos de usabilidade antes de qualquer linha de código, elevando a taxa de sucesso das tarefas para 94%.',
    ferramentas: ['Design Thinking', 'UX Research', 'User Journey Maps', 'Testes de Usabilidade', 'Prototipagem Alta Fidelidade'],
  },
];

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  return (
    <section className="relative w-full max-w-5xl mx-auto mt-14 px-4">
      {/* Header & Right indicator */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-baseline gap-2">
          <span className="text-xl sm:text-2xl font-serif font-black text-[#55B98C]">
            04.
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-black text-[#111111]">
            Projetos Relevantes
          </h2>
        </div>

        <div className="flex items-center gap-1 text-xs font-bold text-gray-600 select-none">
          <span>Caderno de Projetos</span>
          <span className="text-[#111111]">↓</span>
        </div>
      </div>

      {/* Projects Container with Connecting SVG arrows */}
      <div className="relative">
        {/* Animated Connecting SVG Arrows between Cards (Desktop) */}
        <ConnectorArrowLeftToCenter />
        <ConnectorArrowCenterToRight />

        {/* 3 Projects Grid with narrative entry & slight rotation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {/* Project 1 */}
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 35, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: -0.8 }}
              viewport={{ once: false, amount: 0.25 }}
              whileHover={{ y: -6, rotate: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative bg-[#FFFDF9] rounded-[24px] border-[3px] border-[#111111] shadow-ink-lg p-5 flex flex-col justify-between h-full"
            >
              {/* Top Washi Tape */}
              <div className="absolute -top-3 left-10 select-none">
                <WashiTape color="yellow" width="w-24" rotation={-1.5} />
              </div>

              <div>
                {/* Top Study Tag */}
                <div className="flex justify-end mb-3 mt-1">
                  <span className="text-[10px] font-mono font-bold text-gray-500 bg-gray-100 border border-[#111111]/30 px-2 py-0.5 rounded">
                    ESTUDO 01
                  </span>
                </div>

                {/* Wireframe Mockup */}
                <div className="mb-4">
                  <DesignSystemWireframe />
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-serif font-bold text-[#111111] leading-snug mb-2">
                  {projectsList[0].title}
                </h3>

                {/* Description */}
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  {projectsList[0].summary}
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-3 border-t border-[#111111]/15 flex items-center justify-between">
                <span className="text-[11px] font-medium text-[#3157D5] bg-[#E8EEFF] px-2.5 py-1 rounded-full border border-[#3157D5]/30">
                  {projectsList[0].tag}
                </span>

                <button
                  onClick={() => {
                    soundEngine.playPaperFlip();
                    onSelectProject(projectsList[0]);
                  }}
                  className="flex items-center gap-1 text-xs font-bold text-[#111111] hover:text-[#3157D5] transition-colors cursor-pointer group"
                >
                  <span>Ver Projeto</span>
                  <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                </button>
              </div>
            </motion.div>

            {/* Mobile-only connector down arrow to project 2 */}
            <VerticalMobileArrow label="próximo passo ↓" />
          </div>

          {/* Project 2 */}
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 40, rotate: 2.5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 1 }}
              viewport={{ once: false, amount: 0.25 }}
              whileHover={{ y: -6, rotate: 0 }}
              transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative bg-[#FFFDF9] rounded-[24px] border-[3px] border-[#111111] shadow-ink-lg p-5 flex flex-col justify-between h-full"
            >
              {/* Top Washi Tape */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 select-none">
                <WashiTape color="yellow" width="w-24" rotation={1.2} />
              </div>

              <div>
                {/* Top Study Tag */}
                <div className="flex justify-end mb-3 mt-1">
                  <span className="text-[10px] font-mono font-bold text-gray-500 bg-gray-100 border border-[#111111]/30 px-2 py-0.5 rounded">
                    ESTUDO 02
                  </span>
                </div>

                {/* Wireframe Mockup */}
                <div className="mb-4">
                  <DataCurationWireframe />
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-serif font-bold text-[#111111] leading-snug mb-2">
                  {projectsList[1].title}
                </h3>

                {/* Description */}
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  {projectsList[1].summary}
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-3 border-t border-[#111111]/15 flex items-center justify-between">
                <span className="text-[11px] font-medium text-[#145336] bg-[#E7F6ED] px-2.5 py-1 rounded-full border border-[#55B98C]/30">
                  {projectsList[1].tag}
                </span>

                <button
                  onClick={() => {
                    soundEngine.playPaperFlip();
                    onSelectProject(projectsList[1]);
                  }}
                  className="flex items-center gap-1 text-xs font-bold text-[#111111] hover:text-[#3157D5] transition-colors cursor-pointer group"
                >
                  <span>Ver Projeto</span>
                  <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                </button>
              </div>
            </motion.div>

            {/* Mobile-only connector down arrow to project 3 */}
            <VerticalMobileArrow label="próximo passo ↓" />
          </div>

          {/* Project 3 */}
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 45, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: -0.7 }}
              viewport={{ once: false, amount: 0.25 }}
              whileHover={{ y: -6, rotate: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative bg-[#FFFDF9] rounded-[24px] border-[3px] border-[#111111] shadow-ink-lg p-5 flex flex-col justify-between h-full"
            >
              {/* Top Washi Tape */}
              <div className="absolute -top-3 right-10 select-none">
                <WashiTape color="rose" width="w-24" rotation={-1.8} />
              </div>

              <div>
                {/* Top Study Tag */}
                <div className="flex justify-end mb-3 mt-1">
                  <span className="text-[10px] font-mono font-bold text-gray-500 bg-gray-100 border border-[#111111]/30 px-2 py-0.5 rounded">
                    ESTUDO 03
                  </span>
                </div>

                {/* Wireframe Mockup */}
                <div className="mb-4">
                  <UserResearchWireframe />
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-serif font-bold text-[#111111] leading-snug mb-2">
                  {projectsList[2].title}
                </h3>

                {/* Description */}
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  {projectsList[2].summary}
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-3 border-t border-[#111111]/15 flex items-center justify-between">
                <span className="text-[11px] font-medium text-[#7A1E17] bg-[#FFEBEA] px-2.5 py-1 rounded-full border border-[#FF6B5F]/30">
                  {projectsList[2].tag}
                </span>

                <button
                  onClick={() => {
                    soundEngine.playPaperFlip();
                    onSelectProject(projectsList[2]);
                  }}
                  className="flex items-center gap-1 text-xs font-bold text-[#111111] hover:text-[#3157D5] transition-colors cursor-pointer group"
                >
                  <span>Ver Projeto</span>
                  <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
