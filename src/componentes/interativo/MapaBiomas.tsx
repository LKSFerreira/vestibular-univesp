import { useState } from 'react';
import styles from './MapaBiomas.module.css';

interface Bioma {
  readonly id: string;
  readonly nome: string;
  readonly emoji: string;
  readonly cor: string;
  readonly area: string;
  readonly clima: string;
  readonly vegetacao: string;
  readonly fauna: string;
  readonly ameacas: string;
  readonly d: string;
}

/*
 * Mapa simplificado: viewBox 0 0 430 460.
 * Cada bioma é um polígono SVG cujas arestas se encaixam perfeitamente,
 * formando o contorno do Brasil sem sobreposições nem lacunas.
 *
 * Pontos externos (sentido horário):
 *   p0(70,60) p1(100,25) p2(160,12) p3(230,10) p4(290,22)
 *   p5(330,48) p6(360,78) p7(385,120) p8(378,168) p9(365,210)
 *   p10(352,255) p11(338,295) p12(318,330) p13(292,362) p14(262,395)
 *   p15(235,425) p16(205,440) p17(175,418) p18(145,388) p19(120,350)
 *   p20(90,310) p21(62,268) p22(48,225) p23(52,178) p24(58,128)
 *
 * Pontos internos (divisórias):
 *   i0(250,152) — triplo Amazônia/Caatinga/Cerrado
 *   i1(340,175) — triplo Caatinga/Cerrado/Mata Atlântica
 *   i2(315,255) i3(280,330) — borda Cerrado/Mata Atlântica
 *   i4(240,365) — triplo Cerrado/Mata Atlântica/Pampa
 *   i5(192,395) — borda Cerrado/Pampa
 *   i6(82,230) i7(95,270) — borda Cerrado/Pantanal
 */

const BIOMAS: readonly Bioma[] = [
  {
    id: 'amazonia',
    nome: 'Amazônia',
    emoji: '🌳',
    cor: '#2d6a4f',
    area: '49%',
    clima: 'Equatorial (quente e úmido)',
    vegetacao: 'Floresta tropical densa, latifoliada',
    fauna: 'Onça-pintada, arara, boto-cor-de-rosa',
    ameacas: 'Desmatamento, queimadas, garimpo ilegal',
    d: 'M70,60 L100,25 L160,12 L230,10 L290,22 L250,152 L52,178 L58,128 Z',
  },
  {
    id: 'cerrado',
    nome: 'Cerrado',
    emoji: '🌾',
    cor: '#a3b18a',
    area: '24%',
    clima: 'Tropical semiúmido (2 estações)',
    vegetacao: 'Árvores tortuosas, raízes profundas, cascas grossas',
    fauna: 'Lobo-guará, tamanduá-bandeira, tucano',
    ameacas: 'Agronegócio, expansão agrícola da soja',
    d: 'M52,178 L250,152 L340,175 L315,255 L280,330 L240,365 L192,395 L175,418 L145,388 L120,350 L90,310 L62,268 L95,270 L82,230 L48,225 L52,178 Z',
  },
  {
    id: 'caatinga',
    nome: 'Caatinga',
    emoji: '🌵',
    cor: '#dda15e',
    area: '10%',
    clima: 'Semiárido (seco, chuvas irregulares)',
    vegetacao: 'Plantas xerófilas: cactos, mandacaru, árvores caducifólias',
    fauna: 'Ararinha-azul, tatu-peba, calango',
    ameacas: 'Desertificação, uso irregular da água',
    d: 'M290,22 L330,48 L360,78 L385,120 L340,175 L250,152 Z',
  },
  {
    id: 'mata-atlantica',
    nome: 'Mata Atlântica',
    emoji: '🌿',
    cor: '#40916c',
    area: '13%',
    clima: 'Tropical úmido a subtropical',
    vegetacao: 'Floresta densa, alta biodiversidade, epífitas',
    fauna: 'Mico-leão-dourado, muriqui, sapo-cururu',
    ameacas: 'Urbanização — restam apenas ~12% da cobertura original',
    d: 'M385,120 L378,168 L365,210 L352,255 L338,295 L318,330 L292,362 L262,395 L240,365 L280,330 L315,255 L340,175 Z',
  },
  {
    id: 'pantanal',
    nome: 'Pantanal',
    emoji: '🐊',
    cor: '#52b788',
    area: '2%',
    clima: 'Tropical continental (cheia/seca)',
    vegetacao: 'Mistura de cerrado, mata e campos inundáveis',
    fauna: 'Jacaré, tuiuiú, capivara, cervo-do-pantanal',
    ameacas: 'Queimadas, assoreamento dos rios, pecuária',
    d: 'M48,225 L82,230 L95,270 L62,268 Z',
  },
  {
    id: 'pampa',
    nome: 'Pampa',
    emoji: '🐴',
    cor: '#b7e4c7',
    area: '2%',
    clima: 'Subtropical (frio no inverno)',
    vegetacao: 'Campos naturais (gramíneas), coxilhas',
    fauna: 'Quero-quero, veado-campeiro, ema',
    ameacas: 'Conversão para lavouras, silvicultura de eucalipto',
    d: 'M262,395 L235,425 L205,440 L175,418 L192,395 L240,365 Z',
  },
];

const CONTORNO_BRASIL =
  'M70,60 L100,25 L160,12 L230,10 L290,22 L330,48 L360,78 L385,120 ' +
  'L378,168 L365,210 L352,255 L338,295 L318,330 L292,362 L262,395 ' +
  'L235,425 L205,440 L175,418 L145,388 L120,350 L90,310 L62,268 ' +
  'L48,225 L52,178 L58,128 Z';

function calcularCentroide(d: string): { x: number; y: number } {
  const pares = d.match(/\d+(?:\.\d+)?,\d+(?:\.\d+)?/g) ?? [];
  let somaX = 0;
  let somaY = 0;

  for (const par of pares) {
    const [x, y] = par.split(',').map(Number);
    somaX += x;
    somaY += y;
  }

  const n = pares.length || 1;
  return { x: somaX / n, y: somaY / n };
}

export function MapaBiomas() {
  const [biomaSelecionado, setBiomaSelecionado] = useState<string | null>(null);

  const biomaDetalhe = BIOMAS.find((b) => b.id === biomaSelecionado);

  function alternarBioma(id: string) {
    setBiomaSelecionado((atual) => (atual === id ? null : id));
  }

  return (
    <section
      className={styles.container}
      aria-label="Mapa interativo dos biomas brasileiros"
    >
      <h2 className={styles.titulo}>🗺️ Biomas do Brasil</h2>

      <div className={styles.conteudo}>
        {/* ── Mapa SVG ── */}
        <svg
          viewBox="0 0 430 460"
          className={styles.mapa}
          role="img"
          aria-label="Mapa simplificado do Brasil com os seis biomas"
        >
          {BIOMAS.map((bioma) => (
            <path
              key={bioma.id}
              d={bioma.d}
              fill={bioma.cor}
              className={styles.biomaPath}
              data-ativo={biomaSelecionado === bioma.id ? '' : undefined}
              onClick={() => alternarBioma(bioma.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  alternarBioma(bioma.id);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={bioma.nome}
            />
          ))}

          {/* Contorno geral do Brasil */}
          <path
            d={CONTORNO_BRASIL}
            fill="none"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth={2}
            strokeLinejoin="round"
            pointerEvents="none"
          />

          {/* Emojis centralizados em cada bioma */}
          {BIOMAS.map((bioma) => {
            const c = calcularCentroide(bioma.d);
            return (
              <text
                key={`label-${bioma.id}`}
                x={c.x}
                y={c.y}
                className={styles.biomaLabel}
                textAnchor="middle"
                dominantBaseline="central"
                pointerEvents="none"
              >
                {bioma.emoji}
              </text>
            );
          })}
        </svg>

        {/* ── Lateral: legenda + detalhes ── */}
        <aside className={styles.lateral}>
          <div className={styles.legenda}>
            <h3 className={styles.legendaTitulo}>Legenda</h3>
            <ul className={styles.legendaLista}>
              {BIOMAS.map((bioma) => (
                <li key={bioma.id}>
                  <button
                    className={styles.legendaItem}
                    data-ativo={biomaSelecionado === bioma.id ? '' : undefined}
                    onClick={() => alternarBioma(bioma.id)}
                    type="button"
                  >
                    <span
                      className={styles.legendaCor}
                      style={{ background: bioma.cor }}
                      aria-hidden="true"
                    />
                    <span>
                      {bioma.emoji} {bioma.nome}
                    </span>
                    <span className={styles.legendaArea}>{bioma.area}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {biomaDetalhe ? (
            <div className={styles.cartaoDetalhe}>
              <header className={styles.cartaoHeader}>
                <span className={styles.cartaoEmoji}>
                  {biomaDetalhe.emoji}
                </span>
                <h3 className={styles.cartaoNome}>{biomaDetalhe.nome}</h3>
                <span className={styles.cartaoArea}>
                  {biomaDetalhe.area} do território
                </span>
              </header>

              <dl className={styles.cartaoInfo}>
                <div className={styles.cartaoLinha}>
                  <dt>🌡️ Clima</dt>
                  <dd>{biomaDetalhe.clima}</dd>
                </div>
                <div className={styles.cartaoLinha}>
                  <dt>🌱 Vegetação</dt>
                  <dd>{biomaDetalhe.vegetacao}</dd>
                </div>
                <div className={styles.cartaoLinha}>
                  <dt>🐾 Fauna</dt>
                  <dd>{biomaDetalhe.fauna}</dd>
                </div>
                <div className={styles.cartaoLinha}>
                  <dt>⚠️ Ameaças</dt>
                  <dd>{biomaDetalhe.ameacas}</dd>
                </div>
              </dl>

              <button
                className={styles.cartaoFechar}
                onClick={() => setBiomaSelecionado(null)}
                type="button"
                aria-label="Fechar detalhes"
              >
                ✕
              </button>
            </div>
          ) : (
            <p className={styles.instrucao}>
              Clique em um bioma no mapa ou na legenda para ver detalhes.
            </p>
          )}
        </aside>
      </div>
    </section>
  );
}
