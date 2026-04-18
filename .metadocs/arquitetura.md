# Arquitetura Inicial — Vestibular UNIVESP

## Visão Geral

O sistema é uma **SPA (Single Page Application)** centrada em uma experiência de aprendizagem adaptativa. A lógica core é inteiramente client-side, com persistência local no MVP.

> Estado atual da implementação: a aplicação já opera com um layout de estudo em `3 painéis`, ementa multi-disciplina, conteúdo rico, quizzes, visualizações interativas e dashboard de progresso. O motor adaptativo continua sendo o norte do produto, mas ainda não está ligado ponta a ponta à UX principal.

```
┌─────────────────────────────────────────────────────────────┐
│                        BROWSER (SPA)                        │
│                                                             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────┐  │
│  │   Páginas    │  │  Componentes │  │  Componentes     │  │
│  │  (Router)    │──│  Interativos │  │  de Progresso    │  │
│  └──────┬───────┘  └──────┬───────┘  └────────┬─────────┘  │
│         │                 │                    │            │
│  ┌──────┴─────────────────┴────────────────────┴─────────┐  │
│  │                    Hooks React                        │  │
│  │   useSessao · useMotor · useProgresso · useTelemetria │  │
│  └──────┬────────────────────────────────────────┬───────┘  │
│         │              FRONTEIRA                 │          │
│  ┌──────┴────────────────────────────────────────┴───────┐  │
│  │              Camada de Domínio (TS puro)              │  │
│  │                                                       │  │
│  │  ┌─────────┐  ┌─────────┐  ┌──────────┐ ┌─────────┐  │  │
│  │  │  Grafo  │  │ Sessão  │  │  Motor   │ │Progresso│  │  │
│  │  │Conhecim.│──│Aprend.  │──│Adaptativo│─│         │  │  │
│  │  └─────────┘  └─────────┘  └──────────┘ └─────────┘  │  │
│  │                                                       │  │
│  │  ┌──────────────────────────────────────────────────┐ │  │
│  │  │                  Telemetria                       │ │  │
│  │  └──────────────────────────────────────────────────┘ │  │
│  └───────────────────────────┬───────────────────────────┘  │
│                              │                              │
│  ┌───────────────────────────┴───────────────────────────┐  │
│  │               Infraestrutura (Adapters)               │  │
│  │            localStorage · Exportador (futuro)         │  │
│  └───────────────────────────────────────────────────────┘  │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐    │
│  │        Conteúdo Versionado (JSON/TS estático)       │    │
│  │   Grafos · Módulos Interativos · Critérios          │    │
│  └─────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
```

## Camadas do Sistema

### 1. Domínio (`src/dominio/`)

Lógica pura TypeScript, **zero dependência de React ou framework**. Testável isoladamente.

| Módulo | Responsabilidade |
|---|---|
| `grafo/` | Tipos e operações sobre o grafo de conhecimento (busca, dependências, validação) |
| `sessao/` | Máquina de estados da sessão de aprendizagem (transições, regressão, retorno) |
| `motor/` | Motor adaptativo: interpreta eventos em sinais e decide ação (continuar/regredir/reforçar/concluir) |
| `progresso/` | Cálculo de nível de domínio por nó e registro de acertos/erros |
| `telemetria/` | Event bus para registro de eventos separados em interface/pedagógico/sistema |

### 2. Conteúdo (`src/conteudo/`)

O conteúdo está dividido em dois eixos:

- **Eixo adaptativo**: grafo versionado da trilha `Função do 2º Grau`, com 7 nós.
- **Eixo de estudo expandido**: ementa do vestibular, tópicos por disciplina, seções ricas, exercícios e metadados visuais.

A trilha "Função do 2º Grau" possui 7 nós:

```
Operações Algébricas → Fatoração → Equação 2º Grau → Discriminante → Raízes → Leitura Gráfico → Função Quadrática
```

### 3. Componentes (`src/componentes/`)

Componentes React organizados por responsabilidade:
- `layout/` — Estrutura principal da experiência de estudo
- `ementa/` — Navegação por disciplinas e tópicos
- `conteudo/` — Renderização textual, fórmulas, exemplos e quizzes
- `visual/` — Dashboard, gráficos de desempenho e painel de progresso
- `interativo/` — Simulações e visualizações por disciplina

### 4. Infraestrutura (`src/infraestrutura/`)

Adapters de persistência. No MVP, `localStorage`. Projetado para substituição por Supabase/Firebase sem alterar domínio nem componentes.

## Observação sobre Fluxos

- O diretório `src/paginas/` ainda preserva um fluxo legado baseado em rotas.
- O ponto de entrada atual da aplicação usa `LayoutEstudo` como shell principal.
- O domínio adaptativo permanece válido e testado, mas sua integração com a camada nova de conteúdo ainda é incremental.

## Motor Adaptativo — Máquina de Estados

```
                    ┌─────────────────────┐
                    │ escolhendo_topico   │
                    └──────────┬──────────┘
                               │
                    ┌──────────▼──────────┐
              ┌────►│    interagindo      │◄───────────┐
              │     └──────────┬──────────┘            │
              │                │                       │
              │     ┌──────────▼──────────┐            │
              │     │     avaliando       │            │
              │     └───┬────────┬────────┘            │
              │         │        │                     │
              │    concluir   regredir          ┌──────┴──────┐
              │         │        │              │  retornando │
              │         ▼        ▼              └─────────────┘
              │  ┌──────────┐  ┌──────────┐           ▲
              │  │concluída │  │regredindo│           │
              │  └──────────┘  └────┬─────┘           │
              │                     │                  │
              │              ┌──────▼──────┐           │
              └──────────────│ reforçando  ├───────────┘
                             └─────────────┘
```

### Regras de decisão (heurísticas v1)

| Condição | Decisão | Ação |
|---|---|---|
| ≥3 erros no nó atual | `Regredir` | Navega para o primeiro pré-requisito |
| Repetição improdutiva detectada | `Regredir` | Idem |
| ≥3 acertos com confiança alta | `Concluir` | Marca nó como dominado |
| Hesitação ou abandono parcial | `Reforçar` | Oferece reforço no conceito atual |
| Nenhum sinal significativo | `Continuar` | Mantém fluxo normal |

## Fluxo de Dados

```
Interação do usuário → EventoInteracao (bruto)
           ↓
     Interpretador → SinalInterpretado (acerto/erro/hesitação/...)
           ↓
       Avaliador → DecisaoMotor (continuar/regredir/reforçar/concluir)
           ↓
    Máquina de Sessão → Transição de estado + navegação
           ↓
     Interface React → Rerenderiza com novo contexto
```

## Modelo de Dados Resumido

- **NoConhecimento**: conceito ensinável com pré-requisitos, critérios de domínio e módulo interativo
- **GrafoConhecimento**: coleção de nós + arestas de dependência
- **Sessao**: estado da sessão, nó atual, pilha de regressão, histórico
- **ProgressoNo**: acertos, erros, tentativas e nível de domínio por nó
- **EventoTelemetria**: evento categorizado (interface/pedagógico/sistema)
- **SinalInterpretado**: sinal pedagógico derivado de eventos brutos
- **DecisaoMotor**: resultado da avaliação do motor adaptativo

## Persistência (MVP)

| Dado | Estratégia |
|---|---|
| Grafo de conhecimento | TypeScript estático versionado no repo |
| Sessão ativa | `localStorage` com chave por sessão |
| Progresso do usuário | `localStorage` com chave por trilha+usuário |
| Identidade do usuário | UUID anônimo em `localStorage` |
| Telemetria | Buffer em memória + `localStorage` |

## Evolução Pós-MVP

Quando o MVP estiver validado, a arquitetura permite:
1. **Backend**: Adicionar Supabase/Firebase substituindo adapters em `infraestrutura/`
2. **Auth**: Migrar de UUID anônimo para auth real sem alterar domínio
3. **Telemetria**: Conectar PostHog/Amplitude no event bus existente
4. **Conteúdo**: Migrar de TS estático para CMS ou API de conteúdo
