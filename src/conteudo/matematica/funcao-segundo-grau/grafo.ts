import type { GrafoConhecimento } from '@dominio/grafo/tipos';

/**
 * Grafo de conhecimento da trilha "Função do 2º Grau".
 * Cada nó é um conceito ensinável com pré-requisitos explícitos.
 * A ordem define a sequência pedagógica sugerida.
 */
export const GRAFO_FUNCAO_SEGUNDO_GRAU: GrafoConhecimento = {
  id: 'funcao-segundo-grau',
  titulo: 'Função do 2º Grau',
  nos: [
    {
      id: 'operacoes-algebricas',
      titulo: 'Operações Algébricas Básicas',
      descricao: 'Manipulação de expressões algébricas: adição, subtração, multiplicação e divisão de termos.',
      objetivoAprendizagem: 'O estudante deve operar com expressões algébricas sem hesitação.',
      preRequisitos: [],
      criteriosDominio: [
        { id: 'oa-1', descricao: 'Simplificar expressões com variáveis', pesoMinimo: 0.8 },
        { id: 'oa-2', descricao: 'Aplicar distributiva corretamente', pesoMinimo: 0.8 },
      ],
      moduloInterativo: 'OperacoesAlgebricas',
      ordem: 1,
    },
    {
      id: 'fatoracao',
      titulo: 'Fatoração',
      descricao: 'Técnicas de fatoração: fator comum, agrupamento, diferença de quadrados e trinômio do quadrado perfeito.',
      objetivoAprendizagem: 'O estudante deve identificar e aplicar a técnica de fatoração correta para cada caso.',
      preRequisitos: ['operacoes-algebricas'],
      criteriosDominio: [
        { id: 'fat-1', descricao: 'Identificar fator comum em evidência', pesoMinimo: 0.8 },
        { id: 'fat-2', descricao: 'Fatorar trinômio do segundo grau', pesoMinimo: 0.7 },
      ],
      moduloInterativo: 'Fatoracao',
      ordem: 2,
    },
    {
      id: 'equacao-segundo-grau',
      titulo: 'Equação do 2º Grau',
      descricao: 'Forma geral ax² + bx + c = 0, identificação de coeficientes e resolução.',
      objetivoAprendizagem: 'O estudante deve identificar coeficientes e resolver equações do 2º grau.',
      preRequisitos: ['operacoes-algebricas', 'fatoracao'],
      criteriosDominio: [
        { id: 'eq2-1', descricao: 'Identificar a, b e c corretamente', pesoMinimo: 0.9 },
        { id: 'eq2-2', descricao: 'Resolver por fatoração quando possível', pesoMinimo: 0.7 },
      ],
      moduloInterativo: 'EquacaoSegundoGrau',
      ordem: 3,
    },
    {
      id: 'discriminante',
      titulo: 'Discriminante (Delta)',
      descricao: 'Cálculo e interpretação do discriminante Δ = b² - 4ac.',
      objetivoAprendizagem: 'O estudante deve calcular Δ e interpretar o significado do resultado (positivo, zero, negativo).',
      preRequisitos: ['equacao-segundo-grau'],
      criteriosDominio: [
        { id: 'disc-1', descricao: 'Calcular Δ sem erro aritmético', pesoMinimo: 0.9 },
        { id: 'disc-2', descricao: 'Interpretar o número de raízes a partir de Δ', pesoMinimo: 0.8 },
      ],
      moduloInterativo: 'Discriminante',
      ordem: 4,
    },
    {
      id: 'raizes',
      titulo: 'Raízes (Fórmula de Bhaskara)',
      descricao: 'Cálculo das raízes usando x = (-b ± √Δ) / 2a.',
      objetivoAprendizagem: 'O estudante deve aplicar Bhaskara e encontrar as raízes corretamente.',
      preRequisitos: ['discriminante'],
      criteriosDominio: [
        { id: 'raiz-1', descricao: 'Aplicar a fórmula sem erro de sinal', pesoMinimo: 0.8 },
        { id: 'raiz-2', descricao: 'Encontrar as duas raízes quando Δ > 0', pesoMinimo: 0.8 },
      ],
      moduloInterativo: 'Raizes',
      ordem: 5,
    },
    {
      id: 'leitura-grafico',
      titulo: 'Leitura de Gráfico de Parábola',
      descricao: 'Identificação de vértice, eixo de simetria, concavidade, raízes e interseção com eixo Y.',
      objetivoAprendizagem: 'O estudante deve extrair informações de um gráfico de parábola sem recurso à fórmula.',
      preRequisitos: ['raizes'],
      criteriosDominio: [
        { id: 'graf-1', descricao: 'Identificar concavidade a partir do coeficiente a', pesoMinimo: 0.9 },
        { id: 'graf-2', descricao: 'Localizar vértice e raízes no gráfico', pesoMinimo: 0.8 },
      ],
      moduloInterativo: 'LeituraGrafico',
      ordem: 6,
    },
    {
      id: 'funcao-quadratica',
      titulo: 'Função Quadrática Completa',
      descricao: 'Integração de todos os conceitos: dado f(x) = ax² + bx + c, analisar completamente a função.',
      objetivoAprendizagem: 'O estudante deve analisar uma função quadrática completa: coeficientes, discriminante, raízes, vértice e gráfico.',
      preRequisitos: ['equacao-segundo-grau', 'discriminante', 'raizes', 'leitura-grafico'],
      criteriosDominio: [
        { id: 'fq-1', descricao: 'Análise completa a partir da forma geral', pesoMinimo: 0.7 },
        { id: 'fq-2', descricao: 'Esboçar gráfico coerente com os cálculos', pesoMinimo: 0.7 },
      ],
      moduloInterativo: 'FuncaoQuadratica',
      ordem: 7,
    },
  ],
  dependencias: [
    { origem: 'fatoracao', destino: 'operacoes-algebricas' },
    { origem: 'equacao-segundo-grau', destino: 'operacoes-algebricas' },
    { origem: 'equacao-segundo-grau', destino: 'fatoracao' },
    { origem: 'discriminante', destino: 'equacao-segundo-grau' },
    { origem: 'raizes', destino: 'discriminante' },
    { origem: 'leitura-grafico', destino: 'raizes' },
    { origem: 'funcao-quadratica', destino: 'equacao-segundo-grau' },
    { origem: 'funcao-quadratica', destino: 'discriminante' },
    { origem: 'funcao-quadratica', destino: 'raizes' },
    { origem: 'funcao-quadratica', destino: 'leitura-grafico' },
  ],
};
