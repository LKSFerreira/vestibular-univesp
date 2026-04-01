# Fundação Arquitetural — Vestibular UNIVESP

> **Tipo:** Ad-hoc · **Data:** 2026-03-31 · **Status:** Concluído

## Contexto

O repositório estava em estado 100% documental — PRD, README e roadmap existiam, mas nenhuma decisão técnica havia sido materializada. A pasta `.metadocs/` continha learnings legados de outro projeto ("Sem Susto") que contaminavam o contexto do agente. O projeto precisava sair da fase de "falar sobre o que vai fazer" para uma fundação técnica real, pronta para desenvolvimento em agent dev, com deadline de 26 de abril (26 dias).

## O que foi feito

### Saneamento
- Removidos 3 learnings legados (`docker_learning.md`, `integracao_mercado_pago_learning.md`, `supabase_learning.md`)
- `.gitignore` limpo de referências a datasets e scripts de outro projeto

### Stack definida e documentada
- Frontend: Vite + React 19 + TypeScript (strict)
- Estado: Zustand · Animações: Framer Motion · Gráficos: D3.js + SVG · Math: KaTeX
- Estilos: CSS Modules + Custom Properties · Roteamento: React Router v7
- Persistência MVP: localStorage (zero backend)
- Testes: Vitest + Testing Library · Deploy: Vercel
- 10 ADRs documentados em `.metadocs/decisoes_de_stack.md`

### Camada de domínio (TypeScript puro, zero dependência de framework)
- `dominio/grafo/` — Tipos, busca, resolução de dependências, validação estrutural
- `dominio/sessao/` — Máquina de estados com 7 transições validadas, pilha de regressão com retorno contextual
- `dominio/motor/` — Interpretador de eventos → sinais pedagógicos + avaliador com heurísticas v1 de decisão
- `dominio/progresso/` — Cálculo de nível de domínio por taxa de acertos
- `dominio/telemetria/` — Event bus pub/sub com categorias separadas (interface/pedagógico/sistema)

### Conteúdo
- Grafo de conhecimento com 7 nós: Operações Algébricas → Fatoração → Equação 2º Grau → Discriminante → Raízes → Leitura de Gráfico → Função Quadrática
- 10 dependências explícitas entre nós

### Interface
- 3 páginas funcionais: Início (seleção de tópico), Sessão (placeholder para módulo interativo com pré-requisitos), Progresso (dashboard com indicadores de nível)
- Design system com tokens CSS, dark mode automático, responsivo e acessível

### Documentação
- `.metadocs/arquitetura.md` — Diagrama de componentes, máquina de estados, fluxo de dados, modelo de dados
- `.metadocs/decisoes_de_stack.md` — 10 ADRs completos
- `README.md` reescrito com stack, setup, arquitetura e trilha do MVP
- `roadmap.md` atualizado: Fases 0, 1 e 2 marcadas como concluídas

## Validação

| Verificação | Resultado |
|---|---|
| `npm run test` | 26 testes passando |
| `npm run typecheck` | Sem erros |
| `npm run lint` | Sem erros |
| `npm run build` | Build em 1.12s (240KB JS, 77KB gzip) |
| `npm run dev` | Dev server em 315ms |
| Browser — 3 páginas | Renderizando corretamente |

## Impacto no roadmap

- **Fase 0** (Consolidação Documental): concluída
- **Fase 1** (Arquitetura e Stack): concluída
- **Fase 2** (Fundação Técnica): concluída
- **Próximo:** Fase 3 — Modelagem do domínio e conteúdo interativo do MVP
