# Decisões de Stack — Vestibular UNIVESP

> Registro das decisões técnicas da fase de fundação do projeto.
> Cada decisão segue o formato: Contexto → Decisão → Alternativas → Racional.

---

## DS-001: Framework de Frontend

**Contexto:** O produto exige alta interatividade, manipulação visual de gráficos, animações em tempo real e estados de sessão complexos.

**Decisão:** Vite + React 19 + TypeScript.

**Alternativas consideradas:**
- Next.js: SSR desnecessário para SPA educacional; overhead de configuração sem benefício.
- Svelte: ecossistema menor para libs de math, D3 e animação; menor pool de mão de obra.
- Angular: verbosidade excessiva para prototipagem rápida.

**Racional:** React tem o maior ecossistema para componentes interativos, matemáticos e de visualização. Vite oferece dev server rápido e build otimizado sem config excessiva.

---

## DS-002: Gerenciamento de Estado

**Decisão:** Zustand.

**Alternativas:**
- Redux Toolkit: boilerplate excessivo para MVP.
- Jotai/Recoil: atomicidade desnecessária nesta fase.
- Context API: performance insuficiente para estados frequentes (sessão, motor).

**Racional:** Zustand é leve (~1KB), sem boilerplate, com API minimal e middleware de persistência nativo.

---

## DS-003: Renderização Matemática

**Decisão:** KaTeX.

**Alternativas:**
- MathJax: mais lento, mais pesado, suporte legado desnecessário.
- MathLive: editor interativo completo — overkill para renderização.

**Racional:** KaTeX renderiza fórmulas ~100x mais rápido que MathJax e tem bundle significativamente menor.

---

## DS-004: Gráficos Interativos

**Decisão:** D3.js + SVG.

**Alternativas:**
- Chart.js: declarativo demais, pouca flexibilidade para manipulação direta.
- Plotly: pesado, mais voltado para dashboards.
- Canvas puro: sem acessibilidade nativa, sem DOM para interação.

**Racional:** D3 permite controle pixel-level sobre SVG com interação direta (drag, zoom, hover), essencial para gráficos de função manipuláveis.

---

## DS-005: Animações

**Decisão:** Framer Motion.

**Alternativas:**
- GSAP: mais poder, mas API imperativa e licença comercial.
- CSS nativo: insuficiente para orquestração de transições de sessão.
- React Spring: API menos ergonômica para transições de layout.

**Racional:** Framer Motion oferece API declarativa, AnimatePresence para monte/desmonte, e integração nativa com React.

---

## DS-006: Backend

**Decisão:** Nenhum no MVP. 100% client-side.

**Alternativas:**
- Supabase: adiciona complexidade de setup, auth, RLS, deploy.
- Firebase: vendor lock-in do Google.
- API própria (Fastify/Express): semanas de setup para algo que não é o valor central.

**Racional:** O motor adaptativo e a experiência interativa rodam no browser. localStorage resolve persistência do MVP. Backend será adicionado quando houver necessidade real (multi-device sync, analytics server-side).

---

## DS-007: Persistência do Grafo

**Decisão:** TypeScript estático versionado no Git.

**Alternativas:**
- JSON externo: perde tipagem estática.
- Banco relacional: overhead de setup e migração.
- Neo4j: banco de grafos poderoso, mas desnecessário com 7 nós.

**Racional:** Com ~7 nós no MVP, um arquivo TS com tipos fortes é mais seguro, mais rápido e infinitamente mais simples que qualquer banco.

---

## DS-008: Estilos

**Decisão:** CSS Modules + Custom Properties (Vanilla CSS).

**Alternativas:**
- Tailwind CSS: classes utilitárias poluem JSX; decisão estética.
- Styled Components: runtime JS desnecessário para CSS.
- CSS-in-JS (Emotion): idem.

**Racional:** CSS Modules dão escopo local sem runtime. Custom properties centralizam tokens do design system e suportam dark mode via media query.

---

## DS-009: Deploy

**Decisão:** Vercel (free tier).

**Alternativas:**
- GitHub Pages: sem preview deploys, config manual.
- Netlify: equivalente funcional; Vercel escolhido por familiaridade.
- Railway: voltado para backend; overkill para SPA.

**Racional:** Zero config para Vite+React, preview deploys automáticos por branch, CDN global.

---

## DS-010: Testes

**Decisão:** Vitest + Testing Library.

**Alternativas:**
- Jest: compatível, mas config mais pesada com Vite.
- Cypress/Playwright: E2E será adicionado depois; foco inicial em testes unitários do domínio.

**Racional:** Vitest reutiliza a config do Vite (aliases, transformers), tem API compatível com Jest e é significativamente mais rápido.
