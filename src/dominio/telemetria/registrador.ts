import type { CategoriaEvento, EventoTelemetria } from './tipos';

type AssinanteTelemetria = (evento: EventoTelemetria) => void;

/** Gera um ID único por evento. */
function gerarIdEvento(): string {
  return `evt_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
}

/**
 * Registrador de telemetria baseado em pub/sub.
 * Mantém um log local e notifica assinantes a cada evento.
 * No MVP persiste em memória; o adapter de localStorage faz a persistência real.
 */
export function criarRegistrador() {
  const log: EventoTelemetria[] = [];
  const assinantes: AssinanteTelemetria[] = [];

  function registrar(
    categoria: CategoriaEvento,
    nome: string,
    propriedades: Record<string, unknown>,
    contexto: { sessaoId?: string; usuarioId: string },
  ): EventoTelemetria {
    const evento: EventoTelemetria = {
      id: gerarIdEvento(),
      categoria,
      nome,
      propriedades,
      sessaoId: contexto.sessaoId ?? null,
      usuarioId: contexto.usuarioId,
      timestamp: Date.now(),
    };

    log.push(evento);
    assinantes.forEach((assinante) => assinante(evento));

    return evento;
  }

  function assinar(callback: AssinanteTelemetria): () => void {
    assinantes.push(callback);
    return () => {
      const indice = assinantes.indexOf(callback);
      if (indice >= 0) assinantes.splice(indice, 1);
    };
  }

  function obterLog(): readonly EventoTelemetria[] {
    return log;
  }

  function obterLogPorCategoria(categoria: CategoriaEvento): readonly EventoTelemetria[] {
    return log.filter((evento) => evento.categoria === categoria);
  }

  return { registrar, assinar, obterLog, obterLogPorCategoria };
}

export type Registrador = ReturnType<typeof criarRegistrador>;
