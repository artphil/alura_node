import { useNavigate } from 'react-router-dom';

import { PratoType } from 'types/CardapioTypes';

import style from './item.module.scss';
import TagsPrato from 'components/TagsPrato';


function Item(props: PratoType) {
  const { id, title, description, photo } = props;
  const navigate = useNavigate();

  return (
    <div className={style.item} onClick={() => navigate(`/prato/${id}`)}>
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