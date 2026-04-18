import React from 'react';
import { EMENTA_VESTIBULAR } from '@conteudo/ementa';
import { useNavegacaoStore } from '@stores/navegacaoStore';
import { useProgressoStore } from '@stores/progressoStore';
import type { NivelDominio } from '@dominio/grafo/tipos';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { GraficoRadar } from './GraficoRadar';
import { GraficoBarrasDesempenho } from './GraficoBarrasDesempenho';
import { MapaCalor } from './MapaCalor';
import { EstatisticasSessao } from './EstatisticasSessao';
import { VisualizacaoInterativa } from '../interativo/VisualizacaoInterativa';
import styles from './PainelVisual.module.css';

const ROTULO_NIVEL: Record<NivelDominio, string> = {
  nao_iniciado: 'Não iniciado',
  fragil: 'Frágil',
  em_progresso: 'Em progresso',
  dominado: 'Dominado',
};

const COR_NIVEL: Record<NivelDominio, string> = {
  nao_iniciado: 'var(--cor-texto-terciario)',
  fragil: 'var(--cor-alerta-400)',
  em_progresso: 'var(--cor-aviso-400)',
  dominado: 'var(--cor-acento-400)',
};

function DashboardProgresso() {
  const prefereMovimentoReduzido = useReducedMotion();
  const duracao = prefereMovimentoReduzido ? 0 : 0.25;
  const atraso = prefereMovimentoReduzido ? 0 : 0.06;

  const obterEstatisticas = useProgressoStore((estado) => estado.obterEstatisticasGlobais);
  const obterNivel = useProgressoStore((estado) => estado.obterNivelTopico);
  const exerciciosRespondidos = useProgressoStore((estado) => estado.exerciciosRespondidos);

  const estatisticas = obterEstatisticas();

  const totalTopicos = EMENTA_VESTIBULAR.disciplinas.reduce(
    (acc, d) => acc + d.topicos.filter((t) => !t.emBreve).length,
    0,
  );

  const taxaAcerto =
    estatisticas.totalExercicios > 0
      ? Math.round((estatisticas.totalCorretas / estatisticas.totalExercicios) * 100)
      : 0;

  const itensEstatistica = [
    { valor: estatisticas.totalExercicios, rotulo: 'exercícios' },
    { valor: `${taxaAcerto}%`, rotulo: 'acerto' },
    { valor: `${estatisticas.topicosIniciados}/${totalTopicos}`, rotulo: 'tópicos' },
  ];

  return (
    <div className={styles.dashboard}>
      <h2 className={styles.dashboardTitulo}>📊 Meu Progresso</h2>

      <div className={styles.estatisticas}>
        {itensEstatistica.map((item, indice) => (
          <React.Fragment key={item.rotulo}>
            {indice > 0 && <div className={styles.estatisticaDivisor} />}
            <motion.div
              className={styles.estatisticaItem}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: duracao, delay: indice * atraso }}
            >
              <span className={styles.estatisticaValor}>{item.valor}</span>
              <span className={styles.estatisticaRotulo}>{item.rotulo}</span>
            </motion.div>
          </React.Fragment>
        ))}
      </div>

      <div className={styles.listaDisciplinas}>
        {EMENTA_VESTIBULAR.disciplinas.map((disciplina) => {
          const topicosAtivos = disciplina.topicos.filter((t) => !t.emBreve);
          if (topicosAtivos.length === 0) return null;

          return (
            <div key={disciplina.id} className={styles.disciplinaProgresso}>
              <h3 className={styles.disciplinaProgressoTitulo}>
                {disciplina.icone} {disciplina.titulo}
              </h3>
              <div className={styles.topicosProgresso}>
                {topicosAtivos.map((topico) => {
                  const nivel = obterNivel(topico.id);
                  const exercicio = exerciciosRespondidos[topico.id];

                  return (
                    <div key={topico.id} className={styles.topicoProgressoItem}>
                      <div
                        className={styles.topicoProgressoPonto}
                        style={{ background: COR_NIVEL[nivel] }}
                        title={ROTULO_NIVEL[nivel]}
                      />
                      <span className={styles.topicoProgressoNome}>{topico.titulo}</span>
                      {exercicio && (
                        <span className={styles.topicoProgressoScore}>
                          {exercicio.corretas}/{exercicio.total}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ResumoVisualEmenta() {
  const totalTopicos = EMENTA_VESTIBULAR.disciplinas.reduce(
    (acumulador, disciplina) => acumulador + disciplina.topicos.length,
    0,
  );
  const topicosDisponiveis = EMENTA_VESTIBULAR.disciplinas.reduce(
    (acumulador, disciplina) =>
      acumulador + disciplina.topicos.filter((topico) => !topico.emBreve).length,
    0,
  );

  return (
    <div className={styles.estadoVazio}>
      <span className={styles.estadoVazioIcone}>🎓</span>
      <h2 className={styles.estadoVazioTitulo}>Vestibular UNIVESP</h2>
      <div className={styles.estatisticas}>
        <div className={styles.estatisticaItem}>
          <span className={styles.estatisticaValor}>{EMENTA_VESTIBULAR.disciplinas.length}</span>
          <span className={styles.estatisticaRotulo}>disciplinas</span>
        </div>
        <div className={styles.estatisticaDivisor} />
        <div className={styles.estatisticaItem}>
          <span className={styles.estatisticaValor}>{totalTopicos}</span>
          <span className={styles.estatisticaRotulo}>tópicos</span>
        </div>
        <div className={styles.estatisticaDivisor} />
        <div className={styles.estatisticaItem}>
          <span className={styles.estatisticaValor}>{topicosDisponiveis}</span>
          <span className={styles.estatisticaRotulo}>disponíveis</span>
        </div>
      </div>
      <p className={styles.estadoVazioTexto}>
        Selecione um tópico na ementa para começar a estudar com conteúdo visual interativo.
      </p>
    </div>
  );
}

export function PainelVisual() {
  const prefereMovimentoReduzido = useReducedMotion();
  const duracao = prefereMovimentoReduzido ? 0 : 0.3;

  const topicoAtivo = useNavegacaoStore((estado) => estado.topicoAtivo);
  const obterNivel = useProgressoStore((estado) => estado.obterNivelTopico);
  const exerciciosRespondidos = useProgressoStore((estado) => estado.exerciciosRespondidos);

  const chaveAnimacao = topicoAtivo?.topicoId ?? 'resumo';

  const disciplina = topicoAtivo
    ? EMENTA_VESTIBULAR.disciplinas.find((d) => d.id === topicoAtivo.disciplinaId)
    : undefined;
  const topico = disciplina?.topicos.find((t) => t.id === topicoAtivo?.topicoId);
  const conteudo = topico?.conteudo;
  const nivel = topico ? obterNivel(topico.id) : 'nao_iniciado';
  const exercicio = topico ? exerciciosRespondidos[topico.id] : undefined;

  return (
    <AnimatePresence mode="wait">
      {!topicoAtivo ? (
        <motion.div
          key="resumo"
          className={styles.container}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: duracao }}
        >
          <ResumoVisualEmenta />
          <GraficoRadar />
          <MapaCalor />
          <DashboardProgresso />
          <EstatisticasSessao />
        </motion.div>
      ) : (
        <motion.div
          key={chaveAnimacao}
          className={styles.container}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: duracao }}
        >
          <div className={styles.conteudoVisual}>
            {topico && (
              <div className={styles.statusTopico}>
                <div
                  className={styles.statusPonto}
                  style={{ background: COR_NIVEL[nivel] }}
                />
                <span className={styles.statusTexto}>{ROTULO_NIVEL[nivel]}</span>
                {exercicio && (
                  <span className={styles.statusScore}>
                    {exercicio.corretas}/{exercicio.total} corretas
                  </span>
                )}
              </div>
            )}

            {topicoAtivo && (
              <VisualizacaoInterativa disciplinaId={topicoAtivo.disciplinaId} />
            )}

            {topico && (
              <GraficoBarrasDesempenho
                topicoId={topico.id}
                topicoTitulo={topico.titulo}
              />
            )}

            {conteudo?.imagemDescricao && (
              <p className={styles.legendaVisual}>{conteudo.imagemDescricao}</p>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
