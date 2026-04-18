import type { Disciplina } from './tipos';

export const disciplinaFisica: Disciplina = {
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
        secoes: [
          {
            titulo: 'Introdução à Mecânica',
            tipo: 'texto',
            corpo: `A **Mecânica** é o ramo da Física que estuda o movimento dos corpos e as forças que o causam. No vestibular da UNIVESP, este é o tema de maior peso (40% da prova de Física), e dominar seus conceitos é decisivo para uma boa pontuação.

A Mecânica se divide em três grandes áreas:

- **Cinemática**: descreve *como* os corpos se movem — posição, velocidade e aceleração — sem se preocupar com as causas do movimento.
- **Dinâmica**: estuda *por que* os corpos se movem, analisando as forças que atuam sobre eles (Leis de Newton).
- **Trabalho e Energia**: apresenta os conceitos de trabalho mecânico, energia cinética, energia potencial e o princípio da conservação da energia.

Vamos percorrer cada uma dessas áreas em profundidade, com fórmulas, exemplos resolvidos e dicas de aplicação.`,
          },
          {
            titulo: 'Cinemática — Conceitos Fundamentais',
            tipo: 'texto',
            corpo: `A Cinemática descreve o movimento sem analisar suas causas. Os conceitos básicos são:

- **Referencial**: ponto fixo a partir do qual se mede a posição de um corpo. O mesmo corpo pode estar em repouso em relação a um referencial e em movimento em relação a outro.
- **Posição** ($s$): localização do corpo na trajetória, medida em metros (m).
- **Deslocamento** ($\\Delta s = s - s_0$): variação da posição entre dois instantes.
- **Velocidade média**: razão entre o deslocamento e o intervalo de tempo:

$$v_m = \\frac{\\Delta s}{\\Delta t}$$

- **Velocidade instantânea**: velocidade em um instante específico. No Movimento Uniforme, coincide com a velocidade média.
- **Aceleração** ($a$): taxa de variação da velocidade no tempo:

$$a = \\frac{\\Delta v}{\\Delta t}$$

A unidade de velocidade no SI é $\\text{m/s}$ e a de aceleração é $\\text{m/s}^2$.`,
          },
          {
            titulo: 'Conversão km/h ↔ m/s',
            tipo: 'importante',
            corpo: `Uma das operações mais frequentes em cinemática é converter unidades de velocidade:

$$1 \\text{ km/h} = \\frac{1}{3{,}6} \\text{ m/s}$$

**Para converter km/h → m/s**: divida por $3{,}6$.

**Para converter m/s → km/h**: multiplique por $3{,}6$.

**Exemplos rápidos:**
- $72 \\text{ km/h} = \\frac{72}{3{,}6} = 20 \\text{ m/s}$
- $15 \\text{ m/s} = 15 \\times 3{,}6 = 54 \\text{ km/h}$
- $108 \\text{ km/h} = \\frac{108}{3{,}6} = 30 \\text{ m/s}$

> **Dica de prova:** Sempre converta para m/s antes de aplicar as fórmulas de cinemática, pois as equações utilizam o Sistema Internacional (SI).`,
          },
          {
            titulo: 'Movimento Retilíneo Uniforme (MRU)',
            tipo: 'texto',
            corpo: `No **MRU**, a velocidade é constante ($a = 0$) e o corpo percorre distâncias iguais em intervalos de tempo iguais.

**Função horária da posição:**

$$s = s_0 + v \\cdot t$$

onde $s_0$ é a posição inicial, $v$ é a velocidade (constante) e $t$ é o tempo.

**Características do gráfico:**
- *Posição × tempo*: reta inclinada. A inclinação (coeficiente angular) é a velocidade.
- *Velocidade × tempo*: reta horizontal (velocidade constante). A área sob a curva é o deslocamento.

**Exemplo prático:** Um carro viaja a $80 \\text{ km/h}$ em uma rodovia retilínea. Para calcular quanto tempo ele leva para percorrer $200 \\text{ km}$:

$$200 = 0 + 80 \\cdot t \\implies t = \\frac{200}{80} = 2{,}5 \\text{ h}$$

Se dois móveis se aproximam em sentidos opostos, usa-se a velocidade relativa: a soma das velocidades.`,
          },
          {
            titulo: 'Movimento Retilíneo Uniformemente Variado (MRUV)',
            tipo: 'texto',
            corpo: `No **MRUV**, a aceleração é constante e diferente de zero, ou seja, a velocidade varia uniformemente ao longo do tempo. Este é o tipo de movimento mais cobrado no vestibular.

As três equações fundamentais do MRUV são:

**1. Função horária da velocidade:**

$$v = v_0 + a \\cdot t$$

**2. Função horária da posição:**

$$s = s_0 + v_0 \\cdot t + \\frac{a \\cdot t^2}{2}$$

**3. Equação de Torricelli** (quando o tempo não é dado):

$$v^2 = v_0^2 + 2 \\cdot a \\cdot \\Delta s$$

**Quando usar cada equação:**

| Dados disponíveis | Equação recomendada |
|---|---|
| $v_0$, $a$, $t$ → encontrar $v$ | $v = v_0 + at$ |
| $s_0$, $v_0$, $a$, $t$ → encontrar $s$ | $s = s_0 + v_0 t + \\frac{at^2}{2}$ |
| $v_0$, $a$, $\\Delta s$ → encontrar $v$ (sem $t$) | $v^2 = v_0^2 + 2a\\Delta s$ |

**Características do gráfico no MRUV:**
- *Posição × tempo*: parábola (concavidade depende do sinal de $a$).
- *Velocidade × tempo*: reta inclinada. A inclinação é a aceleração. A área sob a reta é o deslocamento.
- *Aceleração × tempo*: reta horizontal (aceleração constante).

**Queda livre** é um caso particular do MRUV com $a = g \\approx 10 \\text{ m/s}^2$ e $v_0 = 0$ (corpo solto do repouso). As equações se simplificam para:

$$v = g \\cdot t \\qquad h = \\frac{g \\cdot t^2}{2}$$

No **lançamento vertical para cima**, $v_0 > 0$ e $a = -g$ (desaceleração). A altura máxima ocorre quando $v = 0$.`,
          },
          {
            titulo: 'Equações de cinemática — Resumo',
            tipo: 'formula',
            corpo: `**MRU (velocidade constante, $a = 0$):**

$$s = s_0 + v \\cdot t$$

**MRUV (aceleração constante, $a \\neq 0$):**

$$v = v_0 + a \\cdot t$$

$$s = s_0 + v_0 \\cdot t + \\frac{a \\cdot t^2}{2}$$

$$v^2 = v_0^2 + 2 \\cdot a \\cdot \\Delta s$$

**Velocidade média no MRUV:**

$$v_m = \\frac{v_0 + v}{2}$$`,
          },
          {
            titulo: 'Exemplo resolvido — Cinemática (MRUV)',
            tipo: 'exemplo',
            corpo: `**Problema:** Um motociclista trafega a $20 \\text{ m/s}$ quando avista um obstáculo e freia com desaceleração constante de $4 \\text{ m/s}^2$. Qual a distância percorrida até parar?

**Resolução passo a passo:**

1. **Identificar dados:** $v_0 = 20 \\text{ m/s}$, $v = 0$ (parou), $a = -4 \\text{ m/s}^2$
2. **Escolher a equação:** Como não temos o tempo, usamos Torricelli:

$$v^2 = v_0^2 + 2 \\cdot a \\cdot \\Delta s$$

3. **Substituir:**

$$0 = (20)^2 + 2 \\cdot (-4) \\cdot \\Delta s$$

$$0 = 400 - 8 \\cdot \\Delta s$$

$$8 \\cdot \\Delta s = 400$$

$$\\Delta s = 50 \\text{ m}$$

**Resposta:** O motociclista percorre $50 \\text{ m}$ até parar completamente.

> **Observação:** O sinal negativo da aceleração indica frenagem. Sempre defina um sentido positivo no início do problema e mantenha a coerência dos sinais.`,
          },
          {
            titulo: 'Leis de Newton',
            tipo: 'texto',
            corpo: `As **Leis de Newton** formam a base da Dinâmica e descrevem como as forças afetam o movimento dos corpos.

---

**1ª Lei de Newton — Lei da Inércia**

> *Um corpo em repouso tende a permanecer em repouso, e um corpo em movimento retilíneo uniforme tende a permanecer nesse estado, a menos que uma força resultante não nula atue sobre ele.*

A inércia é a resistência que um corpo oferece à mudança de seu estado de movimento. Quanto maior a massa, maior a inércia. Exemplos do cotidiano:
- Passageiros de ônibus são "jogados para frente" quando o motorista freia bruscamente.
- Uma moeda sobre um cartão permanece no lugar quando o cartão é puxado rapidamente.

---

**2ª Lei de Newton — Princípio Fundamental da Dinâmica**

$$\\vec{F}_R = m \\cdot \\vec{a}$$

A força resultante ($F_R$) sobre um corpo é igual ao produto de sua massa ($m$) pela aceleração ($a$) adquirida. Consequências diretas:

- Se $F_R = 0$, então $a = 0$ (equilíbrio — parado ou MRU).
- Para mesma força, maior massa → menor aceleração.
- Para mesma massa, maior força → maior aceleração.

**Unidades no SI:** Força em Newton ($\\text{N} = \\text{kg} \\cdot \\text{m/s}^2$), massa em quilograma ($\\text{kg}$), aceleração em $\\text{m/s}^2$.

---

**3ª Lei de Newton — Ação e Reação**

> *Quando um corpo A exerce uma força sobre um corpo B, o corpo B exerce simultaneamente sobre A uma força de mesma intensidade, mesma direção e sentido oposto.*

As forças de ação e reação atuam em **corpos diferentes** e, portanto, **nunca se anulam**. Exemplo: ao caminhar, seu pé empurra o chão para trás (ação) e o chão empurra seu pé para frente (reação), permitindo o deslocamento.`,
          },
          {
            titulo: 'Força Peso e Diagrama de Corpo Livre',
            tipo: 'destaque',
            corpo: `O **peso** de um corpo é a força gravitacional que a Terra exerce sobre ele:

$$P = m \\cdot g$$

onde $g \\approx 10 \\text{ m/s}^2$ na superfície terrestre.

> **Atenção:** Peso (medido em Newtons) é diferente de massa (medida em quilogramas). Um corpo de $5 \\text{ kg}$ tem peso $P = 5 \\times 10 = 50 \\text{ N}$.

**Diagrama de Corpo Livre (DCL)** é a ferramenta essencial para resolver problemas de dinâmica:

1. **Isolar** o corpo de interesse do restante do sistema.
2. **Representar todas as forças** que atuam sobre ele: peso ($\\vec{P}$), normal ($\\vec{N}$), tração ($\\vec{T}$), atrito ($\\vec{f}_{at}$), força aplicada ($\\vec{F}$).
3. **Definir eixos** de referência (horizontal/vertical ou ao longo de plano inclinado).
4. **Decompor** forças que não estejam nos eixos.
5. **Aplicar** $F_R = m \\cdot a$ em cada eixo separadamente.

**Forças mais comuns no DCL:**
- $\\vec{P} = m \\cdot g$: peso (sempre vertical, para baixo)
- $\\vec{N}$: normal (perpendicular à superfície de apoio)
- $\\vec{f}_{at} = \\mu \\cdot N$: atrito (oposto ao movimento ou à tendência)
- $\\vec{T}$: tração (ao longo do fio, corda ou cabo)`,
          },
          {
            titulo: 'Exemplo resolvido — Dinâmica',
            tipo: 'exemplo',
            corpo: `**Problema:** Um bloco de $3 \\text{ kg}$ é puxado sobre uma superfície horizontal sem atrito por uma força horizontal de $12 \\text{ N}$. Calcule: (a) a aceleração do bloco; (b) a velocidade após $4 \\text{ s}$, partindo do repouso.

**Resolução:**

**(a) Aceleração:**

Pelo DCL, a única força horizontal é $F = 12 \\text{ N}$. Aplicando a 2ª Lei de Newton:

$$F = m \\cdot a \\implies a = \\frac{F}{m} = \\frac{12}{3} = 4 \\text{ m/s}^2$$

**(b) Velocidade após 4 s:**

Usando a equação do MRUV com $v_0 = 0$:

$$v = v_0 + a \\cdot t = 0 + 4 \\times 4 = 16 \\text{ m/s}$$

**Resposta:** (a) $a = 4 \\text{ m/s}^2$; (b) $v = 16 \\text{ m/s}$ ($57{,}6 \\text{ km/h}$).`,
          },
          {
            titulo: 'Trabalho de uma Força',
            tipo: 'texto',
            corpo: `O **trabalho** ($W$ ou $\\tau$) mede a quantidade de energia transferida por uma força ao longo de um deslocamento:

$$W = F \\cdot d \\cdot \\cos\\theta$$

onde $F$ é a intensidade da força (N), $d$ é o deslocamento (m) e $\\theta$ é o ângulo entre a força e o deslocamento.

**Casos especiais:**

| Ângulo $\\theta$ | $\\cos\\theta$ | Tipo de trabalho |
|---|---|---|
| $0°$ (força no sentido do movimento) | $1$ | Positivo (motor) |
| $90°$ (força perpendicular) | $0$ | Nulo |
| $180°$ (força contrária ao movimento) | $-1$ | Negativo (resistente) |

**Unidade:** Joule ($\\text{J}$), onde $1 \\text{ J} = 1 \\text{ N} \\cdot \\text{m}$.

> **Importante:** A Normal e o Peso, em deslocamentos horizontais, são perpendiculares ao movimento ($\\theta = 90°$) e **não realizam trabalho**.`,
          },
          {
            titulo: 'Energia Cinética e Potencial Gravitacional',
            tipo: 'formula',
            corpo: `**Energia Cinética** — energia associada ao movimento:

$$E_c = \\frac{m \\cdot v^2}{2}$$

Depende da massa e do **quadrado** da velocidade. Ao dobrar a velocidade, a energia cinética quadruplica. Um corpo em repouso tem $E_c = 0$.

**Energia Potencial Gravitacional** — energia armazenada pela posição (altura):

$$E_p = m \\cdot g \\cdot h$$

onde $m$ é a massa (kg), $g \\approx 10 \\text{ m/s}^2$ e $h$ é a altura em relação ao nível de referência (m).

**Teorema Trabalho-Energia Cinética:**

$$W_{F_R} = \\Delta E_c = E_{c_f} - E_{c_i} = \\frac{mv_f^2}{2} - \\frac{mv_i^2}{2}$$

O trabalho da força resultante é igual à variação da energia cinética do corpo.`,
          },
          {
            titulo: 'Conservação da Energia Mecânica',
            tipo: 'destaque',
            corpo: `A **Energia Mecânica** ($E_m$) é a soma da energia cinética com a energia potencial:

$$E_m = E_c + E_p = \\frac{mv^2}{2} + mgh$$

**Princípio da Conservação:**

> *Em sistemas onde atuam apenas forças conservativas (sem atrito nem resistência do ar), a energia mecânica total permanece constante.*

$$E_{m_i} = E_{m_f} \\implies \\frac{mv_i^2}{2} + mgh_i = \\frac{mv_f^2}{2} + mgh_f$$

**Aplicações clássicas:**
- **Queda livre:** no topo, toda energia é potencial ($E_c = 0$); no solo, toda é cinética ($E_p = 0$).
- **Pêndulo:** nos extremos, $v = 0$ (máximo de $E_p$); no ponto mais baixo, $h_{ref} = 0$ (máximo de $E_c$).
- **Montanha-russa:** a velocidade é maior nos vales e menor nos picos.`,
          },
          {
            titulo: 'Exemplo resolvido — Conservação de Energia',
            tipo: 'exemplo',
            corpo: `**Problema:** Uma bola de $2 \\text{ kg}$ é abandonada do repouso a $20 \\text{ m}$ de altura. Desprezando a resistência do ar ($g = 10 \\text{ m/s}^2$), determine: (a) a energia mecânica total; (b) a velocidade ao atingir o solo.

**Resolução:**

**(a) Energia mecânica total (no topo, $v_0 = 0$):**

$$E_m = E_c + E_p = 0 + m \\cdot g \\cdot h = 2 \\times 10 \\times 20 = 400 \\text{ J}$$

**(b) Velocidade no solo** ($h = 0$, logo $E_p = 0$):

Pela conservação de energia: $E_{m_{topo}} = E_{m_{solo}}$

$$400 = \\frac{m \\cdot v^2}{2} + 0 \\implies 400 = \\frac{2 \\cdot v^2}{2} = v^2$$

$$v = \\sqrt{400} = 20 \\text{ m/s}$$

**Resposta:** (a) $E_m = 400 \\text{ J}$; (b) $v = 20 \\text{ m/s}$ ($72 \\text{ km/h}$).

> **Verificação:** Pela queda livre, $v^2 = 2gh = 2 \\times 10 \\times 20 = 400 \\implies v = 20 \\text{ m/s}$ ✓`,
          },
        ],
        imagemDescricao: 'Ilustração das três leis de Newton com exemplos visuais do cotidiano',
        formulasChave: [
          'S = S₀ + v·t (Movimento Uniforme)',
          'S = S₀ + v₀·t + (a·t²)/2 (Movimento Uniformemente Variado)',
          'v = v₀ + a·t (velocidade no MUV)',
          'v² = v₀² + 2·a·ΔS (equação de Torricelli)',
          'F = m·a (2ª Lei de Newton)',
          'P = m·g (Peso)',
          'Ec = m·v²/2 (Energia cinética)',
          'Ep = m·g·h (Energia potencial gravitacional)',
        ],
        dicasProva: [
          'Identifique o tipo de movimento (MU ou MUV) antes de escolher a fórmula',
          'Adote um referencial e defina sinais positivo/negativo para as direções',
          'Desenhe o diagrama de forças (corpo livre) antes de aplicar F = ma',
          'Problemas de conservação de energia: Ec + Ep = constante (em sistemas sem atrito)',
        ],
        errosComuns: [
          'Esquecer de converter km/h para m/s (divida por 3,6)',
          'Confundir velocidade (m/s) com aceleração (m/s²)',
          'Não considerar o sinal negativo na desaceleração (frenagem)',
          'Trocar peso (P = m·g, medido em Newtons) por massa (medida em kg)',
        ],
        exemplosResolvidos: [
          {
            enunciado: 'Um carro parte do repouso com aceleração constante de 2 m/s². Qual sua velocidade após 5 segundos?',
            passos: [
              'Dados: v₀ = 0 (repouso), a = 2 m/s², t = 5 s',
              'Fórmula: v = v₀ + a·t',
              'v = 0 + 2 × 5 = 10 m/s',
            ],
            resposta: 'A velocidade do carro após 5 s é 10 m/s (36 km/h).',
          },
          {
            enunciado: 'Uma força resultante de 20 N é aplicada a um bloco de 4 kg sobre superfície sem atrito. Qual a aceleração do bloco?',
            passos: [
              'Dados: F = 20 N, m = 4 kg',
              'Fórmula (2ª Lei de Newton): F = m·a → a = F/m',
              'a = 20/4 = 5 m/s²',
            ],
            resposta: 'A aceleração do bloco é 5 m/s².',
          },
        ],
        exercicios: [
          {
            id: 'fis-mec-1',
            enunciado: 'Um móvel com velocidade inicial de 10 m/s é acelerado a 2 m/s² durante 5 s. A velocidade final é:',
            alternativas: ['10 m/s', '15 m/s', '20 m/s', '25 m/s', '30 m/s'],
            respostaCorreta: 2,
            explicacao: 'Usando v = v₀ + a·t: v = 10 + 2 × 5 = 10 + 10 = 20 m/s. A velocidade final é a soma da velocidade inicial com o ganho de velocidade proporcionado pela aceleração no tempo dado.',
            dificuldade: 'facil',
          },
          {
            id: 'fis-mec-2',
            enunciado: 'A 3ª Lei de Newton (Ação e Reação) afirma que:',
            alternativas: [
              'Todo corpo em repouso tende a permanecer em repouso',
              'A força resultante é igual à massa vezes aceleração',
              'Para toda força de ação existe uma força de reação com mesma intensidade e sentido oposto',
              'A aceleração é diretamente proporcional à força aplicada',
              'A energia mecânica se conserva em sistemas isolados',
            ],
            respostaCorreta: 2,
            explicacao: 'A 3ª Lei de Newton afirma que quando um corpo A exerce uma força sobre um corpo B, o corpo B exerce sobre A uma força de mesma intensidade, mesma direção, mas sentido oposto. As forças atuam em corpos diferentes.',
            dificuldade: 'facil',
          },
          {
            id: 'fis-mec-3',
            enunciado: 'Um objeto de 2 kg é largado de uma altura de 5 m. Sua energia potencial gravitacional no topo vale (g = 10 m/s²):',
            alternativas: ['10 J', '25 J', '50 J', '100 J', '200 J'],
            respostaCorreta: 3,
            explicacao: 'Ep = m·g·h = 2 × 10 × 5 = 100 J. No ponto mais alto, toda a energia mecânica está na forma de energia potencial gravitacional. Ao cair, essa energia se converte em energia cinética.',
            dificuldade: 'facil',
          },
          {
            id: 'fis-mec-4',
            enunciado: 'A velocidade de 72 km/h, convertida para m/s, equivale a:',
            alternativas: ['7,2 m/s', '10 m/s', '15 m/s', '20 m/s', '36 m/s'],
            respostaCorreta: 3,
            explicacao: 'Para converter km/h para m/s, divide-se por 3,6: 72 / 3,6 = 20 m/s. Esta conversão é essencial em problemas de cinemática, pois as fórmulas utilizam unidades do SI (metros e segundos).',
            dificuldade: 'facil',
          },
          {
            id: 'fis-mec-5',
            enunciado: 'Em uma superfície sem atrito, se a força resultante aplicada a um corpo é duplicada mantendo a massa constante, a aceleração:',
            alternativas: [
              'É reduzida pela metade',
              'Permanece a mesma',
              'Também dobra',
              'Quadruplica',
              'Depende da velocidade inicial',
            ],
            respostaCorreta: 2,
            explicacao: 'Pela 2ª Lei de Newton (F = m·a), se a massa é constante e a força dobra, a aceleração também dobra. A relação entre força e aceleração é diretamente proporcional para massa constante.',
            dificuldade: 'medio',
          },
        ],
      },
    },
    {
      id: 'eletrodinamica',
      titulo: 'Eletrodinâmica',
      peso: 30,
      conteudo: {
        resumo: 'Corrente elétrica, resistência, Lei de Ohm, circuitos série e paralelo, potência e consumo de energia.',
        explicacao:
          'A Eletrodinâmica estuda o movimento de cargas elétricas em circuitos.\n\nConceitos fundamentais:\n• Corrente elétrica (i): fluxo ordenado de cargas. i = ΔQ/Δt (unidade: Ampere)\n• Diferença de potencial (U): "força" que impulsiona as cargas (unidade: Volt)\n• Resistência (R): oposição ao fluxo de corrente (unidade: Ohm — Ω)\n\nLei de Ohm: U = R × i\n\nAssociação de resistores:\n• Série: Req = R₁ + R₂ + ... (mesma corrente em todos, tensão se divide)\n• Paralelo: 1/Req = 1/R₁ + 1/R₂ + ... (mesma tensão em todos, corrente se divide)\n\nPotência elétrica: P = U × i = R × i² = U²/R (unidade: Watt)\n\nConsumo de energia: E = P × Δt\n• 1 kWh = 1.000 W × 1 hora = 3,6 × 10⁶ J',
        secoes: [
          {
            titulo: 'Introdução à Eletrodinâmica',
            tipo: 'texto',
            corpo: `A **Eletrodinâmica** é o ramo da Física que estuda o movimento ordenado de cargas elétricas — a corrente elétrica — e os fenômenos associados a ela em circuitos. Com peso de 30% na prova de Física da UNIVESP, é o segundo tema mais importante da disciplina.

Os conceitos centrais da eletrodinâmica são:

- **Corrente elétrica**: fluxo de cargas que percorre um condutor.
- **Tensão (ddp)**: a "força motriz" que impulsiona as cargas.
- **Resistência**: a oposição que o material oferece à passagem de corrente.
- **Potência e consumo**: quanto um aparelho gasta e quanto custa na conta de luz.

Dominar esses conceitos permite resolver desde circuitos simples até problemas de consumo energético do dia a dia.`,
          },
          {
            titulo: 'Corrente Elétrica',
            tipo: 'texto',
            corpo: `A **corrente elétrica** ($i$) é o fluxo ordenado de cargas elétricas (geralmente elétrons livres em metais) através de um condutor. Para que exista corrente, é necessário um circuito fechado e uma diferença de potencial (tensão).

$$i = \\frac{\\Delta Q}{\\Delta t}$$

onde $\\Delta Q$ é a carga elétrica que atravessa uma seção do condutor no intervalo de tempo $\\Delta t$.

**Unidades no SI:**
- Corrente: Ampere ($\\text{A}$)
- Carga elétrica: Coulomb ($\\text{C}$)
- Tempo: segundo ($\\text{s}$)

**Sentido da corrente:**
- *Sentido convencional*: do polo positivo (+) para o negativo (−) da fonte, pelo circuito externo.
- *Sentido real (elétrons)*: do polo negativo para o positivo.

> **Nota:** Nos problemas de vestibular, utiliza-se sempre o sentido convencional.

**Exemplo rápido:** Se uma carga de $10 \\text{ C}$ passa por um fio em $2 \\text{ s}$:

$$i = \\frac{10}{2} = 5 \\text{ A}$$`,
          },
          {
            titulo: 'Resistência Elétrica e Lei de Ohm',
            tipo: 'texto',
            corpo: `A **resistência elétrica** ($R$) é a grandeza que mede a oposição que um condutor oferece à passagem de corrente elétrica. Sua unidade é o Ohm ($\\Omega$).

**1ª Lei de Ohm:**

$$U = R \\cdot i$$

onde $U$ é a tensão (ou diferença de potencial, ddp) em Volt ($\\text{V}$), $R$ é a resistência em Ohm ($\\Omega$) e $i$ é a corrente em Ampere ($\\text{A}$).

Rearranjando conforme a necessidade:

$$i = \\frac{U}{R} \\qquad R = \\frac{U}{i}$$

**2ª Lei de Ohm** (resistência de um fio condutor):

$$R = \\frac{\\rho \\cdot L}{A}$$

onde $\\rho$ é a resistividade do material ($\\Omega \\cdot \\text{m}$), $L$ é o comprimento do fio e $A$ é a área da seção transversal. Fios mais longos têm maior resistência; fios mais grossos têm menor resistência.

**Resistores ôhmicos** são aqueles que obedecem à 1ª Lei de Ohm, ou seja, a relação entre $U$ e $i$ é linear. O gráfico $U \\times i$ é uma reta que passa pela origem, e a inclinação é a resistência $R$.`,
          },
          {
            titulo: 'Associação de Resistores em Série',
            tipo: 'texto',
            corpo: `Na associação em **série**, os resistores são ligados um após o outro, de modo que a mesma corrente percorre todos eles.

**Características:**
- A **corrente** é a mesma em todos os resistores: $i_1 = i_2 = i_3 = i$
- A **tensão total** se divide entre os resistores: $U_{total} = U_1 + U_2 + U_3$
- A tensão é maior no resistor de maior resistência

**Resistência equivalente:**

$$R_{eq} = R_1 + R_2 + R_3 + \\ldots$$

A resistência equivalente em série é sempre **maior** que qualquer resistor individual.

**Exemplo:** Três resistores de $4 \\text{ }\\Omega$, $6 \\text{ }\\Omega$ e $10 \\text{ }\\Omega$ em série:

$$R_{eq} = 4 + 6 + 10 = 20 \\text{ }\\Omega$$

Se a fonte fornece $U = 40 \\text{ V}$:

$$i = \\frac{U}{R_{eq}} = \\frac{40}{20} = 2 \\text{ A}$$

As tensões individuais: $U_1 = 2 \\times 4 = 8 \\text{ V}$, $U_2 = 2 \\times 6 = 12 \\text{ V}$, $U_3 = 2 \\times 10 = 20 \\text{ V}$. Soma: $8 + 12 + 20 = 40 \\text{ V}$ ✓`,
          },
          {
            titulo: 'Associação de Resistores em Paralelo',
            tipo: 'texto',
            corpo: `Na associação em **paralelo**, os resistores são ligados entre os mesmos dois pontos, de modo que todos ficam submetidos à mesma tensão.

**Características:**
- A **tensão** é a mesma em todos os resistores: $U_1 = U_2 = U_3 = U$
- A **corrente total** se divide entre os ramos: $i_{total} = i_1 + i_2 + i_3$
- A corrente é maior no resistor de menor resistência

**Resistência equivalente:**

$$\\frac{1}{R_{eq}} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\frac{1}{R_3} + \\ldots$$

A resistência equivalente em paralelo é sempre **menor** que o menor resistor individual.

**Caso especial — dois resistores em paralelo:**

$$R_{eq} = \\frac{R_1 \\cdot R_2}{R_1 + R_2}$$

**Caso especial — $n$ resistores iguais de valor $R$:**

$$R_{eq} = \\frac{R}{n}$$

**Exemplo:** Dois resistores de $6 \\text{ }\\Omega$ e $12 \\text{ }\\Omega$ em paralelo:

$$R_{eq} = \\frac{6 \\times 12}{6 + 12} = \\frac{72}{18} = 4 \\text{ }\\Omega$$`,
          },
          {
            titulo: 'Potência Elétrica',
            tipo: 'formula',
            corpo: `A **potência elétrica** ($P$) indica a taxa de consumo (ou dissipação) de energia por um dispositivo elétrico:

$$P = U \\cdot i$$

Combinando com a Lei de Ohm ($U = Ri$), obtemos formas equivalentes:

$$P = R \\cdot i^2 \\qquad P = \\frac{U^2}{R}$$

**Unidade:** Watt ($\\text{W}$), onde $1 \\text{ W} = 1 \\text{ J/s} = 1 \\text{ V} \\cdot \\text{A}$.

**Efeito Joule:** Toda a potência dissipada em um resistor se transforma em calor. É o princípio de funcionamento de chuveiros elétricos, ferros de passar e aquecedores.`,
          },
          {
            titulo: 'Consumo de Energia Elétrica e kWh',
            tipo: 'destaque',
            corpo: `O **consumo de energia** de um aparelho depende de sua potência e do tempo de uso:

$$E = P \\cdot \\Delta t$$

**Unidades práticas:**
- No SI: $E$ em Joules ($\\text{J}$), $P$ em Watts ($\\text{W}$), $\\Delta t$ em segundos ($\\text{s}$).
- Na conta de luz: $E$ em quilowatt-hora ($\\text{kWh}$), $P$ em quilowatts ($\\text{kW}$), $\\Delta t$ em horas ($\\text{h}$).

**Conversão:**

$$1 \\text{ kWh} = 1.000 \\text{ W} \\times 3.600 \\text{ s} = 3{,}6 \\times 10^6 \\text{ J}$$

**Como calcular o custo na conta de luz:**
1. Converta a potência para kW (divida por 1.000)
2. Multiplique pelo tempo de uso em horas
3. Multiplique pelo número de dias
4. Multiplique pela tarifa (R\\$/kWh)

**Exemplo:** Um chuveiro de $5.500 \\text{ W}$ usado por $20 \\text{ min/dia}$ durante $30 \\text{ dias}$, com tarifa de R\\$ 0,80/kWh:

$$E = 5{,}5 \\text{ kW} \\times \\frac{20}{60} \\text{ h} \\times 30 = 55 \\text{ kWh}$$

$$\\text{Custo} = 55 \\times 0{,}80 = \\text{R\\$} \\; 44{,}00$$`,
          },
          {
            titulo: 'Tabela de potências típicas de aparelhos',
            tipo: 'tabela',
            corpo: `| Aparelho | Potência típica | Uso médio diário |
|---|---|---|
| Lâmpada LED | $10 \\text{ W}$ | 6 h |
| Lâmpada incandescente | $60 \\text{ W}$ | 6 h |
| Televisor | $100 \\text{ W}$ | 5 h |
| Geladeira | $150 \\text{ W}$ | 10 h (ciclo) |
| Ferro de passar | $1.000 \\text{ W}$ | 1 h |
| Chuveiro elétrico | $5.500 \\text{ W}$ | 0,33 h (20 min) |
| Ar-condicionado | $1.400 \\text{ W}$ | 8 h |

> **Dica:** A troca de lâmpadas incandescentes por LED reduz o consumo em até 80%. Questões do vestibular frequentemente comparam a eficiência energética desses dispositivos.`,
          },
          {
            titulo: 'Exemplo resolvido — Circuito misto',
            tipo: 'exemplo',
            corpo: `**Problema:** No circuito abaixo, $R_1 = 4 \\text{ }\\Omega$ está em série com a associação em paralelo de $R_2 = 6 \\text{ }\\Omega$ e $R_3 = 12 \\text{ }\\Omega$. A fonte fornece $U = 24 \\text{ V}$. Determine: (a) a resistência equivalente total; (b) a corrente total; (c) a potência dissipada no circuito.

**Resolução:**

**(a) Resistência equivalente:**

Primeiro, resolvemos o paralelo de $R_2$ e $R_3$:

$$R_{23} = \\frac{R_2 \\cdot R_3}{R_2 + R_3} = \\frac{6 \\times 12}{6 + 12} = \\frac{72}{18} = 4 \\text{ }\\Omega$$

Depois, somamos com $R_1$ (série):

$$R_{eq} = R_1 + R_{23} = 4 + 4 = 8 \\text{ }\\Omega$$

**(b) Corrente total:**

$$i = \\frac{U}{R_{eq}} = \\frac{24}{8} = 3 \\text{ A}$$

**(c) Potência total:**

$$P = U \\cdot i = 24 \\times 3 = 72 \\text{ W}$$

**Verificação alternativa:** $P = \\frac{U^2}{R_{eq}} = \\frac{576}{8} = 72 \\text{ W}$ ✓`,
          },
          {
            titulo: 'Exemplo resolvido — Consumo de energia',
            tipo: 'exemplo',
            corpo: `**Problema:** Uma família utiliza 5 lâmpadas de $12 \\text{ W}$ (LED) durante $6 \\text{ horas por dia}$ e um ar-condicionado de $1.400 \\text{ W}$ durante $8 \\text{ horas por dia}$. Calcule o consumo mensal em kWh (30 dias) e o custo com tarifa de R\\$ 0,75/kWh.

**Resolução:**

**Lâmpadas:**

$$E_L = 5 \\times 0{,}012 \\text{ kW} \\times 6 \\text{ h} \\times 30 \\text{ dias} = 10{,}8 \\text{ kWh}$$

**Ar-condicionado:**

$$E_{AC} = 1{,}4 \\text{ kW} \\times 8 \\text{ h} \\times 30 \\text{ dias} = 336 \\text{ kWh}$$

**Total:**

$$E_{total} = 10{,}8 + 336 = 346{,}8 \\text{ kWh}$$

**Custo:**

$$\\text{Custo} = 346{,}8 \\times 0{,}75 = \\text{R\\$} \\; 260{,}10$$

> **Conclusão:** O ar-condicionado é responsável por 97% do consumo. Questões sobre eficiência energética são frequentes no ENEM e vestibulares.`,
          },
        ],
        imagemDescricao: 'Esquema de circuitos em série e em paralelo com fórmulas de resistência equivalente',
        formulasChave: [
          'U = R × i (1ª Lei de Ohm)',
          'P = U × i (Potência elétrica)',
          'P = R × i² (Potência em função da resistência e corrente)',
          'Req(série) = R₁ + R₂ + R₃ + ...',
          '1/Req(paralelo) = 1/R₁ + 1/R₂ + 1/R₃ + ...',
          'E = P × Δt (Energia consumida)',
        ],
        dicasProva: [
          'Identifique se o circuito é série ou paralelo antes de iniciar os cálculos',
          'Em série, a corrente é a mesma em todos os resistores; em paralelo, a tensão é a mesma',
          'Para calcular consumo em kWh: converta a potência para kW e o tempo para horas',
          'A Lei de Ohm (U = Ri) é a base da maioria dos problemas de eletrodinâmica',
        ],
        errosComuns: [
          'Confundir corrente elétrica (i, em Ampere) com tensão (U, em Volt)',
          'Somar resistências em paralelo como se fossem em série',
          'Esquecer de converter unidades (mA para A, kΩ para Ω) antes dos cálculos',
          'Trocar as fórmulas de associação em série (soma direta) e paralelo (inverso da soma dos inversos)',
        ],
        exemplosResolvidos: [
          {
            enunciado: 'Um resistor de 10 Ω é submetido a uma tensão de 20 V. Qual a corrente elétrica que o atravessa?',
            passos: [
              'Dados: R = 10 Ω, U = 20 V',
              'Lei de Ohm: U = R × i → i = U / R',
              'i = 20 / 10 = 2 A',
            ],
            resposta: 'A corrente elétrica no resistor é 2 A.',
          },
          {
            enunciado: 'Dois resistores de 6 Ω estão associados em paralelo. Qual a resistência equivalente?',
            passos: [
              '1/Req = 1/R₁ + 1/R₂ = 1/6 + 1/6',
              '1/Req = 2/6 = 1/3',
              'Req = 3 Ω',
            ],
            resposta: 'A resistência equivalente da associação em paralelo é 3 Ω.',
          },
        ],
        exercicios: [
          {
            id: 'fis-elet-1',
            enunciado: 'Pela Lei de Ohm, a corrente elétrica em um resistor de 5 Ω submetido a uma tensão de 10 V é:',
            alternativas: ['0,5 A', '1 A', '2 A', '5 A', '50 A'],
            respostaCorreta: 2,
            explicacao: 'Aplicando U = R × i → i = U/R = 10/5 = 2 A. A corrente é diretamente proporcional à tensão e inversamente proporcional à resistência.',
            dificuldade: 'facil',
          },
          {
            id: 'fis-elet-2',
            enunciado: 'Três resistores de 12 Ω associados em série possuem resistência equivalente de:',
            alternativas: ['4 Ω', '12 Ω', '24 Ω', '36 Ω', '48 Ω'],
            respostaCorreta: 3,
            explicacao: 'Em série, Req = R₁ + R₂ + R₃ = 12 + 12 + 12 = 36 Ω. Na associação em série, a resistência equivalente é sempre maior que qualquer resistor individual.',
            dificuldade: 'facil',
          },
          {
            id: 'fis-elet-3',
            enunciado: 'Um chuveiro de 5.500 W ligado por 15 minutos (0,25 h) consome uma energia de:',
            alternativas: ['0,825 kWh', '1,375 kWh', '5,5 kWh', '22 kWh', '82,5 kWh'],
            respostaCorreta: 1,
            explicacao: 'E = P × Δt. Convertendo: P = 5.500 W = 5,5 kW. E = 5,5 × 0,25 = 1,375 kWh. Para calcular o custo na conta de luz, basta multiplicar pelo valor do kWh cobrado pela concessionária.',
            dificuldade: 'medio',
          },
          {
            id: 'fis-elet-4',
            enunciado: 'Em um circuito com resistores associados em paralelo, a grandeza que permanece igual em todos os resistores é:',
            alternativas: ['Corrente elétrica', 'Resistência', 'Potência dissipada', 'Tensão (ddp)', 'Carga elétrica'],
            respostaCorreta: 3,
            explicacao: 'Na associação em paralelo, todos os resistores estão submetidos à mesma diferença de potencial (tensão). A corrente se divide entre os ramos, sendo maior no resistor de menor resistência.',
            dificuldade: 'facil',
          },
          {
            id: 'fis-elet-5',
            enunciado: 'A unidade de potência elétrica no Sistema Internacional (SI) é o:',
            alternativas: ['Ampere (A)', 'Volt (V)', 'Ohm (Ω)', 'Watt (W)', 'Coulomb (C)'],
            respostaCorreta: 3,
            explicacao: 'O Watt (W) é a unidade de potência no SI. 1 W = 1 J/s = 1 V × 1 A. As demais unidades correspondem a: Ampere (corrente), Volt (tensão), Ohm (resistência) e Coulomb (carga elétrica).',
            dificuldade: 'facil',
          },
        ],
      },
    },
    {
      id: 'termologia',
      titulo: 'Termologia',
      peso: 20,
      conteudo: {
        resumo: 'Escalas termométricas, calorimetria, calor sensível e latente, e dilatação térmica.',
        explicacao:
          'A Termologia estuda os fenômenos relacionados ao calor e à temperatura.\n\nEscalas termométricas:\n• Celsius (°C): 0° (fusão da água) a 100° (ebulição)\n• Fahrenheit (°F): 32° (fusão) a 212° (ebulição)\n• Kelvin (K): 273 (fusão) a 373 (ebulição). Zero absoluto = 0 K = -273 °C\n\nConversão: °C/5 = (°F - 32)/9 = (K - 273)/5\n\nCalorimetria:\n• Calor sensível: Q = m × c × ΔT (varia a temperatura, sem mudança de estado)\n• Calor latente: Q = m × L (mudança de estado, temperatura constante)\n• Equilíbrio térmico: Q(cedido) + Q(recebido) = 0\n\nDilatação térmica:\n• Linear: ΔL = L₀ × α × ΔT\n• Superficial: ΔA = A₀ × β × ΔT (β = 2α)\n• Volumétrica: ΔV = V₀ × γ × ΔT (γ = 3α)',
        secoes: [
          {
            titulo: 'Introdução à Termologia',
            tipo: 'texto',
            corpo: `A **Termologia** é o ramo da Física que estuda os fenômenos relacionados ao calor, à temperatura e às suas consequências sobre os corpos. Com peso de 20% na prova de Física da UNIVESP, requer domínio de conversões de escalas, cálculos de calorimetria e dilatação térmica.

**Conceitos-chave que você precisa distinguir:**

- **Temperatura**: grandeza que mede o grau de agitação das moléculas de um corpo. Quanto maior a agitação, maior a temperatura. É medida em °C, °F ou K.
- **Calor**: energia térmica em trânsito, que flui espontaneamente do corpo de maior temperatura para o de menor temperatura. É medido em calorias (cal) ou Joules (J).
- **Equilíbrio térmico**: estado atingido quando dois corpos em contato alcançam a mesma temperatura, cessando o fluxo de calor.

> **Erro comum:** Calor não é algo que um corpo "possui". Calor é energia em trânsito. O corpo possui energia interna (ou térmica).`,
          },
          {
            titulo: 'Escalas Termométricas',
            tipo: 'texto',
            corpo: `Existem três escalas termométricas principais utilizadas em Física:

**Celsius (°C)** — escala mais utilizada no Brasil e na maioria dos países:
- Ponto de fusão da água: $0 \\text{ °C}$
- Ponto de ebulição da água: $100 \\text{ °C}$

**Fahrenheit (°F)** — usada nos Estados Unidos:
- Ponto de fusão da água: $32 \\text{ °F}$
- Ponto de ebulição da água: $212 \\text{ °F}$

**Kelvin (K)** — escala absoluta, usada em cálculos científicos:
- Ponto de fusão da água: $273 \\text{ K}$
- Ponto de ebulição da água: $373 \\text{ K}$
- **Zero absoluto**: $0 \\text{ K} = -273 \\text{ °C}$ (menor temperatura possível, onde a agitação molecular é mínima)

> **Nota:** A escala Kelvin não usa o símbolo de grau (°). Escreve-se $300 \\text{ K}$, e não $300 \\text{ °K}$.`,
          },
          {
            titulo: 'Conversão entre Escalas Termométricas',
            tipo: 'formula',
            corpo: `A relação fundamental entre as três escalas é:

$$\\frac{T_C}{5} = \\frac{T_F - 32}{9} = \\frac{T_K - 273}{5}$$

**Fórmulas isoladas mais usadas:**

**Celsius → Fahrenheit:**

$$T_F = \\frac{9}{5} \\cdot T_C + 32$$

**Fahrenheit → Celsius:**

$$T_C = \\frac{5}{9} \\cdot (T_F - 32)$$

**Celsius → Kelvin:**

$$T_K = T_C + 273$$

**Kelvin → Celsius:**

$$T_C = T_K - 273$$

**Temperaturas notáveis:**

| Celsius | Fahrenheit | Kelvin | Descrição |
|---|---|---|---|
| $-273$ | $-459{,}4$ | $0$ | Zero absoluto |
| $0$ | $32$ | $273$ | Fusão da água |
| $36{,}5$ | $97{,}7$ | $309{,}5$ | Corpo humano |
| $100$ | $212$ | $373$ | Ebulição da água |

> **Dica:** A temperatura em que Celsius e Fahrenheit coincidem é $-40$: $-40 \\text{ °C} = -40 \\text{ °F}$.`,
          },
          {
            titulo: 'Calor Sensível',
            tipo: 'texto',
            corpo: `O **calor sensível** é a energia térmica trocada por um corpo que provoca variação de temperatura, sem mudança de estado físico.

$$Q = m \\cdot c \\cdot \\Delta T$$

onde:
- $Q$: quantidade de calor (cal ou J)
- $m$: massa do corpo (g ou kg)
- $c$: calor específico do material (cal/g·°C ou J/kg·°C)
- $\\Delta T = T_f - T_i$: variação de temperatura

**Calor específico** ($c$) indica quanto calor 1 g de uma substância precisa absorver para aumentar 1 °C. Quanto maior o calor específico, mais difícil é variar a temperatura.

**Calores específicos importantes:**

| Substância | $c$ (cal/g·°C) |
|---|---|
| Água | $1{,}0$ |
| Gelo | $0{,}5$ |
| Alumínio | $0{,}22$ |
| Ferro | $0{,}11$ |
| Cobre | $0{,}09$ |

**Convenção de sinais:**
- $Q > 0$: o corpo **absorve** calor (aquecimento)
- $Q < 0$: o corpo **cede** calor (resfriamento)

> **Por que a água demora a esquentar e esfriar?** Porque seu calor específico ($c = 1 \\text{ cal/g·°C}$) é muito alto comparado ao dos metais. Isso explica a amenização climática em cidades litorâneas.`,
          },
          {
            titulo: 'Calor Latente e Mudanças de Estado',
            tipo: 'texto',
            corpo: `O **calor latente** é a energia térmica trocada durante uma mudança de estado físico, onde a temperatura permanece constante.

$$Q = m \\cdot L$$

onde:
- $Q$: quantidade de calor (cal ou J)
- $m$: massa da substância (g ou kg)
- $L$: calor latente de mudança de estado (cal/g ou J/kg)

**Mudanças de estado da água:**

| Mudança de estado | Nome | $L$ (cal/g) |
|---|---|---|
| Sólido → Líquido | Fusão | $80$ |
| Líquido → Gasoso | Vaporização | $540$ |
| Líquido → Sólido | Solidificação | $-80$ |
| Gasoso → Líquido | Condensação | $-540$ |

**Curva de aquecimento da água** (partindo do gelo a $-20 \\text{ °C}$):

1. **Aquecimento do gelo** ($-20$ a $0 \\text{ °C}$): $Q = m \\cdot c_{gelo} \\cdot \\Delta T$ — temperatura sobe
2. **Fusão** ($0 \\text{ °C}$, constante): $Q = m \\cdot L_f$ — patamar horizontal no gráfico
3. **Aquecimento da água** ($0$ a $100 \\text{ °C}$): $Q = m \\cdot c_{agua} \\cdot \\Delta T$ — temperatura sobe
4. **Vaporização** ($100 \\text{ °C}$, constante): $Q = m \\cdot L_v$ — patamar horizontal no gráfico
5. **Aquecimento do vapor** (acima de $100 \\text{ °C}$): temperatura sobe novamente

> **Ponto crucial:** Durante a mudança de estado (patamares 2 e 4), **a temperatura NÃO varia**. Todo o calor é usado para romper (ou formar) ligações intermoleculares.`,
          },
          {
            titulo: 'Equilíbrio Térmico e Calorimetria',
            tipo: 'destaque',
            corpo: `Quando dois ou mais corpos a temperaturas diferentes são colocados em contato térmico (em um sistema isolado), o calor flui do mais quente para o mais frio até que todos atinjam a mesma temperatura final ($T_f$).

**Princípio da Calorimetria:**

$$\\sum Q = 0 \\implies Q_{cedido} + Q_{recebido} = 0$$

O calor cedido pelo corpo quente (negativo) é igual em módulo ao calor recebido pelo corpo frio (positivo).

**Método de resolução:**

1. Atribua variáveis: massas, calores específicos e temperaturas iniciais de cada corpo.
2. Escreva $Q$ para cada corpo: $Q = mc(T_f - T_i)$.
3. Some todos os $Q$ e iguale a zero.
4. Resolva para $T_f$.

**Exemplo genérico:** Corpo quente (massa $m_1$, calor específico $c_1$, temperatura $T_1$) é misturado com corpo frio ($m_2$, $c_2$, $T_2$):

$$m_1 \\cdot c_1 \\cdot (T_f - T_1) + m_2 \\cdot c_2 \\cdot (T_f - T_2) = 0$$

> **Cuidado:** Se houver mudança de estado durante o processo, é necessário incluir o calor latente ($Q = mL$) na equação.`,
          },
          {
            titulo: 'Dilatação Térmica',
            tipo: 'texto',
            corpo: `Quando um corpo é aquecido, suas moléculas vibram com maior amplitude, fazendo com que o corpo se expanda. A dilatação térmica pode ser linear, superficial ou volumétrica.

**Dilatação Linear** (em uma dimensão — comprimento):

$$\\Delta L = L_0 \\cdot \\alpha \\cdot \\Delta T$$

onde $L_0$ é o comprimento inicial, $\\alpha$ é o coeficiente de dilatação linear do material e $\\Delta T$ é a variação de temperatura.

O comprimento final: $L_f = L_0 + \\Delta L = L_0 (1 + \\alpha \\cdot \\Delta T)$

**Dilatação Superficial** (em duas dimensões — área):

$$\\Delta A = A_0 \\cdot \\beta \\cdot \\Delta T$$

onde $\\beta = 2\\alpha$ é o coeficiente de dilatação superficial.

**Dilatação Volumétrica** (em três dimensões — volume):

$$\\Delta V = V_0 \\cdot \\gamma \\cdot \\Delta T$$

onde $\\gamma = 3\\alpha$ é o coeficiente de dilatação volumétrica.

**Relação entre os coeficientes:**

$$\\beta = 2\\alpha \\qquad \\gamma = 3\\alpha$$

**Coeficientes de dilatação linear de alguns materiais:**

| Material | $\\alpha$ ($\\text{°C}^{-1}$) |
|---|---|
| Alumínio | $22 \\times 10^{-6}$ |
| Ferro/Aço | $12 \\times 10^{-6}$ |
| Cobre | $17 \\times 10^{-6}$ |
| Vidro comum | $9 \\times 10^{-6}$ |
| Concreto | $12 \\times 10^{-6}$ |

> **Aplicações práticas:** Juntas de dilatação em pontes e trilhos de trem, lâminas bimetálicas em termostatos, encaixe de peças por aquecimento na indústria.`,
          },
          {
            titulo: 'Dilatação de líquidos',
            tipo: 'importante',
            corpo: `Líquidos não possuem forma própria, por isso só faz sentido falar em dilatação **volumétrica** para líquidos.

**Dilatação aparente vs. dilatação real:**

Quando aquecemos um líquido dentro de um recipiente, o recipiente também dilata. O que observamos é a **dilatação aparente**:

$$\\Delta V_{aparente} = \\Delta V_{liquido} - \\Delta V_{recipiente}$$

$$\\gamma_{aparente} = \\gamma_{liquido} - \\gamma_{recipiente}$$

**Anomalia da água:** A água apresenta um comportamento anômalo entre $0 \\text{ °C}$ e $4 \\text{ °C}$: nesse intervalo, ela se **contrai** ao ser aquecida (diminui de volume). A densidade máxima da água ocorre a $4 \\text{ °C}$. Acima de $4 \\text{ °C}$, a dilatação é normal.

> **Consequência ecológica:** Em lagos de regiões frias, a camada superficial congela, mas o fundo permanece a $4 \\text{ °C}$ (densidade máxima), permitindo a sobrevivência da vida aquática.`,
          },
          {
            titulo: 'Exemplo resolvido — Conversão de escalas',
            tipo: 'exemplo',
            corpo: `**Problema:** Um termômetro clínico registra a temperatura corporal de um paciente como $38{,}5 \\text{ °C}$. Converta essa temperatura para Fahrenheit e Kelvin.

**Resolução:**

**Celsius → Fahrenheit:**

$$T_F = \\frac{9}{5} \\cdot T_C + 32 = \\frac{9}{5} \\times 38{,}5 + 32$$

$$T_F = 1{,}8 \\times 38{,}5 + 32 = 69{,}3 + 32 = 101{,}3 \\text{ °F}$$

**Celsius → Kelvin:**

$$T_K = T_C + 273 = 38{,}5 + 273 = 311{,}5 \\text{ K}$$

**Resposta:** $38{,}5 \\text{ °C} = 101{,}3 \\text{ °F} = 311{,}5 \\text{ K}$.`,
          },
          {
            titulo: 'Exemplo resolvido — Calorimetria',
            tipo: 'exemplo',
            corpo: `**Problema:** Em um calorímetro ideal, misturam-se $200 \\text{ g}$ de água a $80 \\text{ °C}$ com $300 \\text{ g}$ de água a $20 \\text{ °C}$. O calor específico da água é $c = 1 \\text{ cal/g·°C}$. Determine a temperatura de equilíbrio térmico.

**Resolução passo a passo:**

1. **Dados:** $m_1 = 200 \\text{ g}$, $T_1 = 80 \\text{ °C}$ (quente); $m_2 = 300 \\text{ g}$, $T_2 = 20 \\text{ °C}$ (fria); $c = 1$.
2. **Equação do equilíbrio:** $Q_{cedido} + Q_{recebido} = 0$

$$m_1 \\cdot c \\cdot (T_f - T_1) + m_2 \\cdot c \\cdot (T_f - T_2) = 0$$

3. **Substituir (simplificando $c$):**

$$200 \\cdot (T_f - 80) + 300 \\cdot (T_f - 20) = 0$$

$$200 T_f - 16.000 + 300 T_f - 6.000 = 0$$

$$500 T_f = 22.000$$

$$T_f = 44 \\text{ °C}$$

**Resposta:** A temperatura de equilíbrio é $44 \\text{ °C}$.

> **Verificação:** $Q_1 = 200 \\times 1 \\times (44 - 80) = -7.200 \\text{ cal}$ (cedeu). $Q_2 = 300 \\times 1 \\times (44 - 20) = +7.200 \\text{ cal}$ (recebeu). Soma = 0 ✓`,
          },
          {
            titulo: 'Exemplo resolvido — Dilatação térmica',
            tipo: 'exemplo',
            corpo: `**Problema:** Uma barra de aço tem $2 \\text{ m}$ de comprimento a $20 \\text{ °C}$. Sabendo que o coeficiente de dilatação linear do aço é $\\alpha = 12 \\times 10^{-6} \\text{ °C}^{-1}$, calcule: (a) a variação de comprimento quando aquecida a $120 \\text{ °C}$; (b) o comprimento final.

**Resolução:**

**Dados:** $L_0 = 2 \\text{ m}$, $T_i = 20 \\text{ °C}$, $T_f = 120 \\text{ °C}$, $\\alpha = 12 \\times 10^{-6} \\text{ °C}^{-1}$.

**(a) Variação de comprimento:**

$$\\Delta T = 120 - 20 = 100 \\text{ °C}$$

$$\\Delta L = L_0 \\cdot \\alpha \\cdot \\Delta T = 2 \\times 12 \\times 10^{-6} \\times 100$$

$$\\Delta L = 2{,}4 \\times 10^{-3} \\text{ m} = 2{,}4 \\text{ mm}$$

**(b) Comprimento final:**

$$L_f = L_0 + \\Delta L = 2 + 0{,}0024 = 2{,}0024 \\text{ m}$$

**Resposta:** (a) A barra dilata $2{,}4 \\text{ mm}$; (b) O comprimento final é $2{,}0024 \\text{ m}$.

> **Observação:** Embora a dilatação pareça pequena para uma barra, em estruturas grandes como trilhos de trem ($12 \\text{ m}$ cada) ou pontes ($\\sim 100 \\text{ m}$), ela pode chegar a centímetros, justificando as juntas de dilatação.`,
          },
        ],
        imagemDescricao: 'Comparação das escalas Celsius, Fahrenheit e Kelvin com pontos de fusão e ebulição da água',
        formulasChave: [
          'Q = m × c × ΔT (calor sensível)',
          'Q = m × L (calor latente)',
          '°C = (°F - 32) × 5/9 (conversão Fahrenheit → Celsius)',
          'K = °C + 273 (conversão Celsius → Kelvin)',
          'ΔL = L₀ × α × ΔT (dilatação linear)',
        ],
        dicasProva: [
          'Na conversão de escalas, use a relação °C/5 = (°F - 32)/9 = (K - 273)/5',
          'Durante a mudança de estado físico, a temperatura NÃO varia — use Q = mL',
          'No equilíbrio térmico, calor cedido pelo corpo quente = calor recebido pelo corpo frio',
          'Questões de dilatação pedem atenção ao coeficiente correto (α linear, β superficial, γ volumétrico)',
        ],
        errosComuns: [
          'Esquecer que durante a mudança de estado a temperatura permanece constante (patamar no gráfico)',
          'Confundir calor sensível (Q = mcΔT) com calor latente (Q = mL)',
          'Não converter Celsius para Kelvin quando a fórmula exige temperatura absoluta (K = °C + 273)',
          'Errar sinais no equilíbrio térmico — calor cedido é negativo, calor recebido é positivo',
        ],
        exemplosResolvidos: [
          {
            enunciado: 'Converta a temperatura de 50 °C para a escala Fahrenheit.',
            passos: [
              'Fórmula: °C/5 = (°F - 32)/9',
              '50/5 = (°F - 32)/9',
              '10 = (°F - 32)/9 → °F - 32 = 90',
              '°F = 90 + 32 = 122 °F',
            ],
            resposta: '50 °C equivalem a 122 °F.',
          },
        ],
        exercicios: [
          {
            id: 'fis-ter-1',
            enunciado: 'A temperatura de 0 °C, na escala Kelvin, corresponde a:',
            alternativas: ['0 K', '100 K', '173 K', '273 K', '373 K'],
            respostaCorreta: 3,
            explicacao: 'A conversão de Celsius para Kelvin é K = °C + 273. Portanto, 0 °C = 0 + 273 = 273 K. O zero Kelvin (0 K = -273 °C) é o zero absoluto, menor temperatura possível.',
            dificuldade: 'facil',
          },
          {
            id: 'fis-ter-2',
            enunciado: 'Para aquecer 500 g de água (c = 1 cal/g·°C) de 20 °C para 80 °C, a quantidade de calor necessária é:',
            alternativas: ['3.000 cal', '10.000 cal', '30.000 cal', '40.000 cal', '60.000 cal'],
            respostaCorreta: 2,
            explicacao: 'Q = m × c × ΔT = 500 × 1 × (80 - 20) = 500 × 60 = 30.000 cal. O calor específico da água (1 cal/g·°C) significa que 1 g de água precisa de 1 cal para aumentar 1 °C.',
            dificuldade: 'facil',
          },
          {
            id: 'fis-ter-3',
            enunciado: 'Durante a fusão do gelo a 0 °C, a temperatura do sistema:',
            alternativas: [
              'Aumenta gradualmente até 100 °C',
              'Diminui até atingir o zero absoluto',
              'Permanece constante em 0 °C durante toda a fusão',
              'Oscila entre valores positivos e negativos',
              'Depende da pressão atmosférica local',
            ],
            respostaCorreta: 2,
            explicacao: 'Durante a mudança de estado (fusão), o calor fornecido é utilizado para romper as ligações entre as moléculas, não para aumentar a temperatura. Por isso a temperatura permanece constante em 0 °C até todo o gelo derreter.',
            dificuldade: 'facil',
          },
          {
            id: 'fis-ter-4',
            enunciado: 'A dilatação linear de uma barra metálica depende de:',
            alternativas: [
              'Apenas do comprimento inicial da barra',
              'Apenas da variação de temperatura sofrida',
              'Do comprimento inicial, do coeficiente de dilatação linear e da variação de temperatura',
              'Apenas do material da barra',
              'Da massa da barra metálica',
            ],
            respostaCorreta: 2,
            explicacao: 'Pela fórmula ΔL = L₀ × α × ΔT, a dilatação linear depende de três fatores: comprimento inicial (L₀), coeficiente de dilatação linear do material (α) e variação de temperatura (ΔT).',
            dificuldade: 'facil',
          },
          {
            id: 'fis-ter-5',
            enunciado: 'No equilíbrio térmico entre dois corpos com temperaturas diferentes:',
            alternativas: [
              'A temperatura do corpo quente continua aumentando',
              'Os dois corpos atingem a mesma temperatura final',
              'O corpo frio esfria ainda mais',
              'A energia térmica total é destruída',
              'O calor flui espontaneamente do frio para o quente',
            ],
            respostaCorreta: 1,
            explicacao: 'O calor flui espontaneamente do corpo de maior temperatura para o de menor temperatura até que ambos atinjam a mesma temperatura final (equilíbrio térmico). A energia total é conservada: Q(cedido) + Q(recebido) = 0.',
            dificuldade: 'facil',
          },
        ],
      },
    },
    {
      id: 'optica-ondulatoria',
      titulo: 'Óptica e Ondulatória',
      peso: 10,
      conteudo: {
        resumo: 'Espelhos, lentes, reflexão, refração, equação dos espelhos e fundamentos de ondas.',
        explicacao:
          'A Óptica estuda o comportamento da luz e a Ondulatória estuda a propagação das ondas.\n\nÓptica geométrica:\n• Reflexão: ângulo de incidência = ângulo de reflexão\n• Espelhos planos: imagem virtual, direita e do mesmo tamanho\n• Espelhos esféricos: côncavos (convergentes) e convexos (divergentes)\n• Equação dos espelhos: 1/f = 1/p + 1/p\' (f = focal, p = objeto, p\' = imagem)\n• Refração: mudança de direção ao trocar de meio. Lei de Snell: n₁ × sen(θ₁) = n₂ × sen(θ₂)\n• Lentes: convergentes (bordas finas) e divergentes (bordas grossas)\n\nOndulatória:\n• Onda: perturbação que transporta energia sem transportar matéria\n• Equação fundamental: v = λ × f (velocidade = comprimento de onda × frequência)\n• Ondas mecânicas: necessitam de meio material (som)\n• Ondas eletromagnéticas: propagam-se no vácuo (luz)\n• Transversais: vibração perpendicular à propagação\n• Longitudinais: vibração na mesma direção da propagação',
        secoes: [
          {
            titulo: 'Introdução à Óptica e Ondulatória',
            tipo: 'texto',
            corpo: `A **Óptica** estuda o comportamento da luz e os fenômenos luminosos (reflexão, refração, formação de imagens), enquanto a **Ondulatória** estuda as ondas e sua propagação. Embora represente 10% da prova de Física da UNIVESP, esses temas são recorrentes e seus conceitos aparecem em questões interdisciplinares.

**Óptica Geométrica** trata a luz como raios que se propagam em linha reta em meios homogêneos e transparentes. Seus princípios fundamentais são:

1. **Propagação retilínea**: a luz se propaga em linha reta em meios homogêneos.
2. **Reversibilidade dos raios**: o caminho da luz pode ser percorrido em ambos os sentidos.
3. **Independência dos raios**: raios luminosos que se cruzam não alteram a trajetória uns dos outros.`,
          },
          {
            titulo: 'Reflexão da Luz',
            tipo: 'texto',
            corpo: `A **reflexão** ocorre quando a luz incide sobre uma superfície e retorna ao meio de origem.

**Leis da Reflexão:**

1. O raio incidente, a reta normal à superfície e o raio refletido estão no **mesmo plano**.
2. O ângulo de incidência ($\\hat{i}$) é **igual** ao ângulo de reflexão ($\\hat{r}$):

$$\\hat{i} = \\hat{r}$$

Os ângulos são medidos em relação à **reta normal** (perpendicular) à superfície no ponto de incidência, e não em relação à superfície.

**Tipos de reflexão:**
- **Reflexão regular (especular)**: ocorre em superfícies lisas e polidas (espelhos). Os raios refletidos são paralelos entre si.
- **Reflexão difusa**: ocorre em superfícies rugosas. Os raios refletidos se espalham em várias direções. É a reflexão difusa que nos permite ver os objetos ao nosso redor.`,
          },
          {
            titulo: 'Espelhos Planos e Esféricos',
            tipo: 'texto',
            corpo: `**Espelhos Planos:**

A imagem formada por um espelho plano é:
- **Virtual** (formada pelo prolongamento dos raios refletidos, atrás do espelho)
- **Direita** (mesma orientação do objeto)
- **De mesmo tamanho** do objeto
- **Simétrica**: a distância da imagem ao espelho é igual à distância do objeto ao espelho

---

**Espelhos Esféricos:**

Espelhos esféricos são superfícies refletoras com formato de uma calota esférica. Podem ser:

- **Côncavo** (superfície refletora interna): convergente — concentra os raios em um foco real.
- **Convexo** (superfície refletora externa): divergente — espalha os raios; o foco é virtual (atrás do espelho).

**Elementos geométricos:**
- **Centro de curvatura** ($C$): centro da esfera que origina o espelho.
- **Vértice** ($V$): ponto central do espelho.
- **Foco** ($F$): ponto médio entre $C$ e $V$.
- **Raio de curvatura** ($R$) e **distância focal** ($f$): $f = \\frac{R}{2}$

**Convenção de sinais (referencial de Gauss):**
- Distâncias reais (mesmo lado do objeto): **positivas**
- Distâncias virtuais (lado oposto ao objeto): **negativas**
- Espelho côncavo: $f > 0$; espelho convexo: $f < 0$`,
          },
          {
            titulo: 'Equação de Gauss e Aumento Linear',
            tipo: 'formula',
            corpo: `**Equação dos Espelhos Esféricos (Equação de Gauss):**

$$\\frac{1}{f} = \\frac{1}{p} + \\frac{1}{p'}$$

onde:
- $f$: distância focal
- $p$: distância do objeto ao espelho
- $p'$: distância da imagem ao espelho

**Aumento Linear Transversal:**

$$A = -\\frac{p'}{p} = \\frac{i}{o}$$

onde $i$ é o tamanho da imagem e $o$ é o tamanho do objeto.

**Interpretação do aumento:**
- $|A| > 1$: imagem maior que o objeto
- $|A| = 1$: imagem do mesmo tamanho
- $|A| < 1$: imagem menor que o objeto
- $A > 0$: imagem direita
- $A < 0$: imagem invertida

**Resumo para espelhos côncavos (objeto real):**

| Posição do objeto | Imagem | Característica |
|---|---|---|
| Antes de $C$ | Real, invertida, menor | Entre $F$ e $C$ |
| Em $C$ | Real, invertida, mesmo tamanho | Em $C$ |
| Entre $C$ e $F$ | Real, invertida, maior | Além de $C$ |
| Em $F$ | Imagem no infinito | Imprópria |
| Entre $F$ e $V$ | Virtual, direita, maior | Atrás do espelho |

**Espelhos convexos** sempre formam imagens virtuais, direitas e menores (usados em retrovisores e segurança).`,
          },
          {
            titulo: 'Refração da Luz e Lei de Snell',
            tipo: 'texto',
            corpo: `A **refração** ocorre quando a luz passa de um meio para outro com **índice de refração diferente**, sofrendo mudança de velocidade e, geralmente, de direção.

**Índice de refração** ($n$): razão entre a velocidade da luz no vácuo e no meio:

$$n = \\frac{c}{v}$$

onde $c = 3 \\times 10^8 \\text{ m/s}$ é a velocidade da luz no vácuo. Quanto maior $n$, mais "denso opticamente" é o meio e menor a velocidade da luz nele.

**Índices de refração comuns:**

| Meio | $n$ |
|---|---|
| Vácuo | $1{,}00$ |
| Ar | $\\approx 1{,}00$ |
| Água | $1{,}33$ |
| Vidro | $1{,}50$ |
| Diamante | $2{,}42$ |

**Lei de Snell-Descartes:**

$$n_1 \\cdot \\sin\\theta_1 = n_2 \\cdot \\sin\\theta_2$$

onde $\\theta_1$ é o ângulo de incidência e $\\theta_2$ é o ângulo de refração, ambos medidos em relação à normal.

**Consequências:**
- Da um meio menos refringente ($n_1 < n_2$) para um mais refringente: o raio se aproxima da normal ($\\theta_2 < \\theta_1$).
- De um meio mais refringente ($n_1 > n_2$) para um menos refringente: o raio se afasta da normal ($\\theta_2 > \\theta_1$).

**Reflexão total interna:** Ocorre quando a luz tenta passar de um meio mais refringente para um menos refringente com ângulo de incidência maior que o **ângulo limite** ($\\theta_L$):

$$\\sin\\theta_L = \\frac{n_2}{n_1} \\quad (n_1 > n_2)$$

A reflexão total é o princípio de funcionamento das **fibras ópticas**.`,
          },
          {
            titulo: 'Lentes Delgadas',
            tipo: 'texto',
            corpo: `As **lentes** são meios transparentes limitados por duas superfícies curvas (ou uma curva e uma plana). As lentes delgadas se classificam em:

- **Convergentes** (bordas finas): concentram os raios em um foco real. Símbolo: uma seta dupla apontando para fora (↕).
- **Divergentes** (bordas grossas): espalham os raios; o foco é virtual. Símbolo: setas duplas apontando para dentro.

**Equação das lentes delgadas** (mesma forma da equação de Gauss):

$$\\frac{1}{f} = \\frac{1}{p} + \\frac{1}{p'}$$

**Vergência (grau da lente):**

$$V = \\frac{1}{f}$$

onde $f$ é a distância focal em metros e $V$ é medida em **dioptrias** ($\\text{di}$), popularmente chamadas de "graus".

- Lente convergente: $f > 0$, $V > 0$
- Lente divergente: $f < 0$, $V < 0$

**Correção de defeitos visuais:**
- **Miopia** (foco antes da retina): corrigida com lente divergente ($V < 0$)
- **Hipermetropia** (foco atrás da retina): corrigida com lente convergente ($V > 0$)

> **Exemplo:** Uma receita de óculos indica $-2{,}0 \\text{ di}$ (graus). A distância focal é $f = \\frac{1}{-2} = -0{,}5 \\text{ m} = -50 \\text{ cm}$ (lente divergente para miopia).`,
          },
          {
            titulo: 'Ondas — Conceitos Fundamentais',
            tipo: 'texto',
            corpo: `Uma **onda** é uma perturbação que se propaga transportando **energia** sem transportar **matéria**.

**Classificação quanto à natureza:**
- **Ondas mecânicas**: necessitam de um meio material para se propagar (som, ondas na água, ondas em cordas).
- **Ondas eletromagnéticas**: não necessitam de meio, propagam-se no vácuo (luz, rádio, micro-ondas, raios X).

**Classificação quanto à direção de vibração:**
- **Transversais**: a vibração é **perpendicular** à direção de propagação (ondas em cordas, luz).
- **Longitudinais**: a vibração é **paralela** à direção de propagação (som).

**Grandezas de uma onda:**
- **Amplitude** ($A$): distância máxima em relação à posição de equilíbrio. Relaciona-se à intensidade (energia) da onda.
- **Comprimento de onda** ($\\lambda$): distância entre dois pontos consecutivos em fase (crista a crista, vale a vale). Unidade: metro.
- **Frequência** ($f$): número de oscilações completas por segundo. Unidade: Hertz ($\\text{Hz} = \\text{s}^{-1}$).
- **Período** ($T$): tempo para completar uma oscilação. Relação: $T = \\frac{1}{f}$
- **Velocidade de propagação** ($v$): rapidez com que a onda avança no meio.`,
          },
          {
            titulo: 'Equação Fundamental das Ondas',
            tipo: 'formula',
            corpo: `A velocidade de propagação de uma onda é dada por:

$$v = \\lambda \\cdot f$$

onde $v$ é a velocidade (m/s), $\\lambda$ é o comprimento de onda (m) e $f$ é a frequência (Hz).

Também pode ser escrita como:

$$v = \\frac{\\lambda}{T}$$

**Propriedade fundamental da refração de ondas:**

Quando uma onda passa de um meio para outro:
- A **frequência permanece constante** (determinada pela fonte).
- A **velocidade muda** (depende do meio).
- O **comprimento de onda muda** proporcionalmente à velocidade: $\\frac{v_1}{v_2} = \\frac{\\lambda_1}{\\lambda_2}$.

> **Atenção:** A frequência nunca muda na passagem entre meios. Apenas velocidade e comprimento de onda se alteram.`,
          },
          {
            titulo: 'Som e Espectro Eletromagnético',
            tipo: 'texto',
            corpo: `**O Som:**

O som é uma onda mecânica **longitudinal** que se propaga por compressões e rarefações do meio. Suas características perceptíveis são:

- **Altura** (grave ou agudo): depende da **frequência**. Sons agudos têm alta frequência; sons graves têm baixa frequência.
- **Intensidade** (forte ou fraco): depende da **amplitude**. Medida em decibéis (dB).
- **Timbre**: qualidade que permite distinguir fontes sonoras diferentes (violão vs. piano tocando a mesma nota).

O ouvido humano percebe sons entre $20 \\text{ Hz}$ (infrassom abaixo) e $20.000 \\text{ Hz}$ (ultrassom acima). A velocidade do som no ar a $20 \\text{ °C}$ é aproximadamente $343 \\text{ m/s}$.

---

**Espectro Eletromagnético:**

As ondas eletromagnéticas se propagam no vácuo a $c = 3 \\times 10^8 \\text{ m/s}$ e são classificadas pela frequência (ou comprimento de onda):

| Tipo | $\\lambda$ aproximado | Aplicação |
|---|---|---|
| Ondas de rádio | $> 1 \\text{ m}$ | Comunicação |
| Micro-ondas | $1 \\text{ mm}$ a $1 \\text{ m}$ | Fornos, celulares |
| Infravermelho | $700 \\text{ nm}$ a $1 \\text{ mm}$ | Controle remoto, calor |
| Luz visível | $400$ a $700 \\text{ nm}$ | Visão humana |
| Ultravioleta | $10$ a $400 \\text{ nm}$ | Esterilização |
| Raios X | $0{,}01$ a $10 \\text{ nm}$ | Diagnóstico médico |
| Raios gama | $< 0{,}01 \\text{ nm}$ | Radioterapia |

> **Ordem crescente de frequência (e energia):** rádio < micro-ondas < infravermelho < visível < UV < raios X < raios gama.`,
          },
          {
            titulo: 'Exemplo resolvido — Espelhos esféricos',
            tipo: 'exemplo',
            corpo: `**Problema:** Um objeto de $5 \\text{ cm}$ de altura é colocado a $30 \\text{ cm}$ de um espelho côncavo de distância focal $f = 10 \\text{ cm}$. Determine: (a) a posição da imagem; (b) o tamanho da imagem; (c) as características da imagem.

**Resolução:**

**(a) Posição da imagem (equação de Gauss):**

$$\\frac{1}{f} = \\frac{1}{p} + \\frac{1}{p'} \\implies \\frac{1}{10} = \\frac{1}{30} + \\frac{1}{p'}$$

$$\\frac{1}{p'} = \\frac{1}{10} - \\frac{1}{30} = \\frac{3 - 1}{30} = \\frac{2}{30} = \\frac{1}{15}$$

$$p' = 15 \\text{ cm}$$

**(b) Tamanho da imagem:**

$$A = -\\frac{p'}{p} = -\\frac{15}{30} = -0{,}5$$

$$i = A \\times o = -0{,}5 \\times 5 = -2{,}5 \\text{ cm}$$

**(c) Características:**
- $p' = +15 \\text{ cm}$ → imagem **real** (positiva, mesmo lado do objeto)
- $A = -0{,}5$ → imagem **invertida** (negativo) e **menor** ($|A| < 1$)
- Tamanho: $2{,}5 \\text{ cm}$ de altura

**Resposta:** A imagem é real, invertida e menor, formada a $15 \\text{ cm}$ do espelho com $2{,}5 \\text{ cm}$ de altura.`,
          },
          {
            titulo: 'Exemplo resolvido — Refração (Lei de Snell)',
            tipo: 'exemplo',
            corpo: `**Problema:** Um raio de luz passa do ar ($n_1 = 1{,}0$) para a água ($n_2 = 1{,}33$) com ângulo de incidência de $45°$. Qual o ângulo de refração? (Use $\\sin 45° = 0{,}71$)

**Resolução:**

Aplicando a Lei de Snell:

$$n_1 \\cdot \\sin\\theta_1 = n_2 \\cdot \\sin\\theta_2$$

$$1{,}0 \\times 0{,}71 = 1{,}33 \\times \\sin\\theta_2$$

$$\\sin\\theta_2 = \\frac{0{,}71}{1{,}33} \\approx 0{,}53$$

$$\\theta_2 \\approx 32°$$

**Resposta:** O ângulo de refração é aproximadamente $32°$.

> **Análise:** Como a luz passou de um meio menos refringente (ar) para um mais refringente (água), o raio se **aproximou da normal** ($32° < 45°$), como previsto pela Lei de Snell.`,
          },
          {
            titulo: 'Exemplo resolvido — Ondas',
            tipo: 'exemplo',
            corpo: `**Problema:** Uma estação de rádio FM transmite na frequência de $100 \\text{ MHz}$. Sabendo que ondas de rádio são eletromagnéticas e se propagam a $c = 3 \\times 10^8 \\text{ m/s}$, calcule o comprimento de onda da transmissão.

**Resolução:**

1. **Converter a frequência:** $f = 100 \\text{ MHz} = 100 \\times 10^6 = 10^8 \\text{ Hz}$

2. **Aplicar a equação fundamental:**

$$v = \\lambda \\cdot f \\implies \\lambda = \\frac{v}{f}$$

$$\\lambda = \\frac{3 \\times 10^8}{10^8} = 3 \\text{ m}$$

**Resposta:** O comprimento de onda é $3 \\text{ m}$.

> **Contexto:** Ondas de rádio FM têm comprimentos de onda na faixa de metros, o que explica por que antenas de rádio têm essa ordem de grandeza. Já a luz visível tem $\\lambda$ na faixa de centenas de nanômetros ($10^{-7} \\text{ m}$).`,
          },
        ],
        imagemDescricao: 'Diagrama de reflexão e refração da luz com ângulos indicados e esquema de onda com comprimento de onda e amplitude',
        formulasChave: [
          '1/f = 1/p + 1/p\' (equação dos espelhos esféricos e lentes)',
          'n₁ × sen(θ₁) = n₂ × sen(θ₂) (Lei de Snell — refração)',
          'v = λ × f (equação fundamental das ondas)',
          'Aumento linear: A = p\'/p (ampliação em espelhos e lentes)',
        ],
        dicasProva: [
          'Em espelhos côncavos, objetos além do centro de curvatura formam imagem real, invertida e menor',
          'Na Lei de Snell, o meio mais refringente (maior índice n) tem menor ângulo de refração',
          'A velocidade da onda muda ao trocar de meio, mas a frequência permanece constante',
          'Questões de ondas geralmente pedem cálculos diretos com v = λ × f',
        ],
        errosComuns: [
          'Confundir espelho côncavo (convergente) com convexo (divergente)',
          'Afirmar que ondas transportam matéria — ondas transportam apenas energia',
          'Achar que a frequência muda na refração — apenas velocidade e comprimento de onda mudam',
          'Confundir ondas transversais (vibração perpendicular) com longitudinais (vibração paralela)',
        ],
        exercicios: [
          {
            id: 'fis-opt-1',
            enunciado: 'Na reflexão da luz em uma superfície plana, o ângulo de incidência é:',
            alternativas: [
              'Sempre maior que o ângulo de reflexão',
              'Sempre menor que o ângulo de reflexão',
              'Igual ao ângulo de reflexão',
              'O dobro do ângulo de reflexão',
              'Independente do ângulo de reflexão',
            ],
            respostaCorreta: 2,
            explicacao: 'A 2ª Lei da Reflexão estabelece que o ângulo de incidência é sempre igual ao ângulo de reflexão, ambos medidos em relação à reta normal (perpendicular) à superfície no ponto de incidência.',
            dificuldade: 'facil',
          },
          {
            id: 'fis-opt-2',
            enunciado: 'Uma onda com frequência de 500 Hz e comprimento de onda de 0,6 m possui velocidade de propagação de:',
            alternativas: ['100 m/s', '200 m/s', '300 m/s', '500 m/s', '833 m/s'],
            respostaCorreta: 2,
            explicacao: 'Usando v = λ × f: v = 0,6 × 500 = 300 m/s. Esta é a equação fundamental da ondulatória, que relaciona velocidade, comprimento de onda e frequência de qualquer onda.',
            dificuldade: 'facil',
          },
          {
            id: 'fis-opt-3',
            enunciado: 'Espelhos convexos são amplamente utilizados em retrovisores de veículos porque:',
            alternativas: [
              'Aumentam o tamanho da imagem observada',
              'Formam imagens reais e nítidas',
              'Proporcionam um campo de visão mais amplo',
              'Invertem a imagem para facilitar a visualização',
              'Eliminam completamente as distorções ópticas',
            ],
            respostaCorreta: 2,
            explicacao: 'Espelhos convexos (divergentes) formam imagens virtuais, direitas e menores que o objeto, permitindo um campo de visão mais amplo. Por isso são usados em retrovisores, garagens e corredores de segurança.',
            dificuldade: 'facil',
          },
          {
            id: 'fis-opt-4',
            enunciado: 'A refração da luz ocorre quando ela:',
            alternativas: [
              'Retorna ao mesmo meio após atingir uma superfície',
              'É completamente absorvida pelo meio material',
              'Muda de direção ao passar de um meio para outro com índice de refração diferente',
              'É totalmente refletida na superfície de separação',
              'Para de se propagar ao encontrar um obstáculo',
            ],
            respostaCorreta: 2,
            explicacao: 'A refração é a mudança de direção (e velocidade) da luz ao passar de um meio para outro com índice de refração diferente (ex: ar para água). O fenômeno é descrito pela Lei de Snell: n₁ × sen(θ₁) = n₂ × sen(θ₂).',
            dificuldade: 'facil',
          },
          {
            id: 'fis-opt-5',
            enunciado: 'As ondas eletromagnéticas diferem das ondas mecânicas porque:',
            alternativas: [
              'Necessitam obrigatoriamente de um meio material para se propagar',
              'Não transportam energia em sua propagação',
              'Se propagam apenas em meios sólidos e líquidos',
              'Podem se propagar no vácuo, sem necessidade de meio material',
              'Possuem velocidade igual a zero no vácuo',
            ],
            respostaCorreta: 3,
            explicacao: 'Ondas eletromagnéticas (luz, rádio, micro-ondas, raios X) não precisam de meio material e se propagam no vácuo à velocidade da luz (c ≈ 3 × 10⁸ m/s). Ondas mecânicas (som, ondas na água) necessitam de meio material.',
            dificuldade: 'facil',
          },
        ],
      },
    },
  ],
};
