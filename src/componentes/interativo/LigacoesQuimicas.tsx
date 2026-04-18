import { useState, useRef, useCallback, useEffect } from 'react';
import styles from './LigacoesQuimicas.module.css';

type TipoLigacao = 'ionica' | 'covalente' | 'metalica';
type EstadoAnimacao = 'parado' | 'animando' | 'concluido';

const SVG_W = 500;
const SVG_H = 300;
const RAIO_ATOMO = 40;
const RAIO_ELETRON = 4;

/* ─── Cores via CSS custom properties ─── */

function corCSS(prop: string, fallback: string): string {
  if (typeof document === 'undefined') return fallback;
  return getComputedStyle(document.documentElement).getPropertyValue(prop).trim() || fallback;
}

function corNa() { return corCSS('--cor-primaria-400', '#60a5fa'); }
function corCl() { return corCSS('--cor-acento-400', '#34d399'); }
function corH()  { return corCSS('--cor-aviso-400', '#fbbf24'); }
function corFe() { return corCSS('--cor-texto-secundario', '#9ca3af'); }
function corEletron() { return '#fff'; }

/* ─── Dados das abas ─── */

const ABAS: { id: TipoLigacao; rotulo: string }[] = [
  { id: 'ionica', rotulo: 'Iônica' },
  { id: 'covalente', rotulo: 'Covalente' },
  { id: 'metalica', rotulo: 'Metálica' },
];

const EXPLICACOES: Record<TipoLigacao, { titulo: string; texto: string }> = {
  ionica: {
    titulo: 'Ligação Iônica (Na + Cl)',
    texto:
      'O sódio (Na) perde 1 elétron da camada de valência, tornando-se Na⁺. ' +
      'O cloro (Cl) recebe esse elétron, tornando-se Cl⁻. A atração eletrostática ' +
      'entre os íons de cargas opostas forma a ligação iônica.',
  },
  covalente: {
    titulo: 'Ligação Covalente (H + H)',
    texto:
      'Dois átomos de hidrogênio compartilham seus elétrons de valência, formando ' +
      'um par eletrônico compartilhado. Ambos atingem estabilidade com 2 elétrons na ' +
      'camada de valência. É o compartilhamento de elétrons.',
  },
  metalica: {
    titulo: 'Ligação Metálica (Fe)',
    texto:
      'Átomos metálicos liberam seus elétrons de valência, que se movem livremente ' +
      'entre os cátions formando um "mar de elétrons". Essa nuvem eletrônica ' +
      'mantém os cátions unidos e confere condutividade ao metal.',
  },
};

/* ═══════════════════════════════════════════
   Componente principal
   ═══════════════════════════════════════════ */

export function LigacoesQuimicas() {
  const [tipo, setTipo] = useState<TipoLigacao>('ionica');
  const [estado, setEstado] = useState<EstadoAnimacao>('parado');
  const [cicloAnimacao, setCicloAnimacao] = useState(0);
  const rafRef = useRef(0);

  const resetar = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    setEstado('parado');
  }, []);

  const trocarTipo = useCallback(
    (novo: TipoLigacao) => {
      resetar();
      setTipo(novo);
    },
    [resetar],
  );

  useEffect(() => () => cancelAnimationFrame(rafRef.current), []);

  const info = EXPLICACOES[tipo];

  return (
    <div className={styles.container} role="region" aria-label="Ligações Químicas">
      <h3 className={styles.titulo}>Ligações Químicas</h3>

      {/* Abas */}
      <div className={styles.abas} role="tablist">
        {ABAS.map(a => (
          <button
            key={a.id}
            role="tab"
            aria-selected={tipo === a.id}
            data-ativo={tipo === a.id ? 'true' : undefined}
            className={styles.aba}
            onClick={() => trocarTipo(a.id)}
          >
            {a.rotulo}
          </button>
        ))}
      </div>

      {/* Visualização */}
      <div className={styles.visualizacao}>
        {tipo === 'ionica' && (
          <IonicaVis
            key={`ionica-${cicloAnimacao}`}
            estado={estado}
            setEstado={setEstado}
            rafRef={rafRef}
          />
        )}
        {tipo === 'covalente' && (
          <CovalenteVis
            key={`covalente-${cicloAnimacao}`}
            estado={estado}
            setEstado={setEstado}
            rafRef={rafRef}
          />
        )}
        {tipo === 'metalica' && (
          <MetalicaVis
            key={`metalica-${cicloAnimacao}`}
            estado={estado}
            setEstado={setEstado}
            rafRef={rafRef}
          />
        )}
      </div>

      {/* Explicação */}
      <div className={styles.explicacao}>
        <span className={styles.explicacaoTitulo}>{info.titulo}</span>
        <p className={styles.explicacaoTexto}>{info.texto}</p>
      </div>

      {/* Ações */}
      <div className={styles.acoes}>
        <button
          className={estado === 'parado' ? styles.botaoPrimario : styles.botao}
          onClick={() => {
            resetar();
            setCicloAnimacao((valorAtual) => valorAtual + 1);
            // small delay so state resets before re-triggering
            requestAnimationFrame(() => setEstado('animando'));
          }}
        >
          {estado === 'concluido' ? '↻ Repetir' : '▶ Animar'}
        </button>
        {estado !== 'parado' && (
          <button className={styles.botao} onClick={resetar}>
            ■ Resetar
          </button>
        )}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   Sub-visualizações
   ═══════════════════════════════════════════ */

interface VisProps {
  readonly estado: EstadoAnimacao;
  readonly setEstado: (e: EstadoAnimacao) => void;
  readonly rafRef: React.MutableRefObject<number>;
}

/* ─── Iônica ─── */

function IonicaVis({ estado, setEstado, rafRef }: VisProps) {
  const [progresso, setProgresso] = useState(0); // 0 → 1

  useEffect(() => {
    if (estado !== 'animando') return;
    const inicio = performance.now();
    const duracao = 2000;

    function loop(agora: number) {
      const t = Math.min((agora - inicio) / duracao, 1);
      setProgresso(t);
      if (t < 1) {
        rafRef.current = requestAnimationFrame(loop);
      } else {
        setEstado('concluido');
      }
    }
    rafRef.current = requestAnimationFrame(loop);
  }, [estado, setEstado, rafRef]);

  const p = estado === 'parado' ? 0 : progresso;

  const naX = 160;
  const clX = 340;
  const eletronInicialX = naX + RAIO_ATOMO + 8;
  const eletronFinalX = clX - RAIO_ATOMO - 8;
  const eletronX = eletronInicialX + (eletronFinalX - eletronInicialX) * p;
  const cy = SVG_H / 2;

  const mostrarCargas = p >= 1;
  const tracejadoOpacidade = p;

  return (
    <svg className={styles.svgCanvas} viewBox={`0 0 ${SVG_W} ${SVG_H}`}>
      {/* Linha de atração */}
      <line
        x1={naX}
        y1={cy}
        x2={clX}
        y2={cy}
        stroke={corNa()}
        strokeWidth={2}
        strokeDasharray="6 4"
        opacity={tracejadoOpacidade}
      />

      {/* Na */}
      <circle cx={naX} cy={cy} r={RAIO_ATOMO} fill={corNa()} opacity={0.85} />
      <text x={naX} y={cy + 5} textAnchor="middle" fill="#fff" fontSize={16} fontWeight={700}>
        Na{mostrarCargas && '⁺'}
      </text>

      {/* Cl */}
      <circle cx={clX} cy={cy} r={RAIO_ATOMO} fill={corCl()} opacity={0.85} />
      <text x={clX} y={cy + 5} textAnchor="middle" fill="#fff" fontSize={16} fontWeight={700}>
        Cl{mostrarCargas && '⁻'}
      </text>

      {/* Elétron de valência do Na (camada externa) */}
      {!mostrarCargas && (
        <>
          {/* Órbita Na */}
          <circle
            cx={naX}
            cy={cy}
            r={RAIO_ATOMO + 10}
            fill="none"
            stroke={corEletron()}
            strokeWidth={0.5}
            opacity={0.3 * (1 - p)}
          />
          {/* Órbita Cl */}
          <circle
            cx={clX}
            cy={cy}
            r={RAIO_ATOMO + 10}
            fill="none"
            stroke={corEletron()}
            strokeWidth={0.5}
            opacity={0.3}
          />
        </>
      )}

      {/* Elétron transferido */}
      <circle cx={eletronX} cy={cy - 12} r={RAIO_ELETRON} fill={corEletron()} />

      {/* Elétrons existentes do Cl (6 na camada de valência) */}
      {[0, 1, 2, 3, 4, 5].map(i => {
        const angulo = (Math.PI * 2 * i) / 7 + Math.PI; // distribuir ao redor
        const r = RAIO_ATOMO + 10;
        return (
          <circle
            key={i}
            cx={clX + Math.cos(angulo) * r}
            cy={cy + Math.sin(angulo) * r}
            r={RAIO_ELETRON - 1}
            fill={corEletron()}
            opacity={0.6}
          />
        );
      })}

      {/* Cargas finais */}
      {mostrarCargas && (
        <>
          <text x={naX} y={cy - RAIO_ATOMO - 14} textAnchor="middle" fill={corNa()} fontSize={18} fontWeight={700}>
            +
          </text>
          <text x={clX} y={cy - RAIO_ATOMO - 14} textAnchor="middle" fill={corCl()} fontSize={18} fontWeight={700}>
            −
          </text>
        </>
      )}
    </svg>
  );
}

/* ─── Covalente ─── */

function CovalenteVis({ estado, setEstado, rafRef }: VisProps) {
  const [progresso, setProgresso] = useState(0);

  useEffect(() => {
    if (estado !== 'animando') return;
    const inicio = performance.now();
    const duracao = 2000;

    function loop(agora: number) {
      const t = Math.min((agora - inicio) / duracao, 1);
      setProgresso(t);
      if (t < 1) {
        rafRef.current = requestAnimationFrame(loop);
      } else {
        setEstado('concluido');
      }
    }
    rafRef.current = requestAnimationFrame(loop);
  }, [estado, setEstado, rafRef]);

  const p = estado === 'parado' ? 0 : progresso;

  const centroX = SVG_W / 2;
  const cy = SVG_H / 2;
  const distInicial = 100;
  const distFinal = 30;
  const dist = distInicial - (distInicial - distFinal) * p;

  const h1X = centroX - dist;
  const h2X = centroX + dist;

  const sobreposicao = p > 0.5;
  const overlapOpacity = Math.max(0, (p - 0.5) * 2);

  return (
    <svg className={styles.svgCanvas} viewBox={`0 0 ${SVG_W} ${SVG_H}`}>
      {/* Nuvem eletrônica H1 */}
      <circle cx={h1X} cy={cy} r={RAIO_ATOMO + 12} fill={corH()} opacity={0.15} />
      {/* Nuvem eletrônica H2 */}
      <circle cx={h2X} cy={cy} r={RAIO_ATOMO + 12} fill={corH()} opacity={0.15} />

      {/* Sobreposição de nuvens */}
      {sobreposicao && (
        <ellipse
          cx={centroX}
          cy={cy}
          rx={18}
          ry={RAIO_ATOMO + 4}
          fill={corH()}
          opacity={overlapOpacity * 0.3}
        />
      )}

      {/* H1 */}
      <circle cx={h1X} cy={cy} r={RAIO_ATOMO} fill={corH()} opacity={0.85} />
      <text x={h1X} y={cy + 5} textAnchor="middle" fill="#fff" fontSize={16} fontWeight={700}>H</text>

      {/* H2 */}
      <circle cx={h2X} cy={cy} r={RAIO_ATOMO} fill={corH()} opacity={0.85} />
      <text x={h2X} y={cy + 5} textAnchor="middle" fill="#fff" fontSize={16} fontWeight={700}>H</text>

      {/* Elétron de H1 */}
      <circle
        cx={h1X + RAIO_ATOMO * (1 - p * 0.6)}
        cy={cy - 8}
        r={RAIO_ELETRON}
        fill={corEletron()}
      />

      {/* Elétron de H2 */}
      <circle
        cx={h2X - RAIO_ATOMO * (1 - p * 0.6)}
        cy={cy + 8}
        r={RAIO_ELETRON}
        fill={corEletron()}
      />

      {/* Rótulo de par compartilhado */}
      {sobreposicao && (
        <text
          x={centroX}
          y={cy + RAIO_ATOMO + 34}
          textAnchor="middle"
          fill={corH()}
          fontSize={12}
          fontWeight={600}
          opacity={overlapOpacity}
        >
          Compartilhamento de elétrons
        </text>
      )}
    </svg>
  );
}

/* ─── Metálica ─── */

const COLUNAS_GRADE = 4;
const LINHAS_GRADE = 3;
const NUM_ELETRONS_LIVRES = 12;

interface EletronLivre {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

function criarEletronsIniciais(): EletronLivre[] {
  return Array.from({ length: NUM_ELETRONS_LIVRES }, () => ({
    x: 60 + Math.random() * (SVG_W - 120),
    y: 40 + Math.random() * (SVG_H - 80),
    vx: (Math.random() - 0.5) * 1.5,
    vy: (Math.random() - 0.5) * 1.5,
  }));
}

function MetalicaVis({ estado, setEstado, rafRef }: VisProps) {
  const [eletrons, setEletrons] = useState<EletronLivre[]>(criarEletronsIniciais);

  useEffect(() => {
    if (estado !== 'animando') return;

    const eletronsRef = { current: criarEletronsIniciais() };

    const inicio = performance.now();
    const duracao = 5000;

    function loop(agora: number) {
      const dt = 1;
      const t = (agora - inicio) / duracao;

      eletronsRef.current = eletronsRef.current.map(e => {
        let { x, y, vx, vy } = e;
        x += vx * dt;
        y += vy * dt;

        // Bounce off boundaries
        if (x < 30 || x > SVG_W - 30) vx = -vx;
        if (y < 20 || y > SVG_H - 20) vy = -vy;

        // Small random perturbation
        vx += (Math.random() - 0.5) * 0.15;
        vy += (Math.random() - 0.5) * 0.15;

        // Clamp velocity
        const maxV = 2;
        vx = Math.max(-maxV, Math.min(maxV, vx));
        vy = Math.max(-maxV, Math.min(maxV, vy));

        return { x, y, vx, vy };
      });

      setEletrons([...eletronsRef.current]);

      if (t < 1) {
        rafRef.current = requestAnimationFrame(loop);
      } else {
        setEstado('concluido');
      }
    }

    rafRef.current = requestAnimationFrame(loop);
  }, [estado, setEstado, rafRef]);

  // Grid positions
  const espX = (SVG_W - 100) / (COLUNAS_GRADE - 1);
  const espY = (SVG_H - 80) / (LINHAS_GRADE - 1);
  const atomos: { x: number; y: number }[] = [];
  for (let r = 0; r < LINHAS_GRADE; r++) {
    for (let c = 0; c < COLUNAS_GRADE; c++) {
      atomos.push({ x: 50 + c * espX, y: 40 + r * espY });
    }
  }

  return (
    <svg className={styles.svgCanvas} viewBox={`0 0 ${SVG_W} ${SVG_H}`}>
      {/* Fundo do "mar de elétrons" */}
      <rect
        x={20}
        y={10}
        width={SVG_W - 40}
        height={SVG_H - 20}
        rx={12}
        fill={corFe()}
        opacity={0.08}
      />

      {/* Átomos Fe */}
      {atomos.map((a, i) => (
        <g key={i}>
          <circle cx={a.x} cy={a.y} r={RAIO_ATOMO * 0.7} fill={corFe()} opacity={0.7} />
          <text x={a.x} y={a.y + 4} textAnchor="middle" fill="#fff" fontSize={12} fontWeight={700}>
            Fe
          </text>
        </g>
      ))}

      {/* Elétrons livres */}
      {eletrons.map((e, i) => (
        <circle key={i} cx={e.x} cy={e.y} r={RAIO_ELETRON} fill={corEletron()} opacity={0.9} />
      ))}

      {/* Rótulo */}
      {estado !== 'parado' && (
        <text
          x={SVG_W / 2}
          y={SVG_H - 6}
          textAnchor="middle"
          fill={corFe()}
          fontSize={12}
          fontWeight={600}
        >
          Mar de elétrons
        </text>
      )}
    </svg>
  );
}
