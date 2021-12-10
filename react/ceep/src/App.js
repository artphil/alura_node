import React, { Component } from "react";

import FormularioCadastro from "./componentes/FormularioCadastro";
import ListaDeNotas from "./componentes/ListaDeNotas";
import ListaDeCategorias from "./componentes/ListaDeCategorias";

import './assets/index.css';
import './assets/App.css';
import Categorias from "./dados/Categorias";
import ArrayDeNotas from "./dados/Notas";


class App extends Component {

  constructor() {
    super();
    this.notas = new ArrayDeNotas();
    this.categorias = new Categorias();
  }

  // criarNota(titulo, texto, categoria) {
  //   const novaNota = { titulo, texto, categoria };
  //   const novoArrayNotas = [...this.state.notas, novaNota];
  //   const novoEstado = { ...this.state, notas: novoArrayNotas }
  //   this.setState(novoEstado)
  // }

  // deletarNota(index) {
  //   let arrayNotas = this.state.notas;
  //   arrayNotas.splice(index, 1);
  //   this.setState({ notas: arrayNotas })
  // }

  // adicionarCategoria(nomeCategoria) {
  //   const novoArrayCategoria = [ ...this.state.categorias, nomeCategoria ]
  //   const novoEstado = { ...this.state, categorias:novoArrayCategoria };
  //   this.setState(novoEstado);
  // }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro 
        categorias={this.categorias}
        notas={this.notas} 
        />
        <main className="conteudo-principal">
          <ListaDeCategorias 
          categorias={this.categorias} 
          />
          <ListaDeNotas
            notas={this.notas}
          />
        </main>
      </section>
    );
  }
}

export default App;
