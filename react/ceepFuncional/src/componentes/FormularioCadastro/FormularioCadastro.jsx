import React, { useState } from "react";

import "./estilos.css"

function FormularioCadastro({ criarNota }) {

  const [titulo, setTitulo] = useState("");
  const [texto, setTexto] = useState("");

  const handleNudancaTitulo = (evento) => {
    evento.stopPropagation();
    setTitulo(evento.target.value);
  }

  const handleNudancaTexto = (evento) => {
    evento.stopPropagation();
    setTexto(evento.target.value);
  }

  const novaNota = (evento) => {
    evento.preventDefault();
    evento.stopPropagation();
    criarNota(titulo, texto);
    setTitulo("")
    setTexto("");
  }

  return (
    <form className="form-cadastro"
      onSubmit={novaNota}
    >
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
        onChange={handleNudancaTexto}
        value={texto}
      />
      <button className="form-cadastro_submit" >Criar Nota</button>
    </form>
  );
}

export default FormularioCadastro;