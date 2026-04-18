import { useState } from 'react';
import styles from './LinhaDoTempo.module.css';

/* ─── Tipos ─── */

interface EventoHistorico {
  readonly id: string;
  readonly ano: string;
  readonly titulo: string;
  readonly descricaoCurta: string;
  readonly detalhe: string;
  readonly consequencias: string;
  readonly periodo: string;
}

type EraId = 'colonial' | 'vargas' | 'geral';

interface Era {
  readonly id: EraId;
  readonly rotulo: string;
  readonly eventos: readonly EventoHistorico[];
}

/* ─── Dados: Brasil Colonial → República ─── */

const EVENTOS_COLONIAL: readonly EventoHistorico[] = [
  {
    id: 'col-1500',
    ano: '1500',
    titulo: 'Chegada dos Portugueses',
    descricaoCurta: 'Pedro Álvares Cabral desembarca na Bahia.',
    periodo: 'Descobrimento',
    detalhe:
      'A esquadra de Cabral, com 13 navios e cerca de 1.500 homens, avistou o Monte Pascoal em 22 de abril de 1500. O contato inicial com os povos tupiniquins foi pacífico, e Pero Vaz de Caminha redigiu a famosa carta ao rei D. Manuel I descrevendo a nova terra. O território foi inicialmente chamado de Ilha de Vera Cruz.',
    consequencias:
      'Início da exploração do pau-brasil, contato e posterior dizimação de populações indígenas, e inserção do território na esfera colonial portuguesa.',
  },
  {
    id: 'col-1530',
    ano: '1530',
    titulo: 'Capitanias Hereditárias',
    descricaoCurta: 'Divisão do território em faixas de terra doadas a particulares.',
    periodo: 'Colonização',
    detalhe:
      'D. João III dividiu o território brasileiro em 15 faixas de terra, entregues a 12 donatários. O sistema visava colonizar e defender o vasto litoral sem custos diretos para a Coroa. Apenas as capitanias de São Vicente e Pernambuco prosperaram, graças à produção de cana-de-açúcar.',
    consequencias:
      'Concentração fundiária que moldou o latifúndio brasileiro, início da economia açucareira e necessidade de mão de obra que levaria à escravidão africana.',
  },
  {
    id: 'col-1549',
    ano: '1549',
    titulo: 'Governo-Geral (Tomé de Souza)',
    descricaoCurta: 'Centralização administrativa com a fundação de Salvador.',
    periodo: 'Colonização',
    detalhe:
      'Diante do fracasso da maioria das capitanias, a Coroa criou o cargo de Governador-Geral. Tomé de Souza, o primeiro, fundou Salvador como capital e trouxe consigo jesuítas liderados por Manuel da Nóbrega. A administração passou a incluir ouvidor-mor e provedor-mor.',
    consequencias:
      'Fortalecimento do controle metropolitano, início da catequização indígena pelos jesuítas e consolidação de Salvador como centro político e econômico.',
  },
  {
    id: 'col-1630',
    ano: '1630–54',
    titulo: 'Invasões Holandesas (Nordeste)',
    descricaoCurta: 'A Companhia das Índias Ocidentais ocupa o Nordeste açucareiro.',
    periodo: 'Colonial',
    detalhe:
      'Os holandeses da WIC invadiram Pernambuco para controlar a lucrativa produção de açúcar. Sob o governo de Maurício de Nassau (1637-1644), houve investimentos em urbanismo, arte e tolerância religiosa em Recife. A resistência luso-brasileira culminou nas Batalhas dos Guararapes.',
    consequencias:
      'Após a expulsão, os holandeses levaram técnicas açucareiras para o Caribe, quebrando o monopólio brasileiro e provocando a crise do açúcar no Nordeste.',
  },
  {
    id: 'col-1694',
    ano: '1694',
    titulo: 'Destruição de Palmares',
    descricaoCurta: 'Maior quilombo das Américas é destruído após décadas de resistência.',
    periodo: 'Colonial',
    detalhe:
      'O Quilombo dos Palmares, localizado na Serra da Barriga (atual Alagoas), reuniu até 20 mil habitantes em seu auge. Liderado por Zumbi, resistiu a diversas expedições militares. O bandeirante Domingos Jorge Velho liderou o ataque final que destruiu a capital, a Cerca do Macaco.',
    consequencias:
      'Palmares tornou-se símbolo da resistência negra. O 20 de novembro, data da morte de Zumbi, é hoje o Dia da Consciência Negra no Brasil.',
  },
  {
    id: 'col-1789',
    ano: '1789',
    titulo: 'Inconfidência Mineira',
    descricaoCurta: 'Movimento separatista em Minas Gerais, inspirado no Iluminismo.',
    periodo: 'Crise Colonial',
    detalhe:
      'Elite intelectual e mineradora de Vila Rica conspirou contra a cobrança da derrama e pelo fim do domínio português. O grupo incluía poetas como Cláudio Manuel da Costa e Tomás Antônio Gonzaga. Tiradentes, o membro de mais baixa posição social, foi o único executado.',
    consequencias:
      'Embora fracassada, a Inconfidência alimentou o sentimento nativista. Tiradentes tornou-se mártir nacional e patrono cívico do Brasil.',
  },
  {
    id: 'col-1808',
    ano: '1808',
    titulo: 'Chegada da Família Real',
    descricaoCurta: 'Corte portuguesa foge de Napoleão e se instala no Rio de Janeiro.',
    periodo: 'Crise Colonial',
    detalhe:
      'Pressionado pela invasão napoleônica a Portugal, D. João VI transferiu a corte para o Brasil com cerca de 15 mil pessoas. A Abertura dos Portos às Nações Amigas rompeu o pacto colonial, e o Rio de Janeiro recebeu instituições como o Banco do Brasil, a Biblioteca Real e o Jardim Botânico.',
    consequencias:
      'Inversão do pacto colonial: o Brasil deixou de ser simples colônia. A modernização institucional preparou o terreno para a independência em 1822.',
  },
  {
    id: 'col-1822',
    ano: '1822',
    titulo: 'Independência do Brasil',
    descricaoCurta: 'D. Pedro I proclama a independência às margens do Ipiranga.',
    periodo: 'Independência',
    detalhe:
      'As Cortes de Lisboa exigiram o retorno de D. Pedro e a recolonização do Brasil. Em 7 de setembro de 1822, às margens do riacho Ipiranga em São Paulo, D. Pedro proclamou a separação. Diferentemente das repúblicas hispano-americanas, o Brasil manteve a monarquia como forma de governo.',
    consequencias:
      'O Brasil tornou-se uma monarquia constitucional independente, mas manteve a escravidão e a estrutura agrário-exportadora, perpetuando desigualdades sociais.',
  },
  {
    id: 'col-1888',
    ano: '1888',
    titulo: 'Abolição da Escravidão (Lei Áurea)',
    descricaoCurta: 'Princesa Isabel assina a lei que extingue a escravidão no Brasil.',
    periodo: 'Império',
    detalhe:
      'O Brasil foi o último país das Américas a abolir a escravidão. A Lei Áurea, de apenas dois artigos, não previu qualquer reparação ou política de integração dos libertos. O movimento abolicionista vinha crescendo desde a Lei do Ventre Livre (1871) e da Lei dos Sexagenários (1885).',
    consequencias:
      'A falta de políticas de inclusão condenou a população negra à marginalização. A elite agrária, ressentida com a monarquia, aderiu ao movimento republicano.',
  },
  {
    id: 'col-1889',
    ano: '1889',
    titulo: 'Proclamação da República',
    descricaoCurta: 'Marechal Deodoro da Fonseca derruba o Império.',
    periodo: 'República',
    detalhe:
      'Em 15 de novembro de 1889, o Marechal Deodoro da Fonseca, pressionado por militares positivistas e pela elite cafeeira, depôs o gabinete do Visconde de Ouro Preto e proclamou a República. A família real foi exilada. A transição ocorreu sem participação popular significativa.',
    consequencias:
      'Início da República Velha, marcada pelo coronelismo, a política do café-com-leite e a exclusão da maioria da população dos processos políticos.',
  },
];

/* ─── Dados: Era Vargas → Redemocratização ─── */

const EVENTOS_VARGAS: readonly EventoHistorico[] = [
  {
    id: 'var-1930',
    ano: '1930',
    titulo: 'Revolução de 30',
    descricaoCurta: 'Fim da República Velha e ascensão de Getúlio Vargas.',
    periodo: 'Era Vargas',
    detalhe:
      'Após a derrota eleitoral da Aliança Liberal, Getúlio Vargas liderou um golpe armado que depôs o presidente Washington Luís. O movimento rompeu com a política café-com-leite e o domínio das oligarquias paulista e mineira. Vargas assumiu como chefe do Governo Provisório.',
    consequencias:
      'Centralização do poder federal, modernização do Estado brasileiro, início de políticas trabalhistas e enfraquecimento do poder das oligarquias regionais.',
  },
  {
    id: 'var-1932',
    ano: '1932',
    titulo: 'Revolução Constitucionalista (SP)',
    descricaoCurta: 'São Paulo pega em armas exigindo uma nova Constituição.',
    periodo: 'Era Vargas',
    detalhe:
      'A elite paulista, insatisfeita com a perda de hegemonia política, rebelou-se contra o governo provisório de Vargas. O movimento durou três meses e mobilizou cerca de 100 mil voluntários. Apesar da derrota militar, São Paulo obteve vitória moral.',
    consequencias:
      'Vargas convocou a Assembleia Constituinte que elaborou a Constituição de 1934, incorporando o voto feminino e direitos trabalhistas pela primeira vez.',
  },
  {
    id: 'var-1937',
    ano: '1937',
    titulo: 'Estado Novo',
    descricaoCurta: 'Vargas instaura uma ditadura inspirada no fascismo europeu.',
    periodo: 'Era Vargas',
    detalhe:
      'Usando o pretexto do Plano Cohen — um documento forjado sobre uma suposta revolução comunista — Vargas fechou o Congresso, cancelou as eleições e outorgou uma nova Constituição centralista. O DIP (Departamento de Imprensa e Propaganda) controlava a imprensa e promovia o culto à personalidade.',
    consequencias:
      'Supressão das liberdades civis, mas também modernização industrial e criação de empresas estatais como a CSN e a Vale do Rio Doce.',
  },
  {
    id: 'var-1943',
    ano: '1943',
    titulo: 'CLT',
    descricaoCurta: 'Consolidação das Leis do Trabalho organiza direitos trabalhistas.',
    periodo: 'Era Vargas',
    detalhe:
      'A CLT reuniu e sistematizou toda a legislação trabalhista existente em um único código. Garantiu jornada de 8 horas, férias remuneradas, salário mínimo e carteira de trabalho. Vargas associou sua imagem à do "pai dos pobres" através dessa legislação.',
    consequencias:
      'Base do direito trabalhista brasileiro até hoje, embora excluísse inicialmente trabalhadores rurais e domésticos. Criou a estrutura sindical atrelada ao Estado.',
  },
  {
    id: 'var-1945',
    ano: '1945',
    titulo: 'Queda de Vargas',
    descricaoCurta: 'Militares depõem Vargas e iniciam a redemocratização.',
    periodo: 'Redemocratização',
    detalhe:
      'Com o fim da Segunda Guerra e a contradição de lutar pela democracia na Europa mantendo uma ditadura interna, Vargas foi deposto por um golpe militar. Seguiu-se a eleição do General Eurico Gaspar Dutra. Vargas voltaria ao poder em 1950, eleito democraticamente.',
    consequencias:
      'Início do período democrático (1945-1964), surgimento de partidos como PSD, UDN e PTB, e retorno das liberdades políticas.',
  },
  {
    id: 'var-1964',
    ano: '1964',
    titulo: 'Golpe Militar',
    descricaoCurta: 'Forças Armadas depõem João Goulart e iniciam 21 anos de ditadura.',
    periodo: 'Ditadura Militar',
    detalhe:
      'Em 31 de março de 1964, militares apoiados por setores civis conservadores derrubaram o presidente João Goulart, que propunha reformas de base. O golpe teve apoio dos EUA no contexto da Guerra Fria. Os militares prometiam uma intervenção temporária, mas permaneceram no poder até 1985.',
    consequencias:
      'Cassação de mandatos, censura à imprensa, perseguição política, tortura de opositores e supressão de direitos constitucionais básicos.',
  },
  {
    id: 'var-1968',
    ano: '1968',
    titulo: 'AI-5',
    descricaoCurta: 'Ato mais repressivo da ditadura fecha o Congresso e suspende habeas corpus.',
    periodo: 'Ditadura Militar',
    detalhe:
      'O Ato Institucional nº 5 marcou o endurecimento total do regime. Deu ao presidente poderes para fechar o Congresso, cassar mandatos, suspender direitos políticos e censurar sem restrições. Foi uma resposta ao crescimento dos movimentos estudantis e da oposição organizada.',
    consequencias:
      'Início dos "anos de chumbo", com torturas sistemáticas, desaparecimentos forçados e exílio de intelectuais, artistas e políticos.',
  },
  {
    id: 'var-1969',
    ano: '1969–73',
    titulo: 'Milagre Econômico',
    descricaoCurta: 'PIB cresce até 14% ao ano sob forte endividamento externo.',
    periodo: 'Ditadura Militar',
    detalhe:
      'Sob o ministro Delfim Netto, o Brasil viveu anos de crescimento acelerado com grandes obras de infraestrutura como a Transamazônica, Itaipu e a Ponte Rio-Niterói. O lema era "Brasil, ame-o ou deixe-o". O crescimento, porém, ampliou drasticamente a desigualdade social.',
    consequencias:
      'Endividamento externo que levaria à crise da dívida nos anos 1980, concentração de renda e devastação ambiental acelerada na Amazônia.',
  },
  {
    id: 'var-1979',
    ano: '1979',
    titulo: 'Lei da Anistia',
    descricaoCurta: 'Anistia "ampla, geral e irrestrita" para perseguidos e perseguidores.',
    periodo: 'Abertura',
    detalhe:
      'A Lei nº 6.683 permitiu o retorno de exilados políticos, mas também garantiu impunidade aos agentes do Estado que praticaram tortura e assassinatos. O presidente Figueiredo conduzia a "abertura lenta, gradual e segura". A lei foi resultado de intensa mobilização dos Comitês Brasileiros pela Anistia.',
    consequencias:
      'Retorno de líderes como Leonel Brizola e Luís Carlos Prestes, mas sem responsabilização dos torturadores — debate que persiste até hoje.',
  },
  {
    id: 'var-1984',
    ano: '1984',
    titulo: 'Diretas Já',
    descricaoCurta: 'Maior mobilização popular da história do Brasil por eleições diretas.',
    periodo: 'Abertura',
    detalhe:
      'Milhões de brasileiros foram às ruas pedir eleições diretas para presidente, liderados por políticos como Ulysses Guimarães e Tancredo Neves, e artistas como Fafá de Belém. A emenda Dante de Oliveira, que restabeleceria o voto direto, foi derrotada no Congresso por apenas 22 votos.',
    consequencias:
      'Apesar da derrota legislativa, o movimento acelerou a transição democrática. Tancredo Neves foi eleito indiretamente em 1985, morrendo antes da posse.',
  },
  {
    id: 'var-1988',
    ano: '1988',
    titulo: 'Constituição Cidadã',
    descricaoCurta: 'Nova Constituição amplia direitos sociais e garante liberdades fundamentais.',
    periodo: 'Redemocratização',
    detalhe:
      'Elaborada pela Assembleia Constituinte de 1987-88 e presidida por Ulysses Guimarães, a Constituição de 1988 é a mais extensa do mundo em direitos sociais. Instituiu o SUS, a educação como direito universal, a proteção ambiental e mecanismos de democracia direta como o plebiscito e referendo.',
    consequencias:
      'Marco da redemocratização brasileira, base jurídica dos direitos fundamentais atuais, embora muitos dispositivos dependam de regulamentação para plena eficácia.',
  },
];

/* ─── Dados: História Geral ─── */

const EVENTOS_GERAL: readonly EventoHistorico[] = [
  {
    id: 'ger-476',
    ano: '476',
    titulo: 'Queda de Roma',
    descricaoCurta: 'Deposição de Rômulo Augusto marca o fim do Império Romano do Ocidente.',
    periodo: 'Fim da Antiguidade',
    detalhe:
      'O general germânico Odoacro depôs o último imperador romano do Ocidente, Rômulo Augusto, em 476 d.C. O Império já estava fragmentado por invasões bárbaras, crises econômicas e instabilidade política. O Império Romano do Oriente (Bizantino) sobreviveria por quase mais mil anos.',
    consequencias:
      'Início convencional da Idade Média, fragmentação política da Europa em reinos germânicos, ruralização da economia e fortalecimento da Igreja Católica como instituição unificadora.',
  },
  {
    id: 'ger-1453',
    ano: '1453',
    titulo: 'Queda de Constantinopla',
    descricaoCurta: 'Otomanos conquistam a capital bizantina, encerrando a Idade Média.',
    periodo: 'Fim da Idade Média',
    detalhe:
      'O sultão Mehmed II cercou Constantinopla com 80 mil soldados e canhões gigantes. Após 53 dias de cerco, a cidade caiu em 29 de maio de 1453. O último imperador bizantino, Constantino XI, morreu lutando. A Hagia Sophia foi convertida em mesquita.',
    consequencias:
      'Bloqueio das rotas comerciais terrestres para o Oriente, impulsionando as Grandes Navegações. Intelectuais bizantinos fugiram para a Itália, alimentando o Renascimento.',
  },
  {
    id: 'ger-1789',
    ano: '1789',
    titulo: 'Revolução Francesa',
    descricaoCurta: 'Queda do Antigo Regime e ascensão dos ideais de liberdade e igualdade.',
    periodo: 'Idade Contemporânea',
    detalhe:
      'A crise fiscal, a fome e a influência iluminista levaram à tomada da Bastilha em 14 de julho de 1789. A Declaração dos Direitos do Homem e do Cidadão proclamou princípios de liberdade, igualdade e fraternidade. O rei Luís XVI e Maria Antonieta foram guilhotinados em 1793.',
    consequencias:
      'Fim do absolutismo na França, inspiração para movimentos de independência nas Américas, ascensão de Napoleão Bonaparte e difusão do nacionalismo moderno.',
  },
  {
    id: 'ger-1760',
    ano: '1760–1840',
    titulo: 'Revolução Industrial',
    descricaoCurta: 'Transição da produção artesanal para a mecanizada na Inglaterra.',
    periodo: 'Idade Contemporânea',
    detalhe:
      'A mecanização começou na indústria têxtil inglesa com invenções como a máquina a vapor de James Watt e o tear mecânico. As fábricas substituíram as oficinas artesanais, provocando êxodo rural massivo. As condições de trabalho eram precárias, com jornadas de 16 horas inclusive para crianças.',
    consequencias:
      'Surgimento do proletariado e dos movimentos operários, urbanização acelerada, poluição ambiental e consolidação do capitalismo industrial como sistema econômico dominante.',
  },
  {
    id: 'ger-1914',
    ano: '1914–18',
    titulo: 'Primeira Guerra Mundial',
    descricaoCurta: 'Conflito global entre Tríplice Aliança e Tríplice Entente.',
    periodo: 'Idade Contemporânea',
    detalhe:
      'O assassinato do arquiduque Francisco Ferdinando detonou um sistema de alianças que arrastou a Europa à guerra. Marcada pelas trincheiras, uso de gás mostarda e metralhadora, causou cerca de 17 milhões de mortes. Os EUA entraram em 1917, inclinando a balança para a Entente.',
    consequencias:
      'Tratado de Versalhes humilhou a Alemanha, semeando o revanchismo que levaria à Segunda Guerra. Fim dos impérios Russo, Otomano, Austro-Húngaro e Alemão.',
  },
  {
    id: 'ger-1929',
    ano: '1929',
    titulo: 'Crise de 29',
    descricaoCurta: 'Quebra da Bolsa de Nova York provoca depressão econômica mundial.',
    periodo: 'Idade Contemporânea',
    detalhe:
      'A "Terça-feira Negra" (29 de outubro de 1929) marcou o colapso da Bolsa de Valores de Nova York após anos de especulação desenfreada. O desemprego nos EUA chegou a 25%. A crise se espalhou globalmente, pois a economia americana era o motor do pós-guerra.',
    consequencias:
      'Ascensão de regimes totalitários na Europa (nazismo, fascismo), intervencionismo estatal com o New Deal de Roosevelt e, no Brasil, crise do café que contribuiu para a Revolução de 1930.',
  },
  {
    id: 'ger-1939',
    ano: '1939–45',
    titulo: 'Segunda Guerra Mundial',
    descricaoCurta: 'Maior conflito da história: Aliados contra o Eixo.',
    periodo: 'Idade Contemporânea',
    detalhe:
      'A invasão da Polônia pela Alemanha nazista em 1939 iniciou o conflito que envolveu mais de 70 países. O Holocausto exterminou 6 milhões de judeus. A guerra terminou com as bombas atômicas em Hiroshima e Nagasaki em agosto de 1945, causando entre 70 e 85 milhões de mortes no total.',
    consequencias:
      'Criação da ONU, início da Guerra Fria entre EUA e URSS, descolonização da Ásia e África e reconstrução europeia pelo Plano Marshall.',
  },
  {
    id: 'ger-1947',
    ano: '1947–91',
    titulo: 'Guerra Fria',
    descricaoCurta: 'Bipolaridade geopolítica entre EUA (capitalismo) e URSS (socialismo).',
    periodo: 'Idade Contemporânea',
    detalhe:
      'Sem confronto direto, as duas superpotências disputaram influência por guerras proxy (Coreia, Vietnã, Afeganistão), corrida armamentista nuclear e corrida espacial. A crise dos mísseis de Cuba (1962) levou o mundo à beira da guerra nuclear. A doutrina MAD (destruição mútua assegurada) manteve um equilíbrio tenso.',
    consequencias:
      'Divisão da Alemanha e da Europa pela Cortina de Ferro, golpes militares na América Latina apoiados pelos EUA, e desenvolvimento tecnológico acelerado (internet, satélites).',
  },
  {
    id: 'ger-1989',
    ano: '1989',
    titulo: 'Queda do Muro de Berlim',
    descricaoCurta: 'Abertura da fronteira entre Berlim Oriental e Ocidental.',
    periodo: 'Idade Contemporânea',
    detalhe:
      'Em 9 de novembro de 1989, o governo da Alemanha Oriental anunciou erroneamente a abertura imediata das fronteiras. Milhares de berlinenses correram para derrubar o muro que dividia a cidade desde 1961. A reunificação alemã foi formalizada em outubro de 1990.',
    consequencias:
      'Símbolo do fim da Guerra Fria, colapso do bloco soviético, dissolução da URSS em 1991 e início de uma nova ordem mundial unipolar liderada pelos EUA.',
  },
];

/* ─── Eras ─── */

const ERAS: readonly Era[] = [
  { id: 'colonial', rotulo: 'Brasil Colonial → República', eventos: EVENTOS_COLONIAL },
  { id: 'vargas', rotulo: 'Era Vargas → Redemocratização', eventos: EVENTOS_VARGAS },
  { id: 'geral', rotulo: 'História Geral', eventos: EVENTOS_GERAL },
];

/* ─── Componente ─── */

export function LinhaDoTempo() {
  const [eraAtiva, setEraAtiva] = useState<EraId>('colonial');
  const [eventoExpandido, setEventoExpandido] = useState<string | null>(null);

  const eraSelecionada = ERAS.find((e) => e.id === eraAtiva)!;

  function alternarEvento(id: string) {
    setEventoExpandido((atual) => (atual === id ? null : id));
  }

  return (
    <div className={styles.container}>
      <nav className={styles.abas} role="tablist" aria-label="Períodos históricos">
        {ERAS.map((era) => (
          <button
            key={era.id}
            role="tab"
            aria-selected={eraAtiva === era.id}
            className={`${styles.aba} ${eraAtiva === era.id ? styles.abaAtiva : ''}`}
            onClick={() => {
              setEraAtiva(era.id);
              setEventoExpandido(null);
            }}
          >
            {era.rotulo}
          </button>
        ))}
      </nav>

      <div className={styles.areaRolavel}>
        <div className={styles.linhaDoTempo}>
          <div className={styles.linhaVertical} aria-hidden="true" />

          {eraSelecionada.eventos.map((evento) => {
            const expandido = eventoExpandido === evento.id;

            return (
              <article
                key={evento.id}
                className={styles.evento}
                onClick={() => alternarEvento(evento.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    alternarEvento(evento.id);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-expanded={expandido}
              >
                <div
                  className={`${styles.no} ${expandido ? styles.noExpandido : ''}`}
                  aria-hidden="true"
                />

                <span className={`${styles.ano} ${expandido ? styles.anoExpandido : ''}`}>
                  {evento.ano}
                </span>

                <div
                  className={`${styles.conteudo} ${expandido ? styles.conteudoExpandido : ''}`}
                >
                  <span className={styles.periodo} data-cor={eraAtiva}>
                    {evento.periodo}
                  </span>
                  <h3 className={styles.titulo}>{evento.titulo}</h3>
                  <p className={styles.descricaoCurta}>{evento.descricaoCurta}</p>

                  <div
                    className={`${styles.painelExpandido} ${expandido ? styles.painelExpandidoAberto : ''}`}
                  >
                    <div className={styles.painelConteudo}>
                      {expandido && (
                        <div className={styles.detalhe}>
                          <p className={styles.detalheTexto}>{evento.detalhe}</p>
                          <p className={styles.consequenciasRotulo}>Consequências</p>
                          <p className={styles.consequenciasTexto}>{evento.consequencias}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
