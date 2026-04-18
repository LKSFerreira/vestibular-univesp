import { useCallback, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import type { Exercicio } from '@conteudo/tipos';
import { TextoComFormulas } from './FormulaMatematica';
import styles from './Quiz.module.css';

const LETRAS_ALTERNATIVAS = ['A', 'B', 'C', 'D', 'E'] as const;
const ROTULOS_DIFICULDADE: Record<Exercicio['dificuldade'], string> = {
  facil: 'Fácil',
  medio: 'Médio',
  dificil: 'Difícil',
};

interface QuizProps {
  readonly exercicios: readonly Exercicio[];
  readonly onResposta?: (exercicioId: string, correto: boolean) => void;
}

interface EstadoQuiz {
  readonly indiceAtual: number;
  readonly respostaSelecionada: number | null;
  readonly acertos: number;
  readonly finalizado: boolean;
}

const ESTADO_INICIAL: EstadoQuiz = {
  indiceAtual: 0,
  respostaSelecionada: null,
  acertos: 0,
  finalizado: false,
};

function obterEstadoAlternativa(
  indice: number,
  respostaSelecionada: number | null,
  respostaCorreta: number,
): string | undefined {
  if (respostaSelecionada === null) return undefined;
  if (indice === respostaCorreta) return 'correta';
  if (indice === respostaSelecionada) return 'incorreta';
  return undefined;
}

function obterAnimacaoAlternativa(
  estadoAlternativa: string | undefined,
  prefereMovimentoReduzido: boolean | null,
) {
  if (prefereMovimentoReduzido) return {};
  if (estadoAlternativa === 'incorreta') {
    return { x: [0, -4, 4, -4, 4, 0], transition: { duration: 0.4 } };
  }
  if (estadoAlternativa === 'correta') {
    return { scale: [1, 1.02, 1], transition: { duration: 0.3 } };
  }
  return {};
}

export function Quiz({ exercicios, onResposta }: QuizProps) {
  const [estado, setEstado] = useState<EstadoQuiz>(ESTADO_INICIAL);
  const prefereMovimentoReduzido = useReducedMotion();

  const exercicioAtual = exercicios[estado.indiceAtual];
  const respondeu = estado.respostaSelecionada !== null;
  const totalExercicios = exercicios.length;

  const duracaoTransicao = prefereMovimentoReduzido ? 0 : 0.25;
  const duracaoFade = prefereMovimentoReduzido ? 0 : 0.3;

  const selecionarResposta = useCallback(
    (indice: number) => {
      if (respondeu || !exercicioAtual) return;

      const correto = indice === exercicioAtual.respostaCorreta;
      setEstado((anterior) => ({
        ...anterior,
        respostaSelecionada: indice,
        acertos: anterior.acertos + (correto ? 1 : 0),
      }));
      onResposta?.(exercicioAtual.id, correto);
    },
    [respondeu, exercicioAtual, onResposta],
  );

  const avancarProxima = useCallback(() => {
    setEstado((anterior) => {
      const proximoIndice = anterior.indiceAtual + 1;
      if (proximoIndice >= totalExercicios) {
        return { ...anterior, finalizado: true };
      }
      return { ...anterior, indiceAtual: proximoIndice, respostaSelecionada: null };
    });
  }, [totalExercicios]);

  const reiniciar = useCallback(() => {
    setEstado(ESTADO_INICIAL);
  }, []);

  if (totalExercicios === 0) return null;

  if (estado.finalizado) {
    return (
      <div className={styles.quizContainer} role="region" aria-label="Resultado do quiz">
        <AnimatePresence mode="wait">
          <motion.div
            key="resultado"
            className={styles.resultado}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: duracaoFade }}
          >
            <p className={styles.resultadoPontuacao}>
              {estado.acertos} de {totalExercicios}
            </p>
            <p className={styles.resultadoTexto}>
              {estado.acertos === totalExercicios
                ? 'Parabéns! Você acertou todas! 🎉'
                : estado.acertos >= totalExercicios / 2
                  ? 'Bom resultado! Continue praticando.'
                  : 'Revise o conteúdo e tente novamente.'}
            </p>
            <button className={styles.botaoRefazer} onClick={reiniciar} type="button">
              Refazer
            </button>
          </motion.div>
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className={styles.quizContainer} role="region" aria-label="Exercício de quiz">
      <div className={styles.progresso}>
        <span>
          Questão {estado.indiceAtual + 1} de {totalExercicios}
        </span>
        <div className={styles.barraProgresso} role="progressbar" aria-valuenow={estado.indiceAtual + 1} aria-valuemin={1} aria-valuemax={totalExercicios}>
          <div
            className={styles.barraProgressoPreenchida}
            style={{ width: `${((estado.indiceAtual + 1) / totalExercicios) * 100}%` }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={estado.indiceAtual}
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -20, opacity: 0 }}
          transition={{ duration: duracaoTransicao }}
        >
          <span className={styles.dificuldade} data-nivel={exercicioAtual.dificuldade}>
            {ROTULOS_DIFICULDADE[exercicioAtual.dificuldade]}
          </span>

          <TextoComFormulas texto={exercicioAtual.enunciado} className={styles.enunciado} />

          <div className={styles.alternativas} role="group" aria-label="Alternativas">
            {exercicioAtual.alternativas.map((alternativa, indice) => {
              const estadoAlternativa = obterEstadoAlternativa(
                indice,
                estado.respostaSelecionada,
                exercicioAtual.respostaCorreta,
              );

              return (
                <motion.button
                  key={indice}
                  className={styles.alternativa}
                  data-estado={estadoAlternativa}
                  disabled={respondeu}
                  onClick={() => selecionarResposta(indice)}
                  type="button"
                  aria-label={`Alternativa ${LETRAS_ALTERNATIVAS[indice]}: ${alternativa}`}
                  animate={obterAnimacaoAlternativa(estadoAlternativa, prefereMovimentoReduzido)}
                >
                  <span className={styles.letraAlternativa}>{LETRAS_ALTERNATIVAS[indice]}</span>
                  <TextoComFormulas texto={alternativa} />
                </motion.button>
              );
            })}
          </div>

          <AnimatePresence>
            {respondeu && (
              <>
                <motion.div
                  className={styles.explicacao}
                  initial={{ y: -8, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: duracaoFade }}
                >
                  <p className={styles.explicacaoTitulo}>💡 Explicação</p>
                  <TextoComFormulas texto={exercicioAtual.explicacao} />
                </motion.div>

                <motion.button
                  className={styles.botaoProxima}
                  onClick={avancarProxima}
                  type="button"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: duracaoFade, delay: prefereMovimentoReduzido ? 0 : 0.1 }}
                >
                  {estado.indiceAtual + 1 < totalExercicios ? 'Próxima' : 'Ver resultado'}
                </motion.button>
              </>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
