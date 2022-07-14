import { useState } from "react";
import { useListaParticipantes } from "../state/hook/useListaParticipantes";
import { useResultadoSorteio } from "../state/hook/useResultadoSorteio";

function Sorteio() {

  const participantes = useListaParticipantes()
  const resultado = useResultadoSorteio()

  const [participanteDaVez, setParticipanteDaVez] = useState('')
  const [amigoSecreto, setAmigoSecreto] = useState('')

  const sortear = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault()
    if(resultado.has(participanteDaVez)){
      setAmigoSecreto(resultado.get(participanteDaVez)!)
    }
  }

  return ( 
    <section>
      <form onSubmit={sortear}>
        <select 
        required
        name="participanteDaVez" 
        id="participanteDaVez"
        value={participanteDaVez}
        placeholder='Selecione o seu nome'
        onChange={evento => setParticipanteDaVez(evento.target.value)}
        >
          {participantes.map(participante => 
          <option key={participante}>{participante}</option>)
          }
        </select>
      <button>Sortear</button>
      {amigoSecreto && <p role='alert'>{amigoSecreto}</p>}
      </form>
    </section>
   );
}

export default Sorteio;