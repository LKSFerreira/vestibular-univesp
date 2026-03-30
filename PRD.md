# Product Requirements Document (PRD): [Nome da Plataforma]

## 1. Visão Geral do Produto
Uma plataforma web de aprendizado 100% interativa focada em **Regressão Dinâmica de Conhecimento**. O sistema identifica lacunas na compreensão do usuário durante a resolução de um problema (ex: Função de 2º Grau) e, de forma fluida, retrocede na árvore de dependências acadêmicas (ex: Fatoração $\rightarrow$ Operações Básicas com Variáveis) até encontrar o ponto exato onde o entendimento foi perdido, reconstruindo o conhecimento passo a passo a partir dali.

## 2. Objetivos Principais
* **Eliminar a frustração:** Evitar que o usuário fique travado em um conceito avançado por falta de base.
* **Interatividade extrema:** Substituir blocos de texto por componentes visuais manipuláveis (ex: sliders que alteram os coeficientes de um gráfico em tempo real).
* **Engajamento visual:** Entregar uma interface (UI) limpa, moderna e uma experiência de usuário (UX) sem atritos, com transições suaves que não façam o usuário sentir que está sendo "rebaixado" de nível ao regredir.

## 3. Funcionalidades Core (O Motor da Plataforma)

### 3.1. Motor de Regressão Adaptativa
* **Mapeamento por Grafos:** Todo o conteúdo da plataforma deve ser mapeado como um grafo de dependências (Nó A requer Nó B e C).
* **Testes Intercalados Invisíveis:** O sistema avalia o usuário não através de "provas", mas pelas interações com os componentes na tela. Se o usuário errar repetidas vezes a manipulação de uma equação, o sistema sugere um "passo atrás" contextualizado.

### 3.2. Módulos de Aprendizado Interativo
* **Manipulação Direta:** Gráficos, blocos de lógica e equações devem ser elementos "clicáveis e arrastáveis". 
* **Feedback Visual em Tempo Real:** Mudanças de variáveis devem refletir instantaneamente nos resultados e animações na tela.

### 3.3. Dashboard de Progresso (Visualização do "Cérebro")
* Uma representação visual do que o usuário já domina, mostrando as ramificações do conhecimento se iluminando conforme ele avança.

## 4. Requisitos de UX e UI (Foco em "Impecável")

* **Microinterações:** Botões e elementos interativos devem ter estados claros (hover, active, disabled) com respostas hápticas/visuais.
* **Transições de Estado:** Quando o sistema regride um nível de dificuldade, a transição deve ser fluida (ex: a equação complexa se desdobra em suas partes menores na própria tela), sem recarregar a página.
* **Acessibilidade e Responsividade:** A plataforma deve funcionar perfeitamente em browsers desktop e mobile, adaptando áreas de toque para telas menores.
* **Estética Minimalista:** Foco total no conteúdo interativo. Menus laterais retráteis, uso de *whitespace* (espaço em branco) para reduzir a carga cognitiva e paleta de cores focada em redução de cansaço visual (suporte nativo a *Dark Mode*).

## 5. Casos de Uso (User Flow de Exemplo)
1.  O usuário seleciona o tópico: **"Encontrar as raízes de uma Função de 2º Grau"**.
2.  A plataforma apresenta um gráfico interativo e a fórmula de Bhaskara. Pede para o usuário interagir.
3.  O usuário não consegue resolver a parte da raiz quadrada de um número negativo (Delta < 0).
4.  A plataforma detecta a hesitação/erro.
5.  A interface faz uma transição suave: *"Parece que o conceito de Números Complexos ou propriedades de raízes precisa de um reforço. Vamos dar um passo atrás."*
6.  A tela foca apenas na resolução da raiz quadrada, trazendo blocos interativos para explicar o conceito básico.
7.  Após a compreensão, a plataforma retorna o usuário exatamente ao ponto da função original.
