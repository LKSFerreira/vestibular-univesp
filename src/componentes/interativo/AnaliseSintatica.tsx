import { useState, useCallback } from 'react';

import styles from './AnaliseSintatica.module.css';

type FuncaoSintatica =
  | 'sujeito'
  | 'verbo'
  | 'objeto-direto'
  | 'objeto-indireto'
  | 'adjunto-adverbial'
  | 'predicativo';

interface ParteFrase {
  readonly texto: string;
  readonly funcao: FuncaoSintatica;
}

interface FraseAnalise {
  readonly partes: readonly ParteFrase[];
}

const ROTULOS_FUNCAO: Record<FuncaoSintatica, string> = {
  sujeito: 'Sujeito',
  verbo: 'Verbo',
  'objeto-direto': 'Objeto Direto',
  'objeto-indireto': 'Objeto Indireto',
  'adjunto-adverbial': 'Adjunto Adverbial',
  predicativo: 'Predicativo',
};

const FUNCOES: readonly FuncaoSintatica[] = [
  'sujeito',
  'verbo',
  'objeto-direto',
  'objeto-indireto',
  'adjunto-adverbial',
  'predicativo',
] as const;

const FRASES: readonly FraseAnalise[] = [
  {
    partes: [
      { texto: 'O aluno', funcao: 'sujeito' },
      { texto: 'estudou', funcao: 'verbo' },
      { texto: 'português', funcao: 'objeto-direto' },
      { texto: 'para a prova', funcao: 'adjunto-adverbial' },
    ],
  },
  {
    partes: [
      { texto: 'Maria', funcao: 'sujeito' },
      { texto: 'deu', funcao: 'verbo' },
      { texto: 'o livro', funcao: 'objeto-direto' },
      { texto: 'ao professor', funcao: 'objeto-indireto' },
    ],
  },
  {
    partes: [
      { texto: 'Os estudantes', funcao: 'sujeito' },
      { texto: 'parecem', funcao: 'verbo' },
      { texto: 'cansados', funcao: 'predicativo' },
    ],
  },
  {
    partes: [
      { texto: 'Ontem', funcao: 'adjunto-adverbial' },
      { texto: 'o time', funcao: 'sujeito' },
      { texto: 'venceu', funcao: 'verbo' },
      { texto: 'a partida', funcao: 'objeto-direto' },
      { texto: 'facilmente', funcao: 'adjunto-adverbial' },
    ],
  },
  {
    partes: [
      { texto: 'Naquela manhã', funcao: 'adjunto-adverbial' },
      { texto: 'as crianças', funcao: 'sujeito' },
      { texto: 'brincavam', funcao: 'verbo' },
      { texto: 'no parque', funcao: 'adjunto-adverbial' },
    ],
  },
];

type EstadoParte = 'pendente' | 'correto' | 'incorreto';

interface EstadoJogo {
  readonly indiceFrase: number;
  readonly parteSelecionada: number | null;
  readonly classificacoes: ReadonlyMap<number, EstadoParte>;
  readonly funcaoRevelada: ReadonlyMap<number, FuncaoSintatica>;
  readonly acertos: number;
  readonly totalTentativas: number;
  readonly mensagemFeedback: string | null;
  readonly tipoFeedback: 'correto' | 'incorreto' | null;
}

const ESTADO_INICIAL: EstadoJogo = {
  indiceFrase: 0,
  parteSelecionada: null,
  classificacoes: new Map(),
  funcaoRevelada: new Map(),
  acertos: 0,
  totalTentativas: 0,
  mensagemFeedback: null,
  tipoFeedback: null,
};

export function AnaliseSintatica() {
  const [estado, setEstado] = useState<EstadoJogo>(ESTADO_INICIAL);

  const fraseAtual = FRASES[estado.indiceFrase];
  const totalPartes = fraseAtual.partes.length;
  const todasClassificadas = estado.classificacoes.size === totalPartes;

  const selecionarParte = useCallback(
    (indice: number) => {
      if (estado.classificacoes.has(indice)) return;

      setEstado((anterior) => ({
        ...anterior,
        parteSelecionada:
          anterior.parteSelecionada === indice ? null : indice,
        mensagemFeedback: null,
        tipoFeedback: null,
      }));
    },
    [estado.classificacoes],
  );

  const classificarParte = useCallback(
    (funcaoEscolhida: FuncaoSintatica) => {
      if (estado.parteSelecionada === null) return;

      const indice = estado.parteSelecionada;
      const parte = fraseAtual.partes[indice];
      const correto = funcaoEscolhida === parte.funcao;

      setEstado((anterior) => {
        const novasClassificacoes = new Map(anterior.classificacoes);
        const novasFuncoesReveladas = new Map(anterior.funcaoRevelada);

        novasClassificacoes.set(indice, correto ? 'correto' : 'incorreto');
        novasFuncoesReveladas.set(indice, parte.funcao);

        const mensagem = correto
          ? `✓ Correto! "${parte.texto}" é ${ROTULOS_FUNCAO[parte.funcao]}.`
          : `✗ Incorreto. "${parte.texto}" é ${ROTULOS_FUNCAO[parte.funcao]}, não ${ROTULOS_FUNCAO[funcaoEscolhida]}.`;

        return {
          ...anterior,
          parteSelecionada: null,
          classificacoes: novasClassificacoes,
          funcaoRevelada: novasFuncoesReveladas,
          acertos: anterior.acertos + (correto ? 1 : 0),
          totalTentativas: anterior.totalTentativas + 1,
          mensagemFeedback: mensagem,
          tipoFeedback: correto ? 'correto' : 'incorreto',
        };
      });
    },
    [estado.parteSelecionada, fraseAtual.partes],
  );

  const proximaFrase = useCallback(() => {
    setEstado((anterior) => ({
      ...ESTADO_INICIAL,
      indiceFrase: (anterior.indiceFrase + 1) % FRASES.length,
      acertos: anterior.acertos,
      totalTentativas: anterior.totalTentativas,
    }));
  }, []);

  const reiniciar = useCallback(() => {
    setEstado(ESTADO_INICIAL);
  }, []);

  return (
    <section className={styles.container} aria-label="Análise Sintática">
      <header className={styles.cabecalho}>
        <h2 className={styles.titulo}>Análise Sintática</h2>
        <span className={styles.placar}>
          {estado.acertos}/{estado.totalTentativas} corretos
        </span>
      </header>

      <div className={styles.areaFrase} role="group" aria-label="Frase para análise">
        {fraseAtual.partes.map((parte, indice) => {
          const estadoParte = estado.classificacoes.get(indice);
          const funcaoRevelada = estado.funcaoRevelada.get(indice);
          const selecionado = estado.parteSelecionada === indice;

          const dataEstado = selecionado
            ? 'selecionado'
            : estadoParte ?? undefined;

          return (
            <button
              key={`${estado.indiceFrase}-${indice}`}
              type="button"
              className={styles.parte}
              data-estado={dataEstado}
              data-funcao={funcaoRevelada}
              onClick={() => selecionarParte(indice)}
              disabled={estadoParte !== undefined}
              aria-label={`${parte.texto}${funcaoRevelada ? ` — ${ROTULOS_FUNCAO[funcaoRevelada]}` : ''}`}
            >
              {parte.texto}
              {estadoParte === 'correto' && (
                <span className={styles.indicadorCorreto} aria-hidden="true">
                  ✓
                </span>
              )}
            </button>
          );
        })}
      </div>

      {estado.parteSelecionada !== null && (
        <div
          className={styles.painelClassificacao}
          role="group"
          aria-label="Opções de classificação"
        >
          <p className={styles.instrucao}>
            Classifique: &quot;{fraseAtual.partes[estado.parteSelecionada].texto}&quot;
          </p>
          {FUNCOES.map((funcao) => (
            <button
              key={funcao}
              type="button"
              className={styles.botaoFuncao}
              data-funcao={funcao}
              onClick={() => classificarParte(funcao)}
            >
              <span
                className={styles.corFuncao}
                data-funcao={funcao}
                aria-hidden="true"
              />
              {ROTULOS_FUNCAO[funcao]}
            </button>
          ))}
        </div>
      )}

      {estado.mensagemFeedback && (
        <p
          className={styles.feedback}
          data-tipo={estado.tipoFeedback}
          role="status"
          aria-live="polite"
        >
          {estado.mensagemFeedback}
        </p>
      )}

      <footer className={styles.rodape}>
        <div className={styles.legenda} aria-label="Legenda de cores">
          {FUNCOES.map((funcao) => (
            <span key={funcao} className={styles.itemLegenda}>
              <span
                className={styles.corFuncao}
                data-funcao={funcao}
                aria-hidden="true"
              />
              {ROTULOS_FUNCAO[funcao]}
            </span>
          ))}
        </div>

        {todasClassificadas && (
          <button
            type="button"
            className={styles.botaoProximaFrase}
            onClick={
              estado.indiceFrase < FRASES.length - 1
                ? proximaFrase
                : reiniciar
            }
          >
            {estado.indiceFrase < FRASES.length - 1
              ? 'Próxima frase →'
              : 'Recomeçar ↺'}
          </button>
        )}
      </footer>
    </section>
  );
}
