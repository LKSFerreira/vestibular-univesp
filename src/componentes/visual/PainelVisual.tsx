import { EMENTA_VESTIBULAR } from '@conteudo/ementa';
import { useNavegacaoStore } from '@stores/navegacaoStore';
import styles from './PainelVisual.module.css';

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
  const topicoAtivo = useNavegacaoStore((estado) => estado.topicoAtivo);

  if (!topicoAtivo) {
    return (
      <div className={styles.container}>
        <ResumoVisualEmenta />
      </div>
    );
  }

  const disciplina = EMENTA_VESTIBULAR.disciplinas.find(
    (disciplina) => disciplina.id === topicoAtivo.disciplinaId,
  );
  const topico = disciplina?.topicos.find((topico) => topico.id === topicoAtivo.topicoId);
  const conteudo = topico?.conteudo;

  return (
    <div className={styles.container} key={topico?.id}>
      <div className={styles.conteudoVisual}>
        <div className={styles.imagemContainer}>
          <div className={styles.placeholderImagem}>
            <span className={styles.placeholderIcone}>{disciplina?.icone ?? '📊'}</span>
            <p className={styles.placeholderTexto}>
              {conteudo?.imagemDescricao ?? 'Conteúdo visual será adicionado em breve'}
            </p>
          </div>
        </div>

        {conteudo?.imagemDescricao && (
          <p className={styles.legendaVisual}>{conteudo.imagemDescricao}</p>
        )}
      </div>
    </div>
  );
}
