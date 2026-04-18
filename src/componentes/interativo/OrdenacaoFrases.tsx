import { useCallback, useMemo, useState } from 'react';
import styles from './OrdenacaoFrases.module.css';

interface Frase {
  readonly palavras: readonly string[];
  readonly traducao: string;
}

const FRASES: readonly Frase[] = [
  { palavras: ['She', 'has', 'been', 'studying', 'English', 'for', 'three', 'years'], traducao: 'Ela tem estudado inglês por três anos' },
  { palavras: ['The', 'book', 'that', 'I', 'bought', 'yesterday', 'was', 'very', 'interesting'], traducao: 'O livro que eu comprei ontem era muito interessante' },
  { palavras: ['If', 'it', 'rains', 'tomorrow', 'we', 'will', 'cancel', 'the', 'trip'], traducao: 'Se chover amanhã, cancelaremos a viagem' },
  { palavras: ['He', 'asked', 'me', 'whether', 'I', 'could', 'help', 'him', 'with', 'the', 'project'], traducao: 'Ele me perguntou se eu poderia ajudá-lo com o projeto' },
  { palavras: ['The', 'students', 'who', 'passed', 'the', 'exam', 'were', 'very', 'happy'], traducao: 'Os alunos que passaram no exame ficaram muito felizes' },
  { palavras: ['Although', 'she', 'was', 'tired', 'she', 'continued', 'working'], traducao: 'Embora ela estivesse cansada, continuou trabalhando' },
  { palavras: ['They', 'have', 'never', 'been', 'to', 'Brazil', 'before'], traducao: 'Eles nunca foram ao Brasil antes' },
  { palavras: ['The', 'teacher', 'told', 'us', 'to', 'read', 'the', 'article', 'carefully'], traducao: 'A professora nos disse para ler o artigo com atenção' },
  { palavras: ['We', 'would', 'have', 'arrived', 'earlier', 'if', 'there', 'had', 'been', 'no', 'traffic'], traducao: 'Teríamos chegado mais cedo se não houvesse trânsito' },
  { palavras: ['By', 'the', 'time', 'we', 'got', 'there', 'the', 'movie', 'had', 'already', 'started'], traducao: 'Quando chegamos lá, o filme já tinha começado' },
];

interface PalavraEmbaralhada {
  readonly texto: string;
  readonly indiceOriginal: number;
}

function embaralharFisherYates<T>(array: readonly T[]): T[] {
  const copia = [...array];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

function criarPalavrasEmbaralhadas(palavras: readonly string[]): PalavraEmbaralhada[] {
  const indexadas = palavras.map((texto, indiceOriginal) => ({ texto, indiceOriginal }));
  return embaralharFisherYates(indexadas);
}

type EstadoVerificacao = 'pendente' | 'correta' | 'incorreta';

interface EstadoJogo {
  readonly indiceFrase: number;
  readonly disponiveis: readonly PalavraEmbaralhada[];
  readonly colocadas: readonly PalavraEmbaralhada[];
  readonly verificacao: EstadoVerificacao;
  readonly acertos: number;
  readonly mostrarTraducao: boolean;
}

function criarEstadoInicial(indiceFrase: number): EstadoJogo {
  return {
    indiceFrase,
    disponiveis: criarPalavrasEmbaralhadas(FRASES[indiceFrase].palavras),
    colocadas: [],
    verificacao: 'pendente',
    acertos: 0,
    mostrarTraducao: false,
  };
}

export function OrdenacaoFrases() {
  const [estado, setEstado] = useState<EstadoJogo>(() => criarEstadoInicial(0));

  const totalFrases = FRASES.length;
  const fraseAtual = FRASES[estado.indiceFrase];
  const verificou = estado.verificacao !== 'pendente';
  const finalizado = estado.indiceFrase >= totalFrases;

  const adicionarPalavra = useCallback((palavra: PalavraEmbaralhada) => {
    setEstado((anterior) => {
      if (anterior.verificacao !== 'pendente') return anterior;
      return {
        ...anterior,
        disponiveis: anterior.disponiveis.filter((p) => p.indiceOriginal !== palavra.indiceOriginal),
        colocadas: [...anterior.colocadas, palavra],
      };
    });
  }, []);

  const removerPalavra = useCallback((palavra: PalavraEmbaralhada) => {
    setEstado((anterior) => {
      if (anterior.verificacao !== 'pendente') return anterior;
      return {
        ...anterior,
        colocadas: anterior.colocadas.filter((p) => p.indiceOriginal !== palavra.indiceOriginal),
        disponiveis: [...anterior.disponiveis, palavra],
      };
    });
  }, []);

  const limparResposta = useCallback(() => {
    setEstado((anterior) => {
      if (anterior.verificacao !== 'pendente') return anterior;
      return {
        ...anterior,
        disponiveis: criarPalavrasEmbaralhadas(FRASES[anterior.indiceFrase].palavras),
        colocadas: [],
      };
    });
  }, []);

  const verificar = useCallback(() => {
    setEstado((anterior) => {
      if (anterior.verificacao !== 'pendente') return anterior;
      const frase = FRASES[anterior.indiceFrase];
      const respostaUsuario = anterior.colocadas.map((p) => p.texto).join(' ');
      const respostaCorreta = frase.palavras.join(' ');
      const correta = respostaUsuario === respostaCorreta;
      return {
        ...anterior,
        verificacao: correta ? 'correta' : 'incorreta',
        acertos: anterior.acertos + (correta ? 1 : 0),
      };
    });
  }, []);

  const proximaFrase = useCallback(() => {
    setEstado((anterior) => {
      const proximoIndice = anterior.indiceFrase + 1;
      if (proximoIndice >= totalFrases) {
        return { ...anterior, indiceFrase: proximoIndice };
      }
      return {
        ...criarEstadoInicial(proximoIndice),
        acertos: anterior.acertos,
      };
    });
  }, [totalFrases]);

  const alternarTraducao = useCallback(() => {
    setEstado((anterior) => ({ ...anterior, mostrarTraducao: !anterior.mostrarTraducao }));
  }, []);

  const reiniciar = useCallback(() => {
    setEstado(criarEstadoInicial(0));
  }, []);

  const estadoArea = useMemo((): string | undefined => {
    if (estado.verificacao === 'correta') return 'correta';
    if (estado.verificacao === 'incorreta') return 'incorreta';
    return undefined;
  }, [estado.verificacao]);

  if (finalizado) {
    return (
      <div className={styles.container} role="region" aria-label="Resultado da ordenação de frases">
        <div className={styles.resultado}>
          <p className={styles.resultadoPontuacao}>
            {estado.acertos} de {totalFrases}
          </p>
          <p className={styles.resultadoTexto}>
            {estado.acertos === totalFrases
              ? 'Excelente! Todas as frases corretas! 🎉'
              : estado.acertos >= totalFrases / 2
                ? 'Bom trabalho! Continue praticando.'
                : 'Revise as estruturas e tente novamente.'}
          </p>
          <button className={styles.botaoRefazer} onClick={reiniciar} type="button">
            Refazer
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container} role="region" aria-label="Exercício de ordenação de frases">
      <div className={styles.progresso}>
        <span>
          Frase {estado.indiceFrase + 1} de {totalFrases}
        </span>
        <div
          className={styles.barraProgresso}
          role="progressbar"
          aria-valuenow={estado.indiceFrase + 1}
          aria-valuemin={1}
          aria-valuemax={totalFrases}
        >
          <div
            className={styles.barraProgressoPreenchida}
            style={{ width: `${((estado.indiceFrase + 1) / totalFrases) * 100}%` }}
          />
        </div>
      </div>

      <p className={styles.pontuacao}>{estado.acertos}/{totalFrases} corretas</p>

      <div className={styles.dicaContainer}>
        <button className={styles.botaoDica} onClick={alternarTraducao} type="button">
          💡 {estado.mostrarTraducao ? 'Ocultar tradução' : 'Ver tradução'}
        </button>
        {estado.mostrarTraducao && (
          <p className={styles.traducao}>{fraseAtual.traducao}</p>
        )}
      </div>

      <div className={styles.palavrasDisponiveis} aria-label="Palavras disponíveis">
        {estado.disponiveis.map((palavra) => (
          <button
            key={palavra.indiceOriginal}
            className={styles.palavra}
            onClick={() => adicionarPalavra(palavra)}
            disabled={verificou}
            type="button"
          >
            {palavra.texto}
          </button>
        ))}
      </div>

      <div className={styles.areaResposta} data-estado={estadoArea} aria-label="Sua resposta">
        {estado.colocadas.length === 0 ? (
          <span className={styles.areaRespostaVazia}>Clique nas palavras acima para montar a frase</span>
        ) : (
          estado.colocadas.map((palavra) => (
            <button
              key={palavra.indiceOriginal}
              className={styles.palavraColocada}
              onClick={() => removerPalavra(palavra)}
              disabled={verificou}
              type="button"
            >
              {palavra.texto}
            </button>
          ))
        )}
      </div>

      {verificou && estado.verificacao === 'incorreta' && (
        <div className={styles.respostaCorreta}>
          <p className={styles.respostaCorretaTitulo}>✅ Ordem correta:</p>
          <p>{fraseAtual.palavras.join(' ')}</p>
        </div>
      )}

      <div className={styles.acoes}>
        {!verificou ? (
          <>
            <button
              className={styles.botaoLimpar}
              onClick={limparResposta}
              disabled={estado.colocadas.length === 0}
              type="button"
            >
              Limpar
            </button>
            <button
              className={styles.botaoVerificar}
              onClick={verificar}
              disabled={estado.disponiveis.length > 0}
              type="button"
            >
              Verificar
            </button>
          </>
        ) : (
          <button className={styles.botaoProxima} onClick={proximaFrase} type="button">
            {estado.indiceFrase + 1 < totalFrases ? 'Próxima' : 'Ver resultado'}
          </button>
        )}
      </div>
    </div>
  );
}
