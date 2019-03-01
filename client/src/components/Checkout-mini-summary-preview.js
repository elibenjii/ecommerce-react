import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { ListGroup, ListGroupItem, Col, Row, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const propTypes = {
  getCart: PropTypes.array.isRequired,
  empty: PropTypes.bool.isRequired
};

const CheckoutMiniSummaryPreview = ({
  getCart, 
  empty
}) => {

  const styles = {
    fontSize: {
      fontSize: '13px'
    },
    centerButtons: {
      display:'flex',
      justifyContent: 'center',
      margin: '10px',
      textDecoration: 'none'
    }
  };

  const CardPreview =       
  <ListGroup>
    {
      !empty ?
    <Fragment>
     <ListGroupItem>
      {
        getCart.map(x=> 
          <Row key={x._id}>
            <Col xs='9'><p style={styles.fontSize}>x{x.quantity} {x.title} {x.price}$ size: {x.selectedSize} color: {x.selectedColor}</p></Col>
            <Col xs='3'><img style={{width: '20px'}} src={x.images[0]} alt="" /></Col>
          </Row>
  
        )
      }
      </ListGroupItem>
      <ListGroupItem>
  
          <Link to="/checkout" style={styles.centerButtons}><Button className='p-3 mb-2 bg-dark text-white' size="lg">Check out</Button></Link>
          <Link to="/cart" style={styles.centerButtons}><Button outline color="secondary" size="lg">View Cart</Button></Link>
  
      </ListGroupItem>
    </Fragment>
    :
    <ListGroupItem>
      Empty card
    </ListGroupItem>
    }
  </ListGroup>;


  return CardPreview;

}

CheckoutMiniSummaryPreview.propTypes = propTypes;

export default CheckoutMiniSummaryPreview;

