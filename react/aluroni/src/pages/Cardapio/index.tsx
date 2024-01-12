import * as React from 'react';

import styles from "./Cardapio.module.scss";
import { ReactComponent as Logo } from "assets/logo.svg";
import Buscador from './Buscador';
import Filtros from './Filtros';


function Cardapio() {
  const [busca, setBusca] = React.useState("");

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
      <section className={styles.cardapio}>
        <h3 className={styles.cardapio__titulo}>Cardápio</h3>
        <Buscador busca={busca} setBusca={setBusca} />
        <div className={styles.cardapio__filtros}></div>
        <Filtros/>
      </section>
    </main>
  );
}

export default Cardapio;