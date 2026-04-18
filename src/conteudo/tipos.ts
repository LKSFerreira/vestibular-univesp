/** Tipo de seção de conteúdo rico. */
export type TipoSecao = 'texto' | 'destaque' | 'exemplo' | 'importante' | 'formula' | 'tabela';

/** Seção de conteúdo didático (Markdown renderizável). */
export interface SecaoConteudo {
  readonly titulo?: string;
  readonly corpo: string;
  readonly tipo?: TipoSecao;
}

/** Exemplo resolvido com passo a passo. */
export interface ExemploResolvido {
  readonly enunciado: string;
  readonly passos: readonly string[];
  readonly resposta: string;
}

/** Exercício de múltipla escolha. */
export interface Exercicio {
  readonly id: string;
  readonly enunciado: string;
  readonly alternativas: readonly string[];
  readonly respostaCorreta: number;
  readonly explicacao: string;
  readonly dificuldade: 'facil' | 'medio' | 'dificil';
}

/** Conteúdo renderizável de um tópico de estudo. */
export interface ConteudoTopico {
  readonly resumo: string;
  /** @deprecated Use secoes para conteúdo novo. Mantido para backward-compat. */
  readonly explicacao?: string;
  readonly secoes?: readonly SecaoConteudo[];
  readonly imagemDescricao?: string;
  readonly moduloInterativo?: string;
  readonly formulasChave?: readonly string[];
  readonly dicasProva?: readonly string[];
  readonly errosComuns?: readonly string[];
  readonly exemplosResolvidos?: readonly ExemploResolvido[];
  readonly exercicios?: readonly Exercicio[];
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
