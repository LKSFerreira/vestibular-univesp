import { EMENTA_VESTIBULAR } from '@conteudo/ementa';
import { useNavegacaoStore } from '@stores/navegacaoStore';
import styles from './PainelConteudo.module.css';

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

export function PainelConteudo() {
  const topicoAtivo = useNavegacaoStore((estado) => estado.topicoAtivo);

  if (!topicoAtivo) {
    return (
      <div className={styles.container}>
        <IndiceEmenta />
      </div>
    );
  }

  const disciplina = EMENTA_VESTIBULAR.disciplinas.find(
    (disciplina) => disciplina.id === topicoAtivo.disciplinaId,
  );
  const topico = disciplina?.topicos.find((topico) => topico.id === topicoAtivo.topicoId);

  if (!disciplina || !topico || !topico.conteudo) {
    return (
      <div className={styles.container}>
        <div className={styles.estadoIndisponivel}>
          <span className={styles.estadoIndisponivelIcone}>🚧</span>
          <h1 className={styles.estadoIndisponivelTitulo}>Conteúdo em desenvolvimento</h1>
          <p className={styles.estadoIndisponivelTexto}>
            Este tópico ainda está sendo preparado. Volte em breve!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container} key={topico.id}>
      <article className={styles.conteudo}>
        <header className={styles.cabecalhoConteudo}>
          <div className={styles.metaInfo}>
            <span className={styles.etiquetaDisciplina}>
              {disciplina.icone} {disciplina.titulo}
            </span>
            <span className={styles.badgePeso}>⚡ {topico.peso}% da prova</span>
          </div>
          <h1 className={styles.tituloTopico}>{topico.titulo}</h1>
        </header>

        <blockquote className={styles.resumo}>{topico.conteudo.resumo}</blockquote>

        <div className={styles.explicacao}>{topico.conteudo.explicacao}</div>
      </article>
    </div>
  );
}
