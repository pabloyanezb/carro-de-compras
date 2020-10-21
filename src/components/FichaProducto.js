import React from 'react';
import {Modal, Container, Button, ModalHeader, ModalBody, ModalFooter, CardImg} from 'reactstrap';
import './FichaProducto.css';
import {listaCarrito} from '../listaCarrito.json';

class FichaProducto extends React.Component {
  constructor(props) {
    super();
    this.state = {
      modal: false,
      listaCarrito
    }
    this.toggle = this.toggle.bind(this);
    this.agregarCarrito = this.agregarCarrito.bind(this);
    
    console.log(props.props);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  agregarCarrito() {
    listaCarrito.push({
      "titulo": this.props.props.titulo,
      "precio": this.props.props.precio
    });
    this.setState(prevState => ({
      modal: !prevState.modal,
    }))
    console.log(listaCarrito.length)
  }

  render() {
    return(
      <Container>
        <Button onClick={this.toggle} color="outline-success">Ver Ficha</Button>
        <Modal isOpen={this.state.modal}>
          <ModalHeader>
            {this.props.props.titulo}
          </ModalHeader>
          <ModalBody>
            <CardImg src={this.props.props.imagen}/>
            {this.props.props.descripcion}
            <p>Este producto tiene un valor de <b>${this.props.props.precio}</b></p>
            <p>Hay <b>{this.props.props.stock}</b> unidades de este producto disponibles.</p>
          </ModalBody>
          <ModalFooter className="modalFooter">
            <Button color="success" onClick={this.agregarCarrito}>Agregar al carrito</Button>
            <Button color="secondary" onClick={this.toggle}>Volver atrás</Button>
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}
export default FichaProducto;