import { useNavigate } from "react-router-dom";
import { useListaParticipantes } from "../state/hook/useListaParticipantes";
import { useSorteador } from "../state/hook/useSorteador";

import './Rodape.css'


function Rodape() {

  const participantes = useListaParticipantes()
  const sortear = useSorteador()

  const navegarPara = useNavigate()
  const iniciar = () => {
    sortear()
    navegarPara('/sorteio')
  }

  return (
    <footer className="rodape-configuracoes">
      <button
        className="botao"
        disabled={participantes.length < 3}
        onClick={iniciar}
      >
        Iniciar brincadeira
      </button>
      <img src="/imagens/sacolas.png" alt="Sacolas de compras" />
    </footer>
  );
}

export default Rodape;