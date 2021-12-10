import React from "react";
import CardNota from "../CardNota";

import "./estilos.css"

function ListaDeNotas({notas, apagarNota}) {
		return (
			<ul className="lista-notas">
				{notas.map(({titulo, texto}, index) => {
					return (
						<li className="lista-notas_item" key={index}>
							<CardNota 
							indice={index}
							titulo={titulo} 
							texto={texto} 
							apagarNota={apagarNota}
							/>
						</li>
					);
				})}
			</ul>
		);
}

export default ListaDeNotas;