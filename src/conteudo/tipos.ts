/** Conteúdo renderizável de um tópico de estudo. */
export interface ConteudoTopico {
  readonly resumo: string;
  readonly explicacao: string;
  readonly imagemDescricao?: string;
  readonly moduloInterativo?: string;
}

/** Tópico individual dentro de uma disciplina. */
export interface Topico {
  readonly id: string;
  readonly titulo: string;
  readonly peso: number;
  readonly emBreve?: boolean;
  readonly conteudo?: ConteudoTopico;
}

/** Disciplina da ementa do vestibular. */
export interface Disciplina {
  readonly id: string;
  readonly titulo: string;
  readonly icone: string;
  readonly topicos: readonly Topico[];
}

/** Ementa completa do vestibular. */
export interface Ementa {
  readonly disciplinas: readonly Disciplina[];
}
