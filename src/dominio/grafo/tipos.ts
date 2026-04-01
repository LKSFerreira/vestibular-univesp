/** Nível de domínio que o usuário demonstrou sobre um conceito. */
export type NivelDominio = 'nao_iniciado' | 'fragil' | 'em_progresso' | 'dominado';

/** Critério observável que indica domínio de um conceito. */
export interface CriterioDominio {
  readonly id: string;
  readonly descricao: string;
  readonly pesoMinimo: number;
}

/**
 * Nó do grafo de conhecimento.
 * Representa um conceito ensinável com metadados pedagógicos.
 */
export interface NoConhecimento {
  readonly id: string;
  readonly titulo: string;
  readonly descricao: string;
  readonly objetivoAprendizagem: string;
  readonly preRequisitos: readonly string[];
  readonly criteriosDominio: readonly CriterioDominio[];
  readonly moduloInterativo: string;
  readonly ordem: number;
}

/** Aresta dirigida do grafo: o nó `origem` depende do nó `destino`. */
export interface Dependencia {
  readonly origem: string;
  readonly destino: string;
}

/** Grafo de conhecimento completo de uma trilha. */
export interface GrafoConhecimento {
  readonly id: string;
  readonly titulo: string;
  readonly nos: readonly NoConhecimento[];
  readonly dependencias: readonly Dependencia[];
}
