import Botao from "../Botao";
import Relogio from "./Relogio";
import style from './Cronometro.module.scss'
import { tempoParaSegundos } from "../../common/utils/time";
import { ITarefa } from "../../types/tarefas";
import { constants } from "buffer";
import { useEffect, useState } from "react";

interface Props {
  tarefa: ITarefa | undefined
  finalisaTarefa: () => void
}

function Cronometro({ tarefa, finalisaTarefa }: Props) {
  const [tempo, setTempo] = useState<number>();
  useEffect(() => {
    if (tarefa?.tempo) {
      setTempo(tempoParaSegundos(tarefa.tempo));
    }
  }, [tarefa]);
  function regressiva(contador: number = 0) {
    setTimeout(() => {
      if (contador > 0) {
        setTempo(contador - 1);
        return regressiva(contador - 1);
      }
      finalisaTarefa()
    }, 1000)
  }
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Esxolha um card e inicie o cronometro</p>
      <div className={style.relogioWrapper}>
        <Relogio tempo={tempo} />
      </div>
      <Botao
        onClick={() => regressiva(tempo)}
      >
        Começar
      </Botao>
    </div>
  );
}

export default Cronometro;