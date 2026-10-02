export type ContentCard = {
  title: string
  text: string
  /** Lucide icon name reference resolved in the UI */
  icon?: string
}

export type Section = {
  id: string
  /** Short label used in menus and navigation */
  label: string
  title: string
  subtitle: string
  /** Path to the illustrative image, optional */
  image?: string
  imageAlt?: string
  intro: string
  cards: ContentCard[]
}

/**
 * Todo o conteúdo educacional do aplicativo.
 * As perguntas do quiz são criadas EXCLUSIVAMENTE a partir destas informações,
 * para que o usuário nunca precise de conhecimento externo.
 */
export const sections: Section[] = [
  {
    id: 'introducao',
    label: 'Introdução',
    title: 'Introdução',
    subtitle: 'Bem-vindo a uma das maravilhas do mundo',
    image: '/images/kukulcan-hero.png',
    imageAlt: 'Pirâmide de Kukulcán ao entardecer em Chichén Itzá',
    intro:
      'Chichén Itzá é uma das cidades mais famosas da civilização Maia e um dos sítios arqueológicos mais visitados do mundo.',
    cards: [
      {
        title: 'O que é Chichén Itzá?',
        text: 'Chichén Itzá é uma antiga cidade Maia localizada na Península de Yucatán, no México. Foi um importante centro político, religioso e comercial.',
        icon: 'Landmark',
      },
      {
        title: 'Uma das Novas Maravilhas',
        text: 'Em 2007, Chichén Itzá foi eleita uma das Sete Novas Maravilhas do Mundo Moderno, ganhando ainda mais reconhecimento internacional.',
        icon: 'Award',
      },
      {
        title: 'Patrimônio da Humanidade',
        text: 'A UNESCO declarou Chichén Itzá como Patrimônio Mundial da Humanidade em 1988, reconhecendo seu enorme valor histórico e cultural.',
        icon: 'Globe',
      },
      {
        title: 'O que você vai aprender',
        text: 'Neste aplicativo você vai conhecer a história, a arquitetura, a astronomia, a matemática e a cultura por trás desta cidade impressionante.',
        icon: 'BookOpen',
      },
    ],
  },
  {
    id: 'significado',
    label: 'Significado do Nome',
    title: 'O Significado do Nome',
    subtitle: 'O que "Chichén Itzá" quer dizer',
    image: '/images/glyphs.png',
    imageAlt: 'Glifos maias esculpidos em pedra',
    intro:
      'O nome Chichén Itzá tem origem na língua maia e está diretamente ligado à água, um recurso muito valioso na região.',
    cards: [
      {
        title: 'Origem do nome',
        text: 'O nome "Chichén Itzá" vem da língua maia e significa, aproximadamente, "na boca do poço dos Itzá".',
        icon: 'Quote',
      },
      {
        title: 'A palavra "chi"',
        text: 'Na língua maia, "chi" significa "boca" e "ch\'en" significa "poço". Juntas, formam a ideia de "boca do poço".',
        icon: 'Droplet',
      },
      {
        title: 'Os Itzá',
        text: 'Os "Itzá" eram o grupo de pessoas que habitava a região. Por isso, o nome faz referência ao povo que vivia perto desses poços de água.',
        icon: 'Users',
      },
      {
        title: 'A importância da água',
        text: 'Os "poços" citados no nome são os cenotes, poços naturais de água doce essenciais para a sobrevivência na Península de Yucatán.',
        icon: 'Waves',
      },
    ],
  },
  {
    id: 'localizacao',
    label: 'Localização',
    title: 'Localização',
    subtitle: 'Onde fica Chichén Itzá',
    image: '/images/cenote.png',
    imageAlt: 'Cenote sagrado cercado pela selva',
    intro:
      'Chichén Itzá está localizada em uma região tropical do México, marcada pela presença de cenotes e vegetação densa.',
    cards: [
      {
        title: 'País',
        text: 'Chichén Itzá fica no México, um país da América do Norte, na América Central e do Norte do continente americano.',
        icon: 'MapPin',
      },
      {
        title: 'Península de Yucatán',
        text: 'A cidade está situada na Península de Yucatán, uma região de terreno plano, calcário e coberta por floresta tropical.',
        icon: 'Map',
      },
      {
        title: 'Os cenotes',
        text: 'A região possui muitos cenotes, que são poços naturais formados quando o teto de cavernas de calcário desaba, expondo a água subterrânea.',
        icon: 'Waves',
      },
      {
        title: 'Fonte de água',
        text: 'Como não há rios visíveis na superfície da região, os cenotes eram a principal fonte de água doce para os habitantes.',
        icon: 'Droplet',
      },
    ],
  },
  {
    id: 'historia',
    label: 'História',
    title: 'História',
    subtitle: 'Ascensão e apogeu da cidade',
    image: '/images/architecture.png',
    imageAlt: 'Templo dos Guerreiros com colunas de pedra',
    intro:
      'Chichén Itzá foi construída ao longo de séculos e chegou a ser uma das cidades mais poderosas da região Maia.',
    cards: [
      {
        title: 'Fundação',
        text: 'A cidade começou a se desenvolver por volta do ano 500 d.C. e cresceu bastante entre os séculos IX e XII.',
        icon: 'Hourglass',
      },
      {
        title: 'Período de apogeu',
        text: 'Seu período de maior poder e influência ocorreu aproximadamente entre os anos 800 e 1200 d.C.',
        icon: 'TrendingUp',
      },
      {
        title: 'Centro regional',
        text: 'Durante o apogeu, Chichén Itzá dominava grande parte do norte da Península de Yucatán, sendo um centro político e econômico.',
        icon: 'Crown',
      },
      {
        title: 'O declínio',
        text: 'Por volta do século XIII, a cidade entrou em declínio e perdeu importância política, sendo aos poucos abandonada como centro de poder.',
        icon: 'TrendingDown',
      },
    ],
  },
  {
    id: 'construtores',
    label: 'Quem Construiu',
    title: 'Quem Construiu Chichén Itzá',
    subtitle: 'O povo por trás da cidade',
    image: '/images/maya-culture.png',
    imageAlt: 'Representação da vida da civilização Maia',
    intro:
      'Chichén Itzá foi construída pelo povo Maia, uma das civilizações mais avançadas da América antiga.',
    cards: [
      {
        title: 'A civilização Maia',
        text: 'A cidade foi construída pela civilização Maia, um povo indígena que viveu na região da Mesoamérica.',
        icon: 'Users',
      },
      {
        title: 'Mesoamérica',
        text: 'Os Maias habitavam a Mesoamérica, região que inclui partes do atual México e da América Central.',
        icon: 'Map',
      },
      {
        title: 'Influência tolteca',
        text: 'Ao longo do tempo, a cidade recebeu influências de outros povos, como os Toltecas, o que se reflete em parte de sua arquitetura.',
        icon: 'Blocks',
      },
      {
        title: 'Conhecimento avançado',
        text: 'Os Maias eram muito habilidosos em astronomia, matemática, arquitetura e escrita, conhecimentos aplicados na construção da cidade.',
        icon: 'GraduationCap',
      },
    ],
  },
  {
    id: 'arquitetura',
    label: 'Arquitetura',
    title: 'Arquitetura',
    subtitle: 'Construções em pedra impressionantes',
    image: '/images/architecture.png',
    imageAlt: 'Colunas e estátua Chac Mool no Templo dos Guerreiros',
    intro:
      'A arquitetura de Chichén Itzá combina precisão, simbolismo e conhecimento astronômico em construções de pedra.',
    cards: [
      {
        title: 'Material de construção',
        text: 'As construções foram feitas principalmente de pedra calcária, material abundante na Península de Yucatán.',
        icon: 'Blocks',
      },
      {
        title: 'Estilos combinados',
        text: 'A cidade apresenta dois estilos arquitetônicos principais: o estilo Maia tradicional (Puuc) e o estilo influenciado pelos Toltecas.',
        icon: 'Layers',
      },
      {
        title: 'Precisão e simbolismo',
        text: 'Muitas construções foram posicionadas com base em observações astronômicas, unindo arquitetura, religião e ciência.',
        icon: 'Compass',
      },
      {
        title: 'A serpente emplumada',
        text: 'A figura da serpente emplumada, chamada de Kukulcán, aparece esculpida em várias construções como símbolo importante.',
        icon: 'Sparkles',
      },
    ],
  },
  {
    id: 'kukulcan',
    label: 'Pirâmide de Kukulcán',
    title: 'A Pirâmide de Kukulcán',
    subtitle: 'O famoso "El Castillo"',
    image: '/images/kukulcan-hero.png',
    imageAlt: 'Pirâmide de Kukulcán, também chamada de El Castillo',
    intro:
      'A Pirâmide de Kukulcán, também conhecida como "El Castillo", é o monumento mais famoso de Chichén Itzá.',
    cards: [
      {
        title: 'Os dois nomes',
        text: 'A pirâmide é chamada de "Pirâmide de Kukulcán" e também de "El Castillo", que significa "O Castelo" em espanhol.',
        icon: 'Landmark',
      },
      {
        title: 'Altura',
        text: 'A pirâmide tem aproximadamente 30 metros de altura, dominando a paisagem do sítio arqueológico.',
        icon: 'MoveVertical',
      },
      {
        title: 'Um calendário de pedra',
        text: 'A pirâmide tem 4 escadarias com 91 degraus cada. Somando os 4 lados (364) e o topo (1), chega-se a 365, o número de dias do ano solar.',
        icon: 'CalendarDays',
      },
      {
        title: 'Nove plataformas',
        text: 'A pirâmide é formada por 9 plataformas ou terraços empilhados, que também têm significado no calendário maia.',
        icon: 'Layers',
      },
    ],
  },
  {
    id: 'astronomia',
    label: 'Astronomia',
    title: 'Astronomia',
    subtitle: 'Observadores do céu',
    image: '/images/observatory.png',
    imageAlt: 'El Caracol, o observatório circular de Chichén Itzá',
    intro:
      'Os Maias eram grandes astrônomos e usavam o céu para organizar o tempo, a agricultura e a religião.',
    cards: [
      {
        title: 'O observatório El Caracol',
        text: 'A construção chamada "El Caracol" era usada como observatório astronômico. Seu nome significa "O Caracol", por causa da escada em espiral em seu interior.',
        icon: 'Telescope',
      },
      {
        title: 'Observação de Vênus',
        text: 'Os Maias observavam o planeta Vênus com muita atenção, pois ele tinha grande importância religiosa e servia para medir o tempo.',
        icon: 'Star',
      },
      {
        title: 'Previsão de eventos',
        text: 'Com suas observações, os Maias conseguiam prever eclipses e os movimentos do Sol, da Lua e dos planetas.',
        icon: 'Sun',
      },
      {
        title: 'Ciência e religião',
        text: 'A astronomia estava ligada à religião: os astros eram considerados divindades e orientavam cerimônias e festivais.',
        icon: 'Sparkles',
      },
    ],
  },
  {
    id: 'equinocio',
    label: 'O Equinócio',
    title: 'O Fenômeno do Equinócio',
    subtitle: 'A serpente de luz e sombra',
    image: '/images/equinox.png',
    imageAlt: 'Efeito da serpente de sombra na escadaria durante o equinócio',
    intro:
      'Durante os equinócios, a Pirâmide de Kukulcán protagoniza um espetáculo de luz e sombra planejado pelos Maias.',
    cards: [
      {
        title: 'Quando acontece',
        text: 'O fenômeno acontece durante os equinócios de primavera e de outono, duas vezes por ano.',
        icon: 'CalendarClock',
      },
      {
        title: 'A serpente de sombra',
        text: 'No fim da tarde, a luz do Sol cria triângulos de sombra na escadaria que formam a imagem de uma serpente descendo a pirâmide.',
        icon: 'Waves',
      },
      {
        title: 'Kukulcán descendo',
        text: 'A sombra se conecta a uma cabeça de serpente esculpida na base, dando a impressão de que Kukulcán, a serpente emplumada, desce à Terra.',
        icon: 'Sparkles',
      },
      {
        title: 'Engenharia planejada',
        text: 'Esse efeito não é por acaso: mostra o profundo conhecimento astronômico e arquitetônico dos Maias, que planejaram a pirâmide para isso.',
        icon: 'Compass',
      },
    ],
  },
  {
    id: 'matematica',
    label: 'Matemática',
    title: 'Matemática',
    subtitle: 'Números e o conceito de zero',
    image: '/images/calendar.png',
    imageAlt: 'Símbolos e números maias esculpidos em pedra',
    intro:
      'A matemática Maia era avançada e permitia cálculos complexos usados na astronomia e no calendário.',
    cards: [
      {
        title: 'Sistema vigesimal',
        text: 'Os Maias usavam um sistema de numeração de base 20 (vigesimal), diferente do nosso sistema de base 10 (decimal).',
        icon: 'Calculator',
      },
      {
        title: 'Pontos e barras',
        text: 'Os números eram representados com símbolos simples: um ponto valia 1 e uma barra valia 5.',
        icon: 'Hash',
      },
      {
        title: 'O conceito de zero',
        text: 'Os Maias foram um dos primeiros povos do mundo a usar o conceito de zero, representado por um símbolo em forma de concha.',
        icon: 'CircleDot',
      },
      {
        title: 'Para que servia',
        text: 'Esse conhecimento matemático era essencial para os cálculos astronômicos e para a construção dos calendários.',
        icon: 'Sigma',
      },
    ],
  },
  {
    id: 'calendario',
    label: 'Calendário',
    title: 'O Calendário Maia',
    subtitle: 'Medindo o tempo com precisão',
    image: '/images/calendar.png',
    imageAlt: 'Rodas do calendário maia com glifos',
    intro:
      'Os Maias criaram calendários muito precisos, combinando ciclos religiosos e solares.',
    cards: [
      {
        title: 'O calendário Haab',
        text: 'O Haab era o calendário solar, com 365 dias, dividido em 18 meses de 20 dias mais 5 dias considerados de azar.',
        icon: 'Sun',
      },
      {
        title: 'O calendário Tzolkin',
        text: 'O Tzolkin era o calendário sagrado, com 260 dias, usado principalmente para cerimônias religiosas.',
        icon: 'Moon',
      },
      {
        title: 'A Roda Calendárica',
        text: 'Ao combinar o Haab e o Tzolkin, os Maias formavam a "Roda Calendárica", um ciclo que se repetia a cada 52 anos.',
        icon: 'RefreshCw',
      },
      {
        title: 'Ligação com a pirâmide',
        text: 'A Pirâmide de Kukulcán reflete o calendário solar: seus 365 degraus representam os 365 dias do ano.',
        icon: 'CalendarDays',
      },
    ],
  },
  {
    id: 'religiao',
    label: 'Religião',
    title: 'Religião',
    subtitle: 'Deuses, rituais e o sagrado',
    image: '/images/cenote.png',
    imageAlt: 'Cenote Sagrado usado em rituais',
    intro:
      'A religião era central na vida dos Maias e influenciava a arquitetura, a astronomia e o cotidiano.',
    cards: [
      {
        title: 'Kukulcán, a serpente emplumada',
        text: 'Kukulcán era uma das divindades mais importantes: a serpente emplumada, associada ao vento, à água e à sabedoria.',
        icon: 'Sparkles',
      },
      {
        title: 'Chaac, o deus da chuva',
        text: 'Chaac era o deus da chuva, muito importante em uma região que dependia das chuvas para a agricultura.',
        icon: 'CloudRain',
      },
      {
        title: 'O Cenote Sagrado',
        text: 'O Cenote Sagrado era usado em rituais religiosos. Nele eram feitas oferendas de objetos preciosos aos deuses.',
        icon: 'Waves',
      },
      {
        title: 'Cerimônias',
        text: 'As cerimônias religiosas eram guiadas por sacerdotes e frequentemente ligadas a eventos astronômicos, como o equinócio.',
        icon: 'HandHeart',
      },
    ],
  },
  {
    id: 'construcoes',
    label: 'Construções Importantes',
    title: 'Construções Importantes',
    subtitle: 'Além da pirâmide',
    image: '/images/ballcourt.png',
    imageAlt: 'O Grande Jogo de Bola de Chichén Itzá',
    intro:
      'Chichén Itzá é formada por muitas construções, cada uma com uma função específica na vida da cidade.',
    cards: [
      {
        title: 'O Grande Jogo de Bola',
        text: 'É o maior campo de jogo de bola da Mesoamérica. Nele se praticava um jogo ritual usando uma bola de borracha e anéis de pedra nas paredes.',
        icon: 'CircleDashed',
      },
      {
        title: 'O Templo dos Guerreiros',
        text: 'O Templo dos Guerreiros é cercado por centenas de colunas esculpidas e abriga a famosa estátua conhecida como Chac Mool.',
        icon: 'Columns3',
      },
      {
        title: 'El Caracol',
        text: 'El Caracol é o observatório astronômico, com formato circular e uma escada em espiral no interior.',
        icon: 'Telescope',
      },
      {
        title: 'O Cenote Sagrado',
        text: 'O Cenote Sagrado é um grande poço natural usado para rituais religiosos e oferendas.',
        icon: 'Waves',
      },
    ],
  },
  {
    id: 'jogodebola',
    label: 'O Jogo de Bola',
    title: 'O Jogo de Bola',
    subtitle: 'Esporte, ritual e religião',
    image: '/images/ballcourt.png',
    imageAlt: 'Anel de pedra no Grande Jogo de Bola',
    intro:
      'O jogo de bola era muito mais que um esporte: tinha profundo significado religioso e social.',
    cards: [
      {
        title: 'Como era jogado',
        text: 'Os jogadores tentavam passar uma bola pesada de borracha por um anel de pedra fixado no alto das paredes, sem usar as mãos.',
        icon: 'CircleDashed',
      },
      {
        title: 'A bola de borracha',
        text: 'A bola era feita de borracha natural, material extraído de árvores da região, e podia ser bastante pesada.',
        icon: 'Circle',
      },
      {
        title: 'Significado ritual',
        text: 'O jogo tinha caráter religioso e simbólico, representando a luta entre forças opostas, como o dia e a noite.',
        icon: 'Sparkles',
      },
      {
        title: 'O maior da Mesoamérica',
        text: 'O campo de jogo de bola de Chichén Itzá é o maior já encontrado em toda a Mesoamérica.',
        icon: 'Ruler',
      },
    ],
  },
  {
    id: 'cultura',
    label: 'Cultura',
    title: 'Cultura',
    subtitle: 'Escrita, arte e sociedade',
    image: '/images/glyphs.png',
    imageAlt: 'Escrita e arte maia em relevos de pedra',
    intro:
      'A cultura Maia era rica em escrita, arte e organização social, deixando registros que estudamos até hoje.',
    cards: [
      {
        title: 'Escrita em glifos',
        text: 'Os Maias tinham um sistema de escrita completo, formado por glifos (símbolos) que representavam sons e ideias.',
        icon: 'Type',
      },
      {
        title: 'Arte e relevos',
        text: 'Eles produziam esculturas, relevos em pedra e pinturas que retratavam deuses, governantes e cenas do cotidiano.',
        icon: 'Palette',
      },
      {
        title: 'Sociedade organizada',
        text: 'A sociedade era dividida em classes, com governantes, sacerdotes, artesãos, comerciantes e agricultores.',
        icon: 'Users',
      },
      {
        title: 'Comércio',
        text: 'Chichén Itzá era um importante centro comercial, trocando produtos como sal, obsidiana, jade e tecidos.',
        icon: 'Store',
      },
    ],
  },
  {
    id: 'curiosidades',
    label: 'Curiosidades',
    title: 'Curiosidades',
    subtitle: 'Fatos surpreendentes',
    image: '/images/kukulcan-hero.png',
    imageAlt: 'Detalhe da Pirâmide de Kukulcán',
    intro:
      'Chichén Itzá guarda detalhes curiosos que revelam a genialidade dos seus construtores.',
    cards: [
      {
        title: 'O eco do aplauso',
        text: 'Ao bater palmas em frente à Pirâmide de Kukulcán, o eco produzido lembra o canto do pássaro quetzal, ave sagrada para os Maias.',
        icon: 'AudioLines',
      },
      {
        title: 'Pirâmide dentro da pirâmide',
        text: 'Dentro da Pirâmide de Kukulcán existe outra pirâmide menor e mais antiga, construída antes da atual.',
        icon: 'Boxes',
      },
      {
        title: 'Multidões no equinócio',
        text: 'Milhares de pessoas visitam Chichén Itzá durante os equinócios para ver a serpente de sombra na pirâmide.',
        icon: 'Users',
      },
      {
        title: 'Nome oficial da pirâmide',
        text: 'Apesar de ser popularmente chamada de "El Castillo", o nome ligado à divindade é "Pirâmide de Kukulcán".',
        icon: 'Info',
      },
    ],
  },
  {
    id: 'legado',
    label: 'Legado',
    title: 'Legado',
    subtitle: 'A herança que chegou até nós',
    image: '/images/maya-culture.png',
    imageAlt: 'Herança cultural Maia',
    intro:
      'Mesmo após séculos, o legado dos Maias e de Chichén Itzá continua vivo e admirado no mundo todo.',
    cards: [
      {
        title: 'Turismo mundial',
        text: 'Hoje Chichén Itzá é um dos sítios arqueológicos mais visitados do mundo, recebendo turistas de todos os continentes.',
        icon: 'Plane',
      },
      {
        title: 'Descendentes Maias',
        text: 'Os Maias não desapareceram: milhões de descendentes vivem hoje no México e na América Central, mantendo tradições e línguas.',
        icon: 'Users',
      },
      {
        title: 'Fonte de conhecimento',
        text: 'O estudo de Chichén Itzá ajuda a entender a astronomia, a matemática e a arquitetura de uma civilização avançada.',
        icon: 'GraduationCap',
      },
      {
        title: 'Símbolo cultural',
        text: 'A cidade se tornou um símbolo da cultura maia e do México, presente em livros, documentários e na identidade nacional.',
        icon: 'Flag',
      },
    ],
  },
  {
    id: 'conclusao',
    label: 'Conclusão',
    title: 'Conclusão',
    subtitle: 'O que aprendemos',
    image: '/images/equinox.png',
    imageAlt: 'Pirâmide de Kukulcán durante o equinócio',
    intro:
      'Chegamos ao fim da nossa jornada por Chichén Itzá. Vamos relembrar os principais pontos.',
    cards: [
      {
        title: 'Uma cidade genial',
        text: 'Chichén Itzá reúne história, ciência, arte e religião, mostrando o alto grau de conhecimento da civilização Maia.',
        icon: 'Sparkles',
      },
      {
        title: 'Ciência aplicada',
        text: 'A astronomia e a matemática dos Maias foram aplicadas em construções como a Pirâmide de Kukulcán e o observatório El Caracol.',
        icon: 'Telescope',
      },
      {
        title: 'Patrimônio a preservar',
        text: 'Como Patrimônio da Humanidade e Nova Maravilha do Mundo, Chichén Itzá deve ser preservada para as próximas gerações.',
        icon: 'ShieldCheck',
      },
      {
        title: 'Hora do quiz',
        text: 'Agora que você conheceu Chichén Itzá, teste seus conhecimentos no quiz. Todas as respostas estão no conteúdo que você estudou!',
        icon: 'HelpCircle',
      },
    ],
  },
]

export const APP_VERSION = '2.0.0'

export function getSectionById(id: string): Section | undefined {
  return sections.find((s) => s.id === id)
}

export function getSectionIndex(id: string): number {
  return sections.findIndex((s) => s.id === id)
}
