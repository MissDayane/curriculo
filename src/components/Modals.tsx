import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle2, Copy, Printer, FileText } from 'lucide-react';
import { WashiTape, StarDoodle } from './Doodles';

// ==================== CONTACT MODAL ====================
interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    tipo: 'UX/UI & Design',
    mensagem: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('contato.dayanepontes@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="relative w-full max-w-lg bg-[#FFFDF9] rounded-2xl border-[3px] border-[#111111] p-6 md:p-8 shadow-ink-lg overflow-hidden"
          >
            {/* Top Washi Tape */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2">
              <WashiTape color="yellow" width="w-32" rotation={-1} />
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1.5 rounded-full border-2 border-[#111111] bg-white hover:bg-gray-100 shadow-ink-sm transition-transform active:scale-95"
              aria-label="Fechar"
            >
              <X size={18} className="text-[#111111]" />
            </button>

            {!submitted ? (
              <>
                <div className="mb-5 mt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#3157D5]">
                    Contato Direto
                  </span>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#111111] mt-0.5">
                    Me Mande uma Mensagem ✉
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Vamos conversar sobre oportunidades em UX/UI, Frontend ou projetos de IA.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wide text-[#111111] mb-1">
                      Seu Nome
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Clara Mendes"
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border-2 border-[#111111] rounded-lg text-sm focus:outline-hidden focus:ring-2 focus:ring-[#3157D5] shadow-ink-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wide text-[#111111] mb-1">
                      Seu E-mail Corporativo ou Pessoal
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="seu.email@empresa.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border-2 border-[#111111] rounded-lg text-sm focus:outline-hidden focus:ring-2 focus:ring-[#3157D5] shadow-ink-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wide text-[#111111] mb-1">
                      Área de Interesse
                    </label>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {['UX/UI Design', 'Front-end React', 'Curadoria de IA & Dados', 'Outro / Parceria'].map((cat) => (
                        <button
                          type="button"
                          key={cat}
                          onClick={() => setFormData({ ...formData, tipo: cat })}
                          className={`py-2 px-3 rounded-lg border-2 border-[#111111] font-medium text-left transition-all ${
                            formData.tipo === cat
                              ? 'bg-[#F4C542] text-[#111111] font-bold shadow-ink-sm'
                              : 'bg-white hover:bg-gray-50'
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wide text-[#111111] mb-1">
                      Mensagem
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Compartilhe a oportunidade ou o desafio que gostaria de resolver..."
                      value={formData.mensagem}
                      onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border-2 border-[#111111] rounded-lg text-sm focus:outline-hidden focus:ring-2 focus:ring-[#3157D5] shadow-ink-sm resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      className="w-full sm:flex-1 py-3 px-6 bg-[#3157D5] text-white font-bold rounded-lg border-2 border-[#111111] shadow-ink flex items-center justify-center gap-2 hover:bg-[#2546b3] transition-transform active:translate-y-0.5 cursor-pointer"
                    >
                      <Send size={16} />
                      Enviar Mensagem
                    </button>

                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="w-full sm:w-auto py-3 px-4 bg-white text-[#111111] font-semibold text-xs rounded-lg border-2 border-[#111111] hover:bg-gray-50 flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Copy size={14} />
                      {copiedEmail ? 'Email Copiado!' : 'Copiar Email'}
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 bg-[#55B98C]/20 border-2 border-[#111111] rounded-full mx-auto flex items-center justify-center text-[#145336]">
                  <CheckCircle2 size={36} />
                </div>
                <div className="space-y-2">
                  <div className="inline-block px-3 py-1 bg-[#F4C542] border-2 border-[#111111] rounded-md font-mono text-xs font-bold rotate-[-2deg]">
                    ENVIADO COM SUCESSO!
                  </div>
                  <h4 className="text-2xl font-serif font-bold text-[#111111]">
                    Obrigada pelo contato, {formData.nome.split(' ')[0]}!
                  </h4>
                  <p className="text-sm text-gray-600 max-w-sm mx-auto">
                    Recebi sua mensagem com foco em <strong>{formData.tipo}</strong> e retornarei o mais breve possível para o email <em>{formData.email}</em>.
                  </p>
                </div>

                <div className="pt-4 flex justify-center gap-3">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      onClose();
                    }}
                    className="py-2.5 px-6 bg-[#111111] text-white font-bold rounded-lg border-2 border-[#111111] shadow-ink hover:bg-black cursor-pointer"
                  >
                    Voltar ao Portfólio
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

// ==================== RESUME / CV MODAL ====================
interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const resumeMarkdown = `# Dayane Pontes
UX/UI Designer & Frontend Developer
Maceió, Alagoas — Brasil | contato.dayanepontes@gmail.com | +55 (82) 99999-0000

## Resumo Profissional
Minha especialidade é pegar desafios e demandas concretas e desenvolvê-las em soluções digitais que sejam funcionais, fáceis de usar e focadas nas pessoas. Combinando design de UX/UI com Front-end, trabalho em todo o processo de criação de experiências digitais, desde a investigação inicial e o desenho da solução até a prototipagem, a estrutura da interface e a sua construção. Aplico Design Thinking, pesquisa de UX, UX Writing, acessibilidade e prototipagem.

## Experiência Profissional
- Data Curation & Data Annotation | UNOPS — Nosso Chão, Nossa História (Out/2025 – Nov/2025)
  - Curadoria, limpeza e padronização de dados, preparando bases para soluções de IA.
  - Data labeling e annotation, classificando e estruturando informações para treinamento de modelos.
  - Validação e controle de qualidade, identificando inconsistências, duplicidades e erros.

- Estagiária de Tecnologia, UX/UI & Front-end | Centro de Inovação e Robótica — CESMAC (Nov/2024 – Atual)
  - Liderança de mais de 30 projetos de UX/UI, da descoberta à prototipagem.
  - Análise de requisitos com equipes e stakeholders.
  - Design Thinking, UX Research, arquitetura da informação e prototipagem centrada no usuário.
  - Desenvolvimento de interfaces com HTML, CSS, JavaScript e React.

- UN IT Assistant | UNOPS — Nosso Chão, Nossa História (Abr/2025 – Out/2025)
  - Suporte técnico N1 a equipes e mobilizadores.
  - Condução de treinamentos e orientações simplificando processos técnicos.
  - Monitoramento de dispositivos e relatórios técnicos.

## Competências Técnicas
- Product Design & UX/UI: Figma, Prototipagem, UX Research, Design Systems, Acessibilidade
- Desenvolvimento: React, JavaScript, HTML5 & CSS3, Git/GitHub, SpringBoot/Java
- Dados & IA: Python, Análise de Dados, Curadoria de Dados, IA aplicada
- Métodos: Design Thinking, Levantamento de Requisitos, Metodologias Ágeis
`;

  const handleCopyMarkdown = () => {
    navigator.clipboard.writeText(resumeMarkdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="relative w-full max-w-3xl my-8 bg-[#FFFDF9] rounded-2xl border-[3px] border-[#111111] p-6 md:p-10 shadow-ink-lg"
          >
            {/* Action Bar */}
            <div className="flex items-center justify-between pb-4 border-b-2 border-[#111111]/20 mb-6">
              <div className="flex items-center gap-2">
                <FileText className="text-[#3157D5]" size={22} />
                <span className="font-serif font-bold text-lg md:text-xl text-[#111111]">
                  Currículo Estruturado — Dayane Pontes
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrint}
                  className="px-3 py-1.5 bg-white border-2 border-[#111111] rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-ink-sm hover:bg-gray-50 cursor-pointer"
                  title="Imprimir ou Salvar como PDF"
                >
                  <Printer size={14} />
                  Imprimir / PDF
                </button>
                <button
                  onClick={handleCopyMarkdown}
                  className="px-3 py-1.5 bg-[#F4C542] border-2 border-[#111111] rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-ink-sm hover:bg-[#eec03d] cursor-pointer"
                  title="Copiar texto formatado em Markdown"
                >
                  <Copy size={14} />
                  {copied ? 'Copiado!' : 'Copiar Texto'}
                </button>
                <button
                  onClick={onClose}
                  className="p-1.5 bg-white border-2 border-[#111111] rounded-lg hover:bg-gray-100 shadow-ink-sm"
                  aria-label="Fechar"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Printable Sheet View */}
            <div className="space-y-6 text-[#111111] leading-relaxed">
              {/* Header */}
              <div className="border-b pb-4 border-[#111111]/15">
                <h1 className="text-3xl font-serif font-black text-[#111111]">Dayane Pontes</h1>
                <p className="text-sm font-bold text-[#3157D5] mt-0.5">
                  UX/UI Designer & Frontend Developer
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  Maceió, Alagoas — Brasil · contato.dayanepontes@gmail.com · +55 (82) 99999-0000
                </p>
              </div>

              {/* Sobre Mim */}
              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-[#FF6B5F] mb-1.5">
                  Resumo Profissional
                </h2>
                <p className="text-sm text-gray-700 text-justify">
                  Minha especialidade é pegar desafios e demandas concretas e desenvolvê-las em soluções digitais que sejam funcionais, fáceis de usar e focadas nas pessoas. Combinando design de UX/UI com Front-end, trabalho em todo o processo de criação de experiências digitais, desde a investigação inicial e o desenho da solução até a prototipagem, a estrutura da interface e a sua construção. Aplico Design Thinking, pesquisa de UX, UX Writing, acessibilidade e prototipagem para embasar minhas escolhas de design e construir interfaces que harmonizem a experiência do usuário, o visual e a tecnologia.
                </p>
              </div>

              {/* Experiência */}
              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-[#3157D5] mb-3">
                  Experiência Profissional
                </h2>

                <div className="space-y-4">
                  <div className="border-l-3 border-[#D98BB7] pl-3">
                    <div className="flex justify-between items-baseline">
                      <h3 className="font-bold text-sm text-[#111111]">Data Curation & Data Annotation</h3>
                      <span className="text-xs text-gray-500 font-mono">Out/2025 – Nov/2025</span>
                    </div>
                    <p className="text-xs text-[#3157D5] font-semibold">UNOPS — Nosso Chão, Nossa História</p>
                    <ul className="list-disc list-inside text-xs text-gray-600 mt-1 space-y-0.5">
                      <li>Realizei curadoria, limpeza e padronização de dados, preparando bases para soluções de IA.</li>
                      <li>Executei data labeling e annotation, classificando e estruturando informações para treinamento de modelos.</li>
                      <li>Realizei validação e controle de qualidade, identificando inconsistências e duplicidades.</li>
                    </ul>
                  </div>

                  <div className="border-l-3 border-[#55B98C] pl-3">
                    <div className="flex justify-between items-baseline">
                      <h3 className="font-bold text-sm text-[#111111]">Estagiária de Tecnologia, UX/UI & Front-end</h3>
                      <span className="text-xs text-[#145336] font-mono font-bold">Nov/2024 – Atual (Em atividade)</span>
                    </div>
                    <p className="text-xs text-[#55B98C] font-semibold">Centro de Inovação e Robótica — CESMAC</p>
                    <ul className="list-disc list-inside text-xs text-gray-600 mt-1 space-y-0.5">
                      <li>Liderei mais de 30 projetos de UX/UI, da descoberta do problema à prototipagem e evolução do produto.</li>
                      <li>Analiso requisitos de software com equipes e stakeholders, traduzindo necessidades em fluxos e telas.</li>
                      <li>Aplico Design Thinking, UX Research, arquitetura da informação e prototipagem centrada no usuário.</li>
                      <li>Desenvolvo interfaces no Figma e aplicações web com HTML, CSS, JavaScript e React.</li>
                    </ul>
                  </div>

                  <div className="border-l-3 border-[#3157D5] pl-3">
                    <div className="flex justify-between items-baseline">
                      <h3 className="font-bold text-sm text-[#111111]">UN IT Assistant (Suporte N1)</h3>
                      <span className="text-xs text-gray-500 font-mono">Abr/2025 – Out/2025</span>
                    </div>
                    <p className="text-xs text-[#3157D5] font-semibold">UNOPS — Nosso Chão, Nossa História</p>
                    <ul className="list-disc list-inside text-xs text-gray-600 mt-1 space-y-0.5">
                      <li>Prestei suporte técnico N1 a equipes e mobilizadores, solucionando problemas em ferramentas digitais e dispositivos.</li>
                      <li>Conduzi treinamentos e orientações, simplificando processos técnicos para facilitar o uso das ferramentas.</li>
                      <li>Realizei monitoramento de dispositivos e produzi relatórios e documentação técnica.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Competências */}
              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-[#55B98C] mb-2">
                  Competências Técnicas
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
                  <div className="bg-white p-2.5 rounded border border-[#111111]">
                    <div className="font-bold text-[#FF6B5F]">UX/UI Design</div>
                    <div className="text-gray-600 mt-1">Figma, Design Systems, UX Research, Wireframes</div>
                  </div>
                  <div className="bg-white p-2.5 rounded border border-[#111111]">
                    <div className="font-bold text-[#3157D5]">Front-end</div>
                    <div className="text-gray-600 mt-1">React, JavaScript, HTML5, CSS3, Tailwind</div>
                  </div>
                  <div className="bg-white p-2.5 rounded border border-[#111111]">
                    <div className="font-bold text-[#F4C542]">Dados & IA</div>
                    <div className="text-gray-600 mt-1">Python, Curadoria de Dados, Data Labeling</div>
                  </div>
                  <div className="bg-white p-2.5 rounded border border-[#111111]">
                    <div className="font-bold text-[#55B98C]">Processos</div>
                    <div className="text-gray-600 mt-1">Design Thinking, Requisitos, Metodologias Ágeis</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

// ==================== PROJECT DETAIL MODAL ====================
export interface ProjectData {
  id: string;
  number: string;
  tapeColor: 'yellow' | 'coral' | 'rose' | 'green' | 'blue';
  title: string;
  subtitle: string;
  tag: string;
  summary: string;
  desafio: string;
  solucao: string;
  impacto: string;
  ferramentas: string[];
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/55 backdrop-blur-xs overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative w-full max-w-2xl my-6 bg-[#FFFDF9] rounded-2xl border-[3px] border-[#111111] p-6 md:p-8 shadow-ink-lg"
          >
            {/* Top Washi Tape */}
            <div className="absolute top-0 left-12 -translate-y-2">
              <WashiTape color={project.tapeColor} width="w-28" rotation={-2} />
            </div>

            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1.5 rounded-full border-2 border-[#111111] bg-white hover:bg-gray-100 shadow-ink-sm cursor-pointer"
              aria-label="Fechar"
            >
              <X size={18} />
            </button>

            {/* Header */}
            <div className="mt-4 mb-4">
              <div className="inline-block px-2.5 py-0.5 rounded border border-[#111111] bg-[#F7F3EA] text-xs font-mono font-bold mb-2">
                {project.number}
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#111111]">
                {project.title}
              </h2>
              <p className="text-sm font-semibold text-[#3157D5] mt-1">{project.subtitle}</p>
            </div>

            {/* Detailed Content */}
            <div className="space-y-4 text-sm text-gray-700">
              <div className="p-3.5 bg-[#FAF7F0] border-2 border-[#111111] rounded-xl shadow-ink-sm">
                <span className="text-xs font-bold uppercase tracking-wider text-[#111111] block mb-1">
                  Visão Geral do Caso
                </span>
                <p>{project.summary}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="p-3.5 bg-white border border-[#111111] rounded-xl">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#FF6B5F] block mb-1">
                    🎯 O Desafio
                  </span>
                  <p className="text-xs text-gray-600 leading-relaxed">{project.desafio}</p>
                </div>

                <div className="p-3.5 bg-white border border-[#111111] rounded-xl">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#55B98C] block mb-1">
                    💡 A Solução
                  </span>
                  <p className="text-xs text-gray-600 leading-relaxed">{project.solucao}</p>
                </div>
              </div>

              <div className="p-3.5 bg-white border border-[#111111] rounded-xl">
                <span className="text-xs font-bold uppercase tracking-wider text-[#3157D5] block mb-1">
                  🚀 Resultados & Impacto
                </span>
                <p className="text-xs text-gray-600 leading-relaxed">{project.impacto}</p>
              </div>

              {/* Tools tags */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#111111] block mb-2">
                  Tecnologias & Metodologias Empregadas:
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.ferramentas.map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-1 bg-[#F4C542]/20 border border-[#111111] rounded-md text-xs font-medium text-[#111111]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#111111]/20 flex justify-end">
              <button
                onClick={onClose}
                className="py-2 px-5 bg-[#111111] text-white text-xs font-bold rounded-lg border-2 border-[#111111] shadow-ink hover:bg-black cursor-pointer"
              >
                Fechar Estudo
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
