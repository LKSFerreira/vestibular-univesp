import type { Ementa } from './tipos';

/**
 * Ementa completa do vestibular UNIVESP.
 * Fonte: .metadocs/o_que_estudar.md
 *
 * Cada disciplina possui exemplos-template de conteúdo para guiar
 * a produção massiva futura. Tópicos sem conteúdo desenvolvido
 * são marcados com `emBreve: true`.
 */
export const EMENTA_VESTIBULAR: Ementa = {
  disciplinas: [
    {
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
            imagemDescricao: 'Diagrama mostrando a estrutura de um texto argumentativo com tese, argumentos e conclusão',
          },
        },
        {
          id: 'gramatica-contextualizada',
          titulo: 'Gramática Contextualizada',
          peso: 30,
          emBreve: true,
        },
        {
          id: 'figuras-linguagem',
          titulo: 'Figuras de Linguagem',
          peso: 15,
          emBreve: true,
        },
        {
          id: 'literatura',
          titulo: 'Literatura',
          peso: 15,
          emBreve: true,
        },
      ],
    },
    {
      id: 'matematica',
      titulo: 'Matemática',
      icone: '📐',
      topicos: [
        {
          id: 'geometria',
          titulo: 'Geometria (Áreas e Volumes)',
          peso: 25,
          conteudo: {
            resumo: 'Cálculo de áreas de figuras planas e volumes de prismas e cilindros.',
            explicacao:
              'A geometria no vestibular UNIVESP cobra principalmente figuras planas (triângulos, quadriláteros, círculos) e sólidos simples (prismas e cilindros).\n\nÁrea do triângulo: A = (b × h) / 2\nÁrea do círculo: A = π × r²\nVolume do cilindro: V = π × r² × h\n\nEstratégia: decomponha figuras complexas em figuras simples conhecidas.',
            imagemDescricao: 'Ilustração de figuras geométricas planas com fórmulas de área anotadas',
          },
        },
        {
          id: 'algebra-funcoes',
          titulo: 'Álgebra e Funções (1º e 2º Grau)',
          peso: 20,
          conteudo: {
            resumo: 'Equações, inequações e funções de 1º e 2º grau com interpretação gráfica.',
            explicacao:
              'Funções são relações entre variáveis. A função de 1º grau (f(x) = ax + b) gera uma reta. A função de 2º grau (f(x) = ax² + bx + c) gera uma parábola.\n\nPontos-chave da função quadrática:\n• Coeficiente a: determina a concavidade\n• Discriminante Δ = b² - 4ac: define o número de raízes\n• Vértice: ponto de máximo ou mínimo\n• Fórmula de Bhaskara: x = (-b ± √Δ) / 2a',
            imagemDescricao: 'Gráfico de uma parábola com vértice, raízes e eixo de simetria marcados',
          },
        },
        {
          id: 'matematica-basica',
          titulo: 'Matemática Básica',
          peso: 20,
          conteudo: {
            resumo: 'Razão, proporção, porcentagem e regra de três.',
            explicacao:
              'Estes são os fundamentos que aparecem em praticamente todas as provas. Dominar regra de três simples e composta resolve a maioria dos problemas de proporção e porcentagem.\n\nRegra de três simples:\nSe 100% → valor total\nEntão X% → valor parcial\n\nDica: sempre identifique as grandezas e verifique se são diretamente ou inversamente proporcionais.',
            imagemDescricao: 'Diagrama visual de uma regra de três com setas indicando proporção direta',
          },
        },
        {
          id: 'sequencias-pa',
          titulo: 'Sequências (PA)',
          peso: 15,
          emBreve: true,
        },
        {
          id: 'estatistica-probabilidade',
          titulo: 'Estatística e Probabilidade',
          peso: 10,
          emBreve: true,
        },
        {
          id: 'analise-combinatoria',
          titulo: 'Análise Combinatória',
          peso: 10,
          emBreve: true,
        },
      ],
    },
    {
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
            imagemDescricao: 'Exemplo de um artigo em inglês com destaques em cognatos e palavras-chave',
          },
        },
        {
          id: 'coesao-referencia',
          titulo: 'Coesão e Referência',
          peso: 25,
          emBreve: true,
        },
        {
          id: 'vocabulario-sinonimos',
          titulo: 'Vocabulário e Sinônimos',
          peso: 15,
          emBreve: true,
        },
      ],
    },
    {
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
            imagemDescricao: 'Linha do tempo dos principais períodos da história do Brasil com eventos marcantes',
          },
        },
        {
          id: 'historia-geral-contemporanea',
          titulo: 'História Geral Contemporânea',
          peso: 30,
          emBreve: true,
        },
        {
          id: 'antiguidade-idade-media',
          titulo: 'Antiguidade e Idade Média',
          peso: 20,
          emBreve: true,
        },
      ],
    },
    {
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
            imagemDescricao: 'Mapa do Brasil com os seis biomas coloridos e suas características principais',
          },
        },
        {
          id: 'geografia-humana-economica',
          titulo: 'Geografia Humana e Econômica',
          peso: 40,
          emBreve: true,
        },
        {
          id: 'cartografia-geomorfologia',
          titulo: 'Cartografia e Geomorfologia',
          peso: 20,
          emBreve: true,
        },
      ],
    },
    {
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
            imagemDescricao: 'Tabela visual com as principais funções orgânicas, seus grupos funcionais e exemplos do cotidiano',
          },
        },
        {
          id: 'estequiometria-solucoes',
          titulo: 'Estequiometria e Soluções',
          peso: 30,
          emBreve: true,
        },
        {
          id: 'quimica-geral',
          titulo: 'Química Geral',
          peso: 25,
          emBreve: true,
        },
        {
          id: 'fisico-quimica',
          titulo: 'Físico-Química',
          peso: 15,
          emBreve: true,
        },
      ],
    },
    {
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
          },
        },
        {
          id: 'fisiologia-parasitologia',
          titulo: 'Fisiologia Humana e Parasitologia',
          peso: 30,
          emBreve: true,
        },
        {
          id: 'genetica-evolucao',
          titulo: 'Genética e Evolução',
          peso: 20,
          emBreve: true,
        },
        {
          id: 'citologia-botanica',
          titulo: 'Citologia e Botânica',
          peso: 15,
          emBreve: true,
        },
      ],
    },
    {
      id: 'fisica',
      titulo: 'Física',
      icone: '⚡',
      topicos: [
        {
          id: 'mecanica',
          titulo: 'Mecânica (Cinemática e Newton)',
          peso: 40,
          conteudo: {
            resumo: 'Cinemática, Leis de Newton, trabalho e energia mecânica.',
            explicacao:
              'A mecânica é o pilar da física no vestibular. Domine as equações de cinemática e as três leis de Newton.\n\nCinemática — Movimento Uniforme (MU):\nS = S₀ + v·t\n\nCinemática — Movimento Uniformemente Variado (MUV):\nS = S₀ + v₀·t + (a·t²)/2\nv = v₀ + a·t\n\nLeis de Newton:\n1ª Lei (Inércia): corpo em repouso tende a permanecer em repouso\n2ª Lei (F = m·a): força é proporcional à aceleração\n3ª Lei (Ação e Reação): toda força tem uma reação igual e oposta\n\nEnergia: Ec = mv²/2 | Ep = mgh | Em = Ec + Ep (conservação)',
            imagemDescricao: 'Ilustração das três leis de Newton com exemplos visuais do cotidiano',
          },
        },
        {
          id: 'eletrodinamica',
          titulo: 'Eletrodinâmica',
          peso: 30,
          emBreve: true,
        },
        {
          id: 'termologia',
          titulo: 'Termologia',
          peso: 20,
          emBreve: true,
        },
        {
          id: 'optica-ondulatoria',
          titulo: 'Óptica e Ondulatória',
          peso: 10,
          emBreve: true,
        },
      ],
    },
  ],
};
