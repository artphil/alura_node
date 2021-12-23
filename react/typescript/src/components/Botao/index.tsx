import { ReactNode } from 'react';

import style from './Botao.module.scss'

interface Props {
  children?: ReactNode,
  type?: 'button' | 'submit' | 'reset' | undefined,
  onClick?: () => void
}

function Botao({ children , type, onClick }: Props) {
  const tipo = type ? type : 'button'
  return (
    <button type={tipo} className={style.botao} onClick={onClick}>
      {children}
    </button>
  );
}

export default Botao;