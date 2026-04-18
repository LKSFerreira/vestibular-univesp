import type { Disciplina } from './tipos';

export const disciplinaGeografia: Disciplina = {
  id: 'geografia',
  titulo: 'Geografia',
  icone: '🌎',
  topicos: [
    {
      id: 'geografia-fisica-meio-ambiente',
      titulo: 'Geografia Física e Meio Ambiente',
      peso: 40,
      conteudo: {
        resumo: 'Biomas brasileiros, clima, desmatamento e impactos ambientais.',
        explicacao:
          'A prova combina conhecimento de biomas com questões ambientais contemporâneas.\n\nBiomas brasileiros:\n• Amazônia: maior biodiversidade, desmatamento crescente\n• Cerrado: savana brasileira, fronteira agrícola\n• Mata Atlântica: mais devastada, hotspot de biodiversidade\n• Caatinga: semiárido, adaptações à seca\n• Pampa: campos sulinos, pecuária\n• Pantanal: maior planície alagável\n\nConecte sempre o bioma com a atividade econômica e o impacto ambiental associado.',
        secoes: [
          {
            titulo: 'Introdução à Geografia Física e Meio Ambiente',
            tipo: 'texto',
            corpo:
              '## O que é Geografia Física?\n\nA **Geografia Física** estuda os elementos naturais que compõem a superfície terrestre: relevo, clima, vegetação, hidrografia e solos. No contexto do vestibular da UNIVESP, o foco recai sobre os **biomas brasileiros**, os **tipos climáticos** do Brasil e os **impactos ambientais** contemporâneos.\n\nO Brasil é um país de dimensões continentais e abriga **seis grandes biomas**, cada um com características próprias de vegetação, clima, fauna e ameaças. Compreender esses ecossistemas é essencial não apenas para a prova, mas para entender os debates ambientais atuais.\n\n> A Geografia Física no vestibular cobra a **relação entre bioma, clima, atividade econômica e impacto ambiental**. Nunca estude um bioma isoladamente — conecte-o ao contexto socioeconômico.',
          },
          {
            titulo: 'Os Seis Biomas Brasileiros',
            tipo: 'texto',
            corpo:
              '## Visão Geral dos Biomas\n\nO Brasil possui **seis biomas oficiais** reconhecidos pelo IBGE. Juntos, eles cobrem todo o território nacional e representam uma das maiores biodiversidades do planeta.\n\n### 1. Amazônia\n\n- **Área:** ~49,3% do território brasileiro\n- **Clima:** Equatorial (quente e úmido o ano todo, com chuvas abundantes)\n- **Vegetação:** Floresta tropical densa, com dossel fechado e grande diversidade de espécies\n- **Hidrografia:** Bacia Amazônica — maior bacia hidrográfica do mundo\n- **Biodiversidade:** Abriga cerca de 10% de todas as espécies do planeta\n- **Ameaças:** Desmatamento para pecuária e agricultura, garimpo ilegal, queimadas, extração ilegal de madeira\n\n> **Atenção:** A Amazônia **não é o pulmão do mundo**. A maior parte do oxigênio atmosférico vem do fitoplâncton marinho. A floresta consome praticamente todo o O₂ que produz.\n\n### 2. Cerrado\n\n- **Área:** ~23,9% do território\n- **Clima:** Tropical sazonal (verão chuvoso e inverno seco)\n- **Vegetação:** Savana — árvores de troncos retorcidos, raízes profundas, cascas grossas (adaptação ao fogo)\n- **Hidrografia:** Conhecido como **"berço das águas"** — abriga nascentes das bacias do São Francisco, Tocantins-Araguaia, Paraná e Paraguai\n- **Solo:** Ácido e pobre em nutrientes (necessita correção com calcário para agricultura)\n- **Ameaças:** Expansão do agronegócio (soja, algodão, cana), desmatamento acelerado, uso de agrotóxicos\n\n### 3. Mata Atlântica\n\n- **Área original:** ~13% do território (hoje restam apenas **~12,4%** da cobertura original)\n- **Clima:** Tropical úmido e subtropical\n- **Vegetação:** Floresta tropical densa e diversificada, com muitas espécies endêmicas\n- **Biodiversidade:** Reconhecida como **hotspot mundial** de biodiversidade\n- **Localização:** Faixa litorânea do Brasil — justamente onde vive a maior parte da população\n- **Ameaças:** Urbanização, especulação imobiliária, poluição, fragmentação de habitat\n\n### 4. Caatinga\n\n- **Área:** ~9,9% do território\n- **Clima:** Semiárido (chuvas escassas e irregulares, temperaturas elevadas)\n- **Vegetação:** Xerófita — plantas adaptadas à seca: cactos, arbustos espinhosos, folhas pequenas ou ausentes\n- **Adaptações:** Plantas perdem folhas na seca (caducifólias), armazenam água nos troncos\n- **Ameaças:** Desertificação, uso intensivo do solo, queimadas, salinização\n\n### 5. Pantanal\n\n- **Área:** ~1,8% do território (menor bioma em extensão)\n- **Clima:** Tropical continental com alternância de cheias e secas\n- **Vegetação:** Mosaico de vegetação — mistura de elementos do Cerrado, Amazônia e Mata Atlântica\n- **Hidrografia:** Maior planície alagável do mundo, dependente do regime de cheias do rio Paraguai\n- **Ameaças:** Desmatamento nas cabeceiras dos rios (no Cerrado), pecuária extensiva, incêndios, assoreamento\n\n### 6. Pampa (Campos Sulinos)\n\n- **Área:** ~2,1% do território (restrito ao Rio Grande do Sul)\n- **Clima:** Subtropical (quatro estações bem definidas, geadas no inverno)\n- **Vegetação:** Campos (gramíneas), com poucas árvores; vegetação rasteira\n- **Economia:** Pecuária extensiva (gado bovino e ovino), lavouras de arroz\n- **Ameaças:** Avanço da monocultura de soja e silvicultura (eucalipto), erosão do solo',
          },
          {
            titulo: 'Tabela Comparativa dos Biomas Brasileiros',
            tipo: 'tabela',
            corpo:
              '## Comparação entre os Biomas\n\n| Bioma | Clima | Vegetação | Área (%) | Principal Ameaça |\n|---|---|---|---|---|\n| **Amazônia** | Equatorial | Floresta tropical densa | 49,3% | Desmatamento e queimadas |\n| **Cerrado** | Tropical sazonal | Savana (árvores retorcidas) | 23,9% | Expansão do agronegócio |\n| **Mata Atlântica** | Tropical úmido/subtropical | Floresta tropical (hotspot) | 13% | Urbanização e fragmentação |\n| **Caatinga** | Semiárido | Xerófita (cactos, arbustos) | 9,9% | Desertificação |\n| **Pantanal** | Tropical continental | Mosaico (cheias/secas) | 1,8% | Desmatamento das cabeceiras |\n| **Pampa** | Subtropical | Campos (gramíneas) | 2,1% | Monocultura de soja |\n\n> **Dica para a prova:** Questões frequentemente pedem que você **associe bioma + clima + vegetação + ameaça**. Memorize essa tabela como referência rápida.',
          },
          {
            titulo: 'Tipos Climáticos do Brasil',
            tipo: 'texto',
            corpo:
              '## Classificação Climática do Brasil\n\nO Brasil apresenta uma grande diversidade climática, resultado de sua extensão territorial, latitude e relevo. Os principais tipos climáticos são:\n\n### Equatorial\n- **Localização:** Região Norte (Amazônia)\n- **Temperatura:** Elevada o ano todo (25 °C–28 °C)\n- **Chuvas:** Abundantes e bem distribuídas (>2.000 mm/ano)\n- **Característica:** Sem estação seca definida; alta umidade relativa\n\n### Tropical\n- **Localização:** Região Central do Brasil (Cerrado, parte do Sudeste)\n- **Temperatura:** Elevada (20 °C–28 °C)\n- **Chuvas:** Duas estações bem definidas — **verão chuvoso** e **inverno seco**\n- **Característica:** Maior amplitude térmica que o equatorial\n\n### Tropical de Altitude\n- **Localização:** Regiões serranas do Sudeste (Serra da Mantiqueira, Serra do Mar)\n- **Temperatura:** Mais amenas (18 °C–22 °C) devido à altitude\n- **Chuvas:** Concentradas no verão\n- **Característica:** Temperaturas mais baixas que o tropical típico\n\n### Semiárido\n- **Localização:** Interior do Nordeste (Sertão) e norte de Minas Gerais\n- **Temperatura:** Elevada (25 °C–30 °C)\n- **Chuvas:** Escassas e irregulares (<800 mm/ano)\n- **Característica:** Longos períodos de estiagem; rios intermitentes\n\n### Subtropical\n- **Localização:** Região Sul do Brasil\n- **Temperatura:** Amplitudes térmicas significativas; invernos frios com geadas\n- **Chuvas:** Bem distribuídas ao longo do ano (~1.500 mm/ano)\n- **Característica:** Quatro estações relativamente bem definidas',
          },
          {
            titulo: 'Tabela dos Tipos Climáticos',
            tipo: 'tabela',
            corpo:
              '## Resumo dos Climas Brasileiros\n\n| Tipo Climático | Região | Temperatura | Chuvas | Bioma Associado |\n|---|---|---|---|---|\n| **Equatorial** | Norte | 25–28 °C | >2.000 mm/ano | Amazônia |\n| **Tropical** | Centro-Oeste, Sudeste | 20–28 °C | Verão chuvoso/inverno seco | Cerrado |\n| **Tropical de Altitude** | Serras do Sudeste | 18–22 °C | Verão chuvoso | Mata Atlântica (serras) |\n| **Semiárido** | Interior do Nordeste | 25–30 °C | <800 mm/ano | Caatinga |\n| **Subtropical** | Sul | Variável (geadas) | Bem distribuídas | Pampa / Mata Atlântica |',
          },
          {
            titulo: 'Impactos Ambientais e Questões Contemporâneas',
            tipo: 'texto',
            corpo:
              '## Efeito Estufa e Aquecimento Global\n\nO **efeito estufa** é um fenômeno **natural e essencial**: gases como CO₂, CH₄ e vapor d\'água retêm parte da radiação infravermelha emitida pela superfície terrestre, mantendo a temperatura média do planeta em torno de **15 °C**. Sem ele, a temperatura seria aproximadamente **-18 °C**.\n\nO problema é a **intensificação** desse efeito pela ação humana:\n\n- **Queima de combustíveis fósseis** (petróleo, carvão, gás natural) → emissão de CO₂\n- **Desmatamento** → redução da absorção de CO₂ pela vegetação\n- **Pecuária intensiva** → emissão de metano (CH₄) pela fermentação entérica do gado\n- **Industrialização** → emissão de gases diversos (NOₓ, CFCs)\n\n### Consequências do Aquecimento Global\n\n- Derretimento de geleiras e calotas polares\n- Elevação do nível dos oceanos\n- Eventos climáticos extremos (secas, enchentes, furacões)\n- Alteração nos regimes de chuva\n- Perda de biodiversidade\n- Impactos na agricultura e segurança alimentar\n\n## Desmatamento no Brasil\n\nO desmatamento é uma das maiores questões ambientais brasileiras:\n\n- **Amazônia:** perdeu mais de **17%** de sua cobertura original, principalmente para pecuária e soja\n- **Cerrado:** é o bioma que mais perde vegetação atualmente — mais de **50%** já foi convertido em áreas agrícolas\n- **Mata Atlântica:** restam apenas **~12%** da cobertura original, tornando-o o bioma mais devastado\n\n### Consequências do Desmatamento\n\n- Perda de biodiversidade e extinção de espécies\n- Alteração do ciclo hidrológico (redução das chuvas — "rios voadores")\n- Erosão e empobrecimento do solo\n- Contribuição para o aquecimento global (emissão de CO₂)\n- Assoreamento de rios\n\n## Poluição das Águas\n\nA poluição hídrica no Brasil decorre de múltiplas fontes:\n\n- **Esgoto doméstico:** apenas ~50% do esgoto brasileiro é tratado\n- **Agrotóxicos:** contaminação de lençóis freáticos e rios por defensivos agrícolas\n- **Efluentes industriais:** descarte irregular de substâncias químicas\n- **Mineração:** contaminação por metais pesados (ex: desastre de Mariana e Brumadinho)\n\n## Desertificação\n\nA **desertificação** é o processo de degradação de terras em áreas áridas e semiáridas:\n\n- No Brasil, afeta principalmente o **semiárido nordestino**\n- Causas: desmatamento da Caatinga, sobrepastoreio, uso intensivo do solo, queimadas\n- Consequências: perda da fertilidade do solo, êxodo rural, pobreza',
          },
          {
            titulo: 'Conceitos Ambientais Essenciais',
            tipo: 'destaque',
            corpo:
              '## Conceitos-Chave para a Prova\n\n- **Desenvolvimento sustentável:** satisfazer as necessidades do presente sem comprometer as gerações futuras (Relatório Brundtland, 1987)\n- **Pegada ecológica:** área de terra/água necessária para sustentar o consumo de uma população\n- **Rios voadores:** massas de vapor d\'água transportadas pela Amazônia que alimentam as chuvas no Centro-Sul do Brasil\n- **Bioma vs. Ecossistema:** bioma é uma classificação ampla (escala continental); ecossistema é um sistema local de interações entre seres vivos e ambiente\n- **Hotspot de biodiversidade:** região com alta concentração de espécies endêmicas e perda significativa de habitat (ex: Mata Atlântica e Cerrado)\n- **Unidades de Conservação:** áreas protegidas por lei para preservação ambiental (parques nacionais, reservas biológicas, APAs)',
          },
          {
            titulo: 'Legislação Ambiental Brasileira',
            tipo: 'importante',
            corpo:
              '## Marcos Legais Relevantes\n\n- **Código Florestal (Lei 12.651/2012):** define Áreas de Preservação Permanente (APP) e Reserva Legal; estabelece o Cadastro Ambiental Rural (CAR)\n- **Reserva Legal:** percentual de vegetação nativa que deve ser mantido na propriedade rural — **80%** na Amazônia, **35%** no Cerrado dentro da Amazônia Legal e **20%** nos demais biomas\n- **SNUC (Sistema Nacional de Unidades de Conservação):** classifica as unidades de conservação em **proteção integral** (uso indireto) e **uso sustentável** (uso controlado)\n- **Política Nacional de Meio Ambiente (1981):** criou o CONAMA e estabeleceu instrumentos como o licenciamento ambiental e o EIA/RIMA\n- **Protocolo de Kyoto (1997) e Acordo de Paris (2015):** compromissos internacionais de redução de emissões de gases de efeito estufa\n\n> **Na prova:** questões sobre legislação geralmente cobram a relação entre **Código Florestal** e **desmatamento**, especialmente no contexto da Amazônia e do Cerrado.',
          },
        ],
        imagemDescricao: 'Mapa do Brasil com os seis biomas coloridos e suas características principais',
        dicasProva: [
          'Questões sobre biomas costumam associar vegetação, clima e atividade econômica',
          'Saiba localizar cada bioma no mapa do Brasil e seus estados predominantes',
          'Questões ambientais geralmente cobram consequências do desmatamento e das queimadas',
          'Conecte o bioma com os problemas ambientais atuais (ex: Amazônia → desmatamento, Cerrado → agronegócio)',
        ],
        errosComuns: [
          'Confundir Cerrado (savana tropical) com Caatinga (vegetação xerófita do semiárido)',
          'Afirmar que a Amazônia é o "pulmão do mundo" — a maior parte do O₂ vem do fitoplâncton oceânico',
          'Esquecer que a Mata Atlântica é o bioma mais devastado, restando cerca de 12% da cobertura original',
          'Não diferenciar clima equatorial (Amazônia, quente e úmido) de clima tropical (Cerrado, com estação seca)',
        ],
        exercicios: [
          {
            id: 'geo-fis-1',
            enunciado: 'Qual bioma brasileiro é considerado hotspot de biodiversidade e possui apenas cerca de 12% da sua cobertura original?',
            alternativas: ['Amazônia', 'Cerrado', 'Mata Atlântica', 'Caatinga', 'Pantanal'],
            respostaCorreta: 2,
            explicacao: 'A Mata Atlântica é reconhecida internacionalmente como hotspot de biodiversidade. Devido à intensa ocupação urbana e agrícola ao longo dos séculos, restam apenas cerca de 12% da cobertura vegetal original.',
            dificuldade: 'facil',
          },
          {
            id: 'geo-fis-2',
            enunciado: 'O Cerrado é frequentemente chamado de "berço das águas" porque:',
            alternativas: [
              'Possui a maior bacia hidrográfica do país',
              'Abriga as nascentes de importantes bacias hidrográficas brasileiras',
              'Recebe o maior volume de chuvas do Brasil',
              'É o bioma com maior umidade relativa do ar',
              'Concentra a maior parte dos rios perenes do país',
            ],
            respostaCorreta: 1,
            explicacao: 'O Cerrado abriga nascentes de grandes bacias hidrográficas, como as do São Francisco, Tocantins-Araguaia e Paraná, funcionando como divisor de águas do território brasileiro.',
            dificuldade: 'medio',
          },
          {
            id: 'geo-fis-3',
            enunciado: 'A desertificação no semiárido brasileiro está diretamente relacionada a:',
            alternativas: [
              'Aumento da biodiversidade local',
              'Expansão das geleiras continentais',
              'Desmatamento, uso intensivo do solo e mudanças climáticas',
              'Aumento do nível dos oceanos',
              'Formação de novas bacias hidrográficas',
            ],
            respostaCorreta: 2,
            explicacao: 'A desertificação no semiárido resulta da combinação de desmatamento da Caatinga, uso intensivo e inadequado do solo para agricultura e pecuária, e os efeitos das mudanças climáticas que agravam a seca.',
            dificuldade: 'medio',
          },
          {
            id: 'geo-fis-4',
            enunciado: 'O Pantanal é considerado a maior planície alagável do mundo. Sua principal ameaça ambiental é:',
            alternativas: [
              'A exploração de petróleo em larga escala',
              'A mineração de carvão mineral',
              'O desmatamento das áreas de nascente e o avanço da pecuária',
              'A urbanização desordenada nas margens dos rios',
              'A construção de hidrelétricas de grande porte',
            ],
            respostaCorreta: 2,
            explicacao: 'O Pantanal depende do regime de cheias alimentado por rios cujas nascentes estão no Cerrado. O desmatamento dessas áreas, aliado ao avanço da pecuária dentro do próprio bioma, são as maiores ameaças atuais.',
            dificuldade: 'medio',
          },
          {
            id: 'geo-fis-5',
            enunciado: 'O efeito estufa é um fenômeno natural essencial à vida na Terra porque:',
            alternativas: [
              'É causado exclusivamente pela ação humana e pela queima de combustíveis fósseis',
              'Mantém a temperatura do planeta em níveis adequados à vida',
              'Ocorre apenas na camada de ozônio da atmosfera',
              'Reduz a temperatura média global a cada ano',
              'Impede a chegada de toda radiação solar à superfície terrestre',
            ],
            respostaCorreta: 1,
            explicacao: 'O efeito estufa é um fenômeno natural: gases como CO₂ e vapor d\'água retêm parte do calor irradiado pela Terra, mantendo a temperatura média em torno de 15 °C. Sem ele, a temperatura seria cerca de -18 °C. O problema é a intensificação desse efeito pela ação humana.',
            dificuldade: 'facil',
          },
        ],
      },
    },
    {
      id: 'geografia-humana-economica',
      titulo: 'Geografia Humana e Econômica',
      peso: 40,
      conteudo: {
        resumo: 'Urbanização brasileira, transição demográfica, blocos econômicos e globalização.',
        explicacao:
          'A Geografia Humana e Econômica estuda as relações entre população, espaço e atividades produtivas.\n\nUrbanização brasileira:\n• Êxodo rural intenso a partir dos anos 1950-1970 (industrialização)\n• Macrocefalia urbana: concentração excessiva em poucas metrópoles\n• Problemas urbanos: favelização, trânsito, violência, falta de saneamento\n\nTransição demográfica:\n• Fase 1: altas taxas de natalidade e mortalidade\n• Fase 2: mortalidade cai, natalidade permanece alta → crescimento acelerado\n• Fase 3: natalidade cai → crescimento desacelera\n• Fase 4: baixas taxas → envelhecimento populacional\n\nBlocos econômicos:\n• Mercosul: Brasil, Argentina, Uruguai, Paraguai (união aduaneira imperfeita)\n• BRICS: Brasil, Rússia, Índia, China, África do Sul (cooperação econômica)\n• União Europeia: maior bloco, com moeda única (euro)\n\nGlobalização: intensificação dos fluxos de mercadorias, capitais, informações e pessoas entre países.',
        secoes: [
          {
            titulo: 'Introdução à Geografia Humana e Econômica',
            tipo: 'texto',
            corpo:
              '## O Estudo das Relações Humanas no Espaço\n\nA **Geografia Humana** investiga como as sociedades se organizam, distribuem-se e transformam o espaço geográfico. A **Geografia Econômica** analisa a produção, circulação e consumo de bens e serviços em diferentes escalas — local, nacional e global.\n\nNo vestibular da UNIVESP, os temas mais cobrados nesse eixo são:\n\n- **Urbanização brasileira** e seus desdobramentos sociais\n- **Dinâmica demográfica** e transição demográfica\n- **Blocos econômicos** e integração regional\n- **Globalização** e suas contradições\n\n> A prova exige que você **conecte processos** — por exemplo, o êxodo rural está ligado à industrialização, que gera urbanização acelerada, que produz problemas urbanos. Entenda a **cadeia de causa e efeito**.',
          },
          {
            titulo: 'Urbanização no Brasil',
            tipo: 'texto',
            corpo:
              '## O Processo de Urbanização Brasileira\n\nO Brasil passou por uma urbanização **tardia e acelerada**. Até a década de 1940, o país era predominantemente rural. Hoje, mais de **85% da população** vive em áreas urbanas.\n\n### Fases da Urbanização\n\n**1. Pré-1950 — Brasil Rural**\n- Economia baseada na agricultura (café, algodão, cana)\n- População concentrada no campo\n- Poucas cidades grandes (Rio de Janeiro e São Paulo como exceções)\n\n**2. 1950-1970 — Êxodo Rural Intenso**\n- **Industrialização** das grandes cidades (especialmente São Paulo) atraiu mão de obra\n- **Mecanização do campo** expulsou trabalhadores rurais\n- Construção de Brasília (1960) impulsionou a ocupação do interior\n- Migração massiva do Nordeste para o Sudeste\n\n**3. 1970-2000 — Metropolização**\n- Formação de **regiões metropolitanas** (São Paulo, Rio, Belo Horizonte)\n- Crescimento desordenado das periferias\n- Surgimento de **favelas** e ocupações irregulares\n- Início da **desconcentração industrial** — indústrias migram para cidades médias\n\n**4. 2000-Atual — Cidades Médias**\n- Crescimento das **cidades médias** (100-500 mil habitantes)\n- **Desmetropolização relativa** — algumas metrópoles perdem peso relativo\n- Permanência dos problemas urbanos estruturais\n\n### Conceitos-Chave da Urbanização\n\n- **Êxodo rural:** migração do campo para a cidade em busca de emprego e serviços\n- **Macrocefalia urbana:** concentração desproporcional de população e recursos em uma ou poucas cidades — São Paulo é o exemplo clássico\n- **Conurbação:** quando duas ou mais cidades crescem tanto que se fundem fisicamente (ex: São Paulo e Guarulhos)\n- **Megalópole:** fusão de múltiplas metrópoles (ex: eixo São Paulo–Rio de Janeiro)\n- **Gentrificação:** valorização de áreas urbanas degradadas que expulsa moradores de baixa renda\n- **Segregação socioespacial:** separação geográfica entre ricos (condomínios fechados) e pobres (periferias)',
          },
          {
            titulo: 'Problemas Urbanos no Brasil',
            tipo: 'destaque',
            corpo:
              '## Consequências da Urbanização Desordenada\n\nA urbanização acelerada sem planejamento adequado gerou uma série de problemas crônicos:\n\n- **Déficit habitacional:** milhões de famílias sem moradia digna; surgimento de favelas e ocupações\n- **Mobilidade urbana:** trânsito caótico, transporte público precário, tempo excessivo de deslocamento\n- **Saneamento básico:** grande parte das periferias sem rede de esgoto; poluição de rios urbanos (ex: rios Tietê e Pinheiros em São Paulo)\n- **Violência urbana:** associada à desigualdade social, tráfico de drogas e falta de oportunidades\n- **Poluição do ar:** emissões veiculares e industriais, especialmente nas grandes metrópoles\n- **Enchentes:** impermeabilização do solo urbano, ocupação de várzeas, lixo nos bueiros\n- **Ilhas de calor:** temperatura nas áreas centrais é vários graus acima das áreas periféricas/rurais\n\n> **Para a prova:** relacione sempre o problema urbano com sua **causa estrutural**. Favelização não é "culpa" dos moradores — é resultado de exclusão socioeconômica e falta de políticas habitacionais.',
          },
          {
            titulo: 'Transição Demográfica',
            tipo: 'texto',
            corpo:
              '## A Teoria da Transição Demográfica\n\nA **transição demográfica** é o modelo que descreve a passagem de uma sociedade com altas taxas de natalidade e mortalidade para uma com baixas taxas de ambas. O Brasil está atualmente entre as **Fases 3 e 4**.\n\n### As Quatro Fases\n\n**Fase 1 — Pré-Transição**\n- Alta taxa de natalidade (muitos filhos por família)\n- Alta taxa de mortalidade (doenças, falta de saneamento, guerras)\n- Crescimento populacional **lento** (natalidade ≈ mortalidade)\n- Predominava no Brasil até o início do século XX\n\n**Fase 2 — Explosão Demográfica**\n- Taxa de mortalidade **cai** (avanços na medicina, vacinas, saneamento)\n- Taxa de natalidade permanece **alta**\n- Crescimento populacional **acelerado**\n- Brasil viveu essa fase entre ~1940 e 1970\n\n**Fase 3 — Desaceleração**\n- Taxa de natalidade **cai** (urbanização, anticoncepcionais, acesso à educação, inserção da mulher no mercado de trabalho)\n- Taxa de mortalidade continua **baixa**\n- Crescimento desacelera progressivamente\n- Brasil entrou nessa fase a partir dos anos 1980\n\n**Fase 4 — Estabilização/Envelhecimento**\n- Baixa natalidade e baixa mortalidade\n- Crescimento **quase nulo** ou negativo\n- **Envelhecimento** da população (aumento da expectativa de vida)\n- Impactos na previdência social e no mercado de trabalho\n- Brasil caminha para essa fase nas próximas décadas\n\n### Pirâmide Etária\n\nA **pirâmide etária** (ou pirâmide populacional) é o gráfico que representa a distribuição da população por sexo e faixa etária:\n\n- **Base larga:** população jovem predominante (alta natalidade) — típica de países em desenvolvimento\n- **Corpo largo:** população adulta predominante (natalidade em queda) — países em transição\n- **Topo largo:** população idosa significativa (baixa natalidade, alta expectativa de vida) — países desenvolvidos\n\n> **Cuidado:** Não confunda **taxa de natalidade** (nascimentos por 1.000 habitantes) com **taxa de fecundidade** (número médio de filhos por mulher). A taxa de fecundidade de reposição é de aproximadamente **2,1 filhos por mulher**.',
          },
          {
            titulo: 'Indicadores Demográficos',
            tipo: 'importante',
            corpo:
              '## Indicadores que Caem na Prova\n\n- **Taxa de natalidade:** número de nascidos vivos por 1.000 habitantes/ano\n- **Taxa de mortalidade:** número de óbitos por 1.000 habitantes/ano\n- **Taxa de fecundidade:** número médio de filhos por mulher em idade reprodutiva\n- **Crescimento vegetativo:** natalidade − mortalidade (não inclui migração)\n- **Expectativa de vida:** número médio de anos que uma pessoa pode esperar viver\n- **IDH (Índice de Desenvolvimento Humano):** combina renda, educação e saúde (0 a 1)\n- **Razão de dependência:** proporção de jovens (<15) e idosos (>64) em relação à população em idade ativa (15-64)\n\n**Dados do Brasil (aproximados):**\n- Taxa de fecundidade: ~1,7 filho por mulher (abaixo da reposição)\n- Expectativa de vida: ~76 anos\n- IDH: ~0,754 (alto desenvolvimento humano)\n- População urbana: ~85%',
          },
          {
            titulo: 'Blocos Econômicos',
            tipo: 'texto',
            corpo:
              '## Integração Econômica Regional\n\nOs **blocos econômicos** são associações de países que buscam facilitar o comércio e a cooperação entre seus membros. Existem diferentes **níveis de integração**:\n\n1. **Zona de Preferência Tarifária:** redução parcial de tarifas entre membros\n2. **Zona de Livre Comércio:** eliminação de tarifas entre membros (ex: NAFTA/USMCA)\n3. **União Aduaneira:** livre comércio interno + tarifa externa comum (ex: Mercosul)\n4. **Mercado Comum:** união aduaneira + livre circulação de pessoas, serviços e capitais\n5. **União Econômica e Monetária:** mercado comum + moeda única e política econômica unificada (ex: Zona do Euro)\n\n### Mercosul\n\n- **Criação:** Tratado de Assunção (1991)\n- **Membros plenos:** Brasil, Argentina, Uruguai, Paraguai\n- **Membros associados:** Chile, Bolívia, Peru, Colômbia, Equador\n- **Classificação:** União aduaneira **imperfeita** (possui tarifa externa comum — TEC — mas com muitas exceções)\n- **Desafios:** assimetrias econômicas entre os membros, crises políticas, barreiras não tarifárias\n\n### União Europeia (UE)\n\n- **Criação:** Tratado de Maastricht (1992); origem na CEE (1957)\n- **Membros:** 27 países (após o Brexit do Reino Unido em 2020)\n- **Classificação:** União econômica e monetária (o bloco mais integrado do mundo)\n- **Moeda:** Euro (€) — adotado por 20 dos 27 membros (Zona do Euro)\n- **Características:** livre circulação de pessoas (Espaço Schengen), Parlamento Europeu, Banco Central Europeu\n\n### NAFTA / USMCA\n\n- **NAFTA:** North American Free Trade Agreement (1994)\n- **USMCA:** United States-Mexico-Canada Agreement (substituiu o NAFTA em 2020)\n- **Membros:** EUA, Canadá e México\n- **Classificação:** Zona de livre comércio (sem tarifa externa comum)\n- **Características:** elimina barreiras comerciais, mas não prevê livre circulação de pessoas\n\n### BRICS\n\n- **Membros originais:** Brasil, Rússia, Índia, China e África do Sul\n- **Expansão (2024):** incorporou Egito, Etiópia, Irã, Arábia Saudita e Emirados Árabes Unidos\n- **Classificação:** **Não é um bloco econômico formal** — é um grupo de cooperação entre economias emergentes\n- **Objetivos:** cooperação econômica, reforma das instituições internacionais (FMI, Banco Mundial), criação do Novo Banco de Desenvolvimento (NDB)',
          },
          {
            titulo: 'Tabela Comparativa dos Blocos Econômicos',
            tipo: 'tabela',
            corpo:
              '## Comparação entre Blocos Econômicos\n\n| Bloco | Membros | Nível de Integração | Moeda Comum | Destaque |\n|---|---|---|---|---|\n| **Mercosul** | BR, AR, UY, PY | União aduaneira imperfeita | Não | Tarifa externa comum (TEC) com exceções |\n| **União Europeia** | 27 países | União econômica e monetária | Euro (€) | Bloco mais integrado do mundo |\n| **USMCA** | EUA, Canadá, México | Zona de livre comércio | Não | Substituiu o NAFTA em 2020 |\n| **BRICS** | BR, RU, IN, CN, ZA + novos | Cooperação (não é bloco formal) | Não | Novo Banco de Desenvolvimento |\n\n> **Atenção:** O nível de integração é a chave para diferenciar os blocos. A UE é o **mais integrado** (moeda única e livre circulação). O Mercosul almeja ser mercado comum, mas na prática funciona como **união aduaneira imperfeita**.',
          },
          {
            titulo: 'Globalização',
            tipo: 'texto',
            corpo:
              '## Globalização: Conceito, Características e Contradições\n\n### O que é Globalização?\n\nA **globalização** é o processo de intensificação das interconexões econômicas, culturais, políticas e tecnológicas entre os países. Acelerou-se a partir das décadas de 1980-1990 com:\n\n- Fim da Guerra Fria e expansão do capitalismo\n- Revolução tecnológica (internet, telecomunicações)\n- Liberalização comercial e financeira\n- Expansão das **empresas multinacionais/transnacionais**\n\n### Dimensões da Globalização\n\n**Econômica:**\n- Livre circulação de capitais e mercadorias\n- Cadeias produtivas globais (um produto é fabricado em vários países)\n- Empresas transnacionais com faturamento maior que o PIB de muitos países\n- Organizações internacionais: OMC, FMI, Banco Mundial\n\n**Cultural:**\n- Difusão de padrões culturais (americanização/ocidentalização)\n- Acesso global a informações, músicas, filmes e tendências\n- Tensão entre **homogeneização cultural** e **resistência local**\n\n**Tecnológica:**\n- Internet e redes sociais conectando bilhões de pessoas\n- Revolução digital transformando o trabalho e o consumo\n- **Exclusão digital:** populações sem acesso à tecnologia ficam à margem\n\n### Contradições da Globalização\n\n- **Desigualdade:** países centrais (EUA, Europa, Japão) se beneficiam mais que países periféricos\n- **Desemprego estrutural:** automação e transferência de fábricas para países com mão de obra barata\n- **Vulnerabilidade econômica:** crises financeiras se propagam globalmente (efeito contágio)\n- **Impactos ambientais:** aumento do consumo e da produção intensifica a degradação ambiental\n- **Perda de soberania:** governos nacionais têm menos controle sobre fluxos financeiros e decisões econômicas\n\n### DIT — Divisão Internacional do Trabalho\n\nA globalização aprofunda a **Divisão Internacional do Trabalho**:\n\n- **Países centrais:** exportam tecnologia, serviços e produtos de alto valor agregado\n- **Países periféricos:** exportam commodities (matérias-primas) e produtos de baixo valor agregado\n- **Países semiperiféricos (como o Brasil):** posição intermediária — exportam commodities e alguns produtos industrializados\n\n> **Para a prova:** a globalização **não beneficia todos igualmente**. Sempre analise as questões pensando em **quem ganha** e **quem perde** com o processo.',
          },
          {
            titulo: 'Teorias Demográficas',
            tipo: 'destaque',
            corpo:
              '## Teorias Populacionais\n\nAlém da transição demográfica, conheça as principais teorias populacionais cobradas em vestibulares:\n\n- **Malthusianismo (Thomas Malthus, 1798):** a população cresce em progressão geométrica e a produção de alimentos em progressão aritmética — previa fome generalizada. **Erro:** não previu os avanços tecnológicos na agricultura\n- **Neomalthusianismo (pós-1950):** defendia o controle de natalidade nos países subdesenvolvidos como solução para a pobreza. **Crítica:** culpa os pobres pela pobreza, ignorando as desigualdades estruturais\n- **Reformismo (teoria marxista):** a pobreza não é causada pelo excesso de população, mas pela **desigualdade na distribuição de riqueza**. A solução está em reformas sociais (educação, saúde, distribuição de renda), não no controle de natalidade\n\n> **Na prova:** identifique o posicionamento ideológico por trás de cada teoria. Malthusianismo e neomalthusianismo defendem **controle populacional**; reformismo defende **justiça social**.',
          },
        ],
        imagemDescricao: 'Infográfico mostrando a pirâmide etária brasileira em diferentes décadas e mapa dos blocos econômicos',
        dicasProva: [
          'Relacione urbanização com industrialização e êxodo rural no Brasil',
          'Questões sobre pirâmide etária pedem interpretação gráfica — base larga indica população jovem, topo largo indica envelhecimento',
          'Saiba diferenciar blocos econômicos por nível de integração (zona de livre comércio, união aduaneira, mercado comum)',
          'Globalização pode aparecer em questões interdisciplinares associadas a atualidades',
        ],
        errosComuns: [
          'Confundir taxa de natalidade (nascimentos/1000 hab.) com taxa de fecundidade (filhos por mulher)',
          'Afirmar que o Brasil ainda é um país predominantemente rural — mais de 85% da população é urbana',
          'Confundir zona de livre comércio com mercado comum — são níveis diferentes de integração',
          'Achar que a globalização beneficia todos os países de forma igualitária',
        ],
        exercicios: [
          {
            id: 'geo-hum-1',
            enunciado: 'O êxodo rural no Brasil intensificou-se a partir da década de 1950, principalmente em razão de:',
            alternativas: [
              'Reforma agrária ampla e distribuição de terras',
              'Industrialização das cidades e mecanização do campo',
              'Melhoria das condições de vida no meio rural',
              'Redução das oportunidades de emprego nas cidades',
              'Aumento da produção agrícola de subsistência',
            ],
            respostaCorreta: 1,
            explicacao: 'A industrialização das cidades atraiu trabalhadores rurais em busca de emprego e melhores condições de vida. Paralelamente, a mecanização do campo reduziu a necessidade de mão de obra, expulsando trabalhadores para as cidades.',
            dificuldade: 'facil',
          },
          {
            id: 'geo-hum-2',
            enunciado: 'A pirâmide etária do Brasil atual apresenta base estreitando e topo alargando. Isso indica:',
            alternativas: [
              'Aumento da taxa de natalidade',
              'Explosão demográfica em curso',
              'Transição demográfica com envelhecimento da população',
              'Alta taxa de mortalidade infantil',
              'Imigração em massa de jovens estrangeiros',
            ],
            respostaCorreta: 2,
            explicacao: 'A base estreitando indica queda na natalidade e o topo alargando indica aumento da expectativa de vida — características típicas da transição demográfica avançada, com consequente envelhecimento da população.',
            dificuldade: 'medio',
          },
          {
            id: 'geo-hum-3',
            enunciado: 'O Mercosul é um bloco econômico que atualmente funciona como:',
            alternativas: [
              'União econômica e monetária com moeda única',
              'União aduaneira imperfeita com tarifa externa comum',
              'Mercado comum pleno com livre circulação de trabalhadores',
              'Acordo bilateral exclusivo entre Brasil e Argentina',
              'Organização política sem finalidade econômica',
            ],
            respostaCorreta: 1,
            explicacao: 'O Mercosul é classificado como uma união aduaneira imperfeita: possui tarifa externa comum para importações de fora do bloco, mas ainda apresenta exceções e barreiras internas que impedem a classificação como mercado comum pleno.',
            dificuldade: 'medio',
          },
          {
            id: 'geo-hum-4',
            enunciado: 'A macrocefalia urbana no Brasil é caracterizada por:',
            alternativas: [
              'Distribuição equilibrada da população entre as cidades',
              'Concentração excessiva de população e serviços em poucas metrópoles',
              'Crescimento ordenado e planejado das cidades médias',
              'Retorno massivo da população para as áreas rurais',
              'Planejamento urbano eficiente em todas as capitais',
            ],
            respostaCorreta: 1,
            explicacao: 'Macrocefalia urbana é o fenômeno de concentração desproporcional de população, serviços e atividades econômicas em uma ou poucas grandes cidades, como São Paulo e Rio de Janeiro, gerando inchaço urbano e desigualdade regional.',
            dificuldade: 'facil',
          },
          {
            id: 'geo-hum-5',
            enunciado: 'Sobre a globalização, é INCORRETO afirmar que:',
            alternativas: [
              'Intensifica os fluxos de mercadorias e capitais entre países',
              'Favorece a expansão de empresas multinacionais',
              'Garante desenvolvimento econômico igual para todos os países participantes',
              'Utiliza as tecnologias de informação como motor de integração',
              'Pode gerar desemprego estrutural em economias menos competitivas',
            ],
            respostaCorreta: 2,
            explicacao: 'A globalização não garante desenvolvimento igual — ela tende a aprofundar desigualdades entre países centrais (desenvolvidos) e periféricos (em desenvolvimento), pois as nações com maior capital e tecnologia se beneficiam mais das trocas comerciais.',
            dificuldade: 'dificil',
          },
        ],
      },
    },
    {
      id: 'cartografia-geomorfologia',
      titulo: 'Cartografia e Geomorfologia',
      peso: 20,
      conteudo: {
        resumo: 'Escalas, projeções cartográficas, coordenadas geográficas, fusos horários e formação do relevo terrestre.',
        explicacao:
          'Cartografia e Geomorfologia são temas fundamentais para a leitura de mapas e a compreensão do relevo.\n\nCartografia:\n• Escala: relação entre distância no mapa e distância real. Ex: 1:100.000 → 1 cm no mapa = 1 km\n• Projeções: Mercator (cilíndrica, distorce áreas polares), Peters (equivalente, preserva áreas), azimutal (centrada em um ponto)\n• Coordenadas: latitude (N/S, 0° a 90°) e longitude (L/O, 0° a 180°)\n• Fusos horários: a Terra possui 24 fusos de 15° cada. O Brasil tem 4 fusos horários\n\nGeomorfologia:\n• Estrutura da Terra: crosta (litosfera), manto (astenosfera) e núcleo\n• Placas tectônicas: movimentos convergente, divergente e transformante\n• Tipos de relevo: planícies (sedimentação), planaltos (erosão), depressões (desgaste)\n• Agentes modeladores: intemperismo (físico, químico, biológico) e erosão (água, vento, gelo)',
        secoes: [
          {
            titulo: 'Introdução à Cartografia',
            tipo: 'texto',
            corpo:
              '## O que é Cartografia?\n\nA **Cartografia** é a ciência e a arte de representar a superfície terrestre em mapas, cartas e plantas. É uma ferramenta essencial para a Geografia, pois permite visualizar e analisar fenômenos espaciais.\n\nNo vestibular da UNIVESP, os temas mais cobrados são:\n\n- **Tipos de mapas** e suas finalidades\n- **Escalas** (gráfica e numérica) e cálculos de distância\n- **Coordenadas geográficas** (latitude e longitude)\n- **Projeções cartográficas** e suas distorções\n- **Fusos horários**\n\n> **Dica fundamental:** a Cartografia é um tema que exige **prática com cálculos**. Não basta decorar conceitos — treine os cálculos de escala e fuso horário.\n\n## Tipos de Mapas\n\nOs mapas podem ser classificados de acordo com sua finalidade:\n\n### Mapa Físico\n- Representa elementos **naturais**: relevo, hidrografia, vegetação\n- Usa cores para indicar altitudes (hipsometria): verde (planícies), amarelo (planaltos), marrom (montanhas)\n- Útil para estudar a geomorfologia de uma região\n\n### Mapa Político\n- Representa **divisões administrativas**: países, estados, municípios\n- Mostra fronteiras, capitais e cidades importantes\n- É o tipo mais comum em atlas e livros didáticos\n\n### Mapa Temático\n- Representa um **tema específico**: densidade demográfica, clima, vegetação, IDH, produção agrícola\n- Usa símbolos, cores e legendas para transmitir informações qualitativas ou quantitativas\n- Exemplos: mapa de climas do Brasil, mapa de biomas, mapa de conflitos\n\n### Carta Topográfica\n- Representa o relevo com **curvas de nível** (isolinhas de altitude)\n- Escala grande (muito detalhada): 1:25.000 a 1:100.000\n- Usada em engenharia, planejamento urbano e atividades militares\n\n### Planta\n- Representação em **escala muito grande** de uma área reduzida (bairro, edifício, terreno)\n- Curvatura da Terra pode ser desconsiderada\n- Escala típica: 1:500 a 1:10.000',
          },
          {
            titulo: 'Escalas Cartográficas',
            tipo: 'texto',
            corpo:
              '## Escala: Conceito e Tipos\n\nA **escala** é a relação matemática entre a distância representada no mapa e a distância real na superfície terrestre.\n\n### Escala Numérica\n\nRepresentada como uma fração ou razão:\n\n- **Formato:** 1:100.000 ou 1/100.000\n- **Leitura:** 1 cm no mapa corresponde a 100.000 cm (= 1 km) na realidade\n- O **numerador** é sempre 1 (distância no mapa)\n- O **denominador** indica quantas vezes a realidade foi reduzida\n\n### Escala Gráfica\n\nRepresentada por uma barra graduada desenhada no mapa:\n\n- Exemplo: uma barra onde cada segmento de 1 cm corresponde a 5 km\n- **Vantagem:** se o mapa for ampliado ou reduzido (fotocópia), a escala gráfica se ajusta proporcionalmente\n- A escala numérica, por outro lado, ficaria **incorreta** após ampliação/redução\n\n### Escala Grande vs. Escala Pequena\n\n- **Escala grande** = denominador **pequeno** = mais detalhes = área menor representada\n  - Exemplo: 1:10.000 (planta de um bairro)\n- **Escala pequena** = denominador **grande** = menos detalhes = área maior representada\n  - Exemplo: 1:50.000.000 (mapa-múndi)\n\n> **Atenção — erro clássico:** Escala 1:10.000 é **MAIOR** que 1:1.000.000. Pense na fração: 1/10.000 > 1/1.000.000. Maior a escala, maior o nível de detalhe.',
          },
          {
            titulo: 'Fórmula de Escala',
            tipo: 'formula',
            corpo:
              '## Fórmula Fundamental\n\n**E = d / D**\n\nOnde:\n- **E** = escala (fração)\n- **d** = distância no mapa\n- **D** = distância real\n\nFormas derivadas:\n- **D = d × denominador da escala** (para encontrar a distância real)\n- **d = D / denominador da escala** (para encontrar a distância no mapa)\n\n> **Regra prática de conversão:**\n> - 1 km = 1.000 m = 100.000 cm\n> - Para converter cm → km: **divida por 100.000**\n> - Para converter km → cm: **multiplique por 100.000**',
          },
          {
            titulo: 'Exemplos de Cálculo de Escala',
            tipo: 'exemplo',
            corpo:
              '## Exemplo 1 — Encontrar a Distância Real\n\n**Problema:** Em um mapa com escala 1:250.000, duas cidades estão a 8 cm de distância. Qual a distância real?\n\n**Resolução:**\n- D = d × denominador\n- D = 8 cm × 250.000\n- D = 2.000.000 cm\n- D = 2.000.000 ÷ 100.000 = **20 km**\n\n---\n\n## Exemplo 2 — Encontrar a Distância no Mapa\n\n**Problema:** Duas cidades distam 150 km na realidade. Em um mapa de escala 1:5.000.000, qual a distância entre elas no mapa?\n\n**Resolução:**\n- Converter 150 km para cm: 150 × 100.000 = 15.000.000 cm\n- d = D ÷ denominador\n- d = 15.000.000 ÷ 5.000.000 = **3 cm**\n\n---\n\n## Exemplo 3 — Encontrar a Escala\n\n**Problema:** No mapa, duas cidades estão a 5 cm de distância. A distância real é de 50 km. Qual a escala do mapa?\n\n**Resolução:**\n- Converter 50 km para cm: 50 × 100.000 = 5.000.000 cm\n- E = d / D = 5 / 5.000.000 = 1/1.000.000\n- Escala: **1:1.000.000**',
          },
          {
            titulo: 'Coordenadas Geográficas',
            tipo: 'texto',
            corpo:
              '## Sistema de Coordenadas\n\nAs **coordenadas geográficas** permitem localizar qualquer ponto na superfície terrestre usando duas medidas angulares:\n\n### Latitude\n- Distância angular em relação à **Linha do Equador** (0°)\n- Varia de **0° a 90°** Norte (N) ou Sul (S)\n- Linhas de referência: **paralelos** (linhas horizontais)\n- Paralelos importantes:\n  - Equador (0°)\n  - Trópico de Câncer (23°27\' N)\n  - Trópico de Capricórnio (23°27\' S)\n  - Círculo Polar Ártico (66°33\' N)\n  - Círculo Polar Antártico (66°33\' S)\n\n### Longitude\n- Distância angular em relação ao **Meridiano de Greenwich** (0°)\n- Varia de **0° a 180°** Leste (L/E) ou Oeste (O/W)\n- Linhas de referência: **meridianos** (linhas verticais)\n- Meridianos importantes:\n  - Greenwich (0°) — referência para fusos horários\n  - Linha Internacional de Data (aproximadamente 180°)\n\n> **Macete para não confundir:**\n> - **Latitude** → **Lados** (Norte/Sul) → paralelos são **horizontais**\n> - **Longitude** → **Longo** (Leste/Oeste) → meridianos são **verticais**\n\n## Fusos Horários\n\nA Terra completa uma rotação de 360° em 24 horas. Portanto, cada **fuso horário** corresponde a **15° de longitude** (360° ÷ 24 = 15°).\n\n### Regras de Fuso Horário\n\n- **A leste de Greenwich:** horas são **adiantadas** (+)\n- **A oeste de Greenwich:** horas são **atrasadas** (-)\n- **Linha Internacional de Data (180°):** ao cruzar de oeste para leste, volta-se um dia; de leste para oeste, avança-se um dia\n\n### Fusos Horários do Brasil\n\nO Brasil possui **4 fusos horários** (todos a oeste de Greenwich):\n\n- **Fuso -2 (UTC-2):** ilhas oceânicas (Fernando de Noronha, Atol das Rocas)\n- **Fuso -3 (UTC-3):** horário de Brasília — abrange a maior parte do território (litoral, Sudeste, Sul, Nordeste, parte do Norte)\n- **Fuso -4 (UTC-4):** Amazonas, Mato Grosso, Mato Grosso do Sul, Roraima, Rondônia\n- **Fuso -5 (UTC-5):** Acre e parte oeste do Amazonas',
          },
          {
            titulo: 'Projeções Cartográficas',
            tipo: 'texto',
            corpo:
              '## Principais Projeções\n\nRepresentar a superfície esférica da Terra em um plano bidimensional (mapa) sempre gera **distorções**. As projeções cartográficas diferem na propriedade que preservam:\n\n### Projeção de Mercator (Cilíndrica Conforme)\n- **Preserva:** ângulos e formas (conforme)\n- **Distorce:** áreas — regiões polares parecem enormes (Groenlândia parece do tamanho da África)\n- **Uso:** navegação marítima (mantém os ângulos de rumo)\n- **Crítica:** visão eurocêntrica — coloca a Europa no centro e amplia o hemisfério Norte\n\n### Projeção de Peters (Cilíndrica Equivalente)\n- **Preserva:** áreas proporcionais (equivalente)\n- **Distorce:** formas — continentes parecem alongados\n- **Uso:** representação mais justa das proporções reais dos continentes\n- **Contexto:** surgiu como alternativa ao eurocentrismo de Mercator\n\n### Projeção Azimutal (Plana)\n- **Preserva:** direções a partir de um ponto central\n- **Distorce:** áreas e formas nas bordas do mapa\n- **Uso:** navegação aérea, mapas polares, emblema da ONU\n\n### Projeção de Robinson (Cilíndrica Afilática)\n- **Não preserva** nenhuma propriedade perfeitamente, mas minimiza todas as distorções\n- **Uso:** atlas e mapas-múndi de uso geral — compromisso visual agradável\n\n> **Para a prova:** a questão clássica é pedir que você identifique a projeção pela sua **vantagem e limitação**. Mercator = ângulos preservados, áreas distorcidas. Peters = áreas preservadas, formas distorcidas.',
          },
          {
            titulo: 'Introdução à Geomorfologia',
            tipo: 'texto',
            corpo:
              '## Estrutura Interna da Terra\n\nA Terra é formada por camadas concêntricas com composição e comportamento distintos:\n\n- **Crosta (Litosfera):** camada rochosa externa; dividida em crosta continental (30-70 km) e crosta oceânica (5-10 km)\n- **Manto:** camada intermediária (~2.900 km de espessura); rocha em estado viscoso (magma); contém a **astenosfera**, onde ocorrem as correntes de convecção\n- **Núcleo externo:** líquido, composto de ferro e níquel (~2.200 km); gera o campo magnético terrestre\n- **Núcleo interno:** sólido, composto de ferro e níquel (~1.200 km de raio); temperaturas acima de 5.000 °C\n\n## Placas Tectônicas\n\nA **litosfera** está fragmentada em grandes blocos chamados **placas tectônicas**, que flutuam sobre a astenosfera e se movem impulsionadas pelas **correntes de convecção** do manto.\n\n### Tipos de Movimento entre Placas\n\n**Convergente (colisão):**\n- Duas placas se aproximam e colidem\n- **Resultado:** formação de montanhas (dobramentos modernos), fossas oceânicas, vulcanismo e terremotos\n- **Exemplo:** Placa de Nazca × Placa Sul-Americana → Cordilheira dos Andes\n- Quando uma placa oceânica mergulha sob uma continental: **subducção**\n\n**Divergente (afastamento):**\n- Duas placas se afastam uma da outra\n- **Resultado:** formação de dorsais oceânicas (cadeias de montanhas submarinas), rifts continentais\n- **Exemplo:** Dorsal Mesoatlântica — separação entre Placa Sul-Americana e Placa Africana → formação do Oceano Atlântico\n\n**Transformante (deslizamento lateral):**\n- Duas placas deslizam lateralmente uma em relação à outra\n- **Resultado:** terremotos intensos (sem formação de montanhas ou vulcões)\n- **Exemplo:** Falha de San Andreas (Califórnia, EUA) — Placa do Pacífico × Placa Norte-Americana',
          },
          {
            titulo: 'Tabela dos Movimentos Tectônicos',
            tipo: 'tabela',
            corpo:
              '## Resumo dos Movimentos de Placas\n\n| Movimento | Direção | Resultado | Exemplo |\n|---|---|---|---|\n| **Convergente** | Aproximação | Montanhas, fossas, vulcões | Andes (Nazca × Sul-Americana) |\n| **Divergente** | Afastamento | Dorsais oceânicas, rifts | Dorsal Mesoatlântica |\n| **Transformante** | Lateral | Terremotos | Falha de San Andreas |\n\n> **Na prova:** o Brasil está no **centro da Placa Sul-Americana**, longe das bordas tectônicas. Por isso, **não há vulcões ativos** nem terremotos significativos no território brasileiro.',
          },
          {
            titulo: 'Formação e Tipos de Relevo',
            tipo: 'texto',
            corpo:
              '## Agentes de Formação do Relevo\n\nO relevo é modelado pela ação conjunta de **agentes internos** (endógenos) e **agentes externos** (exógenos).\n\n### Agentes Internos (Endógenos)\n\nOriginam-se no interior da Terra e são responsáveis pela **criação** do relevo:\n\n- **Tectonismo:** movimentos lentos das placas tectônicas que formam montanhas (orogênese), fossas e falhas\n- **Vulcanismo:** expulsão de magma à superfície, formando vulcões e ilhas vulcânicas\n- **Abalos sísmicos:** liberação de energia nas falhas geológicas, causando terremotos\n\n### Agentes Externos (Exógenos)\n\nOriginam-se na superfície e são responsáveis pela **escultura** (modelagem) do relevo:\n\n- **Intemperismo físico:** fragmentação das rochas por variação de temperatura (dilatação/contração)\n- **Intemperismo químico:** dissolução e alteração química das rochas pela água e substâncias ácidas\n- **Intemperismo biológico:** ação de raízes, micro-organismos e animais sobre as rochas\n- **Erosão:** transporte do material desgastado pela água (erosão hídrica), vento (erosão eólica) e gelo (erosão glacial)\n- **Sedimentação:** deposição do material transportado em áreas mais baixas\n\n## Formas de Relevo\n\n### Dobramentos Modernos\n- Formados pela **colisão de placas tectônicas** em períodos geológicos recentes (Era Cenozoica)\n- Resultam em montanhas **altas e pontiagudas**\n- Exemplos: Andes, Himalaia, Alpes, Montanhas Rochosas\n- **Não existem no Brasil** — o relevo brasileiro é geologicamente antigo\n\n### Dobramentos Antigos (Escudos Cristalinos)\n- Formações muito antigas (eras Arqueozoica e Proterozoica), já bastante erodidas\n- Resultam em serras e planaltos **baixos e arredondados**\n- Ricos em **minerais metálicos** (ferro, manganês, ouro)\n- Exemplos no Brasil: Serra do Espinhaço, Serra da Mantiqueira\n\n### Bacias Sedimentares\n- Áreas de depressão preenchidas por **sedimentos** ao longo de milhões de anos\n- Podem conter **petróleo, carvão mineral e gás natural** (combustíveis fósseis)\n- Exemplos no Brasil: Bacia do Paraná, Bacia Amazônica, Bacia do Parnaíba\n\n### Tipos de Relevo no Brasil\n\n- **Planaltos:** superfícies elevadas onde predomina a **erosão** (desgaste); os mais extensos no Brasil\n- **Planícies:** superfícies planas e baixas onde predomina a **sedimentação** (depósito); ex: Planície Amazônica, Planície do Pantanal\n- **Depressões:** áreas mais baixas que o entorno, formadas por **erosão diferencial**; ex: Depressão Sertaneja, Depressão Central\n\n> **Ponto mais alto do Brasil:** Pico da Neblina (2.993,78 m), na Serra do Imeri (AM), próximo à fronteira com a Venezuela.',
          },
          {
            titulo: 'Relevo Brasileiro — Síntese',
            tipo: 'importante',
            corpo:
              '## Características do Relevo do Brasil\n\n- O Brasil possui **relevo relativamente baixo** — altitudes modestas, sem grandes cadeias montanhosas\n- **Não há vulcões ativos** — o território está no centro da Placa Sul-Americana\n- Predominam **planaltos** (58% do território) e **depressões** (27%)\n- As **planícies** representam apenas ~15% do território\n- O relevo brasileiro é **geologicamente antigo** — as rochas mais antigas têm bilhões de anos (escudos cristalinos)\n- Os dobramentos modernos (cordilheiras) são **inexistentes** no Brasil\n- As serras brasileiras são **restos de dobramentos antigos** desgastados pela erosão ao longo de eras geológicas\n\n> **Erro comum na prova:** afirmar que o Brasil possui "montanhas de formação recente" ou "vulcões inativos". O Brasil **nunca teve vulcões** em período geológico recente e suas serras são formações **muito antigas e erodidas**.',
          },
        ],
        imagemDescricao: 'Mapa-múndi com linhas de latitude e longitude, fusos horários e esquema da estrutura interna da Terra',
        dicasProva: [
          'Para calcular escala: Distância real = distância no mapa × denominador da escala',
          'Em questões de fuso horário, lembre que a leste as horas são adiantadas e a oeste são atrasadas',
          'Diferencie escala grande (mais detalhes, menor denominador) de escala pequena (menos detalhes, maior denominador)',
          'Questões sobre relevo costumam cobrar agentes internos (tectonismo, vulcanismo) vs. externos (erosão, intemperismo)',
        ],
        errosComuns: [
          'Inverter escala grande e escala pequena — escala 1:10.000 é MAIOR que 1:1.000.000',
          'Confundir latitude (paralelos, horizontal) com longitude (meridianos, vertical)',
          'Errar o sentido do fuso horário: a leste soma horas, a oeste subtrai',
          'Confundir planalto (processo de erosão predominante) com planície (processo de sedimentação)',
        ],
        exercicios: [
          {
            id: 'geo-car-1',
            enunciado: 'Em um mapa com escala 1:500.000, a distância entre duas cidades mede 4 cm. Qual é a distância real entre elas?',
            alternativas: ['2 km', '5 km', '10 km', '20 km', '50 km'],
            respostaCorreta: 3,
            explicacao: 'Distância real = 4 cm × 500.000 = 2.000.000 cm = 20.000 m = 20 km. Basta multiplicar a distância no mapa pelo denominador da escala e converter para a unidade desejada.',
            dificuldade: 'medio',
          },
          {
            id: 'geo-car-2',
            enunciado: 'Se em Brasília (fuso -3) são 15h, que horas são em Fernando de Noronha (fuso -2)?',
            alternativas: ['13h', '14h', '15h', '16h', '17h'],
            respostaCorreta: 3,
            explicacao: 'Fernando de Noronha está 1 fuso a leste de Brasília (fuso -2 vs. -3). A leste as horas são adiantadas, portanto 15h + 1h = 16h.',
            dificuldade: 'medio',
          },
          {
            id: 'geo-car-3',
            enunciado: 'A projeção de Mercator é frequentemente criticada porque:',
            alternativas: [
              'Não representa os oceanos corretamente',
              'Distorce as áreas, ampliando as regiões próximas aos polos',
              'Inverte a posição do hemisfério Norte e do Sul',
              'Não permite a navegação marítima',
              'Representa apenas um hemisfério por vez',
            ],
            respostaCorreta: 1,
            explicacao: 'A projeção de Mercator (cilíndrica conforme) preserva os ângulos para navegação, mas distorce significativamente as áreas, fazendo regiões polares parecerem muito maiores do que realmente são (ex: Groenlândia parece do tamanho da África).',
            dificuldade: 'facil',
          },
          {
            id: 'geo-car-4',
            enunciado: 'As placas tectônicas se movimentam principalmente devido a:',
            alternativas: [
              'Rotação da Terra sobre seu eixo',
              'Atração gravitacional da Lua',
              'Correntes de convecção no manto terrestre',
              'Pressão atmosférica sobre a crosta',
              'Evaporação da água dos oceanos',
            ],
            respostaCorreta: 2,
            explicacao: 'As correntes de convecção no manto (astenosfera) são geradas pela diferença de temperatura entre as camadas internas da Terra. Esse movimento do material rochoso em estado viscoso arrasta as placas tectônicas na superfície.',
            dificuldade: 'medio',
          },
          {
            id: 'geo-car-5',
            enunciado: 'Sobre o relevo brasileiro, é correto afirmar que:',
            alternativas: [
              'Predominam grandes cadeias montanhosas com vulcões ativos',
              'O território é formado majoritariamente por planaltos, planícies e depressões',
              'Não existem planícies no território brasileiro',
              'As montanhas brasileiras são de formação geológica recente',
              'O ponto mais alto do Brasil ultrapassa 5.000 metros de altitude',
            ],
            respostaCorreta: 1,
            explicacao: 'O relevo brasileiro é composto predominantemente por planaltos, planícies e depressões. Não há grandes cadeias montanhosas nem vulcões ativos, pois o Brasil está no centro da Placa Sul-Americana, longe das bordas tectônicas.',
            dificuldade: 'facil',
          },
        ],
      },
    },
  ],
};
