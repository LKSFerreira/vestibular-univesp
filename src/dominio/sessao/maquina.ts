import type { EstadoSessao, RegistroRegressao, Sessao } from './tipos';
import { TRANSICOES_VALIDAS } from './tipos';

/** Gera um ID único para sessões. */
function gerarIdSessao(): string {
  return `sessao_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
}

/** Cria uma nova sessão de aprendizagem a partir de um nó-alvo. */
export function criarSessao(usuarioId: string, noAlvo: string): Sessao {
  const agora = Date.now();
  return {
    id: gerarIdSessao(),
    usuarioId,
    noAlvo,
    noAtual: noAlvo,
    estado: 'escolhendo_topico',
    pilhaRegressao: [],
    historicoRegressoes: [],
    iniciadaEm: agora,
    atualizadaEm: agora,
  };
}

/** Verifica se uma transição de estado é válida. */
export function transicaoValida(estadoAtual: EstadoSessao, novoEstado: EstadoSessao): boolean {
  return TRANSICOES_VALIDAS[estadoAtual].includes(novoEstado);
}

/** Transiciona a sessão para um novo estado, validando a transição. */
export function transicionarEstado(sessao: Sessao, novoEstado: EstadoSessao): Sessao {
  if (!transicaoValida(sessao.estado, novoEstado)) {
    throw new Error(
      `Transição inválida: "${sessao.estado}" → "${novoEstado}". ` +
        `Transições permitidas: [${TRANSICOES_VALIDAS[sessao.estado].join(', ')}]`,
    );
  }

  return {
    ...sessao,
    estado: novoEstado,
    atualizadaEm: Date.now(),
  };
}

/** Aplica uma regressão: empilha o nó atual e navega para o pré-requisito. */
export function aplicarRegressao(
  sessao: Sessao,
  noPreRequisito: string,
  motivo: string,
): Sessao {
  const registro: RegistroRegressao = {
    noOrigem: sessao.noAtual,
    noDestino: noPreRequisito,
    motivo,
    timestamp: Date.now(),
  };

  return {
    ...sessao,
    noAtual: noPreRequisito,
    estado: 'regredindo' as EstadoSessao,
    pilhaRegressao: [...sessao.pilhaRegressao, sessao.noAtual],
    historicoRegressoes: [...sessao.historicoRegressoes, registro],
    atualizadaEm: Date.now(),
  };
}

/** Retorna ao nó anterior na pilha de regressão. */
export function retornarDaRegressao(sessao: Sessao): Sessao {
  if (sessao.pilhaRegressao.length === 0) {
    throw new Error('Não há regressão para retornar — pilha vazia.');
  }

  const novaPilha = [...sessao.pilhaRegressao];
  const noAnterior = novaPilha.pop()!;

  return {
    ...sessao,
    noAtual: noAnterior,
    estado: 'retornando' as EstadoSessao,
    pilhaRegressao: novaPilha,
    atualizadaEm: Date.now(),
  };
}
