import { lazy, Suspense } from 'react';

/**
 * Mapeamento de disciplina → componente interativo.
 * Usa lazy loading para não carregar todos os componentes de uma vez.
 */

const GraficoFuncoes = lazy(() =>
  import('./GraficoFuncoes').then(m => ({ default: m.GraficoFuncoes }))
);
const SimulacaoCinematica = lazy(() =>
  import('./SimulacaoCinematica').then(m => ({ default: m.SimulacaoCinematica }))
);
const LigacoesQuimicas = lazy(() =>
  import('./LigacoesQuimicas').then(m => ({ default: m.LigacoesQuimicas }))
);
const DiagramaCelula = lazy(() =>
  import('./DiagramaCelula').then(m => ({ default: m.DiagramaCelula }))
);
const LinhaDoTempo = lazy(() =>
  import('./LinhaDoTempo').then(m => ({ default: m.LinhaDoTempo }))
);
const MapaBiomas = lazy(() =>
  import('./MapaBiomas').then(m => ({ default: m.MapaBiomas }))
);
const AnaliseSintatica = lazy(() =>
  import('./AnaliseSintatica').then(m => ({ default: m.AnaliseSintatica }))
);
const OrdenacaoFrases = lazy(() =>
  import('./OrdenacaoFrases').then(m => ({ default: m.OrdenacaoFrases }))
);

const MAPA_INTERATIVO: Record<string, React.LazyExoticComponent<React.ComponentType>> = {
  matematica: GraficoFuncoes,
  fisica: SimulacaoCinematica,
  quimica: LigacoesQuimicas,
  biologia: DiagramaCelula,
  historia: LinhaDoTempo,
  geografia: MapaBiomas,
  portugues: AnaliseSintatica,
  ingles: OrdenacaoFrases,
};

function FallbackCarregando() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--cor-texto-secundario)' }}>
      Carregando visualização...
    </div>
  );
}

interface VisualizacaoInterativaProps {
  readonly disciplinaId: string;
}

export function VisualizacaoInterativa({ disciplinaId }: VisualizacaoInterativaProps) {
  const Componente = MAPA_INTERATIVO[disciplinaId];

  if (!Componente) return null;

  return (
    <Suspense fallback={<FallbackCarregando />}>
      <Componente />
    </Suspense>
  );
}
