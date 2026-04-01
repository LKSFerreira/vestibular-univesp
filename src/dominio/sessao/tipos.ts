/** Estado da máquina de estados da sessão de aprendizagem. */
export type EstadoSessao =
  | 'escolhendo_topico'
  | 'interagindo'
  | 'avaliando'
  | 'regredindo'
  | 'reforcando'
  | 'retornando'
  | 'concluida';

/** Registro de uma regressão realizada durante a sessão. */
export interface RegistroRegressao {
  readonly noOrigem: string;
  readonly noDestino: string;
  readonly motivo: string;
  readonly timestamp: number;
}

/** Sessão de aprendizagem completa. */
export interface Sessao {
  readonly id: string;
  readonly usuarioId: string;
  readonly noAlvo: string;
  readonly noAtual: string;
  readonly estado: EstadoSessao;
  readonly pilhaRegressao: readonly string[];
  readonly historicoRegressoes: readonly RegistroRegressao[];
  readonly iniciadaEm: number;
  readonly atualizadaEm: number;
}

/** Transições válidas da máquina de estados da sessão. */
export const TRANSICOES_VALIDAS: Record<EstadoSessao, readonly EstadoSessao[]> = {
  escolhendo_topico: ['interagindo'],
  interagindo: ['avaliando', 'concluida'],
  avaliando: ['interagindo', 'regredindo', 'concluida'],
  regredindo: ['reforcando'],
  reforcando: ['avaliando', 'retornando'],
  retornando: ['interagindo'],
  concluida: [],
} as const;
