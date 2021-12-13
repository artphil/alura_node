import React, { useState } from "react";

import "./estilos.css"

function ListaDeCategorias({ categorias, adicionarCategoria, deletarCategoria }) {

  const [categoria, setCategoria] = useState('');

  const handleEventoInput = (evento) => {
    if (evento.key === "Enter") {
      adicionarCategoria(categoria);
      setCategoria('');
    }

  }
  return (
    <section className="lista-categorias">
      <ul className="lista-categorias_lista">{
        categorias.map((categoria, index) => {
          return <li key={index} className="lista-categorias_item">{categoria}</li>
        })
      }</ul>
      <input
        type="text"
        className="lista-categorias_input"
        placeholder="Adicionar Categoria"
        value={categoria}
        onChange={evento => {
          setCategoria(evento.target.value)
        }}
        onKeyUp={handleEventoInput}
      />
    </section>
  );
}

export default ListaDeCategorias;