import shuffle from "just-shuffle";
import { useSetRecoilState } from "recoil";
import { resultadoAmigoSecreto } from "../atom";
import { useListaParticipantes } from "./useListaParticipantes";

function useSorteador() {

  const participantes = useListaParticipantes()
  const setResultado = useSetRecoilState(resultadoAmigoSecreto)

  return () => {
    const totaDeParticipantes = participantes.length
    const embaralhados = shuffle(participantes)
    const resultado = new Map<string, string>()

    for (let index = 0; index < totaDeParticipantes; index++) {
      const indiceAmigo = index === (totaDeParticipantes - 1) ? 0 : index + 1;
      resultado.set(embaralhados[index], embaralhados[indiceAmigo])
    }
    setResultado(resultado)
  }
}

export default useSorteador;