import type { Disciplina } from './tipos';

export const disciplinaHistoria: Disciplina = {
  id: 'historia',
  titulo: 'História',
  icone: '📜',
  topicos: [
    {
      id: 'historia-brasil',
      titulo: 'História do Brasil',
      peso: 50,
      conteudo: {
        resumo: 'Período Colonial, Era Vargas e Ditadura Militar — os três eixos mais cobrados.',
        explicacao:
          'A UNIVESP prioriza a compreensão de processos históricos brasileiros e suas consequências na sociedade atual.\n\nPeríodo Colonial (1500-1822): exploração, escravidão, ciclos econômicos.\nEra Vargas (1930-1945): populismo, CLT, industrialização.\nDitadura Militar (1964-1985): AI-5, censura, milagre econômico, abertura.\n\nDica: conecte os eventos históricos com seus impactos sociais e econômicos. A prova cobra mais análise do que memorização de datas.',
        secoes: [
          {
            titulo: 'Introdução: Três Eixos da História do Brasil',
            tipo: 'texto',
            corpo:
              `A história do Brasil cobrada no vestibular da UNIVESP concentra-se em três grandes períodos que, juntos, explicam como o país se formou política, econômica e socialmente. O **Período Colonial (1500–1822)** é a raiz: nele se definiram os padrões de exploração econômica, desigualdade social e dependência externa que marcaram os séculos seguintes. A **Era Vargas (1930–1945)** representa o primeiro projeto nacional de industrialização e modernização trabalhista — e também de autoritarismo. A **Ditadura Militar (1964–1985)** fecha o tripé, mostrando como a democracia brasileira foi interrompida e reconquistada.\n\n` +
              `O fio condutor entre esses três períodos é a tensão permanente entre **concentração de poder** e **demandas populares**. Capitanias hereditárias concentraram terra; a CLT respondeu a pressões operárias; o AI-5 silenciou a oposição. Entender essas **cadeias de causa e consequência** é o que a UNIVESP cobra — não a memorização isolada de datas.\n\n` +
              `> **Dica de estudo:** ao ler cada período, pergunte-se sempre: *Quem detinha o poder? Quem era excluído? Que evento rompeu o equilíbrio anterior?*`,
          },
          {
            titulo: 'O Período Colonial — Chegada e Administração (1500–1822)',
            tipo: 'texto',
            corpo:
              `## Contexto da colonização\n\n` +
              `Quando Pedro Álvares Cabral aportou em 1500, Portugal já era uma potência marítima experiente, mas o Brasil não despertou interesse imediato — as especiarias do Oriente eram mais lucrativas. Nos primeiros trinta anos, a exploração limitou-se ao **pau-brasil**, extraído por meio de escambo com os indígenas. Não havia núcleos permanentes; feitorias no litoral bastavam.\n\n` +
              `Esse cenário mudou quando a França passou a enviar expedições ao litoral brasileiro. Para defender a posse, Portugal precisava **ocupar** o território. Em **1534**, o rei D. João III criou as **capitanias hereditárias**: quinze faixas de terra entregues a donatários (nobres ou comerciantes) que deviam colonizar, defender e explorar a região às próprias custas.\n\n` +
              `## Capitanias hereditárias\n\n` +
              `O sistema fracassou na maioria dos casos. Os donatários não tinham recursos suficientes, enfrentavam ataques indígenas e a distância de Portugal dificultava o abastecimento. Apenas duas capitanias prosperaram: **São Vicente** (atual São Paulo), liderada por Martim Afonso de Sousa, e **Pernambuco**, sob Duarte Coelho — ambas apoiadas na nascente economia açucareira.\n\n` +
              `Diante do fracasso, a Coroa criou o **Governo-Geral** em **1548**, centralizando a administração. O primeiro governador-geral, **Tomé de Sousa**, fundou Salvador (1549) como capital. A partir daí, o Estado português passou a coordenar diretamente a colonização, embora os senhores de engenho mantivessem enorme poder local.\n\n` +
              `> **Causa → Consequência:** Fracasso das capitanias → Criação do Governo-Geral → Centralização administrativa → Fortalecimento do poder da Coroa na colônia.`,
          },
          {
            titulo: 'Ciclos Econômicos: O Motor da Colônia',
            tipo: 'texto',
            corpo:
              `A economia colonial brasileira funcionava como um **sistema de exploração**: a riqueza era extraída e enviada a Portugal, com pouco retorno para a colônia. Cada ciclo econômico deixou marcas profundas na sociedade e na geografia do país.\n\n` +
              `## Ciclo do Pau-Brasil (1500–1530)\n\n` +
              `Primeira atividade econômica. A árvore era abundante no litoral e seu corante vermelho tinha alto valor na Europa. A extração usava **mão de obra indígena via escambo** (troca por ferramentas, espelhos). Não gerou núcleos populacionais permanentes, mas iniciou a devastação da Mata Atlântica.\n\n` +
              `## Ciclo da Cana-de-Açúcar (séc. XVI–XVII)\n\n` +
              `O açúcar transformou o Nordeste no polo econômico da colônia. A produção exigia **engenhos** (unidades de produção caras e complexas) e **mão de obra escravizada africana** em larga escala. O tráfico negreiro tornou-se o segundo maior negócio do império português. A sociedade que emergiu era rigidamente hierárquica: **senhores de engenho** no topo, escravizados na base. A riqueza concentrou-se no litoral nordestino, criando uma elite poderosa que influenciou a política colonial por séculos.\n\n` +
              `## Ciclo do Ouro (séc. XVIII)\n\n` +
              `A descoberta de ouro em **Minas Gerais** (final do séc. XVII) provocou a maior transformação geográfica da colônia: a **interiorização**. Milhares de pessoas migraram para o interior, fundando cidades como **Vila Rica (Ouro Preto)**, Mariana e Sabará. O eixo econômico deslocou-se do Nordeste para o Sudeste, e a capital foi transferida de Salvador para o **Rio de Janeiro** em 1763.\n\n` +
              `Portugal impôs pesada tributação sobre o ouro, incluindo o **quinto** (20% da produção) e as **Casas de Fundição**. A fiscalização opressiva gerou revolta e foi uma das causas da **Inconfidência Mineira**.\n\n` +
              `> **Causa → Consequência:** Ouro em Minas → Interiorização → Novas cidades → Deslocamento do eixo econômico → Tributação pesada → Revoltas.`,
          },
          {
            titulo: 'Ciclos Econômicos Coloniais — Comparativo',
            tipo: 'tabela',
            corpo:
              `| Ciclo | Período | Produto | Região | Mão de obra | Consequência principal |\n` +
              `|---|---|---|---|---|---|\n` +
              `| Pau-Brasil | 1500–1530 | Madeira (corante) | Litoral | Indígena (escambo) | Devastação da Mata Atlântica |\n` +
              `| Cana-de-açúcar | Séc. XVI–XVII | Açúcar | Nordeste | Escravizada africana | Elite açucareira e tráfico negreiro |\n` +
              `| Ouro | Séc. XVIII | Ouro e diamantes | Minas Gerais | Escravizada africana | Interiorização e urbanização |\n` +
              `| Café* | Séc. XIX | Café | Sudeste (SP, RJ, MG) | Escravizada → Imigrante | Modernização e imigração europeia |\n\n` +
              `> *O ciclo do café ganha força já no período imperial, mas suas raízes estão no final da colônia.`,
          },
          {
            titulo: 'Sociedade Colonial e as Revoltas',
            tipo: 'texto',
            corpo:
              `## Estrutura social\n\n` +
              `A sociedade colonial era **estamental e escravista**. No topo estavam os **grandes proprietários** (senhores de engenho, mineradores, comerciantes ligados a Portugal). Abaixo, uma camada intermediária de **homens livres pobres** — pequenos agricultores, artesãos, tropeiros. Na base, a maioria da população: **escravizados africanos e indígenas**, que sustentavam toda a produção.\n\n` +
              `A mobilidade social era quase inexistente. A cor da pele determinava o lugar na hierarquia. Mesmo libertos (ex-escravizados que compravam ou recebiam a alforria) enfrentavam restrições legais e sociais severas.\n\n` +
              `## Revoltas coloniais\n\n` +
              `À medida que a exploração portuguesa se intensificava, surgiram movimentos de contestação. Dois se destacam para o vestibular:\n\n` +
              `**Inconfidência Mineira (1789)**\n` +
              `- **Onde:** Vila Rica (Ouro Preto), Minas Gerais\n` +
              `- **Por quê:** Tributação abusiva sobre o ouro (derrama), influência das ideias iluministas e da independência dos EUA\n` +
              `- **Quem:** Elite intelectual e mineradora — poetas, advogados, militares, padres\n` +
              `- **Resultado:** Movimento descoberto antes de eclodir. **Tiradentes** foi enforcado e esquartejado como exemplo; os demais foram degredados\n` +
              `- **Importância:** Primeiro grande movimento com ideais separatistas e republicanos\n\n` +
              `**Conjuração Baiana (Revolta dos Alfaiates, 1798)**\n` +
              `- **Onde:** Salvador, Bahia\n` +
              `- **Por quê:** Desigualdade social extrema, influência da Revolução Francesa\n` +
              `- **Quem:** Diferente da Inconfidência — participação popular: alfaiates, soldados, escravizados, mulatos\n` +
              `- **Pauta:** Independência, fim da escravidão, igualdade racial, república\n` +
              `- **Resultado:** Repressão violenta; líderes populares executados\n` +
              `- **Importância:** Foi o primeiro movimento a incluir **demandas sociais** (fim da escravidão, igualdade) além da independência política\n\n` +
              `> **Diferença fundamental:** A Inconfidência Mineira era elitista e não questionava a escravidão. A Conjuração Baiana era popular e exigia igualdade racial — por isso a repressão foi mais brutal.`,
          },
          {
            titulo: 'A Vinda da Família Real e a Independência',
            tipo: 'texto',
            corpo:
              `Em **1808**, Napoleão Bonaparte invadiu Portugal, forçando a família real portuguesa a fugir para o Brasil sob escolta britânica. A chegada de **D. João VI** ao Rio de Janeiro transformou a colônia: abertura dos portos às "nações amigas" (fim do monopólio comercial português), criação do Banco do Brasil, da Imprensa Régia, de escolas e instituições.\n\n` +
              `O Brasil deixou de ser juridicamente uma colônia em **1815**, quando foi elevado a **Reino Unido** com Portugal e Algarves. Quando D. João voltou a Portugal em 1821 (pressionado pela Revolução Liberal do Porto), deixou seu filho **Pedro** como príncipe regente.\n\n` +
              `As Cortes portuguesas tentaram reverter as conquistas brasileiras, exigindo o retorno de Pedro e a recolonização. A pressão gerou o desfecho: em **7 de setembro de 1822**, às margens do rio Ipiranga, **D. Pedro I** declarou a independência do Brasil.\n\n` +
              `> **Causa → Consequência:** Invasão napoleônica → Fuga da Corte para o Brasil → Modernização da colônia → Elevação a Reino Unido → Tentativa de recolonização → Independência em 1822.\n\n` +
              `> **Atenção:** A Independência **não** rompeu com a elite colonial. O Brasil tornou-se uma monarquia governada por um príncipe **português**, mantendo a escravidão e a estrutura fundiária.`,
          },
          {
            titulo: 'Linha do Tempo — Brasil Colonial',
            tipo: 'tabela',
            corpo:
              `| Ano | Evento | Consequência |\n` +
              `|---|---|---|\n` +
              `| 1500 | Chegada de Cabral | Início da presença portuguesa |\n` +
              `| 1534 | Capitanias hereditárias | Tentativa de colonização descentralizada |\n` +
              `| 1549 | Governo-Geral (Tomé de Sousa) | Centralização administrativa; fundação de Salvador |\n` +
              `| Séc. XVI | Início do ciclo do açúcar | Escravidão africana em massa; elite nordestina |\n` +
              `| 1694 | Destruição de Palmares | Fim do maior quilombo; Zumbi morto em 1695 |\n` +
              `| Séc. XVIII | Ciclo do ouro | Interiorização; surgimento de cidades em MG |\n` +
              `| 1789 | Inconfidência Mineira | Primeiro movimento separatista de peso |\n` +
              `| 1798 | Conjuração Baiana | Primeiro movimento com pauta social e racial |\n` +
              `| 1808 | Vinda da Família Real | Abertura dos portos; modernização |\n` +
              `| 1822 | Independência do Brasil | Monarquia independente sob D. Pedro I |`,
          },
          {
            titulo: 'Conceitos-chave do Período Colonial',
            tipo: 'destaque',
            corpo:
              `- **Pacto Colonial:** a colônia só podia comerciar com a metrópole. Toda riqueza fluía para Portugal.\n` +
              `- **Plantation:** modelo agrícola baseado em latifúndio, monocultura e mão de obra escravizada — base do ciclo do açúcar.\n` +
              `- **Quinto:** imposto de 20% sobre o ouro extraído, cobrado pela Coroa portuguesa.\n` +
              `- **Derrama:** cobrança forçada dos impostos atrasados sobre o ouro — estopim da Inconfidência Mineira.\n` +
              `- **Escambo:** troca de produtos entre portugueses e indígenas (pau-brasil por ferramentas).\n` +
              `- **Feitorias:** entrepostos comerciais no litoral, sem colonização permanente.\n` +
              `- **Quilombos:** comunidades formadas por escravizados fugidos. Palmares (Alagoas) foi o maior, resistindo por quase um século.`,
          },
          {
            titulo: 'Era Vargas — Da Revolução de 1930 ao Estado Novo',
            tipo: 'texto',
            corpo:
              `## O contexto da Revolução de 1930\n\n` +
              `A **República Velha (1889–1930)** era dominada pela política do **café com leite**: alternância de poder entre as oligarquias de **São Paulo** (café) e **Minas Gerais** (leite/gado). Em 1929, dois fatores romperam esse equilíbrio:\n\n` +
              `1. O presidente paulista **Washington Luís** indicou outro paulista (Júlio Prestes) como sucessor, quebrando o acordo com Minas Gerais.\n` +
              `2. A **Crise de 1929** (quebra da Bolsa de Nova York) devastou as exportações de café, enfraquecendo a oligarquia paulista.\n\n` +
              `Minas Gerais aliou-se ao **Rio Grande do Sul** e à **Paraíba**, lançando **Getúlio Vargas** como candidato pela Aliança Liberal. Vargas perdeu a eleição, mas um golpe militar em outubro de 1930 impediu a posse de Júlio Prestes e colocou Vargas no poder.\n\n` +
              `## Governo Provisório (1930–1934)\n\n` +
              `Vargas governou por decreto, sem Constituição. Criou o **Ministério do Trabalho** e começou a construir uma legislação trabalhista. Em 1932, São Paulo se revoltou na **Revolução Constitucionalista**, exigindo uma nova Constituição. A revolta foi derrotada militarmente, mas Vargas convocou a Assembleia Constituinte, e a **Constituição de 1934** foi promulgada — a primeira a garantir **voto feminino** no Brasil.\n\n` +
              `## Governo Constitucional (1934–1937)\n\n` +
              `Eleito indiretamente pelo Congresso, Vargas governou sob crescente polarização: de um lado, a **Ação Integralista Brasileira** (fascismo); de outro, a **Aliança Nacional Libertadora** (comunismo). Em 1935, a **Intentona Comunista** (tentativa de golpe liderada por comunistas) deu a Vargas o pretexto para declarar estado de sítio e acumular poderes.\n\n` +
              `## O Estado Novo (1937–1945)\n\n` +
              `Em **10 de novembro de 1937**, Vargas deu um **autogolpe**: fechou o Congresso, outorgou uma nova Constituição autoritária (a "Polaca", inspirada na Constituição polonesa fascista) e instaurou o **Estado Novo** — uma ditadura. Partidos foram abolidos, a censura foi institucionalizada pelo **DIP** (Departamento de Imprensa e Propaganda), e opositores foram presos.\n\n` +
              `> **Causa → Consequência:** Crise do café com leite → Revolução de 1930 → Vargas no poder → Polarização política → Intentona Comunista → Pretexto para o Estado Novo.`,
          },
          {
            titulo: 'CLT, Industrialização e Populismo Varguista',
            tipo: 'destaque',
            corpo:
              `O Estado Novo não foi apenas repressão. Vargas implementou um projeto de **modernização econômica** e construiu uma relação direta com as **massas urbanas** — o **populismo**.\n\n` +
              `## A CLT (1943)\n\n` +
              `A **Consolidação das Leis do Trabalho** reuniu em um único código direitos como salário mínimo, jornada de 8 horas, férias remuneradas, 13º salário e carteira de trabalho. Vargas se apresentava como **"pai dos pobres"**, o líder que protegia o trabalhador. Na prática, a CLT também era uma ferramenta de **controle**: os sindicatos eram atrelados ao Estado (sindicalismo pelego) e greves eram proibidas.\n\n` +
              `## Industrialização\n\n` +
              `Vargas promoveu a **substituição de importações**: em vez de comprar produtos industrializados do exterior, o Brasil deveria fabricá-los. Marcos dessa política:\n\n` +
              `- **CSN (Companhia Siderúrgica Nacional)** — Volta Redonda, 1941: aço nacional\n` +
              `- **Vale do Rio Doce** — 1942: mineração de ferro\n` +
              `- **Petrobras** — criada em 1953 (no segundo governo Vargas), com a campanha **"O petróleo é nosso"**\n\n` +
              `## A queda (1945)\n\n` +
              `Com o fim da Segunda Guerra Mundial, a contradição ficou insustentável: o Brasil havia lutado contra ditaduras fascistas na Europa enquanto vivia sob uma ditadura interna. Pressionado por militares e pela sociedade, Vargas foi **deposto em outubro de 1945**. A democracia retornou — temporariamente.`,
          },
          {
            titulo: 'Linha do Tempo — Era Vargas',
            tipo: 'tabela',
            corpo:
              `| Ano | Evento | Significado |\n` +
              `|---|---|---|\n` +
              `| 1929 | Crise da Bolsa de NY | Colapso do café; enfraquecimento das oligarquias |\n` +
              `| 1930 | Revolução de 1930 | Vargas assume o poder; fim da República Velha |\n` +
              `| 1932 | Revolução Constitucionalista | SP derrotado, mas Vargas convoca Constituinte |\n` +
              `| 1934 | Constituição de 1934 | Voto feminino; Vargas eleito indiretamente |\n` +
              `| 1935 | Intentona Comunista | Pretexto para acúmulo de poderes |\n` +
              `| 1937 | Golpe do Estado Novo | Ditadura; Congresso fechado; censura (DIP) |\n` +
              `| 1941 | Criação da CSN | Marco da industrialização nacional |\n` +
              `| 1943 | CLT promulgada | Consolidação dos direitos trabalhistas |\n` +
              `| 1945 | Deposição de Vargas | Fim do Estado Novo; redemocratização |\n` +
              `| 1950 | Vargas eleito presidente | Retorno pelo voto popular |\n` +
              `| 1954 | Suicídio de Vargas | Carta-testamento; comoção nacional |`,
          },
          {
            titulo: 'A Ditadura Militar — O Golpe de 1964',
            tipo: 'texto',
            corpo:
              `## O contexto do golpe\n\n` +
              `Após o suicídio de Vargas (1954) e o governo desenvolvimentista de **Juscelino Kubitschek** (1956–1961), o Brasil entrou em turbulência. O presidente **João Goulart (Jango)**, vice que assumiu após a renúncia de Jânio Quadros (1961), tinha posições de **esquerda** que alarmavam militares, empresários e os Estados Unidos — em plena Guerra Fria.\n\n` +
              `Jango propôs as **Reformas de Base**: reforma agrária, urbana, educacional, bancária e tributária. Para a elite conservadora, eram radicais demais. Em **13 de março de 1964**, Jango realizou o **Comício da Central do Brasil** no Rio de Janeiro, defendendo as reformas diante de 200 mil pessoas. A reação foi imediata:\n\n` +
              `Em **31 de março de 1964**, tropas militares marcharam sobre o Rio de Janeiro. Jango, sem apoio suficiente, refugiou-se no Uruguai. Os militares assumiram o poder com apoio de setores empresariais, da mídia e dos EUA.\n\n` +
              `## Os Atos Institucionais\n\n` +
              `O regime se legitimou por **Atos Institucionais (AIs)** — decretos que alteravam a Constituição sem aprovação do Congresso:\n\n` +
              `- **AI-1 (1964):** cassação de mandatos e suspensão de direitos políticos por 10 anos\n` +
              `- **AI-2 (1965):** extinção dos partidos políticos; criação do bipartidarismo (ARENA × MDB)\n` +
              `- **AI-3 (1966):** eleições indiretas para governadores\n` +
              `- **AI-4 (1966):** convocação do Congresso para aprovar nova Constituição\n` +
              `- **AI-5 (1968):** o mais severo — marco do endurecimento total do regime`,
          },
          {
            titulo: 'O AI-5 e os Anos de Chumbo (1968–1974)',
            tipo: 'importante',
            corpo:
              `O **Ato Institucional nº 5**, de **13 de dezembro de 1968**, foi o instrumento mais violento da ditadura. Ele:\n\n` +
              `- **Fechou o Congresso Nacional** por tempo indeterminado\n` +
              `- **Suspendeu o habeas corpus** para crimes políticos\n` +
              `- Autorizou o presidente a **cassar mandatos** e **suspender direitos políticos**\n` +
              `- Instituiu a **censura prévia** a jornais, livros, músicas e teatro\n` +
              `- Permitiu demissão sumária de funcionários públicos e professores\n\n` +
              `O AI-5 inaugurou os **"anos de chumbo"** — o período mais repressivo da ditadura (governo Médici, 1969–1974). O aparato de repressão incluía:\n\n` +
              `- **DOI-CODI:** órgão de inteligência e tortura\n` +
              `- **DOPS:** polícia política estadual\n` +
              `- Prisões clandestinas, tortura sistemática, desaparecimentos e assassinatos\n\n` +
              `Opositores do regime — estudantes, sindicalistas, artistas, guerrilheiros — foram perseguidos. Muitos foram mortos ou "desapareceram". A cultura sofreu censura brutal: canções de **Chico Buarque** e **Caetano Veloso** eram proibidas ou tinham versos cortados.\n\n` +
              `> **O AI-5 é o divisor de águas da ditadura.** Antes dele, havia algum espaço para oposição legal. Depois, o regime se tornou abertamente terrorista contra seus próprios cidadãos.`,
          },
          {
            titulo: 'O Milagre Econômico e Suas Contradições',
            tipo: 'texto',
            corpo:
              `Paradoxalmente, o período mais repressivo coincidiu com o de maior crescimento econômico. O chamado **"Milagre Econômico" (1969–1973)** apresentou taxas de crescimento do PIB de até **14% ao ano**, impulsionado por:\n\n` +
              `- Grandes obras de infraestrutura: **Ponte Rio-Niterói**, **Rodovia Transamazônica**, **Usina de Itaipu**\n` +
              `- Entrada massiva de **capital estrangeiro** e empréstimos internacionais\n` +
              `- Expansão da indústria automobilística e de bens duráveis\n` +
              `- Propaganda ufanista: *"Brasil: ame-o ou deixe-o"*, Copa de 1970\n\n` +
              `## As contradições\n\n` +
              `O crescimento **não foi distribuído**. O ministro Delfim Netto usava a metáfora: *"É preciso primeiro fazer o bolo crescer para depois dividi-lo."* O bolo cresceu — mas nunca foi dividido:\n\n` +
              `- A **desigualdade de renda** aumentou drasticamente\n` +
              `- A **dívida externa** explodiu (de US$ 3,3 bi em 1964 para US$ 100 bi em 1984)\n` +
              `- Trabalhadores urbanos e rurais continuaram em condições precárias\n` +
              `- A inflação voltou com força após a crise do petróleo de **1973**\n\n` +
              `> **Causa → Consequência:** Milagre financiado por dívida → Choque do petróleo (1973) → Fim do crescimento → Crise econômica nos anos 80 → Pressão social por abertura.`,
          },
          {
            titulo: 'Abertura Política e Diretas Já',
            tipo: 'texto',
            corpo:
              `## A distensão "lenta, gradual e segura"\n\n` +
              `Com a economia em crise e a repressão insustentável, o presidente **Ernesto Geisel (1974–1979)** iniciou um processo de abertura controlada. A ideia era **devolver o poder aos civis sem que os militares fossem punidos**. Medidas incluíram:\n\n` +
              `- Revogação parcial do AI-5 em **1978**\n` +
              `- **Lei da Anistia (1979):** permitiu o retorno de exilados (como Leonel Brizola e Luís Carlos Prestes), mas também anistiou os torturadores — ponto de controvérsia até hoje\n` +
              `- Fim do bipartidarismo: surgimento de novos partidos (PT, PDT, PTB, PDS, PMDB)\n\n` +
              `O presidente **João Figueiredo (1979–1985)** deu continuidade à abertura, em meio a atentados de setores militares radicais que tentavam reverter o processo (como o **atentado do Riocentro**, 1981).\n\n` +
              `## O movimento Diretas Já (1983–1984)\n\n` +
              `Em **1983**, o deputado **Dante de Oliveira** apresentou uma emenda constitucional propondo **eleições diretas** para presidente. O movimento **Diretas Já** levou milhões de pessoas às ruas em comícios históricos — São Paulo reuniu 1,5 milhão de pessoas no Vale do Anhangabaú.\n\n` +
              `A emenda foi **rejeitada** no Congresso em abril de 1984 (não atingiu os 2/3 necessários). Mas a pressão popular tornou o regime insustentável. Em janeiro de 1985, o Colégio Eleitoral elegeu **Tancredo Neves** (oposição) como presidente — o primeiro civil desde 1964. Tancredo adoeceu antes da posse e morreu; assumiu seu vice, **José Sarney**.\n\n` +
              `A ditadura acabou não com uma ruptura revolucionária, mas com uma **transição negociada** — o que explica por que muitas estruturas de poder permaneceram intactas.\n\n` +
              `> **Reflexão:** O Brasil é o único país da América Latina que não julgou os responsáveis por torturas durante a ditadura. A Lei da Anistia de 1979 permanece vigente.`,
          },
          {
            titulo: 'Linha do Tempo — Ditadura Militar',
            tipo: 'tabela',
            corpo:
              `| Ano | Evento | Consequência |\n` +
              `|---|---|---|\n` +
              `| 1964 | Golpe militar | Jango deposto; Gen. Castelo Branco assume |\n` +
              `| 1964 | AI-1 | Cassações e suspensão de direitos políticos |\n` +
              `| 1965 | AI-2 | Bipartidarismo forçado (ARENA × MDB) |\n` +
              `| 1968 | AI-5 | Fechamento do Congresso; censura; tortura institucionalizada |\n` +
              `| 1969–73 | Milagre Econômico | PIB cresce até 14%/ano; dívida externa dispara |\n` +
              `| 1969–74 | Anos de Chumbo (Médici) | Repressão máxima; DOI-CODI; desaparecimentos |\n` +
              `| 1973 | Crise do Petróleo | Fim do milagre; início da crise econômica |\n` +
              `| 1978 | Revogação parcial do AI-5 | Início da abertura |\n` +
              `| 1979 | Lei da Anistia | Retorno de exilados; anistia a torturadores |\n` +
              `| 1984 | Diretas Já | Milhões nas ruas; emenda rejeitada |\n` +
              `| 1985 | Eleição de Tancredo Neves | Fim da ditadura; início da Nova República |`,
          },
          {
            titulo: 'Conexões Históricas e Legados',
            tipo: 'destaque',
            corpo:
              `Os três períodos estudados não são blocos isolados — formam uma **cadeia de causa e consequência** que explica o Brasil contemporâneo:\n\n` +
              `- A **concentração fundiária** do período colonial (capitanias, engenhos, sesmarias) **nunca foi revertida** — o Brasil jamais fez uma reforma agrária ampla.\n` +
              `- A **escravidão** (1500–1888) foi o mais longo sistema escravista das Américas. Seus efeitos na desigualdade racial e social persistem até hoje.\n` +
              `- A **CLT de Vargas** continua sendo a base dos direitos trabalhistas brasileiros, mesmo após reformas.\n` +
              `- O modelo de **industrialização por substituição de importações** (Vargas) definiu o perfil industrial do país por décadas.\n` +
              `- A **dívida externa** acumulada na ditadura gerou a crise dos anos 80 (a "década perdida") e a hiperinflação que só seria controlada com o **Plano Real (1994)**.\n` +
              `- A **Lei da Anistia** de 1979 permanece como um dos temas mais debatidos da justiça de transição brasileira.\n\n` +
              `> **Para o vestibular:** A UNIVESP valoriza respostas que conectam passado e presente. Se a questão perguntar sobre consequências de um evento colonial ou da ditadura, pense no impacto que ele tem **até hoje**.`,
          },
        ],
        imagemDescricao: 'Linha do tempo dos principais períodos da história do Brasil com eventos marcantes',
        dicasProva: [
          'Conecte sempre o evento histórico ao seu impacto social/econômico — a UNIVESP cobra análise, não datas.',
          'Era Vargas: associe CLT + industrialização + populismo — tudo está interligado.',
          'Ditadura Militar: AI-5 é o divisor de águas — saiba o antes e depois dele.',
          'Período Colonial: foque nos ciclos econômicos (pau-brasil, cana, ouro) e suas consequências sociais.',
          'Se a questão trouxer um texto de época, identifique primeiro O PERÍODO antes de analisar o conteúdo.',
        ],
        errosComuns: [
          'Achar que a Independência do Brasil (1822) acabou com a influência portuguesa — a elite permaneceu.',
          'Confundir Getúlio Vargas presidente eleito (1950) com Getúlio do Estado Novo (1937-1945).',
          'Pensar que o Milagre Econômico (1969-1973) beneficiou todas as classes — aumentou a desigualdade.',
          'Ignorar que a abolição (1888) não veio acompanhada de inclusão social dos ex-escravizados.',
          'Confundir o golpe de 1964 com o AI-5 (1968) — são eventos distintos com consequências diferentes.',
        ],
        exercicios: [
          {
            id: 'hist-brasil-1',
            enunciado: 'A Consolidação das Leis do Trabalho (CLT), criada em 1943, é associada ao governo de:',
            alternativas: [
              'Juscelino Kubitschek',
              'Getúlio Vargas',
              'João Goulart',
              'Eurico Gaspar Dutra',
              'Washington Luís',
            ],
            respostaCorreta: 1,
            explicacao: 'A CLT foi criada durante o Estado Novo de Getúlio Vargas (1937-1945). Vargas consolidou leis trabalhistas como estratégia populista para conquistar apoio das classes trabalhadoras urbanas, tornando-se conhecido como "pai dos pobres".',
            dificuldade: 'facil',
          },
          {
            id: 'hist-brasil-2',
            enunciado: 'O Ato Institucional nº 5 (AI-5), de 1968, representou:',
            alternativas: [
              'A abertura política e o retorno da democracia.',
              'O endurecimento da ditadura com suspensão de direitos constitucionais.',
              'A convocação de eleições diretas para presidente.',
              'A anistia dos presos políticos.',
              'A promulgação de uma nova constituição democrática.',
            ],
            respostaCorreta: 1,
            explicacao: 'O AI-5 foi o mais severo dos atos institucionais: fechou o Congresso, suspendeu habeas corpus para crimes políticos, instituiu censura prévia e permitiu cassação de mandatos. Marcou o início dos "anos de chumbo" da ditadura militar.',
            dificuldade: 'facil',
          },
          {
            id: 'hist-brasil-3',
            enunciado: 'Durante o período colonial brasileiro, o ciclo do ouro (séc. XVIII) teve como principal consequência:',
            alternativas: [
              'A concentração econômica exclusiva no litoral nordestino.',
              'A interiorização da colonização e o surgimento de cidades em Minas Gerais.',
              'A independência imediata do Brasil em relação a Portugal.',
              'A abolição da escravidão nas regiões mineradoras.',
              'O fortalecimento do poder local dos indígenas.',
            ],
            respostaCorreta: 1,
            explicacao: 'O ciclo do ouro provocou a interiorização da colonização. A descoberta de ouro em Minas Gerais atraiu milhares de pessoas, gerando cidades como Ouro Preto e Vila Rica, deslocando o eixo econômico do Nordeste para o Sudeste.',
            dificuldade: 'medio',
          },
          {
            id: 'hist-brasil-4',
            enunciado: 'O chamado "Milagre Econômico" (1969-1973) durante a ditadura militar caracterizou-se por:',
            alternativas: [
              'Redução da desigualdade social e distribuição de renda.',
              'Crescimento econômico acelerado com aumento da dívida externa e da desigualdade.',
              'Estagnação econômica e hiperinflação.',
              'Reforma agrária e fortalecimento da agricultura familiar.',
              'Nacionalização completa das empresas estrangeiras.',
            ],
            respostaCorreta: 1,
            explicacao: 'O Milagre Econômico foi um período de alto crescimento do PIB (até 14% ao ano), impulsionado por obras de infraestrutura e endividamento externo. Porém, a riqueza se concentrou: os ricos ficaram mais ricos e a desigualdade aumentou — o famoso "bolo que não foi dividido".',
            dificuldade: 'medio',
          },
          {
            id: 'hist-brasil-5',
            enunciado: 'A Lei Áurea (1888) aboliu a escravidão no Brasil. Sobre suas consequências, é correto afirmar que:',
            alternativas: [
              'Os ex-escravizados foram imediatamente integrados à sociedade com terras e empregos.',
              'A abolição resolveu completamente o problema racial no Brasil.',
              'Os ex-escravizados foram marginalizados, sem políticas de inclusão social.',
              'A monarquia foi fortalecida pelo apoio dos ex-escravizados.',
              'A economia cafeeira entrou em colapso imediato e irreversível.',
            ],
            respostaCorreta: 2,
            explicacao: 'A abolição não veio acompanhada de reforma agrária, educação ou políticas de integração. Os ex-escravizados foram "libertos" sem condições materiais, restando-lhes a marginalização social. Esse processo é raiz de desigualdades que persistem até hoje.',
            dificuldade: 'dificil',
          },
        ],
      },
    },
    {
      id: 'historia-geral-contemporanea',
      titulo: 'História Geral Contemporânea',
      peso: 30,
      conteudo: {
        resumo: 'Revolução Industrial, Revolução Francesa, Imperialismo e Guerra Fria — os quatro eixos da história contemporânea mais cobrados.',
        explicacao:
          'A UNIVESP cobra a compreensão de processos históricos globais e suas conexões com o Brasil e o mundo atual.\n\n**Revolução Industrial (séc. XVIII-XIX):**\n• Onde: Inglaterra (pioneira)\n• Causas: acúmulo de capital, cercamentos, matéria-prima das colônias\n• Consequências: urbanização, surgimento do proletariado, poluição, êxodo rural\n• Conexão: origem do capitalismo industrial moderno\n\n**Revolução Francesa (1789):**\n• Causas: crise financeira, desigualdade entre os três estados, Iluminismo\n• Fases: Assembleia Nacional → Convenção (Terror) → Diretório → Napoleão\n• Lema: Liberdade, Igualdade, Fraternidade\n• Legado: Declaração dos Direitos do Homem e do Cidadão, fim do Antigo Regime\n\n**Imperialismo (séc. XIX-XX):**\n• O que foi: dominação europeia sobre África e Ásia\n• Justificativas: "missão civilizatória", darwinismo social, busca por mercados\n• Consequências: exploração de recursos, fronteiras artificiais, conflitos étnicos até hoje\n• Conexão: raiz de conflitos atuais na África e Oriente Médio\n\n**Guerra Fria (1947-1991):**\n• Blocos: EUA (capitalista) × URSS (socialista)\n• Características: corrida armamentista, corrida espacial, guerras por procuração\n• Eventos-chave: Muro de Berlim (1961-1989), Crise dos Mísseis (1962), Guerra do Vietnã\n• Fim: queda do Muro de Berlim (1989) e dissolução da URSS (1991)',
        secoes: [
          {
            titulo: 'Introdução: Os Grandes Processos da Era Contemporânea',
            tipo: 'texto',
            corpo:
              `A história contemporânea cobrada pela UNIVESP organiza-se em três grandes processos interligados. A **Revolução Industrial** (séc. XVIII–XIX) transformou a economia, a sociedade e a relação entre capital e trabalho. O **Imperialismo** (séc. XIX–XX) foi consequência direta dessa industrialização: potências europeias, ávidas por matéria-prima e mercados consumidores, dominaram a África e a Ásia. A **Guerra Fria** (1947–1991) reorganizou o mundo em dois blocos ideológicos após as Guerras Mundiais — que, por sua vez, foram em grande parte causadas pelas rivalidades imperialistas.\n\n` +
              `Essa cadeia — **industrialização → imperialismo → guerras mundiais → guerra fria** — é o fio condutor que a banca examinadora espera que você domine. Não se trata de decorar datas, mas de entender **por que cada evento levou ao seguinte**.\n\n` +
              `> **Dica de estudo:** ao estudar cada tema, pergunte-se: *Quem ganhou poder? Quem perdeu? Que contradição gerou a crise seguinte?*`,
          },
          {
            titulo: 'A Primeira Revolução Industrial (c. 1760–1850)',
            tipo: 'texto',
            corpo:
              `## Por que a Inglaterra?\n\n` +
              `A Revolução Industrial começou na **Inglaterra** por uma combinação única de fatores:\n\n` +
              `- **Acúmulo de capital** proveniente do comércio colonial e do tráfico de escravizados\n` +
              `- **Cercamentos (Enclosure Acts):** grandes proprietários cercaram terras comunais, expulsando camponeses para as cidades — criando mão de obra disponível\n` +
              `- **Matéria-prima abundante:** carvão e ferro no subsolo britânico; algodão das colônias\n` +
              `- **Estabilidade política:** a Revolução Gloriosa (1688) estabeleceu uma monarquia parlamentar favorável aos negócios\n` +
              `- **Ética protestante:** valores de trabalho duro, poupança e investimento (tese de Max Weber)\n\n` +
              `## A máquina a vapor e o sistema fabril\n\n` +
              `A invenção decisiva foi a **máquina a vapor** de **James Watt** (aperfeiçoada em 1769). Antes dela, a produção dependia de força humana, animal ou hidráulica. Com o vapor, as fábricas podiam operar em qualquer lugar, em qualquer escala.\n\n` +
              `O **sistema fabril** substituiu o **sistema doméstico** (putting-out): em vez de artesãos produzindo em casa, trabalhadores reuniam-se em **fábricas**, operando máquinas que não lhes pertenciam. O trabalhador perdeu o controle sobre o processo produtivo — nascia o **proletariado**.\n\n` +
              `A indústria **têxtil** (algodão) foi o carro-chefe da 1ª Revolução Industrial: a **spinning jenny**, o **tear mecânico** e a máquina a vapor transformaram a Inglaterra na "oficina do mundo".\n\n` +
              `> **Causa → Consequência:** Cercamentos → Êxodo rural → Mão de obra urbana barata → Fábricas → Proletariado → Movimentos operários.`,
          },
          {
            titulo: 'A Segunda Revolução Industrial (c. 1850–1914)',
            tipo: 'texto',
            corpo:
              `A partir de meados do século XIX, novas fontes de energia e tecnologias inauguraram uma **segunda fase** da industrialização, que se espalhou para além da Inglaterra — alcançando **Alemanha, EUA, França, Bélgica e Japão**.\n\n` +
              `## Novas tecnologias\n\n` +
              `- **Eletricidade:** iluminação pública, motor elétrico, telégrafo, telefone\n` +
              `- **Petróleo:** motor a combustão interna → automóvel (Karl Benz, 1886) → indústria petroquímica\n` +
              `- **Aço (Processo Bessemer):** construção de ferrovias, pontes, arranha-céus, navios\n` +
              `- **Química industrial:** fertilizantes, explosivos (dinamite, Alfred Nobel), medicamentos\n\n` +
              `## Novas formas de organização\n\n` +
              `A produção ganhou escala com o **taylorismo** (divisão científica do trabalho) e, posteriormente, o **fordismo** (linha de montagem). Empresas cresceram e formaram **monopólios e cartéis** — concentrações de poder econômico que dominavam setores inteiros.\n\n` +
              `A 2ª Revolução Industrial foi **mais rápida, mais global e mais transformadora** que a primeira. Ela gerou a necessidade de **novos mercados consumidores** e **fontes de matéria-prima** — e é exatamente essa necessidade que explica o Imperialismo.\n\n` +
              `> **Conexão direta:** Superprodução industrial → Busca por mercados e matéria-prima → Expansão imperialista sobre a África e a Ásia.`,
          },
          {
            titulo: 'Comparação: 1ª vs 2ª Revolução Industrial',
            tipo: 'tabela',
            corpo:
              `| Aspecto | 1ª Revolução Industrial | 2ª Revolução Industrial |\n` +
              `|---|---|---|\n` +
              `| **Período** | c. 1760–1850 | c. 1850–1914 |\n` +
              `| **País líder** | Inglaterra | EUA, Alemanha, Inglaterra |\n` +
              `| **Energia** | Carvão / vapor | Eletricidade / petróleo |\n` +
              `| **Indústria-chave** | Têxtil (algodão) | Siderurgia, química, automobilística |\n` +
              `| **Transporte** | Ferrovia, navio a vapor | Automóvel, avião |\n` +
              `| **Organização** | Fábricas artesanais | Taylorismo, fordismo, monopólios |\n` +
              `| **Comunicação** | Imprensa | Telégrafo, telefone, rádio |\n` +
              `| **Impacto social** | Surgimento do proletariado | Sociedade de consumo de massa |`,
          },
          {
            titulo: 'Transformações Sociais da Industrialização',
            tipo: 'texto',
            corpo:
              `## A vida nas fábricas\n\n` +
              `As condições de trabalho na primeira fase industrial eram **brutais**. Jornadas de **14 a 16 horas**, sem descanso semanal. Mulheres e crianças (a partir dos 5 anos!) trabalhavam por salários ainda menores. Não havia legislação trabalhista, segurança ou limite de jornada. Acidentes eram comuns e frequentemente fatais.\n\n` +
              `As cidades industriais como **Manchester** e **Liverpool** cresceram sem planejamento: cortiços insalubres, esgoto a céu aberto, epidemias de cólera e tifo. A expectativa de vida de um operário industrial era de cerca de **30 anos**.\n\n` +
              `## Reações dos trabalhadores\n\n` +
              `Diante da exploração, os trabalhadores reagiram de várias formas:\n\n` +
              `- **Ludismo (1811–1816):** movimento de destruição de máquinas, liderado por artesãos que perderam seus empregos para a mecanização. O nome vem de **Ned Ludd**, personagem possivelmente fictício. Não era um movimento anti-tecnologia: era um protesto contra a **precarização do trabalho**.\n` +
              `- **Cartismo (1838–1857):** primeiro grande movimento político operário. Reivindicava sufrágio universal masculino, voto secreto, salário para parlamentares. A "Carta do Povo" reuniu milhões de assinaturas.\n` +
              `- **Sindicalismo (Trade Unions):** a partir de 1824, quando as associações operárias foram legalizadas na Inglaterra, sindicatos passaram a negociar coletivamente por melhores condições.\n` +
              `- **Socialismo:** pensadores como **Karl Marx** e **Friedrich Engels** propuseram uma análise científica do capitalismo. O **Manifesto Comunista** (1848) e **O Capital** (1867) tornaram-se base dos movimentos socialistas e comunistas do século XX.\n\n` +
              `> **Cadeia:** Exploração fabril → Ludismo (reação imediata) → Cartismo (consciência política) → Sindicalismo (organização) → Socialismo (teoria revolucionária).`,
          },
          {
            titulo: 'O Imperialismo e o Neocolonialismo (séc. XIX–XX)',
            tipo: 'texto',
            corpo:
              `## O que foi o Imperialismo?\n\n` +
              `O Imperialismo do século XIX — também chamado de **Neocolonialismo** — foi a dominação política, econômica e cultural de territórios na **África** e na **Ásia** por potências industriais europeias (principalmente **Inglaterra, França, Bélgica, Alemanha, Itália e Portugal**). Diferente do colonialismo dos séculos XVI–XVII (que focava nas Américas), o neocolonialismo tinha motivações **industriais**.\n\n` +
              `## Causas\n\n` +
              `- **Econômicas:** busca por **matéria-prima** (borracha, marfim, diamantes, algodão, petróleo) e **mercados consumidores** para a produção industrial excedente\n` +
              `- **Políticas:** rivalidade entre potências europeias — ter colônias era sinônimo de **prestígio e poder**\n` +
              `- **Ideológicas:** a "missão civilizatória" — a crença (racista) de que os europeus tinham o dever de "civilizar" povos "inferiores"\n` +
              `- **Pseudocientíficas:** o **darwinismo social** aplicava a teoria da seleção natural às sociedades humanas, justificando a dominação dos "mais aptos"\n\n` +
              `## Mecanismos de dominação\n\n` +
              `As potências europeias usaram múltiplas estratégias:\n\n` +
              `- **Superioridade militar:** metralhadoras, canhões e navios a vapor contra lanças e escudos\n` +
              `- **Tratados desiguais:** impostos a líderes locais sob ameaça de força\n` +
              `- **Divisão étnica:** manipulação de rivalidades entre grupos locais (dividir para conquistar)\n` +
              `- **Infraestrutura de extração:** ferrovias e portos construídos não para benefício local, mas para escoar recursos para a Europa`,
          },
          {
            titulo: 'A Conferência de Berlim (1884–1885)',
            tipo: 'importante',
            corpo:
              `A **Conferência de Berlim** foi o evento que formalizou a **partilha da África** entre as potências europeias. Convocada pelo chanceler alemão **Otto von Bismarck**, reuniu 14 países europeus — **nenhum representante africano foi convidado**.\n\n` +
              `## Decisões principais\n\n` +
              `- A África foi dividida em zonas de influência com **fronteiras retas**, ignorando completamente etnias, culturas e reinos existentes\n` +
              `- Qualquer potência que "ocupasse efetivamente" um território podia reivindicá-lo\n` +
              `- A bacia do rio Congo foi atribuída ao rei **Leopoldo II da Bélgica** como propriedade pessoal — o que resultou em um dos maiores genocídios da história (estima-se 10 milhões de mortos)\n\n` +
              `## Consequências de longo prazo\n\n` +
              `As fronteiras artificiais da Conferência de Berlim são a raiz de **conflitos étnicos que persistem até hoje** em países como Ruanda, Nigéria, Sudão e República Democrática do Congo. Grupos étnicos rivais foram forçados a conviver no mesmo Estado, enquanto etnias unidas foram separadas por fronteiras arbitrárias.\n\n` +
              `> **Para o vestibular:** Quando uma questão mencionar conflitos étnicos na África contemporânea, conecte-os à partilha imperial — a UNIVESP cobra essa relação causa-consequência.`,
          },
          {
            titulo: 'Partilha Colonial — Principais Impérios',
            tipo: 'tabela',
            corpo:
              `| Potência | Principais colônias na África | Principais colônias na Ásia |\n` +
              `|---|---|---|\n` +
              `| **Inglaterra** | Egito, Nigéria, África do Sul, Quênia | Índia, Birmânia, Malásia |\n` +
              `| **França** | Argélia, Marrocos, Madagascar, Senegal | Indochina (Vietnã, Laos, Camboja) |\n` +
              `| **Bélgica** | Congo (propriedade pessoal de Leopoldo II) | — |\n` +
              `| **Alemanha** | Tanganica, Namíbia, Camarões | Ilhas do Pacífico |\n` +
              `| **Portugal** | Angola, Moçambique, Guiné-Bissau | Macau, Timor-Leste |\n` +
              `| **Itália** | Líbia, Eritreia, Somália | — |\n\n` +
              `> Em **1914**, cerca de **90% do território africano** estava sob domínio europeu.`,
          },
          {
            titulo: 'A Guerra Fria — Bipolaridade Mundial (1947–1991)',
            tipo: 'texto',
            corpo:
              `## Origem\n\n` +
              `Ao final da Segunda Guerra Mundial (1945), as duas superpotências vencedoras — **Estados Unidos** e **União Soviética** — emergiram com visões de mundo incompatíveis:\n\n` +
              `- **EUA:** capitalismo, democracia liberal, livre mercado, propriedade privada\n` +
              `- **URSS:** socialismo, economia planificada, partido único, propriedade coletiva\n\n` +
              `A aliança contra o nazismo desmoronou rapidamente. Em **1947**, o presidente Truman proclamou a **Doutrina Truman** (contenção do comunismo) e lançou o **Plano Marshall** (reconstrução econômica da Europa Ocidental para afastá-la do socialismo). A URSS respondeu com o **Comecon** (bloco econômico socialista) e, em 1955, o **Pacto de Varsóvia** (aliança militar).\n\n` +
              `## Características da Guerra Fria\n\n` +
              `A principal característica era a **bipolaridade**: o mundo dividido em dois blocos, com zonas de influência definidas. O confronto **nunca foi direto** entre EUA e URSS — o risco de destruição nuclear mútua (**MAD — Mutual Assured Destruction**) impedia. Em vez disso, as superpotências disputavam influência por meios indiretos:\n\n` +
              `- **Corrida armamentista:** ambas acumularam arsenais nucleares capazes de destruir o planeta várias vezes\n` +
              `- **Corrida espacial:** URSS lançou o **Sputnik** (1957, primeiro satélite) e enviou **Yuri Gagarin** ao espaço (1961); EUA responderam com a chegada à **Lua** (1969, Apollo 11)\n` +
              `- **Propaganda e espionagem:** CIA (EUA) e KGB (URSS) operavam globalmente\n` +
              `- **Guerras por procuração (proxy wars):** conflitos armados em países do Terceiro Mundo, com cada superpotência apoiando um lado`,
          },
          {
            titulo: 'Guerras por Procuração e Crises',
            tipo: 'texto',
            corpo:
              `As guerras por procuração foram o rosto mais violento da Guerra Fria. Em vez de se enfrentarem diretamente, EUA e URSS financiavam, armavam e treinavam facções em conflitos regionais:\n\n` +
              `**Guerra da Coreia (1950–1953)**\n` +
              `- Coreia do Norte (apoio soviético/chinês) × Coreia do Sul (apoio americano)\n` +
              `- Resultado: armistício sem tratado de paz; a divisão persiste até hoje\n\n` +
              `**Guerra do Vietnã (1955–1975)**\n` +
              `- Vietnã do Norte (comunista, apoio soviético) × Vietnã do Sul (apoio americano)\n` +
              `- Os EUA enviaram mais de 500 mil soldados e foram derrotados\n` +
              `- Resultado: reunificação comunista do Vietnã em 1975\n\n` +
              `**Crise dos Mísseis de Cuba (1962)**\n` +
              `- A URSS instalou mísseis nucleares em Cuba, a 150 km dos EUA\n` +
              `- O mundo esteve à beira da guerra nuclear por **13 dias**\n` +
              `- Desfecho: URSS retirou os mísseis; EUA se comprometeram a não invadir Cuba\n\n` +
              `**Outros conflitos proxy:** Angola, Moçambique, Afeganistão (invasão soviética, 1979–1989), Nicarágua, Etiópia\n\n` +
              `> **Atenção:** Em todos esses conflitos, quem mais sofreu foram as **populações locais**, usadas como peões geopolíticos pelas superpotências.`,
          },
          {
            titulo: 'O Fim da Guerra Fria',
            tipo: 'texto',
            corpo:
              `## A crise soviética\n\n` +
              `Nos anos 1980, a URSS enfrentava graves problemas: economia estagnada, burocracia ineficiente, gastos militares insustentáveis e descontentamento popular crescente. Em **1985**, **Mikhail Gorbachev** assumiu a liderança e lançou duas políticas reformistas:\n\n` +
              `- **Glasnost** (transparência): abertura política, liberdade de imprensa, autocrítica\n` +
              `- **Perestroika** (reestruturação): reformas econômicas que introduziam elementos de mercado\n\n` +
              `As reformas, em vez de salvar o sistema, **aceleraram seu colapso**. A liberdade de expressão revelou décadas de repressão e incompetência; as reformas econômicas geraram instabilidade sem criar prosperidade.\n\n` +
              `## A queda do Muro de Berlim (9 de novembro de 1989)\n\n` +
              `O **Muro de Berlim**, construído em **1961** para impedir a fuga de cidadãos da Alemanha Oriental (socialista) para a Ocidental (capitalista), era o **símbolo máximo** da divisão da Guerra Fria. Quando o governo da Alemanha Oriental anunciou a abertura das fronteiras em 9 de novembro de 1989, milhares de pessoas começaram a derrubar o muro com picaretas e martelos. As cenas foram transmitidas ao vivo para o mundo inteiro.\n\n` +
              `A **reunificação alemã** ocorreu em **3 de outubro de 1990**. Um a um, os regimes socialistas da Europa Oriental caíram: Polônia, Hungria, Tchecoslováquia, Romênia, Bulgária.\n\n` +
              `## A dissolução da URSS (1991)\n\n` +
              `Em **25 de dezembro de 1991**, Gorbachev renunciou e a bandeira soviética foi baixada do Kremlin pela última vez. A **União Soviética deixou de existir**, fragmentando-se em 15 repúblicas independentes (Rússia, Ucrânia, etc.). Os EUA emergiram como única superpotência global — iniciava-se a era **unipolar**.`,
          },
          {
            titulo: 'Linha do Tempo — Guerra Fria',
            tipo: 'tabela',
            corpo:
              `| Ano | Evento | Significado |\n` +
              `|---|---|---|\n` +
              `| 1945 | Fim da 2ª Guerra Mundial | EUA e URSS emergem como superpotências |\n` +
              `| 1947 | Doutrina Truman / Plano Marshall | Início oficial da Guerra Fria |\n` +
              `| 1949 | OTAN / URSS testa bomba atômica | Aliança ocidental; equilíbrio nuclear |\n` +
              `| 1950–53 | Guerra da Coreia | Primeiro grande proxy war |\n` +
              `| 1955 | Pacto de Varsóvia | Aliança militar do bloco socialista |\n` +
              `| 1957 | Sputnik (URSS) | Início da corrida espacial |\n` +
              `| 1961 | Muro de Berlim erguido | Símbolo da divisão Leste-Oeste |\n` +
              `| 1962 | Crise dos Mísseis de Cuba | Mundo à beira da guerra nuclear |\n` +
              `| 1969 | Apollo 11 (EUA na Lua) | Vitória americana na corrida espacial |\n` +
              `| 1979–89 | Invasão soviética do Afeganistão | "Vietnã da URSS"; desgaste militar |\n` +
              `| 1985 | Glasnost e Perestroika | Reformas que aceleraram o colapso soviético |\n` +
              `| 1989 | Queda do Muro de Berlim | Fim simbólico da Guerra Fria |\n` +
              `| 1991 | Dissolução da URSS | Fim oficial da Guerra Fria; unipolaridade |`,
          },
          {
            titulo: 'Cadeia de Causa e Consequência — Visão Integrada',
            tipo: 'destaque',
            corpo:
              `Os três temas deste tópico formam uma **cadeia histórica contínua**. Entender essa conexão é o que diferencia uma resposta mediana de uma resposta excelente no vestibular:\n\n` +
              `**Revolução Industrial** (séc. XVIII–XIX)\n` +
              `→ Superprodução industrial + necessidade de matéria-prima\n` +
              `→ **Imperialismo** (séc. XIX–XX): dominação da África e Ásia\n` +
              `→ Rivalidades imperialistas entre potências europeias\n` +
              `→ **1ª Guerra Mundial** (1914–1918)\n` +
              `→ Tratado de Versalhes humilha a Alemanha\n` +
              `→ Ascensão do nazifascismo\n` +
              `→ **2ª Guerra Mundial** (1939–1945)\n` +
              `→ Mundo dividido entre EUA e URSS\n` +
              `→ **Guerra Fria** (1947–1991)\n` +
              `→ Queda da URSS → Globalização → Mundo atual\n\n` +
              `> **Para o vestibular:** Se a questão pedir para "relacionar" ou "contextualizar" um evento, use essa cadeia. Exemplo: *"O Imperialismo foi consequência da Revolução Industrial e causa das Guerras Mundiais."* — essa frase simples demonstra compreensão histórica e rende pontos.`,
          },
        ],
        imagemDescricao: 'Mapa-múndi dividido em blocos da Guerra Fria com eventos-chave indicados por marcadores',
        formulasChave: [
          'Revolução Industrial = máquina a vapor + fábrica + proletariado',
          'Revolução Francesa = Iluminismo + crise financeira + queda do Antigo Regime',
          'Imperialismo = potências europeias + dominação da África/Ásia + exploração',
          'Guerra Fria = EUA × URSS + corrida armamentista + bipolaridade',
          'Capitalismo × Socialismo = eixo central da Guerra Fria',
        ],
        dicasProva: [
          'Se a questão mencionar "revolução burguesa" ou "queda do Antigo Regime", é Revolução Francesa.',
          'Imperialismo e neocolonialismo são temas que a UNIVESP conecta com problemas atuais da África.',
          'Guerra Fria: nunca houve confronto direto EUA × URSS — as guerras eram "por procuração" (Coreia, Vietnã).',
          'Revolução Industrial: associe urbanização + condições precárias de trabalho + surgimento de sindicatos.',
          'Conecte eventos: Rev. Industrial → Imperialismo → Guerras Mundiais → Guerra Fria.',
        ],
        errosComuns: [
          'Achar que na Guerra Fria houve guerra direta entre EUA e URSS — o conflito era ideológico e indireto.',
          'Confundir Revolução Industrial (econômica/tecnológica) com Revolução Francesa (política/social).',
          'Pensar que o Imperialismo foi "benéfico" para as colônias — foi exploração e dominação.',
          'Ignorar o papel do Iluminismo como base intelectual da Revolução Francesa.',
          'Esquecer que a Revolução Industrial teve DUAS fases: 1ª (vapor, têxtil) e 2ª (eletricidade, aço, petróleo).',
        ],
        exercicios: [
          {
            id: 'hist-geral-1',
            enunciado: 'A Revolução Industrial, iniciada na Inglaterra no século XVIII, teve como uma de suas principais consequências:',
            alternativas: [
              'A valorização do trabalho artesanal e das corporações de ofício.',
              'O êxodo rural e o crescimento desordenado das cidades.',
              'A distribuição igualitária de renda entre operários e industriais.',
              'O fortalecimento do sistema feudal europeu.',
              'A redução da poluição ambiental nas grandes cidades.',
            ],
            respostaCorreta: 1,
            explicacao: 'A industrialização atraiu camponeses para as cidades em busca de emprego nas fábricas, causando êxodo rural massivo. As cidades cresceram sem planejamento, gerando condições precárias de habitação e trabalho para o nascente proletariado.',
            dificuldade: 'facil',
          },
          {
            id: 'hist-geral-2',
            enunciado: 'O lema "Liberdade, Igualdade, Fraternidade" está associado a:',
            alternativas: [
              'Revolução Americana (1776)',
              'Revolução Francesa (1789)',
              'Revolução Russa (1917)',
              'Revolução Industrial (séc. XVIII)',
              'Revolução Cubana (1959)',
            ],
            respostaCorreta: 1,
            explicacao: '"Liberté, Égalité, Fraternité" é o lema da Revolução Francesa. Sintetiza os ideais iluministas que motivaram a queda do Antigo Regime e a busca por uma sociedade baseada em direitos individuais, igualdade perante a lei e solidariedade.',
            dificuldade: 'facil',
          },
          {
            id: 'hist-geral-3',
            enunciado: 'O Imperialismo europeu do século XIX justificou a dominação de territórios na África e Ásia com base em:',
            alternativas: [
              'Princípios democráticos e respeito à autodeterminação dos povos.',
              'A "missão civilizatória" e o darwinismo social.',
              'Acordos de cooperação econômica igualitária.',
              'O respeito às fronteiras e culturas locais.',
              'A promoção da industrialização nos territórios dominados.',
            ],
            respostaCorreta: 1,
            explicacao: 'O Imperialismo se apoiava em ideologias como a "missão civilizatória" (levar "progresso" aos povos "atrasados") e o darwinismo social (suposta superioridade racial europeia). Na prática, era exploração econômica e dominação política.',
            dificuldade: 'medio',
          },
          {
            id: 'hist-geral-4',
            enunciado: 'A Guerra Fria (1947-1991) foi caracterizada por:',
            alternativas: [
              'Confronto militar direto entre EUA e URSS em território europeu.',
              'Bipolaridade ideológica, corrida armamentista e guerras por procuração.',
              'Aliança entre EUA e URSS contra o terrorismo internacional.',
              'Domínio exclusivo dos EUA sobre a política mundial.',
              'Ausência total de conflitos armados no período.',
            ],
            respostaCorreta: 1,
            explicacao: 'A Guerra Fria se caracterizou pela bipolaridade (capitalismo × socialismo), corrida armamentista nuclear e conflitos indiretos ("por procuração") em países como Coreia, Vietnã e Angola. Nunca houve confronto direto entre as duas superpotências.',
            dificuldade: 'medio',
          },
          {
            id: 'hist-geral-5',
            enunciado: 'A queda do Muro de Berlim (1989) simbolizou:',
            alternativas: [
              'O início da Guerra Fria entre EUA e URSS.',
              'A reunificação da Alemanha e o fim simbólico da Guerra Fria.',
              'A vitória militar da URSS sobre os EUA.',
              'O fortalecimento do bloco socialista na Europa.',
              'A criação da União Europeia.',
            ],
            respostaCorreta: 1,
            explicacao: 'A queda do Muro de Berlim em 9 de novembro de 1989 é o marco simbólico do fim da Guerra Fria. Representou a reunificação da Alemanha (1990) e o colapso do bloco socialista europeu, que culminou na dissolução da URSS em 1991.',
            dificuldade: 'dificil',
          },
        ],
      },
    },
    {
      id: 'antiguidade-idade-media',
      titulo: 'Antiguidade e Idade Média',
      peso: 20,
      conteudo: {
        resumo: 'Roma (República e Império), Feudalismo e Igreja Medieval — organização social, economia e legados históricos.',
        explicacao:
          'Este tópico abrange dois grandes períodos que fundamentam a compreensão da civilização ocidental.\n\n**Roma — República (509-27 a.C.):**\n• Governo: Senado + Cônsules + Assembleias\n• Sociedade: patrícios (elite) × plebeus (povo)\n• Conquistas: expansão territorial pelo Mediterrâneo\n• Crise: guerras civis, concentração de poder → fim da República\n\n**Roma — Império (27 a.C. - 476 d.C.):**\n• Governo: poder centralizado no imperador\n• Auge: Pax Romana (estabilidade e expansão)\n• Legados: direito romano, latim (origem das línguas românicas), engenharia (estradas, aquedutos)\n• Queda: invasões bárbaras, crise econômica, divisão do império\n\n**Feudalismo (séc. V-XV):**\n• Contexto: queda de Roma → descentralização do poder\n• Estrutura: rei → suserano → vassalo → servos\n• Economia: autossuficiente, baseada na terra (feudo)\n• Relações: suserania-vassalagem (proteção em troca de serviço)\n• Servos: presos à terra, pagavam impostos ao senhor feudal\n\n**Igreja Medieval:**\n• Papel: maior instituição da Idade Média, unificadora cultural\n• Poder: terras, cobrança de dízimos, Tribunal da Inquisição\n• Influência: controlava educação, arte e moral\n• Cruzadas (séc. XI-XIII): expedições militares-religiosas para retomar Jerusalém',
        secoes: [
          {
            titulo: 'Introdução: Das Origens de Roma à Idade Moderna',
            tipo: 'texto',
            corpo:
              `Este tópico percorre quase **dois mil anos** de história — da fundação de Roma (753 a.C.) até a transição para a Idade Moderna (séc. XV). Embora pareça um período distante, seus legados estão presentes no cotidiano: o **direito romano** fundamenta sistemas jurídicos no mundo todo, o **latim** originou o português, espanhol, francês e italiano, e conceitos como **república**, **senado** e **cidadania** foram inventados em Roma.\n\n` +
              `O **Feudalismo** — sistema que dominou a Europa por séculos após a queda de Roma — moldou a organização social, a relação com a terra e as hierarquias de poder que persistiram até as revoluções modernas. Por fim, as **Cruzadas**, a **Peste Negra** e o **Renascimento Comercial** encerraram a Idade Média e abriram caminho para as Grandes Navegações e o mundo que conhecemos.\n\n` +
              `> **Dica de estudo:** A UNIVESP cobra a compreensão de **processos longos** — como um sistema nasce, funciona, entra em crise e é substituído por outro. Foque nos *porquês*, não nas datas isoladas.`,
          },
          {
            titulo: 'Roma — Da Monarquia à República (753–27 a.C.)',
            tipo: 'texto',
            corpo:
              `## A Monarquia (753–509 a.C.)\n\n` +
              `Segundo a tradição, Roma foi fundada em **753 a.C.** por **Rômulo** (a lenda dos gêmeos amamentados por uma loba). Na prática, era uma pequena cidade-estado no centro da Península Itálica, governada por **reis** — os últimos dos quais eram etruscos.\n\n` +
              `A Monarquia romana tinha três pilares: o **Rei** (poder executivo e religioso), o **Senado** (conselho de anciãos patrícios) e a **Assembleia Curiata** (representação do povo). O último rei, **Tarquínio, o Soberbo**, foi deposto em **509 a.C.** por sua tirania — e os romanos juraram nunca mais ter reis.\n\n` +
              `## A República (509–27 a.C.)\n\n` +
              `A República substituiu o poder de um homem só por um sistema de **poder dividido**:\n\n` +
              `- **Cônsules (2):** eleitos anualmente, governavam juntos — um podia vetar o outro\n` +
              `- **Senado:** controlado pelos **patrícios** (aristocracia fundiária), era o verdadeiro centro de poder\n` +
              `- **Assembleias populares:** representavam os **plebeus** (cidadãos comuns)\n` +
              `- **Tribunos da Plebe:** magistrados com poder de **veto** para proteger os plebeus contra abusos dos patrícios\n\n` +
              `A tensão entre patrícios e plebeus marcou toda a República. Ao longo dos séculos, os plebeus conquistaram direitos: as **Leis das Doze Tábuas** (450 a.C.) — primeiro código escrito de Roma — e o acesso a cargos públicos.\n\n` +
              `## Expansão e crise\n\n` +
              `Roma expandiu-se agressivamente, conquistando toda a Península Itálica, o Mediterrâneo (após as **Guerras Púnicas** contra Cartago) e vastos territórios na Europa, Ásia Menor e norte da África. Mas a expansão gerou crises internas:\n\n` +
              `- **Concentração de terras:** generais vitoriosos acumulavam terras, formando latifúndios\n` +
              `- **Exército profissional:** soldados leais aos generais, não à República\n` +
              `- **Guerras civis:** **Mário × Sila**, depois **César × Pompeu**, depois **Otávio × Marco Antônio**\n\n` +
              `**Júlio César** cruzou o rio Rubicão (49 a.C.), tornou-se ditador perpétuo e foi **assassinado no Senado** em 44 a.C. (os famosos "Idos de Março"). Seu sobrinho-neto **Otávio** venceu as guerras subsequentes e, em **27 a.C.**, recebeu o título de **Augusto** — nasceu o Império.`,
          },
          {
            titulo: 'Roma Imperial — Auge e Declínio (27 a.C.–476 d.C.)',
            tipo: 'texto',
            corpo:
              `## A Pax Romana (27 a.C.–180 d.C.)\n\n` +
              `Sob **Augusto** e seus sucessores, Roma viveu cerca de dois séculos de relativa estabilidade — a **Pax Romana**. O império atingiu sua extensão máxima sob **Trajano** (98–117 d.C.), abrangendo da Britânia (Inglaterra) à Mesopotâmia (Iraque). As características do período incluem:\n\n` +
              `- **Centralização:** o imperador acumulava poderes executivos, legislativos, militares e religiosos\n` +
              `- **Infraestrutura monumental:** estradas pavimentadas (50.000 km de *viae*), aquedutos, termas, anfiteatros (Coliseu, 80 d.C.)\n` +
              `- **"Pão e Circo" (*panem et circenses*):** distribuição gratuita de grãos e espetáculos no Coliseu para manter a população urbana satisfeita\n` +
              `- **Direito romano:** sistema jurídico sofisticado, com conceitos que fundamentam o direito civil moderno (propriedade, contratos, testamentos, defesa no tribunal)\n\n` +
              `## A crise do século III (235–284 d.C.)\n\n` +
              `A partir do século III, o Império entrou em crise profunda:\n\n` +
              `- **Instabilidade política:** em 50 anos, Roma teve mais de 20 imperadores — a maioria assassinada\n` +
              `- **Crise econômica:** inflação, queda da produção agrícola, interrupção do comércio\n` +
              `- **Pressão nas fronteiras:** povos germânicos (os chamados "bárbaros") pressionavam as fronteiras do Reno e do Danúbio\n` +
              `- **Epidemias:** a Praga de Cipriano (250–270 d.C.) matou milhões\n\n` +
              `## Divisão e queda\n\n` +
              `Em **285 d.C.**, o imperador **Diocleciano** dividiu o Império em duas metades administrativas (Ocidente e Oriente). **Constantino** (306–337 d.C.) reunificou temporariamente o império, fundou **Constantinopla** (atual Istambul) e tornou o **cristianismo** religião tolerada (Édito de Milão, 313 d.C.).\n\n` +
              `O **Império Romano do Ocidente** caiu definitivamente em **476 d.C.**, quando o último imperador, **Rômulo Augusto**, foi deposto pelo germânico **Odoacro**. Essa data marca convencionalmente o **fim da Antiguidade e início da Idade Média**.\n\n` +
              `O **Império Romano do Oriente (Bizantino)** sobreviveu até **1453**, quando Constantinopla foi tomada pelos turcos otomanos.\n\n` +
              `> **Causa → Consequência:** Expansão excessiva → Crise militar e econômica → Divisão do Império → Invasões germânicas → Queda de Roma (476) → Fragmentação do poder → Feudalismo.`,
          },
          {
            titulo: 'Legados de Roma para a Civilização Ocidental',
            tipo: 'destaque',
            corpo:
              `Os legados romanos são cobrados com frequência no vestibular. Os principais:\n\n` +
              `- **Direito Romano:** base dos sistemas jurídicos de quase toda a Europa e América Latina. Conceitos como *habeas corpus*, propriedade privada, presunção de inocência e contratos escritos vêm de Roma.\n` +
              `- **Latim:** língua oficial do Império, originou as **línguas românicas**: português, espanhol, francês, italiano, romeno.\n` +
              `- **Engenharia e urbanismo:** estradas, aquedutos, esgotos (a *Cloaca Máxima* de Roma ainda funciona), arcos, abóbadas e concreto romano.\n` +
              `- **República como forma de governo:** o conceito de poder dividido, eleições e mandatos limitados.\n` +
              `- **Arquitetura monumental:** o Coliseu, o Panteão, os arcos do triunfo — modelos copiados por séculos.\n` +
              `- **Calendário:** o calendário juliano (Júlio César, 46 a.C.) é a base do calendário gregoriano que usamos hoje. Os nomes dos meses vêm do latim (janeiro = *Ianuarius*, março = *Martius*).`,
          },
          {
            titulo: 'Linha do Tempo — Roma',
            tipo: 'tabela',
            corpo:
              `| Período | Datas | Governo | Evento-chave |\n` +
              `|---|---|---|---|\n` +
              `| Monarquia | 753–509 a.C. | Reis | Fundação; influência etrusca |\n` +
              `| República | 509–27 a.C. | Senado + Cônsules | Expansão; Guerras Púnicas; guerras civis |\n` +
              `| Transição | 49–27 a.C. | Ditadores/triunviratos | Júlio César; assassinato; Otávio vence |\n` +
              `| Alto Império | 27 a.C.–284 d.C. | Imperadores | Pax Romana; auge territorial; cristianismo |\n` +
              `| Baixo Império | 284–476 d.C. | Imperadores | Divisão; invasões germânicas; queda |\n` +
              `| Império Bizantino | 330–1453 d.C. | Imperadores orientais | Constantinopla; sobrevive até 1453 |`,
          },
          {
            titulo: 'O Feudalismo — Estrutura e Sociedade (séc. V–XV)',
            tipo: 'texto',
            corpo:
              `## Contexto: o mundo pós-Roma\n\n` +
              `Com a queda do Império Romano do Ocidente (476 d.C.), a Europa mergulhou em um longo período de **descentralização política, ruralização e insegurança**. Não havia mais um Estado centralizado capaz de manter estradas, cobrar impostos ou garantir segurança. Cidades esvaziaram-se; o comércio praticamente desapareceu; a moeda perdeu função. Nesse vácuo de poder, emergiu o **Feudalismo**.\n\n` +
              `## O que era o Feudalismo?\n\n` +
              `O Feudalismo não foi um sistema planejado — surgiu organicamente da necessidade de **proteção e sobrevivência**. Seu funcionamento baseava-se em três pilares:\n\n` +
              `**1. A terra (feudo)**\n` +
              `A terra era a base de tudo — riqueza, poder e prestígio. Quem tinha terra, tinha poder. O **feudo** era uma propriedade agrícola concedida por um **suserano** a um **vassalo** em troca de lealdade e serviço.\n\n` +
              `**2. As relações de suserania e vassalagem**\n` +
              `Eram relações **pessoais e recíprocas** entre nobres:\n` +
              `- O **suserano** concedia terras e proteção\n` +
              `- O **vassalo** jurava fidelidade e oferecia serviço militar\n` +
              `- A cerimônia de **homenagem** selava o pacto\n` +
              `- Um mesmo nobre podia ser suserano de uns e vassalo de outros — criando uma cadeia hierárquica complexa\n\n` +
              `**3. A sociedade estamental**\n` +
              `A sociedade feudal era dividida em **estamentos** (camadas rígidas, sem mobilidade social):\n` +
              `- **Clero** (os que rezam): monges, padres, bispos, o Papa — primeiro estamento\n` +
              `- **Nobreza** (os que lutam): reis, duques, condes, barões, cavaleiros — segundo estamento\n` +
              `- **Servos e camponeses** (os que trabalham): a imensa maioria da população — terceiro estamento\n\n` +
              `> **Conceito fundamental:** A sociedade feudal era **estática** — nascia-se servo, morria-se servo. A posição social era determinada pelo nascimento, não pelo mérito.`,
          },
          {
            titulo: 'A Economia Feudal e a Vida dos Servos',
            tipo: 'texto',
            corpo:
              `## Economia autossuficiente\n\n` +
              `Cada feudo funcionava como uma unidade econômica quase **autossuficiente**. Produzia-se internamente quase tudo o que era necessário: alimentos, roupas, ferramentas, móveis. O comércio externo era mínimo — limitado a produtos como sal, ferro e especiarias.\n\n` +
              `A base produtiva era a **agricultura de subsistência**. As terras do feudo dividiam-se em:\n\n` +
              `- **Manso senhorial (reserva):** terras do senhor feudal, trabalhadas gratuitamente pelos servos\n` +
              `- **Manso servil (tenências):** lotes cedidos aos servos para seu próprio sustento\n` +
              `- **Terras comunais:** pastagens e florestas de uso coletivo\n\n` +
              `## A vida dos servos\n\n` +
              `Os servos **não eram escravos** — essa distinção é importante e cobrada em provas. Diferenças cruciais:\n\n` +
              `- Servos estavam **vinculados à terra**, não ao senhor. Se a terra mudasse de dono, os servos iam junto.\n` +
              `- Servos **não podiam ser comprados ou vendidos** individualmente\n` +
              `- Servos tinham direito a uma porção de terra para seu sustento\n` +
              `- Porém: servos **não podiam deixar o feudo** sem permissão\n\n` +
              `Em troca de proteção e moradia, os servos pagavam **pesados tributos**:\n\n` +
              `- **Corveia:** trabalho gratuito nas terras do senhor (2–3 dias por semana)\n` +
              `- **Talha:** parte da produção do servo (geralmente metade) entregue ao senhor\n` +
              `- **Banalidades:** taxas pelo uso do moinho, forno e prensa do senhor feudal\n` +
              `- **Dízimo:** 10% da produção destinado à Igreja\n` +
              `- **Mão-morta:** taxa paga pela família do servo morto para permanecer na terra\n\n` +
              `> Na prática, os servos entregavam **60–70% de tudo que produziam** em tributos. Viviam na pobreza, sujeitos a fome em anos de má colheita.`,
          },
          {
            titulo: 'A Pirâmide Social Feudal',
            tipo: 'tabela',
            corpo:
              `| Posição | Estamento | Função | Características |\n` +
              `|---|---|---|---|\n` +
              `| **Topo** | Papa / Alto Clero | Rezar; administrar a Igreja | Maior poder espiritual e temporal |\n` +
              `| **2º nível** | Rei | Suserano supremo (teórico) | Poder limitado; dependia dos nobres |\n` +
              `| **3º nível** | Grandes nobres (duques, condes) | Governar; guerrear | Suseranos de outros nobres |\n` +
              `| **4º nível** | Pequenos nobres (barões, cavaleiros) | Lutar; administrar feudos | Vassalos dos grandes nobres |\n` +
              `| **Base** | Servos e camponeses (~90% da população) | Trabalhar a terra | Sem mobilidade social; presos ao feudo |\n\n` +
              `> **Atenção:** O rei feudal **não** era um monarca absolutista. Seu poder dependia da lealdade dos nobres — se os vassalos se rebelassem, o rei ficava sem exército.`,
          },
          {
            titulo: 'A Igreja Medieval — Poder Espiritual e Temporal',
            tipo: 'texto',
            corpo:
              `A **Igreja Católica** foi a instituição mais poderosa da Idade Média europeia. Enquanto reinos surgiam e desmoronavam, a Igreja permanecia — oferecendo **continuidade, unidade cultural e legitimidade** em um mundo fragmentado.\n\n` +
              `## Fontes de poder\n\n` +
              `- **Terra:** a Igreja era a **maior proprietária de terras** da Europa medieval. Mosteiros e dioceses possuíam feudos imensos.\n` +
              `- **Dízimo:** cobrança obrigatória de 10% da produção de todos os cristãos\n` +
              `- **Monopólio educacional:** praticamente toda a educação (nas universidades medievais e escolas monásticas) estava sob controle da Igreja. O clero era a única camada letrada da sociedade.\n` +
              `- **Legitimação do poder:** reis eram coroados pelo Papa ou por bispos. A teoria do **direito divino** afirmava que o poder dos reis vinha de Deus — e a Igreja era intermediária.\n` +
              `- **Tribunal da Inquisição:** criado no séc. XIII para combater heresias. Julgava e punia quem questionasse os dogmas da fé — incluindo a tortura e a execução na fogueira.\n\n` +
              `## Poder temporal\n\n` +
              `O poder da Igreja não era apenas espiritual. Bispos e abades governavam territórios, cobravam impostos, tinham exércitos. O **Papa** rivalizava com imperadores e reis — e frequentemente os derrotava. O exemplo mais famoso é a **Questão das Investiduras** (séc. XI–XII): a disputa entre o Papa Gregório VII e o imperador Henrique IV sobre quem tinha o direito de nomear bispos. Henrique IV foi obrigado a pedir perdão ao Papa de joelhos na neve (episódio de **Canossa**, 1077).\n\n` +
              `> **Para o vestibular:** A Igreja Medieval tinha poder **espiritual** (fé, sacramentos, salvação) **e temporal** (terras, tribunais, influência política). Questões que cobram o papel da Igreja esperam que você cite **ambas** as dimensões.`,
          },
          {
            titulo: 'As Cruzadas e o Início da Transição (séc. XI–XIII)',
            tipo: 'texto',
            corpo:
              `## O que foram as Cruzadas?\n\n` +
              `As Cruzadas foram **expedições militares-religiosas** organizadas pela Igreja Católica entre os séculos XI e XIII. O objetivo declarado era reconquistar **Jerusalém** e a **Terra Santa**, que estavam sob domínio muçulmano. A primeira foi convocada pelo **Papa Urbano II** no **Concílio de Clermont (1095)**, com o grito: *"Deus vult!"* (Deus quer!).\n\n` +
              `## Motivações reais\n\n` +
              `Além da fé, as Cruzadas tinham motivações mundanas:\n\n` +
              `- **Nobreza:** filhos não-primogênitos buscavam terras e títulos no Oriente\n` +
              `- **Igreja:** expandir sua influência e reunificar a cristandade (Ocidente e Oriente)\n` +
              `- **Comerciantes:** especialmente de **Gênova** e **Veneza**, que viam oportunidades de comércio com o Oriente\n` +
              `- **Camponeses:** promessa de salvação eterna e fuga da miséria feudal\n\n` +
              `## Principais Cruzadas\n\n` +
              `Foram **oito cruzadas principais** entre 1096 e 1270. A **Primeira Cruzada** (1096–1099) foi a mais bem-sucedida militarmente: conquistou Jerusalém e estabeleceu reinos cristãos no Oriente Médio. A **Quarta Cruzada** (1202–1204) desviou-se completamente e saqueou **Constantinopla** (aliada cristã!), enfraquecendo o Império Bizantino.\n\n` +
              `## Consequências das Cruzadas\n\n` +
              `As Cruzadas **falharam** em seu objetivo religioso — Jerusalém foi perdida definitivamente. Porém, suas consequências foram **transformadoras** para a Europa:\n\n` +
              `- **Reabertura do comércio** com o Oriente: especiarias, seda, perfumes, tecnologias\n` +
              `- **Enriquecimento das cidades italianas** (Veneza, Gênova, Pisa) como intermediárias comerciais\n` +
              `- **Enfraquecimento da nobreza feudal:** muitos senhores morreram ou se endividaram\n` +
              `- **Fortalecimento dos reis:** com nobres enfraquecidos, os monarcas centralizaram poder\n` +
              `- **Contato cultural:** europeus absorveram conhecimentos árabes em matemática, medicina, astronomia e filosofia\n\n` +
              `> **Causa → Consequência:** Cruzadas → Comércio com o Oriente → Enriquecimento de cidades → Renascimento Comercial → Crise do Feudalismo.`,
          },
          {
            titulo: 'A Transição para a Idade Moderna (séc. XIV–XV)',
            tipo: 'texto',
            corpo:
              `O Feudalismo não desapareceu de repente — foi sendo corroído por transformações graduais e crises catastróficas entre os séculos XIV e XV.\n\n` +
              `## O Renascimento Comercial e Urbano (séc. XI–XIII)\n\n` +
              `As Cruzadas reabriram rotas comerciais com o Oriente. O comércio trouxe riqueza, e a riqueza trouxe o crescimento das **cidades** (*burgos*). Uma nova classe social emergiu: a **burguesia** — comerciantes, banqueiros e artesãos que não se encaixavam na lógica feudal (não eram nobres, clero nem servos).\n\n` +
              `As cidades medievais (como Florença, Bruges, Paris) obtiveram **cartas de franquia** dos reis, ganhando autonomia política e econômica. Feiras comerciais como as de **Champagne** conectavam o comércio europeu. O uso da **moeda** voltou a crescer, substituindo o escambo.\n\n` +
              `## A Peste Negra (1347–1353)\n\n` +
              `A **Peste Negra** (peste bubônica) chegou à Europa em 1347, vinda da Ásia Central por navios genoveses. Em seis anos, matou entre **30% e 60% da população europeia** — estima-se entre 75 e 200 milhões de pessoas.\n\n` +
              `As consequências foram profundas:\n\n` +
              `- **Escassez de mão de obra:** com menos servos, os sobreviventes ganharam poder de barganha. Senhores feudais foram forçados a oferecer melhores condições ou salários.\n` +
              `- **Revoltas camponesas:** a Jacquerie (França, 1358) e a Revolta dos Camponeses (Inglaterra, 1381) desafiaram a ordem feudal.\n` +
              `- **Crise de fé:** a Igreja não conseguiu explicar ou parar a peste, perdendo credibilidade.\n` +
              `- **Aceleração da transição:** a combinação de menos trabalhadores + mais comércio + crise da Igreja enfraqueceu irreversivelmente o sistema feudal.\n\n` +
              `## A formação dos Estados Nacionais\n\n` +
              `Com a nobreza feudal enfraquecida e a burguesia em ascensão, os **reis** aproveitaram para centralizar o poder. Alianças entre monarquias e burguesia (reis ofereciam proteção e estabilidade; burgueses financiavam exércitos e administração) levaram à formação dos **Estados Nacionais**: Portugal, Espanha, França e Inglaterra consolidaram-se como reinos unificados entre os séculos XIV e XV.\n\n` +
              `Esses novos Estados — especialmente **Portugal** e **Espanha** — lançariam as **Grandes Navegações** nos séculos XV e XVI, conectando a história da Europa… à história do Brasil.\n\n` +
              `> **Conexão com o vestibular:** A transição Idade Média → Idade Moderna é diretamente ligada ao Período Colonial brasileiro. Portugal só pôde colonizar o Brasil porque formou um Estado Nacional centralizado, financiado pela burguesia comercial, e lançou-se ao mar.`,
          },
          {
            titulo: 'Linha do Tempo — Antiguidade e Idade Média',
            tipo: 'tabela',
            corpo:
              `| Período | Datas | Evento-chave | Consequência |\n` +
              `|---|---|---|---|\n` +
              `| Fundação de Roma | 753 a.C. | Monarquia romana | Início da civilização romana |\n` +
              `| República Romana | 509 a.C. | Deposição do rei | Senado e cônsules governam |\n` +
              `| Guerras Púnicas | 264–146 a.C. | Roma × Cartago | Roma domina o Mediterrâneo |\n` +
              `| Júlio César | 49–44 a.C. | Ditadura e assassinato | Crise da República |\n` +
              `| Império Romano | 27 a.C. | Otávio Augusto | Pax Romana; auge de Roma |\n` +
              `| Queda de Roma | 476 d.C. | Invasões germânicas | Início da Idade Média |\n` +
              `| Feudalismo pleno | Séc. IX–XII | Descentralização total | Sociedade estamental; economia autossuficiente |\n` +
              `| Cruzadas | 1096–1270 | Expedições à Terra Santa | Reabertura comercial; contato cultural |\n` +
              `| Peste Negra | 1347–1353 | Pandemia bubônica | Morte de 30–60% da população; crise feudal |\n` +
              `| Queda de Constantinopla | 1453 | Turcos otomanos | Fim do Império Bizantino; marco da Idade Moderna |`,
          },
          {
            titulo: 'Conceitos Fundamentais — Revisão',
            tipo: 'destaque',
            corpo:
              `Revise estes conceitos essenciais para o vestibular:\n\n` +
              `- **Patrícios × Plebeus:** aristocracia fundiária vs. cidadãos comuns de Roma — tensão política permanente na República.\n` +
              `- **Pax Romana:** período de estabilidade e expansão do Império (27 a.C.–180 d.C.).\n` +
              `- **Suserania-vassalagem:** relação recíproca entre nobres feudais — terras em troca de lealdade e serviço militar.\n` +
              `- **Servo ≠ Escravo:** servo está preso à terra e paga tributos; escravo é propriedade de outra pessoa.\n` +
              `- **Estamentos:** camadas sociais fixas do feudalismo — clero, nobreza e servos. Sem mobilidade social.\n` +
              `- **Poder temporal × espiritual:** a Igreja exercia ambos — governava terras e almas.\n` +
              `- **Burguesia:** classe comercial emergente nas cidades medievais — não se encaixa no sistema feudal e será protagonista das revoluções modernas.\n` +
              `- **Peste Negra:** catalisador da crise feudal — matou milhões e alterou as relações de trabalho.\n\n` +
              `> **Para o vestibular:** Se a questão pedir para "comparar", "diferenciar" ou "relacionar", use estes conceitos como base. A UNIVESP valoriza respostas que demonstrem **domínio de vocabulário histórico** aliado à compreensão de processos.`,
          },
        ],
        imagemDescricao: 'Pirâmide social do feudalismo com rei, suseranos, vassalos e servos, e ao lado a estrutura da Igreja Medieval',
        formulasChave: [
          'República Romana = Senado + Cônsules (poder dividido)',
          'Império Romano = poder centralizado no imperador',
          'Feudalismo = terra (feudo) + suserania-vassalagem + servos',
          'Igreja Medieval = maior poder da Idade Média (espiritual + temporal)',
          'Queda de Roma (476 d.C.) = início da Idade Média',
        ],
        dicasProva: [
          'Se a questão mencionar Senado e patrícios, é Roma Republicana.',
          'Feudalismo: a terra é a base de TUDO — poder, economia e relações sociais.',
          'A Igreja Medieval acumulava poder espiritual E temporal (político e econômico).',
          'Legados romanos cobrados: direito, latim, engenharia, república como forma de governo.',
          'Servos ≠ escravos: servos tinham obrigações, mas não eram propriedade; eram presos à terra.',
        ],
        errosComuns: [
          'Confundir República Romana com Império Romano — são períodos distintos com governos diferentes.',
          'Achar que servos eram escravos — servos estavam vinculados à terra, não eram propriedade.',
          'Pensar que o feudalismo tinha um governo centralizado — o poder era fragmentado entre senhores feudais.',
          'Esquecer que a Igreja Medieval tinha poder político além do religioso.',
          'Confundir a queda de Roma (476 d.C.) com a queda de Constantinopla (1453).',
        ],
        exercicios: [
          {
            id: 'hist-antg-1',
            enunciado: 'Na Roma Antiga, a transição da República para o Império foi marcada por:',
            alternativas: [
              'A invasão dos bárbaros e a queda de Roma.',
              'A ascensão de Otávio Augusto e a centralização do poder.',
              'A fundação do Senado e a criação das leis das Doze Tábuas.',
              'A expansão do cristianismo como religião oficial.',
              'A aliança com os povos germânicos.',
            ],
            respostaCorreta: 1,
            explicacao: 'A transição da República para o Império se deu com Otávio Augusto (27 a.C.), que concentrou poderes após guerras civis (incluindo a derrota de Marco Antônio). O Senado existia, mas o poder real estava nas mãos do imperador.',
            dificuldade: 'medio',
          },
          {
            id: 'hist-antg-2',
            enunciado: 'O sistema feudal era baseado em relações de suserania e vassalagem. Isso significa que:',
            alternativas: [
              'O rei controlava diretamente todos os territórios do reino.',
              'Os servos podiam comprar terras e ascender socialmente.',
              'O suserano cedia terras ao vassalo em troca de fidelidade e serviço militar.',
              'A economia era baseada no comércio internacional.',
              'A Igreja não participava das relações de poder.',
            ],
            respostaCorreta: 2,
            explicacao: 'Na suserania-vassalagem, o suserano cedia um feudo (terra) ao vassalo, que em troca oferecia lealdade e serviço militar. Era uma relação de reciprocidade que sustentava a estrutura descentralizada do poder feudal.',
            dificuldade: 'facil',
          },
          {
            id: 'hist-antg-3',
            enunciado: 'A Igreja Católica durante a Idade Média exercia grande poder porque:',
            alternativas: [
              'Possuía exércitos maiores que os dos reis.',
              'Controlava o comércio marítimo europeu.',
              'Era a maior proprietária de terras, cobrava dízimos e controlava a educação.',
              'Elegia diretamente os reis de todos os reinos europeus.',
              'Proibia qualquer forma de governo monárquico.',
            ],
            respostaCorreta: 2,
            explicacao: 'A Igreja acumulava poder temporal e espiritual: era a maior latifundiária da Europa, cobrava dízimos (10% da produção), controlava a educação nas universidades e mosteiros, e influenciava decisões políticas. Seu poder ia muito além do religioso.',
            dificuldade: 'medio',
          },
          {
            id: 'hist-antg-4',
            enunciado: 'Entre os legados de Roma para a civilização ocidental, destaca-se:',
            alternativas: [
              'O sistema de castas hereditário.',
              'O direito romano, base de sistemas jurídicos modernos.',
              'A invenção da máquina a vapor.',
              'O sistema feudal descentralizado.',
              'A criação do alfabeto grego.',
            ],
            respostaCorreta: 1,
            explicacao: 'O direito romano é um dos maiores legados de Roma. Conceitos como propriedade privada, contratos e julgamentos com base em leis escritas fundamentam os sistemas jurídicos de diversos países até hoje, incluindo o Brasil.',
            dificuldade: 'facil',
          },
          {
            id: 'hist-antg-5',
            enunciado: 'As Cruzadas (séc. XI-XIII) foram expedições militares organizadas pela Igreja com o objetivo declarado de:',
            alternativas: [
              'Expandir o comércio com a China pela Rota da Seda.',
              'Reconquistar Jerusalém e a Terra Santa do domínio muçulmano.',
              'Colonizar o continente africano.',
              'Destruir o Império Bizantino e tomar Constantinopla.',
              'Combater as heresias dentro da própria Europa.',
            ],
            respostaCorreta: 1,
            explicacao: 'As Cruzadas foram convocadas pelo Papa Urbano II (1095) com o objetivo declarado de reconquistar Jerusalém e a Terra Santa, controladas por muçulmanos. Na prática, também envolviam interesses econômicos, políticos e de expansão territorial.',
            dificuldade: 'dificil',
          },
        ],
      },
    },
  ],
};
