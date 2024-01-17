import { useEffect, useState } from 'react';
import Item from './item';
import cardapio from './itens.json';

import style from './Itens.module.scss';

interface Props {
  busca: string,
  filtro: number | null,
  ordenador: string
}

function Itens(props: Props) {
  const { busca, filtro } = props;
  const [lista, setLista] = useState(cardapio);

  function testaBusca(title: string) {
    const regex =  new RegExp(busca, 'i')
    return regex.test(title)
  }

    function testaFiltro(id: number) {
      if (filtro !== null) return filtro === id;
      return true;
    }

  useEffect(() => {
    const novaLista = cardapio.filter(item => testaBusca(item.title) && testaFiltro(item.category.id));
    setLista(novaLista);
  }, [busca,filtro]);

  return (
    <div className={style.itens}>
      {lista.map(item => (
        <Item {...item} key={item.id} />
      ))}
    </div>
  );
}

export default Itens;