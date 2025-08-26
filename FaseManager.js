export const aulas = [
  {
    id: 1,
    titulo: "Aula 1",
    fases: [
      {
        texto: [
          [
            "Olá! Eu sou o comandante John. Neste jogo, vamos ajudar a cientista e astronauta Alex a completar missões no espaço.",
            "A Alex precisa viajar e coletar pedras para sua pesquisa, e nós seremos seus copilotos.",
            "Para começar, vamos aprender a chegar aos planetas!",
            "No mapa, cada quadrado é uma unidade de distância. Para viajar, precisamos navegar por esses quadrados.",
            "Cada planeta tem uma zona de aterrissagem, indicada pelo símbolo de GPS (ícone de localização). Para pousar, temos que parar exatamente acima desse símbolo.",
          ],
          [
            "Para a nave da Alex viajar, precisamos de uma rota.",
            "Primeiro, decidimos para qual planeta queremos ir.",
            "Depois, encontramos o menor caminho entre nosso planeta atual e o destino.",
            "O comprimento da rota é a quantidade de movimentos que faremos. Rotas maiores gastam mais gasolina e tempo!",
            "O objetivo da Alex é sempre fazer a rota mais curta possível.",
            "Os símbolos de navegação são: ⇧ (para cima) - ⇩ (para baixo) - ⇦ (para a esquerda) - ⇨ (para a direita).",
          ],
          [
            "Para traçar a rota da nave da Alex, você vai usar o mouse.",
            "Clique e segure o botão do mouse sobre o planeta de onde vocês vão partir.",
            "Sem soltar o botão, arraste o mouse pelos quadrados do mapa, seguindo o caminho que você quer que a nave percorra.",
            "Depois, você deve escolher as setas que correspondem à rota que você desenhou.",
            "Clique em cima das setas para alterar a direção delas.",
            "Agora, vamos ajudar a Alex a chegar até Vênus!",
          ],
        ],
        speed: [
          [12, 12, 12, 12, 12],
          [12, 12, 12, 12, 12, 12],
          [12, 12, 12, 12, 12, 12],
        ],
        level: 1,
      },
      {
        texto: [
          [
            "Isso foi um sucesso!",
            "Conseguimos traçar nossa primeira rota e nossa primeira missão está completa!",
          ],
          [
            "No entanto, nossa equipe detectou pedras preciosas em outros planetas!",
            "Temos que traçar rotas até planetas mais distantes.",
            "Alex precisa de ajuda, vamos agora até Marte.",
          ],
        ],
        speed: [
          [12, 12],
          [12, 12, 12],
        ],
        level: 2,
      },
      {
        texto: [
          [
            "Demais! Incrível! Conseguimos traçar nossa rota até Marte!",
            "Que grande vitória!",
          ],
          [
            "No entanto, nossos cientistas nos informaram que teremos que realizar viagens mais longas e desafiadoras!",
            "Vamos agora até Júpiter!",
          ],
        ],
        speed: [
          [12, 12],
          [12, 12],
        ],
        level: 3,
      },
    ],
  },
  {
    id: 2,
    titulo: "Aula 2",
    fases: [
      {
        texto: [
          [
            "Agora, vamos lá! Nossa missão é ir até Vênus novamente, mas dessa vez voltaremos para a terra!",
          ],
        ],
        speed: [[12]],
        level: 4,
      },
      {
        texto: [
          [
            "Muito bom! Agora, prepare-se para o nosso próximo grande desafio! Nossa missão é ir e voltar da Terra até Mercúrio, e na volta, traremos para casa tesouros espaciais e segredos que o universo guarda!",
          ],
        ],
        speed: [[12]],
        level: 5,
      },
    ],
  },
  {
    id: 3,
    titulo: "Aula 3",
    fases: [
      {
        texto: [
          [
            "Vamos fazer uma viagem dupla. Prepare-se para ir a Marte e a Júpiter!",
          ],
        ],
        speed: [[12]],
        level: 6,
      },
      {
        texto: [
          [
            "Muito bom! Nossas viagens estão ficando muito interessantes, vamos agora para Vênus e Mercúrio.",
          ],
        ],
        speed: [[12]],
        level: 7,
      },
    ],
  },
  {
    id: 4,
    titulo: "Aula 4",
    fases: [
      {
        texto: [
          [
            "Você se lembra da nossa rota do planeta Terra até Vênus? Ela tinha tamanho 3. Cada célula que andamos no mapa gasta uma unidade de energia. Se no início temos 10 unidades de energia, ao fim da viagem ficaremos com 7, pois 10 - 3 = 7! Agora, vamos lá!",
          ],
        ],
        speed: [[12]],
        level: 8,
      },
      {
        texto: [
          [
            "Isso foi incrível! Vamos agora para uma aventura mais desafiadora!",
          ],
        ],
        speed: [[12]],
        level: 9,
      },
    ],
  },
  {
    id: 5,
    titulo: "Partida 1",
    fases: [
      {
        texto: [
          [
            "Todas as viagens de agora em diante serão mais difíceis! Mantenha a concentração companheiro! Nessas viagens coletaremos itens espaciais raros, você não perde por esperar!"
          ],
        ],
        speed: [[12]],
        level: 10,
      },
      {
        texto: [
          [
            "Muito bom amigo! Vamos seguir em frente!"
          ],
        ],
        speed: [[12]],
        level: 11,
      },
      {
        texto: [
          [
            "Demais! Você é muito bom nisso!"
          ],
        ],
        speed: [[12]],
        level: 12,
      },
      {
        texto: [
          [
            "Segure os cintos! Vamos agora para nossa última aventura!"
          ],
        ],
        speed: [[12]],
        level: 13,
      }
    ]
  }
];

export const aprendizadoTexto = [
  [
    "Bate papo com Alex!",
    "Isso foi um sucesso! Conseguimos uma grande vitória espacial! Você está auxiliando muito, sem você estaríamos perdidos! Agora é hora de aprender um pouco sobre o que aplicamos!",
    "Imagine que você tem uma fileira de caixinhas enfileiradas, e cada caixinha pode guardar uma coisa dentro. Essas caixinhas estão todas coladas uma na outra e têm um número na frente para sabermos onde cada uma está.",
    "Essas caixinhas são o que chamamos de vetor na programação! Por exemplo: Se nós quisermos guardar uma sequência com 4 símbolos para uma rota (como as setas que mostram 'para cima', 'para baixo', 'para a esquerda' ou 'para a direita'), vamos precisar de 4 caixinhas.",
    "Cada uma dessas caixas guarda um símbolo. E para encontrar uma caixinha, usamos o número dela, que chamamos de índice. Na programação, normalmente começamos a contar do zero, então essas caixas seriam chamadas assim: Caixa 0, Caixa 1, Caixa 2, Caixa 3. Ou seja, mesmo que o vetor tenha 4 posições, os números vão de 0 até 3.",
    "Um vetor é muito útil quando queremos guardar várias coisas parecidas, como: As notas de uma prova de matemática, os nomes dos colegas da sala, os movimentos de um jogo. Com o vetor, podemos guardar, olhar e mudar as coisas dentro das caixinhas, sempre usando os números (índices) para saber onde mexer.",
  ],
  [
    "Bate papo com Alex!",
    "Agora, precisamos aprender a voltar dos planetas! Em nossa aventura, chegamos até eles, mas precisamos voltar para levar nossos achados ao laboratório. Poderíamos traçar uma nova rota para cada volta, certo? Por exemplo: ir da Terra até Vênus e, depois, traçar uma nova rota de Vênus de volta para a Terra. Mas eu conheço um truque para facilitar a volta para casa: usar o vetor reverso!",
    "Primeiro, precisamos entender como inverter os símbolos de navegação. É bem simples: o contrário de ir para cima é ir para baixo, e o contrário da esquerda é a direita! Com a tabela abaixo, podemos trocar os símbolos originais pelos símbolos inversos.",
    "Vamos usar este vetor como exemplo, que nos leva da Terra até Vênus:",
    "Passo 1: Para criar a rota de volta, vamos pegar o último comando da nossa rota de ida e colocá-lo no começo da rota de volta. Depois, pegamos o penúltimo e colocamos em segundo lugar. E assim por diante, até o primeiro comando da ida virar o último da volta.",
    "Passo 2: Inverter os símbolos. Agora, vamos pegar cada um dos símbolos e trocar pelos símbolos inversos, como temos na tabela.",
    "E pronto! Agora temos o caminho de volta para o nosso planeta! Espero que você tenha prestado atenção, porque nossas próximas missões vão usar o que aprendemos hoje!",
  ],
  [
    "Bate papo com Alex!",
    "Sensacional! Agora que conseguimos voltar para casa sempre que precisamos, podemos nos preparar para explorar muito o espaço!",
    "Agora, vamos aprender mais um truque. Imaginem que queremos fazer rotas que passam por mais de um planeta. Fazer essas rotas grandes pode ser difícil, portanto podemos usar uma tática de programação: dividir e conquistar! Imagine que estamos em Vênus e desejamos chegar em Mercúrio, mas precisamos passar pela Terra. Podemos fazer a rota do zero, mas já conhecemos uma parte:",
    "Agora, vamos ver o vetor que nos leva da Terra até Mercúrio:",
    "Agora, vamos criar um novo vetor, que será a composição deles. Primeiro passo: vamos somar os tamanhos dos dois vetores para obter o tamanho do novo vetor. Neste caso, o vetor da rota de Vênus à Terra tem tamanho 3, enquanto o vetor da rota da Terra a Mercúrio tem tamanho 7. Como 3 mais 7 é igual a 10, vamos construir um vetor vazio com esse tamanho.",
    "Segundo passo: como vamos partir de Vênus para a Terra no começo, vamos preencher os primeiros índices do nosso novo vetor com os símbolos correspondentes do nosso primeiro vetor de rota.",
    "Terceiro passo: agora vamos preencher o restante deste nosso novo vetor com os símbolos do segundo vetor de rota. Com isso, temos nossa rota completa!",
    "Durante o jogo, vocês vão começar a visitar vários planetas e, com o tempo, descobrirão muitas rotas diferentes. Isso vai ajudar bastante, porque vocês poderão juntar essas rotas menores para fazer viagens maiores e mais desafiadoras!",
  ],
  [
    "Bate papo com Alex!",
    "Agora, vamos aprender a usar a última parte da nossa nave. A nave da Alex é equipada com uma bateria com 10 células de energia.",
    "Para as próximas aventuras, utilizaremos as baterias! A nossa nave sempre começa com 10 células de energia carregadas, e podemos reabastecer quando passamos por cima das baterias espalhadas pelo mapa!",
    "Nós já conhecemos os vetores das rotas de viagem e, assim como eles, nossa bateria também será um vetor, mas o seu funcionamento será um pouco diferente.",
    "Este vetor representa a bateria da nave. Todas as posições da bateria que estiverem com o valor “1” estão carregadas. Neste exemplo, temos uma bateria de dimensão 10 totalmente carregada, pois todas as posições possuem o valor “1”. Mas, ao viajarmos pelo espaço, essa bateria vai sendo gasta.",
    "Repare que essa bateria já não é igual à primeira, pois algumas de suas posições possuem o valor “0”. Vamos “descarregando” a bateria da direita para a esquerda, pois assim fica mais fácil visualizar a carga. Por exemplo: a última posição que possui a carga em “1” é a de índice 8. Logo, temos 8 de carga.",
    "Nesse exemplo, podemos observar que todas as posições estão com carga em “0”, logo a bateria está totalmente gasta, ou seja, não temos mais nenhuma carga. Sabendo disso, a partir de agora vamos sempre verificar se temos bateria suficiente para completar alguma rota.",
  ],
];
export const aprendizadoImgSrc = [
  ["images/learnpage1/1.JPG", "images/learnpage1/2.JPG"],
  [
    "images/learnpage2/1.JPG",
    "images/learnpage2/2.JPG",
    "images/learnpage2/3.JPG",
    "images/learnpage2/4.JPG",
  ],
  [
    "images/learnpage3/1.JPG",
    "images/learnpage3/2.JPG",
    "images/learnpage3/3.JPG",
    "images/learnpage3/4.JPG",
    "images/learnpage3/5.JPG",
  ],
  [
    "images/learnpage4/1.JPG",
    "images/learnpage4/22.JPG",
    "images/learnpage4/33.JPG",
    "images/learnpage4/44.JPG",
  ],
];
