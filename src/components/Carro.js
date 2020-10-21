import React from 'react';
import {Popover, PopoverHeader, PopoverBody, Table, Badge, Button} from 'reactstrap';
import './Carro.css'
import {listaCarrito} from '../listaCarrito.json';

class Carro extends React.Component {
  constructor() {
    super();
    this.state = {
      popoverOpen: false,
      listaCarrito,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      popoverOpen: !prevState.popoverOpen
    }));
  }

  total() {
    let total = this.state.listaCarrito.reduce(function(sum, i) {
      return sum + parseInt(i.precio*1000);
    },0);
    return Intl.NumberFormat("de-DE").format(total);
  }

  render() {
    const arregloCarrito = this.state.listaCarrito.map(
      (listaCarrito, i) => {
        return (
          <tr key={i}>
            <td>{(i += 1)}</td>
            <td>{listaCarrito.titulo}</td>
            <td>${listaCarrito.precio}</td>
          </tr>
        )
      }
    )
    return (
      <div>
        <Button id="Popover1" color="secondary">
          <span className="material-icons">
            shopping_cart
          </span>
          <Badge color="success" id="cantidadProductos">
            {listaCarrito.length}
          </Badge>
        </Button>
        <Popover id="popover" target="Popover1" placement="bottom" isOpen={this.state.popoverOpen} toggle={this.toggle}>
          <PopoverHeader>Lista de compras</PopoverHeader>
          <PopoverBody>
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Producto</th>
                  <th>Precio</th>
                </tr>
              </thead>
              <tbody>
                {arregloCarrito}
              </tbody>
              <tfoot>
                <tr>
                  <th>Total:</th>
                  <td></td>
                  <td>${this.total()} CLP</td>
                </tr>
              </tfoot>
            </Table>
          </PopoverBody>
        </Popover>
      </div>
    )
  }
}
export default Carro;
