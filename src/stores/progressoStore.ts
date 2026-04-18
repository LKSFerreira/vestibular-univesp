import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { NivelDominio } from '@dominio/grafo/tipos';
import type { ProgressoNo } from '@dominio/progresso/tipos';
import {
  calcularNivelDominio,
  criarProgressoNo,
  registrarAcerto,
  registrarErro,
} from '@dominio/progresso/calculador';

interface EstatisticasGlobais {
  readonly totalExercicios: number;
  readonly totalCorretas: number;
  readonly topicosIniciados: number;
  readonly topicosDominados: number;
}

interface EstadoProgresso {
  progressoPorTopico: Record<string, ProgressoNo>;
  exerciciosRespondidos: Record<string, { corretas: number; total: number }>;
  tempoEstudoPorTopico: Record<string, number>;
  inicioSessaoTopico: number | null;
  _topicoSessaoAtual: string | null;
}

interface AcoesProgresso {
  registrarRespostaExercicio: (topicoId: string, correto: boolean) => void;
  obterProgresso: (topicoId: string) => ProgressoNo;
  obterNivelTopico: (topicoId: string) => NivelDominio;
  obterEstatisticasGlobais: () => EstatisticasGlobais;
  resetarProgresso: () => void;
  iniciarEstudoTopico: (topicoId: string) => void;
  pausarEstudoTopico: () => void;
  obterTempoTotalEstudo: () => number;
}

type StoreProgresso = EstadoProgresso & AcoesProgresso;

export const useProgressoStore = create<StoreProgresso>()(
  persist(
    (set, get) => ({
      progressoPorTopico: {},
      exerciciosRespondidos: {},
      tempoEstudoPorTopico: {},
      inicioSessaoTopico: null,
      _topicoSessaoAtual: null,

      registrarRespostaExercicio: (topicoId, correto) =>
        set((estado) => {
          const progressoAtual =
            estado.progressoPorTopico[topicoId] ?? criarProgressoNo(topicoId);

          const progressoAtualizado = correto
            ? registrarAcerto(progressoAtual)
            : registrarErro(progressoAtual);

          const exercicioAtual = estado.exerciciosRespondidos[topicoId] ?? {
            corretas: 0,
            total: 0,
          };

          return {
            progressoPorTopico: {
              ...estado.progressoPorTopico,
              [topicoId]: progressoAtualizado,
            },
            exerciciosRespondidos: {
              ...estado.exerciciosRespondidos,
              [topicoId]: {
                corretas: exercicioAtual.corretas + (correto ? 1 : 0),
                total: exercicioAtual.total + 1,
              },
            },
          };
        }),

      obterProgresso: (topicoId) => {
        const estado = get();
        return estado.progressoPorTopico[topicoId] ?? criarProgressoNo(topicoId);
      },

      obterNivelTopico: (topicoId) => {
        const estado = get();
        const progresso = estado.progressoPorTopico[topicoId];
        if (!progresso) return 'nao_iniciado';
        return calcularNivelDominio(progresso.totalAcertos, progresso.totalTentativas);
      },

      obterEstatisticasGlobais: () => {
        const estado = get();
        const exercicios = Object.values(estado.exerciciosRespondidos);
        const progressos = Object.values(estado.progressoPorTopico);

        return {
          totalExercicios: exercicios.reduce((acc, e) => acc + e.total, 0),
          totalCorretas: exercicios.reduce((acc, e) => acc + e.corretas, 0),
          topicosIniciados: progressos.filter((p) => p.totalTentativas > 0).length,
          topicosDominados: progressos.filter((p) => p.nivel === 'dominado').length,
        };
      },

      resetarProgresso: () =>
        set({
          progressoPorTopico: {},
          exerciciosRespondidos: {},
          tempoEstudoPorTopico: {},
          inicioSessaoTopico: null,
          _topicoSessaoAtual: null,
        }),

      iniciarEstudoTopico: (topicoId) => {
        const estado = get();

        // Pause current topic first if one is active
        if (estado.inicioSessaoTopico && estado._topicoSessaoAtual) {
          const tempoDecorrido = Date.now() - estado.inicioSessaoTopico;
          const tempoAnterior = estado.tempoEstudoPorTopico[estado._topicoSessaoAtual] ?? 0;

          set({
            tempoEstudoPorTopico: {
              ...estado.tempoEstudoPorTopico,
              [estado._topicoSessaoAtual]: tempoAnterior + tempoDecorrido,
            },
            inicioSessaoTopico: Date.now(),
            _topicoSessaoAtual: topicoId,
          });
        } else {
          set({
            inicioSessaoTopico: Date.now(),
            _topicoSessaoAtual: topicoId,
          });
        }
      },

      pausarEstudoTopico: () => {
        const estado = get();
        if (!estado.inicioSessaoTopico || !estado._topicoSessaoAtual) return;

        const tempoDecorrido = Date.now() - estado.inicioSessaoTopico;
        const tempoAnterior = estado.tempoEstudoPorTopico[estado._topicoSessaoAtual] ?? 0;

        set({
          tempoEstudoPorTopico: {
            ...estado.tempoEstudoPorTopico,
            [estado._topicoSessaoAtual]: tempoAnterior + tempoDecorrido,
          },
          inicioSessaoTopico: null,
          _topicoSessaoAtual: null,
        });
      },

      obterTempoTotalEstudo: () => {
        const estado = get();
        let total = Object.values(estado.tempoEstudoPorTopico).reduce(
          (acc, t) => acc + t,
          0,
        );

        // Include current active session time
        if (estado.inicioSessaoTopico) {
          total += Date.now() - estado.inicioSessaoTopico;
        }

        return total;
      },
    }),
    {
      name: 'vestibular-progresso',
      partialize: (estado) => ({
        progressoPorTopico: estado.progressoPorTopico,
        exerciciosRespondidos: estado.exerciciosRespondidos,
        tempoEstudoPorTopico: estado.tempoEstudoPorTopico,
      }),
    },
  ),
);
