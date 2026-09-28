import React from 'react';
import { motion } from 'motion/react';

// Estudo 01: Design System & Interface Web mini browser wireframe
export const DesignSystemWireframe: React.FC = () => {
  return (
    <div className="w-full h-44 bg-[#F7F3EA] rounded-lg border-2 border-[#111111] p-3 flex flex-col justify-between overflow-hidden relative select-none">
      {/* Mini Browser Top Header */}
      <div className="flex items-center justify-between pb-2 border-b border-[#111111]/15">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full border border-[#111111] bg-[#FF6B5F]" />
          <div className="w-2.5 h-2.5 rounded-full border border-[#111111] bg-[#F4C542]" />
          <div className="w-2.5 h-2.5 rounded-full border border-[#111111] bg-[#55B98C]" />
        </div>
        <div className="bg-white/80 border border-[#111111]/30 rounded px-2 py-0.5 text-[9px] font-mono text-[#555]">
          ds.tokens.v2
        </div>
        <div className="w-3" />
      </div>

      {/* Main Content: Token Cards & Button States */}
      <div className="grid grid-cols-3 gap-2 my-auto">
        <motion.div
          className="bg-white rounded border border-[#111111] p-2 flex flex-col items-center gap-1 shadow-ink-sm"
          whileHover={{ y: -2 }}
        >
          <div className="w-full h-2.5 bg-[#3157D5] rounded-xs" />
          <span className="text-[8px] font-mono text-[#333]">Primary</span>
        </motion.div>

        <motion.div
          className="bg-white rounded border border-[#111111] p-2 flex flex-col items-center gap-1 shadow-ink-sm"
          whileHover={{ y: -2 }}
        >
          <div className="w-full h-2.5 bg-[#FF6B5F] rounded-xs" />
          <span className="text-[8px] font-mono text-[#333]">Accent</span>
        </motion.div>

        <motion.div
          className="bg-white rounded border border-[#111111] p-2 flex flex-col items-center gap-1 shadow-ink-sm"
          whileHover={{ y: -2 }}
        >
          <div className="w-full h-2.5 bg-[#F4C542] rounded-xs" />
          <span className="text-[8px] font-mono text-[#333]">Warning</span>
        </motion.div>
      </div>

      {/* Bottom Components Showcase */}
      <div className="bg-white/90 rounded border border-dashed border-[#111111]/40 p-1.5 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-[#55B98C]" />
          <span className="text-[8px] font-semibold text-[#111111]">Button / Active</span>
        </div>
        <div className="bg-[#111111] text-white text-[8px] px-2 py-0.5 rounded font-mono">
          px-4 py-2
        </div>
      </div>
    </div>
  );
};

// Estudo 02: Curadoria de Dados & Modelagem IA mini browser wireframe
export const DataCurationWireframe: React.FC = () => {
  return (
    <div className="w-full h-44 bg-[#F7F3EA] rounded-lg border-2 border-[#111111] p-3 flex flex-col justify-between overflow-hidden relative select-none">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-2 border-b border-[#111111]/15">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full border border-[#111111] bg-[#FF6B5F]" />
          <div className="w-2.5 h-2.5 rounded-full border border-[#111111] bg-[#F4C542]" />
          <div className="w-2.5 h-2.5 rounded-full border border-[#111111] bg-[#55B98C]" />
        </div>
        <div className="bg-white/80 border border-[#111111]/30 rounded px-2 py-0.5 text-[9px] font-mono text-[#555]">
          pipeline.curation.ai
        </div>
        <div className="w-3" />
      </div>

      {/* Pipeline Data Matrix */}
      <div className="space-y-1.5 my-auto">
        <div className="bg-white rounded border border-[#111111] p-1.5 flex items-center justify-between shadow-ink-sm text-[8px]">
          <div className="flex items-center gap-1.5 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3157D5]" />
            <span>sample_dataset_v4</span>
          </div>
          <span className="bg-[#55B98C]/20 text-[#145336] px-1.5 py-0.5 rounded font-bold">
            99.4% Aprovado
          </span>
        </div>

        <div className="bg-white rounded border border-[#111111] p-1.5 flex items-center justify-between shadow-ink-sm text-[8px]">
          <div className="flex items-center gap-1.5 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B5F]" />
            <span>taxonomy_clustering</span>
          </div>
          <span className="bg-[#F4C542]/30 text-[#8A6A08] px-1.5 py-0.5 rounded font-bold">
            Normalizado
          </span>
        </div>
      </div>

      {/* Confidence Bar */}
      <div className="bg-white/90 rounded border border-dashed border-[#111111]/40 p-1.5 flex items-center justify-between">
        <span className="text-[8px] font-semibold text-[#111111]">Anotação & Validação</span>
        <div className="w-24 bg-gray-200 h-2 rounded-full overflow-hidden border border-[#111111]">
          <div className="bg-[#3157D5] h-full w-4/5" />
        </div>
      </div>
    </div>
  );
};

// Estudo 03: Pesquisa com Usuários & Protótipo mobile wireframe
export const UserResearchWireframe: React.FC = () => {
  return (
    <div className="w-full h-44 bg-[#F7F3EA] rounded-lg border-2 border-[#111111] p-2 flex items-center justify-center overflow-hidden relative select-none">
      {/* Mobile Device Mockup centered */}
      <div className="w-32 h-40 bg-white rounded-xl border-2 border-[#111111] p-2 flex flex-col justify-between shadow-ink-sm">
        {/* Mobile Notch & Speaker */}
        <div className="w-8 h-1 bg-[#111111] rounded-full mx-auto" />

        {/* User Card */}
        <div className="bg-[#FFF4E6] border border-[#111111] rounded p-1.5 my-1">
          <div className="flex items-center gap-1">
            <div className="w-3.5 h-3.5 rounded-full bg-[#FF6B5F] border border-[#111111]" />
            <div className="w-12 h-1.5 bg-[#111111] rounded-xs" />
          </div>
          <div className="w-16 h-1 bg-gray-300 rounded-xs mt-1" />
        </div>

        {/* Journey Step Boxes */}
        <div className="grid grid-cols-2 gap-1 my-0.5">
          <div className="h-6 bg-[#E8EEFF] border border-[#111111] rounded flex items-center justify-center text-[7px] font-bold text-[#3157D5]">
            Etapa 01
          </div>
          <div className="h-6 bg-[#E7F6ED] border border-[#111111] rounded flex items-center justify-center text-[7px] font-bold text-[#145336]">
            Etapa 02
          </div>
        </div>

        {/* Mobile CTA */}
        <div className="w-full py-1 bg-[#111111] text-white text-[7px] text-center rounded font-semibold">
          Finalizar Fluxo
        </div>

        {/* Home Indicator */}
        <div className="w-10 h-0.5 bg-[#111111] rounded-full mx-auto" />
      </div>
    </div>
  );
};
