import { useEffect } from 'react';
import { EMENTA_VESTIBULAR } from '@conteudo/ementa';
import { useNavegacaoStore } from '@stores/navegacaoStore';

const ELEMENTOS_TEXTO = new Set(['INPUT', 'TEXTAREA', 'SELECT']);

function estaDigitando(evento: KeyboardEvent): boolean {
  const alvo = evento.target as HTMLElement;
  return (
    ELEMENTOS_TEXTO.has(alvo.tagName) ||
    alvo.isContentEditable
  );
}

interface TopicoGlobal {
  readonly disciplinaId: string;
  readonly topicoId: string;
  readonly titulo: string;
}

function obterTopicosNavegaveis(): readonly TopicoGlobal[] {
  const topicos: TopicoGlobal[] = [];
  for (const disciplina of EMENTA_VESTIBULAR.disciplinas) {
    for (const topico of disciplina.topicos) {
      if (!topico.emBreve) {
        topicos.push({
          disciplinaId: disciplina.id,
          topicoId: topico.id,
          titulo: topico.titulo,
        });
      }
    }
  }
  return topicos;
}

export function useAtalhos(onAbrirAjuda: () => void): void {
  useEffect(() => {
    function tratarTecla(evento: KeyboardEvent) {
      if (estaDigitando(evento)) return;

      const {
        topicoAtivo,
        selecionarTopico,
        expandirDisciplina,
        irParaEmenta,
        alternarPainelEsquerdo,
        disciplinaExpandidaId,
      } = useNavegacaoStore.getState();

      const topicos = obterTopicosNavegaveis();

      switch (evento.key) {
        case 'ArrowLeft': {
          if (!topicoAtivo) return;
          const indice = topicos.findIndex(
            (t) => t.topicoId === topicoAtivo.topicoId && t.disciplinaId === topicoAtivo.disciplinaId,
          );
          if (indice <= 0) return;
          const anterior = topicos[indice - 1];
          evento.preventDefault();
          if (anterior.disciplinaId !== topicoAtivo.disciplinaId) {
            expandirDisciplina(anterior.disciplinaId);
          }
          selecionarTopico(anterior.disciplinaId, anterior.topicoId);
          break;
        }

        case 'ArrowRight': {
          if (!topicoAtivo) return;
          const indice = topicos.findIndex(
            (t) => t.topicoId === topicoAtivo.topicoId && t.disciplinaId === topicoAtivo.disciplinaId,
          );
          if (indice < 0 || indice >= topicos.length - 1) return;
          const proximo = topicos[indice + 1];
          evento.preventDefault();
          if (proximo.disciplinaId !== topicoAtivo.disciplinaId) {
            expandirDisciplina(proximo.disciplinaId);
          }
          selecionarTopico(proximo.disciplinaId, proximo.topicoId);
          break;
        }

        case 'Escape': {
          evento.preventDefault();
          irParaEmenta();
          break;
        }

        case 'b':
        case 'B': {
          evento.preventDefault();
          alternarPainelEsquerdo();
          break;
        }

        case 'e':
        case 'E': {
          evento.preventDefault();
          const secao = document.getElementById('secao-exercicios');
          secao?.scrollIntoView({ behavior: 'smooth' });
          break;
        }

        case '?': {
          evento.preventDefault();
          onAbrirAjuda();
          break;
        }

        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8': {
          const indice = Number(evento.key) - 1;
          const disciplinas = EMENTA_VESTIBULAR.disciplinas;
          if (indice < disciplinas.length) {
            evento.preventDefault();
            const disciplina = disciplinas[indice];
            if (disciplinaExpandidaId !== disciplina.id) {
              expandirDisciplina(disciplina.id);
            }
          }
          break;
        }
      }
    }

    window.addEventListener('keydown', tratarTecla);
    return () => window.removeEventListener('keydown', tratarTecla);
  }, [onAbrirAjuda]);
}
