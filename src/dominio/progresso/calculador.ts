import type { NivelDominio } from '@dominio/grafo/tipos';
import type { ProgressoNo, ProgressoTrilha } from './tipos';

/** Limiares para calcular nível de domínio. */
const LIMIAR_DOMINADO = 0.8;
const LIMIAR_EM_PROGRESSO = 0.4;
const MINIMO_TENTATIVAS = 2;

/** Calcula o nível de domínio com base na taxa de acertos. */
export function calcularNivelDominio(acertos: number, tentativas: number): NivelDominio {
  if (tentativas < MINIMO_TENTATIVAS) return 'nao_iniciado';

  const taxa = acertos / tentativas;

  if (taxa >= LIMIAR_DOMINADO) return 'dominado';
  if (taxa >= LIMIAR_EM_PROGRESSO) return 'em_progresso';
  return 'fragil';
}

/** Registra um acerto no progresso de um nó. */
export function registrarAcerto(progresso: ProgressoNo): ProgressoNo {
  const novoAcertos = progresso.totalAcertos + 1;
  const novaTentativas = progresso.totalTentativas + 1;

  return {
    ...progresso,
    totalAcertos: novoAcertos,
    totalTentativas: novaTentativas,
    nivel: calcularNivelDominio(novoAcertos, novaTentativas),
    ultimaInteracao: Date.now(),
  };
}

/** Registra um erro no progresso de um nó. */
export function registrarErro(progresso: ProgressoNo): ProgressoNo {
  const novoErros = progresso.totalErros + 1;
  const novaTentativas = progresso.totalTentativas + 1;

  return {
    ...progresso,
    totalErros: novoErros,
    totalTentativas: novaTentativas,
    nivel: calcularNivelDominio(progresso.totalAcertos, novaTentativas),
    ultimaInteracao: Date.now(),
  };
}

/** Cria um progresso inicial (zerado) para um nó. */
export function criarProgressoNo(noId: string): ProgressoNo {
  return {
    noId,
    nivel: 'nao_iniciado',
    totalAcertos: 0,
    totalErros: 0,
    totalTentativas: 0,
    ultimaInteracao: Date.now(),
  };
}

/** Obtém ou cria o progresso de um nó na trilha. */
export function obterProgressoNo(trilha: ProgressoTrilha, noId: string): ProgressoNo {
  return trilha.nos[noId] ?? criarProgressoNo(noId);
}
