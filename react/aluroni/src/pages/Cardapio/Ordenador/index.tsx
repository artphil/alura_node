import style from './Ordenador.module.scss';
import opcoes from './opcoes.json';

function Ordenador() {
  return (
    <button
      className={style.ordenador}
    >
      <span>Ordenar Por</span>
      <div className={style.ordenador__options}>
        {opcoes.map(opcao => (
          <div className={style.ordenador__option} key={opcao.value}></div>
        ))}</div>
    </button>
  );
}

export default Ordenador;