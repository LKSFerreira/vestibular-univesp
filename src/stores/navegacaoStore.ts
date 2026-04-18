import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface TopicoAtivo {
  readonly disciplinaId: string;
  readonly topicoId: string;
}

interface EstadoNavegacao {
  painelEsquerdoAberto: boolean;
  painelDireitoAberto: boolean;
  disciplinaExpandidaId: string | null;
  topicoSelecionadoPorDisciplina: Record<string, string>;
  topicoAtivo: TopicoAtivo | null;
}

interface AcoesNavegacao {
  alternarPainelEsquerdo: () => void;
  alternarPainelDireito: () => void;
  fecharPaineis: () => void;
  expandirDisciplina: (disciplinaId: string) => void;
  selecionarTopico: (disciplinaId: string, topicoId: string) => void;
  irParaEmenta: () => void;
}

type StoreNavegacao = EstadoNavegacao & AcoesNavegacao;

export const useNavegacaoStore = create<StoreNavegacao>()(
  persist(
    (set) => ({
      painelEsquerdoAberto: true,
      painelDireitoAberto: false,
      disciplinaExpandidaId: null,
      topicoSelecionadoPorDisciplina: {},
      topicoAtivo: null,

      alternarPainelEsquerdo: () =>
        set((estado) => ({ painelEsquerdoAberto: !estado.painelEsquerdoAberto })),

      alternarPainelDireito: () =>
        set((estado) => ({ painelDireitoAberto: !estado.painelDireitoAberto })),

      fecharPaineis: () =>
        set({ painelEsquerdoAberto: false, painelDireitoAberto: false }),

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
