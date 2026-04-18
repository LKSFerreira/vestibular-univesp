import { EMENTA_VESTIBULAR } from '@conteudo/ementa';
import { useProgressoStore } from '@stores/progressoStore';
import styles from './EstatisticasSessao.module.css';

function formatarTempo(ms: number): string {
  const minutos = Math.floor(ms / 60_000);
  const horas = Math.floor(minutos / 60);
  const minutosRestantes = minutos % 60;

  if (horas > 0) return `${horas}h ${minutosRestantes}m`;
  if (minutosRestantes > 0) return `${minutosRestantes}m`;
  return '< 1m';
}

interface TopicoComMeta {
  readonly id: string;
  readonly titulo: string;
  readonly peso: number;
  readonly disciplinaIcone: string;
}

function obterTodosTopicosAtivos(): TopicoComMeta[] {
  return EMENTA_VESTIBULAR.disciplinas.flatMap((d) =>
    d.topicos
      .filter((t) => !t.emBreve)
      .map((t) => ({
        id: t.id,
        titulo: t.titulo,
        peso: t.peso,
        disciplinaIcone: d.icone,
      })),
  );
}

export function EstatisticasSessao() {
  const obterEstatisticas = useProgressoStore((s) => s.obterEstatisticasGlobais);
  const obterNivel = useProgressoStore((s) => s.obterNivelTopico);
  const obterTempoTotal = useProgressoStore((s) => s.obterTempoTotalEstudo);
  const exerciciosRespondidos = useProgressoStore((s) => s.exerciciosRespondidos);

  const estatisticas = obterEstatisticas();

  const todosTopicos = obterTodosTopicosAtivos();
  const totalTopicos = todosTopicos.length;
  const tempoTotal = obterTempoTotal();

  const taxaAcerto =
    estatisticas.totalExercicios > 0
      ? Math.round((estatisticas.totalCorretas / estatisticas.totalExercicios) * 100)
      : 0;

  // Weak topics: fragil level or <50% accuracy
  const topicosFrageis = todosTopicos.filter((t) => {
    const nivel = obterNivel(t.id);
    if (nivel === 'fragil') return true;

    const ex = exerciciosRespondidos[t.id];
    if (ex && ex.total >= 2) {
      return ex.corretas / ex.total < 0.5;
    }
    return false;
  });

  // Suggestion: prioritize unstarted topics with high exam weight, then weak topics
  const sugestao = obterSugestao(todosTopicos, obterNivel, exerciciosRespondidos);

  return (
    <div className={styles.container}>
      <h2 className={styles.titulo}>⏱️ Estatísticas da Sessão</h2>

      <div className={styles.cardsGrid}>
        <div className={styles.card}>
          <span className={styles.cardIcone}>⏱️</span>
          <span className={styles.cardValor}>{formatarTempo(tempoTotal)}</span>
          <span className={styles.cardRotulo}>tempo de estudo</span>
        </div>
        <div className={styles.card}>
          <span className={styles.cardIcone}>✏️</span>
          <span className={styles.cardValor}>{estatisticas.totalExercicios}</span>
          <span className={styles.cardRotulo}>exercícios</span>
        </div>
        <div className={styles.card}>
          <span className={styles.cardIcone}>🎯</span>
          <span className={styles.cardValor}>{taxaAcerto}%</span>
          <span className={styles.cardRotulo}>acerto</span>
        </div>
        <div className={styles.card}>
          <span className={styles.cardIcone}>📚</span>
          <span className={styles.cardValor}>
            {estatisticas.topicosIniciados}/{totalTopicos}
          </span>
          <span className={styles.cardRotulo}>tópicos iniciados</span>
        </div>
      </div>

      {sugestao && (
        <div className={styles.secao}>
          <h3 className={styles.secaoTitulo}>💡 Próximo tópico sugerido</h3>
          <div className={styles.sugestaoCard}>
            <span className={styles.sugestaoIcone}>{sugestao.disciplinaIcone}</span>
            <div className={styles.sugestaoInfo}>
              <span className={styles.sugestaoNome}>{sugestao.titulo}</span>
              <span className={styles.sugestaoMotivo}>{sugestao.motivo}</span>
            </div>
          </div>
        </div>
      )}

      <div className={styles.secao}>
        <h3 className={styles.secaoTitulo}>⚠️ Tópicos que precisam de atenção</h3>
        {topicosFrageis.length > 0 ? (
          <div className={styles.listaFrageis}>
            {topicosFrageis.map((t) => {
              const ex = exerciciosRespondidos[t.id];
              const score = ex ? `${ex.corretas}/${ex.total}` : '—';
              return (
                <div key={t.id} className={styles.fragilItem}>
                  <div className={styles.fragilPonto} />
                  <span className={styles.fragilNome}>{t.titulo}</span>
                  <span className={styles.fragilScore}>{score}</span>
                </div>
              );
            })}
          </div>
        ) : (
          <p className={styles.mensagemVazia}>Nenhum tópico frágil no momento.</p>
        )}
      </div>
    </div>
  );
}

interface Sugestao {
  readonly titulo: string;
  readonly disciplinaIcone: string;
  readonly motivo: string;
}

function obterSugestao(
  topicos: TopicoComMeta[],
  obterNivel: (id: string) => string,
  exercicios: Record<string, { corretas: number; total: number }>,
): Sugestao | null {
  // Priority 1: unstarted topics sorted by exam weight (descending)
  const naoIniciados = topicos
    .filter((t) => obterNivel(t.id) === 'nao_iniciado')
    .sort((a, b) => b.peso - a.peso);

  if (naoIniciados.length > 0) {
    const t = naoIniciados[0];
    return {
      titulo: t.titulo,
      disciplinaIcone: t.disciplinaIcone,
      motivo: `Peso ${t.peso}% na prova · ainda não iniciado`,
    };
  }

  // Priority 2: weakest topics (lowest accuracy)
  const comExercicios = topicos
    .filter((t) => {
      const ex = exercicios[t.id];
      return ex && ex.total >= 2;
    })
    .map((t) => {
      const ex = exercicios[t.id];
      return { ...t, taxa: ex.corretas / ex.total };
    })
    .sort((a, b) => a.taxa - b.taxa);

  if (comExercicios.length > 0 && comExercicios[0].taxa < 0.8) {
    const t = comExercicios[0];
    return {
      titulo: t.titulo,
      disciplinaIcone: t.disciplinaIcone,
      motivo: `${Math.round(t.taxa * 100)}% de acerto · reforçar`,
    };
  }

  return null;
}
