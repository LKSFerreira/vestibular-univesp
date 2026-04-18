import type { Disciplina } from './tipos';

export const disciplinaBiologia: Disciplina = {
  id: 'biologia',
  titulo: 'Biologia',
  icone: '🧬',
  topicos: [
    {
      id: 'ecologia-ciclos',
      titulo: 'Ecologia e Ciclos',
      peso: 35,
      conteudo: {
        resumo: 'Cadeias alimentares, relações ecológicas e ciclos biogeoquímicos.',
        explicacao:
          'Ecologia é o tema mais cobrado em biologia. Entenda os níveis de organização e as relações entre seres vivos.\n\nCadeia alimentar: Produtores → Consumidores primários → Secundários → Terciários → Decompositores\n\nRelações ecológicas:\n• Mutualismo: benefício mútuo (líquen = fungo + alga)\n• Parasitismo: um se beneficia, outro é prejudicado\n• Competição: disputa por recursos\n• Predação: um se alimenta do outro\n\nCiclos biogeoquímicos mais cobrados: água, carbono e nitrogênio.',
        imagemDescricao: 'Diagrama de uma cadeia alimentar com produtores, consumidores e decompositores',
        dicasProva: [
          'Questões de cadeia alimentar cobram fluxo de energia (unidirecional) e pirâmide ecológica',
          'Saiba os ciclos do carbono, nitrogênio e água — são os mais cobrados em vestibulares',
          'Relações ecológicas aparecem com exemplos práticos do cotidiano e da natureza',
          'Biomagnificação (acúmulo progressivo de toxinas na cadeia) é tema frequente',
        ],
        errosComuns: [
          'Confundir cadeia alimentar (linear) com teia alimentar (ramificada, com múltiplas cadeias)',
          'Afirmar que decompositores são consumidores — eles atuam em todos os níveis, reciclando matéria',
          'Esquecer que a energia diminui a cada nível trófico (apenas ~10% é transferida ao nível seguinte)',
          'Confundir mutualismo (relação obrigatória) com protocooperação (relação facultativa)',
        ],
        secoes: [
          {
            titulo: 'Introdução à Ecologia',
            tipo: 'texto',
            corpo:
              '## O que é Ecologia?\n\n' +
              'Ecologia é o ramo da Biologia que estuda as **interações entre os seres vivos** e destes com o **ambiente físico** (fatores abióticos). O termo foi cunhado por Ernst Haeckel em 1866 e vem do grego *oikos* (casa) + *logos* (estudo).\n\n' +
              '### Níveis de organização ecológica\n\n' +
              '- **Organismo** — indivíduo de uma espécie\n' +
              '- **População** — conjunto de organismos da mesma espécie em uma área\n' +
              '- **Comunidade (biocenose)** — conjunto de populações de espécies diferentes convivendo em uma mesma região\n' +
              '- **Ecossistema** — comunidade + fatores abióticos (água, luz, solo, temperatura)\n' +
              '- **Biosfera** — conjunto de todos os ecossistemas da Terra\n\n' +
              '> A ecologia é o tema **mais cobrado** em Biologia nos vestibulares da UNIVESP, representando cerca de 35% das questões.',
          },
          {
            titulo: 'Cadeias e Teias Alimentares',
            tipo: 'texto',
            corpo:
              '## Cadeia Alimentar\n\n' +
              'A cadeia alimentar representa a **transferência linear de matéria e energia** entre os seres vivos de um ecossistema. Cada posição na cadeia é chamada de **nível trófico**.\n\n' +
              '### Componentes da cadeia\n\n' +
              '- **Produtores (autótrofos)** — organismos que produzem seu próprio alimento por fotossíntese ou quimiossíntese (plantas, algas, cianobactérias). Ocupam sempre o **1º nível trófico**\n' +
              '- **Consumidores primários (herbívoros)** — alimentam-se dos produtores. Ex.: gafanhoto, coelho, boi. Ocupam o **2º nível trófico**\n' +
              '- **Consumidores secundários (carnívoros primários)** — alimentam-se dos herbívoros. Ex.: sapo, raposa. Ocupam o **3º nível trófico**\n' +
              '- **Consumidores terciários (carnívoros secundários)** — alimentam-se dos consumidores secundários. Ex.: cobra, águia. Ocupam o **4º nível trófico**\n' +
              '- **Decompositores** — fungos e bactérias que degradam a matéria orgânica morta em todos os níveis, devolvendo nutrientes minerais ao ambiente\n\n' +
              '### Teia alimentar\n\n' +
              'Na natureza, os organismos raramente participam de uma única cadeia. A **teia alimentar** é o conjunto de cadeias alimentares interconectadas de um ecossistema. Ela representa de forma mais realista as relações de alimentação, pois muitos organismos ocupam mais de um nível trófico.\n\n' +
              '> **Diferença fundamental:** cadeia = sequência linear | teia = rede ramificada de múltiplas cadeias',
          },
          {
            titulo: 'Fluxo de Energia e Pirâmides Ecológicas',
            tipo: 'importante',
            corpo:
              '## Fluxo de energia\n\n' +
              'A energia flui de forma **unidirecional** nos ecossistemas: Sol → produtores → consumidores → decompositores → calor. A cada nível trófico, aproximadamente **90% da energia é dissipada** na forma de calor pela respiração celular. Apenas cerca de **10% é transferida** ao nível seguinte.\n\n' +
              '> Por isso, as cadeias alimentares raramente ultrapassam 4 a 5 níveis tróficos — a quantidade de energia disponível se torna insuficiente.\n\n' +
              '### Pirâmides ecológicas\n\n' +
              'As pirâmides ecológicas representam graficamente as relações quantitativas entre os níveis tróficos:\n\n' +
              '| Tipo de pirâmide | O que representa | Pode ser invertida? |\n' +
              '|---|---|---|\n' +
              '| **Pirâmide de energia** | Quantidade de energia em cada nível | **Nunca** — sempre diminui |\n' +
              '| **Pirâmide de biomassa** | Massa total de matéria orgânica | Sim — em ecossistemas aquáticos |\n' +
              '| **Pirâmide de números** | Quantidade de indivíduos | Sim — ex.: árvore com parasitas |\n\n' +
              '### Biomagnificação\n\n' +
              'É o **acúmulo progressivo de substâncias tóxicas não-biodegradáveis** (como DDT, mercúrio, chumbo) ao longo da cadeia alimentar. Os predadores de topo acumulam as maiores concentrações, pois ingerem toda a toxina acumulada por suas presas.',
          },
          {
            titulo: 'Relações Ecológicas',
            tipo: 'texto',
            corpo:
              '## Classificação das relações ecológicas\n\n' +
              'As relações ecológicas podem ser **intraespecíficas** (entre indivíduos da mesma espécie) ou **interespecíficas** (entre espécies diferentes). Podem também ser **harmônicas** (nenhum é prejudicado) ou **desarmônicas** (pelo menos um é prejudicado).\n\n' +
              '### Relações interespecíficas harmônicas\n\n' +
              '| Relação | Descrição | Exemplo |\n' +
              '|---|---|---|\n' +
              '| **Mutualismo** | Associação obrigatória com benefício mútuo (+/+) | Líquen (fungo + alga); micorriza (fungo + raiz de planta) |\n' +
              '| **Protocooperação** | Associação facultativa com benefício mútuo (+/+) | Anu-preto e gado (ave come carrapatos); caranguejo-ermitão e anêmona |\n' +
              '| **Comensalismo** | Um se beneficia, o outro é indiferente (+/0) | Rêmora presa ao tubarão; orquídea sobre tronco de árvore (epifitismo) |\n\n' +
              '### Relações interespecíficas desarmônicas\n\n' +
              '| Relação | Descrição | Exemplo |\n' +
              '|---|---|---|\n' +
              '| **Predação** | Um organismo mata e se alimenta do outro (+/−) | Leão e zebra; cobra e rato |\n' +
              '| **Parasitismo** | Um vive às custas do outro, causando-lhe prejuízo (+/−) | Lombriga no intestino; carrapato no cão |\n' +
              '| **Competição interespecífica** | Disputa por recursos entre espécies diferentes (−/−) | Leão e hiena disputando presa |\n' +
              '| **Amensalismo (antibiose)** | Um inibe o outro, sem benefício próprio (0/−) | Fungo *Penicillium* inibe bactérias (penicilina) |\n\n' +
              '### Relações intraespecíficas\n\n' +
              '- **Sociedade** (harmônica): divisão de trabalho entre indivíduos — formigas, abelhas, cupins\n' +
              '- **Colônia** (harmônica): indivíduos anatomicamente unidos — caravela-portuguesa\n' +
              '- **Competição intraespecífica** (desarmônica): disputa por recursos entre indivíduos da mesma espécie — território, alimento, parceiros\n' +
              '- **Canibalismo** (desarmônica): um indivíduo se alimenta de outro da mesma espécie — viúva-negra',
          },
          {
            titulo: 'Ciclos Biogeoquímicos',
            tipo: 'texto',
            corpo:
              '## O que são ciclos biogeoquímicos?\n\n' +
              'São os **percursos cíclicos da matéria** (elementos químicos) entre os seres vivos e o ambiente físico. Diferentemente da energia (que flui de forma unidirecional), a **matéria é reciclada** continuamente.\n\n' +
              '### Ciclo da Água (Hidrológico)\n\n' +
              '1. **Evaporação** — a água dos oceanos, rios e lagos evapora pela ação do calor solar\n' +
              '2. **Transpiração** — as plantas liberam vapor d\'água pelas folhas (evapotranspiração)\n' +
              '3. **Condensação** — o vapor d\'água sobe, resfria-se e forma nuvens\n' +
              '4. **Precipitação** — a água retorna à superfície na forma de chuva, neve ou granizo\n' +
              '5. **Infiltração e escoamento** — a água penetra no solo ou escoa superficialmente para rios e oceanos\n\n' +
              '### Ciclo do Carbono\n\n' +
              '- **Fixação:** os produtores retiram CO₂ da atmosfera pela **fotossíntese** (6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂)\n' +
              '- **Transferência:** o carbono passa pelos consumidores via cadeia alimentar\n' +
              '- **Devolução ao ambiente:** pela **respiração celular** (C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O), **decomposição** e **combustão** de combustíveis fósseis\n' +
              '- **Efeito estufa:** o aumento de CO₂ (queima de combustíveis fósseis e desmatamento) intensifica o efeito estufa, contribuindo para o aquecimento global\n\n' +
              '### Ciclo do Nitrogênio\n\n' +
              'O nitrogênio (N₂) compõe cerca de 78% da atmosfera, mas a maioria dos seres vivos **não consegue utilizá-lo diretamente**. O ciclo depende de bactérias especializadas:\n\n' +
              '| Etapa | Processo | Organismos envolvidos |\n' +
              '|---|---|---|\n' +
              '| **Fixação** | N₂ → NH₃ (amônia) | Bactérias fixadoras (*Rhizobium*, *Azotobacter*) |\n' +
              '| **Nitrificação** | NH₃ → NO₂⁻ → NO₃⁻ | Bactérias nitrificantes (*Nitrosomonas*, *Nitrobacter*) |\n' +
              '| **Assimilação** | NO₃⁻ absorvido pelas plantas | Raízes das plantas |\n' +
              '| **Decomposição** | Matéria orgânica → NH₃ | Bactérias e fungos decompositores |\n' +
              '| **Desnitrificação** | NO₃⁻ → N₂ (devolvido à atmosfera) | Bactérias desnitrificantes |',
          },
          {
            titulo: 'Sucessão Ecológica',
            tipo: 'texto',
            corpo:
              '## Sucessão Ecológica\n\n' +
              'A sucessão ecológica é o processo **gradual e ordenado de colonização e substituição** de comunidades biológicas em um ambiente ao longo do tempo, até atingir uma comunidade estável chamada **clímax**.\n\n' +
              '### Tipos de sucessão\n\n' +
              '- **Sucessão primária** — ocorre em ambientes **nunca antes colonizados** (rocha nua, lava solidificada, duna de areia). As primeiras espécies a se instalarem são chamadas de **espécies pioneiras** (líquens, musgos)\n' +
              '- **Sucessão secundária** — ocorre em ambientes **previamente colonizados** que foram perturbados (área desmatada, campo após incêndio). É mais rápida que a primária, pois o solo já possui nutrientes e sementes\n\n' +
              '### Etapas da sucessão\n\n' +
              '1. **Ecese (instalação)** — espécies pioneiras colonizam o ambiente e começam a modificá-lo\n' +
              '2. **Seral (comunidades intermediárias)** — novas espécies vão substituindo as anteriores, aumentando a biodiversidade\n' +
              '3. **Clímax** — comunidade estável, com máxima biodiversidade e equilíbrio dinâmico\n\n' +
              '> Durante a sucessão, a **biodiversidade aumenta**, a **biomassa aumenta** e as **teias alimentares se tornam mais complexas**.',
          },
          {
            titulo: 'Impactos Ambientais',
            tipo: 'importante',
            corpo:
              '## Principais impactos ambientais\n\n' +
              '| Impacto | Causa | Consequência |\n' +
              '|---|---|---|\n' +
              '| **Desmatamento** | Remoção de cobertura vegetal | Erosão, perda de biodiversidade, aumento de CO₂ |\n' +
              '| **Efeito estufa intensificado** | Queima de combustíveis fósseis (CO₂, CH₄) | Aquecimento global, derretimento de geleiras |\n' +
              '| **Eutrofização** | Excesso de nutrientes (N, P) em corpos d\'água | Proliferação de algas → morte de peixes por falta de O₂ |\n' +
              '| **Chuva ácida** | Emissão de SO₂ e NOₓ por indústrias e veículos | Acidificação de lagos, danos a monumentos e florestas |\n' +
              '| **Inversão térmica** | Camada de ar quente aprisiona poluentes perto do solo | Agravamento de doenças respiratórias em grandes cidades |\n' +
              '| **Destruição da camada de ozônio** | Emissão de CFCs (clorofluorcarbonos) | Aumento da radiação UV na superfície |\n' +
              '| **Biomagnificação** | Uso de agrotóxicos não-biodegradáveis | Acúmulo de toxinas nos predadores de topo |\n\n' +
              '### Biomas brasileiros ameaçados\n\n' +
              'O Brasil possui **seis biomas principais**: Amazônia, Cerrado, Mata Atlântica, Caatinga, Pampa e Pantanal. Todos sofrem pressão antrópica, sendo a **Mata Atlântica** o mais devastado (restam menos de 12% da cobertura original) e o **Cerrado** o que mais perde área atualmente para a agropecuária.\n\n' +
              '> **Dica de prova:** questões sobre impactos ambientais frequentemente relacionam causas humanas a desequilíbrios nos ciclos biogeoquímicos e nas cadeias alimentares.',
          },
        ],
        exercicios: [
          {
            id: 'bio-eco-1',
            enunciado: 'Em uma cadeia alimentar, a energia disponível a cada nível trófico:',
            alternativas: [
              'Aumenta progressivamente',
              'Permanece constante em todos os níveis',
              'Diminui progressivamente',
              'É reciclada integralmente pelos decompositores',
              'Depende exclusivamente do bioma',
            ],
            respostaCorreta: 2,
            explicacao: 'A cada nível trófico, cerca de 90% da energia é dissipada na forma de calor pela respiração celular. Apenas ~10% é transferida ao nível seguinte, por isso as cadeias alimentares raramente ultrapassam 4-5 níveis.',
            dificuldade: 'facil',
          },
          {
            id: 'bio-eco-2',
            enunciado: 'A relação ecológica entre o fungo e a alga no líquen é um exemplo de:',
            alternativas: ['Parasitismo', 'Competição', 'Mutualismo', 'Predação', 'Comensalismo'],
            respostaCorreta: 2,
            explicacao: 'No líquen, o fungo fornece proteção e umidade, enquanto a alga realiza fotossíntese e fornece nutrientes. Ambos se beneficiam e a associação é obrigatória, caracterizando o mutualismo.',
            dificuldade: 'facil',
          },
          {
            id: 'bio-eco-3',
            enunciado: 'No ciclo do carbono, os organismos que retiram CO₂ da atmosfera são os:',
            alternativas: [
              'Decompositores',
              'Consumidores primários',
              'Consumidores secundários',
              'Produtores (por meio da fotossíntese)',
              'Parasitas',
            ],
            respostaCorreta: 3,
            explicacao: 'Os produtores (plantas, algas e cianobactérias) retiram CO₂ da atmosfera durante a fotossíntese, fixando o carbono em moléculas orgânicas como a glicose: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂.',
            dificuldade: 'facil',
          },
          {
            id: 'bio-eco-4',
            enunciado: 'A biomagnificação é o processo de:',
            alternativas: [
              'Aumento da biodiversidade em um ecossistema',
              'Reprodução acelerada de microrganismos em rios',
              'Acúmulo progressivo de substâncias tóxicas ao longo da cadeia alimentar',
              'Crescimento desordenado de algas em corpos d\'água (eutrofização)',
              'Decomposição acelerada de matéria orgânica no solo',
            ],
            respostaCorreta: 2,
            explicacao: 'Na biomagnificação, substâncias tóxicas não-biodegradáveis (como DDT e mercúrio) se acumulam em concentrações crescentes a cada nível trófico, atingindo os maiores valores nos predadores de topo.',
            dificuldade: 'medio',
          },
          {
            id: 'bio-eco-5',
            enunciado: 'Os organismos decompositores são fundamentais para os ecossistemas porque:',
            alternativas: [
              'Produzem oxigênio para a atmosfera via fotossíntese',
              'São os maiores predadores de topo da cadeia alimentar',
              'Reciclam a matéria orgânica, devolvendo nutrientes minerais ao ambiente',
              'Fixam o nitrogênio atmosférico diretamente nas raízes das plantas',
              'Controlam a população de consumidores primários por predação',
            ],
            respostaCorreta: 2,
            explicacao: 'Decompositores (fungos e bactérias) degradam a matéria orgânica morta, transformando-a em nutrientes minerais que retornam ao solo e à água, sendo reaproveitados pelos produtores. Sem eles, os ciclos biogeoquímicos seriam interrompidos.',
            dificuldade: 'facil',
          },
        ],
      },
    },
    {
      id: 'fisiologia-parasitologia',
      titulo: 'Fisiologia Humana e Parasitologia',
      peso: 30,
      conteudo: {
        resumo: 'Sistemas do corpo humano (circulatório, respiratório, nervoso, digestório) e principais doenças parasitárias.',
        explicacao:
          'A Fisiologia Humana estuda o funcionamento dos sistemas corporais, e a Parasitologia aborda doenças causadas por parasitas.\n\nSistemas do corpo humano:\n• Circulatório: coração com 4 câmaras; sangue arterial (rico em O₂) e venoso (rico em CO₂); pequena circulação (coração → pulmão) e grande circulação (coração → corpo)\n• Respiratório: nariz → faringe → laringe → traqueia → brônquios → alvéolos. Trocas gasosas por difusão nos alvéolos\n• Nervoso: SNC (cérebro + medula espinhal) e SNP (nervos). Neurônio: dendrito → corpo celular → axônio\n• Digestório: boca → esôfago → estômago (digestão ácida) → intestino delgado (absorção) → intestino grosso → reto\n\nPrincipais doenças parasitárias:\n• Dengue: vírus (arbovírus), transmitido pelo Aedes aegypti\n• Malária: protozoário Plasmodium, transmitido pelo mosquito Anopheles\n• Doença de Chagas: protozoário Trypanosoma cruzi, transmitido pelo barbeiro (Triatoma)\n• Esquistossomose: platelminto Schistosoma mansoni, ciclo envolve caramujos em água contaminada',
        imagemDescricao: 'Esquema dos sistemas circulatório e respiratório com indicação das trocas gasosas nos alvéolos',
        dicasProva: [
          'Diferencie sangue arterial de venoso pelo conteúdo de O₂, não pelo tipo de vaso',
          'Questões sobre doenças pedem: agente causador, vetor de transmissão e forma de prevenção',
          'Entenda a diferença entre SNC (sistema nervoso central) e SNP (sistema nervoso periférico)',
          'Doenças transmitidas por mosquitos (Aedes, Anopheles) são muito frequentes em vestibulares',
        ],
        errosComuns: [
          'Afirmar que artérias sempre carregam sangue arterial — nas artérias pulmonares o sangue é venoso',
          'Confundir o agente da dengue (vírus) com o da malária (protozoário Plasmodium)',
          'Achar que o barbeiro (inseto) causa a doença de Chagas — ele é o vetor; o agente é o Trypanosoma cruzi',
          'Confundir absorção de nutrientes (intestino delgado) com digestão (estômago e boca)',
        ],
        secoes: [
          {
            titulo: 'Introdução à Fisiologia Humana',
            tipo: 'texto',
            corpo:
              '## Fisiologia Humana\n\n' +
              'A Fisiologia Humana estuda o **funcionamento dos sistemas** que compõem o corpo humano. Cada sistema é formado por **órgãos** que trabalham de forma integrada para manter a **homeostase** — o equilíbrio do meio interno do organismo.\n\n' +
              '> A UNIVESP costuma cobrar os sistemas digestório, circulatório, respiratório, nervoso, endócrino e excretor. Foque nas **funções principais** de cada sistema e na **integração** entre eles.',
          },
          {
            titulo: 'Sistema Digestório',
            tipo: 'texto',
            corpo:
              '## Sistema Digestório\n\n' +
              'Responsável pela **digestão** (quebra dos alimentos em nutrientes) e pela **absorção** desses nutrientes para a corrente sanguínea.\n\n' +
              '### Percurso do alimento\n\n' +
              '1. **Boca** — digestão mecânica (mastigação) e química (amilase salivar quebra amido em maltose)\n' +
              '2. **Faringe e esôfago** — condução do bolo alimentar por movimentos peristálticos\n' +
              '3. **Estômago** — digestão ácida (HCl + pepsina). O pH ácido (~2) ativa a pepsina, que quebra proteínas. O bolo alimentar se transforma em **quimo**\n' +
              '4. **Intestino delgado** — principal local de digestão e **absorção de nutrientes**. Recebe bile (fígado) e suco pancreático (pâncreas). As **vilosidades e microvilosidades** aumentam a superfície de absorção\n' +
              '5. **Intestino grosso** — absorção de **água e sais minerais**, formação das fezes, atuação da flora bacteriana\n' +
              '6. **Reto e ânus** — armazenamento e eliminação das fezes\n\n' +
              '### Enzimas digestivas principais\n\n' +
              '| Enzima | Local de ação | Substrato | Produto |\n' +
              '|---|---|---|---|\n' +
              '| **Amilase salivar (ptialina)** | Boca | Amido | Maltose |\n' +
              '| **Pepsina** | Estômago | Proteínas | Peptídeos |\n' +
              '| **Tripsina** | Intestino delgado | Proteínas | Peptídeos menores |\n' +
              '| **Lipase pancreática** | Intestino delgado | Lipídios | Ácidos graxos + glicerol |\n' +
              '| **Amilase pancreática** | Intestino delgado | Amido | Maltose |\n' +
              '| **Lactase** | Intestino delgado | Lactose | Glicose + galactose |',
          },
          {
            titulo: 'Sistema Circulatório',
            tipo: 'texto',
            corpo:
              '## Sistema Circulatório\n\n' +
              'Responsável pelo **transporte de gases, nutrientes, hormônios e resíduos metabólicos** por todo o corpo.\n\n' +
              '### Coração humano\n\n' +
              'O coração possui **4 câmaras**: 2 átrios (superiores) e 2 ventrículos (inferiores). O lado direito bombeia sangue venoso; o lado esquerdo bombeia sangue arterial.\n\n' +
              '### Tipos de circulação\n\n' +
              '| Circulação | Percurso | Tipo de sangue |\n' +
              '|---|---|---|\n' +
              '| **Pequena (pulmonar)** | Ventrículo direito → artéria pulmonar → pulmões → veias pulmonares → átrio esquerdo | Venoso → Arterial |\n' +
              '| **Grande (sistêmica)** | Ventrículo esquerdo → artéria aorta → corpo → veias cavas → átrio direito | Arterial → Venoso |\n\n' +
              '### Conceitos essenciais\n\n' +
              '- **Sangue arterial** = rico em O₂ (independente do vaso)\n' +
              '- **Sangue venoso** = rico em CO₂ (independente do vaso)\n' +
              '- **Artérias** = saem do coração (paredes espessas e elásticas)\n' +
              '- **Veias** = chegam ao coração (possuem válvulas para evitar refluxo)\n' +
              '- **Capilares** = vasos microscópicos onde ocorrem as trocas gasosas e de nutrientes\n\n' +
              '> **Atenção:** A artéria pulmonar transporta sangue **venoso** e as veias pulmonares transportam sangue **arterial**. Isso é uma das pegadinhas mais comuns em vestibulares!',
          },
          {
            titulo: 'Sistema Respiratório',
            tipo: 'texto',
            corpo:
              '## Sistema Respiratório\n\n' +
              'Responsável pelas **trocas gasosas** entre o organismo e o ambiente: captação de O₂ e eliminação de CO₂.\n\n' +
              '### Vias aéreas (percurso do ar)\n\n' +
              'Cavidades nasais → faringe → laringe → traqueia → brônquios → bronquíolos → **alvéolos pulmonares**\n\n' +
              '### Hematose (troca gasosa)\n\n' +
              'Nos **alvéolos pulmonares**, o O₂ do ar inspirado passa por **difusão** para o sangue dos capilares, enquanto o CO₂ do sangue passa para o ar alveolar, sendo expirado.\n\n' +
              '- Os alvéolos possuem **paredes muito finas** (uma camada de células) e são envolvidos por uma densa rede de capilares\n' +
              '- A superfície total dos alvéolos em um adulto é de aproximadamente **70 m²** — equivalente a uma quadra de tênis\n\n' +
              '### Mecânica respiratória\n\n' +
              '- **Inspiração:** o diafragma contrai (desce) e os músculos intercostais expandem a caixa torácica → a pressão interna diminui → o ar entra nos pulmões\n' +
              '- **Expiração:** o diafragma relaxa (sobe) e a caixa torácica reduz → a pressão interna aumenta → o ar sai dos pulmões',
          },
          {
            titulo: 'Sistema Nervoso',
            tipo: 'texto',
            corpo:
              '## Sistema Nervoso\n\n' +
              'Responsável pela **coordenação e integração** das funções do organismo, captando estímulos e elaborando respostas.\n\n' +
              '### Divisões do sistema nervoso\n\n' +
              '| Divisão | Componentes | Função |\n' +
              '|---|---|---|\n' +
              '| **SNC (Sistema Nervoso Central)** | Cérebro, cerebelo, tronco encefálico, medula espinhal | Processamento de informações, coordenação motora, funções vitais |\n' +
              '| **SNP (Sistema Nervoso Periférico)** | Nervos cranianos e espinhais, gânglios | Condução de impulsos entre SNC e órgãos |\n' +
              '| **SNA (Sistema Nervoso Autônomo)** | Simpático e parassimpático | Controle involuntário (coração, digestão, respiração) |\n\n' +
              '### O neurônio\n\n' +
              'A célula fundamental do sistema nervoso é o **neurônio**, composto por:\n\n' +
              '- **Dendritos** — prolongamentos ramificados que **recebem** os impulsos nervosos\n' +
              '- **Corpo celular (soma)** — contém o núcleo e as organelas; centro metabólico\n' +
              '- **Axônio** — prolongamento longo que **transmite** os impulsos nervosos\n' +
              '- **Bainha de mielina** — revestimento lipídico que acelera a condução do impulso\n\n' +
              '### Sinapse\n\n' +
              'A **sinapse** é a junção entre dois neurônios (ou entre neurônio e músculo/glândula). O impulso é transmitido por **neurotransmissores** (acetilcolina, dopamina, serotonina) que são liberados na fenda sináptica.',
          },
          {
            titulo: 'Sistema Endócrino',
            tipo: 'texto',
            corpo:
              '## Sistema Endócrino\n\n' +
              'Responsável pela produção de **hormônios** — mensageiros químicos transportados pelo sangue que regulam diversas funções do organismo.\n\n' +
              '### Principais glândulas e hormônios\n\n' +
              '| Glândula | Hormônio | Função principal |\n' +
              '|---|---|---|\n' +
              '| **Hipófise (pituitária)** | GH (hormônio do crescimento) | Crescimento corporal |\n' +
              '| **Hipófise** | TSH, FSH, LH | Regulação de outras glândulas |\n' +
              '| **Tireoide** | T3 e T4 (tiroxina) | Regulação do metabolismo |\n' +
              '| **Paratireoides** | Paratormônio (PTH) | Aumento do cálcio no sangue |\n' +
              '| **Suprarrenais** | Adrenalina e cortisol | Resposta ao estresse |\n' +
              '| **Pâncreas** | Insulina e glucagon | Regulação da glicemia |\n' +
              '| **Ovários** | Estrogênio e progesterona | Caracteres sexuais femininos, ciclo menstrual |\n' +
              '| **Testículos** | Testosterona | Caracteres sexuais masculinos |\n\n' +
              '### Regulação da glicemia\n\n' +
              '- **Insulina** (células beta do pâncreas): reduz a glicemia → estimula a absorção de glicose pelas células\n' +
              '- **Glucagon** (células alfa do pâncreas): aumenta a glicemia → estimula a liberação de glicose pelo fígado\n' +
              '- **Diabetes mellitus**: doença causada pela deficiência de insulina (tipo 1) ou pela resistência à insulina (tipo 2)\n\n' +
              '> O sistema endócrino trabalha em conjunto com o sistema nervoso. A **hipófise**, localizada na base do cérebro, é considerada a "glândula mestra" por regular outras glândulas.',
          },
          {
            titulo: 'Sistema Excretor',
            tipo: 'texto',
            corpo:
              '## Sistema Excretor (Urinário)\n\n' +
              'Responsável pela **filtração do sangue** e eliminação de resíduos metabólicos na forma de **urina**.\n\n' +
              '### Órgãos principais\n\n' +
              '- **Rins** (2) — filtram o sangue e produzem a urina. Cada rim contém cerca de **1 milhão de néfrons**\n' +
              '- **Ureteres** (2) — conduzem a urina dos rins até a bexiga\n' +
              '- **Bexiga** — armazena a urina (capacidade de ~500 mL)\n' +
              '- **Uretra** — canal que elimina a urina do corpo\n\n' +
              '### O néfron — unidade funcional do rim\n\n' +
              'Cada néfron realiza três processos:\n\n' +
              '1. **Filtração glomerular** — o sangue é filtrado no glomérulo (cápsula de Bowman), separando água, sais, glicose, ureia e outras substâncias pequenas\n' +
              '2. **Reabsorção tubular** — substâncias úteis (glicose, aminoácidos, água, sais) são reabsorvidas de volta ao sangue nos túbulos renais\n' +
              '3. **Secreção tubular** — substâncias indesejadas são adicionalmente secretadas dos capilares para os túbulos\n\n' +
              '> A urina é composta principalmente por água, ureia (resíduo do metabolismo de proteínas), ácido úrico e sais minerais.',
          },
          {
            titulo: 'Comparação dos Sistemas Corporais',
            tipo: 'tabela',
            corpo:
              '## Tabela comparativa dos sistemas do corpo humano\n\n' +
              '| Sistema | Função principal | Órgãos-chave | Processo central |\n' +
              '|---|---|---|---|\n' +
              '| **Digestório** | Digestão e absorção de nutrientes | Boca, estômago, intestino delgado, fígado, pâncreas | Hidrólise enzimática e absorção intestinal |\n' +
              '| **Circulatório** | Transporte de gases, nutrientes e resíduos | Coração, artérias, veias, capilares | Bombeamento cardíaco e trocas capilares |\n' +
              '| **Respiratório** | Trocas gasosas (O₂/CO₂) | Pulmões, alvéolos, diafragma | Hematose nos alvéolos |\n' +
              '| **Nervoso** | Coordenação e integração de funções | Cérebro, medula espinhal, nervos | Impulso nervoso e sinapse |\n' +
              '| **Endócrino** | Regulação hormonal | Hipófise, tireoide, pâncreas, suprarrenais | Produção e ação de hormônios |\n' +
              '| **Excretor** | Filtração do sangue e eliminação de resíduos | Rins (néfrons), ureteres, bexiga | Filtração glomerular e reabsorção |',
          },
          {
            titulo: 'Parasitologia — Doenças Parasitárias',
            tipo: 'texto',
            corpo:
              '## Parasitologia\n\n' +
              'A Parasitologia estuda os **organismos que vivem às custas de um hospedeiro**, causando-lhe doenças. Em vestibulares, é fundamental saber: **agente causador, vetor de transmissão, sintomas principais e formas de prevenção**.\n\n' +
              '### Dengue\n\n' +
              '- **Agente:** vírus do gênero *Flavivirus* (arbovírus — 4 sorotipos: DENV-1 a DENV-4)\n' +
              '- **Vetor:** mosquito *Aedes aegypti* (fêmea hematófaga)\n' +
              '- **Sintomas:** febre alta, dores de cabeça, dores musculares e articulares, manchas vermelhas na pele. Na forma grave (dengue hemorrágica): sangramentos, queda de pressão, choque\n' +
              '- **Prevenção:** eliminar água parada (criadouros do mosquito), usar repelente, instalar telas em janelas\n\n' +
              '### Malária\n\n' +
              '- **Agente:** protozoário *Plasmodium* (*P. vivax*, *P. falciparum*, *P. malariae*)\n' +
              '- **Vetor:** mosquito fêmea do gênero *Anopheles* (mosquito-prego)\n' +
              '- **Sintomas:** febre intermitente (ciclos de 48-72h), calafrios, sudorese, anemia. O *Plasmodium* destrói hemácias\n' +
              '- **Prevenção:** uso de mosquiteiros, repelentes, drenagem de áreas alagadas, controle do vetor\n\n' +
              '### Doença de Chagas\n\n' +
              '- **Agente:** protozoário *Trypanosoma cruzi* (flagelado)\n' +
              '- **Vetor:** inseto barbeiro (*Triatoma infestans*) — transmissão pelas **fezes** do inseto depositadas no local da picada\n' +
              '- **Sintomas:** fase aguda — febre, inchaço no local da picada (sinal de Romaña se no olho). Fase crônica — cardiopatia (aumento do coração), megaesôfago, megacólon\n' +
              '- **Prevenção:** melhoria das moradias (evitar frestas onde o barbeiro se esconde), uso de inseticidas, triagem de bancos de sangue\n\n' +
              '### Esquistossomose (Barriga-d\'água)\n\n' +
              '- **Agente:** platelminto *Schistosoma mansoni* (helminto)\n' +
              '- **Vetor/hospedeiro intermediário:** caramujo do gênero *Biomphalaria*\n' +
              '- **Transmissão:** larvas (cercárias) na água contaminada penetram a pele humana\n' +
              '- **Sintomas:** diarreia, hepatomegalia (fígado aumentado), ascite (acúmulo de líquido no abdômen — "barriga-d\'água")\n' +
              '- **Prevenção:** saneamento básico, tratamento de água e esgoto, evitar contato com águas contaminadas, combate ao caramujo',
          },
          {
            titulo: 'Tabela Comparativa de Doenças Parasitárias',
            tipo: 'tabela',
            corpo:
              '## Comparação das principais doenças parasitárias\n\n' +
              '| Doença | Agente | Tipo | Vetor/Transmissão | Prevenção principal |\n' +
              '|---|---|---|---|---|\n' +
              '| **Dengue** | *Flavivirus* | Vírus | *Aedes aegypti* | Eliminar água parada |\n' +
              '| **Malária** | *Plasmodium* spp. | Protozoário | *Anopheles* | Mosquiteiros e controle do vetor |\n' +
              '| **Doença de Chagas** | *Trypanosoma cruzi* | Protozoário | Barbeiro (*Triatoma*) | Melhoria das moradias |\n' +
              '| **Esquistossomose** | *Schistosoma mansoni* | Helminto | Caramujo *Biomphalaria* + água | Saneamento básico |\n' +
              '| **Leishmaniose** | *Leishmania* spp. | Protozoário | Mosquito-palha (*Lutzomyia*) | Controle do vetor |\n' +
              '| **Ascaridíase** | *Ascaris lumbricoides* | Helminto | Ingestão de ovos (água/alimentos) | Saneamento e higiene |\n' +
              '| **Teníase** | *Taenia solium/saginata* | Helminto | Ingestão de carne crua/malpassada | Cozinhar bem as carnes |\n\n' +
              '> **Dica de prova:** memorize a tríade — **agente + vetor + prevenção** — para cada doença. A maioria das questões gira em torno desses três pontos.',
          },
        ],
        exercicios: [
          {
            id: 'bio-fis-1',
            enunciado: 'As trocas gasosas no sistema respiratório humano ocorrem nos(as):',
            alternativas: ['Brônquios', 'Traqueia', 'Alvéolos pulmonares', 'Laringe', 'Faringe'],
            respostaCorreta: 2,
            explicacao: 'Os alvéolos pulmonares são estruturas microscópicas com paredes finas e rica rede de capilares, permitindo a difusão de O₂ para o sangue e de CO₂ para o ar, realizando a hematose (troca gasosa).',
            dificuldade: 'facil',
          },
          {
            id: 'bio-fis-2',
            enunciado: 'A dengue é causada por um vírus e transmitida pelo mosquito:',
            alternativas: ['Anopheles', 'Culex', 'Aedes aegypti', 'Triatoma (barbeiro)', 'Lutzomyia'],
            respostaCorreta: 2,
            explicacao: 'O Aedes aegypti é o vetor da dengue, zika e chikungunya. O Anopheles transmite a malária, o Triatoma transmite a doença de Chagas e o Lutzomyia transmite a leishmaniose.',
            dificuldade: 'facil',
          },
          {
            id: 'bio-fis-3',
            enunciado: 'Na pequena circulação (circulação pulmonar), o sangue venoso sai do coração pela:',
            alternativas: ['Artéria aorta', 'Veia cava', 'Artéria pulmonar', 'Veia pulmonar', 'Artéria coronária'],
            respostaCorreta: 2,
            explicacao: 'Na pequena circulação, o sangue venoso (rico em CO₂) sai do ventrículo direito pela artéria pulmonar rumo aos pulmões, onde é oxigenado e retorna ao átrio esquerdo pelas veias pulmonares.',
            dificuldade: 'medio',
          },
          {
            id: 'bio-fis-4',
            enunciado: 'O agente causador da doença de Chagas é o:',
            alternativas: [
              'Plasmodium falciparum',
              'Trypanosoma cruzi',
              'Schistosoma mansoni',
              'Aedes aegypti',
              'Leishmania braziliensis',
            ],
            respostaCorreta: 1,
            explicacao: 'O Trypanosoma cruzi é o protozoário flagelado causador da doença de Chagas. Ele é transmitido pelas fezes do inseto barbeiro (Triatoma infestans), que defeca ao picar a pessoa, contaminando o local da picada.',
            dificuldade: 'facil',
          },
          {
            id: 'bio-fis-5',
            enunciado: 'A absorção da maior parte dos nutrientes no sistema digestório humano ocorre no(a):',
            alternativas: ['Estômago', 'Intestino grosso', 'Boca', 'Intestino delgado', 'Esôfago'],
            respostaCorreta: 3,
            explicacao: 'O intestino delgado é o principal local de absorção de nutrientes, graças às vilosidades e microvilosidades que aumentam enormemente a superfície de contato. O intestino grosso absorve principalmente água e sais minerais.',
            dificuldade: 'facil',
          },
        ],
      },
    },
    {
      id: 'genetica-evolucao',
      titulo: 'Genética e Evolução',
      peso: 20,
      conteudo: {
        resumo: 'Leis de Mendel, herança ligada ao sexo, seleção natural e mecanismos evolutivos.',
        explicacao:
          'A Genética estuda a hereditariedade, e a Evolução explica como as espécies se modificam ao longo do tempo.\n\nGenética mendeliana:\n• 1ª Lei de Mendel (Segregação): cada caráter é determinado por um par de alelos que se separam na formação dos gametas\n• 2ª Lei de Mendel (Segregação independente): alelos de caracteres diferentes se distribuem independentemente\n• Genótipo: composição genética (AA, Aa, aa)\n• Fenótipo: característica observável (aparência)\n• Dominante: se expressa em heterozigose (Aa)\n• Recessivo: só se expressa em homozigose (aa)\n\nHerança ligada ao sexo:\n• Genes no cromossomo X (ex: daltonismo, hemofilia)\n• Mulher: XX | Homem: XY\n• Mulher portadora: X^A X^a (não manifesta, mas transmite aos filhos)\n\nEvolução:\n• Darwin: seleção natural — sobrevivem e se reproduzem os mais adaptados ao ambiente\n• Lamarck: uso e desuso + herança dos caracteres adquiridos (teoria refutada)\n• Especiação: isolamento geográfico → isolamento reprodutivo → formação de nova espécie',
        imagemDescricao: 'Quadro de Punnett mostrando cruzamento monoíbrido Aa × Aa com proporções genotípicas e fenotípicas',
        formulasChave: [
          'Proporção genotípica F2 (monoíbrido): 1 AA : 2 Aa : 1 aa',
          'Proporção fenotípica F2 (monoíbrido): 3 dominantes : 1 recessivo',
          'Proporção fenotípica F2 (diíbrido): 9:3:3:1',
        ],
        dicasProva: [
          'Monte sempre o quadro de Punnett para resolver cruzamentos genéticos',
          'Em herança ligada ao sexo, homens (XY) manifestam alelos recessivos do X com mais frequência',
          'Diferencie claramente Darwin (seleção natural) de Lamarck (uso e desuso)',
          'Na 2ª Lei de Mendel, use a proporção 9:3:3:1 para cruzamentos diíbridos',
        ],
        errosComuns: [
          'Confundir genótipo (composição genética) com fenótipo (característica observável)',
          'Afirmar que Lamarck está correto — caracteres adquiridos durante a vida NÃO são herdados',
          'Esquecer que na herança ligada ao X, o pai transmite X para as filhas e Y para os filhos',
          'Aplicar a 2ª Lei de Mendel em genes ligados (no mesmo cromossomo) — ela vale apenas para genes independentes',
        ],
        secoes: [
          {
            titulo: 'Conceitos Fundamentais de Genética',
            tipo: 'texto',
            corpo:
              '## Introdução à Genética\n\n' +
              'A Genética é o ramo da Biologia que estuda a **hereditariedade** — como as características são transmitidas dos pais para os filhos por meio dos **genes**.\n\n' +
              '### Vocabulário essencial\n\n' +
              '| Termo | Definição |\n' +
              '|---|---|\n' +
              '| **Gene** | Trecho de DNA que codifica uma característica |\n' +
              '| **Alelo** | Formas alternativas de um mesmo gene (ex.: A e a) |\n' +
              '| **Genótipo** | Composição genética do indivíduo (ex.: AA, Aa, aa) |\n' +
              '| **Fenótipo** | Característica observável (aparência, fisiologia) — resultado do genótipo + ambiente |\n' +
              '| **Homozigoto** | Indivíduo com alelos iguais (AA ou aa) |\n' +
              '| **Heterozigoto** | Indivíduo com alelos diferentes (Aa) |\n' +
              '| **Dominante** | Alelo que se expressa tanto em homozigose (AA) quanto em heterozigose (Aa) |\n' +
              '| **Recessivo** | Alelo que só se expressa em homozigose (aa) |\n' +
              '| **Locus** | Posição do gene no cromossomo |\n' +
              '| **Cromossomos homólogos** | Par de cromossomos com genes para as mesmas características |',
          },
          {
            titulo: '1ª Lei de Mendel — Lei da Segregação dos Fatores',
            tipo: 'texto',
            corpo:
              '## 1ª Lei de Mendel\n\n' +
              '> "Cada caráter é determinado por um par de fatores (alelos) que se **segregam** (separam) durante a formação dos gametas, de modo que cada gameta carrega apenas **um alelo** de cada par."\n\n' +
              '### Experimento clássico de Mendel\n\n' +
              'Mendel cruzou ervilhas de linhagens puras:\n\n' +
              '1. **Geração P (parental):** planta alta (AA) × planta baixa (aa)\n' +
              '2. **Geração F1:** todos heterozigotos altos (Aa) — o alelo dominante se expressa\n' +
              '3. **Geração F2:** cruzamento Aa × Aa → **1 AA : 2 Aa : 1 aa**\n\n' +
              '### Quadro de Punnett — cruzamento monoíbrido (Aa × Aa)\n\n' +
              '| | **A** | **a** |\n' +
              '|---|---|---|\n' +
              '| **A** | AA | Aa |\n' +
              '| **a** | Aa | aa |\n\n' +
              '- **Proporção genotípica:** 1 AA : 2 Aa : 1 aa\n' +
              '- **Proporção fenotípica:** 3 dominantes : 1 recessivo (3:1)\n\n' +
              '### Cruzamento-teste (teste-cross)\n\n' +
              'Para descobrir se um indivíduo de fenótipo dominante é **AA** ou **Aa**, cruza-se com um **homozigoto recessivo (aa)**:\n' +
              '- Se todos os descendentes forem dominantes → o indivíduo é **AA**\n' +
              '- Se aparecerem descendentes recessivos (~50%) → o indivíduo é **Aa**',
          },
          {
            titulo: '2ª Lei de Mendel — Lei da Segregação Independente',
            tipo: 'texto',
            corpo:
              '## 2ª Lei de Mendel\n\n' +
              '> "Os alelos de genes localizados em **cromossomos diferentes** segregam-se de forma **independente** durante a formação dos gametas."\n\n' +
              '### Cruzamento diíbrido (AaBb × AaBb)\n\n' +
              'Cada indivíduo AaBb produz **4 tipos de gametas**: AB, Ab, aB, ab.\n\n' +
              'O cruzamento gera 16 combinações possíveis, com proporção fenotípica:\n\n' +
              '- **9** com ambos os fenótipos dominantes (A_B_)\n' +
              '- **3** com fenótipo dominante para o 1º e recessivo para o 2º (A_bb)\n' +
              '- **3** com fenótipo recessivo para o 1º e dominante para o 2º (aaB_)\n' +
              '- **1** com ambos os fenótipos recessivos (aabb)\n\n' +
              '> **Proporção 9:3:3:1** — essa é a proporção clássica de F2 em cruzamentos diíbridos.\n\n' +
              '### Limitação da 2ª Lei\n\n' +
              'A segregação independente **só vale** para genes localizados em **cromossomos diferentes** (genes não-ligados). Genes no mesmo cromossomo tendem a ser herdados juntos (**ligação gênica ou linkage**), salvo quando ocorre crossing-over.',
          },
          {
            titulo: 'Tipos de Dominância',
            tipo: 'destaque',
            corpo:
              '## Dominância completa, incompleta e codominância\n\n' +
              '| Tipo | Heterozigoto (Aa) | Exemplo |\n' +
              '|---|---|---|\n' +
              '| **Dominância completa** | Fenótipo igual ao homozigoto dominante (AA) | Ervilha lisa (A) × rugosa (a): Aa = lisa |\n' +
              '| **Dominância incompleta** | Fenótipo **intermediário** entre os dois homozigotos | Flor vermelha (VV) × branca (BB): VB = **rosa** |\n' +
              '| **Codominância** | **Ambos os alelos** se expressam simultaneamente | Tipo sanguíneo AB: alelos Iᴬ e Iᴮ ambos se expressam |\n\n' +
              '### Proporções na dominância incompleta (F2)\n\n' +
              '- Cruzamento VB × VB: 1 VV (vermelha) : 2 VB (rosa) : 1 BB (branca)\n' +
              '- Proporção fenotípica = **1:2:1** (diferente da 3:1 da dominância completa)\n\n' +
              '> Na dominância incompleta, a **proporção genotípica é igual à fenotípica** (1:2:1), pois cada genótipo gera um fenótipo distinto.',
          },
          {
            titulo: 'Sistemas Sanguíneos ABO e Rh',
            tipo: 'importante',
            corpo:
              '## Sistema ABO\n\n' +
              'O sistema ABO é determinado por **três alelos**: Iᴬ, Iᴮ e i. Os alelos Iᴬ e Iᴮ são **codominantes** entre si e ambos são **dominantes** sobre i.\n\n' +
              '| Tipo sanguíneo | Genótipos possíveis | Aglutinogênio (hemácias) | Aglutinina (plasma) |\n' +
              '|---|---|---|---|\n' +
              '| **A** | IᴬIᴬ ou Iᴬi | A | Anti-B |\n' +
              '| **B** | IᴮIᴮ ou Iᴮi | B | Anti-A |\n' +
              '| **AB** | IᴬIᴮ | A e B | Nenhuma |\n' +
              '| **O** | ii | Nenhum | Anti-A e Anti-B |\n\n' +
              '### Transfusão sanguínea (regra simplificada)\n\n' +
              '- **Doador universal:** tipo O (sem aglutinogênios)\n' +
              '- **Receptor universal:** tipo AB (sem aglutininas)\n' +
              '- Regra: o receptor **não pode ter aglutinina** contra o aglutinogênio do doador\n\n' +
              '## Sistema Rh\n\n' +
              '- Determinado por um par de alelos: **Rh⁺ (D)** é dominante sobre **Rh⁻ (d)**\n' +
              '- Genótipos: DD ou Dd = Rh⁺ | dd = Rh⁻\n\n' +
              '### Eritroblastose fetal (doença hemolítica do recém-nascido)\n\n' +
              'Ocorre quando a **mãe é Rh⁻** e o **feto é Rh⁺** (pai Rh⁺). Na primeira gestação, a mãe é sensibilizada; na segunda gestação com feto Rh⁺, seus anticorpos anti-Rh atacam as hemácias do feto.\n\n' +
              '> **Prevenção:** administração de soro anti-Rh (imunoglobulina anti-D) à mãe Rh⁻ após o primeiro parto.',
          },
          {
            titulo: 'Herança Ligada ao Sexo',
            tipo: 'texto',
            corpo:
              '## Herança ligada ao cromossomo X\n\n' +
              'Genes localizados no **cromossomo X** apresentam um padrão de herança diferente entre homens (XY) e mulheres (XX):\n\n' +
              '- **Mulheres** possuem dois alelos no X → podem ser homozigotas ou heterozigotas (portadoras)\n' +
              '- **Homens** possuem apenas um alelo no X → um único alelo recessivo já se expressa (hemizigose)\n\n' +
              '### Exemplos clássicos\n\n' +
              '| Condição | Alelo | Mulher afetada | Homem afetado |\n' +
              '|---|---|---|---|\n' +
              '| **Daltonismo** | Xᵈ (recessivo) | XᵈXᵈ | XᵈY |\n' +
              '| **Hemofilia** | Xʰ (recessivo) | XʰXʰ | XʰY |\n\n' +
              '- Mulher portadora: X^D X^d — tem visão normal mas pode transmitir o daltonismo aos filhos\n' +
              '- Homens são mais afetados porque basta **um** alelo recessivo no X\n' +
              '- O pai **nunca transmite** genes do X para os filhos homens (transmite Y)\n' +
              '- O pai **sempre transmite** seu X para as filhas',
          },
          {
            titulo: 'Evolução — Darwin e Seleção Natural',
            tipo: 'texto',
            corpo:
              '## Teorias Evolutivas\n\n' +
              '### Lamarck (1809) — Teoria refutada\n\n' +
              '- **Lei do uso e desuso:** órgãos muito utilizados se desenvolvem; órgãos não utilizados se atrofiam\n' +
              '- **Herança dos caracteres adquiridos:** modificações adquiridas durante a vida seriam transmitidas aos descendentes\n' +
              '- **Por que está errada:** modificações somáticas (no corpo) não alteram o DNA dos gametas e, portanto, não são herdadas\n\n' +
              '### Darwin (1859) — Seleção Natural\n\n' +
              'Charles Darwin propôs a teoria da **seleção natural** com base em quatro pilares:\n\n' +
              '1. **Variação** — indivíduos de uma população apresentam variações naturais em suas características\n' +
              '2. **Herança** — parte dessas variações é hereditária (passada aos descendentes)\n' +
              '3. **Luta pela sobrevivência** — os recursos são limitados, gerando competição\n' +
              '4. **Sobrevivência diferencial** — indivíduos com características mais vantajosas ao ambiente sobrevivem e se reproduzem mais, transmitindo esses genes\n\n' +
              '> Ao longo de muitas gerações, a seleção natural **aumenta a frequência** de alelos vantajosos na população e **diminui** a de alelos desvantajosos.\n\n' +
              '### Neodarwinismo (Teoria Sintética da Evolução)\n\n' +
              'Combina a seleção natural de Darwin com a genética de Mendel. As fontes de variabilidade genética são:\n\n' +
              '- **Mutações** — alterações aleatórias no DNA\n' +
              '- **Recombinação gênica** — crossing-over e segregação independente na meiose\n' +
              '- **Migração (fluxo gênico)** — entrada/saída de indivíduos com diferentes alelos',
          },
          {
            titulo: 'Especiação e Evidências da Evolução',
            tipo: 'texto',
            corpo:
              '## Especiação\n\n' +
              'Especiação é o processo de **formação de novas espécies**.\n\n' +
              '### Tipos de especiação\n\n' +
              '| Tipo | Mecanismo | Exemplo |\n' +
              '|---|---|---|\n' +
              '| **Alopátrica** | Barreira geográfica separa populações → divergência genética → isolamento reprodutivo | Formação de um rio dividindo uma floresta |\n' +
              '| **Simpátrica** | Isolamento reprodutivo **sem** barreira geográfica (ex.: diferença de hábitat ou comportamento) | Insetos que se especializam em diferentes plantas hospedeiras |\n' +
              '| **Parapátrica** | Populações adjacentes com pouco fluxo gênico divergem gradualmente | Gramíneas em solo contaminado com metais pesados |\n\n' +
              '### Evidências da evolução\n\n' +
              '- **Fósseis** — registros de organismos extintos que mostram formas intermediárias e transições ao longo do tempo geológico\n' +
              '- **Anatomia comparada:**\n' +
              '  - *Órgãos homólogos* — mesma origem embrionária, funções diferentes (braço humano e asa de morcego) → **divergência adaptativa**\n' +
              '  - *Órgãos análogos* — origens diferentes, funções semelhantes (asa de inseto e asa de ave) → **convergência adaptativa**\n' +
              '  - *Órgãos vestigiais* — estruturas reduzidas sem função aparente (apêndice humano, ossos pélvicos em baleias)\n' +
              '- **Embriologia comparada** — embriões de vertebrados são muito semelhantes nos estágios iniciais\n' +
              '- **Biologia molecular** — quanto mais semelhante o DNA de duas espécies, mais próximo o parentesco evolutivo',
          },
          {
            titulo: 'Equilíbrio de Hardy-Weinberg',
            tipo: 'formula',
            corpo:
              '## Equilíbrio de Hardy-Weinberg\n\n' +
              'O princípio de Hardy-Weinberg descreve as condições em que as **frequências alélicas** de uma população permanecem **constantes** ao longo das gerações (sem evolução).\n\n' +
              '### Fórmulas\n\n' +
              'Para um gene com dois alelos (A e a), onde:\n' +
              '- **p** = frequência do alelo dominante (A)\n' +
              '- **q** = frequência do alelo recessivo (a)\n\n' +
              '> **p + q = 1** (frequências alélicas)\n\n' +
              '> **p² + 2pq + q² = 1** (frequências genotípicas)\n\n' +
              '| Genótipo | Frequência |\n' +
              '|---|---|\n' +
              '| AA (homozigoto dominante) | p² |\n' +
              '| Aa (heterozigoto) | 2pq |\n' +
              '| aa (homozigoto recessivo) | q² |\n\n' +
              '### Condições para o equilíbrio\n\n' +
              'A população só está em equilíbrio de Hardy-Weinberg se **todas** estas condições forem atendidas:\n\n' +
              '- População **infinitamente grande**\n' +
              '- Cruzamentos **aleatórios** (panmixia)\n' +
              '- **Ausência** de mutação, seleção natural, migração e deriva genética\n\n' +
              '> Na prática, nenhuma população real atende a todas as condições. O modelo serve como **referência teórica** para detectar se a evolução está ocorrendo em uma população.',
          },
        ],
        exemplosResolvidos: [
          {
            enunciado: 'Em um cruzamento entre dois heterozigotos (Aa × Aa), qual a proporção de descendentes com fenótipo dominante?',
            passos: [
              'Montar o quadro de Punnett: AA, Aa, Aa, aa',
              'Genótipos resultantes: 1 AA : 2 Aa : 1 aa',
              'Fenótipos dominantes (A_): AA + Aa = 3 de 4 descendentes',
              'Proporção: 3/4 = 75% com fenótipo dominante',
            ],
            resposta: '75% (3/4) dos descendentes apresentarão fenótipo dominante.',
          },
        ],
        exercicios: [
          {
            id: 'bio-gen-1',
            enunciado: 'Do cruzamento Aa × Aa, a probabilidade de nascer um descendente homozigoto recessivo (aa) é:',
            alternativas: ['0%', '25%', '50%', '75%', '100%'],
            respostaCorreta: 1,
            explicacao: 'No quadro de Punnett de Aa × Aa, os resultados são: AA, Aa, Aa, aa. O genótipo aa aparece em 1 de 4 possibilidades, ou seja, 25% (1/4) de probabilidade.',
            dificuldade: 'facil',
          },
          {
            id: 'bio-gen-2',
            enunciado: 'O daltonismo é uma herança recessiva ligada ao cromossomo X. Uma mulher portadora (X^D X^d) casada com um homem de visão normal (X^D Y) pode ter:',
            alternativas: [
              'Todas as filhas daltônicas',
              'Todos os filhos homens daltônicos',
              '50% dos filhos homens daltônicos',
              '100% dos filhos com visão normal',
              'Todas as filhas portadoras',
            ],
            respostaCorreta: 2,
            explicacao: 'Cruzamento X^D X^d × X^D Y: filhas = X^D X^D ou X^D X^d (todas com visão normal); filhos = X^D Y (normal) ou X^d Y (daltônico). Logo, 50% dos filhos homens serão daltônicos.',
            dificuldade: 'medio',
          },
          {
            id: 'bio-gen-3',
            enunciado: 'A teoria evolutiva de Darwin se fundamenta principalmente no conceito de:',
            alternativas: [
              'Herança dos caracteres adquiridos ao longo da vida',
              'Lei do uso e desuso dos órgãos',
              'Seleção natural dos indivíduos mais aptos ao ambiente',
              'Mutação genética dirigida pelo ambiente',
              'Criação simultânea e imutável de todas as espécies',
            ],
            respostaCorreta: 2,
            explicacao: 'Darwin propôs que os indivíduos de uma população apresentam variações naturais. Aqueles com características mais vantajosas ao ambiente sobrevivem e se reproduzem mais (seleção natural), transmitindo essas características aos descendentes.',
            dificuldade: 'facil',
          },
          {
            id: 'bio-gen-4',
            enunciado: 'Na 2ª Lei de Mendel, a proporção fenotípica esperada em F2 de um cruzamento diíbrido é:',
            alternativas: ['3:1', '1:2:1', '9:3:3:1', '1:1:1:1', '16:0:0:0'],
            respostaCorreta: 2,
            explicacao: 'A 2ª Lei de Mendel (segregação independente) prevê que em um cruzamento diíbrido (AaBb × AaBb), a proporção fenotípica em F2 é 9:3:3:1 — ou seja, 9 com ambos os fenótipos dominantes, 3:3 com um dominante e um recessivo, e 1 com ambos recessivos.',
            dificuldade: 'medio',
          },
          {
            id: 'bio-gen-5',
            enunciado: 'A especiação alopátrica ocorre quando:',
            alternativas: [
              'Duas populações vivem na mesma área e se cruzam livremente',
              'Uma barreira geográfica separa populações que divergem geneticamente ao longo do tempo',
              'Os indivíduos escolhem parceiros exclusivamente por seleção sexual',
              'Ocorre uma mutação benéfica simultânea em toda a população',
              'A espécie migra para outro continente sem sofrer alterações genéticas',
            ],
            respostaCorreta: 1,
            explicacao: 'Na especiação alopátrica, uma barreira geográfica (rio, montanha, etc.) isola duas populações de mesma espécie. Com o tempo, mutações e seleção natural diferentes em cada ambiente levam ao isolamento reprodutivo e à formação de novas espécies.',
            dificuldade: 'medio',
          },
        ],
      },
    },
    {
      id: 'citologia-botanica',
      titulo: 'Citologia e Botânica',
      peso: 15,
      conteudo: {
        resumo: 'Organelas celulares, divisão celular (mitose e meiose) e classificação dos grupos vegetais.',
        explicacao:
          'A Citologia estuda a estrutura e função das células, e a Botânica classifica e estuda os grupos vegetais.\n\nOrganelas celulares:\n• Mitocôndria: respiração celular aeróbica (produção de ATP)\n• Cloroplasto: fotossíntese (apenas em células vegetais)\n• Ribossomo: síntese de proteínas\n• Retículo endoplasmático rugoso: síntese e transporte de proteínas\n• Complexo de Golgi: empacotamento, modificação e secreção de substâncias\n• Lisossomo: digestão intracelular\n• Núcleo: armazena o DNA e coordena as atividades celulares\n\nDivisão celular:\n• Mitose: 1 célula → 2 células idênticas (2n → 2n). Função: crescimento e reparo tecidual\n• Meiose: 1 célula → 4 células diferentes (2n → n). Função: formação de gametas\n• Meiose permite variabilidade genética pelo crossing-over na prófase I\n\nGrupos vegetais (evolução):\n• Briófitas (musgos): sem vasos condutores, dependem de água para reprodução\n• Pteridófitas (samambaias): com vasos condutores, sem sementes\n• Gimnospermas (pinheiros): com sementes nuas, sem frutos\n• Angiospermas: com flores, frutos e sementes protegidas — grupo mais diversificado',
        imagemDescricao: 'Esquema comparativo da célula animal e vegetal com organelas identificadas e diagrama de mitose vs. meiose',
        dicasProva: [
          'Diferencie célula animal de vegetal: vegetal possui parede celular, cloroplasto e vacúolo central grande',
          'Mitose = crescimento e reparo; Meiose = formação de gametas — memorize essa diferença fundamental',
          'Questões de botânica cobram a sequência evolutiva: briófitas → pteridófitas → gimnospermas → angiospermas',
          'Relacione cada organela com sua função principal para responder rapidamente',
        ],
        errosComuns: [
          'Confundir mitose (equacional, 2 células iguais) com meiose (reducional, 4 células diferentes)',
          'Afirmar que células animais realizam fotossíntese (apenas células com cloroplasto fazem)',
          'Esquecer que gimnospermas NÃO possuem frutos — apenas angiospermas possuem',
          'Confundir cloroplasto (fotossíntese) com mitocôndria (respiração celular)',
        ],
        secoes: [
          {
            titulo: 'Estrutura Celular',
            tipo: 'texto',
            corpo:
              '## A célula — unidade fundamental da vida\n\n' +
              'Todos os seres vivos são formados por células. A **Teoria Celular** (Schleiden e Schwann, 1838-39) estabelece que:\n\n' +
              '1. Todos os seres vivos são formados por **uma ou mais células**\n' +
              '2. A célula é a **unidade estrutural e funcional** dos seres vivos\n' +
              '3. Toda célula se origina de uma **célula preexistente** (Virchow, 1855)\n\n' +
              '### Tipos de células\n\n' +
              '| Característica | Célula Procariótica | Célula Eucariótica |\n' +
              '|---|---|---|\n' +
              '| **Núcleo** | Ausente (material genético disperso) | Presente (envolvido por membrana nuclear) |\n' +
              '| **Organelas membranosas** | Ausentes | Presentes (mitocôndria, RE, Golgi, etc.) |\n' +
              '| **Exemplos** | Bactérias e arqueas | Animais, vegetais, fungos, protozoários |\n' +
              '| **Tamanho** | Geralmente 1-10 μm | Geralmente 10-100 μm |\n\n' +
              '### Componentes básicos da célula eucariótica\n\n' +
              '- **Membrana plasmática** — envoltório que delimita a célula, formado por uma **bicamada lipídica** com proteínas. Controla a entrada e saída de substâncias (permeabilidade seletiva)\n' +
              '- **Citoplasma** — material gelatinoso (citosol) onde estão mergulhadas as organelas. É o local de muitas reações metabólicas\n' +
              '- **Núcleo** — contém o **DNA** (material genético) organizado em cromossomos. É envolvido pela carioteca (membrana nuclear) e contém o nucléolo (produção de RNA ribossômico)',
          },
          {
            titulo: 'Célula Animal vs. Célula Vegetal',
            tipo: 'destaque',
            corpo:
              '## Diferenças entre célula animal e vegetal\n\n' +
              '| Estrutura | Célula Animal | Célula Vegetal |\n' +
              '|---|---|---|\n' +
              '| **Parede celular** | ❌ Ausente | ✅ Presente (celulose) |\n' +
              '| **Cloroplasto** | ❌ Ausente | ✅ Presente (fotossíntese) |\n' +
              '| **Vacúolo central** | ❌ Ausente ou pequeno | ✅ Grande (armazena água e substâncias) |\n' +
              '| **Centríolos** | ✅ Presentes | ❌ Ausentes na maioria |\n' +
              '| **Lisossomos** | ✅ Presentes | ❌ Raros ou ausentes |\n' +
              '| **Mitocôndrias** | ✅ Presentes | ✅ Presentes |\n' +
              '| **Ribossomos** | ✅ Presentes | ✅ Presentes |\n' +
              '| **Complexo de Golgi** | ✅ Presente | ✅ Presente |\n\n' +
              '> **Dica de prova:** as três estruturas exclusivas da célula vegetal são: **parede celular de celulose**, **cloroplastos** e **vacúolo central grande**.',
          },
          {
            titulo: 'Organelas Celulares e Suas Funções',
            tipo: 'texto',
            corpo:
              '## Organelas e funções\n\n' +
              '| Organela | Função principal | Detalhes |\n' +
              '|---|---|---|\n' +
              '| **Mitocôndria** | Respiração celular aeróbica → produção de ATP | Possui DNA próprio; dupla membrana (interna com cristas) |\n' +
              '| **Cloroplasto** | Fotossíntese → produção de glicose | Exclusivo de células vegetais; possui DNA próprio; contém tilacoides com clorofila |\n' +
              '| **Ribossomo** | Síntese de proteínas (tradução do mRNA) | Não possui membrana; presente em pro e eucariontes |\n' +
              '| **Retículo endoplasmático rugoso (RER)** | Síntese e transporte de proteínas | "Rugoso" pela presença de ribossomos aderidos |\n' +
              '| **Retículo endoplasmático liso (REL)** | Síntese de lipídios, desintoxicação | Abundante em células hepáticas (desintoxicação) |\n' +
              '| **Complexo de Golgi** | Empacotamento, modificação e secreção de substâncias | Formado por cisternas (sacos achatados) empilhados |\n' +
              '| **Lisossomo** | Digestão intracelular | Contém enzimas digestivas (hidrolases ácidas) |\n' +
              '| **Peroxissomo** | Degradação de peróxido de hidrogênio (H₂O₂) | Contém a enzima catalase |\n' +
              '| **Centríolo** | Formação do fuso mitótico na divisão celular | Exclusivo de células animais (na maioria dos casos) |\n' +
              '| **Vacúolo central** | Armazenamento de água, íons e pigmentos | Exclusivo de células vegetais; regula a pressão osmótica |\n\n' +
              '> **Teoria endossimbiótica:** mitocôndrias e cloroplastos provavelmente se originaram de **bactérias ancestrais** que foram englobadas por células eucarióticas primitivas. Evidência: possuem DNA próprio e dupla membrana.',
          },
          {
            titulo: 'Divisão Celular — Mitose',
            tipo: 'texto',
            corpo:
              '## Mitose\n\n' +
              'A mitose é a divisão celular que produz **duas células-filhas geneticamente idênticas** à célula-mãe, com o **mesmo número de cromossomos** (2n → 2n).\n\n' +
              '### Funções da mitose\n\n' +
              '- **Crescimento** do organismo\n' +
              '- **Reparo** de tecidos danificados\n' +
              '- **Reprodução assexuada** em organismos unicelulares\n\n' +
              '### Fases da mitose\n\n' +
              '| Fase | Eventos principais |\n' +
              '|---|---|\n' +
              '| **Prófase** | Cromossomos se condensam; centríolos migram para os polos; nucléolo e carioteca desaparecem |\n' +
              '| **Metáfase** | Cromossomos se alinham na **placa equatorial** (região central); fuso mitótico totalmente formado |\n' +
              '| **Anáfase** | Cromátides-irmãs se separam e migram para polos opostos puxadas pelo fuso |\n' +
              '| **Telófase** | Cromossomos descondensam; carioteca e nucléolo reaparecem; citocinese (divisão do citoplasma) |\n\n' +
              '> **Mnemônico:** **PRO-META-ANA-TELO** — as fases seguem essa ordem tanto na mitose quanto na meiose.',
          },
          {
            titulo: 'Divisão Celular — Meiose',
            tipo: 'texto',
            corpo:
              '## Meiose\n\n' +
              'A meiose é a divisão celular que produz **quatro células-filhas haploides (n)** a partir de uma célula diploide (2n). É essencial para a **formação de gametas** (espermatozoides e óvulos).\n\n' +
              '### Meiose I (reducional) — separa cromossomos homólogos\n\n' +
              '| Fase | Eventos principais |\n' +
              '|---|---|\n' +
              '| **Prófase I** | Pareamento dos homólogos; **crossing-over** (troca de segmentos entre cromátides não-irmãs) → variabilidade genética |\n' +
              '| **Metáfase I** | Pares de homólogos se alinham na placa equatorial |\n' +
              '| **Anáfase I** | **Homólogos se separam** (cada polo recebe um cromossomo de cada par) |\n' +
              '| **Telófase I** | Duas células haploides (n) são formadas |\n\n' +
              '### Meiose II (equacional) — separa cromátides-irmãs\n\n' +
              'Semelhante à mitose: as cromátides-irmãs se separam, gerando **4 células haploides** ao final.\n\n' +
              '### Comparação mitose vs. meiose\n\n' +
              '| Característica | Mitose | Meiose |\n' +
              '|---|---|---|\n' +
              '| **Nº de divisões** | 1 | 2 (meiose I + meiose II) |\n' +
              '| **Células-filhas** | 2 (idênticas, 2n) | 4 (diferentes, n) |\n' +
              '| **Crossing-over** | Não ocorre | Ocorre na prófase I |\n' +
              '| **Função** | Crescimento e reparo | Formação de gametas |\n' +
              '| **Variabilidade genética** | Não gera | Gera (crossing-over + segregação independente) |\n' +
              '| **Onde ocorre (humanos)** | Células somáticas | Gônadas (ovários e testículos) |',
          },
          {
            titulo: 'Grupos Vegetais',
            tipo: 'texto',
            corpo:
              '## Classificação dos grupos vegetais\n\n' +
              'Os vegetais são classificados em quatro grandes grupos, organizados de acordo com a **sequência evolutiva** de aquisição de estruturas:\n\n' +
              '### Briófitas (ex.: musgos, hepáticas)\n\n' +
              '- **Sem vasos condutores** (avasculares) — transporte por difusão célula a célula\n' +
              '- Porte pequeno (poucos centímetros)\n' +
              '- **Dependem de água** para reprodução (gametas masculinos nadam até o óvulo)\n' +
              '- Fase dominante: **gametófito** (n)\n\n' +
              '### Pteridófitas (ex.: samambaias, avencas)\n\n' +
              '- **Com vasos condutores** (vasculares): xilema (seiva bruta) e floema (seiva elaborada)\n' +
              '- Porte maior que briófitas\n' +
              '- Ainda **dependem de água** para reprodução\n' +
              '- **Sem sementes** — reprodução por esporos\n' +
              '- Fase dominante: **esporófito** (2n)\n\n' +
              '### Gimnospermas (ex.: pinheiros, araucárias, ciprestes)\n\n' +
              '- Vasculares e com **sementes nuas** (não protegidas por frutos)\n' +
              '- **Não dependem de água** para reprodução (grão de pólen é levado pelo vento)\n' +
              '- Não possuem flores nem frutos\n' +
              '- Estrutura reprodutiva: **estróbilos (pinhas)**\n\n' +
              '### Angiospermas (ex.: roseiras, mangueiras, gramíneas)\n\n' +
              '- Vasculares, com sementes **protegidas dentro de frutos**\n' +
              '- Possuem **flores** (órgão reprodutor) e **frutos** (proteção e dispersão de sementes)\n' +
              '- Grupo **mais diversificado** do reino vegetal (~300.000 espécies)\n' +
              '- Subgrupos: **monocotiledôneas** (1 cotilédone, folhas paralelinérveas — milho, arroz) e **eudicotiledôneas** (2 cotilédones, folhas reticulinérveas — feijão, soja)',
          },
          {
            titulo: 'Tabela Comparativa dos Grupos Vegetais',
            tipo: 'tabela',
            corpo:
              '## Comparação evolutiva dos grupos vegetais\n\n' +
              '| Característica | Briófitas | Pteridófitas | Gimnospermas | Angiospermas |\n' +
              '|---|---|---|---|---|\n' +
              '| **Vasos condutores** | ❌ Não | ✅ Sim | ✅ Sim | ✅ Sim |\n' +
              '| **Sementes** | ❌ Não | ❌ Não | ✅ Sim (nuas) | ✅ Sim (no fruto) |\n' +
              '| **Flores** | ❌ Não | ❌ Não | ❌ Não | ✅ Sim |\n' +
              '| **Frutos** | ❌ Não | ❌ Não | ❌ Não | ✅ Sim |\n' +
              '| **Depende de água p/ reprodução** | ✅ Sim | ✅ Sim | ❌ Não | ❌ Não |\n' +
              '| **Porte** | Pequeno | Médio | Grande | Variado |\n' +
              '| **Exemplo** | Musgo | Samambaia | Pinheiro | Roseira |\n\n' +
              '> **Sequência evolutiva:** Briófitas → Pteridófitas → Gimnospermas → Angiospermas. A cada grupo, novas conquistas evolutivas surgem (vasos → sementes → flores e frutos).',
          },
          {
            titulo: 'Fotossíntese e Respiração Celular',
            tipo: 'importante',
            corpo:
              '## Fotossíntese\n\n' +
              'A fotossíntese é o processo pelo qual organismos autótrofos convertem **energia luminosa em energia química** (glicose), utilizando CO₂ e H₂O.\n\n' +
              '> **Equação geral:** 6CO₂ + 6H₂O + luz → **C₆H₁₂O₆** + 6O₂\n\n' +
              '### Fases da fotossíntese\n\n' +
              '| Fase | Local | Eventos |\n' +
              '|---|---|---|\n' +
              '| **Fase clara (fotoquímica)** | Tilacoides (grana) | Absorção de luz pela clorofila; fotólise da água (H₂O → O₂); produção de ATP e NADPH |\n' +
              '| **Fase escura (Ciclo de Calvin)** | Estroma do cloroplasto | Fixação de CO₂; uso de ATP e NADPH para sintetizar glicose |\n\n' +
              '> A "fase escura" **não precisa de escuridão** — apenas não depende diretamente da luz. Ocorre simultaneamente à fase clara durante o dia.\n\n' +
              '## Respiração Celular\n\n' +
              'A respiração celular é o processo pelo qual a célula **quebra a glicose** para produzir **ATP** (energia utilizável), consumindo O₂ e liberando CO₂.\n\n' +
              '> **Equação geral:** C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + **ATP (energia)**\n\n' +
              '### Etapas da respiração celular aeróbica\n\n' +
              '| Etapa | Local | Saldo de ATP |\n' +
              '|---|---|---|\n' +
              '| **Glicólise** | Citoplasma (citosol) | 2 ATP |\n' +
              '| **Ciclo de Krebs** | Matriz mitocondrial | 2 ATP |\n' +
              '| **Cadeia respiratória (fosforilação oxidativa)** | Cristas mitocondriais | ~34 ATP |\n' +
              '| **Total** | — | **~38 ATP** por molécula de glicose |\n\n' +
              '### Fotossíntese vs. Respiração Celular\n\n' +
              '| Aspecto | Fotossíntese | Respiração Celular |\n' +
              '|---|---|---|\n' +
              '| **O que consome** | CO₂ + H₂O + luz | C₆H₁₂O₆ + O₂ |\n' +
              '| **O que produz** | C₆H₁₂O₆ + O₂ | CO₂ + H₂O + ATP |\n' +
              '| **Organela** | Cloroplasto | Mitocôndria |\n' +
              '| **Organismos** | Autótrofos (plantas, algas) | Todos os seres vivos |\n' +
              '| **Energia** | Armazena energia | Libera energia |\n\n' +
              '> **Dica de prova:** fotossíntese e respiração são processos **inversos e complementares**. A equação de uma é a equação invertida da outra.',
          },
        ],
        exercicios: [
          {
            id: 'bio-cit-1',
            enunciado: 'A organela celular responsável pela respiração aeróbica e produção de ATP é a:',
            alternativas: ['Cloroplasto', 'Ribossomo', 'Mitocôndria', 'Complexo de Golgi', 'Lisossomo'],
            respostaCorreta: 2,
            explicacao: 'A mitocôndria é a organela responsável pela respiração celular aeróbica, processo que oxida moléculas orgânicas (como a glicose) para produzir ATP, a principal moeda energética da célula.',
            dificuldade: 'facil',
          },
          {
            id: 'bio-cit-2',
            enunciado: 'A meiose difere da mitose principalmente porque:',
            alternativas: [
              'Produz células geneticamente idênticas à célula-mãe',
              'Gera apenas 2 células-filhas diploides (2n)',
              'Gera 4 células-filhas haploides (n) geneticamente diferentes',
              'Ocorre exclusivamente em células vegetais',
              'Não envolve duplicação prévia do DNA',
            ],
            respostaCorreta: 2,
            explicacao: 'A meiose é uma divisão reducional que gera 4 células haploides (n) a partir de uma célula diploide (2n). É essencial para a formação de gametas e promove variabilidade genética pelo crossing-over e segregação independente.',
            dificuldade: 'facil',
          },
          {
            id: 'bio-cit-3',
            enunciado: 'As angiospermas se diferenciam das gimnospermas por possuírem:',
            alternativas: ['Sementes', 'Vasos condutores de seiva', 'Flores e frutos', 'Sistema radicular', 'Folhas'],
            respostaCorreta: 2,
            explicacao: 'As angiospermas possuem flores (órgão reprodutor) e frutos (que protegem e auxiliam na dispersão das sementes). As gimnospermas possuem sementes nuas, sem a proteção de frutos.',
            dificuldade: 'facil',
          },
          {
            id: 'bio-cit-4',
            enunciado: 'A parede celular e o cloroplasto são estruturas encontradas exclusivamente em:',
            alternativas: [
              'Células animais',
              'Células vegetais',
              'Todas as células eucariontes',
              'Células de fungos',
              'Células procariontes',
            ],
            respostaCorreta: 1,
            explicacao: 'A parede celular de celulose e o cloroplasto são exclusivos de células vegetais. Células animais não possuem parede celular (apenas membrana plasmática) nem cloroplastos. Fungos têm parede celular, mas de quitina, e sem cloroplasto.',
            dificuldade: 'facil',
          },
          {
            id: 'bio-cit-5',
            enunciado: 'O crossing-over (permutação) durante a meiose é biologicamente importante porque:',
            alternativas: [
              'Impede a formação de gametas viáveis',
              'Produz células geneticamente idênticas à célula-mãe',
              'Promove a variabilidade genética nos gametas',
              'Reduz o número de cromossomos pela metade',
              'Causa exclusivamente mutações deletérias',
            ],
            respostaCorreta: 2,
            explicacao: 'O crossing-over (troca de segmentos entre cromossomos homólogos na prófase I da meiose) gera novas combinações de alelos nos gametas, aumentando a variabilidade genética da espécie — matéria-prima para a evolução.',
            dificuldade: 'medio',
          },
        ],
      },
    },
  ],
};
