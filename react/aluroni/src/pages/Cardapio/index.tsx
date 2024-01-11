import * as React from 'react';

import styles from "./Cardapio.module.css";
import {ReactComponent as Logo} from "assets/logo.svg";


function Cardapio() {
  return ( 
    <main>
      <nav className={styles.menu}>
        <Logo />
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>
          A Casa do Código e da Massa
        </div>
      </header>
    </main>
   );
}

export default Cardapio;