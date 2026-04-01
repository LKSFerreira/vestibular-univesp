import type { EventoInteracao, NivelConfianca, SinalInterpretado, TipoSinal } from './tipos';

/** Limiares para classificação de hesitação e abandono. */
const LIMIAR_HESITACAO_MS = 10_000;
const LIMIAR_ABANDONO_MS = 30_000;
const LIMIAR_REPETICAO_ERROS = 3;

/** Interpreta um evento bruto de interação e retorna um sinal pedagógico. */
export function interpretarEvento(evento: EventoInteracao): SinalInterpretado | null {
  const { tipo, payload } = evento;

  if (tipo === 'resposta') {
    return criarSinal(
      payload.correto ? 'acerto' : 'erro',
      evento,
      payload.correto ? 'alto' : 'alto',
    );
  }

  if (tipo === 'tempo_inativo') {
    const duracao = (payload.duracaoMs as number) ?? 0;
    if (duracao >= LIMIAR_ABANDONO_MS) {
      return criarSinal('abandono_parcial', evento, 'medio');
    }
    if (duracao >= LIMIAR_HESITACAO_MS) {
      return criarSinal('hesitacao', evento, 'medio');
    }
  }

  if (tipo === 'erro_repetido') {
    const totalErros = (payload.totalErros as number) ?? 0;
    if (totalErros >= LIMIAR_REPETICAO_ERROS) {
      return criarSinal('repeticao_improdutiva', evento, 'alto');
    }
  }

  return null;
}

/** Interpreta uma lista de eventos e retorna apenas os sinais significativos. */
export function interpretarEventos(eventos: readonly EventoInteracao[]): readonly SinalInterpretado[] {
  return eventos
    .map(interpretarEvento)
    .filter((sinal): sinal is SinalInterpretado => sinal !== null);
}

function criarSinal(
  tipo: TipoSinal,
  evento: EventoInteracao,
  confianca: NivelConfianca,
): SinalInterpretado {
  return {
    tipo,
    noId: evento.noId,
    confianca,
    eventosRelacionados: [evento.id],
    timestamp: Date.now(),
  };
}
