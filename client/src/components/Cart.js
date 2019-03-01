import PropTypes from 'prop-types';
import React from 'react'
import { Table, Container, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const propTypes = {
  getCart: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired,
  deleteFromCart: PropTypes.func.isRequired,
  deleteALlFromCart: PropTypes.func.isRequired,
};

const styles = {
  centerh1: {
    textAlign: 'center',
    padding: '30px'
  },
  images: {
    width: '30px'
  },
  checkoutBtn: {
    textAlign: 'right'
  },
  btnIncrement: {
    color: '#072a48',
    backgroundColor: 'white',
    border: 'solid',
    borderColor: '#072a48',
    width: '30px',
    cursor: 'pointer',
    borderWidth: '0.1ex'
  },
  btnDelete: {
    color: 'white',
    backgroundColor: '#072a48',
    border: 'solid',
    borderColor: '#072a48',
    width: '30px',
    cursor: 'pointer',
    borderWidth: '0.1ex'
  },
  containerPadding: {
    paddingTop: '70px',
    paddingBottom: '150px'
  }
}

const Cart = ({
  getCart, 
  addToCart, 
  deleteFromCart,
  deleteALlFromCart
}) => {


  const { centerh1, images, checkoutBtn, btnIncrement, btnDelete, containerPadding } = styles
  const reducePrice = (getCart.reduce((acc, x) => (acc + (x.quantity * x.price)), 0))

  return (
    <div style={containerPadding}>
      <Container>
        <h1 style={centerh1}>Cart</h1>
        <Table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {
            getCart.sort((a, b) => a._id === b._id ? a.selectedSize === b.selectedSize ? a.selectedColor < b.selectedColor : a.selectedSize < b.selectedSize : a._id < b._id).map(x => 
              <tr>
                <td>
                  <img style={images} src={x.images[0]} alt=""/>
                  <p><b>{x.title}</b> | {x.selectedSize} | {x.selectedColor}</p>
                </td>
                <td>
                  <p><b>{x.price}$</b></p>
                </td>
                <td>
                  <p><button style={btnIncrement} onClick={()=>addToCart(x)}>+</button><b>{' '+x.quantity+' '}</b><button style={btnIncrement} onClick={()=>deleteFromCart(x)}>-</button></p>
                </td>
                <td>
                  <p><button style={btnDelete} onClick={()=>deleteALlFromCart(x)}>x</button></p>
                </td>
              </tr>
            )
          }
            <tr>
              <td></td><td></td>
              <td>
                <b>Subtotal</b>
              </td>
              <td>
                <b>{reducePrice} $</b>
              </td>
            </tr>
            <tr>
              <td></td><td></td>
              <td>
                <b>Shipping</b>
              </td>
              <td>
                <b>3 $</b>
              </td>
            </tr>
            <tr>
              <td></td><td></td>
              <td>
                <b>Total</b>
              </td>
              <td>
                <b>{reducePrice + 3} $</b>
              </td>
            </tr>
          </tbody>
        </Table>
        <div style={checkoutBtn}>
          <Link to="/checkout"><Button >Check out</Button></Link>
        </div>
      </Container>
    </div>
  )
}

Cart.propTypes = propTypes;

export default Cart;
