import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

import styles from './PaginaPadrao.module.scss';
import stylesTema from 'styles/Tema.module.scss';

interface Props {
  children?: ReactNode
}

function PaginaPadrao({ children }: Props) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>
          A Casa do Código e da Massa
        </div>
      </header>
      <div className={stylesTema.container}>
        <Outlet />
        {children}
      </div>
    </>
  );
}

export default PaginaPadrao;