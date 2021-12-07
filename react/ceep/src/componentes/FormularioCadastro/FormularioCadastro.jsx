import React, { Component } from "react";

import "./estilos.css"

class FormularioCadastro extends Component {

	constructor(props) {
		super(props);
		this.titulo = "";
		this.texto = "";
	}

	_handleNudancaTitulo(evento) {
		evento.stopPropagation();
		this.titulo = evento.target.value;
	}

	_handleNudancaTexto(evento) {
		evento.stopPropagation();
		this.texto = evento.target.value;
	}

	_criarNota(evento) {
		evento.preventDefault();
		evento.stopPropagation();
		this.props.criarNota(this.titulo, this.texto)
	}

	render() {
		return (
			<form className="form-cadastro"
				onSubmit={this._criarNota.bind(this)}
			>
				<input
					className="form-cadastro_input"
					type="text"
					placeholder="Titulo"
					onChange={this._handleNudancaTitulo.bind(this)}
				/>
				<textarea
					rows={15}
					className="form-cadastro_input"
					placeholder="escreva sua nota..."
					onChange={this._handleNudancaTexto.bind(this)}
				/>
				<button className="form-cadastro_submit" >Criar Nota</button>
			</form>
		);
	}
}

export default FormularioCadastro;