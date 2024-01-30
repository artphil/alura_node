import { useLocation, useNavigate } from 'react-router-dom';

import { PratoType } from 'types/CardapioTypes';

import styles from './Prato.module.scss';
import TagsPrato from 'components/TagsPrato';


function Prato() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { prato } = state as { prato: PratoType };

  return (
    <>
      <button className={styles.voltar}
        onClick={() => navigate(-1)}
      >{'< Voltar'}</button>
      <section className={styles.container}>
        <h1 className={styles.titulo}>{prato.title}</h1>
        <div className={styles.imagem}><img src={prato.photo} alt={prato.title} /></div>
        <div className={styles.conteudo}>
          <p className={styles.conteudo__descricao}>{prato.description}</p>
          <TagsPrato {...prato} />
        </div>
      </section >
    </>
  );
}

export default Prato;