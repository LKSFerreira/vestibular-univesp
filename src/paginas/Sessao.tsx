import { useParams, Link } from 'react-router';
import { GRAFO_FUNCAO_SEGUNDO_GRAU } from '@conteudo/matematica/funcao-segundo-grau/grafo';
import { buscarNo } from '@dominio/grafo/operacoes';
import styles from './Sessao.module.css';

export function Sessao() {
  const { noId } = useParams<{ noId: string }>();
  const grafo = GRAFO_FUNCAO_SEGUNDO_GRAU;
  const noAtual = noId ? buscarNo(grafo, noId) : undefined;

  if (!noAtual) {
    return (
      <main className={styles.pagina}>
        <p className={styles.erro}>Tópico não encontrado.</p>
        <Link to="/" className={styles.voltar}>← Voltar ao início</Link>
      </main>
    );
  }

  return (
    <main className={styles.pagina}>
      <header className={styles.cabecalho}>
        <Link to="/" className={styles.voltar}>← Voltar</Link>
        <div className={styles.contexto}>
          <span className={styles.etiqueta}>Sessão de Aprendizagem</span>
          <h1 className={styles.titulo}>{noAtual.titulo}</h1>
          <p className={styles.objetivo}>{noAtual.objetivoAprendizagem}</p>
        </div>
      </header>

      <section className={styles.conteudo}>
        <div className={styles.placeholder}>
          <p>Módulo interativo: <strong>{noAtual.moduloInterativo}</strong></p>
          <p className={styles.dica}>
            O conteúdo interativo deste nó será implementado aqui.
            O motor adaptativo monitorará suas interações para decidir
            se deve regredir, reforçar ou avançar.
          </p>
        </div>
      </section>

      {noAtual.preRequisitos.length > 0 && (
        <aside className={styles.preRequisitos}>
          <h3 className={styles.preRequisitosTitulo}>Pré-requisitos</h3>
          <ul className={styles.preRequisitosLista}>
            {noAtual.preRequisitos.map((preRequisitoId) => {
              const preRequisito = buscarNo(grafo, preRequisitoId);
              return (
                <li key={preRequisitoId}>
                  <Link to={`/sessao/${preRequisitoId}`} className={styles.preRequisitoLink}>
                    {preRequisito?.titulo ?? preRequisitoId}
                  </Link>
                </li>
              );
            })}
          </ul>
        </aside>
      )}
    </main>
  );
}
