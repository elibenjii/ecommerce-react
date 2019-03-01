import PropTypes from 'prop-types';
import React from 'react';
import { Badge } from 'reactstrap';

const propTypes = {
  reducerPriceRangeFilter: PropTypes.number.isRequired,
  sortArgsForFilter: PropTypes.string.isRequired,
  sortSizeForFilter: PropTypes.string.isRequired,
  keywordsForFilter: PropTypes.array.isRequired,
};

const ItemsListHtagsLabel = ({
  reducerPriceRangeFilter,
  sortSizeForFilter,
  keywordsForFilter,
  sortArgsForFilter
}) => {

  const priceLabel = keywordsForFilter.length> 0 && <Badge style={{padding: '10px', margin:'10px'}} color='success'>{`#Price<${reducerPriceRangeFilter} $`} </Badge>
  const sizeLabel = keywordsForFilter.length> 0 && <Badge style={{padding: '10px', margin:'10px'}} color='info'>{`#Size${sortSizeForFilter === 'All' ? 's' : ''}: ${sortSizeForFilter}`} </Badge>
  const sortLabel = keywordsForFilter.length> 0 && <Badge style={{padding: '10px', margin:'10px'}} color='danger'>{`#Sort: ${sortArgsForFilter}`} </Badge>
  const categoriesLabel = keywordsForFilter.map(x=><Badge style={{padding: '10px', margin:'10px'}} color='light' key={x}>{`#${x}`} </Badge>)
  return (
    <div style={{fontSize:'20px'}}>
      { sortLabel }
      { priceLabel }
      { sizeLabel }
      { categoriesLabel }
    </div>
  )
};

ItemsListHtagsLabel.propTypes = propTypes;

export default ItemsListHtagsLabel;
