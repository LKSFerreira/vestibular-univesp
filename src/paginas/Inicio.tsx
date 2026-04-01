import { Link } from 'react-router';
import { GRAFO_FUNCAO_SEGUNDO_GRAU } from '@conteudo/matematica/funcao-segundo-grau/grafo';
import styles from './Inicio.module.css';

export function Inicio() {
  const grafo = GRAFO_FUNCAO_SEGUNDO_GRAU;

  return (
    <main className={styles.pagina}>
      <header className={styles.cabecalho}>
        <h1 className={styles.titulo}>Vestibular UNIVESP</h1>
        <p className={styles.subtitulo}>Aprendizado adaptativo em matemática</p>
      </header>

      <section className={styles.trilha}>
        <h2 className={styles.trilhaTitulo}>{grafo.titulo}</h2>
        <p className={styles.trilhaDescricao}>
          Escolha um tópico para começar. O sistema vai identificar suas lacunas
          e guiar o aprendizado de forma personalizada.
        </p>

        <div className={styles.grade}>
          {grafo.nos.map((no) => (
            <Link key={no.id} to={`/sessao/${no.id}`} className={styles.cartao}>
              <span className={styles.cartaoOrdem}>{no.ordem}</span>
              <h3 className={styles.cartaoTitulo}>{no.titulo}</h3>
              <p className={styles.cartaoDescricao}>{no.descricao}</p>
            </Link>
          ))}
        </div>
      </section>

      <nav className={styles.navegacao}>
        <Link to="/progresso" className={styles.linkProgresso}>
          Ver meu progresso →
        </Link>
      </nav>
    </main>
  );
}
