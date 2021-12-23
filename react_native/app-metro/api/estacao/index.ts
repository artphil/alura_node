
const estacoes: TEstacao[] = [
  {
    id: 1,
    nome: 'Eldorado',
    desc: 'Rua Jequitibás, 530 - Eldorado',
    info: 'Estação 1',
    arredores: [
      'Estação de Integração de Ônibus Metropolitanos',
      'Itaú Power Shopping',
      'Big Shopping',
    ],
  },
  {
    id: 2,
    nome: 'Cidade Industrial',
    desc: 'Rua Cláudia Neves, 85 - Camargos',
    info: 'Tranquila',
    arredores: [
      'Itaú Power Center',
    ],
  },
  {
    id: 3,
    nome: 'Vila Oeste',
    desc: 'Terceira estação',
    info: 'Bagunça',
    arredores: [
      'CEFET/MG (Campus 2)',
      'DETRAN',
      'Igreja João XXIII',
      'Igreja Batista da Vila Oeste',
      'Igreja Pentecostal Deus é Amor',
    ],
  },
  {
    id: 4, 
    nome: 'Gameleira', 
    desc: 'Rua Craveiro Lopes, 617 - Gameleira', 
    info: 'Puc Minas Expominas',
    arredores: [
    'Hospital Sarah Kubistchek',
    'Hospital Galba Veloso',
    'Fundação Ezequiel Dias',
    '5º Batalhão da Polícia Militar',
    'Centro de Formação Profissional Paulo de Tarso (SENAI)',
    ],
  },
  {
    id: 5, 
    nome: 'Calafate', 
    desc: 'Rua Guaratã, 1.052 – Calafate', 
    info: 'Nenhum',
    arredores: [
      'Hospital Infantil Santa Terezinha',
      'PAM Padre Eustáquio',
      'Complexo da Polícia Militar',
      'Igreja de São José do Calafate',
      'Igreja de Jesus Cristo dos Santos dos Últimos Dias',
      'Centro de Integração e Apoio ao Portador de Deficiência Rogéria Amato (SESI)',
    ],
  },
]

export { estacoes };