

# Roadmap do Projeto: Vestibular UNIVESP

## Status Atual

- [x] `PRD.md` refinado com escopo de MVP, entidades de domínio, requisitos de UX/UI e direcionadores técnicos.
- [x] `README.md` reescrito para refletir o produto real e o estado documental do repositório.
- [x] Arquitetura inicial do sistema definida e documentada.
- [x] Stack do frontend, backend, persistência e telemetria decidida.
- [x] Repositório da aplicação scaffoldado.
- [x] Camada local de estudo expandida com ementa, conteúdo rico, quizzes, progresso e painel visual multi-disciplina.
- [ ] MVP funcional implementado para a trilha de `função do 2º grau`.
- [ ] Integração ponta a ponta entre a UX atual e o motor adaptativo ainda não concluída.

## Como este roadmap deve ser usado

- [ ] Cada item concluído deve ser marcado com `- [x]`.
- [ ] Sempre que uma decisão alterar escopo, arquitetura ou experiência principal, atualizar também `PRD.md` e `README.md`.
- [ ] Sempre que uma fase gerar uma decisão estrutural importante, registrar o racional em `.metadocs/`.
- [ ] Não iniciar etapas de implementação sem que os critérios de saída da fase anterior estejam atendidos.

## Premissas e Limites do MVP

- [x] O norte do MVP adaptativo permanece restrito ao domínio de `matemática`.
- [x] A trilha principal de validação permanece restrita ao tema `função do 2º grau`.
- [x] O objetivo central continua sendo validar a mecânica de regressão adaptativa, não a cobertura completa de múltiplas disciplinas.
- [x] A implementação local já contém uma camada expandida de estudo multi-disciplina, tratada como shell de conteúdo, navegação e progresso.
- [x] O produto deve priorizar `interação visual`, `diagnóstico adaptativo`, `retomada contextual` e `telemetria`.
- [ ] Funcionalidades fora de escopo, como `gamificação profunda`, `marketplace`, `pagamentos` e `app mobile nativo`, devem continuar bloqueadas até revisão formal do PRD.

## Nota de Consistência

- [x] Este roadmap continua orientando o `MVP adaptativo`.
- [x] A base local já avançou em `UX/UI`, `conteúdo`, `dashboard` e `visualizações interativas` além do escopo originalmente descrito.
- [x] Essas entregas devem ser interpretadas como suporte à experiência de estudo e não como prova de que o fluxo adaptativo principal já está concluído.

---

## FASE 0: Consolidação Documental e Saneamento de Contexto

### Objetivo da fase
Garantir que a base documental do repositório esteja coerente com o produto atual antes de decisões de arquitetura e início do código.

### Etapa 0.1: Consolidação do norte do produto

- [x] Refinar `PRD.md` para transformar visão em insumo de arquitetura.
- [x] Reescrever `README.md` para alinhar posicionamento, escopo e estado atual do projeto.
- [x] Confirmar que o MVP está delimitado em `matemática` e `função do 2º grau`.
- [x] Confirmar que `UX/UI`, `requisitos não funcionais` e `entidades de domínio` já constam no PRD.

Arquivos e artefatos de referência:
- `PRD.md`
- `README.md`

### Etapa 0.2: Saneamento da documentação complementar

- [x] Revisar documentos existentes em `.metadocs/` e identificar materiais que reflitam contextos legados ou desalinhados com o produto atual.
- [x] Decidir quais documentos serão mantidos como referência técnica, quais precisam ser reescritos e quais devem ser removidos ou arquivados.
- [x] Padronizar nomenclatura e escopo dos documentos auxiliares para que a pasta `.metadocs/` represente apenas conhecimento útil ao produto.

Arquivos e artefatos esperados:
- `.metadocs/roadmap.md`
- `.metadocs/` com conteúdo coerente ao produto atual

Critério de conclusão da fase:
- [x] O repositório possui documentação principal consistente.
- [x] Não existem documentos centrais induzindo decisões erradas por herança de template ou projeto anterior.

---

## FASE 1: Arquitetura Inicial e Decisão de Stack

### Objetivo da fase
Definir a arquitetura-base do sistema, a topologia do repositório e a stack técnica mínima para sustentar o MVP descrito no PRD.

### Etapa 1.1: Modelagem arquitetural do domínio

- [x] Delimitar os blocos centrais do sistema: `conteúdo`, `sessão de aprendizagem`, `motor adaptativo`, `progresso`, `telemetria` e `identidade`.
- [x] Traduzir as entidades do PRD em um modelo lógico inicial com relações claras entre `Usuário`, `Sessão de Aprendizagem`, `Nó de Conhecimento`, `Dependência`, `Interação`, `Evidência de Compreensão`, `Regressão`, `Módulo Interativo` e `Progresso`.
- [x] Definir quais regras vivem no cliente, quais vivem no servidor e quais devem ser compartilhadas.
- [x] Definir os contratos mínimos entre interface, motor adaptativo, persistência e analytics.

Arquivos e artefatos de referência:
- `.metadocs/arquitetura.md`
- Tipos de domínio em `src/dominio/`

### Etapa 1.2: Decisão de stack

- [x] Definir a stack do `frontend` com base em interatividade, gestão de estado, animação, acessibilidade e instrumentação de eventos.
- [x] Definir a estratégia do `backend` ou `BaaS`, considerando autenticação, persistência, segurança e velocidade de entrega do MVP.
- [x] Definir a persistência do `grafo de conhecimento`, do `histórico de sessão` e do `progresso`.
- [x] Definir a solução inicial de `telemetria`, separando eventos de uso e eventos pedagógicos.
- [x] Definir a fronteira entre experiência `anônima` e experiência `autenticada`.

Arquivos e artefatos de referência:
- `.metadocs/arquitetura.md`
- `.metadocs/decisoes_de_stack.md`

### Etapa 1.3: Topologia do repositório e padrões de implementação

- [x] Decidir se a base será `single app` ou `monorepo`.
- [x] Definir a estrutura principal de diretórios da aplicação.
- [x] Definir padrão de configuração para `lint`, `format`, `typecheck`, `testes` e `variáveis de ambiente`.
- [x] Definir convenções de contratos, schemas, versionamento de conteúdo e organização do código.

Arquivos e artefatos de referência:
- `.metadocs/arquitetura.md`
- `package.json`
- `tsconfig.json` / `tsconfig.app.json`
- `eslint.config.js`
- `.prettierrc`
- `vitest.config.ts`

Critério de conclusão da fase:
- [x] Existe uma arquitetura inicial formalizada e revisável.
- [x] Existe decisão clara de stack para frontend, backend, dados e telemetria.
- [x] A estrutura do repositório está decidida antes do scaffold.

---

## FASE 2: Fundação Técnica do Repositório

### Objetivo da fase
Materializar a arquitetura escolhida em uma base executável, com ambiente local previsível, estrutura de projeto organizada e qualidade mínima de engenharia.

### Etapa 2.1: Scaffold do projeto

- [x] Criar a estrutura da aplicação conforme a topologia definida na Fase 1.
- [x] Inicializar os arquivos-base de projeto e dependências.
- [x] Configurar aliases, tipagem estrita, lint e formatação.
- [x] Criar um layout inicial que suporte evolução do fluxo principal do produto.

Arquivos e artefatos de referência:
- `package.json`
- `tsconfig.json` / `tsconfig.app.json`
- `src/` com estrutura completa por camadas
- `eslint.config.js`
- `vite.config.ts` / `vitest.config.ts`

### Etapa 2.2: Ambiente de desenvolvimento local

- [x] ~~Versionar `.docker/compose.yaml`~~ — Decisão: sem Docker no MVP. Vite dev server via `npm run dev`.
- [x] ~~Alinhar `dev.sh` e `exec.sh`~~ — Substituído por scripts npm padronizados.
- [x] Criar `.env.example` com as variáveis mínimas necessárias.
- [x] Garantir que a aplicação local possa ser iniciada de forma determinística.

Arquivos e artefatos de referência:
- `package.json` (scripts: dev, build, test, lint, typecheck, format)

### Etapa 2.3: Esteira mínima de qualidade

- [x] Configurar `lint`.
- [x] Configurar `typecheck`.
- [x] Configurar `test runner`.
- [x] Preparar comandos padrão para desenvolvimento e validação local.
- [x] Definir critério mínimo para merge futuro.

Arquivos e artefatos de referência:
- `package.json`
- `vitest.config.ts`
- `README.md` com setup atualizado

Critério de conclusão da fase:
- [x] O projeto sobe localmente.
- [x] Os scripts de desenvolvimento são reais, não placeholders.
- [x] Existe base técnica pronta para iniciar domínio e interface.

---

## FASE 3: Modelagem do Domínio e Conteúdo do MVP

### Objetivo da fase
Transformar os conceitos do PRD em estruturas concretas de dados, contratos e conteúdo versionável para suportar o motor adaptativo.

### Etapa 3.1: Grafo de conhecimento

- [x] Definir o schema de `Nó de Conhecimento`.
- [x] Definir o schema de `Dependência`.
- [x] Definir como serão representados `critérios de domínio`, `pré-requisitos`, `objetivos de aprendizagem` e `recursos associados`.
- [x] Modelar a trilha inicial de `função do 2º grau` com nós suficientes para regressão real.

Arquivos e artefatos esperados:
- `.metadocs/modelo_de_conteudo.md`
- estrutura de conteúdo versionável, como `src/conteudo/` ou equivalente
- dataset inicial do grafo do MVP

### Etapa 3.2: Sessão adaptativa e progresso

- [ ] Definir o modelo de `Sessão de Aprendizagem`.
- [ ] Definir o modelo de `Progresso`.
- [ ] Definir critérios mínimos para considerar um conceito como `dominando`, `em progresso` ou `frágil`.
- [ ] Definir regras de retomada do ponto original após reforço.

Arquivos e artefatos esperados:
- `.metadocs/modelo_de_sessao.md`
- schemas ou tipos do domínio

### Etapa 3.3: Telemetria e taxonomia de eventos

- [ ] Definir eventos de interface relevantes.
- [ ] Definir eventos pedagógicos relevantes.
- [ ] Definir propriedades obrigatórias por evento.
- [ ] Definir como distinguir `erro`, `hesitação`, `abandono parcial` e `repetição improdutiva`.
- [ ] Definir o encadeamento entre evento bruto, sinal interpretado e decisão adaptativa.

Arquivos e artefatos esperados:
- `.metadocs/matriz_de_eventos.md`
- contratos de eventos na aplicação

Critério de conclusão da fase:
- [x] O domínio do MVP está modelado em nível suficiente para implementação.
- [x] O conteúdo da trilha inicial está representado de forma versionável.
- [x] Existe taxonomia inicial de eventos pronta para instrumentação.

---

## FASE 4: UX/UI System e Fluxo de Aprendizagem

### Objetivo da fase
Definir a linguagem visual, o design system mínimo e o fluxo principal da experiência adaptativa antes da construção completa das telas.

### Etapa 4.1: Design foundations

- [ ] Definir `tokens` de cor, tipografia, espaçamento, borda, sombra e motion.
- [ ] Definir estados visuais dos componentes essenciais: `default`, `hover`, `active`, `focus`, `disabled`, `error` e `success`.
- [ ] Definir regras de contraste, responsividade, áreas de toque e redução de movimento.

Arquivos e artefatos esperados:
- `.metadocs/ux_ui_system.md`
- arquivos de tema ou tokens no projeto

### Etapa 4.2: Fluxo principal de aprendizagem

- [ ] Desenhar o fluxo de seleção de tópico.
- [ ] Desenhar o fluxo da sessão interativa principal.
- [ ] Desenhar o momento de regressão contextual.
- [ ] Desenhar o fluxo de retorno ao problema original.
- [ ] Desenhar o fluxo de visualização de progresso ao final da sessão.

Arquivos e artefatos esperados:
- `.metadocs/fluxo_principal.md`
- wireframes ou protótipos de baixa/média fidelidade

### Etapa 4.3: Dashboard e visualização de progresso

- [ ] Definir a representação visual de domínio, subdomínio e fragilidade conceitual.
- [ ] Definir quais dados o dashboard mostrará no MVP.
- [ ] Garantir que a visualização de progresso não aumente a carga cognitiva da experiência principal.

Arquivos e artefatos esperados:
- `.metadocs/dashboard_de_progresso.md`
- especificação visual do dashboard

Critério de conclusão da fase:
- [ ] Existe uma linguagem visual mínima coerente com o PRD.
- [ ] O fluxo principal está claro antes da implementação das telas finais.
- [ ] Há critérios de UX e acessibilidade aplicáveis em desenvolvimento.

---

## FASE 5: Implementação do Motor Adaptativo do MVP

### Objetivo da fase
Construir o fluxo funcional que prova a proposta central do produto: detectar travamento, regredir com contexto e retomar a resolução original.

### Etapa 5.1: Base operacional da sessão

- [ ] Implementar criação e gerenciamento de `Sessão de Aprendizagem`.
- [ ] Implementar mudança de contexto entre nó atual e nó de reforço.
- [ ] Implementar persistência mínima de sessão e progresso.
- [ ] Garantir retomada do fluxo após reforço.

Arquivos e artefatos esperados:
- módulos de `sessão`
- módulos de `progresso`
- integrações com persistência

### Etapa 5.2: Captura e interpretação de sinais

- [ ] Instrumentar eventos definidos na Fase 3.
- [ ] Converter eventos brutos em sinais interpretáveis pelo motor.
- [ ] Implementar heurísticas iniciais para decisão de regressão.
- [ ] Garantir rastreabilidade entre interação, sinal e decisão.

Arquivos e artefatos esperados:
- módulos de `telemetria`
- módulos do `motor adaptativo`
- logs estruturados ou registros equivalentes

### Etapa 5.3: Primeiro fluxo adaptativo ponta a ponta

- [ ] Implementar o desafio principal de `função do 2º grau`.
- [ ] Implementar ao menos um conjunto de reforços para pré-requisitos críticos.
- [ ] Conectar a decisão adaptativa aos módulos interativos.
- [ ] Validar o retorno do usuário ao ponto original com estado preservado.

Arquivos e artefatos esperados:
- telas ou rotas do fluxo principal
- módulos interativos da trilha inicial

Critério de conclusão da fase:
- [ ] O usuário consegue iniciar, travar, receber reforço e retomar.
- [ ] O motor adaptativo opera com base em sinais reais, ainda que por heurística simples.
- [ ] O valor central do produto está demonstrável.

---

## FASE 6: Conteúdo Interativo, Dashboard e Polimento do MVP

### Objetivo da fase
Transformar a base funcional do MVP em uma experiência utilizável, clara e apresentável para validação real.

### Etapa 6.1: Módulos interativos do recorte inicial

- [ ] Refinar o módulo principal de `função do 2º grau`.
- [ ] Refinar os módulos de reforço de pré-requisitos.
- [ ] Garantir consistência visual, feedback imediato e clareza pedagógica.

Arquivos e artefatos esperados:
- componentes interativos do domínio inicial
- conteúdos e assets associados

### Etapa 6.2: Dashboard de progresso do MVP

- [ ] Implementar a primeira versão do dashboard de progresso.
- [ ] Exibir domínio, progresso e fragilidade por conceito.
- [ ] Garantir que o dashboard reflita o histórico da sessão e não apenas dados estáticos.

Arquivos e artefatos esperados:
- telas de dashboard
- componentes de visualização de progresso

### Etapa 6.3: Polimento de UX/UI

- [ ] Ajustar microinterações.
- [ ] Ajustar transições entre estados de aprendizagem.
- [ ] Validar responsividade em desktop e mobile.
- [ ] Validar acessibilidade das interações essenciais.

Arquivos e artefatos esperados:
- refinamentos de interface
- checklist interno de UX/UI

Critério de conclusão da fase:
- [ ] O MVP está apresentável para uso controlado.
- [ ] A experiência principal é compreensível e fluida.
- [ ] O dashboard comunica progresso sem ruído excessivo.

---

## FASE 7: Qualidade, Observabilidade e Validação do Produto

### Objetivo da fase
Garantir que o MVP seja mensurável, estável o suficiente para validação e capaz de gerar aprendizado de produto.

### Etapa 7.1: Testes e estabilidade

- [ ] Cobrir regras centrais do motor adaptativo com testes automatizados.
- [ ] Cobrir fluxos críticos de sessão e progresso.
- [ ] Validar regressões principais com testes de interface ou integração.

Arquivos e artefatos esperados:
- suítes de testes automatizados
- comandos padronizados no `package.json`

### Etapa 7.2: Observabilidade e analytics

- [ ] Garantir coleta dos eventos definidos na Fase 3.
- [ ] Criar visão mínima de leitura para métricas de produto, pedagogia e UX.
- [ ] Verificar se o sistema consegue responder às métricas de sucesso do PRD.

Arquivos e artefatos esperados:
- painéis, consultas ou documentação de analytics
- `.metadocs/plano_de_metricas.md`

### Etapa 7.3: Validação controlada do MVP

- [ ] Definir roteiro de validação com usuários ou grupo-piloto.
- [ ] Observar pontos de travamento, confusão e abandono.
- [ ] Comparar feedback qualitativo com eventos capturados.
- [ ] Atualizar PRD, roadmap e arquitetura com base no aprendizado real.

Arquivos e artefatos esperados:
- `.metadocs/plano_de_validacao.md`
- registro de aprendizados da validação

Critério de conclusão da fase:
- [ ] O MVP gera dados confiáveis de uso e aprendizagem.
- [ ] Existe feedback real suficiente para priorizar a próxima versão.
- [ ] A equipe consegue decidir evolução com base em evidência.

---

## FASE 8: Preparação para Evolução Pós-MVP

### Objetivo da fase
Preparar a base do produto para ampliação de escopo, maior robustez operacional e novas trilhas de conteúdo.

### Etapa 8.1: Robustez técnica

- [ ] Revisar gargalos de performance, custo e complexidade do motor.
- [ ] Revisar estratégia de persistência do grafo e dos eventos.
- [ ] Revisar segurança, consentimento e fronteiras de dados do usuário.

### Etapa 8.2: Evolução de produto

- [ ] Decidir expansão para novos tópicos de matemática.
- [ ] Decidir expansão para outras disciplinas apenas com evidência de valor no MVP.
- [ ] Decidir se haverá autoria interna, CMS ou pipeline híbrido para conteúdo.

### Etapa 8.3: Roadmap da próxima onda

- [ ] Revisar o PRD com base em dados reais.
- [ ] Revisar este roadmap com base no que foi aprendido na validação.
- [ ] Priorizar a próxima versão do produto sem reabrir escopo prematuramente.

Critério de conclusão da fase:
- [ ] Existe plano claro de evolução sustentado por aprendizado real.
- [ ] O produto sai da fase de prova de conceito para uma fase de expansão controlada.

---

## Critério Global de Pronto do MVP

- [ ] O usuário consegue iniciar uma sessão, interagir, travar, receber reforço e retomar o problema original.
- [ ] O sistema registra eventos suficientes para explicar decisões do motor adaptativo.
- [ ] O dashboard mostra progresso mínimo por conceito ou subdomínio.
- [ ] O fluxo principal funciona em desktop e mobile com acessibilidade básica atendida.
- [ ] O time consegue medir as métricas centrais descritas em `PRD.md`.

## Observação Final

- [ ] Este roadmap é um documento vivo e deve ser revisado sempre que `PRD.md`, `README.md` ou a arquitetura inicial mudarem.
