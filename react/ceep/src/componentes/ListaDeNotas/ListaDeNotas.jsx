import React, { Component } from "react";
import CardNota from "../CardNota";

import "./estilos.css"

class ListaDeNotas extends Component {
	render() {
		return (
			<ul className="lista-notas">
				{this.props.notas.map(({titulo, texto}, index) => {
					return (
						<li className="lista-notas_item" key={index}>
							<CardNota titulo={titulo} texto={texto} />
						</li>
					);
				})}
			</ul>
		);
	}
}

export default ListaDeNotas;