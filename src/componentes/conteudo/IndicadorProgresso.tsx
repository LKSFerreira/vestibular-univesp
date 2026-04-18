import { useProgressoStore } from '@stores/progressoStore';
import type { NivelDominio } from '@dominio/grafo/tipos';
import styles from './IndicadorProgresso.module.css';

interface IndicadorProgressoProps {
  readonly topicoId: string;
}

const ROTULO_NIVEL: Record<NivelDominio, string> = {
  nao_iniciado: 'Não iniciado',
  fragil: 'Frágil',
  em_progresso: 'Em progresso',
  dominado: 'Dominado',
};

export function IndicadorProgresso({ topicoId }: IndicadorProgressoProps) {
  const nivel = useProgressoStore((estado) => estado.obterNivelTopico(topicoId));
  const exercicios = useProgressoStore((estado) => estado.exerciciosRespondidos[topicoId]);

  return (
    <span className={styles.indicador} data-nivel={nivel}>
      <span className={styles.ponto} data-nivel={nivel} />
      <span className={styles.rotulo}>{ROTULO_NIVEL[nivel]}</span>
      {exercicios && exercicios.total > 0 && (
        <span className={styles.contagem}>
          {exercicios.corretas}/{exercicios.total}
        </span>
      )}
    </span>
  );
}
