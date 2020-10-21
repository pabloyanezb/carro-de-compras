import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Producto from './components/Producto';
import Navegacion from './components/Navegacion'
import {Container, Row} from 'reactstrap';
import './App.css';
import {listaProductos} from './listaProductos.json'

class App extends React.Component {
	constructor(){
		super();

		this.state = {
			listaProductos
		};
	}
	render(){
		const arregloComponentes = this.state.listaProductos.map(
			(listaProductos, i) => {
				return(
					<Producto
						key={i}
						titulo={listaProductos.titulo}
						imagen={listaProductos.imagen}
						descripcion={listaProductos.descripcion}
						precio={listaProductos.precio}
						stock={listaProductos.stock}
					/>
				)
			}
		)
		return (
			<div>
				<Navegacion titulo="Mi primer sitio de compras en React"/>
				<Container>
					<Row>
						{arregloComponentes}
					</Row>
				</Container>
			</div>
		);
	}
}

export default App;
