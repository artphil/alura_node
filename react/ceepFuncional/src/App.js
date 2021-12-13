import React, { useState } from "react";

import FormularioCadastro from "./componentes/FormularioCadastro";
import ListaDeCategorias from "./componentes/ListaDeCategorias";
import ListaDeNotas from "./componentes/ListaDeNotas";

import './assets/index.css';
import './assets/App.css';


function App() {

  const [notas, setNotas] = useState([])
  const [categorias, setCategorias] = useState([])

  const criarNota = (titulo, texto, categoria) => {
    const novaNota = { titulo, texto, categoria };
    const novoArrayNotas = [...notas, novaNota];
    setNotas(novoArrayNotas)
  }

  const deletarNota = (index) => {
    let arrayNotas = this.notas;
    arrayNotas.splice(index, 1);
    setNotas(arrayNotas)
  }

  const criarCategoria = (nome) => {
    const novoArrayCategorias = [...categorias, nome];
    setCategorias(novoArrayCategorias)
  }

  const deletarCategoria = (index) => {
    let arrayCategorias = this.Categorias;
    arrayCategorias.splice(index, 1);
    setCategorias(arrayCategorias)
  }

  return (
    <section className="conteudo">
      <FormularioCadastro
        criarNota={criarNota}
        categorias={categorias}
      />
      <main className="conteudo-principal">
        <ListaDeCategorias
          categorias={categorias}
          adicionarCategoria={criarCategoria}
          removerCategoria={deletarCategoria}
        />
        <ListaDeNotas
          notas={notas}
          apagarNota={deletarNota}
        />

      </main>
    </section>
  );
}

export default App;
