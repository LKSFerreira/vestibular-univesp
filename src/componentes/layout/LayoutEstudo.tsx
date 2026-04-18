import { useState, useCallback, useEffect } from 'react';
import { useNavegacaoStore } from '@stores/navegacaoStore';
import { useProgressoStore } from '@stores/progressoStore';
import { useAtalhos } from '@hooks/useAtalhos';
import { PainelEmenta } from '@componentes/ementa/PainelEmenta';
import { PainelConteudo } from '@componentes/conteudo/PainelConteudo';
import { PainelVisual } from '@componentes/visual/PainelVisual';
import { AjudaAtalhos } from './AjudaAtalhos';
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

const MEDIA_MOBILE = '(max-width: 768px)';

export function LayoutEstudo() {
  const painelAberto = useNavegacaoStore((estado) => estado.painelEsquerdoAberto);
  const painelDireitoAberto = useNavegacaoStore((estado) => estado.painelDireitoAberto);
  const alternarPainel = useNavegacaoStore((estado) => estado.alternarPainelEsquerdo);
  const alternarPainelDireito = useNavegacaoStore((estado) => estado.alternarPainelDireito);
  const fecharPaineis = useNavegacaoStore((estado) => estado.fecharPaineis);
  const topicoAtivo = useNavegacaoStore((estado) => estado.topicoAtivo);
  const iniciarEstudo = useProgressoStore((estado) => estado.iniciarEstudoTopico);
  const pausarEstudo = useProgressoStore((estado) => estado.pausarEstudoTopico);

  const [ajudaVisivel, setAjudaVisivel] = useState(false);
  const abrirAjuda = useCallback(() => setAjudaVisivel(true), []);
  const fecharAjuda = useCallback(() => setAjudaVisivel(false), []);

  useAtalhos(abrirAjuda);

  useEffect(() => {
    if (topicoAtivo) {
      iniciarEstudo(topicoAtivo.topicoId);
    } else {
      pausarEstudo();
    }
  }, [topicoAtivo, iniciarEstudo, pausarEstudo]);

  // Auto-close overlay panels on mobile when a topic is selected
  useEffect(() => {
    if (topicoAtivo && window.matchMedia(MEDIA_MOBILE).matches) {
      fecharPaineis();
    }
  }, [topicoAtivo, fecharPaineis]);

  const tratarCliqueEmenta = () => {
    if (painelDireitoAberto) fecharPaineis();
    alternarPainel();
  };

  const tratarCliqueProgresso = () => {
    if (painelAberto) fecharPaineis();
    alternarPainelDireito();
  };

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

      <div
        className={styles.backdrop}
        data-visivel={painelAberto || painelDireitoAberto}
        onClick={fecharPaineis}
        aria-hidden="true"
      />

      <div
        className={styles.layout}
        data-sidebar-recolhida={!painelAberto}
        data-painel-direito-aberto={painelDireitoAberto}
      >
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

        <aside
          className={styles.painelDireito}
          data-aberto={painelDireitoAberto}
        >
          <PainelVisual />
        </aside>
      </div>

      <nav className={styles.navMobile} aria-label="Navegação mobile">
        <button
          className={styles.navMobileBotao}
          data-ativo={painelAberto}
          onClick={tratarCliqueEmenta}
          aria-label="Ementa"
        >
          <span className={styles.navMobileIcone}>📋</span>
          <span className={styles.navMobileRotulo}>Ementa</span>
        </button>
        <button
          className={styles.navMobileBotao}
          data-ativo={!painelAberto && !painelDireitoAberto}
          onClick={fecharPaineis}
          aria-label="Conteúdo"
        >
          <span className={styles.navMobileIcone}>📖</span>
          <span className={styles.navMobileRotulo}>Conteúdo</span>
        </button>
        <button
          className={styles.navMobileBotao}
          data-ativo={painelDireitoAberto}
          onClick={tratarCliqueProgresso}
          aria-label="Progresso"
        >
          <span className={styles.navMobileIcone}>📊</span>
          <span className={styles.navMobileRotulo}>Progresso</span>
        </button>
      </nav>

      <AjudaAtalhos visivel={ajudaVisivel} onFechar={fecharAjuda} />
    </>
  );
}
