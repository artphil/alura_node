import React, { useState } from "react";

import "./estilos.css"

function FormularioCadastro({ criarNota, categorias }) {

  const [titulo, setTitulo] = useState("");
  const [texto, setTexto] = useState("");
  const [categoria, setCategoria] = useState("");

  const handleNudancaTitulo = (evento) => {
    evento.stopPropagation();
    setTitulo(evento.target.value);
  }

  const handleMudancaTexto = (evento) => {
    evento.stopPropagation();
    setTexto(evento.target.value);
  }

  const handleMudancaCategoria = (evento) => {
    evento.stopPropagation();
    setCategoria(evento.target.value);
  }

  const novaNota = (evento) => {
    evento.preventDefault();
    evento.stopPropagation();
    criarNota(titulo, texto, categoria);
    setTitulo("");
    setTexto("");
    setCategoria("Sem Categoria");
  }

  return (
    <form className="form-cadastro"
      onSubmit={novaNota}
    >
      <select
        className="form-cadastro_input"
        onChange={handleMudancaCategoria}
        value={categoria}
      >
        <option>Sem Categoria</option>
        {categorias.map((categoria, index) => {
          return <option key={index}>{categoria}</option>
        })}
      </select>
      <input
        className="form-cadastro_input"
        type="text"
        placeholder="Titulo"
        onChange={handleNudancaTitulo}
        value={titulo}
      />
      <textarea
        rows={15}
        className="form-cadastro_input"
        placeholder="escreva sua nota..."
        onChange={handleMudancaTexto}
        value={texto}
      />
      <button className="form-cadastro_submit" >Criar Nota</button>
    </form>
  );
}

export default FormularioCadastro;