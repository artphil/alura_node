import * as React from 'react';

import styles from "./Cardapio.module.css";
import {ReactComponent as Logo} from "../../assets/logo.svg";


function Cardapio() {
  return ( 
    <main>
      <nav className={styles.menu}>
        <Logo />
      </nav>
    </main>
   );
}

export default Cardapio;