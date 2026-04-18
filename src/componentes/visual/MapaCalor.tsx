import { useEffect, useMemo, useRef } from 'react';
import * as d3 from 'd3';

import { EMENTA_VESTIBULAR } from '@conteudo/ementa';
import { useProgressoStore } from '@stores/progressoStore';
import type { NivelDominio } from '@dominio/grafo/tipos';
import styles from './MapaCalor.module.css';

function obterCorCSS(variavel: string): string {
  return getComputedStyle(document.documentElement).getPropertyValue(variavel).trim();
}

const COR_NIVEL_VARIAVEIS: Record<NivelDominio, string> = {
  nao_iniciado: '--cor-texto-terciario',
  fragil: '--cor-alerta-400',
  em_progresso: '--cor-aviso-400',
  dominado: '--cor-acento-400',
};

const ROTULO_NIVEL: Record<NivelDominio, string> = {
  nao_iniciado: 'Não iniciado',
  fragil: 'Frágil',
  em_progresso: 'Em progresso',
  dominado: 'Dominado',
};

interface CelulaTopico {
  readonly topicoId: string;
  readonly titulo: string;
  readonly disciplinaIcone: string;
  readonly disciplinaTitulo: string;
  readonly nivel: NivelDominio;
  readonly linha: number;
  readonly coluna: number;
}

export function MapaCalor() {
  const svgRef = useRef<SVGSVGElement>(null);
  const obterNivel = useProgressoStore((estado) => estado.obterNivelTopico);

  const { celulas, maxLinhas, totalColunas } = useMemo(() => {
    const celulasCalculadas: CelulaTopico[] = [];
    let colunaAtual = 0;

    EMENTA_VESTIBULAR.disciplinas.forEach((disciplina) => {
      const topicosAtivos = disciplina.topicos.filter((t) => !t.emBreve);
      topicosAtivos.forEach((topico, indiceLinha) => {
        celulasCalculadas.push({
          topicoId: topico.id,
          titulo: topico.titulo,
          disciplinaIcone: disciplina.icone,
          disciplinaTitulo: disciplina.titulo,
          nivel: obterNivel(topico.id),
          linha: indiceLinha,
          coluna: colunaAtual,
        });
      });
      colunaAtual++;
    });

    const maxLinhasCalculadas =
      celulasCalculadas.length > 0
        ? Math.max(...celulasCalculadas.map((celula) => celula.linha)) + 1
        : 0;

    return {
      celulas: celulasCalculadas,
      maxLinhas: maxLinhasCalculadas,
      totalColunas: colunaAtual,
    };
  }, [obterNivel]);

  useEffect(() => {
    if (!svgRef.current || celulas.length === 0) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const tamanhoCelula = 22;
    const espacoCelula = 3;
    const margemTopo = 28;
    const margemEsquerda = 8;

    const largura = margemEsquerda + totalColunas * (tamanhoCelula + espacoCelula);
    const altura = margemTopo + maxLinhas * (tamanhoCelula + espacoCelula);

    svg.attr('viewBox', `0 0 ${largura} ${altura}`);

    const corBorda = obterCorCSS('--cor-borda');

    const g = svg.append('g');

    // Cabeçalhos com ícones das disciplinas
    const iconesVistos = new Set<number>();
    celulas.forEach((c) => {
      if (iconesVistos.has(c.coluna)) return;
      iconesVistos.add(c.coluna);

      g.append('text')
        .attr('x', margemEsquerda + c.coluna * (tamanhoCelula + espacoCelula) + tamanhoCelula / 2)
        .attr('y', 16)
        .attr('text-anchor', 'middle')
        .attr('font-size', '12px')
        .text(c.disciplinaIcone);
    });

    // Células do heatmap
    celulas.forEach((c) => {
      const corFundo = obterCorCSS(COR_NIVEL_VARIAVEIS[c.nivel]);
      const opacidade = c.nivel === 'nao_iniciado' ? 0.15 : 0.7;

      const rect = g
        .append('rect')
        .attr('x', margemEsquerda + c.coluna * (tamanhoCelula + espacoCelula))
        .attr('y', margemTopo + c.linha * (tamanhoCelula + espacoCelula))
        .attr('width', tamanhoCelula)
        .attr('height', tamanhoCelula)
        .attr('rx', 3)
        .attr('fill', corFundo)
        .attr('opacity', opacidade)
        .attr('stroke', corBorda)
        .attr('stroke-width', 0.5)
        .style('cursor', 'default');

      // Tooltip via SVG title
      rect
        .append('title')
        .text(`${c.disciplinaTitulo} → ${c.titulo}\n${ROTULO_NIVEL[c.nivel]}`);
    });
  }, [celulas, maxLinhas, totalColunas]);

  return (
    <div className={styles.container}>
      <span className={styles.titulo}>🗺️ Mapa de Progresso</span>
      <div className={styles.svgContainer}>
        <svg ref={svgRef} width="100%" height="100%" />
      </div>
      <div className={styles.legenda}>
        {(Object.entries(ROTULO_NIVEL) as [NivelDominio, string][]).map(([nivel, rotulo]) => (
          <span key={nivel} className={styles.legendaItem}>
            <span
              className={styles.legendaCor}
              style={{
                background: `var(${COR_NIVEL_VARIAVEIS[nivel]})`,
                opacity: nivel === 'nao_iniciado' ? 0.3 : 0.85,
              }}
            />
            {rotulo}
          </span>
        ))}
      </div>
    </div>
  );
}
