import { useCallback, useEffect, useRef, useState } from 'react';
import estilos from './SimulacaoCinematica.module.css';

const DURACAO_MAXIMA = 10;
const ESCALA_PISTA = 3;
const LARGURA_PISTA = 800;
const ALTURA_PISTA = 120;
const MARGEM_PISTA = 40;
const PISTA_Y = 70;

const LARGURA_GRAFICO = 320;
const ALTURA_GRAFICO = 160;
const MARGEM_GRAFICO = { topo: 16, direita: 16, baixo: 28, esquerda: 44 };

interface PontoDados {
  readonly tempo: number;
  readonly valor: number;
}

function limitarValor(valor: number, minimo: number, maximo: number): number {
  return Math.max(minimo, Math.min(maximo, valor));
}

function formatarNumero(valor: number, casas: number = 1): string {
  return valor.toFixed(casas);
}

function calcularPosicao(velocidadeInicial: number, aceleracao: number, tempo: number): number {
  return velocidadeInicial * tempo + 0.5 * aceleracao * tempo * tempo;
}

function calcularVelocidade(velocidadeInicial: number, aceleracao: number, tempo: number): number {
  return velocidadeInicial + aceleracao * tempo;
}

function MarcadoresDistancia({ escala }: { readonly escala: number }) {
  const marcadores: Array<{ posicaoX: number; valor: number }> = [];
  const intervalo = escala > 4 ? 20 : escala > 2 ? 10 : 5;
  const posicaoMinima = -100;
  const posicaoMaxima = 300;

  for (let metros = posicaoMinima; metros <= posicaoMaxima; metros += intervalo) {
    const posicaoX = MARGEM_PISTA + metros * escala;
    if (posicaoX >= 0 && posicaoX <= LARGURA_PISTA) {
      marcadores.push({ posicaoX, valor: metros });
    }
  }

  return (
    <g>
      {marcadores.map((marcador) => (
        <g key={marcador.valor}>
          <line
            x1={marcador.posicaoX}
            y1={PISTA_Y + 14}
            x2={marcador.posicaoX}
            y2={PISTA_Y + 22}
            stroke="var(--cor-borda)"
            strokeWidth={1}
          />
          <text
            x={marcador.posicaoX}
            y={PISTA_Y + 34}
            textAnchor="middle"
            fontSize={10}
            fill="var(--cor-texto-secundario)"
          >
            {marcador.valor}m
          </text>
        </g>
      ))}
    </g>
  );
}

function SetaVelocidade({
  posicaoX,
  velocidade,
}: {
  readonly posicaoX: number;
  readonly velocidade: number;
}) {
  if (Math.abs(velocidade) < 0.1) return null;

  const comprimento = limitarValor(Math.abs(velocidade) * 3, 4, 80);
  const direcao = velocidade > 0 ? 1 : -1;
  const inicioX = posicaoX;
  const fimX = posicaoX + comprimento * direcao;
  const setaY = PISTA_Y - 24;

  return (
    <g>
      <line
        x1={inicioX}
        y1={setaY}
        x2={fimX}
        y2={setaY}
        stroke="var(--cor-primaria-400)"
        strokeWidth={2}
        markerEnd="url(#setaVelocidade)"
      />
      <text
        x={(inicioX + fimX) / 2}
        y={setaY - 6}
        textAnchor="middle"
        fontSize={9}
        fill="var(--cor-primaria-400)"
        fontWeight="600"
      >
        v = {formatarNumero(velocidade)} m/s
      </text>
    </g>
  );
}

function SetaAceleracao({
  posicaoX,
  aceleracao,
}: {
  readonly posicaoX: number;
  readonly aceleracao: number;
}) {
  if (Math.abs(aceleracao) < 0.01) return null;

  const comprimento = limitarValor(Math.abs(aceleracao) * 8, 4, 50);
  const direcao = aceleracao > 0 ? 1 : -1;
  const inicioX = posicaoX;
  const fimX = posicaoX + comprimento * direcao;
  const setaY = PISTA_Y + 8;

  return (
    <g>
      <line
        x1={inicioX}
        y1={setaY}
        x2={fimX}
        y2={setaY}
        stroke="var(--cor-alerta-400)"
        strokeWidth={2}
        strokeDasharray="4 2"
        markerEnd="url(#setaAceleracao)"
      />
      <text
        x={(inicioX + fimX) / 2}
        y={setaY + 14}
        textAnchor="middle"
        fontSize={9}
        fill="var(--cor-alerta-400)"
        fontWeight="600"
      >
        a = {formatarNumero(aceleracao)} m/s²
      </text>
    </g>
  );
}

function GraficoPequeno({
  titulo,
  dados,
  corLinha,
  rotuloY,
  tempoMaximo,
}: {
  readonly titulo: string;
  readonly dados: readonly PontoDados[];
  readonly corLinha: string;
  readonly rotuloY: string;
  readonly tempoMaximo: number;
}) {
  const areaLargura = LARGURA_GRAFICO - MARGEM_GRAFICO.esquerda - MARGEM_GRAFICO.direita;
  const areaAltura = ALTURA_GRAFICO - MARGEM_GRAFICO.topo - MARGEM_GRAFICO.baixo;

  const valorMinimo =
    dados.length > 0 ? Math.min(0, ...dados.map((ponto) => ponto.valor)) : 0;
  const valorMaximo =
    dados.length > 0 ? Math.max(1, ...dados.map((ponto) => ponto.valor)) : 1;
  const margemValor = Math.max(1, (valorMaximo - valorMinimo) * 0.1);
  const escalaMinY = valorMinimo - margemValor;
  const escalaMaxY = valorMaximo + margemValor;

  const escalaX = (tempo: number) =>
    MARGEM_GRAFICO.esquerda + (tempo / tempoMaximo) * areaLargura;
  const escalaY = (valor: number) =>
    MARGEM_GRAFICO.topo + (1 - (valor - escalaMinY) / (escalaMaxY - escalaMinY)) * areaAltura;

  const pontosLinha =
    dados.length > 1
      ? dados.map((ponto) => `${escalaX(ponto.tempo)},${escalaY(ponto.valor)}`).join(' ')
      : '';

  const linhasGradeY = 4;
  const gradeY = Array.from({ length: linhasGradeY + 1 }, (_, indice) => {
    const valor = escalaMinY + (indice / linhasGradeY) * (escalaMaxY - escalaMinY);
    return { valor, y: escalaY(valor) };
  });

  const linhasGradeX = 5;
  const gradeX = Array.from({ length: linhasGradeX + 1 }, (_, indice) => {
    const tempo = (indice / linhasGradeX) * tempoMaximo;
    return { tempo, x: escalaX(tempo) };
  });

  return (
    <div className={estilos.grafico}>
      <span className={estilos.graficoTitulo}>{titulo}</span>
      <svg
        className={estilos.graficoSvg}
        viewBox={`0 0 ${LARGURA_GRAFICO} ${ALTURA_GRAFICO}`}
        preserveAspectRatio="xMidYMid meet"
      >
        {gradeY.map((linha) => (
          <g key={`gy-${linha.valor.toFixed(2)}`}>
            <line
              x1={MARGEM_GRAFICO.esquerda}
              y1={linha.y}
              x2={LARGURA_GRAFICO - MARGEM_GRAFICO.direita}
              y2={linha.y}
              stroke="var(--cor-borda)"
              strokeWidth={0.5}
              strokeDasharray="3 3"
            />
            <text
              x={MARGEM_GRAFICO.esquerda - 4}
              y={linha.y + 3}
              textAnchor="end"
              fontSize={9}
              fill="var(--cor-texto-secundario)"
            >
              {formatarNumero(linha.valor)}
            </text>
          </g>
        ))}
        {gradeX.map((linha) => (
          <g key={`gx-${linha.tempo.toFixed(2)}`}>
            <line
              x1={linha.x}
              y1={MARGEM_GRAFICO.topo}
              x2={linha.x}
              y2={ALTURA_GRAFICO - MARGEM_GRAFICO.baixo}
              stroke="var(--cor-borda)"
              strokeWidth={0.5}
              strokeDasharray="3 3"
            />
            <text
              x={linha.x}
              y={ALTURA_GRAFICO - MARGEM_GRAFICO.baixo + 14}
              textAnchor="middle"
              fontSize={9}
              fill="var(--cor-texto-secundario)"
            >
              {formatarNumero(linha.tempo)}s
            </text>
          </g>
        ))}

        {/* Eixo zero horizontal */}
        {escalaMinY < 0 && escalaMaxY > 0 && (
          <line
            x1={MARGEM_GRAFICO.esquerda}
            y1={escalaY(0)}
            x2={LARGURA_GRAFICO - MARGEM_GRAFICO.direita}
            y2={escalaY(0)}
            stroke="var(--cor-texto-secundario)"
            strokeWidth={0.5}
            opacity={0.5}
          />
        )}

        {pontosLinha && (
          <polyline
            points={pontosLinha}
            fill="none"
            stroke={corLinha}
            strokeWidth={2}
            strokeLinejoin="round"
          />
        )}

        {/* Rótulo do eixo Y */}
        <text
          x={12}
          y={MARGEM_GRAFICO.topo + areaAltura / 2}
          textAnchor="middle"
          fontSize={9}
          fill="var(--cor-texto-secundario)"
          transform={`rotate(-90, 12, ${MARGEM_GRAFICO.topo + areaAltura / 2})`}
        >
          {rotuloY}
        </text>

        {/* Rótulo do eixo X */}
        <text
          x={MARGEM_GRAFICO.esquerda + areaLargura / 2}
          y={ALTURA_GRAFICO - 4}
          textAnchor="middle"
          fontSize={9}
          fill="var(--cor-texto-secundario)"
        >
          t (s)
        </text>
      </svg>
    </div>
  );
}

export function SimulacaoCinematica() {
  const [velocidadeInicial, setVelocidadeInicial] = useState(5);
  const [aceleracao, setAceleracao] = useState(1);
  const [executando, setExecutando] = useState(false);
  const [tempoAtual, setTempoAtual] = useState(0);
  const [dadosVelocidade, setDadosVelocidade] = useState<PontoDados[]>([]);
  const [dadosPosicao, setDadosPosicao] = useState<PontoDados[]>([]);

  const referenciaAnimacao = useRef<number>(0);
  const tempoInicioRef = useRef<number | null>(null);
  const tempoAcumuladoRef = useRef(0);

  const posicaoAtual = calcularPosicao(velocidadeInicial, aceleracao, tempoAtual);
  const velocidadeAtual = calcularVelocidade(velocidadeInicial, aceleracao, tempoAtual);

  const posicaoPixelX = limitarValor(
    MARGEM_PISTA + posicaoAtual * ESCALA_PISTA,
    10,
    LARGURA_PISTA - 10,
  );

  useEffect(() => {
    if (!executando) return undefined;

    tempoInicioRef.current = null;

    const loopAnimacao = (marcaTemporal: number) => {
      if (tempoInicioRef.current === null) {
        tempoInicioRef.current = marcaTemporal;
      }

      const deltaSegundos = (marcaTemporal - tempoInicioRef.current) / 1000;
      const novoTempo = tempoAcumuladoRef.current + deltaSegundos;

      if (novoTempo >= DURACAO_MAXIMA) {
        setTempoAtual(DURACAO_MAXIMA);

        const velocidadeFinal = calcularVelocidade(velocidadeInicial, aceleracao, DURACAO_MAXIMA);
        const posicaoFinal = calcularPosicao(velocidadeInicial, aceleracao, DURACAO_MAXIMA);

        setDadosVelocidade((anteriores) => [
          ...anteriores,
          { tempo: DURACAO_MAXIMA, valor: velocidadeFinal },
        ]);
        setDadosPosicao((anteriores) => [
          ...anteriores,
          { tempo: DURACAO_MAXIMA, valor: posicaoFinal },
        ]);

        setExecutando(false);
        return;
      }

      setTempoAtual(novoTempo);

      const velocidade = calcularVelocidade(velocidadeInicial, aceleracao, novoTempo);
      const posicao = calcularPosicao(velocidadeInicial, aceleracao, novoTempo);

      setDadosVelocidade((anteriores) => {
        const ultimoTempo = anteriores.length > 0 ? anteriores[anteriores.length - 1].tempo : -1;
        if (novoTempo - ultimoTempo >= 0.05) {
          return [...anteriores, { tempo: novoTempo, valor: velocidade }];
        }
        return anteriores;
      });

      setDadosPosicao((anteriores) => {
        const ultimoTempo = anteriores.length > 0 ? anteriores[anteriores.length - 1].tempo : -1;
        if (novoTempo - ultimoTempo >= 0.05) {
          return [...anteriores, { tempo: novoTempo, valor: posicao }];
        }
        return anteriores;
      });

      referenciaAnimacao.current = requestAnimationFrame(loopAnimacao);
    };

    referenciaAnimacao.current = requestAnimationFrame(loopAnimacao);

    return () => {
      if (referenciaAnimacao.current) {
        cancelAnimationFrame(referenciaAnimacao.current);
      }
    };
  }, [executando, velocidadeInicial, aceleracao]);

  const alternarExecucao = useCallback(() => {
    if (executando) {
      tempoAcumuladoRef.current = tempoAtual;
      setExecutando(false);
    } else {
      if (tempoAtual >= DURACAO_MAXIMA) return;
      setExecutando(true);
    }
  }, [executando, tempoAtual]);

  const reiniciar = useCallback(() => {
    setExecutando(false);
    setTempoAtual(0);
    setDadosVelocidade([]);
    setDadosPosicao([]);
    tempoAcumuladoRef.current = 0;
    tempoInicioRef.current = null;
    if (referenciaAnimacao.current) {
      cancelAnimationFrame(referenciaAnimacao.current);
    }
  }, []);

  const simulacaoFinalizada = tempoAtual >= DURACAO_MAXIMA;
  const podeEditar = !executando;

  return (
    <div className={estilos.container} role="region" aria-label="Simulação de cinemática">
      <h3 className={estilos.titulo}>Simulação — Movimento Retilíneo Uniformemente Variado</h3>

      <div className={estilos.controles}>
        <div className={estilos.grupoControle}>
          <label className={estilos.rotulo} htmlFor="slider-velocidade">
            Velocidade inicial (v₀)
          </label>
          <input
            id="slider-velocidade"
            className={estilos.slider}
            type="range"
            min={0}
            max={20}
            step={0.5}
            value={velocidadeInicial}
            disabled={!podeEditar}
            onChange={(evento) => {
              setVelocidadeInicial(Number(evento.target.value));
              reiniciar();
            }}
          />
          <span className={estilos.valorSlider}>{formatarNumero(velocidadeInicial)} m/s</span>
        </div>

        <div className={estilos.grupoControle}>
          <label className={estilos.rotulo} htmlFor="slider-aceleracao">
            Aceleração (a)
          </label>
          <input
            id="slider-aceleracao"
            className={estilos.slider}
            type="range"
            min={-5}
            max={5}
            step={0.25}
            value={aceleracao}
            disabled={!podeEditar}
            onChange={(evento) => {
              setAceleracao(Number(evento.target.value));
              reiniciar();
            }}
          />
          <span className={estilos.valorSlider}>{formatarNumero(aceleracao)} m/s²</span>
        </div>

        <div className={estilos.botoes}>
          <button
            className={estilos.botao}
            data-ativo={executando}
            onClick={alternarExecucao}
            disabled={simulacaoFinalizada && !executando}
            aria-label={executando ? 'Pausar simulação' : 'Iniciar simulação'}
          >
            {executando ? '⏸ Pausar' : '▶ Iniciar'}
          </button>
          <button className={estilos.botao} onClick={reiniciar} aria-label="Reiniciar simulação">
            ↺ Reiniciar
          </button>
        </div>
      </div>

      <div className={estilos.pistaContainer}>
        <svg
          viewBox={`0 0 ${LARGURA_PISTA} ${ALTURA_PISTA}`}
          preserveAspectRatio="xMidYMid meet"
          width="100%"
          role="img"
          aria-label={`Objeto na posição ${formatarNumero(posicaoAtual)} metros com velocidade ${formatarNumero(velocidadeAtual)} metros por segundo`}
        >
          <defs>
            <marker
              id="setaVelocidade"
              markerWidth="6"
              markerHeight="4"
              refX="5"
              refY="2"
              orient="auto"
            >
              <path d="M0,0 L6,2 L0,4 Z" fill="var(--cor-primaria-400)" />
            </marker>
            <marker
              id="setaAceleracao"
              markerWidth="6"
              markerHeight="4"
              refX="5"
              refY="2"
              orient="auto"
            >
              <path d="M0,0 L6,2 L0,4 Z" fill="var(--cor-alerta-400)" />
            </marker>
          </defs>

          {/* Linha da pista */}
          <line
            x1={0}
            y1={PISTA_Y}
            x2={LARGURA_PISTA}
            y2={PISTA_Y}
            stroke="var(--cor-borda)"
            strokeWidth={2}
          />

          <MarcadoresDistancia escala={ESCALA_PISTA} />

          <SetaVelocidade posicaoX={posicaoPixelX} velocidade={velocidadeAtual} />
          <SetaAceleracao posicaoX={posicaoPixelX} aceleracao={aceleracao} />

          {/* Objeto (círculo) */}
          <circle
            cx={posicaoPixelX}
            cy={PISTA_Y - 8}
            r={8}
            fill="var(--cor-acento-400)"
            stroke="var(--cor-acento-400)"
            strokeWidth={1.5}
            opacity={0.9}
          />
        </svg>
      </div>

      <div className={estilos.metricas}>
        <div className={estilos.metrica}>
          <span className={estilos.metricaRotulo}>Tempo (t)</span>
          <span className={estilos.metricaValor}>{formatarNumero(tempoAtual, 2)} s</span>
        </div>
        <div className={estilos.metrica}>
          <span className={estilos.metricaRotulo}>Posição (s)</span>
          <span className={estilos.metricaValor}>{formatarNumero(posicaoAtual, 2)} m</span>
        </div>
        <div className={estilos.metrica}>
          <span className={estilos.metricaRotulo}>Velocidade (v)</span>
          <span className={estilos.metricaValor}>{formatarNumero(velocidadeAtual, 2)} m/s</span>
        </div>
      </div>

      <div className={estilos.graficos}>
        <GraficoPequeno
          titulo="Velocidade × Tempo"
          dados={dadosVelocidade}
          corLinha="var(--cor-primaria-400)"
          rotuloY="v (m/s)"
          tempoMaximo={DURACAO_MAXIMA}
        />
        <GraficoPequeno
          titulo="Posição × Tempo"
          dados={dadosPosicao}
          corLinha="var(--cor-acento-400)"
          rotuloY="s (m)"
          tempoMaximo={DURACAO_MAXIMA}
        />
      </div>

      <div className={estilos.formulas}>
        <span>s = s₀ + v₀·t + ½·a·t²</span>
        <span>v = v₀ + a·t</span>
      </div>
    </div>
  );
}
