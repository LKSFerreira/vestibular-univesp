import { useState } from 'react';

import styles from './DiagramaCelula.module.css';

/* ─── Dados das Organelas ─── */

interface Organela {
  id: string;
  nome: string;
  funcao: string;
  dica: string;
  cor: string;
}

const ORGANELAS: Organela[] = [
  {
    id: 'membrana',
    nome: 'Membrana Plasmática',
    funcao:
      'Controla a entrada e saída de substâncias (permeabilidade seletiva).',
    dica: 'Modelo mosaico fluido: bicamada de fosfolipídios com proteínas inseridas.',
    cor: 'var(--cor-primaria-400)',
  },
  {
    id: 'nucleo',
    nome: 'Núcleo',
    funcao:
      'Contém o DNA e controla as atividades celulares. É o "cérebro" da célula.',
    dica: 'O núcleo é delimitado por dupla membrana (carioteca) com poros nucleares.',
    cor: 'var(--cor-primaria-600)',
  },
  {
    id: 'mitocondria',
    nome: 'Mitocôndria',
    funcao:
      'Responsável pela respiração celular aeróbica, produzindo ATP (energia).',
    dica: 'Possui DNA próprio e dupla membrana. A membrana interna forma as cristas mitocondriais.',
    cor: 'var(--cor-alerta-400)',
  },
  {
    id: 'rer',
    nome: 'Retículo Endoplasmático Rugoso',
    funcao:
      'Síntese de proteínas. Possui ribossomos aderidos à sua superfície.',
    dica: 'Também chamado de retículo granular. Ligado à produção e transporte de proteínas.',
    cor: 'var(--cor-acento-400)',
  },
  {
    id: 'rel',
    nome: 'Retículo Endoplasmático Liso',
    funcao: 'Síntese de lipídios e detoxificação celular.',
    dica: 'Não possui ribossomos. Abundante em células do fígado (desintoxicação).',
    cor: 'hsl(160, 45%, 55%)',
  },
  {
    id: 'golgi',
    nome: 'Complexo de Golgi',
    funcao: 'Empacota, modifica e distribui proteínas e lipídios.',
    dica: '"Correio da célula" — recebe do RE, processa e envia para o destino correto.',
    cor: 'hsl(280, 60%, 55%)',
  },
  {
    id: 'lisossomo',
    nome: 'Lisossomo',
    funcao:
      'Digestão intracelular de materiais englobados ou organelas velhas.',
    dica: 'Contém enzimas digestivas em pH ácido. Originado do Complexo de Golgi.',
    cor: 'hsl(30, 80%, 55%)',
  },
  {
    id: 'ribossomo',
    nome: 'Ribossomo',
    funcao: 'Síntese de proteínas a partir do RNA mensageiro.',
    dica: 'Encontrado livre no citoplasma ou aderido ao RE rugoso. Não é delimitado por membrana.',
    cor: 'var(--cor-aviso-400)',
  },
  {
    id: 'centriolo',
    nome: 'Centríolo',
    funcao: 'Participa da divisão celular, organizando o fuso mitótico.',
    dica: 'Ausente em células vegetais superiores. Par de cilindros perpendiculares.',
    cor: 'hsl(190, 70%, 50%)',
  },
];

function buscarOrganela(id: string): Organela | undefined {
  return ORGANELAS.find((o) => o.id === id);
}

/* ─── Componente SVG da Célula ─── */

interface CelulaSVGProps {
  selecionada: string | null;
  hover: string | null;
  onSelect: (id: string) => void;
  onHoverIn: (id: string) => void;
  onHoverOut: () => void;
}

function obterClasse(
  id: string,
  selecionada: string | null,
  hover: string | null,
): string {
  const classes = [styles.organela];
  if (selecionada === id || hover === id) classes.push(styles.organelaSelecionada);
  return classes.join(' ');
}

function manipuladores(
  id: string,
  onSelect: (id: string) => void,
  onHoverIn: (id: string) => void,
  onHoverOut: () => void,
) {
  return {
    onClick: () => onSelect(id),
    onMouseEnter: () => onHoverIn(id),
    onMouseLeave: onHoverOut,
  };
}

/* ─── Label com leader line ─── */

interface LabelProps {
  texto: string;
  orgX: number;
  orgY: number;
  labelX: number;
  labelY: number;
  ancora?: 'start' | 'middle' | 'end';
}

function Label({ texto, orgX, orgY, labelX, labelY, ancora = 'start' }: LabelProps) {
  return (
    <>
      <line
        x1={orgX}
        y1={orgY}
        x2={labelX}
        y2={labelY}
        className={styles.labelLinha}
      />
      <text
        x={labelX + (ancora === 'end' ? -4 : 4)}
        y={labelY + 3}
        textAnchor={ancora}
        className={styles.labelTexto}
      >
        {texto}
      </text>
    </>
  );
}

function CelulaSVG({
  selecionada,
  hover,
  onSelect,
  onHoverIn,
  onHoverOut,
}: CelulaSVGProps) {
  const cls = (id: string) => obterClasse(id, selecionada, hover);
  const evt = (id: string) => manipuladores(id, onSelect, onHoverIn, onHoverOut);

  return (
    <svg viewBox="0 0 600 460" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagrama interativo de uma célula animal">
      <title>Diagrama de Célula Animal</title>

      {/* Citoplasma (preenchimento da célula) */}
      <ellipse cx={300} cy={230} rx={270} ry={200} fill="hsl(210, 30%, 14%)" />

      {/* Membrana Plasmática */}
      <ellipse
        cx={300}
        cy={230}
        rx={270}
        ry={200}
        fill="none"
        stroke="var(--cor-primaria-400)"
        strokeWidth={4}
        className={cls('membrana')}
        style={{ color: 'var(--cor-primaria-400)' }}
        {...evt('membrana')}
      />

      {/* RE Rugoso — wavy lines com dots, perto do núcleo */}
      <g
        className={cls('rer')}
        style={{ color: 'var(--cor-acento-400)' }}
        {...evt('rer')}
      >
        <path
          d="M 200 170 Q 190 155, 175 170 Q 160 185, 145 170 Q 130 155, 115 170"
          fill="none"
          stroke="var(--cor-acento-400)"
          strokeWidth={2.5}
        />
        <path
          d="M 200 185 Q 190 170, 175 185 Q 160 200, 145 185 Q 130 170, 115 185"
          fill="none"
          stroke="var(--cor-acento-400)"
          strokeWidth={2.5}
        />
        <path
          d="M 200 200 Q 190 185, 175 200 Q 160 215, 145 200 Q 130 185, 115 200"
          fill="none"
          stroke="var(--cor-acento-400)"
          strokeWidth={2.5}
        />
        {/* Ribossomos no RE rugoso */}
        {[
          [198, 170], [175, 158], [148, 170], [120, 158],
          [198, 185], [175, 173], [148, 185], [120, 173],
          [198, 200], [175, 188], [148, 200], [120, 188],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r={2} fill="var(--cor-acento-400)" />
        ))}
      </g>

      {/* RE Liso — wavy lines sem dots */}
      <g
        className={cls('rel')}
        style={{ color: 'hsl(160, 45%, 55%)' }}
        {...evt('rel')}
      >
        <path
          d="M 135 275 Q 122 260, 108 275 Q 94 290, 80 275"
          fill="none"
          stroke="hsl(160, 45%, 55%)"
          strokeWidth={2.5}
        />
        <path
          d="M 135 292 Q 122 277, 108 292 Q 94 307, 80 292"
          fill="none"
          stroke="hsl(160, 45%, 55%)"
          strokeWidth={2.5}
        />
        <path
          d="M 135 309 Q 122 294, 108 309 Q 94 324, 80 309"
          fill="none"
          stroke="hsl(160, 45%, 55%)"
          strokeWidth={2.5}
        />
      </g>

      {/* Complexo de Golgi — stacked curved lines */}
      <g
        className={cls('golgi')}
        style={{ color: 'hsl(280, 60%, 55%)' }}
        {...evt('golgi')}
      >
        {[-12, -4, 4, 12].map((offset, i) => (
          <path
            key={i}
            d={`M 410 ${215 + offset} Q 440 ${200 + offset}, 465 ${215 + offset} Q 490 ${230 + offset}, 510 ${215 + offset}`}
            fill="none"
            stroke="hsl(280, 60%, 55%)"
            strokeWidth={3}
            strokeLinecap="round"
          />
        ))}
        {/* Vesículas do Golgi */}
        <circle cx={415} cy={240} r={5} fill="hsl(280, 60%, 55%)" opacity={0.6} />
        <circle cx={505} cy={240} r={4} fill="hsl(280, 60%, 55%)" opacity={0.6} />
      </g>

      {/* Mitocôndrias (3 instâncias) */}
      {[
        { x: 430, y: 130, rot: -20 },
        { x: 170, y: 330, rot: 35 },
        { x: 460, y: 320, rot: -50 },
      ].map((m, i) => (
        <g
          key={i}
          transform={`translate(${m.x}, ${m.y}) rotate(${m.rot})`}
          className={cls('mitocondria')}
          style={{ color: 'var(--cor-alerta-400)' }}
          {...evt('mitocondria')}
        >
          {/* Outer membrane */}
          <ellipse cx={0} cy={0} rx={35} ry={16} fill="var(--cor-alerta-400)" opacity={0.25} stroke="var(--cor-alerta-400)" strokeWidth={2} />
          {/* Cristas mitocondriais */}
          {[-16, -6, 4, 14].map((cx, j) => (
            <line key={j} x1={cx} y1={-8} x2={cx} y2={4} stroke="var(--cor-alerta-400)" strokeWidth={1.5} opacity={0.5} />
          ))}
        </g>
      ))}

      {/* Lisossomos (3 instâncias) */}
      {[
        { cx: 380, cy: 295 },
        { cx: 230, cy: 280 },
        { cx: 435, cy: 270 },
      ].map((l, i) => (
        <circle
          key={i}
          cx={l.cx}
          cy={l.cy}
          r={12}
          fill="hsl(30, 80%, 55%)"
          opacity={0.35}
          stroke="hsl(30, 80%, 55%)"
          strokeWidth={2}
          className={cls('lisossomo')}
          style={{ color: 'hsl(30, 80%, 55%)' }}
          {...evt('lisossomo')}
        />
      ))}

      {/* Centríolos — par de cilindros */}
      <g
        className={cls('centriolo')}
        style={{ color: 'hsl(190, 70%, 50%)' }}
        {...evt('centriolo')}
      >
        {/* Cilindro 1 (vertical) */}
        <rect x={348} y={140} width={10} height={30} rx={3} fill="hsl(190, 70%, 50%)" opacity={0.5} stroke="hsl(190, 70%, 50%)" strokeWidth={1.5} />
        {[145, 152, 159, 166].map((y, i) => (
          <line key={i} x1={350} y1={y} x2={356} y2={y} stroke="hsl(190, 70%, 50%)" strokeWidth={1} opacity={0.8} />
        ))}
        {/* Cilindro 2 (horizontal) */}
        <rect x={340} y={157} width={30} height={10} rx={3} fill="hsl(190, 70%, 50%)" opacity={0.5} stroke="hsl(190, 70%, 50%)" strokeWidth={1.5} />
        {[347, 354, 361].map((x, i) => (
          <line key={i} x1={x} y1={159} x2={x} y2={165} stroke="hsl(190, 70%, 50%)" strokeWidth={1} opacity={0.8} />
        ))}
      </g>

      {/* Ribossomos — dots espalhados */}
      <g
        className={cls('ribossomo')}
        style={{ color: 'var(--cor-aviso-400)' }}
        {...evt('ribossomo')}
      >
        {[
          [220, 230], [250, 310], [200, 260], [350, 330],
          [380, 180], [480, 250], [160, 200], [490, 180],
          [320, 360], [140, 310], [400, 360], [500, 300],
          [260, 140], [360, 380], [190, 380], [520, 230],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r={3} fill="var(--cor-aviso-400)" opacity={0.7} />
        ))}
      </g>

      {/* Núcleo */}
      <g
        className={cls('nucleo')}
        style={{ color: 'var(--cor-primaria-600)' }}
        {...evt('nucleo')}
      >
        {/* Carioteca (dupla membrana) */}
        <circle cx={300} cy={230} r={68} fill="var(--cor-primaria-600)" opacity={0.15} stroke="var(--cor-primaria-600)" strokeWidth={3} />
        <circle cx={300} cy={230} r={62} fill="none" stroke="var(--cor-primaria-600)" strokeWidth={1.5} strokeDasharray="4 3" />
        {/* Nucléolo */}
        <circle cx={310} cy={225} r={18} fill="var(--cor-primaria-600)" opacity={0.35} />
        {/* Poros nucleares */}
        {[0, 60, 120, 180, 240, 300].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          return (
            <circle key={i} cx={300 + 68 * Math.cos(rad)} cy={230 + 68 * Math.sin(rad)} r={3} fill="hsl(210, 30%, 14%)" stroke="var(--cor-primaria-600)" strokeWidth={1.5} />
          );
        })}
      </g>

      {/* ─── Labels com leader lines ─── */}
      <Label texto="Membrana" orgX={300} orgY={32} labelX={300} labelY={18} ancora="middle" />
      <Label texto="Núcleo" orgX={300} orgY={165} labelX={300} labelY={150} ancora="middle" />
      <Label texto="Mitocôndria" orgX={465} orgY={130} labelX={540} labelY={80} ancora="end" />
      <Label texto="RE Rugoso" orgX={115} orgY={168} labelX={40} labelY={140} />
      <Label texto="RE Liso" orgX={80} orgY={275} labelX={32} labelY={255} />
      <Label texto="Golgi" orgX={510} orgY={215} labelX={555} labelY={200} ancora="end" />
      <Label texto="Lisossomo" orgX={380} orgY={295} labelX={535} labelY={340} ancora="end" />
      <Label texto="Ribossomo" orgX={490} orgY={180} labelX={555} labelY={160} ancora="end" />
      <Label texto="Centríolo" orgX={370} orgY={155} labelX={410} labelY={120} ancora="end" />
    </svg>
  );
}

/* ─── Painel de Detalhes ─── */

interface PainelDetalheProps {
  organela: Organela;
  onFechar: () => void;
}

function PainelDetalhe({ organela, onFechar }: PainelDetalheProps) {
  return (
    <div className={styles.painelDetalhe} key={organela.id}>
      <div className={styles.painelCabecalho}>
        <span className={styles.painelNome}>{organela.nome}</span>
        <button
          type="button"
          className={styles.painelFechar}
          onClick={onFechar}
          aria-label="Fechar painel"
        >
          ✕
        </button>
      </div>

      <div className={styles.painelIndicadorCor} style={{ background: organela.cor }} />

      <div className={styles.painelSecao}>
        <span className={styles.painelRotulo}>Função</span>
        <p className={styles.painelTexto}>{organela.funcao}</p>
      </div>

      <div className={styles.painelSecao}>
        <span className={styles.painelRotulo}>💡 Dica para o vestibular</span>
        <p className={styles.painelDica}>{organela.dica}</p>
      </div>
    </div>
  );
}

/* ─── Componente Principal ─── */

export function DiagramaCelula() {
  const [selecionadaId, setSelecionadaId] = useState<string | null>(null);
  const [hoverId, setHoverId] = useState<string | null>(null);

  const organelaSelecionada = selecionadaId
    ? buscarOrganela(selecionadaId) ?? null
    : null;

  return (
    <div className={styles.container}>
      <h2 className={styles.titulo}>🔬 Célula Animal — Diagrama Interativo</h2>

      <div className={styles.diagramaWrapper}>
        <div className={styles.svgContainer}>
          <CelulaSVG
            selecionada={selecionadaId}
            hover={hoverId}
            onSelect={(id) => setSelecionadaId((prev) => (prev === id ? null : id))}
            onHoverIn={setHoverId}
            onHoverOut={() => setHoverId(null)}
          />
        </div>

        {organelaSelecionada ? (
          <PainelDetalhe
            organela={organelaSelecionada}
            onFechar={() => setSelecionadaId(null)}
          />
        ) : (
          <div className={styles.painelVazio}>
            Clique em uma organela no diagrama para ver detalhes e dicas para o vestibular.
          </div>
        )}
      </div>
    </div>
  );
}
