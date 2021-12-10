import React, { Component } from "react";

import FormularioCadastro from "./componentes/FormularioCadastro";
import ListaDeNotas from "./componentes/ListaDeNotas";
import ListaDeCategorias from "./componentes/ListaDeCategorias";

import './assets/index.css';
import './assets/App.css';


class App extends Component {

  constructor() {
    super();
    this.state = {
      notas: [],
      categorias: [],
    };
  }

  criarNota(titulo, texto, categoria) {
    const novaNota = { titulo, texto, categoria };
    const novoArrayNotas = [...this.state.notas, novaNota];
    const novoEstado = { ...this.state, notas: novoArrayNotas }
    this.setState(novoEstado)
  }

  deletarNota(index) {
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index, 1);
    this.setState({ notas: arrayNotas })
  }

  adicionarCategoria(nomeCategoria) {
    const novoArrayCategoria = [ ...this.state.categorias, nomeCategoria ]
    const novoEstado = { ...this.state, categorias:novoArrayCategoria };
    this.setState(novoEstado);
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro 
        categorias={this.state.categorias}
        criarNota={this.criarNota.bind(this)} 
        />
        <main className="conteudo-principal">
          <ListaDeCategorias 
          adicionarCategoria={this.adicionarCategoria.bind(this)}
          categorias={this.state.categorias} 
          />
          <ListaDeNotas
            notas={this.state.notas}
            apagarNota={this.deletarNota.bind(this)}
          />
        </main>
      </section>
    );
  }
}

export default App;
