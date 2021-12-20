import React from 'react';

import { useParams } from 'react-router';

import ListaPost from '../componentes/ListaPost';


function SubCategoria() {
  const { subcategoria } = useParams();
  return ( 
    <div>
        <ListaPost url={`/posts?subcategoria=${subcategoria}`} />
    </div>
   );
}

export default SubCategoria;