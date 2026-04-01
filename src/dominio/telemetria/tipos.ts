/** Categorias de eventos para separação entre UX e pedagogia. */
export type CategoriaEvento = 'interface' | 'pedagogico' | 'sistema';

/** Evento estruturado genérico do sistema de telemetria. */
export interface EventoTelemetria {
  readonly id: string;
  readonly categoria: CategoriaEvento;
  readonly nome: string;
  readonly propriedades: Record<string, unknown>;
  readonly sessaoId: string | null;
  readonly usuarioId: string;
  readonly timestamp: number;
}
