import { createSelector } from 'reselect';

const getCart = state => state.cartReducer;
const totalItemsInCart = (cartReducer) => cartReducer.reduce((acc, x) => acc + x.quantity, 0);
const totalAmountCart = (cartReducer) => cartReducer.reduce((acc, x) => acc + (x.quantity * x.price), 0);

export const selectorTotalItemsCart = createSelector(
  getCart,
  totalItemsInCart
);

export const selectorTotalAmountCart = createSelector(
  getCart,
  totalAmountCart
);