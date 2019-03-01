import React from 'react';
import { connect } from 'react-redux';
import { addToCart, deleteFromCart, deleteALlFromCart } from '../actions/CartActions';
import Cart from '../components/Cart';

const CartContainer = props => <Cart {...props} />;

const mapStateToProps = state => ({ getCart: state.cartReducer })

const mapDispatchToProps = dispatch => ({
  addToCart: x => dispatch(addToCart(x)),  
  deleteFromCart: x => dispatch(deleteFromCart(x)),
  deleteALlFromCart: x => dispatch(deleteALlFromCart(x))
})

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer)
