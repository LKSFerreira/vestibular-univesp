import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

import { EMENTA_VESTIBULAR } from '@conteudo/ementa';
import { useProgressoStore } from '@stores/progressoStore';
import type { NivelDominio } from '@dominio/grafo/tipos';
import styles from './GraficoRadar.module.css';

const VALOR_NIVEL: Record<NivelDominio, number> = {
  nao_iniciado: 0,
  fragil: 0.33,
  em_progresso: 0.66,
  dominado: 1,
};

function obterCorCSS(variavel: string): string {
  return getComputedStyle(document.documentElement).getPropertyValue(variavel).trim();
}

export function GraficoRadar() {
  const svgRef = useRef<SVGSVGElement>(null);
  const obterNivel = useProgressoStore((estado) => estado.obterNivelTopico);

  const disciplinas = EMENTA_VESTIBULAR.disciplinas;

  const dados = disciplinas.map((d) => {
    const topicosAtivos = d.topicos.filter((t) => !t.emBreve);
    if (topicosAtivos.length === 0) return { nome: d.titulo, icone: d.icone, valor: 0 };

    const somaValores = topicosAtivos.reduce(
      (acc, t) => acc + VALOR_NIVEL[obterNivel(t.id)],
      0,
    );
    return {
      nome: d.titulo,
      icone: d.icone,
      valor: somaValores / topicosAtivos.length,
    };
  });

  const todoZerado = dados.every((d) => d.valor === 0);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const largura = 300;
    const altura = 300;
    const margem = 60;
    const raio = Math.min(largura, altura) / 2 - margem;
    const centro = { x: largura / 2, y: altura / 2 };

    svg.attr('viewBox', `0 0 ${largura} ${altura}`);

    const corAcento = obterCorCSS('--cor-primaria-400');
    const corBorda = obterCorCSS('--cor-borda');
    const corTexto = obterCorCSS('--cor-texto-secundario');
    const corTextoTerciario = obterCorCSS('--cor-texto-terciario');

    const g = svg.append('g');

    const totalEixos = dados.length;
    const anguloFatia = (2 * Math.PI) / totalEixos;

    const niveis = [0.25, 0.5, 0.75, 1];
    niveis.forEach((nivel) => {
      const pontos = dados.map((_, i) => {
        const angulo = anguloFatia * i - Math.PI / 2;
        return [
          centro.x + raio * nivel * Math.cos(angulo),
          centro.y + raio * nivel * Math.sin(angulo),
        ];
      });
      g.append('polygon')
        .attr('points', pontos.map((p) => p.join(',')).join(' '))
        .attr('fill', 'none')
        .attr('stroke', corBorda)
        .attr('stroke-width', nivel === 1 ? 1.5 : 0.5)
        .attr('stroke-dasharray', nivel === 1 ? 'none' : '2,3');
    });

    dados.forEach((_, i) => {
      const angulo = anguloFatia * i - Math.PI / 2;
      g.append('line')
        .attr('x1', centro.x)
        .attr('y1', centro.y)
        .attr('x2', centro.x + raio * Math.cos(angulo))
        .attr('y2', centro.y + raio * Math.sin(angulo))
        .attr('stroke', corBorda)
        .attr('stroke-width', 0.5);
    });

    // Área de dados
    const pontosArea = dados.map((d, i) => {
      const angulo = anguloFatia * i - Math.PI / 2;
      const val = todoZerado ? 0.02 : d.valor;
      return [
        centro.x + raio * val * Math.cos(angulo),
        centro.y + raio * val * Math.sin(angulo),
      ];
    });

    g.append('polygon')
      .attr('points', pontosArea.map((p) => p.join(',')).join(' '))
      .attr('fill', corAcento)
      .attr('fill-opacity', todoZerado ? 0.05 : 0.2)
      .attr('stroke', corAcento)
      .attr('stroke-width', todoZerado ? 0.5 : 2)
      .attr('stroke-opacity', todoZerado ? 0.3 : 0.8);

    if (!todoZerado) {
      pontosArea.forEach((p) => {
        g.append('circle')
          .attr('cx', p[0])
          .attr('cy', p[1])
          .attr('r', 3)
          .attr('fill', corAcento);
      });
    }

    // Rótulos das disciplinas
    dados.forEach((d, i) => {
      const angulo = anguloFatia * i - Math.PI / 2;
      const distanciaRotulo = raio + 30;
      const x = centro.x + distanciaRotulo * Math.cos(angulo);
      const y = centro.y + distanciaRotulo * Math.sin(angulo);

      const textoRotulo = g
        .append('text')
        .attr('x', x)
        .attr('y', y)
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'middle')
        .attr('font-size', '9px')
        .attr('fill', todoZerado ? corTextoTerciario : corTexto);

      textoRotulo
        .append('tspan')
        .attr('x', x)
        .attr('dy', '-0.5em')
        .text(d.icone);

      textoRotulo
        .append('tspan')
        .attr('x', x)
        .attr('dy', '1.2em')
        .text(d.nome.length > 10 ? d.nome.slice(0, 9) + '…' : d.nome);
    });
  }, [dados, todoZerado]);

  return (
    <div className={styles.container}>
      <span className={styles.titulo}>🕸️ Domínio por Disciplina</span>
      <div className={styles.svgContainer}>
        <svg ref={svgRef} width="100%" height="100%" />
      </div>
    </div>
  );
}
