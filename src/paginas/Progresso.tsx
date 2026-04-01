import { Link } from 'react-router';
import { GRAFO_FUNCAO_SEGUNDO_GRAU } from '@conteudo/matematica/funcao-segundo-grau/grafo';
import styles from './Progresso.module.css';

export function Progresso() {
  const grafo = GRAFO_FUNCAO_SEGUNDO_GRAU;

  return (
    <main className={styles.pagina}>
      <header className={styles.cabecalho}>
        <Link to="/" className={styles.voltar}>← Voltar ao início</Link>
        <h1 className={styles.titulo}>Meu Progresso</h1>
        <p className={styles.subtitulo}>{grafo.titulo}</p>
      </header>

      <section className={styles.mapa}>
        {grafo.nos.map((no) => (
          <div key={no.id} className={styles.noCard}>
            <div className={styles.noIndicador} data-nivel="nao_iniciado" />
            <div className={styles.noInfo}>
              <h3 className={styles.noTitulo}>{no.titulo}</h3>
              <span className={styles.noStatus}>Não iniciado</span>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
