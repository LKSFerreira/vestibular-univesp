import type { Disciplina } from './tipos';

export const disciplinaPortugues: Disciplina = {
  id: 'portugues',
  titulo: 'Português',
  icone: '📝',
  topicos: [
    {
      id: 'interpretacao-textos',
      titulo: 'Interpretação de Textos',
      peso: 40,
      conteudo: {
        resumo: 'Gêneros textuais diversos: crônica, editorial, artigo de opinião, poema e charge.',
        explicacao:
          'A interpretação de textos é a habilidade de maior peso no vestibular. O candidato precisa identificar a tese central, distinguir fato de opinião, reconhecer inferências e compreender a intencionalidade do autor.\n\nDica prática: leia o texto duas vezes antes de responder. Na primeira leitura, busque o tema geral. Na segunda, sublinhe trechos que sustentam a argumentação.',
        secoes: [
          {
            titulo: 'Fundamentos da Interpretação Textual',
            corpo: `A interpretação de textos é a competência de **compreender o sentido global** de um texto, identificar suas partes constitutivas, reconhecer a intenção comunicativa do autor e construir inferências a partir das informações apresentadas. No vestibular UNIVESP, essa habilidade representa **40% da prova de Português**, o que a torna a competência mais decisiva da disciplina.

## Por que Interpretação é tão cobrada?

Diferente de questões que testam memorização, a interpretação exige **raciocínio ativo**. O candidato precisa mobilizar simultaneamente:

- **Conhecimento linguístico**: vocabulário, conectivos, referências pronominais
- **Conhecimento textual**: como diferentes gêneros se organizam
- **Conhecimento de mundo**: repertório cultural que permite preencher lacunas do texto

Todo texto é uma comunicação entre autor e leitor. O autor faz escolhas — de palavras, de estrutura, de tom — para transmitir uma mensagem. O trabalho do leitor-intérprete é **reconstruir essas escolhas** e compreender por que foram feitas.

## Os três níveis de leitura

### 1. Leitura superficial (o quê?)
Identifica o **tema** e as **informações explícitas**. Responde à pergunta: "Sobre o que o texto fala?"

### 2. Leitura analítica (como?)
Examina a **estrutura** do texto: como os parágrafos se conectam, quais recursos linguísticos o autor usa, como a argumentação é construída.

### 3. Leitura crítica (por quê?)
Avalia a **intencionalidade** do autor, identifica pressupostos, reconhece vieses e posiciona o texto em seu contexto social e histórico.

> 💡 As questões de vestibular geralmente exigem os níveis 2 e 3 — não basta entender "sobre o que" o texto fala; é preciso entender "como" e "por que" ele diz o que diz.`,
            tipo: 'texto',
          },
          {
            titulo: 'Compreensão Literal e Compreensão Inferencial',
            corpo: `Essa distinção é **fundamental** para acertar questões de interpretação. A banca sempre sinaliza no enunciado qual tipo de compreensão está pedindo.

## Compreensão Literal

É a leitura do que está **explicitamente escrito** no texto. A informação pode ser localizada e apontada com o dedo. Questões de compreensão literal usam expressões como:

- "Segundo o autor..."
- "De acordo com o texto..."
- "O texto afirma que..."
- "Conforme o trecho..."

**Exemplo prático:**

Texto: *"O Brasil é o quinto maior país do mundo em extensão territorial, com 8,5 milhões de km²."*

Pergunta: "Segundo o texto, qual é a extensão territorial do Brasil?"
Resposta: 8,5 milhões de km² — a informação está **explícita**.

## Compreensão Inferencial

É a leitura do que está **implícito** — aquilo que o autor sugere, pressupõe ou deixa subentendido. Exige que o leitor "leia nas entrelinhas", combinando informações do texto com seu conhecimento de mundo.

Questões inferenciais usam expressões como:

- "Depreende-se do texto que..."
- "Infere-se que..."
- "É possível concluir que..."
- "O texto permite afirmar que..."
- "O autor sugere que..."

**Exemplo prático:**

Texto: *"Depois de vinte anos dedicados à empresa, João recebeu um aperto de mão e um envelope pardo."*

Pergunta: "Infere-se do trecho que João foi..."
Resposta: Demitido — a informação está **implícita**. O "envelope pardo" sugere documentos de rescisão; o "aperto de mão" indica despedida formal. Nada disso está dito, mas o conjunto de pistas permite a inferência.

## Cuidados com inferências

> ⚠️ Inferência não é invenção. Toda inferência válida precisa ter **base no texto**. Se a alternativa vai além do que o texto permite concluir, ela está errada — mesmo que pareça "lógica" no mundo real.

| Tipo | Sinal no enunciado | O que fazer |
|------|-------------------|-------------|
| Literal | "Segundo o texto", "O autor afirma" | Localizar a informação explícita |
| Inferencial | "Infere-se", "Depreende-se" | Combinar pistas do texto + conhecimento |
| Extrapolação | — | **Evitar!** Ir além do texto é erro |`,
            tipo: 'texto',
          },
          {
            titulo: 'Gêneros Textuais no Vestibular',
            corpo: `Cada gênero textual possui **convenções próprias** que orientam a leitura. Reconhecer o gênero é o primeiro passo para interpretar corretamente.

## Quadro dos gêneros mais cobrados

| Gênero | Função principal | Características | O que observar na prova |
|--------|-----------------|-----------------|------------------------|
| **Crônica** | Refletir sobre o cotidiano | Linguagem leve, narrativa curta, tom pessoal | Tom do autor (humor, ironia, crítica, lirismo) |
| **Editorial** | Expressar opinião do veículo | Sem assinatura, posição institucional, argumentação | Tese do jornal/revista, argumentos de sustentação |
| **Artigo de opinião** | Expressar opinião do autor | Assinado, 1ª pessoa, argumentação explícita | Distinguir fato de opinião, identificar tese |
| **Notícia** | Informar fato recente | Linguagem objetiva, 3ª pessoa, lide (quem, o quê, quando, onde) | Objetividade aparente, seleção de informações |
| **Poema** | Expressão estética/subjetiva | Versos, estrofes, ritmo, figuras de linguagem | Eu lírico ≠ autor, linguagem figurada |
| **Charge/tirinha** | Criticar com humor | Linguagem verbal + visual, ironia | Contraste entre texto e imagem, contexto social |

## Crônica: o gênero mais frequente

A crônica merece atenção especial porque é o gênero **mais presente** em vestibulares. Ela parte de um fato cotidiano para construir uma reflexão. Existem tipos diferentes:

- **Crônica narrativa**: conta uma pequena história com personagens
- **Crônica reflexiva**: parte de um fato para uma reflexão mais ampla
- **Crônica humorística**: usa humor para criticar comportamentos ou situações
- **Crônica lírica**: tom poético, contemplativo

### Como analisar uma crônica na prova

1. Identifique o **fato/situação** que serve de ponto de partida
2. Observe o **tom** do autor (irônico? reflexivo? bem-humorado?)
3. Encontre a **reflexão** que o autor constrói a partir do fato
4. Preste atenção ao **último parágrafo** — geralmente contém a "mensagem" central

## Charge e tirinha: a armadilha visual

Na charge, o sentido nasce do **contraste entre texto e imagem**. Estratégia de leitura:

1. Descreva mentalmente a **cena** (quem são os personagens, o que fazem)
2. Leia o **texto verbal** (falas, legendas, títulos)
3. Identifique a **contradição** ou o **exagero** entre o que se vê e o que se lê
4. Conecte com o **contexto** social ou político referido

> 💡 Em charges, o humor quase sempre nasce de uma **ironia** — algo é apresentado de forma oposta ao que realmente é.`,
            tipo: 'tabela',
          },
          {
            titulo: 'Estratégias de Leitura para a Prova',
            corpo: `Ler um texto de prova é diferente de ler por lazer. Você tem **tempo limitado** e precisa extrair informações com eficiência. Estas estratégias, usadas por leitores experientes, podem ser treinadas.

## Estratégia 1: Leia o enunciado ANTES do texto

Essa é a técnica mais importante. O enunciado da questão funciona como um **filtro de leitura** — ele direciona sua atenção para o aspecto relevante do texto.

**Exemplo:** Se o enunciado pergunta "Qual é a tese do autor?", você já sabe que deve procurar uma afirmação central e os argumentos que a sustentam. Não precisa se preocupar com detalhes secundários.

## Estratégia 2: Skimming — leitura panorâmica

Na primeira leitura, passe os olhos pelo texto buscando:

- O **tema geral** (sobre o que fala?)
- A **estrutura** (quantos parágrafos? há divisões claras?)
- O **tom** (formal? informal? irônico? objetivo?)

Não se preocupe em entender tudo na primeira leitura. O objetivo é ter um **mapa mental** do texto.

## Estratégia 3: Scanning — busca direcionada

Na segunda leitura, procure informações específicas relacionadas à pergunta:

- **Sublinhe** a tese central (geralmente no 1º ou último parágrafo de textos argumentativos)
- **Circule** conectivos que sinalizam relações lógicas (mas, porém, porque, portanto, embora)
- **Marque** trechos que respondem diretamente à questão

## Estratégia 4: Parafraseie mentalmente

Depois de ler cada parágrafo, reformule mentalmente seu conteúdo em palavras simples. Se você não consegue parafrasear, não entendeu — releia.

**Texto original:** *"A despeito dos avanços tecnológicos que permeiam o cotidiano contemporâneo, parcela significativa da população permanece alijada dos benefícios da conectividade digital."*

**Paráfrase mental:** "Apesar da tecnologia, muita gente ainda não tem acesso à internet."

## Estratégia 5: Elimine alternativas por exclusão

Quando estiver em dúvida entre duas alternativas:

1. Releia o trecho relevante do texto
2. Verifique se a alternativa **extrapola** o texto (diz mais do que ele diz)
3. Verifique se a alternativa **restringe** o texto (diz menos do que ele diz)
4. Verifique se a alternativa **contradiz** o texto

> ⚠️ Alternativas que usam palavras como "sempre", "nunca", "todo", "nenhum" costumam estar erradas — textos raramente fazem afirmações absolutas.`,
            tipo: 'texto',
          },
          {
            titulo: 'Identificando Tese e Argumentos',
            corpo: `Em textos argumentativos (editoriais, artigos de opinião, redações), a estrutura básica é: **tese + argumentos + conclusão**. Saber identificar cada parte é essencial.

## O que é a tese?

A tese é a **afirmação central** que o autor defende. É a resposta à pergunta: "Qual é a posição do autor sobre o tema?"

### Onde encontrar a tese?

- **No primeiro parágrafo**: em textos mais diretos, o autor apresenta sua posição logo no início
- **No último parágrafo**: em textos que constroem o argumento progressivamente
- **Após um "mas" ou "porém"**: frequentemente, o autor apresenta o senso comum e depois o contradiz — a tese vem depois da oposição

**Exemplo:**

*"Muitos acreditam que a tecnologia isolou as pessoas. **No entanto**, as redes sociais criaram novas formas de conexão que antes eram impossíveis."*

A tese é: "as redes sociais criaram novas formas de conexão" — vem depois do "no entanto", que marca a oposição ao senso comum.

## Tipos de argumento

| Tipo de argumento | Como funciona | Exemplo |
|-------------------|--------------|---------|
| **Argumento de autoridade** | Cita especialista ou instituição | "Segundo a OMS, a saúde mental..." |
| **Argumento por exemplificação** | Usa caso concreto | "Na Finlândia, por exemplo, a reforma educacional..." |
| **Argumento por dados** | Apresenta estatísticas | "Pesquisas indicam que 73% dos jovens..." |
| **Argumento por causa/consequência** | Mostra relação causal | "O desmatamento provoca desequilíbrio climático porque..." |
| **Argumento por comparação** | Contrasta situações | "Enquanto o Brasil investe 6%, a Coreia investe 15%..." |

## Como a banca pergunta sobre argumentação

- "A estratégia argumentativa do autor é..." → identifique o tipo de argumento
- "O autor sustenta sua tese por meio de..." → busque os recursos usados
- "O posicionamento do autor pode ser classificado como..." → avalie se é favorável, contrário ou com ressalvas

> 💡 Quando o autor usa "é inegável que... no entanto..." ou "embora... é preciso reconhecer que...", o posicionamento é **favorável com ressalvas** — reconhece um lado, mas defende outro.`,
            tipo: 'texto',
          },
          {
            titulo: 'Distinguindo Fato de Opinião',
            corpo: `Essa distinção é uma das mais cobradas em vestibulares. A confusão entre fato e opinião é exatamente o que a banca quer testar.

## Definições

**Fato** é uma informação **verificável** e **objetiva**. Pode ser comprovada ou refutada com evidências.

**Opinião** é um **juízo de valor** — expressa o que alguém pensa, sente ou acredita. Não pode ser comprovada, apenas aceita ou rejeitada.

## Como distinguir na prática

| Característica | Fato | Opinião |
|---------------|------|---------|
| Verificabilidade | Pode ser comprovado | Não pode ser comprovado |
| Linguagem | Objetiva, precisa | Subjetiva, avaliativa |
| Marcas textuais | Dados, datas, nomes | "Acredito que", "na minha visão", adjetivos valorativos |
| Exemplo | "O Brasil tem 213 milhões de habitantes" | "O Brasil é o melhor país do mundo" |

## Marcas linguísticas de opinião

Fique atento a palavras e expressões que sinalizam opinião:

- **Adjetivos valorativos**: excelente, péssimo, absurdo, maravilhoso, inaceitável
- **Advérbios de modo**: infelizmente, lamentavelmente, felizmente
- **Verbos de opinião**: acredito, penso, considero, julgo
- **Expressões modalizadoras**: é provável que, é necessário que, é fundamental que

## Exemplos analisados

1. *"A taxa de desemprego no Brasil caiu para 7,9% no terceiro trimestre."*
→ **Fato**: dado estatístico verificável.

2. *"A queda do desemprego é uma excelente notícia para a economia."*
→ **Opinião**: "excelente" é um juízo de valor.

3. *"Segundo o IBGE, a expectativa de vida no Brasil é de 76,8 anos."*
→ **Fato**: dado atribuído a fonte oficial.

4. *"É lamentável que o país ainda invista tão pouco em educação."*
→ **Opinião**: "lamentável" e "tão pouco" expressam avaliação subjetiva.

> ⚠️ Cuidado: um fato pode ser usado dentro de um argumento opinativo. "O Brasil investe 6% do PIB em educação" é fato; "6% é insuficiente" é opinião. A banca pode perguntar qual parte é fato e qual é opinião dentro do mesmo trecho.`,
            tipo: 'exemplo',
          },
          {
            titulo: 'Exemplo Prático: Análise Completa de Texto',
            corpo: `Vamos aplicar todas as estratégias em um texto completo, como você faria na prova.

## Texto para análise

*"A disseminação das redes sociais transformou profundamente a forma como nos relacionamos. Se, por um lado, plataformas como Instagram e Twitter aproximam pessoas separadas por oceanos, por outro, há evidências crescentes de que o uso excessivo dessas ferramentas está associado ao aumento de ansiedade e depressão entre jovens. Pesquisa da Universidade de Pittsburgh revelou que jovens que passam mais de duas horas por dia em redes sociais têm o dobro de chances de se sentirem socialmente isolados. O paradoxo é evidente: a ferramenta criada para conectar pode estar, na verdade, desconectando."*

## Análise passo a passo

### 1. Tema
Impacto das redes sociais nos relacionamentos e na saúde mental.

### 2. Tese
As redes sociais, criadas para conectar, podem estar causando isolamento e problemas de saúde mental. (Observe: a tese vem ao final, no "paradoxo".)

### 3. Estrutura argumentativa
- **Concessão**: "Se, por um lado... aproximam pessoas" — o autor reconhece o lado positivo
- **Oposição**: "por outro, há evidências..." — introduz o lado negativo
- **Argumento por dados**: "Pesquisa da Universidade de Pittsburgh revelou que..." — sustenta com evidência
- **Conclusão paradoxal**: "a ferramenta criada para conectar pode estar desconectando"

### 4. Fato vs. opinião no texto
- **Fato**: "Pesquisa da Universidade de Pittsburgh revelou que jovens que passam mais de duas horas por dia em redes sociais têm o dobro de chances de se sentirem socialmente isolados."
- **Opinião**: "A disseminação das redes sociais transformou **profundamente** a forma como nos relacionamos." (o advérbio "profundamente" embute uma avaliação)

### 5. Possíveis perguntas da banca

- "O posicionamento do autor é..." → **Crítico com ressalvas** (reconhece benefícios, mas destaca riscos)
- "A estratégia argumentativa central é..." → **Argumento por dados/evidência científica**
- "O termo 'paradoxo' no último período refere-se a..." → **A contradição entre o propósito (conectar) e o efeito (isolar)**

> 💡 Este tipo de análise deve ser feito mentalmente durante a prova. Com prática, levará apenas alguns segundos.`,
            tipo: 'exemplo',
          },
          {
            titulo: 'O Papel dos Conectivos na Interpretação',
            corpo: `Os conectivos (conjunções, preposições, advérbios de ligação) são **sinalizadores de sentido**. Eles indicam a relação lógica entre as ideias e são decisivos para a interpretação correta.

## Conectivos que mudam tudo

Uma única conjunção pode inverter completamente o sentido de um enunciado. Compare:

- "Ele estudou muito, **portanto** foi aprovado." → causa/consequência positiva
- "Ele estudou muito, **mas** não foi aprovado." → oposição/frustração
- "Ele estudou muito **porque** queria ser aprovado." → motivação/causa
- "**Embora** tenha estudado muito, não foi aprovado." → concessão (o estudo não bastou)

## Mapa dos conectivos por relação de sentido

### Adição (soma de ideias)
e, nem, não só... mas também, além disso, ademais

### Oposição/Adversidade (ideias contrárias)
mas, porém, contudo, todavia, entretanto, no entanto, em contrapartida

### Concessão (obstáculo que não impede)
embora, ainda que, mesmo que, apesar de, conquanto, não obstante

### Causa (motivo)
porque, pois, visto que, já que, uma vez que, dado que

### Consequência (resultado)
de modo que, de forma que, tanto que, tão... que

### Conclusão (dedução lógica)
logo, portanto, por conseguinte, assim, dessa forma, por isso

### Condição (hipótese)
se, caso, desde que, contanto que, a menos que

### Finalidade (objetivo)
para que, a fim de que, com o propósito de

## Adversativa × Concessiva: a diferença crucial

Muitos candidatos confundem adversativas com concessivas. A diferença é estrutural:

- **Adversativa** (coordenada): "Estudou, **mas** não passou." → duas orações independentes ligadas por oposição
- **Concessiva** (subordinada): "**Embora** tenha estudado, não passou." → a primeira oração depende da segunda

Na prática, expressam ideias semelhantes, mas a classificação gramatical é diferente — e a banca cobra exatamente isso.

> ⚠️ "Embora" **nunca** introduz oração coordenada adversativa. Se aparecer "embora", a classificação é **subordinada adverbial concessiva** — sempre.

## Como a banca cobra conectivos

A questão típica apresenta um trecho e pergunta: "A expressão X estabelece, entre as orações, uma relação de..."

**Método de resolução:**
1. Identifique o conectivo destacado
2. Classifique-o (veja o mapa acima)
3. Confirme substituindo por outro do mesmo grupo
4. Se a substituição mantém o sentido, a classificação está correta`,
            tipo: 'importante',
          },
        ],
        imagemDescricao: 'Diagrama mostrando a estrutura de um texto argumentativo com tese, argumentos e conclusão',
        formulasChave: [
          'Skimming: leitura rápida para captar o tema geral',
          'Scanning: busca de informações específicas no texto',
          'Inferência: deduzir informações implícitas a partir de pistas textuais',
          'Tese → Argumento → Conclusão: estrutura do texto argumentativo',
          'Fato ≠ Opinião: fato é verificável; opinião expressa juízo de valor',
        ],
        dicasProva: [
          'Leia sempre o enunciado da questão ANTES de ler o texto — isso direciona sua leitura.',
          'Sublinhe a tese central (geralmente no 1º ou último parágrafo).',
          'Cuidado com alternativas que "parecem certas" mas extrapolam o texto.',
          'Quando a questão pedir "de acordo com o texto", a resposta está explícita.',
          'Quando pedir "infere-se" ou "depreende-se", a resposta está implícita.',
        ],
        errosComuns: [
          'Escolher a alternativa baseando-se em opinião pessoal em vez do texto.',
          'Confundir o que o autor diz com o que um personagem ou fonte citada diz.',
          'Ignorar conectivos que mudam o sentido (porém, embora, contudo).',
          'Não perceber ironia ou tom crítico do autor.',
          'Generalizar informações que o texto apresenta de forma restrita.',
        ],
        exercicios: [
          {
            id: 'port-interp-1',
            enunciado: 'Leia o trecho: "Embora o Brasil seja um dos maiores produtores de alimentos do mundo, milhões de brasileiros ainda passam fome." A conjunção "embora" estabelece entre as orações uma relação de:',
            alternativas: [
              'Causa',
              'Consequência',
              'Concessão',
              'Conclusão',
              'Adição',
            ],
            respostaCorreta: 2,
            explicacao: '"Embora" é uma conjunção concessiva — indica que o fato da oração principal ocorre apesar do que foi dito na oração subordinada. O Brasil produz muito, mas mesmo assim há fome: a segunda informação contraria a expectativa gerada pela primeira.',
            dificuldade: 'facil',
          },
          {
            id: 'port-interp-2',
            enunciado: 'Considere: "Segundo especialistas, o desmatamento na Amazônia cresceu 22% no último ano." O uso de "segundo especialistas" indica que o autor:',
            alternativas: [
              'Concorda integralmente com o dado apresentado.',
              'Atribui a informação a uma fonte externa.',
              'Discorda da posição dos especialistas.',
              'Apresenta uma opinião pessoal sobre o tema.',
              'Ironiza a posição dos especialistas.',
            ],
            respostaCorreta: 1,
            explicacao: 'A expressão "segundo especialistas" é um recurso de citação indireta. O autor atribui a informação a terceiros, sem necessariamente concordar ou discordar. É um recurso de credibilidade argumentativa.',
            dificuldade: 'facil',
          },
          {
            id: 'port-interp-3',
            enunciado: 'Em uma charge, um político aparece sorridente diante de uma multidão faminta, segurando um cartaz que diz "Missão cumprida". O efeito de sentido da charge é produzido principalmente por:',
            alternativas: [
              'Uma comparação direta entre duas situações.',
              'Uma relação de causa e consequência.',
              'Uma ironia entre a fala e a imagem.',
              'Uma metáfora sobre o poder político.',
              'Um eufemismo para suavizar a crítica.',
            ],
            respostaCorreta: 2,
            explicacao: 'A charge utiliza ironia: o contraste entre a fala otimista do político ("Missão cumprida") e a realidade trágica da multidão faminta gera o efeito crítico. A contradição entre texto e imagem é o mecanismo central.',
            dificuldade: 'medio',
          },
          {
            id: 'port-interp-4',
            enunciado: 'Leia: "A educação não transforma o mundo. Educação muda pessoas. Pessoas transformam o mundo." (Paulo Freire). Nesse trecho, a estratégia argumentativa central é:',
            alternativas: [
              'Apresentar dados estatísticos sobre educação.',
              'Utilizar argumento de autoridade.',
              'Construir um raciocínio em cadeia (encadeamento lógico).',
              'Recorrer a exemplos históricos.',
              'Fazer uma concessão ao argumento oposto.',
            ],
            respostaCorreta: 2,
            explicacao: 'Freire constrói um raciocínio em cadeia: educação → muda pessoas → pessoas transformam o mundo. Cada proposição serve de premissa para a seguinte, criando um encadeamento lógico progressivo.',
            dificuldade: 'medio',
          },
          {
            id: 'port-interp-5',
            enunciado: 'Um editorial afirma: "É inegável que a reforma tributária trará benefícios a longo prazo; no entanto, seus efeitos imediatos sobre as classes mais baixas exigem atenção." O posicionamento do autor pode ser classificado como:',
            alternativas: [
              'Totalmente favorável à reforma.',
              'Totalmente contrário à reforma.',
              'Favorável, porém com ressalvas.',
              'Neutro e imparcial.',
              'Irônico e sarcástico.',
            ],
            respostaCorreta: 2,
            explicacao: 'O autor reconhece benefícios ("é inegável que trará benefícios"), mas usa "no entanto" para introduzir uma ressalva sobre os efeitos nas classes baixas. Trata-se de um posicionamento favorável com ponderações — típico de editoriais equilibrados.',
            dificuldade: 'dificil',
          },
        ],
      },
    },
    {
      id: 'gramatica-contextualizada',
      titulo: 'Gramática Contextualizada',
      peso: 30,
      conteudo: {
        resumo: 'Coesão textual, conjunções coordenativas e subordinativas, pronomes relativos e regência verbal/nominal.',
        explicacao:
          'A gramática no vestibular UNIVESP é cobrada dentro do texto — não isoladamente. O foco está em entender como os elementos gramaticais constroem sentido e coesão.\n\n**Conjunções Coordenativas:**\n• Aditivas (e, nem, também): somam ideias\n• Adversativas (mas, porém, contudo, todavia, entretanto, no entanto): opõem ideias\n• Alternativas (ou, ora...ora, quer...quer): alternam ideias\n• Conclusivas (logo, portanto, por isso, assim): concluem\n• Explicativas (pois, porque, que): justificam\n\n**Conjunções Subordinativas:**\n• Causais (porque, visto que, já que): indicam causa\n• Concessivas (embora, ainda que, mesmo que): indicam concessão\n• Condicionais (se, caso, desde que): indicam condição\n• Temporais (quando, enquanto, assim que): indicam tempo\n\n**Pronomes Relativos:**\n• Que: substitui pessoas ou coisas\n• O qual/a qual: mais formal, evita ambiguidade\n• Cujo/cuja: indica posse (sempre entre dois substantivos)\n• Onde: refere-se apenas a lugar\n\n**Regência Verbal (mais cobradas):**\n• Assistir (= ver): assistir AO filme (VTI)\n• Visar (= almejar): visar AO cargo (VTI)\n• Obedecer: obedecer AO regulamento (VTI)\n• Preferir: preferir A a B (sem "do que")',
        secoes: [
          {
            titulo: 'O que é Gramática Contextualizada?',
            corpo: `No vestibular UNIVESP, a gramática **nunca** é cobrada de forma isolada. Você não verá questões como "Classifique a oração subordinada" sem um texto de apoio. O que a banca faz é inserir a análise gramatical **dentro da interpretação textual** — daí o nome "gramática contextualizada".

## Por que isso importa?

Porque o foco não é decorar classificações, mas entender **como os recursos gramaticais constroem sentido**. Quando o autor usa "embora" em vez de "porque", ele muda completamente a relação entre as ideias. A gramática é ferramenta de interpretação.

## O que mais cai na prova

Com base em vestibulares anteriores, os temas gramaticais mais recorrentes são:

1. **Conjunções e relações de sentido** — a banca adora pedir para identificar a relação lógica entre orações
2. **Pronomes relativos e referenciação** — a quem ou a quê o pronome se refere?
3. **Coesão textual** — como as partes do texto se conectam
4. **Regência verbal** — qual preposição o verbo exige

> 💡 A abordagem mais eficiente é estudar gramática **a partir de textos reais**, não de regras abstratas. Este é o método que adotamos aqui.`,
            tipo: 'texto',
          },
          {
            titulo: 'Conjunções Coordenativas: Detalhamento',
            corpo: `As conjunções coordenativas ligam **orações independentes** (coordenadas). Cada tipo estabelece uma relação de sentido diferente.

## Aditivas — somam ideias

**Conjunções:** e, nem, não só... mas também, não apenas... como também, bem como

- "O aluno **não só** estudou gramática, **mas também** praticou redação."
- "Ele **nem** estuda **nem** trabalha."

> ⚠️ "Nem" equivale a "e não". "Nem" sozinho já contém a negação — não escreva "não... nem... nem".

## Adversativas — opõem ideias

**Conjunções:** mas, porém, contudo, todavia, entretanto, no entanto, não obstante

Esta é a categoria **mais cobrada** em vestibulares. A adversativa indica que a segunda ideia contraria a expectativa gerada pela primeira.

- "A economia cresceu, **mas** o desemprego aumentou."
- "O projeto era ambicioso; **no entanto**, faltavam recursos."

### Mecanismo da adversativa

A adversativa cria uma **quebra de expectativa**. O leitor espera uma consequência lógica da primeira oração, mas a segunda vai em direção oposta:

- Premissa: "A economia cresceu" → expectativa: emprego melhore
- Adversativa: "mas o desemprego aumentou" → frustração da expectativa

## Alternativas — apresentam opções

**Conjunções:** ou, ou... ou, ora... ora, quer... quer, seja... seja

- "**Ou** você estuda agora, **ou** não passará no vestibular."
- "**Ora** ria, **ora** chorava — não se decidia."

## Conclusivas — indicam dedução

**Conjunções:** logo, portanto, por isso, por conseguinte, assim, dessa forma, de modo que

A conclusiva apresenta uma **consequência lógica** do que foi dito antes:

- "Estudou com dedicação; **portanto**, foi aprovado."
- "Os dados são alarmantes. **Logo**, medidas urgentes são necessárias."

## Explicativas — justificam

**Conjunções:** pois (antes do verbo), porque, que, porquanto

A explicativa apresenta a **razão** que justifica a afirmação anterior:

- "Vamos embora, **pois** já é tarde."
- "Fique quieto, **que** o bebê está dormindo."

### Explicativa × Causal: a armadilha

A diferença é sutil mas cobrada:

| Explicativa (coordenada) | Causal (subordinada) |
|--------------------------|---------------------|
| Justifica o **ato de falar** | Indica a **causa do fato** |
| "Choveu, **pois** as ruas estão molhadas." | "As ruas estão molhadas **porque** choveu." |
| A segunda oração explica como se sabe | A segunda oração indica a causa real |

> 💡 Teste prático: se você pode inverter a ordem das orações e usar "porque", é causal. Se a segunda oração justifica *por que você está dizendo* a primeira, é explicativa.`,
            tipo: 'texto',
          },
          {
            titulo: 'Conjunções Subordinativas: Detalhamento',
            corpo: `As conjunções subordinativas ligam uma **oração dependente** (subordinada) a uma **oração principal**. O tipo da conjunção determina a classificação da oração subordinada adverbial.

## Causais — indicam o motivo

**Conjunções:** porque, visto que, já que, uma vez que, dado que, como (no início da frase)

- "Faltou à aula **porque** estava doente."
- "**Como** chovia muito, o jogo foi adiado." (Observe: "como" causal sempre inicia a frase)

## Concessivas — obstáculo que não impede

**Conjunções:** embora, ainda que, mesmo que, conquanto, posto que, se bem que, apesar de que, não obstante

A concessiva é a conjunção **mais importante** para o vestibular. Ela indica que algo acontece **apesar de** um obstáculo:

- "**Embora** estivesse cansado, continuou estudando."
- "**Ainda que** chova, iremos ao evento."
- "**Mesmo que** você não concorde, precisa respeitar."

### Como a concessiva funciona

A concessiva apresenta um fato que **deveria impedir** o que está na oração principal, mas **não impede**:

- Fato concessivo: "estava cansado" → expectativa: parar de estudar
- Oração principal: "continuou estudando" → o obstáculo não impediu

> ⚠️ **Concessiva ≠ Adversativa.** Ambas expressam oposição, mas:
> - Concessiva = oração **subordinada** (com embora, ainda que...)
> - Adversativa = oração **coordenada** (com mas, porém, contudo...)
> A banca **adora** cobrar essa diferença.

## Condicionais — estabelecem hipótese

**Conjunções:** se, caso, desde que, contanto que, a menos que, a não ser que, salvo se

- "**Se** estudar com método, será aprovado."
- "Iremos à praia **desde que** não chova."
- "Não sairá **a menos que** termine o trabalho."

## Temporais — situam no tempo

**Conjunções:** quando, enquanto, assim que, logo que, antes que, depois que, desde que, sempre que

- "**Quando** chegou, todos já tinham saído."
- "Tome nota **enquanto** o professor explica."
- "**Assim que** soube da notícia, ligou para a mãe."

## Consecutivas — indicam resultado/consequência

**Conjunções:** (tão/tanto/tal/tamanho)... que, de modo que, de forma que, de sorte que

- "Estava **tão** cansado **que** dormiu na aula."
- "Choveu **tanto que** as ruas alagaram."

## Comparativas — estabelecem paralelo

**Conjunções:** como, assim como, tal qual, tanto quanto, mais... (do) que, menos... (do) que

- "Ele estuda **como** um profissional."
- "A situação é **mais** grave **do que** parece."

## Proporcionais — indicam simultaneidade proporcional

**Conjunções:** à medida que, à proporção que, quanto mais... mais, quanto menos... menos

- "**À medida que** estudava, sentia-se mais confiante."
- "**Quanto mais** leio, **mais** aprendo."

## Conformativas — indicam conformidade

**Conjunções:** conforme, segundo, como, consoante, de acordo com

- "**Conforme** previsto, a inflação subiu."
- "**Segundo** o regulamento, é proibido fumar."

## Finais — indicam objetivo

**Conjunções:** para que, a fim de que, de modo que (com ideia de finalidade)

- "Estudo diariamente **para que** possa ser aprovado."
- "Falou alto **a fim de que** todos ouvissem."`,
            tipo: 'texto',
          },
          {
            titulo: 'Pronomes na Construção do Texto',
            corpo: `Os pronomes são essenciais para a **coesão textual** — eles evitam repetições e criam referências dentro do texto. No vestibular, a banca testa se o candidato sabe a quem ou a quê cada pronome se refere.

## Pronomes Relativos

Os pronomes relativos ligam duas orações, substituindo um termo já mencionado (o **antecedente**).

### "Que" — o coringa

Substitui pessoas ou coisas, no singular ou plural:
- "O livro **que** comprei é ótimo." (que = o livro)
- "A aluna **que** foi aprovada é minha amiga." (que = a aluna)

### "O qual / A qual / Os quais / As quais" — formalidade e clareza

Usado em contextos formais ou quando "que" causaria ambiguidade:
- "A filha do professor, **a qual** foi aprovada..." (sem ambiguidade: a filha)
- "A filha do professor **que** foi aprovada..." (quem foi aprovado: filha ou professor?)

### "Cujo / Cuja" — indica posse

**Regras fundamentais do "cujo":**
1. Sempre aparece entre dois substantivos: "O autor **cujo** livro..."
2. Concorda com o substantivo **seguinte**, não com o antecedente
3. **Nunca** vem seguido de artigo: "cujo o" NÃO existe

- "A casa **cujo** telhado desabou..." (o telhado DA casa)
- "O escritor **cuja** obra foi premiada..." (a obra DO escritor)

> ⚠️ Para verificar se "cujo" está correto, substitua por "de quem" ou "do qual": "O autor cujo livro..." = "O autor do qual o livro..."

### "Onde" — apenas lugar físico

- ✅ "A cidade **onde** nasci é pequena."
- ❌ "O momento **onde** tudo mudou..." → correto: "**em que** tudo mudou"

**Regra:** "onde" = lugar físico. Para situações, momentos, contextos → use "**em que**", "**no qual**".

## Pronomes Oblíquos

Os pronomes oblíquos átonos (me, te, se, o, a, lhe, nos, vos) substituem complementos verbais:

| Pronome | Função | Exemplo |
|---------|--------|---------|
| **o, a, os, as** | Objeto direto | "Comprei **o livro**" → "Comprei-**o**" |
| **lhe, lhes** | Objeto indireto | "Dei o livro **ao aluno**" → "Dei-**lhe** o livro" |
| **me, te, se, nos** | Direto ou indireto | Depende do verbo |

### Colocação pronominal (próclise, ênclise, mesóclise)

No vestibular, a regra mais cobrada é: **palavras atrativas** puxam o pronome para antes do verbo (próclise):

- Palavras negativas: "**Não** me disseram nada."
- Advérbios: "**Sempre** se dedicou aos estudos."
- Conjunções subordinativas: "**Quando** me viram, sorriram."
- Pronomes relativos: "O livro **que** me emprestou..."
- Pronomes indefinidos: "**Alguém** me chamou."

> 💡 Na dúvida, lembre: se há uma palavra atrativa antes do verbo, o pronome vem **antes** (próclise). Se não há, vem **depois** (ênclise).

## Pronomes Demonstrativos e Referência Textual

Os demonstrativos organizam referências no texto:

- **Este/esta/isto**: refere-se ao que **vai ser dito** (catáfora) ou ao que está **mais próximo**
- **Esse/essa/isso**: refere-se ao que **já foi dito** (anáfora) ou ao que está **mais distante**

**Exemplo textual:**
*"A educação transforma vidas. **Isso** é consenso entre especialistas."*
→ "Isso" retoma a ideia anterior (anáfora).

*"A proposta é **esta**: investir mais em capacitação."*
→ "Esta" antecipa o que vem depois (catáfora).`,
            tipo: 'texto',
          },
          {
            titulo: 'Coesão Textual',
            corpo: `Coesão é o conjunto de mecanismos linguísticos que **conectam** as partes de um texto, garantindo que ele seja um todo articulado e não uma sequência de frases soltas. A banca testa coesão de duas formas: pedindo para identificar o mecanismo usado ou pedindo para preencher lacunas com conectivos adequados.

## Coesão Referencial

É o uso de termos que **retomam** ou **antecipam** outros elementos do texto, evitando repetição.

### Mecanismos de retomada (anáfora)

1. **Pronomes**: "O professor explicou a matéria. **Ele** foi muito didático."
2. **Sinônimos**: "O veículo colidiu com o poste. O **automóvel** ficou destruído."
3. **Hiperônimos**: "Comprei rosas e lírios. As **flores** perfumaram a casa." (flores = hiperônimo de rosas e lírios)
4. **Expressões resumitivas**: "Houve enchentes, deslizamentos e quedas de energia. **Esses eventos** paralisaram a cidade."
5. **Elipse (omissão)**: "Maria estuda de manhã; ø trabalha à tarde." (o sujeito "Maria" está implícito)

### Mecanismo de antecipação (catáfora)

"A proposta é **esta**: todos contribuirão igualmente." → "esta" antecipa o que vem depois.

## Coesão Sequencial

É o uso de conectivos que estabelecem **relações lógicas** entre as partes do texto, garantindo progressão.

### Tipos de relação sequencial

| Relação | Conectivos | Exemplo |
|---------|-----------|---------|
| Adição | além disso, ademais, também | "É eficiente. **Além disso**, é barato." |
| Oposição | porém, no entanto, em contrapartida | "É caro. **No entanto**, vale a pena." |
| Causa | porque, visto que, em razão de | "Faltou **porque** estava doente." |
| Consequência | portanto, logo, por isso | "Choveu muito; **por isso**, o rio transbordou." |
| Tempo | em seguida, posteriormente, antes | "Leu o texto. **Em seguida**, respondeu." |
| Explicação | ou seja, isto é, em outras palavras | "É endêmica, **ou seja**, ocorre numa região específica." |
| Exemplificação | por exemplo, como, tal como | "Países nórdicos, **como** a Finlândia, investem em educação." |

## Como a banca cobra coesão

**Questão típica:** "A palavra/expressão X, no segundo parágrafo, retoma..."

**Método de resolução:**
1. Localize o termo destacado
2. Volte no texto e procure a quem/quê ele se refere
3. Substitua mentalmente o termo pela referência e veja se faz sentido

**Exemplo:**
*"A nova política econômica gerou debate. Críticos afirmam que **ela** favorece apenas os mais ricos."*

Pergunta: "O pronome 'ela' refere-se a..."
Resposta: "A nova política econômica" — é o único antecedente feminino singular.

> 💡 Quando houver ambiguidade (dois possíveis antecedentes), analise o contexto semântico: qual referência faz mais sentido logicamente?`,
            tipo: 'texto',
          },
          {
            titulo: 'Regência Verbal e Nominal',
            corpo: `Regência é a relação de dependência entre um termo **regente** (verbo ou nome) e seu **complemento**. A questão central é: o verbo/nome exige preposição? Qual preposição?

## Regência Verbal — Os verbos mais cobrados

### Assistir

| Sentido | Classificação | Regência | Exemplo |
|---------|--------------|----------|---------|
| Ver, presenciar | VTI | assistir **a** | "Assisti **ao** filme." |
| Dar assistência | VTD | assistir (sem prep.) | "O médico assistiu **o paciente**." |

### Aspirar

| Sentido | Classificação | Regência | Exemplo |
|---------|--------------|----------|---------|
| Respirar, inalar | VTD | aspirar (sem prep.) | "Aspirou **o ar** puro." |
| Desejar, almejar | VTI | aspirar **a** | "Aspiramos **ao** cargo." |

### Visar

| Sentido | Classificação | Regência | Exemplo |
|---------|--------------|----------|---------|
| Mirar, apontar | VTD | visar (sem prep.) | "Visou **o alvo**." |
| Dar visto | VTD | visar (sem prep.) | "Visou **o passaporte**." |
| Desejar, pretender | VTI | visar **a** | "Visamos **à** aprovação." |

### Preferir

**Regência correta:** preferir **A** a **B** (sem "do que")

- ✅ "Prefiro cinema **a** teatro."
- ❌ "Prefiro cinema **do que** teatro."
- ❌ "Prefiro **mais** cinema **do que** teatro."

### Obedecer / Desobedecer

Sempre VTI (com preposição "a"):
- "Obedeceu **ao** regulamento." / "Desobedeceu **às** normas."

### Namorar

Na norma culta, é VTD (sem preposição):
- ✅ "Ela namora **o** Pedro."
- ❌ "Ela namora **com** o Pedro."

### Implicar

| Sentido | Classificação | Regência | Exemplo |
|---------|--------------|----------|---------|
| Acarretar | VTD | implicar (sem prep.) | "A crise implica **mudanças**." |
| Ter implicância | VTI | implicar **com** | "O chefe implica **com** todos." |

## Regência Nominal — Nomes que pedem preposição

Alguns substantivos e adjetivos exigem preposições específicas:

| Nome | Preposição | Exemplo |
|------|-----------|---------|
| acessível | **a** | "Acessível **a** todos" |
| compatível | **com** | "Compatível **com** o sistema" |
| passível | **de** | "Passível **de** punição" |
| preferência | **por** / **a** | "Preferência **por** cinema" |
| aversão | **a** / **por** | "Aversão **a** violência" |
| ansioso | **por** / **para** | "Ansioso **por** notícias" |

> 💡 Na prova, quando a questão cobra regência, leia a frase em voz alta mentalmente. Muitas vezes, o ouvido treinado identifica a preposição correta antes da regra.`,
            tipo: 'tabela',
          },
          {
            titulo: 'Análise Gramatical em Contexto: Exemplo Prático',
            corpo: `Vamos analisar um parágrafo real identificando todos os recursos gramaticais estudados.

## Texto para análise

*"Embora a tecnologia tenha avançado significativamente nas últimas décadas, o acesso à educação de qualidade permanece restrito. Segundo dados do IBGE, cerca de 11 milhões de brasileiros são analfabetos. Esse número, que representa 6,6% da população adulta, revela uma desigualdade estrutural cujas raízes remontam ao período colonial. Portanto, não basta investir em infraestrutura digital; é necessário, antes de tudo, garantir que todos tenham acesso às ferramentas básicas de aprendizado."*

## Análise gramatical detalhada

### Conjunções e relações de sentido

- **"Embora"** → conjunção subordinativa concessiva. Introduz um fato (avanço tecnológico) que deveria impedir o problema (falta de acesso), mas não impede.
- **"Portanto"** → conjunção coordenativa conclusiva. Introduz a conclusão lógica do argumento.

### Pronomes e coesão referencial

- **"Esse número"** → pronome demonstrativo "esse" retoma "11 milhões de brasileiros são analfabetos" (anáfora). Usa-se "esse" porque retoma algo já dito.
- **"que"** → pronome relativo, retoma "esse número". Introduz oração subordinada adjetiva explicativa (entre vírgulas).
- **"cujas"** → pronome relativo indicando posse. "Cujas raízes" = as raízes da desigualdade. Concorda com "raízes" (feminino plural).

### Regência

- **"acesso à educação"** → regência nominal: "acesso" pede preposição "a" + artigo "a" = crase "à".
- **"acesso às ferramentas"** → mesmo caso: "a" (preposição) + "as" (artigo) = "às".

### Coesão sequencial

O parágrafo segue a estrutura:
1. **Concessão** (embora...) → reconhece um ponto
2. **Dado/evidência** (segundo dados...) → sustenta com fato
3. **Expansão** (esse número, que...) → aprofunda o dado
4. **Conclusão** (portanto...) → fecha o raciocínio

> 💡 Este tipo de análise integrada é exatamente o que o vestibular UNIVESP espera. A gramática não existe isolada — ela constrói o sentido do texto.`,
            tipo: 'exemplo',
          },
        ],
        imagemDescricao: 'Tabela de conjunções organizadas por tipo com exemplos de uso em frases',
        formulasChave: [
          'Adversativas (mas, porém, contudo): introduzem oposição',
          'Concessivas (embora, ainda que): ideia contrária que não impede a principal',
          'Cujo = posse — sempre entre dois substantivos',
          'Onde = apenas lugar físico; Em que = lugar ou situação',
          'Preferir A a B (nunca "preferir A do que B")',
        ],
        dicasProva: [
          'Quando a questão perguntar a "relação de sentido", identifique a conjunção e classifique-a.',
          'Substitua a conjunção por outra do mesmo tipo para confirmar o sentido.',
          '"Cujo" nunca vem seguido de artigo: "cuja a casa" está ERRADO.',
          'Se a questão pedir para trocar "onde", verifique se é lugar — senão use "em que".',
          'Em regência, observe se o verbo pede preposição antes do complemento.',
        ],
        errosComuns: [
          'Confundir "mas" (adversativa) com "mais" (advérbio de intensidade).',
          'Usar "onde" para situações que não são lugar (correto: "em que").',
          'Trocar "porque" (causa) por "por que" (pergunta/motivo) sem analisar o contexto.',
          'Usar "cujo" seguido de artigo: "cujo o" não existe na norma culta.',
          'Confundir concessão (embora) com causa (porque) — sentidos opostos.',
        ],
        exercicios: [
          {
            id: 'port-gram-1',
            enunciado: 'Na frase "O aluno estudou bastante; no entanto, não foi aprovado", a expressão "no entanto" estabelece relação de:',
            alternativas: [
              'Adição',
              'Explicação',
              'Adversidade',
              'Conclusão',
              'Alternância',
            ],
            respostaCorreta: 2,
            explicacao: '"No entanto" é uma conjunção adversativa — indica oposição entre as ideias. O aluno estudou (expectativa de aprovação), mas não foi aprovado (resultado contrário ao esperado).',
            dificuldade: 'facil',
          },
          {
            id: 'port-gram-2',
            enunciado: 'Assinale a alternativa em que o pronome relativo "cujo" está empregado corretamente:',
            alternativas: [
              'O autor cujo o livro foi premiado estará presente.',
              'A casa cujo telhado desabou será demolida.',
              'O aluno cujo que tirou a melhor nota ganhou um prêmio.',
              'A empresa cujo ela trabalha fechou.',
              'O país cujo de que falamos é a França.',
            ],
            respostaCorreta: 1,
            explicacao: '"Cujo" expressa posse e concorda com o substantivo que o segue, nunca com artigo. "A casa cujo telhado desabou" = o telhado da casa. As demais alternativas usam "cujo" incorretamente com artigo, preposição ou pronome.',
            dificuldade: 'medio',
          },
          {
            id: 'port-gram-3',
            enunciado: '"Embora o governo tenha investido em infraestrutura, os problemas de mobilidade urbana persistem." A oração introduzida por "embora" é:',
            alternativas: [
              'Subordinada adverbial causal',
              'Subordinada adverbial concessiva',
              'Coordenada adversativa',
              'Subordinada adverbial consecutiva',
              'Coordenada explicativa',
            ],
            respostaCorreta: 1,
            explicacao: '"Embora" é conjunção subordinativa concessiva. A oração indica que o investimento em infraestrutura (concessão) não impediu os problemas de mobilidade (oração principal). Concessão ≠ adversidade: a concessiva é subordinada, a adversativa é coordenada.',
            dificuldade: 'medio',
          },
          {
            id: 'port-gram-4',
            enunciado: 'Assinale a frase com regência verbal CORRETA:',
            alternativas: [
              'Assisti o filme ontem à noite.',
              'Prefiro cinema do que teatro.',
              'Ele obedeceu o regulamento da escola.',
              'Nós aspiramos ao cargo de gerente.',
              'Ela namora com o Pedro há dois anos.',
            ],
            respostaCorreta: 3,
            explicacao: '"Aspirar" no sentido de "almejar/desejar" é verbo transitivo indireto e exige a preposição "a": aspirar AO cargo. As demais: assistir AO filme; preferir A a B; obedecer AO regulamento; namorar alguém (sem preposição na norma culta).',
            dificuldade: 'dificil',
          },
          {
            id: 'port-gram-5',
            enunciado: '"Os jovens querem mudanças, _______ nem sempre sabem por onde começar." Assinale a conjunção que preenche corretamente a lacuna:',
            alternativas: [
              'porque',
              'portanto',
              'mas',
              'pois',
              'logo',
            ],
            respostaCorreta: 2,
            explicacao: 'A segunda oração apresenta uma ideia oposta à primeira (querem mudanças × não sabem por onde começar). A relação é de adversidade, exigindo a conjunção "mas". "Porque" e "pois" são explicativas; "portanto" e "logo" são conclusivas.',
            dificuldade: 'facil',
          },
        ],
      },
    },
    {
      id: 'figuras-linguagem',
      titulo: 'Figuras de Linguagem',
      peso: 15,
      conteudo: {
        resumo: 'Metáfora, metonímia, ironia, hipérbole, eufemismo, antítese e personificação — as figuras mais cobradas em vestibulares.',
        explicacao:
          'Figuras de linguagem são recursos expressivos que ampliam o sentido das palavras. No vestibular, o foco é identificar a figura e explicar seu efeito no texto.\n\n**Metáfora:** comparação implícita (sem "como").\nEx.: "Ele é uma fera nos estudos." (fera = muito bom)\n\n**Metonímia:** substituição de um termo por outro relacionado.\nEx.: "Leu Machado de Assis." (autor pela obra)\n\n**Ironia:** dizer o contrário do que se pensa para criticar.\nEx.: "Que belo exemplo de cidadão!" (sobre alguém desonesto)\n\n**Hipérbole:** exagero intencional.\nEx.: "Estou morrendo de fome."\n\n**Eufemismo:** suavização de algo desagradável.\nEx.: "Ele partiu desta para melhor." (= morreu)\n\n**Antítese:** oposição de ideias.\nEx.: "A vida é feita de alegrias e tristezas."\n\n**Personificação (prosopopeia):** atribuir características humanas a seres não humanos.\nEx.: "O sol sorriu naquela manhã."',
        secoes: [
          {
            titulo: 'Introdução às Figuras de Linguagem',
            corpo: `As figuras de linguagem são **recursos expressivos** que desviam a linguagem de seu sentido literal para produzir efeitos de significação mais ricos, persuasivos ou estéticos. Elas estão presentes em textos literários, mas também no cotidiano — em músicas, propagandas, conversas informais e, claro, nos textos de vestibular.

## Por que estudar figuras de linguagem?

No vestibular UNIVESP, as figuras de linguagem aparecem de duas formas:

1. **Identificação direta**: "A figura de linguagem presente no trecho é..."
2. **Efeito de sentido**: "O efeito expressivo produzido pelo autor se deve a..."

Em ambos os casos, não basta decorar definições — é preciso **reconhecer a figura em contexto** e explicar qual efeito ela produz.

## Classificação geral

As figuras se dividem em grandes grupos:

- **Figuras de palavra (tropos)**: envolvem mudança no sentido das palavras — metáfora, metonímia, catacrese, comparação
- **Figuras de pensamento**: envolvem o jogo de ideias — ironia, antítese, paradoxo, hipérbole, eufemismo, prosopopeia
- **Figuras de sintaxe**: envolvem a estrutura da frase — elipse, zeugma, pleonasmo, anáfora (repetição)
- **Figuras de som**: envolvem sonoridade — aliteração, assonância, onomatopeia

> 💡 No vestibular, as mais cobradas são as **figuras de palavra** e as **figuras de pensamento**. São essas que estudaremos em profundidade.`,
            tipo: 'texto',
          },
          {
            titulo: 'Metáfora e Comparação',
            corpo: `Metáfora e comparação são as figuras mais confundidas — e a banca explora exatamente essa confusão. Ambas envolvem uma **relação de semelhança** entre dois termos, mas se diferenciam pela estrutura.

## Comparação (ou símile)

A comparação estabelece uma relação de semelhança **explícita**, usando conectivos comparativos.

**Conectivos indicadores:** como, tal qual, feito, que nem, assim como, semelhante a

**Exemplos:**
- "Seus olhos brilhavam **como** estrelas."
- "Ele é forte **feito** um touro."
- "A vida é **tal qual** uma viagem sem mapa."

### Estrutura da comparação

**Elemento A** + conectivo comparativo + **Elemento B**
"Seus olhos" + como + "estrelas"

## Metáfora

A metáfora é uma comparação **implícita** — o conectivo desaparece e a identificação entre os dois termos se torna direta.

**Exemplos:**
- "Seus olhos eram **estrelas**." (sem "como" — metáfora)
- "Ele é um **touro**." (identificação direta)
- "A vida é uma **viagem** sem mapa." (sem conectivo comparativo)
- "**Fera** nos estudos, arrasou na prova." (fera = muito bom)
- "Aquele político é uma **raposa**." (raposa = astuto)

### Estrutura da metáfora

**Elemento A** é/= **Elemento B**
"Seus olhos" = "estrelas"

## Comparação direta: metáfora × comparação

| Aspecto | Comparação | Metáfora |
|---------|-----------|----------|
| Conectivo | Presente (como, feito, tal qual) | Ausente |
| Relação | Semelhança explícita | Identidade/substituição |
| Exemplo | "Ele **é como** um leão" | "Ele **é** um leão" |
| Efeito | Mais suave, analítica | Mais intensa, direta |

**Na prática da prova:** Se há "como", "feito", "tal qual" → **comparação**. Se não há → **metáfora**.

## Metáforas na literatura brasileira

- *"Minha terra tem palmeiras onde canta o sabiá."* (Gonçalves Dias) — "minha terra" é metáfora para o Brasil
- *"Amor é fogo que arde sem se ver."* (Camões) — amor = fogo (metáfora)
- *"A vida é a arte do encontro, embora haja tanto desencontro pela vida."* (Vinícius de Moraes) — vida = arte do encontro

## Metáforas no cotidiano

Usamos metáforas o tempo todo sem perceber:

- "Ele está **queimado** na empresa." (queimado = mal visto)
- "Estou **voando** no trabalho." (voando = rendendo muito)
- "Aquela **pérola** de aluno." (pérola = ironia/destaque)
- "Ela tem um **coração de pedra**." (pedra = insensibilidade)`,
            tipo: 'texto',
          },
          {
            titulo: 'Metonímia e Sinédoque',
            corpo: `A metonímia substitui um termo por outro com o qual mantém uma **relação de contiguidade** (proximidade real, não de semelhança). Diferente da metáfora (que é baseada em semelhança), a metonímia se baseia em uma **conexão lógica concreta** entre os termos.

## Tipos de metonímia

### Autor pela obra
- "Leu **Machado de Assis** nas férias." (= leu uma obra de Machado)
- "Adoro **Mozart**." (= a música de Mozart)

### Marca pelo produto
- "Me dá um **Band-Aid**." (= curativo adesivo)
- "Vou tomar uma **Brahma**." (= cerveja)
- "Preciso de um **Uber**." (= transporte por aplicativo)

### Lugar pelo produto/pessoas
- "**Brasília** decretou novas medidas." (= o governo federal)
- "**Hollywood** domina o cinema mundial." (= a indústria cinematográfica americana)
- "Um bom **bordeaux** acompanha queijos." (= vinho da região de Bordeaux)

### Efeito pela causa
- "Ganhou o pão com o **suor** do rosto." (suor = trabalho árduo)
- "Vive de sua **pena**." (pena = escrita/literatura)

### Matéria pelo objeto
- "Os **bronzes** soaram ao meio-dia." (= sinos de bronze)
- "Empunhou o **aço** com firmeza." (= espada)

### Concreto pelo abstrato
- "Ela é meu **porto seguro**." (porto = segurança, proteção)
- "É preciso dar **voz** às minorias." (voz = representação)

## Sinédoque (caso especial da metonímia)

A sinédoque é a substituição da **parte pelo todo** ou do **todo pela parte**:

- "Não havia **viva alma** na rua." (alma = pessoa → parte pelo todo)
- "O **Brasil** venceu a Copa." (Brasil = seleção brasileira → todo pela parte)
- "Completou vinte **primaveras**." (primaveras = anos → parte pelo todo)

## Metonímia × Metáfora: a diferença fundamental

| Aspecto | Metáfora | Metonímia |
|---------|---------|-----------|
| Base | **Semelhança** imaginada | **Contiguidade** real/lógica |
| Relação | Elemento A *parece* B | Elemento A está *conectado* a B |
| Exemplo | "Ele é uma raposa" (astúcia) | "Leu Machado" (autor pela obra) |
| Pergunta-chave | A parece com B? | A está relacionado concretamente a B? |

> 💡 **Teste prático:** Se a substituição se baseia em "parecer" → metáfora. Se se baseia em "pertencer a", "fazer parte de", "ser feito de", "representar" → metonímia.`,
            tipo: 'texto',
          },
          {
            titulo: 'Ironia',
            corpo: `A ironia é a figura em que se diz o **contrário** do que se pensa, geralmente com intenção **crítica** ou **humorística**. No vestibular, a ironia aparece frequentemente em crônicas, charges e textos opinativos.

## Como funciona a ironia

O mecanismo é simples: o autor usa palavras com sentido **positivo** para descrever algo **negativo** (ou vice-versa). O efeito vem do **contraste** entre o que é dito e o que se quer realmente comunicar.

**Exemplos claros:**

- "**Que belo** exemplo de cidadão!" — dito sobre alguém que jogou lixo na rua
- "**Parabéns** pela sua pontualidade!" — dito a alguém que chegou duas horas atrasado
- "**Adorei** seu trabalho, muito **completo**!" — dito sobre um trabalho com apenas uma página

## Ironia em textos literários

- *"Marcela amou-me durante quinze meses e onze contos de réis."* (Machado de Assis)
→ A ironia está em medir o amor em dinheiro — sugere que o amor era interesseiro, sem dizê-lo explicitamente.

- *"O funcionário público não é necessariamente um mal. É um bem que se faz mal."* (Mário Quintana)
→ Aparenta defender o funcionário público, mas a inversão "bem que se faz mal" é uma crítica irônica.

## Ironia em charges

Na charge, a ironia nasce do **contraste entre texto e imagem**:

- Político sorridente + povo faminto ao fundo + fala: "Missão cumprida"
- Personagem com dinheiro saindo dos bolsos + fala: "Sou um homem simples"
- Árvore sendo derrubada + placa: "Área de preservação ambiental"

O humor ácido da charge depende de o leitor perceber a **contradição intencional**.

## Ironia × Sarcasmo

- **Ironia**: pode ser sutil, leve, nem sempre tem tom agressivo
- **Sarcasmo**: é a ironia com tom **cruel** ou **agressivo**, voltada a ferir

No vestibular, o termo usado é quase sempre "ironia". "Sarcasmo" aparece raramente.

## Como identificar ironia na prova

1. O tom do texto é **excessivamente elogioso** sobre algo problemático? → ironia
2. Há **contradição** entre o que é dito e o contexto? → ironia
3. O autor parece **concordar** com algo que claramente critica? → ironia
4. Em charges: o **texto** e a **imagem** se contradizem? → ironia

> ⚠️ Cuidado para não confundir ironia com **humor simples**. A ironia sempre envolve dizer o contrário; o humor pode usar exagero, trocadilho ou situação absurda sem inversão de sentido.`,
            tipo: 'texto',
          },
          {
            titulo: 'Hipérbole e Eufemismo',
            corpo: `Hipérbole e eufemismo são figuras **opostas**: uma exagera, a outra suaviza. Essa oposição é cobrada diretamente em provas.

## Hipérbole — o exagero expressivo

A hipérbole é o **exagero intencional** para dar ênfase a uma ideia. O falante não pretende ser entendido literalmente.

**Exemplos do cotidiano:**
- "Estou **morrendo** de fome." (não está literalmente morrendo)
- "Já te disse **um milhão** de vezes!" (exagero numérico)
- "Chorei **rios** de lágrimas." (exagero de quantidade)
- "Ele é **o cara mais chato do universo**." (exagero de extensão)

**Exemplos literários:**
- *"Rios te correrão dos olhos, se chorares."* (Olavo Bilac) — exagero poético do choro
- *"Eu já não sinto nada, nem medo, nem desejo / Mas uma vontade de sono e de morrer."* (Manuel Bandeira) — hipérbole do cansaço existencial

### Efeito da hipérbole
O exagero pode ser usado para:
- Dar **ênfase** ("Estou morrendo de calor!")
- Criar **humor** ("Ele come mais que um exército")
- Expressar **emoção intensa** ("Te amo mais que tudo no mundo")

## Eufemismo — a suavização

O eufemismo substitui uma expressão considerada **desagradável, rude ou chocante** por outra mais branda.

**Exemplos do cotidiano:**
- "Ele **partiu desta para melhor**." (= morreu)
- "É uma pessoa da **terceira idade**." (= idosa)
- "Foi **convidado a se retirar** da empresa." (= demitido)
- "Ela tem uma **condição especial**." (= deficiência)
- "O bairro é **carente**." (= pobre)

**Exemplos literários:**
- *"E pela paz do teu sorriso, / Pela imensa dor que em vão procuras / Dizer: adeus, adeus, eu vou-me embora!"* — "ir embora" como eufemismo para morrer

### Efeito do eufemismo
O eufemismo é usado para:
- **Amenizar** notícias difíceis ("Não resistiu aos ferimentos" em vez de "morreu")
- **Evitar tabus** (referências à morte, doença, pobreza)
- **Manter a polidez** em contextos formais

## Quadro comparativo

| Aspecto | Hipérbole | Eufemismo |
|---------|----------|-----------|
| Mecanismo | Exagero | Suavização |
| Intenção | Ênfase, impacto | Delicadeza, atenuação |
| Direção | Amplifica o real | Atenua o real |
| Exemplo | "Morrendo de rir" | "Partiu desta para melhor" |
| Quando aparece | Linguagem informal, literatura | Comunicação social, obituários |

> 💡 Na prova, se o trecho exagera uma situação → **hipérbole**. Se o trecho atenua algo desagradável → **eufemismo**. São os dois lados da mesma moeda.`,
            tipo: 'texto',
          },
          {
            titulo: 'Antítese e Paradoxo',
            corpo: `Antítese e paradoxo envolvem **oposição de ideias**, mas funcionam de maneira diferente. A banca cobra tanto a identificação quanto a distinção entre elas.

## Antítese — oposição clara

A antítese é a **justaposição de ideias contrárias** dentro do mesmo enunciado. As ideias são opostas mas **não se contradizem logicamente** — ambas podem ser verdadeiras ao mesmo tempo.

**Exemplos:**
- "A vida é feita de **alegrias** e **tristezas**."
- "**Nasce** o sol e logo **morre**."
- "De um lado, **amor**; de outro, **ódio**."
- *"Neste mundo, tudo é feito de **encontros** e **despedidas**, de **alegrias** e **lágrimas**, de **certezas** e **dúvidas**."*

### Estrutura da antítese
A antítese trabalha com **pares opostos**: vida/morte, amor/ódio, claro/escuro, riqueza/pobreza, alegria/tristeza.

### Efeito
A antítese reforça ideias por **contraste**. Ao colocar opostos lado a lado, o autor destaca a dualidade do tema.

## Paradoxo (ou oximoro) — contradição aparente

O paradoxo une ideias que **parecem se contradizer** logicamente, mas que, em uma leitura mais profunda, revelam uma verdade.

**Exemplos:**
- *"Eu sou um velho **moço**."* (velho e moço ao mesmo tempo? → aparenta contradição)
- *"O amor é **ferida que dói e não se sente**."* (dói mas não se sente? → paradoxo camoniano)
- *"Estou **cego de tanto ver**."* (ver causa cegueira? → contradição aparente que revela saturação)
- *"A guerra **é a paz**."* (George Orwell) — paradoxo deliberado

### Estrutura do paradoxo
O paradoxo reúne ideias **mutuamente excludentes** no mesmo ser ou conceito. Não são apenas opostas (como na antítese) — são **logicamente incompatíveis**.

## Antítese × Paradoxo: a distinção

| Aspecto | Antítese | Paradoxo |
|---------|---------|----------|
| Relação | Oposição | Contradição |
| As ideias podem coexistir? | **Sim** — são opostas, mas compatíveis | **Não** — são logicamente excludentes |
| Exemplo | "Alegria e tristeza" | "Ferida que não se sente" |
| Efeito | Contraste | Estranhamento, reflexão |

**Teste prático:** Se os dois termos podem existir juntos no mundo real (alegria E tristeza existem), é **antítese**. Se parecem impossíveis juntos (doer E não sentir), é **paradoxo**.

> 💡 Em provas, quando o trecho apresenta pares opostos organizados simetricamente (encontros/despedidas, alegrias/tristezas), é quase certamente **antítese**.`,
            tipo: 'texto',
          },
          {
            titulo: 'Personificação, Catacrese e Outras Figuras',
            corpo: `Completamos aqui o quadro das figuras de linguagem mais cobradas, incluindo personificação, catacrese e figuras de sintaxe e som que aparecem pontualmente.

## Personificação (Prosopopeia)

Atribuir **características, ações ou sentimentos humanos** a seres não humanos (animais, objetos, elementos da natureza, conceitos abstratos).

**Exemplos:**
- "O sol **sorriu** naquela manhã." (o sol não sorri)
- "As árvores **dançavam** com o vento." (árvores não dançam)
- "A cidade **dormia** tranquilamente." (cidades não dormem)
- *"A saudade **abraçou** meu peito."* (saudade não abraça)
- *"O tempo **voa**."* (o tempo não tem asas)

### Como identificar
**Fórmula:** sujeito não humano + verbo de ação/sentimento humano = personificação

### Na literatura
- *"As estrelas eram tantas, tanta estrela / que eu perguntei, em espanto e sossego, / se aquilo era um céu ou se era o mar."* (Manuel Bandeira) — o eu lírico dialoga com a natureza
- *"O rio que fazia uma volta atrás de nossa casa / era a imagem de um vidro mole."* (Manoel de Barros) — atribuir "volta" intencional ao rio

## Catacrese

A catacrese é uma **metáfora cristalizada pelo uso** — tão comum que não é mais percebida como figura. Usamos catacrese quando não há palavra literal para designar algo.

**Exemplos:**
- "**Pé** da mesa" (mesas não têm pés)
- "**Braço** da cadeira" (cadeiras não têm braços)
- "**Asa** do xícara" (xícaras não têm asas)
- "**Cabeça** de alho" (alho não tem cabeça)
- "**Embarcar** no avião" (não é barco)
- "**Dente** de alho" (alho não tem dentes)

> 💡 Na prova, a catacrese costuma ser alternativa errada quando se pede "a figura presente no trecho". Catacrese raramente é a resposta correta — o texto usa figuras intencionais, não catacrese.

## Figuras de sintaxe (cobradas ocasionalmente)

### Elipse
Omissão de um termo facilmente recuperável:
- "Na sala, apenas silêncio." (omissão do verbo "havia")

### Pleonasmo
Redundância expressiva:
- "Vi com meus **próprios olhos**." (ver já implica usar os olhos)
- *"E rir meu riso e derramar meu pranto."* (Vinícius de Moraes) — pleonasmo literário com função expressiva

### Anáfora (repetição)
Repetição de palavra no **início** de versos ou frases sucessivas:
- *"É preciso amor / É preciso paz / É preciso fé"* — "É preciso" se repete para criar ritmo e ênfase

## Figuras de som (cobradas raramente)

### Aliteração
Repetição de **consoantes**:
- *"Vozes veladas, veludosas vozes"* (Cruz e Sousa) — repetição do "v"

### Assonância
Repetição de **vogais**:
- *"Sou um mulato nato no sentido lato"* (Caetano Veloso) — repetição do "a"

### Onomatopeia
Reprodução de **sons**:
- "O relógio fazia **tic-tac**."
- "A abelha fazia **zzzzzz**."`,
            tipo: 'texto',
          },
          {
            titulo: 'Identificando Figuras na Prova: Método Prático',
            corpo: `Quando a questão pedir para identificar a figura de linguagem, siga este roteiro mental.

## Fluxograma de identificação

### Passo 1: Há comparação entre dois termos?

- **Sim, com "como"/"feito"/"tal qual"** → **Comparação**
- **Sim, sem conectivo (A = B)** → **Metáfora**
- **Não** → siga para o passo 2

### Passo 2: Há substituição de termos?

- **Autor pela obra, marca pelo produto, parte pelo todo** → **Metonímia**
- **Não** → siga para o passo 3

### Passo 3: Há exagero ou suavização?

- **Exagero intencional** → **Hipérbole**
- **Suavização de algo desagradável** → **Eufemismo**
- **Não** → siga para o passo 4

### Passo 4: Há oposição de ideias?

- **Ideias opostas compatíveis** → **Antítese**
- **Ideias contraditórias/impossíveis juntas** → **Paradoxo**
- **Não** → siga para o passo 5

### Passo 5: Há inversão de sentido (diz o contrário do que pensa)?

- **Sim, com tom crítico** → **Ironia**
- **Não** → siga para o passo 6

### Passo 6: Sujeito não humano com ação humana?

- **Sim** → **Personificação**
- **Não** → reavalie as opções anteriores

## Exercício mental: identifique a figura

1. *"Ela devorou o livro em uma tarde."*
→ **Metáfora**: "devorar" livro = ler avidamente (sem "como")

2. *"Leu Drummond nas férias."*
→ **Metonímia**: autor pela obra

3. *"O muro chorava a tinta descascada."*
→ **Personificação**: "chorar" é ação humana atribuída ao muro

4. *"Ele é mais lento que uma tartaruga com sono."*
→ **Comparação** (presença do "que") + **Hipérbole** (exagero)

5. *"Naquele espetáculo de arte, o bêbado tropeçou na escadaria."*
→ **Ironia**: "espetáculo de arte" para descrever uma cena vexatória

6. *"Na guerra dos meus sentimentos, a paz nunca vence."*
→ **Antítese**: guerra/paz; + **Personificação**: paz que "vence"

> 💡 Questões podem ter **mais de uma figura** no mesmo trecho. Quando isso acontece, a banca pergunta qual é a **principal** ou a que produz o efeito central. Analise qual figura é mais relevante para o sentido global.`,
            tipo: 'exemplo',
          },
        ],
        imagemDescricao: 'Mapa mental com as sete figuras de linguagem, cada uma com definição e exemplo visual',
        formulasChave: [
          'Metáfora = comparação SEM "como" ou "tal qual"',
          'Comparação = usa "como", "tal qual", "feito"',
          'Metonímia = parte pelo todo, autor pela obra, marca pelo produto',
          'Ironia = o contrário do que se diz (tom crítico)',
          'Personificação = verbo humano + sujeito não humano',
        ],
        dicasProva: [
          'Metáfora × Comparação: se houver "como", é comparação; sem "como", é metáfora.',
          'Metonímia comum: "tomar uma Brahma" (marca pelo produto), "ler Machado" (autor pela obra).',
          'A ironia em provas aparece muito em charges e crônicas — observe o tom do autor.',
          'Hipérbole e eufemismo são opostos: um exagera, o outro suaviza.',
          'Se o sujeito é não humano e o verbo é de ação humana, é personificação.',
        ],
        errosComuns: [
          'Confundir metáfora com comparação — a diferença é a presença/ausência de "como".',
          'Não perceber ironia quando o texto tem tom elogioso sobre algo negativo.',
          'Confundir metonímia com metáfora — metonímia tem relação concreta (parte/todo, autor/obra).',
          'Ignorar o contexto ao classificar: "morrendo de rir" é hipérbole, não sentido literal.',
          'Confundir antítese (oposição de ideias) com paradoxo (contradição aparente).',
        ],
        exercicios: [
          {
            id: 'port-fig-1',
            enunciado: '"Aquele político é uma raposa." A figura de linguagem presente nessa frase é:',
            alternativas: [
              'Comparação',
              'Metonímia',
              'Metáfora',
              'Hipérbole',
              'Personificação',
            ],
            respostaCorreta: 2,
            explicacao: 'Trata-se de metáfora: o político é comparado a uma raposa (astúcia) de forma implícita, sem o uso de conectivos comparativos como "como" ou "tal qual". Se fosse "age como uma raposa", seria comparação.',
            dificuldade: 'facil',
          },
          {
            id: 'port-fig-2',
            enunciado: '"Ele leu Machado de Assis nas férias." A figura presente é:',
            alternativas: [
              'Metáfora',
              'Hipérbole',
              'Metonímia',
              'Eufemismo',
              'Antítese',
            ],
            respostaCorreta: 2,
            explicacao: 'Metonímia: o autor (Machado de Assis) é usado no lugar da obra. Ninguém "lê" uma pessoa literalmente — lê-se a obra do autor. É uma substituição por relação de contiguidade (autor pela obra).',
            dificuldade: 'facil',
          },
          {
            id: 'port-fig-3',
            enunciado: '"Que lindo! Chegou duas horas atrasado de novo." O efeito de sentido é produzido por:',
            alternativas: [
              'Eufemismo',
              'Hipérbole',
              'Personificação',
              'Ironia',
              'Antítese',
            ],
            respostaCorreta: 3,
            explicacao: 'Ironia: o falante diz "que lindo" (expressão positiva) para criticar o atraso (situação negativa). O contraste entre o elogio aparente e a crítica real configura a ironia.',
            dificuldade: 'medio',
          },
          {
            id: 'port-fig-4',
            enunciado: '"O vento sussurrava segredos entre as árvores." A figura de linguagem identificada é:',
            alternativas: [
              'Metáfora',
              'Metonímia',
              'Ironia',
              'Personificação',
              'Hipérbole',
            ],
            respostaCorreta: 3,
            explicacao: 'Personificação (prosopopeia): o vento (elemento da natureza) recebe atributos humanos — "sussurrar segredos" é uma ação humana atribuída a um ser inanimado.',
            dificuldade: 'medio',
          },
          {
            id: 'port-fig-5',
            enunciado: '"Nesta vida, tudo é feito de encontros e despedidas, de alegrias e lágrimas, de certezas e dúvidas." A principal figura de linguagem nesse trecho é:',
            alternativas: [
              'Metáfora',
              'Ironia',
              'Hipérbole',
              'Eufemismo',
              'Antítese',
            ],
            respostaCorreta: 4,
            explicacao: 'Antítese: o trecho é construído por pares de ideias opostas — encontros/despedidas, alegrias/lágrimas, certezas/dúvidas. A antítese reforça a ideia de que a vida é feita de contrastes.',
            dificuldade: 'dificil',
          },
        ],
      },
    },
    {
      id: 'literatura',
      titulo: 'Literatura',
      peso: 15,
      conteudo: {
        resumo: 'Realismo, Naturalismo e Modernismo (1ª e 2ª fase) — escolas literárias mais cobradas, com autores e obras essenciais.',
        explicacao:
          'A literatura no vestibular UNIVESP foca em reconhecer características das escolas literárias e associar autores às suas respectivas correntes.\n\n**Realismo (1881-1893):**\n• Características: objetividade, crítica social, análise psicológica, linguagem direta\n• Autores: Machado de Assis (Dom Casmurro, Memórias Póstumas de Brás Cubas)\n• Temas: hipocrisia da elite, ciúme, ambição, relativismo moral\n\n**Naturalismo (1881-1893):**\n• Características: determinismo, influência do meio, temas polêmicos, visão científica\n• Autores: Aluísio Azevedo (O Cortiço)\n• Temas: miséria, instinto, condições sociais degradantes\n\n**Modernismo — 1ª Fase (1922-1930):**\n• Características: ruptura com o academicismo, linguagem coloquial, humor, nacionalismo crítico\n• Autores: Oswald de Andrade (Pau Brasil), Mário de Andrade (Macunaíma), Manuel Bandeira\n• Marco: Semana de Arte Moderna de 1922\n\n**Modernismo — 2ª Fase (1930-1945):**\n• Características: romance regionalista, denúncia social, seca nordestina\n• Autores: Graciliano Ramos (Vidas Secas), Rachel de Queiroz (O Quinze), Jorge Amado\n• Temas: desigualdade, sertão, condição humana',
        secoes: [
          {
            titulo: 'Panorama: Escolas Literárias Brasileiras',
            corpo: `A literatura brasileira se organiza em **escolas literárias** (ou movimentos), cada uma com características próprias que refletem o momento histórico, social e cultural em que surgiram. No vestibular UNIVESP, o foco recai sobre as escolas do **final do século XIX e do século XX**: Realismo, Naturalismo e as três fases do Modernismo.

## Linha do tempo

| Período | Escola | Marco inicial | Autores-chave |
|---------|--------|--------------|---------------|
| 1881-1893 | **Realismo** | *Memórias Póstumas de Brás Cubas* (1881) | Machado de Assis |
| 1881-1893 | **Naturalismo** | *O Mulato* (1881) | Aluísio Azevedo |
| 1922-1930 | **Modernismo 1ª fase** | Semana de Arte Moderna (1922) | Oswald de Andrade, Mário de Andrade |
| 1930-1945 | **Modernismo 2ª fase** | Romance de 30 | Graciliano Ramos, Rachel de Queiroz |
| 1945-1960+ | **Modernismo 3ª fase** | Geração de 45 | Guimarães Rosa, Clarice Lispector |

## Como a banca cobra literatura

As questões seguem, em geral, três formatos:

1. **Trecho + escola**: a banca apresenta um trecho e pergunta a qual escola pertence
2. **Autor + características**: pergunta por que determinado autor pertence a determinada escola
3. **Comparação entre escolas**: pede para distinguir Realismo de Naturalismo, ou 1ª de 2ª fase modernista

> 💡 A estratégia mais eficiente é dominar as **características de cada escola** e saber associar cada **autor principal** à sua escola. Com isso, você resolve a maioria das questões.`,
            tipo: 'texto',
          },
          {
            titulo: 'Realismo Brasileiro (1881-1893)',
            corpo: `O Realismo surgiu como reação ao **idealismo romântico**. Enquanto o Romantismo idealizava o amor, o herói e a pátria, o Realismo buscou retratar a realidade **como ela é** — com suas contradições, hipocrisias e complexidades psicológicas.

## Contexto histórico

- Abolição da escravatura (1888) e Proclamação da República (1889)
- Influência do **positivismo** e do pensamento científico europeu
- Crescimento da burguesia urbana e suas contradições morais
- Crise do modelo imperial

## Características do Realismo

- **Objetividade**: o narrador observa e analisa, sem idealizar
- **Análise psicológica**: interesse nos conflitos interiores dos personagens
- **Crítica social**: denúncia da hipocrisia da burguesia e da elite
- **Linguagem direta**: frases construídas com precisão, sem excessos retóricos
- **Temática urbana**: cenário predominante é a cidade, a vida social da elite
- **Narrador em terceira pessoa** (ou primeira pessoa irônica, no caso de Machado)

## Machado de Assis — o grande nome

**Joaquim Maria Machado de Assis** (1839-1908) é o principal autor do Realismo brasileiro e um dos maiores escritores da língua portuguesa.

### Obras fundamentais

- **Memórias Póstumas de Brás Cubas** (1881) — marco inicial do Realismo. Narrado por um defunto autor que conta sua vida com ironia devastadora. Temas: vaidade, hipocrisia, relativismo moral.
- **Dom Casmurro** (1899) — a história de Bentinho e Capitu, com a famosa dúvida sobre a traição. O narrador não é confiável — Machado questiona a capacidade humana de conhecer a verdade.
- **Quincas Borba** (1891) — romance que explora a filosofia do Humanitismo (paródia do positivismo): "Ao vencedor, as batatas."

### Estilo machadiano

- **Ironia fina**: não é deboche aberto, mas um olhar oblíquo que revela contradições
- **Digressão**: o narrador interrompe a história para refletir, comentar, provocar o leitor
- **Narrador não confiável**: o leitor nunca pode ter certeza de que o narrador diz a verdade
- **Universalidade**: embora ambientados no Rio de Janeiro do século XIX, os temas são universais

### Trecho representativo

*"Marcela amou-me durante quinze meses e onze contos de réis."*
(Memórias Póstumas de Brás Cubas)

→ Em uma única frase, Machado mede o amor em tempo **e** dinheiro, sugerindo que o relacionamento era interesseiro — sem jamais dizer isso explicitamente. Essa economia expressiva é a marca do Realismo machadiano.

> 💡 Se o trecho na prova apresenta ironia sutil, análise psicológica e crítica à hipocrisia social, pense imediatamente em **Machado de Assis / Realismo**.`,
            tipo: 'texto',
          },
          {
            titulo: 'Naturalismo Brasileiro (1881-1893)',
            corpo: `O Naturalismo coexistiu com o Realismo no mesmo período, mas levou seus princípios ao extremo. Enquanto o Realismo analisa a **psicologia** dos personagens, o Naturalismo analisa como o **meio, a raça e o momento histórico** determinam o comportamento humano.

## Base filosófica: o Determinismo

O Naturalismo se fundamenta no **determinismo** — a ideia de que o ser humano é produto de três forças:

1. **O meio**: o ambiente social e físico molda o caráter
2. **A raça/hereditariedade**: características biológicas determinam comportamentos
3. **O momento histórico**: o contexto da época influencia as ações

> ⚠️ O conceito de "raça" como determinante é hoje reconhecido como pseudocientífico e racista. Ao estudar o Naturalismo, é importante entender essa visão como produto de seu tempo, não como verdade.

## Características do Naturalismo

- **Determinismo**: personagens moldados por forças que não controlam
- **Zoomorfização**: personagens descritos com traços animalescos (instinto, brutalidade)
- **Ambientes degradados**: cortiços, bordéis, zonas de miséria
- **Temas tabus**: alcoolismo, sexualidade, homossexualidade, adultério, exploração
- **Linguagem crua**: descrições detalhadas de aspectos físicos e fisiológicos
- **Visão científica**: o narrador observa os personagens como um cientista observa cobaias

## Aluísio Azevedo e O Cortiço (1890)

**O Cortiço** é a obra central do Naturalismo brasileiro. O romance retrata a vida dos moradores de um cortiço no Rio de Janeiro, mostrando como o ambiente insalubre **determina** o comportamento de todos.

### Enredo e estrutura

O cortiço é quase um **personagem coletivo**: não há um protagonista claro. A narrativa acompanha dezenas de moradores e mostra como o ambiente os corrompe, embrutece ou destrói.

### Personagens-chave

- **João Romão**: o dono do cortiço, movido pela ambição — acumula riqueza explorando os moradores
- **Bertoleza**: escrava que ajuda João Romão e é por ele traída
- **Rita Baiana**: mulata sensual que representa a "influência do meio tropical"
- **Jerônimo**: português honesto que, ao chegar ao cortiço, "abrasileira-se" — perde sua disciplina europeia sob influência do meio

### Trecho representativo

*"E naquela terra encharcada e fumegante, naquela umidade quente e lodosa, começou a minhocar, a esfervilhar, a crescer, um mundo, uma coisa viva, uma geração..."*

→ O cortiço é descrito como um **organismo vivo** — nasce, cresce, fervilha. As pessoas são parte desse organismo, não indivíduos autônomos. Essa é a essência do olhar naturalista.

## Realismo × Naturalismo: diferenças decisivas

| Aspecto | Realismo | Naturalismo |
|---------|---------|-------------|
| Foco | Psicologia individual | Influência do meio |
| Personagens | Burguesia, elite | Classes baixas, marginalizados |
| Cenário | Salões, casas | Cortiços, ambientes degradados |
| Abordagem | Análise sutil, irônica | Descrição crua, científica |
| Autor principal | Machado de Assis | Aluísio Azevedo |
| Obra-chave | *Memórias Póstumas* | *O Cortiço* |

> 💡 Na prova: se há personagem moldado pelo ambiente social, linguagem crua e cenário degradante → **Naturalismo**. Se há ironia, análise psicológica e crítica à burguesia → **Realismo**.`,
            tipo: 'texto',
          },
          {
            titulo: 'Modernismo — 1ª Fase (1922-1930)',
            corpo: `A 1ª fase do Modernismo é a fase da **ruptura**. O objetivo era demolir os padrões acadêmicos da arte brasileira e construir uma identidade cultural autenticamente nacional.

## A Semana de Arte Moderna (1922)

Realizada nos dias **13, 15 e 17 de fevereiro de 1922** no Teatro Municipal de São Paulo, a Semana reuniu artistas plásticos, músicos e escritores que propunham uma revolução estética.

### O que propunham

- **Contra** o academicismo, a linguagem rebuscada, a imitação europeia
- **A favor** da linguagem coloquial brasileira, da liberdade formal, do humor, da experimentação

### Participantes notáveis

- **Mário de Andrade**: leu trechos de *Pauliceia Desvairada* e foi vaiado
- **Oswald de Andrade**: provocador, defensor radical da ruptura
- **Anita Malfatti**: pintora cujas obras expressionistas causaram escândalo
- **Heitor Villa-Lobos**: compositor que misturava música erudita com sons brasileiros

## Características da 1ª fase

- **Linguagem coloquial**: rejeição do português "castiço" e abraço da fala brasileira real
- **Humor e irreverência**: paródia, piada, provocação ao leitor conservador
- **Nacionalismo crítico**: valorização do Brasil, mas sem ufanismo — com olhar irônico
- **Verso livre**: abandono da métrica fixa e das rimas obrigatórias
- **Antropofagia cultural**: "devorar" influências estrangeiras e transformá-las em algo brasileiro

## Os grandes nomes

### Oswald de Andrade (1890-1954)

Provocador e irreverente. Escreveu o **Manifesto Antropófago** (1928): a ideia de que a cultura brasileira deveria "devorar" as influências estrangeiras e transformá-las, assim como os índios tupinambás devoravam seus inimigos para absorver suas qualidades.

**Poema representativo — "Pronominais":**
*"Dê-me um cigarro / Diz a gramática / Do professor e do aluno / E do mulato sabido / Mas o bom negro e o bom branco / Da Nação Brasileira / Dizem todos os dias / Deixa disso camarada / Me dá um cigarro."*

→ Oswald opõe a gramática normativa ("Dê-me") à fala real do brasileiro ("Me dá"). O poema é uma defesa da linguagem coloquial como expressão legítima.

### Mário de Andrade (1893-1945)

Mais reflexivo que Oswald, Mário combinou experimentação formal com pesquisa cultural profunda. Sua obra-prima é **Macunaíma** (1928) — uma rapsódia que mistura lendas indígenas, folclore, linguagem oral e ironia para criar um "herói sem nenhum caráter" que representa o povo brasileiro.

### Manuel Bandeira (1886-1968)

Poeta da **simplicidade lírica**. Transformou o cotidiano em poesia com linguagem acessível e profundamente humana.

**Poema representativo — "Poema tirado de uma notícia de jornal":**
*"João Gostoso era carregador de feira livre e morava no morro da Babilônia num barracão sem número / Uma noite ele chegou no bar Vinte de Novembro / Bebeu / Cantou / Dançou / Depois se atirou na lagoa Rodrigo de Freitas e morreu afogado."*

→ A linguagem é jornalística, seca, sem adjetivos — mas a sequência "bebeu, cantou, dançou, depois morreu" cria um impacto devastador pela simplicidade.

> 💡 Na prova: linguagem coloquial + humor + brasilidade + ruptura formal = **Modernismo 1ª fase**.`,
            tipo: 'texto',
          },
          {
            titulo: 'Modernismo — 2ª Fase (1930-1945)',
            corpo: `A 2ª fase do Modernismo é chamada de **Geração de 30** ou fase da **consolidação**. A irreverência da 1ª fase dá lugar a uma literatura de **compromisso social**, marcada pelo romance regionalista e pela denúncia das desigualdades brasileiras.

## Contexto histórico

- **Revolução de 1930**: Getúlio Vargas chega ao poder
- **Estado Novo** (1937-1945): ditadura varguista
- **Crise de 1929**: impacto econômico global
- **Ascensão do fascismo e nazismo** na Europa
- No Brasil: miséria no Nordeste, êxodo rural, tensões sociais

## Características da 2ª fase

### Na prosa (Romance de 30)

- **Regionalismo**: retrato das diferentes regiões do Brasil, especialmente o Nordeste
- **Denúncia social**: miséria, seca, exploração dos trabalhadores rurais
- **Linguagem enxuta**: frases curtas, diretas, sem ornamentos
- **Personagens reais**: retirantes, vaqueiros, trabalhadores braçais — não mais heróis idealizados
- **Compromisso político**: a literatura como instrumento de transformação social

### Na poesia

- **Lirismo social**: poesia que fala do coletivo, não apenas do "eu"
- **Carlos Drummond de Andrade**: poeta maior da 2ª fase, transita entre o lírico e o social
- **Vinícius de Moraes**: do lirismo existencial ao popular (Bossa Nova)

## Os grandes prosadores

### Graciliano Ramos (1892-1953)

O maior prosador da 2ª fase. Sua linguagem é **seca como o sertão** que retrata — nenhuma palavra a mais, nenhuma emoção exagerada.

**Vidas Secas** (1938) — obra-prima do romance de 30:
- Narra a saga de **Fabiano**, retirante nordestino, com sua família e a cachorra Baleia
- Estrutura em capítulos quase independentes
- Linguagem mínima: os personagens mal conseguem se expressar verbalmente — a narrativa mostra a **desumanização** causada pela miséria
- A cachorra Baleia "pensa" mais articuladamente que seus donos — ironia cruel do destino

**Trecho representativo:**
*"Fabiano, uma coisa da fazenda, um traste, seria despedido quando menos esperasse. Tinha ali aquele canto, e era bom demais para ele."*

→ Linguagem seca, enxuta. Fabiano não é tratado como pessoa — é "uma coisa", "um traste". A desumanização é expressa pela própria sintaxe.

### Rachel de Queiroz (1910-2003)

Primeira mulher a ingressar na Academia Brasileira de Letras. **O Quinze** (1930) retrata a grande seca de 1915 no Ceará e o êxodo dos retirantes.

### Jorge Amado (1912-2001)

Baiano, retratou o povo da Bahia com vigor e simpatia. Obras como **Capitães da Areia** (1937) denunciam a vida de meninos de rua em Salvador. Na fase madura, romances como **Gabriela, Cravo e Canela** combinam crítica social com humor popular.

### José Lins do Rego (1901-1957)

Autor do **Ciclo da cana-de-açúcar**, série de romances que retrata a decadência dos engenhos nordestinos. Obra principal: **Menino de Engenho** (1932).

## Na poesia: Carlos Drummond de Andrade

Drummond é considerado o **maior poeta brasileiro do século XX**. Sua obra percorre do humor mineiro à angústia existencial, da crítica social à reflexão metalinguística.

**Poema representativo — trecho de "José":**
*"E agora, José? / A festa acabou, / a luz apagou, / o povo sumiu, / a noite esfriou, / e agora, José?"*

→ O poema dialoga com o "homem comum" que enfrenta o vazio e a desesperança. É poesia social e existencial ao mesmo tempo.

> 💡 Na prova: romance com sertão, seca, miséria, linguagem enxuta = **Modernismo 2ª fase (Romance de 30)**.`,
            tipo: 'texto',
          },
          {
            titulo: 'Modernismo — 3ª Fase (1945-1960+)',
            corpo: `A 3ª fase do Modernismo, também chamada **Geração de 45**, representa a fase da **maturidade** da literatura brasileira. Mantém as conquistas das fases anteriores (linguagem brasileira, liberdade formal), mas mergulha em experimentação mais profunda, tanto na forma quanto no conteúdo.

## Características da 3ª fase

- **Experimentação formal**: romances com estruturas inovadoras, linguagem reinventada
- **Intimismo e introspecção**: foco na vida interior dos personagens
- **Universalidade**: temas que transcendem o regional — a condição humana em si
- **Linguagem renovada**: neologismos, fluxo de consciência, prosa poética
- **Regionalismo universal**: o particular se torna universal (o sertão de Rosa é o mundo)

## Os dois gigantes

### Guimarães Rosa (1908-1967)

**João Guimarães Rosa** revolucionou a prosa brasileira reinventando a própria linguagem. Criou palavras, fundiu erudito com popular, transformou a fala do sertanejo em literatura universal.

**Grande Sertão: Veredas** (1956):
- Romance monumental narrado por **Riobaldo**, ex-jagunço que conta sua vida a um interlocutor silencioso
- Temas: o bem e o mal, a existência do diabo, o amor proibido (Diadorim), a violência do sertão
- Linguagem: mistura de arcaísmos, neologismos e fala sertaneja — cria um idioma próprio

**Trecho representativo:**
*"O sertão é do tamanho do mundo."*

→ Em uma frase, Rosa transforma o particular (sertão) em universal (mundo). O sertão não é apenas uma região geográfica — é metáfora da condição humana.

*"Viver é muito perigoso."* (frase recorrente no romance)

→ Filosofia existencial na voz simples de um sertanejo.

### Clarice Lispector (1920-1977)

**Clarice Lispector** mergulhou na **vida interior** dos personagens como ninguém antes na literatura brasileira. Seus textos exploram epifanias — momentos de revelação interior provocados por situações cotidianas.

**A Hora da Estrela** (1977):
- Narra a história de **Macabéa**, nordestina miserável no Rio de Janeiro
- O narrador (Rodrigo S.M.) problematiza o próprio ato de narrar — é metaliteratura
- Macabéa existe à margem: não sabe que é infeliz, não sabe que é ignorante

**Trecho representativo:**
*"Ela era incompetente para a vida. Faltava-lhe o jeito de se ajeitar."*

→ Linguagem aparentemente simples, mas com profundidade filosófica. A "incompetência para a vida" é ao mesmo tempo social (pobreza, exclusão) e existencial (incapacidade de compreender o próprio estar no mundo).

## Poesia da 3ª fase

### João Cabral de Melo Neto (1920-1999)

Poeta da **contenção e da precisão**. Rejeita o sentimentalismo e constrói poemas como um engenheiro constrói pontes — com cálculo, economia e funcionalidade.

**Morte e Vida Severina** (1955):
- Auto de Natal que narra a jornada de um retirante nordestino, Severino, do sertão ao litoral
- Cada parada revela uma faceta da miséria — mas o poema termina com um nascimento, afirmando a vida

**Trecho representativo:**
*"E se somos Severinos / iguais em tudo na vida, / morremos de morte igual, / mesma morte severina."*

→ "Severino" deixa de ser nome próprio e vira adjetivo — "vida severina", "morte severina". A identidade individual se dissolve na miséria coletiva.

> 💡 Na prova: se o trecho apresenta linguagem experimental, neologismos ou introspecção profunda → **Modernismo 3ª fase**. Rosa = sertão reinventado. Clarice = epifania interior.`,
            tipo: 'texto',
          },
          {
            titulo: 'Quadro Comparativo das Escolas Literárias',
            corpo: `Este quadro reúne as informações essenciais para resolução rápida de questões.

## Comparação geral

| Escola | Período | Palavra-chave | Autor principal | Obra-chave |
|--------|---------|--------------|-----------------|------------|
| **Realismo** | 1881-1893 | Psicologia | Machado de Assis | *Memórias Póstumas de Brás Cubas* |
| **Naturalismo** | 1881-1893 | Determinismo | Aluísio Azevedo | *O Cortiço* |
| **Modernismo 1ª** | 1922-1930 | Ruptura | Oswald de Andrade | *Pau Brasil*, Manifesto Antropófago |
| **Modernismo 2ª** | 1930-1945 | Denúncia social | Graciliano Ramos | *Vidas Secas* |
| **Modernismo 3ª** | 1945-1960+ | Experimentação | Guimarães Rosa | *Grande Sertão: Veredas* |

## Comparação detalhada: Realismo × Naturalismo

| Critério | Realismo | Naturalismo |
|----------|---------|-------------|
| O que analisa? | A mente humana | O meio social/biológico |
| Como vê o ser humano? | Complexo, contraditório | Determinado por forças externas |
| Que classe retrata? | Burguesia, elite | Classes populares, marginalizados |
| Tom narrativo | Irônico, elegante | Cru, descritivo, "científico" |

## Comparação detalhada: 3 fases do Modernismo

| Critério | 1ª Fase | 2ª Fase | 3ª Fase |
|----------|---------|---------|---------|
| Objetivo | Destruir o velho | Construir o novo | Aprofundar |
| Tom | Irreverente, debochado | Sério, engajado | Experimental, filosófico |
| Gênero forte | Poesia, manifesto | Romance | Prosa e poesia |
| Cenário | Urbano (SP) | Rural (Nordeste) | Universal |
| Linguagem | Coloquial, telegráfica | Enxuta, direta | Renovada, inventiva |

## Associações rápidas para a prova

| Se o trecho tem... | Pense em... |
|---------------------|------------|
| Ironia fina + análise psicológica | Machado de Assis → Realismo |
| Ambiente degradado + determinismo | Aluísio Azevedo → Naturalismo |
| Linguagem coloquial + humor + brasilidade | Oswald/Mário → Modernismo 1ª |
| Seca + miséria + linguagem enxuta | Graciliano Ramos → Modernismo 2ª |
| Linguagem inventiva + sertão filosófico | Guimarães Rosa → Modernismo 3ª |
| Introspecção + epifania + fluxo de consciência | Clarice Lispector → Modernismo 3ª |

> 💡 Decore esta tabela. Com ela, você resolve 90% das questões de literatura do vestibular.`,
            tipo: 'tabela',
          },
          {
            titulo: 'Como Resolver Questões de Literatura na Prova',
            corpo: `Questões de literatura seguem padrões previsíveis. Conhecer esses padrões economiza tempo e aumenta a assertividade.

## Formato 1: Trecho + "De qual escola literária é este trecho?"

**Método:**
1. Leia o trecho e identifique **marcas estilísticas** (ironia? linguagem crua? coloquialismo? experimentação?)
2. Consulte mentalmente o quadro de associações
3. Elimine as alternativas incompatíveis

**Exemplo prático:**

*"Marcela amou-me durante quinze meses e onze contos de réis."*

- Marcas: ironia, medição do amor em dinheiro, análise sutil do comportamento humano
- Associação: ironia fina → Machado de Assis → **Realismo**

## Formato 2: "Por que esta obra pertence a tal escola?"

**Método:**
1. Identifique as **características da escola** mencionada
2. Verifique qual alternativa apresenta características **corretas** daquela escola
3. Cuidado com alternativas que misturam características de escolas diferentes

**Exemplo prático:**

"O Cortiço pertence ao Naturalismo porque..."

- Naturalismo = determinismo + influência do meio + linguagem crua
- Resposta: "Retrata personagens determinados pelo meio social e biológico"
- Alternativa errada: "Apresenta análise psicológica profunda" (isso é Realismo)

## Formato 3: "Assinale a associação INCORRETA"

**Método:**
1. Verifique cada par autor-escola
2. Um deles estará errado — o mais comum é colocar um modernista em escola anterior (ou vice-versa)

**Armadilhas clássicas:**
- Manuel Bandeira → atribuído ao Naturalismo (é Modernismo 1ª fase)
- Machado de Assis → atribuído ao Romantismo (é Realismo)
- Guimarães Rosa → atribuído ao Modernismo 1ª fase (é 3ª fase)

## Erros fatais em questões de literatura

1. **Confundir Realismo com Naturalismo**: lembre-se — Realismo = psicologia; Naturalismo = determinismo
2. **Atribuir Machado ao Romantismo**: Machado teve uma fase romântica, mas suas obras principais são **realistas**
3. **Achar que Modernismo é tudo igual**: as 3 fases são muito diferentes entre si
4. **Esquecer a 3ª fase**: Guimarães Rosa e Clarice Lispector são modernistas, não "contemporâneos"

> ⚠️ Quando em dúvida entre duas escolas, pergunte-se: "Qual é a intenção do autor — analisar a mente humana (Realismo), mostrar o poder do meio (Naturalismo), romper com tradições (Mod. 1ª), denunciar injustiças (Mod. 2ª) ou experimentar com a linguagem (Mod. 3ª)?"`,
            tipo: 'importante',
          },
        ],
        imagemDescricao: 'Linha do tempo das escolas literárias brasileiras com autores e obras representativas',
        formulasChave: [
          'Realismo = objetividade + crítica social + Machado de Assis',
          'Naturalismo = determinismo + influência do meio + Aluísio Azevedo',
          'Modernismo 1ª fase = ruptura + Semana de 22 + Oswald/Mário de Andrade',
          'Modernismo 2ª fase = regionalismo + denúncia social + Graciliano Ramos',
          'Realismo analisa a psicologia; Naturalismo analisa o meio/biologia',
        ],
        dicasProva: [
          'Se o texto menciona análise psicológica e ironia fina, pense em Machado de Assis (Realismo).',
          'Se há determinismo (personagem moldado pelo meio), é Naturalismo.',
          'Linguagem coloquial + humor + brasilidade = Modernismo 1ª fase.',
          'Romance com sertão, seca e miséria = Modernismo 2ª fase (romance de 30).',
          'Sempre associe: escola → características → autor → obra principal.',
        ],
        errosComuns: [
          'Confundir Realismo com Naturalismo: Realismo foca na psicologia; Naturalismo, no determinismo biológico/social.',
          'Atribuir Machado de Assis ao Romantismo (ele é da fase realista).',
          'Achar que Modernismo é só "arte moderna" — a 2ª fase é profundamente social e regionalista.',
          'Esquecer que a Semana de 22 é o marco da 1ª fase, não de todo o Modernismo.',
          'Confundir autores: Graciliano Ramos é 2ª fase, Oswald de Andrade é 1ª fase.',
        ],
        exercicios: [
          {
            id: 'port-lit-1',
            enunciado: '"Marcela amou-me durante quinze meses e onze contos de réis." (Machado de Assis). Esse trecho é representativo de qual escola literária?',
            alternativas: [
              'Romantismo',
              'Naturalismo',
              'Realismo',
              'Modernismo — 1ª fase',
              'Modernismo — 2ª fase',
            ],
            respostaCorreta: 2,
            explicacao: 'O trecho é de Memórias Póstumas de Brás Cubas, de Machado de Assis — principal autor do Realismo brasileiro. A ironia fina ao equiparar amor e dinheiro é marca registrada do olhar crítico e psicológico realista.',
            dificuldade: 'facil',
          },
          {
            id: 'port-lit-2',
            enunciado: 'O romance "O Cortiço", de Aluísio Azevedo, é representativo do Naturalismo porque:',
            alternativas: [
              'Exalta os sentimentos e a idealização amorosa.',
              'Apresenta análise psicológica profunda dos personagens da elite.',
              'Retrata personagens determinados pelo meio social e biológico.',
              'Utiliza linguagem coloquial e humor como forma de ruptura.',
              'Denuncia a seca nordestina com enfoque regionalista.',
            ],
            respostaCorreta: 2,
            explicacao: 'O Naturalismo tem como pilar o determinismo: os personagens são moldados pelo meio, pela raça e pelo momento histórico. Em "O Cortiço", o ambiente insalubre determina o comportamento dos moradores — marca central do movimento.',
            dificuldade: 'medio',
          },
          {
            id: 'port-lit-3',
            enunciado: 'A Semana de Arte Moderna de 1922 é considerada o marco inicial de qual período literário?',
            alternativas: [
              'Parnasianismo',
              'Simbolismo',
              'Pré-Modernismo',
              'Modernismo — 1ª fase',
              'Modernismo — 2ª fase',
            ],
            respostaCorreta: 3,
            explicacao: 'A Semana de Arte Moderna de 1922, realizada em São Paulo, inaugurou o Modernismo brasileiro (1ª fase). O evento propôs a ruptura com o academicismo, valorizando a identidade nacional, a linguagem coloquial e a experimentação artística.',
            dificuldade: 'facil',
          },
          {
            id: 'port-lit-4',
            enunciado: '"Vidas Secas", de Graciliano Ramos, pertence a qual fase do Modernismo e por quê?',
            alternativas: [
              '1ª fase — pela linguagem coloquial e humor.',
              '2ª fase — pela denúncia social e enfoque regionalista.',
              '3ª fase — pela experimentação formal e intimismo.',
              '1ª fase — pela ruptura com a tradição acadêmica.',
              '2ª fase — pelo uso de versos livres e linguagem telegráfica.',
            ],
            respostaCorreta: 1,
            explicacao: '"Vidas Secas" é obra central do Modernismo 2ª fase (Romance de 30). Graciliano Ramos retrata a miséria do sertão nordestino com linguagem seca e enxuta, denunciando a desigualdade social — características típicas do regionalismo da 2ª geração modernista.',
            dificuldade: 'medio',
          },
          {
            id: 'port-lit-5',
            enunciado: 'Assinale a associação INCORRETA entre autor e escola literária:',
            alternativas: [
              'Machado de Assis — Realismo',
              'Aluísio Azevedo — Naturalismo',
              'Oswald de Andrade — Modernismo 1ª fase',
              'Graciliano Ramos — Modernismo 2ª fase',
              'Manuel Bandeira — Naturalismo',
            ],
            respostaCorreta: 4,
            explicacao: 'Manuel Bandeira é poeta do Modernismo (1ª fase), não do Naturalismo. Participou da Semana de 22 e é conhecido por poemas com linguagem simples e cotidiana. As demais associações estão corretas.',
            dificuldade: 'dificil',
          },
        ],
      },
    },
  ],
};
