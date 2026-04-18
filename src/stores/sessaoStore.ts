import { create } from 'zustand';

import type { Sessao } from '@dominio/sessao/tipos';
import type { DecisaoMotor, EventoInteracao, SinalInterpretado } from '@dominio/motor/tipos';
import type { GrafoConhecimento } from '@dominio/grafo/tipos';
import { criarSessao, transicionarEstado } from '@dominio/sessao/maquina';
import { interpretarEvento } from '@dominio/motor/interpretador';
import { avaliarSinais } from '@dominio/motor/avaliador';
import { obterOuCriarUsuarioId } from '@infraestrutura/armazenamento';

interface EstadoSessao {
  sessaoAtiva: Sessao | null;
  sinaisAcumulados: SinalInterpretado[];
  ultimaDecisao: DecisaoMotor | null;
  exercicioAtual: number;
}

interface AcoesSessao {
  iniciarSessao: (topicoId: string) => void;
  registrarInteracao: (tipo: string, payload: Record<string, unknown>) => void;
  avaliarEstado: (grafo: GrafoConhecimento) => DecisaoMotor;
  aplicarDecisao: (decisao: DecisaoMotor) => void;
  encerrarSessao: () => void;
}

type StoreSessao = EstadoSessao & AcoesSessao;

function gerarIdEvento(): string {
  return `evt_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
}

export const useSessaoStore = create<StoreSessao>()((set, get) => ({
  sessaoAtiva: null,
  sinaisAcumulados: [],
  ultimaDecisao: null,
  exercicioAtual: 0,

  iniciarSessao: (topicoId) => {
    const usuarioId = obterOuCriarUsuarioId();
    const sessao = criarSessao(usuarioId, topicoId);
    const sessaoInteragindo = transicionarEstado(sessao, 'interagindo');

    set({
      sessaoAtiva: sessaoInteragindo,
      sinaisAcumulados: [],
      ultimaDecisao: null,
      exercicioAtual: 0,
    });
  },

  registrarInteracao: (tipo, payload) => {
    const { sessaoAtiva, sinaisAcumulados } = get();
    if (!sessaoAtiva) return;

    const evento: EventoInteracao = {
      id: gerarIdEvento(),
      sessaoId: sessaoAtiva.id,
      noId: sessaoAtiva.noAtual,
      tipo,
      payload,
      timestamp: Date.now(),
    };

    const sinal = interpretarEvento(evento);
    if (sinal) {
      set({ sinaisAcumulados: [...sinaisAcumulados, sinal] });
    }
  },

  avaliarEstado: (grafo) => {
    const { sinaisAcumulados, sessaoAtiva } = get();
    if (!sessaoAtiva) {
      throw new Error('Nenhuma sessão ativa para avaliar.');
    }

    const decisao = avaliarSinais(sinaisAcumulados, sessaoAtiva.noAtual, grafo);
    set({ ultimaDecisao: decisao });
    return decisao;
  },

  aplicarDecisao: (decisao) => {
    const { sessaoAtiva } = get();
    if (!sessaoAtiva) return;

    switch (decisao.tipo) {
      case 'continuar':
        break;
      case 'concluir':
        set({ sessaoAtiva: transicionarEstado(sessaoAtiva, 'concluida') });
        break;
      case 'regredir':
        set({
          sessaoAtiva: transicionarEstado(sessaoAtiva, 'avaliando'),
        });
        break;
      case 'reforcar':
        set({
          sessaoAtiva: transicionarEstado(sessaoAtiva, 'avaliando'),
        });
        break;
    }
  },

  encerrarSessao: () =>
    set({
      sessaoAtiva: null,
      sinaisAcumulados: [],
      ultimaDecisao: null,
      exercicioAtual: 0,
    }),
}));
