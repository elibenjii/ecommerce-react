import PropTypes from 'prop-types';
import React from 'react';
import { Button } from 'reactstrap';

const propTypes = {
  dispatchSize: PropTypes.func.isRequired,
  sortSizeForFilter: PropTypes.string.isRequired
};

const availableSizes = ['All', 'XL', 'L', 'M', 'S', 'XS'];

const ItemsListFilterSize = ({dispatchSize, sortSizeForFilter}) => availableSizes.map(x=><Button outline={sortSizeForFilter !== x} color="secondary" onClick={()=> dispatchSize(x)} key={x}>{x}</Button>);

ItemsListFilterSize.propTypes = propTypes;

export default ItemsListFilterSize;
