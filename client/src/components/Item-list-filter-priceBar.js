import PropTypes from 'prop-types';
import React from 'react';
import Slider from 'react-rangeslider';
import '../style/rangeslider.min.css';
 
const propTypes = {
  actionPriceRangeFilter: PropTypes.func.isRequired,
  reducerPriceRangeFilter: PropTypes.number.isRequired,
};

const styles = {
  display: 'flex',
  justifyContent: 'space-around'
};

const ProductListFilterPriceBar = ({
  actionPriceRangeFilter, 
  reducerPriceRangeFilter
}) => (
    <div>
      <Slider
        max={200}
        step={1}
        value={reducerPriceRangeFilter}
        onChange={actionPriceRangeFilter}
      />
      <div style={styles}>
        <span>
          min 
        </span>
        <span>
          max
        </span>
      </div>
    </div>
  );

ProductListFilterPriceBar.propTypes = propTypes;

export default ProductListFilterPriceBar;