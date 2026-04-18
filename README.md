<div align="center">
  <h1>Vestibular UNIVESP</h1>
  <p>
    <strong>Plataforma web interativa para preparação vestibular, com base adaptativa e experiência de estudo rica em conteúdo.</strong>
  </p>
  <p>
    O norte do produto continua sendo o diagnóstico adaptativo de lacunas de compreensão. No estado atual da implementação,
    a aplicação já combina ementa multi-disciplina, conteúdo estruturado, quizzes, visualizações interativas e dashboard de progresso.
  </p>
  <p>
    <img alt="Status do projeto" src="https://img.shields.io/badge/status-camada%20de%20estudo%20ativa-0F766E?style=for-the-badge">
    <img alt="Fase atual" src="https://img.shields.io/badge/fase-ui%20conte%C3%BAdo%20e%20progresso-1D4ED8?style=for-the-badge">
    <img alt="Norte do MVP" src="https://img.shields.io/badge/norte-mvp%20adaptativo-F59E0B?style=for-the-badge">
  </p>
</div>

## Estado Atual da Implementação

- Layout principal em `3 painéis`: ementa lateral, conteúdo central e painel visual/progresso.
- `8 disciplinas` e `31 tópicos` disponíveis na base local, com conteúdo rico, exemplos e exercícios.
- Quizzes com persistência de progresso por tópico em `localStorage`.
- Visualizações interativas lazy-loaded por disciplina.
- Camada de domínio do motor adaptativo implementada e testada isoladamente.
- Integração ponta a ponta entre a UX atual e o motor adaptativo ainda em evolução.

## Stack Técnica

| Camada | Tecnologia |
| --- | --- |
| Frontend | React 19 + TypeScript (Vite) |
| Renderização math | KaTeX |
| Gráficos interativos | D3.js + SVG |
| Animações | Framer Motion |
| State management | Zustand |
| Roteamento | React Router v7 |
| Estilos | CSS Modules + Custom Properties |
| Testes | Vitest + Testing Library |
| Lint/Format | ESLint 9 + Prettier |
| Deploy | Vercel (free tier) |
| Persistência (MVP) | localStorage |

## Arquitetura

```text
┌─────────────────────────────────────────────────────────────┐
│                        BROWSER (SPA)                        │
│                                                             │
│  Layout ─── Ementa ─── Conteúdo ─── Painel Visual           │
│                      │                                      │
│        ┌─────────────┴─────────────┐                        │
│        │  Stores · Hooks · UI      │                        │
│        └─────────────┬─────────────┘                        │
│                      │                                      │
│        ┌─────────────┴─────────────┐                        │
│        │     Domínio (TS puro)     │                        │
│        │ Grafo · Sessão · Motor ·  │                        │
│        │ Progresso · Telemetria    │                        │
│        └─────────────┬─────────────┘                        │
│                      │                                      │
│        ┌─────────────┴─────────────┐                        │
│        │      Infraestrutura       │                        │
│        │       localStorage        │                        │
│        └─────────────┬─────────────┘                        │
│                      │                                      │
│        ┌─────────────┴─────────────┐                        │
│        │ Conteúdo versionado em TS │                        │
│        │ Ementa · Tópicos · Grafo  │                        │
│        └───────────────────────────┘                        │
└─────────────────────────────────────────────────────────────┘
```

> A camada de domínio continua desacoplada de React. O motor adaptativo, sessão e grafo permanecem testáveis isoladamente, enquanto a UI atual já opera como shell de estudo multi-disciplina.

## Setup Local

```bash
# Instalar dependências
npm install

# Iniciar dev server
npm run dev

# Rodar testes
npm run test

# Typecheck
npm run typecheck

# Lint
npm run lint

# Build de produção
npm run build
```

## Estrutura do Repositório

```text
.
├── .agents/                    # Regras, skills e workflows do agente
├── .metadocs/                  # Roadmap, arquitetura, decisões de stack
│   ├── arquitetura.md          # Documento de arquitetura do sistema
│   ├── decisoes_de_stack.md    # ADR com decisões técnicas
│   └── roadmap.md              # Roadmap de evolução do projeto
├── src/
│   ├── dominio/                # Lógica pura (zero dependência de framework)
│   │   ├── grafo/              # Grafo de conhecimento
│   │   ├── sessao/             # Máquina de estados da sessão
│   │   ├── motor/              # Motor adaptativo (interpretador + avaliador)
│   │   ├── progresso/          # Cálculo de nível de domínio
│   │   └── telemetria/         # Event bus de telemetria
│   ├── conteudo/               # Ementa, tópicos, exercícios e grafo matemático
│   ├── componentes/            # Layout, ementa, conteúdo, visual e interativos
│   ├── hooks/                  # Custom hooks
│   ├── paginas/                # Fluxo legado baseado em rotas
│   ├── infraestrutura/         # Adapters de persistência
│   └── estilos/                # Design system (tokens, reset, animações)
├── AGENTS.md
├── PRD.md
├── README.md
├── package.json
├── tsconfig.json
├── vite.config.ts
└── vitest.config.ts
```

## Documentação

| Documento | Finalidade |
| --- | --- |
| [PRD.md](./PRD.md) | Requisitos de produto, MVP, domínio, UX/UI e direcionadores |
| [.metadocs/arquitetura.md](./.metadocs/arquitetura.md) | Arquitetura do sistema, camadas, máquina de estados e fluxo de dados |
| [.metadocs/decisoes_de_stack.md](./.metadocs/decisoes_de_stack.md) | ADR com decisões técnicas documentadas |
| [.metadocs/roadmap.md](./.metadocs/roadmap.md) | Roadmap de evolução do projeto |
| [AGENTS.md](./AGENTS.md) | Regras operacionais do agente |

## Validação Mínima

Antes de considerar uma alteração pronta para integração local, a base deve passar por:

- `npm run lint`
- `npm run test`
- `npm run typecheck`
- `npm run build`

## Norte do MVP Adaptativo

O recorte principal de validação pedagógica continua sendo **Função do 2º Grau**, com 7 nós de conhecimento:

1. Operações Algébricas Básicas
2. Fatoração
3. Equação do 2º Grau
4. Discriminante (Delta)
5. Raízes (Bhaskara)
6. Leitura de Gráfico de Parábola
7. Função Quadrática Completa

Esse é o eixo onde o motor adaptativo deve ser conectado ponta a ponta. A camada multi-disciplina atual funciona como base de conteúdo, navegação, progresso e UX, mas não substitui essa validação central.

## Licenciamento

Licença ainda não definida.
