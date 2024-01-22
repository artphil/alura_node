import { useEffect, useState } from 'react';
import Item from './item';
import cardapio from 'data/cardapio.json';

import style from './Itens.module.scss';

interface Props {
  busca: string,
  filtro: number | null,
  ordenador: string
}

function Itens(props: Props) {
  const { busca, filtro, ordenador } = props;
  const [lista, setLista] = useState(cardapio);

  function testaBusca(title: string) {
    const regex = new RegExp(busca, 'i');
    return regex.test(title);
  }

  function testaFiltro(id: number) {
    if (filtro !== null) return filtro === id;
    return true;
  }

  function ordenar(lista: typeof cardapio) {
    return {
      'porcao': lista.sort((a, b) => a.size > b.size ? 1 : -1),
      'qtd_pessoas': lista.sort((a, b) => a.serving > b.serving ? 1 : -1),
      'preco': lista.sort((a, b) => a.price > b.price ? 1 : -1),
    }[ordenador] || lista;
  }

  useEffect(() => {
    const novaLista = cardapio.filter(item => testaBusca(item.title) && testaFiltro(item.category.id));
    setLista(ordenar(novaLista));
  }, [busca, filtro, ordenador]);

  return (
    <div className={style.itens}>
      {lista.map(item => (
        <Item {...item} key={item.id} />
      ))}
    </div>
  );
}

export default Itens;