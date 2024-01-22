import * as React from 'react';

import classNames from 'classnames';

import filtros from './filtros.json';

import style from './Filtros.module.scss';

type IOpcao = typeof filtros[0];

interface Props {
  filtro: number | null;
  setFiltro: React.Dispatch<React.SetStateAction<number | null>>;
}

function Filtros({ filtro, setFiltro }: Props) {
  function selecionarFiltro(opcao: IOpcao) {
    if (filtro === opcao.id) {
      setFiltro(null);
    } else {
      setFiltro(opcao.id);
    }
  }
  return (
    <div className={style.filtros}>
      {filtros.map((opcao: IOpcao) => (
        <button
          className={classNames({
            [style.filtros__filtro]: true,
            [style['filtros__filtro--ativo']]: filtro === opcao.id
          })}
          key={opcao.id}
          onClick={() => selecionarFiltro(opcao)}
        > {opcao.label}
        </button>
      ))}
    </div>
  );
}

export default Filtros;