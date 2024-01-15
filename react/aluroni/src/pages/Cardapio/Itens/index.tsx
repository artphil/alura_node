import Item from './item';
import itensData from './itens.json';

import style from './Itens.module.scss';

function Itens() {
  return (
    <div className={style.itens}>
      {itensData.map(item => (
        <Item {...item} key={item.id} />
      ))}
    </div>
  );
}

export default Itens;