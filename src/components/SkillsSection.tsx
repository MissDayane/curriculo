import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { StarDoodle } from './Doodles';
import { soundEngine } from '../utils/audio';
import { ChevronDown, CheckCircle2 } from 'lucide-react';

interface SkillArea {
  id: string;
  tag: string;
  tagColor: string;
  title: string;
  items: string[];
  footerAction: string;
  expandedDetails: {
    description: string;
    tools: string[];
    cases: string[];
  };
}

const skillAreas: SkillArea[] = [
  {
    id: 'uxui',
    tag: 'ÁREA CRIATIVA',
    tagColor: 'bg-[#FF6B5F] text-white',
    title: 'PRODUCT DESIGN & UX/UI',
    items: ['Product Design', 'UX/UI Design', 'UX Research', 'Design Systems'],
    footerAction: 'Figma / Protótipos +',
    expandedDetails: {
      description:
        'Criação de experiências centradas no usuário, do discovery e ideação à arquitetura de informação e prototipagem navegável de alta fidelidade.',
      tools: ['Figma', 'FigJam', 'Miro', 'Design Tokens', 'AutoLayout', 'WCAG 2.1'],
      cases: [
        'Design System unificado para múltiplos módulos web',
        'Pesquisa com usuários e testes de usabilidade com protótipo interativo',
      ],
    },
  },
  {
    id: 'frontend',
    tag: 'ENGENHARIA',
    tagColor: 'bg-[#3157D5] text-white',
    title: 'DESENVOLVIMENTO & TECNOLOGIAS',
    items: ['React', 'JavaScript', 'HTML5 & CSS3', 'Git/GitHub', 'SpringBoot/Java'],
    footerAction: 'Frontend & Web +',
    expandedDetails: {
      description:
        'Engenharia de software focada em interfaces modernas, componentização modular, responsividade e integração com APIs e dados.',
      tools: ['React (TypeScript)', 'Tailwind CSS', 'Vite', 'Git / GitHub', 'Java / SpringBoot'],
      cases: [
        'Aplicações web reativas conectadas com backend RESTful',
        'Refatoração de interfaces com foco em velocidade de render e acessibilidade',
      ],
    },
  },
  {
    id: 'dados',
    tag: 'INTELIGÊNCIA & ANÁLISE',
    tagColor: 'bg-[#F4C542] text-[#111111]',
    title: 'DADOS & IA',
    items: ['Python', 'Análise de Dados', 'Data Curation', 'IA aplicada a produtos digitais'],
    footerAction: 'Modelos & Dados +',
    expandedDetails: {
      description:
        'Preparação, anotação e validação de datasets estruturados para modelos de IA, alinhando engenharia de dados com usabilidade.',
      tools: ['Python (Pandas)', 'Data Labeling', 'Data Cleaning', 'Prompt Engineering', 'Quality Assurance'],
      cases: [
        'Curadoria e limpeza de bases governamentais e institucionais na UNOPS',
        'Estruturação de taxonomia semântica para treinamento de modelos',
      ],
    },
  },
  {
    id: 'metodos',
    tag: 'METODOLOGIAS',
    tagColor: 'bg-[#55B98C] text-white',
    title: 'MÉTODOS & PROCESSOS',
    items: ['Design Thinking', 'Requisitos de Software', 'Prototipagem & Validação', 'Design Centrado no Usuário'],
    footerAction: 'User Centric +',
    expandedDetails: {
      description:
        'Processos estruturados de discovery, alinhamento com stakeholders de produto, facilitação de workshops e validações contínuas.',
      tools: ['Scrum / Kanban', 'User Journey Maps', 'Matriz de Priorização', 'Entrevistas de Profundidade'],
      cases: [
        'Liderança metodológica em mais de 30 projetos no Centro de Inovação',
        'Tradução de requisitos de negócio complexos em interfaces simplificadas',
      ],
    },
  },
];

export const SkillsSection: React.FC = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const handleToggleCard = (id: string) => {
    soundEngine.playPencilTick();
    setActiveCard((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative w-full max-w-5xl mx-auto mt-14 px-4">
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-6">
        <span className="text-xl sm:text-2xl font-serif font-black text-[#F4C542]">
          03.
        </span>
        <h2 className="text-2xl sm:text-3xl font-serif font-black text-[#111111]">
          Competências Técnicas
        </h2>
        <span
          className="cursor-pointer"
          onClick={() => soundEngine.playPencilTick()}
          title="Clique para brilho"
        >
          <StarDoodle size={22} color="#F4C542" />
        </span>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillAreas.map((skill) => {
          const isExpanded = activeCard === skill.id;

          return (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.25 }}
              className="relative bg-[#FFFDF9] rounded-[22px] border-[3px] border-[#111111] shadow-ink-lg p-5 flex flex-col justify-between"
            >
              <div>
                {/* Top Colored Category Tab */}
                <div className="mb-3">
                  <span
                    className={`inline-block px-2.5 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase border border-[#111111]/30 ${skill.tagColor}`}
                  >
                    {skill.tag}
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="text-sm font-bold tracking-tight text-[#111111] uppercase mb-4 leading-tight">
                  {skill.title}
                </h3>

                {/* Bullet text items */}
                <div className="text-xs text-gray-700 leading-relaxed mb-6 font-normal">
                  {skill.items.map((item, idx) => (
                    <span key={item}>
                      <span className="font-medium text-[#111111]">{item}</span>
                      {idx < skill.items.length - 1 && (
                        <span className="text-gray-400 mx-1.5 font-bold">·</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Interactive Expand Button */}
              <div>
                <button
                  onClick={() => handleToggleCard(skill.id)}
                  className="w-full pt-3 border-t border-[#111111]/15 flex items-center justify-between text-xs font-bold text-[#111111] hover:text-[#3157D5] transition-colors cursor-pointer group"
                >
                  <span>{skill.footerAction}</span>
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${
                      isExpanded ? 'rotate-180 text-[#3157D5]' : ''
                    }`}
                  />
                </button>

                {/* Expandable Accordion View */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="mt-3 pt-3 border-t border-dashed border-[#111111]/20 space-y-2.5 text-left"
                    >
                      <p className="text-[11px] text-gray-600 leading-snug">
                        {skill.expandedDetails.description}
                      </p>

                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 block mb-1">
                          Ferramentas:
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {skill.expandedDetails.tools.map((t) => (
                            <span
                              key={t}
                              className="text-[9px] bg-[#F7F3EA] border border-[#111111]/30 px-1.5 py-0.5 rounded font-mono font-semibold"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 block mb-1">
                          Exemplos de Aplicação:
                        </span>
                        <div className="space-y-1">
                          {skill.expandedDetails.cases.map((c) => (
                            <div key={c} className="flex items-start gap-1 text-[10px] text-gray-700">
                              <CheckCircle2 size={11} className="text-[#55B98C] shrink-0 mt-0.5" />
                              <span>{c}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
