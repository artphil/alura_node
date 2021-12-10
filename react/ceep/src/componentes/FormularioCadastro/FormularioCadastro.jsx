import React, { Component } from "react";

import "./estilos.css"

class FormularioCadastro extends Component {

  constructor(props) {
    super(props);
    this.titulo = "";
    this.texto = "";
    this.categoria = "Sem Categoria"
    this.state = { categorias: [] }
    this._novasCategorias = this._novasCategorias.bind(this)
  }

  componentDidMount() {
    this.props.categorias.inscrever(this._novasCategorias);
  }

  componentWillUnmount() {
    this.props.categorias.desinscrever(this._novasCategorias);
  }

  _novasCategorias(categorias) {
    this.setState({ ...this.state, categorias });
  }

  _handleMudancaTitulo(evento) {
    evento.stopPropagation();
    this.titulo = evento.target.value;
  }

  _handleMudancaTexto(evento) {
    evento.stopPropagation();
    this.texto = evento.target.value;
  }

  _handleMudancaCategoria(evento) {
    evento.stopPropagation();
    this.categoria = evento.target.value;
  }

  _criarNota(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    this.props.notas.adicionarNota(this.titulo, this.texto, this.categoria)
  }

  render() {
    return (
      <form className="form-cadastro"
        onSubmit={this._criarNota.bind(this)}
      >
        <select
          className="form-cadastro_input"
          onChange={this._handleMudancaCategoria.bind(this)}
        >
          <option>Sem Categoria</option>
          {this.state.categorias.map((categoria, index) => {
            return <option key={index}>{categoria}</option>
          })}
        </select>
        <input
          className="form-cadastro_input"
          type="text"
          placeholder="Titulo"
          onChange={this._handleMudancaTitulo.bind(this)}
        />
        <textarea
          rows={15}
          className="form-cadastro_input"
          placeholder="escreva sua nota..."
          onChange={this._handleMudancaTexto.bind(this)}
        />
        <button className="form-cadastro_submit" >Criar Nota</button>
      </form>
    );
  }
}

export default FormularioCadastro;