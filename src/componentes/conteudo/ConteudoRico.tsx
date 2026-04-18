import { useMemo } from 'react';
import { FormulaMatematica } from './FormulaMatematica';
import styles from './ConteudoRico.module.css';

/* ─── Parser Markdown → React ─── */

type NodoMd =
  | { tipo: 'paragrafo'; linhas: string[] }
  | { tipo: 'heading'; nivel: 2 | 3 | 4; texto: string }
  | { tipo: 'lista'; ordenada: boolean; itens: string[] }
  | { tipo: 'tabela'; cabecalho: string[]; linhas: string[][] }
  | { tipo: 'callout'; icone: string; corpo: string[] }
  | { tipo: 'separador' };

const ICONES_CALLOUT = [
  '⚠️',
  '⚠',
  '💡',
  '📌',
  '🔑',
  '✅',
  '❌',
  '🧠',
  '📐',
  '🔬',
  '⚡',
  '🌍',
  '📝',
  '🧪',
  '🔥',
  '💬',
  '📖',
  '🎯',
  '✨',
  '🧬',
  '🔭',
  '💊',
  '🏛️',
  '🗺️',
] as const;

function extrairIconeCallout(texto: string): { icone: string; corpo: string } {
  const iconeEncontrado = ICONES_CALLOUT.find((icone) => texto.startsWith(icone));

  if (!iconeEncontrado) {
    return { icone: '💡', corpo: texto };
  }

  return {
    icone: iconeEncontrado,
    corpo: texto.slice(iconeEncontrado.length).trimStart(),
  };
}

function parsearBlocos(markdown: string): NodoMd[] {
  const linhas = markdown.split('\n');
  const blocos: NodoMd[] = [];
  let i = 0;

  while (i < linhas.length) {
    const linha = linhas[i];
    const trimmed = linha.trimStart();

    // Linha vazia
    if (trimmed === '') { i++; continue; }

    // Separador
    if (/^---+$/.test(trimmed)) {
      blocos.push({ tipo: 'separador' });
      i++; continue;
    }

    // Headings
    const matchH = trimmed.match(/^(#{2,4})\s+(.+)$/);
    if (matchH) {
      blocos.push({ tipo: 'heading', nivel: matchH[1].length as 2 | 3 | 4, texto: matchH[2] });
      i++; continue;
    }

    // Tabela (| col1 | col2 |)
    if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
      const linhasTabela: string[] = [];
      while (i < linhas.length && linhas[i].trim().startsWith('|') && linhas[i].trim().endsWith('|')) {
        linhasTabela.push(linhas[i].trim());
        i++;
      }
      if (linhasTabela.length >= 2) {
        const parsearCelulas = (l: string) =>
          l.slice(1, -1).split('|').map(c => c.trim());
        const cabecalho = parsearCelulas(linhasTabela[0]);
        // Pular linha separadora (|---|---|)
        const inicio = linhasTabela[1].includes('---') ? 2 : 1;
        const corpo = linhasTabela.slice(inicio).map(parsearCelulas);
        blocos.push({ tipo: 'tabela', cabecalho, linhas: corpo });
      }
      continue;
    }

    // Callout / Blockquote (> ⚠️ texto ou > 💡 texto)
    if (trimmed.startsWith('>')) {
      const linhasCallout: string[] = [];
      while (i < linhas.length && linhas[i].trimStart().startsWith('>')) {
        linhasCallout.push(linhas[i].trimStart().replace(/^>\s?/, ''));
        i++;
      }
      const primeira = linhasCallout[0] ?? '';
      const { icone, corpo } = extrairIconeCallout(primeira);
      linhasCallout[0] = corpo;
      blocos.push({ tipo: 'callout', icone, corpo: linhasCallout });
      continue;
    }

    // Lista não ordenada (- item ou * item)
    if (/^[-*•]\s/.test(trimmed)) {
      const itens: string[] = [];
      while (i < linhas.length && /^[-*•]\s/.test(linhas[i].trimStart())) {
        itens.push(linhas[i].trimStart().replace(/^[-*•]\s+/, ''));
        i++;
      }
      blocos.push({ tipo: 'lista', ordenada: false, itens });
      continue;
    }

    // Lista ordenada (1. item)
    if (/^\d+\.\s/.test(trimmed)) {
      const itens: string[] = [];
      while (i < linhas.length && /^\d+\.\s/.test(linhas[i].trimStart())) {
        itens.push(linhas[i].trimStart().replace(/^\d+\.\s+/, ''));
        i++;
      }
      blocos.push({ tipo: 'lista', ordenada: true, itens });
      continue;
    }

    // Parágrafo (linhas contíguas)
    const linhasParagrafo: string[] = [];
    while (
      i < linhas.length &&
      linhas[i].trim() !== '' &&
      !linhas[i].trimStart().startsWith('#') &&
      !linhas[i].trimStart().startsWith('>') &&
      !linhas[i].trimStart().startsWith('|') &&
      !/^[-*•]\s/.test(linhas[i].trimStart()) &&
      !/^\d+\.\s/.test(linhas[i].trimStart()) &&
      !/^---+$/.test(linhas[i].trimStart())
    ) {
      linhasParagrafo.push(linhas[i]);
      i++;
    }
    if (linhasParagrafo.length > 0) {
      blocos.push({ tipo: 'paragrafo', linhas: linhasParagrafo });
    }
  }

  return blocos;
}

/* ─── Inline rendering (bold, italic, KaTeX) ─── */

const REGEX_INLINE = /(\$\$[\s\S]+?\$\$|\$(?!\$)(?:[^$\\]|\\.)+\$|\*\*(?:[^*]|\*(?!\*))+\*\*|\*(?:[^*])+\*)/g;

function renderizarInline(texto: string): React.ReactNode[] {
  const partes: React.ReactNode[] = [];
  let ultimoIndice = 0;
  let chave = 0;

  for (const match of texto.matchAll(REGEX_INLINE)) {
    const inicio = match.index;
    if (inicio > ultimoIndice) {
      partes.push(texto.slice(ultimoIndice, inicio));
    }

    const trecho = match[0];
    if (trecho.startsWith('$$')) {
      partes.push(
        <FormulaMatematica key={chave++} formula={trecho.slice(2, -2).trim()} bloco />
      );
    } else if (trecho.startsWith('$')) {
      partes.push(
        <FormulaMatematica key={chave++} formula={trecho.slice(1, -1).trim()} />
      );
    } else if (trecho.startsWith('**')) {
      partes.push(<strong key={chave++}>{trecho.slice(2, -2)}</strong>);
    } else if (trecho.startsWith('*')) {
      partes.push(<em key={chave++}>{trecho.slice(1, -1)}</em>);
    }

    ultimoIndice = inicio + trecho.length;
  }

  if (ultimoIndice < texto.length) {
    partes.push(texto.slice(ultimoIndice));
  }

  return partes;
}

function Inline({ texto }: { readonly texto: string }) {
  const nodos = useMemo(() => renderizarInline(texto), [texto]);
  return <>{nodos}</>;
}

/* ─── Block renderers ─── */

function RenderizarBloco({ bloco, indice }: { readonly bloco: NodoMd; readonly indice: number }) {
  switch (bloco.tipo) {
    case 'heading': {
      const Tag = `h${bloco.nivel}` as const;
      return (
        <Tag key={indice} className={styles[`h${bloco.nivel}`]}>
          <Inline texto={bloco.texto} />
        </Tag>
      );
    }

    case 'paragrafo':
      return (
        <p key={indice} className={styles.paragrafo}>
          <Inline texto={bloco.linhas.join('\n')} />
        </p>
      );

    case 'lista':
      if (bloco.ordenada) {
        return (
          <ol key={indice} className={styles.listaOrdenada}>
            {bloco.itens.map((item, i) => (
              <li key={i} className={styles.itemLista}><Inline texto={item} /></li>
            ))}
          </ol>
        );
      }
      return (
        <ul key={indice} className={styles.listaNaoOrdenada}>
          {bloco.itens.map((item, i) => (
            <li key={i} className={styles.itemLista}><Inline texto={item} /></li>
          ))}
        </ul>
      );

    case 'tabela':
      return (
        <div key={indice} className={styles.tabelaContainer}>
          <table className={styles.tabela}>
            <thead>
              <tr>
                {bloco.cabecalho.map((cel, i) => (
                  <th key={i} className={styles.tabelaCabecalho}><Inline texto={cel} /></th>
                ))}
              </tr>
            </thead>
            <tbody>
              {bloco.linhas.map((linha, li) => (
                <tr key={li}>
                  {linha.map((cel, ci) => (
                    <td key={ci} className={styles.tabelaCelula}><Inline texto={cel} /></td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case 'callout':
      return (
        <aside key={indice} className={styles.callout}>
          <span className={styles.calloutIcone}>{bloco.icone}</span>
          <div className={styles.calloutCorpo}>
            {bloco.corpo.map((linha, i) => (
              <p key={i}><Inline texto={linha} /></p>
            ))}
          </div>
        </aside>
      );

    case 'separador':
      return <hr key={indice} className={styles.separador} />;
  }
}

/* ─── Componente principal ─── */

interface ConteudoRicoProps {
  readonly markdown: string;
  readonly className?: string;
}

export function ConteudoRico({ markdown, className }: ConteudoRicoProps) {
  const blocos = useMemo(() => parsearBlocos(markdown), [markdown]);

  return (
    <div className={`${styles.conteudoRico} ${className ?? ''}`}>
      {blocos.map((bloco, i) => (
        <RenderizarBloco key={i} bloco={bloco} indice={i} />
      ))}
    </div>
  );
}
