import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface TopicoAtivo {
  readonly disciplinaId: string;
  readonly topicoId: string;
}

interface EstadoNavegacao {
  painelEsquerdoAberto: boolean;
  disciplinaExpandidaId: string | null;
  topicoSelecionadoPorDisciplina: Record<string, string>;
  topicoAtivo: TopicoAtivo | null;
}

interface AcoesNavegacao {
  alternarPainelEsquerdo: () => void;
  expandirDisciplina: (disciplinaId: string) => void;
  selecionarTopico: (disciplinaId: string, topicoId: string) => void;
  irParaEmenta: () => void;
}

type StoreNavegacao = EstadoNavegacao & AcoesNavegacao;

export const useNavegacaoStore = create<StoreNavegacao>()(
  persist(
    (set) => ({
      painelEsquerdoAberto: true,
      disciplinaExpandidaId: null,
      topicoSelecionadoPorDisciplina: {},
      topicoAtivo: null,

      alternarPainelEsquerdo: () =>
        set((estado) => ({ painelEsquerdoAberto: !estado.painelEsquerdoAberto })),

      expandirDisciplina: (disciplinaId) =>
        set((estado) => ({
          disciplinaExpandidaId:
            estado.disciplinaExpandidaId === disciplinaId ? null : disciplinaId,
        })),

      selecionarTopico: (disciplinaId, topicoId) =>
        set((estado) => ({
          topicoAtivo: { disciplinaId, topicoId },
          topicoSelecionadoPorDisciplina: {
            ...estado.topicoSelecionadoPorDisciplina,
            [disciplinaId]: topicoId,
          },
        })),

      irParaEmenta: () => set({ topicoAtivo: null }),
    }),
    {
      name: 'vestibular-navegacao',
    },
  ),
);
