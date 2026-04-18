import type { Disciplina } from './tipos';

export const disciplinaQuimica: Disciplina = {
  id: 'quimica',
  titulo: 'Química',
  icone: '⚗️',
  topicos: [
    {
      id: 'quimica-organica',
      titulo: 'Química Orgânica',
      peso: 30,
      conteudo: {
        resumo: 'Identificação de funções orgânicas e reações fundamentais.',
        explicacao:
          'A química orgânica cobra principalmente o reconhecimento de grupos funcionais em moléculas.\n\nPrincipais funções:\n• Álcool (-OH): etanol, metanol\n• Aldeído (-CHO): metanal (formol)\n• Cetona (C=O): propanona (acetona)\n• Ácido carboxílico (-COOH): ácido acético (vinagre)\n• Éster (-COO-): aromatizantes\n• Amina (-NH₂): aminoácidos\n\nDica: decore os grupos funcionais e pratique identificá-los em estruturas moleculares.',
        secoes: [
          {
            titulo: 'Introdução à Química Orgânica',
            tipo: 'texto',
            corpo: `A **Química Orgânica** é o ramo da Química dedicado ao estudo dos compostos de carbono. Embora existam exceções — como $CO_2$, $CO$, carbonatos e cianetos, estudados na Química Inorgânica — a grande maioria dos compostos de carbono é considerada orgânica.

Compostos orgânicos estão por toda parte: medicamentos, combustíveis, polímeros, alimentos, cosméticos e até o DNA. No vestibular, os temas mais cobrados são:

- Identificação de **funções orgânicas** a partir de estruturas moleculares
- **Nomenclatura IUPAC** de compostos orgânicos
- **Isomeria** (compostos com mesma fórmula molecular, mas estruturas diferentes)
- **Reações orgânicas** fundamentais (combustão, oxidação, esterificação, saponificação)`,
          },
          {
            titulo: 'O Átomo de Carbono — Propriedades Fundamentais',
            tipo: 'destaque',
            corpo: `O carbono ($C$, $Z = 6$) possui quatro elétrons na camada de valência, sendo **tetravalente**: realiza quatro ligações covalentes. Sua configuração eletrônica é $1s^2 \\, 2s^2 \\, 2p^2$.

Propriedades essenciais do carbono:

- Forma **ligações simples** ($C - C$), **duplas** ($C = C$) e **triplas** ($C \\equiv C$)
- Liga-se a outros carbonos formando **cadeias longas, ramificadas e cíclicas**
- Forma compostos com $O$, $N$, $S$, halogênios e outros elementos

**Classificação do carbono na cadeia:**
- **Primário:** ligado a 1 outro carbono
- **Secundário:** ligado a 2 outros carbonos
- **Terciário:** ligado a 3 outros carbonos
- **Quaternário:** ligado a 4 outros carbonos`,
          },
          {
            titulo: 'Classificação das Cadeias Carbônicas',
            tipo: 'texto',
            corpo: `As cadeias carbônicas são classificadas segundo quatro critérios:

**1. Quanto ao fechamento:**
- **Aberta (acíclica):** extremidades livres. Ex.: $CH_3 - CH_2 - CH_3$ (propano)
- **Fechada (cíclica):** forma anel. Ex.: ciclo-hexano ($C_6H_{12}$)

**2. Quanto à ramificação:**
- **Normal (linear):** sem ramificações
- **Ramificada:** possui pelo menos uma ramificação lateral

**3. Quanto à saturação:**
- **Saturada:** apenas ligações simples entre carbonos
- **Insaturada:** possui pelo menos uma ligação dupla ou tripla

**4. Quanto à natureza dos átomos:**
- **Homogênea:** somente carbonos e hidrogênios na cadeia principal
- **Heterogênea:** possui heteroátomo ($O$, $N$, $S$) entre carbonos na cadeia

**Fórmulas gerais dos hidrocarbonetos:**

$$C_nH_{2n+2} \\text{ (alcanos)} \\quad C_nH_{2n} \\text{ (alcenos)} \\quad C_nH_{2n-2} \\text{ (alcinos)}$$

O **grau de insaturação** (GI) ajuda a determinar o número de insaturações e anéis:

$$GI = \\frac{2C + 2 + N - H - X}{2}$$

onde $C$ = carbonos, $N$ = nitrogênios, $H$ = hidrogênios e $X$ = halogênios.`,
          },
          {
            titulo: 'Nomenclatura IUPAC de Compostos Orgânicos',
            tipo: 'texto',
            corpo: `A nomenclatura oficial (IUPAC) segue a estrutura:

$$\\text{PREFIXO} + \\text{INFIXO} + \\text{SUFIXO}$$

**Prefixo** — indica o número de carbonos da cadeia principal:

| Carbonos | Prefixo | Carbonos | Prefixo |
|----------|---------|----------|---------|
| 1 | met- | 6 | hex- |
| 2 | et- | 7 | hept- |
| 3 | prop- | 8 | oct- |
| 4 | but- | 9 | non- |
| 5 | pent- | 10 | dec- |

**Infixo** — indica o tipo de ligação entre carbonos:
- $-an-$: apenas ligações simples (saturada)
- $-en-$: presença de ligação dupla $C = C$
- $-in-$: presença de ligação tripla $C \\equiv C$

**Sufixo** — indica a função orgânica:
- $-o$: hidrocarboneto | $-ol$: álcool | $-al$: aldeído
- $-ona$: cetona | $-oico$: ácido carboxílico | $-ato\\ de...$: éster

**Exemplo:** $CH_3 - CH_2 - OH$ → cadeia com 2 C (et-), ligação simples (-an-), função álcool (-ol) → **etanol**.

**Regra da cadeia principal:** escolha a cadeia mais longa que contenha o grupo funcional e numere a partir da extremidade mais próxima do grupo funcional.`,
          },
          {
            titulo: 'Funções Orgânicas — Tabela Comparativa',
            tipo: 'tabela',
            corpo: `| Função | Grupo Funcional | Exemplo | Nome IUPAC |
|--------|----------------|---------|------------|
| **Álcool** | $-OH$ (em C saturado) | $CH_3OH$ | metanol |
| **Fenol** | $-OH$ (em anel aromático) | $C_6H_5OH$ | fenol |
| **Aldeído** | $-CHO$ (carbonila terminal) | $HCHO$ | metanal (formol) |
| **Cetona** | $C=O$ (carbonila entre C) | $CH_3COCH_3$ | propanona (acetona) |
| **Ác. carboxílico** | $-COOH$ | $CH_3COOH$ | ácido etanoico (vinagre) |
| **Éster** | $-COO-$ | $CH_3COOCH_3$ | etanoato de metila |
| **Éter** | $C-O-C$ | $CH_3OCH_3$ | metóxi-metano |
| **Amina** | $-NH_2$, $-NHR$, $-NR_2$ | $CH_3NH_2$ | metilamina |
| **Amida** | $-CONH_2$ | $CH_3CONH_2$ | etanamida |

> **Dica:** a diferença entre aldeído e cetona está na **posição da carbonila** ($C=O$). No aldeído, ela está na extremidade da cadeia; na cetona, entre dois carbonos.`,
          },
          {
            titulo: 'Álcoois, Fenóis e Enóis',
            tipo: 'texto',
            corpo: `Essas três funções possuem o grupo hidroxila ($-OH$), mas diferem na posição:

**Álcool:** $-OH$ ligado a carbono **saturado** ($sp^3$), fora de anel aromático.
- Exemplos: metanol ($CH_3OH$), etanol ($CH_3CH_2OH$), propan-2-ol
- Classificação: primário (1°), secundário (2°) ou terciário (3°), conforme o carbono que porta o $-OH$

**Fenol:** $-OH$ ligado diretamente a carbono de **anel aromático**.
- Exemplo: fenol ($C_6H_5OH$) — usado como antisséptico

**Enol:** $-OH$ ligado a carbono com **ligação dupla** ($sp^2$).
- Geralmente instável; converte-se em aldeído ou cetona (tautomeria ceto-enólica)

A **solubilidade em água** dos álcoois diminui com o aumento da cadeia carbônica, pois a parte apolar (cadeia de C) passa a predominar sobre a parte polar ($OH$).`,
          },
          {
            titulo: 'Aldeídos e Cetonas',
            tipo: 'texto',
            corpo: `Ambas possuem o grupo **carbonila** ($C=O$), mas a posição na cadeia é diferente:

**Aldeído** — carbonila no carbono **terminal** (extremidade da cadeia):

$$R - CHO \\quad \\text{(grupo formila)}$$

Exemplos:
- Metanal ($HCHO$) — formol, usado em conservação
- Etanal ($CH_3CHO$) — acetaldeído
- Sufixo IUPAC: **-al**

**Cetona** — carbonila em carbono **intermediário** (entre dois carbonos):

$$R - CO - R' \\quad \\text{(grupo carbonila entre C)}$$

Exemplos:
- Propanona ($CH_3COCH_3$) — acetona, solvente comum
- Butanona ($CH_3COCH_2CH_3$)
- Sufixo IUPAC: **-ona**

> **Atenção na prova:** a posição da carbonila é o critério decisivo. Se estiver na ponta, é aldeído; se estiver no meio da cadeia, é cetona. Este é um dos erros mais comuns em vestibulares.`,
          },
          {
            titulo: 'Ácidos Carboxílicos e Ésteres',
            tipo: 'texto',
            corpo: `**Ácido Carboxílico** — possui o grupo **carboxila** ($-COOH$), que combina uma carbonila ($C=O$) com uma hidroxila ($-OH$) no mesmo carbono:

$$R - COOH$$

Exemplos:
- Ácido metanoico ($HCOOH$) — ácido fórmico (picada de formiga)
- Ácido etanoico ($CH_3COOH$) — ácido acético (vinagre)
- Sufixo IUPAC: **ácido ...-oico**

**Éster** — derivado da reação entre um ácido carboxílico e um álcool, com perda de água:

$$R - COO - R'$$

A reação de formação é a **esterificação de Fischer**:

$$\\text{ácido carboxílico} + \\text{álcool} \\xrightleftharpoons{H^+} \\text{éster} + H_2O$$

Exemplo: $CH_3COOH + CH_3OH \\rightleftharpoons CH_3COOCH_3 + H_2O$

Ésteres são responsáveis pelo aroma de muitas frutas (aromatizantes naturais) e estão presentes em gorduras e óleos (triglicerídeos). O sufixo IUPAC é **-ato de ...-ila**.`,
          },
          {
            titulo: 'Éteres, Aminas e Amidas',
            tipo: 'texto',
            corpo: `**Éter** — possui um átomo de oxigênio entre dois carbonos ($C - O - C$):

$$R - O - R'$$

- Exemplo: etóxi-etano ($CH_3CH_2OCH_2CH_3$) — éter dietílico, antigo anestésico
- Nomenclatura IUPAC: menor cadeia + **óxi** + maior cadeia

**Amina** — derivada da amônia ($NH_3$) pela substituição de hidrogênios por grupos orgânicos:
- Amina primária: $R - NH_2$
- Amina secundária: $R_2NH$
- Amina terciária: $R_3N$
- Exemplo: metilamina ($CH_3NH_2$), presente na decomposição de peixes

**Amida** — possui o grupo $-CONH_2$ (carbonila ligada a nitrogênio):

$$R - CO - NH_2$$

- Exemplo: etanamida ($CH_3CONH_2$), ureia ($H_2NCONH_2$) — excretada pelos rins
- A amida é a única função nitrogenada que possui **carbonila**; isso a diferencia das aminas`,
          },
          {
            titulo: 'Como Identificar Funções Orgânicas em Estruturas',
            tipo: 'importante',
            corpo: `Siga este roteiro para identificar a função orgânica em qualquer estrutura:

**1.** Procure **nitrogênio** ($N$): se houver, verifique se há carbonila ($C=O$) ligada ao $N$.
   - Sim → **amida** ($-CONH_2$)
   - Não → **amina** ($-NH_2$, $-NHR$ ou $-NR_2$)

**2.** Procure **oxigênio** ($O$):
   - $-OH$ em carbono saturado fora de anel → **álcool**
   - $-OH$ em anel aromático → **fenol**
   - $-COOH$ (carbonila + hidroxila no mesmo C) → **ácido carboxílico**
   - $-COO-$ (carbonila + oxigênio ligado a outro C) → **éster**
   - $C = O$ na extremidade ($-CHO$) → **aldeído**
   - $C = O$ entre carbonos → **cetona**
   - $C - O - C$ (sem carbonila) → **éter**

**3.** Se não houver $O$ nem $N$: trata-se de um **hidrocarboneto** (alcano, alceno, alcino, aromático, etc.)

> **Prioridade:** se a molécula possui mais de um grupo funcional, a função de maior prioridade pela IUPAC nomeia o composto.`,
          },
          {
            titulo: 'Reações Orgânicas Fundamentais',
            tipo: 'texto',
            corpo: `As reações orgânicas mais cobradas nos vestibulares são:

**1. Combustão completa** — hidrocarboneto reage com $O_2$ em excesso:

$$C_xH_y + \\left(x + \\frac{y}{4}\\right) O_2 \\rightarrow x \\, CO_2 + \\frac{y}{2} \\, H_2O$$

Exemplo: $CH_4 + 2O_2 \\rightarrow CO_2 + 2H_2O$

**2. Oxidação de álcoois** — agentes oxidantes ($KMnO_4$, $K_2Cr_2O_7$):
- Álcool **primário** → aldeído → ácido carboxílico
- Álcool **secundário** → cetona
- Álcool **terciário** → não oxida em condições brandas

**3. Esterificação de Fischer** — ácido carboxílico + álcool → éster + água (catálise ácida):

$$R-COOH + R'-OH \\xrightleftharpoons{H^+} R-COOR' + H_2O$$

**4. Saponificação (hidrólise alcalina)** — éster (gordura) + base forte → sal orgânico (sabão) + glicerol:

$$\\text{gordura} + NaOH \\rightarrow \\text{sabão} + \\text{glicerol}$$

É a reação inversa da esterificação, usada na fabricação de sabões.

**5. Reação de substituição em aromáticos** — um $H$ do anel é substituído por outro grupo (halogenação, nitração, sulfonação).`,
          },
          {
            titulo: 'Isomeria Plana — Visão Geral',
            tipo: 'texto',
            corpo: `**Isômeros** são compostos com a **mesma fórmula molecular** mas **estruturas diferentes**. A isomeria plana possui cinco tipos:

| Tipo | Diferença | Exemplo |
|------|-----------|---------|
| **Cadeia** | Tipo de cadeia (normal vs ramificada) | butano vs metilpropano ($C_4H_{10}$) |
| **Posição** | Posição do grupo funcional ou insaturação | propan-1-ol vs propan-2-ol ($C_3H_8O$) |
| **Função** | Função orgânica diferente | etanol vs metóxi-metano ($C_2H_6O$) |
| **Compensação (metameria)** | Posição do heteroátomo | metóxi-propano vs etóxi-etano ($C_4H_{10}O$) |
| **Tautomeria** | Equilíbrio dinâmico entre duas funções | propenol $\\rightleftharpoons$ propanal |

> **Dica para provas:** quando a questão apresentar dois compostos com mesma fórmula molecular, compare suas estruturas e identifique qual critério (cadeia, posição, função, compensação ou tautomeria) os diferencia.`,
          },
          {
            titulo: 'Resumo — Estratégia para Provas de Orgânica',
            tipo: 'destaque',
            corpo: `**Checklist rápido para questões de Química Orgânica:**

1. **Identifique o grupo funcional** — use o roteiro de identificação (procure $N$, depois $O$, depois classifique)
2. **Encontre a cadeia principal** — a mais longa que contém o grupo funcional
3. **Numere a cadeia** — a partir da extremidade mais próxima do grupo funcional
4. **Monte o nome IUPAC:** prefixo (nº de C) + infixo (ligação) + sufixo (função)
5. **Em reações:** identifique os reagentes e o tipo de reação (combustão, oxidação, esterificação, saponificação)
6. **Em isomeria:** mesma fórmula molecular → compare estruturas → classifique o tipo

**Funções mais cobradas:** álcool, ácido carboxílico, éster, aldeído e cetona. Decore os grupos funcionais e pratique a identificação em estruturas moleculares variadas.`,
          },
        ],
        imagemDescricao: 'Tabela visual com as principais funções orgânicas, seus grupos funcionais e exemplos do cotidiano',
        formulasChave: [
          'CₙH₂ₙ₊₂ (fórmula geral dos alcanos — cadeia aberta saturada)',
          'CₙH₂ₙ (fórmula geral dos alcenos — uma dupla ligação)',
          'CₙH₂ₙ₋₂ (fórmula geral dos alcinos — uma tripla ligação)',
          'Grau de insaturação: GI = (2C + 2 + N - H - X) / 2',
        ],
        dicasProva: [
          'Identifique primeiro o grupo funcional para classificar a função orgânica',
          'Na nomenclatura IUPAC, encontre a cadeia principal (mais longa contendo o grupo funcional)',
          'Questões de isomeria pedem atenção: mesma fórmula molecular, diferentes estruturas',
          'Reações de combustão completa sempre geram CO₂ e H₂O como produtos',
        ],
        errosComuns: [
          'Confundir aldeído (carbonila no carbono terminal) com cetona (carbonila em carbono intermediário)',
          'Esquecer que álcool e fenol são funções diferentes — fenol tem OH ligado ao anel aromático',
          'Errar a nomenclatura por não identificar a cadeia principal corretamente',
          'Confundir isomeria de posição com isomeria de cadeia',
        ],
        exercicios: [
          {
            id: 'qui-org-1',
            enunciado: 'A função orgânica presente no etanol (CH₃CH₂OH) é:',
            alternativas: ['Aldeído', 'Cetona', 'Álcool', 'Ácido carboxílico', 'Éster'],
            respostaCorreta: 2,
            explicacao: 'O etanol possui o grupo hidroxila (-OH) ligado a um carbono saturado, o que caracteriza a função álcool. Diferente do fenol, onde o -OH está ligado diretamente a um anel aromático.',
            dificuldade: 'facil',
          },
          {
            id: 'qui-org-2',
            enunciado: 'A propanona (acetona) pertence à função orgânica:',
            alternativas: ['Álcool', 'Aldeído', 'Éster', 'Cetona', 'Éter'],
            respostaCorreta: 3,
            explicacao: 'A propanona (CH₃COCH₃) possui o grupo carbonila (C=O) entre dois carbonos, caracterizando a função cetona. No aldeído, a carbonila estaria no carbono terminal.',
            dificuldade: 'facil',
          },
          {
            id: 'qui-org-3',
            enunciado: 'Dois compostos com mesma fórmula molecular mas estruturas diferentes são chamados de:',
            alternativas: ['Isótopos', 'Isóbaros', 'Isômeros', 'Polímeros', 'Monômeros'],
            respostaCorreta: 2,
            explicacao: 'Isômeros são compostos que possuem a mesma fórmula molecular, mas diferem na estrutura ou arranjo espacial dos átomos. Isótopos e isóbaros são conceitos da química nuclear, não da orgânica.',
            dificuldade: 'facil',
          },
          {
            id: 'qui-org-4',
            enunciado: 'Na combustão completa do metano (CH₄), os produtos formados são:',
            alternativas: ['CO e H₂', 'CO₂ e H₂O', 'C e H₂O', 'CO₂ e H₂', 'CO e H₂O'],
            respostaCorreta: 1,
            explicacao: 'A combustão completa de qualquer hidrocarboneto produz CO₂ (dióxido de carbono) e H₂O (água). A reação balanceada é: CH₄ + 2O₂ → CO₂ + 2H₂O. Na combustão incompleta, pode formar CO ou C.',
            dificuldade: 'facil',
          },
          {
            id: 'qui-org-5',
            enunciado: 'O grupo funcional -COOH é característico da função:',
            alternativas: ['Álcool', 'Aldeído', 'Cetona', 'Ácido carboxílico', 'Amina'],
            respostaCorreta: 3,
            explicacao: 'O grupo carboxila (-COOH) é formado por uma carbonila (C=O) ligada a uma hidroxila (-OH) no mesmo carbono. É o grupo funcional dos ácidos carboxílicos, como o ácido acético (vinagre).',
            dificuldade: 'facil',
          },
        ],
      },
    },
    {
      id: 'estequiometria-solucoes',
      titulo: 'Estequiometria e Soluções',
      peso: 30,
      conteudo: {
        resumo: 'Cálculos estequiométricos, relações molares, concentração de soluções e diluição.',
        explicacao:
          'A estequiometria é a base dos cálculos químicos, relacionando massas, mols e volumes nas reações.\n\nConceitos fundamentais:\n• Mol: 6,02 × 10²³ entidades (Número de Avogadro)\n• Massa molar: massa de 1 mol em gramas (valor numérico igual ao peso atômico/molecular)\n• Volume molar de gás (CNTP): 22,4 L/mol\n\nPasso a passo estequiométrico:\n1. Escreva e balanceie a equação química\n2. Identifique os dados fornecidos e a incógnita\n3. Estabeleça a proporção molar pelos coeficientes\n4. Converta as unidades conforme necessário\n\nSoluções:\n• Concentração comum: C = m₁/V (g/L)\n• Molaridade: M = n/V (mol/L)\n• Diluição: C₁ × V₁ = C₂ × V₂',
        secoes: [
          {
            titulo: 'O que é Estequiometria?',
            tipo: 'texto',
            corpo: `A **Estequiometria** (do grego *stoicheion* = elemento e *metron* = medida) é a área da Química que estuda as **relações quantitativas** entre reagentes e produtos em uma reação química.

Em outras palavras, a estequiometria permite calcular *quanto* de cada substância é necessário ou produzido em uma transformação. No vestibular, esse tema é cobrado com altíssima frequência e exige domínio de:

- **Conceito de mol** e número de Avogadro
- **Massa molar** e conversões de unidades
- **Balanceamento** de equações químicas
- **Cálculos estequiométricos** (regra de três com coeficientes)
- **Reagente limitante** e reagente em excesso
- **Soluções:** concentração, molaridade e diluição`,
          },
          {
            titulo: 'O Conceito de Mol e o Número de Avogadro',
            tipo: 'destaque',
            corpo: `O **mol** é a unidade do Sistema Internacional que mede a **quantidade de matéria**. Um mol contém exatamente:

$$N_A = 6{,}022 \\times 10^{23} \\text{ entidades (átomos, moléculas, íons...)}$$

Esse valor é o **Número de Avogadro** ($N_A$). Assim como uma dúzia sempre representa 12 unidades, um mol sempre representa $6{,}022 \\times 10^{23}$ entidades — independentemente do tipo de substância.

**Exemplos:**
- 1 mol de átomos de $Fe$ = $6{,}022 \\times 10^{23}$ átomos de ferro
- 1 mol de moléculas de $H_2O$ = $6{,}022 \\times 10^{23}$ moléculas de água
- 1 mol de íons $Na^+$ = $6{,}022 \\times 10^{23}$ íons sódio

A relação fundamental entre número de mols ($n$), quantidade de entidades ($N$) e o número de Avogadro é:

$$n = \\frac{N}{N_A}$$`,
          },
          {
            titulo: 'Massa Molar — Cálculo e Aplicação',
            tipo: 'texto',
            corpo: `A **massa molar** ($M$) é a massa de 1 mol de uma substância, expressa em **g/mol**. Seu valor numérico é igual à massa atômica (ou molecular) encontrada na tabela periódica.

**Como calcular a massa molar de um composto:**
Some as massas atômicas de todos os átomos presentes na fórmula molecular.

**Exemplo:** Massa molar da glicose ($C_6H_{12}O_6$):

$$M = 6 \\times 12 + 12 \\times 1 + 6 \\times 16 = 72 + 12 + 96 = 180 \\text{ g/mol}$$

A fórmula que relaciona **massa** ($m$), **número de mols** ($n$) e **massa molar** ($M$) é:

$$\\boxed{n = \\frac{m}{M}}$$

**Exemplos práticos:**
- 180 g de glicose = $\\frac{180}{180}$ = 1 mol
- 9 g de água ($M = 18$ g/mol) = $\\frac{9}{18}$ = 0,5 mol
- 5,6 g de ferro ($M = 56$ g/mol) = $\\frac{5{,}6}{56}$ = 0,1 mol`,
          },
          {
            titulo: 'Fórmulas Fundamentais da Estequiometria',
            tipo: 'formula',
            corpo: `Mantenha estas fórmulas sempre acessíveis durante os estudos:

$$n = \\frac{m}{M} \\quad \\text{(número de mols)}$$

$$n = \\frac{N}{N_A} \\quad \\text{(relação com entidades)}$$

$$n = \\frac{V}{22{,}4} \\quad \\text{(gases nas CNTP: 0 °C e 1 atm)}$$

$$PV = nRT \\quad \\text{(equação dos gases ideais)}$$

Onde:
- $n$ = número de mols
- $m$ = massa em gramas
- $M$ = massa molar (g/mol)
- $V$ = volume (L)
- $P$ = pressão (atm)
- $R = 0{,}082 \\text{ atm} \\cdot \\text{L} \\cdot \\text{mol}^{-1} \\cdot K^{-1}$
- $T$ = temperatura em Kelvin ($K = °C + 273$)

> **CNTP (Condições Normais de Temperatura e Pressão):** $T = 273$ K (0 °C) e $P = 1$ atm. Nessas condições, 1 mol de qualquer gás ideal ocupa **22,4 L**.`,
          },
          {
            titulo: 'Balanceamento de Equações Químicas',
            tipo: 'texto',
            corpo: `Antes de qualquer cálculo estequiométrico, a equação deve estar **balanceada** — o número de átomos de cada elemento deve ser igual nos dois lados.

**Método da tentativa (mais usado):**

1. Escreva a equação com as fórmulas corretas
2. Comece balanceando os elementos que aparecem em **menos substâncias**
3. Deixe $O$ e $H$ por último
4. Ajuste os coeficientes (números inteiros à frente de cada substância)
5. Verifique se os dois lados possuem os mesmos átomos

**Exemplo:** Combustão do etanol:

$$C_2H_5OH + O_2 \\rightarrow CO_2 + H_2O \\quad \\text{(não balanceada)}$$

Passo a passo:
- C: 2 no reagente → $2\\,CO_2$
- H: 6 no reagente → $3\\,H_2O$
- O: 1 + 2x no reagente = 4 + 3 = 7 no produto → O no reagente: $1 + 2x = 7$, logo $x = 3$

$$C_2H_5OH + 3\\,O_2 \\rightarrow 2\\,CO_2 + 3\\,H_2O \\quad \\checkmark$$`,
          },
          {
            titulo: 'Cálculos Estequiométricos — Método Passo a Passo',
            tipo: 'texto',
            corpo: `Todo cálculo estequiométrico segue um roteiro de **quatro passos**:

**Passo 1 — Balanceie** a equação química.

**Passo 2 — Identifique** os dados do problema (o que é dado e o que se pede).

**Passo 3 — Estabeleça a proporção molar** usando os coeficientes estequiométricos.

**Passo 4 — Converta** as unidades conforme necessário (g, mol, L, moléculas).

**Exemplo completo:**
*Quantos gramas de $CO_2$ são produzidos na combustão de 88 g de propano ($C_3H_8$)?* Dados: $M_{C_3H_8} = 44$ g/mol; $M_{CO_2} = 44$ g/mol.

$$C_3H_8 + 5\\,O_2 \\rightarrow 3\\,CO_2 + 4\\,H_2O$$

1. Mols de $C_3H_8$: $n = \\frac{88}{44} = 2$ mol
2. Proporção: $1$ mol $C_3H_8$ → $3$ mol $CO_2$
3. Logo: $2$ mol $C_3H_8$ → $6$ mol $CO_2$
4. Massa de $CO_2$: $m = 6 \\times 44 = 264$ g

**Resposta:** 264 g de $CO_2$.`,
          },
          {
            titulo: 'Reagente Limitante e Reagente em Excesso',
            tipo: 'texto',
            corpo: `Quando os reagentes **não estão na proporção estequiométrica**, um deles se esgota primeiro — é o **reagente limitante**. O outro sobra parcialmente — é o **reagente em excesso**.

**Como identificar o reagente limitante:**

1. Calcule os mols de cada reagente: $n = \\frac{m}{M}$
2. Divida os mols de cada reagente pelo seu coeficiente estequiométrico
3. O reagente com **menor quociente** é o limitante

**Exemplo:** Na reação $2\\,H_2 + O_2 \\rightarrow 2\\,H_2O$, são fornecidos 3 mol de $H_2$ e 2 mol de $O_2$.

- $H_2$: $\\frac{3}{2} = 1{,}5$
- $O_2$: $\\frac{2}{1} = 2$

$H_2$ tem o menor quociente → é o **limitante**. O cálculo do produto deve ser feito com base no reagente limitante:

$$3 \\text{ mol } H_2 \\times \\frac{2 \\text{ mol } H_2O}{2 \\text{ mol } H_2} = 3 \\text{ mol } H_2O$$

O excesso de $O_2$: foram necessários $\\frac{3}{2} = 1{,}5$ mol de $O_2$. Excesso = $2 - 1{,}5 = 0{,}5$ mol.`,
          },
          {
            titulo: 'Soluções Químicas — Conceitos',
            tipo: 'texto',
            corpo: `Uma **solução** é uma mistura homogênea formada por:
- **Soluto:** substância dissolvida (geralmente em menor quantidade)
- **Solvente:** substância que dissolve (geralmente em maior quantidade)

**Classificação das soluções quanto à saturação:**

| Tipo | Definição |
|------|-----------|
| **Insaturada** | Contém menos soluto do que o coeficiente de solubilidade permite |
| **Saturada** | Contém a quantidade máxima de soluto dissolvido (no limite) |
| **Supersaturada** | Contém mais soluto do que o normal — sistema instável |

O **coeficiente de solubilidade** (Cs) indica a quantidade máxima de soluto que pode ser dissolvida em uma quantidade definida de solvente, a determinada temperatura. Para a maioria dos sólidos, a solubilidade **aumenta** com a temperatura.`,
          },
          {
            titulo: 'Concentração Comum e Molaridade',
            tipo: 'formula',
            corpo: `As duas formas mais cobradas de expressar a concentração:

**Concentração comum** (em massa) — expressa em g/L:

$$\\boxed{C = \\frac{m_1}{V}}$$

onde $m_1$ = massa do soluto (g) e $V$ = volume da solução (L).

**Molaridade** (concentração em mol/L) — expressa em mol/L:

$$\\boxed{M = \\frac{n}{V} = \\frac{m_1}{M_1 \\cdot V}}$$

onde $n$ = número de mols do soluto, $M_1$ = massa molar do soluto (g/mol) e $V$ = volume da solução (L).

**Relação entre concentração comum e molaridade:**

$$C = M \\times M_1$$

**Exemplo:** Uma solução contém 40 g de $NaOH$ ($M_1 = 40$ g/mol) em 500 mL de solução.
- $C = \\frac{40}{0{,}5} = 80$ g/L
- $M = \\frac{40}{40 \\times 0{,}5} = \\frac{40}{20} = 2$ mol/L`,
          },
          {
            titulo: 'Diluição de Soluções',
            tipo: 'texto',
            corpo: `Na **diluição**, adicionamos mais solvente a uma solução, diminuindo sua concentração. O ponto-chave é que a **quantidade de soluto permanece constante** — apenas o volume aumenta.

A fórmula da diluição é:

$$\\boxed{C_1 \\cdot V_1 = C_2 \\cdot V_2}$$

onde:
- $C_1$ e $V_1$ = concentração e volume **antes** da diluição
- $C_2$ e $V_2$ = concentração e volume **depois** da diluição

Essa fórmula vale tanto para concentração em g/L quanto para molaridade (mol/L).

**Exemplo:** Diluir 200 mL de solução 0,5 mol/L para 1 L. Qual a nova molaridade?

$$0{,}5 \\times 0{,}2 = C_2 \\times 1{,}0$$
$$C_2 = 0{,}1 \\text{ mol/L}$$

> **Atenção:** na diluição, $C_2 < C_1$ (a concentração sempre diminui) e $V_2 > V_1$ (o volume sempre aumenta).`,
          },
          {
            titulo: 'Mistura de Soluções de Mesmo Soluto',
            tipo: 'texto',
            corpo: `Ao misturar duas soluções de **mesmo soluto**, a quantidade total de soluto é a soma das quantidades individuais:

$$C_1 V_1 + C_2 V_2 = C_f V_f$$

onde $V_f = V_1 + V_2$ e $C_f$ é a concentração final.

**Exemplo:** Misturar 300 mL de solução 2 mol/L com 200 mL de solução 3 mol/L:

$$2 \\times 0{,}3 + 3 \\times 0{,}2 = C_f \\times 0{,}5$$
$$0{,}6 + 0{,}6 = C_f \\times 0{,}5$$
$$C_f = \\frac{1{,}2}{0{,}5} = 2{,}4 \\text{ mol/L}$$

> Para soluções de solutos **diferentes** que reagem entre si, é necessário fazer o cálculo estequiométrico da reação antes de determinar a concentração final.`,
          },
          {
            titulo: 'Titulação — Conceito Básico',
            tipo: 'texto',
            corpo: `A **titulação** é uma técnica de laboratório usada para determinar a concentração desconhecida de uma solução. O procedimento envolve adicionar uma solução de concentração conhecida (**titulante**) a uma solução de concentração desconhecida (**titulado**) até que a reação se complete — o chamado **ponto de equivalência**.

No ponto de equivalência, as quantidades de reagentes estão na proporção estequiométrica:

$$n_{\\text{ácido}} \\times \\text{fator}_a = n_{\\text{base}} \\times \\text{fator}_b$$

Para reações 1:1 (como $HCl + NaOH \\rightarrow NaCl + H_2O$):

$$M_a \\cdot V_a = M_b \\cdot V_b$$

**Exemplo:** 25 mL de $HCl$ de concentração desconhecida são neutralizados por 20 mL de $NaOH$ 0,1 mol/L.

$$M_a \\times 0{,}025 = 0{,}1 \\times 0{,}020$$
$$M_a = \\frac{0{,}002}{0{,}025} = 0{,}08 \\text{ mol/L}$$`,
          },
          {
            titulo: 'Resumo — Estratégia para Provas de Estequiometria',
            tipo: 'destaque',
            corpo: `**Checklist para resolver qualquer questão de Estequiometria:**

1. **Escreva e balanceie** a equação química
2. **Identifique o que é dado** (massa, mols, volume, concentração) e o que se pede
3. **Converta para mols** usando $n = \\frac{m}{M}$, $n = \\frac{V}{22{,}4}$ (CNTP) ou $n = M \\cdot V$ (soluções)
4. **Use a proporção estequiométrica** (coeficientes da equação balanceada)
5. **Converta o resultado** para a unidade pedida
6. **Verifique o reagente limitante** se dois reagentes forem dados

**Erros mais frequentes:**
- Não balancear a equação antes de montar a regra de três
- Esquecer de converter mL para L
- Confundir concentração comum (g/L) com molaridade (mol/L)
- Ignorar o reagente limitante quando dois reagentes são fornecidos`,
          },
        ],
        imagemDescricao: 'Diagrama mostrando a relação entre mol, massa e volume com fórmulas de conversão',
        formulasChave: [
          'n = m / M (número de mols = massa / massa molar)',
          'C = m₁ / V (concentração comum em g/L)',
          'M = n / V (molaridade em mol/L)',
          'C₁ × V₁ = C₂ × V₂ (fórmula da diluição)',
          'PV = nRT (equação dos gases ideais)',
        ],
        dicasProva: [
          'Sempre balanceie a equação antes de qualquer cálculo estequiométrico',
          'Use regra de três baseada nos coeficientes estequiométricos da equação balanceada',
          'Atenção às unidades — converta tudo para a mesma unidade antes de calcular',
          'Na diluição, o número de mols do soluto permanece constante',
        ],
        errosComuns: [
          'Esquecer de balancear a equação antes de montar a proporção estequiométrica',
          'Confundir massa molar (g/mol) com massa atômica (u.m.a.)',
          'Usar molaridade quando a questão pede concentração em g/L ou vice-versa',
          'Errar a conversão de unidades (mL para L, g para kg)',
        ],
        exemplosResolvidos: [
          {
            enunciado: 'Quantos mols de H₂O são produzidos na combustão completa de 2 mols de CH₄? Reação: CH₄ + 2O₂ → CO₂ + 2H₂O',
            passos: [
              'A equação já está balanceada: CH₄ + 2O₂ → CO₂ + 2H₂O',
              'Pela proporção estequiométrica: 1 mol de CH₄ produz 2 mol de H₂O',
              'Logo: 2 mol de CH₄ × (2 mol H₂O / 1 mol CH₄) = 4 mol de H₂O',
            ],
            resposta: 'São produzidos 4 mols de H₂O.',
          },
          {
            enunciado: 'Uma solução contém 20 g de NaCl em 500 mL de solução. Qual a concentração em g/L?',
            passos: [
              'Fórmula: C = m₁ / V',
              'Converter volume: 500 mL = 0,5 L',
              'C = 20 g / 0,5 L = 40 g/L',
            ],
            resposta: 'A concentração da solução é 40 g/L.',
          },
        ],
        exercicios: [
          {
            id: 'qui-est-1',
            enunciado: 'Quantos mols existem em 180 g de glicose (C₆H₁₂O₆, massa molar = 180 g/mol)?',
            alternativas: ['0,5 mol', '1 mol', '2 mol', '3 mol', '6 mol'],
            respostaCorreta: 1,
            explicacao: 'Aplicando n = m / M: n = 180 g / 180 g/mol = 1 mol. A massa da amostra é numericamente igual à massa molar, logo temos exatamente 1 mol de glicose.',
            dificuldade: 'facil',
          },
          {
            id: 'qui-est-2',
            enunciado: 'Na reação 2H₂ + O₂ → 2H₂O, quantos mols de O₂ são necessários para reagir com 4 mols de H₂?',
            alternativas: ['1 mol', '2 mol', '4 mol', '8 mol', '0,5 mol'],
            respostaCorreta: 1,
            explicacao: 'Pela proporção estequiométrica, 2 mol de H₂ reagem com 1 mol de O₂. Logo, 4 mol de H₂ necessitam de 2 mol de O₂ (regra de três: 4 × 1/2 = 2).',
            dificuldade: 'facil',
          },
          {
            id: 'qui-est-3',
            enunciado: 'Qual a molaridade de uma solução que contém 4 mols de soluto em 2 litros de solução?',
            alternativas: ['0,5 mol/L', '1 mol/L', '2 mol/L', '4 mol/L', '8 mol/L'],
            respostaCorreta: 2,
            explicacao: 'Molaridade (M) = n / V = 4 mol / 2 L = 2 mol/L. A molaridade expressa a quantidade de mols de soluto por litro de solução.',
            dificuldade: 'facil',
          },
          {
            id: 'qui-est-4',
            enunciado: 'Ao diluir 100 mL de solução 2 mol/L para um volume final de 500 mL, a nova concentração será:',
            alternativas: ['0,2 mol/L', '0,4 mol/L', '1 mol/L', '2 mol/L', '10 mol/L'],
            respostaCorreta: 1,
            explicacao: 'Aplicando C₁V₁ = C₂V₂: 2 × 100 = C₂ × 500. Portanto C₂ = 200/500 = 0,4 mol/L. Na diluição, o número de mols permanece constante, mas a concentração diminui com o aumento do volume.',
            dificuldade: 'medio',
          },
          {
            id: 'qui-est-5',
            enunciado: 'O volume molar de qualquer gás ideal nas CNTP (0 °C e 1 atm) é aproximadamente:',
            alternativas: ['6,02 L', '11,2 L', '18,0 L', '22,4 L', '44,8 L'],
            respostaCorreta: 3,
            explicacao: 'Nas Condições Normais de Temperatura e Pressão (0 °C e 1 atm), 1 mol de qualquer gás ideal ocupa um volume de 22,4 litros, independentemente da natureza do gás.',
            dificuldade: 'facil',
          },
        ],
      },
    },
    {
      id: 'quimica-geral',
      titulo: 'Química Geral',
      peso: 25,
      conteudo: {
        resumo: 'Modelos atômicos, tabela periódica, ligações químicas e propriedades periódicas.',
        explicacao:
          'A Química Geral abrange os fundamentos da estrutura da matéria e das ligações entre átomos.\n\nModelos atômicos (evolução histórica):\n• Dalton: esfera maciça e indivisível (bola de bilhar)\n• Thomson: cargas positivas e negativas distribuídas (pudim de passas)\n• Rutherford: núcleo pequeno, denso e positivo com eletrosfera ao redor\n• Bohr: elétrons em órbitas definidas com níveis quantizados de energia\n\nDistribuição eletrônica:\nSeguir o diagrama de Linus Pauling: 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶...\n\nLigações químicas:\n• Iônica: metal + não-metal → transferência de elétrons (ex: NaCl)\n• Covalente: não-metal + não-metal → compartilhamento de elétrons (ex: H₂O)\n• Metálica: metal + metal → mar de elétrons (ex: Fe, Cu)\n\nPropriedades periódicas (em um período, da esquerda para a direita):\n• Raio atômico: diminui\n• Eletronegatividade: aumenta\n• Energia de ionização: aumenta',
        secoes: [
          {
            titulo: 'Introdução à Estrutura da Matéria',
            tipo: 'texto',
            corpo: `A **Química Geral** estuda os fundamentos da matéria: do que são feitos os átomos, como eles se organizam na tabela periódica e como se ligam para formar substâncias. Esse é um dos temas de base mais importantes para o vestibular, pois permeia praticamente todos os outros assuntos da Química.

Os principais tópicos cobrados são:
- **Modelos atômicos** — evolução histórica de Dalton a Bohr
- **Distribuição eletrônica** — diagrama de Linus Pauling
- **Tabela periódica** — organização e propriedades periódicas
- **Ligações químicas** — iônica, covalente e metálica
- **Forças intermoleculares** — van der Waals, dipolo-dipolo e ligação de hidrogênio`,
          },
          {
            titulo: 'Modelo Atômico de Dalton (1808)',
            tipo: 'texto',
            corpo: `John Dalton propôs o primeiro modelo atômico científico, baseado em evidências experimentais sobre as proporções em que os elementos se combinam:

- O átomo é uma **esfera maciça, indivisível e indestrutível** (modelo "bola de bilhar")
- Átomos de um mesmo elemento são **idênticos** em massa e propriedades
- Átomos de elementos diferentes possuem massas diferentes
- As reações químicas são **rearranjos** de átomos — eles não são criados nem destruídos

**Limitação:** o modelo não explicava fenômenos elétricos (como a condutividade de soluções iônicas) nem a existência de partículas subatômicas. A descoberta do elétron por J.J. Thomson, em 1897, mostrou que o átomo *não* era indivisível.`,
          },
          {
            titulo: 'Modelo Atômico de Thomson (1897)',
            tipo: 'texto',
            corpo: `Após descobrir o elétron em experimentos com tubos de raios catódicos, J.J. Thomson propôs o modelo do **"pudim de passas"**:

- O átomo é uma **esfera de carga positiva** distribuída uniformemente
- Os **elétrons** (cargas negativas) estão **incrustados** nessa esfera, como passas em um pudim
- O átomo é **eletricamente neutro** (cargas positivas e negativas se compensam)

Thomson demonstrou que os raios catódicos eram partículas com carga negativa (elétrons), comuns a todos os elementos. Seu modelo foi o primeiro a incluir uma estrutura interna do átomo.

**Limitação:** não explicava os resultados do experimento de Rutherford com partículas alfa, que revelou a existência de um **núcleo** concentrado.`,
          },
          {
            titulo: 'Modelo Atômico de Rutherford (1911)',
            tipo: 'texto',
            corpo: `Ernest Rutherford realizou o famoso **experimento da lâmina de ouro**: bombardeou uma folha finíssima de ouro com partículas alfa ($\\alpha$) e observou que:

- A **maioria** das partículas atravessava a lâmina sem desvio → o átomo é majoritariamente **espaço vazio**
- Poucas partículas sofriam **grandes desvios** → havia uma região de carga positiva concentrada
- Raríssimas partículas eram **refletidas** → o núcleo é muito denso

Com base nesses dados, Rutherford propôs:

- O átomo possui um **núcleo** pequeno, denso e com **carga positiva** (prótons)
- Os **elétrons** orbitam ao redor do núcleo em uma região chamada **eletrosfera**
- O diâmetro do núcleo é cerca de $10^4$ a $10^5$ vezes menor que o do átomo

**Limitação:** pela física clássica, um elétron em órbita perderia energia continuamente e **colapsaria** sobre o núcleo, o que não acontece na realidade. Esse problema foi resolvido por Bohr.`,
          },
          {
            titulo: 'Modelo Atômico de Bohr (1913)',
            tipo: 'texto',
            corpo: `Niels Bohr aprimorou o modelo de Rutherford incorporando ideias da **mecânica quântica**. Seus postulados:

1. Os elétrons se movem em **órbitas circulares definidas** (camadas ou níveis de energia), denominadas $K, L, M, N, O, P, Q$ (ou $n = 1, 2, 3...$)
2. Cada órbita possui uma **energia fixa** — o elétron **não** perde energia enquanto permanece em sua órbita
3. O elétron pode **saltar** de uma órbita para outra:
   - **Absorve** energia → salta para nível mais externo (estado excitado)
   - **Emite** energia (fóton) → retorna ao nível mais interno (estado fundamental)

A energia do fóton emitido ou absorvido é:

$$\\Delta E = E_f - E_i = h \\cdot f$$

onde $h$ é a constante de Planck e $f$ é a frequência da radiação.

O modelo de Bohr explicou com sucesso o **espectro de emissão do hidrogênio** — as linhas coloridas discretas quando o gás é excitado.`,
          },
          {
            titulo: 'Evolução dos Modelos Atômicos — Resumo',
            tipo: 'tabela',
            corpo: `| Modelo | Ano | Descrição | Limitação |
|--------|-----|-----------|-----------|
| **Dalton** | 1808 | Esfera maciça e indivisível (bola de bilhar) | Não explica fenômenos elétricos |
| **Thomson** | 1897 | Esfera positiva com elétrons incrustados (pudim de passas) | Não prevê o núcleo atômico |
| **Rutherford** | 1911 | Núcleo positivo e denso + eletrosfera vazia | Elétron colapsaria sobre o núcleo |
| **Bohr** | 1913 | Órbitas quantizadas com energia definida | Funciona bem apenas para o hidrogênio |

> **Modelo atual (mecânico-quântico):** os elétrons não possuem órbitas definidas, mas **orbitais** — regiões de probabilidade de encontrar o elétron. Esse modelo é baseado na equação de Schrödinger e descreve os elétrons por **números quânticos**.`,
          },
          {
            titulo: 'Distribuição Eletrônica — Diagrama de Linus Pauling',
            tipo: 'texto',
            corpo: `A **distribuição eletrônica** descreve como os elétrons de um átomo se distribuem nos subníveis de energia. O **diagrama de Linus Pauling** indica a ordem crescente de energia dos subníveis:

$$1s \\rightarrow 2s \\rightarrow 2p \\rightarrow 3s \\rightarrow 3p \\rightarrow 4s \\rightarrow 3d \\rightarrow 4p \\rightarrow 5s \\rightarrow 4d \\rightarrow 5p \\rightarrow ...$$

**Capacidade máxima de cada subnível:**
- $s$: 2 elétrons | $p$: 6 elétrons | $d$: 10 elétrons | $f$: 14 elétrons

**Exemplo:** Distribuição do ferro ($Fe$, $Z = 26$):

$$1s^2 \\, 2s^2 \\, 2p^6 \\, 3s^2 \\, 3p^6 \\, 4s^2 \\, 3d^6$$

**Camada de valência:** é a última camada (mais externa). Para o $Fe$: camada $4$ ($4s^2$), com 2 elétrons na valência.

> **Dica:** a distribuição eletrônica determina a posição do elemento na tabela periódica. O subnível mais energético indica:
> - $s$ ou $p$ → bloco dos **representativos**
> - $d$ → bloco de **transição**
> - $f$ → bloco de **transição interna** (lantanídeos e actinídeos)`,
          },
          {
            titulo: 'Números Quânticos',
            tipo: 'texto',
            corpo: `Cada elétron é descrito por **quatro números quânticos**:

**1. Principal ($n$):** indica a camada (nível de energia). $n = 1, 2, 3, 4...$ Quanto maior $n$, maior a energia e a distância do núcleo.

**2. Secundário ($l$):** indica o subnível (formato do orbital).
- $l = 0$ → $s$ (esférico)
- $l = 1$ → $p$ (haltere)
- $l = 2$ → $d$ (trevo)
- $l = 3$ → $f$ (complexo)

**3. Magnético ($m_l$):** indica a orientação do orbital no espaço. Varia de $-l$ a $+l$.

**4. Spin ($m_s$):** indica o sentido de rotação do elétron. Pode ser $+\\frac{1}{2}$ ou $-\\frac{1}{2}$.

**Princípio de exclusão de Pauli:** dois elétrons no mesmo átomo não podem ter os quatro números quânticos iguais.

**Regra de Hund:** os elétrons preenchem orbitais de mesma energia **um a um** antes de emparelhar.`,
          },
          {
            titulo: 'Tabela Periódica — Organização e Estrutura',
            tipo: 'texto',
            corpo: `A tabela periódica organiza os elementos em ordem crescente de **número atômico** ($Z$). Ela possui:

- **7 períodos** (linhas horizontais): indicam o número de camadas eletrônicas
- **18 grupos/famílias** (colunas verticais): elementos com propriedades semelhantes

**Famílias mais cobradas:**

| Grupo | Nome | Elementos | Elétrons na valência |
|-------|------|-----------|---------------------|
| 1 (1A) | Metais alcalinos | $Li, Na, K, Rb, Cs, Fr$ | 1 |
| 2 (2A) | Metais alcalino-terrosos | $Be, Mg, Ca, Sr, Ba, Ra$ | 2 |
| 16 (6A) | Calcogênios | $O, S, Se, Te, Po$ | 6 |
| 17 (7A) | Halogênios | $F, Cl, Br, I, At$ | 7 |
| 18 (8A) | Gases nobres | $He, Ne, Ar, Kr, Xe, Rn$ | 8 (exceto $He$: 2) |

**Classificação dos elementos:**
- **Metais:** conduzem eletricidade, são maleáveis, dúcteis, brilhantes
- **Não-metais (ametais):** maus condutores, quebradiços
- **Semimetais (metaloides):** propriedades intermediárias ($Si$, $Ge$...)
- **Gases nobres:** estáveis, pouco reativos (camada de valência completa)`,
          },
          {
            titulo: 'Propriedades Periódicas',
            tipo: 'texto',
            corpo: `As **propriedades periódicas** variam de forma previsível ao longo da tabela:

**Raio atômico** — tamanho do átomo:
- **No período** (→): **diminui** (mais prótons atraem os elétrons da mesma camada)
- **No grupo** (↓): **aumenta** (mais camadas eletrônicas)

**Energia de ionização** — energia para remover 1 elétron do átomo neutro gasoso:
- **No período** (→): **aumenta** (átomos menores seguram elétrons com mais força)
- **No grupo** (↓): **diminui** (elétrons mais afastados do núcleo são removidos mais facilmente)

**Eletronegatividade** — tendência de atrair elétrons em uma ligação:
- **No período** (→): **aumenta**
- **No grupo** (↓): **diminui**
- Elemento mais eletronegativo: **flúor** ($F$)
- Gases nobres não possuem eletronegatividade definida

**Afinidade eletrônica (eletroafinidade)** — energia liberada ao receber 1 elétron:
- Segue a mesma tendência da eletronegatividade

> **Macete:** raio atômico tem tendência **oposta** às demais propriedades.`,
          },
          {
            titulo: 'Ligação Iônica',
            tipo: 'texto',
            corpo: `A **ligação iônica** ocorre entre um **metal** (que perde elétrons) e um **não-metal** (que ganha elétrons), formando íons de cargas opostas que se atraem por forças eletrostáticas.

**Processo:**
1. O metal perde elétrons → forma **cátion** (íon positivo)
2. O não-metal ganha elétrons → forma **ânion** (íon negativo)
3. A atração eletrostática entre cátion e ânion forma o **composto iônico**

**Exemplo:** formação do $NaCl$:

$$Na \\rightarrow Na^+ + e^-$$
$$Cl + e^- \\rightarrow Cl^-$$
$$Na^+ + Cl^- \\rightarrow NaCl$$

**Propriedades dos compostos iônicos:**
- **Altos pontos de fusão e ebulição** (forças eletrostáticas intensas)
- **Sólidos cristalinos** à temperatura ambiente
- **Conduzem eletricidade** quando fundidos ou em solução aquosa (íons livres)
- **Não conduzem** no estado sólido (íons fixos na rede cristalina)
- **Solúveis em água** (solvente polar)`,
          },
          {
            titulo: 'Ligação Covalente',
            tipo: 'texto',
            corpo: `A **ligação covalente** ocorre entre **não-metais** (ou entre não-metal e hidrogênio), que **compartilham** pares de elétrons para completar o octeto.

**Tipos de ligação covalente:**
- **Simples:** compartilhamento de 1 par de elétrons ($H - H$)
- **Dupla:** compartilhamento de 2 pares ($O = O$)
- **Tripla:** compartilhamento de 3 pares ($N \\equiv N$)
- **Dativa (coordenada):** um átomo "empresta" os dois elétrons do par ($SO_2$, $O_3$)

**Exemplos:**
- $H_2$: $H - H$ (ligação simples apolar)
- $H_2O$: $O$ compartilha elétrons com dois $H$ (ligação polar)
- $O_2$: $O = O$ (ligação dupla)
- $N_2$: $N \\equiv N$ (ligação tripla — muito estável)

**Polaridade da ligação:**
- **Apolar:** entre átomos iguais ($H_2$, $O_2$, $Cl_2$) — $\\Delta \\chi = 0$
- **Polar:** entre átomos diferentes ($HCl$, $H_2O$) — $\\Delta \\chi > 0$

A polaridade depende da diferença de **eletronegatividade** ($\\Delta \\chi$) entre os átomos. Quanto maior $\\Delta \\chi$, mais polar a ligação.`,
          },
          {
            titulo: 'Ligação Metálica',
            tipo: 'texto',
            corpo: `A **ligação metálica** ocorre entre átomos de **metais**. Os átomos metálicos liberam seus elétrons de valência, que ficam deslocalizados formando uma "nuvem" ou **"mar de elétrons"** que envolve os cátions metálicos.

**Modelo do mar de elétrons:**
- Cátions metálicos organizados em rede cristalina
- Elétrons de valência livres para se mover por toda a estrutura

**Propriedades dos metais (explicadas pela ligação metálica):**
- **Condutividade elétrica e térmica:** elétrons livres transportam carga e calor
- **Brilho metálico:** elétrons livres absorvem e reemitem luz
- **Maleabilidade:** podem ser moldados em lâminas (as camadas de cátions deslizam sem quebrar)
- **Ductilidade:** podem ser estirados em fios
- **Altos pontos de fusão** (a maioria)

**Exemplos:** $Fe$ (ferro), $Cu$ (cobre), $Au$ (ouro), $Al$ (alumínio). As **ligas metálicas** (aço, bronze, latão) são misturas de metais que combinam propriedades desejáveis.`,
          },
          {
            titulo: 'Forças Intermoleculares',
            tipo: 'texto',
            corpo: `As **forças intermoleculares** são atrações entre **moléculas** (não entre átomos dentro da molécula). Elas são mais fracas que as ligações covalentes e determinam propriedades como ponto de ebulição e solubilidade.

**Em ordem crescente de intensidade:**

**1. Forças de London (dipolo instantâneo–dipolo induzido)**
- Presentes em **todas** as moléculas
- Únicas forças em moléculas **apolares** ($H_2$, $O_2$, $CO_2$, $CH_4$)
- Aumentam com a **massa molar** e a **área de superfície**

**2. Dipolo-dipolo (forças de Keesom)**
- Entre moléculas **polares** ($HCl$, $SO_2$)
- Os polos positivos e negativos de moléculas vizinhas se atraem

**3. Ligação de hidrogênio (ponte de hidrogênio)**
- Caso especial de dipolo-dipolo, **muito mais intensa**
- Ocorre quando $H$ está ligado a $F$, $O$ ou $N$ (elementos muito eletronegativos e pequenos)
- Exemplos: $H_2O$, $NH_3$, $HF$, álcoois, ácidos carboxílicos

> **Consequência prática:** a água ($H_2O$) possui ponto de ebulição anormalmente alto para sua massa molar (100 °C) graças às **ligações de hidrogênio** entre suas moléculas.

**Regra:** quanto mais fortes as forças intermoleculares, maiores são os pontos de fusão e ebulição da substância.`,
          },
          {
            titulo: 'Geometria Molecular e Polaridade',
            tipo: 'texto',
            corpo: `A **geometria molecular** depende do número de pares ligantes e não-ligantes ao redor do átomo central (teoria VSEPR):

| Pares ligantes | Pares não-ligantes | Geometria | Exemplo |
|:-:|:-:|-----------|---------|
| 2 | 0 | Linear | $CO_2$, $BeCl_2$ |
| 3 | 0 | Trigonal plana | $BF_3$, $SO_3$ |
| 2 | 1 | Angular | $SO_2$, $O_3$ |
| 4 | 0 | Tetraédrica | $CH_4$, $CCl_4$ |
| 3 | 1 | Piramidal | $NH_3$, $PCl_3$ |
| 2 | 2 | Angular | $H_2O$, $H_2S$ |

**Polaridade da molécula:**
Uma molécula é **apolar** quando o vetor soma dos momentos de dipolo ($\\vec{\\mu}$) é zero. Isso ocorre em:
- Moléculas com ligações apolares ($H_2$, $O_2$)
- Moléculas **simétricas** com ligações polares ($CO_2$, $CH_4$, $BF_3$, $CCl_4$)

Uma molécula é **polar** quando a soma dos vetores $\\neq 0$:
- Moléculas **assimétricas** com ligações polares ($H_2O$, $NH_3$, $HCl$)

> **Regra prática:** semelhante dissolve semelhante — solventes polares (água) dissolvem solutos polares ou iônicos; solventes apolares dissolvem solutos apolares.`,
          },
        ],
        imagemDescricao: 'Tabela periódica com setas indicando as tendências das propriedades periódicas e esquema dos modelos atômicos',
        dicasProva: [
          'Saiba a ordem cronológica dos modelos atômicos e a contribuição de cada cientista',
          'Domine a distribuição eletrônica pelo diagrama de Linus Pauling',
          'Identifique o tipo de ligação pela natureza dos átomos envolvidos (metal ou não-metal)',
          'Propriedades periódicas são muito cobradas — memorize as tendências nos períodos e grupos',
        ],
        errosComuns: [
          'Confundir o modelo de Thomson (pudim de passas) com o de Rutherford (núcleo e eletrosfera)',
          'Errar a distribuição eletrônica por não seguir a ordem energética do diagrama de Pauling',
          'Afirmar que ligação iônica ocorre entre dois não-metais (ocorre entre metal e não-metal)',
          'Inverter as tendências das propriedades periódicas no período e na família',
        ],
        exercicios: [
          {
            id: 'qui-ger-1',
            enunciado: 'O modelo atômico que introduziu o conceito de núcleo atômico denso e positivo foi proposto por:',
            alternativas: ['Dalton', 'Thomson', 'Rutherford', 'Bohr', 'Heisenberg'],
            respostaCorreta: 2,
            explicacao: 'Rutherford, por meio do experimento com partículas alfa e lâmina de ouro, concluiu que o átomo possui um núcleo pequeno, denso e positivo, com a maior parte do volume sendo espaço vazio (eletrosfera).',
            dificuldade: 'facil',
          },
          {
            id: 'qui-ger-2',
            enunciado: 'A ligação química entre sódio (Na) e cloro (Cl) no NaCl é do tipo:',
            alternativas: ['Covalente polar', 'Covalente apolar', 'Metálica', 'Iônica', 'Ligação de hidrogênio'],
            respostaCorreta: 3,
            explicacao: 'O sódio é um metal (família 1A) e o cloro é um não-metal (família 7A). A ligação entre metal e não-metal é iônica: o sódio transfere um elétron para o cloro, formando os íons Na⁺ e Cl⁻.',
            dificuldade: 'facil',
          },
          {
            id: 'qui-ger-3',
            enunciado: 'Em um mesmo período da tabela periódica, da esquerda para a direita, o raio atômico:',
            alternativas: ['Aumenta', 'Diminui', 'Permanece constante', 'Dobra de valor', 'Não segue nenhum padrão'],
            respostaCorreta: 1,
            explicacao: 'No mesmo período, da esquerda para a direita, o número de prótons aumenta e os elétrons são adicionados na mesma camada. A maior carga nuclear atrai os elétrons com mais força, diminuindo o raio atômico.',
            dificuldade: 'facil',
          },
          {
            id: 'qui-ger-4',
            enunciado: 'A distribuição eletrônica do carbono (Z = 6) no estado fundamental é:',
            alternativas: ['1s² 2s² 2p⁴', '1s² 2s² 2p²', '1s² 2p⁴', '1s² 2s⁴', '1s² 3s² 2p²'],
            respostaCorreta: 1,
            explicacao: 'O carbono possui 6 elétrons. Seguindo o diagrama de Pauling: 1s² (2 elétrons) → 2s² (4 elétrons) → 2p² (6 elétrons). A distribuição correta é 1s² 2s² 2p².',
            dificuldade: 'medio',
          },
          {
            id: 'qui-ger-5',
            enunciado: 'A regra do octeto estabelece que os átomos tendem a:',
            alternativas: [
              'Perder 8 elétrons para se estabilizar quimicamente',
              'Ter 8 prótons na camada de valência',
              'Completar 8 elétrons na camada de valência para atingir estabilidade',
              'Compartilhar sempre 8 elétrons com outros átomos',
              'Ter 8 nêutrons no núcleo atômico',
            ],
            respostaCorreta: 2,
            explicacao: 'A regra do octeto afirma que os átomos tendem a ganhar, perder ou compartilhar elétrons para completar 8 elétrons na camada de valência, alcançando configuração eletrônica estável semelhante à dos gases nobres.',
            dificuldade: 'facil',
          },
        ],
      },
    },
    {
      id: 'fisico-quimica',
      titulo: 'Físico-Química',
      peso: 15,
      conteudo: {
        resumo: 'Termoquímica, cinética química e equilíbrio químico — entalpia, velocidade de reações e princípio de Le Chatelier.',
        explicacao:
          'A Físico-Química une conceitos de física e química para explicar transformações energéticas e equilíbrios.\n\nTermoquímica:\n• Reação exotérmica: libera calor para o ambiente (ΔH < 0)\n• Reação endotérmica: absorve calor do ambiente (ΔH > 0)\n• Lei de Hess: o ΔH da reação global é a soma dos ΔH das etapas intermediárias\n\nCinética química:\n• Velocidade de reação depende de: temperatura, concentração, superfície de contato e catalisador\n• Catalisador: aumenta a velocidade sem ser consumido (diminui a energia de ativação)\n\nEquilíbrio químico:\n• Ocorre quando as velocidades direta e inversa se igualam\n• Princípio de Le Chatelier: o sistema se desloca para compensar perturbações externas\n• Constante de equilíbrio: Kc = [produtos]^coef / [reagentes]^coef',
        secoes: [
          {
            titulo: 'Introdução à Físico-Química',
            tipo: 'texto',
            corpo: `A **Físico-Química** é o ramo que aplica princípios da Física para explicar fenômenos químicos: transformações de energia, velocidade das reações e equilíbrio entre reagentes e produtos.

No vestibular, os temas mais cobrados desta área são:

- **Termoquímica:** variação de entalpia ($\\Delta H$), reações exo e endotérmicas, Lei de Hess
- **Cinética Química:** fatores que afetam a velocidade das reações
- **Equilíbrio Químico:** constante de equilíbrio ($K_c$, $K_p$) e princípio de Le Chatelier
- **Eletroquímica:** pilhas e eletrólise (conceitos fundamentais)`,
          },
          {
            titulo: 'Termoquímica — Conceitos Fundamentais',
            tipo: 'texto',
            corpo: `A **Termoquímica** estuda as trocas de calor ($Q$) nas reações químicas. O conceito central é a **entalpia** ($H$), uma grandeza termodinâmica que mede o conteúdo energético de um sistema à pressão constante.

**Variação de entalpia ($\\Delta H$):**

$$\\boxed{\\Delta H = H_{\\text{produtos}} - H_{\\text{reagentes}}}$$

**Classificação das reações:**

| Tipo | $\\Delta H$ | Energia | Exemplo |
|------|-----------|---------|---------|
| **Exotérmica** | $\\Delta H < 0$ | Libera calor para o ambiente | Combustão, neutralização |
| **Endotérmica** | $\\Delta H > 0$ | Absorve calor do ambiente | Fotossíntese, decomposição do $CaCO_3$ |

**Equação termoquímica:** é a equação balanceada acompanhada do valor de $\\Delta H$ e das condições (estado físico dos participantes):

$$C_{(grafite)} + O_{2(g)} \\rightarrow CO_{2(g)} \\quad \\Delta H = -393{,}5 \\text{ kJ/mol}$$

> **Importante:** o sinal de $\\Delta H$ é o critério decisivo. Negativo = exotérmica (liberou energia). Positivo = endotérmica (absorveu energia).`,
          },
          {
            titulo: 'Entalpia — Tipos de Variação',
            tipo: 'formula',
            corpo: `Existem diferentes tipos de $\\Delta H$, dependendo do processo:

**Entalpia de formação** ($\\Delta H_f°$): calor envolvido na formação de 1 mol de substância a partir de substâncias simples no estado-padrão.

$$\\Delta H_{\\text{reação}}° = \\sum \\Delta H_f°(\\text{produtos}) - \\sum \\Delta H_f°(\\text{reagentes})$$

**Entalpia de combustão** ($\\Delta H_c°$): calor liberado na combustão completa de 1 mol de substância com $O_2$ em excesso.

**Entalpia de neutralização:** calor liberado na reação entre 1 mol de $H^+$ e 1 mol de $OH^-$:

$$H^+_{(aq)} + OH^-_{(aq)} \\rightarrow H_2O_{(l)} \\quad \\Delta H \\approx -57{,}3 \\text{ kJ/mol}$$

**Entalpia de ligação:** energia necessária para romper 1 mol de ligações no estado gasoso. A $\\Delta H$ da reação pode ser calculada por:

$$\\Delta H = \\sum E_{\\text{ligações rompidas}} - \\sum E_{\\text{ligações formadas}}$$

> Romper ligações **consome** energia; formar ligações **libera** energia.`,
          },
          {
            titulo: 'Lei de Hess',
            tipo: 'texto',
            corpo: `A **Lei de Hess** (ou lei da soma dos calores de reação) afirma que:

> A variação de entalpia de uma reação depende **apenas dos estados inicial e final**, e não do caminho percorrido.

Isso significa que podemos calcular o $\\Delta H$ de uma reação **somando algebricamente** as equações de etapas intermediárias cujos $\\Delta H$ são conhecidos.

**Regras de manipulação:**
1. Ao **inverter** uma equação, **troque o sinal** de $\\Delta H$
2. Ao **multiplicar** uma equação por um fator, **multiplique** $\\Delta H$ pelo mesmo fator
3. Some as equações manipuladas para obter a reação global

**Exemplo:** Calcular $\\Delta H$ da reação $C_{(s)} + \\frac{1}{2}O_{2(g)} \\rightarrow CO_{(g)}$

Dados:
- (I) $C_{(s)} + O_{2(g)} \\rightarrow CO_{2(g)}$ $\\quad \\Delta H_1 = -393$ kJ
- (II) $CO_{(g)} + \\frac{1}{2}O_{2(g)} \\rightarrow CO_{2(g)}$ $\\quad \\Delta H_2 = -283$ kJ

Inverta (II): $CO_{2(g)} \\rightarrow CO_{(g)} + \\frac{1}{2}O_{2(g)}$ $\\quad \\Delta H = +283$ kJ

Some (I) + (II invertida):

$$\\Delta H = -393 + 283 = -110 \\text{ kJ}$$`,
          },
          {
            titulo: 'Energia de Ligação e Cálculo de ΔH',
            tipo: 'texto',
            corpo: `Toda ligação química possui uma **energia de ligação** — a energia necessária para rompê-la (em kJ/mol). Essa abordagem permite calcular o $\\Delta H$ de uma reação quando as entalpias de formação não estão disponíveis.

$$\\boxed{\\Delta H = \\sum E_{\\text{lig. rompidas}} - \\sum E_{\\text{lig. formadas}}}$$

**Exemplo:** Calcular o $\\Delta H$ da reação $H_{2(g)} + Cl_{2(g)} \\rightarrow 2\\,HCl_{(g)}$

Energias de ligação (kJ/mol): $H-H = 436$; $Cl-Cl = 243$; $H-Cl = 432$

Ligações rompidas: $1 \\times H-H + 1 \\times Cl-Cl = 436 + 243 = 679$ kJ
Ligações formadas: $2 \\times H-Cl = 2 \\times 432 = 864$ kJ

$$\\Delta H = 679 - 864 = -185 \\text{ kJ}$$

Resultado negativo → reação **exotérmica** (mais energia é liberada na formação do que consumida na ruptura).

> **Atenção:** use as energias de ligação **médias** fornecidas pela questão. Os valores podem variar conforme a molécula.`,
          },
          {
            titulo: 'Equilíbrio Químico — Conceitos Fundamentais',
            tipo: 'texto',
            corpo: `O **equilíbrio químico** é um estado dinâmico em que as **velocidades das reações direta e inversa se igualam**, de modo que as concentrações dos reagentes e produtos permanecem constantes (mas não necessariamente iguais).

Para uma reação reversível genérica:

$$a\\,A + b\\,B \\rightleftharpoons c\\,C + d\\,D$$

**Características do equilíbrio:**
- É **dinâmico**: as reações direta e inversa continuam ocorrendo, mas na mesma velocidade
- As **concentrações** permanecem constantes ao longo do tempo
- Só é atingido em **sistema fechado**
- Pode ser perturbado por mudanças de concentração, pressão ou temperatura

**Quociente de reação ($Q$):** possui a mesma expressão de $K_c$, mas para qualquer instante (não apenas no equilíbrio).
- $Q < K_c$ → reação desloca para a **direita** (formação de produtos)
- $Q = K_c$ → sistema em **equilíbrio**
- $Q > K_c$ → reação desloca para a **esquerda** (formação de reagentes)`,
          },
          {
            titulo: 'Constante de Equilíbrio',
            tipo: 'formula',
            corpo: `Para a reação: $a\\,A + b\\,B \\rightleftharpoons c\\,C + d\\,D$

**Constante de equilíbrio em termos de concentração ($K_c$):**

$$\\boxed{K_c = \\frac{[C]^c \\cdot [D]^d}{[A]^a \\cdot [B]^b}}$$

**Constante em termos de pressão parcial ($K_p$)** — para equilíbrios gasosos:

$$K_p = \\frac{(P_C)^c \\cdot (P_D)^d}{(P_A)^a \\cdot (P_B)^b}$$

**Relação entre $K_c$ e $K_p$:**

$$K_p = K_c \\cdot (RT)^{\\Delta n}$$

onde $\\Delta n = (c + d) - (a + b)$ = diferença de mols gasosos (produtos - reagentes).

**Regras importantes:**
- **Sólidos e líquidos puros** não entram na expressão de $K$ (suas concentrações são constantes)
- $K$ grande → equilíbrio favorece os **produtos**
- $K$ pequeno → equilíbrio favorece os **reagentes**
- $K$ depende **apenas da temperatura** — não varia com concentração ou pressão`,
          },
          {
            titulo: 'Princípio de Le Chatelier',
            tipo: 'texto',
            corpo: `O **Princípio de Le Chatelier** afirma que:

> Quando um sistema em equilíbrio sofre uma perturbação externa, ele se desloca no sentido que tende a **minimizar** essa perturbação.

**Perturbações e seus efeitos:**

| Perturbação | Deslocamento |
|-------------|-------------|
| Aumento da concentração de reagente | → Para a **direita** (consome o reagente adicionado) |
| Aumento da concentração de produto | → Para a **esquerda** (consome o produto adicionado) |
| Aumento de pressão (ou diminuição de volume) | → Para o lado com **menor número de mols gasosos** |
| Aumento de temperatura | → Para o sentido **endotérmico** |
| Diminuição de temperatura | → Para o sentido **exotérmico** |
| Adição de **catalisador** | → **Não desloca** o equilíbrio (acelera igualmente ambos os sentidos) |

**Exemplo:** $N_{2(g)} + 3\\,H_{2(g)} \\rightleftharpoons 2\\,NH_{3(g)}$ com $\\Delta H < 0$

- Aumentar $[N_2]$ → desloca para a **direita** (mais $NH_3$)
- Aumentar a temperatura → desloca para a **esquerda** (sentido endotérmico, decompõe $NH_3$)
- Aumentar a pressão → desloca para a **direita** (4 mol gasosos → 2 mol gasosos)`,
          },
          {
            titulo: 'Cinética Química — Velocidade de Reação',
            tipo: 'texto',
            corpo: `A **Cinética Química** estuda a **velocidade** das reações e os fatores que a influenciam. A velocidade média de uma reação pode ser expressa como:

$$v = \\frac{\\Delta [\\text{produto}]}{\\Delta t} = -\\frac{\\Delta [\\text{reagente}]}{\\Delta t}$$

O sinal negativo para reagentes indica que suas concentrações **diminuem** ao longo do tempo.

**Teoria das colisões:** para que uma reação ocorra, as moléculas devem:
1. **Colidir** entre si
2. Com **orientação adequada**
3. Com **energia suficiente** (igual ou maior que a **energia de ativação**, $E_a$)

A **energia de ativação** ($E_a$) é a barreira energética mínima que os reagentes devem superar para se transformar em produtos. Quanto maior a $E_a$, mais lenta a reação.

**Lei da velocidade** (determinada experimentalmente):

$$v = k \\cdot [A]^x \\cdot [B]^y$$

onde $k$ é a constante de velocidade e $x$, $y$ são as ordens de reação (determinadas experimentalmente, **não** pelos coeficientes estequiométricos).`,
          },
          {
            titulo: 'Fatores que Afetam a Velocidade das Reações',
            tipo: 'texto',
            corpo: `Os principais fatores que influenciam a velocidade de uma reação são:

**1. Temperatura** — aumentar a temperatura **aumenta** a velocidade, pois:
- As moléculas se movem mais rapidamente
- Maior fração de colisões possui energia $\\geq E_a$
- Regra prática: um aumento de 10 °C pode **dobrar** a velocidade

**2. Concentração dos reagentes** — aumentar a concentração geralmente **aumenta** a velocidade:
- Mais moléculas por unidade de volume → mais colisões efetivas

**3. Superfície de contato** — quanto mais dividido o sólido, **maior** a área exposta e mais rápida a reação:
- Ex.: ferro em pó reage mais rápido que ferro em barra

**4. Catalisador** — substância que **aumenta** a velocidade ao fornecer um caminho alternativo com **menor energia de ativação** ($E_a$):
- O catalisador **não é consumido** na reação
- **Não altera** o $\\Delta H$ da reação
- **Não desloca** o equilíbrio químico (acelera igualmente os dois sentidos)
- **Não altera** a composição de equilíbrio

**5. Pressão (para gases)** — aumentar a pressão equivale a aumentar a concentração → mais colisões → maior velocidade.`,
          },
          {
            titulo: 'Eletroquímica — Fundamentos',
            tipo: 'texto',
            corpo: `A **Eletroquímica** estuda a relação entre reações químicas e corrente elétrica. Divide-se em:

**Pilhas (células galvânicas)** — reações espontâneas que geram corrente elétrica:
- O eletrodo que **oxida** (perde elétrons) é o **ânodo** (polo negativo)
- O eletrodo que **reduz** (ganha elétrons) é o **cátodo** (polo positivo)
- O fluxo de elétrons vai do ânodo para o cátodo pelo fio externo

**Diferença de potencial (ddp ou $\\Delta E°$):**

$$\\Delta E° = E°_{\\text{cátodo}} - E°_{\\text{ânodo}}$$

Para a pilha ser espontânea: $\\Delta E° > 0$.

**Eletrólise** — processo **não espontâneo** (requer energia elétrica externa):
- Utilizada para decompor substâncias (ex.: eletrólise da água: $2\\,H_2O \\rightarrow 2\\,H_2 + O_2$)
- Na eletrólise, a **oxidação** ocorre no **ânodo** e a **redução** no **cátodo** (mesma convenção)

**Fila de reatividade dos metais** (ordem decrescente de tendência a oxidar):

$$Li > K > Ca > Na > Mg > Al > Zn > Fe > Ni > Sn > Pb > H > Cu > Ag > Pt > Au$$

> Quanto mais à esquerda, maior a tendência a perder elétrons (oxidar). Metais mais reativos deslocam os menos reativos de suas soluções.`,
          },
          {
            titulo: 'Resumo — Estratégia para Provas de Físico-Química',
            tipo: 'destaque',
            corpo: `**Checklist rápido para questões de Físico-Química:**

**Termoquímica:**
- $\\Delta H < 0$ → exotérmica | $\\Delta H > 0$ → endotérmica
- Lei de Hess: inverta equações e some $\\Delta H$ para chegar à reação desejada
- Energia de ligação: $\\Delta H = \\Sigma(\\text{rompidas}) - \\Sigma(\\text{formadas})$

**Equilíbrio:**
- Escreva a expressão de $K_c$ (só gases e soluções, nunca sólidos/líquidos puros)
- Le Chatelier: aumento de temperatura desloca para o lado endotérmico
- Catalisador **nunca** desloca o equilíbrio

**Cinética:**
- Aumentar temperatura, concentração e superfície de contato → maior velocidade
- Catalisador diminui a $E_a$ mas não altera $\\Delta H$

**Eletroquímica:**
- Pilha: ânodo (oxidação, polo −) → cátodo (redução, polo +)
- Eletrólise: processo inverso, não espontâneo, requer energia externa`,
          },
        ],
        imagemDescricao: 'Gráfico de entalpia mostrando reações exotérmicas e endotérmicas e diagrama de equilíbrio químico',
        formulasChave: [
          'ΔH = Hp - Hr (variação de entalpia = entalpia dos produtos - entalpia dos reagentes)',
          'ΔH = ΣΔHf(produtos) - ΣΔHf(reagentes) (Lei de Hess com entalpias de formação)',
          'Kc = [C]ᶜ × [D]ᵈ / [A]ᵃ × [B]ᵇ (constante de equilíbrio em termos de concentração)',
          'Velocidade ∝ concentração × temperatura × superfície de contato',
        ],
        dicasProva: [
          'Se ΔH < 0, a reação é exotérmica (libera calor); se ΔH > 0, é endotérmica (absorve calor)',
          'Na Lei de Hess, ao inverter uma reação, troque o sinal de ΔH',
          'Aumento de temperatura desloca o equilíbrio para o lado endotérmico',
          'Catalisador NÃO desloca o equilíbrio — apenas acelera igualmente os dois sentidos',
        ],
        errosComuns: [
          'Afirmar que catalisador desloca o equilíbrio (ele apenas acelera ambos os sentidos)',
          'Confundir exotérmico (ΔH negativo, libera calor) com endotérmico (ΔH positivo, absorve calor)',
          'Esquecer de inverter o sinal de ΔH ao inverter uma reação na Lei de Hess',
          'Incluir sólidos e líquidos puros na expressão de Kc (apenas gases e soluções entram)',
        ],
        exercicios: [
          {
            id: 'qui-fiq-1',
            enunciado: 'Uma reação química com ΔH = -200 kJ/mol é classificada como:',
            alternativas: ['Endotérmica', 'Exotérmica', 'Atérmica', 'Isotérmica', 'Adiabática'],
            respostaCorreta: 1,
            explicacao: 'Quando ΔH é negativo, a reação libera energia na forma de calor para o ambiente, sendo classificada como exotérmica. Reações de combustão são exemplos clássicos de processos exotérmicos.',
            dificuldade: 'facil',
          },
          {
            id: 'qui-fiq-2',
            enunciado: 'Segundo o Princípio de Le Chatelier, ao aumentar a concentração de reagentes, o equilíbrio se desloca:',
            alternativas: [
              'Para a esquerda (reagentes)',
              'Para a direita (produtos)',
              'Não se altera',
              'O equilíbrio é permanentemente rompido',
              'Depende exclusivamente do catalisador',
            ],
            respostaCorreta: 1,
            explicacao: 'Pelo Princípio de Le Chatelier, o sistema em equilíbrio se desloca no sentido de consumir a perturbação. Ao adicionar reagentes, o equilíbrio se desloca para a direita (sentido dos produtos) para consumir o excesso.',
            dificuldade: 'facil',
          },
          {
            id: 'qui-fiq-3',
            enunciado: 'O catalisador atua em uma reação química:',
            alternativas: [
              'Aumentando a energia de ativação',
              'Deslocando o equilíbrio químico',
              'Diminuindo a energia de ativação',
              'Alterando o valor de ΔH da reação',
              'Aumentando a entropia do sistema',
            ],
            respostaCorreta: 2,
            explicacao: 'O catalisador fornece um caminho alternativo de menor energia de ativação, aumentando a velocidade da reação sem ser consumido e sem alterar o ΔH ou o equilíbrio final.',
            dificuldade: 'medio',
          },
          {
            id: 'qui-fiq-4',
            enunciado: 'Na Lei de Hess, ao inverter uma equação termoquímica, o valor de ΔH:',
            alternativas: [
              'Permanece o mesmo',
              'Dobra de valor',
              'É dividido por dois',
              'Troca de sinal (positivo vira negativo e vice-versa)',
              'Se torna zero',
            ],
            respostaCorreta: 3,
            explicacao: 'Ao inverter uma reação, os reagentes passam a ser produtos e vice-versa. Como a variação de entalpia é uma função de estado, o ΔH da reação inversa tem o mesmo valor absoluto, mas sinal contrário.',
            dificuldade: 'medio',
          },
          {
            id: 'qui-fiq-5',
            enunciado: 'Na reação em equilíbrio N₂(g) + 3H₂(g) ⇌ 2NH₃(g), com ΔH < 0, um aumento de temperatura desloca o equilíbrio para:',
            alternativas: [
              'A direita, favorecendo a formação de NH₃',
              'A esquerda, favorecendo a decomposição de NH₃',
              'Não altera o equilíbrio',
              'Depende exclusivamente da pressão do sistema',
              'Depende da presença de catalisador',
            ],
            respostaCorreta: 1,
            explicacao: 'Como a reação direta é exotérmica (ΔH < 0), o aumento de temperatura desloca o equilíbrio no sentido endotérmico (inverso), favorecendo a decomposição do NH₃ em N₂ e H₂ (para a esquerda).',
            dificuldade: 'dificil',
          },
        ],
      },
    },
  ],
};
