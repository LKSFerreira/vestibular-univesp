# Reestruturação UI — Layout 3 Painéis

> **Tipo:** Ad-hoc
> **Data:** 2026-04-07
> **Status:** Concluído

## Contexto

A interface original do projeto consistia em 3 páginas independentes (Inicio, Sessao, Progresso) com layout linear vertical, sem sidebar e sem navegação estruturada. O usuário solicitou uma reestruturação completa com base em um esboço que definia 3 painéis lado a lado.

## O que foi feito

### Parte 1 — Layout Estrutural + Ementa + Navegação

**Layout de 3 painéis:**
- Sidebar retrátil à esquerda (280px) com toggle via ícone SVG de panel-left-close/open
- Painel central para conteúdo textual/explicativo com scroll independente
- Painel visual à direita (~38%) para exibição de recursos visuais e interativos

**Ementa do vestibular em JSON estruturado:**
- Tipos definidos em `src/conteudo/tipos.ts` (Disciplina, Topico, ConteudoTopico)
- Dados completos em `src/conteudo/ementa.ts` com todas as 8 disciplinas do vestibular e seus tópicos (fonte: `.metadocs/o_que_estudar.md`)
- Um tópico por disciplina possui conteúdo-template completo para guiar a produção de conteúdo futura

**Estado global com Zustand:**
- Store em `src/stores/navegacaoStore.ts` com persistência em localStorage
- Gerencia: sidebar toggle, accordion de disciplinas (uma aberta por vez), memória de seleção de tópico por disciplina

### Parte 2 — Ementa como Home + Limpeza de Menu

**Ementa como tela inicial:**
- A tela padrão (Home) agora exibe a Ementa de Estudos com texto explicativo e índice completo das 8 disciplinas com porcentagens de peso
- Painel visual exibe estatísticas rápidas (8 disciplinas, 31 tópicos, 10 disponíveis)

**Menu lateral limpo:**
- Porcentagens removidas da sidebar — exibe apenas nomes de disciplinas e tópicos
- Badge "em breve" mantida para tópicos indisponíveis
- Título "📋 Ementa" na sidebar é clicável e retorna à Home

**Índice interativo:**
- Cada tópico no índice da Ementa navega diretamente ao conteúdo do tópico
- Tópicos "em breve" ficam desabilitados com opacidade reduzida

**Ícones SVG modernos:**
- Botões ✕ e ☰ substituídos por ícones SVG inline (panel-left-close e panel-left-open)

## Dark Mode

Dark mode agora é o padrão da aplicação (forçado, sem media query). Tokens de cor, sombras e backgrounds ajustados para contexto escuro.

## Arquivos criados

| Arquivo | Propósito |
|---|---|
| `src/conteudo/tipos.ts` | Tipos da ementa |
| `src/conteudo/ementa.ts` | Dados de 8 disciplinas |
| `src/stores/navegacaoStore.ts` | Store Zustand com persistência |
| `src/componentes/layout/LayoutEstudo.tsx` | Layout grid de 3 painéis |
| `src/componentes/layout/LayoutEstudo.module.css` | Estilos do layout |
| `src/componentes/ementa/PainelEmenta.tsx` | Sidebar com accordion |
| `src/componentes/ementa/PainelEmenta.module.css` | Estilos da sidebar |
| `src/componentes/conteudo/PainelConteudo.tsx` | Painel central + Home da Ementa |
| `src/componentes/conteudo/PainelConteudo.module.css` | Estilos do conteúdo |
| `src/componentes/visual/PainelVisual.tsx` | Painel visual com estatísticas |
| `src/componentes/visual/PainelVisual.module.css` | Estilos do painel visual |

## Arquivos modificados

| Arquivo | Mudança |
|---|---|
| `src/estilos/tokens.css` | Dark mode como padrão, tokens de sidebar/layout |
| `src/estilos/global.css` | Fullscreen layout (100dvh, overflow hidden) |
| `src/estilos/animacoes.css` | Novas keyframes (slide-in, accordion, content appear) |
| `src/App.tsx` | Rota única com LayoutEstudo |
| `vite.config.ts` | Alias @stores |
| `tsconfig.app.json` | Path alias @stores |

## Validação

- `npm run typecheck` — sem erros
- `npm run lint` — sem erros
- `npm run build` — 30 módulos compilados em 339ms
- Verificação visual completa no browser (sidebar toggle, accordion, persistência, navegação)
