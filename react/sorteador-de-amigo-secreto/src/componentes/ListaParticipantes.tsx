import { useListaParticipantes } from "../state/hook/useListaParticipantes";

function ListaParticipantes() {
  const participantes: string[] = useListaParticipantes()
  return (
    <ul>
      {participantes.map(participante => <li key={participante}>{participante}</li>)}
    </ul>
  );
}

export default ListaParticipantes;