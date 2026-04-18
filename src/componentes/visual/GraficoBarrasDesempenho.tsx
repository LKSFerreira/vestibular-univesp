import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

import { useProgressoStore } from '@stores/progressoStore';
import styles from './GraficoBarrasDesempenho.module.css';

function obterCorCSS(variavel: string): string {
  return getComputedStyle(document.documentElement).getPropertyValue(variavel).trim();
}

interface GraficoBarrasDesempenhoProps {
  readonly topicoId: string;
  readonly topicoTitulo: string;
}

export function GraficoBarrasDesempenho({ topicoId, topicoTitulo }: GraficoBarrasDesempenhoProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const exerciciosRespondidos = useProgressoStore((estado) => estado.exerciciosRespondidos);

  const exercicio = exerciciosRespondidos[topicoId];
  const corretas = exercicio?.corretas ?? 0;
  const total = exercicio?.total ?? 0;
  const incorretas = total - corretas;

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const corAcerto = obterCorCSS('--cor-acento-400');
    const corErro = obterCorCSS('--cor-alerta-400');
    const corTexto = obterCorCSS('--cor-texto-secundario');
    const corTextoTerciario = obterCorCSS('--cor-texto-terciario');
    const corBorda = obterCorCSS('--cor-borda');

    const largura = 340;
    const altura = 140;
    const margemEsquerda = 80;
    const margemDireita = 50;
    const margemTopo = 10;
    const margemBase = 10;

    svg.attr('viewBox', `0 0 ${largura} ${altura}`);

    const dados = [
      { rotulo: 'Corretas', valor: corretas, cor: corAcerto },
      { rotulo: 'Incorretas', valor: incorretas, cor: corErro },
    ];

    const areaUtil = largura - margemEsquerda - margemDireita;
    const alturaUtil = altura - margemTopo - margemBase;
    const alturaBarra = Math.min(30, alturaUtil / dados.length - 10);

    const escalaX = d3
      .scaleLinear()
      .domain([0, Math.max(total, 1)])
      .range([0, areaUtil]);

    const escalaY = d3
      .scaleBand<number>()
      .domain(dados.map((_, i) => i))
      .range([margemTopo, margemTopo + alturaUtil])
      .padding(0.4);

    const g = svg.append('g');

    // Linha de base
    g.append('line')
      .attr('x1', margemEsquerda)
      .attr('y1', margemTopo)
      .attr('x2', margemEsquerda)
      .attr('y2', margemTopo + alturaUtil)
      .attr('stroke', corBorda)
      .attr('stroke-width', 1);

    // Barras
    dados.forEach((d, i) => {
      const y = escalaY(i)!;
      const larguraBarra = escalaX(d.valor);

      // Rótulo
      g.append('text')
        .attr('x', margemEsquerda - 8)
        .attr('y', y + alturaBarra / 2)
        .attr('text-anchor', 'end')
        .attr('dominant-baseline', 'middle')
        .attr('font-size', '11px')
        .attr('fill', corTexto)
        .text(d.rotulo);

      // Barra de fundo
      g.append('rect')
        .attr('x', margemEsquerda)
        .attr('y', y)
        .attr('width', areaUtil)
        .attr('height', alturaBarra)
        .attr('rx', 3)
        .attr('fill', corBorda)
        .attr('opacity', 0.3);

      // Barra de valor
      if (d.valor > 0) {
        g.append('rect')
          .attr('x', margemEsquerda)
          .attr('y', y)
          .attr('width', larguraBarra)
          .attr('height', alturaBarra)
          .attr('rx', 3)
          .attr('fill', d.cor)
          .attr('opacity', 0.85);
      }

      // Valor numérico
      g.append('text')
        .attr('x', margemEsquerda + larguraBarra + 8)
        .attr('y', y + alturaBarra / 2)
        .attr('dominant-baseline', 'middle')
        .attr('font-size', '12px')
        .attr('font-weight', '600')
        .attr('fill', d.valor > 0 ? d.cor : corTextoTerciario)
        .text(d.valor);
    });
  }, [corretas, incorretas, total]);

  if (total === 0) {
    return (
      <div className={styles.container}>
        <span className={styles.titulo}>📊 Desempenho: {topicoTitulo}</span>
        <div className={styles.estadoVazio}>
          Nenhum exercício respondido neste tópico ainda.
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <span className={styles.titulo}>📊 Desempenho: {topicoTitulo}</span>
      <div className={styles.svgContainer}>
        <svg ref={svgRef} width="100%" height="100%" />
      </div>
    </div>
  );
}
