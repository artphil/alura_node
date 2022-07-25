import { useState } from "react";

import { useListaParticipantes } from "../state/hook/useListaParticipantes";
import { useResultadoSorteio } from "../state/hook/useResultadoSorteio";

import Card from "../componentes/Card";

import './Sorteio.css'

function Sorteio() {

  const participantes = useListaParticipantes()
  const resultado = useResultadoSorteio()

  const [participanteDaVez, setParticipanteDaVez] = useState('')
  const [amigoSecreto, setAmigoSecreto] = useState('')

  const sortear = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault()
    if (resultado.has(participanteDaVez)) {
      setAmigoSecreto(resultado.get(participanteDaVez)!)
    }
  }

  return (<Card>

    <section className="sorteio">
      <h2>Quem vai tirar o papelzinho?</h2>
      <form onSubmit={sortear}>
        <select
          required
          name="participanteDaVez"
          id="participanteDaVez"
          value={participanteDaVez}
          placeholder='Selecione o seu nome'
          onChange={evento => setParticipanteDaVez(evento.target.value)}
        >
           <option>Selecione um participante</option>
          {participantes.map(participante =>
            <option key={participante}>{participante}</option>)
          }
        </select>
        <p>Clique em em sortear para ver quem é seu amigo secreto!</p>
        <button
          className="botao-sortear"
          disabled={!participanteDaVez}
        >Sortear</button>
      </form>
      {amigoSecreto &&
        <p className="resultado" role='alert'>{amigoSecreto}</p>
      }
      <footer className="sorteio">
        <img
          src="/imagens/aviao.png"
          className="aviao"
          alt="Um desenho de um avião de papel"
        />
      </footer>
    </section>
  </Card>
  );
}

export default Sorteio;