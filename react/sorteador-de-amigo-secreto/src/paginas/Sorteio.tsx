import { useListaParticipantes } from "../state/hook/useListaParticipantes";

function Sorteio() {

  const participantes = useListaParticipantes()

  return ( 
    <section>
      <form>
        <select name="participanteDaVez" id="participanteDaVez">
          {participantes.map(participante => 
          <option key={participante}>{participante}</option>)
          }
        </select>
      </form>
    </section>
   );
}

export default Sorteio;