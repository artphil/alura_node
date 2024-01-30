import classNames from 'classnames';

import { PratoType } from 'types/CardapioTypes';

import style from './item.module.scss';
import TagsPrato from 'components/TagsPrato';


function Item(props: PratoType) {
  const { title, description, category, size, serving, price, photo } = props;
  return (
    <div className={style.item}>
      <img className={style.item__imagem} src={photo} alt={title} />
      <div className={style.item__descricao}>
        <div className={style.item__titulo}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <TagsPrato {...props} />
      </div>
    </div >
  );
}

export default Item;