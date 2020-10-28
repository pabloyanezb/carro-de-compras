import React from 'react';
import {Modal, Container, Button, ModalHeader, ModalBody, ModalFooter, CardImg} from 'reactstrap';
import './FichaProducto.css';
import {listaCarrito} from '../listaCarrito.json';

class FichaProducto extends React.Component {
  constructor(props) {
    super();
    this.state = {
      modal: false,
      listaCarrito,
      stock: parseInt(props.props.stock),
      disabled: false,
      text: "Agregar al carrito"
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
    this.setState(prevState => ({
      modal: !prevState.modal,
    }));
    if (this.state.stock !== 0) {
      this.setState(prevState => ({
        stock: prevState.stock - 1,
      }), () => {
        console.log(this.state.stock)
        if (this.state.stock === 0) {
          this.setState(() => ({
            disabled: true,
            text: "Sin stock :("
          }));
        }
      });
      listaCarrito.push({
        "titulo": this.props.props.titulo,
        "precio": this.props.props.precio
      });

      const cantidadProductos = document.getElementById("cantidadProductos");
      cantidadProductos.innerText = listaCarrito.length;

    }
  }

  render() {
    return(
      <Container>
        <Button onClick={this.toggle} color="outline-success">Ver Ficha</Button>
        <Modal isOpen={this.state.modal} className="modal-sm">
          <ModalHeader>
            {this.props.props.titulo}
          </ModalHeader>
          <ModalBody className="pb-0">
            <CardImg src={this.props.props.imagen}/>
            {this.props.props.descripcion}
            <p id="precio"><b>${this.props.props.precio}</b></p>
            <p>Hay <b>{this.state.stock}</b> unidades en stock</p>
          </ModalBody>
          <ModalFooter className="modalFooter">
            <Button color="success" onClick={this.agregarCarrito} disabled={this.state.disabled}> {this.state.text} </Button>
            <Button color="secondary" onClick={this.toggle}>Volver atrás</Button>
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}
export default FichaProducto;