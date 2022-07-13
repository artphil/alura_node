import shuffle from "just-shuffle";

function realizarSorteio(participantes: string[]) {
  const totaDeParticipantes = participantes.length
  const embaralhados = shuffle(participantes)
  const resultado = new Map<string, string>()
  for (let index = 0; index < totaDeParticipantes; index++) {
    const indiceAmigo = index === (totaDeParticipantes - 1) ? 0 : index + 1;
    resultado.set(embaralhados[index], embaralhados[indiceAmigo])
  }
  return resultado
}

export default realizarSorteio;