import type { NivelDominio } from '@dominio/grafo/tipos';

/** Progresso do usuário em um nó específico de conhecimento. */
export interface ProgressoNo {
  readonly noId: string;
  readonly nivel: NivelDominio;
  readonly totalAcertos: number;
  readonly totalErros: number;
  readonly totalTentativas: number;
  readonly ultimaInteracao: number;
}

/** Progresso agregado do usuário em uma trilha. */
export interface ProgressoTrilha {
  readonly trilhaId: string;
  readonly usuarioId: string;
  readonly nos: Record<string, ProgressoNo>;
  readonly atualizadoEm: number;
}
