import React from 'react';
import {Card, Col, CardImg, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap';
import './Producto.css'
import FichaProducto from './FichaProducto';

class Producto extends React.Component {
  render(){
    return(
      <Col sm="4" className="d-flex align-items-stretch">
        <Card className="Card mb-3 text-center" body outline color="dark">
          <CardImg src={this.props.imagen}/>
          <CardBody>
            <CardTitle>
              <b>{this.props.titulo}</b>
            </CardTitle>
            <CardSubtitle>
              <b>Valor: </b> ${this.props.precio}
            </CardSubtitle>
            <CardText>
              {this.props.descripcion}
            </CardText>
            {/* <Button className="Button">Comprar</Button> */}
          </CardBody>
          <FichaProducto props={this.props}/>
        </Card>
      </Col>
    );
  }
}

export default Producto;