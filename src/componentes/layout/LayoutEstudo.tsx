import { useNavegacaoStore } from '@stores/navegacaoStore';
import { PainelEmenta } from '@componentes/ementa/PainelEmenta';
import { PainelConteudo } from '@componentes/conteudo/PainelConteudo';
import { PainelVisual } from '@componentes/visual/PainelVisual';
import styles from './LayoutEstudo.module.css';

function IconeAbrirPainel() {
  return (
    <svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="1" width="14" height="14" rx="2" />
      <line x1="6" y1="1" x2="6" y2="15" />
      <polyline points="8,6 10,8 8,10" />
    </svg>
  );
}

export function LayoutEstudo() {
  const painelAberto = useNavegacaoStore((estado) => estado.painelEsquerdoAberto);
  const alternarPainel = useNavegacaoStore((estado) => estado.alternarPainelEsquerdo);

  return (
    <>
      <button
        className={styles.botaoToggleSidebar}
        data-visivel={!painelAberto}
        onClick={alternarPainel}
        aria-label="Abrir painel lateral"
      >
        <IconeAbrirPainel />
      </button>

      <div className={styles.layout} data-sidebar-recolhida={!painelAberto}>
        <aside
          className={styles.painelEsquerdo}
          data-recolhido={!painelAberto}
          aria-hidden={!painelAberto}
        >
          <PainelEmenta />
        </aside>

        <main className={styles.painelCentral}>
          <PainelConteudo />
        </main>

        <aside className={styles.painelDireito}>
          <PainelVisual />
        </aside>
      </div>
    </>
  );
}
