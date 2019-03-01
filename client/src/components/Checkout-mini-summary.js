import PropTypes from 'prop-types';
import React from 'react'
import { ListGroup, ListGroupItem, Col, Row } from 'reactstrap';

const propTypes = { getCart: PropTypes.array.isRequired };

const CheckoutMiniSummary = ({ getCart, selectorTotalAmountCart, totalDelivery }) => (
  <ListGroup>
    <ListGroupItem>Order Summary</ListGroupItem>
    <ListGroupItem>
    {
      getCart.map(x=> 
        <Row key={x._id}>
          <Col xs='8'><p>x{x.quantity} {x.title}</p></Col>
          <Col xs='4'><p>{x.price}$</p></Col>
        </Row>
      )
    }
    </ListGroupItem>
    <ListGroupItem>
      <Row>
        <Col xs='8'><p>Subtotal</p></Col>
        <Col xs='4'><p>{selectorTotalAmountCart}$</p></Col>
      </Row>
      <Row>
        <Col xs='8'><p>Shipping</p></Col>
        <Col xs='4'><p>{totalDelivery}$</p></Col>
      </Row>
      <Row>
        <Col xs='8'><p>Tax</p></Col>
        <Col xs='4'><p>0$</p></Col>
      </Row>
    </ListGroupItem>
    <ListGroupItem>
      <Row>
        <Col xs='8'><p>Total</p></Col>
        <Col xs='4'><b style={{fontSize: '25px'}}>{selectorTotalAmountCart+totalDelivery}$</b></Col>
      </Row>
    </ListGroupItem>
  </ListGroup>
);

CheckoutMiniSummary.propTypes = propTypes;

export default CheckoutMiniSummary;
