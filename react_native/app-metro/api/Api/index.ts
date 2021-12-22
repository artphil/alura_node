
const estacoes: Estacao[] = [
  { id: 1, nome: 'Eldorado', info: 'Primeira estacão da linha 1' },
  { id: 2, nome: 'Cidade Industrial', info: 'Tranquila' },
  { id: 3, nome: 'Vila Oeste', info: 'Bagunça' },
]

class Estacao {
  id: number;
  nome: string;
  info: string;
}

export default estacoes;
export { Estacao };