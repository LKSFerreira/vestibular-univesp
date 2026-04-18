import katex from 'katex';
import 'katex/dist/katex.min.css';
import { useMemo } from 'react';
import styles from './FormulaMatematica.module.css';

interface FormulaMatematicaProps {
  readonly formula: string;
  readonly bloco?: boolean;
}

function renderizarKatex(formula: string, displayMode: boolean): string {
  return katex.renderToString(formula, {
    throwOnError: false,
    displayMode,
  });
}

export function FormulaMatematica({ formula, bloco = false }: FormulaMatematicaProps) {
  const html = useMemo(() => renderizarKatex(formula, bloco), [formula, bloco]);

  return (
    <span
      className={bloco ? styles.formulaBloco : styles.formulaInline}
      dangerouslySetInnerHTML={{ __html: html }}
      role="math"
      aria-label={formula}
    />
  );
}

interface SegmentoTexto {
  readonly tipo: 'texto' | 'formulaBloco' | 'formulaInline';
  readonly conteudo: string;
}

const REGEX_FORMULAS = /(\$\$[\s\S]+?\$\$|\$(?!\$)(?:[^$\\]|\\.)+\$)/g;

function segmentarTexto(texto: string): readonly SegmentoTexto[] {
  const segmentos: SegmentoTexto[] = [];
  let ultimoIndice = 0;

  for (const match of texto.matchAll(REGEX_FORMULAS)) {
    const inicio = match.index;
    if (inicio > ultimoIndice) {
      segmentos.push({ tipo: 'texto', conteudo: texto.slice(ultimoIndice, inicio) });
    }

    const trecho = match[0];
    if (trecho.startsWith('$$')) {
      segmentos.push({ tipo: 'formulaBloco', conteudo: trecho.slice(2, -2).trim() });
    } else {
      segmentos.push({ tipo: 'formulaInline', conteudo: trecho.slice(1, -1).trim() });
    }

    ultimoIndice = inicio + trecho.length;
  }

  if (ultimoIndice < texto.length) {
    segmentos.push({ tipo: 'texto', conteudo: texto.slice(ultimoIndice) });
  }

  return segmentos;
}

interface TextoComFormulasProps {
  readonly texto: string;
  readonly className?: string;
}

export function TextoComFormulas({ texto, className }: TextoComFormulasProps) {
  const segmentos = useMemo(() => segmentarTexto(texto), [texto]);

  return (
    <div className={className ?? styles.textoComFormulas}>
      {segmentos.map((segmento, indice) => {
        if (segmento.tipo === 'texto') {
          return <span key={indice}>{segmento.conteudo}</span>;
        }

        return (
          <FormulaMatematica
            key={indice}
            formula={segmento.conteudo}
            bloco={segmento.tipo === 'formulaBloco'}
          />
        );
      })}
    </div>
  );
}
