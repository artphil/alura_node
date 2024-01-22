import { useState } from 'react';

import classNames from 'classnames';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

import opcoes from './opcoes.json';

import style from './Ordenador.module.scss';
import { IOpcoesOrdenador } from 'types/IOpcoesOrdenador';

interface Props {
  ordenador: IOpcoesOrdenador;
  setOrdenador: React.Dispatch<React.SetStateAction<IOpcoesOrdenador>>;
}

function Ordenador({ordenador, setOrdenador}: Props) {
  const [aberto, setAberto] = useState(false);
  const nomeOrdenador = ordenador && opcoes.find( opcao => opcao.value === ordenador)?.name;

  return (
    <button
      className={classNames({
        [style.ordenador]:true,
        [style['ordenador--ativo']]: ordenador !== '',
      })}
      onClick={() => setAberto(!aberto)}
      onBlur={() => setAberto(false)}
    >
      <span>{nomeOrdenador || 'Ordenar Por'}</span>
      {aberto ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} />}
      <div className={classNames({
        [style.ordenador__options]: true,
        [style['ordenador__options--ativo']]: aberto,
      })}>
        {opcoes.map(opcao => (
          <div 
            className={style.ordenador__option} key={opcao.value}
            onClick={() => setOrdenador(opcao.value as IOpcoesOrdenador)}
          >
            {opcao.name}
          </div>
        ))}</div>
    </button>
  );
}

export default Ordenador;