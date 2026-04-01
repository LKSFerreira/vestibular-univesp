/** Tipos de sinal interpretados a partir de eventos brutos de interação. */
export type TipoSinal = 'acerto' | 'erro' | 'hesitacao' | 'abandono_parcial' | 'repeticao_improdutiva';

/** Nível de confiança do sinal interpretado. */
export type NivelConfianca = 'alto' | 'medio' | 'baixo';

/** Evento bruto de interação do usuário com a interface. */
export interface EventoInteracao {
  readonly id: string;
  readonly sessaoId: string;
  readonly noId: string;
  readonly tipo: string;
  readonly payload: Record<string, unknown>;
  readonly timestamp: number;
}

/** Sinal pedagógico interpretado a partir de um ou mais eventos. */
export interface SinalInterpretado {
  readonly tipo: TipoSinal;
  readonly noId: string;
  readonly confianca: NivelConfianca;
  readonly eventosRelacionados: readonly string[];
  readonly timestamp: number;
}

/** Decisão tomada pelo motor adaptativo. */
export type TipoDecisao = 'continuar' | 'regredir' | 'concluir' | 'reforcar';

/** Resultado da avaliação do motor adaptativo. */
export interface DecisaoMotor {
  readonly tipo: TipoDecisao;
  readonly noAtual: string;
  readonly noSugerido: string | null;
  readonly motivo: string;
  readonly sinaisConsiderados: readonly SinalInterpretado[];
  readonly timestamp: number;
}
