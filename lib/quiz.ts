export type Difficulty = 'facil' | 'medio' | 'dificil'

export type Question = {
  id: string
  question: string
  /** A opção correta é sempre a primeira; a ordem é embaralhada em tempo de execução */
  options: string[]
  /** Explicação baseada no conteúdo estudado */
  explanation: string
  /** Seção do conteúdo onde a resposta pode ser encontrada */
  sectionId: string
}

/** Uma pergunta já preparada para exibição, com opções embaralhadas */
export type PreparedQuestion = {
  id: string
  question: string
  options: string[]
  /** Índice da opção correta em "options" (após embaralhar) */
  correctIndex: number
  explanation: string
  sectionId: string
}

export const difficultyLabels: Record<Difficulty, string> = {
  facil: 'Fácil',
  medio: 'Normal',
  dificil: 'Difícil',
}

export const difficultyDescriptions: Record<Difficulty, string> = {
  facil: '5 perguntas aleatórias. Ótimo para uma revisão rápida.',
  medio: '10 perguntas aleatórias. O desafio equilibrado do dia a dia.',
  dificil: '20 perguntas aleatórias. Para quem estudou tudo com atenção.',
}

/** Quantidade de perguntas sorteadas em cada dificuldade */
export const difficultyCount: Record<Difficulty, number> = {
  facil: 5,
  medio: 10,
  dificil: 20,
}

export const difficultyOrder: Difficulty[] = ['facil', 'medio', 'dificil']

/**
 * Banco com 50 perguntas únicas.
 * TODAS as perguntas são respondíveis APENAS com o conteúdo do aplicativo.
 * A primeira opção é sempre a correta e a ordem é embaralhada ao montar o quiz.
 */
export const questionBank: Question[] = [
  {
    id: 'q1',
    question: 'Em que país fica Chichén Itzá?',
    options: ['México', 'Brasil', 'Peru', 'Egito'],
    explanation: 'Chichén Itzá fica no México, na Península de Yucatán.',
    sectionId: 'localizacao',
  },
  {
    id: 'q2',
    question: 'Qual civilização construiu Chichén Itzá?',
    options: ['A civilização Maia', 'Os Incas', 'Os Astecas', 'Os Egípcios'],
    explanation: 'A cidade foi construída pela civilização Maia.',
    sectionId: 'construtores',
  },
  {
    id: 'q3',
    question: 'Qual é o monumento mais famoso de Chichén Itzá?',
    options: [
      'A Pirâmide de Kukulcán',
      'A Esfinge',
      'O Coliseu',
      'A Torre de Pisa',
    ],
    explanation:
      'A Pirâmide de Kukulcán, também chamada de "El Castillo", é o monumento mais famoso.',
    sectionId: 'kukulcan',
  },
  {
    id: 'q4',
    question: 'Por qual outro nome a Pirâmide de Kukulcán é conhecida?',
    options: ['El Castillo', 'El Caracol', 'O Templo', 'A Grande Pirâmide'],
    explanation:
      '"El Castillo" significa "O Castelo" em espanhol e é o outro nome da pirâmide.',
    sectionId: 'kukulcan',
  },
  {
    id: 'q5',
    question: 'Em 2007, Chichén Itzá foi eleita uma das:',
    options: [
      'Sete Novas Maravilhas do Mundo Moderno',
      'Cidades mais populosas',
      'Maiores praias do mundo',
      'Montanhas mais altas',
    ],
    explanation:
      'Em 2007 foi eleita uma das Sete Novas Maravilhas do Mundo Moderno.',
    sectionId: 'introducao',
  },
  {
    id: 'q6',
    question: 'Em que ano a UNESCO declarou Chichén Itzá Patrimônio Mundial da Humanidade?',
    options: ['1988', '1975', '2007', '2000'],
    explanation:
      'A UNESCO declarou Chichén Itzá como Patrimônio Mundial da Humanidade em 1988.',
    sectionId: 'introducao',
  },
  {
    id: 'q7',
    question: 'Qual construção era usada como observatório astronômico?',
    options: [
      'El Caracol',
      'O Jogo de Bola',
      'O Templo dos Guerreiros',
      'O Cenote Sagrado',
    ],
    explanation: 'El Caracol era o observatório astronômico da cidade.',
    sectionId: 'astronomia',
  },
  {
    id: 'q8',
    question: 'Por que os cenotes eram tão importantes para os habitantes?',
    options: [
      'Eram a principal fonte de água doce',
      'Serviam como campos de plantio',
      'Eram minas de ouro',
      'Eram usados como estradas',
    ],
    explanation:
      'Como não há rios visíveis na superfície, os cenotes eram a principal fonte de água doce.',
    sectionId: 'localizacao',
  },
  {
    id: 'q9',
    question: 'Quantas vezes por ano acontece a serpente de sombra na pirâmide?',
    options: ['Duas vezes', 'Uma vez', 'Quatro vezes', 'Todo mês'],
    explanation:
      'O fenômeno acontece duas vezes por ano, nos equinócios de primavera e de outono.',
    sectionId: 'equinocio',
  },
  {
    id: 'q10',
    question: 'Qual deus Maia era representado pela serpente emplumada?',
    options: ['Kukulcán', 'Chaac', 'Rá', 'Zeus'],
    explanation:
      'Kukulcán era a serpente emplumada, uma das divindades mais importantes.',
    sectionId: 'religiao',
  },
  {
    id: 'q11',
    question: 'Aproximadamente quantos metros de altura tem a Pirâmide de Kukulcán?',
    options: ['30 metros', '10 metros', '80 metros', '150 metros'],
    explanation: 'A pirâmide tem aproximadamente 30 metros de altura.',
    sectionId: 'kukulcan',
  },
  {
    id: 'q12',
    question: 'Somando os degraus dos 4 lados e o topo, quantos degraus tem a pirâmide?',
    options: ['365', '300', '360', '400'],
    explanation:
      'São 91 degraus por lado (364) mais o topo (1), totalizando 365, como os dias do ano solar.',
    sectionId: 'kukulcan',
  },
  {
    id: 'q13',
    question: 'Qual planeta os Maias observavam com muita atenção?',
    options: ['Vênus', 'Marte', 'Júpiter', 'Saturno'],
    explanation:
      'Os Maias observavam Vênus, que tinha grande importância religiosa e servia para medir o tempo.',
    sectionId: 'astronomia',
  },
  {
    id: 'q14',
    question: 'No sistema de números maia, quanto valia uma barra?',
    options: ['5', '1', '10', '20'],
    explanation: 'Um ponto valia 1 e uma barra valia 5.',
    sectionId: 'matematica',
  },
  {
    id: 'q15',
    question: 'Qual era a base do sistema de numeração maia?',
    options: ['Base 20 (vigesimal)', 'Base 10 (decimal)', 'Base 2 (binário)', 'Base 60'],
    explanation: 'Os Maias usavam um sistema de base 20, chamado de vigesimal.',
    sectionId: 'matematica',
  },
  {
    id: 'q16',
    question: 'Quantos dias tinha o calendário solar Haab?',
    options: ['365 dias', '260 dias', '360 dias', '400 dias'],
    explanation: 'O Haab era o calendário solar, com 365 dias.',
    sectionId: 'calendario',
  },
  {
    id: 'q17',
    question: 'Qual era a principal função do Cenote Sagrado?',
    options: [
      'Rituais religiosos e oferendas',
      'Plantação de milho',
      'Campo de jogo',
      'Depósito de ferramentas',
    ],
    explanation:
      'O Cenote Sagrado era usado em rituais religiosos, com oferendas de objetos preciosos.',
    sectionId: 'religiao',
  },
  {
    id: 'q18',
    question: 'O que o nome "Chichén Itzá" significa aproximadamente?',
    options: [
      'Na boca do poço dos Itzá',
      'Cidade do Sol',
      'Montanha sagrada',
      'Templo dourado',
    ],
    explanation: 'O nome significa, aproximadamente, "na boca do poço dos Itzá".',
    sectionId: 'significado',
  },
  {
    id: 'q19',
    question: 'Qual construção é o maior campo de jogo de bola da Mesoamérica?',
    options: [
      'O de Chichén Itzá',
      'O do Egito',
      'O de Machu Picchu',
      'O de Teotihuacan',
    ],
    explanation:
      'O campo de jogo de bola de Chichén Itzá é o maior já encontrado na Mesoamérica.',
    sectionId: 'jogodebola',
  },
  {
    id: 'q20',
    question: 'Qual era o deus Maia da chuva?',
    options: ['Chaac', 'Kukulcán', 'Quetzal', 'Itzamná'],
    explanation:
      'Chaac era o deus da chuva, muito importante para a agricultura da região.',
    sectionId: 'religiao',
  },
  {
    id: 'q21',
    question: 'De qual material eram feitas principalmente as construções?',
    options: ['Pedra calcária', 'Madeira', 'Tijolo de barro', 'Mármore'],
    explanation: 'As construções eram feitas principalmente de pedra calcária.',
    sectionId: 'arquitetura',
  },
  {
    id: 'q22',
    question: 'Por que a construção do observatório recebeu o nome "El Caracol"?',
    options: [
      'Por causa da escada em espiral em seu interior',
      'Por causa de um animal sagrado',
      'Por causa da sua cor',
      'Em homenagem a um rei maia',
    ],
    explanation:
      'El Caracol significa "O Caracol", por causa da escada em espiral em seu interior.',
    sectionId: 'astronomia',
  },
  {
    id: 'q23',
    question: 'Quantas plataformas (terraços) formam a Pirâmide de Kukulcán?',
    options: ['9', '4', '7', '13'],
    explanation:
      'A pirâmide é formada por 9 plataformas empilhadas, com significado no calendário maia.',
    sectionId: 'kukulcan',
  },
  {
    id: 'q24',
    question: 'Quantos degraus tem cada uma das 4 escadarias da pirâmide?',
    options: ['91', '81', '100', '120'],
    explanation:
      'Cada escadaria tem 91 degraus; os 4 lados somam 364, mais o topo dá 365.',
    sectionId: 'kukulcan',
  },
  {
    id: 'q25',
    question: 'Quantos dias tinha o calendário sagrado Tzolkin?',
    options: ['260 dias', '52 dias', '360 dias', '365 dias'],
    explanation: 'O Tzolkin era o calendário sagrado, com 260 dias.',
    sectionId: 'calendario',
  },
  {
    id: 'q26',
    question: 'A "Roda Calendárica" se repetia a cada quantos anos?',
    options: ['52 anos', '20 anos', '100 anos', '260 anos'],
    explanation:
      'A combinação do Haab com o Tzolkin formava um ciclo que se repetia a cada 52 anos.',
    sectionId: 'calendario',
  },
  {
    id: 'q27',
    question: 'O período de maior apogeu de Chichén Itzá ocorreu entre os anos:',
    options: [
      '800 e 1200 d.C.',
      '100 e 300 d.C.',
      '500 e 700 d.C.',
      '1400 e 1600 d.C.',
    ],
    explanation:
      'Seu período de maior poder ocorreu aproximadamente entre 800 e 1200 d.C.',
    sectionId: 'historia',
  },
  {
    id: 'q28',
    question: 'Além do estilo Maia tradicional (Puuc), qual influência aparece na arquitetura?',
    options: ['Tolteca', 'Romana', 'Grega', 'Inca'],
    explanation:
      'A cidade combina o estilo Maia (Puuc) e o estilo influenciado pelos Toltecas.',
    sectionId: 'arquitetura',
  },
  {
    id: 'q29',
    question: 'O eco do aplauso em frente à pirâmide lembra o canto de qual ave?',
    options: ['Quetzal', 'Águia', 'Papagaio', 'Coruja'],
    explanation: 'O eco lembra o canto do quetzal, ave sagrada para os Maias.',
    sectionId: 'curiosidades',
  },
  {
    id: 'q30',
    question: 'Os Maias foram um dos primeiros povos a usar qual conceito matemático?',
    options: ['O zero', 'O número negativo', 'A fração', 'A raiz quadrada'],
    explanation:
      'Os Maias foram um dos primeiros povos a usar o conceito de zero, representado por uma concha.',
    sectionId: 'matematica',
  },
  {
    id: 'q31',
    question: 'O que existe dentro da Pirâmide de Kukulcán?',
    options: [
      'Outra pirâmide menor e mais antiga',
      'Uma sala de ouro',
      'Um rio subterrâneo',
      'Nada, é maciça',
    ],
    explanation:
      'Dentro da pirâmide existe outra pirâmide menor e mais antiga, construída antes da atual.',
    sectionId: 'curiosidades',
  },
  {
    id: 'q32',
    question: 'De que material era feita a bola usada no jogo de bola?',
    options: ['Borracha natural', 'Pedra', 'Madeira', 'Barro'],
    explanation:
      'A bola era feita de borracha natural, extraída de árvores da região.',
    sectionId: 'jogodebola',
  },
  {
    id: 'q33',
    question: 'Que estátua famosa é encontrada no Templo dos Guerreiros?',
    options: ['Chac Mool', 'A Esfinge', 'O Colosso', 'A Vênus'],
    explanation:
      'O Templo dos Guerreiros abriga a famosa estátua conhecida como Chac Mool.',
    sectionId: 'construcoes',
  },
  {
    id: 'q34',
    question: 'Em qual península do México está Chichén Itzá?',
    options: ['Península de Yucatán', 'Península da Baixa Califórnia', 'Península Ibérica', 'Península do Sinai'],
    explanation:
      'A cidade está situada na Península de Yucatán, região de terreno plano e calcário.',
    sectionId: 'localizacao',
  },
  {
    id: 'q35',
    question: 'Como se formam os cenotes?',
    options: [
      'Quando o teto de cavernas de calcário desaba, expondo a água',
      'Pela ação de vulcões',
      'Pela construção humana',
      'Pelo acúmulo de chuva em vales',
    ],
    explanation:
      'Os cenotes são poços naturais formados quando o teto de cavernas de calcário desaba, expondo a água subterrânea.',
    sectionId: 'localizacao',
  },
  {
    id: 'q36',
    question: 'Em qual região os Maias habitavam?',
    options: [
      'Mesoamérica',
      'Cordilheira dos Andes',
      'Vale do Nilo',
      'Mesopotâmia',
    ],
    explanation:
      'Os Maias habitavam a Mesoamérica, região que inclui partes do atual México e da América Central.',
    sectionId: 'construtores',
  },
  {
    id: 'q37',
    question: 'Segundo o conteúdo, a serpente de sombra representa qual divindade descendo à Terra?',
    options: ['Kukulcán', 'Chaac', 'Itzamná', 'O deus Sol'],
    explanation:
      'A sombra forma a serpente Kukulcán descendo a pirâmide, ligada à cabeça esculpida na base.',
    sectionId: 'equinocio',
  },
  {
    id: 'q38',
    question: 'Em quais épocas do ano acontece o fenômeno da serpente de sombra?',
    options: [
      'Nos equinócios de primavera e de outono',
      'Nos solstícios de verão e inverno',
      'Somente no Ano Novo',
      'Em todas as luas cheias',
    ],
    explanation:
      'O fenômeno acontece durante os equinócios de primavera e de outono.',
    sectionId: 'equinocio',
  },
  {
    id: 'q39',
    question: 'Qual símbolo os Maias usavam para representar o número zero?',
    options: ['Uma concha', 'Um círculo', 'Uma estrela', 'Um ponto'],
    explanation:
      'O zero era representado por um símbolo em forma de concha.',
    sectionId: 'matematica',
  },
  {
    id: 'q40',
    question: 'Além de Vênus, o que os Maias conseguiam prever com suas observações?',
    options: [
      'Eclipses e movimentos do Sol, da Lua e dos planetas',
      'Terremotos e erupções',
      'O resultado das colheitas futuras',
      'O clima de outros continentes',
    ],
    explanation:
      'Com suas observações, os Maias conseguiam prever eclipses e os movimentos do Sol, da Lua e dos planetas.',
    sectionId: 'astronomia',
  },
  {
    id: 'q41',
    question: 'Como era feito o sistema de escrita dos Maias?',
    options: [
      'Por glifos, símbolos que representavam sons e ideias',
      'Apenas por desenhos de animais',
      'Por um alfabeto igual ao nosso',
      'Eles não tinham escrita',
    ],
    explanation:
      'Os Maias tinham um sistema de escrita completo, formado por glifos que representavam sons e ideias.',
    sectionId: 'cultura',
  },
  {
    id: 'q42',
    question: 'Qual destes produtos era trocado no comércio de Chichén Itzá?',
    options: ['Jade', 'Petróleo', 'Ferro', 'Vidro industrial'],
    explanation:
      'A cidade trocava produtos como sal, obsidiana, jade e tecidos.',
    sectionId: 'cultura',
  },
  {
    id: 'q43',
    question: 'Como os jogadores tentavam marcar pontos no jogo de bola?',
    options: [
      'Passando a bola por um anel de pedra, sem usar as mãos',
      'Chutando a bola para fora do campo',
      'Arremessando a bola com as mãos',
      'Rolando a bola até uma linha',
    ],
    explanation:
      'Os jogadores tentavam passar a bola por um anel de pedra fixado no alto das paredes, sem usar as mãos.',
    sectionId: 'jogodebola',
  },
  {
    id: 'q44',
    question: 'Segundo o conteúdo, quando a cidade entrou em declínio político?',
    options: [
      'Por volta do século XIII',
      'No século XX',
      'Logo após ser fundada',
      'No século XVI',
    ],
    explanation:
      'Por volta do século XIII, a cidade entrou em declínio e perdeu importância política.',
    sectionId: 'historia',
  },
  {
    id: 'q45',
    question: 'A que Kukulcán, a serpente emplumada, estava associado?',
    options: [
      'Ao vento, à água e à sabedoria',
      'À guerra e ao fogo',
      'À morte e à escuridão',
      'Ao ouro e às riquezas',
    ],
    explanation:
      'Kukulcán era associado ao vento, à água e à sabedoria.',
    sectionId: 'religiao',
  },
  {
    id: 'q46',
    question: 'O que o jogo de bola representava simbolicamente?',
    options: [
      'A luta entre forças opostas, como o dia e a noite',
      'Uma simples competição esportiva',
      'A colheita do milho',
      'A construção das pirâmides',
    ],
    explanation:
      'O jogo tinha caráter religioso e simbólico, representando a luta entre forças opostas, como o dia e a noite.',
    sectionId: 'jogodebola',
  },
  {
    id: 'q47',
    question: 'O que aconteceu com os Maias ao longo da história, segundo o conteúdo?',
    options: [
      'Não desapareceram: milhões de descendentes vivem hoje no México e na América Central',
      'Desapareceram completamente',
      'Mudaram-se para a Europa',
      'Foram todos escravizados pelos Incas',
    ],
    explanation:
      'Os Maias não desapareceram: milhões de descendentes vivem hoje no México e na América Central.',
    sectionId: 'legado',
  },
  {
    id: 'q48',
    question: 'Como era organizada a sociedade Maia?',
    options: [
      'Dividida em classes, como governantes, sacerdotes, artesãos e agricultores',
      'Sem nenhuma divisão social',
      'Apenas em guerreiros',
      'Somente em duas famílias',
    ],
    explanation:
      'A sociedade era dividida em classes, com governantes, sacerdotes, artesãos, comerciantes e agricultores.',
    sectionId: 'cultura',
  },
  {
    id: 'q49',
    question: 'Por que o efeito da serpente de sombra é considerado impressionante?',
    options: [
      'Mostra o profundo conhecimento astronômico e arquitetônico dos Maias',
      'Foi um acidente sem explicação',
      'Foi criado por turistas modernos',
      'Acontece em qualquer construção antiga',
    ],
    explanation:
      'O efeito não é por acaso: mostra o profundo conhecimento astronômico e arquitetônico dos Maias, que planejaram a pirâmide para isso.',
    sectionId: 'equinocio',
  },
  {
    id: 'q50',
    question: 'Como Chichén Itzá é vista atualmente no turismo?',
    options: [
      'É um dos sítios arqueológicos mais visitados do mundo',
      'Está fechada para visitação',
      'É pouco conhecida fora do México',
      'Só pode ser vista em fotos antigas',
    ],
    explanation:
      'Hoje Chichén Itzá é um dos sítios arqueológicos mais visitados do mundo.',
    sectionId: 'legado',
  },
]

/** Embaralha um array (Fisher-Yates) sem alterar o original */
function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

/**
 * Monta um novo quiz sorteando perguntas e embaralhando as alternativas.
 * Cada nova tentativa gera perguntas e ordens diferentes.
 */
export function buildQuiz(difficulty: Difficulty): PreparedQuestion[] {
  const count = difficultyCount[difficulty]
  const selected = shuffle(questionBank).slice(0, count)
  return selected.map((q) => {
    const correctText = q.options[0]
    const shuffledOptions = shuffle(q.options)
    return {
      id: q.id,
      question: q.question,
      options: shuffledOptions,
      correctIndex: shuffledOptions.indexOf(correctText),
      explanation: q.explanation,
      sectionId: q.sectionId,
    }
  })
}
