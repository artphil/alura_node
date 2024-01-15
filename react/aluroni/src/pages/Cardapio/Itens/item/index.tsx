import logo from 'assets/logo.svg';
import cardatio from '../itens.json';

import style from './item.module.scss';
import classNames from 'classnames';

type Props = typeof cardatio[0];

function Item(props: Props) {
  const { title, description, category, size, serving, price, photo } = props;
  return (
    <div className={style.item}>
      <img className={style.item__imagem} src={photo} alt={title} />
      <div className={style.item__descricao}>
        <div className={style.item__titulo}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className={style.item__tags}>
          <div className={classNames(
            style.item__tipo,
            style[`item__tipo__${category.label.toLowerCase()}`]
          )}> {category.label} </div>
          <div className={style.item__porcao}> {size} g </div>
          <div className={style.item__qtdpessoas}> {serving} pessoa{serving === 1 ? '' : 's'} </div>
          <div className={style.item__valor}> R$ {price} </div>
        </div>
      </div>
    </div >
  );
}

export default Item;