import { describe, it, expect } from 'vitest';
import {
  criarSessao,
  transicaoValida,
  transicionarEstado,
  aplicarRegressao,
  retornarDaRegressao,
} from './maquina';

describe('criarSessao', () => {
  it('deve criar sessão no estado inicial correto', () => {
    const sessao = criarSessao('usr_123', 'funcao-quadratica');
    expect(sessao.estado).toBe('escolhendo_topico');
    expect(sessao.noAlvo).toBe('funcao-quadratica');
    expect(sessao.noAtual).toBe('funcao-quadratica');
    expect(sessao.pilhaRegressao).toEqual([]);
    expect(sessao.historicoRegressoes).toEqual([]);
  });
});

describe('transicaoValida', () => {
  it('deve permitir transição válida', () => {
    expect(transicaoValida('escolhendo_topico', 'interagindo')).toBe(true);
  });

  it('deve rejeitar transição inválida', () => {
    expect(transicaoValida('escolhendo_topico', 'concluida')).toBe(false);
  });

  it('não deve permitir nenhuma transição a partir de concluida', () => {
    expect(transicaoValida('concluida', 'interagindo')).toBe(false);
  });
});

describe('transicionarEstado', () => {
  it('deve transicionar e atualizar timestamp', () => {
    const sessao = criarSessao('usr_123', 'no-1');
    const atualizada = transicionarEstado(sessao, 'interagindo');
    expect(atualizada.estado).toBe('interagindo');
    expect(atualizada.atualizadaEm).toBeGreaterThanOrEqual(sessao.atualizadaEm);
  });

  it('deve lançar erro em transição inválida', () => {
    const sessao = criarSessao('usr_123', 'no-1');
    expect(() => transicionarEstado(sessao, 'concluida')).toThrow('Transição inválida');
  });
});

describe('regressão', () => {
  it('deve empilhar nó atual e navegar para pré-requisito', () => {
    let sessao = criarSessao('usr_123', 'funcao-quadratica');
    sessao = transicionarEstado(sessao, 'interagindo');

    const regredida = aplicarRegressao(sessao, 'discriminante', 'Erro repetido em delta');
    expect(regredida.noAtual).toBe('discriminante');
    expect(regredida.pilhaRegressao).toEqual(['funcao-quadratica']);
    expect(regredida.historicoRegressoes).toHaveLength(1);
    expect(regredida.historicoRegressoes[0].motivo).toBe('Erro repetido em delta');
  });

  it('deve retornar ao nó anterior na pilha', () => {
    let sessao = criarSessao('usr_123', 'funcao-quadratica');
    sessao = transicionarEstado(sessao, 'interagindo');
    sessao = aplicarRegressao(sessao, 'discriminante', 'teste');

    const retornada = retornarDaRegressao(sessao);
    expect(retornada.noAtual).toBe('funcao-quadratica');
    expect(retornada.pilhaRegressao).toEqual([]);
  });

  it('deve lançar erro ao retornar com pilha vazia', () => {
    const sessao = criarSessao('usr_123', 'no-1');
    expect(() => retornarDaRegressao(sessao)).toThrow('pilha vazia');
  });
});
