<div align="center">
  <h1>Vestibular UNIVESP</h1>
  <p>
    <strong>Plataforma web interativa de aprendizado adaptativo para matemática e preparação acadêmica.</strong>
  </p>
  <p>
    O foco do produto é identificar lacunas reais de compreensão, regredir com contexto até o pré-requisito correto
    e devolver o estudante ao problema original sem quebrar o fluxo de raciocínio.
  </p>
  <p>
    <img alt="Status do projeto" src="https://img.shields.io/badge/status-fundação%20técnica-0F766E?style=for-the-badge">
    <img alt="Fase atual" src="https://img.shields.io/badge/fase-scaffold%20concluído-1D4ED8?style=for-the-badge">
    <img alt="MVP" src="https://img.shields.io/badge/mvp-matemática%20adaptativa-F59E0B?style=for-the-badge">
  </p>
</div>

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

```
┌──────────────────────────────────────────────────┐
│                   BROWSER (SPA)                  │
│                                                  │
│  Páginas ─── Componentes ─── Hooks ─── Stores    │
│                     │                            │
│          ┌──────────┴──────────┐                 │
│          │  Domínio (TS puro)  │                 │
│          │                     │                 │
│          │ Grafo · Sessão ·    │                 │
│          │ Motor · Progresso · │                 │
│          │ Telemetria          │                 │
│          └──────────┬──────────┘                 │
│                     │                            │
│          ┌──────────┴──────────┐                 │
│          │   Infraestrutura    │                 │
│          │   (localStorage)    │                 │
│          └─────────────────────┘                 │
└──────────────────────────────────────────────────┘
```

> A camada de domínio é TypeScript puro sem dependência de framework. O motor adaptativo, sessão e grafo são testáveis isoladamente.

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
│   ├── conteudo/               # Dados do grafo versionados como TS
│   ├── componentes/            # Componentes React
│   ├── hooks/                  # Custom hooks
│   ├── paginas/                # Páginas/rotas
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
| [.metadocs/decisoes_de_stack.md](./.metadocs/decisoes_de_stack.md) | ADR com 10 decisões técnicas documentadas |
| [.metadocs/roadmap.md](./.metadocs/roadmap.md) | Roadmap de evolução do projeto |
| [AGENTS.md](./AGENTS.md) | Regras operacionais do agente |

## Trilha do MVP

A trilha inicial do MVP é **Função do 2º Grau**, com 7 nós de conhecimento:

1. Operações Algébricas Básicas
2. Fatoração
3. Equação do 2º Grau
4. Discriminante (Delta)
5. Raízes (Bhaskara)
6. Leitura de Gráfico de Parábola
7. Função Quadrática Completa

O motor adaptativo monitora as interações do usuário e decide automaticamente quando regredir para um pré-requisito, reforçar o conceito atual ou avançar.

## Licenciamento

Licença ainda não definida.
