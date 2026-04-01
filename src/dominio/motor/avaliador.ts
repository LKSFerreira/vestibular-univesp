import type { GrafoConhecimento } from '@dominio/grafo/tipos';
import { obterPreRequisitos } from '@dominio/grafo/operacoes';
import type { DecisaoMotor, SinalInterpretado } from './tipos';

/** Limiares para decisão do motor. */
const LIMIAR_ERROS_PARA_REGRESSAO = 3;
const LIMIAR_ACERTOS_PARA_CONCLUSAO = 3;

/**
 * Avalia sinais acumulados de um nó e decide a ação do motor adaptativo.
 * Regras determinísticas (heurística v1):
 * - ≥3 erros ou repetição improdutiva → regredir para o primeiro pré-requisito
 * - ≥3 acertos com confiança alta → concluir
 * - hesitação ou abandono → reforçar
 * - caso contrário → continuar
 */
export function avaliarSinais(
  sinais: readonly SinalInterpretado[],
  noAtual: string,
  grafo: GrafoConhecimento,
): DecisaoMotor {
  const sinaisDoNo = sinais.filter((sinal) => sinal.noId === noAtual);

  const totalErros = sinaisDoNo.filter((sinal) => sinal.tipo === 'erro').length;
  const totalAcertos = sinaisDoNo.filter((sinal) => sinal.tipo === 'acerto').length;
  const temRepeticaoImprodutiva = sinaisDoNo.some(
    (sinal) => sinal.tipo === 'repeticao_improdutiva',
  );
  const temHesitacao = sinaisDoNo.some((sinal) => sinal.tipo === 'hesitacao');
  const temAbandono = sinaisDoNo.some((sinal) => sinal.tipo === 'abandono_parcial');

  if (totalErros >= LIMIAR_ERROS_PARA_REGRESSAO || temRepeticaoImprodutiva) {
    const preRequisitos = obterPreRequisitos(grafo, noAtual);
    const noSugerido = preRequisitos.length > 0 ? preRequisitos[0] : null;

    return criarDecisao(
      noSugerido ? 'regredir' : 'reforcar',
      noAtual,
      noSugerido,
      temRepeticaoImprodutiva
        ? 'Repetição improdutiva detectada — regressão para pré-requisito'
        : `${totalErros} erros acumulados — regressão para pré-requisito`,
      sinaisDoNo,
    );
  }

  if (totalAcertos >= LIMIAR_ACERTOS_PARA_CONCLUSAO) {
    return criarDecisao(
      'concluir',
      noAtual,
      null,
      `${totalAcertos} acertos — conceito dominado`,
      sinaisDoNo,
    );
  }

  if (temHesitacao || temAbandono) {
    return criarDecisao(
      'reforcar',
      noAtual,
      null,
      temAbandono ? 'Abandono parcial detectado' : 'Hesitação detectada — reforço no conceito atual',
      sinaisDoNo,
    );
  }

  return criarDecisao('continuar', noAtual, null, 'Fluxo normal — sem intervenção', sinaisDoNo);
}

function criarDecisao(
  tipo: DecisaoMotor['tipo'],
  noAtual: string,
  noSugerido: string | null,
  motivo: string,
  sinaisConsiderados: readonly SinalInterpretado[],
): DecisaoMotor {
  return {
    tipo,
    noAtual,
    noSugerido,
    motivo,
    sinaisConsiderados,
    timestamp: Date.now(),
  };
}
