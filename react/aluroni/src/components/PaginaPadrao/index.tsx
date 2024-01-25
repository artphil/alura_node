import { Outlet } from 'react-router-dom';

import styles from './PaginaPadrao.module.scss';


function PaginaPadrao() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>
          A Casa do Código e da Massa
        </div>
      </header>
      <div><Outlet /></div>
    </>
  );
}

export default PaginaPadrao;