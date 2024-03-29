import React, { Component } from "react";
import CardNota from "../CardNota";

import "./estilos.css"

class ListaDeNotas extends Component {

  constructor() {
    super();
    this.state = { notas: [] };
    this._novasNotas = this._novasNotas.bind(this)
  }

  componentDidMount() {
    this.props.notas.inscrever(this._novasNotas);
  }

  componentWillUnmount() {
    this.props.notas.desinscrever(this._novasNotas);
  }

  _novasNotas(notas) {
    this.setState({ ...this.state, notas });
  }

  render() {
    return (
      <ul className="lista-notas">
        {this.state.notas.map(({ titulo, texto, categoria }, index) => {
          return (
            <li className="lista-notas_item" key={index}>
              <CardNota
                indice={index}
                titulo={titulo}
                texto={texto}
                categoria={categoria}
                apagarNota={this.props.notas.apagarNota.bind(this.props.notas)}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;