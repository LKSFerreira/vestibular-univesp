import type { Disciplina } from './tipos';

export const disciplinaIngles: Disciplina = {
  id: 'ingles',
  titulo: 'Inglês',
  icone: '🌍',
  topicos: [
    {
      id: 'interpretacao-textos-artigos',
      titulo: 'Interpretação de Textos e Artigos',
      peso: 60,
      conteudo: {
        resumo: 'Compreensão de textos em inglês com foco em artigos, notícias e textos acadêmicos.',
        explicacao:
          'A prova de inglês da UNIVESP é focada em interpretação. Não é necessário traduzir palavra por palavra — o objetivo é captar o sentido geral (skimming) e localizar informações específicas (scanning).\n\nEstratégia:\n1. Leia o título e o primeiro parágrafo para entender o tema\n2. Identifique cognatos (palavras parecidas com o português)\n3. Use o contexto para inferir o significado de palavras desconhecidas\n4. Preste atenção em conectivos (however, therefore, although)',
        secoes: [
          {
            titulo: 'Introdução à Interpretação de Textos em Inglês',
            tipo: 'texto',
            corpo: `A interpretação de textos em inglês é a competência **mais cobrada** na prova de Inglês do vestibular UNIVESP, representando cerca de **60% das questões**. A boa notícia é que **você não precisa ser fluente em inglês** para se sair bem — a prova avalia sua capacidade de compreender o sentido geral do texto e localizar informações específicas.

Os textos utilizados nas provas geralmente são:

- **Artigos de opinião** sobre temas atuais (meio ambiente, tecnologia, educação)
- **Notícias** de veículos internacionais
- **Trechos acadêmicos** de áreas como ciência e sociedade
- **Infográficos e tabelas** com dados em inglês

O segredo para uma boa interpretação não está em traduzir cada palavra, mas em dominar **estratégias de leitura** que permitem extrair o máximo de informação com o mínimo de vocabulário.`,
          },
          {
            titulo: 'Skimming e Scanning — Duas Estratégias Essenciais',
            tipo: 'destaque',
            corpo: `## Skimming (Leitura Superficial)

**Objetivo:** Captar o tema geral e a ideia principal do texto.

**Como fazer:**

1. Leia o **título** e o **subtítulo** — eles revelam o assunto
2. Leia a **primeira frase de cada parágrafo** (*topic sentence*)
3. Observe **palavras em negrito, itálico ou entre aspas**
4. Leia o **último parágrafo** — geralmente contém a conclusão

**Quando usar:** Ao ler o texto pela primeira vez, antes de olhar as questões.

## Scanning (Leitura Direcionada)

**Objetivo:** Localizar uma informação específica no texto.

**Como fazer:**

1. Leia a **pergunta** e identifique a **palavra-chave**
2. **Passe os olhos** pelo texto buscando essa palavra ou um sinônimo
3. Ao encontrar, leia o **trecho completo** ao redor

**Quando usar:** Quando a questão pede dados específicos (nomes, datas, números, citações).

> **Dica UNIVESP:** Na prova, leia PRIMEIRO as questões e DEPOIS o texto. Assim, você sabe o que procurar e economiza tempo.`,
          },
          {
            titulo: 'Cognatos — Seus Aliados na Leitura',
            tipo: 'texto',
            corpo: `Cognatos são palavras em inglês que se parecem com palavras em português e têm o **mesmo significado**. Eles existem porque ambas as línguas têm raízes comuns no latim.

**Por que cognatos são importantes?** Em um texto médio em inglês, cerca de **30% a 40% das palavras** são cognatos do português. Isso significa que, mesmo sem estudar vocabulário, você já entende boa parte do texto!

**Exemplos de cognatos frequentes em provas:**

| Inglês | Português |
|--------|-----------|
| education | educação |
| important | importante |
| population | população |
| economy | economia |
| technology | tecnologia |
| university | universidade |
| information | informação |
| culture | cultura |
| natural | natural |
| problem | problema |
| different | diferente |
| president | presidente |
| hospital | hospital |
| opportunity | oportunidade |
| tradition | tradição |
| significant | significativo |
| consequence | consequência |
| environment | meio ambiente |
| international | internacional |
| communication | comunicação |

> **Regra prática:** Palavras terminadas em **-tion** em inglês geralmente correspondem a **-ção** em português (*nation* = nação, *education* = educação, *information* = informação). Palavras em **-ty** geralmente correspondem a **-dade** (*university* = universidade, *society* = sociedade).`,
          },
          {
            titulo: 'Falsos Cognatos — As Armadilhas do Vestibular',
            tipo: 'tabela',
            corpo: `Falsos cognatos (ou *false friends*) são palavras que se **parecem** com o português, mas têm **significado diferente**. São as armadilhas favoritas das bancas de vestibular — memorize pelo menos os 10 mais comuns.

| Falso Cognato | Parece significar | Significado real | Correto em inglês |
|---------------|-------------------|------------------|-------------------|
| actually | atualmente | na verdade | currently |
| pretend | pretender | fingir | intend |
| library | livraria | biblioteca | bookstore |
| sensible | sensível | sensato | sensitive |
| fabric | fábrica | tecido | factory |
| push | puxar | empurrar | pull |
| college | colégio | faculdade | school |
| lunch | lanche | almoço | snack |
| eventually | eventualmente | finalmente | possibly / occasionally |
| parents | parentes | pais (mãe e pai) | relatives |
| mayor | maior | prefeito | bigger / larger |
| attend | atender | participar, assistir | answer / serve |
| realize | realizar | perceber | accomplish |
| novel | novela | romance (livro) | soap opera |
| resume | resumir | retomar / currículo | summarize |
| costume | costume | fantasia, traje | habit / custom |
| commodity | comodidade | mercadoria | comfort / convenience |
| legend | legenda | lenda | subtitle / caption |
| ingenious | ingênuo | engenhoso | naive / innocent |
| comprehensive | compreensivo | abrangente | understanding |
| particular | particular (privado) | específico | private |
| journal | jornal | diário, periódico | newspaper |
| balcony | balcão | sacada, varanda | counter |
| intend | entender | pretender, tencionar | understand |
| data | data | dados, informações | date |

> **Importante:** Os falsos cognatos mais cobrados em provas são: *actually, pretend, library, sensible, eventually, attend, realize, parents, fabric* e *push*. Faça flashcards com eles!`,
          },
          {
            titulo: 'Exemplo Prático 1 — Artigo sobre Educação',
            tipo: 'exemplo',
            corpo: `Leia o texto abaixo e acompanhe a análise:

> *"Digital technology has transformed education in recent years. Many universities now offer online courses, allowing students from remote areas to access quality education. **However**, critics argue that virtual learning cannot fully replace the traditional classroom experience, as face-to-face interaction is essential for developing social skills."*

**Análise passo a passo:**

1. **Título/Tema:** Tecnologia digital na educação (palavras-chave: *digital technology*, *education*)
2. **Cognatos identificados:** *digital, technology, transformed, education, universities, online, courses, students, remote, access, quality, critics, virtual, traditional, experience, interaction, essential, social*
3. **Conectivo-chave:** ***However*** (= porém) — indica que a segunda parte **contrasta** com a primeira
4. **Estrutura lógica:** Tecnologia transformou a educação (ponto positivo) → **MAS** → há críticas sobre falta de interação presencial (contraponto)

**Possível questão:** *"According to the text, what is the main concern about online education?"*
**Resposta:** A falta de interação presencial (*face-to-face interaction*) para desenvolver habilidades sociais (*social skills*).

> Perceba que, mesmo sem saber todas as palavras, os **cognatos** e o **conectivo "However"** já revelam a estrutura do argumento.`,
          },
          {
            titulo: 'Exemplo Prático 2 — Notícia sobre Meio Ambiente',
            tipo: 'exemplo',
            corpo: `> *"A new study published in the journal Nature reveals that global temperatures have risen by 1.2°C since the pre-industrial era. Scientists warn that if emissions are not significantly reduced, the consequences could be catastrophic, including rising sea levels, extreme weather events, and loss of biodiversity."*

**Análise passo a passo:**

1. **Cognatos:** *study, published, journal, Nature, global, temperatures, pre-industrial, era, scientists, emissions, reduced, consequences, catastrophic, extreme, events, biodiversity*
2. **Dados específicos:** Aumento de **1,2°C** desde a era pré-industrial
3. **Estrutura:** Fato (estudo mostra aumento) → Alerta (se emissões não diminuírem) → Consequências (nível do mar, clima extremo, perda de biodiversidade)
4. **Palavra condicional:** ***if*** (se) — indica uma **condição** para as consequências

**Possível questão:** *"The text suggests that catastrophic consequences…"*
**Resposta:** …podem ser evitadas **se as emissões forem significativamente reduzidas** (*if emissions are not significantly reduced*).

> **Atenção:** Note como a palavra *"if"* é crucial — ela transforma a frase de certeza em **possibilidade condicional**. A banca adora testar se você percebeu essa nuance.`,
          },
          {
            titulo: 'Exemplo Prático 3 — Trecho Acadêmico',
            tipo: 'exemplo',
            corpo: `> *"Research conducted by Harvard University indicates that regular physical exercise not only improves cardiovascular health but also enhances cognitive function. **Furthermore**, participants who exercised at least three times a week reported lower levels of stress and anxiety."*

**Análise passo a passo:**

1. **Cognatos:** *research, conducted, university, indicates, regular, physical, exercise, cardiovascular, cognitive, function, participants, stress, anxiety*
2. **Conectivos:** ***not only… but also*** (não apenas… mas também = **adição**); ***Furthermore*** (além disso = **adição**)
3. **Estrutura:** O texto apresenta benefícios do exercício em camadas: saúde cardiovascular + função cognitiva + redução de estresse
4. **Dados:** Pelo menos **3 vezes por semana**

**Possível questão:** *"According to the research, physical exercise…"*
**Resposta:** …melhora tanto a saúde cardiovascular quanto a função cognitiva, e também reduz estresse e ansiedade.

> Neste texto, **todos os conectivos são de adição** — o autor vai acumulando argumentos a favor do exercício. Quando não há contraste, a ideia principal geralmente é clara e direta.`,
          },
          {
            titulo: 'Método de Resolução em 5 Passos',
            tipo: 'importante',
            corpo: `## Passo a Passo para Questões de Interpretação

1. **Leia as questões primeiro** — Saiba o que procurar antes de ler o texto
2. **Faça skimming** — Leia título, primeira frase de cada parágrafo e conclusão
3. **Identifique cognatos** — Sublinhe mentalmente as palavras parecidas com português
4. **Localize conectivos** — Eles revelam a estrutura lógica (contraste, causa, adição)
5. **Faça scanning para cada questão** — Busque a informação específica no trecho relevante

## Cuidados Essenciais

- **Não extrapole o texto:** A resposta correta está **SEMPRE** baseada no que o texto diz, não no seu conhecimento prévio
- **Cuidado com palavras absolutas:** Alternativas com *all, never, always, only* geralmente estão incorretas — textos raramente fazem afirmações absolutas
- **Atenção à paráfrase:** A alternativa correta frequentemente **reformula** a ideia do texto com sinônimos — não busque as mesmas palavras, busque o **mesmo sentido**
- **Elimine alternativas:** Se não tiver certeza, elimine as claramente erradas e escolha entre as restantes
- **Releia o trecho:** Antes de marcar, volte ao texto e confirme que a informação realmente está lá

> **Resumo:** Cognatos dão o vocabulário. Conectivos dão a estrutura. Skimming dá o tema. Scanning dá a resposta. Use as quatro ferramentas juntas.`,
          },
        ],
        imagemDescricao: 'Exemplo de um artigo em inglês com destaques em cognatos e palavras-chave',
        dicasProva: [
          'Não traduza palavra por palavra — busque o sentido geral do parágrafo.',
          'Cognatos são seus aliados: "education", "important", "population" — parecem com o português.',
          'Leia o título e o primeiro parágrafo: geralmente revelam o tema central.',
          'Conectivos como "however" e "although" mudam a direção do argumento — fique atento.',
          'Se não souber uma palavra, leia a frase inteira e deduza pelo contexto.',
        ],
        errosComuns: [
          'Traduzir literalmente expressões idiomáticas (ex.: "break the ice" ≠ "quebrar o gelo" literal).',
          'Cair em falsos cognatos: "actually" = na verdade (não "atualmente"), "pretend" = fingir (não "pretender").',
          'Ignorar o tempo verbal, que pode mudar o sentido da resposta.',
          'Não perceber negações duplas ou palavras negativas sutis (hardly, barely, seldom).',
          'Escolher alternativas que extrapolam o texto original em inglês.',
        ],
        exercicios: [
          {
            id: 'ing-interp-1',
            enunciado: 'Read the excerpt: "Climate change is arguably the most pressing issue of our time. However, many governments have been slow to take decisive action." The word "However" indicates:',
            alternativas: [
              'An addition to the previous idea.',
              'A contrast or opposition to the previous idea.',
              'A consequence of the previous statement.',
              'An explanation of the previous statement.',
              'A temporal sequence of events.',
            ],
            respostaCorreta: 1,
            explicacao: '"However" é um conectivo adversativo em inglês, equivalente a "no entanto/porém". Ele introduz uma ideia que se opõe à anterior: mudança climática é urgente, MAS os governos demoram a agir.',
            dificuldade: 'facil',
          },
          {
            id: 'ing-interp-2',
            enunciado: 'Read: "The study found that students who slept at least 8 hours performed significantly better on exams than those who slept less than 6 hours." According to the text:',
            alternativas: [
              'All students who sleep well get good grades.',
              'Sleeping less than 6 hours has no impact on performance.',
              'There is a positive correlation between sleep duration and exam performance.',
              'The study recommends exactly 8 hours of sleep.',
              'Students who sleep 6 hours perform the same as those who sleep 8.',
            ],
            respostaCorreta: 2,
            explicacao: 'O texto afirma que alunos com 8+ horas de sono tiveram desempenho "significativamente melhor" que os com menos de 6 horas. Isso indica correlação positiva entre sono e desempenho. As demais alternativas generalizam ou distorcem a informação.',
            dificuldade: 'medio',
          },
          {
            id: 'ing-interp-3',
            enunciado: 'In the sentence "The company decided to lay off 500 employees due to the economic downturn", the expression "lay off" means:',
            alternativas: [
              'To hire new workers.',
              'To promote employees.',
              'To dismiss or fire workers.',
              'To give employees a vacation.',
              'To train employees for new positions.',
            ],
            respostaCorreta: 2,
            explicacao: '"Lay off" é um phrasal verb que significa "demitir/dispensar". O contexto ajuda: "due to the economic downturn" (devido à crise econômica) indica uma ação negativa, compatível com demissão.',
            dificuldade: 'medio',
          },
          {
            id: 'ing-interp-4',
            enunciado: 'Read: "Although renewable energy sources are becoming cheaper, fossil fuels still account for over 80% of global energy consumption." The main idea of this sentence is:',
            alternativas: [
              'Renewable energy has replaced fossil fuels.',
              'Fossil fuels are no longer used worldwide.',
              'Despite progress in renewables, fossil fuels still dominate.',
              'Renewable energy is more expensive than fossil fuels.',
              'Global energy consumption is decreasing.',
            ],
            respostaCorreta: 2,
            explicacao: '"Although" introduz uma concessão: energias renováveis ficam mais baratas (concessão), MAS combustíveis fósseis ainda representam 80%+ do consumo (ideia principal). A resposta correta captura esse contraste.',
            dificuldade: 'medio',
          },
          {
            id: 'ing-interp-5',
            enunciado: 'The headline reads: "Scientists Warn: Biodiversity Loss Could Be Irreversible". The word "irreversible" most likely means:',
            alternativas: [
              'Something that can be easily fixed.',
              'Something that changes frequently.',
              'Something that cannot be undone.',
              'Something that is not important.',
              'Something that happens slowly.',
            ],
            respostaCorreta: 2,
            explicacao: '"Irreversible" é cognato de "irreversível" em português. O prefixo "ir-" indica negação, e "reversible" = reversível. Logo, "irreversible" = que não pode ser revertido/desfeito. O contexto de alerta ("warn") reforça a gravidade.',
            dificuldade: 'facil',
          },
        ],
      },
    },
    {
      id: 'coesao-referencia',
      titulo: 'Coesão e Referência',
      peso: 25,
      conteudo: {
        resumo: 'Pronomes de referência (it, they, this, that, which) e conectivos (however, therefore, although, moreover) em textos em inglês.',
        explicacao:
          'Questões de coesão e referência pedem que você identifique a que termo um pronome se refere ou qual relação um conectivo estabelece no texto.\n\n**Pronomes de Referência:**\n• it — substitui um substantivo singular ou uma ideia anterior\n• they — substitui um substantivo plural\n• this/that — refere-se a uma ideia, frase ou situação mencionada\n• which — introduz oração relativa, referindo-se ao termo anterior\n• one/ones — substitui substantivo para evitar repetição\n\n**Como identificar a referência:**\n1. Localize o pronome no texto\n2. Volte na frase anterior e busque o substantivo que faz sentido\n3. Substitua mentalmente o pronome pelo substantivo e releia\n\n**Conectivos de coesão:**\n• However / Nevertheless / On the other hand → oposição (= porém)\n• Therefore / Thus / Consequently → consequência (= portanto)\n• Although / Even though / Despite → concessão (= embora)\n• Moreover / Furthermore / In addition → adição (= além disso)\n• Because / Since / Due to → causa (= porque)\n\nDica: conectivos são pistas valiosas para entender a lógica do texto sem traduzir tudo.',
        secoes: [
          {
            titulo: 'O Que é Coesão Textual em Inglês',
            tipo: 'texto',
            corpo: `Coesão textual é o conjunto de mecanismos linguísticos que **conectam** as partes de um texto, criando fluidez e evitando repetições desnecessárias. Em inglês, os dois principais mecanismos de coesão cobrados no vestibular UNIVESP são:

1. **Pronomes de referência** — substituem palavras já mencionadas, evitando repetição
2. **Conectivos / marcadores discursivos** — estabelecem relações lógicas entre frases e parágrafos

Questões sobre coesão geralmente seguem dois formatos:

- *"The pronoun **it/they/this** in line X refers to…"* → referência pronominal
- *"The connective **however/therefore** expresses a relationship of…"* → relação lógica

Dominar esses mecanismos é fundamental para entender como as ideias se conectam no texto, mesmo sem conhecer todo o vocabulário. É uma habilidade de **lógica textual**, não de tradução.`,
          },
          {
            titulo: 'Pronomes Pessoais (Personal Pronouns)',
            tipo: 'tabela',
            corpo: `Os pronomes pessoais substituem substantivos já mencionados. Existem duas formas: **sujeito** (*subject*) e **objeto** (*object*).

| Pessoa | Sujeito | Objeto | Tradução |
|--------|---------|--------|----------|
| 1ª sing. | I | me | eu / me, mim |
| 2ª sing./pl. | you | you | você(s) / te, lhe |
| 3ª sing. masc. | he | him | ele / o, lhe |
| 3ª sing. fem. | she | her | ela / a, lhe |
| 3ª sing. neutro | it | it | ele/ela (coisas/animais) |
| 1ª pl. | we | us | nós / nos |
| 3ª pl. | they | them | eles/elas / os, lhes |

**Exemplos de referência em contexto:**

- *"**The teacher** explained the lesson. **She** was very patient."* → **She** = the teacher
- *"I bought **the books**. I will read **them** tonight."* → **them** = the books
- *"**The company** increased profits. **It** is now the market leader."* → **It** = the company

> **Atenção:** O pronome **it** é o mais cobrado em provas. Ele pode se referir a um substantivo singular, a uma ideia inteira ou a uma situação mencionada anteriormente. Sempre volte ao texto para confirmar.`,
          },
          {
            titulo: 'Pronomes Possessivos (Possessive Pronouns & Adjectives)',
            tipo: 'tabela',
            corpo: `Existem duas formas: **adjetivos possessivos** (usados antes de substantivos) e **pronomes possessivos** (substituem o substantivo).

| Pessoa | Adjetivo Possessivo | Pronome Possessivo | Tradução |
|--------|--------------------|--------------------|----------|
| I | my | mine | meu(s), minha(s) |
| you | your | yours | seu(s), sua(s) |
| he | his | his | dele |
| she | her | hers | dela |
| it | its | — | dele/dela (coisas) |
| we | our | ours | nosso(s), nossa(s) |
| they | their | theirs | deles/delas |

**Exemplos:**

- *"**The university** announced **its** new campus."* → **its** = da universidade
- *"This is **my** book. That one is **yours**."* → **my** = meu; **yours** = seu
- *"**The students** submitted **their** projects."* → **their** = dos estudantes

> **Cuidado clássico:** Não confunda **its** (possessivo: *dele/dela* para coisas) com **it's** (contração de *it is*: "é" ou "está"). Essa é uma pegadinha frequente em provas!
>
> - *"The dog wagged **its** tail."* → possessivo (o rabo dele)
> - ***"It's** raining today."* → contração de *it is* (está chovendo)`,
          },
          {
            titulo: 'Pronomes Demonstrativos e Relativos',
            tipo: 'tabela',
            corpo: `## Pronomes Demonstrativos (*Demonstrative Pronouns*)

| Pronome | Uso | Tradução |
|---------|-----|----------|
| this | singular, próximo (ideia recém-mencionada) | isto, este(a) |
| that | singular, distante (ideia anterior) | aquilo, aquele(a) |
| these | plural, próximo | estes, estas |
| those | plural, distante | aqueles, aquelas |

**Em provas**, *this* e *that* frequentemente se referem a **uma ideia inteira**, não a uma palavra isolada:

- *"The government raised taxes. **This** caused widespread protests."* → **This** = o aumento de impostos (a ação inteira)
- *"She studied abroad for two years. **That** experience changed her life."* → **That** = a experiência de estudar no exterior

## Pronomes Relativos (*Relative Pronouns*)

| Pronome | Refere-se a | Exemplo |
|---------|------------|---------|
| who | pessoas (sujeito) | *The scientist **who** discovered…* |
| whom | pessoas (objeto) | *The person **whom** I met…* |
| which | coisas/animais | *The book **which** I read…* |
| that | pessoas ou coisas | *The idea **that** changed…* |
| whose | posse (de quem) | *The author **whose** book won…* |
| where | lugares | *The city **where** I was born…* |
| when | tempo | *The year **when** it happened…* |

> **Muito cobrado:** O pronome **which** pode se referir a **uma oração inteira**, não apenas a uma palavra:
> *"She passed the exam, **which** surprised everyone."* → **which** = o fato de ela ter passado no exame`,
          },
          {
            titulo: 'Pronomes Reflexivos (Reflexive Pronouns)',
            tipo: 'tabela',
            corpo: `Os pronomes reflexivos indicam que o sujeito **pratica e recebe** a ação (equivalente a "se" / "si mesmo" em português).

| Pessoa | Pronome Reflexivo | Tradução |
|--------|-------------------|----------|
| I | myself | eu mesmo(a) / me |
| you (sing.) | yourself | você mesmo(a) / se |
| he | himself | ele mesmo / se |
| she | herself | ela mesma / se |
| it | itself | si mesmo(a) |
| we | ourselves | nós mesmos(as) / nos |
| you (pl.) | yourselves | vocês mesmos(as) / se |
| they | themselves | eles/elas mesmos(as) / se |

**Exemplos em contexto:**

- *"She taught **herself** to play the piano."* → Ela ensinou **a si mesma** a tocar piano
- *"The machine turns **itself** off automatically."* → A máquina se desliga **sozinha**
- *"We need to prepare **ourselves** for the exam."* → Nós precisamos nos preparar para o exame

> **Na prova:** Pronomes reflexivos podem aparecer em questões de referência — identifique quem é o sujeito da ação, pois o reflexivo sempre se refere ao próprio sujeito da frase.`,
          },
          {
            titulo: 'Conectivos e Marcadores Discursivos — Tabela Completa',
            tipo: 'tabela',
            corpo: `Os conectivos (*linkers / discourse markers*) estabelecem **relações lógicas** entre frases e parágrafos. Dominar os conectivos é essencial para entender a estrutura de qualquer texto.

## Adição (= e, além disso, também)

| Conectivo | Tradução | Exemplo |
|-----------|----------|---------|
| moreover | além disso | *The project is innovative. **Moreover**, it is cost-effective.* |
| furthermore | além disso | *The results were positive. **Furthermore**, they exceeded expectations.* |
| in addition | além disso | ***In addition** to English, she speaks French.* |
| also | também | *He **also** works as a volunteer.* |
| besides | além de | ***Besides** being smart, she is hardworking.* |
| as well as | assim como | *The teacher, **as well as** the students, attended.* |

## Contraste / Oposição (= mas, porém, no entanto)

| Conectivo | Tradução | Exemplo |
|-----------|----------|---------|
| however | no entanto | *It was raining. **However**, they went outside.* |
| although / though | embora | ***Although** it was late, she kept studying.* |
| nevertheless | mesmo assim | *The test was hard. **Nevertheless**, she passed.* |
| on the other hand | por outro lado | *Some agree. **On the other hand**, many disagree.* |
| whereas | enquanto (contraste) | *He is tall, **whereas** his brother is short.* |
| despite / in spite of | apesar de | ***Despite** the rain, we had fun.* |
| yet | contudo, porém | *The plan is simple, **yet** effective.* |

## Causa / Razão (= porque, já que, devido a)

| Conectivo | Tradução | Exemplo |
|-----------|----------|---------|
| because | porque | *He left **because** he was tired.* |
| since | já que, uma vez que | ***Since** you are here, let us start.* |
| due to | devido a | *The delay was **due to** traffic.* |
| as | como, já que | ***As** it was late, we went home.* |
| owing to | devido a | ***Owing to** the crisis, many lost jobs.* |

## Resultado / Consequência (= portanto, por isso)

| Conectivo | Tradução | Exemplo |
|-----------|----------|---------|
| therefore | portanto | *He studied hard. **Therefore**, he passed.* |
| consequently | consequentemente | *Costs rose. **Consequently**, prices increased.* |
| thus | assim, desse modo | *The evidence was clear; **thus**, a verdict was reached.* |
| as a result | como resultado | ***As a result** of the reform, GDP grew.* |
| so | então, por isso | *She was sick, **so** she stayed home.* |
| hence | daí, por isso | *The data is limited; **hence** the need for more research.* |

## Finalidade (= para, a fim de)

| Conectivo | Tradução | Exemplo |
|-----------|----------|---------|
| in order to | a fim de | *She works hard **in order to** succeed.* |
| so that | para que | *He spoke slowly **so that** everyone could understand.* |
| so as to | de modo a | *They moved **so as to** be closer to work.* |`,
          },
          {
            titulo: 'Método Prático para Questões de Referência',
            tipo: 'exemplo',
            corpo: `Quando a questão perguntar *"The pronoun X refers to…"*, siga estes passos:

**Passo 1:** Localize o pronome no texto e leia a frase completa.

**Passo 2:** Identifique o tipo do pronome:
- Singular ou plural? (*it* vs *they*)
- Pessoa ou coisa? (*he/she* vs *it*)
- Ideia ou objeto? (*this/that* vs *he/she/it*)

**Passo 3:** Volte ao texto e busque o substantivo que concorda em número e tipo.

**Passo 4:** Substitua o pronome pelo substantivo e releia — a frase **deve fazer sentido**.

## Exemplo Prático Completo

> *"**Brazil** is the largest country in South America. **It** has a population of over 200 million people. **Its** economy is one of the largest in the world, and **its** cultural diversity attracts millions of tourists every year."*

**Análise:**
- **It** (2ª frase) → Brazil (substantivo singular, país = *it*)
- **Its** (3ª frase, 1ª ocorrência) → Brazil's (possessivo de Brazil)
- **its** (3ª frase, 2ª ocorrência) → Brazil's (possessivo de Brazil)

Perceba: todos os pronomes referem-se ao mesmo substantivo (*Brazil*), que aparece **apenas uma vez** no início. Isso é coesão textual — evitar repetição mantendo a clareza.

## Outro Exemplo

> *"**The students** worked on **their** project for weeks. When **they** finally presented **it**, the professor praised **them** for **their** dedication."*

- **their** (1ª ocorrência) → dos estudantes
- **they** → os estudantes
- **it** → the project (singular)
- **them** → os estudantes (objeto)
- **their** (2ª ocorrência) → dos estudantes`,
          },
          {
            titulo: 'Mapa Mental dos Conectivos',
            tipo: 'importante',
            corpo: `Para memorizar as relações lógicas, associe cada grupo a uma "direção":

- **→ Adição** (mesma direção): *moreover, furthermore, in addition, also, besides*
- **↔ Contraste** (direção oposta): *however, although, nevertheless, on the other hand, despite*
- **← Causa** (olha para trás): *because, since, due to, as, owing to*
- **→ Consequência** (olha para frente): *therefore, consequently, thus, as a result, so*

> **Macete para a prova:** Se o conectivo pode ser substituído por **"MAS"** → é **contraste**. Se por **"PORTANTO"** → é **consequência**. Se por **"PORQUE"** → é **causa**. Se por **"ALÉM DISSO"** → é **adição**.

## Atenção Especial: a Palavra "SINCE"

A palavra *since* tem **dois significados** completamente diferentes:

- **Causa** (= já que): *"**Since** it is raining, let us stay home."*
- **Tempo** (= desde): *"I have lived here **since** 2010."*

Na prova, analise o **contexto** para determinar qual sentido está sendo usado. Se houver uma data ou referência temporal, é *tempo*. Se houver uma justificativa, é *causa*.

## Atenção Especial: "WHILE" e "AS"

Assim como *since*, essas palavras são polissêmicas:

- **while** pode indicar **tempo** (*enquanto*) ou **contraste** (*ao passo que*):
  - Tempo: *"**While** I was studying, the phone rang."*
  - Contraste: *"**While** some support the idea, others are against it."*

- **as** pode indicar **causa** (*já que*), **tempo** (*enquanto*) ou **comparação** (*como*):
  - Causa: *"**As** it was late, we left."*
  - Tempo: *"**As** I walked in, she walked out."*
  - Comparação: *"**As** fast **as** a cheetah."*`,
          },
        ],
        imagemDescricao: 'Diagrama com setas mostrando a que termos os pronomes se referem em um parágrafo em inglês',
        formulasChave: [
          'it = substantivo singular ou ideia anterior',
          'they = substantivo plural mencionado antes',
          'this/that = ideia ou situação recém-mencionada',
          'however/nevertheless = oposição (mas, porém)',
          'therefore/thus = consequência (portanto, logo)',
        ],
        dicasProva: [
          'Quando a questão perguntar "O pronome IT refere-se a…", volte ao texto e busque o substantivo singular mais próximo.',
          'THEY pode se referir a pessoas, empresas, governos — qualquer plural.',
          'Conectivos de oposição (however, although) são os mais cobrados — decore-os.',
          'Se o texto usa "this", geralmente se refere à ideia da frase inteira anterior, não a uma palavra isolada.',
          'Monte uma "tabela mental": oposição, causa, consequência, adição, concessão — e associe conectivos.',
        ],
        errosComuns: [
          'Associar "it" ao sujeito errado quando há vários substantivos singulares próximos.',
          'Confundir "although" (concessão) com "therefore" (consequência) — sentidos opostos.',
          'Esquecer que "which" pode se referir a toda uma oração, não só a uma palavra.',
          'Traduzir "since" sempre como "desde" — em muitos contextos significa "já que" (causa).',
          'Não perceber que "on the other hand" introduz contraste, não adição.',
        ],
        exercicios: [
          {
            id: 'ing-coes-1',
            enunciado: '"Electric cars are becoming more popular. However, they are still too expensive for most consumers." The pronoun "they" refers to:',
            alternativas: [
              'Consumers',
              'Electric cars',
              'Popular items',
              'Prices',
              'Most people',
            ],
            respostaCorreta: 1,
            explicacao: '"They" é pronome plural e retoma o sujeito da frase anterior: "electric cars". A lógica confirma: os carros elétricos estão populares, MAS eles (os carros) ainda são caros.',
            dificuldade: 'facil',
          },
          {
            id: 'ing-coes-2',
            enunciado: '"The government announced new environmental policies. This was seen as a positive step by scientists." The word "This" refers to:',
            alternativas: [
              'The government',
              'Scientists',
              'The announcement of new environmental policies',
              'A positive step',
              'The environment',
            ],
            respostaCorreta: 2,
            explicacao: '"This" refere-se à ideia completa da frase anterior: o anúncio de novas políticas ambientais. "This" frequentemente aponta para uma ação ou situação descrita antes, não para um substantivo isolado.',
            dificuldade: 'medio',
          },
          {
            id: 'ing-coes-3',
            enunciado: '"Many students fail their exams; therefore, the school decided to offer extra tutoring sessions." The connective "therefore" expresses:',
            alternativas: [
              'Opposition',
              'Addition',
              'Consequence',
              'Concession',
              'Cause',
            ],
            respostaCorreta: 2,
            explicacao: '"Therefore" é conectivo de consequência (= portanto, por isso). A lógica: muitos alunos reprovam (causa) → portanto, a escola oferece aulas extras (consequência).',
            dificuldade: 'facil',
          },
          {
            id: 'ing-coes-4',
            enunciado: '"The company invested in technology, which improved its productivity significantly." The pronoun "which" refers to:',
            alternativas: [
              'The company',
              'Technology',
              'The act of investing in technology',
              'Productivity',
              'Significance',
            ],
            respostaCorreta: 2,
            explicacao: '"Which" introduz uma oração relativa explicativa. Neste caso, refere-se à ação completa descrita antes: o investimento em tecnologia. Foi esse investimento que melhorou a produtividade.',
            dificuldade: 'medio',
          },
          {
            id: 'ing-coes-5',
            enunciado: '"Although the experiment failed, the researchers gained valuable insights." The word "Although" establishes a relationship of:',
            alternativas: [
              'Cause',
              'Consequence',
              'Addition',
              'Concession',
              'Temporal sequence',
            ],
            respostaCorreta: 3,
            explicacao: '"Although" é conjunção concessiva (= embora). Indica que o fracasso do experimento (concessão) não impediu que os pesquisadores obtivessem insights valiosos (ideia principal). A concessão apresenta um obstáculo que não anula o resultado.',
            dificuldade: 'medio',
          },
        ],
      },
    },
    {
      id: 'vocabulario-sinonimos',
      titulo: 'Vocabulário e Sinônimos',
      peso: 15,
      conteudo: {
        resumo: 'Cognatos, falsos cognatos, inferência de significado pelo contexto e sinônimos em inglês.',
        explicacao:
          'A prova da UNIVESP frequentemente pede o significado de uma palavra ou expressão dentro do texto. A chave é usar o contexto, não decorar dicionários.\n\n**Cognatos (aliados da leitura):**\nPalavras parecidas com o português e com o mesmo significado:\n• important = importante\n• education = educação\n• population = população\n• significant = significativo\n• economy = economia\n\n**Falsos Cognatos (armadilhas):**\nPalavras parecidas, mas com significado DIFERENTE:\n• actually = na verdade (NÃO "atualmente" → currently)\n• pretend = fingir (NÃO "pretender" → intend)\n• library = biblioteca (NÃO "livraria" → bookstore)\n• sensible = sensato (NÃO "sensível" → sensitive)\n• fabric = tecido (NÃO "fábrica" → factory)\n• push = empurrar (NÃO "puxar" → pull)\n• college = faculdade (NÃO "colégio" → school)\n• lunch = almoço (NÃO "lanche" → snack)\n\n**Estratégias para inferir significado:**\n1. Leia a frase inteira — o contexto geralmente indica o sentido\n2. Identifique a classe gramatical (verbo, substantivo, adjetivo)\n3. Observe prefixos e sufixos: un- (negação), re- (repetição), -tion (substantivo), -ly (advérbio)\n4. Busque sinônimos ou explicações no próprio texto (frequente em textos acadêmicos)',
        secoes: [
          {
            titulo: 'Estratégias para Vocabulário em Contexto',
            tipo: 'texto',
            corpo: `Em provas de vestibular, questões de vocabulário **não exigem que você decore milhares de palavras**. O que a banca quer avaliar é sua capacidade de **deduzir o significado** de uma palavra a partir do contexto em que ela aparece.

As principais estratégias para resolver questões de vocabulário são:

1. **Análise do contexto** — A frase ao redor da palavra geralmente dá pistas sobre seu significado
2. **Formação de palavras** — Prefixos e sufixos ajudam a deduzir o sentido
3. **Cognatos** — Palavras parecidas com o português frequentemente têm significado similar
4. **Pistas textuais** — Definições, exemplos, sinônimos ou antônimos que o próprio texto oferece

## Tipos de Pistas Contextuais

- **Definição direta:** *"An **arachnid** — a type of eight-legged creature — was found."* → O próprio texto define a palavra entre travessões
- **Exemplo:** *"Citrus fruits, **such as** oranges and lemons, are rich in vitamin C."* → O exemplo esclarece o que são *citrus fruits*
- **Sinônimo:** *"She was **elated**, or extremely happy, after the results."* → O sinônimo vem logo após a vírgula
- **Antônimo:** *"Unlike his **gregarious** brother, he preferred to be alone."* → O contraste com *"be alone"* revela que *gregarious* = sociável
- **Causa/efeito:** *"The **drought** destroyed the crops, leaving farmers without harvest."* → O efeito (destruição das colheitas) indica a causa — *drought* = seca

> **Regra de ouro:** Antes de desistir de uma palavra desconhecida, leia as **duas frases ao redor**. Em 80% dos casos, o próprio texto contém pistas suficientes para deduzir o significado.`,
          },
          {
            titulo: 'Formação de Palavras — Prefixos',
            tipo: 'tabela',
            corpo: `Prefixos são partículas adicionadas ao **início** de uma palavra que modificam seu significado. Conhecer os principais prefixos permite deduzir o sentido de palavras desconhecidas na prova.

## Prefixos de Negação

| Prefixo | Significado | Exemplos |
|---------|-------------|----------|
| un- | não, oposto | **un**happy (infeliz), **un**able (incapaz), **un**fair (injusto), **un**known (desconhecido) |
| dis- | oposto, reverso | **dis**agree (discordar), **dis**appear (desaparecer), **dis**honest (desonesto), **dis**connect (desconectar) |
| in- / im- / il- / ir- | não | **in**visible (invisível), **im**possible (impossível), **il**legal (ilegal), **ir**regular (irregular) |
| non- | não, sem | **non**-fiction (não ficção), **non**sense (sem sentido), **non**-profit (sem fins lucrativos) |
| mis- | errado, mal | **mis**understand (entender errado), **mis**lead (enganar), **mis**spell (escrever errado) |

## Prefixos de Repetição e Movimento

| Prefixo | Significado | Exemplos |
|---------|-------------|----------|
| re- | novamente, de volta | **re**write (reescrever), **re**build (reconstruir), **re**turn (retornar), **re**view (revisar) |
| pre- | antes | **pre**view (pré-visualização), **pre**-war (pré-guerra), **pre**dict (predizer) |
| post- | depois | **post**-war (pós-guerra), **post**pone (adiar), **post**graduate (pós-graduação) |
| over- | excessivamente | **over**work (trabalhar demais), **over**eat (comer demais), **over**look (negligenciar) |
| under- | insuficiente, abaixo | **under**estimate (subestimar), **under**paid (mal pago), **under**ground (subterrâneo) |

## Outros Prefixos Frequentes

| Prefixo | Significado | Exemplos |
|---------|-------------|----------|
| co- | junto | **co**-worker (colega), **co**operate (cooperar), **co**-author (coautor) |
| anti- | contra | **anti**-social (antissocial), **anti**biotic (antibiótico) |
| inter- | entre | **inter**national (internacional), **inter**net (internet), **inter**act (interagir) |
| trans- | através | **trans**port (transportar), **trans**form (transformar), **trans**late (traduzir) |
| multi- | muitos | **multi**cultural (multicultural), **multi**ply (multiplicar), **multi**national (multinacional) |
| super- | acima, além | **super**natural (sobrenatural), **super**vise (supervisionar) |
| sub- | abaixo | **sub**marine (submarino), **sub**title (legenda/subtítulo) |

> **Dica de prova:** Ao encontrar uma palavra desconhecida, tente **separar o prefixo da raiz**. Se você reconhecer qualquer parte, já terá uma pista do significado. Exemplo: *"The results were **unprecedented**."* → **un** (não) + **precedent** (precedente) + **ed** → "sem precedentes".`,
          },
          {
            titulo: 'Formação de Palavras — Sufixos',
            tipo: 'tabela',
            corpo: `Sufixos são partículas adicionadas ao **final** de uma palavra. Eles frequentemente indicam a **classe gramatical**, o que ajuda a entender a função da palavra na frase.

## Sufixos de Substantivo

| Sufixo | Indica | Exemplos |
|--------|--------|----------|
| -tion / -sion | ação, resultado | educa**tion** (educação), deci**sion** (decisão), informa**tion** (informação) |
| -ment | resultado, estado | develop**ment** (desenvolvimento), govern**ment** (governo), achieve**ment** (conquista) |
| -ness | qualidade, estado | happi**ness** (felicidade), dark**ness** (escuridão), kind**ness** (bondade) |
| -ity / -ty | qualidade | universi**ty** (universidade), activi**ty** (atividade), diversi**ty** (diversidade) |
| -er / -or | agente (quem faz) | teach**er** (professor), act**or** (ator), writ**er** (escritor) |
| -ist | especialista | scient**ist** (cientista), art**ist** (artista), journal**ist** (jornalista) |
| -ance / -ence | estado, qualidade | import**ance** (importância), differ**ence** (diferença), pati**ence** (paciência) |

## Sufixos de Adjetivo

| Sufixo | Indica | Exemplos |
|--------|--------|----------|
| -ful | cheio de | beauti**ful** (bonito), hope**ful** (esperançoso), power**ful** (poderoso) |
| -less | sem | hope**less** (sem esperança), care**less** (descuidado), use**less** (inútil) |
| -able / -ible | capaz de | comfort**able** (confortável), access**ible** (acessível), reli**able** (confiável) |
| -ous / -ious | que tem qualidade de | danger**ous** (perigoso), ambit**ious** (ambicioso), fam**ous** (famoso) |
| -al | relativo a | nation**al** (nacional), cultur**al** (cultural), education**al** (educacional) |
| -ive | que tem tendência a | creat**ive** (criativo), act**ive** (ativo), effect**ive** (eficaz) |

## Sufixo de Advérbio

| Sufixo | Indica | Exemplos |
|--------|--------|----------|
| -ly | modo (como?) | quick**ly** (rapidamente), careful**ly** (cuidadosamente), fortunate**ly** (felizmente), significant**ly** (significativamente) |

> **Macete para a prova:** Se a questão pergunta a classe gramatical de uma palavra, olhe o sufixo:
> - Termina em **-tion, -ment, -ness** → provavelmente é **substantivo**
> - Termina em **-ful, -less, -able, -ous** → provavelmente é **adjetivo**
> - Termina em **-ly** → provavelmente é **advérbio**
> - Termina em **-ize, -fy, -en** → provavelmente é **verbo** (*modernize, simplify, strengthen*)`,
          },
          {
            titulo: 'Pares de Sinônimos Frequentes em Provas',
            tipo: 'tabela',
            corpo: `A banca frequentemente pede que você identifique sinônimos — palavras com significado semelhante. A alternativa correta muitas vezes é uma **paráfrase** do trecho original usando sinônimos.

| Palavra | Sinônimo(s) | Tradução |
|---------|------------|----------|
| big | large, huge | grande |
| small | little, tiny | pequeno |
| start | begin, commence | começar |
| finish | complete, end, conclude | terminar |
| important | significant, crucial, essential | importante |
| help | assist, aid, support | ajudar |
| show | demonstrate, display, reveal | mostrar |
| get | obtain, acquire, gain | obter |
| make | create, produce, generate | fazer/criar |
| find | discover, locate, identify | encontrar |
| think | believe, consider, regard | pensar/acreditar |
| say | state, declare, claim, assert | dizer/afirmar |
| fast | quick, rapid, swift | rápido |
| hard | difficult, challenging, tough | difícil |
| happy | glad, pleased, content, delighted | feliz |
| sad | unhappy, sorrowful, miserable | triste |
| rich | wealthy, affluent, prosperous | rico |
| old | ancient, elderly, aged | velho/antigo |
| improve | enhance, boost, upgrade | melhorar |
| reduce | decrease, diminish, lower, cut | reduzir |
| increase | grow, rise, expand, surge | aumentar |
| change | alter, modify, transform, shift | mudar |
| stop | cease, halt, discontinue | parar |
| give | provide, supply, offer, grant | dar/fornecer |

> **Na prova:** Quando a alternativa usa uma palavra diferente da que está no texto, mas o significado é o mesmo, essa é provavelmente a resposta correta. A banca **adora** testar se você reconhece paráfrases — reformulações com sinônimos.`,
          },
          {
            titulo: 'Deduzindo Significados pelo Contexto — Exemplos Práticos',
            tipo: 'exemplo',
            corpo: `## Exemplo 1: Pistas Contextuais

Leia o trecho e deduza o significado da palavra destacada:

> *"The **ubiquitous** smartphone has changed the way people communicate, work, and entertain themselves. You can find someone using a phone on the bus, in restaurants, at parks — virtually everywhere."*

**Passo 1:** Identifique a palavra desconhecida → **ubiquitous**
**Passo 2:** Leia o contexto ao redor:
- *"on the bus, in restaurants, at parks"* → lista de lugares variados
- *"virtually everywhere"* → literalmente "em praticamente todo lugar"
**Passo 3:** Deduza → **ubiquitous** = que está presente em todo lugar, onipresente
**Passo 4:** Confirme substituindo: *"The **omnipresent** smartphone…"* → faz sentido!

---

## Exemplo 2: Cognato + Contexto

> *"The politician's **ambiguous** statement confused the journalists. No one could tell if he was in favor of or against the new policy."*

**Passo 1:** Palavra desconhecida → **ambiguous**
**Passo 2:** Contexto:
- *"confused the journalists"* → confundiu os jornalistas
- *"No one could tell if he was in favor of or against"* → ninguém sabia se era a favor ou contra
**Passo 3:** Deduza → **ambiguous** = ambíguo, com duplo sentido, não claro
**Passo 4:** Confirme: o cognato ajuda! **ambiguous** se parece com **ambíguo** em português.

---

## Exemplo 3: Prefixo + Raiz

> *"The government decided to **deregulate** the telecommunications industry, removing many of the existing rules and restrictions."*

**Passo 1:** Separe a palavra → **de-** (reverso/remoção) + **regulate** (regular, regulamentar)
**Passo 2:** Contexto confirma: *"removing many of the existing rules"* (removendo regras existentes)
**Passo 3:** Deduza → **deregulate** = desregulamentar, remover regulamentações

> **Lição:** Combine as estratégias — use cognatos, prefixos/sufixos E contexto juntos. Quanto mais ferramentas você usar, mais confiante será sua dedução.`,
          },
          {
            titulo: 'Transformação entre Classes Gramaticais',
            tipo: 'importante',
            corpo: `Uma mesma raiz pode gerar palavras de **diferentes classes gramaticais**. Reconhecer essas transformações ajuda a entender textos e responder questões sobre vocabulário.

| Verbo | Substantivo | Adjetivo | Advérbio |
|-------|-------------|----------|----------|
| educate | education | educational | educationally |
| create | creation | creative | creatively |
| develop | development | developed | — |
| communicate | communication | communicative | communicatively |
| differ | difference | different | differently |
| succeed | success | successful | successfully |
| decide | decision | decisive | decisively |
| act | action | active | actively |
| protect | protection | protective | protectively |
| employ | employment | employed | — |
| simplify | simplification | simple | simply |
| analyze | analysis | analytical | analytically |

**Como isso cai na prova:** A banca pode perguntar *"The word 'development' in the text is a…"* (noun/verb/adjective). Conhecer os sufixos ajuda: **-ment** indica substantivo.

## Resumo Final das Estratégias de Vocabulário

1. **Leia o contexto** — a frase completa ao redor da palavra
2. **Separe prefixo + raiz + sufixo** — deduzindo o significado de cada parte
3. **Verifique se é cognato** — compare com o português
4. **Busque pistas no texto** — definições, sinônimos, exemplos, contrastes
5. **Identifique a classe gramatical** — pelo sufixo ou pela posição na frase
6. **Substitua na frase** — a alternativa correta deve fazer sentido no contexto original

> **Na prova UNIVESP:** A maioria das questões de vocabulário pode ser resolvida com **contexto + cognatos + prefixos/sufixos**. Você não precisa decorar dicionários — precisa dominar as **estratégias de dedução**.`,
          },
        ],
        imagemDescricao: 'Tabela comparativa de falsos cognatos com a tradução correta e a "armadilha" em português',
        formulasChave: [
          'actually = na verdade (não "atualmente")',
          'pretend = fingir (não "pretender")',
          'library = biblioteca (não "livraria")',
          'sensible = sensato (não "sensível")',
          'Prefixos: un- = negação, re- = repetição, dis- = oposto',
        ],
        dicasProva: [
          'Se a questão perguntar "The word X means…", releia a frase completa antes de responder.',
          'Falsos cognatos são a armadilha favorita de bancas — decore os 10 mais comuns.',
          'Palavras com sufixo -ly geralmente são advérbios (quickly = rapidamente).',
          'Se encontrar uma palavra desconhecida, não entre em pânico — leia o parágrafo inteiro.',
          'Sinônimos frequentemente aparecem após vírgula ou travessão como explicação no próprio texto.',
        ],
        errosComuns: [
          'Traduzir "actually" como "atualmente" — o correto é "na verdade".',
          'Achar que "pretend" significa "pretender" — significa "fingir".',
          'Confundir "library" (biblioteca) com "livraria" (bookstore).',
          'Não perceber que "sensible" = sensato, enquanto "sensitive" = sensível.',
          'Ignorar o contexto e traduzir palavra por palavra, caindo em falsos cognatos.',
        ],
        exercicios: [
          {
            id: 'ing-vocab-1',
            enunciado: 'In the sentence "She pretended to be sick so she could stay home", the word "pretended" means:',
            alternativas: [
              'Pretendia',
              'Fingia',
              'Apresentava',
              'Preparava',
              'Precisava',
            ],
            respostaCorreta: 1,
            explicacao: '"Pretend" é um falso cognato clássico: significa "fingir", não "pretender" (que em inglês é "intend"). Ela fingiu estar doente para ficar em casa.',
            dificuldade: 'facil',
          },
          {
            id: 'ing-vocab-2',
            enunciado: '"The library was closed for renovation." A tradução correta de "library" é:',
            alternativas: [
              'Livraria',
              'Biblioteca',
              'Laboratório',
              'Escritório',
              'Papelaria',
            ],
            respostaCorreta: 1,
            explicacao: '"Library" é falso cognato: significa "biblioteca", não "livraria" (que em inglês é "bookstore"). O contexto de "renovation" (reforma) é compatível com um espaço público como uma biblioteca.',
            dificuldade: 'facil',
          },
          {
            id: 'ing-vocab-3',
            enunciado: '"The CEO made a sensible decision to cut costs during the crisis." The word "sensible" is closest in meaning to:',
            alternativas: [
              'Sensível',
              'Sensacional',
              'Sensato',
              'Sentimental',
              'Sensitivo',
            ],
            respostaCorreta: 2,
            explicacao: '"Sensible" é falso cognato: significa "sensato/prudente", não "sensível" (que é "sensitive"). O contexto reforça: cortar custos na crise é uma decisão prudente/sensata.',
            dificuldade: 'medio',
          },
          {
            id: 'ing-vocab-4',
            enunciado: '"The unprecedented growth in technology has transformed everyday life." Based on the context, "unprecedented" most likely means:',
            alternativas: [
              'Lento e gradual',
              'Sem precedentes, nunca visto antes',
              'Pouco significativo',
              'Temporário e passageiro',
              'Previsível e esperado',
            ],
            respostaCorreta: 1,
            explicacao: 'Análise morfológica: "un-" (negação) + "precedent" (precedente) + "-ed" (adjetivo). Logo: "sem precedentes". O contexto de transformação da vida cotidiana confirma algo de grande magnitude e novidade.',
            dificuldade: 'medio',
          },
          {
            id: 'ing-vocab-5',
            enunciado: '"Despite the initial setbacks, the project was eventually completed on time." The word "eventually" means:',
            alternativas: [
              'Eventualmente (talvez)',
              'Finalmente, no final das contas',
              'Evidentemente',
              'Imediatamente',
              'Ocasionalmente',
            ],
            respostaCorreta: 1,
            explicacao: '"Eventually" é falso cognato: significa "finalmente/no final das contas", não "eventualmente" (que em inglês é "possibly/occasionally"). O contexto confirma: apesar dos contratempos iniciais, o projeto FOI concluído no prazo — ou seja, no final deu certo.',
            dificuldade: 'dificil',
          },
        ],
      },
    },
  ],
};
