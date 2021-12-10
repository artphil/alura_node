import React, { Component } from "react";
import CardNota from "../CardNota";

import "./estilos.css"

class ListaDeNotas extends Component {
	render() {
		return (
			<ul className="lista-notas">
				{this.props.notas.map(({titulo, texto, categoria}, index) => {
					return (
						<li className="lista-notas_item" key={index}>
							<CardNota 
							indice={index}
							titulo={titulo} 
							texto={texto} 
              categoria={categoria}
							apagarNota={this.props.apagarNota}
							/>
						</li>
					);
				})}
			</ul>
		);
	}
}

export default ListaDeNotas;