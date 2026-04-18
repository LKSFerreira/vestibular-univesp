# Product Requirements Document (PRD)

> **Nota de consistência documental (2026-04-18):** este PRD continua sendo o norte do `MVP adaptativo`, restrito a matemática e à trilha de função do 2º grau. A implementação atual do workspace já inclui uma camada expandida de estudo com múltiplas disciplinas, quizzes, dashboard e visualizações, mas isso não substitui a validação do fluxo adaptativo ponta a ponta descrito neste documento.

## 1. Nome Provisório do Produto
Plataforma de Aprendizado Adaptativo com Regressão Dinâmica de Conhecimento

## 2. Contexto e Problema
Estudantes travam em tópicos avançados porque a dificuldade real nem sempre está no conteúdo atual, mas em uma lacuna anterior que não foi identificada com precisão. Em plataformas tradicionais, o erro costuma gerar apenas correção, repetição ou encaminhamento genérico para outro material. Isso aumenta frustração, reduz percepção de progresso e torna a jornada de estudo pouco eficiente.

O produto proposto deve diagnosticar a lacuna de conhecimento em tempo de uso, regredir de forma contextualizada até o pré-requisito correto e reconstruir o raciocínio sem romper o fluxo da experiência.

## 3. Visão do Produto
Criar uma plataforma web interativa, inicialmente focada em matemática do ensino médio e vestibular, capaz de:

- detectar em qual conceito o usuário perdeu compreensão;
- reencaminhar o usuário para o pré-requisito exato, sem sensação de retrocesso punitivo;
- apresentar explicações por interação, manipulação visual e feedback imediato;
- devolver o usuário ao problema original com continuidade de contexto.

## 4. Objetivo de Negócio e Objetivo de Produto
### 4.1. Objetivo de negócio
Construir a base de um produto digital educacional com potencial de retenção por personalização real de aprendizagem.

### 4.2. Objetivo de produto
Validar se uma experiência centrada em diagnóstico adaptativo e interação visual melhora:

- taxa de conclusão de exercícios;
- tempo para destravar um conceito;
- percepção de progresso;
- retorno do usuário para novas sessões.

## 5. Público-Alvo Inicial
### 5.1. Persona principal
Estudante do ensino médio ou vestibular com dificuldade recorrente em matemática, que entende parte do conteúdo, mas trava ao conectar conceitos.

### 5.2. Persona secundária
Estudante autodidata digital-first, habituado a interfaces modernas, que perde engajamento com aulas expositivas longas e conteúdo estático.

### 5.3. Contexto de uso

- desktop para estudo mais profundo e manipulação rica;
- mobile para revisão, continuidade de sessões e interações pontuais;
- sessões curtas a médias, com retomada frequente do ponto de progresso.

## 6. Problemas que Precisam Ser Resolvidos

1. O usuário não sabe qual pré-requisito está faltando.
2. O sistema educacional tradicional não oferece regressão contextual e personalizada.
3. O material explicativo costuma ser passivo e pouco responsivo ao erro.
4. A mudança entre tópicos normalmente quebra o fluxo mental da resolução.
5. O progresso do estudante é pouco visível e difícil de interpretar.

## 7. Proposta de Valor
“Quando o estudante travar, a plataforma identifica o elo ausente do raciocínio, ensina o pré-requisito com interação visual e devolve o estudante exatamente ao ponto onde ele parou.”

## 8. Princípios de Produto

1. Diagnóstico antes de repetição.
2. Interação antes de exposição textual longa.
3. Regressão sem frustração percebida.
4. Continuidade de contexto como regra de experiência.
5. Clareza visual e baixa carga cognitiva.
6. Instrumentação do comportamento do usuário desde o MVP.

## 9. Escopo do MVP
O MVP deve provar o valor do motor adaptativo em um recorte controlado de conteúdo.

### 9.1. Recorte pedagógico inicial

- domínio inicial: matemática;
- trilha inicial: função do 2º grau;
- pré-requisitos mapeados: operações algébricas básicas, fatoração, discriminante, raízes e leitura de gráfico;
- quantidade inicial de nós de conhecimento: pequena e curada manualmente.

### 9.2. Capacidades obrigatórias do MVP

1. Seleção de um tópico inicial pelo usuário.
2. Execução de uma sessão interativa de aprendizagem.
3. Detecção de erro, hesitação ou padrão de falha com base em eventos de interação.
4. Regressão automática ou assistida para um nó pré-requisito.
5. Reforço interativo do conceito de base.
6. Retorno ao ponto original da jornada.
7. Visualização simples de progresso por domínio e subdomínio.
8. Persistência básica de progresso por usuário ou sessão identificável.
9. Telemetria mínima para medir desempenho pedagógico e uso da interface.

## 10. Fora de Escopo do MVP

- marketplace de cursos;
- trilhas amplas para múltiplas disciplinas desde o início;
- gamificação profunda com moedas, ranking ou social;
- geração automática de conteúdo por IA como parte do fluxo principal;
- editor visual completo para autores de conteúdo;
- monetização, pagamento e gestão comercial;
- aplicativo mobile nativo.

## 11. Requisitos Funcionais
### 11.1. Motor de conhecimento

1. O sistema deve representar conteúdos como um grafo de dependências.
2. Cada nó do grafo deve conter objetivo de aprendizagem, pré-requisitos, critérios de domínio e recursos interativos associados.
3. O sistema deve permitir regressão para um ou mais pré-requisitos com base no padrão de erro observado.

### 11.2. Sessão adaptativa

1. O sistema deve iniciar uma sessão a partir de um tópico-alvo.
2. O sistema deve registrar eventos de interação em tempo real.
3. O sistema deve classificar eventos em sinais como acerto, erro, hesitação, abandono parcial e repetição improdutiva.
4. O sistema deve decidir quando sugerir ou aplicar regressão de contexto.
5. O sistema deve permitir retomada do fluxo original após evidência mínima de compreensão.

### 11.3. Conteúdo interativo

1. Os módulos devem privilegiar manipulação direta de elementos visuais.
2. Mudanças em variáveis devem refletir imediatamente no resultado visual e matemático.
3. O usuário deve receber feedback contextual a cada interação relevante.

### 11.4. Progresso e histórico

1. O sistema deve armazenar progresso por nó de conhecimento.
2. O sistema deve exibir ao usuário quais áreas já estão dominadas, em progresso ou frágeis.
3. O sistema deve manter histórico suficiente para retomada de sessão.

### 11.5. Observabilidade de produto

1. O sistema deve registrar eventos de uso e eventos pedagógicos separadamente.
2. O sistema deve permitir análise posterior de gargalos de UX e gargalos de aprendizagem.

## 12. Requisitos de UX
### 12.1. Diretrizes de experiência

1. A regressão deve ser percebida como assistência inteligente, não como punição.
2. A interface deve manter continuidade visual entre o problema principal e o conteúdo de reforço.
3. O usuário deve entender sempre onde está, por que houve mudança de contexto e como retornar.

### 12.2. Fluxo principal esperado

1. Escolher um tópico.
2. Iniciar desafio interativo.
3. Receber feedback contínuo.
4. Entrar em reforço contextual quando necessário.
5. Consolidar entendimento.
6. Retornar ao desafio original.
7. Visualizar progresso ao final da sessão.

### 12.3. Critérios de usabilidade

- curva de aprendizado curta para começar a interagir;
- baixa dependência de leitura extensa;
- navegação previsível;
- estados de interface claros;
- tolerância a erro e recuperação simples;
- suporte a uso por toque em telas menores.

## 13. Requisitos de UI
### 13.1. Direção visual

- estética limpa, contemporânea e focada em conteúdo;
- forte hierarquia visual entre problema principal, pistas, reforço e progresso;
- uso de animação funcional para explicar transformação de estado;
- redução de ruído visual e carga cognitiva.

### 13.2. Comportamento de interface

- sem recarregamento de página durante a sessão principal;
- transições suaves entre estados de aprendizagem;
- feedback visual instantâneo para ações do usuário;
- componentes com estados `default`, `hover`, `active`, `focus`, `disabled`, `error` e `success`.

### 13.3. Responsividade e acessibilidade

- suporte real a desktop e mobile;
- áreas de toque adequadas;
- contraste mínimo compatível com WCAG AA;
- navegação por teclado nas interações essenciais;
- feedback não dependente apenas de cor;
- suporte a preferência de redução de movimento.

## 14. Requisitos Não Funcionais
### 14.1. Performance

- tempo inicial de carregamento compatível com uso em conexão comum;
- resposta de interação percebida como imediata nos componentes principais;
- transições sem travamentos perceptíveis durante manipulação visual.

### 14.2. Escalabilidade de conteúdo

- o modelo de conteúdo deve permitir adicionar novos nós e novas trilhas sem reescrever a lógica central;
- o grafo deve ser versionável;
- recursos interativos devem ser desacoplados do conteúdo sempre que possível.

### 14.3. Segurança e privacidade

- coletar apenas dados necessários para progresso e telemetria;
- separar dados pessoais de dados analíticos sempre que possível;
- preparar o sistema para consentimento e política de privacidade futura.

### 14.4. Observabilidade e evolução

- eventos críticos devem ser auditáveis;
- o comportamento do motor adaptativo deve ser analisável por logs e métricas;
- o sistema deve facilitar experimentação futura de regras de regressão.

## 15. Entidades Conceituais do Domínio
Estas entidades devem orientar a próxima etapa de arquitetura:

- `Usuário`: identidade, preferências e progresso.
- `Sessão de Aprendizagem`: início, contexto atual, objetivo, estado e retomada.
- `Nó de Conhecimento`: conceito ensinável com metadados pedagógicos.
- `Dependência`: relação entre nós.
- `Interação`: ação do usuário em um componente.
- `Evidência de Compreensão`: sinal derivado de interações.
- `Regressão`: transição entre nó atual e nó pré-requisito.
- `Módulo Interativo`: experiência visual associada a um nó.
- `Progresso`: estado agregado por tópico e por trilha.

## 16. Métricas de Sucesso do MVP
### 16.1. Métricas de produto

- percentual de sessões concluídas;
- percentual de usuários que retornam após a primeira sessão;
- tempo médio até retomada do fluxo original após regressão.

### 16.2. Métricas pedagógicas

- taxa de desbloqueio após reforço;
- quantidade média de regressões por sessão;
- redução de erros repetidos no mesmo conceito.

### 16.3. Métricas de UX

- abandono durante a primeira interação;
- taxa de conclusão em mobile;
- tempo até a primeira ação significativa.

## 17. Riscos e Hipóteses
### 17.1. Hipóteses

1. Interação visual reduz atrito de aprendizado em comparação com explicação textual isolada.
2. O usuário aceita regressão quando o contexto é bem explicado.
3. Um recorte pedagógico pequeno já é suficiente para validar a mecânica adaptativa.

### 17.2. Riscos

1. Complexidade excessiva do motor adaptativo cedo demais.
2. Conteúdo interativo custoso para produzir e manter.
3. Telemetria insuficiente para distinguir problema de UX de problema pedagógico.
4. Excesso de liberdade na UI gerar confusão em vez de clareza.

## 18. Direcionadores para a Arquitetura Inicial
Esta seção não fecha a arquitetura, mas define o que a próxima etapa obrigatoriamente precisa resolver.

### 18.1. Frontend

- arquitetura orientada a estados de sessão e transições;
- suporte forte a componentes altamente interativos;
- estratégia para animações e feedback em tempo real;
- capacidade de instrumentar eventos de interação sem acoplamento excessivo.

### 18.2. Backend e dados

- persistência de usuários, sessões, progresso e eventos;
- modelo de armazenamento do grafo de conhecimento;
- estratégia para regras de regressão adaptativa;
- separação entre dados transacionais, conteúdo e analytics.

### 18.3. Conteúdo

- formato versionável para modelar nós, dependências, critérios de domínio e recursos visuais;
- pipeline simples para cadastrar e evoluir novos conteúdos;
- definição de responsabilidade entre lógica pedagógica e apresentação.

### 18.4. UX/UI System

- design system mínimo com tokens, estados e padrões de feedback;
- padrão de navegação principal da sessão;
- linguagem visual das transições de regressão e retorno;
- critérios para mobile-first versus desktop-first por fluxo.

## 19. Decisões que Ainda Precisam Ser Tomadas na Próxima Etapa

1. Stack do frontend e estratégia de renderização.
2. Stack do backend e modelo de autenticação inicial.
3. Banco e formato de persistência do grafo de conhecimento.
4. Estratégia de telemetria e analytics.
5. Forma de autoria e versionamento do conteúdo.
6. Nível de personalização do motor no MVP: regras determinísticas, heurísticas ou híbrido.
7. Fronteira entre experiência anônima e experiência autenticada.

## 20. Critério de Pronto deste PRD
Este PRD será considerado pronto para transição à etapa de arquitetura quando:

1. o MVP estiver claramente delimitado;
2. as entidades de domínio estiverem explícitas;
3. os requisitos de UX/UI estiverem traduzidos em comportamentos observáveis;
4. os requisitos não funcionais mínimos estiverem definidos;
5. as decisões abertas de arquitetura estiverem listadas de forma objetiva.
