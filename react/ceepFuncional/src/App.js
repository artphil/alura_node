import React, { useState } from "react";

import FormularioCadastro from "./componentes/FormularioCadastro";
import ListaDeNotas from "./componentes/ListaDeNotas";

import './assets/index.css';
import './assets/App.css';


function App() {

	const [notas, setNotas] = useState([])

	const criarNota = (titulo, texto) => {
		const novaNota = { titulo, texto };
		const novoArrayNotas = [...notas, novaNota];
		setNotas(novoArrayNotas)
	}

	const deletarNota = (index) => {
		let arrayNotas = this.state.notas;
		arrayNotas.splice(index, 1);
		setNotas(arrayNotas)
	}

	return (
		<section className="conteudo">
			<FormularioCadastro criarNota={criarNota} />
			<ListaDeNotas
				notas={notas}
				apagarNota={deletarNota}
			/>
		</section>
	);
}

export default App;
