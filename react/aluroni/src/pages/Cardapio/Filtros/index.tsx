import * as React from 'react';

import filtros from './filtros.json';

import style from './Filtros.module.scss';

type IOpcao = typeof filtros[0];


function Filtros() {
  function selecionarFiltro(opcao: IOpcao) { }
  return (
    <div className={style.filtros}>
      {filtros.map((opcao: IOpcao) => (
        <button
          className={style.filtros__filtro}
          key={opcao.id}
          onClick={() => selecionarFiltro(opcao)}
        > {opcao.label}
        </button>
      ))}
    </div>
  );
}

export default Filtros;