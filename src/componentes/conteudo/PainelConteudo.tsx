import { useState, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { EMENTA_VESTIBULAR } from '@conteudo/ementa';
import type { ExemploResolvido, SecaoConteudo } from '@conteudo/tipos';
import { useNavegacaoStore } from '@stores/navegacaoStore';
import { useProgressoStore } from '@stores/progressoStore';
import { TextoComFormulas } from './FormulaMatematica';
import { ConteudoRico } from './ConteudoRico';
import { Quiz } from './Quiz';
import styles from './PainelConteudo.module.css';

interface TopicoVizinho {
  readonly disciplinaId: string;
  readonly topicoId: string;
  readonly titulo: string;
  readonly disciplinaTitulo: string;
}

function obterTopicoVizinho(
  disciplinaId: string,
  topicoId: string,
  direcao: -1 | 1,
): TopicoVizinho | null {
  const disciplinas = EMENTA_VESTIBULAR.disciplinas;

  const topicosNavegaveis: {
    disciplinaId: string;
    disciplinaTitulo: string;
    topicoId: string;
    titulo: string;
  }[] = [];

  for (const d of disciplinas) {
    for (const t of d.topicos) {
      if (!t.emBreve) {
        topicosNavegaveis.push({
          disciplinaId: d.id,
          disciplinaTitulo: d.titulo,
          topicoId: t.id,
          titulo: t.titulo,
        });
      }
    }
  }

  const indiceAtual = topicosNavegaveis.findIndex(
    (t) => t.topicoId === topicoId && t.disciplinaId === disciplinaId,
  );
  if (indiceAtual < 0) return null;

  const novoIndice = indiceAtual + direcao;
  if (novoIndice < 0 || novoIndice >= topicosNavegaveis.length) return null;

  return topicosNavegaveis[novoIndice];
}

function BotaoIrExercicios({ containerRef }: { readonly containerRef: React.RefObject<HTMLDivElement | null> }) {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    function verificarVisibilidade() {
      const secao = document.getElementById('secao-exercicios');
      if (!secao) {
        setVisivel(false);
        return;
      }

      const rect = secao.getBoundingClientRect();
      const estaNoViewport = rect.top < window.innerHeight && rect.bottom > 0;
      setVisivel(!estaNoViewport);
    }

    verificarVisibilidade();

    const painelCentral = container.closest('main');
    const alvo = painelCentral ?? window;
    alvo.addEventListener('scroll', verificarVisibilidade, { passive: true });
    return () => alvo.removeEventListener('scroll', verificarVisibilidade);
  }, [containerRef]);

  if (!visivel) return null;

  return (
    <button
      className={styles.fabExercicios}
      onClick={() =>
        document.getElementById('secao-exercicios')?.scrollIntoView({ behavior: 'smooth' })
      }
      aria-label="Ir para exercícios"
      type="button"
      title="Ir para exercícios"
    >
      ✏️
    </button>
  );
}

interface BarraNavegacaoProps {
  readonly disciplinaId: string;
  readonly topicoId: string;
}

function BarraNavegacao({ disciplinaId, topicoId }: BarraNavegacaoProps) {
  const selecionarTopico = useNavegacaoStore((estado) => estado.selecionarTopico);
  const expandirDisciplina = useNavegacaoStore((estado) => estado.expandirDisciplina);

  const anterior = obterTopicoVizinho(disciplinaId, topicoId, -1);
  const proximo = obterTopicoVizinho(disciplinaId, topicoId, 1);

  function navegar(destino: TopicoVizinho) {
    if (destino.disciplinaId !== disciplinaId) {
      expandirDisciplina(destino.disciplinaId);
    }
    selecionarTopico(destino.disciplinaId, destino.topicoId);
  }

  return (
    <nav className={styles.barraNavegacao} aria-label="Navegação entre tópicos">
      {anterior ? (
        <button
          className={styles.botaoNavegar}
          onClick={() => navegar(anterior)}
          type="button"
          title={anterior.titulo}
        >
          <span className={styles.navegarDirecao}>← Anterior</span>
          <span className={styles.navegarTitulo}>{anterior.titulo}</span>
        </button>
      ) : (
        <span />
      )}

      {proximo ? (
        <button
          className={`${styles.botaoNavegar} ${styles.botaoProximo}`}
          onClick={() => navegar(proximo)}
          type="button"
          title={proximo.titulo}
        >
          <span className={styles.navegarDirecao}>Próximo →</span>
          <span className={styles.navegarTitulo}>{proximo.titulo}</span>
        </button>
      ) : (
        <span />
      )}
    </nav>
  );
}

function IndiceEmenta() {
  const selecionarTopico = useNavegacaoStore((estado) => estado.selecionarTopico);
  const expandirDisciplina = useNavegacaoStore((estado) => estado.expandirDisciplina);

  function tratarCliqueItem(disciplinaId: string, topicoId: string, emBreve?: boolean) {
    if (emBreve) return;
    expandirDisciplina(disciplinaId);
    selecionarTopico(disciplinaId, topicoId);
  }

  return (
    <div className={styles.ementa}>
      <header className={styles.ementaCabecalho}>
        <h1 className={styles.ementaTitulo}>📋 Ementa de Estudos</h1>
        <p className={styles.ementaDescricao}>
          Este é o seu guia completo de estudos para o vestibular UNIVESP. Cada disciplina está
          organizada por tópicos com o respectivo peso na prova, permitindo que você priorize
          seus estudos de forma estratégica.
        </p>
        <p className={styles.ementaDescricao}>
          Clique em qualquer tópico disponível para acessar o conteúdo de estudo diretamente.
          Os tópicos marcados como <em>"em breve"</em> estão sendo preparados e serão
          disponibilizados em atualizações futuras.
        </p>
      </header>

      <div className={styles.indiceDisciplinas}>
        {EMENTA_VESTIBULAR.disciplinas.map((disciplina) => (
          <section key={disciplina.id} className={styles.indiceDisciplina}>
            <h2 className={styles.indiceDisciplinaTitulo}>
              <span className={styles.indiceDisciplinaIcone}>{disciplina.icone}</span>
              {disciplina.titulo}
            </h2>

            <div className={styles.indiceTopicos}>
              {disciplina.topicos.map((topico) => (
                <button
                  key={topico.id}
                  className={styles.indiceTopicoBotao}
                  data-em-breve={!!topico.emBreve}
                  disabled={!!topico.emBreve}
                  onClick={() => tratarCliqueItem(disciplina.id, topico.id, topico.emBreve)}
                >
                  <span className={styles.indiceTopicoNome}>{topico.titulo}</span>
                  <span className={styles.indicePeso}>{topico.peso}%</span>
                  {topico.emBreve && (
                    <span className={styles.indiceBadgeEmBreve}>em breve</span>
                  )}
                </button>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

interface AccordionExemploProps {
  readonly exemplo: ExemploResolvido;
  readonly indice: number;
}

function AccordionExemplo({ exemplo, indice }: AccordionExemploProps) {
  const [aberto, setAberto] = useState(false);
  const prefereMovimentoReduzido = useReducedMotion();

  const alternar = useCallback(() => setAberto((anterior) => !anterior), []);

  const duracaoAccordion = prefereMovimentoReduzido ? 0 : 0.2;

  return (
    <div className={styles.exemploItem}>
      <button
        className={styles.exemploSumario}
        onClick={alternar}
        type="button"
        aria-expanded={aberto}
      >
        <span className={styles.exemploSeta} data-aberto={aberto}>
          ▶
        </span>
        Exemplo {indice + 1}: {exemplo.enunciado}
      </button>

      <AnimatePresence initial={false}>
        {aberto && (
          <motion.div
            key="conteudo"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: duracaoAccordion }}
            style={{ overflow: 'hidden' }}
            className={styles.exemploConteudo}
          >
            <ol className={styles.exemploPassos}>
              {exemplo.passos.map((passo, indicePasso) => (
                <li key={indicePasso} className={styles.exemploPasso}>
                  <TextoComFormulas texto={passo} />
                </li>
              ))}
            </ol>
            <div className={styles.exemploResposta}>
              <TextoComFormulas texto={`Resposta: ${exemplo.resposta}`} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function PainelConteudo() {
  const topicoAtivo = useNavegacaoStore((estado) => estado.topicoAtivo);
  const registrarResposta = useProgressoStore((estado) => estado.registrarRespostaExercicio);
  const containerRef = useRef<HTMLDivElement>(null);
  const prefereMovimentoReduzido = useReducedMotion();

  const disciplina = topicoAtivo
    ? EMENTA_VESTIBULAR.disciplinas.find((d) => d.id === topicoAtivo.disciplinaId)
    : undefined;
  const topico = disciplina?.topicos.find((t) => t.id === topicoAtivo?.topicoId);
  const temConteudo = !!(disciplina && topico && topico.conteudo);
  const temExercicios = temConteudo && topico!.conteudo!.exercicios && topico!.conteudo!.exercicios.length > 0;

  const chaveAnimacao = topicoAtivo?.topicoId ?? 'ementa';
  const duracao = prefereMovimentoReduzido ? 0 : 0.3;
  const duracaoSecao = prefereMovimentoReduzido ? 0 : 0.25;
  const stagger = prefereMovimentoReduzido ? 0 : 0.08;

  const transicaoFade = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: duracao },
  };

  const transicaoPagina = {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -8 },
    transition: { duration: duracao },
  };

  const variantesStagger = {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger },
    },
  };

  const variantesSecao = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: duracaoSecao },
    },
  };

  return (
    <AnimatePresence mode="wait">
      {!topicoAtivo ? (
        <motion.div
          key="ementa"
          className={styles.container}
          {...transicaoFade}
        >
          <IndiceEmenta />
        </motion.div>
      ) : !temConteudo ? (
        <motion.div
          key="indisponivel"
          className={styles.container}
          {...transicaoFade}
        >
          <div className={styles.estadoIndisponivel}>
            <span className={styles.estadoIndisponivelIcone}>🚧</span>
            <h1 className={styles.estadoIndisponivelTitulo}>Conteúdo em desenvolvimento</h1>
            <p className={styles.estadoIndisponivelTexto}>
              Este tópico ainda está sendo preparado. Volte em breve!
            </p>
          </div>
        </motion.div>
      ) : (
        <motion.div
          key={chaveAnimacao}
          className={styles.container}
          ref={containerRef}
          {...transicaoPagina}
        >
          <motion.article
            className={styles.conteudo}
            variants={variantesStagger}
            initial="hidden"
            animate="visible"
          >
            <header className={styles.cabecalhoConteudo}>
              <div className={styles.metaInfo}>
                <span className={styles.etiquetaDisciplina}>
                  {disciplina!.icone} {disciplina!.titulo}
                </span>
                <span className={styles.badgePeso}>⚡ {topico!.peso}% da prova</span>
              </div>
              <h1 className={styles.tituloTopico}>{topico!.titulo}</h1>
            </header>

            <blockquote className={styles.resumo}>{topico!.conteudo!.resumo}</blockquote>

            {/* Conteúdo rico (secoes) ou fallback para explicacao legada */}
            {topico!.conteudo!.secoes && topico!.conteudo!.secoes.length > 0 ? (
              <motion.div variants={variantesSecao}>
                {topico!.conteudo!.secoes.map((secao: SecaoConteudo, idx: number) => (
                  <section
                    key={idx}
                    className={`${styles.secaoRica} ${secao.tipo ? styles[`secao_${secao.tipo}`] ?? '' : ''}`}
                  >
                    {secao.titulo && (
                      <h2 className={styles.secaoTitulo}>
                        {secao.titulo}
                      </h2>
                    )}
                    <ConteudoRico markdown={secao.corpo} />
                  </section>
                ))}
              </motion.div>
            ) : topico!.conteudo!.explicacao ? (
              <TextoComFormulas texto={topico!.conteudo!.explicacao} className={styles.explicacao} />
            ) : null}

            {topico!.conteudo!.exemplosResolvidos && topico!.conteudo!.exemplosResolvidos.length > 0 && (
              <motion.section
                className={styles.secaoExemplos}
                aria-label="Exemplos resolvidos"
                variants={variantesSecao}
              >
                <h2 className={styles.secaoTitulo}>
                  <span className={styles.secaoIcone}>📝</span> Exemplos Resolvidos
                </h2>
                <div className={styles.listaExemplos}>
                  {topico!.conteudo!.exemplosResolvidos.map((exemplo, indice) => (
                    <AccordionExemplo key={indice} exemplo={exemplo} indice={indice} />
                  ))}
                </div>
              </motion.section>
            )}

            {temExercicios && (
              <motion.section
                id="secao-exercicios"
                className={styles.secaoExercicios}
                aria-label="Exercícios"
                variants={variantesSecao}
              >
                <h2 className={styles.secaoExerciciosTitulo}>✏️ Exercícios</h2>
                <Quiz
                  exercicios={topico!.conteudo!.exercicios!}
                  onResposta={(_exercicioId, correto) =>
                    registrarResposta(topico!.id, correto)
                  }
                />
              </motion.section>
            )}

            <BarraNavegacao disciplinaId={topicoAtivo.disciplinaId} topicoId={topicoAtivo.topicoId} />
          </motion.article>

          {temExercicios && <BotaoIrExercicios containerRef={containerRef} />}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
