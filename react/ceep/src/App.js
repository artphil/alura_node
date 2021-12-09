import React, { Component } from "react";

import FormularioCadastro from "./componentes/FormularioCadastro";
import ListaDeNotas from "./componentes/ListaDeNotas";

import './assets/index.css';
import './assets/App.css';


class App extends Component {

	constructor() {
		super();
		this.state = {
			notas: []
		};
	}

	criarNota(titulo, texto) {
		const novaNota = {titulo, texto};
		const novoArrayNotas = [...this.state.notas, novaNota];
		const novoState = {notas: novoArrayNotas} 
		this.setState(novoState)
	} 

	deletarNota(index){
		let arrayNotas = this.state.notas;
		arrayNotas.splice(index,1);
		this.setState({notas:arrayNotas})
	}

	render() {
		return (
			<section className="conteudo">
				<FormularioCadastro criarNota={this.criarNota.bind(this)}/>
				<ListaDeNotas 
				notas={this.state.notas}
				apagarNota={this.deletarNota.bind(this)}
				/>
			</section>
		);
	}
}

export default App;
