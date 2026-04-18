import { useEffect, useCallback } from 'react';
import styles from './AjudaAtalhos.module.css';

interface AjudaAtalhosProps {
  readonly visivel: boolean;
  readonly onFechar: () => void;
}

const ATALHOS = [
  { tecla: '←', descricao: 'Tópico anterior' },
  { tecla: '→', descricao: 'Próximo tópico' },
  { tecla: 'Esc', descricao: 'Voltar para ementa' },
  { tecla: 'B', descricao: 'Abrir/fechar barra lateral' },
  { tecla: '1–8', descricao: 'Expandir disciplina' },
  { tecla: 'E', descricao: 'Ir para exercícios' },
  { tecla: '?', descricao: 'Mostrar atalhos' },
] as const;

export function AjudaAtalhos({ visivel, onFechar }: AjudaAtalhosProps) {
  const tratarTecla = useCallback(
    (evento: KeyboardEvent) => {
      if (evento.key === 'Escape') {
        evento.preventDefault();
        evento.stopPropagation();
        onFechar();
      }
    },
    [onFechar],
  );

  useEffect(() => {
    if (!visivel) return;
    window.addEventListener('keydown', tratarTecla, true);
    return () => window.removeEventListener('keydown', tratarTecla, true);
  }, [visivel, tratarTecla]);

  if (!visivel) return null;

  return (
    <div className={styles.backdrop} onClick={onFechar} role="presentation">
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-label="Atalhos de teclado"
      >
        <header className={styles.cabecalho}>
          <h2 className={styles.titulo}>⌨️ Atalhos de Teclado</h2>
          <button
            className={styles.botaoFechar}
            onClick={onFechar}
            aria-label="Fechar"
            type="button"
          >
            ✕
          </button>
        </header>

        <ul className={styles.lista}>
          {ATALHOS.map((atalho) => (
            <li key={atalho.tecla} className={styles.item}>
              <kbd className={styles.tecla}>{atalho.tecla}</kbd>
              <span className={styles.descricao}>{atalho.descricao}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
