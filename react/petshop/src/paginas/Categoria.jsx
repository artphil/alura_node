import React, { useEffect, useState } from 'react'

import { Route, Switch, useParams, useRouteMatch } from 'react-router'

import { busca } from '../api/api'
import '../assets/css/blog.css'
import ListaPost from '../componentes/ListaPost'
import ListaCategorias from '../componentes/ListaCategorias'
import { Link } from 'react-router-dom'
import SubCategoria from './SubCategoria'

function Categoria() {
  const { id } = useParams();
  const { url, path } = useRouteMatch();
  const [subCategorias, setSubCategorias] = useState([]);

  useEffect(() => {
    busca(`/categorias/${id}`, (categoria) => {
      setSubCategorias(categoria.subcategorias);
    })
  }, [id])

  return (
    <>
      <div className="container">
        <h2 className="titulo-pagina">Pet Notícias</h2>
      </div>
      <ListaCategorias />
      <ul className="lista-categorias container flex">
        {
          subCategorias.map(subCategoria => {
            return (
              <li className={`lista-categorias__categoria lista-categorias__categoria--${id}`}
                key={subCategoria}
              >
                <Link to={`${url}/${subCategoria}`}>
                  {subCategoria}
                </Link>
              </li>
            );
          })
        }
      </ul>
      <Switch>
        <Route exact path={`${path}/`}>
          <ListaPost url={`/posts?categoria=${id}`} />
        </Route>
        <Route path={`${path}/:subcategoria`}>
          <SubCategoria />
        </Route>
      </Switch>
    </>
  )
}

export default Categoria