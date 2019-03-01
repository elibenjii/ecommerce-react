import PropTypes from 'prop-types';
import React from 'react'
import ItemsListFilterKeywords from './Item-list-filter-keywords'
import ItemsListFilterSize from './Items-list-filter-size'
import ProductListFilterPriceBar from './Item-list-filter-priceBar'

const propTypes = {
  gender: PropTypes.string.isRequired, 
  dispatchSize: PropTypes.func.isRequired,
  sortSizeForFilter: PropTypes.string.isRequired,
  keywordsSelectAction: PropTypes.func.isRequired,
  keywordsForFilter: PropTypes.array.isRequired, 
  categoriesProducts: PropTypes.object.isRequired,
  actionPriceRangeFilter: PropTypes.func.isRequired,
  reducerPriceRangeFilter: PropTypes.number.isRequired,
  oneKeywordForFilter: PropTypes.func.isRequired,
  actionFillFilters: PropTypes.func.isRequired
};

const styles = {
  subTitles:{
    color: 'grey',
    marginTop:'20px'
  }
}

const ItemsListSidebar = ({
  gender, 
  dispatchSize, 
  sortSizeForFilter, 
  keywordsSelectAction, 
  keywordsForFilter, 
  categoriesProducts,
  actionPriceRangeFilter,
  reducerPriceRangeFilter,
  oneKeywordForFilter,
  actionFillFilters
}) => (
  <div>
    <h4 style={styles.subTitles}>Categories</h4>
      <ItemsListFilterKeywords 
        gender={gender} 
        keywordsForFilter={keywordsForFilter}
        keywordsSelectAction={keywordsSelectAction}
        categoriesProducts={categoriesProducts}
        oneKeywordForFilter={oneKeywordForFilter}
        actionFillFilters={actionFillFilters}
      />
    <h4 style={styles.subTitles}>Size</h4>
      <ItemsListFilterSize 
        dispatchSize={dispatchSize} 
        sortSizeForFilter={sortSizeForFilter}
      />
    <h4 style={styles.subTitles}>Price {`< ${reducerPriceRangeFilter}$`}</h4>    
      <ProductListFilterPriceBar 
        actionPriceRangeFilter={actionPriceRangeFilter}
        reducerPriceRangeFilter={reducerPriceRangeFilter}
      />
  </div>
)

ItemsListSidebar.propTypes = propTypes;

export default ItemsListSidebar;

