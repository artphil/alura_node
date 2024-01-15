import logo from 'assets/logo.svg';

import style from './item.module.scss';

function Item() {
  return (
    <div className={style.item}>
      <img className={style.item__imagem} src={logo} alt="Imagem do item" />
      <div className={style.item__descricao}>
        <div className={style.item__titulo}>
          <h2>Macarrão</h2>
          <p>descrição</p>
        </div>
        <div className={style.item__tags}>
          <div className={style.item__tipo}> <p >massa</p> </div>
          <div className={style.item__porcao}> 500g </div>
          <div className={style.item__qtdpessoas}> 2 pessoas </div>
          <div className={style.item__valor}> R$ 30 </div>
        </div>
      </div>
    </div>
  );
}

export default Item;