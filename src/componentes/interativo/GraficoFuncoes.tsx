import { useCallback, useState } from 'react';
import styles from './GraficoFuncoes.module.css';

/* ─── Tipos ─── */

type TipoFuncao = 'linear' | 'quadratica';

interface Ponto {
  readonly x: number;
  readonly y: number;
}

interface EstadoGrafico {
  readonly tipo: TipoFuncao;
  readonly a: number;
  readonly b: number;
  readonly c: number;
}

const ESTADO_INICIAL: EstadoGrafico = {
  tipo: 'quadratica',
  a: 1,
  b: 0,
  c: -4,
};

/* ─── Constantes do gráfico ─── */

const DOMINIO_MIN = -10;
const DOMINIO_MAX = 10;
const PASSO = 0.1;
const VIEW_MIN = -10.5;
const VIEW_SIZE = 21;

/* ─── Funções puras de cálculo ─── */

function calcularY(tipo: TipoFuncao, a: number, b: number, c: number, x: number): number {
  if (tipo === 'linear') return a * x + b;
  return a * x * x + b * x + c;
}

function gerarPontos(tipo: TipoFuncao, a: number, b: number, c: number): Ponto[] {
  const pontos: Ponto[] = [];
  for (let x = DOMINIO_MIN; x <= DOMINIO_MAX; x += PASSO) {
    const xArredondado = Math.round(x * 10) / 10;
    pontos.push({ x: xArredondado, y: calcularY(tipo, a, b, c, xArredondado) });
  }
  return pontos;
}

function calcularRaizesLinear(a: number, b: number): Ponto[] {
  if (a === 0) return [];
  const x = -b / a;
  return Math.abs(x) <= DOMINIO_MAX ? [{ x, y: 0 }] : [];
}

function calcularRaizesQuadratica(a: number, b: number, c: number): Ponto[] {
  if (a === 0) return calcularRaizesLinear(b, c);
  const delta = b * b - 4 * a * c;
  if (delta < 0) return [];
  if (delta === 0) {
    const x = -b / (2 * a);
    return Math.abs(x) <= DOMINIO_MAX ? [{ x, y: 0 }] : [];
  }
  const sqrtDelta = Math.sqrt(delta);
  const x1 = (-b + sqrtDelta) / (2 * a);
  const x2 = (-b - sqrtDelta) / (2 * a);
  return [x1, x2]
    .filter((x) => Math.abs(x) <= DOMINIO_MAX)
    .map((x) => ({ x, y: 0 }));
}

function calcularRaizes(tipo: TipoFuncao, a: number, b: number, c: number): Ponto[] {
  return tipo === 'linear' ? calcularRaizesLinear(a, b) : calcularRaizesQuadratica(a, b, c);
}

function calcularVertice(a: number, b: number, c: number): Ponto | null {
  if (a === 0) return null;
  const xv = -b / (2 * a);
  const yv = calcularY('quadratica', a, b, c, xv);
  return { x: xv, y: yv };
}

function pontosParaPath(pontos: Ponto[]): string {
  const visiveis = pontos.filter((p) => Math.abs(p.y) <= DOMINIO_MAX + 2);
  if (visiveis.length === 0) return '';

  const segmentos: string[] = [];
  let emSegmento = false;

  for (const p of pontos) {
    const yClamp = Math.max(-DOMINIO_MAX - 2, Math.min(DOMINIO_MAX + 2, p.y));
    if (!emSegmento) {
      segmentos.push(`M ${p.x} ${yClamp}`);
      emSegmento = true;
    } else {
      segmentos.push(`L ${p.x} ${yClamp}`);
    }
  }
  return segmentos.join(' ');
}

function formatarNumero(n: number): string {
  return Number.isInteger(n) ? n.toString() : n.toFixed(1);
}

function montarEquacao(tipo: TipoFuncao, a: number, b: number, c: number): string {
  if (tipo === 'linear') {
    const parteA = a === 0 ? '' : `${a === 1 ? '' : a === -1 ? '-' : formatarNumero(a)}x`;
    const parteB =
      b === 0
        ? parteA === ''
          ? '0'
          : ''
        : `${b > 0 && parteA ? ' + ' : b < 0 && parteA ? ' − ' : ''}${parteA && b < 0 ? formatarNumero(Math.abs(b)) : formatarNumero(b)}`;
    const expressao = `${parteA}${parteB}`;
    return expressao === '' ? 'f(x) = 0' : `f(x) = ${expressao}`;
  }

  let eq = 'f(x) = ';
  if (a !== 0) {
    const coefA = a === 1 ? '' : a === -1 ? '-' : formatarNumero(a);
    eq += `${coefA}x²`;
  }
  if (b !== 0) {
    const sinal = b > 0 && a !== 0 ? ' + ' : b < 0 && a !== 0 ? ' − ' : '';
    const coefB = Math.abs(b) === 1 ? '' : formatarNumero(Math.abs(b));
    const bVal = a !== 0 ? `${sinal}${coefB}x` : `${formatarNumero(b)}x`;
    eq += bVal;
  }
  if (c !== 0) {
    const temAnterior = a !== 0 || b !== 0;
    const sinal = c > 0 && temAnterior ? ' + ' : c < 0 && temAnterior ? ' − ' : '';
    eq += temAnterior ? `${sinal}${formatarNumero(Math.abs(c))}` : formatarNumero(c);
  }
  if (a === 0 && b === 0 && c === 0) eq += '0';
  return eq;
}

/* ─── Subcomponentes SVG ─── */

function Grade() {
  const linhas: React.ReactElement[] = [];
  for (let i = DOMINIO_MIN; i <= DOMINIO_MAX; i++) {
    if (i === 0) continue;
    linhas.push(
      <line
        key={`gv-${i}`}
        x1={i}
        y1={DOMINIO_MIN}
        x2={i}
        y2={DOMINIO_MAX}
        stroke="var(--cor-borda)"
        strokeWidth={0.04}
        strokeOpacity={0.4}
      />,
      <line
        key={`gh-${i}`}
        x1={DOMINIO_MIN}
        y1={i}
        x2={DOMINIO_MAX}
        y2={i}
        stroke="var(--cor-borda)"
        strokeWidth={0.04}
        strokeOpacity={0.4}
      />,
    );
  }
  return <g aria-hidden="true">{linhas}</g>;
}

function Eixos() {
  const marcas: React.ReactElement[] = [];
  for (let i = DOMINIO_MIN; i <= DOMINIO_MAX; i++) {
    if (i === 0) continue;
    if (i % 2 === 0) {
      marcas.push(
        <text
          key={`lx-${i}`}
          x={i}
          y={0.6}
          textAnchor="middle"
          fontSize={0.4}
          fill="var(--cor-texto-terciario)"
        >
          {i}
        </text>,
        <text
          key={`ly-${i}`}
          x={-0.4}
          y={-i + 0.15}
          textAnchor="end"
          fontSize={0.4}
          fill="var(--cor-texto-terciario)"
        >
          {i}
        </text>,
      );
    }
  }

  return (
    <g aria-label="Eixos cartesianos">
      <line
        x1={DOMINIO_MIN}
        y1={0}
        x2={DOMINIO_MAX}
        y2={0}
        stroke="var(--cor-texto-secundario)"
        strokeWidth={0.06}
      />
      <line
        x1={0}
        y1={DOMINIO_MIN}
        x2={0}
        y2={DOMINIO_MAX}
        stroke="var(--cor-texto-secundario)"
        strokeWidth={0.06}
      />
      <text x={DOMINIO_MAX - 0.3} y={0.6} fontSize={0.5} fill="var(--cor-texto-secundario)">
        x
      </text>
      <text x={0.3} y={-DOMINIO_MAX + 0.6} fontSize={0.5} fill="var(--cor-texto-secundario)">
        y
      </text>
      {marcas}
    </g>
  );
}

/* ─── Componente Principal ─── */

export function GraficoFuncoes() {
  const [estado, setEstado] = useState<EstadoGrafico>(ESTADO_INICIAL);
  const { tipo, a, b, c } = estado;

  const atualizarCoeficiente = useCallback(
    (campo: 'a' | 'b' | 'c', valor: number) => {
      setEstado((anterior) => ({ ...anterior, [campo]: valor }));
    },
    [],
  );

  const definirTipo = useCallback((novoTipo: TipoFuncao) => {
    setEstado((anterior) => ({ ...anterior, tipo: novoTipo }));
  }, []);

  const pontos = gerarPontos(tipo, a, b, c);
  const pathD = pontosParaPath(pontos);
  const raizes = calcularRaizes(tipo, a, b, c);
  const vertice = tipo === 'quadratica' ? calcularVertice(a, b, c) : null;
  const equacao = montarEquacao(tipo, a, b, c);

  const sliders: { campo: 'a' | 'b' | 'c'; rotulo: string; visivel: boolean }[] = [
    { campo: 'a', rotulo: 'a', visivel: true },
    { campo: 'b', rotulo: 'b', visivel: true },
    { campo: 'c', rotulo: 'c', visivel: tipo === 'quadratica' },
  ];

  return (
    <div className={styles.container}>
      {/* Seletor de tipo */}
      <div className={styles.seletorTipo} role="radiogroup" aria-label="Tipo de função">
        <button
          type="button"
          className={styles.botaoTipo}
          data-ativo={tipo === 'linear'}
          role="radio"
          aria-checked={tipo === 'linear'}
          onClick={() => definirTipo('linear')}
        >
          Linear: ax + b
        </button>
        <button
          type="button"
          className={styles.botaoTipo}
          data-ativo={tipo === 'quadratica'}
          role="radio"
          aria-checked={tipo === 'quadratica'}
          onClick={() => definirTipo('quadratica')}
        >
          Quadrática: ax² + bx + c
        </button>
      </div>

      {/* Equação atual */}
      <div className={styles.equacao} aria-live="polite">
        {equacao}
      </div>

      {/* Gráfico SVG */}
      <div className={styles.graficoWrapper}>
        <svg
          className={styles.graficoSvg}
          viewBox={`${VIEW_MIN} ${VIEW_MIN} ${VIEW_SIZE} ${VIEW_SIZE}`}
          aria-label={`Gráfico da função ${equacao}`}
          role="img"
        >
          <g transform="scale(1, -1)">
            <Grade />
            <Eixos />

            {/* Curva da função */}
            {pathD && (
              <path
                d={pathD}
                fill="none"
                stroke="var(--cor-primaria-400)"
                strokeWidth={0.15}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}

            {/* Raízes */}
            {raizes.map((raiz, i) => (
              <circle
                key={`raiz-${i}`}
                cx={raiz.x}
                cy={raiz.y}
                r={0.22}
                fill="var(--cor-acento-400)"
                stroke="var(--cor-superficie)"
                strokeWidth={0.06}
              />
            ))}

            {/* Vértice */}
            {vertice && Math.abs(vertice.y) <= DOMINIO_MAX && (
              <g>
                <circle
                  cx={vertice.x}
                  cy={vertice.y}
                  r={0.22}
                  fill="var(--cor-aviso-400)"
                  stroke="var(--cor-superficie)"
                  strokeWidth={0.06}
                />
                <text
                  x={vertice.x + 0.4}
                  y={-(vertice.y + 0.4)}
                  fontSize={0.45}
                  fill="var(--cor-aviso-400)"
                  transform={`scale(1, -1) translate(0, ${-2 * vertice.y})`}
                  style={{ transformBox: 'fill-box' }}
                >
                  V
                </text>
              </g>
            )}
          </g>
        </svg>
      </div>

      {/* Controles */}
      <div className={styles.controles}>
        {sliders
          .filter((s) => s.visivel)
          .map(({ campo, rotulo }) => (
            <div key={campo} className={styles.controleGrupo}>
              <label className={styles.controleLabel} htmlFor={`slider-${campo}`}>
                {rotulo} = {formatarNumero(estado[campo])}
              </label>
              <input
                id={`slider-${campo}`}
                type="range"
                className={styles.controleSlider}
                min={-5}
                max={5}
                step={0.5}
                value={estado[campo]}
                onChange={(e) => atualizarCoeficiente(campo, parseFloat(e.target.value))}
                aria-valuenow={estado[campo]}
                aria-valuemin={-5}
                aria-valuemax={5}
              />
              <span className={styles.controleValor}>{formatarNumero(estado[campo])}</span>
            </div>
          ))}
      </div>

      {/* Informações: Raízes / Vértice */}
      <div className={styles.info} aria-live="polite">
        {raizes.length > 0 ? (
          raizes.map((raiz, i) => (
            <span key={`info-raiz-${i}`} className={styles.infoTag} data-tipo="raiz">
              Raiz: x = {formatarNumero(raiz.x)}
            </span>
          ))
        ) : (
          <span className={styles.infoTag} data-tipo="sem-raiz">
            Sem raízes reais
          </span>
        )}
        {vertice && Math.abs(vertice.y) <= DOMINIO_MAX && (
          <span className={styles.infoTag} data-tipo="vertice">
            Vértice: ({formatarNumero(vertice.x)}, {formatarNumero(vertice.y)})
          </span>
        )}
      </div>
    </div>
  );
}
