import type { GrafoConhecimento, NoConhecimento } from './tipos';

/** Busca um nó pelo ID no grafo. Retorna `undefined` se não existir. */
export function buscarNo(grafo: GrafoConhecimento, noId: string): NoConhecimento | undefined {
  return grafo.nos.find((no) => no.id === noId);
}

/** Retorna os IDs dos pré-requisitos diretos de um nó. */
export function obterPreRequisitos(grafo: GrafoConhecimento, noId: string): readonly string[] {
  const no = buscarNo(grafo, noId);
  return no?.preRequisitos ?? [];
}

/** Retorna os nós que dependem diretamente do nó informado (dependentes). */
export function obterDependentes(grafo: GrafoConhecimento, noId: string): readonly string[] {
  return grafo.dependencias
    .filter((dependencia) => dependencia.destino === noId)
    .map((dependencia) => dependencia.origem);
}

/**
 * Resolve a cadeia completa de pré-requisitos de um nó (busca em profundidade).
 * Retorna os IDs em ordem topológica reversa (do mais fundamental ao mais próximo).
 */
export function resolverCadeiaPreRequisitos(
  grafo: GrafoConhecimento,
  noId: string,
): readonly string[] {
  const visitados = new Set<string>();
  const resultado: string[] = [];

  function percorrer(idAtual: string): void {
    if (visitados.has(idAtual)) return;
    visitados.add(idAtual);

    const preRequisitos = obterPreRequisitos(grafo, idAtual);
    for (const preRequisitoId of preRequisitos) {
      percorrer(preRequisitoId);
    }

    if (idAtual !== noId) {
      resultado.push(idAtual);
    }
  }

  percorrer(noId);
  return resultado;
}

/** Valida a integridade estrutural do grafo (sem referências quebradas, sem ciclos simples). */
export function validarGrafo(grafo: GrafoConhecimento): readonly string[] {
  const erros: string[] = [];
  const idsExistentes = new Set(grafo.nos.map((no) => no.id));

  for (const no of grafo.nos) {
    for (const preRequisitoId of no.preRequisitos) {
      if (!idsExistentes.has(preRequisitoId)) {
        erros.push(`Nó "${no.id}" referencia pré-requisito inexistente "${preRequisitoId}"`);
      }
      if (preRequisitoId === no.id) {
        erros.push(`Nó "${no.id}" referencia a si mesmo como pré-requisito`);
      }
    }
  }

  for (const dependencia of grafo.dependencias) {
    if (!idsExistentes.has(dependencia.origem)) {
      erros.push(`Dependência referencia origem inexistente "${dependencia.origem}"`);
    }
    if (!idsExistentes.has(dependencia.destino)) {
      erros.push(`Dependência referencia destino inexistente "${dependencia.destino}"`);
    }
  }

  return erros;
}
