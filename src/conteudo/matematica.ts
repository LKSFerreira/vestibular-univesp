import type { Disciplina } from './tipos';

export const disciplinaMatematica: Disciplina = {
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
        secoes: [
          {
            titulo: 'Introdução à Geometria Plana',
            tipo: 'texto',
            corpo: `## Por que estudar Geometria?

A **Geometria** é um dos pilares da Matemática e está presente em praticamente todas as provas de vestibular. No vestibular da UNIVESP, ela representa **25% da prova de Matemática** — o maior peso entre todos os tópicos. Dominar os conceitos de **áreas de figuras planas** e **volumes de sólidos** é, portanto, estratégico para sua aprovação.

Neste material, vamos estudar de forma aprofundada cada uma das figuras planas mais cobradas, suas fórmulas de área e perímetro, e em seguida avançar para os sólidos geométricos (prismas, cilindros, cones e esferas). A abordagem será sempre prática, com exemplos resolvidos passo a passo.

### O que você vai aprender

- Fórmulas de área e perímetro de **todas** as figuras planas mais cobradas
- **Volume** de prismas, cilindros, cones e esferas
- Como **decompor figuras complexas** em figuras simples
- Estratégias para resolver problemas rapidamente na prova`,
          },
          {
            titulo: 'Áreas de Figuras Planas — Quadriláteros',
            tipo: 'texto',
            corpo: `## Quadriláteros: Retângulo, Quadrado, Paralelogramo, Trapézio e Losango

### Retângulo

O retângulo é a figura mais intuitiva. Possui **quatro ângulos retos** e lados opostos iguais.

$$A_{\\text{retângulo}} = b \\cdot h$$

onde **b** é a base e **h** é a altura. O **perímetro** é:

$$P = 2b + 2h = 2(b + h)$$

### Quadrado

O quadrado é um caso particular do retângulo em que **todos os lados são iguais** ($b = h = l$):

$$A_{\\text{quadrado}} = l^2 \\qquad P = 4l$$

### Paralelogramo

O paralelogramo tem lados opostos paralelos e iguais. A fórmula de área é idêntica à do retângulo, mas a **altura** é a distância perpendicular entre as bases, **não** o lado inclinado:

$$A_{\\text{paralelogramo}} = b \\cdot h$$

> 💡 **Cuidado!** A altura do paralelogramo **não** é o lado oblíquo. É a distância perpendicular entre as duas bases paralelas.

### Trapézio

O trapézio possui **duas bases paralelas** de comprimentos diferentes (base maior $B$ e base menor $b$) e uma altura $h$:

$$A_{\\text{trapézio}} = \\frac{(B + b) \\cdot h}{2}$$

Pense assim: a fórmula calcula a **média das bases** e multiplica pela altura.

### Losango

O losango tem quatro lados iguais e suas diagonais são perpendiculares entre si. A área depende das **diagonais** $D$ (maior) e $d$ (menor):

$$A_{\\text{losango}} = \\frac{D \\cdot d}{2}$$`,
          },
          {
            titulo: 'Tabela Resumo — Áreas e Perímetros',
            tipo: 'tabela',
            corpo: `## Tabela de Referência Rápida

| Figura | Área | Perímetro |
|--------|------|-----------|
| Quadrado (lado $l$) | $l^2$ | $4l$ |
| Retângulo ($b \\times h$) | $b \\cdot h$ | $2(b+h)$ |
| Paralelogramo | $b \\cdot h$ | $2(a+b)$ |
| Triângulo | $\\frac{b \\cdot h}{2}$ | $a + b + c$ |
| Trapézio | $\\frac{(B+b) \\cdot h}{2}$ | $B + b + l_1 + l_2$ |
| Losango (diagonais $D$, $d$) | $\\frac{D \\cdot d}{2}$ | $4l$ |
| Círculo (raio $r$) | $\\pi r^2$ | $2\\pi r$ |`,
          },
          {
            titulo: 'Área do Triângulo e do Círculo',
            tipo: 'texto',
            corpo: `## Triângulo

A fórmula mais usada para a área de um triângulo é:

$$A_{\\text{triângulo}} = \\frac{b \\cdot h}{2}$$

onde **b** é qualquer um dos lados (a base escolhida) e **h** é a altura relativa a essa base — ou seja, a **perpendicular** traçada da base até o vértice oposto.

### Casos especiais

- **Triângulo retângulo**: os catetos podem ser usados como base e altura diretamente. Se os catetos são $a$ e $b$: $A = \\frac{a \\cdot b}{2}$.
- **Triângulo equilátero** (todos os lados iguais a $l$): $A = \\frac{l^2 \\sqrt{3}}{4}$.

### Perímetro do triângulo

$$P = a + b + c$$

onde $a$, $b$ e $c$ são os três lados.

## Círculo

O **círculo** (disco) é a região delimitada por uma circunferência de raio $r$.

$$A_{\\text{círculo}} = \\pi r^2$$

O **comprimento da circunferência** (perímetro do círculo) é:

$$C = 2\\pi r$$

> 💡 **Atenção à diferença entre raio e diâmetro!** O diâmetro é o dobro do raio: $d = 2r$. Se o problema dá o diâmetro, divida por 2 antes de usar as fórmulas.

### Setor circular

Um **setor circular** é uma "fatia" do círculo com ângulo central $\\theta$ (em graus):

$$A_{\\text{setor}} = \\frac{\\theta}{360°} \\cdot \\pi r^2$$`,
          },
          {
            titulo: 'Decomposição de Figuras Complexas',
            tipo: 'importante',
            corpo: `## Estratégia: Decomposição de Figuras

Muitos problemas de vestibular apresentam figuras **compostas** — por exemplo, um terreno com formato irregular ou uma figura com uma parte recortada. A estratégia fundamental é:

1. **Identifique** as figuras simples que compõem a figura complexa
2. **Calcule** a área de cada uma separadamente
3. **Some** ou **subtraia** conforme necessário

### Tipos comuns de problemas

- **Figura com recorte**: Calcule a área total e subtraia a parte removida
- **Figura composta**: Some as áreas das partes
- **Região entre duas figuras**: Calcule a área da figura maior e subtraia a da menor

> 💡 **Dica de prova**: Sempre que o enunciado apresentar uma figura complexa, desenhe-a e trace linhas auxiliares para identificar as figuras simples.`,
          },
          {
            titulo: 'Exemplo Resolvido — Decomposição',
            tipo: 'exemplo',
            corpo: `## Exemplo: Área de uma figura composta

**Problema:** Um jardim tem a forma de um retângulo de $12 \\text{ m} \\times 8 \\text{ m}$. Em um dos cantos, há um canteiro triangular com base de $4 \\text{ m}$ e altura de $3 \\text{ m}$. No centro do jardim, há uma fonte circular com raio de $2 \\text{ m}$. Calcule a área gramada (use $\\pi = 3{,}14$).

**Resolução passo a passo:**

**Passo 1** — Área do retângulo (jardim total):
$$A_{\\text{ret}} = 12 \\times 8 = 96 \\text{ m}^2$$

**Passo 2** — Área do triângulo (canteiro):
$$A_{\\text{tri}} = \\frac{4 \\times 3}{2} = 6 \\text{ m}^2$$

**Passo 3** — Área do círculo (fonte):
$$A_{\\text{circ}} = \\pi r^2 = 3{,}14 \\times 4 = 12{,}56 \\text{ m}^2$$

**Passo 4** — Área gramada (subtraindo as partes não gramadas):
$$A_{\\text{grama}} = 96 - 6 - 12{,}56 = 77{,}44 \\text{ m}^2$$

**Resposta:** A área gramada do jardim é $77{,}44 \\text{ m}^2$.`,
          },
          {
            titulo: 'Volumes de Sólidos Geométricos',
            tipo: 'texto',
            corpo: `## Sólidos Geométricos — Prismas e Cilindros

O **volume** de um sólido mede o espaço tridimensional que ele ocupa. A unidade de medida é sempre cúbica ($\\text{cm}^3$, $\\text{m}^3$, etc.).

### Princípio de Cavalieri (intuição)

A ideia central é simples: **Volume = Área da base × Altura**. Esse princípio vale para todo sólido cujas seções transversais paralelas à base são iguais.

### Prisma

Um prisma é um sólido com duas bases paralelas e iguais (polígonos) e faces laterais retangulares.

$$V_{\\text{prisma}} = A_{\\text{base}} \\cdot h$$

- **Prisma retangular** (paralelepípedo): $V = a \\cdot b \\cdot c$
- **Cubo** (todos os lados iguais): $V = l^3$

### Cilindro

O cilindro tem duas bases circulares paralelas e iguais:

$$V_{\\text{cilindro}} = \\pi r^2 \\cdot h$$

A **área lateral** do cilindro (a superfície curvada) é:

$$A_{\\text{lateral}} = 2\\pi r \\cdot h$$

E a **área total** (lateral + duas bases):

$$A_{\\text{total}} = 2\\pi r \\cdot h + 2\\pi r^2 = 2\\pi r(h + r)$$

### Cone

O cone tem uma base circular e afunila até um ponto (vértice):

$$V_{\\text{cone}} = \\frac{\\pi r^2 \\cdot h}{3}$$

> 💡 O volume do cone é exatamente **um terço** do volume de um cilindro de mesma base e mesma altura.

### Esfera

$$V_{\\text{esfera}} = \\frac{4}{3}\\pi r^3$$`,
          },
          {
            titulo: 'Exemplo Resolvido — Volume do Cilindro',
            tipo: 'exemplo',
            corpo: `## Exemplo: Capacidade de um reservatório cilíndrico

**Problema:** Uma caixa d'água cilíndrica tem diâmetro de $1{,}2 \\text{ m}$ e altura de $0{,}8 \\text{ m}$. Quantos litros de água ela comporta? (Use $\\pi = 3{,}14$ e considere que $1 \\text{ m}^3 = 1000 \\text{ L}$.)

**Resolução:**

**Passo 1** — Identificar o raio (metade do diâmetro):
$$r = \\frac{1{,}2}{2} = 0{,}6 \\text{ m}$$

**Passo 2** — Calcular o volume:
$$V = \\pi r^2 \\cdot h = 3{,}14 \\times (0{,}6)^2 \\times 0{,}8$$
$$V = 3{,}14 \\times 0{,}36 \\times 0{,}8 = 3{,}14 \\times 0{,}288$$
$$V = 0{,}904\\;32 \\text{ m}^3$$

**Passo 3** — Converter para litros:
$$V = 0{,}904\\;32 \\times 1000 \\approx 904{,}3 \\text{ L}$$

**Resposta:** A caixa d'água comporta aproximadamente $904{,}3$ litros.`,
          },
          {
            titulo: 'Relação entre Unidades de Volume',
            tipo: 'importante',
            corpo: `## Conversão de Unidades — Volume e Capacidade

Problemas de vestibular frequentemente misturam unidades. Memorize estas equivalências:

- $1 \\text{ m}^3 = 1\\,000 \\text{ L}$ (mil litros)
- $1 \\text{ dm}^3 = 1 \\text{ L}$ (um decímetro cúbico = um litro)
- $1 \\text{ cm}^3 = 1 \\text{ mL}$ (um centímetro cúbico = um mililitro)
- $1 \\text{ m}^3 = 1\\,000\\,000 \\text{ cm}^3$

### Conversão entre unidades de comprimento antes de calcular

Se a base está em **cm** e a altura em **m**, converta tudo para a **mesma unidade** antes de multiplicar. Caso contrário, o resultado estará errado.

> 💡 **Regra de ouro:** Antes de calcular qualquer área ou volume, verifique se **todas** as medidas estão na mesma unidade.`,
          },
          {
            titulo: 'Fórmulas Essenciais de Geometria',
            tipo: 'formula',
            corpo: `## Resumo de Fórmulas

### Áreas de figuras planas

$$A_{\\text{retângulo}} = b \\cdot h \\qquad A_{\\text{triângulo}} = \\frac{b \\cdot h}{2}$$

$$A_{\\text{trapézio}} = \\frac{(B + b) \\cdot h}{2} \\qquad A_{\\text{losango}} = \\frac{D \\cdot d}{2}$$

$$A_{\\text{círculo}} = \\pi r^2 \\qquad C = 2\\pi r$$

### Volumes de sólidos

$$V_{\\text{prisma}} = A_{\\text{base}} \\cdot h \\qquad V_{\\text{cilindro}} = \\pi r^2 h$$

$$V_{\\text{cone}} = \\frac{\\pi r^2 h}{3} \\qquad V_{\\text{esfera}} = \\frac{4}{3}\\pi r^3$$`,
          },
        ],
        explicacao:
          'A geometria no vestibular UNIVESP cobra principalmente figuras planas (triângulos, quadriláteros, círculos) e sólidos simples (prismas e cilindros).\n\nÁrea do triângulo: A = (b × h) / 2\nÁrea do círculo: A = π × r²\nVolume do cilindro: V = π × r² × h\n\nEstratégia: decomponha figuras complexas em figuras simples conhecidas.',
        imagemDescricao: 'Ilustração de figuras geométricas planas com fórmulas de área anotadas',
        formulasChave: [
          'Área do triângulo: A = (b × h) / 2',
          'Área do retângulo: A = b × h',
          'Área do quadrado: A = l²',
          'Área do trapézio: A = (B + b) × h / 2',
          'Área do losango: A = (D × d) / 2',
          'Área do paralelogramo: A = b × h',
          'Área do círculo: A = π × r²',
          'Comprimento da circunferência: C = 2 × π × r',
          'Volume do prisma: V = Área_base × h',
          'Volume do cilindro: V = π × r² × h',
          'Volume do cone: V = (π × r² × h) / 3',
          'Volume da esfera: V = (4 × π × r³) / 3',
          'Área lateral do cilindro: Al = 2 × π × r × h',
        ],
        dicasProva: [
          'Decomponha figuras complexas em figuras simples conhecidas antes de calcular.',
          'Sempre identifique as unidades de medida e converta se necessário antes de operar.',
          'Em problemas de volume, verifique se a base é regular e qual fórmula se aplica.',
          'Lembre-se: π ≈ 3,14 — a prova geralmente informa o valor a ser utilizado.',
          'Desenhe a figura quando o enunciado não fornecer imagem — isso evita erros de interpretação.',
        ],
        errosComuns: [
          'Confundir raio com diâmetro — o diâmetro é o dobro do raio (d = 2r).',
          'Esquecer de dividir por 2 na fórmula da área do triângulo.',
          'Misturar unidades (cm com m) sem converter antes de calcular.',
          'Usar fórmula de área quando o problema pede perímetro, e vice-versa.',
          'Esquecer que o volume do cone é 1/3 do volume do cilindro de mesma base e altura.',
        ],
        exemplosResolvidos: [
          {
            enunciado:
              'Um terreno retangular tem 20 m de comprimento e 15 m de largura. No centro desse terreno, há uma piscina circular com raio de 3 m. Qual a área do terreno que NÃO é ocupada pela piscina? (Use π = 3,14)',
            passos: [
              'Calcular a área do terreno retangular: A = b × h = 20 × 15 = 300 m².',
              'Calcular a área da piscina circular: A = π × r² = 3,14 × 3² = 3,14 × 9 = 28,26 m².',
              'Subtrair a área da piscina da área do terreno: 300 − 28,26 = 271,74 m².',
            ],
            resposta: 'A área não ocupada pela piscina é 271,74 m².',
          },
          {
            enunciado:
              'Um reservatório cilíndrico tem raio da base igual a 5 cm e altura de 12 cm. Calcule seu volume. (Use π = 3,14)',
            passos: [
              'Identificar os dados: r = 5 cm, h = 12 cm.',
              'Aplicar a fórmula do volume do cilindro: V = π × r² × h.',
              'Substituir os valores: V = 3,14 × 5² × 12 = 3,14 × 25 × 12.',
              'Calcular: V = 3,14 × 300 = 942 cm³.',
            ],
            resposta: 'O volume do cilindro é 942 cm³.',
          },
        ],
        exercicios: [
          {
            id: 'mat-geom-1',
            enunciado:
              'Um triângulo possui base de 10 cm e altura de 8 cm. Qual é a sua área?',
            alternativas: [
              '80 cm²',
              '40 cm²',
              '18 cm²',
              '36 cm²',
              '20 cm²',
            ],
            respostaCorreta: 1,
            explicacao:
              'A área do triângulo é dada por A = (b × h) / 2. Substituindo: A = (10 × 8) / 2 = 80 / 2 = 40 cm².',
            dificuldade: 'facil',
          },
          {
            id: 'mat-geom-2',
            enunciado:
              'Uma pizza circular tem diâmetro de 40 cm. Qual é a área dessa pizza? (Use π = 3,14)',
            alternativas: [
              '5.024 cm²',
              '2.512 cm²',
              '1.256 cm²',
              '502,4 cm²',
              '125,6 cm²',
            ],
            respostaCorreta: 2,
            explicacao:
              'O diâmetro é 40 cm, logo o raio é 20 cm. A área do círculo é A = π × r² = 3,14 × 20² = 3,14 × 400 = 1.256 cm².',
            dificuldade: 'facil',
          },
          {
            id: 'mat-geom-3',
            enunciado:
              'Um trapézio tem base maior de 12 cm, base menor de 8 cm e altura de 5 cm. Qual é a sua área?',
            alternativas: [
              '100 cm²',
              '60 cm²',
              '50 cm²',
              '40 cm²',
              '30 cm²',
            ],
            respostaCorreta: 2,
            explicacao:
              'A área do trapézio é A = (B + b) × h / 2 = (12 + 8) × 5 / 2 = 20 × 5 / 2 = 100 / 2 = 50 cm².',
            dificuldade: 'medio',
          },
          {
            id: 'mat-geom-4',
            enunciado:
              'Um cilindro e um cone possuem a mesma base circular de raio 3 cm e a mesma altura de 10 cm. Qual é a diferença entre o volume do cilindro e o volume do cone? (Use π = 3,14)',
            alternativas: [
              '188,4 cm³',
              '94,2 cm³',
              '282,6 cm³',
              '56,52 cm³',
              '150 cm³',
            ],
            respostaCorreta: 0,
            explicacao:
              'Volume do cilindro: V = π × r² × h = 3,14 × 9 × 10 = 282,6 cm³. Volume do cone: V = (π × r² × h) / 3 = 282,6 / 3 = 94,2 cm³. Diferença: 282,6 − 94,2 = 188,4 cm³.',
            dificuldade: 'medio',
          },
          {
            id: 'mat-geom-5',
            enunciado:
              'Um terreno tem a forma de um paralelogramo com base de 30 m e altura de 18 m. No centro do terreno será construída uma quadra retangular de 20 m por 10 m. Qual a área restante do terreno?',
            alternativas: [
              '540 m²',
              '340 m²',
              '200 m²',
              '360 m²',
              '140 m²',
            ],
            respostaCorreta: 1,
            explicacao:
              'Área do paralelogramo: A = b × h = 30 × 18 = 540 m². Área da quadra retangular: A = 20 × 10 = 200 m². Área restante: 540 − 200 = 340 m².',
            dificuldade: 'dificil',
          },
        ],
      },
    },
    {
      id: 'algebra-funcoes',
      titulo: 'Álgebra e Funções (1º e 2º Grau)',
      peso: 20,
      conteudo: {
        resumo: 'Equações, inequações e funções de 1º e 2º grau com interpretação gráfica.',
        secoes: [
          {
            titulo: 'Introdução às Funções',
            tipo: 'texto',
            corpo: `## O que é uma Função?

Uma **função** é uma relação entre dois conjuntos (domínio e contradomínio) na qual cada elemento do domínio está associado a **exatamente um** elemento do contradomínio. Na prática, uma função é uma "regra" que transforma um valor de entrada $x$ em um valor de saída $f(x)$.

### Notação

Escrevemos $f: \\mathbb{R} \\to \\mathbb{R}$ para indicar uma função de domínio real e contradomínio real. A lei da função é uma expressão como $f(x) = 2x + 3$.

### Conceitos fundamentais

- **Domínio** ($D$): conjunto de todos os valores de $x$ para os quais a função está definida
- **Imagem** ($\\text{Im}$): conjunto de todos os valores que $f(x)$ efetivamente assume
- **Contradomínio**: conjunto onde os valores de $f(x)$ podem estar (contém a imagem)
- **Raiz** (ou zero): valor de $x$ tal que $f(x) = 0$

> 💡 No vestibular UNIVESP, **Álgebra e Funções** corresponde a **20% da prova de Matemática**. Domine funções de 1º e 2º grau e você terá uma base sólida para boa parte das questões.`,
          },
          {
            titulo: 'Função de 1º Grau (Função Afim)',
            tipo: 'texto',
            corpo: `## Função de 1º Grau: $f(x) = ax + b$

A função de 1º grau, também chamada **função afim**, é definida pela lei:

$$f(x) = ax + b$$

onde $a$ e $b$ são constantes reais com $a \\neq 0$.

### Coeficientes

- **$a$ (coeficiente angular)**: determina a **inclinação** da reta. Quanto maior o valor absoluto de $a$, mais inclinada é a reta.
  - Se $a > 0$: a função é **crescente** (a reta "sobe" da esquerda para a direita)
  - Se $a < 0$: a função é **decrescente** (a reta "desce")
- **$b$ (coeficiente linear)**: é o ponto onde a reta **cruza o eixo $y$** (quando $x = 0$, $f(0) = b$)

### Raiz da função de 1º grau

A raiz é o valor de $x$ que anula a função:

$$f(x) = 0 \\implies ax + b = 0 \\implies x = -\\frac{b}{a}$$

### Gráfico

O gráfico de uma função de 1º grau é sempre uma **reta**. Para desenhá-la, basta encontrar dois pontos:

1. O ponto onde a reta cruza o eixo $y$: $(0, b)$
2. A raiz: $\\left(-\\frac{b}{a},\\ 0\\right)$

### Domínio e Imagem

- **Domínio**: $D = \\mathbb{R}$ (todos os reais)
- **Imagem**: $\\text{Im} = \\mathbb{R}$ (todos os reais)`,
          },
          {
            titulo: 'Exemplo — Função de 1º Grau',
            tipo: 'exemplo',
            corpo: `## Exemplo: Análise de uma função linear

**Problema:** Dada a função $f(x) = -3x + 6$, determine:
a) O coeficiente angular e o coeficiente linear
b) A raiz da função
c) Se a função é crescente ou decrescente
d) Os pontos de interseção com os eixos

**Resolução:**

**a)** Comparando com $f(x) = ax + b$:
- Coeficiente angular: $a = -3$
- Coeficiente linear: $b = 6$

**b)** Raiz ($f(x) = 0$):
$$-3x + 6 = 0 \\implies -3x = -6 \\implies x = 2$$

**c)** Como $a = -3 < 0$, a função é **decrescente**.

**d)** Interseção com o eixo $y$ (fazendo $x = 0$): $(0, 6)$
Interseção com o eixo $x$ (raiz): $(2, 0)$`,
          },
          {
            titulo: 'Função de 2º Grau (Função Quadrática)',
            tipo: 'texto',
            corpo: `## Função de 2º Grau: $f(x) = ax^2 + bx + c$

A função de 2º grau, ou **função quadrática**, é definida pela lei:

$$f(x) = ax^2 + bx + c$$

onde $a$, $b$ e $c$ são constantes reais com $a \\neq 0$.

### O papel de cada coeficiente

- **$a$**: determina a **concavidade** da parábola e a "abertura"
  - $a > 0$: parábola com concavidade voltada para **cima** (formato de "U") → possui **mínimo**
  - $a < 0$: parábola com concavidade voltada para **baixo** (formato de "∩") → possui **máximo**
- **$b$**: influencia a posição do eixo de simetria
- **$c$**: é o ponto onde a parábola **cruza o eixo $y$** (quando $x = 0$, $f(0) = c$)

### Discriminante ($\\Delta$)

O discriminante determina quantas raízes reais a equação $ax^2 + bx + c = 0$ possui:

$$\\Delta = b^2 - 4ac$$

- $\\Delta > 0$: **duas raízes reais distintas** (a parábola cruza o eixo $x$ em dois pontos)
- $\\Delta = 0$: **uma raiz real dupla** (a parábola tangencia o eixo $x$)
- $\\Delta < 0$: **nenhuma raiz real** (a parábola não toca o eixo $x$)

### Fórmula de Bhaskara

Para encontrar as raízes:

$$x = \\frac{-b \\pm \\sqrt{\\Delta}}{2a}$$

### Vértice da Parábola

O vértice $V(x_v, y_v)$ é o ponto de **máximo** (se $a < 0$) ou **mínimo** (se $a > 0$):

$$x_v = -\\frac{b}{2a} \\qquad y_v = -\\frac{\\Delta}{4a}$$

O vértice é um dos conceitos **mais cobrados** em vestibulares, especialmente em problemas de otimização (lucro máximo, altura máxima, custo mínimo).

### Eixo de simetria

A parábola é simétrica em relação à reta vertical $x = x_v = -\\frac{b}{2a}$.`,
          },
          {
            titulo: 'Análise do Discriminante',
            tipo: 'destaque',
            corpo: `## Resumo Visual do Discriminante

O discriminante $\\Delta = b^2 - 4ac$ é a "chave" para entender o comportamento das raízes:

| Condição | Nº de raízes reais | Gráfico ($a > 0$) |
|----------|-------------------|--------------------|
| $\\Delta > 0$ | 2 raízes distintas | Parábola cruza o eixo $x$ em 2 pontos |
| $\\Delta = 0$ | 1 raiz dupla | Parábola tangencia o eixo $x$ |
| $\\Delta < 0$ | 0 raízes reais | Parábola não toca o eixo $x$ |

### Relações de Girard (soma e produto das raízes)

Se $x_1$ e $x_2$ são raízes de $ax^2 + bx + c = 0$:

$$x_1 + x_2 = -\\frac{b}{a} \\qquad x_1 \\cdot x_2 = \\frac{c}{a}$$

> 💡 As relações de Girard permitem resolver muitos problemas **sem** usar a fórmula de Bhaskara. Se a questão pede a soma ou o produto das raízes, use diretamente essas relações.`,
          },
          {
            titulo: 'Exemplo — Função de 2º Grau completa',
            tipo: 'exemplo',
            corpo: `## Exemplo: Análise completa de uma parábola

**Problema:** Dada $f(x) = 2x^2 - 12x + 10$, determine as raízes, o vértice, a concavidade e faça um esboço do gráfico.

**Resolução:**

**Passo 1 — Coeficientes:** $a = 2$, $b = -12$, $c = 10$

**Passo 2 — Concavidade:** Como $a = 2 > 0$, a parábola tem concavidade para **cima** (mínimo).

**Passo 3 — Discriminante:**
$$\\Delta = (-12)^2 - 4 \\cdot 2 \\cdot 10 = 144 - 80 = 64$$

Como $\\Delta = 64 > 0$, existem **duas raízes reais distintas**.

**Passo 4 — Raízes (Bhaskara):**
$$x = \\frac{-(-12) \\pm \\sqrt{64}}{2 \\cdot 2} = \\frac{12 \\pm 8}{4}$$

$$x_1 = \\frac{12 + 8}{4} = \\frac{20}{4} = 5 \\qquad x_2 = \\frac{12 - 8}{4} = \\frac{4}{4} = 1$$

**Passo 5 — Vértice:**
$$x_v = -\\frac{-12}{2 \\cdot 2} = \\frac{12}{4} = 3$$
$$y_v = -\\frac{64}{4 \\cdot 2} = -\\frac{64}{8} = -8$$

Vértice: $V(3, -8)$ — ponto de **mínimo**.

**Passo 6 — Interseção com eixo $y$:** $f(0) = 10$, ponto $(0, 10)$.

**Verificação por Girard:**
- Soma: $x_1 + x_2 = 5 + 1 = 6 = -\\frac{-12}{2} = 6$ ✓
- Produto: $x_1 \\cdot x_2 = 5 \\cdot 1 = 5 = \\frac{10}{2} = 5$ ✓`,
          },
          {
            titulo: 'Problemas de Otimização com Funções',
            tipo: 'texto',
            corpo: `## Otimização: Máximos e Mínimos

Um dos tipos de problema mais frequentes no vestibular envolve encontrar o **valor máximo ou mínimo** de uma grandeza modelada por uma função quadrática.

### Estratégia geral

1. **Modele** o problema como uma função $f(x) = ax^2 + bx + c$
2. **Identifique** se o problema pede máximo ($a < 0$) ou mínimo ($a > 0$)
3. **Calcule** o vértice: $x_v = -\\frac{b}{2a}$ e $y_v = -\\frac{\\Delta}{4a}$
4. **Interprete** o resultado no contexto do problema

### Exemplo clássico: Altura máxima de um projétil

A altura de uma bola lançada para cima é dada por $h(t) = -5t^2 + 30t + 2$ (metros, segundos).

**Pergunta:** Qual a altura máxima e quando ela ocorre?

**Resolução:**
- $a = -5 < 0$ → parábola com máximo ✓
- $t_v = -\\frac{30}{2 \\cdot (-5)} = -\\frac{30}{-10} = 3$ segundos
- $h(3) = -5(9) + 30(3) + 2 = -45 + 90 + 2 = 47$ metros

**Resposta:** A altura máxima é $47$ m, atingida em $t = 3$ s.`,
          },
          {
            titulo: 'Inequações de 1º e 2º Grau',
            tipo: 'texto',
            corpo: `## Inequações

### Inequação de 1º grau

Resolve-se como uma equação, mas ao multiplicar ou dividir por número **negativo**, inverte-se o sinal da desigualdade.

**Exemplo:** $-2x + 6 > 0$
$$-2x > -6 \\implies x < 3$$

(Dividimos por $-2$ e invertemos o sinal.)

### Inequação de 2º grau

Para resolver $ax^2 + bx + c > 0$ (ou $< 0$, $\\geq 0$, $\\leq 0$):

1. Encontre as raízes da equação $ax^2 + bx + c = 0$
2. Esboce a parábola (concavidade para cima se $a > 0$, para baixo se $a < 0$)
3. Analise o sinal nos intervalos determinados pelas raízes

**Exemplo:** Resolva $x^2 - 5x + 6 \\leq 0$.

**Passo 1** — Raízes: $\\Delta = 25 - 24 = 1$, $x_1 = 2$, $x_2 = 3$.

**Passo 2** — Como $a = 1 > 0$, a parábola abre para cima. A função é **negativa** (abaixo do eixo $x$) **entre** as raízes.

**Passo 3** — Solução: $2 \\leq x \\leq 3$

> 💡 **Macete para a prova:** Se $a > 0$ e a questão pede $f(x) \\leq 0$, a resposta é o intervalo **entre** as raízes. Se pede $f(x) \\geq 0$, é o intervalo **fora** das raízes.`,
          },
          {
            titulo: 'Fórmulas Essenciais — Álgebra e Funções',
            tipo: 'formula',
            corpo: `## Resumo de Fórmulas

### Função de 1º grau
$$f(x) = ax + b \\qquad \\text{Raiz: } x = -\\frac{b}{a}$$

### Função de 2º grau
$$f(x) = ax^2 + bx + c$$

$$\\Delta = b^2 - 4ac \\qquad x = \\frac{-b \\pm \\sqrt{\\Delta}}{2a}$$

$$x_v = -\\frac{b}{2a} \\qquad y_v = -\\frac{\\Delta}{4a}$$

$$x_1 + x_2 = -\\frac{b}{a} \\qquad x_1 \\cdot x_2 = \\frac{c}{a}$$`,
          },
        ],
        explicacao:
          'Funções são relações entre variáveis. A função de 1º grau (f(x) = ax + b) gera uma reta. A função de 2º grau (f(x) = ax² + bx + c) gera uma parábola.\n\nPontos-chave da função quadrática:\n• Coeficiente a: determina a concavidade\n• Discriminante Δ = b² - 4ac: define o número de raízes\n• Vértice: ponto de máximo ou mínimo\n• Fórmula de Bhaskara: x = (-b ± √Δ) / 2a',
        imagemDescricao: 'Gráfico de uma parábola com vértice, raízes e eixo de simetria marcados',
        formulasChave: [
          'Função de 1º grau: f(x) = ax + b',
          'Raiz da função de 1º grau: x = -b / a',
          'Função de 2º grau: f(x) = ax² + bx + c',
          'Discriminante: Δ = b² − 4ac',
          'Fórmula de Bhaskara: x = (−b ± √Δ) / 2a',
          'Coordenadas do vértice: xv = −b / 2a  |  yv = −Δ / 4a',
          'Soma das raízes: x1 + x2 = −b / a',
          'Produto das raízes: x1 × x2 = c / a',
        ],
        dicasProva: [
          'Se Δ > 0 → duas raízes reais distintas; Δ = 0 → uma raiz (dupla); Δ < 0 → sem raiz real.',
          'O sinal de "a" define a concavidade: a > 0 → parábola para cima (mínimo); a < 0 → para baixo (máximo).',
          'O vértice é o ponto de máximo ou mínimo — muito cobrado em problemas de otimização.',
          'Em funções de 1º grau, o coeficiente angular "a" indica a inclinação da reta e "b" o ponto onde cruza o eixo y.',
          'Para resolver inequações de 2º grau, esboce a parábola e analise o sinal nos intervalos.',
        ],
        errosComuns: [
          'Trocar o sinal na fórmula de Bhaskara — o numerador é −b ± √Δ, não +b.',
          'Esquecer de calcular Δ antes de aplicar Bhaskara.',
          'Confundir concavidade: a > 0 não significa que a função é sempre positiva.',
          'Errar o sinal do vértice: xv = −b / (2a), com sinal negativo no numerador.',
          'Confundir coeficiente angular com coeficiente linear na função de 1º grau.',
        ],
        exemplosResolvidos: [
          {
            enunciado:
              'Resolva a equação 2x² − 8x + 6 = 0 usando a fórmula de Bhaskara.',
            passos: [
              'Identificar os coeficientes: a = 2, b = −8, c = 6.',
              'Calcular o discriminante: Δ = b² − 4ac = (−8)² − 4 × 2 × 6 = 64 − 48 = 16.',
              'Como Δ > 0, existem duas raízes reais distintas.',
              'Aplicar Bhaskara: x = (−(−8) ± √16) / (2 × 2) = (8 ± 4) / 4.',
              'x1 = (8 + 4) / 4 = 12 / 4 = 3.',
              'x2 = (8 − 4) / 4 = 4 / 4 = 1.',
            ],
            resposta: 'As raízes da equação são x = 1 e x = 3.',
          },
          {
            enunciado:
              'Determine o vértice da parábola f(x) = −x² + 4x − 3 e diga se é ponto de máximo ou mínimo.',
            passos: [
              'Identificar os coeficientes: a = −1, b = 4, c = −3.',
              'Calcular xv = −b / (2a) = −4 / (2 × (−1)) = −4 / (−2) = 2.',
              'Calcular Δ = b² − 4ac = 16 − 4 × (−1) × (−3) = 16 − 12 = 4.',
              'Calcular yv = −Δ / (4a) = −4 / (4 × (−1)) = −4 / (−4) = 1.',
              'Como a = −1 < 0, a concavidade é para baixo, logo o vértice é ponto de máximo.',
            ],
            resposta: 'O vértice é V(2, 1) e é um ponto de máximo.',
          },
        ],
        exercicios: [
          {
            id: 'mat-alg-1',
            enunciado:
              'Qual é o valor do discriminante (Δ) da equação x² − 5x + 6 = 0?',
            alternativas: ['1', '−1', '49', '25', '0'],
            respostaCorreta: 0,
            explicacao:
              'Δ = b² − 4ac = (−5)² − 4 × 1 × 6 = 25 − 24 = 1.',
            dificuldade: 'facil',
          },
          {
            id: 'mat-alg-2',
            enunciado:
              'A função f(x) = 2x − 6 se anula para qual valor de x?',
            alternativas: ['x = −3', 'x = 3', 'x = 6', 'x = −6', 'x = 2'],
            respostaCorreta: 1,
            explicacao:
              'Para encontrar a raiz, fazemos f(x) = 0: 2x − 6 = 0 → 2x = 6 → x = 3.',
            dificuldade: 'facil',
          },
          {
            id: 'mat-alg-3',
            enunciado:
              'Uma bola é lançada para cima e sua altura em metros é dada por h(t) = −5t² + 20t, onde t é o tempo em segundos. Qual a altura máxima atingida?',
            alternativas: [
              '20 m',
              '15 m',
              '25 m',
              '10 m',
              '40 m',
            ],
            respostaCorreta: 0,
            explicacao:
              'A altura máxima ocorre no vértice. a = −5, b = 20. xv = −20 / (2 × (−5)) = 2 s. yv = h(2) = −5 × 4 + 20 × 2 = −20 + 40 = 20 m.',
            dificuldade: 'medio',
          },
          {
            id: 'mat-alg-4',
            enunciado:
              'A soma das raízes da equação 3x² − 12x + 9 = 0 é:',
            alternativas: ['4', '3', '−4', '12', '9'],
            respostaCorreta: 0,
            explicacao:
              'Pela relação de Girard, a soma das raízes é S = −b / a = −(−12) / 3 = 12 / 3 = 4.',
            dificuldade: 'medio',
          },
          {
            id: 'mat-alg-5',
            enunciado:
              'Para quais valores de k a equação x² − 6x + k = 0 possui duas raízes reais e distintas?',
            alternativas: [
              'k < 9',
              'k > 9',
              'k = 9',
              'k ≤ 9',
              'k ≥ 9',
            ],
            respostaCorreta: 0,
            explicacao:
              'Para duas raízes reais distintas, Δ > 0. Δ = 36 − 4k > 0 → 4k < 36 → k < 9.',
            dificuldade: 'dificil',
          },
        ],
      },
    },
    {
      id: 'matematica-basica',
      titulo: 'Matemática Básica',
      peso: 20,
      conteudo: {
        resumo: 'Razão, proporção, porcentagem e regra de três.',
        secoes: [
          {
            titulo: 'Introdução — Matemática Básica no Vestibular',
            tipo: 'texto',
            corpo: `## Por que este tópico é tão importante?

A **Matemática Básica** — razão, proporção, porcentagem e regra de três — é a base de praticamente todos os outros tópicos de Matemática. No vestibular UNIVESP, ela corresponde a **20% da prova** e aparece tanto em questões diretas quanto como ferramenta em problemas de outras áreas (Física, Química, Geografia).

Dominar esses conceitos significa resolver questões de forma rápida e segura. Vamos abordar cada um em profundidade.`,
          },
          {
            titulo: 'Razão',
            tipo: 'texto',
            corpo: `## Razão

**Razão** é a comparação entre duas grandezas por meio de uma divisão. Se temos duas grandezas $a$ e $b$ ($b \\neq 0$), a razão de $a$ para $b$ é:

$$\\text{Razão} = \\frac{a}{b}$$

Lemos "$a$ está para $b$" ou "$a$ para $b$".

### Exemplos práticos

- Se em uma sala há **12 mulheres** e **8 homens**, a razão entre mulheres e homens é $\\frac{12}{8} = \\frac{3}{2}$, ou seja, para cada 2 homens há 3 mulheres.
- A **escala** de um mapa é uma razão: se a escala é $1:50\\,000$, cada 1 cm no mapa representa 50.000 cm (500 m) na realidade.
- A **velocidade média** é uma razão: $v = \\frac{\\Delta s}{\\Delta t}$ (distância dividida pelo tempo).

### Razão e fração: qual a diferença?

- Uma **fração** representa parte de um todo (ex.: $\\frac{3}{4}$ de uma pizza)
- Uma **razão** compara duas grandezas que podem ser de naturezas diferentes (ex.: km/h, hab/km²)

> 💡 No vestibular, problemas de razão frequentemente envolvem **escala de mapas**, **densidade demográfica** e **proporção entre grupos**.`,
          },
          {
            titulo: 'Proporção',
            tipo: 'texto',
            corpo: `## Proporção

Uma **proporção** é a igualdade entre duas razões:

$$\\frac{a}{b} = \\frac{c}{d}$$

Lemos "$a$ está para $b$ assim como $c$ está para $d$".

### Propriedade Fundamental

Em toda proporção, o **produto dos meios é igual ao produto dos extremos**:

$$a \\cdot d = b \\cdot c$$

Essa propriedade é a base da **regra de três** e permite encontrar qualquer um dos quatro valores quando os outros três são conhecidos.

### Grandezas diretamente proporcionais

Duas grandezas são **diretamente proporcionais** quando, ao aumentar uma, a outra aumenta na mesma proporção (e vice-versa).

- Mais horas de trabalho → mais peças produzidas
- Mais metros de tecido → mais custo

### Grandezas inversamente proporcionais

Duas grandezas são **inversamente proporcionais** quando, ao aumentar uma, a outra diminui na mesma proporção.

- Mais trabalhadores → menos dias para completar a obra
- Maior velocidade → menos tempo para percorrer a mesma distância

> 💡 **Como identificar:** Pergunte-se "se eu dobrar a primeira grandeza, a segunda também dobra (direta) ou cai pela metade (inversa)?"`,
          },
          {
            titulo: 'Regra de Três Simples',
            tipo: 'texto',
            corpo: `## Regra de Três Simples

A **regra de três simples** é um método para encontrar um valor desconhecido quando temos três valores conhecidos e duas grandezas proporcionais.

### Passo a passo

1. **Organize** os dados em duas colunas (uma para cada grandeza)
2. **Identifique** se as grandezas são diretamente ou inversamente proporcionais
3. **Monte** a proporção e resolva

### Regra de três direta

**Exemplo:** Se 3 kg de carne custam R\\$ 75,00, quanto custam 5 kg?

| Carne (kg) | Preço (R\\$) |
|:-----------:|:-----------:|
| 3 | 75 |
| 5 | $x$ |

Mais carne → mais caro (diretamente proporcional):

$$\\frac{3}{5} = \\frac{75}{x} \\implies 3x = 375 \\implies x = 125$$

**Resposta:** 5 kg custam R\\$ 125,00.

### Regra de três inversa

**Exemplo:** Se 4 torneiras enchem um tanque em 6 horas, em quanto tempo 8 torneiras enchem o mesmo tanque?

| Torneiras | Tempo (h) |
|:---------:|:---------:|
| 4 | 6 |
| 8 | $x$ |

Mais torneiras → menos tempo (inversamente proporcional). Invertemos uma das colunas:

$$\\frac{4}{8} = \\frac{x}{6} \\implies 8x = 24 \\implies x = 3$$

**Resposta:** 8 torneiras enchem o tanque em 3 horas.`,
          },
          {
            titulo: 'Regra de Três Composta',
            tipo: 'texto',
            corpo: `## Regra de Três Composta

Usamos a regra de três **composta** quando há **três ou mais grandezas** envolvidas.

### Método

1. Identifique a grandeza que contém a incógnita
2. Analise cada uma das demais grandezas em relação à grandeza-incógnita: é direta ou inversa?
3. Monte a proporção (invertendo as razões das grandezas inversas)

### Exemplo

**Problema:** Se 5 máquinas produzem 200 peças em 4 dias, quantas peças 8 máquinas produzem em 6 dias?

Grandeza-incógnita: **peças** ($x$).

| Máquinas | Dias | Peças |
|:--------:|:----:|:-----:|
| 5 | 4 | 200 |
| 8 | 6 | $x$ |

Análise:
- Mais máquinas → **mais** peças (direta) → mantém $\\frac{5}{8}$
- Mais dias → **mais** peças (direta) → mantém $\\frac{4}{6}$

Montando:
$$\\frac{200}{x} = \\frac{5}{8} \\cdot \\frac{4}{6} = \\frac{20}{48} = \\frac{5}{12}$$

$$5x = 200 \\cdot 12 = 2400 \\implies x = 480$$

**Resposta:** 8 máquinas produzem **480 peças** em 6 dias.`,
          },
          {
            titulo: 'Porcentagem',
            tipo: 'texto',
            corpo: `## Porcentagem

**Porcentagem** significa "por cento", ou seja, uma fração com denominador 100:

$$25\\% = \\frac{25}{100} = 0{,}25$$

### Cálculo direto

Para calcular $p\\%$ de um valor $V$:

$$\\text{Resultado} = V \\cdot \\frac{p}{100}$$

**Exemplo:** 30% de R\\$ 250,00:
$$250 \\times 0{,}30 = R\\$\\ 75{,}00$$

### Desconto

$$\\text{Preço final} = V \\cdot (1 - \\frac{d}{100})$$

**Exemplo:** Produto de R\\$ 200,00 com 15% de desconto:
$$200 \\times (1 - 0{,}15) = 200 \\times 0{,}85 = R\\$\\ 170{,}00$$

### Acréscimo

$$\\text{Preço final} = V \\cdot (1 + \\frac{a}{100})$$

**Exemplo:** Produto de R\\$ 80,00 com aumento de 25%:
$$80 \\times (1 + 0{,}25) = 80 \\times 1{,}25 = R\\$\\ 100{,}00$$

### Aumentos e descontos sucessivos

**Atenção!** Aumentos e descontos de mesma taxa **não se anulam**.

**Exemplo:** Um produto de R\\$ 100,00 sofre aumento de 10% e depois desconto de 10%:
$$100 \\times 1{,}10 = 110 \\quad \\to \\quad 110 \\times 0{,}90 = R\\$\\ 99{,}00$$

O preço final é R\\$ 99,00, **não** R\\$ 100,00! Isso ocorre porque o desconto incide sobre o **novo valor** (maior), não sobre o original.

### Fator multiplicativo

A forma mais eficiente de trabalhar com porcentagem em série:

$$\\text{Preço final} = V \\cdot f_1 \\cdot f_2 \\cdot f_3 \\cdots$$

onde cada fator é:
- Aumento de $p\\%$: $f = 1 + \\frac{p}{100}$
- Desconto de $p\\%$: $f = 1 - \\frac{p}{100}$`,
          },
          {
            titulo: 'Exemplo Resolvido — Porcentagem no Dia a Dia',
            tipo: 'exemplo',
            corpo: `## Exemplo: Compras com desconto progressivo

**Problema:** Uma loja oferece 20% de desconto para pagamento à vista. Além disso, clientes com cartão fidelidade ganham mais 5% de desconto sobre o preço já reduzido. Se um produto custa R\\$ 350,00, qual o preço final para um cliente com cartão fidelidade pagando à vista?

**Resolução:**

**Passo 1** — Desconto de 20% (à vista):
$$350 \\times (1 - 0{,}20) = 350 \\times 0{,}80 = R\\$\\ 280{,}00$$

**Passo 2** — Desconto de 5% (fidelidade) sobre R\\$ 280,00:
$$280 \\times (1 - 0{,}05) = 280 \\times 0{,}95 = R\\$\\ 266{,}00$$

**Método rápido (fator multiplicativo):**
$$350 \\times 0{,}80 \\times 0{,}95 = 350 \\times 0{,}76 = R\\$\\ 266{,}00$$

> 💡 Note que o desconto total **não** é 25% ($350 \\times 0{,}75 = 262{,}50$). Os descontos sucessivos resultam em um desconto efetivo de 24%.

**Resposta:** O preço final é **R\\$ 266,00**.`,
          },
          {
            titulo: 'Juros Simples',
            tipo: 'texto',
            corpo: `## Juros Simples

No regime de **juros simples**, os juros são calculados sempre sobre o **capital inicial** (valor aplicado).

$$J = C \\cdot i \\cdot t$$

onde:
- $J$ = juros
- $C$ = capital inicial
- $i$ = taxa de juros (em forma decimal)
- $t$ = tempo (na mesma unidade da taxa)

O **montante** (valor total ao final) é:

$$M = C + J = C \\cdot (1 + i \\cdot t)$$

### Exemplo

**Problema:** João aplica R\\$ 2.000,00 a uma taxa de juros simples de 3% ao mês por 8 meses. Qual o montante?

$$J = 2000 \\times 0{,}03 \\times 8 = R\\$\\ 480{,}00$$
$$M = 2000 + 480 = R\\$\\ 2.480{,}00$$

> 💡 **Cuidado com as unidades!** Se a taxa é "ao mês", o tempo deve estar em meses. Se a taxa é "ao ano", o tempo em anos.`,
          },
          {
            titulo: 'Exemplo Resolvido — Regra de Três na Cozinha',
            tipo: 'exemplo',
            corpo: `## Exemplo: Adaptando uma receita

**Problema:** Uma receita de bolo para 8 pessoas usa 360 g de farinha, 240 g de açúcar e 4 ovos. Quantos gramas de cada ingrediente e quantos ovos são necessários para fazer o bolo para 12 pessoas?

**Resolução:**

A relação entre pessoas e ingredientes é **diretamente proporcional** (mais pessoas → mais ingredientes).

**Farinha:**
$$\\frac{8}{12} = \\frac{360}{x} \\implies x = \\frac{12 \\times 360}{8} = \\frac{4320}{8} = 540 \\text{ g}$$

**Açúcar:**
$$\\frac{8}{12} = \\frac{240}{x} \\implies x = \\frac{12 \\times 240}{8} = \\frac{2880}{8} = 360 \\text{ g}$$

**Ovos:**
$$\\frac{8}{12} = \\frac{4}{x} \\implies x = \\frac{12 \\times 4}{8} = 6 \\text{ ovos}$$

**Resposta:** Para 12 pessoas: **540 g** de farinha, **360 g** de açúcar e **6 ovos**.

> 💡 **Atalho:** O fator de escala é $\\frac{12}{8} = 1{,}5$. Basta multiplicar tudo por 1,5.`,
          },
          {
            titulo: 'Fórmulas Essenciais — Matemática Básica',
            tipo: 'formula',
            corpo: `## Resumo de Fórmulas

### Razão e Proporção
$$\\frac{a}{b} = \\frac{c}{d} \\implies a \\cdot d = b \\cdot c$$

### Porcentagem
$$p\\% \\text{ de } V = V \\cdot \\frac{p}{100}$$

$$\\text{Desconto: } V_{\\text{final}} = V \\cdot \\left(1 - \\frac{d}{100}\\right)$$

$$\\text{Acréscimo: } V_{\\text{final}} = V \\cdot \\left(1 + \\frac{a}{100}\\right)$$

### Juros Simples
$$J = C \\cdot i \\cdot t \\qquad M = C(1 + i \\cdot t)$$`,
          },
        ],
        explicacao:
          'Estes são os fundamentos que aparecem em praticamente todas as provas. Dominar regra de três simples e composta resolve a maioria dos problemas de proporção e porcentagem.\n\nRegra de três simples:\nSe 100% → valor total\nEntão X% → valor parcial\n\nDica: sempre identifique as grandezas e verifique se são diretamente ou inversamente proporcionais.',
        imagemDescricao: 'Diagrama visual de uma regra de três com setas indicando proporção direta',
        formulasChave: [
          'Porcentagem: P = (parte / total) × 100',
          'Regra de três simples direta: a/b = c/x → x = (b × c) / a',
          'Regra de três simples inversa: a × b = c × x → x = (a × b) / c',
          'Razão: a/b (lê-se "a está para b")',
          'Proporção: a/b = c/d (produto dos meios = produto dos extremos)',
          'Desconto: valor_final = valor_original × (1 − taxa/100)',
          'Acréscimo: valor_final = valor_original × (1 + taxa/100)',
        ],
        dicasProva: [
          'Identifique se as grandezas são diretamente ou inversamente proporcionais antes de montar a regra de três.',
          'Em problemas de porcentagem, transforme a porcentagem em fração decimal (ex.: 25% = 0,25).',
          'Desconto sobre desconto não é a soma — calcule cada desconto separadamente.',
          'Na regra de três composta, analise cada par de grandezas separadamente.',
          'Atenção aos problemas com "a mais" e "a menos" — eles pedem a diferença, não o valor total.',
        ],
        errosComuns: [
          'Montar a regra de três invertida — conferir se as grandezas são diretamente ou inversamente proporcionais.',
          'Somar porcentagens de bases diferentes (ex.: aumento de 10% seguido de 20% não é 30%).',
          'Confundir razão com fração comum — razão compara grandezas, fração representa parte de um todo.',
          'Esquecer de converter unidades antes de montar a proporção.',
          'Calcular porcentagem "sobre" o valor errado (sobre o original vs. sobre o novo valor).',
        ],
        exemplosResolvidos: [
          {
            enunciado:
              'Um produto custa R$ 80,00 e recebeu um desconto de 15%. Qual o valor final do produto?',
            passos: [
              'Identificar o valor original: R$ 80,00.',
              'Calcular o valor do desconto: 15% de 80 = 0,15 × 80 = R$ 12,00.',
              'Subtrair o desconto do valor original: 80 − 12 = R$ 68,00.',
              'Alternativa rápida: 80 × (1 − 0,15) = 80 × 0,85 = R$ 68,00.',
            ],
            resposta: 'O valor final do produto é R$ 68,00.',
          },
          {
            enunciado:
              'Se 5 pedreiros constroem um muro em 12 dias, em quantos dias 10 pedreiros construiriam o mesmo muro?',
            passos: [
              'Identificar as grandezas: pedreiros e dias.',
              'Mais pedreiros → menos dias: grandezas inversamente proporcionais.',
              'Montar a proporção inversa: 5 × 12 = 10 × x.',
              'Resolver: 60 = 10x → x = 6 dias.',
            ],
            resposta: '10 pedreiros construiriam o muro em 6 dias.',
          },
        ],
        exercicios: [
          {
            id: 'mat-bas-1',
            enunciado:
              'Em uma escola com 800 alunos, 35% praticam esportes. Quantos alunos praticam esportes?',
            alternativas: [
              '350',
              '280',
              '300',
              '250',
              '320',
            ],
            respostaCorreta: 1,
            explicacao:
              '35% de 800 = 0,35 × 800 = 280 alunos.',
            dificuldade: 'facil',
          },
          {
            id: 'mat-bas-2',
            enunciado:
              'Se 3 máquinas produzem 150 peças em 4 horas, quantas peças 6 máquinas produzem em 4 horas?',
            alternativas: [
              '150',
              '200',
              '250',
              '300',
              '450',
            ],
            respostaCorreta: 3,
            explicacao:
              'Mais máquinas → mais peças (diretamente proporcional). 3/6 = 150/x → x = (6 × 150) / 3 = 300 peças.',
            dificuldade: 'facil',
          },
          {
            id: 'mat-bas-3',
            enunciado:
              'Um produto sofreu um aumento de 20% e depois um desconto de 20% sobre o novo preço. Se o preço original era R$ 100,00, qual é o preço final?',
            alternativas: [
              'R$ 100,00',
              'R$ 96,00',
              'R$ 104,00',
              'R$ 98,00',
              'R$ 80,00',
            ],
            respostaCorreta: 1,
            explicacao:
              'Aumento de 20%: 100 × 1,20 = R$ 120,00. Desconto de 20% sobre 120: 120 × 0,80 = R$ 96,00. Aumentos e descontos de mesma taxa não se anulam!',
            dificuldade: 'medio',
          },
          {
            id: 'mat-bas-4',
            enunciado:
              'Em uma receita, a razão entre farinha e açúcar é 3:2. Se forem usados 450 g de farinha, quantos gramas de açúcar serão necessários?',
            alternativas: [
              '200 g',
              '250 g',
              '300 g',
              '350 g',
              '400 g',
            ],
            respostaCorreta: 2,
            explicacao:
              'Razão farinha/açúcar = 3/2. Logo 450/x = 3/2 → 3x = 900 → x = 300 g.',
            dificuldade: 'medio',
          },
          {
            id: 'mat-bas-5',
            enunciado:
              'Uma torneira enche um tanque em 6 horas. Outra torneira enche o mesmo tanque em 3 horas. Trabalhando juntas, em quanto tempo enchem o tanque?',
            alternativas: [
              '4 horas',
              '4,5 horas',
              '3 horas',
              '2 horas',
              '1,5 hora',
            ],
            respostaCorreta: 3,
            explicacao:
              'Torneira 1 enche 1/6 do tanque por hora. Torneira 2 enche 1/3 por hora. Juntas: 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2 do tanque por hora. Tempo = 1 / (1/2) = 2 horas.',
            dificuldade: 'dificil',
          },
        ],
      },
    },
    {
      id: 'sequencias-pa',
      titulo: 'Sequências (PA)',
      peso: 15,
      conteudo: {
        resumo: 'Progressão Aritmética: razão, termo geral e soma dos termos.',
        secoes: [
          {
            titulo: 'Introdução — O que é uma Sequência?',
            tipo: 'texto',
            corpo: `## Sequências Numéricas

Uma **sequência numérica** é uma lista ordenada de números que segue uma **regra de formação**. Cada número da lista é chamado de **termo** e ocupa uma posição específica.

**Exemplos:**
- $(2, 4, 6, 8, 10, \\ldots)$ — os números pares positivos
- $(1, 4, 9, 16, 25, \\ldots)$ — os quadrados perfeitos
- $(1, 1, 2, 3, 5, 8, 13, \\ldots)$ — a sequência de Fibonacci

A notação padrão usa $a_n$ para representar o $n$-ésimo termo: $a_1$ é o primeiro, $a_2$ o segundo, e assim por diante.

### Progressão Aritmética (PA)

No vestibular UNIVESP, o foco é na **Progressão Aritmética** (PA), o tipo mais fundamental de sequência.

> Uma PA é uma sequência em que a **diferença entre cada termo e o seu antecessor é constante**. Essa diferença constante é chamada de **razão** ($r$).

### Classificação das PAs

| Tipo | Condição | Exemplo |
|------|----------|---------|
| PA crescente | $r > 0$ | $(3, 7, 11, 15, \\ldots)$ com $r = 4$ |
| PA decrescente | $r < 0$ | $(20, 17, 14, 11, \\ldots)$ com $r = -3$ |
| PA constante | $r = 0$ | $(5, 5, 5, 5, \\ldots)$ com $r = 0$ |`,
          },
          {
            titulo: 'Como Identificar e Encontrar a Razão',
            tipo: 'texto',
            corpo: `## Identificando uma PA

Para verificar se uma sequência é uma PA, calcule a diferença entre termos consecutivos. Se essa diferença for **sempre a mesma**, é uma PA.

### Cálculo da razão

$$r = a_2 - a_1 = a_3 - a_2 = a_4 - a_3 = \\ldots = a_n - a_{n-1}$$

**Exemplo 1:** A sequência $(5, 9, 13, 17, 21)$ é uma PA?
- $9 - 5 = 4$
- $13 - 9 = 4$
- $17 - 13 = 4$
- $21 - 17 = 4$

Sim! É uma PA com $r = 4$.

**Exemplo 2:** A sequência $(2, 4, 7, 11)$ é uma PA?
- $4 - 2 = 2$
- $7 - 4 = 3$

Não! As diferenças não são iguais, portanto **não é PA**.

> 💡 **Na prova:** Se o problema diz "três termos em PA", use a propriedade do termo médio: o termo do meio é a **média aritmética** dos extremos. Ou seja, se $(a, b, c)$ é PA, então $b = \\frac{a + c}{2}$.`,
          },
          {
            titulo: 'Termo Geral da PA',
            tipo: 'texto',
            corpo: `## Fórmula do Termo Geral

A fórmula do termo geral permite calcular **qualquer termo** da PA diretamente, sem precisar listar todos os anteriores:

$$a_n = a_1 + (n - 1) \\cdot r$$

onde:
- $a_n$ = valor do $n$-ésimo termo (o que queremos encontrar)
- $a_1$ = primeiro termo da PA
- $n$ = posição do termo
- $r$ = razão da PA

### De onde vem essa fórmula?

Observe o padrão:
- $a_1 = a_1$
- $a_2 = a_1 + r$
- $a_3 = a_1 + 2r$
- $a_4 = a_1 + 3r$
- $\\vdots$
- $a_n = a_1 + (n-1)r$

A cada passo, somamos $r$ mais uma vez. Do primeiro ao $n$-ésimo termo, somamos $r$ exatamente $(n - 1)$ vezes.

### Variação da fórmula

Podemos generalizar para calcular um termo a partir de **qualquer outro** termo conhecido:

$$a_n = a_k + (n - k) \\cdot r$$

Isso é útil quando o problema não fornece $a_1$ diretamente, mas fornece outro termo.`,
          },
          {
            titulo: 'Exemplo — Termo Geral',
            tipo: 'exemplo',
            corpo: `## Exemplo 1: Encontrar um termo distante

**Problema:** Na PA $(3, 7, 11, 15, \\ldots)$, determine o 50º termo.

**Resolução:**
- $a_1 = 3$, $r = 7 - 3 = 4$, $n = 50$

$$a_{50} = 3 + (50 - 1) \\cdot 4 = 3 + 49 \\cdot 4 = 3 + 196 = 199$$

**Resposta:** O 50º termo é $a_{50} = 199$.

---

## Exemplo 2: Encontrar a posição de um termo

**Problema:** Na PA $(2, 5, 8, 11, \\ldots)$, o número 302 é um termo? Se sim, qual é sua posição?

**Resolução:**
- $a_1 = 2$, $r = 3$, $a_n = 302$

$$302 = 2 + (n - 1) \\cdot 3$$
$$300 = (n - 1) \\cdot 3$$
$$n - 1 = 100$$
$$n = 101$$

Como $n = 101$ é um número natural, **sim**, 302 é o 101º termo da PA.

---

## Exemplo 3: Encontrar a razão dados dois termos

**Problema:** Em uma PA, $a_3 = 10$ e $a_8 = 30$. Qual é a razão?

**Resolução:** Usando $a_n = a_k + (n - k) \\cdot r$:

$$a_8 = a_3 + (8 - 3) \\cdot r$$
$$30 = 10 + 5r$$
$$5r = 20 \\implies r = 4$$

**Resposta:** A razão da PA é $r = 4$.`,
          },
          {
            titulo: 'Soma dos Termos de uma PA',
            tipo: 'texto',
            corpo: `## Soma dos $n$ Primeiros Termos

A soma dos $n$ primeiros termos de uma PA é dada por:

$$S_n = \\frac{n \\cdot (a_1 + a_n)}{2}$$

### Intuição da fórmula

Imagine a PA $(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)$. A soma é:

$$S_{10} = 1 + 2 + 3 + \\ldots + 10$$

Gauss percebeu que podemos **emparelhar** os termos simétricos:
- $1 + 10 = 11$
- $2 + 9 = 11$
- $3 + 8 = 11$
- $4 + 7 = 11$
- $5 + 6 = 11$

São 5 pares, cada um somando 11:

$$S_{10} = 5 \\times 11 = 55$$

A fórmula generaliza essa ideia: a soma do primeiro com o último termo, multiplicada pela metade do número de termos.

### Fórmula alternativa (quando $a_n$ não é conhecido)

Se você não conhece $a_n$, pode substituir pela fórmula do termo geral:

$$S_n = \\frac{n \\cdot (2a_1 + (n-1) \\cdot r)}{2}$$

### Número de termos

Para encontrar quantos termos a PA possui (quando se conhece o primeiro e o último):

$$n = \\frac{a_n - a_1}{r} + 1$$`,
          },
          {
            titulo: 'Exemplo — Soma de uma PA',
            tipo: 'exemplo',
            corpo: `## Exemplo: Soma dos termos de uma PA

**Problema:** Calcule a soma de todos os múltiplos de 3 entre 1 e 100.

**Resolução:**

**Passo 1** — Identificar a PA: $(3, 6, 9, 12, \\ldots, 99)$
- $a_1 = 3$, $r = 3$, $a_n = 99$

**Passo 2** — Encontrar o número de termos:
$$n = \\frac{a_n - a_1}{r} + 1 = \\frac{99 - 3}{3} + 1 = \\frac{96}{3} + 1 = 32 + 1 = 33$$

**Passo 3** — Aplicar a fórmula da soma:
$$S_{33} = \\frac{33 \\cdot (3 + 99)}{2} = \\frac{33 \\cdot 102}{2} = \\frac{3366}{2} = 1683$$

**Resposta:** A soma de todos os múltiplos de 3 entre 1 e 100 é $S = 1683$.

---

## Exemplo: Problema contextualizado

**Problema:** Um anfiteatro tem 20 fileiras. A primeira fileira tem 15 assentos e cada fileira seguinte tem 2 assentos a mais que a anterior. Quantos assentos o anfiteatro tem no total?

**Resolução:**

Os assentos formam a PA $(15, 17, 19, 21, \\ldots)$ com $a_1 = 15$, $r = 2$ e $n = 20$.

**Último termo:**
$$a_{20} = 15 + (20 - 1) \\cdot 2 = 15 + 38 = 53$$

**Soma:**
$$S_{20} = \\frac{20 \\cdot (15 + 53)}{2} = \\frac{20 \\cdot 68}{2} = \\frac{1360}{2} = 680$$

**Resposta:** O anfiteatro tem **680 assentos**.`,
          },
          {
            titulo: 'Propriedade do Termo Médio',
            tipo: 'importante',
            corpo: `## Propriedade do Termo Médio

Em qualquer PA, todo termo (exceto o primeiro e o último) é a **média aritmética** de seus dois vizinhos:

$$a_k = \\frac{a_{k-1} + a_{k+1}}{2}$$

Essa propriedade é extremamente útil em problemas que envolvem **três termos em PA**.

### Estratégia: representar três termos em PA

Se o problema diz "três números em PA", em vez de usar $a$, $a+r$, $a+2r$, use:

$$(x - r),\\quad x,\\quad (x + r)$$

**Vantagem:** a soma dos três termos é simplesmente $3x$, o que simplifica muito os cálculos.

### Exemplo

**Problema:** Três números formam uma PA cuja soma é 18 e cujo produto é 162. Quais são os números?

**Resolução:**
Sejam os termos $(x - r)$, $x$, $(x + r)$.

Soma: $(x - r) + x + (x + r) = 3x = 18 \\implies x = 6$

Produto: $(6 - r) \\cdot 6 \\cdot (6 + r) = 162$

$$6 \\cdot (36 - r^2) = 162$$
$$36 - r^2 = 27$$
$$r^2 = 9 \\implies r = 3$$ (ou $r = -3$)

Os termos são: $3, 6, 9$ (ou $9, 6, 3$).`,
          },
          {
            titulo: 'Fórmulas Essenciais — PA',
            tipo: 'formula',
            corpo: `## Resumo de Fórmulas

### Razão
$$r = a_{n} - a_{n-1}$$

### Termo Geral
$$a_n = a_1 + (n - 1) \\cdot r$$

### Soma dos $n$ primeiros termos
$$S_n = \\frac{n(a_1 + a_n)}{2}$$

### Forma alternativa da soma
$$S_n = \\frac{n(2a_1 + (n-1)r)}{2}$$

### Número de termos
$$n = \\frac{a_n - a_1}{r} + 1$$

### Propriedade do termo médio
$$a_k = \\frac{a_{k-1} + a_{k+1}}{2}$$`,
          },
        ],
        explicacao:
          'Uma Progressão Aritmética (PA) é uma sequência numérica em que a diferença entre cada termo e o anterior é constante. Essa diferença constante é chamada de razão (r).\n\nClassificação:\n• PA crescente: r > 0 (ex.: 2, 5, 8, 11...)\n• PA decrescente: r < 0 (ex.: 20, 17, 14, 11...)\n• PA constante: r = 0 (ex.: 5, 5, 5, 5...)\n\nComo identificar uma PA: verifique se a diferença entre termos consecutivos é sempre a mesma. Se a2 − a1 = a3 − a2 = a4 − a3, então é uma PA.\n\nTermo geral: an = a1 + (n − 1) × r\nSoma dos n primeiros termos: Sn = n × (a1 + an) / 2\n\nPropriedade útil: em uma PA de 3 termos (a, b, c), o termo do meio é a média aritmética dos extremos: b = (a + c) / 2.',
        formulasChave: [
          'Razão: r = a2 − a1 (diferença entre termos consecutivos)',
          'Termo geral: an = a1 + (n − 1) × r',
          'Soma dos n primeiros termos: Sn = n × (a1 + an) / 2',
          'Soma alternativa: Sn = n × (2 × a1 + (n − 1) × r) / 2',
          'Propriedade do termo médio: ak = (ak−1 + ak+1) / 2',
          'Número de termos: n = (an − a1) / r + 1',
        ],
        dicasProva: [
          'Sempre identifique a1 (primeiro termo) e r (razão) antes de aplicar qualquer fórmula.',
          'Para encontrar a razão, subtraia qualquer termo pelo seu antecessor.',
          'A fórmula da soma exige conhecer an — calcule-o primeiro com o termo geral se necessário.',
          'Em problemas com "três termos em PA", use (x − r), x, (x + r) para simplificar os cálculos.',
          'Se o problema pede "o 20º termo", use direto a fórmula an = a1 + (n − 1) × r.',
        ],
        errosComuns: [
          'Confundir PA com PG — na PA a razão é somada, na PG é multiplicada.',
          'Esquecer o (n − 1) na fórmula do termo geral e usar n × r diretamente.',
          'Errar o sinal da razão em PA decrescente (a razão é negativa).',
          'Usar a fórmula da soma sem calcular o último termo corretamente.',
          'Confundir a posição do termo (n) com o valor do termo (an).',
        ],
        exemplosResolvidos: [
          {
            enunciado:
              'Em uma PA onde o primeiro termo é 3 e a razão é 4, determine o 15º termo.',
            passos: [
              'Identificar os dados: a1 = 3, r = 4, n = 15.',
              'Aplicar a fórmula do termo geral: an = a1 + (n − 1) × r.',
              'Substituir: a15 = 3 + (15 − 1) × 4 = 3 + 14 × 4.',
              'Calcular: a15 = 3 + 56 = 59.',
            ],
            resposta: 'O 15º termo da PA é 59.',
          },
          {
            enunciado:
              'Calcule a soma dos 20 primeiros termos da PA (2, 5, 8, 11, ...).',
            passos: [
              'Identificar: a1 = 2, r = 5 − 2 = 3, n = 20.',
              'Calcular o 20º termo: a20 = 2 + (20 − 1) × 3 = 2 + 57 = 59.',
              'Aplicar a fórmula da soma: Sn = n × (a1 + an) / 2.',
              'Substituir: S20 = 20 × (2 + 59) / 2 = 20 × 61 / 2 = 610.',
            ],
            resposta: 'A soma dos 20 primeiros termos é 610.',
          },
        ],
        exercicios: [
          {
            id: 'mat-pa-1',
            enunciado:
              'Qual é a razão da PA (7, 11, 15, 19, ...)?',
            alternativas: ['3', '4', '5', '7', '8'],
            respostaCorreta: 1,
            explicacao:
              'A razão é a diferença entre termos consecutivos: r = 11 − 7 = 4.',
            dificuldade: 'facil',
          },
          {
            id: 'mat-pa-2',
            enunciado:
              'O 10º termo da PA (1, 4, 7, 10, ...) é:',
            alternativas: ['25', '28', '30', '31', '34'],
            respostaCorreta: 1,
            explicacao:
              'a1 = 1, r = 3. a10 = 1 + (10 − 1) × 3 = 1 + 27 = 28.',
            dificuldade: 'facil',
          },
          {
            id: 'mat-pa-3',
            enunciado:
              'Em uma PA, o primeiro termo é 5 e o décimo termo é 32. Qual é a razão dessa PA?',
            alternativas: ['2', '3', '4', '5', '27'],
            respostaCorreta: 1,
            explicacao:
              'an = a1 + (n − 1) × r → 32 = 5 + (10 − 1) × r → 27 = 9r → r = 3.',
            dificuldade: 'medio',
          },
          {
            id: 'mat-pa-4',
            enunciado:
              'A soma dos 10 primeiros termos da PA (3, 7, 11, 15, ...) é:',
            alternativas: ['210', '200', '195', '180', '220'],
            respostaCorreta: 0,
            explicacao:
              'a1 = 3, r = 4. a10 = 3 + 9 × 4 = 39. S10 = 10 × (3 + 39) / 2 = 10 × 42 / 2 = 210.',
            dificuldade: 'medio',
          },
          {
            id: 'mat-pa-5',
            enunciado:
              'Três números formam uma PA de soma 21 e produto 280. Qual é o maior desses números?',
            alternativas: ['10', '12', '7', '14', '9'],
            respostaCorreta: 0,
            explicacao:
              'Sejam os termos (a − r), a, (a + r). Soma: 3a = 21 → a = 7. Produto: (7 − r) × 7 × (7 + r) = 280 → 7 × (49 − r²) = 280 → 49 − r² = 40 → r² = 9 → r = 3. Os termos são 4, 7, 10. O maior é 10.',
            dificuldade: 'dificil',
          },
        ],
      },
    },
    {
      id: 'estatistica-probabilidade',
      titulo: 'Estatística e Probabilidade',
      peso: 10,
      conteudo: {
        resumo: 'Média aritmética, moda, mediana e probabilidade simples.',
        secoes: [
          {
            titulo: 'Introdução à Estatística',
            tipo: 'texto',
            corpo: `## Estatística e Probabilidade no Vestibular

A **Estatística** é a área da Matemática que coleta, organiza, analisa e interpreta dados. A **Probabilidade** estuda a chance de eventos ocorrerem. No vestibular UNIVESP, esse tópico representa **10% da prova de Matemática** e frequentemente aparece em questões que envolvem **leitura de gráficos e tabelas**.

### O que você vai aprender

- **Medidas de tendência central**: média, moda e mediana
- **Média ponderada**: quando os valores têm pesos diferentes
- **Probabilidade**: de eventos simples e compostos
- **Interpretação de dados** em tabelas e gráficos`,
          },
          {
            titulo: 'Média Aritmética',
            tipo: 'texto',
            corpo: `## Média Aritmética Simples

A **média aritmética** é a medida de tendência central mais conhecida. É calculada somando todos os valores e dividindo pela quantidade de valores:

$$\\bar{x} = \\frac{x_1 + x_2 + x_3 + \\ldots + x_n}{n}$$

### Exemplo

As notas de um aluno em 4 provas foram: 7, 8, 5 e 6.

$$\\bar{x} = \\frac{7 + 8 + 5 + 6}{4} = \\frac{26}{4} = 6{,}5$$

### Propriedade importante

Se adicionarmos (ou subtrairmos) uma constante $k$ a todos os valores, a média também aumenta (ou diminui) em $k$:

$$\\bar{x}_{\\text{novo}} = \\bar{x} + k$$

## Média Aritmética Ponderada

Quando os valores têm **pesos** diferentes (importâncias diferentes), usamos a média ponderada:

$$\\bar{x}_p = \\frac{x_1 \\cdot p_1 + x_2 \\cdot p_2 + \\ldots + x_n \\cdot p_n}{p_1 + p_2 + \\ldots + p_n}$$

### Exemplo

Um vestibular atribui pesos diferentes às provas: Redação (peso 3), Matemática (peso 2) e Português (peso 1). As notas de um candidato foram: Redação = 8, Matemática = 6, Português = 7.

$$\\bar{x}_p = \\frac{8 \\times 3 + 6 \\times 2 + 7 \\times 1}{3 + 2 + 1} = \\frac{24 + 12 + 7}{6} = \\frac{43}{6} \\approx 7{,}17$$

> 💡 **Na prova:** Quando o problema menciona "pesos", "importância" ou "créditos", use a média **ponderada**, não a simples.`,
          },
          {
            titulo: 'Moda e Mediana',
            tipo: 'texto',
            corpo: `## Moda

A **moda** ($Mo$) é o valor que **mais se repete** em um conjunto de dados.

### Classificação

| Tipo | Descrição | Exemplo |
|------|-----------|---------|
| Amodal | Nenhum valor se repete | $\\{2, 4, 6, 8\\}$ |
| Unimodal | Um valor se repete mais | $\\{2, 3, 3, 5, 7\\}$ → $Mo = 3$ |
| Bimodal | Dois valores empatam | $\\{1, 2, 2, 5, 5, 8\\}$ → $Mo = 2$ e $5$ |
| Multimodal | Três ou mais empatam | $\\{1, 1, 3, 3, 5, 5\\}$ |

## Mediana

A **mediana** ($Md$) é o valor que **divide o conjunto ao meio** quando os dados estão **ordenados** em ordem crescente (ou decrescente).

### Como calcular

**Passo 1**: Ordene os dados em ordem crescente.

**Passo 2**: Encontre a posição central.

- Se o número de dados $n$ é **ímpar**: a mediana é o valor na posição $\\frac{n+1}{2}$.
- Se $n$ é **par**: a mediana é a média dos valores nas posições $\\frac{n}{2}$ e $\\frac{n}{2} + 1$.

### Exemplo com $n$ ímpar

Dados: $\\{3, 7, 1, 9, 5\\}$

Ordenados: $\\{1, 3, 5, 7, 9\\}$ → $n = 5$

Posição: $\\frac{5+1}{2} = 3$ª posição → $Md = 5$

### Exemplo com $n$ par

Dados: $\\{4, 8, 2, 6\\}$

Ordenados: $\\{2, 4, 6, 8\\}$ → $n = 4$

Posições centrais: $\\frac{4}{2} = 2$ª e $3$ª → $Md = \\frac{4 + 6}{2} = 5$

> 💡 **Erro clássico no vestibular:** Calcular a mediana **sem ordenar** os dados primeiro. A mediana depende da **posição**, não do valor original.`,
          },
          {
            titulo: 'Comparando Média, Moda e Mediana',
            tipo: 'destaque',
            corpo: `## Quando usar cada medida?

| Medida | Melhor uso | Sensível a extremos? |
|--------|-----------|---------------------|
| **Média** | Dados uniformes, sem valores muito discrepantes | **Sim** — valores extremos distorcem a média |
| **Mediana** | Dados com valores extremos (salários, por exemplo) | **Não** — ignora os extremos |
| **Moda** | Dados categóricos ou quando queremos o "mais frequente" | **Não** |

### Exemplo revelador

Salários de uma empresa: R\\$ 1.500, R\\$ 1.800, R\\$ 2.000, R\\$ 2.200 e R\\$ 50.000 (o CEO).

- **Média**: $\\frac{1500 + 1800 + 2000 + 2200 + 50000}{5} = R\\$\\ 11.500$ (distorcida pelo CEO)
- **Mediana**: $R\\$\\ 2.000$ (valor central, mais representativo)

> 💡 Em vestibulares, questões que pedem interpretação de dados frequentemente exploram essa diferença entre média e mediana.`,
          },
          {
            titulo: 'Probabilidade — Conceitos Fundamentais',
            tipo: 'texto',
            corpo: `## Probabilidade

A **probabilidade** mede a chance de um evento ocorrer. O valor está sempre entre 0 e 1 (ou 0% e 100%):

$$P(E) = \\frac{\\text{número de casos favoráveis}}{\\text{número de casos possíveis}}$$

### Conceitos básicos

- **Espaço amostral** ($\\Omega$): conjunto de **todos** os resultados possíveis de um experimento
- **Evento**: subconjunto do espaço amostral (o resultado que nos interessa)
- **Evento certo**: $P(E) = 1$ (vai acontecer com certeza)
- **Evento impossível**: $P(E) = 0$ (nunca acontece)

### Exemplos de espaços amostrais

**Lançamento de uma moeda:**
$$\\Omega = \\{\\text{cara}, \\text{coroa}\\} \\quad \\to \\quad |\\Omega| = 2$$

**Lançamento de um dado:**
$$\\Omega = \\{1, 2, 3, 4, 5, 6\\} \\quad \\to \\quad |\\Omega| = 6$$

**Dois dados lançados simultaneamente:**
$$|\\Omega| = 6 \\times 6 = 36 \\text{ resultados possíveis}$$

### Probabilidade complementar

A probabilidade de um evento **não** ocorrer:

$$P(\\overline{E}) = 1 - P(E)$$

Essa fórmula é extremamente útil quando é mais fácil calcular a probabilidade do evento contrário.`,
          },
          {
            titulo: 'Exemplo — Probabilidade Simples',
            tipo: 'exemplo',
            corpo: `## Exemplo 1: Dado

**Problema:** Ao lançar um dado honesto, qual a probabilidade de obter um número primo?

**Resolução:**
- Espaço amostral: $\\Omega = \\{1, 2, 3, 4, 5, 6\\}$ → $|\\Omega| = 6$
- Números primos no dado: $\\{2, 3, 5\\}$ → 3 casos favoráveis

$$P(\\text{primo}) = \\frac{3}{6} = \\frac{1}{2} = 50\\%$$

## Exemplo 2: Cartas

**Problema:** De um baralho de 52 cartas, retira-se uma ao acaso. Qual a probabilidade de ser uma carta de **copas** ou um **ás**?

**Resolução:**
- Cartas de copas: 13
- Ases: 4
- Ás de copas (contado duas vezes): 1

Pelo princípio da inclusão-exclusão:
$$P(\\text{copas ou ás}) = \\frac{13 + 4 - 1}{52} = \\frac{16}{52} = \\frac{4}{13} \\approx 30{,}8\\%$$

> 💡 **Princípio da inclusão-exclusão:** $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$. Subtraímos a interseção para não contar duas vezes.`,
          },
          {
            titulo: 'Probabilidade de Eventos Compostos',
            tipo: 'texto',
            corpo: `## Eventos Compostos

### Eventos independentes ("E")

Dois eventos são **independentes** quando a ocorrência de um **não afeta** a probabilidade do outro. A probabilidade de ambos ocorrerem é:

$$P(A \\text{ e } B) = P(A) \\cdot P(B)$$

**Exemplo:** Qual a probabilidade de lançar uma moeda e um dado e obter **cara** e **número par**?

$$P(\\text{cara}) = \\frac{1}{2} \\qquad P(\\text{par}) = \\frac{3}{6} = \\frac{1}{2}$$

$$P(\\text{cara e par}) = \\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4} = 25\\%$$

### Eventos mutuamente exclusivos ("OU")

Dois eventos são **mutuamente exclusivos** quando **não podem** ocorrer ao mesmo tempo. A probabilidade de um **ou** outro ocorrer é:

$$P(A \\text{ ou } B) = P(A) + P(B)$$

**Exemplo:** Ao lançar um dado, qual a probabilidade de obter 1 **ou** 6?

$$P(1 \\text{ ou } 6) = \\frac{1}{6} + \\frac{1}{6} = \\frac{2}{6} = \\frac{1}{3} \\approx 33{,}3\\%$$

> 💡 **Resumo prático:**
> - **"E"** (ambos ocorrem) → **multiplica** as probabilidades
> - **"OU"** (um ou outro) → **soma** as probabilidades (subtraindo a interseção se não forem exclusivos)`,
          },
          {
            titulo: 'Interpretação de Tabelas e Gráficos',
            tipo: 'importante',
            corpo: `## Leitura de Dados — Tabelas e Gráficos

Muitas questões de vestibular apresentam dados em **tabelas** ou **gráficos** e pedem cálculos estatísticos. A estratégia é:

1. **Leia o título** para entender o que os dados representam
2. **Identifique as unidades** nos eixos (se for gráfico) ou nos cabeçalhos (se for tabela)
3. **Extraia os números** necessários para o cálculo
4. **Aplique** a fórmula adequada (média, mediana, moda ou probabilidade)

### Exemplo com tabela

A tabela abaixo mostra as notas de uma turma:

| Nota | Frequência |
|:----:|:----------:|
| 5 | 3 |
| 6 | 5 |
| 7 | 8 |
| 8 | 4 |

**Média:** $\\bar{x} = \\frac{5 \\cdot 3 + 6 \\cdot 5 + 7 \\cdot 8 + 8 \\cdot 4}{3 + 5 + 8 + 4} = \\frac{15 + 30 + 56 + 32}{20} = \\frac{133}{20} = 6{,}65$

**Moda:** A nota com maior frequência é **7** ($f = 8$). Logo, $Mo = 7$.

**Mediana:** São 20 valores. Posições centrais: 10ª e 11ª. Acumulando: posições 1-3 são nota 5; 4-8 são nota 6; 9-16 são nota 7. Ambas posições 10 e 11 caem na nota 7. Logo, $Md = 7$.`,
          },
          {
            titulo: 'Fórmulas Essenciais — Estatística e Probabilidade',
            tipo: 'formula',
            corpo: `## Resumo de Fórmulas

### Medidas de tendência central

$$\\bar{x} = \\frac{\\sum x_i}{n} \\qquad \\bar{x}_p = \\frac{\\sum x_i \\cdot p_i}{\\sum p_i}$$

### Mediana
- $n$ ímpar: posição $\\frac{n+1}{2}$
- $n$ par: média das posições $\\frac{n}{2}$ e $\\frac{n}{2}+1$

### Probabilidade
$$P(E) = \\frac{\\text{favoráveis}}{\\text{possíveis}}$$

$$P(\\overline{E}) = 1 - P(E)$$

$$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$$

$$P(A \\cap B) = P(A) \\cdot P(B) \\quad \\text{(eventos independentes)}$$`,
          },
        ],
        explicacao:
          'Estatística e probabilidade são temas frequentes no vestibular, especialmente em questões que envolvem leitura e interpretação de gráficos e tabelas.\n\nMedidas de tendência central:\n• Média aritmética: soma de todos os valores dividida pela quantidade de valores.\n• Moda: valor que mais se repete no conjunto de dados.\n• Mediana: valor central quando os dados estão ordenados. Se o número de dados for par, é a média dos dois centrais.\n\nProbabilidade simples:\nA probabilidade de um evento ocorrer é dada por P(E) = número de casos favoráveis / número de casos possíveis.\n\nO resultado de uma probabilidade está sempre entre 0 (impossível) e 1 (certo), ou entre 0% e 100%.',
        formulasChave: [
          'Média aritmética: M = (x1 + x2 + ... + xn) / n',
          'Média ponderada: Mp = (x1×p1 + x2×p2 + ... + xn×pn) / (p1 + p2 + ... + pn)',
          'Mediana (n ímpar): valor da posição (n + 1) / 2',
          'Mediana (n par): média dos valores nas posições n/2 e (n/2 + 1)',
          'Moda: valor de maior frequência no conjunto',
          'Probabilidade: P(E) = casos favoráveis / casos possíveis',
          'Probabilidade complementar: P(não E) = 1 − P(E)',
        ],
        dicasProva: [
          'Em gráficos e tabelas, leia o título, os eixos e a legenda antes de responder.',
          'Para calcular a mediana, SEMPRE ordene os dados primeiro.',
          'Um conjunto pode ser amodal (sem moda), unimodal, bimodal ou multimodal.',
          'Probabilidade nunca é maior que 1 (ou 100%) — se encontrar, refaça o cálculo.',
          'Em problemas de probabilidade com dados ou moedas, liste os casos possíveis para não errar.',
        ],
        errosComuns: [
          'Calcular a mediana sem ordenar os dados previamente.',
          'Confundir média com mediana — são medidas diferentes e podem ter valores distintos.',
          'Esquecer de somar todos os pesos no denominador da média ponderada.',
          'Em probabilidade, confundir "ou" (soma) com "e" (multiplicação) de eventos.',
          'Não simplificar a fração da probabilidade e marcar alternativa errada.',
        ],
        exemplosResolvidos: [
          {
            enunciado:
              'As notas de um aluno em 5 provas foram: 7, 8, 6, 9 e 5. Calcule a média, a mediana e a moda.',
            passos: [
              'Média: M = (7 + 8 + 6 + 9 + 5) / 5 = 35 / 5 = 7.',
              'Para a mediana, ordenar os dados: 5, 6, 7, 8, 9.',
              'Como são 5 valores (ímpar), a mediana é o valor central (3ª posição): mediana = 7.',
              'Moda: nenhum valor se repete, portanto o conjunto é amodal.',
            ],
            resposta: 'Média = 7, Mediana = 7, o conjunto é amodal (sem moda).',
          },
          {
            enunciado:
              'Uma urna contém 3 bolas vermelhas, 5 bolas azuis e 2 bolas verdes. Ao retirar uma bola aleatoriamente, qual a probabilidade de ser azul?',
            passos: [
              'Calcular o total de bolas: 3 + 5 + 2 = 10 bolas.',
              'Identificar os casos favoráveis (bolas azuis): 5.',
              'Aplicar a fórmula: P(azul) = 5 / 10 = 1/2.',
              'Converter para porcentagem: 1/2 = 0,5 = 50%.',
            ],
            resposta: 'A probabilidade de retirar uma bola azul é 1/2 ou 50%.',
          },
        ],
        exercicios: [
          {
            id: 'mat-est-1',
            enunciado:
              'As idades dos alunos de uma turma são: 18, 20, 19, 18, 21, 18, 20. Qual é a moda?',
            alternativas: ['19', '20', '18', '21', '18,5'],
            respostaCorreta: 2,
            explicacao:
              'A moda é o valor que mais se repete. O valor 18 aparece 3 vezes, mais que qualquer outro. Moda = 18.',
            dificuldade: 'facil',
          },
          {
            id: 'mat-est-2',
            enunciado:
              'A média aritmética de 4 números é 15. Se um quinto número, igual a 25, for adicionado, qual será a nova média?',
            alternativas: ['16', '17', '18', '19', '20'],
            respostaCorreta: 1,
            explicacao:
              'Soma dos 4 números: 4 × 15 = 60. Com o 5º número: 60 + 25 = 85. Nova média: 85 / 5 = 17.',
            dificuldade: 'facil',
          },
          {
            id: 'mat-est-3',
            enunciado:
              'Em um conjunto de dados ordenados {2, 5, 7, 8, 10, 12}, a mediana é:',
            alternativas: ['7', '7,5', '8', '6', '5'],
            respostaCorreta: 1,
            explicacao:
              'São 6 valores (par). A mediana é a média dos valores nas posições 3 e 4: (7 + 8) / 2 = 7,5.',
            dificuldade: 'medio',
          },
          {
            id: 'mat-est-4',
            enunciado:
              'Ao lançar dois dados simultaneamente, qual é a probabilidade de a soma dos valores ser igual a 7?',
            alternativas: ['1/12', '1/6', '5/36', '7/36', '1/4'],
            respostaCorreta: 1,
            explicacao:
              'Total de resultados possíveis: 6 × 6 = 36. Combinações com soma 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 combinações. P = 6/36 = 1/6.',
            dificuldade: 'medio',
          },
          {
            id: 'mat-est-5',
            enunciado:
              'Em uma pesquisa, a média ponderada de um aluno é calculada com pesos 2, 3 e 5 para as notas das provas P1, P2 e P3, respectivamente. Se P1 = 6, P2 = 8 e P3 = 7, qual é a média ponderada?',
            alternativas: ['7,0', '7,1', '7,2', '7,3', '7,5'],
            respostaCorreta: 1,
            explicacao:
              'Mp = (6×2 + 8×3 + 7×5) / (2 + 3 + 5) = (12 + 24 + 35) / 10 = 71 / 10 = 7,1.',
            dificuldade: 'dificil',
          },
        ],
      },
    },
    {
      id: 'analise-combinatoria',
      titulo: 'Análise Combinatória',
      peso: 10,
      conteudo: {
        resumo: 'Princípio fundamental da contagem, permutação, arranjo e combinação.',
        secoes: [
          {
            titulo: 'Introdução à Análise Combinatória',
            tipo: 'texto',
            corpo: `## O que é Análise Combinatória?

A **Análise Combinatória** é o ramo da Matemática que estuda **métodos de contagem**. Em vez de listar todas as possibilidades uma a uma, usamos fórmulas e princípios que nos permitem contar de forma eficiente.

Este tópico é essencial porque:
- É base para a **Probabilidade** (para calcular probabilidades, precisamos contar casos)
- Aparece em problemas de **senhas**, **filas**, **comissões**, **anagramas** e muito mais
- Representa **10% da prova de Matemática** da UNIVESP

### Os quatro pilares

1. **Princípio Fundamental da Contagem (PFC)**
2. **Permutação** — ordena todos os elementos
3. **Arranjo** — ordena parte dos elementos (ordem importa)
4. **Combinação** — escolhe parte dos elementos (ordem não importa)`,
          },
          {
            titulo: 'Princípio Fundamental da Contagem',
            tipo: 'texto',
            corpo: `## Princípio Fundamental da Contagem (PFC)

O PFC é a base de toda a análise combinatória:

> Se uma decisão pode ser tomada de $n_1$ maneiras, e para cada uma dessas, uma segunda decisão pode ser tomada de $n_2$ maneiras, e assim por diante, então o total de maneiras de tomar **todas** as decisões é:

$$\\text{Total} = n_1 \\times n_2 \\times n_3 \\times \\ldots \\times n_k$$

### Exemplo 1: Combinação de roupas

Um estudante tem **4 camisetas**, **3 calças** e **2 tênis**. De quantas maneiras diferentes ele pode se vestir?

$$4 \\times 3 \\times 2 = 24 \\text{ maneiras}$$

### Exemplo 2: Placas de carro

Uma placa tem 3 letras (A-Z) e 4 dígitos (0-9). Quantas placas são possíveis?

$$26 \\times 26 \\times 26 \\times 10 \\times 10 \\times 10 \\times 10 = 26^3 \\times 10^4 = 175.760.000$$

### Diagrama de árvore

Para problemas pequenos, o **diagrama de árvore** é uma ferramenta visual poderosa. Cada "ramo" representa uma escolha, e cada "caminho" da raiz até uma folha representa uma possibilidade completa.

**Exemplo:** Sorvete com 2 sabores (chocolate, morango) e 2 coberturas (calda, granulado):

- Chocolate → Calda
- Chocolate → Granulado
- Morango → Calda
- Morango → Granulado

Total: $2 \\times 2 = 4$ combinações. O diagrama confirma.`,
          },
          {
            titulo: 'Fatorial',
            tipo: 'texto',
            corpo: `## O Fatorial

O **fatorial** de um número natural $n$, escrito $n!$, é o produto de todos os inteiros positivos de 1 até $n$:

$$n! = n \\times (n-1) \\times (n-2) \\times \\ldots \\times 2 \\times 1$$

### Valores importantes (decore!)

| $n$ | $n!$ |
|:---:|-----:|
| $0$ | $1$ |
| $1$ | $1$ |
| $2$ | $2$ |
| $3$ | $6$ |
| $4$ | $24$ |
| $5$ | $120$ |
| $6$ | $720$ |
| $7$ | $5.040$ |
| $8$ | $40.320$ |
| $10$ | $3.628.800$ |

### Propriedade fundamental

$$n! = n \\times (n-1)!$$

Essa propriedade permite simplificar expressões com fatoriais:

$$\\frac{8!}{6!} = \\frac{8 \\times 7 \\times 6!}{6!} = 8 \\times 7 = 56$$

> 💡 **Por que $0! = 1$?** É uma convenção matemática necessária para que as fórmulas de combinação e arranjo funcionem corretamente. Por exemplo, $C_{n,0} = \\frac{n!}{0! \\cdot n!} = 1$, o que faz sentido: há exatamente 1 maneira de não escolher nada.`,
          },
          {
            titulo: 'Permutação',
            tipo: 'texto',
            corpo: `## Permutação

A **permutação** é o número de maneiras de **ordenar todos** os $n$ elementos de um conjunto.

### Permutação simples

$$P_n = n!$$

**Exemplo:** De quantas maneiras podemos organizar 5 livros diferentes em uma prateleira?

$$P_5 = 5! = 120 \\text{ maneiras}$$

### Permutação com repetição

Quando há **elementos repetidos**, dividimos pelos fatoriais das repetições para evitar contagens duplicadas:

$$P_n^{(a, b, c, \\ldots)} = \\frac{n!}{a! \\cdot b! \\cdot c! \\cdots}$$

onde $a$, $b$, $c$, ... são as quantidades de vezes que cada elemento se repete.

**Exemplo:** Quantos anagramas tem a palavra **MATEMATICA**?

A palavra tem 10 letras: M(2), A(3), T(2), E(1), I(1), C(1).

$$P_{10}^{(2, 3, 2, 1, 1, 1)} = \\frac{10!}{2! \\cdot 3! \\cdot 2!} = \\frac{3.628.800}{2 \\cdot 6 \\cdot 2} = \\frac{3.628.800}{24} = 151.200$$

> 💡 **Quando usar permutação:** Quando a questão pede para ordenar **TODOS** os elementos — exemplos: "quantos anagramas", "de quantas formas diferentes podem se sentar em fila".`,
          },
          {
            titulo: 'Arranjo',
            tipo: 'texto',
            corpo: `## Arranjo

O **arranjo** conta o número de maneiras de escolher $p$ elementos dentre $n$ elementos **quando a ordem importa**.

$$A_{n,p} = \\frac{n!}{(n-p)!}$$

### Quando a ordem importa?

A ordem importa quando **trocar a posição dos elementos gera um resultado diferente**. Exemplos:
- Pódio de uma corrida (1º, 2º e 3º lugar são distintos)
- Senhas numéricas ($123 \\neq 321$)
- Presidente, vice e secretário de uma chapa

### Exemplo 1: Pódio

Em uma corrida com 10 competidores, de quantas maneiras o pódio (1º, 2º e 3º) pode ser formado?

$$A_{10,3} = \\frac{10!}{7!} = 10 \\times 9 \\times 8 = 720$$

### Exemplo 2: Senha

Quantas senhas de 4 dígitos **distintos** (0-9) existem?

$$A_{10,4} = \\frac{10!}{6!} = 10 \\times 9 \\times 8 \\times 7 = 5.040$$

> 💡 **Diferença crucial:** No arranjo, escolhemos **parte** dos elementos e a **ordem importa**. Compare com a permutação (todos os elementos) e com a combinação (parte, sem ordem).`,
          },
          {
            titulo: 'Combinação',
            tipo: 'texto',
            corpo: `## Combinação

A **combinação** conta o número de maneiras de escolher $p$ elementos dentre $n$ elementos **quando a ordem NÃO importa**.

$$C_{n,p} = \\binom{n}{p} = \\frac{n!}{p! \\cdot (n-p)!}$$

### Quando a ordem NÃO importa?

Quando **trocar a posição dos elementos selecionados NÃO gera um resultado diferente**. Exemplos:
- Comissão de 3 pessoas (comissão {Ana, Bia, Carlos} = {Carlos, Ana, Bia})
- Grupo de estudo
- Mão de cartas no jogo (importa quais cartas, não a ordem)

### Relação com o arranjo

$$C_{n,p} = \\frac{A_{n,p}}{p!}$$

A combinação é o arranjo **dividido** por $p!$ (o fatorial das posições), porque na combinação as diferentes ordens de um mesmo grupo são contadas como **uma só**.

### Exemplo 1: Comissão

De um grupo de 12 funcionários, quantas comissões de 4 pessoas podem ser formadas?

$$C_{12,4} = \\frac{12!}{4! \\cdot 8!} = \\frac{12 \\times 11 \\times 10 \\times 9}{4 \\times 3 \\times 2 \\times 1} = \\frac{11.880}{24} = 495$$

### Exemplo 2: Loteria

De quantas formas podemos escolher 6 números em 60 na Mega-Sena?

$$C_{60,6} = \\frac{60!}{6! \\cdot 54!} = \\frac{60 \\times 59 \\times 58 \\times 57 \\times 56 \\times 55}{720} = 50.063.860$$

> 💡 Por isso ganhar na Mega-Sena é tão difícil: há mais de **50 milhões** de combinações possíveis!`,
          },
          {
            titulo: 'Árvore de Decisão — Arranjo vs Combinação',
            tipo: 'destaque',
            corpo: `## Como Decidir: PFC, Permutação, Arranjo ou Combinação?

Siga este fluxo de decisão:

### Passo 1: O problema envolve contagem estruturada?
- **Não** (decisões independentes em etapas) → **PFC**
- **Sim** (seleção/ordenação de um grupo) → Passo 2

### Passo 2: Usamos TODOS os elementos?
- **Sim** → **Permutação** ($P_n = n!$)
- **Não** (usamos parte) → Passo 3

### Passo 3: A ORDEM importa?
- **Sim** → **Arranjo** ($A_{n,p}$)
- **Não** → **Combinação** ($C_{n,p}$)

### Palavras-chave no enunciado

| Palavra-chave | Geralmente usa |
|---------------|---------------|
| "De quantas formas", "maneiras" | PFC ou Permutação |
| "Fila", "senha", "anagrama", "código" | Arranjo ou Permutação |
| "Comissão", "equipe", "grupo", "escolher" | Combinação |
| "Pódio", "classificação", "ranking" | Arranjo |

> 💡 **Dica matadora para a prova:** Se o enunciado usa a palavra "comissão", "grupo" ou "equipe", é quase certamente **combinação**. Se usa "fila", "senha" ou "anagrama", é **arranjo** ou **permutação**.`,
          },
          {
            titulo: 'Exemplo Resolvido — Problemas Mistos',
            tipo: 'exemplo',
            corpo: `## Exemplo 1: Problema com restrição

**Problema:** Quantos números de 3 algarismos distintos podem ser formados com os dígitos $\\{1, 2, 3, 4, 5\\}$, se o número deve ser **par**?

**Resolução:**

Para ser par, o último algarismo deve ser **2** ou **4** (2 opções).

Usando o PFC (trabalhando da restrição para a liberdade):
- **Último dígito** (deve ser par): 2 opções
- **Primeiro dígito**: restam 4 opções (qualquer um dos 5, menos o já usado)
- **Segundo dígito**: restam 3 opções

$$\\text{Total} = 2 \\times 4 \\times 3 = 24 \\text{ números}$$

## Exemplo 2: Combinação com condição

**Problema:** Uma turma tem 6 meninos e 4 meninas. Quantas comissões de 5 alunos podem ser formadas com exatamente 3 meninos e 2 meninas?

**Resolução:**

- Escolher 3 meninos dentre 6: $C_{6,3} = \\frac{6!}{3! \\cdot 3!} = 20$
- Escolher 2 meninas dentre 4: $C_{4,2} = \\frac{4!}{2! \\cdot 2!} = 6$

Pelo PFC (as escolhas são independentes):
$$\\text{Total} = C_{6,3} \\times C_{4,2} = 20 \\times 6 = 120$$

**Resposta:** Podem ser formadas **120 comissões**.`,
          },
          {
            titulo: 'Fórmulas Essenciais — Análise Combinatória',
            tipo: 'formula',
            corpo: `## Resumo de Fórmulas

### Princípio Fundamental da Contagem
$$\\text{Total} = n_1 \\times n_2 \\times \\ldots \\times n_k$$

### Fatorial
$$n! = n \\times (n-1) \\times \\ldots \\times 1 \\qquad 0! = 1$$

### Permutação simples
$$P_n = n!$$

### Permutação com repetição
$$P_n^{(a,b,\\ldots)} = \\frac{n!}{a! \\cdot b! \\cdots}$$

### Arranjo (ordem importa)
$$A_{n,p} = \\frac{n!}{(n-p)!}$$

### Combinação (ordem não importa)
$$C_{n,p} = \\frac{n!}{p! \\cdot (n-p)!}$$`,
          },
        ],
        explicacao:
          'A análise combinatória estuda métodos de contagem, essenciais para resolver problemas de probabilidade e raciocínio lógico.\n\nPrincípio Fundamental da Contagem (PFC): se um evento pode ocorrer de m maneiras e outro de n maneiras, ambos juntos podem ocorrer de m × n maneiras.\n\nFatorial: n! = n × (n−1) × (n−2) × ... × 1. Por definição, 0! = 1.\n\nPermutação: ordena TODOS os elementos. Pn = n!\n\nArranjo: ordena PARTE dos elementos (a ORDEM importa). An,p = n! / (n−p)!\n\nCombinação: escolhe PARTE dos elementos (a ordem NÃO importa). Cn,p = n! / (p! × (n−p)!)\n\nRegra prática para decidir:\n• A ordem importa? → Arranjo\n• A ordem não importa? → Combinação\n• Usa todos os elementos? → Permutação',
        formulasChave: [
          'Fatorial: n! = n × (n−1) × (n−2) × ... × 1  (0! = 1)',
          'Permutação simples: Pn = n!',
          'Permutação com repetição: Pn^(a,b,...) = n! / (a! × b! × ...)',
          'Arranjo simples: An,p = n! / (n−p)!',
          'Combinação simples: Cn,p = n! / (p! × (n−p)!)',
          'Princípio Fundamental da Contagem: total = n1 × n2 × n3 × ...',
        ],
        dicasProva: [
          'Pergunte-se: "A ordem dos elementos importa?" Se sim → arranjo. Se não → combinação.',
          'Problemas com "de quantas formas diferentes" geralmente usam PFC ou permutação.',
          'Problemas de "comissão", "equipe" ou "grupo" normalmente usam combinação (ordem não importa).',
          'Problemas de "fila", "senhas" ou "anagramas" usam arranjo ou permutação (ordem importa).',
          'Decore os fatoriais básicos: 1!=1, 2!=2, 3!=6, 4!=24, 5!=120, 6!=720, 7!=5040, 10!=3.628.800.',
        ],
        errosComuns: [
          'Usar arranjo quando deveria usar combinação (e vice-versa) — sempre analise se a ordem importa.',
          'Esquecer que 0! = 1 e travar no cálculo.',
          'Em permutação com repetição, esquecer de dividir pelos fatoriais das letras repetidas.',
          'Confundir o número total de elementos (n) com o número de elementos escolhidos (p).',
          'Aplicar o PFC sem considerar restrições do problema (ex.: números que não podem começar com zero).',
        ],
        exemplosResolvidos: [
          {
            enunciado:
              'De quantas maneiras diferentes podemos formar uma comissão de 3 pessoas escolhidas entre 8 candidatos?',
            passos: [
              'Identificar: n = 8 (candidatos), p = 3 (vagas na comissão).',
              'Como a ordem NÃO importa (comissão ABC = comissão BAC), usamos combinação.',
              'Aplicar: C8,3 = 8! / (3! × 5!) = (8 × 7 × 6) / (3 × 2 × 1).',
              'Calcular: 336 / 6 = 56.',
            ],
            resposta: 'Existem 56 maneiras de formar a comissão.',
          },
          {
            enunciado:
              'Quantos anagramas tem a palavra CASA?',
            passos: [
              'A palavra CASA tem 4 letras, mas a letra A se repete 2 vezes.',
              'Usar permutação com repetição: P4^(2) = 4! / 2!.',
              'Calcular: 24 / 2 = 12.',
            ],
            resposta: 'A palavra CASA possui 12 anagramas.',
          },
        ],
        exercicios: [
          {
            id: 'mat-comb-1',
            enunciado:
              'Uma lanchonete oferece 3 tipos de pão, 4 tipos de recheio e 2 tipos de bebida. De quantas maneiras diferentes um cliente pode montar um lanche escolhendo um de cada?',
            alternativas: ['9', '12', '18', '24', '36'],
            respostaCorreta: 3,
            explicacao:
              'Pelo PFC: 3 × 4 × 2 = 24 maneiras diferentes.',
            dificuldade: 'facil',
          },
          {
            id: 'mat-comb-2',
            enunciado:
              'Quantos anagramas tem a palavra AMOR?',
            alternativas: ['12', '16', '20', '24', '48'],
            respostaCorreta: 3,
            explicacao:
              'A palavra AMOR tem 4 letras distintas. Total de anagramas = P4 = 4! = 24.',
            dificuldade: 'facil',
          },
          {
            id: 'mat-comb-3',
            enunciado:
              'De um grupo de 10 atletas, o treinador precisa escolher 4 para formar um revezamento 4×100 m, onde a posição de cada corredor importa. De quantas formas ele pode fazer isso?',
            alternativas: ['210', '5.040', '720', '2.520', '40'],
            respostaCorreta: 1,
            explicacao:
              'Como a ordem importa (cada posição é diferente), usamos arranjo: A10,4 = 10! / 6! = 10 × 9 × 8 × 7 = 5.040.',
            dificuldade: 'medio',
          },
          {
            id: 'mat-comb-4',
            enunciado:
              'Uma senha deve ter 3 dígitos distintos (de 0 a 9). Quantas senhas são possíveis?',
            alternativas: ['720', '1.000', '504', '120', '900'],
            respostaCorreta: 0,
            explicacao:
              'Como a ordem importa (123 ≠ 321) e os dígitos são distintos: A10,3 = 10 × 9 × 8 = 720.',
            dificuldade: 'medio',
          },
          {
            id: 'mat-comb-5',
            enunciado:
              'Quantos anagramas da palavra BANANA começam com a letra B?',
            alternativas: ['10', '20', '30', '60', '120'],
            respostaCorreta: 0,
            explicacao:
              'Fixando B na 1ª posição, restam 5 letras: A, N, A, N, A (3 letras A e 2 letras N). Permutação com repetição: P5^(3,2) = 5! / (3! × 2!) = 120 / (6 × 2) = 10.',
            dificuldade: 'dificil',
          },
        ],
      },
    },
  ],
};
