import React from 'react';

import "./estilos.css"
import {ReactComponent as DeleteSVG} from '../../assets/imagens/delete.svg'

function CardNota({titulo, texto, categoria, indice, apagarNota}) { 
		return (
			<section className="card-nota"> 
				<header className="card-nota_cabecalho">
					<h3 className="card-nota_titulo">{titulo}</h3>
					<DeleteSVG onClick={() => {apagarNota(indice)}} />
          <h4>{categoria}</h4>
				</header>
				<p className="card-nota_texto">{texto}</p>
			</section>
		);
}

export default CardNota;