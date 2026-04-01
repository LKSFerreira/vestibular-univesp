import { describe, it, expect } from 'vitest';
import { interpretarEvento } from './interpretador';
import { avaliarSinais } from './avaliador';
import { GRAFO_FUNCAO_SEGUNDO_GRAU } from '@conteudo/matematica/funcao-segundo-grau/grafo';
import type { EventoInteracao, SinalInterpretado } from './tipos';

function criarEvento(overrides: Partial<EventoInteracao>): EventoInteracao {
  return {
    id: `evt_${Math.random().toString(36).substring(2)}`,
    sessaoId: 'sessao_teste',
    noId: 'discriminante',
    tipo: 'resposta',
    payload: {},
    timestamp: Date.now(),
    ...overrides,
  };
}

describe('interpretarEvento', () => {
  it('deve interpretar resposta correta como acerto', () => {
    const sinal = interpretarEvento(criarEvento({ tipo: 'resposta', payload: { correto: true } }));
    expect(sinal?.tipo).toBe('acerto');
  });

  it('deve interpretar resposta incorreta como erro', () => {
    const sinal = interpretarEvento(criarEvento({ tipo: 'resposta', payload: { correto: false } }));
    expect(sinal?.tipo).toBe('erro');
  });

  it('deve interpretar inatividade longa como abandono', () => {
    const sinal = interpretarEvento(
      criarEvento({ tipo: 'tempo_inativo', payload: { duracaoMs: 35000 } }),
    );
    expect(sinal?.tipo).toBe('abandono_parcial');
  });

  it('deve interpretar inatividade média como hesitação', () => {
    const sinal = interpretarEvento(
      criarEvento({ tipo: 'tempo_inativo', payload: { duracaoMs: 12000 } }),
    );
    expect(sinal?.tipo).toBe('hesitacao');
  });

  it('deve retornar null para evento não classificável', () => {
    const sinal = interpretarEvento(criarEvento({ tipo: 'clique_generico' }));
    expect(sinal).toBeNull();
  });
});

describe('avaliarSinais', () => {
  const grafo = GRAFO_FUNCAO_SEGUNDO_GRAU;

  it('deve decidir regredir após múltiplos erros', () => {
    const sinais: SinalInterpretado[] = Array.from({ length: 3 }, () => ({
      tipo: 'erro' as const,
      noId: 'discriminante',
      confianca: 'alto' as const,
      eventosRelacionados: [],
      timestamp: Date.now(),
    }));

    const decisao = avaliarSinais(sinais, 'discriminante', grafo);
    expect(decisao.tipo).toBe('regredir');
    expect(decisao.noSugerido).toBe('equacao-segundo-grau');
  });

  it('deve decidir concluir após acertos suficientes', () => {
    const sinais: SinalInterpretado[] = Array.from({ length: 3 }, () => ({
      tipo: 'acerto' as const,
      noId: 'discriminante',
      confianca: 'alto' as const,
      eventosRelacionados: [],
      timestamp: Date.now(),
    }));

    const decisao = avaliarSinais(sinais, 'discriminante', grafo);
    expect(decisao.tipo).toBe('concluir');
  });

  it('deve decidir continuar sem sinais significativos', () => {
    const decisao = avaliarSinais([], 'discriminante', grafo);
    expect(decisao.tipo).toBe('continuar');
  });
});
