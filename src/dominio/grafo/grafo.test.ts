import { describe, it, expect } from 'vitest';
import {
  buscarNo,
  obterPreRequisitos,
  obterDependentes,
  resolverCadeiaPreRequisitos,
  validarGrafo,
} from './operacoes';
import { GRAFO_FUNCAO_SEGUNDO_GRAU } from '@conteudo/matematica/funcao-segundo-grau/grafo';
import type { GrafoConhecimento } from './tipos';

const grafo = GRAFO_FUNCAO_SEGUNDO_GRAU;

describe('buscarNo', () => {
  it('deve encontrar um nó existente pelo ID', () => {
    const no = buscarNo(grafo, 'fatoracao');
    expect(no).toBeDefined();
    expect(no?.titulo).toBe('Fatoração');
  });

  it('deve retornar undefined para ID inexistente', () => {
    expect(buscarNo(grafo, 'nao-existe')).toBeUndefined();
  });
});

describe('obterPreRequisitos', () => {
  it('deve retornar lista vazia para nó raiz', () => {
    expect(obterPreRequisitos(grafo, 'operacoes-algebricas')).toEqual([]);
  });

  it('deve retornar pré-requisitos diretos', () => {
    const preRequisitos = obterPreRequisitos(grafo, 'equacao-segundo-grau');
    expect(preRequisitos).toContain('operacoes-algebricas');
    expect(preRequisitos).toContain('fatoracao');
  });
});

describe('obterDependentes', () => {
  it('deve retornar nós que dependem do nó informado', () => {
    const dependentes = obterDependentes(grafo, 'operacoes-algebricas');
    expect(dependentes).toContain('fatoracao');
    expect(dependentes).toContain('equacao-segundo-grau');
  });
});

describe('resolverCadeiaPreRequisitos', () => {
  it('deve retornar cadeia vazia para nó raiz', () => {
    expect(resolverCadeiaPreRequisitos(grafo, 'operacoes-algebricas')).toEqual([]);
  });

  it('deve retornar cadeia completa em ordem topológica', () => {
    const cadeia = resolverCadeiaPreRequisitos(grafo, 'funcao-quadratica');
    expect(cadeia.length).toBeGreaterThan(0);
    expect(cadeia).toContain('operacoes-algebricas');
    expect(cadeia).toContain('discriminante');

    const indiceAlgebra = cadeia.indexOf('operacoes-algebricas');
    const indiceFuncao = cadeia.indexOf('equacao-segundo-grau');
    expect(indiceAlgebra).toBeLessThan(indiceFuncao);
  });
});

describe('validarGrafo', () => {
  it('deve retornar zero erros para o grafo válido do MVP', () => {
    const erros = validarGrafo(grafo);
    expect(erros).toHaveLength(0);
  });

  it('deve detectar referência a pré-requisito inexistente', () => {
    const grafoQuebrado: GrafoConhecimento = {
      id: 'teste',
      titulo: 'Teste',
      nos: [
        {
          id: 'no-1',
          titulo: 'Nó 1',
          descricao: '',
          objetivoAprendizagem: '',
          preRequisitos: ['no-fantasma'],
          criteriosDominio: [],
          moduloInterativo: '',
          ordem: 1,
        },
      ],
      dependencias: [],
    };
    const erros = validarGrafo(grafoQuebrado);
    expect(erros.length).toBeGreaterThan(0);
    expect(erros[0]).toContain('no-fantasma');
  });
});
