import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { EMENTA_VESTIBULAR } from '@conteudo/ementa';
import { useNavegacaoStore } from '@stores/navegacaoStore';
import { IndicadorProgresso } from '@componentes/conteudo/IndicadorProgresso';
import type { Disciplina, Topico } from '@conteudo/tipos';
import styles from './PainelEmenta.module.css';

function IconeRecolher() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="1" width="14" height="14" rx="2" />
      <line x1="6" y1="1" x2="6" y2="15" />
      <polyline points="10,6 8,8 10,10" />
    </svg>
  );
}

export function PainelEmenta() {
  const prefereMovimentoReduzido = useReducedMotion();
  const duracao = prefereMovimentoReduzido ? 0 : 0.25;

  const alternarPainel = useNavegacaoStore((estado) => estado.alternarPainelEsquerdo);
  const disciplinaExpandidaId = useNavegacaoStore((estado) => estado.disciplinaExpandidaId);
  const expandirDisciplina = useNavegacaoStore((estado) => estado.expandirDisciplina);
  const topicoAtivo = useNavegacaoStore((estado) => estado.topicoAtivo);
  const selecionarTopico = useNavegacaoStore((estado) => estado.selecionarTopico);
  const irParaEmenta = useNavegacaoStore((estado) => estado.irParaEmenta);

  function tratarCliqueTopico(disciplina: Disciplina, topico: Topico) {
    if (topico.emBreve) return;
    selecionarTopico(disciplina.id, topico.id);
  }

  function verificarTopicoAtivo(disciplinaId: string, topicoId: string): boolean {
    if (!topicoAtivo) return false;
    return topicoAtivo.disciplinaId === disciplinaId && topicoAtivo.topicoId === topicoId;
  }

  return (
    <nav className={styles.container} aria-label="Ementa do vestibular">
      <header className={styles.cabecalho}>
        <button
          className={styles.tituloLink}
          onClick={irParaEmenta}
          aria-label="Voltar para a ementa"
        >
          📋 Ementa
        </button>
        <button
          className={styles.botaoRecolher}
          onClick={alternarPainel}
          aria-label="Recolher painel lateral"
        >
          <IconeRecolher />
        </button>
      </header>

      <div className={styles.listaDisciplinas}>
        {EMENTA_VESTIBULAR.disciplinas.map((disciplina) => {
          const expandida = disciplinaExpandidaId === disciplina.id;

          return (
            <div key={disciplina.id} className={styles.disciplina}>
              <button
                className={styles.botaoDisciplina}
                data-expandida={expandida}
                onClick={() => expandirDisciplina(disciplina.id)}
                aria-expanded={expandida}
              >
                <span className={styles.icone}>{disciplina.icone}</span>
                {disciplina.titulo}
                <span className={styles.seta} data-expandida={expandida}>
                  ▶
                </span>
              </button>

              <AnimatePresence initial={false}>
                {expandida && (
                  <motion.div
                    className={styles.listaTopicos}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: duracao }}
                    style={{ overflow: 'hidden' }}
                  >
                    {disciplina.topicos.map((topico) => (
                      <button
                        key={topico.id}
                        className={styles.botaoTopico}
                        data-ativo={verificarTopicoAtivo(disciplina.id, topico.id)}
                        data-em-breve={!!topico.emBreve}
                        onClick={() => tratarCliqueTopico(disciplina, topico)}
                        disabled={!!topico.emBreve}
                      >
                        {topico.titulo}
                        {topico.emBreve ? (
                          <span className={styles.badgeEmBreve}>em breve</span>
                        ) : (
                          <IndicadorProgresso topicoId={topico.id} />
                        )}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </nav>
  );
}
